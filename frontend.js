"use strict";

db.finalizeDataLoading();

document.addEventListener("mousedown", function(event) {
  document.body.classList.remove("showFocus");
});

document.addEventListener("keydown", function(event) {
  document.body.classList.add("showFocus");
  if (event.key.startsWith("Esc")) {
    if (isScreenshotModeEnabled) {
      isScreenshotModeEnabled = false;
      renderPage();
    } else if (openedDropdown != null) {
      closeDropdown();
    }
  }
});

document.addEventListener("click", function(event) {
  closeDropdown();
});

const dynamicContent = document.createElement("DIV");
document.body.appendChild(dynamicContent);

window.addEventListener("hashchange", function(event) {
  navigate();
});

window.addEventListener("resize", function(event) {
  if (navigator.userAgentData.mobile)
    return; // ignore resize event on mobile browsers, because they send it on scrolling
  renderPage();
});

const homeLink = document.getElementById("homeLink");
homeLink.href = location.pathname + location.search;
homeLink.addEventListener("click", function(event) {
  // re-render page without page reload
  event.preventDefault();
  history.pushState(null, null, location.pathname + location.search);
  navigate();
});

const maxHintsHeight = 75;
const tableFlagSizeFactor = 1.2;
const multiTitleFlagSizeFactor = 1.15;
const singleTitleFlagSizeFactor = 1.3;

var filtersDiv;
var chartsDiv;
var currentHash;
var isScreenshotModeEnabled;
var isSingleChart;
var chartSetConfig;
var chartConfigs;
var sortByName;
var hintsDiv;
var isHintsDivExpanded;
var currentExportFormat;
var openedDropdown;

const canvasContext = document.createElement("CANVAS").getContext("2d");

setGlobalChartOptions();
navigate();

function navigate(renderOnlyCharts = false) {
  currentHash = decodeURIComponent(location.hash.substr(1));
  isScreenshotModeEnabled = false;
  chartSetConfig = db.decodeChartConfigString(currentHash);
  chartConfigs = db.unfoldChartConfig(chartSetConfig);
  isSingleChart = chartConfigs.length == 1;
  sortByName = false;
  isHintsDivExpanded = false;
  currentExportFormat = null;

  if (renderOnlyCharts && chartsDiv != null) {
    updateFilters()
    renderCharts();
  } else {
    renderPage();
  }

  logVisit();
}

function navigateToHash(hash, renderOnlyCharts = false) {
  history.pushState(null, null, "#" + hash);
  navigate(renderOnlyCharts);
}

function logVisit() {
  if (location.hostname == "open-ev-charts.org") {
    let r = new XMLHttpRequest();
    r.open("GET", "https://webstats.open-ev-charts.org/?action=log&url=" + encodeURIComponent(location.href) + "&referrer=" + encodeURIComponent(document.referrer));
    r.send();
  }
}

function renderCharts() {
  // (Re-)render all charts until limit

  chartsDiv.innerHTML = "";

  renderMultiChartsHint();

  for (const chartIndex in chartConfigs) {
    if (chartIndex == getMaxVisibleCharts()) {
      // Prevent displaying of too many charts at once
      addShowAllChartsButton();
      break;
    }
    renderChart(chartIndex);
  }
}

function renderRemainingCharts() {
  // Render all charts after limit

  for (let chartIndex = getMaxVisibleCharts(); chartIndex < chartConfigs.length; chartIndex++)
    renderChart(chartIndex);
}

function renderMultiChartsHint() {
  if (isSingleChart)
    return;
  let unfoldParam = db.getUnfoldParam(chartSetConfig);
  if (!unfoldParam)
    return;
  const div = document.createElement("DIV");
  div.classList.add("multiChartsHint");
  div.appendChild(document.createTextNode("Choose a " + unfoldParam.title.toLowerCase()));
  chartsDiv.appendChild(div);
}

function renderPage() {
  // (Re-)render the full page

  dynamicContent.innerHTML = "";
  hintsDiv = null;
  chartsDiv = null;

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
    const exitButton = createLink();
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

  chartsDiv = document.createElement("DIV");
  dynamicContent.appendChild(chartsDiv);
  renderCharts();
}

function renderFilters() {
  filtersDiv = document.createElement("DIV");
  dynamicContent.appendChild(filtersDiv);
  filtersDiv.classList.add("filters");

  const params = db.getChartParams(chartSetConfig);
  for (const i in params) {
    const param = params[i];
    renderFilterAsDropdown(filtersDiv, param);
    if (param.breakLineAfterFilter && !isMobileScreenSize())
      filtersDiv.appendChild(document.createElement("BR"));
  }
}

function updateFilters() {
  // Updates the content of the dropdowns, except the one which is opened.

  const params = db.getChartParams(chartSetConfig);
  for (const i in params) {
    const param = params[i];
    const dropdown = document.getElementById(param.name);
    if (dropdown != null && !dropdown.classList.contains("opened"))
      renderDropdownContent(param, dropdown);
  }
}

function isMobileScreenSize() {
  return window.innerWidth < 800;
}

function renderFilterAsDropdown(parentDiv, param) {
  // Calculate width
  let width = 40;
  for (const optionKey in param.allOptions)
     width = Math.max(width, canvasContext.measureText(param.allOptions[optionKey]).width * 1.42 + 40);
  if (param.name == "country")
    width += 10;

  // Base element
  let dropdown = document.createElement("DIV");
  dropdown.id = param.name;
  dropdown.classList.add("dropdown");
  dropdown.style.width = width + "px";
  dropdown.setAttribute("tabIndex", "0");
  parentDiv.appendChild(dropdown);

  // Open/close click handler
  dropdown.addEventListener("click", function(event) {
    event.preventDefault();
    openOrCloseDropdown(param, dropdown);
    event.stopPropagation();
  });

  // Keyboard event handler
  dropdown.addEventListener("keydown", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
      if (openedDropdown != dropdown) {
        event.preventDefault();
        openOrCloseDropdown(param, dropdown);
      }
    } else if (event.keyCode == 38 || event.keyCode == 40) {
      if (openedDropdown == dropdown && document.activeElement) {
        event.preventDefault();
        let base = document.activeElement;
        if (param.allowMultiSelection)
          base = base.parentNode;
        if (event.keyCode == 38 && base.previousSibling) {
          let toFocus = base.previousSibling;
          if (param.allowMultiSelection && toFocus.firstChild.disabled)
            toFocus = toFocus.previousSibling;
          toFocus.focus();
        } else if (event.keyCode == 40 && base.nextSibling) {
          let toFocus = base.nextSibling;
          if (param.allowMultiSelection && toFocus.firstChild.disabled)
            toFocus = toFocus.nextSibling;
          toFocus.focus();
        }
      }
    }
  });

  renderDropdownContent(param, dropdown);
}

function renderDropdownContent(param, dropdown) {
  // Updates the dropdown visibility, and (if needed) (re-)renders the dropdown content.

  if (!param.showAsFilter) {
    dropdown.style.display = "none";
    return;
  }
  dropdown.style.display = "";
  dropdown.innerHTML = "";

  // Current value container
  let currentValueDiv = document.createElement("DIV");
  currentValueDiv.classList.add("currentValue");
  currentValueDiv.title = param.title;
  dropdown.appendChild(currentValueDiv);

  // Overlay
  let overlay = document.createElement("DIV");
  overlay.classList.add("overlay");
  dropdown.appendChild(overlay);

  // Search function
  if (param.enableDropdownSearch && Object.keys(param.allOptions).length > 13) {
    let searchDiv = document.createElement("DIV");
    searchDiv.classList.add("search");
    overlay.appendChild(searchDiv);
    searchDiv.addEventListener("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
    });

    let searchBox = document.createElement("INPUT");
    searchBox.type = "text";
    searchBox.title = "Search " + param.title;
    searchDiv.appendChild(searchBox);

    let noSearchResultsDiv = document.createElement("DIV");
    noSearchResultsDiv.classList.add("noResults");
    noSearchResultsDiv.appendChild(document.createTextNode("No search results"));
    noSearchResultsDiv.style.display = "none";
    searchDiv.appendChild(noSearchResultsDiv);

    searchBox.addEventListener("input", function(event) {
      updateDropdownSearchResults(overlay, searchBox, noSearchResultsDiv);
    });
  }

  renderDropdownOptions(param, dropdown, currentValueDiv, overlay);

  updateDropdownState(param.name, dropdown, currentValueDiv, overlay);
}

function renderDropdownOptions(param, dropdown, currentValueDiv, overlay) {
  const selectedKey = chartSetConfig[param.name];
  const selectedKeys = selectedKey.split(",");
  for (const optionKey in param.allOptions) {
    let optionNode;
    if (param.allowMultiSelection)
      optionNode = document.createElement("LABEL");
    else
      optionNode = createLink();
    overlay.appendChild(optionNode);
    const selected = selectedKeys.includes(optionKey);
    if (selected)
      optionNode.classList.add("selected");
    if (param.allowMultiSelection) {
      let checkbox = document.createElement("INPUT");
      checkbox.type = "checkbox";
      checkbox.value = optionKey;
      checkbox.checked = selected;
      checkbox.addEventListener("click", function(event) {
        paramOptionClickHandler(param, optionKey, true, true);
        updateDropdownState(param.name, dropdown, currentValueDiv, overlay);
        event.stopPropagation();
      });
      checkbox.addEventListener("keydown", function(event) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          if (!optionNode.classList.contains("disabled")) {
            event.preventDefault();
            paramOptionClickHandler(param, optionKey, true, true);
            updateDropdownState(param.name, dropdown, currentValueDiv, overlay);
            event.stopPropagation();
          }
        }
      });
      optionNode.appendChild(checkbox);
    }
    let optionText = param.allOptions[optionKey];
    if (param.name == "country") {
      optionNode.appendChild(createCountryFlagContainer(optionKey, optionText, false));
      optionNode.dataset.searchText = optionText + " " + optionKey + " " + additionalCountrySearchTextByCode[optionKey];
    } else {
      optionNode.appendChild(document.createTextNode(optionText));
      optionNode.dataset.searchText = optionText;
    }
    optionNode.addEventListener("click", function(event) {
      event.preventDefault();
      if (!optionNode.classList.contains("disabled"))
        paramOptionClickHandler(param, optionKey);
      event.stopPropagation();
    });
    optionNode.addEventListener("keydown", function(event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        if (!optionNode.classList.contains("disabled"))
          paramOptionClickHandler(param, optionKey);
      }
    });
  }
}

function updateDropdownState(paramName, dropdown, currentValueDiv, overlay) {
  const params = db.getChartParams(chartSetConfig);
  const param = params[paramName];
  const selectedKey = chartSetConfig[param.name];
  const selectedKeys = selectedKey.split(",");

  // Update 'active' state
  if ((selectedKey != param.unfoldKey && selectedKey != param.defaultOption) || param.showAlwaysAsActive)
    dropdown.classList.add("active");
  else
    dropdown.classList.remove("active");

  // Update current value
  currentValueDiv.innerHTML = "";
  let selectedOptionTexts = [];
  if (param.name == "country") {
    for (const optionKey in param.allOptions) {
      if (selectedKeys.includes(optionKey)) {
        currentValueDiv.appendChild(createCountryFlagContainer(optionKey, "", false));
        if (selectedKeys.length == 1 || !db.countries[optionKey])
          selectedOptionTexts.push(param.allOptions[optionKey]);
      }
    }
  } else {
    for (const optionKey in param.allOptions) {
      if (selectedKeys.includes(optionKey))
        selectedOptionTexts.push(param.allOptions[optionKey]);
    }
  }
  currentValueDiv.appendChild(document.createTextNode(selectedOptionTexts.join(", ")));

  // Update options disabled and checked state
  if (param.allowMultiSelection) {
    const optionKeys = Object.keys(param.allOptions);
    let optionIndex = 0;
    for (let i = 0; i < overlay.childNodes.length; i++) {
      const optionNode = overlay.childNodes[i];
      if (!["LABEL", "A"].includes(optionNode.tagName))
        continue;
      const optionKey = optionKeys[optionIndex];
      const checkbox = optionNode.firstChild;
      const disabled = param.options[optionKey] == null;
      checkbox.disabled = disabled;
      if (disabled) {
        checkbox.checked = false;
        optionNode.classList.add("disabled");
      } else {
        optionNode.classList.remove("disabled");
        checkbox.checked = selectedKeys.includes(optionKey);
      }
      optionIndex++;
    }
  }
}

function updateDropdownSearchResults(overlay, searchBox, noSearchResultsDiv) {
  const searchTerm = db.normalizeSearchString(searchBox.value.trim());
  let resultCount = 0;
  for (let i = 0; i < overlay.childNodes.length; i++) {
    const optionNode = overlay.childNodes[i];
      if (!["LABEL", "A"].includes(optionNode.tagName))
        continue;
    if (searchTerm == "" || db.normalizeSearchString(optionNode.dataset.searchText).indexOf(searchTerm) != -1) {
      optionNode.style.display = "";
      resultCount++;
    } else {
      optionNode.style.display = "none";
    }
  }
  if (resultCount > 0)
    noSearchResultsDiv.style.display = "none";
  else
    noSearchResultsDiv.style.display = "";
}

function openOrCloseDropdown(param, dropdown) {
  if (openedDropdown == dropdown)
    closeDropdown()
  else if (openedDropdown != dropdown) {
    closeDropdown();
    renderDropdownContent(param, dropdown);
    dropdown.classList.add("opened");
    openedDropdown = dropdown;
    let node = dropdown.childNodes[1].firstChild;
    if (node.tagName == "DIV")
      node.firstChild.focus();
    else
      node.focus();
  }
}

function closeDropdown() {
  if (openedDropdown != null) {
    openedDropdown.classList.remove("opened");
    openedDropdown.focus()
    openedDropdown = null;
  }
}

function paramOptionClickHandler(param, optionKey, isSelectionAdditive = false, renderOnlyCharts = false) {
  const isOptionAdditive = param.additiveOptions && param.additiveOptions.includes(optionKey);
  const isMultiSelectOption = !param.noMultiSelectOptions || !param.noMultiSelectOptions.includes(optionKey);
  let newChartConfig = db.cloneObject(chartSetConfig);
  if (param.allowMultiSelection && isMultiSelectOption && (isSelectionAdditive || isOptionAdditive)) {
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
  navigateToHash(db.encodeChartConfig(chartSetConfig), renderOnlyCharts);

  // Focus the dropdown again
  if (!renderOnlyCharts) {
    const dropdown = document.getElementById(param.name);
    if (dropdown) {
      dropdown.focus();
      closeDropdown();
    }
  }
}

function renderChart(chartIndex) {
  const originalChartConfig = chartConfigs[chartIndex];
  const chartConfig = db.getDisplayChartConfig(originalChartConfig);
  const params = db.getChartParams(chartConfig);
  const chartData = db.queryChartData(chartConfig, sortByName, isSingleChart);
  const hasData = chartData.series.length > 0;

  let chartDiv;
  if (isSingleChart || !hasData || ![db.views.barChart, db.views.lineChart].includes(chartConfig.view))
    chartDiv = document.createElement("DIV");
  else {
    chartDiv = createLink(db.encodeChartConfig(originalChartConfig));
    if (chartConfig != originalChartConfig)
      chartDiv.title = "Click to view charts";
    else
      chartDiv.title = "Click to view chart";
  }
  chartsDiv.appendChild(chartDiv);
  chartDiv.dataChartIndex = chartIndex;
  chartDiv.classList.add("chartTile");
  if (isSingleChart)
    chartDiv.classList.add("single");

  renderChartTitle(chartDiv, originalChartConfig);
  renderChartSubTitle(chartDiv, chartConfig);

  if ((isSingleChart || chartConfig.view != params.view.defaultOption) && !isScreenshotModeEnabled)
    renderChartTabButtons(chartDiv);

  if (!hasData) {
    const div = document.createElement("DIV");
    chartDiv.appendChild(div);
    div.appendChild(document.createTextNode("No data available"));
    div.classList.add("noData");
    const chartSize = getChartSize();
    div.style.width = chartSize[0] + "px";
  } else {
    if (isSingleChart && chartConfig.view != db.views.sources && !isScreenshotModeEnabled)
      renderHints(chartDiv, chartConfig, chartData);
    if ([db.views.barChart, db.views.lineChart].includes(chartConfig.view)) {
      renderChartView(chartConfig, chartData, chartDiv, false);
      if (chartConfig != originalChartConfig)
        renderChartTitle3dFrames(chartDiv);
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

function renderChartTitle3dFrames(chartDiv) {
  for (let i = 0; i < 2; i++) {
    let div = document.createElement("DIV");
    chartDiv.appendChild(div);
    div.classList.add("chartTile");
    div.style.position = "absolute";
    div.style.width = chartDiv.offsetWidth + "px";
    div.style.height = chartDiv.offsetHeight + "px";
    div.style.top = ((i * 5) - 7.5) + "px";
    div.style.left = ((i * 5) - 7.5) + "px";
    div.style.zIndex = -i - 1;
    div.style.opacity = (100 - (i + 1) * 15) + "%";
  }
}

function renderChartTitle(chartDiv, chartConfig) {
  let titleElem = document.createElement("DIV");
  chartDiv.appendChild(titleElem);
  titleElem.classList.add("chartTitle");

  const title = db.getChartTitle(chartConfig, isSingleChart);
  if (db.isMultiCountry(chartConfig))
    titleElem.appendChild(document.createTextNode(title));
  else {
    if (isSingleChart)
      titleElem.appendChild(createCountryFlagContainer(chartConfig.country, title, false, singleTitleFlagSizeFactor));
    else
      titleElem.appendChild(createCountryFlagContainer(chartConfig.country, title, false, multiTitleFlagSizeFactor));
  }

  if (!isSingleChart) {
    let removeButton = createButton();
    removeButton.classList.add("removeButton");
    removeButton.title = "Remove";
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
      let expandHintsButton = createLink();
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
      let collapseHintsButton = createLink();
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
    element = createLink(db.encodeChartConfig(newChartConfig));
  }
  tabButtonsDiv.appendChild(element);
  element.appendChild(document.createTextNode(title));
}

function chartRemoveClick(event) {
  event.preventDefault();

  let unfoldParam = db.getUnfoldParam(chartSetConfig);
  if (unfoldParam == null) // should never happen
    return;

  const chartDiv = event.target.parentNode;
  const chartConfig = chartConfigs[chartDiv.dataChartIndex];
  const valueToRemove = chartConfig[unfoldParam.name];

  let newValues = [];
  for (const i in chartConfigs) {
    const chartConfig = chartConfigs[i];
    const value = chartConfig[unfoldParam.name];
    if (value != valueToRemove && !newValues.includes(value))
      newValues.push(value);
  }

  chartSetConfig[unfoldParam.name] = newValues.join(",");
  navigateToHash(db.encodeChartConfig(chartSetConfig));
}

function addShowAllChartsButton() {
  const div = document.createElement("DIV");
  chartsDiv.appendChild(div);
  let button = createButton();
  div.appendChild(button);
  button.appendChild(document.createTextNode("More"));
  button.addEventListener("click", function(event) {
    event.preventDefault();
    button.parentNode.style.display = "none";
    renderRemainingCharts();
  });
}

function createLink(hash = "") {
  const a = document.createElement("A");
  a.href = "#" + hash;
  return a;
}

function createButton() {
  // Creates an A element which can be used as a button
  let button = createLink();
  button.classList.add("button");
  return button;
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
  Chart.defaults.plugins.legend.position = "bottom";
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.pointStyle = "rect";
  Chart.defaults.plugins.datalabels = {};
  Chart.defaults.plugins.datalabels.color = "white";
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
            color: "hsl(0, 0%, 85%)"
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
          display: isSingleChart && (chartData.series.length > 1 || chartData.series[0].name != "Value")
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

  if (isSingleChart) {
    Chart.defaults.font.size = 12;
    Chart.defaults.elements.line.borderWidth = 3.5;
    Chart.defaults.elements.point.radius = 3;
  } else {
    chartOptions.options.hover = {mode: null};
    chartOptions.options.plugins.tooltip.enabled = false;
    Chart.defaults.font.size = 11;
    Chart.defaults.elements.line.borderWidth = 2;
    Chart.defaults.elements.point.radius = 1.5;
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
  const chartSize = getChartSize();
  canvas.style.width = chartSize[0] + "px";
  canvas.style.height = chartSize[1] + "px";
  chartDiv.appendChild(canvas);

  return new Chart(canvas.getContext('2d'), chartOptions);
}

function getAvailableSizeForCharts() {
  let widthOffset;
  if (isMobileScreenSize()) {
    widthOffset = 10;
  } else {
    if (isScreenshotModeEnabled)
      widthOffset = 70;
    else
      widthOffset = 40;
  }
  let heightOffset;
  if (isScreenshotModeEnabled) {
    heightOffset = 150;
  } else {
    heightOffset = homeLink.parentNode.parentNode.offsetHeight + filtersDiv.offsetHeight + 85;
    if (hintsDiv != null)
      heightOffset += Math.min(hintsDiv.offsetHeight, maxHintsHeight) + 14;
  }
  return [window.innerWidth - widthOffset, window.innerHeight - heightOffset];
}

function getChartSize() {
  const heightRatio = 0.6;
  const minWidth = 260;
  const maxWidthMultiChart = 360;
  const maxWidthScreenshotMode = 1000;
  const availableSize = getAvailableSizeForCharts();
  let wantedWith = Math.min(availableSize[0], availableSize[1] / heightRatio);
  if (!isSingleChart) {
    wantedWith = wantedWith / 3.4;
    wantedWith = Math.min(wantedWith, maxWidthMultiChart);
  } else if (isScreenshotModeEnabled)
    wantedWith = Math.min(wantedWith, maxWidthScreenshotMode);
  const width = Math.max(wantedWith, minWidth);
  const height = Math.max(width * heightRatio, minWidth * heightRatio);
  return [width, height];
}

function getMaxVisibleCharts() {
  const availableSize = getAvailableSizeForCharts();
  const chartSize = getChartSize();
  const xCount = Math.max(Math.floor(availableSize[0] / (chartSize[0] + 40)), 1);
  const yCount = Math.max(Math.ceil(availableSize[1] / (chartSize[1] + 40)), 1)
  return Math.max(xCount * yCount, 4);
}

function addScreenshotModeButton(parent) {
  const button = createLink();
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
      result.push(otherSeriesColor);
    else {
      let colorIndex = colorIndexByCompanyOrBrand[seriesName];
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

  if (isSingleChart) {
    renderTableExportButton(chartDiv, table, "CSV");
    renderTableExportButton(chartDiv, table, "Wikitext");
    renderTableExport(chartDiv, table);
  }
}

function renderTableExportButton(chartDiv, table, format) {
  const exportButton = createLink();
  exportButton.appendChild(document.createTextNode(format));
  exportButton.classList.add("export");
  exportButton.title = "Export table as " + format;
  exportButton.addEventListener("click", function(event) {
    event.preventDefault();
    currentExportFormat = format;
    renderPage();
  });
  chartDiv.appendChild(exportButton);
}

function renderTableExport(chartDiv, table) {
  if (currentExportFormat == null)
    return;
  const textarea = document.createElement("TEXTAREA");
  textarea.classList.add("export");
  const rows = table.childNodes;
  if (currentExportFormat == "CSV")
    textarea.value = generateCsv(rows);
  else
    textarea.value = generateWikitext(rows);
  chartDiv.appendChild(textarea);
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
      newChartConfig.company = db.companiesByBrand[textParts[0]];
      newChartConfig.brand = textParts[0];
      newChartConfig.model = textParts[1];
      newChartConfig.detailLevel = db.detailLevels.model;
    } else {
      const countryId = db.countryNamesReverse[text];
      if (countryId != null) {
        newChartConfig.country = db.countriesCodes[countryId];
      } else if (text in companyGroups) {
        newChartConfig.company = text;
      } else {
        newChartConfig.company = db.companiesByBrand[text];
        newChartConfig.brand = text;
        newChartConfig.detailLevel = db.detailLevels.brand;
      }
    }
    if (!db.isTimeXProperty(newChartConfig)) {
      if ([db.timeSpanOptions.all, db.timeSpanOptions.auto].includes(chartConfig.timeSpan))
        newChartConfig.xProperty = db.xProperties.quarter;
      else
        newChartConfig.xProperty = db.xProperties.month;
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
    containerElement = createLink(db.encodeChartConfig(newChartConfig));
  else
    containerElement = document.createElement("SPAN");
  cell.appendChild(containerElement);
  if (addFlag)
    containerElement.appendChild(createCountryFlagContainer(countryCode, db.formatSeriesNameAndCategory(text), true, tableFlagSizeFactor));
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
      renderCharts();
    });
    cell.style.cursor = "pointer";
    cell.title = "Sort by this column";
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
      if (!sourceInfo.isEvs) {
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
    const parts = entry.text.split(" ");
    for (const j in parts) {
      let part = parts[j];
      if (j > 0)
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

function createCountryFlagContainer(countryCode, text, alwaysReserveSpace = false, sizeFactor = 1.0) {
  const countryFlagWidth = 20 * sizeFactor;
  const countryFlagHeight = 13.3 * sizeFactor;
  const countryFlagSpriteColumns = 5;
  const countryId = db.countries[countryCode];

  // create container and placeholder
  const container = document.createElement("SPAN");
  const flag = document.createElement("SPAN");
  flag.classList.add("flag");
  if (countryId || alwaysReserveSpace) {
    flag.style.width = countryFlagWidth + "px";
    flag.style.height = countryFlagHeight + "px";
    flag.style.marginRight = (countryFlagWidth * 0.2) + "px";
  }
  container.appendChild(flag);

  // set flag
  if (countryId) {
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
      element = createLink(hash);
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
  table.classList.add("countriesStatus");
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
    let isLastDatasetPerQuarter = false;
    let latestAllCarsDataset = null;
    let latestEvDataset = null;
    let oldEvDataset = null;
    let monthCount = 0;
    for (let j = db.datasets.length - 1; j >= 0; j--) {
      const dataset = db.datasets[j];
      if (dataset.country != countryId)
        continue;
      if (!dataset.isEvs) {
        if (latestAllCarsDataset == null) {
          latestAllCarsDataset = dataset;
          isLastDatasetPerQuarter = dataset.perQuarter;
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
    var monthsNewDataIsOverdue = 0;
    if (latestAllCarsDataset != null) {
      let date = new Date(latestAllCarsDataset.monthString);
      if (isLastDatasetPerQuarter)
        date.setMonth(date.getMonth() + 4);
      else
        date.setMonth(date.getMonth() + 2);
      monthsNewDataIsOverdue = (Date.now() - date) / 1000 / 60 / 60 / 24 / 30;
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
        if (!dataset.isEvs)
          allCarSalesSum = allCarSalesSum + dataset.data[dataKey];
        else
          evSalesSum = evSalesSum + dataset.data[dataKey];
      }
      if (!dataset.isEvs)
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
      let newChartConfig = {};
      newChartConfig.country = countryCode;
      newChartConfig.metric = db.metrics.all;
      if (isLastDatasetPerQuarter)
        newChartConfig.xProperty = db.xProperties.quarter;
      else
        newChartConfig.xProperty = db.xProperties.month;
      const a = createLink(db.encodeChartConfig(newChartConfig));
      td.appendChild(a);
      a.appendChild(createCountryFlagContainer(countryCode, countryName, true, tableFlagSizeFactor));
    }
    // available data
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      td.appendChild(document.createTextNode(firstMonthString));
      td.appendChild(document.createTextNode(" – "));
      if (latestAllCarsDataset != null) {
        const span = document.createElement("SPAN");
        span.appendChild(document.createTextNode(latestAllCarsDataset.monthString));
        span.classList.add("status");
        if (monthsNewDataIsOverdue > 2.5)
          span.classList.add("bad");
        else if (monthsNewDataIsOverdue > 1)
          span.classList.add("medium");
        else
          span.classList.add("good");
        td.appendChild(span);
      }
      td.style.textAlign = "center";
    }
    // interval
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      if (isLastDatasetPerQuarter)
        td.appendChild(document.createTextNode("Quarter"));
      else
        td.appendChild(document.createTextNode("Month"));
    }
    // all car data detailedness
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      if (latestAllCarsDataset != null) {
        const span = document.createElement("SPAN");
        span.classList.add("status");
        if (Object.keys(latestAllCarsDataset.data).length > 1) {
          span.appendChild(document.createTextNode("By brand"));
          span.classList.add("good");
        } else {
          span.appendChild(document.createTextNode("Total only"));
          span.classList.add("medium");
        }
        td.appendChild(span);
      }
    }
    // ev data detailedness
    {
      const td = document.createElement("TD");
      tr.appendChild(td);
      if (latestEvDataset) {
        let span = getEvDetailednessSpan(latestEvDataset);
        td.appendChild(span);
        if (oldEvDataset != null) {
          const oldSpan = getEvDetailednessSpan(oldEvDataset);
          if (oldSpan.classList.value != span.classList.value) {
            td.appendChild(document.createTextNode(" / "));
            td.appendChild(oldSpan);
          }
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

function getEvDetailednessSpan(dataset) {
  let modelCount = 0;
  for (const key in dataset.data) {
    if (key.includes("|") && !key.endsWith("|other"))
      modelCount++;
  }
  const span = document.createElement("SPAN");
  span.classList.add("status");
  if (modelCount >= 48) {
    span.appendChild(document.createTextNode("Top 50 models"));
    span.classList.add("good");
  } else if (modelCount >= 19) {
    span.appendChild(document.createTextNode("Top 20 models"));
    span.classList.add("good");
  } else if (modelCount >= 10) {
    span.appendChild(document.createTextNode("Top 10 models"));
    span.classList.add("medium");
  } else if (modelCount >= 1) {
    span.appendChild(document.createTextNode("By brand + some models"));
    span.classList.add("medium");
  } else if (Object.keys(dataset.data).length > 1) {
    span.appendChild(document.createTextNode("By brand"));
    span.classList.add("medium");
  } else {
    span.appendChild(document.createTextNode("Total only"));
    span.classList.add("medium");
  }
  return span;
}

function renderCompaniesStatusPage() {
  const table = document.createElement("TABLE");
  table.classList.add("companiesStatus");
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
      const a = createLink(db.encodeChartConfig({"metric": db.metrics.salesElectric, "company": company}));
      companyTd.appendChild(a);
      a.appendChild(createCountryFlagContainer(countryCode, company, true, tableFlagSizeFactor));
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
        newChartConfig.company = company;
        newChartConfig.brand = brand;
        newChartConfig.detailLevel = db.detailLevels.brand;
        const a = createLink(db.encodeChartConfig(newChartConfig));
        td.appendChild(a);
        a.appendChild(createCountryFlagContainer(countryCode, brand, true, tableFlagSizeFactor));
        addBrandOrModelAvailableDataTimeSpanTd(tr, brand);
        const allSales = getAnnualSales(false, brand);
        const evSales = getAnnualSales(true, brand);
        addAnnualSalesTd(tr, allSales, allSales < evSales);
        addAnnualSalesTd(tr, evSales);
        if (j < brands.length - 1) {
          tr = document.createElement("TR");
          table.appendChild(tr);
        }
      }
    } else {
      companyTd.colSpan = 2;
      addBrandOrModelAvailableDataTimeSpanTd(firstTr, company);
      const allSales = getAnnualSales(false, company);
      const evSales = getAnnualSales(true, company);
      addAnnualSalesTd(firstTr, allSales, allSales < evSales);
      addAnnualSalesTd(firstTr, evSales);
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
      span.appendChild(createCountryFlagContainer(countryCode, brand, true, tableFlagSizeFactor));
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
      newChartConfig.company = db.companiesByBrand[brand];
      newChartConfig.brand = brand;
      newChartConfig.model = model;
      newChartConfig.detailLevel = db.detailLevels.model;
      const a = createLink(db.encodeChartConfig(newChartConfig));
      td.appendChild(a);
      a.appendChild(document.createTextNode(model));
      addBrandOrModelAvailableDataTimeSpanTd(tr, brand, model);
      const sales = getAnnualSales(true, brand, brand + "|" + model);
      addAnnualSalesTd(tr, sales);
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
    if (model != null && !dataset.isEvs)
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

function getAnnualSales(onlyEvs, brand, brandAndModel = null) {
  let total = 0;
  for (const i in db.countriesWithData) {
    const curCountryId = db.countriesWithData[i];
    let sum = 0;
    let monthCount = 0;
    for (let j = db.datasets.length - 1; j >= 0; j--) {
      const dataset = db.datasets[j];
      if (dataset.isEvs != onlyEvs)
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
  return total;
}

function addAnnualSalesTd(tr, value, isIncomplete = false) {
  const td = document.createElement("TD");
  tr.appendChild(td);
  td.appendChild(document.createTextNode(formatIntForStatusTable(value)));
  td.style.textAlign = "right";
  if (isIncomplete) {
    td.classList.add("incomplete");
    td.title = "Incomplete";
  }
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
