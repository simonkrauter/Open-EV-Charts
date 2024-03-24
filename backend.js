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
  , "ElectricCarsByModel": 2
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

  companyGroupNamesUrlEncoded: [],
  // List of company group names, URL-encoded.

  companiesByBrand: {},
  // Brand -> company.

  companies: [],
  // List of company groups and brands which do not belong to a company group.
  // Sorted alphabetical.

  companiesUrlEncoded: [],
  // List of company groups and brands which do not belong to a company group, URL-encoded.

  brands: [],
  // List of brands used in the datasets.
  // Sorted alphabetical.

  brandsUrlEncoded: [],
  // List of brands used in the datasets, URL-encoded.

  models: [],
  // List of electric car models used in the datasets.
  // Format: e.g. "Tesla|Model 3".
  // Sorted alphabetical.

  modelsUrlEncoded: [],
  // List of electric car models used in the datasets, URL-encoded.

  initialize: function() {
    // fill country variables
    var id = 0;
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

    var dataset =
    { country: country
    , countryName: this.countryNames[country]
    , dsType: dsType
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
      for (var i = 0; i < 3; i++) {
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

    if (dsType == this.dsTypes.AllCarsByBrand) {
      for (const brand in data) {
        if (!this.brands.includes(brand)) {
          this.brands.push(brand);
          this.brandsUrlEncoded.push(this.urlEncode(brand));
        }
      }
    }
    else if (dsType == this.dsTypes.ElectricCarsByModel) {
      for (const model in data) {
        const parts = model.split("|", 2);
        const brand = parts[0];
        if (!this.brands.includes(brand)) {
          this.brands.push(brand);
          this.brandsUrlEncoded.push(this.urlEncode(brand));
        }
        if (!this.models.includes(model)) {
          this.models.push(model);
          this.modelsUrlEncoded.push(this.urlEncode(model));
        }
      }
    }
  },

  finalizeDataLoading: function() {
    // This should be called once after all country data files are loaded.

    // Process company groups
    var brandsInAGroup = [];
    for (const groupName in companyGroups) {
      this.companyGroupNames.push(groupName);
      this.companyGroupNamesUrlEncoded.push(this.urlEncode(groupName));
      this.companies.push(groupName);
      this.companiesUrlEncoded.push(this.urlEncode(groupName));
      const brands = companyGroups[groupName];
      for (const i in brands) {
        this.companiesByBrand[brands[i]] = groupName;
        brandsInAGroup.push(brands[i]);
      }
    }
    for (const i in this.brands) {
      const brand = this.brands[i];
      if (!brandsInAGroup.includes(brand)) {
        this.companies.push(brand);
        this.companiesUrlEncoded.push(this.urlEncode(brand));
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
  { "top5": 5
  , "top10": 10
  , "top15": 15
  , "top20": 20
  , "top30": 30
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
    return chartConfig.country.split(",").includes(this.countryOptions.combine);
  },

  isSingleOrCombinedCountry: function(chartConfig) {
    return !this.isMultiCountry(chartConfig) || this.isCombinedCountry(chartConfig);
  },

  getChartParams: function(chartConfig) {
    var result = {};

    // metric
    var param = {};
    param.name = "metric";
    param.options = {};
    param.options[this.metrics.salesElectric] = "Absolute EV Sales";
    param.options[this.metrics.ratioElectric] = "Relative EV Sales";
    param.options[this.metrics.shareElectric] = "EV Market Split";
    param.options[this.metrics.salesAll] = "All Cars Sales";
    param.options[this.metrics.ratioElectricWithinCompanyOrBrand] = "EV Ratio within Company/Brand";
    param.options[this.metrics.shareAll] = "All Cars Market Split";
    param.options[this.metrics.all] = "All Metrics";
    param.unfoldKey = this.metrics.all;
    param.defaultOption = this.metrics.ratioElectric;
    param.alwaysAddToUrl = true;
    param.showInTitle = true;
    param.showAsFilter = true;
    param.allowMultiSelection = true;
    param.maxOptionsToShowAsButton = 4;
    param.moreButtonText = "More Metrics";
    result[param.name] = param;

    // country
    var param = {};
    param.name = "country";
    param.options = {};
    param.options[this.countryOptions.all] = "All Countries";
    if (chartConfig == null || (chartConfig.country == null || this.isMultiCountry(chartConfig)) && (chartConfig.metric != this.metrics.shareAll || chartConfig.xProperty != this.xProperties.brand))
      param.options[this.countryOptions.combine] = "Combine Countries";
    for (const i in this.countriesWithData) {
      const id = this.countriesWithData[i];
      param.options[db.countriesCodes[id]] = this.countryNames[id];
    }
    param.unfoldKey = this.countryOptions.all;
    param.excludeOnUnfoldAndTitle = [this.countryOptions.all, this.countryOptions.combine];
    param.noMultiSelectOptions = [this.countryOptions.all];
    param.disableUnfoldOption = this.countryOptions.combine;
    param.additiveOptions = [this.countryOptions.combine];
    param.defaultOption = this.countryOptions.all;
    param.showInTitle = true;
    param.showAsFilter = chartConfig == null || chartConfig.xProperty != this.xProperties.country;
    param.allowMultiSelection = true;
    param.maxOptionsToShowAsButton = 9;
    param.moreButtonText = "More Countries";
    result[param.name] = param;

    // x-axis property
    var param = {};
    param.name = "xProperty";
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
    param.defaultOption = this.xProperties.quarter;
    param.showAsFilter = true;
    param.showInTitle = chartConfig == null || [this.xProperties.monthAvg3, this.xProperties.monthAvg12].includes(chartConfig.xProperty);
    result[param.name] = param;

    // time span
    var param = {};
    param.name = "timeSpan";
    param.showAsFilter = chartConfig == null || !this.isByYear(chartConfig);
    param.options = {};
    param.options[this.timeSpanOptions.auto] = "Auto Time Span";
    param.options[this.timeSpanOptions.all] = "All Time";
    this.setTimeSpanParamOptions(param, chartConfig);
    param.defaultOption = this.timeSpanOptions.auto;
    param.showInTitle = chartConfig == null || !this.isTimeXProperty(chartConfig);
    result[param.name] = param;

    // company/brand/model detail level
    var param = {};
    param.name = "detailLevel";
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
    param.defaultOption = this.detailLevels.company;
    result[param.name] = param;

    // company
    var param = {};
    param.name = "company";
    param.options = {};
    param.options[this.companyOptions.all] = "All Companies";
    param.showAsFilter = chartConfig == null || (chartConfig.xProperty != this.xProperties.company && chartConfig.detailLevel != this.detailLevels.total);
    if (chartConfig != null && param.showAsFilter) {
      if (chartConfig.xProperty == this.xProperties.brand || chartConfig.detailLevel == this.detailLevels.brand) {
        for (const i in this.companyGroupNames) {
          const company = this.companyGroupNames[i];
          param.options[this.urlEncode(company)] = company;
        }
      } else {
        for (const i in this.companies) {
          const company = this.companies[i];
          if (company != "other")
            param.options[this.urlEncode(company)] = company;
        }
      }
    }
    param.defaultOption = this.companyOptions.all;
    param.excludeOnUnfoldAndTitle = [this.companyOptions.all];
    param.showInTitle = chartConfig == null || ((chartConfig.brand == this.brandOptions.all || chartConfig.company == chartConfig.brand) && !this.combineMetricAndCompanyOrBrandInTitle(chartConfig));
    result[param.name] = param;

    // brand
    const filterContainsMultipleBrands = chartConfig == null || chartConfig.company == this.companyOptions.all || this.companyGroupNamesUrlEncoded.includes(chartConfig.company);
    var param = {};
    param.name = "brand";
    param.showAsFilter = chartConfig == null || (([this.detailLevels.brand, this.detailLevels.model].includes(chartConfig.detailLevel) || chartConfig.xProperty == this.xProperties.model) && filterContainsMultipleBrands);
    param.options = {};
    param.options[this.brandOptions.all] = "All Brands";
    if (chartConfig != null && (param.showAsFilter || !filterContainsMultipleBrands)) {
      for (const i in this.brands) {
        const brand = this.brands[i];
        if (brand == "other")
          continue;
        if (chartConfig == null || chartConfig.company == this.companyOptions.all || chartConfig.company == this.urlEncode(this.companiesByBrand[brand]))
          param.options[this.urlEncode(brand)] = brand;
      }
    }
    param.defaultOption = this.brandOptions.all;
    param.excludeOnUnfoldAndTitle = [this.brandOptions.all];
    param.showInTitle = chartConfig == null || (chartConfig.brand != chartConfig.company && !this.combineMetricAndCompanyOrBrandInTitle(chartConfig));
    result[param.name] = param;

    // model
    var param = {};
    param.name = "model";
    param.showAsFilter = chartConfig == null || (chartConfig.detailLevel == this.detailLevels.model && (chartConfig.brand != this.brandOptions.all || !filterContainsMultipleBrands));
    param.options = {};
    param.options[this.modelOptions.all] = "All Models";
    if (chartConfig != null && param.showAsFilter) {
      for (const i in this.models) {
        const parts = this.models[i].split("|", 2);
        const brand = parts[0];
        const model = parts[1];
        if (chartConfig.brand == brand || chartConfig.company == brand)
          param.options[this.urlEncode(model)] = model;
      }
    }
    param.defaultOption = this.modelOptions.all;
    param.excludeOnUnfoldAndTitle = [this.modelOptions.all];
    result[param.name] = param;

    // max series
    var param = {};
    param.name = "maxSeries";
    param.options = {};
    for (const i in this.maxSeriesOptions)
      param.options[i] = "Top " + this.maxSeriesOptions[i];
    param.defaultOption = "top10";
    param.showAsFilter = true;
    result[param.name] = param;

    // view
    var param = {};
    param.name = "view";
    param.options = {};
    const allowLineChart = chartConfig == null || this.isTimeXProperty(chartConfig);
    if (this.isBarChartAllowed(chartConfig) || !allowLineChart)
      param.options[this.views.barChart] = "Bar Chart";
    if (allowLineChart)
      param.options[this.views.lineChart] = "Line Chart";
    param.options[this.views.table] = "Table";
    param.options[this.views.sources] = "Sources";
    param.defaultOption = Object.keys(param.options)[0];
    result[param.name] = param;

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
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = 1 + currentDate.getMonth();
    currentMonth--;
    if (currentMonth < 1) {
      currentMonth = 12;
      currentYear--;
    }
    if (!this.isByQuarter(chartConfig)) {
      // single month
      var year = currentYear;
      var month = currentMonth;
      for (var i = 0; i < 4; i++) {
        param.options["m" + this.formatMonth(year, month)] = this.formatMonth(year, month);
        month--;
        if (month < 1) {
          month = 12;
          year--;
        }
      }
      // single quarter
      var year = currentYear;
      var quarter = this.monthToQuarter(currentMonth);
      for (var i = 0; i < 4; i++) {
        param.options["q" + year + "-" + quarter] = this.formatQuarter(year, quarter);
        quarter--;
        if (quarter < 1) {
          quarter = 4;
          year--;
        }
      }
    }
    // single year
    var year = currentYear;
    for (var i = 0; i <= 4; i++) {
      param.options["y" + year] = year;
      year--;
    }
    // Allow to select a time spans which is not included in the suggested options
    if (chartConfig.timeSpan != null && param.options[chartConfig.timeSpan] == null) {
      var text = chartConfig.timeSpan.substr(1);
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
      else if (this.isByQuarter(chartConfig))
        return this.timeSpanOptions.last3y;
      else
        return this.timeSpanOptions.last2y;
    }
    return chartConfig.timeSpan;
  },

  encodeChartConfig: function(chartConfig, changedParamName = null) {
    chartConfig = this.makeChartConfigValid(chartConfig, changedParamName);
    var parts = [];
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
    var parts = [];
    if (chartConfigString != "") {
      const partsRaw = chartConfigString.split(":");
      // process strings for backward compatibility
      var containsDetailLevel = false;
      var brand = "";
      var model = "";
      for (const i in partsRaw) {
        var part = partsRaw[i];
        if (part == "combine-brands")
          part = this.detailLevels.total;
        else if (part == "all-models")
          part = this.detailLevels.model;
        else if (part in this.detailLevels)
          containsDetailLevel = true;
        else if (!containsDetailLevel && brand == "" && this.brandsUrlEncoded.includes(part))
          brand = part;
        else if (!containsDetailLevel && brand != "" && model == "" && this.modelsUrlEncoded.includes(brand + "|" + part))
          model = part;
        parts.push(part);
      }
      if (!containsDetailLevel && brand != "") {
        if (model != "")
          parts.push(this.detailLevels.model);
        else if (this.companiesUrlEncoded.includes(brand))
          parts.push(this.detailLevels.company);
        else
          parts.push(this.detailLevels.brand);
        if (brand in this.companiesByBrand) {
          const company = this.urlEncode(this.companiesByBrand[brand]);
          if (company != brand)
            parts.push(company);
        }
      }
    }
    var result = {};
    var params = this.getChartParams();
    for (const i in params) {
      if (!params[i])
        continue;
      const param = params[i];
      var selectedValues = [];
      for (const j in parts) {
        const part = parts[j];
        const partNormalized = this.normalizeSearchString(part);
        var optionsKeyMatched = null;
        for (const key in param.options) {
          if (this.normalizeSearchString(key) == partNormalized) {
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
    var params = this.getChartParams(chartConfig);

    var countryValues = [];
    if (chartConfig.country)
      countryValues = chartConfig.country.split(",");
    if (!countryValues.includes(this.countryOptions.all)) {
      var singleCountryCount = 0;
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

    if (!Object.keys(params.company.options).includes(chartConfig.company))
      chartConfig.company = params.company.defaultOption;
    if (!Object.keys(params.brand.options).includes(chartConfig.brand))
      chartConfig.brand = params.brand.defaultOption;
    if (!Object.keys(params.model.options).includes(chartConfig.model))
      chartConfig.model = params.model.defaultOption;

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

    // set brand if selected company is not a group
    if (chartConfig.company != this.companyOptions.all && !this.companyGroupNamesUrlEncoded.includes(chartConfig.company))
      chartConfig.brand = chartConfig.company;

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

  unfoldChartConfig: function(chartConfig) {
    if (chartConfig.metric != this.metrics.all && !chartConfig.metric.includes(",")) {
      if (!this.isTimeXProperty(chartConfig))
        return [chartConfig];
      if (chartConfig.detailLevel == this.detailLevels.total)
        return [chartConfig];
      if (chartConfig.detailLevel == this.detailLevels.company && chartConfig.company != this.companyOptions.all)
        return [chartConfig];
      if (chartConfig.detailLevel == this.detailLevels.brand && chartConfig.brand != this.brandOptions.all)
        return [chartConfig];
      if (chartConfig.detailLevel == this.detailLevels.model && chartConfig.model != this.modelOptions.all)
        return [chartConfig];
    }

    var result = [];
    var unfoldedByParams = [];
    result.push(chartConfig);
    const params = this.getChartParams();
    for (const i in params) {
      const param = params[i];
      if (param.unfoldKey && chartConfig[param.name] == param.unfoldKey) {
        var newResult = [];
        for (const j in result) {
          for (const k in param.options) {
            if (k != param.unfoldKey && (!param.excludeOnUnfoldAndTitle || !param.excludeOnUnfoldAndTitle.includes(k))) {
              if (!unfoldedByParams.includes(param.name))
                unfoldedByParams.push(param.name);
              var newConfig = this.cloneObject(result[j]);
              newConfig[param.name] = k;
              newConfig = this.makeChartConfigValid(newConfig);
              newConfig.unfoldedByParams = unfoldedByParams;
              newResult.push(newConfig);
            }
          }
        }
        result = newResult;
      }
      if (param.allowMultiSelection) {
        const values = chartConfig[param.name].split(",");
        if (values.length > 1 && (!param.disableUnfoldOption || !values.includes(param.disableUnfoldOption))) {
          var newResult = [];
          for (const j in result) {
            for (const k in values) {
              if (param.excludeOnUnfoldAndTitle && param.excludeOnUnfoldAndTitle.includes(values[k]))
                continue;
              if (!unfoldedByParams.includes(param.name))
                unfoldedByParams.push(param.name);
              var newConfig = this.cloneObject(result[j]);
              newConfig[param.name] = values[k];
              newConfig = this.makeChartConfigValid(newConfig);
              newConfig.unfoldedByParams = unfoldedByParams;
              newResult.push(newConfig);
            }
          }
          result = newResult;
        }
      }
    }
    return result;
  },

  getChartTitle: function(chartConfig, isSingleChart) {
    var parts = [];
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
      var text = param.options[value];
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
    var parts = [];
    if (screenshotMode && this.isMultiCountry(chartConfig) && this.isCombinedCountry(chartConfig)) {
      const countryValues = chartConfig.country.split(",");
      var countrieNames = [];
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

  queryDatasets: function(chartConfig, dsType) {
    // Returns datasets for chart
    const countryValues = chartConfig.country.split(",");
    var filterCountryIds = [];
    if (chartConfig.country != this.countryOptions.all) {
      for (const i in countryValues) {
        const code = countryValues[i];
        const id = this.countries[code];
        if (id && db.countriesWithData.includes(id))
          filterCountryIds.push(id);
      }
    }

    var filterCompany = null;
    if (chartConfig.company != this.companyOptions.all && chartConfig.xProperty != this.xProperties.company)
      filterCompany = chartConfig.company;
    var filterBrand = null;
    if (chartConfig.brand != this.brandOptions.all && chartConfig.xProperty != this.xProperties.brand)
      filterBrand = chartConfig.brand;
    var filterModel = null;
    if (chartConfig.model != this.modelOptions.all && chartConfig.xProperty != this.xProperties.model && dsType == this.dsTypes.ElectricCarsByModel)
      filterModel = chartConfig.model;
    const dateFilters = this.queryDatasets_getDateFilters(chartConfig);

    var seriesRows = {};
    var sources = [];
    var categories = [];
    var monthsPerCountryAndTimeSpan = {};
    var maxRowsReachedAndModelNotFound = false;
    var nonMonthlyCountries = [];

    for (const i in this.datasets) {
      const dataset = this.datasets[i];
      if (filterCountryIds.length > 0 && !filterCountryIds.includes(dataset.country))
        continue;
      if (dataset.dsType != dsType)
        continue;
      if (dateFilters.firstYear != null && (dataset.year < dateFilters.firstYear || dataset.year > dateFilters.lastYear || (dataset.year == dateFilters.firstYear && dataset.month < dateFilters.firstMonth) || (dataset.year == dateFilters.lastYear && dataset.month > dateFilters.lastMonth)))
        continue;

      var category = "";
      if (this.isByMonth(chartConfig))
        category = dataset.monthString;
      else if (this.isByQuarter(chartConfig))
        category = this.formatQuarter(dataset.year, this.monthToQuarter(dataset.month));
      else if (this.isByYear(chartConfig))
        category = dataset.year;
      else if (chartConfig.xProperty == this.xProperties.country)
        category = dataset.countryName;

      var datasetUsed = false;
      for (const dataKey in dataset.data) {
        const dataKeyParts = dataKey.split("|", 2);
        const brand = dataKeyParts[0];
        const model = dataKeyParts[1];
        const company = this.companiesByBrand[brand];

        // add entry to monthsPerCountryAndTimeSpan
        if (this.isTimeXProperty(chartConfig) || chartConfig.timeSpan.startsWith("q") || chartConfig.timeSpan.startsWith("y")) {
          var timeSpan;
          if (this.isByYear(chartConfig) || chartConfig.timeSpan.startsWith("y"))
            timeSpan = dataset.year;
          else if (this.isByQuarter(chartConfig) || chartConfig.timeSpan.startsWith("q"))
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

        // apply filters
        if (filterCompany != null && this.urlEncode(company) != filterCompany)
          continue;
        if (filterBrand != null && this.urlEncode(brand) != filterBrand)
          continue;
        if (filterModel != null && this.urlEncode(model) != filterModel)
          continue;
        if (brand == "other" && (chartConfig.metric == this.metrics.ratioElectricWithinCompanyOrBrand || (chartConfig.metric == this.metrics.shareElectric && !this.isTimeXProperty(chartConfig))))
          continue;

        // set category
        if (chartConfig.xProperty == this.xProperties.company)
          category = company;
        else if (chartConfig.xProperty == this.xProperties.brand)
          category = brand;
        else if (chartConfig.xProperty == this.xProperties.model)
          category = dataKey;
        if (category == "other")
          category = "Other";

        // set seriesName
        var seriesName = this.singleSeriesName;
        if (filterCountryIds.length != 1 && !countryValues.includes(this.countryOptions.combine) && chartConfig.xProperty != this.xProperties.country)
          seriesName = dataset.countryName;
        else if (!this.isCompanyBrandModelXProperty(chartConfig)) {
          if (chartConfig.detailLevel == this.detailLevels.company && filterCompany == null)
            seriesName = company;
          else if (chartConfig.detailLevel == this.detailLevels.brand && filterBrand == null)
            seriesName = brand;
          else if (chartConfig.detailLevel == this.detailLevels.model && filterModel == null)
            seriesName = dataKey;
        }

        // add entries to seriesRows, categories and sources
        if (!(seriesName in seriesRows))
          seriesRows[seriesName] = {};
        if (category in seriesRows[seriesName])
          seriesRows[seriesName][category] += dataset.data[dataKey];
        else
          seriesRows[seriesName][category] = dataset.data[dataKey];
        if (!categories.includes(category))
          categories.push(category);
        if (sources[dataset.source] == null) {
          sources[dataset.source] = {};
          sources[dataset.source].country = dataset.country;
          sources[dataset.source].firstDate = dataset.monthString;
        }
        sources[dataset.source].lastDate = dataset.monthString;

        datasetUsed = true;
      }
      if (Object.keys(dataset.data).length >= 51 && !datasetUsed)
        maxRowsReachedAndModelNotFound = true;
      if (dataset.perQuarter && !nonMonthlyCountries.includes(dataset.country))
        nonMonthlyCountries.push(dataset.country);
    }

    this.removeLastIncompleteMonthOrQuarter(chartConfig, seriesRows, categories, monthsPerCountryAndTimeSpan);

    return {
      seriesRows: seriesRows,
      sources: sources,
      categories: categories,
      hints: this.getHints(chartConfig, sources, categories, monthsPerCountryAndTimeSpan, maxRowsReachedAndModelNotFound, nonMonthlyCountries)
    };
  },

  queryDatasets_getDateFilters: function(chartConfig) {
    var dateFilters = {};
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
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = 1 + currentDate.getMonth();
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
    if (!this.isCombinedCountry(chartConfig))
      return;
    if (categories.length == 0)
      return;
    categories.sort();
    const timeSpan = categories[categories.length - 1];

    // Check if the end of the time span is more than 15 days ago
    var date;
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
    var expectedNumberOfMonth;
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

  getHints: function(chartConfig, sources, categories, monthsPerCountryAndTimeSpan, maxRowsReachedAndModelNotFound, nonMonthlyCountries) {
    var hints = [];

    // missing countries
    if (chartConfig.country.includes(this.countryOptions.all) && this.isCombinedCountry(chartConfig)) {
      hints.push("Those are not the 'worldwide' numbers, because several countries are missing.");
    }

    // parse general hints
    const keyword = " (Incomplete: ";
    for (const text in sources) {
      var i = text.indexOf(keyword);
      if (i == -1)
        continue;
      i = i + keyword.length;
      const j = text.indexOf(")", i)
      if (j == -1)
        continue;
      if (text.includes("not listed by name") && chartConfig.xProperty != this.xProperties.model)
        continue;
      const sourceInfo = sources[text];
      var hint = "";
      if (this.isMultiCountry(chartConfig))
        hint = hint + this.countryNames[sourceInfo.country] + ": ";
      hint = hint + text.substr(i, j - i);
      if (!hints.includes(hint))
        hints.push(hint);
    }

    // parse 'AllCarsByBrand not per brand'
    if (chartConfig.metric == this.metrics.salesAll && chartConfig.detailLevel != this.detailLevels.total) {
      for (const text in sources) {
        if (text.includes("TODO: numbers per brand wanted")) {
          const sourceInfo = sources[text];
          var hint = "";
          if (this.isMultiCountry(chartConfig))
            hint = hint + this.countryNames[sourceInfo.country] + ": ";
          if (chartConfig.detailLevel == this.detailLevels.company || chartConfig.xProperty == this.xProperties.company)
            hint = hint + "All cars sales data per company is not available.";
          else
            hint = hint + "All cars sales data per brand is not available.";
          if (!hints.includes(hint))
            hints.push(hint);
        }
      }
    }

    // incomplete year or quarter
    if (this.isByQuarter(chartConfig) || this.isByYear(chartConfig) || chartConfig.timeSpan.startsWith("q") || chartConfig.timeSpan.startsWith("y")) {
      if (this.isTimeXProperty(chartConfig))
        categories.sort();
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentQuarter = this.formatQuarter(currentYear, this.monthToQuarter(1 + currentDate.getMonth()));
      var expectedNumberOfMonth;
      if (this.isByQuarter(chartConfig) || chartConfig.timeSpan.startsWith("q"))
        expectedNumberOfMonth = 3;
      else
        expectedNumberOfMonth = 12;
      for (const countryName in monthsPerCountryAndTimeSpan) {
        const monthsPerTimeSpan = monthsPerCountryAndTimeSpan[countryName];
        for (const timeSpan in monthsPerTimeSpan) {
          if (timeSpan == currentYear || timeSpan == currentQuarter)
            continue;
          if (monthsPerTimeSpan[timeSpan] && monthsPerTimeSpan[timeSpan].length != expectedNumberOfMonth) {
            var hint = ""
            if (this.isMultiCountry(chartConfig))
              hint = hint + countryName + ": ";
            hint = hint + timeSpan + " is incomplete.";
            hints.push(hint);
          }
        }
      }
    }

    // missing month/quarter/year
    if (this.isTimeXProperty(chartConfig) && this.isCombinedCountry(chartConfig)) {
      categories.sort();
      for (const i in categories) {
        const timeSpan = categories[i];
        for (const countryName in monthsPerCountryAndTimeSpan) {
          const monthsPerTimeSpan = monthsPerCountryAndTimeSpan[countryName];
          if (monthsPerTimeSpan[timeSpan] === undefined) {
            hints.push(countryName + ": " + timeSpan + " is missing.");
          }
        }
      }
    }

    // potentially missing low number entries
    if (maxRowsReachedAndModelNotFound && this.isTimeXProperty(chartConfig) && chartConfig.model != this.modelOptions.all) {
      hints.push("Low number entries could be missing, because data is limited to top 50 models per month.");
    }

    // monthly data is not available
    if ([this.xProperties.month, this.xProperties.monthAvg3].includes(chartConfig.xProperty)) {
      for (const i in nonMonthlyCountries) {
        var hint = "Monthly data is not available.";
        if (this.isMultiCountry(chartConfig)) {
          const countryId = nonMonthlyCountries[i];
          hint = this.countryNames[countryId] + ": " + hint;
        }
        hints.push(hint);
      }
    }

    return hints;
  },

  getCategoriesFromDatasets: function(chartConfig, datasets, sortByName = false) {
    // Sort categories and limit count
    var categories = datasets.categories;
    var seriesRows = datasets.seriesRows;
    var result = [];
    const maxSeries = this.maxSeriesOptions[chartConfig.maxSeries];
    if (this.isTimeXProperty(chartConfig)) {
      // Numeric sort
      categories.sort();
    } else if (sortByName) {
      // Alphabetic sort
      categories.sort(function(a, b) {
        const order = db.specialSortCompare(a, b)
        if (order != 0)
          return order;
        return a.localeCompare(b);
      });
    } else {
      // Sort by value
      categories.sort(function(a, b) {
        const order = db.specialSortCompare(a, b)
        if (order != 0)
          return order;
        var valueA = 0;
        var valueB = 0;
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
    var count = 0;
    for (const i in categories) {
      const category = categories[i];
      result.push(category);
      count++;
      if (count == maxSeries && !this.isTimeXProperty(chartConfig) && chartConfig.view != this.views.table)
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
    else if (chartConfig.detailLevel == this.detailLevels.model)
      return "Model";
    else
      return "Country";
  },

  fillMonthCategoryGaps: function(categories) {
    var i = 0;
    while (i < categories.length - 1) {
      var year = parseInt(categories[i].substr(0, 4));
      var month = parseInt(categories[i].substr(5, 2));
      month++;
      if (month > 12) {
        year++;
        month = month - 12;
      }
      var nextMonthString = this.formatMonth(year, month);
      if (categories[i + 1] != nextMonthString)
        categories.splice(i + 1, 0, nextMonthString);
      i++;
    }
  },

  fillQuarterCategoryGaps: function(categories) {
    var i = 0;
    while (i < categories.length - 2) {
      var year = parseInt(categories[i].substr(0, 4));
      var quarter = parseInt(categories[i].substr(6, 1));
      quarter++;
      if (quarter > 4) {
        year++;
        quarter = quarter - 4;
      }
      var nextMonthString = this.formatQuarter(year, quarter);
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
        const countryValues = chartConfig.country.split(",");
        if (countryValues.length > 1 && !countryValues.includes(this.countryOptions.combine)) {
          return countryValues.length;
        }
      }
    }
    if (this.isTimeXProperty(chartConfig) && chartConfig.detailLevel == this.detailLevels.company && chartConfig.company == this.companyOptions.all) {
      return this.companies.length;
    }
    if (this.isTimeXProperty(chartConfig) && chartConfig.detailLevel == this.detailLevels.brand && chartConfig.brand == this.brandOptions.all) {
      if (chartConfig.company == this.companyOptions.all) {
        return this.brands.length;
      } else {
        const i = this.companyGroupNamesUrlEncoded.indexOf(chartConfig.company);
        if (i != -1)
          return this.companyGroupNames.length;
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

  queryChartData_createSeries: function(chartConfig, isSingleChart, seriesRows, result) {
    // Creates the chart series based on 'seriesRows' and assigns them to 'result'

    const isTimeSpanExtendedForAverageCalculation = this.isTimeSpanExtendedForAverageCalculation(chartConfig);

    // Create series (entries of 'data' will be inserted in the order of 'result.categories')
    result.series = [];
    var seriesByName = {};
    var seriesNamesInOrder = [];
    var seriesSortValues = {};
    var totalSeries = {name: this.totalSeriesName, data: []};
    for (const seriesName in seriesRows) {
      seriesNamesInOrder.push(seriesName);
      var newSeries = {};
      newSeries.name = seriesName;
      newSeries.data = [];
      var averageCalculationList = [];

      for (const i in result.categories) {
        const category = result.categories[i];
        const value = this.queryChartData_calculateAverageValue(chartConfig, seriesRows[seriesName][category], averageCalculationList);

        // Skip first 12 months which were included for calculation of trailing average
        if (isTimeSpanExtendedForAverageCalculation && i < 12)
          continue;

        // Add value to total series
        if (value != null) {
          newSeries.data.push(value);
          if (i in totalSeries.data)
            totalSeries.data[i] += value;
          else
            totalSeries.data[i] = value;
        } else {
          if (chartConfig.view == this.views.barChart)
            newSeries.data.push(0);
          else
            newSeries.data.push(null);
        }
        // Add value to seriesSortValues
        if (value != null) {
          var factor = 1;
          if (i >= result.categories.length / 2)
            factor = 2;
          if (seriesName in seriesSortValues)
            seriesSortValues[seriesName] += value * factor;
          else
            seriesSortValues[seriesName] = value * factor;
        }
      }
      seriesByName[seriesName] = newSeries;
    }

    if (isSingleChart && Object.keys(seriesRows).length > 1 && chartConfig.view != this.views.barChart && [this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric))
      result.series.push(totalSeries);

    // Add series to array in sorted order
    const maxSeries = this.maxSeriesOptions[chartConfig.maxSeries];
    seriesNamesInOrder.sort(function(a, b) {
      return seriesSortValues[a] < seriesSortValues[b] ? 1 : seriesSortValues[a] > seriesSortValues[b] ? -1 : 0;
    });
    var count = 0;
    var otherSeries = {name: "Other", data: []};
    for (const i in seriesNamesInOrder) {
      const seriesName = seriesNamesInOrder[i];
      const currSeries = seriesByName[seriesName];
      if (seriesName != "other" && count < maxSeries) {
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
    var averageLength = 0;
    if (chartConfig.xProperty == this.xProperties.monthAvg3)
      averageLength = 3
    else if (chartConfig.xProperty == this.xProperties.monthAvg12)
      averageLength = 12
    else
      return value;

    averageCalculationList.push(value);
    if (averageCalculationList.length > averageLength)
      averageCalculationList.shift();
    if (value === null)
      return null;
    var sum = 0;
    var count = 0;
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
    var datasets;
    if (chartConfig.metric == this.metrics.salesAll)
      datasets = this.queryDatasets(chartConfig, this.dsTypes.AllCarsByBrand);
    else
      datasets = this.queryDatasets(chartConfig, this.dsTypes.ElectricCarsByModel);
    var seriesRows = datasets.seriesRows;
    var result = {};
    result.categories = this.getCategoriesFromDatasets(chartConfig, datasets, sortByName);
    result.sources = datasets.sources;
    result.hints = datasets.hints;
    this.queryChartData_createSeries(chartConfig, isSingleChart, seriesRows, result);
    return result;
  },

  queryChartData_ratio: function(chartConfig, sortByName, isSingleChart) {
    // Queries the data for one chart for the metrics ratioElectric and ratioElectricWithinCompanyOrBrand
    var chartConfigForRatio = this.cloneObject(chartConfig);
    if (chartConfig.metric == this.metrics.ratioElectric) {
      chartConfigForRatio.detailLevel = this.detailLevels.total;
      chartConfigForRatio.company = this.companyOptions.all;
      chartConfigForRatio.brand = this.brandOptions.all;
      chartConfigForRatio.model = this.modelOptions.all;
    }
    var datasets = this.queryDatasets(chartConfig, this.dsTypes.ElectricCarsByModel);
    var datasetsForRatio = this.queryDatasets(chartConfigForRatio, this.dsTypes.AllCarsByBrand);
    var seriesRows = datasets.seriesRows;
    var result = {};
    result.sources = datasets.sources;
    for (const i in datasetsForRatio.sources) {
      if (result.sources[i] == null)
        result.sources[i] = datasetsForRatio.sources[i];
    }
    result.hints = datasets.hints;
    var valueExists = false;
    for (const seriesName in seriesRows) {
      var valuesForRatio = {};
      for (const i in datasets.categories) {
        const category = datasets.categories[i];
        var value = 0;
        if (chartConfig.metric == this.metrics.ratioElectric && chartConfigForRatio.brand == this.brandOptions.all && this.isSingleOrCombinedCountry(chartConfigForRatio)) {
          for (const seriesNameInner in datasetsForRatio.seriesRows) {
            value = value + this.getValueOrDefault(datasetsForRatio.seriesRows[seriesNameInner][category], 0);
          }
        }
        else if (datasetsForRatio.seriesRows[this.singleSeriesName] != null)
          value = value + this.getValueOrDefault(datasetsForRatio.seriesRows[this.singleSeriesName][category], 0);
        else if (datasetsForRatio.seriesRows[seriesName] != null)
          value = value + this.getValueOrDefault(datasetsForRatio.seriesRows[seriesName][category], 0);
        valuesForRatio[category] = value;
      }
      for (const i in datasets.categories) {
        const category = datasets.categories[i];
        var value = this.getValueOrDefault(seriesRows[seriesName][category], null);
        if (valuesForRatio[category] == 0)
          seriesRows[seriesName][category] = null;
        else {
          var val = value / valuesForRatio[category] * 100;
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
    this.queryChartData_createSeries(chartConfig, isSingleChart, seriesRows, result);
    return result;
  },

  queryChartData_share: function(chartConfig, sortByName, isSingleChart) {
    // Queries the data for one chart for the metrics shareElectric and shareAll
    var chartConfigForSum = this.cloneObject(chartConfig);
    if (this.isTimeXProperty(chartConfig)) {
      chartConfigForSum.company = this.companyOptions.all;
      chartConfigForSum.brand = this.brandOptions.all;
      chartConfigForSum.model = this.modelOptions.all;
    }
    var datasets;
    var datasetsForSum;
    if (chartConfig.metric == this.metrics.shareElectric) {
      datasets = this.queryDatasets(chartConfig, this.dsTypes.ElectricCarsByModel);
      datasetsForSum = this.queryDatasets(chartConfigForSum, this.dsTypes.ElectricCarsByModel);
    } else {
      datasets = this.queryDatasets(chartConfig, this.dsTypes.AllCarsByBrand);
      datasetsForSum = this.queryDatasets(chartConfigForSum, this.dsTypes.AllCarsByBrand);
    }
    var seriesRows = datasets.seriesRows;
    const seriesRowsKeys = Object.keys(seriesRows);
    if (seriesRowsKeys.length == 1 && seriesRowsKeys[0] == "other") {
      seriesRows = []; // market split with only 1 series is not useful
    }
    var result = {};
    result.categories = this.getCategoriesFromDatasets(chartConfig, datasets, sortByName);
    result.sources = datasets.sources;
    result.hints = datasets.hints;

    var sums = {};
    const isSumPerSeries = this.isCompanyBrandModelXProperty(chartConfig);
    if (isSumPerSeries) {
      // sum per series
      for (const seriesName in datasets.seriesRows) {
        var sum = 0;
        for (const i in datasetsForSum.categories) {
          const category = datasetsForSum.categories[i];
          sum = sum + this.getValueOrDefault(datasetsForSum.seriesRows[seriesName][category], 0);
        }
        sums[seriesName] = sum;
      }
    } else {
      // sum per category
      for (const i in datasets.categories) {
        const category = datasets.categories[i];
        var sum = 0;
        for (const seriesName in datasetsForSum.seriesRows) {
          sum = sum + this.getValueOrDefault(datasetsForSum.seriesRows[seriesName][category], 0);
        }
        sums[category] = sum;
      }
    }
    for (const seriesName in seriesRows) {
      for (const i in datasets.categories) {
        const category = datasets.categories[i];
        var value = this.getValueOrDefault(seriesRows[seriesName][category], null);
        var sum;
        if (isSumPerSeries)
          sum = sums[seriesName];
        else if (this.isSingleOrCombinedCountry(chartConfig))
          sum = sums[category];
        else {
          // sum per series and category
          const rows = datasetsForSum.seriesRows[seriesName];
          if (rows != null)
            sum = this.getValueOrDefault(rows[category], 0);
        }

        if (sum != 0)
          seriesRows[seriesName][category] = value / sum * 100;
      }
    }
    this.queryChartData_createSeries(chartConfig, isSingleChart, seriesRows, result);
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
