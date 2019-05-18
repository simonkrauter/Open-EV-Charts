"use strict";

let dynamicContent = document.createElement("DIV");
document.body.appendChild(dynamicContent);

window.onhashchange = function() {
  renderPage();
}

let homeLink = document.getElementById("homeLink");
homeLink.href = location.pathname + location.search;
homeLink.addEventListener("click", function(event) {
  // re-render page without page reload
  event.preventDefault();
  history.pushState(null, null, location.pathname + location.search);
  renderPage();
});

var topLevelChartConfigCount = 0;
var isSingleChart = false;

renderPage();

function renderPage() {
  dynamicContent.innerHTML = "";

  let chartConfigStrings = getChartConfigStringsFromUrl();
  topLevelChartConfigCount = chartConfigStrings.length;
  for (let i in chartConfigStrings) {
    let chartConfigString = chartConfigStrings[i];
    let chartSetDiv = document.createElement("DIV");
    dynamicContent.appendChild(chartSetDiv);
    chartSetDiv.classList.add("chart-set");
    renderChartSet(chartSetDiv, db.decodeChartConfigString(chartConfigString));
  }
}

function getChartConfigStringsFromUrl() {
  return location.hash.substr(1).split(",");
}

function rebuildUrlHash() {
  let oldCount = getChartConfigStringsFromUrl().length;
  var chartConfigStrings = [];
  for (var i = 0; i < dynamicContent.childNodes.length; i++)
    chartConfigStrings.push(dynamicContent.childNodes[i].dataChartConfig);
  let hash = "#" + chartConfigStrings.join(",");
  history.pushState(null, null, hash);

  // Re-render page to get rid of the remove button(s) and to adjust chart size
  if (oldCount > 1 && chartConfigStrings.length == 1)
    renderPage();
}

function renderChartSet(chartSetDiv, chartConfig) {
  chartSetDiv.dataChartConfig = db.encodeChartConfig(chartConfig);
  chartSetDiv.innerHTML = "";

  renderFilters(chartSetDiv, chartConfig);

  let chartConfigList = db.unfoldChartConfig(chartConfig);
  isSingleChart = topLevelChartConfigCount == 1 && chartConfigList.length == 1;
  for (let i in chartConfigList)
    renderChartTile(chartSetDiv, chartConfigList[i]);
}

function renderFilters(chartSetDiv, chartConfig) {
  let div = document.createElement("DIV");
  chartSetDiv.appendChild(div);
  div.classList.add("filters");

  let params = db.getChartParams(chartConfig);
  for (let i in params) {
    let param = params[i];
    if (!param.showAsFilter)
      continue;
    var select = addSelectElement(div);
    select.name = param.name;
    select.addEventListener("change", function(event) {
      let paramName = event.target.name;
      let chartSetDiv = event.target.parentNode.parentNode.parentNode;
      var chartConfig = db.decodeChartConfigString(chartSetDiv.dataChartConfig);
      chartConfig[paramName] = event.target.value;
      renderChartSet(chartSetDiv, chartConfig);
      rebuildUrlHash();
    });
    for (let optionKey in param.options) {
      var option = document.createElement("OPTION");
      option.value = optionKey;
      option.text = param.options[optionKey];
      option.selected = optionKey == chartConfig[param.name];
      select.appendChild(option);
    }
  }

  if (getChartConfigStringsFromUrl().length > 1) {
    var removeButton = createRemoveButton();
    div.appendChild(removeButton);
    removeButton.addEventListener("click", function(event) {
      event.preventDefault();
      let chartSetDiv = event.target.parentNode.parentNode.parentNode;
      chartSetDiv.parentNode.removeChild(chartSetDiv);
      rebuildUrlHash();
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

  let chartTileDiv = document.createElement("DIV");
  chartSetDiv.appendChild(chartTileDiv);
  chartTileDiv.dataChartConfig = db.encodeChartConfig(chartConfig);
  chartTileDiv.classList.add("chart-tile");

  renderChartTitle(chartTileDiv, chartConfig);

  if (isSingleChart)
    renderChartTabButtons(chartTileDiv, chartConfig);

  if (chartData.series.length == 0) {
    let chartDiv = document.createElement("DIV");
    chartTileDiv.appendChild(document.createTextNode("No data"));
  } else {
    if ([db.views.barChart, db.views.lineChart].includes(chartConfig.view))
      renderChartView(chartConfig, chartData, chartTileDiv);
    else if (chartConfig.view == db.views.table)
      renderTable(chartTileDiv, chartData);
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
  let tabButtonsDiv = document.createElement("DIV");
  chartTileDiv.appendChild(tabButtonsDiv);
  tabButtonsDiv.classList.add("tab-buttons");
  let params = db.getChartParams(chartConfig);
  let viewOptions = params.view.options;
  for (let i in viewOptions)
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
  button.appendChild(document.createTextNode(title));
}

function chartTileRemoveClick(event) {
  event.preventDefault();
  let chartTileDiv = event.target.parentNode.parentNode;
  let chartSetDiv = chartTileDiv.parentNode;
  var chartConfigStrings = [];
  for (var i = 0; i < dynamicContent.childNodes.length; i++) {
    let child = dynamicContent.childNodes[i];
    if (child == chartSetDiv) {
      let chartConfig = db.decodeChartConfigString(child.dataChartConfig);
      let chartConfigList = db.unfoldChartConfig(chartConfig);
      for (let i in chartConfigList) {
        let newChartConfig = db.encodeChartConfig(chartConfigList[i]);
        if (newChartConfig != chartTileDiv.dataChartConfig)
          chartConfigStrings.push(newChartConfig);
      }
    } else
      chartConfigStrings.push(child.dataChartConfig);
  }
  let hash = "#" + chartConfigStrings.join(",");
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
  removeButton.appendChild(document.createElement("DIV"));
  return removeButton;
}

function renderChartView(chartConfig, chartData, chartTileDiv) {
  var chartOptions = {
    title: {
      text: db.getChartTitle(chartConfig)
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
    colors: [
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
    ],
    series: [],
    xaxis: {
      labels: {
        formatter: function (val, timestamp, index) {
          if (Number.isInteger(val))
            return val.toLocaleString();
          return val;
        }
      }
    },
    yaxis: {
      title: {
        text: "Sold cars"
      },
      min: 0,
      forceNiceScale: true,
      labels: {
        formatter: function (value) {
          if (value == null)
            return value;
          return value.toLocaleString();
        }
      },
    },
    markers: {
      size: 3.5,
      strokeWidth: 0
    },
    dataLabels: {
      formatter: function (val, opts) {
        return val.toLocaleString();
      }
    },
    legend: {
      position: "bottom",
      offsetY: -10,
    }
  }

  if (chartData.series[0].name == "Total")
    chartOptions.colors.unshift("#000000");
  if (chartData.series[chartData.series.length - 1].name == "Other")
    chartOptions.colors[chartData.series.length - 1] = "#000000";

  if (chartConfig.view == db.views.lineChart) {
    chartOptions.chart.type = "line";
    chartOptions.stroke.width = 3.5;
  } else {
    chartOptions.chart.type = "bar";
    chartOptions.chart.stacked = true;
  }

  chartOptions.dataLabels.enabled = chartOptions.chart.type == "bar" && isSingleChart;

  chartOptions.chart.fontFamily = window.getComputedStyle(document.body)["font-family"];
  chartOptions.series = chartData.series;
  chartOptions.xaxis.categories = chartData.categories;

  let chartDiv = document.createElement("DIV");
  chartTileDiv.appendChild(chartDiv);

  // Set chart size
  let heightRatio = 0.63; // defined by apex charts
  let heightOffset = 230;
  let minWidth = 500;
  var wantedWith = Math.min(window.innerWidth - 2, (window.innerHeight - heightOffset) / heightRatio);
  if (!isSingleChart)
    wantedWith = wantedWith / 2.2;
  chartTileDiv.style.width = Math.max(wantedWith, minWidth) + "px";

  var chart = new ApexCharts(chartDiv, chartOptions);
  chart.render();
}

function renderTable(chartTileDiv, chartData) {
  let table = document.createElement("TABLE");
  chartTileDiv.appendChild(table);
  // Table head
  let row = document.createElement("TR");
  table.appendChild(row);
  var cell = document.createElement("TH");
  cell.appendChild(document.createTextNode(chartData.categoryTitle));
  row.appendChild(cell);
  for (let i in chartData.series) {
    let series = chartData.series[i];
    let cell = document.createElement("TH");
    cell.appendChild(document.createTextNode(series.name));
    row.appendChild(cell);
  }

  // Table body
  for (let i in chartData.categories) {
    let category = chartData.categories[i];
    let row = document.createElement("TR");
    table.appendChild(row);
    let cell = document.createElement("TD");
    cell.appendChild(document.createTextNode(category));
    row.appendChild(cell);
    for (let j in chartData.series) {
      let series = chartData.series[j];
      let cell = document.createElement("TD");
      cell.style.textAlign = "right";
      let val = series.data[i];
      if (val === null)
        cell.appendChild(document.createTextNode(""));
      else
        cell.appendChild(document.createTextNode(val.toLocaleString()));
      row.appendChild(cell);
    }
  }
}

function renderSources(chartTileDiv, chartData) {
  let sourcesDiv = document.createElement("DIV");
  chartTileDiv.appendChild(sourcesDiv);
  sourcesDiv.classList.add("sources");

  let ol = document.createElement("OL");
  sourcesDiv.appendChild(ol);
  let reversed = chartData.sources.reverse();
  for (let i in reversed) {
    let parts = reversed[i].split(" ");
    let url = parts.shift();
    let li = document.createElement("LI");
    ol.appendChild(li);
    let link = document.createElement("A");
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
