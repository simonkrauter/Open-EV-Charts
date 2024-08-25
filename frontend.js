"use strict";

db.finalizeDataLoading();

document.onmousedown = function() {
  document.body.classList.remove("showFocus");
};

document.onkeydown = function(event) {
  document.body.classList.add("showFocus");
  if (isScreenshotModeEnabled && (event.key === "Escape" || event.key === "Esc")) {
    isScreenshotModeEnabled = false;
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

var currentHash;
var isScreenshotModeEnabled;
var isShowAllChartsEnabled;
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

  currentHash = decodeURIComponent(location.hash.substr(1));
  isScreenshotModeEnabled = false;
  isShowAllChartsEnabled = false;
  chartSetConfig = db.decodeChartConfigString(currentHash);
  chartSetConfig = db.makeChartConfigValid(chartSetConfig);
  chartConfigs = db.unfoldChartConfig(chartSetConfig);
  if (currentHash == "") {
    // Add an extra chart on the home page
    let config = db.decodeChartConfigString("");
    config.xProperty = db.xProperties.monthAvg12;
    config.detailLevel = db.detailLevels.total;
    config.unfoldedByParams.push("xProperty"); // make title visible
    config = db.makeChartConfigValid(config);
    chartConfigs.unshift(config);
  }
  isSingleChart = chartConfigs.length == 1;
  sortByName = false;
  isHintsDivExpanded = false;
  currentExportFormat = null;

  renderPage();
  logVisit();
}

function navigateToHash(hash, retainShowAllOptionsParamName) {
  history.pushState(null, null, "#" + hash);
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

  if (currentHash.startsWith("status")) {
    renderStatusPage();
    return;
  }

  if (isScreenshotModeEnabled)
    document.body.classList.add("screenshotMode");
  else
    document.body.classList.remove("screenshotMode");

  if (isScreenshotModeEnabled) {
    const div = document.createElement("DIV");
    div.classList.add("screenshotModeBanner");
    const exitButton = document.createElement("A");
    exitButton.href = "#";
    exitButton.addEventListener("click", function(event) {
      event.preventDefault();
      isScreenshotModeEnabled = false;
      renderPage();
    });
    exitButton.appendChild(document.createTextNode("Exit Screenshot Mode"));
    div.appendChild(exitButton);
    dynamicContent.appendChild(div);
  } else {
    renderFilters();
  }

  // Prevent displaying of too many charts at once
  let maxVisibleCharts = 4;
  if (isWidthEnoughForFilterAsButtons())
    maxVisibleCharts = 6;

  for (const chartIndex in chartConfigs) {
    renderChart(chartIndex);
    if (chartIndex == maxVisibleCharts - 1 && !isShowAllChartsEnabled) {
      addShowAllChartsButton();
      break;
    }
  }
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
  const isActive = selectedKey != param.defaultOption || param.showAlwaysAsActive;
  let select = addSelectElement(parentDiv, isActive);
  select.addEventListener("change", function(event) {
    chartSetConfig[param.name] = event.target.value;
    navigateToHash(db.encodeChartConfig(chartSetConfig, param.name));
  });
  for (const optionKey in param.options) {
    let option = document.createElement("OPTION");
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
  let extendedOptionStartIndex = -1;
  let optionIndex = 0;
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
    let decCount = 0;
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
    let newChartConfig = db.cloneObject(chartSetConfig);
    newChartConfig[param.name] = optionKey;
    db.applyNewDefaultOptions(newChartConfig, chartSetConfig);

    let button = document.createElement("A");
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
      let newChartConfig = db.cloneObject(chartSetConfig);
      if (param.allowMultiSelection && (event.ctrlKey || isOptionAdditive)) {
        let values = newChartConfig[param.name].split(",");
        let index = values.indexOf(optionKey);
        if (index !== -1)
          values.splice(index, 1);
        else
          values.push(optionKey);
        let newValues = [];
        for (const i in values) {
          if (!param.noMultiSelectOptions || !param.noMultiSelectOptions.includes(values[i]))
            newValues.push(values[i]);
        }
        newChartConfig[param.name] = newValues.join(",");
      } else if (param.allowMultiSelection) {
        let oldValues = newChartConfig[param.name].split(",");
        let newValues = [];
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
      navigateToHash(db.encodeChartConfig(chartSetConfig), param.name);
    });
  }

  // Add "Show more" button
  if (extendedOptionStartIndex != -1) {
    let button = document.createElement("A");
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

function addSelectElement(parent, isActive) {
  let selectWrapper = document.createElement("DIV");
  parent.appendChild(selectWrapper);
  selectWrapper.classList.add("selectWrapper");
  let select = document.createElement("SELECT");
  selectWrapper.appendChild(select);
  if (isActive)
    selectWrapper.classList.add("active");
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
  renderChartSubTitle(chartDiv, chartConfig);

  if ((isSingleChart || chartConfig.view != params.view.defaultOption) && !isScreenshotModeEnabled)
    renderChartTabButtons(chartDiv);

  if (isSingleChart && chartConfig.view != db.views.sources && !isScreenshotModeEnabled)
    renderHints(chartDiv, chartConfig, chartData);

  if (chartData.series.length == 0) {
    const div = document.createElement("DIV");
    chartDiv.appendChild(div);
    div.appendChild(document.createTextNode("No data available"));
    div.classList.add("noData");
  } else {
    if ([db.views.barChart, db.views.lineChart].includes(chartConfig.view)) {
      renderChartView(chartConfig, chartData, chartDiv, false);
      if (isSingleChart && !isScreenshotModeEnabled)
        addScreenshotModeButton(chartDiv);
    } else if (chartConfig.view == db.views.table)
      renderTable(chartConfig, chartDiv, chartData);
    else if (chartConfig.view == db.views.sources)
      renderSources(chartConfig, chartDiv, chartData);
  }

  if (isScreenshotModeEnabled) {
    const div = document.createElement("DIV");
    div.classList.add("sourceUrl");
    let url = location.href;
    if (url.startsWith("https://"))
      url = url.substr(8);
    div.appendChild(document.createTextNode("Source: " + url));
    chartDiv.appendChild(div);
  }
}

function renderChartTitle(chartDiv, chartConfig) {
  let titleElem;
  if (isSingleChart)
    titleElem = document.createElement("DIV");
  else {
    titleElem = document.createElement("A");
    titleElem.href = "#" + db.encodeChartConfig(chartConfig);
    titleElem.title = "Show only this chart (bigger)";
  }
  chartDiv.appendChild(titleElem);
  titleElem.classList.add("chartTitle");

  const title = db.getChartTitle(chartConfig, isSingleChart);
  if (db.isMultiCountry(chartConfig))
    titleElem.appendChild(document.createTextNode(title));
  else
    titleElem.appendChild(createCountryFlagContainer(chartConfig.country, title));

  if (!isSingleChart) {
    let removeButton = createRemoveButton();
    chartDiv.appendChild(removeButton);
    removeButton.addEventListener("click", chartRemoveClick);
  }
}

function renderChartSubTitle(chartDiv, chartConfig) {
  const subTitle = db.getChartSubTitle(chartConfig, isScreenshotModeEnabled);
  if (subTitle == "")
    return;
  let titleElem = document.createElement("DIV");
  chartDiv.appendChild(titleElem);
  titleElem.classList.add("chartSubTitle");

  titleElem.appendChild(document.createTextNode(subTitle));
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
      let span = document.createElement("SPAN");
      span.innerHTML = chartData.hints[i];
      hintsDiv.appendChild(span);
      hintsDiv.appendChild(document.createElement("BR"));
    }
    // collapse hints
    if (hintsDiv.offsetHeight > maxHintsHeight) {
      // expand button
      let expandHintsButton = document.createElement("A");
      expandHintsButton.href = "#";
      expandHintsButton.classList.add("expand");
      expandHintsButton.appendChild(document.createElement("DIV"));
      expandHintsButton.title = "Expand Hints";
      expandHintsButton.addEventListener("click", function() {
        event.preventDefault();
        hintsDiv.style.maxHeight = "";
        expandHintsButton.style.display = "none";
        collapseHintsButton.style.display = "";
        isHintsDivExpanded = true;
      });
      hintsDiv.appendChild(expandHintsButton);
      // collapse button
      let collapseHintsButton = document.createElement("A");
      collapseHintsButton.href = "#";
      collapseHintsButton.classList.add("collapse");
      collapseHintsButton.appendChild(document.createElement("DIV"));
      collapseHintsButton.title = "Collapse Hints";
      collapseHintsButton.addEventListener("click", function() {
        event.preventDefault();
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
  let element;
  if (chartSetConfig.view == key) {
    element = document.createElement("DIV");
  } else {
    let newChartConfig = db.cloneObject(chartSetConfig);
    newChartConfig.view = key;
    element = createLinkToHash(db.encodeChartConfig(newChartConfig));
  }
  tabButtonsDiv.appendChild(element);
  element.appendChild(document.createTextNode(title));
}

function chartRemoveClick(event) {
  event.preventDefault();

  const params = db.getChartParams();
  let currentParam;
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

  let newValues = [];
  for (const i in chartConfigs) {
    const chartConfig = chartConfigs[i];
    const value = chartConfig[currentParam.name];
    if (value != valueToRemove && !newValues.includes(value))
      newValues.push(value);
  }

  chartSetConfig[currentParam.name] = newValues.join(",");
  navigateToHash(db.encodeChartConfig(chartSetConfig));
}

function addShowAllChartsButton() {
  const div = document.createElement("DIV");
  dynamicContent.appendChild(div);
  let button = createButton();
  div.appendChild(button);
  button.appendChild(document.createTextNode("Show All Charts"));
  button.addEventListener("click", function(event) {
    event.preventDefault();
    isShowAllChartsEnabled = true;
    renderPage();
  });
}

function createLinkToHash(hash) {
  const a = document.createElement("A");
  a.href = "#" + hash;
  return a;
}

function createButton() {
  // Creates an A element which can be used as a button
  let button = document.createElement("A");
  button.classList.add("button");
  button.href = "#";
  return button;
}

function createRemoveButton() {
  let removeButton = createButton();
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
      return Math.round(value).toLocaleString();
    else
      return value;
  }
}

function setGlobalChartOptions() {
  const bodyStyle = window.getComputedStyle(document.body);
  Chart.defaults.color = bodyStyle.color;
  Chart.defaults.font.family = bodyStyle.fontFamily;
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
  let chartOptions = {
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
            autoSkip: true,
            autoSkipPadding: 0
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
            padding: 8,
            callback: function(value) {
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
              let label = context.dataset.label || '';
              if (label)
                label += ': ';
              label += formatValue(chartConfig, context.parsed.y);
              return label;
            }
          }
        },
        datalabels: {
          display: false,
          formatter: function(value) {
            if (value === 0)
              return "";
            return formatValue(chartConfig, value);
          }
        }
      }
    },
    plugins: [ChartDataLabels]
  };

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
    let dataset = {};
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
  let heightOffset;
  if (isScreenshotModeEnabled) {
    heightOffset = 150;
  } else {
    heightOffset = homeLink.parentNode.parentNode.offsetHeight + 205;
    if (isWidthEnoughForFilterAsButtons())
      heightOffset += 10;
    if (hintsDiv != null)
      heightOffset += Math.min(hintsDiv.offsetHeight, maxHintsHeight) + 14;
  }
  let widthOffset;
  if (isScreenshotModeEnabled)
    widthOffset = 70;
  else
    widthOffset = 10;
  let wantedWith = Math.min(window.innerWidth - widthOffset, (window.innerHeight - heightOffset) / heightRatio);
  if (!isSingleChart) {
    wantedWith = wantedWith / 2.33;
    wantedWith = Math.min(wantedWith, maxWidthMultiChart);
  }
  if (isScreenshotModeEnabled)
    wantedWith = Math.min(wantedWith, 1000);
  const width = Math.max(wantedWith, minWidth);
  const height = Math.max(width * heightRatio, minHeight);
  element.style.width = width + "px";
  element.style.height = height + "px";
}

function addScreenshotModeButton(parent) {
  const button = document.createElement("A");
  button.href = "#";
  button.appendChild(document.createTextNode("Screenshot Mode"));
  button.classList.add("export");
  button.classList.add("screenshotModeButton");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    isScreenshotModeEnabled = true;
    renderPage();
  });
  parent.appendChild(button);
}

function getChartSeriesColors(chartConfig, chartData) {
  let result = [];
  // assign static colors
  let seriesIndexesWithDynamicColor = [];
  for (const i in chartData.series) {
    const seriesName = chartData.series[i].name;
    if (seriesName == db.totalSeriesName || seriesName == "Other")
      result.push("#000000");
    else {
      let colorIndex = colorIndexByCompanyGroup[seriesName];
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
  let dynamicColorSeriesIndex = 0;
  for (const i in colorSet) {
    const color = colorSet[i];
    if (result.includes(color))
      continue;
    result[seriesIndexesWithDynamicColor[dynamicColorSeriesIndex]] = color;
    dynamicColorSeriesIndex++;
    if (dynamicColorSeriesIndex == seriesIndexesWithDynamicColor.length)
      return result;
  }
  let colorIndex = 0;
  while (dynamicColorSeriesIndex < seriesIndexesWithDynamicColor.length) {
    result[seriesIndexesWithDynamicColor[dynamicColorSeriesIndex]] = colorSet[colorIndex % colorSet.length];
    dynamicColorSeriesIndex++;
    colorIndex++;
  }
  return result;
}

function renderTable(chartConfig, chartDiv, chartData) {
  let horizontalBarMaxValue = 0;
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
  exportButton.href = "#";
  exportButton.appendChild(document.createTextNode(format));
  exportButton.classList.add("export");
  exportButton.title = "Export table as " + format;
  exportButton.addEventListener("click", function(event) {
    event.preventDefault();
    let containerDiv = document.getElementById(containerDivId);
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
  let result = "";
  for (let i = 0; i < rows.length; i++) {
    if (i > 0)
      result += "\n";
    const columns = rows[i].childNodes;
    for (let j = 0; j < columns.length; j++) {
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
  let result = "{| class=\"wikitable sortable\" style=\"text-align:right;\"\n";
  for (let i = 0; i < rows.length; i++) {
    result += "|-\n";
    const columns = rows[i].childNodes;
    for (let j = 0; j < columns.length; j++) {
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
    let text = db.formatSeriesNameAndCategory(series.name);
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
      if (category != "Other" && !category.endsWith("|other"))
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
  let index = 1;
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
  // add TD
  const cell = document.createElement("TD");
  cell.style.maxWidth = Math.max(100, window.innerWidth - 170) + "px";
  row.appendChild(cell);

  // check column title
  let addFlag = false;
  let countryCode;
  if (columnTitle == "Country") {
    addFlag = true;
    const countryId = db.countryNamesReverse[text];
    countryCode = db.countriesCodes[countryId];
  } else if (columnTitle == "Company" || columnTitle == "Brand") {
    addFlag = true;
    countryCode = getCountryCodeForCompanyOrBrand(text);
  } else if (columnTitle == "Model") {
    addFlag = true;
    const parts = text.split("|", 2);
    const brand = parts[0];
    countryCode = getCountryCodeForCompanyOrBrand(brand);
  }

  // set link url
  let hasLink = false;
  let newChartConfig = db.cloneObject(chartConfig);
  if (addFlag && text != "Other" && !text.endsWith("|other")) {
    hasLink = true;
    const textParts = text.split("|", 2);
    if (textParts.length > 1) {
      newChartConfig.company = db.urlEncode(db.companiesByBrand[textParts[0]]);
      newChartConfig.brand = db.urlEncode(textParts[0]);
      newChartConfig.model = db.urlEncode(textParts[1]);
      newChartConfig.detailLevel = db.detailLevels.model;
    } else {
      const countryId = db.countryNamesReverse[text];
      if (countryId != null) {
        newChartConfig.country = db.countriesCodes[countryId];
      } else if (text in companyGroups) {
        newChartConfig.company = db.urlEncode(text);
      } else {
        newChartConfig.company = db.urlEncode(db.companiesByBrand[text]);
        newChartConfig.brand = db.urlEncode(text);
        newChartConfig.detailLevel = db.detailLevels.brand;
      }
    }
    if (!db.isTimeXProperty(newChartConfig)) {
      newChartConfig.xProperty = "";
      newChartConfig.timeSpan = "";
    }
    newChartConfig.view = null;
    db.applyNewDefaultOptions(newChartConfig, chartConfig);
  } else if (columnTitle == "Year") {
    hasLink = true;
    newChartConfig.xProperty = db.xProperties.month;
    newChartConfig.timeSpan = "y" + text;
  } else if (columnTitle == "Quarter") {
    hasLink = true;
    newChartConfig.xProperty = db.xProperties.month;
    newChartConfig.timeSpan = db.unformatQuarter(text);
  } else if (columnTitle == "Month") {
    hasLink = true;
    if (chartConfig.metric == db.metrics.salesAll)
      newChartConfig.xProperty = db.xProperties.company;
    else {
      newChartConfig.xProperty = db.xProperties.model;
      newChartConfig.metric = db.metrics.salesElectric;
    }
    newChartConfig.timeSpan = "m" + text;
  }

  // add cell content
  let containerElement;
  if (hasLink)
    containerElement = createLinkToHash(db.encodeChartConfig(newChartConfig));
  else
    containerElement = document.createElement("SPAN");
  cell.appendChild(containerElement);
  if (addFlag)
    containerElement.appendChild(createCountryFlagContainer(countryCode, db.formatSeriesNameAndCategory(text), true));
  else
    containerElement.appendChild(document.createTextNode(db.formatSeriesNameAndCategory(text)));
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

  let entries = [];
  for (const text in chartData.sources) {
    let prefix = "";
    const sourceInfo = chartData.sources[text];
    if (db.isMultiCountry(chartConfig)) {
      prefix += db.countryNames[sourceInfo.country];
      prefix += " ";
    }
    prefix += sourceInfo.firstDate;
    let sortKey = prefix;
    if (sourceInfo.lastDate != sourceInfo.firstDate) {
      prefix += "–";
      prefix += sourceInfo.lastDate;
    }
    if ([db.metrics.ratioElectric, db.metrics.ratioElectricWithinCompanyOrBrand].includes(chartConfig.metric)) {
      if (sourceInfo.dsType == db.dsTypes.AllCarsByBrand) {
        prefix += " All cars";
        sortKey += "0";
      } else {
        prefix += " EVs";
        sortKey += "1";
      }
    }
    let entry = {};
    entry.prefix = prefix;
    entry.text = text;
    entry.sortKey = sortKey;
    entries.push(entry);
  }

  entries.sort(function(a, b) {
    return a.sortKey.localeCompare(b.sortKey);
  });

  const ol = document.createElement("UL");
  sourcesDiv.appendChild(ol);
  for (const i in entries) {
    const entry = entries[i];
    const li = document.createElement("LI");
    ol.appendChild(li);
    li.appendChild(document.createTextNode(entry.prefix + ": "));
    {
      const parts = entry.text.split(" ");
      for (const i in parts) {
        let part = parts[i];
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

function getCountryCodeForCompanyOrBrand(companyOrBrand) {
  let countryCode = brandCountries[companyOrBrand];
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

  // create container and placeholder
  const container = document.createElement("SPAN");
  const flag = document.createElement("SPAN");
  flag.classList.add("flag");
  if (countryCode || inTable) {
    flag.style.width = countryFlagWidth + "px";
    flag.style.height = countryFlagHeight + "px";
  }
  container.appendChild(flag);

  // set flag
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
  container.appendChild(textSpan);

  return container;
}

function renderStatusPage() {
  // title
  const titleElem = document.createElement("DIV");
  dynamicContent.appendChild(titleElem);
  titleElem.classList.add("chartTitle");
  titleElem.appendChild(document.createTextNode("Status"));

  // set active tab
  const tabs =
  { "status": "Countries"
  , "status:companies": "Companies and Brands"
  , "status:models": "EV Models"
  };
  if (!(currentHash in tabs))
    currentHash = Object.keys(tabs)[0];

  // tab buttons
  const tabButtonsDiv = document.createElement("DIV");
  dynamicContent.appendChild(tabButtonsDiv);
  tabButtonsDiv.classList.add("tabButtons");
  for (const hash in tabs) {
    let element;
    if (hash == currentHash)
      element = document.createElement("DIV");
    else
      element = createLinkToHash(hash);
    tabButtonsDiv.appendChild(element);
    element.appendChild(document.createTextNode(tabs[hash]));
  }

  // content
  if (currentHash == "status")
    renderCountriesStatusPage();
  else if (currentHash == "status:companies")
    renderCompaniesStatusPage();
  else if (currentHash == "status:models")
    renderModelsStatusPage();
}

function renderCountriesStatusPage() {
  const table = document.createElement("TABLE");
  dynamicContent.appendChild(table);
  const tr = document.createElement("TR");
  table.appendChild(tr);
  const columns = ["Country", "Available Data", "Interval", "All Car Data", "EV Data", "Annual Car Market", "Annual EV Market", "Relative EV Sales"];
  for (const i in columns) {
    const th = document.createElement("TH");
    tr.appendChild(th);
    th.appendChild(document.createTextNode(columns[i]));
  }
  for (const i in db.countriesWithData) {
    const countryId = db.countriesWithData[i];
    const countryCode = db.countriesCodes[countryId];
    const countryName = db.countryNames[countryId];
    // collect data from the first dataset
    let firstMonthString = "";
    for (const j in db.datasets) {
      const dataset = db.datasets[j];
      if (dataset.country != countryId)
        continue;
      firstMonthString = dataset.monthString;
      break;
    }
    // collect data from the latest datasets
    let lastPerQuarter = false;
    let latestAllCarsDataset = null;
    let latestEvDataset = null;
    let oldEvDataset = null;
    let monthCount = 0;
    for (let j = db.datasets.length - 1; j >= 0; j--) {
      const dataset = db.datasets[j];
      if (dataset.country != countryId)
        continue;
      if (dataset.dsType == db.dsTypes.AllCarsByBrand) {
        if (latestAllCarsDataset == null) {
          latestAllCarsDataset = dataset;
          lastPerQuarter = dataset.perQuarter;
        }
      } else {
        if (latestEvDataset == null)
          latestEvDataset = dataset;
        monthCount++;
        if (monthCount == 6) {
          oldEvDataset = dataset;
          break;
        }
      }
    }
    // collect data from the latest 12 datasets
    let allCarSalesSum = 0;
    let evSalesSum = 0;
    let salesMonthCount = 0;
    for (let j = db.datasets.length - 1; j >= 0; j--) {
      const dataset = db.datasets[j];
      if (dataset.country != countryId)
        continue;
      for (const dataKey in dataset.data) {
        if (dataset.dsType == db.dsTypes.AllCarsByBrand)
          allCarSalesSum = allCarSalesSum + dataset.data[dataKey];
        else
          evSalesSum = evSalesSum + dataset.data[dataKey];
      }
      if (dataset.dsType == db.dsTypes.AllCarsByBrand)
        salesMonthCount++;
      if (salesMonthCount == 12)
        break;
    }
    const allCarSalesPerYear = allCarSalesSum / salesMonthCount * 12;
    const evSalesPerYear = evSalesSum / salesMonthCount * 12;
    const tr = document.createElement("TR");
    table.appendChild(tr);
    // name
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      const a = createLinkToHash(db.encodeChartConfig({"country": countryCode, "metric": db.metrics.all}));
      td.appendChild(a);
      a.appendChild(createCountryFlagContainer(countryCode, countryName, true));
    }
    // available data
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      td.appendChild(document.createTextNode(firstMonthString + " – " + latestAllCarsDataset.monthString));
      td.style.textAlign = "center";
    }
    // interval
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      if (lastPerQuarter)
        td.appendChild(document.createTextNode("Quarter"));
      else
        td.appendChild(document.createTextNode("Month"));
    }
    // all car data
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      if (Object.keys(latestAllCarsDataset.data).length > 1)
        td.appendChild(document.createTextNode("By brand"));
      else
        td.appendChild(document.createTextNode("Total only"));
    }
    // ev data
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      if (latestEvDataset) {
        let text = getEvDetailednessText(latestEvDataset);
        if (oldEvDataset != null) {
          const oldText = getEvDetailednessText(oldEvDataset);
          if (oldText != text)
            text = oldText + " / " + text;
        }
        td.appendChild(document.createTextNode(text));
        if (latestEvDataset.source.includes("Incomplete")) {
          const span = document.createElement("SPAN");
          span.title = latestEvDataset.source;
          span.appendChild(document.createTextNode(", incomplete"));
          td.appendChild(span);
        }
      }
    }
    // car market size
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      td.appendChild(document.createTextNode(formatIntForStatusTable(allCarSalesPerYear)));
      td.style.textAlign = "right";
    }
    // ev market size
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      td.appendChild(document.createTextNode(formatIntForStatusTable(evSalesPerYear)));
      td.style.textAlign = "right";
    }
    // relative ev sales
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      const val = evSalesPerYear / allCarSalesPerYear * 100;
      td.appendChild(document.createTextNode(val.toFixed(1).toLocaleString() + " %"));
      td.style.textAlign = "right";
    }
  }
}

function getEvDetailednessText(dataset) {
  let modelCount = 0;
  for (const key in dataset.data) {
    if (key.includes("|") && !key.endsWith("|other"))
      modelCount++;
  }
  if (modelCount >= 50)
    return "Top 50 models";
  if (modelCount >= 20)
    return "Top 20 models";
  if (modelCount >= 10)
    return "Top 10 models";
  if (modelCount >= 1)
    return "By brand + some models";
  if (Object.keys(dataset.data).length > 1)
    return "By brand";
  return "Total only";
}

function renderCompaniesStatusPage() {
  const table = document.createElement("TABLE");
  dynamicContent.appendChild(table);
  {
    const tr = document.createElement("TR");
    table.appendChild(tr);
    const columns = ["Company", "Brand", "Available Data", "Annual All Cars Sales", "Annual EV Sales"];
    for (const i in columns) {
      const th = document.createElement("TH");
      tr.appendChild(th);
      th.appendChild(document.createTextNode(columns[i]));
    }
  }
  for (const i in db.companies) {
    const company = db.companies[i];
    if (company == "other")
      continue;
    const firstTr = document.createElement("TR");
    table.appendChild(firstTr);
    // company
    const companyTd = document.createElement("TD");
    firstTr.appendChild(companyTd);
    {
      const countryCode = getCountryCodeForCompanyOrBrand(company);
      const a = createLinkToHash(db.encodeChartConfig({"metric": db.metrics.salesElectric, "company": db.urlEncode(company)}));
      companyTd.appendChild(a);
      a.appendChild(createCountryFlagContainer(countryCode, company, true));
    }
    // brands
    if (company in companyGroups) {
      const brands = companyGroups[company];
      companyTd.rowSpan = brands.length;
      let tr = firstTr;
      for (const j in brands) {
        const td = document.createElement("TD");
        tr.appendChild(td);
        const brand = brands[j];
        const countryCode = getCountryCodeForCompanyOrBrand(brand);
        let newChartConfig = {};
        newChartConfig.metric = db.metrics.salesElectric;
        newChartConfig.company = db.urlEncode(company);
        newChartConfig.brand = db.urlEncode(brand);
        newChartConfig.detailLevel = db.detailLevels.brand;
        const a = createLinkToHash(db.encodeChartConfig(newChartConfig));
        td.appendChild(a);
        a.appendChild(createCountryFlagContainer(countryCode, brand, true));
        addBrandOrModelAvailableDataTimeSpanTd(tr, brand);
        addAnnualSalesTd(tr, false, brand);
        addAnnualSalesTd(tr, true, brand);
        if (j < brands.length - 1) {
          tr = document.createElement("TR");
          table.appendChild(tr);
        }
      }
    } else {
      companyTd.colSpan = 2;
      addBrandOrModelAvailableDataTimeSpanTd(firstTr, company);
      addAnnualSalesTd(firstTr, false, company);
      addAnnualSalesTd(firstTr, true, company);
    }
  }
}

function renderModelsStatusPage() {
  const table = document.createElement("TABLE");
  dynamicContent.appendChild(table);
  {
    const tr = document.createElement("TR");
    table.appendChild(tr);
    const columns = ["Brand", "Model", "Available Data", "Annual EV Sales"];
    for (const i in columns) {
      const th = document.createElement("TH");
      tr.appendChild(th);
      th.appendChild(document.createTextNode(columns[i]));
    }
  }
  for (const i in db.brands) {
    const brand = db.brands[i];
    if (brand == "other")
      continue;
    let models = [];
    for (const j in db.models) {
      const parts = db.models[j].split("|", 2);
      if (parts[0] != brand)
        continue;
      if (parts[1] == "other")
        continue;
      models.push(parts[1]);
    }
    if (models.length == 0)
      continue;
    const firstTr = document.createElement("TR");
    table.appendChild(firstTr);
    // brand
    const brandTd = document.createElement("TD");
    firstTr.appendChild(brandTd);
    {
      const countryCode = getCountryCodeForCompanyOrBrand(brand);
      const span = document.createElement("SPAN");
      brandTd.appendChild(span);
      span.appendChild(createCountryFlagContainer(countryCode, brand, true));
    }
    // models
    brandTd.rowSpan = models.length;
    let tr = firstTr;
    for (let j = 0; j < models.length; j++) {
      const model = models[j];
      const td = document.createElement("TD");
      tr.appendChild(td);
      let newChartConfig = {};
      newChartConfig.metric = db.metrics.salesElectric;
      newChartConfig.company = db.urlEncode(db.companiesByBrand[brand]);
      newChartConfig.brand = db.urlEncode(brand);
      newChartConfig.model = db.urlEncode(model);
      newChartConfig.detailLevel = db.detailLevels.model;
      const a = createLinkToHash(db.encodeChartConfig(newChartConfig));
      td.appendChild(a);
      a.appendChild(document.createTextNode(model));
      addBrandOrModelAvailableDataTimeSpanTd(tr, brand, model);
      addAnnualSalesTd(tr, true, brand, brand + "|" + model);
      if (j < models.length - 1) {
        tr = document.createElement("TR");
        table.appendChild(tr);
      }
    }
  }
}

function addBrandOrModelAvailableDataTimeSpanTd(tr, brand, model = null) {
  let firstMonthString = "";
  let lastMonthString = "";
  for (const j in db.datasets) {
    const dataset = db.datasets[j];
    if (model != null && dataset.dsType == db.dsTypes.AllCarsByBrand)
      continue;
    if (firstMonthString != "" && dataset.monthString >= firstMonthString && lastMonthString != "" && dataset.monthString <= lastMonthString)
      continue;
    for (const key in dataset.data) {
      const parts = key.split("|", 2);
      if (parts[0] != brand)
        continue;
      if (model != null && parts[1] != model)
        continue;
      if (firstMonthString == "" || dataset.monthString < firstMonthString)
        firstMonthString = dataset.monthString;
      if (lastMonthString == "" || dataset.monthString > lastMonthString)
        lastMonthString = dataset.monthString;
      break;
    }
  }
  const td = document.createElement("TD");
  tr.appendChild(td);
  td.appendChild(document.createTextNode(firstMonthString + " – " + lastMonthString));
  td.style.textAlign = "center";
}

function addAnnualSalesTd(tr, onlyEvs, brand, brandAndModel = null) {
  let total = 0;
  for (const i in db.countriesWithData) {
    const curCountryId = db.countriesWithData[i];
    let sum = 0;
    let monthCount = 0;
    for (let j = db.datasets.length - 1; j >= 0; j--) {
      const dataset = db.datasets[j];
      if ((dataset.dsType != db.dsTypes.AllCarsByBrand) != onlyEvs)
        continue;
      if (dataset.country != curCountryId)
        continue;
      for (const dataKey in dataset.data) {
        if (!onlyEvs) {
          if (dataKey != brand)
            continue;
        } else if (brandAndModel != null) {
          if (dataKey != brandAndModel)
            continue;
        } else {
          const dataKeyParts = dataKey.split("|", 2);
          if (dataKeyParts[0] != brand)
            continue;
        }
        sum = sum + dataset.data[dataKey];
      }
      monthCount++;
      if (monthCount == 12)
        break;
    }
    if (monthCount != 0)
      total = total + sum / monthCount * 12;
  }
  const td = document.createElement("TD");
  tr.appendChild(td);
  td.appendChild(document.createTextNode(formatIntForStatusTable(total)));
  td.style.textAlign = "right";
}

function formatIntForStatusTable(val) {
  if (val == 0)
    return "–";
  if (val > 10000)
    val = Math.round(val / 1000) * 1000;
  else if (val > 1000)
    val = Math.round(val / 100) * 100;
  return val.toLocaleString();
}
