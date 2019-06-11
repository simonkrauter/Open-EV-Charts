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
    var param = {};
    param.name = "country";
    param.options = {};
    param.options[this.countryOptions.all] = "All Countries";
    param.options[this.countryOptions.combine] = "Combine Countries";
    for (let code in db.countries)
      param.options[code] = db.countryNames[db.countries[code]];
    param.unfoldKey = this.countryOptions.all;
    param.excludeOnUnfoldAndTitle = [this.countryOptions.all, this.countryOptions.combine];
    param.defaultOption = this.countryOptions.all;
    param.showInTitle = true;
    param.showAsFilter = chartConfig == null || chartConfig.xProperty != this.xProperties.country;
    result[param.name] = param;

    // brand
    var param = {};
    param.name = "brand";
    param.options = {};
    if (chartConfig == null || chartConfig.xProperty != this.xProperties.model)
      param.options[this.brandOptions.all] = "All Brands";
    param.options[this.brandOptions.combine] = "Combine Brands";
    for (let i in this.brands) {
      let brand = this.brands[i];
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
    for (let i in this.models) {
      let parts = this.models[i].split("|", 2);
      let brand = parts[0];
      let model = parts[1];
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
      if (chartConfig[param.name] != param.defaultOption || param.alwaysAddToUrl && chartConfig[param.name])
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
    if ([this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty) && chartConfig.brand == this.brandOptions.all)
      yProperty = "brand";
    else if (chartConfig.model != this.modelOptions.all)
      yProperty = "country";
    var result = [];
    result.push(chartConfig);
    let params = this.getChartParams();
    for (let i in params) {
      let param = params[i];
      if (param.unfoldKey && chartConfig[param.name] == param.unfoldKey && yProperty != param.name) {
        var newResult = [];
        for (let j in result) {
          for (let k in param.options) {
            if (k != param.unfoldKey && (!param.excludeOnUnfoldAndTitle || !param.excludeOnUnfoldAndTitle.includes(k))) {
              var newConfig = JSON.parse(JSON.stringify(result[j]));
              newConfig[param.name] = k;
              newResult.push(newConfig);
            }
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
      let value = chartConfig[param.name];
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
    if (![this.modelOptions.combine, this.modelOptions.all].includes(chartConfig.model) && chartConfig.xProperty != this.xProperties.model)
      filterModel = chartConfig.model;

    var seriesRows = {};
    var sources = [];
    var categories = [];

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

        let value = dataset.data[dataKey];

        if (chartConfig.xProperty == this.xProperties.brand)
          category = brand;
        else if (chartConfig.xProperty == this.xProperties.model)
          category = brandAndModel;

        var seriesName = "";
        if (filterCountryId == null && chartConfig.country != this.countryOptions.combine && chartConfig.xProperty != this.xProperties.country)
          seriesName = countryName;
        if (filterBrand == null && chartConfig.brand != this.brandOptions.combine && chartConfig.xProperty != this.xProperties.model && chartConfig.xProperty != this.xProperties.brand) {
          if (chartConfig.brand != this.brandOptions.all)
            seriesName = brandAndModel;
          else
            seriesName = brand;
        }
        if (filterModel == null && chartConfig.model != this.modelOptions.combine && chartConfig.xProperty != this.xProperties.model && chartConfig.brand != this.brandOptions.combine) {
          if (chartConfig.brand == this.brandOptions.all)
            seriesName = brandAndModel;
          else
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
      if (!sources.includes(dataset.source))
        sources.push(dataset.source);
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
    let maxSeries = this.maxSeriesOptions[chartConfig.maxSeries];
    if (![this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty)) {
      categories.sort(function(a, b) {
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
    for (let i in categories) {
      let category = categories[i];
      result.push(category);
      count++;
      if (count == maxSeries && ![this.xProperties.month, this.xProperties.quarter, this.xProperties.year].includes(chartConfig.xProperty) && chartConfig.view != this.views.table)
        break;
    }
    return result
  },

  getValue: function(value, defaultValue) {
    if (typeof(value) == "undefined")
      return defaultValue;
    return value;
  },

  queryChartData: function(chartConfig) {
    // Returns the data for a spedific view
    var result = {};
    result.series = [];

    var seriesRows;
    var valuesForRatio = {};
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
      for (let i in datasets.categories) {
        let category = datasets.categories[i];
        var value = 0;
        for (let seriesName in datasetsForRatio.seriesRows) {
          value = value + this.getValue(datasetsForRatio.seriesRows[seriesName][category], 0);
        }
        valuesForRatio[category] = value;
      }
      for (let seriesName in seriesRows) {
        for (let i in datasets.categories) {
          let category = datasets.categories[i];
          var value = this.getValue(seriesRows[seriesName][category], null);
          if (valuesForRatio[category] == 0)
            seriesRows[seriesName][category] = 0;
          else
            seriesRows[seriesName][category] = value / valuesForRatio[category] * 100;
        }
      }
      result.categories = this.getCategoriesFromDataSets(chartConfig, datasets);
    } else if (chartConfig.metric == this.metrics.shareElectric) {
      var datasets = this.queryDataSets(chartConfig, db.dsTypes.ElectricCarsByModel);
      seriesRows = datasets.seriesRows;
      result.categories = this.getCategoriesFromDataSets(chartConfig, datasets);
      result.sources = datasets.sources;
      var sums = {};
      for (let i in datasets.categories) {
        let category = datasets.categories[i];
        var sum = 0;
        for (let seriesName in datasets.seriesRows) {
          sum = sum + this.getValue(datasets.seriesRows[seriesName][category], 0);
        }
        sums[category] = sum;
      }
      for (let seriesName in seriesRows) {
        for (let i in datasets.categories) {
          let category = datasets.categories[i];
          var value = this.getValue(seriesRows[seriesName][category], null);
          if (valuesForRatio[category] == 0)
            seriesRows[seriesName][category] = 0;
          else
            seriesRows[seriesName][category] = value / sums[category] * 100;
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
    for (let seriesName in seriesRows) {
      seriesNamesInOrder.push(seriesName);
      var newSeries = {};
      newSeries.name = seriesName;
      newSeries.data = [];

      for (let i in result.categories) {
        let category = result.categories[i];
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
    let maxSeries = this.maxSeriesOptions[chartConfig.maxSeries];
    seriesNamesInOrder.sort(function(a, b) {
      return seriesSortValues[a] < seriesSortValues[b] ? 1 : seriesSortValues[a] > seriesSortValues[b] ? -1 : 0;
    });
    var count = 0;
    var otherSeries = {name: "Other", data: []};
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

