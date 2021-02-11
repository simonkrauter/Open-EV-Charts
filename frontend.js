"use strict";

const dynamicContent = document.createElement("DIV");
document.body.appendChild(dynamicContent);

window.onhashchange = function() {
  navigate();
}

window.onresize = function() {
  renderPage();
}

const homeLink = document.getElementById("homeLink");
homeLink.href = location.pathname + location.search;
homeLink.addEventListener("click", function(event) {
  // re-render page without page reload
  event.preventDefault();
  history.pushState(null, null, location.pathname + location.search);
  navigate();
});

var isSingleChart;
var chartSetConfig;
var chartConfigs;
var activeShowAllOptionsParamName;
var sortByName;

setGlobalChartOptions();
navigate();

function navigate(retainShowAllOptionsParamName) {
  if (typeof(retainShowAllOptionsParamName) == "undefined" || activeShowAllOptionsParamName != retainShowAllOptionsParamName)
    activeShowAllOptionsParamName = "";

  chartSetConfig = getChartConfigFromUrl();
  chartSetConfig = db.makeChartConfigValid(chartSetConfig);
  chartConfigs = db.unfoldChartConfig(chartSetConfig);
  isSingleChart = chartConfigs.length == 1;
  sortByName = false

  renderPage();
  logVisit();
}

function navigateToChartConfig(chartConfig, retainShowAllOptionsParamName) {
  const hash = "#" + db.encodeChartConfig(chartConfig);
  history.pushState(null, null, hash);
  navigate(retainShowAllOptionsParamName);
}

function logVisit() {
  if (location.hostname == "open-ev-charts.org") {
    let r = new XMLHttpRequest();
    r.open("GET", "https://nexunity.org/pageview-logger/open-ev-charts.org/?action=log&url=" + encodeURIComponent(location.href) + "&referrer=" + encodeURIComponent(document.referrer));
    r.send();
  }
}

function renderPage() {
  dynamicContent.innerHTML = "";

  renderFilters();

  // Prevent displaying of too many charts at one
  var maxVisibleCharts = 4;
  if (isWidthEnoughForFilterAsButtons())
    maxVisibleCharts = 6;

  for (const chartIndex in chartConfigs) {
    var chartDiv = renderChart(chartIndex);
    if (chartIndex >= maxVisibleCharts)
      chartDiv.style.display = "none";
  }

  if (chartConfigs.length > maxVisibleCharts)
    addShowAllChartsButton();
}

function getChartConfigFromUrl() {
  const hash = decodeURIComponent(location.hash.substr(1));
  return db.decodeChartConfigString(hash);
}

function renderFilters() {
  const div = document.createElement("DIV");
  dynamicContent.appendChild(div);
  div.classList.add("filters");

  const params = db.getChartParams(chartSetConfig);
  for (const i in params) {
    const param = params[i];
    if (!param.showAsFilter)
      continue;
    if (showFilterAsButtons(param))
      renderFilterAsButtons(div, param);
    else
      renderFilterAsDropDown(div, param);
  }
}

function showFilterAsButtons(param) {
  if (!["metric", "country"].includes(param.name))
    return false;

  // Drop down list can't handle multi-selection yet
  if (param.allowMultiSelection && chartSetConfig[param.name].includes(","))
    return true;

  if (!isWidthEnoughForFilterAsButtons())
    return false;

  return true;
}

function isWidthEnoughForFilterAsButtons() {
  return window.innerWidth >= 1150;
}

function renderFilterAsDropDown(parentDiv, param) {
  const selectedKey = chartSetConfig[param.name];
  var select = addSelectElement(parentDiv);
  select.addEventListener("change", function(event) {
    chartSetConfig[param.name] = event.target.value;
    navigateToChartConfig(chartSetConfig);
  });
  for (const optionKey in param.options) {
    var option = document.createElement("OPTION");
    option.value = optionKey;
    option.text = param.options[optionKey];
    option.selected = optionKey == selectedKey;
    select.appendChild(option);
  }
}

function renderFilterAsButtons(parentDiv, param) {
  const selectedKeys = chartSetConfig[param.name].split(",");
  const div = document.createElement("DIV");
  parentDiv.appendChild(div);

  // Test, if "Show more" button is needed
  var extendedOptionStartIndex = -1;
  var optionIndex = 0;
  if (param.maxOptionsToShowAsButton > 0 && activeShowAllOptionsParamName != param.name) {
    for (const optionKey in param.options) {
      if (optionIndex >= param.maxOptionsToShowAsButton - 1) {
        extendedOptionStartIndex = optionIndex;
        break;
      }
      optionIndex++;
    }
  }

  // Hide more options when extended options are active
  if (extendedOptionStartIndex != -1) {
    optionIndex = 0;
    var decCount = 0;
    for (const optionKey in param.options) {
      if (optionIndex >= extendedOptionStartIndex && selectedKeys.includes(optionKey))
        decCount++;
      optionIndex++;
    }
    extendedOptionStartIndex = extendedOptionStartIndex - decCount;
  }

  // Add regular option button
  optionIndex = 0;
  for (const optionKey in param.options) {
    var newChartConfig = db.cloneObject(chartSetConfig);
    newChartConfig[param.name] = optionKey;
    db.applyNewDefaultOptions(newChartConfig, chartSetConfig);

    var button = document.createElement("A");
    div.appendChild(button);
    button.href = "#" + db.encodeChartConfig(newChartConfig);
    button.classList.add("button");
    if (selectedKeys.includes(optionKey))
      button.classList.add("active");
    else if (extendedOptionStartIndex != -1 && optionIndex >= extendedOptionStartIndex)
      button.classList.add("extendedOption");
    optionIndex++;
    button.appendChild(document.createTextNode(param.options[optionKey]));
    const isMultiSelectOption = !param.noMultiSelectOptions || !param.noMultiSelectOptions.includes(optionKey);
    const isOptionAdditive = param.additiveOptions && param.additiveOptions.includes(optionKey);
    if (param.allowMultiSelection && isMultiSelectOption && !isOptionAdditive)
      button.title = "CTRL click for multi-selection";
    button.addEventListener("click", function(event) {
      event.preventDefault();
      var newChartConfig = db.cloneObject(chartSetConfig);
      if (param.allowMultiSelection && (event.ctrlKey || isOptionAdditive)) {
        var values = newChartConfig[param.name].split(",");
        var index = values.indexOf(optionKey);
        if (index !== -1)
          values.splice(index, 1);
        else
          values.push(optionKey);
        var newValues = [];
        for (const i in values) {
          if (!param.noMultiSelectOptions || !param.noMultiSelectOptions.includes(values[i]))
            newValues.push(values[i]);
        }
        newChartConfig[param.name] = newValues.join(",");
      } else if (param.allowMultiSelection) {
        var oldValues = newChartConfig[param.name].split(",");
        var newValues = [];
        for (const i in param.additiveOptions) {
          if (oldValues.includes(param.additiveOptions[i]))
            newValues.push(param.additiveOptions[i]);
        }
        if (param.defaultOption != optionKey || param.alwaysAddToUrl)
          newValues.push(optionKey);
        newChartConfig[param.name] = newValues.join(",");
      } else
        newChartConfig[param.name] = optionKey;

      db.applyNewDefaultOptions(newChartConfig, chartSetConfig);
      chartSetConfig = newChartConfig;
      navigateToChartConfig(chartSetConfig, param.name);
    });
  }

  // Add "Show more" button
  if (extendedOptionStartIndex != -1) {
    var button = document.createElement("A");
    button.href = "#";
    div.appendChild(button);
    button.addEventListener("click", function(event) {
      event.preventDefault();
      div.classList.add("showAllOptions");
      activeShowAllOptionsParamName = param.name;
    });
    button.classList.add("button");
    button.classList.add("showMore");
    button.appendChild(document.createTextNode(param.moreButtonText));
    button.title = "Show more options";
  }
}

function addSelectElement(parent, defaultOptionText) {
  var selectWrapper = document.createElement("DIV");
  parent.appendChild(selectWrapper);
  selectWrapper.classList.add("selectWrapper");
  var select = document.createElement("SELECT");
  selectWrapper.appendChild(select);
  return select;
}

function renderChart(chartIndex) {
  var chartConfig = chartConfigs[chartIndex];
  const params = db.getChartParams(chartConfig);
  if (!isSingleChart)
    chartConfig.view = params.view.defaultOption;

  const chartData = db.queryChartData(chartConfig, sortByName);

  const chartDiv = document.createElement("DIV");
  dynamicContent.appendChild(chartDiv);
  chartDiv.dataChartIndex = chartIndex;
  chartDiv.classList.add("chartTile");
  if (isSingleChart)
    chartDiv.classList.add("single");

  renderChartTitle(chartDiv, chartConfig);

  if (isSingleChart)
    renderChartTabButtons(chartDiv);

  if (chartData.series.length == 0) {
    const div = document.createElement("DIV");
    chartDiv.appendChild(div);
    div.appendChild(document.createTextNode("No data available"));
    div.classList.add("noData");
  } else {
    if ([db.views.barChart, db.views.lineChart].includes(chartConfig.view)) {
      renderChartView(chartConfig, chartData, chartDiv, false);
      if (isSingleChart)
        addPngExportButton(chartDiv);
    } else if (chartConfig.view == db.views.table)
      renderTable(chartConfig, chartDiv, chartData);
    else if (chartConfig.view == db.views.sources)
      renderSources(chartDiv, chartData);
  }

  return chartDiv;
}

function renderChartTitle(chartDiv, chartConfig) {
  var titleElem;
  if (isSingleChart)
    titleElem = document.createElement("DIV");
  else {
    titleElem = document.createElement("A");
    titleElem.href = "#" + db.encodeChartConfig(chartConfig);
    titleElem.title = "Show only this chart (bigger)";
  }
  chartDiv.appendChild(titleElem);
  titleElem.classList.add("chartTitle");
  titleElem.appendChild(document.createTextNode(db.getChartTitle(chartConfig)));

  if (!isSingleChart) {
    var removeButton = createRemoveButton();
    chartDiv.appendChild(removeButton);
    removeButton.addEventListener("click", chartRemoveClick);
  }
}

function renderChartTabButtons(chartDiv) {
  const tabButtonsDiv = document.createElement("DIV");
  chartDiv.appendChild(tabButtonsDiv);
  tabButtonsDiv.classList.add("tabButtons");
  const params = db.getChartParams(chartSetConfig);
  const viewOptions = params.view.options;
  for (const i in viewOptions)
    renderChartTabButton(tabButtonsDiv, i, viewOptions[i]);
}

function renderChartTabButton(tabButtonsDiv, key, title) {
  var button;
  if (chartSetConfig.view == key)
    button = document.createElement("DIV");
  else
    button = document.createElement("A");
  tabButtonsDiv.appendChild(button);
  var chartConfigChanged = db.cloneObject(chartSetConfig);
  chartConfigChanged.view = key;
  button.href = "#" + db.encodeChartConfig(chartConfigChanged);
  button.addEventListener("click", function(event) {
    event.preventDefault();
    chartSetConfig.view = key;
    navigateToChartConfig(chartSetConfig);
  });
  button.appendChild(document.createTextNode(title));
}

function chartRemoveClick(event) {
  event.preventDefault();

  const params = db.getChartParams();
  var currentParam;
  for (const i in params) {
    const param = params[i];
    if (param.unfoldKey && chartSetConfig[param.name] == param.unfoldKey) {
      currentParam = param;
      break;
    }
  }
  if (currentParam == null) {
    for (const i in params) {
      const param = params[i];
      if (param.allowMultiSelection && chartSetConfig[param.name].includes(",")) {
        currentParam = param;
        break;
      }
    }
  }
  if (currentParam == null) // should never happen
    return;

  const chartDiv = event.target.parentNode;
  const chartConfig = chartConfigs[chartDiv.dataChartIndex];
  const valueToRemove = chartConfig[currentParam.name];

  var newValues = [];
  for (const i in chartConfigs) {
    const chartConfig = chartConfigs[i];
    const value = chartConfig[currentParam.name];
    if (value != valueToRemove && !newValues.includes(value))
      newValues.push(value);
  }

  chartSetConfig[currentParam.name] = newValues.join(",");
  navigateToChartConfig(chartSetConfig);
}

function addShowAllChartsButton() {
  const div = document.createElement("DIV");
  dynamicContent.appendChild(div);
  var button = createButton();
  div.appendChild(button);
  button.appendChild(document.createTextNode("Show All Charts"));
  button.addEventListener("click", showAllChartsButtonClick);
}

function showAllChartsButtonClick(event) {
  event.preventDefault();
  const nodes = event.target.parentNode.parentNode.childNodes;
  for (const i in nodes) {
    if (nodes[i].style)
      nodes[i].style.display = "";
  }
  event.target.style.display = "none";
}

function createButton() {
  // Creates an A element which can be used as a button
  var button = document.createElement("A");
  button.classList.add("button");
  button.href = "#";
  button.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      // Trigger the "click" event for the deepest child element
      event.preventDefault();
      var node = event.target;
      while (node.childNodes.length > 0 && node.childNodes[0].nodeType == Node.ELEMENT_NODE)
        node = node.childNodes[0];
      node.click();
    }
  });
  return button;
}

function createRemoveButton() {
  var removeButton = createButton();
  removeButton.classList.add("removeButton");
  removeButton.title = "Remove";
  return removeButton;
}

function formatValue(chartConfig, value) {
  if ([db.metrics.ratioElectric, db.metrics.ratioElectricWithinBrand, db.metrics.shareElectric, db.metrics.shareAll].includes(chartConfig.metric)) {
    if (chartConfig.view == db.views.table)
      return value.toFixed(1).toLocaleString() + " %";
    else
      return (Math.round(value * 10) / 10).toLocaleString() + " %";
  } else {
    if (value != null)
      return value.toLocaleString();
    else
      return value;
  }
}

function setGlobalChartOptions() {
  const bodyStyle = window.getComputedStyle(document.body);
  Chart.defaults.global.defaultFontColor = bodyStyle["color"];
  Chart.defaults.global.defaultFontFamily = bodyStyle["font-family"];
  Chart.defaults.global.animation.duration = 0;
  Chart.defaults.global.title.fontSize = 20;
  Chart.defaults.global.legend.position = "bottom";
  Chart.defaults.global.legend.labels.boxWidth = 12;
  Chart.defaults.global.plugins.datalabels.color = "white";
  Chart.defaults.global.elements.line.fill = false;
  Chart.defaults.global.elements.line.borderWidth = 3.5;
  Chart.defaults.global.elements.line.tension = 0.2;
}

function renderChartView(chartConfig, chartData, chartDiv, isExport) {
  var chartOptions = {
    data: {
      datasets: []
    },
    options: {
      title: {
        display: isExport,
        text: db.getChartTitle(chartConfig)
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            precision: 0,
            padding: 8,
            callback: function(value, index, values) {
              return formatValue(chartConfig, value);
            }
          },
          gridLines: {
            drawBorder: false,
            color: "rgba(0, 0, 0, 0.15)"
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';
            if (label)
              label += ': ';
            label += formatValue(chartConfig, tooltipItem.yLabel);
            return label;
          }
        }
      },
      legend: {
        display: chartData.series.length > 1 || chartData.series[0].name != "Value"
      },
      plugins: {
        datalabels: {
          display: false,
          formatter: function(value, context) {
            return formatValue(chartConfig, value);
          }
        }
      }
    }
  }

  if (chartConfig.view == db.views.lineChart) {
    chartOptions.type = "line";
  } else {
    chartOptions.type = "bar";
    if (chartConfig.brand == db.brandOptions.all || chartConfig.metric != db.metrics.ratioElectric) {
      chartOptions.options.scales.xAxes[0].stacked = true;
      chartOptions.options.scales.yAxes[0].stacked = true;
    }
    if ([db.metrics.shareElectric, db.metrics.shareAll].includes(chartConfig.metric) && !db.isSumPerSeries(chartConfig)) {
      chartOptions.options.scales.yAxes[0].ticks.max = 100;
    }
    if (isSingleChart && window.innerWidth >= 1000) {
      chartOptions.options.plugins.datalabels.display = "auto";
    }
  }

  // Convert chartData
  const colors = getChartSeriesColors(chartConfig, chartData);
  for (const i in chartData.series) {
    const series = chartData.series[i];
    var dataset = {};
    dataset.label = series.name;
    dataset.data = series.data;
    if (chartConfig.view == db.views.lineChart) {
      dataset.borderColor = colors[i];
      dataset.pointBackgroundColor = colors[i];
      if (series.name == db.totalSeriesName) {
        dataset.hidden = true;
      }
    } else {
      dataset.backgroundColor = colors[i];
    }
    chartOptions.data.datasets.push(dataset);
  }
  chartOptions.data.labels = chartData.categories;

  const canvas = document.createElement("CANVAS");
  setChartSize(canvas);
  chartDiv.appendChild(canvas);

  return new Chart(canvas.getContext('2d'), chartOptions);
}

function setChartSize(element) {
  const heightRatio = 0.6;
  var heightOffset = 290;
  if (isWidthEnoughForFilterAsButtons())
    heightOffset = 300;
  const minWidth = 380;
  const minHeight = 280;
  const maxWidthMultiChart = 550;
  var wantedWith = Math.min(window.innerWidth - 2, (window.innerHeight - heightOffset) / heightRatio);
  if (!isSingleChart) {
    wantedWith = wantedWith / 2.33;
    wantedWith = Math.min(wantedWith, maxWidthMultiChart);
  }
  const width = Math.max(wantedWith, minWidth);
  const height = Math.max(width * heightRatio, minHeight);
  element.style.width = width + "px";
  element.style.height = height + "px";
}

function addPngExportButton(parent) {
  const exportButton = document.createElement("A");
  exportButton.appendChild(document.createTextNode("PNG"));
  exportButton.classList.add("export");
  exportButton.title = "Export chart";
  exportButton.addEventListener("click", function(event) {
    event.preventDefault();
    const chartData = db.queryChartData(chartConfigs[0], sortByName);
    const chartDiv = document.createElement("DIV");
    parent.appendChild(chartDiv);

    const chart = renderChartView(chartConfigs[0], chartData, chartDiv, true);
    var url = chart.toBase64Image();
    var win = window.open("about:blank");
    win.document.write("<img src=\"" + url + "\" />");

    parent.removeChild(chartDiv);
  });
  parent.appendChild(exportButton);
}

function getChartSeriesColors(chartConfig, chartData) {
  var colorSet = [
    "#E83835",
    "#1469AA",
    "#43A047",
    "#F78300",
    "#31CEE0",
    "#FFCC00",
    "#8025A8",
    "#8C8C8C",
    "#16545B",
    "#795548",
    "#A00000",
    "#000E8E",
    "#024C00",
    "#8C4D00",
    "#87711C",
    "#93F296",
    "#8B66DD",
    "#C0CA33",
    "#E52984",
    "#FFBB68"
  ];
  var colorIndexByBrand = {
    "Tesla": 0,
    "Nissan": 7,
    "Chevrolet": 5,
    "Renault": 3,
    "Volkswagen": 1,
    "Smart": 2,
    "BMW": 4,
    "Kia": 10,
    "Hyundai": 11,
    "Fiat": 18,
    "Jaguar": 8,
    "Audi": 6,
    "Peugeot": 9
  };

  var colors = [];
  var usedIndexes = [];
  if ((![db.xProperties.brand, db.xProperties.model].includes(chartConfig.xProperty) && chartConfig.brand == db.brandOptions.all && (chartConfig.model == db.modelOptions.combine)) || (chartConfig.metric == db.metrics.salesAll && chartConfig.xProperty == db.xProperties.brand)) {
    for (const i in colorIndexByBrand)
      usedIndexes.push(colorIndexByBrand[i]);
  }
  var unusedColors = [];
  for (var i in colorSet) {
    i = parseInt(i);
    if (!usedIndexes.includes(i))
      unusedColors.push(colorSet[i]);
  }
  var nextUnusedIndex = 0;
  for (const i in chartData.series) {
    const seriesName = chartData.series[i].name;
    if (seriesName == db.totalSeriesName || seriesName == "Other")
      colors.push("#000000");
    else {
      var index = colorIndexByBrand[seriesName];
      if (index != null)
        colors.push(colorSet[index % colorSet.length]);
      else {
        colors.push(unusedColors[nextUnusedIndex % unusedColors.length]);
        nextUnusedIndex++;
      }
    }
  }
  return colors;
}

function renderTable(chartConfig, chartDiv, chartData) {
  var showHorizontalBars = chartData.series.length == 1 && chartData.categories.length > 1;
  var maxValue = 0;
  if (showHorizontalBars) {
    for (const i in chartData.categories) {
      maxValue = Math.max(maxValue, chartData.series[0].data[i]);
    }
    if (maxValue == 0) {
      showHorizontalBars = false;
    }
  }
  const showRankColumn = [db.xProperties.country, db.xProperties.brand, db.xProperties.model].includes(chartConfig.xProperty);

  if (!showRankColumn && !showHorizontalBars && Object.keys(chartData.series).length >= 10 && Object.keys(chartData.categories).length < 10) {
    renderTableTransposed(chartConfig, chartDiv, chartData);
    return;
  }

  const table = document.createElement("TABLE");
  chartDiv.appendChild(table);

  // Table head
  const row = document.createElement("TR");
  table.appendChild(row);
  if (showRankColumn) {
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode("#"));
    row.appendChild(cell);
  }
  {
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode(chartData.categoryTitle));
    addThSortClickEvent(chartConfig, cell, 0);
    row.appendChild(cell);
  }
  for (const i in chartData.series) {
    const series = chartData.series[i];
    const cell = document.createElement("TH");
    var text = series.name;
    if (text == "Value") {
      const params = db.getChartParams(chartConfig);
      text = params.metric.options[chartConfig.metric];
    }
    cell.appendChild(document.createTextNode(text));
    if (showHorizontalBars) {
      cell.colSpan = 2;
    }
    addThSortClickEvent(chartConfig, cell, i + 1);
    row.appendChild(cell);
  }

  // Table body
  for (const i in chartData.categories) {
    const category = chartData.categories[i];
    const row = document.createElement("TR");
    table.appendChild(row);
    if (showRankColumn) {
      const cell = document.createElement("TD");
      cell.appendChild(document.createTextNode(parseInt(i) + 1));
      cell.style.textAlign = "right";
      row.appendChild(cell);
    }
    const cell = document.createElement("TD");
    cell.appendChild(document.createTextNode(category));
    row.appendChild(cell);
    for (const j in chartData.series) {
      renderTableValueCell(chartConfig, row, chartData.series[j].data[i]);
    }
    // add horizontal bar
    if (showHorizontalBars) {
      const cell = document.createElement("TD");
      const barDiv = document.createElement("DIV");
      cell.appendChild(barDiv);
      barDiv.classList.add("horizontalBar");
      const width = chartData.series[0].data[i] / maxValue * 300;
      barDiv.style.width = width + "px";
      row.appendChild(cell);
    }
  }
}

function renderTableTransposed(chartConfig, chartDiv, chartData) {
  const table = document.createElement("TABLE");
  chartDiv.appendChild(table);

  // Table head
  const row = document.createElement("TR");
  table.appendChild(row);
  {
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode("#"));
    row.appendChild(cell);
  }
  {
    const cell = document.createElement("TH");
    if (chartConfig.model == db.modelOptions.all)
      cell.appendChild(document.createTextNode("Model"));
    else
      cell.appendChild(document.createTextNode("Brand"));
    addThSortClickEvent(chartConfig, cell, 0);
    row.appendChild(cell);
  }
  for (const i in chartData.categories) {
    const category = chartData.categories[i];
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode(category));
    addThSortClickEvent(chartConfig, cell, i + 1);
    row.appendChild(cell);
  }

  // Table body
  var index = 1;
  for (const i in chartData.series) {
    const series = chartData.series[i];
    if (series.name == db.totalSeriesName)
      continue;
    const row = document.createElement("TR");
    table.appendChild(row);
    {
      const cell = document.createElement("TD");
      cell.appendChild(document.createTextNode(index));
      cell.style.textAlign = "right";
      row.appendChild(cell);
    }
    {
      const cell = document.createElement("TD");
      cell.appendChild(document.createTextNode(series.name));
      row.appendChild(cell);
    }
    for (const j in chartData.categories) {
      renderTableValueCell(chartConfig, row, series.data[j]);
    }
    index++;
  }
}

function renderTableValueCell(chartConfig, row, val) {
  const cell = document.createElement("TD");
  if (val == null && val !== 0) {
    cell.appendChild(document.createTextNode("NA"));
    cell.classList.add("NA");
  } else {
    cell.appendChild(document.createTextNode(formatValue(chartConfig, val)));
    cell.style.textAlign = "right";
  }
  row.appendChild(cell);
}

function addThSortClickEvent(chartConfig, cell, columnIndex) {
  if (columnIndex < 2 && [db.xProperties.country, db.xProperties.brand, db.xProperties.model].includes(chartConfig.xProperty)) {
    cell.addEventListener("click", function(event) {
      event.preventDefault();
      sortByName = columnIndex == 0;
      renderPage();
    });
    cell.style.cursor = "pointer";
  }
}

function renderSources(chartDiv, chartData) {
  const sourcesDiv = document.createElement("DIV");
  chartDiv.appendChild(sourcesDiv);
  sourcesDiv.classList.add("sources");

  const ol = document.createElement("OL");
  sourcesDiv.appendChild(ol);
  const reversed = chartData.sources.reverse();
  for (const i in reversed) {
    const li = document.createElement("LI");
    ol.appendChild(li);
    const parts = reversed[i].split(" ");
    for (const j in parts) {
      var part = parts[j];
      if (j > 0) {
        li.appendChild(document.createTextNode(" "));
      }
      if (part.includes("://")) {
        const link = document.createElement("A");
        li.appendChild(link);
        if (part.endsWith(",")) {
          part = part.substr(0, part.length - 1);
          li.appendChild(document.createTextNode(","));
        }
        link.href = part;
        link.target = "_blank";
        link.appendChild(document.createTextNode(part));
      } else {
        li.appendChild(document.createTextNode(part));
      }
    }

  }
}

function startRandomTesting() {
  var button = document.createElement("A");
  button.href = "#";
  button.innerHTML = "Randomize";
  button.classList.add("button");
  button.classList.add("active");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    randomizeChartConfig();
  });
  homeLink.parentNode.appendChild(button);
  randomizeChartConfig();
}

function randomizeChartConfig() {
  var chartConfig = db.decodeChartConfigString("");
  const params = db.getChartParams();
  for (const i in params) {
    const param = params[i];
    // if (param.name == "view")
      // continue;
    var optionKeys = [];
    if (param.name == "metric") {
      for (const j in param.options) {
        if (j == db.metrics.all)
          continue;
        optionKeys.push(j);
      }
    } else if (param.name == "country") {
      if (Math.random() < 0.2) {
        optionKeys.push(db.countryOptions.all);
      } else if (Math.random() < 0.2) {
        optionKeys.push("DE,FR");
        optionKeys.push("DE,FR,IT");
        optionKeys.push("DE,FR,IT,UK");
        optionKeys.push("US,CN");
      } else {
        for (const j in param.options) {
          if ([db.countryOptions.all, db.countryOptions.combine].includes(j))
            continue;
          optionKeys.push(j);
        }
      }
      if (Math.random() < 0.3) {
        optionKeys.push(db.countryOptions.combine);
      }
    } else if (param.name == "xProperty") {
      optionKeys = Object.keys(param.options);
    } else if (param.name == "brand") {
      if (Math.random() < 0.4)
        optionKeys.push(db.brandOptions.all);
      else if (Math.random() < 0.8)
        optionKeys.push(db.brandOptions.combine);
      else
        optionKeys = Object.keys(param.options);
    } else if (param.name == "model") {
      if (Math.random() < 0.4)
        optionKeys.push(db.modelOptions.all);
      else if (Math.random() < 0.8)
        optionKeys.push(db.modelOptions.combine);
      else
        optionKeys = Object.keys(param.options);
    } else if (param.name == "view") {
      for (const j in param.options) {
        if (j == db.views.sources)
          continue;
        optionKeys.push(j);
      }
    } else if (param.name == "maxSeries") {
      optionKeys = Object.keys(param.options);
    }
    if (optionKeys.length > 0) {
      chartConfig[param.name] = optionKeys[Math.floor(Math.random() * optionKeys.length)];
    }
  }
  navigateToChartConfig(chartConfig);
}
