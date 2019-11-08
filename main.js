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

setGlobalChartOptions();
navigate();

function navigate() {
  chartSetConfig = getChartConfigFromUrl();
  chartSetConfig = db.makeChartConfigValid(chartSetConfig);
  chartConfigs = db.unfoldChartConfig(chartSetConfig);
  isSingleChart = chartConfigs.length == 1;

  renderPage();
  logVisit();
}

function navigateToChartConfig(chartConfig) {
  const hash = "#" + db.encodeChartConfig(chartConfig);
  history.pushState(null, null, hash);
  navigate();
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
  var hash = decodeURIComponent(location.hash.substr(1));

  // backward compatibility to old format
  const sets = hash.split(",");
  hash = sets[0];

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
  return window.innerWidth >= 1300;
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
  for (const optionKey in param.options) {
    var chartConfig = db.cloneObject(chartSetConfig);
    chartConfig[param.name] = optionKey;

    var button = document.createElement("A");
    div.appendChild(button);
    button.href = "#" + db.encodeChartConfig(chartConfig);
    button.classList.add("button");
    if (selectedKeys.includes(optionKey))
      button.classList.add("active");
    button.appendChild(document.createTextNode(param.options[optionKey]));
    if (param.allowMultiSelection)
      button.title = "CTRL click for multi-selection";
    button.addEventListener("click", function(event) {
      event.preventDefault();
      if (param.allowMultiSelection && event.ctrlKey) {
        var values = chartSetConfig[param.name].split(",");
        var index = values.indexOf(optionKey);
        if (index !== -1)
          values.splice(index, 1);
        else
          values.push(optionKey);
        chartSetConfig[param.name] = values.join(",");
      } else
        chartSetConfig[param.name] = optionKey;
      navigateToChartConfig(chartSetConfig);
    });
  }
}

function addSelectElement(parent, defaultOptionText) {
  var selectWrapper = document.createElement("DIV");
  parent.appendChild(selectWrapper);
  selectWrapper.classList.add("select-wrapper");
  var select = document.createElement("SELECT");
  selectWrapper.appendChild(select);
  return select;
}

function renderChart(chartIndex) {
  var chartConfig = chartConfigs[chartIndex];
  if (!isSingleChart)
    chartConfig.view = db.views.barChart;

  const chartData = db.queryChartData(chartConfig);

  const chartDiv = document.createElement("DIV");
  dynamicContent.appendChild(chartDiv);
  chartDiv.dataChartIndex = chartIndex;
  chartDiv.classList.add("chart-tile");
  if (isSingleChart)
    chartDiv.classList.add("single");

  renderChartTitle(chartDiv, chartConfig);

  if (isSingleChart)
    renderChartTabButtons(chartDiv);

  if (chartData.series.length == 0) {
    const div = document.createElement("DIV");
    chartDiv.appendChild(div);
    div.appendChild(document.createTextNode("No data"));
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
  titleElem.classList.add("chart-title");
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
  tabButtonsDiv.classList.add("tab-buttons");
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
  removeButton.classList.add("remove-button");
  removeButton.title = "Remove";
  return removeButton;
}

function formatValue(chartConfig, value) {
  if ([db.metrics.ratioElectric, db.metrics.shareElectric].includes(chartConfig.metric)) {
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
            drawBorder: false
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
    if (chartConfig.brand == db.brandOptions.all || chartConfig.metric == db.metrics.shareElectric) {
      chartOptions.options.scales.xAxes[0].stacked = true;
      chartOptions.options.scales.yAxes[0].stacked = true;
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
    } else
      dataset.backgroundColor = colors[i];
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
  var wantedWith = Math.min(window.innerWidth - 2, (window.innerHeight - heightOffset) / heightRatio);
  if (!isSingleChart)
    wantedWith = wantedWith / 2.33;
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
    const chartData = db.queryChartData(chartConfigs[0]);
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
  if (![db.xProperties.brand, db.xProperties.model].includes(chartConfig.xProperty) && chartConfig.brand == db.brandOptions.all && chartConfig.model == db.modelOptions.combine) {
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
    if (seriesName == "Total" || seriesName == "Other")
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
  const table = document.createElement("TABLE");
  chartDiv.appendChild(table);
  // Table head
  const row = document.createElement("TR");
  table.appendChild(row);
  var cell = document.createElement("TH");
  cell.appendChild(document.createTextNode(chartData.categoryTitle));
  row.appendChild(cell);
  for (const i in chartData.series) {
    const series = chartData.series[i];
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode(series.name));
    row.appendChild(cell);
  }

  // Table body
  for (const i in chartData.categories) {
    const category = chartData.categories[i];
    const row = document.createElement("TR");
    table.appendChild(row);
    const cell = document.createElement("TD");
    cell.appendChild(document.createTextNode(category));
    row.appendChild(cell);
    for (const j in chartData.series) {
      const series = chartData.series[j];
      const cell = document.createElement("TD");
      cell.style.textAlign = "right";
      const val = series.data[i];
      if (val == null && val !== 0)
        cell.appendChild(document.createTextNode(""));
      else
        cell.appendChild(document.createTextNode(formatValue(chartConfig, val)));
      row.appendChild(cell);
    }
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
    const parts = reversed[i].split(" ");
    const url = parts.shift();
    const li = document.createElement("LI");
    ol.appendChild(li);
    const link = document.createElement("A");
    li.appendChild(link);
    link.href = url;
    link.target = "_blank";
    link.appendChild(document.createTextNode(url));
    if (parts.length > 0)
      li.appendChild(document.createTextNode(" " + parts.join(" ")));
  }
}
