// This file defines the database object, which stores the data sets and allows to query them.

"use strict";

var db = {
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
  // - monthString: month in the form "YYYY-MM"
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

  insert: function(country, monthString, dsType, source, data) {
    this.datasets.push(
    { country: country
    , countryName: this.countryNames[country]
    , monthString: monthString
    , year: parseInt(monthString.substr(0, 4))
    , month: parseInt(monthString.substr(5, 2))
    , dsType: dsType
    , source: source
    , data: data
    });
    if (dsType == db.dsTypes.AllCarsByBrand || dsType == db.dsTypes.ElectricCarsByBrand) {
      for (const brand in data) {
        if (!this.brands.includes(brand)) {
          this.brands.push(brand);
          this.brands.sort();
        }
      }
    }
    else if (dsType == db.dsTypes.ElectricCarsByModel) {
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
    return JSON.parse(JSON.stringify(obj))
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

  metrics:
  { "all": "all-metrics"
  , "salesAll": "all-sales"
  , "salesElectric": "electric-sales"
  , "ratioElectric": "electric-ratio"
  , "shareElectric": "electric-share"
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

  getChartParams: function(chartConfig) {
    var result = {};

    // metric
    var param = {};
    param.name = "metric";
    param.options = {};
    if (!chartConfig || chartConfig.country != this.countryOptions.all)
      param.options[this.metrics.all] = "All Metrics";
    param.options[this.metrics.salesAll] = "All Cars Sales";
    param.options[this.metrics.salesElectric] = "Electric Cars Sales";
    param.options[this.metrics.ratioElectric] = "Ratio of Electric Cars Sales";
    param.options[this.metrics.shareElectric] = "Market Share of Electric Cars";
    param.unfoldKey = this.metrics.all;
    param.defaultOption = this.metrics.ratioElectric;
    param.alwaysAddToUrl = true;
    param.showInTitle = true;
    param.showAsFilter = true;
    param.allowMultiSelection = true;
    result[param.name] = param;

    // country
    var param = {};
    param.name = "country";
    param.options = {};
    param.options[this.countryOptions.all] = "All Countries";
    param.options[this.countryOptions.combine] = "Combine Countries";
    for (const code in db.countries)
      param.options[code] = db.countryNames[db.countries[code]];
    param.unfoldKey = this.countryOptions.all;
    param.excludeOnUnfoldAndTitle = [this.countryOptions.all, this.countryOptions.combine];
    param.defaultOption = this.countryOptions.all;
    param.showInTitle = true;
    param.showAsFilter = chartConfig == null || chartConfig.xProperty != this.xProperties.country;
    param.allowMultiSelection = true;
    result[param.name] = param;

    // x-axis property
    var param = {};
    param.name = "xProperty";
    param.options = {};
    param.options[this.xProperties.month] = "Per Month";
    param.options[this.xProperties.quarter] = "Per Quarter";
    param.options[this.xProperties.year] = "Per Year";
    param.options[this.xProperties.country] = "Per Country";
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
    param.options[this.timeSpanOptions.last3m] = "Last 3 Months";
    param.options[this.timeSpanOptions.last6m] = "Last 6 Months";
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
      // single year
      var year = latestYear;
      for (var i = 0; i < 2; i++) {
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
    param.showInTitle = chartConfig == null || [this.xProperties.country, this.xProperties.brand, this.xProperties.model].includes(chartConfig.xProperty);
    param.showAsFilter = true;
    result[param.name] = param;

    // brand
    var param = {};
    param.name = "brand";
    param.options = {};
    if (chartConfig == null || chartConfig.xProperty != this.xProperties.model)
      param.options[this.brandOptions.all] = "All Brands";
    param.options[this.brandOptions.combine] = "Combine Brands";
    for (const i in this.brands) {
      const brand = this.brands[i];
      if (brand != "other")
        param.options[this.formatForUrl(brand)] = brand;
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
    param.showAsFilter = chartConfig == null || (chartConfig.xProperty != this.xProperties.model && chartConfig.metric != this.metrics.salesAll && chartConfig.brand != this.brandOptions.combine);
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
    param.options[this.views.barChart] = "Bar Chart";
    if (chartConfig == null || [this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty))
      param.options[this.views.lineChart] = "Line Chart";
    param.options[this.views.table] = "Table";
    param.options[this.views.sources] = "Sources";
    param.defaultOption = this.views.barChart;
    result[param.name] = param;

    return result;
  },

  encodeChartConfig: function(chartConfig) {
    var parts = [];
    const params = this.getChartParams();
    for (const i in params) {
      const param = params[i];
      if (chartConfig[param.name] != param.defaultOption || param.alwaysAddToUrl) {
        var values = chartConfig[param.name].split(",");
        for (const i in values) {
          parts.push(values[i]);
        }
      }
    }
    return parts.join(":");
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
        if (part in param.options) {
          if (!selectedValues.includes(part))
            selectedValues.push(part);
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
    if (chartConfig.xProperty == this.xProperties.country)
      chartConfig.country = this.countryOptions.all;
    if (chartConfig.xProperty == this.xProperties.brand)
      chartConfig.brand = this.brandOptions.all;
    if (chartConfig.brand == this.brandOptions.combine && chartConfig.model == this.modelOptions.all)
      chartConfig.model = this.modelOptions.combine;
    if(chartConfig.xProperty == this.xProperties.model && ![this.metrics.salesElectric, this.metrics.shareElectric].includes(chartConfig.metric))
      chartConfig.xProperty = this.xProperties.brand;
    return chartConfig;
  },

  unfoldChartConfig: function(chartConfig) {
    var yProperty;
    if ([this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty) && chartConfig.brand == this.brandOptions.all)
      yProperty = "brand";
    else if (chartConfig.model != this.modelOptions.all)
      yProperty = "country";
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
              newResult.push(newConfig);
            }
          }
        }
        result = newResult;
      }
      if (param.allowMultiSelection && yProperty != param.name) {
        var values = chartConfig[param.name].split(",");
        if (values.length > 1) {
          var newResult = [];
          for (const j in result) {
            for (const i in values) {
              var newConfig = this.cloneObject(result[j]);
              newConfig[param.name] = values[i];
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
    var filterCountryId = null;
    if (chartConfig.country != this.countryOptions.combine && chartConfig.country != this.countryOptions.all)
      filterCountryId = db.countries[chartConfig.country];
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
        filterYearFirst = parseInt(chartConfig.timeSpan.substr(1).substr(0, 4));
        filterMonthFirst = 1 + (parseInt(chartConfig.timeSpan.substr(1).substr(5, 1)) - 1) * 3;
        filterYearLast = filterYearFirst;
        filterMonthLast = filterMonthFirst + 2;
      } else if (chartConfig.timeSpan.startsWith("m")) {
        filterYearFirst = parseInt(chartConfig.timeSpan.substr(1).substr(0, 4));
        filterMonthFirst = parseInt(chartConfig.timeSpan.substr(1).substr(5, 2));
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
          filterYearFirst = latestYear - quantity;
          filterMonthFirst = filterMonthLast + 1;
          if (filterMonthFirst > 12) {
            filterYearFirst++;
            filterMonthFirst = filterMonthFirst - 12;
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

    for (const i in db.datasets) {
      const dataset = db.datasets[i];
      if (filterCountryId != null && dataset.country != filterCountryId)
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

        var brandAndModel = brand;
        if (model) {
          if (filterBrand != null)
            brandAndModel = model;
          else
            brandAndModel = brandAndModel + " " + model;
        }

        const value = dataset.data[dataKey];

        if (chartConfig.xProperty == this.xProperties.brand)
          category = brand;
        else if (chartConfig.xProperty == this.xProperties.model)
          category = brandAndModel;

        var seriesName = "";
        if (filterCountryId == null && chartConfig.country != this.countryOptions.combine && chartConfig.xProperty != this.xProperties.country)
          seriesName = dataset.countryName;
        if (filterBrand == null && chartConfig.brand != this.brandOptions.combine && chartConfig.xProperty != this.xProperties.model && chartConfig.xProperty != this.xProperties.brand) {
          if (chartConfig.brand != this.brandOptions.all)
            seriesName = brandAndModel;
          else
            seriesName = brand;
        }
        if (filterModel == null && chartConfig.model != this.modelOptions.combine && chartConfig.xProperty != this.xProperties.model && chartConfig.brand != this.brandOptions.combine) {
          if (chartConfig.brand == this.brandOptions.all)
            seriesName = brandAndModel;
          else if (model)
            seriesName = model;
        }

        if (seriesName == "")
          seriesName = "Value";

        if (!(seriesName in seriesRows))
          seriesRows[seriesName] = {};
        if (category in seriesRows[seriesName])
          seriesRows[seriesName][category] += value;
        else
          seriesRows[seriesName][category] = value;
        if (!categories.includes(category))
          categories.push(category);
      }

      const sourceParts = dataset.source.split("; ");
      for (const j in sourceParts) {
        const sourcePart = sourceParts[j];
        if (!sources.includes(sourcePart))
          sources.push(sourcePart);
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

  getCategoriesFromDataSets: function(chartConfig, datasets) {
    // Sort categories and limit count
    var categories = datasets.categories;
    var seriesRows = datasets.seriesRows;
    var result = [];
    const maxSeries = this.maxSeriesOptions[chartConfig.maxSeries];
    if ([this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty)) {
      // Sort by name
      categories.sort();
    } else {
      // Sort by value
      categories.sort(function(a, b) {
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
      if (count == maxSeries && ![this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty) && chartConfig.view != this.views.table)
        break;
    }
    return result;
  },

  queryChartData: function(chartConfig) {
    // Returns the data for a spedific view
    var result = {};
    result.series = [];

    var seriesRows;
    if (chartConfig.metric == this.metrics.salesAll) {
      var datasets = this.queryDataSets(chartConfig, db.dsTypes.AllCarsByBrand);
      seriesRows = datasets.seriesRows;
      result.categories = this.getCategoriesFromDataSets(chartConfig, datasets);
      result.sources = datasets.sources;
    } else if (chartConfig.metric == this.metrics.salesElectric) {
      var datasets = this.queryDataSets(chartConfig, db.dsTypes.ElectricCarsByModel);
      seriesRows = datasets.seriesRows;
      result.categories = this.getCategoriesFromDataSets(chartConfig, datasets);
      result.sources = datasets.sources;
    } else if (chartConfig.metric == this.metrics.ratioElectric) {
      var datasets = this.queryDataSets(chartConfig, db.dsTypes.ElectricCarsByModel);
      var datasetsForRatio = this.queryDataSets(chartConfig, db.dsTypes.AllCarsByBrand);
      seriesRows = datasets.seriesRows;
      result.sources = datasets.sources.concat(datasetsForRatio.sources);
      for (const seriesName in seriesRows) {
        var valuesForRatio = {};
        for (const i in datasets.categories) {
          const category = datasets.categories[i];
          var value = 0;
          if (chartConfig.brand == this.brandOptions.all) {
            for (const seriesNameInner in datasetsForRatio.seriesRows) {
              value = value + this.getValue(datasetsForRatio.seriesRows[seriesNameInner][category], 0);
            }
          } else {
            if (datasetsForRatio.seriesRows[seriesName])
              value = value + this.getValue(datasetsForRatio.seriesRows[seriesName][category], 0);
          }
          valuesForRatio[category] = value;
        }
        for (const i in datasets.categories) {
          const category = datasets.categories[i];
          var value = this.getValue(seriesRows[seriesName][category], null);
          if (valuesForRatio[category] == 0)
            seriesRows[seriesName][category] = null;
          else {
            var val = value / valuesForRatio[category] * 100;
            val = Math.min(val, 100);
            seriesRows[seriesName][category] = val;
          }
        }
      }
      result.categories = this.getCategoriesFromDataSets(chartConfig, {"categories": datasets.categories, "seriesRows": seriesRows});
    } else if (chartConfig.metric == this.metrics.shareElectric) {
      var datasets = this.queryDataSets(chartConfig, db.dsTypes.ElectricCarsByModel);
      var chartConfigForSum = this.cloneObject(chartConfig);
      chartConfigForSum.brand = this.brandOptions.all;
      if (chartConfig.xProperty == this.xProperties.model)
        chartConfigForSum.model = this.modelOptions.all;
      var datasetsForSum = this.queryDataSets(chartConfigForSum, db.dsTypes.ElectricCarsByModel);
      seriesRows = datasets.seriesRows;
      result.categories = this.getCategoriesFromDataSets(chartConfig, datasets);
      result.sources = datasets.sources;
      var sums = {};
      const isSumPerSeries = [this.xProperties.model, this.xProperties.country].includes(chartConfig.xProperty) || (chartConfig.xProperty == this.xProperties.brand && chartConfig.model != this.modelOptions.all);
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
        // sum per categories
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
          else
            sum = sums[category];
          if (sum == 0)
            seriesRows[seriesName][category] = 0;
          else
            seriesRows[seriesName][category] = value / sum * 100;
        }
      }
    }

    if (chartConfig.xProperty == this.xProperties.country)
      result.categoryTitle = "Country";
    else if (chartConfig.xProperty == this.xProperties.model)
      result.categoryTitle = "Model";
    else if (chartConfig.xProperty == this.xProperties.brand)
      result.categoryTitle = "Brand";
    else
      result.categoryTitle = "Time Span";

    // Create series (entries of 'data' must be in order of 'result.categories')
    var seriesByName = {};
    var seriesNamesInOrder = [];
    var seriesSortValues = {};
    var totalSeries = {name: "Total", data: []};
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

    if (Object.keys(seriesRows).length > 1 && chartConfig.view != this.views.barChart && chartConfig.brand != this.brandOptions.combine && ![this.metrics.ratioElectric, this.metrics.shareElectric].includes(chartConfig.metric))
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

    if (chartConfig.view != this.views.lineChart && otherSeries.data.length > 0)
      result.series.push(otherSeries);

    return result;
  }
}

