"use strict";

db.finalizeDataLoading();

document.onmousedown = function(event) {
  document.body.classList.remove("showFocus");
};

document.onkeydown = function(event) {
  document.body.classList.add("showFocus");
  if (screenshotMode && (event.key === "Escape" || event.key === "Esc")) {
    screenshotMode = false;
    renderPage();
  }
};

const dynamicContent = document.createElement("DIV");
document.body.appendChild(dynamicContent);

window.onhashchange = function() {
  navigate();
};

window.onresize = function() {
  if (navigator.userAgentData.mobile)
    return; // ignore resize event on mobile browsers, because they send it on scrolling
  renderPage();
};

const homeLink = document.getElementById("homeLink");
homeLink.href = location.pathname + location.search;
homeLink.addEventListener("click", function(event) {
  // re-render page without page reload
  event.preventDefault();
  history.pushState(null, null, location.pathname + location.search);
  navigate();
});

const maxHintsHeight = 75;

var screenshotMode;
var isSingleChart;
var chartSetConfig;
var chartConfigs;
var activeShowAllOptionsParamName;
var sortByName;
var hintsDiv;
var isHintsDivExpanded;
var currentExportFormat;

setGlobalChartOptions();
navigate();

function navigate(retainShowAllOptionsParamName) {
  if (retainShowAllOptionsParamName === undefined || activeShowAllOptionsParamName != retainShowAllOptionsParamName)
    activeShowAllOptionsParamName = "";

  screenshotMode = false;
  chartSetConfig = getChartConfigFromUrl();
  chartSetConfig = db.makeChartConfigValid(chartSetConfig);
  chartConfigs = db.unfoldChartConfig(chartSetConfig);
  isSingleChart = chartConfigs.length == 1;
  sortByName = false;
  isHintsDivExpanded = false;
  currentExportFormat = null;

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
    r.open("GET", "https://webstats.open-ev-charts.org/?action=log&url=" + encodeURIComponent(location.href) + "&referrer=" + encodeURIComponent(document.referrer));
    r.send();
  }
}

function renderPage() {
  dynamicContent.innerHTML = "";
  hintsDiv = null;

  if (screenshotMode)
    document.body.classList.add("screenshotMode");
  else
    document.body.classList.remove("screenshotMode");

  if (screenshotMode) {
    const div = document.createElement("DIV");
    div.classList.add("screenshotModeBanner");
    const exitButton = document.createElement("A");
    exitButton.addEventListener("click", function(event) {
      event.preventDefault();
      screenshotMode = false;
      renderPage();
    });
    exitButton.appendChild(document.createTextNode("Exit Screenshot Mode"));
    div.appendChild(exitButton);
    dynamicContent.appendChild(div);
  } else {
    renderFilters();
  }

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
  const chartConfig = chartConfigs[chartIndex];
  const params = db.getChartParams(chartConfig);
  const chartData = db.queryChartData(chartConfig, sortByName, isSingleChart);

  const chartDiv = document.createElement("DIV");
  dynamicContent.appendChild(chartDiv);
  chartDiv.dataChartIndex = chartIndex;
  chartDiv.classList.add("chartTile");
  if (isSingleChart)
    chartDiv.classList.add("single");

  renderChartTitle(chartDiv, chartConfig);

  if ((isSingleChart || chartConfig.view != params.view.defaultOption) && !screenshotMode)
    renderChartTabButtons(chartDiv);

  if (isSingleChart && chartConfig.view != db.views.sources && !screenshotMode)
    renderHints(chartDiv, chartConfig, chartData);

  if (chartData.series.length == 0) {
    const div = document.createElement("DIV");
    chartDiv.appendChild(div);
    div.appendChild(document.createTextNode("No data available"));
    div.classList.add("noData");
  } else {
    if ([db.views.barChart, db.views.lineChart].includes(chartConfig.view)) {
      renderChartView(chartConfig, chartData, chartDiv, false);
      if (isSingleChart && !screenshotMode) {
        addPngExportButton(chartDiv);
        addScreenshotModeButton(chartDiv);
      }
    } else if (chartConfig.view == db.views.table)
      renderTable(chartConfig, chartDiv, chartData);
    else if (chartConfig.view == db.views.sources)
      renderSources(chartConfig, chartDiv, chartData);
  }

  if (screenshotMode) {
    const div = document.createElement("DIV");
    div.classList.add("sourceUrl");
    div.appendChild(document.createTextNode("Source: " + location.href));
    chartDiv.appendChild(div);
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

  if (db.isMultiCountry(chartConfig))
    titleElem.appendChild(document.createTextNode(db.getChartTitle(chartConfig, isSingleChart)));
  else
    titleElem.appendChild(createCountryFlagContainer(chartConfig.country, db.getChartTitle(chartConfig, isSingleChart)));

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

function renderHints(chartDiv, chartConfig, chartData) {
  if (chartData.hints.length > 0) {
    hintsDiv = document.createElement("DIV");
    chartDiv.appendChild(hintsDiv);
    hintsDiv.classList.add("hints");
    if (chartData.hints.length == 1) {
      hintsDiv.appendChild(document.createTextNode("Hint: "));
    } else {
      hintsDiv.appendChild(document.createTextNode("Hints: "));
      hintsDiv.appendChild(document.createElement("BR"));
    }
    for (const i in chartData.hints) {
      hintsDiv.appendChild(document.createTextNode(chartData.hints[i]));
      hintsDiv.appendChild(document.createElement("BR"));
    }
    // collapse hints
    if (hintsDiv.offsetHeight > maxHintsHeight) {
      // expand button
      var expandHintsButton = document.createElement("A");
      expandHintsButton.classList.add("expand");
      expandHintsButton.appendChild(document.createElement("DIV"));
      expandHintsButton.title = "Expand Hints";
      expandHintsButton.addEventListener("click", function(event) {
        hintsDiv.style.maxHeight = "";
        expandHintsButton.style.display = "none";
        collapseHintsButton.style.display = "";
        isHintsDivExpanded = true;
      });
      hintsDiv.appendChild(expandHintsButton);
      // collapse button
      var collapseHintsButton = document.createElement("A");
      collapseHintsButton.classList.add("collapse");
      collapseHintsButton.appendChild(document.createElement("DIV"));
      collapseHintsButton.title = "Collapse Hints";
      collapseHintsButton.addEventListener("click", function(event) {
        hintsDiv.style.maxHeight = maxHintsHeight + "px";
        collapseHintsButton.style.display = "none";
        expandHintsButton.style.display = "";
        isHintsDivExpanded = false;
      });
      hintsDiv.appendChild(collapseHintsButton);
      if (isHintsDivExpanded) {
        expandHintsButton.style.display = "none";
      } else {
        collapseHintsButton.style.display = "none";
        hintsDiv.style.maxHeight = maxHintsHeight + "px";
      }
    }
  }
}

function renderChartTabButton(tabButtonsDiv, key, title) {
  var button;
  if (chartSetConfig.view == key)
    button = document.createElement("DIV");
  else
    button = document.createElement("A");
  tabButtonsDiv.appendChild(button);
  var newChartConfig = db.cloneObject(chartSetConfig);
  newChartConfig.view = key;
  button.href = "#" + db.encodeChartConfig(newChartConfig);
  button.addEventListener("click", function(event) {
    event.preventDefault();
    navigateToChartConfig(newChartConfig);
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
  if (db.isYAxisPercent(chartConfig)) {
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
  Chart.defaults.color = bodyStyle["color"];
  Chart.defaults.font.family = bodyStyle["font-family"];
  Chart.defaults.animation.duration = 0;
  Chart.defaults.plugins.title.font.size = 20;
  Chart.defaults.plugins.legend.position = "bottom";
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.pointStyle = "rect";
  Chart.defaults.plugins.datalabels = {};
  Chart.defaults.plugins.datalabels.color = "white";
  Chart.defaults.elements.line.borderWidth = 3.5;
  Chart.defaults.elements.line.tension = 0.2;
}

function renderChartView(chartConfig, chartData, chartDiv, isExport) {
  var chartOptions = {
    data: {
      datasets: []
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            autoSkip: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
            padding: 8,
            callback: function(value, index, values) {
              return formatValue(chartConfig, value);
            }
          },
          grid: {
            color: "rgba(0, 0, 0, 0.15)"
          },
          border: {
           display: false
          }
        }
      },
      responsive: false,
      plugins: {
        title: {
          display: isExport,
          text: db.getChartTitle(chartConfig)
        },
        legend: {
          display: chartData.series.length > 1 || chartData.series[0].name != "Value"
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = context.dataset.label || '';
              if (label)
                label += ': ';
              label += formatValue(chartConfig, context.parsed.y);
              return label;
            }
          }
        },
        datalabels: {
          display: false,
          formatter: function(value, context) {
            if (value === 0)
              return "";
            return formatValue(chartConfig, value);
          }
        }
      }
    },
    plugins: [ChartDataLabels]
  }

  if (chartConfig.view == db.views.lineChart) {
    chartOptions.type = "line";
  } else {
    chartOptions.type = "bar";
    if (db.isBarChartStacked(chartConfig)) {
      chartOptions.options.scales.x.stacked = true;
      chartOptions.options.scales.y.stacked = true;
    }
    if (db.isYAxis100Percent(chartConfig)) {
      chartOptions.options.scales.y.max = 100;
    }
    if (isSingleChart && window.innerWidth >= 1000) {
      chartOptions.options.plugins.datalabels.display = "auto";
    }
  }

  // Take over data series
  const colors = getChartSeriesColors(chartConfig, chartData);
  for (const i in chartData.series) {
    const series = chartData.series[i];
    var dataset = {};
    dataset.label = db.formatSeriesNameAndCategory(series.name);
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

  // Take over categories
  chartOptions.data.labels = [];
  for (const i in chartData.categories) {
    chartOptions.data.labels.push(db.formatSeriesNameAndCategory(chartData.categories[i]));
  }

  const canvas = document.createElement("CANVAS");
  setChartSize(canvas);
  chartDiv.appendChild(canvas);

  return new Chart(canvas.getContext('2d'), chartOptions);
}

function setChartSize(element) {
  const heightRatio = 0.6;
  const minWidth = 380;
  const minHeight = 280;
  const maxWidthMultiChart = 550;
  var heightOffset;
  if (screenshotMode) {
    heightOffset = 150;
  } else {
    heightOffset = homeLink.parentNode.parentNode.offsetHeight + 205;
    if (isWidthEnoughForFilterAsButtons())
      heightOffset += 10;
    if (hintsDiv != null)
      heightOffset += Math.min(hintsDiv.offsetHeight, maxHintsHeight) + 14;
  }
  var widthOffset;
  if (screenshotMode)
    widthOffset = 70;
  else
    widthOffset = 10;
  var wantedWith = Math.min(window.innerWidth - widthOffset, (window.innerHeight - heightOffset) / heightRatio);
  if (!isSingleChart) {
    wantedWith = wantedWith / 2.33;
    wantedWith = Math.min(wantedWith, maxWidthMultiChart);
  }
  if (screenshotMode)
    wantedWith = Math.min(wantedWith, 1000);
  const width = Math.max(wantedWith, minWidth);
  const height = Math.max(width * heightRatio, minHeight);
  element.style.width = width + "px";
  element.style.height = height + "px";
}

function addPngExportButton(parent) {
  const exportButton = document.createElement("A");
  exportButton.appendChild(document.createTextNode("PNG"));
  exportButton.classList.add("export");
  exportButton.classList.add("pngExport");
  exportButton.title = "Export chart";
  exportButton.addEventListener("click", function(event) {
    event.preventDefault();
    const chartData = db.queryChartData(chartConfigs[0], sortByName, isSingleChart);
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

function addScreenshotModeButton(parent) {
  const button = document.createElement("A");
  button.appendChild(document.createTextNode("Screenshot Mode"));
  button.classList.add("export");
  button.classList.add("screenshotModeButton");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    screenshotMode = true;
    renderPage();
  });
  parent.appendChild(button);
}

function getChartSeriesColors(chartConfig, chartData) {
  var result = [];
  // assign static colors
  var seriesIndexesWithDynamicColor = [];
  for (const i in chartData.series) {
    const seriesName = chartData.series[i].name;
    if (seriesName == db.totalSeriesName || seriesName == "Other")
      result.push("#000000");
    else {
      var colorIndex = colorIndexByCompanyGroup[seriesName];
      if (colorIndex === undefined)
        colorIndex = colorIndexByBrand[seriesName];
      if (colorIndex === undefined)
        seriesIndexesWithDynamicColor.push(parseInt(i));
      result.push(colorSet[colorIndex]);
    }
  }
  if (seriesIndexesWithDynamicColor.length == 0)
    return result;
  // assign dynamic colors
  var dynamicColorSeriesIndex = 0;
  for (const i in colorSet) {
    const color = colorSet[i];
    if (result.includes(color))
      continue;
    result[seriesIndexesWithDynamicColor[dynamicColorSeriesIndex]] = color;
    dynamicColorSeriesIndex++;
    if (dynamicColorSeriesIndex == seriesIndexesWithDynamicColor.length)
      return result;
  }
  var colorIndex = 0;
  while (dynamicColorSeriesIndex < seriesIndexesWithDynamicColor.length) {
    result[seriesIndexesWithDynamicColor[dynamicColorSeriesIndex]] = colorSet[colorIndex % colorSet.length];
    dynamicColorSeriesIndex++;
    colorIndex++;
  }
  return result;
}

function renderTable(chartConfig, chartDiv, chartData) {
  var horizontalBarMaxValue = 0;
  if (chartData.series.length == 1 && chartData.categories.length > 1) {
    for (const i in chartData.categories) {
      horizontalBarMaxValue = Math.max(horizontalBarMaxValue, chartData.series[0].data[i]);
    }
  }
  const showRankColumn = !db.isTimeXProperty(chartConfig);

  const table = document.createElement("TABLE");
  chartDiv.appendChild(table);

  if (!showRankColumn && horizontalBarMaxValue == 0 && Object.keys(chartData.series).length >= 10 && chartData.categories.length < 10)
    renderTableTransposed(chartConfig, table, chartData);
  else
    renderTableNormal(chartConfig, table, chartData, horizontalBarMaxValue, showRankColumn);

  renderTableExportButton(chartDiv, table, "CSV");
  renderTableExportButton(chartDiv, table, "Wikitext");
}

function renderTableExportButton(chartDiv, table, format) {
  const containerDivId = "tableExportContainer";
  const exportButton = document.createElement("A");
  exportButton.appendChild(document.createTextNode(format));
  exportButton.classList.add("export");
  exportButton.title = "Export table as " + format;
  exportButton.addEventListener("click", function(event) {
    event.preventDefault();
    var containerDiv = document.getElementById(containerDivId);
    if (containerDiv != null)
      chartDiv.removeChild(containerDiv);
    if (currentExportFormat != format) {
      containerDiv = document.createElement("DIV");
      containerDiv.id = containerDivId;
      const textarea = document.createElement("TEXTAREA");
      containerDiv.appendChild(textarea);
      const rows = table.childNodes;
      if (format == "CSV")
        textarea.value = generateCsv(rows);
      else
        textarea.value = generateWikitext(rows);
      chartDiv.appendChild(containerDiv);
      currentExportFormat = format;
    }
  });
  chartDiv.appendChild(exportButton);
}

function generateCsv(rows) {
  var result = "";
  for (var i = 0; i < rows.length; i++) {
    if (i > 0)
      result += "\n";
    const columns = rows[i].childNodes;
    for (var j = 0; j < columns.length; j++) {
      const cell = columns[j];
      const content = cell.textContent;
      if (content != "") {
        if (j > 0)
          result += ";";
        if (!cell.classList.contains("NA")) {
          if (cell.style.textAlign == "right")
            result += content.replaceAll(",", "").replaceAll(".", "");
          else
            result += content;
        }
      }
    }
  }
  return result;
}

function generateWikitext(rows) {
  var result = "{| class=\"wikitable sortable\" style=\"text-align:right;\"\n";
  for (var i = 0; i < rows.length; i++) {
    result += "|-\n";
    const columns = rows[i].childNodes;
    for (var j = 0; j < columns.length; j++) {
      const cell = columns[j];
      const content = cell.textContent;
      if (content != "") {
        if (cell.tagName == "TH")
          result += "! ";
        else {
          result += "| ";
          if (cell.classList.contains("NA"))
            result += "style=\"text-align:center;\" | ";
          else if (cell.style.textAlign != "right")
            result += "style=\"text-align:left;\" | ";
        }
        result += content;
        result += "\n";
      }
    }
  }
  result += "|}";
  return result;
}

function renderTableNormal(chartConfig, table, chartData, horizontalBarMaxValue, showRankColumn) {
  // Table head
  const row = document.createElement("TR");
  table.appendChild(row);
  if (showRankColumn) {
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode("#"));
    row.appendChild(cell);
  }
  const columnTitle = db.getCategoryTitle(chartConfig);
  {
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode(columnTitle));
    addThSortClickEvent(chartConfig, cell, 0);
    row.appendChild(cell);
  }
  for (const i in chartData.series) {
    const series = chartData.series[i];
    const cell = document.createElement("TH");
    var text = db.formatSeriesNameAndCategory(series.name);
    if (text == "Value") {
      const params = db.getChartParams(chartConfig);
      text = params.metric.options[chartConfig.metric];
    }
    cell.appendChild(document.createTextNode(text));
    if (horizontalBarMaxValue != 0) {
      cell.colSpan = 2;
    }
    addThSortClickEvent(chartConfig, cell, i + 1);
    row.appendChild(cell);
  }

  const maxBarWidth = Math.min(350, Math.max(50, window.innerWidth - 450));

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

    renderTableRowTextCell(chartConfig, row, columnTitle, category);

    for (const j in chartData.series) {
      renderTableValueCell(chartConfig, row, chartData.series[j].data[i]);
    }
    // add horizontal bar
    if (horizontalBarMaxValue != 0) {
      const cell = document.createElement("TD");
      const barDiv = document.createElement("DIV");
      cell.appendChild(barDiv);
      barDiv.classList.add("horizontalBar");
      const width = chartData.series[0].data[i] / horizontalBarMaxValue * maxBarWidth;
      barDiv.style.width = width + "px";
      row.appendChild(cell);
    }
  }
}

function renderTableTransposed(chartConfig, table, chartData) {
  // Table head
  const row = document.createElement("TR");
  table.appendChild(row);
  {
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode("#"));
    row.appendChild(cell);
  }
  const columnTitle = db.getSeriesNameColumnHeader(chartConfig);
  {
    const cell = document.createElement("TH");
    cell.appendChild(document.createTextNode(columnTitle));
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

    renderTableRowTextCell(chartConfig, row, columnTitle, series.name);

    for (const j in chartData.categories) {
      renderTableValueCell(chartConfig, row, series.data[j]);
    }
    index++;
  }
}

function renderTableRowTextCell(chartConfig, row, columnTitle, text) {
  const cell = document.createElement("TD");
  cell.style.maxWidth = Math.max(100, window.innerWidth - 170) + "px";
  row.appendChild(cell);
  var addFlag = false;
  var countryCode;
  if (columnTitle == "Country") {
    addFlag = true;
    const countryId = db.countryNamesReverse[text];
    countryCode = db.countriesCodes[countryId];
  } else if (columnTitle == "Company" || columnTitle == "Brand") {
    addFlag = true;
    countryCode = getCountryCodeForCompany(text);
  } else if (columnTitle == "Model") {
    addFlag = true;
    const parts = text.split("|", 2);
    const brand = parts[0];
    countryCode = getCountryCodeForCompany(brand);
  }
  if (addFlag) {
    var containerElement;
    if (text.toLowerCase() != "other") {
      // content as link
      var newChartConfig = db.cloneObject(chartConfig);
      const textParts = text.split("|", 2);
      if (textParts.length > 1) {
        newChartConfig.brand = textParts[0];
        newChartConfig.model = textParts[1];
      } else {
        const countryId = db.countryNamesReverse[text];
        if (countryId != null) {
          newChartConfig.country = db.countriesCodes[countryId];
        } else {
          newChartConfig.model = text;
        }
      }
      if (!db.isTimeXProperty(newChartConfig)) {
        newChartConfig.xProperty = "";
        newChartConfig.timeSpan = "";
      }
      newChartConfig.view = null;
      db.applyNewDefaultOptions(newChartConfig, chartConfig);
      containerElement = document.createElement("A");
      containerElement.href = "#" + db.encodeChartConfig(newChartConfig);
      containerElement.addEventListener("click", function(event) {
        event.preventDefault();
        navigateToChartConfig(newChartConfig);
      });
    } else {
      // content without link
      containerElement = document.createElement("SPAN");
    }
    cell.appendChild(containerElement);
    containerElement.appendChild(createCountryFlagContainer(countryCode, db.formatSeriesNameAndCategory(text), true));
  } else
    cell.appendChild(document.createTextNode(db.formatSeriesNameAndCategory(text)));
}

function renderTableValueCell(chartConfig, row, val) {
  const cell = document.createElement("TD");
  if (val == null && val !== 0) {
    cell.appendChild(document.createTextNode("–"));
    cell.classList.add("NA");
  } else {
    cell.appendChild(document.createTextNode(formatValue(chartConfig, val)));
    cell.style.textAlign = "right";
  }
  row.appendChild(cell);
}

function addThSortClickEvent(chartConfig, cell, columnIndex) {
  if (columnIndex < 2 && !db.isTimeXProperty(chartConfig)) {
    cell.addEventListener("click", function(event) {
      event.preventDefault();
      sortByName = columnIndex == 0;
      renderPage();
    });
    cell.style.cursor = "pointer";
  }
}

function renderSources(chartConfig, chartDiv, chartData) {
  const sourcesDiv = document.createElement("DIV");
  chartDiv.appendChild(sourcesDiv);
  sourcesDiv.classList.add("sources");

  const ol = document.createElement("UL");
  sourcesDiv.appendChild(ol);
  for (const key in chartData.sources) {
    const li = document.createElement("LI");
    ol.appendChild(li);
    {
      const sourceInfo = chartData.sources[key];
      if (db.isMultiCountry(chartConfig))
        li.appendChild(document.createTextNode(db.countryNames[sourceInfo.country]));
      li.appendChild(document.createTextNode(" "));
      li.appendChild(document.createTextNode(sourceInfo.firstDate));
      if (sourceInfo.lastDate != sourceInfo.firstDate) {
        li.appendChild(document.createTextNode("–"));
        li.appendChild(document.createTextNode(sourceInfo.lastDate));
      }
    }
    li.appendChild(document.createTextNode(": "));
    {
      const parts = key.split(" ");
      for (const i in parts) {
        var part = parts[i];
        if (i > 0)
          li.appendChild(document.createTextNode(" "));
        const protSep = part.search("://");
        if (protSep != -1) {
          const link = document.createElement("A");
          li.appendChild(link);
          if (part.endsWith(",")) {
            part = part.substr(0, part.length - 1);
            li.appendChild(document.createTextNode(","));
          }
          link.href = part;
          link.target = "_blank";
          link.appendChild(document.createTextNode(part.substr(protSep + 3)));
        } else {
          li.appendChild(document.createTextNode(part));
        }
      }
    }
  }
}

function getCountryCodeForCompany(companyOrBrand) {
  var countryCode = brandCountries[companyOrBrand];
  if (countryCode === undefined) {
    countryCode = companyGroupCountries[companyOrBrand];
    if (countryCode === undefined) {
      const company = db.companiesByBrand[companyOrBrand];
      if (company)
        countryCode = companyGroupCountries[company];
    }
  }
  return countryCode;
}

function createCountryFlagContainer(countryCode, text, inTable = false) {
  const countryFlagWidth = 24;
  const countryFlagHeight = 16;
  const countryFlagSpriteColumns = 5;

  // create container
  const flagContainer = document.createElement("SPAN");
  flagContainer.classList.add("flagContainer");
  const flag = document.createElement("SPAN");
  if (countryCode || inTable) {
    flag.style.width = countryFlagWidth + "px";
    flag.style.height = countryFlagHeight + "px";
    flag.style.marginTop = -countryFlagHeight / 2 + "px"; // vertical aligment
  }
  flagContainer.appendChild(flag);

  // add flag
  const countryId = db.countries[countryCode];
  if (countryCode && countryId) {
    flag.classList.add("nonEmpty");
    flag.title = countryNamesByCode[countryCode];
    const backgroundXPos = (countryId % countryFlagSpriteColumns) * -countryFlagWidth;
    const backgroundYPos = Math.floor(countryId / countryFlagSpriteColumns) * -countryFlagHeight;
    flag.style.backgroundImage = "url('country-flags.png')";
    flag.style.backgroundPosition = backgroundXPos + "px " + backgroundYPos + "px";
    flag.style.backgroundSize = countryFlagSpriteColumns * 100 + "%";
  }

  // add text
  const textSpan = document.createElement("SPAN");
  textSpan.appendChild(document.createTextNode(text));
  textSpan.style.marginLeft = (countryFlagWidth + 5) + "px";
  flagContainer.appendChild(textSpan);

  return flagContainer;
}
