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

var topLevelChartConfigCount = 0;
var isSingleChart = false;

navigate();

function navigate() {
  renderPage();
  logVisit();
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

  const chartConfigStrings = getChartConfigStringsFromUrl();
  topLevelChartConfigCount = chartConfigStrings.length;
  for (const i in chartConfigStrings) {
    const chartConfigString = chartConfigStrings[i];
    const chartSetDiv = document.createElement("DIV");
    dynamicContent.appendChild(chartSetDiv);
    chartSetDiv.classList.add("chart-set");
    renderChartSet(chartSetDiv, db.decodeChartConfigString(chartConfigString));
  }
}

function getChartConfigStringsFromUrl() {
  return decodeURIComponent(location.hash.substr(1)).split(",");
}

function renderChartSet(chartSetDiv, chartConfig) {
  chartConfig = db.makeChartConfigValid(chartConfig);

  chartSetDiv.dataChartConfig = db.encodeChartConfig(chartConfig);
  chartSetDiv.innerHTML = "";

  renderFilters(chartSetDiv, chartConfig);

  const chartConfigList = db.unfoldChartConfig(chartConfig);
  isSingleChart = topLevelChartConfigCount == 1 && chartConfigList.length == 1;
  for (const i in chartConfigList)
    renderChartTile(chartSetDiv, chartConfigList[i]);
}

function replaceChartSet(chartSetDiv, chartConfig) {
  if (chartConfig == null)
    chartSetDiv.parentNode.removeChild(chartSetDiv);
  else
    chartSetDiv.dataChartConfig = db.encodeChartConfig(chartConfig);

  // Rebuild URL
  const oldCount = getChartConfigStringsFromUrl().length;
  var chartConfigStrings = [];
  for (var i = 0; i < dynamicContent.childNodes.length; i++)
    chartConfigStrings.push(dynamicContent.childNodes[i].dataChartConfig);
  const hash = "#" + chartConfigStrings.join(",");
  history.pushState(null, null, hash);

  // Render
  if (oldCount > 1 && chartConfigStrings.length == 1)
    renderPage(); // Get rid of remove button and to adjust chart size
  else if (chartConfig)
    renderChartSet(chartSetDiv, chartConfig);
  logVisit();
}

function renderFilters(chartSetDiv, chartConfig) {
  const div = document.createElement("DIV");
  chartSetDiv.appendChild(div);
  div.classList.add("filters");

  const params = db.getChartParams(chartConfig);
  for (const i in params) {
    const param = params[i];
    if (!param.showAsFilter)
      continue;
    if (showFilterAsButtons(param))
      renderFilterAsButtons(div, param, chartConfig[param.name]);
    else
      renderFilterAsDropDown(div, param, chartConfig[param.name]);
  }

  if (getChartConfigStringsFromUrl().length > 1) {
    var removeButton = createRemoveButton();
    div.appendChild(removeButton);
    removeButton.addEventListener("click", function(event) {
      event.preventDefault();
      const chartSetDiv = event.target.parentNode.parentNode;
      replaceChartSet(chartSetDiv, null);
    });
  }
}

function showFilterAsButtons(param) {
  if (!["metric", "country"].includes(param.name))
    return false;

  if (!isWidthEnoughForFilterAsButtons())
    return false;

  if (!getChartConfigStringsFromUrl().length == 1)
    return false;

  return true;
}

function isWidthEnoughForFilterAsButtons() {
  return window.innerWidth >= 1400;
}

function renderFilterAsDropDown(parentDiv, param, selectedKey) {
  var select = addSelectElement(parentDiv);
  select.addEventListener("change", function(event) {
    const chartSetDiv = event.target.parentNode.parentNode.parentNode;
    var chartConfig = db.decodeChartConfigString(chartSetDiv.dataChartConfig);
    chartConfig[param.name] = event.target.value;
    replaceChartSet(chartSetDiv, chartConfig);
  });
  for (const optionKey in param.options) {
    var option = document.createElement("OPTION");
    option.value = optionKey;
    option.text = param.options[optionKey];
    option.selected = optionKey == selectedKey;
    select.appendChild(option);
  }
}

function renderFilterAsButtons(parentDiv, param, selectedKey) {
  const div = document.createElement("DIV");
  div.classList.add("full-row");
  parentDiv.appendChild(div);
  for (const optionKey in param.options) {
    const chartSetDiv = parentDiv.parentNode;
    var chartConfig = db.decodeChartConfigString(chartSetDiv.dataChartConfig);
    chartConfig[param.name] = optionKey;

    var button = document.createElement("A");
    div.appendChild(button);
    button.href = "#" + db.encodeChartConfig(chartConfig);
    button.classList.add("button");
    if (optionKey == selectedKey)
      button.classList.add("active");
    button.appendChild(document.createTextNode(param.options[optionKey]));
    button.addEventListener("click", function(event) {
      var chartConfig = db.decodeChartConfigString(chartSetDiv.dataChartConfig);
      chartConfig[param.name] = optionKey;
      replaceChartSet(chartSetDiv, chartConfig);
      event.preventDefault();
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

function renderChartTile(chartSetDiv, chartConfig) {
  if (!isSingleChart)
    chartConfig.view = db.views.barChart;

  var chartData = db.queryChartData(chartConfig);

  const chartTileDiv = document.createElement("DIV");
  chartSetDiv.appendChild(chartTileDiv);
  chartTileDiv.dataChartConfig = db.encodeChartConfig(chartConfig);
  chartTileDiv.classList.add("chart-tile");

  renderChartTitle(chartTileDiv, chartConfig);

  if (isSingleChart)
    renderChartTabButtons(chartTileDiv, chartConfig);

  if (chartData.series.length == 0) {
    const chartDiv = document.createElement("DIV");
    const div = document.createElement("DIV");
    chartTileDiv.appendChild(div);
    div.appendChild(document.createTextNode("No data"));
  } else {
    if ([db.views.barChart, db.views.lineChart].includes(chartConfig.view))
      renderChartView(chartConfig, chartData, chartTileDiv);
    else if (chartConfig.view == db.views.table)
      renderTable(chartConfig, chartTileDiv, chartData);
    else if (chartConfig.view == db.views.sources)
      renderSources(chartTileDiv, chartData);
  }
}

function renderChartTitle(chartTileDiv, chartConfig) {
  var titleElem;
  if (isSingleChart)
    titleElem = document.createElement("DIV");
  else {
    titleElem = document.createElement("A");
    titleElem.href = "#" + db.encodeChartConfig(chartConfig);
    titleElem.title = "Show only this chart (bigger)";
  }
  chartTileDiv.appendChild(titleElem);
  titleElem.classList.add("chart-title");
  titleElem.appendChild(document.createTextNode(db.getChartTitle(chartConfig)));

  if (!isSingleChart) {
    var removeButton = createRemoveButton();
    chartTileDiv.appendChild(removeButton);
    removeButton.addEventListener("click", chartTileRemoveClick);
  }
}

function renderChartTabButtons(chartTileDiv, chartConfig) {
  const tabButtonsDiv = document.createElement("DIV");
  chartTileDiv.appendChild(tabButtonsDiv);
  tabButtonsDiv.classList.add("tab-buttons");
  const params = db.getChartParams(chartConfig);
  const viewOptions = params.view.options;
  for (const i in viewOptions)
    renderChartTabButton(tabButtonsDiv, chartConfig, i, viewOptions[i]);
}

function renderChartTabButton(tabButtonsDiv, chartConfig, key, title) {
  var button;
  if (chartConfig.view == key)
    button = document.createElement("DIV");
  else
    button = document.createElement("A");
  tabButtonsDiv.appendChild(button);
  var chartConfigChanged = cloneObject(chartConfig);
  chartConfigChanged.view = key;
  button.href = "#" + db.encodeChartConfig(chartConfigChanged);
  button.addEventListener("click", function(event) {
    const chartTileDiv = event.target.parentNode.parentNode;
    const chartSetDiv = chartTileDiv.parentNode;
    var chartConfig = db.decodeChartConfigString(chartSetDiv.dataChartConfig);
    chartConfig.view = key;
    replaceChartSet(chartSetDiv, chartConfig);
    event.preventDefault();
  });
  button.appendChild(document.createTextNode(title));
}

function chartTileRemoveClick(event) {
  event.preventDefault();
  const chartTileDiv = event.target.parentNode;
  const chartSetDiv = chartTileDiv.parentNode;
  var chartConfigStrings = [];
  for (var i = 0; i < dynamicContent.childNodes.length; i++) {
    const child = dynamicContent.childNodes[i];
    if (child == chartSetDiv) {
      const chartConfig = db.decodeChartConfigString(child.dataChartConfig);
      const chartConfigList = db.unfoldChartConfig(chartConfig);
      for (const i in chartConfigList) {
        const newChartConfig = db.encodeChartConfig(chartConfigList[i]);
        if (newChartConfig != chartTileDiv.dataChartConfig)
          chartConfigStrings.push(newChartConfig);
      }
    } else
      chartConfigStrings.push(child.dataChartConfig);
  }
  const hash = "#" + chartConfigStrings.join(",");
  history.pushState(null, null, hash);
  renderPage();
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
  } else
    return value.toLocaleString();
}

function renderChartView(chartConfig, chartData, chartTileDiv) {
  var chartOptions = {
    title: {
      margin: 0,
      floating: true
    },
    chart: {
      animations: {
        enabled: false
      },
      toolbar: {
        show: isSingleChart
      }
    },
    plotOptions: {
      bar: {}
    },
    stroke: {
    },
    colors: getChartSeriesColors(chartConfig, chartData),
    series: [],
    xaxis: {
    },
    yaxis: {
      min: 0,
      forceNiceScale: true,
      labels: {
        formatter: function (value) {
          return formatValue(chartConfig, value);
        }
      }
    },
    markers: {
      size: 3.5,
      strokeWidth: 0
    },
    dataLabels: {
      formatter: function (val, opts) {
        return formatValue(chartConfig, val);
      }
    },
    legend: {
      position: "bottom",
      showForSingleSeries: chartData.series[0].name != "Value",
      offsetY: -10,
    }
  }

  if (isSingleChart)
    chartOptions.title.text = db.getChartTitle(chartConfig);

  if (chartConfig.view == db.views.lineChart) {
    chartOptions.chart.type = "line";
    chartOptions.stroke.width = 3.5;
  } else {
    chartOptions.chart.type = "bar";
    if (chartConfig.brand == db.brandOptions.all || chartConfig.metric == db.metrics.shareElectric)
      chartOptions.chart.stacked = true;
  }

  chartOptions.dataLabels.enabled = chartOptions.chart.type == "bar" && isSingleChart;

  chartOptions.chart.fontFamily = window.getComputedStyle(document.body)["font-family"];
  chartOptions.series = chartData.series;
  chartOptions.xaxis.categories = chartData.categories;

  if (chartConfig.metric == db.metrics.shareElectric)
    chartOptions.yaxis.forceNiceScale = false;

  // Set chart size
  const heightRatio = 0.6;
  var heightOffset = 290;
  if (isWidthEnoughForFilterAsButtons())
    heightOffset = 305;
  const minWidth = 400;
  const minHeight = 300;
  var wantedWith = Math.min(window.innerWidth - 2, (window.innerHeight - heightOffset) / heightRatio);
  if (!isSingleChart)
    wantedWith = wantedWith / 2.2;
  chartOptions.chart.width = Math.max(wantedWith, minWidth);
  chartOptions.chart.height = Math.max(chartOptions.chart.width * heightRatio, minHeight);

  const chartDiv = document.createElement("DIV");
  chartTileDiv.appendChild(chartDiv);
  var chart = new ApexCharts(chartDiv, chartOptions);
  chart.render();
}

function getChartSeriesColors(chartConfig, chartData) {
  var colorSet = [
    "#E83835",
    "#1469AA",
    "#43A047",
    "#FB8C00",
    "#31CEE0",
    "#FDD835",
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

function renderTable(chartConfig, chartTileDiv, chartData) {
  const table = document.createElement("TABLE");
  chartTileDiv.appendChild(table);
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

function renderSources(chartTileDiv, chartData) {
  const sourcesDiv = document.createElement("DIV");
  chartTileDiv.appendChild(sourcesDiv);
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

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj))
}
