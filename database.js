// This file defines the database object, which stores the data sets and allows to query them.

"use strict";

var db = {
  countries: {},
  // Code => ID

  countryNames: {},
  // ID => Name

  dsTypes:
  { "AllCarsTotal": 1
  , "AllCarsByBrand": 2
  , "ElectricCarsTotal": 3
  , "ElectricCarsByBrand": 4
  , "ElectricCarsByModel": 5
  },

  datasets: [],
  // All datasets of the database.
  // Format of entries:
  // - country: country enum value
  // - month:   month in the form "YYY-MM"
  // - dsType:  dataset dsType enum value
  // - source:  source URL
  // - data:    number of sales or
  //            object of brand -> number of sales or
  //            object of model -> number of sales

  brands: [],
  // All car brands used in the datasets.
  // Format: e.g. "Tesla"

  models: [],
  // All car models used in the datasets.
  // Format: e.g. "Tesla|Model 3"

  addCountry: function(code, name) {
    let id = Object.keys(this.countries).length + 1;
    this.countries[code] = id;
    this.countryNames[id] = name;
  },

  insert: function(country, month, dsType, source, data) {
    this.datasets.push(
    { country: country
    , month: month
    , dsType: dsType
    , source: source
    , data: data
    });
    if (dsType == db.dsTypes.AllCarsByBrand || dsType == db.dsTypes.ElectricCarsByBrand) {
      for (let brand in data) {
        if (!this.brands.includes(brand)) {
          this.brands.push(brand);
          this.brands.sort();
        }
      }
    }
    else if (dsType == db.dsTypes.ElectricCarsByModel) {
      for (let model in data) {
        if (!this.models.includes(model)) {
          this.models.push(model);
          this.models.sort();
        }
      }
    }
  },

  monthToQuarter: function(month) {
    let year = month.substr(0, 4);
    let monthNum = parseInt(month.substr(5, 2));
    return year + " Q" + Math.ceil(monthNum / 3);
  },

  metrics:
  { "all": "all-metrics"
  , "salesAll": "sales-all"
  , "salesElectric": "sales-electric"
  },

  xProperties:
  { "month": "month"
  , "quarter": "quarter"
  , "year": "year"
  , "country": "country"
  , "brand": "brand"
  , "model": "model"
  },

  countryOptions:
  { "allCountries": "all-countries"
  , "combineCountries": "combine-countries"
  },

  brandOptions:
  { "allBrands": "all-brands"
  , "allModels": "all-models"
  , "combineBrands": "combine-brands"
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

  getChartParams: function(chartConfig) {
    var result = {};

    // metric
    var param = {};
    param.name = "metric";
    param.options = {};
    param.unfoldKey = this.metrics.all;
    param.options[this.metrics.all] = "All Metrics";
    param.options[this.metrics.salesAll] = "All Cars Sales";
    param.options[this.metrics.salesElectric] = "Electric Cars Sales";
    param.unfoldOptions = [];
    param.unfoldOptions.push(this.metrics.salesAll);
    param.unfoldOptions.push(this.metrics.salesElectric);
    param.defaultOption = this.metrics.salesElectric;
    param.alwaysAddToUrl = true;
    param.showInTitle = true;
    param.showAsFilter = true;
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
    if (chartConfig == null || chartConfig.metric == this.metrics.salesElectric)
      param.options[this.xProperties.model] = "Per Model";
    param.defaultOption = this.xProperties.month;
    param.showAsFilter = true;
    result[param.name] = param;

    // country
    if (chartConfig == null || chartConfig.xProperty != this.xProperties.country) {
      var param = {};
      param.name = "country";
      param.unfoldKey = this.countryOptions.allCountries;
      param.unfoldOptions = [];
      param.options = {};
      param.options[this.countryOptions.allCountries] = "All Countries";
      param.options[this.countryOptions.combineCountries] = "Combine Countries";
      for (let code in db.countries) {
        param.options[code] = db.countryNames[db.countries[code]];
        param.unfoldOptions.push(code);
      }
      param.defaultOption = this.countryOptions.allCountries;
      param.showInTitle = true;
      param.showAsFilter = true;
      result[param.name] = param;
    }

    // brand
    if (chartConfig == null || chartConfig.xProperty != this.xProperties.brand) {
      var param = {};
      param.name = "brand";
      param.options = {};
      if (chartConfig == null || chartConfig.xProperty != this.xProperties.model) {
        param.options[this.brandOptions.allBrands] = "All Brands";
        if (chartConfig == null || chartConfig.metric != this.metrics.salesAll)
          param.options[this.brandOptions.allModels] = "All Models";
      }
      param.options["combine-brands"] = "Combine Brands";
      for (let i in this.brands)
        param.options[this.brands[i]] = this.brands[i];
      param.defaultOption = this.brandOptions.allBrands;
      param.showAsFilter = true;
      result[param.name] = param;
    }

    // max series
    var param = {};
    param.name = "maxSeries";
    param.options = {};
    for (let i in this.maxSeriesOptions)
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
    let params = this.getChartParams();
    for (let i in params) {
      let param = params[i];
      if (chartConfig[param.name] != param.defaultOption || param.alwaysAddToUrl)
        parts.push(chartConfig[param.name]);
    }
    return parts.join(":");
  },

  decodeChartConfigString: function(chartConfigString) {
    var parts = [];
    if (chartConfigString != "")
      parts = chartConfigString.split(":");
    var result = {};
    var params = this.getChartParams();
    for (let i in params) {
      if (!params[i])
        continue;
      let param = params[i];
      var selectedValue = param.defaultOption;
      for (let j in parts) {
        let part = parts[j];
        if (part in param.options) {
          selectedValue = part;
          break;
        }
      }
      result[param.name] = selectedValue;
      params = this.getChartParams(result);
    }
    return result;
  },

  unfoldChartConfig: function(chartConfig) {
    var yProperty;
    if ([this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty))
      yProperty = "brand";
    else
      yProperty = "country";
    var result = [];
    result.push(chartConfig);
    let params = this.getChartParams();
    for (let i in params) {
      let param = params[i];
      if (param.unfoldKey && chartConfig[param.name] == param.unfoldKey && yProperty != param.name) {
        var newResult = [];
        for (let j in result) {
          for (let k in param.unfoldOptions) {
            var newConfig = JSON.parse(JSON.stringify(result[j]));
            newConfig[param.name] = param.unfoldOptions[k];
            newResult.push(newConfig);
          }
        }
        result = newResult;
      }
    }
    return result;
  },

  getChartTitle: function(chartConfig) {
    var title = "";
    let params = this.getChartParams(chartConfig);
    for (let i in params) {
      let param = params[i];
      if (!param.showInTitle)
        continue;
      if (title != "")
        title = title + " - ";
      title = title + param.options[chartConfig[param.name]];
    }
    return title;
  },

  queryChartData: function(chartConfig) {
    var filterCountryId = null;
    if (chartConfig.country != this.countryOptions.combineCountries && chartConfig.country != this.countryOptions.allCountries)
      filterCountryId = db.countries[chartConfig.country];
    var filterBrand = null;
    if (![this.brandOptions.combineBrands, this.brandOptions.allBrands, this.brandOptions.allModels].includes(chartConfig.brand) && chartConfig.xProperty != this.xProperties.brand)
      filterBrand = chartConfig.brand;
    let maxSeries = this.maxSeriesOptions[chartConfig.maxSeries];
    var dsType = db.dsTypes.ElectricCarsByModel;
    if (chartConfig.metric == this.metrics.salesAll)
      dsType = db.dsTypes.AllCarsByBrand;
    var seriesRows = {};
    var result = {};
    result.series = [];
    result.categories = [];
    result.sources = [];
    if (chartConfig.xProperty == this.xProperties.country)
      result.categoryTitle = "Country";
    else if (chartConfig.xProperty == this.xProperties.model)
      result.categoryTitle = "Model";
    else if (chartConfig.xProperty == this.xProperties.brand)
      result.categoryTitle = "Brand";
    else
      result.categoryTitle = "Time Span";

    // Select datasets
    var categoriesInOrder = [];
    for (let i in db.datasets) {
      let dataset = db.datasets[i];
      if (filterCountryId != null && dataset.country != filterCountryId)
        continue;
      if (dataset.dsType != dsType)
        continue;
      let countryName = db.countryNames[dataset.country];

      var category = "";
      if (chartConfig.xProperty == this.xProperties.month)
        category = dataset.month;
      else if (chartConfig.xProperty == this.xProperties.quarter)
        category = this.monthToQuarter(dataset.month);
      else if (chartConfig.xProperty == this.xProperties.year)
        category = dataset.month.substr(0, 4);
      else if (chartConfig.xProperty == this.xProperties.country)
        category = countryName;

      for (var dataKey in dataset.data) {
        let dataKeyParts = dataKey.split("|", 2);
        let brand = dataKeyParts[0];
        let model = dataKeyParts[1];
        var brandAndModel = brand;
        if (filterBrand != null)
          brandAndModel = model;
        else if (model)
          brandAndModel = brandAndModel + " " + model;

        let value = dataset.data[dataKey];

        if (filterBrand != null && brand != filterBrand)
          continue;

        if (chartConfig.xProperty == this.xProperties.brand)
          category = brand;
        else if (chartConfig.xProperty == this.xProperties.model)
          category = brandAndModel;

        var seriesName = "";
        if (filterCountryId == null && chartConfig.country != this.countryOptions.combineCountries && chartConfig.xProperty != this.xProperties.country)
          seriesName = countryName;
        if (chartConfig.brand != this.brandOptions.combineBrands && chartConfig.xProperty != this.xProperties.model) {
          if (chartConfig.brand != this.brandOptions.allBrands)
            seriesName = brandAndModel;
          else if (chartConfig.xProperty != this.xProperties.brand)
            seriesName = brand;
        }

        if (seriesName == "")
          seriesName = "Value";

        if (!(seriesName in seriesRows))
          seriesRows[seriesName] = {};
        if (category in seriesRows[seriesName])
          seriesRows[seriesName][category] += value;
        else
          seriesRows[seriesName][category] = value;
        if (!categoriesInOrder.includes(category))
          categoriesInOrder.push(category);
      }
      if (!result.sources.includes(dataset.source))
        result.sources.push(dataset.source);
    }

    // Add categories to array in sorted order
    if (![this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty)) {
      categoriesInOrder.sort(function(a, b) {
        var valueA = 0;
        var valueB = 0;
        for (let seriesName in seriesRows) {
          let currSeries = seriesRows[seriesName];
          if (currSeries[a] != null)
            valueA += currSeries[a];
          if (currSeries[b] != null)
            valueB += currSeries[b];
        }
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      });
    }
    var count = 0;
    for (let i in categoriesInOrder) {
      let category = categoriesInOrder[i];
      result.categories.push(category);
      count++;
      if (count == maxSeries && ![this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty))
        break;
    }

    // Prepare special series
    var totalSeries = {name: "Total", data: []};
    var otherSeries = {name: "Other", data: []};

    // Create series (entries of 'data' must be in order of 'result.categories')
    var seriesByName = {};
    var seriesNamesInOrder = [];
    var seriesSortValues = {};
    for (let seriesName in seriesRows) {
      seriesNamesInOrder.push(seriesName);
      var newSeries = {};
      newSeries.name = seriesName;
      newSeries.data = [];

      for (let i in result.categories) {
        let category = result.categories[i];
        let value = seriesRows[seriesName][category];
        if (typeof(value) == "undefined")
          value = null;
        newSeries.data.push(value);
        // Add value to total series
        if (value != null) {
          if (i in totalSeries.data)
            totalSeries.data[i] += value;
          else
            totalSeries.data[i] = value;
        }
        // Add value to seriesSortValues
        if (value != null) {
          var factor = 1;
          if (i == result.categories.length - 1)
            factor = 5;
          if (seriesName in seriesSortValues)
            seriesSortValues[seriesName] += value * factor;
          else
            seriesSortValues[seriesName] = value * factor;
        }
      }
      seriesByName[seriesName] = newSeries;
    }

    if (Object.keys(seriesRows).length > 1 && chartConfig.view != this.views.barChart)
      result.series.push(totalSeries);

    // Add series to array in sorted order
    seriesNamesInOrder.sort(function(a, b) {
      return seriesSortValues[a] < seriesSortValues[b] ? 1 : seriesSortValues[a] > seriesSortValues[b] ? -1 : 0;
    });
    var count = 0;
    for (let i in seriesNamesInOrder) {
      let seriesName = seriesNamesInOrder[i];
      let currSeries = seriesByName[seriesName];
      if (seriesName != "other" && count < maxSeries) {
        result.series.push(currSeries);
        count++;
      } else {
        for (let j in currSeries.data) {
          let value = currSeries.data[j];
          if (value == null)
            continue;
          if (j in otherSeries.data)
            otherSeries.data[j] += value;
          else
            otherSeries.data[j] = value;
        }
      }
    }

    if (Object.keys(seriesRows).length > 1 && chartConfig.view != this.views.lineChart && otherSeries.data.length > 0)
      result.series.push(otherSeries);

    return result;
  }
}

