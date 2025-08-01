// This file defines the database object, which stores the data sets and allows to query them.

"use strict";

var db = {
  currentDate: new Date(),

  countries: {},
  // Code => ID

  countriesCodes: {},
  // ID => Code

  countryNames: {},
  // ID => Name

  countryNamesReverse: {},
  // Name => ID

  countryGroupIds: [],
  // List of IDs of country groups

  countryGroupRestIds: [],
  // List of IDs of automatically generated countries

  countriesWithData: [],
  // List of IDs of countries with data file

  countriesForOptions: {},
  // Code => Name of countries with data

  countriesForOptionsAlphabetic: {},
  // Code => Name of countries with data, sorted alphabetic

  otherSeriesName: "Other",
  unknownSeriesName: "Unknown",

  globalCountryId: null, // will be set in initialize()
  globalRestCountryId: 100,
  globalRestCountryName: "Global Rest",

  globalRestAllCarsDatasetsByDate: {},
  globalRestEvDatasetsByDate: {},

  dsTypes:
  { "AllCarsByBrand": 1
  , "AllCarsTotal": 2
  , "ElectricCarsByModel": 3
  , "ElectricCarsByBrand": 4
  , "ElectricCarsTotal": 5
  },

  datasets: [],
  // All datasets of the database.
  // Format of entries:
  // - country:     country enum value
  // - countryName: country display name
  // - monthString: month in the form "2020-01"
  // - perQuarter:  boolean
  // - year:        integer
  // - month:       integer 1..12
  // - dsType:      dataset dsType enum value
  // - isEvs:       boolean
  // - source:      source URL
  // - data:        object of brand -> number of sales or
  //                object of model -> number of sales

  companyGroupNames: [],
  // List of company group names.
  // Sorted alphabetical.

  companiesByBrand: {},
  // Brand -> company.

  companies: [],
  // List of company groups and brands which do not belong to a company group.
  // Sorted alphabetical.

  brands: [],
  // List of brands used in the datasets.
  // Sorted alphabetical.

  models: [],
  // List of electric car models used in the datasets.
  // Format: e.g. "Tesla|Model 3".
  // Sorted alphabetical.

  initialize: function() {
    // fill country variables
    let id = 0;
    for (const code in countryNamesByCode) {
      const name = countryNamesByCode[code];
      this.countries[code] = id;
      this.countriesCodes[id] = code;
      this.countryNames[id] = name;
      this.countryNamesReverse[name] = id;
      id++;
    }
    this.globalCountryId = this.countries["global"];
    this.countryGroupRestIds.push(this.globalRestCountryId);
    this.countryNames[this.globalRestCountryId] = this.globalRestCountryName;
    for (const i in countryGroups) {
      const code = countryGroups[i];
      const id = this.countries[code];
      this.countryGroupIds.push(id);
    }
  },

  insert: function(country, dateString, dsType, source, data) {
    // Adds the data for one counry and one month or one quarter and one dataset type.
    // - country:     country enum value
    // - dateString:  month in the form "2020-01" or quarter in the form "2020-Q1"
    // - dsType:      dataset dsType enum value
    // - source:      source URL
    // - data:        number of sales or
    //                object of brand -> number of sales or
    //                object of model -> number of sales

    if (!this.countriesWithData.includes(country))
      this.countriesWithData.push(country);

    let dataset =
    { country: country
    , countryName: this.countryNames[country]
    , dsType: dsType
    , isEvs: dsType > this.dsTypes.AllCarsTotal
    , source: source
    , year: parseInt(dateString.substr(0, 4))
    };
    if (dateString.substr(5, 1) == 'Q') {
      dataset.perQuarter = true;
      dataset.data = {};
      for (const key in data) {
        const val = data[key] / 3;
        if (val > 0)
          dataset.data[key] = val;
      }
      let firstMonth = this.quarterToMonth(parseInt(dateString.substr(6, 1)));
      for (let i = 0; i < 3; i++) {
        let newDataset = this.cloneObject(dataset);
        newDataset.month = firstMonth + i;
        newDataset.monthString = this.formatMonth(newDataset.year, newDataset.month);
        this.datasets.push(newDataset);
        this.addToGlobalRest(newDataset);
      }
    } else {
      dataset.monthString = dateString;
      dataset.month = parseInt(dateString.substr(5, 2));
      dataset.data = data;
      this.datasets.push(dataset);
      this.addToGlobalRest(dataset);
    }

    if (dsType == this.dsTypes.ElectricCarsByModel) {
      for (const model in data) {
        const parts = model.split("|", 2);
        const brand = parts[0];
        if (!this.brands.includes(brand))
          this.brands.push(brand);
        if (!this.models.includes(model))
          this.models.push(model);
      }
    } else {
      for (const brand in data) {
        if (!this.brands.includes(brand))
          this.brands.push(brand);
      }
    }
  },

  addToGlobalRest: function(dataset) {
    let sum = 0;
    for (const key in dataset.data) {
      sum += dataset.data[key];
    }
    if (dataset.country == this.globalCountryId) {
      let newDataset = {};
      newDataset.country = this.globalRestCountryId;
      newDataset.countryName = this.globalRestCountryName;
      newDataset.isEvs = dataset.isEvs;
      if (dataset.isEvs)
        newDataset.dsType = this.dsTypes.ElectricCarsTotal;
      else
        newDataset.dsType = this.dsTypes.AllCarsTotal;
      newDataset.monthString = dataset.monthString;
      newDataset.year = dataset.year;
      newDataset.month = dataset.month;
      if (dataset.country == this.globalCountryId)
        newDataset.source = dataset.source;
      newDataset.data = {"other": sum};
      this.datasets.push(newDataset);
      if (dataset.isEvs)
        this.globalRestEvDatasetsByDate[dataset.monthString] = newDataset;
      else
        this.globalRestAllCarsDatasetsByDate[dataset.monthString] = newDataset;
    } else if (!this.countryGroupIds.includes(dataset.country)) {
      if (dataset.isEvs) {
        if (dataset.monthString in this.globalRestEvDatasetsByDate) {
          this.globalRestEvDatasetsByDate[dataset.monthString].data["other"] -= sum;
        }
      } else {
        if (dataset.monthString in this.globalRestAllCarsDatasetsByDate) {
          this.globalRestAllCarsDatasetsByDate[dataset.monthString].data["other"] -= sum;
        }
      }
    }
  },

  finalizeDataLoading: function() {
    // This should be called once after all country data files are loaded.

    // Process company groups
    let brandsInAGroup = [];
    for (const groupName in companyGroups) {
      this.companyGroupNames.push(groupName);
      this.companies.push(groupName);
      const brands = companyGroups[groupName];
      for (const i in brands) {
        const brand = brands[i];
        this.companiesByBrand[brand] = groupName;
        brandsInAGroup.push(brand);
      }
    }
    for (const i in this.brands) {
      const brand = this.brands[i];
      if (!brandsInAGroup.includes(brand)) {
        this.companies.push(brand);
        this.companiesByBrand[brand] = brand;
      }
    }

    // Sort lists, which are used in UI
    this.models.sort(function(a, b) {
      return a.localeCompare(b);
    });
    this.brands.sort(function(a, b) {
      return a.localeCompare(b);
    });
    this.companies.sort(function(a, b) {
      return a.localeCompare(b);
    });
    this.companyGroupNames.sort(function(a, b) {
      return a.localeCompare(b);
    });

    // Prepare country options
    for (const i in countryGroups) {
      const code = countryGroups[i];
      const id = this.countries[code];
      const name = this.countryNames[id];
      this.countriesForOptionsAlphabetic[code] = name;
    }
    let countryNamesAlphabetic = [];
    for (const i in this.countriesWithData) {
      const id = this.countriesWithData[i];
      const name = this.countryNames[id];
      const code = this.countriesCodes[id];
      this.countriesForOptions[code] = name;
      if (this.countryGroupIds.includes(id))
        continue;
      countryNamesAlphabetic.push(name);
    }
    countryNamesAlphabetic.sort(function(a, b) {
      return a.localeCompare(b);
    });
    for (const i in countryNamesAlphabetic) {
      const name  = countryNamesAlphabetic[i];
      const id = this.countryNamesReverse[name];
      const code = this.countriesCodes[id];
      this.countriesForOptionsAlphabetic[code] = name;
    }
  },

  getValueOrDefault: function(value, defaultValue) {
    if (value === undefined)
      return defaultValue;
    return value;
  },

  cloneObject: function(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  formatMonth: function(year, month) {
    return year + "-" + ("0" + month).substr(-2);
  },

  formatQuarter: function(year, quarter) {
    return year + " Q" + quarter;
  },

  unformatQuarter: function(text) {
    // Converts "2024 Q1" to "q2024-1"
    const parts = text.split(" ");
    return "q" + parts[0] + "-" + parts[1].substr(1);
  },

  monthToQuarter: function(month) {
    return Math.ceil(month / 3);
  },

  quarterToMonth: function(quarter) {
    return 1 + (quarter - 1) * 3;
  },

  formatSeriesNameAndCategory: function(text) {
    if (Number.isInteger(text))
      return text;
    else
      return text.replace("|", " ");
  },

  joinItemList: function(list, maxDisplayCount, moreText = "more items") {
    const count = list.length;
    if (count == 0)
      return "";
    if (count == 1)
      return list[0];
    if (count > maxDisplayCount) {
      list = list.slice(0, maxDisplayCount - 1);
      const hiddenCount = count - maxDisplayCount + 1;
      list.push(hiddenCount + " " + moreText);
    }
    return list.slice(0, -1).join(", ") + " and " + list.slice(-1);
  },

  metrics:
  { "all": "all-metrics"
  , "salesAll": "all-sales"
  , "shareAll": "all-share"
  , "salesElectric": "electric-sales"
  , "shareElectric": "electric-share"
  , "ratioElectric": "electric-ratio"
  , "ratioElectricWithinCompanyOrBrand": "brand-electric-ratio"
  },

  xProperties:
  { "all": "allxprop"
  , "month": "month"
  , "monthAvg3": "3-month-avg"
  , "monthAvg12": "12-month-avg"
  , "quarter": "quarter"
  , "year": "year"
  , "country": "country"
  , "company": "company"
  , "brand": "brand"
  , "model": "model"
  },

  timeSpanOptions:
  { "auto": "auto"
  , "all": "all-time"
  , "last3m": "3m"
  , "last6m": "6m"
  , "last13m": "13m"
  , "last1y": "1y"
  , "last2y": "2y"
  , "last3y": "3y"
  , "last4y": "4y"
  , "last5y": "5y"
  , "last6y": "6y"
  },

  countryOptions:
  { "all": "all-countries"
  , "combine": "combine-countries"
  },

  detailLevels:
  { "total": "total"
  , "company": "split-companies"
  , "brand": "split-brands"
  , "model": "split-models"
  },

  companyOptions:
  { "all": "all-companies"
  },

  brandOptions:
  { "all": "all-brands"
  },

  modelOptions:
  { "all": "all-models"
  },

  views:
  { "barChart": "bar-chart"
  , "lineChart": "line-chart"
  , "table": "table"
  , "sources": "sources"
  },

  maxSeriesOptions:
  { "limit5": {mostRelevant: true, count: 5}
  , "limit10": {mostRelevant: true, count: 10}
  , "limit15": {mostRelevant: true, count: 15}
  , "limit20": {mostRelevant: true, count: 20}
  , "limit30": {mostRelevant: true, count: 30}
  , "top5": {mostRelevant: false, count: 5}
  , "top10": {mostRelevant: false, count: 10}
  , "top15": {mostRelevant: false, count: 15}
  , "top20": {mostRelevant: false, count: 20}
  , "top30": {mostRelevant: false, count: 30}
  },

  urlEncode: function(str) {
    if (str)
      return str.replaceAll(" ", "-");
  },

  isByMonth: function(chartConfig) {
    if (chartConfig.xProperty) {
      const xProperties = chartConfig.xProperty.split(",");
      for (let i in xProperties) {
        if (![this.xProperties.month, this.xProperties.monthAvg3, this.xProperties.monthAvg12].includes(xProperties[i]))
          return false;
      }
      return true;
    }
    return false;
  },

  isByQuarter: function(chartConfig) {
    return chartConfig.xProperty == this.xProperties.quarter;
  },

  isByYear: function(chartConfig) {
    return chartConfig.xProperty == this.xProperties.year;
  },

  isTimeXProperty: function(chartConfig) {
    return this.isByMonth(chartConfig) || this.isByQuarter(chartConfig) || this.isByYear(chartConfig);
  },

  isMultiXProperties: function(chartConfig) {
    return chartConfig.xProperty == this.xProperties.all || (chartConfig.xProperty && chartConfig.xProperty.includes(","));
  },

  isCompanyBrandModelXProperty: function(chartConfig) {
    return [this.xProperties.company, this.xProperties.brand, this.xProperties.model].includes(chartConfig.xProperty);
  },

  isMultiCountry: function(chartConfig) {
    return chartConfig.country == this.countryOptions.all || (chartConfig.country && chartConfig.country.includes(","));
  },

  isCombinedCountry: function(chartConfig) {
    return this.getCountries(chartConfig).includes(this.countryOptions.combine);
  },

  isAllCountries: function(chartConfig) {
    return this.getCountries(chartConfig).includes(this.countryOptions.all);
  },

  isSingleOrCombinedCountry: function(chartConfig) {
    return !this.isMultiCountry(chartConfig) || this.isCombinedCountry(chartConfig);
  },

  getCountries: function(chartConfig) {
    if (chartConfig.country == null)
      return [];
    return chartConfig.country.split(",");
  },

  getRealMetrics: function(chartConfig) {
    if (chartConfig.metric == this.metrics.all) {
      let result = [];
      for (let i in this.metrics) {
        const metric = this.metrics[i];
        if (metric == this.metrics.all)
          continue;
        if (metric == this.metrics.ratioElectric && [this.xProperties.company, this.xProperties.brand].includes(chartConfig.xProperty))
          continue;
        if ([this.metrics.shareElectric, this.metrics.shareAll, this.metrics.ratioElectricWithinCompanyOrBrand].includes(metric) && this.isTimeXProperty(chartConfig) && chartConfig.view == this.views.table)
          continue;
        result.push(this.metrics[i]);
      }
      return result;
    }
    return chartConfig.metric.split(",");
  },

  isMultiMetric: function(chartConfig) {
    return chartConfig.metric == this.metrics.all || (chartConfig.metric && chartConfig.metric.includes(","));
  },

  getCompanies: function(chartConfig) {
    if (chartConfig.company == null)
      return [];
    return chartConfig.company.split(",");
  },

  getBrands: function(chartConfig) {
    if (chartConfig.brand == null)
      return [];
    return chartConfig.brand.split(",");
  },

  getModels: function(chartConfig) {
    if (chartConfig.model == null)
      return [];
    return chartConfig.model.split(",");
  },

  getChartParams: function(chartConfig = null) {
    let result = {};

    // country
    {
      let param = {};
      param.name = "country";
      param.title = "Country";
      param.allOptions = this.getCountryOptions(chartConfig, true);
      param.options = this.getCountryOptions(chartConfig, false);
      if (chartConfig == null || chartConfig.isRegularHomeTile || !this.isMultiMetric(chartConfig))
        param.unfoldKey = this.countryOptions.all;
      param.excludeOnUnfoldAndTitle = [this.countryOptions.all, this.countryOptions.combine];
      param.noMultiSelectOptions = [this.countryOptions.all];
      param.disableUnfoldOption = this.countryOptions.combine;
      param.additiveOptions = [this.countryOptions.combine];
      param.defaultOption = this.countryOptions.all;
      param.showInTitle = true;
      param.showAsFilter = chartConfig == null || chartConfig.xProperty != this.xProperties.country;
      param.allowMultiSelection = true;
      param.showAlwaysAsActive = true;
      param.enableDropdownSearch = true;
      result[param.name] = param;
    }

    // metric
    {
      let param = {};
      param.name = "metric";
      param.title = "Metric";
      param.allOptions = this.getMetricOptions(chartConfig);
      param.options = param.allOptions;
      if (chartConfig != null && !this.isSingleOrCombinedCountry(chartConfig))
        param.excludeOnUnfoldAndTitle = [this.metrics.ratioElectricWithinCompanyOrBrand];
      param.unfoldKey = this.metrics.all;
      param.noMultiSelectOptions = [this.metrics.all];
      param.defaultOption = this.metrics.all;
      param.showInTitle = true;
      param.showAsFilter = true;
      param.allowMultiSelection = true;
      param.showAlwaysAsActive = true;
      result[param.name] = param;
    }

    // x-axis property
    {
      let param = {};
      param.name = "xProperty";
      param.title = "X-property";
      param.options = {};
      param.options[this.xProperties.month] = "Monthly";
      param.options[this.xProperties.monthAvg3] = "3-month Average";
      param.options[this.xProperties.monthAvg12] = "12-month Average";
      param.options[this.xProperties.quarter] = "Quarterly";
      param.options[this.xProperties.year] = "Yearly";
      if (chartConfig == null || [this.metrics.salesAll, this.metrics.salesElectric, this.metrics.ratioElectric].includes(chartConfig.metric))
        param.options[this.xProperties.country] = "By Country";
      if (chartConfig == null || ![this.metrics.ratioElectric].includes(chartConfig.metric))
        param.options[this.xProperties.company] = "By Company";
      if (chartConfig == null || chartConfig.metric != this.metrics.ratioElectric)
        param.options[this.xProperties.brand] = "By Brand";
      if (chartConfig == null || [this.metrics.salesElectric, this.metrics.shareElectric].includes(chartConfig.metric))
        param.options[this.xProperties.model] = "By Model";
      param.options[this.xProperties.all] = "All x-properties";
      param.allOptions = param.options;
      param.unfoldKey = this.xProperties.all;
      param.noMultiSelectOptions = [this.xProperties.all];
      param.defaultOption = this.xProperties.quarter;
      param.alwaysAddToUrl = true;
      param.showAsFilter = true;
      param.showInTitle = chartConfig == null || [this.xProperties.monthAvg3, this.xProperties.monthAvg12].includes(chartConfig.xProperty) || chartConfig.unfoldParamName == param.name;
      param.allowMultiSelection = true;
      param.showAlwaysAsActive = true;
      param.breakLineAfterFilter = true;
      result[param.name] = param;
    }

    // time span
    {
      let param = {};
      param.name = "timeSpan";
      param.title = "Time span";
      param.showAsFilter = chartConfig == null || !this.isByYear(chartConfig);
      param.options = {};
      param.options[this.timeSpanOptions.auto] = "Auto Time Span";
      param.options[this.timeSpanOptions.all] = "All Time";
      param.allOptions = param.options;
      this.setTimeSpanParamOptions(param, chartConfig);
      param.defaultOption = this.timeSpanOptions.auto;
      param.showInTitle = chartConfig == null || !this.isTimeXProperty(chartConfig);
      result[param.name] = param;
    }

    // company/brand/model detail level
    {
      let param = {};
      param.name = "detailLevel";
      param.title = "Detail level";
      param.showAsFilter = chartConfig == null || !this.isCompanyBrandModelXProperty(chartConfig);
      param.options = {};
      if (chartConfig == null || (chartConfig.metric != this.metrics.ratioElectricWithinCompanyOrBrand && (![this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric) || !this.isSingleOrCombinedCountry(chartConfig)))) {
        param.options[this.detailLevels.total] = "Total";
        param.defaultOption = this.detailLevels.total;
      } else {
        param.defaultOption = this.detailLevels.company;
      }
      if (chartConfig == null || !this.isCompanyBrandModelXProperty(chartConfig)) {
        param.options[this.detailLevels.company] = "Split Companies";
        param.options[this.detailLevels.brand] = "Split Brands";
        if (chartConfig == null || ![this.metrics.salesAll, this.metrics.shareAll, this.metrics.ratioElectricWithinCompanyOrBrand].includes(chartConfig.metric))
          param.options[this.detailLevels.model] = "Split Models";
      }
      param.allOptions = param.options;
      result[param.name] = param;
    }

    // company
    {
      let param = {};
      param.name = "company";
      param.title = "Company";
      param.options = {};
      param.options[this.companyOptions.all] = "All Companies";
      param.showAsFilter = chartConfig == null || (chartConfig.xProperty != this.xProperties.company && chartConfig.detailLevel != this.detailLevels.total);
      if (chartConfig != null) {
        if (chartConfig.xProperty == this.xProperties.brand || chartConfig.detailLevel == this.detailLevels.brand) {
          for (const i in this.companyGroupNames) {
            const company = this.companyGroupNames[i];
            param.options[company] = company;
          }
        } else {
          for (const i in this.companies) {
            const company = this.companies[i];
            if (company != "other")
              param.options[company] = company;
          }
        }
      }
      param.allOptions = param.options;
      param.defaultOption = this.companyOptions.all;
      param.excludeOnUnfoldAndTitle = [this.companyOptions.all];
      param.noMultiSelectOptions = [this.companyOptions.all];
      param.showInTitle = chartConfig == null || ((chartConfig.brand == this.brandOptions.all || chartConfig.company == chartConfig.brand) && !this.combineMetricAndCompanyOrBrandInTitle(chartConfig));
      param.allowMultiSelection = true;
      param.enableDropdownSearch = true;
      result[param.name] = param;
    }

    const filterContainsMultipleBrands = chartConfig == null || chartConfig.company == this.companyOptions.all || this.getCompanies(chartConfig).length > 1 || this.getBrands(chartConfig).length > 1 || this.companyGroupNames.includes(chartConfig.company);

    // brand
    {
      let param = {};
      param.name = "brand";
      param.title = "Brand";
      param.showAsFilter = chartConfig == null || (([this.detailLevels.brand, this.detailLevels.model].includes(chartConfig.detailLevel) || chartConfig.xProperty == this.xProperties.model) && filterContainsMultipleBrands);
      param.options = {};
      param.options[this.brandOptions.all] = "All Brands";
      if (chartConfig != null && chartConfig.brand != null && (param.showAsFilter || !filterContainsMultipleBrands)) {
        for (const i in this.brands) {
          const brand = this.brands[i];
          if (brand == "other")
            continue;
          if (chartConfig == null || chartConfig.company == this.companyOptions.all || this.getCompanies(chartConfig).includes(this.companiesByBrand[brand]))
            param.options[brand] = brand;
        }
      } else {
        for (const i in this.brands) {
          const brand = this.brands[i];
          if (brand == "other")
            continue;
          param.options[brand] = brand;
        }
      }
      param.allOptions = param.options;
      param.defaultOption = this.brandOptions.all;
      param.excludeOnUnfoldAndTitle = [this.brandOptions.all];
      param.noMultiSelectOptions = [this.brandOptions.all];
      param.showInTitle = chartConfig == null || (chartConfig.brand != chartConfig.company && !this.combineMetricAndCompanyOrBrandInTitle(chartConfig));
      param.allowMultiSelection = true;
      param.enableDropdownSearch = true;
      result[param.name] = param;
    }

    // model
    {
      let param = {};
      param.name = "model";
      param.title = "Model";
      param.showAsFilter = chartConfig == null || (chartConfig.detailLevel == this.detailLevels.model && (chartConfig.company != this.companyOptions.all || chartConfig.brand != this.brandOptions.all));
      param.options = {};
      param.options[this.modelOptions.all] = "All Models";
      if (chartConfig != null && chartConfig.model != null && param.showAsFilter) {
        let models = [];
        let brands = [];
        if (chartConfig.brand != this.brandOptions.all) {
          brands = this.getBrands(chartConfig);
        } else {
          const companies = this.getCompanies(chartConfig);
          const companyGroupsKeys = Object.keys(companyGroups);
          for (const i in companies) {
            const company = companies[i];
            const j = companyGroupsKeys.indexOf(company);
            if (j != -1)
              brands = brands.concat(companyGroups[companyGroupsKeys[j]]);
            else
              brands.push(company);
          }
        }
        let hasOther = false;
        for (const i in this.models) {
          const parts = this.models[i].split("|", 2);
          const brand = parts[0];
          const model = parts[1];
          if (brands.includes(brand)) {
            if (model == "other")
              hasOther = true;
            else
              models.push(model);
          }
        }
        models.sort(function(a, b) {
          return a.localeCompare(b);
        });
        for (const i in models) {
          param.options[models[i]] = models[i];
        }
        if (hasOther)
          param.options["other"] = this.otherSeriesName;
      } else {
        for (const i in this.models) {
          const parts = this.models[i].split("|", 2);
          const model = parts[1];
          param.options[model] = model;
        }
      }
      param.allOptions = param.options;
      param.defaultOption = this.modelOptions.all;
      param.excludeOnUnfoldAndTitle = [this.modelOptions.all];
      param.noMultiSelectOptions = [this.modelOptions.all];
      param.allowMultiSelection = true;
      param.enableDropdownSearch = true;
      result[param.name] = param;
    }

    // max series
    {
      let param = {};
      param.name = "maxSeries";
      param.title = "Max. series/categories";
      param.options = {};
      for (const i in this.maxSeriesOptions) {
        const option = this.maxSeriesOptions[i];
        if (option.mostRelevant)
          param.options[i] = "Most Relevant " + option.count;
        else
          param.options[i] = "Top " + option.count;
      }
      param.allOptions = param.options;
      param.defaultOption = "limit10";
      param.showAsFilter = chartConfig == null || this.getNumberOfSeries(chartConfig) > 5 || !this.isTimeXProperty(chartConfig);
      result[param.name] = param;
    }

    // view
    {
      let param = {};
      param.name = "view";
      param.title = "View";
      param.options = {};
      const allowLineChart = chartConfig == null || this.isTimeXProperty(chartConfig);
      if (this.isBarChartAllowed(chartConfig) || !allowLineChart)
        param.options[this.views.barChart] = "Bar Chart";
      if (allowLineChart)
        param.options[this.views.lineChart] = "Line Chart";
      param.options[this.views.table] = "Table";
      param.options[this.views.sources] = "Sources";
      param.allOptions = param.options;
      param.defaultOption = Object.keys(param.options)[0];
      result[param.name] = param;
    }

    return result;
  },

  setTimeSpanParamOptions: function(param, chartConfig) {
    if (chartConfig == null || !param.showAsFilter)
      return;
    // last xx months/years
    if (!this.isByQuarter(chartConfig)) {
      param.options[this.timeSpanOptions.last3m] = "Last 3 Months";
      param.options[this.timeSpanOptions.last6m] = "Last 6 Months";
    }
    if ([this.xProperties.month, this.xProperties.monthAvg3].includes(chartConfig.xProperty))
      param.options[this.timeSpanOptions.last13m] = "Last 13 Months";
    else
      param.options["1y"] = this.getTimeSpanOptionText("1y");
    for (let i = 2; i <= 6; i++) {
      if (i == 5 && [this.xProperties.month, this.xProperties.monthAvg3].includes(chartConfig.xProperty))
        break;
      param.options[i + "y"] = this.getTimeSpanOptionText(i + "y");
    }
    let currentYear = this.currentDate.getFullYear();
    let currentMonth = 1 + this.currentDate.getMonth();
    currentMonth--;
    if (currentMonth < 1) {
      currentMonth = 12;
      currentYear--;
    }
    // single month
    if (!this.isByQuarter(chartConfig) && !this.isByMonth(chartConfig)) {
      let year = currentYear;
      let month = currentMonth;
      for (let i = 0; i < 4; i++) {
        param.options["m" + this.formatMonth(year, month)] = this.formatMonth(year, month);
        month--;
        if (month < 1) {
          month = 12;
          year--;
        }
      }
    }
    // single quarter
    if (![this.xProperties.month, this.xProperties.monthAvg3, this.xProperties.quarter].includes(chartConfig.xProperty)) {
      let year = currentYear;
      let quarter = this.monthToQuarter(currentMonth);
      for (let i = 0; i < 4; i++) {
        param.options["q" + year + "-" + quarter] = this.formatQuarter(year, quarter);
        quarter--;
        if (quarter < 1) {
          quarter = 4;
          year--;
        }
      }
    }
    // single year
    let year = currentYear;
    for (let i = 0; i <= 6; i++) {
      param.options["y" + year] = year;
      year--;
    }
    // Allow to select a time span which is not included in the suggested options
    if (chartConfig.timeSpan != null && param.options[chartConfig.timeSpan] == null)
      param.options[chartConfig.timeSpan] = this.getTimeSpanOptionText(chartConfig.timeSpan);
  },

  isTimeSpanValid: function(timeSpan) {
    if ((timeSpan.startsWith("m") || timeSpan.startsWith("q") || timeSpan.startsWith("y")) && Number.isInteger(parseInt(timeSpan[1])))
      return true;
    if (timeSpan.endsWith("y") && Number.isInteger(Number.parseInt(timeSpan[0])))
      return true;
    return false;
  },

  getTimeSpanOptionText: function(timeSpan) {
    if (timeSpan.startsWith("m"))
      return timeSpan.substr(1);
    if (timeSpan.startsWith("q")) {
      const year = timeSpan.substr(1, 4);
      const quarter = timeSpan.substr(6, 1);
      return this.formatQuarter(year, quarter);
    }
    if (timeSpan.startsWith("y"))
      return timeSpan.substr(1, 4);
    if (timeSpan.endsWith("y") && Number.isInteger(Number.parseInt(timeSpan[0]))) {
      if (timeSpan[0] == "1")
        return "Last 12 Months";
      else
        return "Last " + timeSpan[0] + " Years";
    }
    return timeSpan;
  },

  getCountryOptions: function(chartConfig, allOptions = true) {
    let result = {};
    result[this.countryOptions.all] = "All Countries";
    {
      let allowCombine = allOptions || chartConfig == null || this.isAllCountries(chartConfig);
      if (!allowCombine) {
        let regularCountryCount = 0;
        let countryValues = this.getCountries(chartConfig);
        for (const i in countryValues) {
          let code = countryValues[i];
          if ([this.countryOptions.all, this.countryOptions.combine].includes(code))
            continue;
          if (countryGroups.includes(code)) {
            regularCountryCount = 0;
            break;
          }
          regularCountryCount++;
          if (regularCountryCount > 1)
            break;
        }
        allowCombine = regularCountryCount > 1;
      }
      if (allowCombine)
        result[this.countryOptions.combine] = "Combine Countries";
    }
    if (allOptions) {
      for (const code in this.countriesForOptionsAlphabetic) {
        result[code] = this.countriesForOptionsAlphabetic[code];
      }
    } else {
      for (const code in this.countriesForOptions) {
        result[code] = this.countriesForOptions[code];
      }
    }
    return result;
  },

  getMetricOptions: function(chartConfig) {
    let result = {};
    result[this.metrics.ratioElectric] = "BEV Market Share";
    result[this.metrics.salesElectric] = "BEV Market";
    result[this.metrics.shareElectric] = "BEV Market Split";
    result[this.metrics.ratioElectricWithinCompanyOrBrand] = "BEV Share within Company/Brand";
    result[this.metrics.salesAll] = "Car Market";
    result[this.metrics.shareAll] = "Car Market Split";
    result[this.metrics.all] = "All Metrics";
    return result;
  },

  getRealTimeSpan: function(chartConfig) {
    if (chartConfig.timeSpan == this.timeSpanOptions.auto) {
      if (this.isByYear(chartConfig))
        return this.timeSpanOptions.all;
      else if (chartConfig.xProperty == this.xProperties.month)
        return this.timeSpanOptions.last2y;
      else
        return this.timeSpanOptions.last5y;
    }
    return chartConfig.timeSpan;
  },

  getNominalMonthCount: function(chartConfig) {
    const timeSpan = this.getRealTimeSpan(chartConfig);
    if (timeSpan == this.timeSpanOptions.last3m)
      return 3;
    if (timeSpan == this.timeSpanOptions.last6m)
      return 6;
    if (timeSpan == this.timeSpanOptions.last13m)
      return 13;
    if (timeSpan == this.timeSpanOptions.last1y)
      return 12;
    if (timeSpan == this.timeSpanOptions.last2y)
      return 12 * 2;
    if (timeSpan == this.timeSpanOptions.last3y)
      return 12 * 3;
    if (timeSpan == this.timeSpanOptions.last4y)
      return 12 * 4;
    if (timeSpan == this.timeSpanOptions.last5y)
      return 12 * 5;
    if (timeSpan == this.timeSpanOptions.last6y)
      return 12 * 6;
    return 12;
  },

  encodeChartConfig: function(chartConfig, changedParamName = null) {
    this.makeChartConfigValid(chartConfig, changedParamName);
    let parts = [];
    const params = this.getChartParams(chartConfig);
    for (const i in params) {
      const param = params[i];
      if (chartConfig[param.name] == param.defaultOption && !param.alwaysAddToUrl)
        continue;
      if (!(param.name in chartConfig))
        continue;
      const values = chartConfig[param.name].split(",");
      for (const i in values) {
        if (values[i] != "") {
          const encoded = this.urlEncode(values[i]);
          if (!parts.includes(encoded))
            parts.push(encoded);
        }
      }
    }
    return parts.join(":");
  },

  normalizeSearchString: function(s) {
    s = s.toLowerCase();
    s = s.replaceAll(" ", "");
    s = s.replaceAll("-", "");
    s = s.replaceAll(".", "");
    s = s.replaceAll("ä", "ae");
    s = s.replaceAll("ö", "oe");
    s = s.replaceAll("ü", "ue");
    s = s.replaceAll("ß", "ss");
    s = s.replaceAll("é", "e");
    s = s.replaceAll("ë", "e");
    s = s.replaceAll("š", "s");
    return s;
  },

  decodeChartConfigString: function(chartConfigString) {
    let parts = [];
    let result = {};
    let params = this.getChartParams();
    if (chartConfigString == "" || chartConfigString == params.xProperty.defaultOption) {
      result.isRegularHomeTile = true;
    } else {
      const partsRaw = chartConfigString.split(":");
      // process strings for backward compatibility
      for (const i in partsRaw) {
        let part = partsRaw[i];
        if (part == "combine-brands")
          part = this.detailLevels.total;
        else if (part == "all-models")
          part = this.detailLevels.model;
        else if (part == "all")
          part = this.xProperties.all;
        parts.push(part);
      }
    }
    for (const i in params) {
      if (!params[i])
        continue;
      const param = params[i];
      let selectedValues = [];
      for (const j in parts) {
        const part = parts[j];
        const partNormalized = this.normalizeSearchString(part);
        let optionsKeyMatched = null;
        for (const key in param.options) {
          if (this.normalizeSearchString(this.urlEncode(key)) == partNormalized) {
            optionsKeyMatched = key;
            delete parts[j]; // avoid using a part twice
            break;
          }
        }
        if (optionsKeyMatched != null) {
          if (!selectedValues.includes(optionsKeyMatched))
            selectedValues.push(optionsKeyMatched);
          if (!param.allowMultiSelection)
            break;
        } else if (param.name == "timeSpan" && this.isTimeSpanValid(part)) {
          // Allow to select a time span which is not included in the suggested options
          selectedValues.push(part);
        }
      }
      if (selectedValues.length == 0)
        selectedValues.push(param.defaultOption);
      result[param.name] = selectedValues.join(",");
      params = this.getChartParams(result);
    }

    this.makeChartConfigValid(result);
    return result;
  },

  makeChartConfigValid: function(chartConfig, changedParamName = null) {
    let params = this.getChartParams(chartConfig);

    let countryValues = this.getCountries(chartConfig);
    if (!countryValues.includes(this.countryOptions.all)) {
      let singleCountryCount = 0;
      for (const i in countryValues) {
        if (countryValues[i] != this.countryOptions.combine)
          singleCountryCount++;
      }
      if (singleCountryCount == 0) {
        countryValues.push(this.countryOptions.all);
        chartConfig.country = countryValues.join(",");
      } else if (singleCountryCount == 1 && countryValues.length > 0) {
        for (const i in countryValues) {
          if (countryValues[i] != this.countryOptions.combine) {
            chartConfig.country = countryValues[i];
            break;
          }
        }
      }
    }

    // Switch from "all countries" to "global"
    if (countryValues.includes(this.countryOptions.all) && countryValues.includes(this.countryOptions.combine)) {
      if (chartConfig.metric != this.metrics.ratioElectricWithinCompanyOrBrand) {
        if (!this.isCompanyBrandModelXProperty(chartConfig) && chartConfig.detailLevel == this.detailLevels.total) {
          countryValues = ["global"];
          chartConfig.country = countryValues.join(",");
        }
      }
    }

    // Switch from "global" to "all countries"
    if (chartConfig.country == "global") {
      if (chartConfig.metric == this.metrics.ratioElectricWithinCompanyOrBrand) {
        if (this.isCompanyBrandModelXProperty(chartConfig) || chartConfig.detailLevel != this.detailLevels.total) {
          countryValues = [this.countryOptions.all, this.countryOptions.combine];
          chartConfig.country = countryValues.join(",");
        }
      }
    }

    // Check country compatibilty
    if ([this.metrics.ratioElectricWithinCompanyOrBrand, this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric)) {
      for (const i in countryValues) {
        let code = countryValues[i];
        if (countryGroups.includes(code)) {
          countryValues = [code];
          chartConfig.country = countryValues.join(",");
          break;
        }
      }
    }

    if (chartConfig.metric && chartConfig.metric.includes(",")) {
      const values = chartConfig.metric.split(",");
      if (values.includes(this.metrics.all))
        chartConfig.metric = this.metrics.all;
    }

    if (chartConfig.xProperty == this.xProperties.country)
      chartConfig.country = this.countryOptions.all;
    if (chartConfig.xProperty == this.xProperties.company)
      chartConfig.company = this.companyOptions.all;
    if (chartConfig.xProperty == this.xProperties.brand)
      chartConfig.brand = this.brandOptions.all;
    if (chartConfig.xProperty == this.xProperties.model && ![this.metrics.salesElectric, this.metrics.shareElectric].includes(chartConfig.metric))
      chartConfig.xProperty = this.xProperties.brand;

    if (!chartConfig.xProperty || (!(chartConfig.xProperty in params.xProperty.options) && !this.isMultiXProperties(chartConfig)))
      chartConfig.xProperty = params.xProperty.defaultOption;

    if (this.isCompanyBrandModelXProperty(chartConfig))
      chartConfig.detailLevel = "";
    else if (!chartConfig.detailLevel) {
      if (chartConfig.model && chartConfig.model != this.modelOptions.all)
        chartConfig.detailLevel = this.detailLevels.model;
      else if (chartConfig.brand && chartConfig.brand != this.brandOptions.all)
        chartConfig.detailLevel = this.detailLevels.brand;
      else if (chartConfig.company && chartConfig.company != this.companyOptions.all)
        chartConfig.detailLevel = this.detailLevels.company;
      else
        chartConfig.detailLevel = params.detailLevel.defaultOption;
    } else if (!(chartConfig.detailLevel in params.detailLevel.options))
      chartConfig.detailLevel = params.detailLevel.defaultOption;

    if (chartConfig.company == null)
      chartConfig.company = params.company.defaultOption;
    if (chartConfig.brand == null)
      chartConfig.brand = params.brand.defaultOption;
    if (chartConfig.model == null)
      chartConfig.model = params.model.defaultOption;

    // remove company group when switching to detailLevel total
    if (chartConfig.detailLevel == this.detailLevels.total)
      chartConfig.company = this.companyOptions.all;

    // remove brand when switching to detailLevel total or company
    if ([this.detailLevels.total, this.detailLevels.company].includes(chartConfig.detailLevel))
      chartConfig.brand = this.brandOptions.all;

    // replace company groups by their brands when switching from detailLevel.company to detailLevel.brand
    const companies = this.getCompanies(chartConfig);
    if (chartConfig.detailLevel == this.detailLevels.brand && companies.length > 1) {
      let brands = [];
      const companyGroupsKeys = Object.keys(companyGroups);
      for (const i in companies) {
        const company = companies[i];
        const j = companyGroupsKeys.indexOf(company);
        if (j != -1)
          brands = brands.concat(companyGroups[companyGroupsKeys[j]]);
        else
          brands.push(company);
      }
      chartConfig.brand = brands.join(",");
      chartConfig.company = this.companyOptions.all;
    }

    // move brands from 'company' to 'brand' property when multiple non-related companies/brands are selected
    if (chartConfig.company != this.companyOptions.all && chartConfig.brand != this.brandOptions.all) {
      const brands = this.getBrands(chartConfig);
      var apply = false;
      let newCompanies = companies;
      for (const i in brands) {
        const brand = brands[i];
        const company = this.companiesByBrand[brand];
        if (company != null && chartConfig.company != company) {
          newCompanies.push(brand);
          apply = true;
        }
      }
      if (apply) {
        chartConfig.brand = newCompanies.join(",");
        chartConfig.company = this.companyOptions.all;
      }
    }

    if (this.isTimeXProperty(chartConfig) && chartConfig.timeSpan != null) {
      if (chartConfig.timeSpan.startsWith("m")
        || (chartConfig.timeSpan.startsWith("q") && !this.isByMonth(chartConfig))
        || (chartConfig.timeSpan.startsWith("y") && this.isByYear(chartConfig))) {
        chartConfig.timeSpan = params.timeSpan.defaultOption;
      }
    }

    params = this.getChartParams(chartConfig); // update

    if (!(chartConfig.view in params.view.options))
      chartConfig.view = params.view.defaultOption;

    // reset brand filter, when company filter is reset
    if (changedParamName == "company" && chartConfig.company == this.companyOptions.all)
      chartConfig.brand = this.brandOptions.all;
  },

  applyNewDefaultOptions: function(newChartConfig, curChartConfig) {
    // reset parameters, which are set to the current default option, to the new default option
    const newParams = this.getChartParams(newChartConfig);
    const curParams = this.getChartParams(curChartConfig);
    for (const i in curParams) {
      const param = curParams[i];
      if (newChartConfig[param.name] == param.defaultOption)
        newChartConfig[param.name] = newParams[i].defaultOption;
    }
  },

  needsUnfold: function(chartConfig) {
    if (this.isMultiMetric(chartConfig) && ![this.views.table, this.views.sources].includes(chartConfig.view) && !this.areMetricsCompatible(chartConfig))
      return true;
    if (this.isMultiXProperties(chartConfig) && !this.isByMonth(chartConfig))
      return true;
    if (!this.isTimeXProperty(chartConfig))
      return false;
    let count = 0;
    if (!this.isSingleOrCombinedCountry(chartConfig))
      count++;
    if (chartConfig.detailLevel == this.detailLevels.company && (chartConfig.company == this.companyOptions.all || this.getCompanies(chartConfig).length > 1))
      count++;
    if (chartConfig.detailLevel == this.detailLevels.brand && (chartConfig.brand == this.brandOptions.all || this.getBrands(chartConfig).length > 1))
      count++;
    if (chartConfig.detailLevel == this.detailLevels.model && (chartConfig.model == this.modelOptions.all || this.getModels(chartConfig).length > 1))
      count++;
    if (this.isMultiXProperties(chartConfig))
      count++;
    if (this.isMultiMetric(chartConfig))
      count++;
    return count > 1;
  },

  getUnfoldValues: function(unfoldParam, chartConfig) {
    let values = [];
    if (unfoldParam.unfoldKey && chartConfig[unfoldParam.name] == unfoldParam.unfoldKey) {
      values = Object.keys(unfoldParam.options);
    } else if (unfoldParam.allowMultiSelection && chartConfig[unfoldParam.name] != null) {
      if (unfoldParam.name == "country" && chartConfig.country != this.countryOptions.all)
        values = this.getSelectedCountries(chartConfig);
      else
        values = chartConfig[unfoldParam.name].split(",");
      if (unfoldParam.disableUnfoldOption != null && values.includes(unfoldParam.disableUnfoldOption))
        return [];
    }
    return values;
  },

  getUnfoldParam: function(chartConfig = null) {
    const params = this.getChartParams(chartConfig);
    for (const i in params) {
      const unfoldParam = params[i];
      let values = this.getUnfoldValues(unfoldParam, chartConfig);
      if (values.length > 1)
        return unfoldParam;
    }
  },

  unfoldChartConfig: function(chartConfig) {
    // Splits one chart config into multiple chart config by unfolding one parameter.
    // The resulting chart configs are one level closer to what can be displayed.
    if (!this.needsUnfold(chartConfig))
      return [chartConfig];

    let unfoldParam = this.getUnfoldParam(chartConfig);
    if (unfoldParam == null)
      return [chartConfig];

    let values = this.getUnfoldValues(unfoldParam, chartConfig);
    let chartConfigs = [];
    for (const k in values) {
      if (unfoldParam.excludeOnUnfoldAndTitle && unfoldParam.excludeOnUnfoldAndTitle.includes(values[k]))
        continue;
      if (unfoldParam.unfoldKey == values[k])
        continue;
      let newConfig = this.cloneObject(chartConfig);
      newConfig[unfoldParam.name] = values[k];
      this.makeChartConfigValid(newConfig);
      newConfig.unfoldParamName = unfoldParam.name;
      chartConfigs.push(newConfig);
    }

    if (chartConfig.isRegularHomeTile) {
      // Add "Compare Countries" on the home page
      {
        let config = {};
        config.metric = this.metrics.all;
        config.xProperty = this.xProperties.monthAvg12;
        this.makeChartConfigValid(config);
        chartConfigs.unshift(config);
      }
    }

    return chartConfigs;
  },

  getDisplayChartConfig: function(originalChartConfig) {
    // set all parameters to a value, which is possible to render
    if (!this.needsUnfold(originalChartConfig))
      return originalChartConfig;
    let chartConfig = this.cloneObject(originalChartConfig);
    let params = this.getChartParams(chartConfig);
    var modified = false;
    for (const i in params) {
      if (!params[i])
        continue;
      const param = params[i];
      if (chartConfig[param.name] == param.unfoldKey) {
        if (param.defaultOption == param.unfoldKey)
          for (const value in param.options) {
            if (value == param.unfoldKey || (param.excludeOnUnfoldAndTitle && param.excludeOnUnfoldAndTitle.includes(value)))
              continue;
            chartConfig[param.name] = value;
            break
          }
        else
          chartConfig[param.name] = param.defaultOption;
        modified = true;
      } else if (chartConfig[param.name].includes(",")) {
        chartConfig[param.name] = chartConfig[param.name].split(",")[0];
        modified = true;
      }
    }
    if (modified)
      this.makeChartConfigValid(chartConfig);
    return chartConfig;
  },

  getChartTitle: function(chartConfig, isSingleChart) {
    let parts = [];
    const params = this.getChartParams(chartConfig);
    for (const i in params) {
      const param = params[i];
      if (!param.showInTitle)
        continue;
      const value = chartConfig[param.name];
      if (param.allowMultiSelection && value.includes(","))
        continue;
      if (param.excludeOnUnfoldAndTitle && param.excludeOnUnfoldAndTitle.includes(value))
        continue;
      if (!isSingleChart && chartConfig.unfoldParamName != param.name)
        continue;
      let text = param.options[value];
      if (param.name == "country" && chartConfig.unfoldParamName != param.name)
        continue;
      if (param.name == "metric") {
        if (value == this.metrics.ratioElectricWithinCompanyOrBrand) {
          if (chartConfig.xProperty == this.xProperties.company || chartConfig.detailLevel == this.detailLevels.company)
            text = "BEV Share within Company";
          else
            text = "BEV Share within Brand";
        }
        if (this.combineMetricAndCompanyOrBrandInTitle(chartConfig)) {
          if (chartConfig.brand == this.brandOptions.all)
            text = text + " within " + params.company.options[chartConfig.company];
          else
            text = text + " within " + params.brand.options[chartConfig.brand];
        }
        if (isSingleChart || chartConfig.unfoldParamName == "country") {
          // Prepend country
          if (!this.isMultiCountry(chartConfig))
            text = this.countriesForOptions[chartConfig.country] + " " + text;
        }
      } else if ((param.name == "company" || param.name == "brand") && chartConfig.model != this.modelOptions.all && this.getModels(chartConfig).length == 1) {
        text = text + " " + params.model.options[chartConfig.model];
      } else if (param.name == "timeSpan") {
        const timeSpan = this.getRealTimeSpan(chartConfig);
        text = param.options[timeSpan];
      }
      if (param.name == "country")
        parts.unshift(text);
      else
        parts.push(text);
    }
    if (parts.length == 0) {
      if (!this.isSingleOrCombinedCountry(chartConfig))
        parts.push("Compare Countries");
      else if (this.isMultiMetric(chartConfig)) {
        if (this.isMultiCountry(chartConfig))
          parts.push("Mutiple Countries and Metrics");
        else
          parts.push(this.countriesForOptions[chartConfig.country]);
      } else if (this.isAllCountries(chartConfig) && this.isCombinedCountry(chartConfig))
        parts.push("All Countries Combined");
    }
    return parts.join(" – ");
  },

  getChartSubTitle: function(chartConfig) {
    let parts = [];
    // Metric description
    if (chartConfig.metric == this.metrics.ratioElectric)
      parts.push("Share of battery electric cars within passenger car market");
    else if (chartConfig.metric == this.metrics.salesElectric)
      parts.push("Battery electric passenger car sales");
    else if (chartConfig.metric == this.metrics.shareElectric) {
      if (chartConfig.xProperty == this.xProperties.company || chartConfig.detailLevel == this.detailLevels.company)
        parts.push("Battery electric passenger car market split by company");
      else if (chartConfig.xProperty == this.xProperties.brand || chartConfig.detailLevel == this.detailLevels.brand)
        parts.push("Battery electric passenger car market split by brand");
      else
        parts.push("Battery electric passenger car market split by model");
    } else if (chartConfig.metric == this.metrics.salesAll)
      parts.push("Passenger car sales");
    else if (chartConfig.metric == this.metrics.shareAll) {
      if (chartConfig.xProperty == this.xProperties.company || chartConfig.detailLevel == this.detailLevels.company)
        parts.push("Passenger car market split by company");
      else
        parts.push("Passenger car market split by brand");
    } else if (chartConfig.metric == this.metrics.ratioElectricWithinCompanyOrBrand) {
      if (chartConfig.xProperty == this.xProperties.company || chartConfig.detailLevel == this.detailLevels.company)
        parts.push("Share of battery electric cars of passenger car sales within company");
      else
        parts.push("Share of battery electric cars of passenger car sales within brand");
    }
    // Countries
    if (this.isMultiCountry(chartConfig) && this.isCombinedCountry(chartConfig)) {
      const countryValues = db.getSelectedCountries(chartConfig);
      let countrieNames = [];
      for (const i in countryValues) {
        const code = countryValues[i];
        const id = this.countries[code];
        if (id != null)
          countrieNames.push(this.countryNames[id]);
      }
      parts.push(this.joinItemList(countrieNames, 6, "more countries"));
    }
    return parts.join(" – ");
  },

  getSelectedCountries: function(chartConfig) {
    let countryValues = this.getCountries(chartConfig);
    let result = [];
    let includesAll = countryValues.includes(this.countryOptions.all);
    if (includesAll)
      result.push(this.countryOptions.all);
    for (const i in this.countriesWithData) {
      const id = this.countriesWithData[i];
      const code = this.countriesCodes[id];
      if (includesAll) {
        if (this.countryGroupIds.includes(id)) {
          if ([this.metrics.ratioElectricWithinCompanyOrBrand, this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric))
            continue;
          if (chartConfig.xProperty == this.xProperties.country)
            continue;
          if (chartConfig.view == this.views.barChart && this.isBarChartStacked(chartConfig))
            continue;
        }
        result.push(code);
      } else if (countryValues.includes(code)) {
        result.push(code);
      }
    }
    if (countryValues.includes(this.countryOptions.combine))
      result.push(this.countryOptions.combine);
    return result;
  },

  combineMetricAndCompanyOrBrandInTitle: function(chartConfig) {
    return [this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric) && (chartConfig.detailLevel == this.detailLevels.brand || [this.xProperties.brand, this.xProperties.model].includes(chartConfig.xProperty)) && chartConfig.company != this.companyOptions.all;
  },

  getDefaultSeriesName: function(params, chartConfig) {
    if (chartConfig.unfoldForQueryParamName == "xProperty")
      return params.xProperty.options[chartConfig.xProperty];
    return params.metric.allOptions[chartConfig.metric];
  },

  queryDatasets: function(chartConfig, onlyEvs, withHints = true) {
    // Returns datasets for chart
    let filterCountryIds = this.queryDatasets_getCountryFilter(chartConfig);

    const useCountryAsSeriesName = filterCountryIds.length != 1 && chartConfig.country != "global" && !this.isCombinedCountry(chartConfig) && chartConfig.xProperty != this.xProperties.country;

    const params = db.getChartParams(chartConfig);

    let filterCompanies = [];
    if (chartConfig.company != this.companyOptions.all && chartConfig.xProperty != this.xProperties.company)
      filterCompanies = this.getCompanies(chartConfig);
    let filterBrands = [];
    if (chartConfig.brand != this.brandOptions.all && chartConfig.xProperty != this.xProperties.brand)
      filterBrands = this.getBrands(chartConfig);
    const isSingleBrand = filterBrands.length == 1 || (filterCompanies.length == 1 && !this.companyGroupNames.includes(chartConfig.company));
    let filterModels = [];
    if (chartConfig.model != this.modelOptions.all && chartConfig.xProperty != this.xProperties.model && onlyEvs)
      filterModels = this.getModels(chartConfig);
    const dateFilters = this.queryDatasets_getDateFilters(chartConfig);

    let seriesRows = {};
    let sources = [];
    let categories = [];
    let monthsPerCountryAndTimeSpan = {};
    let gapDetectionData = {};
    let monthsInRange = [];
    let nonMonthlyCountries = [];

    for (const i in this.datasets) {
      const dataset = this.datasets[i];
      if (dataset.isEvs != onlyEvs)
        continue;
      if (!filterCountryIds.includes(dataset.country))
        continue;
      if (dateFilters.firstYear != null && (dataset.year < dateFilters.firstYear || dataset.year > dateFilters.lastYear || (dataset.year == dateFilters.firstYear && dataset.month < dateFilters.firstMonth) || (dataset.year == dateFilters.lastYear && dataset.month > dateFilters.lastMonth)))
        continue;

      // add entry to monthsPerCountryAndTimeSpan
      if (this.isTimeXProperty(chartConfig) || chartConfig.timeSpan.startsWith("q") || chartConfig.timeSpan.startsWith("y")) {
        let timeSpan;
        if (this.isByYear(chartConfig))
          timeSpan = dataset.year;
        else if (this.isByQuarter(chartConfig))
          timeSpan = this.formatQuarter(dataset.year, this.monthToQuarter(dataset.month));
        else
          timeSpan = dataset.monthString;
        if (!(dataset.countryName in monthsPerCountryAndTimeSpan))
          monthsPerCountryAndTimeSpan[dataset.countryName] = {};
        if (!(timeSpan in monthsPerCountryAndTimeSpan[dataset.countryName]))
          monthsPerCountryAndTimeSpan[dataset.countryName][timeSpan] = [];
        if (!monthsPerCountryAndTimeSpan[dataset.countryName][timeSpan].includes(dataset.monthString))
          monthsPerCountryAndTimeSpan[dataset.countryName][timeSpan].push(dataset.monthString);
      }

      monthsInRange.push(dataset.monthString);

      let category = "";
      if (this.isByMonth(chartConfig))
        category = dataset.monthString;
      else if (this.isByQuarter(chartConfig))
        category = this.formatQuarter(dataset.year, this.monthToQuarter(dataset.month));
      else if (this.isByYear(chartConfig))
        category = dataset.year;
      else if (chartConfig.xProperty == this.xProperties.country) {
        if (this.countryGroupRestIds.includes(dataset.country))
          category = this.unknownSeriesName;
        else
          category = dataset.countryName;
      }

      let otherOrUnkownSeriesName;
      if (Object.keys(dataset.data).length >= 25)
        otherOrUnkownSeriesName = this.otherSeriesName;
      else
        otherOrUnkownSeriesName = this.unknownSeriesName;

      for (const dataKey in dataset.data) {
        const dataKeyParts = dataKey.split("|", 2);
        const brand = dataKeyParts[0];
        const model = dataKeyParts[1];
        const company = this.companiesByBrand[brand];
        const value = dataset.data[dataKey];

        // apply filters
        if (filterCompanies.length > 0 && !filterCompanies.includes(company))
          continue;
        if (filterBrands.length > 0 && !filterBrands.includes(brand))
          continue;
        if (filterModels.length > 0 && !filterModels.includes(model))
          continue;
        if (brand == "other" && (chartConfig.metric == this.metrics.ratioElectricWithinCompanyOrBrand || (chartConfig.metric == this.metrics.shareElectric && !this.isTimeXProperty(chartConfig))))
          continue;

        // save gapDetectionData
        if (!(dataKey in gapDetectionData))
          gapDetectionData[dataKey] = [[], 0];
        gapDetectionData[dataKey][0].push(dataset.monthString);
        gapDetectionData[dataKey][1] += value;

        // set category
        if (chartConfig.xProperty == this.xProperties.company)
          category = company;
        else if (chartConfig.xProperty == this.xProperties.brand)
          category = brand;
        else if (chartConfig.xProperty == this.xProperties.model) {
          if (dataset.dsType == this.dsTypes.ElectricCarsByBrand && dataKey != "other")
            category = dataKey + "|other";
          else
            category = dataKey;
        }
        if (category == "other")
          category = otherOrUnkownSeriesName;

        // set seriesName
        let seriesName;
        if (useCountryAsSeriesName) {
          if (this.countryGroupRestIds.includes(dataset.country))
            seriesName = this.otherSeriesName;
          else
            seriesName = dataset.countryName;
        } else if (!this.isCompanyBrandModelXProperty(chartConfig)) {
          if (chartConfig.detailLevel == this.detailLevels.company && filterCompanies.length != 1)
            seriesName = company;
          else if (chartConfig.detailLevel == this.detailLevels.brand && filterBrands.length != 1)
            seriesName = brand;
          else if (chartConfig.detailLevel == this.detailLevels.model && filterModels.length != 1) {
            if (dataset.dsType == this.dsTypes.ElectricCarsByBrand && dataKey != "other")
              seriesName = dataKey + "|other";
            else {
              if (isSingleBrand)
                seriesName = model;
              else
                seriesName = dataKey;
            }
          } else {
            seriesName = this.getDefaultSeriesName(params, chartConfig);
          }
        } else {
          seriesName = this.getDefaultSeriesName(params, chartConfig);
        }
        if (seriesName == "other")
          seriesName = otherOrUnkownSeriesName;

        // add entry to seriesRows, categories and sources
        if (!(seriesName in seriesRows))
          seriesRows[seriesName] = {};
        if (category in seriesRows[seriesName])
          seriesRows[seriesName][category] += value;
        else
          seriesRows[seriesName][category] = value;
        if (!categories.includes(category))
          categories.push(category);
        if (sources[dataset.source] == null) {
          let sourceInfo = {};
          sourceInfo.country = dataset.country;
          sourceInfo.firstDate = dataset.monthString;
          sourceInfo.isEvs = dataset.isEvs;
          sources[dataset.source] = sourceInfo;
        }
        sources[dataset.source].lastDate = dataset.monthString;
      }
      if (dataset.perQuarter && !nonMonthlyCountries.includes(dataset.country))
        nonMonthlyCountries.push(dataset.country);
    }

    if (this.isTimeXProperty(chartConfig))
      categories.sort(); // provisional, needed for next processing steps and hints

    this.removeLastIncompleteMonthOrQuarter(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan);
    this.removeMostRecentMonthIfIncomplete(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan);
    this.removeIncompleteGlobalData(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan);

    let chartData = {
      seriesRows: seriesRows,
      sources: sources,
      categories: categories,
      hints: [],
      monthsPerCountryAndTimeSpan: monthsPerCountryAndTimeSpan
    };

    if (withHints) {
      this.addHints_gapDetection(chartConfig, chartData, gapDetectionData, monthsInRange);
      this.addHints_parseSources(chartConfig, chartData);
      this.addHints_incompleteData(chartConfig, chartData);
      this.addHints_notMonthly(chartConfig, chartData, nonMonthlyCountries);
    }

    return chartData;
  },

  queryDatasets_getCountryFilter: function(chartConfig) {
    const isGlobal = chartConfig.country == "global";
    if (isGlobal && chartConfig.detailLevel == this.detailLevels.total)
      return [this.globalCountryId];
    let filterCountryIds = [];
    const countryValues = db.getSelectedCountries(chartConfig);
    for (const i in this.countriesWithData) {
      const id = this.countriesWithData[i];
      const code = this.countriesCodes[id];
      if (isGlobal) {
        if (this.countryGroupIds.includes(id))
          continue;
      } else {
        if (!countryValues.includes(code))
          continue;
      }
      filterCountryIds.push(id);
    }
    if (isGlobal || (this.isAllCountries(chartConfig) && this.isBarChartStacked(chartConfig))) {
      filterCountryIds.push(this.globalRestCountryId);
    }
    return filterCountryIds;
  },

  queryDatasets_getDateFilters: function(chartConfig) {
    let dateFilters = {};
    const timeSpan = this.getRealTimeSpan(chartConfig);
    if (timeSpan != this.timeSpanOptions.all) {
      if (timeSpan.startsWith("y")) {
        dateFilters.firstYear = parseInt(timeSpan.substr(1));
        dateFilters.firstMonth = 1;
        dateFilters.lastYear = dateFilters.firstYear;
        dateFilters.lastMonth = 12;
      } else if (timeSpan.startsWith("q")) {
        dateFilters.firstYear = parseInt(timeSpan.substr(1, 4));
        dateFilters.firstMonth = this.quarterToMonth(parseInt(timeSpan.substr(6, 1)));
        dateFilters.lastYear = dateFilters.firstYear;
        dateFilters.lastMonth = dateFilters.firstMonth + 2;
      } else if (timeSpan.startsWith("m")) {
        dateFilters.firstYear = parseInt(timeSpan.substr(1, 4));
        dateFilters.firstMonth = parseInt(timeSpan.substr(6, 2));
        dateFilters.lastYear = dateFilters.firstYear;
        dateFilters.lastMonth = dateFilters.firstMonth;
      } else if (timeSpan.endsWith("y") || timeSpan.endsWith("m")) {
        let currentYear = this.currentDate.getFullYear();
        let currentMonth = 1 + this.currentDate.getMonth();
        currentMonth--;
        if (currentMonth < 1) {
          currentMonth = 12;
          currentYear--;
        }
        dateFilters.lastYear = currentYear;
        dateFilters.lastMonth = currentMonth;
        const quantity = parseInt(timeSpan.substr(0, timeSpan.length - 1));
        if (timeSpan.endsWith("y")) {
          dateFilters.firstYear = currentYear - quantity;
          dateFilters.firstMonth = dateFilters.lastMonth + 1;
          if (this.isByQuarter(chartConfig))
            dateFilters.firstMonth = this.quarterToMonth(this.monthToQuarter(dateFilters.firstMonth)); // round to quarter
          else if (this.isByYear(chartConfig))
            dateFilters.firstMonth = 1; // round to year
          if (dateFilters.firstMonth > 12) {
            dateFilters.firstYear++;
            dateFilters.firstMonth = dateFilters.firstMonth - 12;
          }
        } else if (timeSpan.endsWith("m")) {
          dateFilters.firstYear = currentYear;
          dateFilters.firstMonth = currentMonth - quantity + 1;
          if (dateFilters.firstMonth < 1) {
            dateFilters.firstYear--;
            dateFilters.firstMonth = dateFilters.firstMonth + 12;
          }
        }
      }
      // Expand range to include data necessary for calculation of trailing average
      if (this.isDateFilterExtendedForAverageCalculation(chartConfig))
        dateFilters.firstYear = dateFilters.firstYear - 1;
    }
    return dateFilters;
  },

  removeLastIncompleteMonthOrQuarter: function(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan) {
    if (!this.isByMonth(chartConfig) && !this.isByQuarter(chartConfig))
      return;
    if (![this.metrics.salesElectric, this.metrics.salesAll].includes(chartConfig.metric))
      return;
    if (categories.length == 0)
      return;
    const timeSpan = categories[categories.length - 1];

    // Check if the end of the time span is more than 15 days ago
    let date;
    if (this.isByMonth(chartConfig)) {
      const parts = timeSpan.split("-", 2);
      const year = parts[0];
      const month = parts[1];
      date = new Date(year, month, 16); // end of month plus 15 days
    } else if (this.isByQuarter(chartConfig)) {
      const parts = timeSpan.split(" ", 2);
      const year = parts[0];
      const quarter = parts[1].substr(1);
      date = new Date(year, this.quarterToMonth(quarter) + 2, 16); // end of quarter plus 15 days
    }
    if (date < this.currentDate)
      return;

    // Remove last month/quarter if it is incomplete
    let expectedNumberOfMonth;
    if (this.isByMonth(chartConfig))
      expectedNumberOfMonth = 1;
    else if (this.isByQuarter(chartConfig))
      expectedNumberOfMonth = 3;
    for (const countryName in monthsPerCountryAndTimeSpan) {
      const monthsPerQuarter = monthsPerCountryAndTimeSpan[countryName];
      if (monthsPerQuarter[timeSpan] === undefined || monthsPerQuarter[timeSpan].length != expectedNumberOfMonth) {
        // Remove time span from all series and from categories
        for (const seriesName in seriesRows) {
          delete seriesRows[seriesName][timeSpan];
        }
        categories.pop();
        return;
      }
    }
  },

  removeMostRecentMonthIfIncomplete: function(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan) {
    if (!this.isByMonth(chartConfig))
      return;
    if (!this.isCombinedCountry(chartConfig) && ![this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric))
      return;
    if (categories.length == 0)
      return;
    const timeSpan = categories[categories.length - 1];

    // check if all countries are included
    let missingCountries = false;
    for (const countryName in monthsPerCountryAndTimeSpan) {
      const monthsPerTimeSpan = monthsPerCountryAndTimeSpan[countryName];
      if (monthsPerTimeSpan[timeSpan] === undefined) {
        missingCountries = true;
        break;
      }
    }
    if (!missingCountries)
      return;

    // remove month
    for (const seriesName in seriesRows) {
      delete seriesRows[seriesName][timeSpan];
    }
    categories.pop();
  },

  removeIncompleteGlobalData: function(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan) {
    if (chartConfig.country != "global")
      return;
    if (!this.isTimeXProperty(chartConfig))
      return;
    const monthsPerTimeSpan = monthsPerCountryAndTimeSpan[this.globalRestCountryName];
    if (!monthsPerTimeSpan)
      return;
    let firstIncomplete = -1;
    for (const i in categories) {
      const timeSpan = categories[i];
      if (monthsPerTimeSpan[timeSpan] === undefined) {
        firstIncomplete = i;
        break;
      }
      if (this.isByQuarter(chartConfig) && monthsPerTimeSpan[timeSpan].length != 3) {
        firstIncomplete = i;
        break;
      }
      if (this.isByYear(chartConfig) && monthsPerTimeSpan[timeSpan].length != 12) {
        firstIncomplete = i;
        break;
      }
    }
    if (firstIncomplete != -1) {
      for (let i = categories.length - 1; i >= firstIncomplete; i--) {
        delete categories[i];
      }
    }
  },

  addHints_gapDetection: function(chartConfig, chartData, gapDetectionData, monthsInRange) {
    // gap detection (missing months in data series)
    if (chartConfig.detailLevel == this.detailLevels.total)
      return;
    if (chartData.categories.includes(this.unknownSeriesName) || Object.keys(chartData.seriesRows).includes(this.unknownSeriesName))
      return;
    let sumPerMonth = 0;
    for (const key in gapDetectionData) {
      const entry = gapDetectionData[key];
      const months = entry[0];
      const value = entry[1];
      sumPerMonth += value / months.length;
    }
    let errorIndicatorSum = 0;
    for (const key in gapDetectionData) {
      if (key.endsWith("|other"))
        continue;
      const entry = gapDetectionData[key];
      const months = entry[0];
      const value = entry[1];
      let afterMonthWithData = false;
      let afterMonthWithoutData = false;
      let hasGap = false;
      let missingMonthCount = 0;
      for (const i in monthsInRange) {
        const month = monthsInRange[i];
        if (months.includes(month)) {
          if (afterMonthWithoutData) {
            hasGap = true;
            afterMonthWithData = false;
            afterMonthWithoutData = false;
          } else
            afterMonthWithData = true;
        } else if (afterMonthWithData) {
          afterMonthWithoutData = true;
          missingMonthCount++;
        }
      }
      if (hasGap) {
        const errorIndicator = missingMonthCount / monthsInRange.length * (value / months.length / sumPerMonth);
        errorIndicatorSum += errorIndicator;
      }
    }
    if (errorIndicatorSum < 0.05)
      return;
    if (errorIndicatorSum >= 0.2)
      chartData.hints.push("<span class='important'>Data is likely very incomplete as it is based on monthly top-selling models/brands.</span>");
    else
      chartData.hints.push("Data is likely incomplete as it is based on monthly top-selling models/brands.");
  },

  addHints_parseSources: function(chartConfig, chartData) {
    // parse general hints from sources
    const keyword = " (Incomplete: ";
    for (const text in chartData.sources) {
      let i = text.indexOf(keyword);
      if (i == -1)
        continue;
      i = i + keyword.length;
      const j = text.indexOf(")", i);
      if (j == -1)
        continue;
      if (text.includes("not listed by name") && chartConfig.xProperty != this.xProperties.model)
        continue;
      const sourceInfo = chartData.sources[text];
      let hint = "";
      if (this.isMultiCountry(chartConfig))
        hint = hint + this.countryNames[sourceInfo.country] + ": ";
      hint = hint + text.substr(i, j - i);
      if (!chartData.hints.includes(hint))
        chartData.hints.push(hint);
    }
  },

  addHints_incompleteData: function(chartConfig, chartData) {
    // incomplete year or quarter
    if (this.isByQuarter(chartConfig) || this.isByYear(chartConfig) || chartConfig.timeSpan.startsWith("q") || chartConfig.timeSpan.startsWith("y")) {
      const currentYear = this.currentDate.getFullYear();
      const currentQuarter = this.formatQuarter(currentYear, this.monthToQuarter(1 + this.currentDate.getMonth()));
      let expectedNumberOfMonth;
      if (this.isByQuarter(chartConfig) || chartConfig.timeSpan.startsWith("q"))
        expectedNumberOfMonth = 3;
      else
        expectedNumberOfMonth = 12;
      for (const countryName in chartData.monthsPerCountryAndTimeSpan) {
        const monthsPerTimeSpan = chartData.monthsPerCountryAndTimeSpan[countryName];
        let timeSpansToReport = [];
        if (this.isByQuarter(chartConfig) || this.isByYear(chartConfig)) {
          for (const i in chartData.categories) {
            const timeSpan = chartData.categories[i];
            if (timeSpan == currentYear || timeSpan == currentQuarter)
              continue;
            if (monthsPerTimeSpan[timeSpan] && monthsPerTimeSpan[timeSpan].length != expectedNumberOfMonth)
              timeSpansToReport.push(timeSpan);
          }
        } else if (Object.keys(monthsPerTimeSpan).length != expectedNumberOfMonth){
          const timeSpan = chartConfig.timeSpan.substr(1);
          if (timeSpan == currentYear || timeSpan == currentQuarter)
            continue;
          timeSpansToReport.push(timeSpan);
        }
        for (const i in timeSpansToReport) {
          const timeSpan = timeSpansToReport[i];
          let hint = "";
          if (this.isMultiCountry(chartConfig))
            hint = hint + countryName + ": ";
          hint = hint + timeSpan + " is incomplete.";
          chartData.hints.push(hint);
        }
        // Avoid multiple hints for the same time span when country is 'global'
        if (timeSpansToReport.length > 0 && !this.isMultiCountry(chartConfig))
          break;
      }
    }
  },

  addHints_notMonthly: function(chartConfig, chartData, nonMonthlyCountries) {
    // monthly data is not available
    if ([this.xProperties.month, this.xProperties.monthAvg3].includes(chartConfig.xProperty) && nonMonthlyCountries.length > 0 && chartConfig.country != "global") {
      let hint = "Monthly data is derived from quarterly data";
      if (this.isMultiCountry(chartConfig)) {
        let countryNames = [];
        for (const i in nonMonthlyCountries) {
          const countryId = nonMonthlyCountries[i];
          countryNames.push(this.countryNames[countryId]);
        }
        hint = hint + " for " + this.joinItemList(countryNames, 6, "more countries");
      }
      chartData.hints.push(hint + ".");
    }
  },

  addHintsAfterProcessing_incompleteData: function(chartConfig, chartData) {
    // missing month/quarter/year per country
    if (this.isTimeXProperty(chartConfig) && this.isMultiCountry(chartConfig) && chartConfig.view == this.views.barChart) {
      let seriesNames = [];
      for (const i in chartData.series) {
        seriesNames.push(chartData.series[i].name);
      }
      const currentYear = this.currentDate.getFullYear();
      for (const countryName in chartData.monthsPerCountryAndTimeSpan) {
        if (!seriesNames.includes(countryName))
          continue;
        let timeSpansToReport = [];
        const monthsPerTimeSpan = chartData.monthsPerCountryAndTimeSpan[countryName];
        for (const i in chartData.categories) {
          const timeSpan = chartData.categories[i];
          if (monthsPerTimeSpan[timeSpan] === undefined && timeSpan != currentYear)
            timeSpansToReport.push(timeSpan);
        }
        if (timeSpansToReport.length > 0)
          chartData.hints.push(countryName + ": Missing data for " + this.joinItemList(timeSpansToReport, 6, "more categories") + ".");
      }
    }
  },

  addHintsAfterProcessing_partiallyUnknown: function(chartConfig, chartData) {
    let hasUnknownSeries = false;
    for (const i in chartData.series) {
      if (chartData.series[i].name == this.unknownSeriesName) {
        hasUnknownSeries = true;
        false;
      }
    }
    if (!chartData.categories.includes(this.unknownSeriesName) && !hasUnknownSeries)
      return;
    let perWhat;
    if (chartConfig.detailLevel == this.detailLevels.company || chartConfig.xProperty == this.xProperties.company)
      perWhat = "company";
    else if (chartConfig.detailLevel == this.detailLevels.brand || chartConfig.xProperty == this.xProperties.brand)
      perWhat = "brand";
    else if (chartConfig.detailLevel == this.detailLevels.model || chartConfig.xProperty == this.xProperties.model)
      perWhat = "model";
    else
      perWhat = "country";
    if (chartData.series.length == 1 && this.isTimeXProperty(chartConfig))
      chartData.hints.unshift("Data is not available per " + perWhat + "; displayed as 'unknown'.");
    else
      chartData.hints.unshift("Data is partially not available per " + perWhat + "; displayed as 'unknown'.");
  },

  postProcessCategories: function(chartConfig, chartData, sortByName) {
    // Sort categories
    let categories = chartData.categories;
    let seriesRows = chartData.seriesRows;
    let processedCategories = [];
    const maxSeriesOption = this.maxSeriesOptions[chartConfig.maxSeries];
    if (this.isTimeXProperty(chartConfig)) {
      // Numeric sort
      categories.sort();
    } else if (sortByName) {
      // Alphabetic sort
      categories.sort(function(a, b) {
        const order = db.specialSortCompare(a, b);
        if (order != 0)
          return order;
        return a.localeCompare(b);
      });
    } else {
      // Sort by value
      categories.sort(function(a, b) {
        const order = db.specialSortCompare(a, b);
        if (order != 0)
          return order;
        let valueA = 0;
        let valueB = 0;
        for (const seriesName in seriesRows) {
          const currSeries = seriesRows[seriesName];
          if (currSeries[a] != null)
            valueA += currSeries[a];
          if (currSeries[b] != null)
            valueB += currSeries[b];
        }
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      });
    }

    // Apply limit
    let count = 0;
    for (const i in categories) {
      const category = categories[i];
      processedCategories.push(category);
      count++;
      if (count == maxSeriesOption.count && !this.isTimeXProperty(chartConfig) && chartConfig.view != this.views.table)
        break;
    }

    // Fill gaps in month/quarters
    if (this.isByMonth(chartConfig))
      this.fillMonthCategoryGaps(processedCategories);
    else if (this.isByQuarter(chartConfig))
      this.fillQuarterCategoryGaps(processedCategories);

    chartData.categories = processedCategories;
  },

  getExtendedCategoriesCount: function(chartConfig, chartData) {
    // Return the number of additional categories which were included for calculation of trailing average
    if (!this.isDateFilterExtendedForAverageCalculation(chartConfig))
      return 0;
    return chartData.categories.length - this.getNominalMonthCount(chartConfig);
  },

  specialSortCompare: function(a, b) {
    if (a == "Other")
      return 1;
    if (b == "Other")
      return -1;
    if (a.endsWith("|other") && !b.endsWith("|other"))
      return 1;
    if (b.endsWith("|other") && !a.endsWith("|other"))
      return -1;
    return 0;
  },

  getCategoryTitle: function(chartConfig) {
    if (chartConfig.xProperty == this.xProperties.country)
      return "Country";
    else if (chartConfig.xProperty == this.xProperties.model)
      return "Model";
    else if (chartConfig.xProperty == this.xProperties.brand)
      return "Brand";
    else if (chartConfig.xProperty == this.xProperties.company)
      return "Company";
    else if (this.isByMonth(chartConfig))
      return "Month";
    else if (this.isByQuarter(chartConfig))
      return "Quarter";
    else if (this.isByYear(chartConfig))
      return "Year";
  },

  getSeriesNameColumnHeader: function(chartConfig) {
    if (chartConfig.detailLevel == this.detailLevels.company)
      return "Company";
    else if (chartConfig.detailLevel == this.detailLevels.brand)
      return "Brand";
    else if (chartConfig.detailLevel == this.detailLevels.model && chartConfig.model == this.modelOptions.all)
      return "Model";
    else
      return "Country";
  },

  fillMonthCategoryGaps: function(categories) {
    let i = 0;
    while (i < categories.length - 1) {
      let year = parseInt(categories[i].substr(0, 4));
      let month = parseInt(categories[i].substr(5, 2));
      month++;
      if (month > 12) {
        year++;
        month = month - 12;
      }
      let nextMonthString = this.formatMonth(year, month);
      if (categories[i + 1] != nextMonthString)
        categories.splice(i + 1, 0, nextMonthString);
      i++;
    }
  },

  fillQuarterCategoryGaps: function(categories) {
    let i = 0;
    while (i < categories.length - 2) {
      let year = parseInt(categories[i].substr(0, 4));
      let quarter = parseInt(categories[i].substr(6, 1));
      quarter++;
      if (quarter > 4) {
        year++;
        quarter = quarter - 4;
      }
      let nextMonthString = this.formatQuarter(year, quarter);
      if (categories[i + 1] != nextMonthString)
        categories.splice(i + 1, 0, nextMonthString);
      i++;
    }
  },

  getNumberOfSeries: function(chartConfig) {
    if (chartConfig.xProperty != this.xProperties.country) {
      if (chartConfig.country == this.countryOptions.all) {
        return this.countriesWithData.length;
      } else if (chartConfig.country != null) {
        const countryValues = this.getCountries(chartConfig);
        if (countryValues.length > 1 && !countryValues.includes(this.countryOptions.combine)) {
          return countryValues.length;
        }
      }
    }
    if (this.isTimeXProperty(chartConfig) && chartConfig.detailLevel == this.detailLevels.company) {
      if (chartConfig.company == this.companyOptions.all)
        return this.companies.length;
      else if (chartConfig.company != null)
        return this.getCompanies(chartConfig).length;
    }
    if (this.isTimeXProperty(chartConfig) && chartConfig.detailLevel == this.detailLevels.brand) {
      if (chartConfig.brand == this.brandOptions.all) {
        if (chartConfig.company == this.companyOptions.all) {
          return this.brands.length;
        } else {
          const i = this.companyGroupNames.indexOf(chartConfig.company);
          if (i != -1)
            return this.companyGroupNames.length;
        }
      } else if (chartConfig.brand != null) {
        return this.getBrands(chartConfig).length;
      }
    }
    if (this.isTimeXProperty(chartConfig) && chartConfig.detailLevel == this.detailLevels.model) {
      if (chartConfig.model == this.modelOptions.all)
        return this.models.length;
      else if (chartConfig.model != null)
        return this.getModels(chartConfig).length;
    }
    return 1;
  },

  isBarChartAllowed: function(chartConfig) {
    if (chartConfig == null)
      return true;
    if (this.isMultiMetric(chartConfig))
      return true;
    if (this.isMultiXProperties(chartConfig))
      return false;
    if (chartConfig.metric == this.metrics.ratioElectric && chartConfig.detailLevel == this.detailLevels.total && chartConfig.country == this.countryOptions.all && chartConfig.xProperty != this.xProperties.country)
      return false;
    return this.getNumberOfSeries(chartConfig) <= 3 || this.isBarChartStacked(chartConfig);
  },

  isBarChartStacked: function(chartConfig) {
    // Check if countries are compatible
    let countryValues = this.getCountries(chartConfig);
    let includesGroup = false;
    let countryCount = 0;
    for (const i in countryValues) {
      let code = countryValues[i];
      if (countryGroups.includes(code))
        includesGroup = true;
      if (![this.countryOptions.all, this.countryOptions.combine].includes(code))
        countryCount++;
    }
    if (includesGroup && countryCount > 1)
      return false;
    // Check outher
    if ([this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric))
      return true;
    if ([this.metrics.ratioElectric, this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric)) {
      if (this.isCompanyBrandModelXProperty(chartConfig))
        return false;
      if (this.isSingleOrCombinedCountry(chartConfig))
        return true;
      if ([this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric) && this.isAllCountries(chartConfig))
        return true;
      if (chartConfig.detailLevel == this.detailLevels.company)
        return chartConfig.company == this.companyOptions.all;
      if (chartConfig.detailLevel == this.detailLevels.brand)
        return chartConfig.brand == this.brandOptions.all;
      if (chartConfig.detailLevel == this.detailLevels.model)
        return chartConfig.model == this.modelOptions.all;
    }
    return false;
  },

  isMetricPercent: function(metric) {
    return [this.metrics.ratioElectric, this.metrics.ratioElectricWithinCompanyOrBrand, this.metrics.shareElectric, this.metrics.shareAll].includes(metric);
  },

  areMetricsCompatible: function(chartConfig) {
    const metrics = this.getRealMetrics(chartConfig);
    for (const i in metrics) {
      if (![this.metrics.salesAll, this.metrics.salesElectric].includes(metrics[i]))
        return false;
    }
    return true;
  },

  isYAxis100Percent: function(chartConfig) {
    if (![this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric))
      return false;
    if (this.isCompanyBrandModelXProperty(chartConfig))
      return false;
    return chartConfig.company == this.companyOptions.all && chartConfig.brand == this.brandOptions.all && chartConfig.model == this.modelOptions.all;
  },

  getYAxisMax: function(chartConfig, chartData) {
    if (this.isYAxis100Percent(chartConfig))
      return 100;
    let maxValue = 0;
    if (chartConfig.view == db.views.barChart && db.isBarChartStacked(chartConfig)) {
      for (const i in chartData.categories) {
        let sum = 0;
        for (const j in chartData.series) {
          const series = chartData.series[j];
          sum = sum + series.data[i];
        }
        maxValue = Math.max(maxValue, sum);
      }
    } else {
      for (const i in chartData.series) {
        const series = chartData.series[i];
        for (const j in series.data) {
          maxValue = Math.max(maxValue, series.data[j]);
        }
      }
    }

    // Round to a nice number
    let x = Math.pow(10, Math.ceil(Math.log10(maxValue)) - 1) / 4;
    maxValue = Math.ceil(maxValue / x) * x;

    return maxValue;
  },

  isDateFilterExtendedForAverageCalculation: function(chartConfig) {
    return this.getRealTimeSpan(chartConfig) != this.timeSpanOptions.all && [this.xProperties.monthAvg3, this.xProperties.monthAvg12].includes(chartConfig.xProperty);
  },

  hasOtherSeries: function(chartConfig) {
    if (chartConfig.view == this.views.lineChart)
      return false;
    if (chartConfig.metric == this.metrics.ratioElectricWithinCompanyOrBrand)
      return false;
    return chartConfig.metric != this.metrics.ratioElectric || this.getSeriesNameColumnHeader(chartConfig) != "Country";
  },

  postProcessChartSeries: function(chartConfig, chartData) {
    // Creates the final data series

    const extendedCategoriesCount = this.getExtendedCategoriesCount(chartConfig, chartData);
    const maxSeriesOption = this.maxSeriesOptions[chartConfig.maxSeries];

    // Create series (entries of 'data' will be inserted in the order of 'chartData.categories')
    let processedSeries = [];
    let seriesByName = {};
    let seriesSortValues = {};
    for (const seriesName in chartData.seriesRows) {
      let newSeries = {};
      newSeries.name = seriesName;
      newSeries.data = [];
      let averageCalculationList = [];

      for (const i in chartData.categories) {
        const category = chartData.categories[i];
        const value = this.calculateDataPointValue(chartConfig, chartData.seriesRows[seriesName][category], averageCalculationList);

        let categoryIndex = i;
        // Skip the months which were included for calculation of trailing average
        if (i < extendedCategoriesCount)
          continue;
        categoryIndex = i - extendedCategoriesCount;

        // Add value to total series
        if (value != null) {
          newSeries.data.push(value);
        } else {
          if (chartConfig.view == this.views.barChart)
            newSeries.data.push(0);
          else
            newSeries.data.push(null);
        }
        // Add value to seriesSortValues
        if (value != null) {
          let sortValue = value;
          if (chartData.seriesRowsForSorting[seriesName] && maxSeriesOption.mostRelevant)
            sortValue = chartData.seriesRowsForSorting[seriesName][category];
          if (categoryIndex >= chartData.categories.length / 2)
            sortValue = sortValue * 2;
          if (seriesName in seriesSortValues)
            seriesSortValues[seriesName] += sortValue;
          else
            seriesSortValues[seriesName] = sortValue;
        }
      }
      seriesByName[seriesName] = newSeries;
    }

    // Add series to array in sorted order
    let seriesNamesInOrder = Object.keys(chartData.seriesRows);
    seriesNamesInOrder.sort(function(a, b) {
      return seriesSortValues[a] < seriesSortValues[b] ? 1 : seriesSortValues[a] > seriesSortValues[b] ? -1 : 0;
    });
    let count = 0;
    let otherSeries = {name: this.otherSeriesName, data: []};
    for (const i in seriesNamesInOrder) {
      const seriesName = seriesNamesInOrder[i];
      const currSeries = seriesByName[seriesName];
      if (currSeries.data.length == 0)
        continue;
      if (seriesName != this.otherSeriesName && count < maxSeriesOption.count) {
        processedSeries.push(currSeries);
        count++;
      } else {
        for (const j in currSeries.data) {
          const value = currSeries.data[j];
          if (value == null)
            continue;
          if (j in otherSeries.data)
            otherSeries.data[j] += value;
          else
            otherSeries.data[j] = value;
        }
      }
    }

    if (this.hasOtherSeries(chartConfig) && otherSeries.data.length > 0)
      processedSeries.push(otherSeries);

    // Store metric in data series
    for (const i in processedSeries) {
      processedSeries[i].metric = chartConfig.metric;
    }

    chartData.series = processedSeries;
  },

  calculateDataPointValue: function(chartConfig, rawValue, averageCalculationList) {
    // Returns the value for one data point, which can be the trailing average
    const value = this.getValueOrDefault(rawValue, null);
    let averageLength = 0;
    if (chartConfig.xProperty == this.xProperties.monthAvg3)
      averageLength = 3;
    else if (chartConfig.xProperty == this.xProperties.monthAvg12)
      averageLength = 12;
    else
      return value;

    averageCalculationList.push(value);
    if (averageCalculationList.length > averageLength)
      averageCalculationList.shift();
    if (value === null)
      return null;
    let sum = 0;
    let count = 0;
    for (const i in averageCalculationList) {
      if (averageCalculationList[i] != null) {
        sum = sum + averageCalculationList[i];
        count++;
      }
    }
    return sum / count;
  },

  queryRawChartData_absolute: function(chartConfig) {
    // Queries the data for one chart for the metrics salesAll and salesElectric
    let chartData;
    if (chartConfig.metric == this.metrics.salesAll)
      chartData = this.queryDatasets(chartConfig, false);
    else
      chartData = this.queryDatasets(chartConfig, true);
    chartData.seriesRowsForSorting = chartData.seriesRows;
    return chartData;
  },

  queryRawChartData_ratio: function(chartConfig) {
    // Queries the data for one chart for the metrics ratioElectric and ratioElectricWithinCompanyOrBrand
    let chartConfigForRatio = this.cloneObject(chartConfig);
    if (chartConfig.metric == this.metrics.ratioElectric) {
      chartConfigForRatio.detailLevel = this.detailLevels.total;
      chartConfigForRatio.company = this.companyOptions.all;
      chartConfigForRatio.brand = this.brandOptions.all;
      chartConfigForRatio.model = this.modelOptions.all;
    }
    let chartData = this.queryDatasets(chartConfig, true);
    let datasetsReference = this.queryDatasets(chartConfigForRatio, false, false);

    let valueExists = false;
    for (const seriesName in chartData.seriesRows) {
      let valuesForRatio = {};
      for (const i in chartData.categories) {
        const category = chartData.categories[i];
        let value = 0;
        if (chartConfig.metric == this.metrics.ratioElectric && chartConfigForRatio.brand == this.brandOptions.all && this.isSingleOrCombinedCountry(chartConfigForRatio)) {
          for (const seriesNameInner in datasetsReference.seriesRows) {
            value = value + this.getValueOrDefault(datasetsReference.seriesRows[seriesNameInner][category], 0);
          }
        }
        else if (datasetsReference.seriesRows[seriesName] != null)
          value = value + this.getValueOrDefault(datasetsReference.seriesRows[seriesName][category], 0);
        valuesForRatio[category] = value;
      }
      for (const i in chartData.categories) {
        const category = chartData.categories[i];
        let value = this.getValueOrDefault(chartData.seriesRows[seriesName][category], null);
        if (valuesForRatio[category] == 0)
          chartData.seriesRows[seriesName][category] = null;
        else {
          let val = value / valuesForRatio[category] * 100;
          if (val > 100) {
            console.log("Warning: Invalid data: EV sales is higher than All cars sales. series: " + seriesName + ", category: " + category);
            val = 100;
          }
          chartData.seriesRows[seriesName][category] = val;
          valueExists = true;
        }
      }
    }
    if (!valueExists)
      chartData.seriesRows = [];

    for (const i in datasetsReference.sources) {
      if (chartData.sources[i] == null)
        chartData.sources[i] = datasetsReference.sources[i];
    }

    chartData.seriesRowsForSorting = datasetsReference.seriesRows;
    return chartData;
  },

  queryRawChartData_share: function(chartConfig) {
    // Queries the data for one chart for the metrics shareElectric and shareAll
    let chartConfigForSum = this.cloneObject(chartConfig);
    if (this.isTimeXProperty(chartConfig)) {
      chartConfigForSum.company = this.companyOptions.all;
      chartConfigForSum.brand = this.brandOptions.all;
      chartConfigForSum.model = this.modelOptions.all;
    }
    let chartData;
    let datasetsReference;
    if (chartConfig.metric == this.metrics.shareElectric) {
      chartData = this.queryDatasets(chartConfig, true);
      datasetsReference = this.queryDatasets(chartConfigForSum, true, false);
    } else {
      chartData = this.queryDatasets(chartConfig, false);
      datasetsReference = this.queryDatasets(chartConfigForSum, false, false);
    }
    const seriesRowsKeys = Object.keys(chartData.seriesRows);
    if (seriesRowsKeys.length == 1 && [this.otherSeriesName, this.unknownSeriesName].includes(seriesRowsKeys[0])) {
      chartData.seriesRows = {}; // market split with only 1 series is not useful
    }

    let sums = {};
    const isSumPerSeries = this.isCompanyBrandModelXProperty(chartConfig);
    if (isSumPerSeries) {
      // sum per series
      for (const seriesName in chartData.seriesRows) {
        let sum = 0;
        for (const i in datasetsReference.categories) {
          const category = datasetsReference.categories[i];
          sum = sum + this.getValueOrDefault(datasetsReference.seriesRows[seriesName][category], 0);
        }
        sums[seriesName] = sum;
      }
    } else {
      // sum per category
      for (const i in chartData.categories) {
        const category = chartData.categories[i];
        let sum = 0;
        for (const seriesName in datasetsReference.seriesRows) {
          sum = sum + this.getValueOrDefault(datasetsReference.seriesRows[seriesName][category], 0);
        }
        sums[category] = sum;
      }
    }
    for (const seriesName in chartData.seriesRows) {
      for (const i in chartData.categories) {
        const category = chartData.categories[i];
        let value = this.getValueOrDefault(chartData.seriesRows[seriesName][category], null);
        let sum;
        if (isSumPerSeries)
          sum = sums[seriesName];
        else
          sum = sums[category];
        if (sum != 0)
          chartData.seriesRows[seriesName][category] = value / sum * 100;
      }
    }

    chartData.seriesRowsForSorting = chartData.seriesRows;
    return chartData;
  },

  queryChartDataSingle: function(chartConfig, sortByName) {
    // Queries the chart data for a single metric and single xProperty.
    let chartData;

    if ([this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric))
      chartData = this.queryRawChartData_absolute(chartConfig);
    else if ([this.metrics.ratioElectric, this.metrics.ratioElectricWithinCompanyOrBrand].includes(chartConfig.metric))
      chartData = this.queryRawChartData_ratio(chartConfig);
    else if ([this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric))
      chartData = this.queryRawChartData_share(chartConfig);

    this.postProcessCategories(chartConfig, chartData, sortByName);
    this.postProcessChartSeries(chartConfig, chartData);

    // Remove additional categories which were included for calculation of trailing average
    chartData.categories.splice(0, this.getExtendedCategoriesCount(chartConfig, chartData));

    this.addHintsAfterProcessing_incompleteData(chartConfig, chartData);
    this.addHintsAfterProcessing_partiallyUnknown(chartConfig, chartData);

    return chartData;
  },

  unfoldForQuery: function(chartConfig) {
    // Splits one chart config into multiple chart config by unfolding one parameter.
    // The resulting chart configs can be passed to queryChartDataSingle().
    if (this.isMultiMetric(chartConfig)) {
      let newChartConfigs = [];
      const metrics = this.getRealMetrics(chartConfig);
      for (const i in metrics) {
        let newConfig = this.cloneObject(chartConfig);
        newConfig.metric = metrics[i];
        newConfig.unfoldForQueryParamName = "metric";
        newChartConfigs.push(newConfig);
      }
      return newChartConfigs;
    }
    // xProperty
    if (this.isMultiXProperties(chartConfig)) {
      let newChartConfigs = [];
      const xProperties = chartConfig.xProperty.split(",");
      for (const i in xProperties) {
        let newConfig = this.cloneObject(chartConfig);
        newConfig.xProperty = xProperties[i];
        newConfig.timeSpan = this.getRealTimeSpan(chartConfig); // avoid different time spans
        newConfig.unfoldForQueryParamName = "xProperty";
        newChartConfigs.push(newConfig);
      }
      return newChartConfigs;
    }
    return [chartConfig];
  },

  reorderSeriesData: function(chartData, seriesIndex, referenceCategories) {
    // Creates a new data series based on data from `chartData` and data point order of `referenceCategories`.
    let series = chartData.series[seriesIndex];
    let result = {};
    result.name = series.name;
    result.metric = series.metric;
    result.data = [];
    for (const i in referenceCategories) {
      let category = referenceCategories[i];
      let dataIndex = chartData.categories.indexOf(category);
      if (dataIndex == -1)
        result.data.push(null);
      else
        result.data.push(series.data[dataIndex]);
    }
    return result;
  },

  queryChartData: function(chartConfig, sortByName) {
    // Queries the data for one chart.
    // Can combine multiple metrics and x-properties.
    let chartData;
    const chartConfigs = this.unfoldForQuery(chartConfig);
    for (const i in chartConfigs) {
      const newChartData = this.queryChartDataSingle(chartConfigs[i], sortByName);
      if (chartData != null) {
        for (const j in newChartData.series) {
          chartData.series.push(this.reorderSeriesData(newChartData, j, chartData.categories));
        }
        for (const j in newChartData.sources) {
          if (chartData.sources[j] == null)
            chartData.sources[j] = newChartData.sources[j];
        }
      } else {
        chartData = newChartData;
      }
    }

    return chartData;
  }
};

db.initialize();
