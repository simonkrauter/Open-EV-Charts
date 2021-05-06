// This file defines the database object, which stores the data sets and allows to query them.

"use strict";

var db = {
  totalSeriesName: "Total",

  singleSeriesName: "Value",

  countries: {},
  // Code => ID

  countryNames: {},
  // ID => Name

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
  // - year:        integer
  // - month:       integer 1..12
  // - dsType:      dataset dsType enum value
  // - source:      source URL
  // - data:        number of sales or
  //                object of brand -> number of sales or
  //                object of model -> number of sales

  brands: [],
  // All car brands used in the datasets.
  // Format: e.g. "Tesla"

  models: [],
  // All car models used in the datasets.
  // Format: e.g. "Tesla|Model 3"

  addCountry: function(code, name) {
    const id = Object.keys(this.countries).length + 1;
    this.countries[code] = id;
    this.countryNames[id] = name;
  },

  insert: function(country, dateString, dsType, source, data) {
    // Adds the data for one counry and one month or one quarter and one dataset type.
    // - country:     country enum value
    // - dateString:  month in the form "2020-01" or quarter in the form "q2020-1"
    // - dsType:      dataset dsType enum value
    // - source:      source URL
    // - data:        number of sales or
    //                object of brand -> number of sales or
    //                object of model -> number of sales

    if (dateString.substr(0, 1) == 'q') {
      var dataset =
      { country: country
      , countryName: this.countryNames[country]
      , dsType: dsType
      , source: source
      , data: {}
      };
      for (var key in data) {
        const val = Math.round(data[key] / 3);
        if (val > 0)
          dataset.data[key] = val;
      }
      dataset.year = parseInt(dateString.substr(1, 4));
      dataset.month = 1 + (parseInt(dateString.substr(6, 1)) - 1) * 3;
      for (var i = 0; i < 3; i++) {
        dataset.monthString = this.formatMonth(dataset.year, dataset.month);
        this.datasets.push(this.cloneObject(dataset));
        dataset.month++;
      }
    } else {
      this.datasets.push(
      { country: country
      , countryName: this.countryNames[country]
      , monthString: dateString
      , year: parseInt(dateString.substr(0, 4))
      , month: parseInt(dateString.substr(5, 2))
      , dsType: dsType
      , source: source
      , data: data
      });
    }

    if (dsType == this.dsTypes.AllCarsByBrand || dsType == this.dsTypes.ElectricCarsByBrand) {
      for (const brand in data) {
        if (!this.brands.includes(brand)) {
          this.brands.push(brand);
          this.brands.sort();
        }
      }
    }
    else if (dsType == this.dsTypes.ElectricCarsByModel) {
      for (const model in data) {
        if (!this.models.includes(model)) {
          this.models.push(model);
          this.models.sort();
        }
      }
    }
  },

  getValue: function(value, defaultValue) {
    if (typeof(value) == "undefined")
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

  monthToQuarter: function(month) {
    return Math.ceil(month / 3);
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
  , "ratioElectricWithinBrand": "brand-electric-ratio"
  , "shareElectric": "electric-share"
  , "shareAll": "all-share"
  },

  xProperties:
  { "month": "month"
  , "quarter": "quarter"
  , "year": "year"
  , "country": "country"
  , "brand": "brand"
  , "model": "model"
  },

  timeSpanOptions:
  { "all": "all-time"
  , "last3m": "3m"
  , "last6m": "6m"
  , "last1y": "1y"
  , "last2y": "2y"
  },

  countryOptions:
  { "all": "all-countries"
  , "combine": "combine-countries"
  },

  brandOptions:
  { "all": "all-brands"
  , "combine": "combine-brands"
  },

  modelOptions:
  { "all": "all-models"
  , "combine": "combine-models"
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

  formatForUrl: function(str) {
    if (str)
      return str.replace(/ /g, "-");
  },

  isTimeXProperty: function(chartConfig) {
    return [this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty);
  },

  isMultiCountry: function(chartConfig) {
    return chartConfig.country == this.countryOptions.all || chartConfig.country.includes(",");
  },

  isSingleOrCombinedCountry: function(chartConfig) {
    return !this.isMultiCountry(chartConfig) || chartConfig.country.split(",").includes(this.countryOptions.combine);
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
    param.options[this.metrics.ratioElectricWithinBrand] = "EV Ratio within Brand";
    param.options[this.metrics.shareAll] = "All Cars Market Split";
    if (chartConfig == null || chartConfig.country != this.countryOptions.all)
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
    if (chartConfig == null || (chartConfig.metric != this.metrics.ratioElectricWithinBrand || chartConfig.xProperty != this.xProperties.brand))
      param.options[this.countryOptions.all] = "All Countries";
    if (chartConfig == null || ((chartConfig.country == this.countryOptions.all || chartConfig.country == null || chartConfig.country.split(",").length > 1) && (![this.metrics.ratioElectricWithinBrand, this.metrics.shareAll].includes(chartConfig.metric) || chartConfig.xProperty != this.xProperties.brand)))
      param.options[this.countryOptions.combine] = "Combine Countries";
    for (const code in this.countries)
      param.options[code] = this.countryNames[this.countries[code]];
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
    param.options[this.xProperties.month] = "Per Month";
    param.options[this.xProperties.quarter] = "Per Quarter";
    param.options[this.xProperties.year] = "Per Year";
    if (chartConfig == null || [this.metrics.salesAll, this.metrics.salesElectric, this.metrics.ratioElectric].includes(chartConfig.metric))
      param.options[this.xProperties.country] = "Per Country";
    if (chartConfig == null || chartConfig.metric != this.metrics.ratioElectric)
      param.options[this.xProperties.brand] = "Per Brand";
    if (chartConfig == null || [this.metrics.salesElectric, this.metrics.shareElectric].includes(chartConfig.metric))
      param.options[this.xProperties.model] = "Per Model";
    param.defaultOption = this.xProperties.month;
    param.showAsFilter = true;
    result[param.name] = param;

    // time span
    var param = {};
    param.name = "timeSpan";
    param.options = {};
    param.options[this.timeSpanOptions.all] = "All Time";
    if (chartConfig == null || ![this.xProperties.year, this.xProperties.quarter].includes(chartConfig.xProperty)) {
      param.options[this.timeSpanOptions.last3m] = "Last 3 Months";
      param.options[this.timeSpanOptions.last6m] = "Last 6 Months";
    }
    if (chartConfig == null || ![this.xProperties.year].includes(chartConfig.xProperty))
      param.options[this.timeSpanOptions.last1y] = "Last Year";
    param.options[this.timeSpanOptions.last2y] = "Last 2 Years";
    var currentDate = new Date();
    var latestYear = 1900 + currentDate.getYear();
    var latestMonth = 1 + currentDate.getMonth();
    latestMonth--;
    if (latestMonth < 1) {
      latestMonth = 12;
      latestYear--;
    }
    if (chartConfig == null || [this.xProperties.country, this.xProperties.brand, this.xProperties.model].includes(chartConfig.xProperty)) {
      // single month
      var year = latestYear;
      var month = latestMonth;
      for (var i = 0; i < 4; i++) {
        param.options["m" + this.formatMonth(year, month)] = this.formatMonth(year, month);
        month--;
        if (month < 1) {
          month = 12;
          year--;
        }
      }
      // single quarter
      var year = latestYear;
      var quarter = this.monthToQuarter(latestMonth);
      for (var i = 0; i < 4; i++) {
        param.options["q" + year + "-" + quarter] = this.formatQuarter(year, quarter);
        quarter--;
        if (quarter < 1) {
          quarter = 4;
          year--;
        }
      }
    }
    if (chartConfig == null || chartConfig.xProperty != this.xProperties.year) {
      // single year
      var year = latestYear;
      for (var i = 0; i < 3; i++) {
        param.options["y" + year] = year;
        year--;
      }
    }
    if (chartConfig != null && chartConfig.timeSpan != null && param.options[chartConfig.timeSpan] == null) {
      // Allow to select a time spans which is not included in the suggested options
      var text = chartConfig.timeSpan.substr(1);
      if (chartConfig.timeSpan.startsWith("q")) {
        const year = chartConfig.timeSpan.substr(1, 4);
        const quarter = chartConfig.timeSpan.substr(6, 1);
        text = this.formatQuarter(year, quarter);
      }
      param.options[chartConfig.timeSpan] = text;
    }
    param.defaultOption = this.timeSpanOptions.last2y;
    param.showInTitle = chartConfig == null || !this.isTimeXProperty(chartConfig);
    param.showAsFilter = true;
    result[param.name] = param;

    // brand
    var param = {};
    param.name = "brand";
    param.options = {};
    param.options[this.brandOptions.all] = "All Brands";
    if (chartConfig == null || ([this.metrics.salesAll, this.metrics.salesElectric, this.metrics.ratioElectric].includes(chartConfig.metric) && chartConfig.xProperty != this.xProperties.model))
      param.options[this.brandOptions.combine] = "Combine Brands";
    if (chartConfig == null || chartConfig.xProperty != this.xProperties.brand) {
      for (const i in this.brands) {
        const brand = this.brands[i];
        if (brand != "other")
          param.options[this.formatForUrl(brand)] = brand;
      }
    }
    param.excludeOnUnfoldAndTitle = [this.brandOptions.all, this.brandOptions.combine];
    param.defaultOption = this.brandOptions.all;
    param.showInTitle = true;
    param.showAsFilter = chartConfig == null || chartConfig.xProperty != this.xProperties.brand;
    result[param.name] = param;

    // model
    var param = {};
    param.name = "model";
    param.options = {};
    if (chartConfig == null || chartConfig.xProperty != this.xProperties.brand)
      param.options[this.modelOptions.all] = "All Models";
    param.options[this.modelOptions.combine] = "Combine Models";
    for (const i in this.models) {
      const parts = this.models[i].split("|", 2);
      const brand = parts[0];
      const model = parts[1];
      if (chartConfig == null || chartConfig.brand == brand)
        param.options[this.formatForUrl(model)] = model;
    }
    param.defaultOption = this.modelOptions.combine;
    param.showInTitle = chartConfig == null || ![this.modelOptions.all, this.modelOptions.combine].includes(chartConfig.model);
    param.showAsFilter = chartConfig == null || (![this.xProperties.model, this.xProperties.brand].includes(chartConfig.xProperty) && ![this.metrics.salesAll, this.metrics.shareAll, this.metrics.ratioElectricWithinBrand].includes(chartConfig.metric) && chartConfig.brand != this.brandOptions.combine);
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
    if (chartConfig == null || (
      (this.getNumberOfSeries(chartConfig) <= 3 || this.isBarChartStacked(chartConfig)) &&
      (chartConfig.metric != this.metrics.ratioElectric || chartConfig.brand != this.brandOptions.combine || chartConfig.country != this.countryOptions.all || chartConfig.xProperty == this.xProperties.country)
    ) || !allowLineChart)
      param.options[this.views.barChart] = "Bar Chart";
    if (allowLineChart)
      param.options[this.views.lineChart] = "Line Chart";
    param.options[this.views.table] = "Table";
    param.options[this.views.sources] = "Sources";
    param.defaultOption = Object.keys(param.options)[0];
    result[param.name] = param;

    return result;
  },

  encodeChartConfig: function(chartConfig) {
    chartConfig = this.makeChartConfigValid(chartConfig);
    var parts = [];
    const params = this.getChartParams(chartConfig);
    for (const i in params) {
      const param = params[i];
      if (chartConfig[param.name] != param.defaultOption || param.alwaysAddToUrl) {
        var values = chartConfig[param.name].split(",");
        for (const i in values) {
          if (values[i] != "")
            parts.push(this.formatForUrl(values[i]));
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
    if (chartConfigString != "")
      parts = chartConfigString.split(":");
    var result = {};
    var params = this.getChartParams();
    for (const i in params) {
      if (!params[i])
        continue;
      const param = params[i];
      var selectedValues = [];
      for (const j in parts) {
        const part = parts[j];
        var optionsKeyMatched = null;
        for (const key in param.options) {
          if (this.normalizeSearchString(key) == this.normalizeSearchString(part)) {
            optionsKeyMatched = key;
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

    return this.makeChartConfigValid(result);
  },

  makeChartConfigValid: function(chartConfig) {
    var params = this.getChartParams(chartConfig);

    var countryValues = chartConfig.country.split(",");
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
      } else {
        if (chartConfig.metric == this.metrics.shareAll && chartConfig.xProperty == this.xProperties.brand && countryValues.includes(this.countryOptions.combine)) {
          // remove this.countryOptions.combine
          var newCountryValues = [];
          for (const i in countryValues) {
            if (countryValues[i] != this.countryOptions.combine)
              newCountryValues.push(countryValues[i]);
          }
          chartConfig.country = newCountryValues.join(",");
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
    if (chartConfig.xProperty == this.xProperties.brand)
      chartConfig.brand = this.brandOptions.all;
    if (chartConfig.brand == this.brandOptions.combine && chartConfig.model == this.modelOptions.all)
      chartConfig.model = this.modelOptions.combine;
    if (chartConfig.xProperty == this.xProperties.model && ![this.metrics.salesElectric, this.metrics.shareElectric].includes(chartConfig.metric))
      chartConfig.xProperty = this.xProperties.brand;
    if (chartConfig.metric == this.metrics.all && chartConfig.country == this.countryOptions.all)
      chartConfig.metric = params.metric.defaultOption;
    if (chartConfig.metric == this.metrics.ratioElectricWithinBrand)
      chartConfig.model = this.modelOptions.combine;

    if (chartConfig.country == this.countryOptions.all && !Object.keys(params.country.options).includes(this.countryOptions.all))
      chartConfig.country = Object.keys(this.countries)[0];

    if (!Object.keys(params.xProperty.options).includes(chartConfig.xProperty))
      chartConfig.xProperty = params.xProperty.defaultOption;

    if (!Object.keys(params.brand.options).includes(chartConfig.brand))
      chartConfig.brand = params.brand.defaultOption;

    params = this.getChartParams(chartConfig); // update

    if (!Object.keys(params.view.options).includes(chartConfig.view))
      chartConfig.view = params.view.defaultOption;

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
    var yProperty;
    if (this.isTimeXProperty(chartConfig) && chartConfig.brand == this.brandOptions.all)
      yProperty = "brand";
    else if (chartConfig.model != this.modelOptions.all)
      yProperty = "country";
    else if(!this.isTimeXProperty(chartConfig))
      return [chartConfig];
    var result = [];
    result.push(chartConfig);
    const params = this.getChartParams();
    for (const i in params) {
      const param = params[i];
      if (param.unfoldKey && chartConfig[param.name] == param.unfoldKey && yProperty != param.name) {
        var newResult = [];
        for (const j in result) {
          for (const k in param.options) {
            if (k != param.unfoldKey && (!param.excludeOnUnfoldAndTitle || !param.excludeOnUnfoldAndTitle.includes(k))) {
              var newConfig = this.cloneObject(result[j]);
              newConfig[param.name] = k;
              newConfig = this.makeChartConfigValid(newConfig);
              newResult.push(newConfig);
            }
          }
        }
        result = newResult;
      }
      if (param.allowMultiSelection && yProperty != param.name) {
        const values = chartConfig[param.name].split(",");
        if (values.length > 1 && (!param.disableUnfoldOption || !values.includes(param.disableUnfoldOption))) {
          var newResult = [];
          for (const j in result) {
            for (const i in values) {
              if (param.excludeOnUnfoldAndTitle && param.excludeOnUnfoldAndTitle.includes(values[i]))
                continue;
              var newConfig = this.cloneObject(result[j]);
              newConfig[param.name] = values[i];
              newConfig = this.makeChartConfigValid(newConfig);
              newResult.push(newConfig);
            }
          }
          result = newResult;
        }
      }
    }
    return result;
  },

  getChartTitle: function(chartConfig) {
    var title = "";
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
      if (title != "")
        title = title + " - ";
      title = title + param.options[value];
    }
    return title;
  },

  queryDataSets: function(chartConfig, dsType) {
    // Returns datasets for chart
    const countryValues = chartConfig.country.split(",");
    var filterCountryIds = [];
    if (chartConfig.country != this.countryOptions.all) {
      for (const i in countryValues) {
        if (this.countries[countryValues[i]])
          filterCountryIds.push(this.countries[countryValues[i]]);
      }
    }
    if (chartConfig.metric == this.metrics.ratioElectricWithinBrand && chartConfig.xProperty == this.xProperties.brand)
      countryValues.push(this.countryOptions.combine);

    var filterBrand = null;
    if (![this.brandOptions.combine, this.brandOptions.all].includes(chartConfig.brand) && chartConfig.xProperty != this.xProperties.brand)
      filterBrand = chartConfig.brand;
    var filterModel = null;
    if (![this.modelOptions.combine, this.modelOptions.all].includes(chartConfig.model) && chartConfig.xProperty != this.xProperties.model && dsType == this.dsTypes.ElectricCarsByModel)
      filterModel = chartConfig.model;
    var filterYearFirst = null;
    var filterYearLast = null;
    var filterMonthFirst = null;
    var filterMonthLast = null;
    if (chartConfig.timeSpan != this.timeSpanOptions.all) {
      if (chartConfig.timeSpan.startsWith("y")) {
        filterYearFirst = parseInt(chartConfig.timeSpan.substr(1));
        filterMonthFirst = 1;
        filterYearLast = filterYearFirst;
        filterMonthLast = 12;
      } else if (chartConfig.timeSpan.startsWith("q")) {
        filterYearFirst = parseInt(chartConfig.timeSpan.substr(1, 4));
        filterMonthFirst = 1 + (parseInt(chartConfig.timeSpan.substr(6, 1)) - 1) * 3;
        filterYearLast = filterYearFirst;
        filterMonthLast = filterMonthFirst + 2;
      } else if (chartConfig.timeSpan.startsWith("m")) {
        filterYearFirst = parseInt(chartConfig.timeSpan.substr(1, 4));
        filterMonthFirst = parseInt(chartConfig.timeSpan.substr(6, 2));
        filterYearLast = filterYearFirst;
        filterMonthLast = filterMonthFirst;
      } else if (chartConfig.timeSpan.endsWith("y") || chartConfig.timeSpan.endsWith("m")) {
        var currentDate = new Date();
        var latestYear = 1900 + currentDate.getYear();
        var latestMonth = 1 + currentDate.getMonth();
        latestMonth--;
        if (latestMonth < 1) {
          latestMonth = 12;
          latestYear--;
        }
        filterYearLast = latestYear;
        filterMonthLast = latestMonth;
        const quantity = parseInt(chartConfig.timeSpan.substr(0, chartConfig.timeSpan.length - 1));
        if (chartConfig.timeSpan.endsWith("y")) {
          if (chartConfig.xProperty == this.xProperties.year) {
            filterMonthFirst = 1;
          } else {
            filterYearFirst = latestYear - quantity;
            filterMonthFirst = filterMonthLast + 1;
            if (filterMonthFirst > 12) {
              filterYearFirst++;
              filterMonthFirst = filterMonthFirst - 12;
            }
          }
        } else if (chartConfig.timeSpan.endsWith("m")) {
          filterYearFirst = latestYear;
          filterMonthFirst = latestMonth - quantity + 1;
          if (filterMonthFirst < 1) {
            filterYearFirst--;
            filterMonthFirst = filterMonthFirst + 12;
          }
        }
      }
    }

    var seriesRows = {};
    var sources = [];
    var categories = [];
    var valuesCountPerCountry = {};

    for (const i in this.datasets) {
      const dataset = this.datasets[i];
      if (filterCountryIds.length > 0 && !filterCountryIds.includes(dataset.country))
        continue;
      if (dataset.dsType != dsType)
        continue;
      if (filterYearFirst != null && (dataset.year < filterYearFirst || dataset.year > filterYearLast || (dataset.year == filterYearFirst && dataset.month < filterMonthFirst) || (dataset.year == filterYearLast && dataset.month > filterMonthLast)))
        continue;

      var category = "";
      if (chartConfig.xProperty == this.xProperties.month)
        category = dataset.monthString;
      else if (chartConfig.xProperty == this.xProperties.quarter) {
        category = this.formatQuarter(dataset.year, this.monthToQuarter(dataset.month));
        if ([this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric)) {
          if (!(dataset.country in valuesCountPerCountry))
            valuesCountPerCountry[dataset.country] = {};
          if (category in valuesCountPerCountry[dataset.country])
            valuesCountPerCountry[dataset.country][category]++;
          else
            valuesCountPerCountry[dataset.country][category] = 1;
        }
      } else if (chartConfig.xProperty == this.xProperties.year)
        category = dataset.year;
      else if (chartConfig.xProperty == this.xProperties.country)
        category = dataset.countryName;

      for (const dataKey in dataset.data) {
        const dataKeyParts = dataKey.split("|", 2);
        const brand = dataKeyParts[0];
        const model = dataKeyParts[1];

        if (filterBrand != null && this.formatForUrl(brand) != filterBrand)
          continue;
        if (filterModel != null && this.formatForUrl(model) != filterModel)
          continue;

        var brandAndModel;
        if (model && filterBrand != null)
          brandAndModel = model;
        else
          brandAndModel = dataKey; // keep "|" for later decoding

        const value = dataset.data[dataKey];

        if (chartConfig.xProperty == this.xProperties.brand)
          category = brand;
        else if (chartConfig.xProperty == this.xProperties.model)
          category = brandAndModel;

        var seriesName = this.singleSeriesName;
        if (filterCountryIds.length != 1 && !countryValues.includes(this.countryOptions.combine) && chartConfig.xProperty != this.xProperties.country)
          seriesName = dataset.countryName;
        else if (filterModel == null && chartConfig.model != this.modelOptions.combine && chartConfig.xProperty != this.xProperties.model && chartConfig.brand != this.brandOptions.combine) {
          if (chartConfig.brand == this.brandOptions.all)
            seriesName = brandAndModel;
          else if (model)
            seriesName = model;
        } else if (filterBrand == null && chartConfig.brand != this.brandOptions.combine && ![this.xProperties.brand, this.xProperties.model].includes(chartConfig.xProperty)) {
          if (chartConfig.brand != this.brandOptions.all)
            seriesName = brandAndModel;
          else
            seriesName = brand;
        }

        if (chartConfig.metric == this.metrics.ratioElectricWithinBrand && brand == "other")
          continue;

        if (!(seriesName in seriesRows))
          seriesRows[seriesName] = {};
        if (category in seriesRows[seriesName])
          seriesRows[seriesName][category] += value;
        else
          seriesRows[seriesName][category] = value;
        if (!categories.includes(category))
          categories.push(category);

        if (sources[dataset.source] == null) {
          sources[dataset.source] = {};
          sources[dataset.source].country = dataset.country;
          sources[dataset.source].firstDate = dataset.monthString;
        }
        sources[dataset.source].lastDate = dataset.monthString;
      }
    }

    // Remove last quarter if it is incomplete
    if (Object.keys(valuesCountPerCountry).length > 0) {
      const lastCategory = categories[categories.length - 1];
      for (const i in valuesCountPerCountry) {
        const valueCountPerCategory = valuesCountPerCountry[i];
        if (valueCountPerCategory[lastCategory] != 3) {
          categories.pop();
          break;
        }
      }
    }

    return {
      seriesRows: seriesRows,
      sources: sources,
      categories: categories
    };
  },

  getCategoriesFromDataSets: function(chartConfig, datasets, sortByName = false) {
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
        if (a == "other")
          return 1;
        if (b == "other")
          return -1;
        return a.localeCompare(b);
      });
    } else {
      // Sort by value
      categories.sort(function(a, b) {
        if (a == "other")
          return 1;
        if (b == "other")
          return -1;
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
    return result;
  },

  getCategoryTitle: function(chartConfig) {
    if (chartConfig.xProperty == this.xProperties.country)
      return "Country";
    else if (chartConfig.xProperty == this.xProperties.model)
      return "Model";
    else if (chartConfig.xProperty == this.xProperties.brand)
      return "Brand";
    else if (chartConfig.xProperty == this.xProperties.month)
      return "Month";
    else if (chartConfig.xProperty == this.xProperties.quarter)
      return "Quarter";
    else if (chartConfig.xProperty == this.xProperties.year)
      return "Year";
  },

  getSeriesNameColumnHeader: function(chartConfig) {
    if (chartConfig.model == db.modelOptions.all)
      return "Model";
    else if (chartConfig.brand == db.brandOptions.all)
      return "Brand";
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
        return Object.keys(this.countries).length;
      } else if (chartConfig.country != null) {
        const countryValues = chartConfig.country.split(",");
        if (countryValues.length > 1 && !countryValues.includes(this.countryOptions.combine)) {
          return countryValues.length;
        }
      }
    }
    if (this.isTimeXProperty(chartConfig) && chartConfig.brand == this.brandOptions.all) {
      return this.brands.length;
    }
    return 1;
  },

  isSumPerSeries: function(chartConfig) {
    return (chartConfig.xProperty == this.xProperties.brand && chartConfig.model != this.modelOptions.all) || chartConfig.xProperty == this.xProperties.model;
  },

  isBarChartStacked: function(chartConfig) {
    return (chartConfig.brand == this.brandOptions.all && ![this.xProperties.brand, this.xProperties.model].includes(chartConfig.xProperty) && chartConfig.metric != this.metrics.ratioElectricWithinBrand) || [this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric) || (chartConfig.metric == this.metrics.ratioElectric && chartConfig.model == this.modelOptions.all) || ([this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric) && this.isSingleOrCombinedCountry(chartConfig));
  },

  queryChartData: function(chartConfig, sortByName = false) {
    // Returns the data for a spedific view
    var result = {};
    result.series = [];

    var seriesRows;
    if (chartConfig.metric == this.metrics.salesAll) {
      var datasets = this.queryDataSets(chartConfig, this.dsTypes.AllCarsByBrand);
      seriesRows = datasets.seriesRows;
      result.categories = this.getCategoriesFromDataSets(chartConfig, datasets, sortByName);
      result.sources = datasets.sources;
    } else if (chartConfig.metric == this.metrics.salesElectric) {
      var datasets = this.queryDataSets(chartConfig, this.dsTypes.ElectricCarsByModel);
      seriesRows = datasets.seriesRows;
      result.categories = this.getCategoriesFromDataSets(chartConfig, datasets, sortByName);
      result.sources = datasets.sources;
    } else if ([this.metrics.ratioElectric, this.metrics.ratioElectricWithinBrand].includes(chartConfig.metric)) {
      var chartConfigForRatio = this.cloneObject(chartConfig);
      if (chartConfig.metric == this.metrics.ratioElectric)
        chartConfigForRatio.brand = this.brandOptions.combine;
      var datasets = this.queryDataSets(chartConfig, this.dsTypes.ElectricCarsByModel);
      var datasetsForRatio = this.queryDataSets(chartConfigForRatio, this.dsTypes.AllCarsByBrand);
      seriesRows = datasets.seriesRows;
      result.sources = datasets.sources;
      for (const i in datasetsForRatio.sources) {
        if (result.sources[i] == null)
          result.sources[i] = datasetsForRatio.sources[i];
      }
      var valueExists = false;
      for (const seriesName in seriesRows) {
        var valuesForRatio = {};
        for (const i in datasets.categories) {
          const category = datasets.categories[i];
          var value = 0;
          if (chartConfig.metric == this.metrics.ratioElectric && chartConfigForRatio.brand == this.brandOptions.all && this.isSingleOrCombinedCountry(chartConfigForRatio)) {
            for (const seriesNameInner in datasetsForRatio.seriesRows) {
              value = value + this.getValue(datasetsForRatio.seriesRows[seriesNameInner][category], 0);
            }
          }
          else if (datasetsForRatio.seriesRows[this.singleSeriesName] != null)
            value = value + this.getValue(datasetsForRatio.seriesRows[this.singleSeriesName][category], 0);
          else if (datasetsForRatio.seriesRows[seriesName] != null)
            value = value + this.getValue(datasetsForRatio.seriesRows[seriesName][category], 0);
          valuesForRatio[category] = value;
        }
        for (const i in datasets.categories) {
          const category = datasets.categories[i];
          var value = this.getValue(seriesRows[seriesName][category], null);
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
      result.categories = this.getCategoriesFromDataSets(chartConfig, {"categories": datasets.categories, "seriesRows": seriesRows}, sortByName);
    } else if ([this.metrics.shareElectric, this.metrics.shareAll].includes(chartConfig.metric)) {
      var chartConfigForSum = this.cloneObject(chartConfig);
      chartConfigForSum.brand = this.brandOptions.all;
      chartConfigForSum.model = this.modelOptions.all;
      var datasets;
      var datasetsForSum;
      if (chartConfig.metric == this.metrics.shareElectric) {
        datasets = this.queryDataSets(chartConfig, this.dsTypes.ElectricCarsByModel);
        datasetsForSum = this.queryDataSets(chartConfigForSum, this.dsTypes.ElectricCarsByModel);
      } else {
        datasets = this.queryDataSets(chartConfig, this.dsTypes.AllCarsByBrand);
        datasetsForSum = this.queryDataSets(chartConfigForSum, this.dsTypes.AllCarsByBrand);
      }
      seriesRows = datasets.seriesRows;
      const seriesRowsKeys = Object.keys(seriesRows);
      if (seriesRowsKeys.length == 1 && seriesRowsKeys[0] == "other") {
        seriesRows = []; // market split with only 1 series is not useful
      }
      result.categories = this.getCategoriesFromDataSets(chartConfig, datasets, sortByName);
      result.sources = datasets.sources;

      var sums = {};
      const isSumPerSeries = this.isSumPerSeries(chartConfig);
      if (isSumPerSeries) {
        // sum per series
        for (const seriesName in datasets.seriesRows) {
          var sum = 0;
          for (const i in datasets.categories) {
            const category = datasets.categories[i];
            sum = sum + this.getValue(datasets.seriesRows[seriesName][category], 0);
          }
          sums[seriesName] = sum;
        }
      } else {
        // sum per category
        for (const i in datasets.categories) {
          const category = datasets.categories[i];
          var sum = 0;
          for (const seriesName in datasetsForSum.seriesRows) {
            sum = sum + this.getValue(datasetsForSum.seriesRows[seriesName][category], 0);
          }
          sums[category] = sum;
        }
      }
      for (const seriesName in seriesRows) {
        for (const i in datasets.categories) {
          const category = datasets.categories[i];
          var value = this.getValue(seriesRows[seriesName][category], null);
          var sum;
          if (isSumPerSeries)
            sum = sums[seriesName];
          else if (this.isSingleOrCombinedCountry(chartConfig))
            sum = sums[category];
          else {
            // sum per series and category
            const rows = datasetsForSum.seriesRows[seriesName];
            if (rows != null)
              sum = this.getValue(rows[category], 0);
          }

          if (sum != 0)
            seriesRows[seriesName][category] = value / sum * 100;
        }
      }
    }

    // Fill gaps in month/quarters
    if (chartConfig.xProperty == this.xProperties.month)
      this.fillMonthCategoryGaps(result.categories);
    else if (chartConfig.xProperty == this.xProperties.quarter)
      this.fillQuarterCategoryGaps(result.categories);

    // Create series (entries of 'data' will be inserted in the order of 'result.categories')
    var seriesByName = {};
    var seriesNamesInOrder = [];
    var seriesSortValues = {};
    var totalSeries = {name: this.totalSeriesName, data: []};
    for (const seriesName in seriesRows) {
      seriesNamesInOrder.push(seriesName);
      var newSeries = {};
      newSeries.name = seriesName;
      newSeries.data = [];

      for (const i in result.categories) {
        const category = result.categories[i];
        var value = this.getValue(seriesRows[seriesName][category], null);
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

    if (Object.keys(seriesRows).length > 1 && chartConfig.view != this.views.barChart && (chartConfig.brand != this.brandOptions.combine || chartConfig.country != this.countryOptions.combine) && [this.metrics.salesAll, this.metrics.salesElectric].includes(chartConfig.metric))
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

    if (chartConfig.view != this.views.lineChart && otherSeries.data.length > 0 && chartConfig.metric != this.metrics.ratioElectricWithinBrand)
      result.series.push(otherSeries);

    return result;
  }
};
