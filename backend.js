// This file defines the database object, which stores the data sets and allows to query them.

"use strict";

var db = {
  totalSeriesName: "Total",

  singleSeriesName: "Value",

  countries: {},
  // Code => ID

  countriesCodes: {},
  // ID => Code

  countryNames: {},
  // ID => Name

  countryNamesReverse: {},
  // Name => ID

  countriesWithData: [],
  // List of IDs

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
    };
    if (dateString.substr(5, 1) == 'Q') {
      dataset.perQuarter = true;
      dataset.data = {};
      for (const key in data) {
        const val = Math.round(data[key] / 3);
        if (val > 0)
          dataset.data[key] = val;
      }
      dataset.year = parseInt(dateString.substr(0, 4));
      dataset.month = this.quarterToMonth(parseInt(dateString.substr(6, 1)));
      for (let i = 0; i < 3; i++) {
        dataset.monthString = this.formatMonth(dataset.year, dataset.month);
        this.datasets.push(this.cloneObject(dataset));
        dataset.month++;
      }
    } else {
      dataset.monthString = dateString;
      dataset.year = parseInt(dateString.substr(0, 4));
      dataset.month = parseInt(dateString.substr(5, 2));
      dataset.data = data;
      this.datasets.push(dataset);
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

  metrics:
  { "all": "all-metrics"
  , "salesAll": "all-sales"
  , "salesElectric": "electric-sales"
  , "ratioElectric": "electric-ratio"
  , "ratioElectricWithinCompanyOrBrand": "brand-electric-ratio"
  , "shareElectric": "electric-share"
  , "shareAll": "all-share"
  },

  xProperties:
  { "month": "month"
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
      return str.replace(/ /g, "-");
  },

  isByMonth: function(chartConfig) {
    return [this.xProperties.month, this.xProperties.monthAvg3, this.xProperties.monthAvg12].includes(chartConfig.xProperty);
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

  isCompanyBrandModelXProperty: function(chartConfig) {
    return [this.xProperties.company, this.xProperties.brand, this.xProperties.model].includes(chartConfig.xProperty);
  },

  isMultiCountry: function(chartConfig) {
    return chartConfig.country == this.countryOptions.all || chartConfig.country.includes(",");
  },

  isCombinedCountry: function(chartConfig) {
    return this.getCountries(chartConfig).includes(this.countryOptions.combine);
  },

  isSingleOrCombinedCountry: function(chartConfig) {
    return !this.isMultiCountry(chartConfig) || this.isCombinedCountry(chartConfig);
  },

  getCountries: function(chartConfig) {
    if (chartConfig.country == null)
      return [];
    return chartConfig.country.split(",");
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
      param.allOptions = {};
      param.allOptions[this.countryOptions.all] = "All Countries";
      param.allOptions[this.countryOptions.combine] = "Combine Countries";
      for (const i in this.countriesWithData) {
        const id = this.countriesWithData[i];
        param.allOptions[db.countriesCodes[id]] = this.countryNames[id];
      }
      param.options = this.cloneObject(param.allOptions);
      if (chartConfig != null && !((chartConfig.country == null || this.isMultiCountry(chartConfig)) && (chartConfig.metric != this.metrics.shareAll || chartConfig.xProperty != this.xProperties.brand)))
        delete param.options[this.countryOptions.combine];
      param.unfoldKey = this.countryOptions.all;
      param.excludeOnUnfoldAndTitle = [this.countryOptions.all, this.countryOptions.combine];
      param.noMultiSelectOptions = [this.countryOptions.all];
      param.disableUnfoldOption = this.countryOptions.combine;
      param.additiveOptions = [this.countryOptions.combine];
      param.defaultOption = this.countryOptions.all;
      param.showInTitle = true;
      param.showAsFilter = chartConfig == null || chartConfig.xProperty != this.xProperties.country;
      param.allowMultiSelection = true;
      result[param.name] = param;
    }

    // metric
    {
      let param = {};
      param.name = "metric";
      param.title = "Metric";
      param.options = {};
      param.options[this.metrics.salesElectric] = "Absolute EV Sales";
      param.options[this.metrics.ratioElectric] = "Relative EV Sales";
      param.options[this.metrics.shareElectric] = "EV Market Split";
      param.options[this.metrics.salesAll] = "All Cars Sales";
      param.options[this.metrics.ratioElectricWithinCompanyOrBrand] = "EV Ratio within Company/Brand";
      param.options[this.metrics.shareAll] = "All Cars Market Split";
      param.options[this.metrics.all] = "All Metrics";
      param.allOptions = param.options;
      param.unfoldKey = this.metrics.all;
      param.noMultiSelectOptions = [this.metrics.all];
      param.defaultOption = this.metrics.ratioElectric;
      param.alwaysAddToUrl = true;
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
      param.options[this.xProperties.month] = "By Month";
      param.options[this.xProperties.monthAvg3] = "3-month Average";
      param.options[this.xProperties.monthAvg12] = "12-month Average";
      param.options[this.xProperties.quarter] = "By Quarter";
      param.options[this.xProperties.year] = "By Year";
      if (chartConfig == null || [this.metrics.salesAll, this.metrics.salesElectric, this.metrics.ratioElectric].includes(chartConfig.metric))
        param.options[this.xProperties.country] = "By Country";
      if (chartConfig == null || ![this.metrics.ratioElectric].includes(chartConfig.metric))
        param.options[this.xProperties.company] = "By Company";
      if (chartConfig == null || chartConfig.metric != this.metrics.ratioElectric)
        param.options[this.xProperties.brand] = "By Brand";
      if (chartConfig == null || [this.metrics.salesElectric, this.metrics.shareElectric].includes(chartConfig.metric))
        param.options[this.xProperties.model] = "By Model";
      param.allOptions = param.options;
      param.defaultOption = this.xProperties.quarter;
      param.alwaysAddToUrl = true;
      param.showAsFilter = true;
      param.showInTitle = chartConfig == null || [this.xProperties.monthAvg3, this.xProperties.monthAvg12].includes(chartConfig.xProperty);
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
      if (chartConfig == null || ![this.metrics.shareElectric, this.metrics.shareAll, this.metrics.ratioElectricWithinCompanyOrBrand].includes(chartConfig.metric))
        param.options[this.detailLevels.total] = "Total";
      if (chartConfig == null || !this.isCompanyBrandModelXProperty(chartConfig)) {
        param.options[this.detailLevels.company] = "Split Companies";
        param.options[this.detailLevels.brand] = "Split Brands";
        if (chartConfig == null || ![this.metrics.salesAll, this.metrics.shareAll, this.metrics.ratioElectricWithinCompanyOrBrand].includes(chartConfig.metric))
          param.options[this.detailLevels.model] = "Split Models";
      }
      param.allOptions = param.options;
      param.defaultOption = this.detailLevels.company;
      param.alwaysAddToUrl = true;
      param.showAlwaysAsActive = true;
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
      if (chartConfig != null && param.showAsFilter) {
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
          param.options["other"] = "Other";
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
    if (!this.isByQuarter(chartConfig)) {
      param.options[this.timeSpanOptions.last3m] = "Last 3 Months";
      param.options[this.timeSpanOptions.last6m] = "Last 6 Months";
    }
    param.options[this.timeSpanOptions.last1y] = "Last Year";
    param.options[this.timeSpanOptions.last2y] = "Last 2 Years";
    param.options[this.timeSpanOptions.last3y] = "Last 3 Years";
    param.options[this.timeSpanOptions.last4y] = "Last 4 Years";
    param.options[this.timeSpanOptions.last5y] = "Last 5 Years";
    param.options[this.timeSpanOptions.last6y] = "Last 6 Years";
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = 1 + currentDate.getMonth();
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
    if (![this.xProperties.monthAvg3, this.xProperties.quarter].includes(chartConfig.xProperty)) {
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
    for (let i = 0; i <= 4; i++) {
      param.options["y" + year] = year;
      year--;
    }
    // Allow to select a time spans which is not included in the suggested options
    if (chartConfig.timeSpan != null && param.options[chartConfig.timeSpan] == null) {
      let text = chartConfig.timeSpan.substr(1);
      if (chartConfig.timeSpan.startsWith("q")) {
        const year = chartConfig.timeSpan.substr(1, 4);
        const quarter = chartConfig.timeSpan.substr(6, 1);
        text = this.formatQuarter(year, quarter);
      }
      param.options[chartConfig.timeSpan] = text;
    }
  },

  getRealTimeSpan: function(chartConfig) {
    if (chartConfig.timeSpan == this.timeSpanOptions.auto) {
      if (this.isByYear(chartConfig))
        return this.timeSpanOptions.all;
      else if ([this.xProperties.quarter, this.xProperties.monthAvg12].includes(chartConfig.xProperty))
        return this.timeSpanOptions.last3y;
      else
        return this.timeSpanOptions.last2y;
    }
    return chartConfig.timeSpan;
  },

  getNominalMonthCount: function(chartConfig) {
    const timeSpan = this.getRealTimeSpan(chartConfig);
    if (timeSpan == this.timeSpanOptions.last3m)
      return 3;
    if (timeSpan == this.timeSpanOptions.last6m)
      return 6;
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
    chartConfig = this.makeChartConfigValid(chartConfig, changedParamName);
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
    s = s.replace(/-/g, "");
    s = s.replace(/\./g, "");
    s = s.replace(/ä/g, "ae");
    s = s.replace(/ö/g, "oe");
    s = s.replace(/ü/g, "ue");
    s = s.replace(/ß/g, "ss");
    s = s.replace(/é/g, "e");
    s = s.replace(/ë/g, "e");
    s = s.replace(/Š/g, "s");
    s = s.toLowerCase();
    return s;
  },

  decodeChartConfigString: function(chartConfigString) {
    let parts = [];
    if (chartConfigString != "") {
      const partsRaw = chartConfigString.split(":");
      // process strings for backward compatibility
      for (const i in partsRaw) {
        let part = partsRaw[i];
        if (part == "combine-brands")
          part = this.detailLevels.total;
        else if (part == "all-models")
          part = this.detailLevels.model;
        parts.push(part);
      }
    }
    let result = {};
    let params = this.getChartParams();
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
          if (this.normalizeSearchString(db.urlEncode(key)) == partNormalized) {
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
        } else if (param.name == "timeSpan" && Number.isInteger(parseInt(part[1])) && (part.startsWith("m") || part.startsWith("q") || part.startsWith("y"))) {
          // Allow to select a time spans which is not included in the suggested options
          selectedValues.push(part);
        }
      }
      if (selectedValues.length == 0)
        selectedValues.push(param.defaultOption);
      result[param.name] = selectedValues.join(",");
      params = this.getChartParams(result);
    }

    result.unfoldedByParams = [];

    return this.makeChartConfigValid(result);
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

    if (chartConfig.metric.includes(",")) {
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

    if (chartConfig.country == this.countryOptions.all && !Object.keys(params.country.options).includes(this.countryOptions.all))
      chartConfig.country = db.countriesCodes[this.countriesWithData[0]];

    if (!Object.keys(params.xProperty.options).includes(chartConfig.xProperty))
      chartConfig.xProperty = params.xProperty.defaultOption;

    if( this.isCompanyBrandModelXProperty(chartConfig))
      chartConfig.detailLevel = "";
    else if (!Object.keys(params.detailLevel.options).includes(chartConfig.detailLevel))
      chartConfig.detailLevel = params.detailLevel.defaultOption;

    if (chartConfig.company == null)
      chartConfig.company = params.company.defaultOption;
    if (chartConfig.brand == null)
      chartConfig.brand = params.brand.defaultOption;
    if (chartConfig.model == null)
      chartConfig.model = params.model.defaultOption;

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

    if (!Object.keys(params.view.options).includes(chartConfig.view))
      chartConfig.view = params.view.defaultOption;

    // reset brand filter, when company filter is reset
    if (changedParamName == "company" && chartConfig.company == this.companyOptions.all)
      chartConfig.brand = this.brandOptions.all;

    return chartConfig;
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
    if (chartConfig.metric == this.metrics.all || chartConfig.metric.includes(","))
      return true;
    if (!this.isTimeXProperty(chartConfig))
      return false;
    let count = 0;
    if (this.isMultiCountry(chartConfig) && !this.isCombinedCountry(chartConfig))
      count++;
    if (chartConfig.detailLevel == this.detailLevels.company && (chartConfig.company == this.companyOptions.all || this.getCompanies(chartConfig).length > 1))
      count++;
    if (chartConfig.detailLevel == this.detailLevels.brand && (chartConfig.brand == this.brandOptions.all || this.getBrands(chartConfig).length > 1))
      count++;
    if (chartConfig.detailLevel == this.detailLevels.model && (chartConfig.model == this.modelOptions.all || this.getModels(chartConfig).length > 1))
      count++;
    return count > 1;
  },

  unfoldChartConfig: function(chartConfig) {
    let result = [];
    let unfoldedByParams = [];
    result.push(chartConfig);
    const params = this.getChartParams();
    for (const i in params) {
      if (!this.needsUnfold(result[0]))
        break;
      const param = params[i];
      let values = [];
      if (param.unfoldKey && chartConfig[param.name] == param.unfoldKey)
        values = Object.keys(param.options);
      else if (param.allowMultiSelection && chartConfig[param.name] != null) {
        values = chartConfig[param.name].split(",");
        if (param.disableUnfoldOption != null && values.includes(param.disableUnfoldOption))
          continue;
      }
      if (values.length <= 1)
        continue;
      let newResult = [];
      for (const j in result) {
        for (const k in values) {
          if (param.excludeOnUnfoldAndTitle && param.excludeOnUnfoldAndTitle.includes(values[k]))
            continue;
          if (param.unfoldKey == values[k])
            continue;
          if (!unfoldedByParams.includes(param.name))
            unfoldedByParams.push(param.name);
          let newConfig = this.cloneObject(result[j]);
          newConfig[param.name] = values[k];
          newConfig = this.makeChartConfigValid(newConfig);
          newConfig.unfoldedByParams = unfoldedByParams;
          newResult.push(newConfig);
        }
      }
      result = newResult;
    }
    return result;
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
      if (!isSingleChart && !chartConfig.unfoldedByParams.includes(param.name))
        continue;
      let text = param.options[value];
      if (param.name == "metric") {
        if (value == this.metrics.ratioElectricWithinCompanyOrBrand) {
          if (chartConfig.xProperty != this.xProperties.brand && chartConfig.detailLevel == this.detailLevels.company)
            text = "EV Ratio within Company";
          else
            text = "EV Ratio within Brand";
        }
        if (this.combineMetricAndCompanyOrBrandInTitle(chartConfig)) {
          if (chartConfig.brand == this.brandOptions.all)
            text = text + " within " + params.company.options[chartConfig.company];
          else
            text = text + " within " + params.brand.options[chartConfig.brand];
        }
      } else if ((param.name == "company" || param.name == "brand") && chartConfig.model != this.modelOptions.all) {
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
    return parts.join(" – ");
  },

  getChartSubTitle: function(chartConfig, screenshotMode) {
    let parts = [];
    if (screenshotMode && this.isMultiCountry(chartConfig) && this.isCombinedCountry(chartConfig)) {
      const countryValues = this.getCountries(chartConfig);
      let countrieNames = [];
      if (countryValues.includes(this.countryOptions.all)) {
        for (const i in this.countriesWithData) {
          const id = this.countriesWithData[i];
          countrieNames.push(this.countryNames[id]);
        }
      } else {
        for (const i in countryValues) {
          const code = countryValues[i];
          const id = this.countries[code];
          if (id != null)
            countrieNames.push(this.countryNames[id]);
        }
      }
      const count = countrieNames.length;
      const maxDisplayCount = 8;
      if (count > maxDisplayCount) {
        countrieNames = countrieNames.slice(0, maxDisplayCount - 1);
        const moreCountriesCount = count - maxDisplayCount + 1;
        countrieNames.push("+" + moreCountriesCount + " countries");
      }
      parts.push(countrieNames.join(", "));
    }
    return parts.join(" – ");
  },

  combineMetricAndCompanyOrBrandInTitle: function(chartConfig) {
    return [this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric) && (chartConfig.detailLevel == this.detailLevels.brand || [this.xProperties.brand, this.xProperties.model].includes(chartConfig.xProperty)) && chartConfig.company != this.companyOptions.all;
  },

  queryDatasets: function(chartConfig, onlyEvs, withHints = true) {
    // Returns datasets for chart
    const countryValues = this.getCountries(chartConfig);
    let filterCountryIds = [];
    if (chartConfig.country != this.countryOptions.all) {
      for (const i in countryValues) {
        const code = countryValues[i];
        const id = this.countries[code];
        if (id && db.countriesWithData.includes(id))
          filterCountryIds.push(id);
      }
    }

    let filterCompanies = [];
    if (chartConfig.company != this.companyOptions.all && chartConfig.xProperty != this.xProperties.company)
      filterCompanies = this.getCompanies(chartConfig);
    let filterBrands = [];
    if (chartConfig.brand != this.brandOptions.all && chartConfig.xProperty != this.xProperties.brand)
      filterBrands = this.getBrands(chartConfig);
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
    let usedDatasetTypes = [];

    for (const i in this.datasets) {
      const dataset = this.datasets[i];
      if (dataset.isEvs != onlyEvs)
        continue;
      if (filterCountryIds.length > 0 && !filterCountryIds.includes(dataset.country))
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
      else if (chartConfig.xProperty == this.xProperties.country)
        category = dataset.countryName;

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
          category = "Other";

        // set seriesName
        let seriesName = this.singleSeriesName;
        if (filterCountryIds.length != 1 && !countryValues.includes(this.countryOptions.combine) && chartConfig.xProperty != this.xProperties.country)
          seriesName = dataset.countryName;
        else if (!this.isCompanyBrandModelXProperty(chartConfig)) {
          if (chartConfig.detailLevel == this.detailLevels.company && filterCompanies.length != 1)
            seriesName = company;
          else if (chartConfig.detailLevel == this.detailLevels.brand && filterBrands.length != 1)
            seriesName = brand;
          else if (chartConfig.detailLevel == this.detailLevels.model && filterModels.length != 1) {
            if (dataset.dsType == this.dsTypes.ElectricCarsByBrand && dataKey != "other")
              seriesName = dataKey + "|other";
            else
              seriesName = dataKey;
          }
        }

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
      if (!usedDatasetTypes.includes(dataset.dsType))
        usedDatasetTypes.push(dataset.dsType);
    }

    this.removeLastIncompleteMonthOrQuarter(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan);
    this.removeMostRecentMonthIfIncomplete(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan);

    let hints = [];
    if (withHints)
      hints = this.getHints(chartConfig, sources, categories, monthsPerCountryAndTimeSpan, gapDetectionData, monthsInRange, nonMonthlyCountries, usedDatasetTypes);

    return {
      seriesRows: seriesRows,
      sources: sources,
      categories: categories,
      hints: hints
    };
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
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = 1 + currentDate.getMonth();
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
      if (this.isTimeSpanExtendedForAverageCalculation(chartConfig))
        dateFilters.firstYear = dateFilters.firstYear - 1;
    }
    return dateFilters;
  },

  isTimeSpanExtendedForAverageCalculation: function(chartConfig) {
    return this.getRealTimeSpan(chartConfig) != this.timeSpanOptions.all && [this.xProperties.monthAvg3, this.xProperties.monthAvg12].includes(chartConfig.xProperty);
  },

  removeLastIncompleteMonthOrQuarter: function(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan) {
    if (!this.isByMonth(chartConfig) && !this.isByQuarter(chartConfig))
      return;
    if ( ![this.metrics.salesElectric, this.metrics.salesAll].includes(chartConfig.metric))
      return;
    if (categories.length == 0)
      return;
    categories.sort();
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
    const currentDate = new Date();
    if (date < currentDate)
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
    if (!this.isCombinedCountry(chartConfig))
      return;
    if (categories.length == 0)
      return;
    categories.sort();
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

  getHints: function(chartConfig, sources, categories, monthsPerCountryAndTimeSpan, gapDetectionData, monthsInRange, nonMonthlyCountries, usedDatasetTypes) {
    let hints = [];

    // missing countries
    if (chartConfig.country.includes(this.countryOptions.all) && this.isCombinedCountry(chartConfig)) {
      hints.push("Those are not the 'worldwide' numbers, because several countries are missing.");
    }

    // gap detection (missing months in data series)
    if (chartConfig.detailLevel != this.detailLevels.total) {
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
      if (errorIndicatorSum >= 0.2)
        hints.push("<span class='important'>Data is likely very incomplete as it is based on monthly top models/brands.</span>");
      else if (errorIndicatorSum >= 0.05)
        hints.push("Data is likely incomplete as it is based on monthly top models/brands.");
    }

    // parse general hints
    const keyword = " (Incomplete: ";
    for (const text in sources) {
      let i = text.indexOf(keyword);
      if (i == -1)
        continue;
      i = i + keyword.length;
      const j = text.indexOf(")", i);
      if (j == -1)
        continue;
      if (text.includes("not listed by name") && chartConfig.xProperty != this.xProperties.model)
        continue;
      const sourceInfo = sources[text];
      let hint = "";
      if (this.isMultiCountry(chartConfig))
        hint = hint + this.countryNames[sourceInfo.country] + ": ";
      hint = hint + text.substr(i, j - i);
      if (!hints.includes(hint))
        hints.push(hint);
    }

    // incomplete year or quarter
    if (this.isByQuarter(chartConfig) || this.isByYear(chartConfig) || chartConfig.timeSpan.startsWith("q") || chartConfig.timeSpan.startsWith("y")) {
      if (this.isTimeXProperty(chartConfig))
        categories.sort();
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentQuarter = this.formatQuarter(currentYear, this.monthToQuarter(1 + currentDate.getMonth()));
      let expectedNumberOfMonth;
      if (this.isByQuarter(chartConfig) || chartConfig.timeSpan.startsWith("q"))
        expectedNumberOfMonth = 3;
      else
        expectedNumberOfMonth = 12;
      for (const countryName in monthsPerCountryAndTimeSpan) {
        const monthsPerTimeSpan = monthsPerCountryAndTimeSpan[countryName];
        let timeSpansToReport = [];
        if (this.isByQuarter(chartConfig) || this.isByYear(chartConfig)) {
          for (const timeSpan in monthsPerTimeSpan) {
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
          hints.push(hint);
        }
      }
    }

    // missing month/quarter/year
    if (this.isTimeXProperty(chartConfig) && this.isCombinedCountry(chartConfig)) {
      categories.sort();
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      for (const i in categories) {
        const timeSpan = categories[i];
        let missingCountries = [];
        for (const countryName in monthsPerCountryAndTimeSpan) {
          const monthsPerTimeSpan = monthsPerCountryAndTimeSpan[countryName];
          if (monthsPerTimeSpan[timeSpan] === undefined && timeSpan != currentYear)
            missingCountries.push(countryName);
        }
        if (missingCountries.length > 0) {
          if (missingCountries.length > 6)
            hints.push(timeSpan + ": Missing data for " + missingCountries.length + " countries.");
          else
            hints.push(timeSpan + ": Missing data for " + missingCountries.join(", ") + ".");
        }
      }
    }

    // monthly data is not available
    if ([this.xProperties.month, this.xProperties.monthAvg3].includes(chartConfig.xProperty)) {
      for (const i in nonMonthlyCountries) {
        let hint = "Monthly data is derived from quarterly data.";
        if (this.isMultiCountry(chartConfig)) {
          const countryId = nonMonthlyCountries[i];
          hint = this.countryNames[countryId] + ": " + hint;
        }
        hints.push(hint);
      }
    }

    // all cars data per company/brand not available
    if (chartConfig.metric == this.metrics.salesAll && usedDatasetTypes.includes(this.dsTypes.AllCarsTotal)) {
      if (chartConfig.detailLevel == this.detailLevels.company) {
        if (usedDatasetTypes.includes(this.dsTypes.AllCarsByBrand))
          hints.push("Data per company is partially not available.");
        else
          hints.push("Data per company is not available.");
      } else if (chartConfig.detailLevel == this.detailLevels.brand) {
        if (usedDatasetTypes.includes(this.dsTypes.AllCarsByBrand))
          hints.push("Data per brand is partially not available.");
        else
          hints.push("Data per brand is not available.");
      }
    }

    // ev data per company/brand/model not available
    if (usedDatasetTypes.includes(this.dsTypes.ElectricCarsTotal) || usedDatasetTypes.includes(this.dsTypes.ElectricCarsTotal)) {
      if (chartConfig.detailLevel == this.detailLevels.company) {
        if (usedDatasetTypes.includes(this.dsTypes.ElectricCarsByModel) || usedDatasetTypes.includes(this.dsTypes.ElectricCarsByBrand))
          hints.push("Data per company is partially not available.");
        else
          hints.push("Data per company is not available.");
      } else if (chartConfig.detailLevel == this.detailLevels.brand) {
        if (usedDatasetTypes.includes(this.dsTypes.ElectricCarsByModel) || usedDatasetTypes.includes(this.dsTypes.ElectricCarsByBrand))
          hints.push("Data per brand is partially not available.");
        else
          hints.push("Data per brand is not available.");
      } else if (chartConfig.detailLevel == this.detailLevels.model) {
        if (usedDatasetTypes.includes(this.dsTypes.ElectricCarsByModel))
          hints.push("Data per model is partially not available.");
        else
          hints.push("Data per model is not available.");
      }
    }

    return hints;
  },

  getCategoriesFromDatasets: function(chartConfig, datasets, sortByName = false) {
    // Sort categories and limit count
    let categories = datasets.categories;
    let seriesRows = datasets.seriesRows;
    let result = [];
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
    let count = 0;
    for (const i in categories) {
      const category = categories[i];
      result.push(category);
      count++;
      if (count == maxSeriesOption.count && !this.isTimeXProperty(chartConfig) && chartConfig.view != this.views.table)
        break;
    }

    // Fill gaps in month/quarters
    if (this.isByMonth(chartConfig))
      this.fillMonthCategoryGaps(result);
    else if (this.isByQuarter(chartConfig))
      this.fillQuarterCategoryGaps(result);

    return result;
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
    return 1;
  },

  isBarChartAllowed: function(chartConfig) {
    if (chartConfig == null)
      return true;
    if (chartConfig.metric == this.metrics.all)
      return true;
    if (chartConfig.metric == this.metrics.ratioElectric && chartConfig.detailLevel == this.detailLevels.total && chartConfig.country == this.countryOptions.all && chartConfig.xProperty != this.xProperties.country)
      return false;
    return this.getNumberOfSeries(chartConfig) <= 3 || this.isBarChartStacked(chartConfig);
  },

  isBarChartStacked: function(chartConfig) {
    if ([this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric))
      return true;
    if ([this.metrics.ratioElectric, this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric)) {
      if (this.isCompanyBrandModelXProperty(chartConfig))
        return false;
      if (chartConfig.detailLevel == this.detailLevels.company)
        return chartConfig.company == this.companyOptions.all;
      if (chartConfig.detailLevel == this.detailLevels.brand)
        return chartConfig.brand == this.brandOptions.all;
      if (chartConfig.detailLevel == this.detailLevels.model)
        return chartConfig.model == this.modelOptions.all;
    }
    return false;
  },

  isYAxisPercent: function(chartConfig) {
    return [this.metrics.ratioElectric, this.metrics.ratioElectricWithinCompanyOrBrand, this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric);
  },

  isYAxis100Percent: function(chartConfig) {
    if (![this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric))
      return false;
    if (this.isCompanyBrandModelXProperty(chartConfig))
      return false;
    return chartConfig.company == this.companyOptions.all && chartConfig.brand == this.brandOptions.all && chartConfig.model == this.modelOptions.all;
  },

  queryChartData_createSeries: function(chartConfig, isSingleChart, seriesRows, seriesRowsForSorting, result) {
    // Creates the chart series based on 'seriesRows' and assigns them to 'result'

    let isTimeSpanExtendedForAverageCalculation = this.isTimeSpanExtendedForAverageCalculation(chartConfig);
    if (isTimeSpanExtendedForAverageCalculation && Object.keys(seriesRows).length > 0) {
      const categoriesCount = Object.keys(seriesRows[Object.keys(seriesRows)[0]]).length;
      if (categoriesCount <= this.getNominalMonthCount(chartConfig))
        isTimeSpanExtendedForAverageCalculation = false;
    }
    const maxSeriesOption = this.maxSeriesOptions[chartConfig.maxSeries];

    // Create series (entries of 'data' will be inserted in the order of 'result.categories')
    result.series = [];
    let seriesByName = {};
    let seriesNamesInOrder = [];
    let seriesSortValues = {};
    let totalSeries = {name: this.totalSeriesName, data: []};
    for (const seriesName in seriesRows) {
      seriesNamesInOrder.push(seriesName);
      let newSeries = {};
      newSeries.name = seriesName;
      newSeries.data = [];
      let averageCalculationList = [];

      for (const i in result.categories) {
        const category = result.categories[i];
        const value = this.queryChartData_calculateAverageValue(chartConfig, seriesRows[seriesName][category], averageCalculationList);

        let categoryIndex = i;
        // Skip first 12 months which were included for calculation of trailing average
        if (isTimeSpanExtendedForAverageCalculation) {
          if (i < 12)
            continue;
          categoryIndex = i - 12;
        }

        // Add value to total series
        if (value != null) {
          newSeries.data.push(value);
          if (categoryIndex in totalSeries.data)
            totalSeries.data[categoryIndex] += value;
          else
            totalSeries.data[categoryIndex] = value;
        } else {
          if (chartConfig.view == this.views.barChart)
            newSeries.data.push(0);
          else
            newSeries.data.push(null);
        }
        // Add value to seriesSortValues
        if (value != null) {
          let sortValue = value;
          if (seriesRowsForSorting[seriesName] && maxSeriesOption.mostRelevant)
            sortValue = seriesRowsForSorting[seriesName][category];
          if (categoryIndex >= result.categories.length / 2)
            sortValue = sortValue * 2;
          if (seriesName in seriesSortValues)
            seriesSortValues[seriesName] += sortValue;
          else
            seriesSortValues[seriesName] = sortValue;
        }
      }
      seriesByName[seriesName] = newSeries;
    }

    if (isSingleChart && Object.keys(seriesRows).length > 1 && chartConfig.view != this.views.barChart && [this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric))
      result.series.push(totalSeries);

    // Add series to array in sorted order
    seriesNamesInOrder.sort(function(a, b) {
      return seriesSortValues[a] < seriesSortValues[b] ? 1 : seriesSortValues[a] > seriesSortValues[b] ? -1 : 0;
    });
    let count = 0;
    let otherSeries = {name: "Other", data: []};
    for (const i in seriesNamesInOrder) {
      const seriesName = seriesNamesInOrder[i];
      const currSeries = seriesByName[seriesName];
      if (seriesName != "other" && count < maxSeriesOption.count) {
        result.series.push(currSeries);
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

    if (chartConfig.view != this.views.lineChart && otherSeries.data.length > 0 && chartConfig.metric != this.metrics.ratioElectricWithinCompanyOrBrand && (chartConfig.metric != this.metrics.ratioElectric || this.getSeriesNameColumnHeader(chartConfig) != "Country"))
      result.series.push(otherSeries);

    // Remove additional categories which were included for calculation of trailing average
    if (isTimeSpanExtendedForAverageCalculation)
      result.categories.splice(0, 12);
  },

  queryChartData_calculateAverageValue: function(chartConfig, rawValue, averageCalculationList) {
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

  queryChartData_absolute: function(chartConfig, sortByName, isSingleChart) {
    // Queries the data for one chart for the metrics salesAll and salesElectric
    let datasets;
    if (chartConfig.metric == this.metrics.salesAll)
      datasets = this.queryDatasets(chartConfig, false);
    else
      datasets = this.queryDatasets(chartConfig, true);
    let seriesRows = datasets.seriesRows;
    let result = {};
    result.categories = this.getCategoriesFromDatasets(chartConfig, datasets, sortByName);
    result.sources = datasets.sources;
    result.hints = datasets.hints;
    this.queryChartData_createSeries(chartConfig, isSingleChart, seriesRows, seriesRows, result);
    return result;
  },

  queryChartData_ratio: function(chartConfig, sortByName, isSingleChart) {
    // Queries the data for one chart for the metrics ratioElectric and ratioElectricWithinCompanyOrBrand
    let chartConfigForRatio = this.cloneObject(chartConfig);
    if (chartConfig.metric == this.metrics.ratioElectric) {
      chartConfigForRatio.detailLevel = this.detailLevels.total;
      chartConfigForRatio.company = this.companyOptions.all;
      chartConfigForRatio.brand = this.brandOptions.all;
      chartConfigForRatio.model = this.modelOptions.all;
    }
    let datasets = this.queryDatasets(chartConfig, true);
    let datasetsReference = this.queryDatasets(chartConfigForRatio, false, false);
    let seriesRows = datasets.seriesRows;
    let result = {};
    result.sources = datasets.sources;
    for (const i in datasetsReference.sources) {
      if (result.sources[i] == null)
        result.sources[i] = datasetsReference.sources[i];
    }
    result.hints = datasets.hints;
    let valueExists = false;
    for (const seriesName in seriesRows) {
      let valuesForRatio = {};
      for (const i in datasets.categories) {
        const category = datasets.categories[i];
        let value = 0;
        if (chartConfig.metric == this.metrics.ratioElectric && chartConfigForRatio.brand == this.brandOptions.all && this.isSingleOrCombinedCountry(chartConfigForRatio)) {
          for (const seriesNameInner in datasetsReference.seriesRows) {
            value = value + this.getValueOrDefault(datasetsReference.seriesRows[seriesNameInner][category], 0);
          }
        }
        else if (datasetsReference.seriesRows[this.singleSeriesName] != null)
          value = value + this.getValueOrDefault(datasetsReference.seriesRows[this.singleSeriesName][category], 0);
        else if (datasetsReference.seriesRows[seriesName] != null)
          value = value + this.getValueOrDefault(datasetsReference.seriesRows[seriesName][category], 0);
        valuesForRatio[category] = value;
      }
      for (const i in datasets.categories) {
        const category = datasets.categories[i];
        let value = this.getValueOrDefault(seriesRows[seriesName][category], null);
        if (valuesForRatio[category] == 0)
          seriesRows[seriesName][category] = null;
        else {
          let val = value / valuesForRatio[category] * 100;
          if (val > 100) {
            console.log("Warning: Invalid data: EV sales is higher than All cars sales. series: " + seriesName + ", category: " + category);
            val = 100;
          }
          seriesRows[seriesName][category] = val;
          valueExists = true;
        }
      }
    }
    if (!valueExists)
      seriesRows = [];
    datasets.seriesRows = seriesRows;
    result.categories = this.getCategoriesFromDatasets(chartConfig, datasets, sortByName);
    this.queryChartData_createSeries(chartConfig, isSingleChart, seriesRows, datasetsReference.seriesRows, result);
    return result;
  },

  queryChartData_share: function(chartConfig, sortByName, isSingleChart) {
    // Queries the data for one chart for the metrics shareElectric and shareAll
    let chartConfigForSum = this.cloneObject(chartConfig);
    if (this.isTimeXProperty(chartConfig)) {
      chartConfigForSum.company = this.companyOptions.all;
      chartConfigForSum.brand = this.brandOptions.all;
      chartConfigForSum.model = this.modelOptions.all;
    }
    let datasets;
    let datasetsReference;
    if (chartConfig.metric == this.metrics.shareElectric) {
      datasets = this.queryDatasets(chartConfig, true);
      datasetsReference = this.queryDatasets(chartConfigForSum, true, false);
    } else {
      datasets = this.queryDatasets(chartConfig, false);
      datasetsReference = this.queryDatasets(chartConfigForSum, false, false);
    }
    let seriesRows = datasets.seriesRows;
    const seriesRowsKeys = Object.keys(seriesRows);
    if (seriesRowsKeys.length == 1 && seriesRowsKeys[0] == "other") {
      seriesRows = []; // market split with only 1 series is not useful
    }
    let result = {};
    result.categories = this.getCategoriesFromDatasets(chartConfig, datasets, sortByName);
    result.sources = datasets.sources;
    result.hints = datasets.hints;

    let sums = {};
    const isSumPerSeries = this.isCompanyBrandModelXProperty(chartConfig);
    if (isSumPerSeries) {
      // sum per series
      for (const seriesName in datasets.seriesRows) {
        let sum = 0;
        for (const i in datasetsReference.categories) {
          const category = datasetsReference.categories[i];
          sum = sum + this.getValueOrDefault(datasetsReference.seriesRows[seriesName][category], 0);
        }
        sums[seriesName] = sum;
      }
    } else {
      // sum per category
      for (const i in datasets.categories) {
        const category = datasets.categories[i];
        let sum = 0;
        for (const seriesName in datasetsReference.seriesRows) {
          sum = sum + this.getValueOrDefault(datasetsReference.seriesRows[seriesName][category], 0);
        }
        sums[category] = sum;
      }
    }
    for (const seriesName in seriesRows) {
      for (const i in datasets.categories) {
        const category = datasets.categories[i];
        let value = this.getValueOrDefault(seriesRows[seriesName][category], null);
        let sum;
        if (isSumPerSeries)
          sum = sums[seriesName];
        else if (this.isSingleOrCombinedCountry(chartConfig))
          sum = sums[category];
        else {
          // sum per series and category
          const rows = datasetsReference.seriesRows[seriesName];
          if (rows != null)
            sum = this.getValueOrDefault(rows[category], 0);
        }

        if (sum != 0)
          seriesRows[seriesName][category] = value / sum * 100;
      }
    }
    this.queryChartData_createSeries(chartConfig, isSingleChart, seriesRows, datasetsReference.seriesRows, result);
    return result;
  },

  queryChartData: function(chartConfig, sortByName, isSingleChart) {
    // Queries the data for one chart
    if ([this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric))
      return this.queryChartData_absolute(chartConfig, sortByName, isSingleChart);
    if ([this.metrics.ratioElectric, this.metrics.ratioElectricWithinCompanyOrBrand].includes(chartConfig.metric))
      return this.queryChartData_ratio(chartConfig, sortByName, isSingleChart);
    if ([this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric))
      return this.queryChartData_share(chartConfig, sortByName, isSingleChart);
  }
};

db.initialize();
