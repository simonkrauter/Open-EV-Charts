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

  chartTypes:
  { "SalesAll": "sales-all"
  , "SalesElectric": "sales-electric"
  , "ModelsElectric": "models"
  },

  maxSeriesOptions:
  { "top5": 5
  , "top10": 10
  , "top15": 15
  , "top20": 20
  },

  getChartParams: function() {
    var result = [];

    // chart type
    var param = {};
    param.name = "chartType";
    param.options = {};
    param.unfoldKey = "all-charts";
    param.options[param.unfoldKey] = "All Charts";
    param.options[this.chartTypes.SalesAll] = "All Cars Sales";
    param.options[this.chartTypes.SalesElectric] = "Electric Cars Sales";
    param.options[this.chartTypes.ModelsElectric] = "Total Sales of Electric Models";
    param.unfoldOptions = Object.values(this.chartTypes);
    param.defaultOption = this.chartTypes.SalesElectric;
    param.alwaysAddToUrl = true;
    param.showInTitle = true;
    result.push(param);

    // country
    var param = {};
    param.name = "country";
    param.unfoldKey = "all-countries";
    param.unfoldOptions = [];
    param.options = {};
    param.options[param.unfoldKey] = "All Countries";
    param.options["combine-countries"] = "Combine Countries";
    for (let code in db.countries) {
      param.options[code] = db.countryNames[db.countries[code]];
      param.unfoldOptions.push(code);
    }
    param.defaultOption = "all-countries";
    param.showInTitle = true;
    result.push(param);

    // max series
    var param = {};
    param.name = "maxSeries";
    param.options = {};
    for (let key in this.maxSeriesOptions)
      param.options[key] = "Top " + this.maxSeriesOptions[key];
    param.defaultOption = "top10";
    result.push(param);

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
    let params = this.getChartParams();
    for (let i in params) {
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
    }
    return result;
  },

  unfoldChartConfig: function(chartConfig) {
    var result = [];
    result.push(chartConfig);
    let params = this.getChartParams();
    for (let i in params) {
      let param = params[i];
      if (param.unfoldKey && chartConfig[param.name] == param.unfoldKey) {
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
    let params = this.getChartParams();
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
    let countryId = db.countries[chartConfig.country];
    let maxSeries = this.maxSeriesOptions[chartConfig.maxSeries];
    var dsType = db.dsTypes.ElectricCarsByModel;
    if (chartConfig.chartType == this.chartTypes.SalesAll)
      dsType = db.dsTypes.AllCarsByBrand;
    var seriesRows = {};
    var result = {series: [], categories: [], sources: []};

    // Select datasets
    var categoriesInOrder = [];
    for (let i in db.datasets) {
      let dataset = db.datasets[i];
      if (countryId != null && dataset.country != countryId)
        continue;
      if (dataset.dsType != dsType)
        continue;

      var category;
      if (chartConfig.chartType == this.chartTypes.SalesAll || chartConfig.chartType == this.chartTypes.SalesElectric) {
        category = dataset.month;
        // let category = this.monthToQuarter(dataset.month);
        if (!categoriesInOrder.includes(category))
          categoriesInOrder.push(category);
      }

      for (var dataKey in dataset.data) {
        let dataKeyParts = dataKey.split("|", 2);
        let brand = dataKeyParts[0];
        let model = brand + " " + dataKeyParts[1];
        let value = dataset.data[dataKey];
        if (chartConfig.chartType == this.chartTypes.ModelsElectric) {
          category = model;
          if (!categoriesInOrder.includes(category))
            categoriesInOrder.push(category);
        }
        var seriesName = "";
        if (chartConfig.chartType == this.chartTypes.SalesAll || chartConfig.chartType == this.chartTypes.SalesElectric)
          seriesName = brand;
        if (!(seriesName in seriesRows))
          seriesRows[seriesName] = {};
        if (category in seriesRows[seriesName])
          seriesRows[seriesName][category] += value;
        else
          seriesRows[seriesName][category] = value;
      }
      if (!result.sources.includes(dataset.source))
        result.sources.push(dataset.source);
    }

    // Add categories to array in sorted order
    if (chartConfig.chartType == this.chartTypes.ModelsElectric) {
      categoriesInOrder.sort(function(a, b) {
        let totalSeries = seriesRows[""];
        return totalSeries[a] < totalSeries[b] ? 1 : totalSeries[a] > totalSeries[b] ? -1 : 0;
      });
    }
    for (let i in categoriesInOrder) {
      let category = categoriesInOrder[i];
      result.categories.push(category);
      if (chartConfig.chartType == this.chartTypes.ModelsElectric && result.categories.length == maxSeries)
        break;
    }

    // Create series (entries of 'data' must be in order of 'result.categories')
    var seriesByName = {};
    var seriesNamesInOrder = [];
    var seriesSortValues = {};
    for (let seriesName in seriesRows) {
      seriesNamesInOrder.push(seriesName);
      var newSeries =
      { name: seriesName
      , data: []
      }
      for (let i in result.categories) {
        let category = result.categories[i];
        let value = seriesRows[seriesName][category];
        if (typeof(value) == "undefined")
          value = null;
        newSeries.data.push(value);
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

    // Add series to array in sorted order
    seriesNamesInOrder.sort(function(a, b) {
      return seriesSortValues[a] < seriesSortValues[b] ? 1 : seriesSortValues[a] > seriesSortValues[b] ? -1 : 0;
    });
    for (let i in seriesNamesInOrder) {
      let seriesName = seriesNamesInOrder[i];
      result.series.push(seriesByName[seriesName]);
      if (result.series.length == maxSeries)
        break;
    }

    return result;
  }
}

