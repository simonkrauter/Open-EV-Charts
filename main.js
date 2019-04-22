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

renderPage();

function renderPage() {
  dynamicContent.innerHTML = "";

  let chartConfigStrings = getChartConfigStringsFromUrl();
  for (let i in chartConfigStrings) {
    let chartConfigString = chartConfigStrings[i];
    let chartSetDiv = document.createElement("DIV");
    dynamicContent.appendChild(chartSetDiv);
    chartSetDiv.classList.add("chart-set");
    renderChartSet(chartSetDiv, db.decodeChartConfigString(chartConfigString));
  }
}

function updateChartSize(tileCount) {
  if (tileCount == 1 && dynamicContent.childNodes.length == 1 && dynamicContent.childNodes[0].childNodes.length == 2)
    dynamicContent.classList.add("single-chart");
  else
    dynamicContent.classList.remove("single-chart");
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
  for (let i in chartConfigList)
    renderChartTile(chartSetDiv, chartConfigList[i], chartConfigList.length);
}

function renderFilters(chartSetDiv, chartConfig) {
  let div = document.createElement("DIV");
  chartSetDiv.appendChild(div);
  div.classList.add("filters");

  let params = db.getChartParams();
  for (let i in params) {
    let param = params[i];
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

function renderChartTile(chartSetDiv, chartConfig, tileCount) {
  var chartData = db.queryChartData(chartConfig);

  let chartTileDiv = document.createElement("DIV");
  chartSetDiv.appendChild(chartTileDiv);
  chartTileDiv.dataChartConfig = db.encodeChartConfig(chartConfig);
  chartTileDiv.classList.add("chart-tile");

  updateChartSize(tileCount);
  // do this before the chart gets rendered to avoid resizing

  let titleElem = document.createElement("A");
  chartTileDiv.appendChild(titleElem);
  titleElem.classList.add("chart-title");
  titleElem.appendChild(document.createTextNode(db.getChartTitle(chartConfig)));
  titleElem.href = "#" + db.encodeChartConfig(chartConfig);
  titleElem.title = "Show only this chart (bigger)";

  if (tileCount > 1) {
    var removeButton = createRemoveButton();
    chartTileDiv.appendChild(removeButton);
    removeButton.addEventListener("click", chartTileRemoveClick);
  }

  let chartDiv = document.createElement("DIV");
  chartTileDiv.appendChild(chartDiv);

  renderChart(chartConfig, chartData, chartDiv);

  renderSources(chartTileDiv, chartData);
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

function renderChart(chartConfig, chartData, chartDiv) {
  var chartOptions = {
    title: {
      text: db.getChartTitle(chartConfig)
    },
    chart: {
      type: "line",
      animations: {
        enabled: false
      }
    },
    stroke: {
      width: 3.5
    },
    colors: [
      "#e53935",
      "#00ACC1",
      "#43A047",
      "#FDD835",
      "#FB8C00",
      "#D81B60",
      "#5E35B1",
      "#3949AB",
      "#C0CA33",
      "#6D4C41",
      "#757575",
      "#546E7A",
      "#b71c1c",
      "#1A237E",
      "#01579B",
      "#004D40",
      "#827717",
      "#3E2723",
      "#212121",
      "#263238",
      "#FFB300",
      "#F4511E",
      "#8E24AA"
    ],
    series: [],
    xaxis: {},
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
    legend: {
      position: "bottom",
      offsetY: -10,
    }
  }

  chartOptions.chart.fontFamily = window.getComputedStyle(document.body)["font-family"];
  chartOptions.series = chartData.series;
  chartOptions.xaxis.categories = chartData.categories;

  var chart = new ApexCharts(chartDiv, chartOptions);
  chart.render();
}

function renderSources(chartTileDiv, chartData) {
  let sourcesDiv = document.createElement("DIV");
  chartTileDiv.appendChild(sourcesDiv);
  sourcesDiv.classList.add("sources");

  let showButton = createButton();
  sourcesDiv.appendChild(showButton);
  showButton.appendChild(document.createTextNode("Show Sources"));
  showButton.addEventListener("click", function(event) {
    event.preventDefault();
    event.target.parentNode.classList.add("visible");
  });

  let sourcesContentDiv = document.createElement("DIV");
  sourcesDiv.appendChild(sourcesContentDiv);

  let textDiv = document.createElement("DIV");
  sourcesContentDiv.appendChild(textDiv);
  textDiv.appendChild(document.createTextNode("Sources"));
  let ol = document.createElement("OL");
  sourcesContentDiv.appendChild(ol);
  let reversed = chartData.sources.reverse();
  for (let i in reversed) {
    let parts = reversed[i].split(" ");
    let url = parts.shift();
    let li = document.createElement("LI");
    ol.appendChild(li);
    let link = document.createElement("A");
    li.appendChild(link);
    link.href = url;
    link.appendChild(document.createTextNode(url));
    if (parts.length > 0)
      li.appendChild(document.createTextNode(" " + parts.join(" ")));
  }
}

