"use strict";

const logOutput = document.createElement("DIV");
logOutput.style.display = "inline-block";
logOutput.style.textAlign = "left";
logOutput.style.marginTop = "5px";
document.body.appendChild(logOutput);

var allTests = [];
var currentTest = "";
var currentTestFailed = false;
var failedTests = 0;

function log(line, textColor = "") {
  const div = document.createElement("DIV");
  if (line == 0)
    div.innerHTML = "&nbsp;";
  else
    div.appendChild(document.createTextNode(line));
  div.style.color = textColor;
  logOutput.appendChild(div);
}

function showSummary() {
  if (failedTests > 0)
    log("");
  log(allTests.length + " tests executed.");
  if (allTests.length > 0 && failedTests == 0)
    log("All tests passed.", "green");
  else if (failedTests == 1)
    log("1 test failed.", "red");
  else if (failedTests > 1)
    log(failedTests + " tests failed.", "red");
}

function logError(msg) {
  if (!currentTestFailed) {
    if (failedTests > 0)
      log("");
    log("Test " + currentTest + ":");
    currentTestFailed = true;
    failedTests++;
  }
  log(msg, "red");
  console.error(msg);
}

function assert(value, expectedValue = true) {
  if (JSON.stringify(value) !== JSON.stringify(expectedValue))
    logError("Assertion failed: Expected " + JSON.stringify(expectedValue) + " but got " + JSON.stringify(value) + ".");
}

function runTest(name, func) {
  currentTest = name;
  currentTestFailed = false;
  if (allTests.includes(name)) {
    logError("Test name is not unique.");
    return;
  }
  allTests.push(name);
  func();
}

function completeChartConfig(chartConfig) {
  return db.decodeChartConfigString(db.encodeChartConfig(chartConfig));
}

function roundData(chartData) {
  for (const i in chartData.series) {
    for (const j in chartData.series[i].data) {
      chartData.series[i].data[j] = Math.round(chartData.series[i].data[j]);
    }
  }
}

try {

db.finalizeDataLoading();


// Test cases

runTest("finalizeDataLoading", function() {
  assert(db.countriesWithData.length, 3);
  assert(Object.keys(db.countries).length > 10);
  assert(Object.keys(db.countriesCodes).length, Object.keys(db.countries).length);
  assert(Object.keys(db.countryNames).length >= Object.keys(db.countries).length);
});

runTest("encodeChartConfig_1", function() {
  let chartConfig = {};
  chartConfig.country = "BR";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.xProperty = db.xProperties.month;
  chartConfig.timeSpan = "y2020";
  assert(db.encodeChartConfig(chartConfig), "BR:electric-sales:month:y2020");
});

runTest("decodeChartConfigString_1", function() {
  const chartConfig = db.decodeChartConfigString("BR:electric-sales:month:y2020");
  assert(chartConfig.country, "BR");
  assert(chartConfig.metric, db.metrics.salesElectric);
  assert(chartConfig.xProperty, db.xProperties.month);
  assert(chartConfig.timeSpan, "y2020");
});

runTest("queryChartData_month_1", function() {
  let chartConfig = {};
  chartConfig.country = "BR";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.xProperty = db.xProperties.month;
  chartConfig.timeSpan = "1y";
  chartConfig = completeChartConfig(chartConfig);
  const chartData = db.queryChartData(chartConfig);
  assert(chartData.categories.length, 12);
  assert(chartData.series.length, 1);
  assert(chartData.series[0].data.length, 12);
});

runTest("queryChartData_monthAvg12_2", function() {
  let chartConfig = {};
  chartConfig.country = "BR";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.xProperty = db.xProperties.monthAvg12;
  chartConfig.timeSpan = "1y";
  chartConfig = completeChartConfig(chartConfig);
  const chartData = db.queryChartData(chartConfig);
  assert(chartData.categories.length, 12);
  assert(chartData.series.length, 1);
  assert(chartData.series[0].data.length, 12);
});

runTest("home", function() {
  let chartConfig = db.decodeChartConfigString("");
  assert(db.needsUnfold(chartConfig));
  assert(db.unfoldChartConfig(chartConfig).length, 4);
});

runTest("unfoldMetric_all", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig = completeChartConfig(chartConfig);
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 6);
  for (let i in chartConfigs) {
    assert(chartConfigs[i].country, "DE");
    assert(chartConfigs[i].metric != db.metrics.all);
  }
});

runTest("unfoldMetric_2_1", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig.metric = [db.metrics.salesElectric, db.metrics.ratioElectric].join(",");
  chartConfig = completeChartConfig(chartConfig);
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 2);
  assert(chartConfigs[0].country, "DE");
  assert(chartConfigs[0].metric, db.metrics.salesElectric);
  assert(chartConfigs[1].country, "DE");
  assert(chartConfigs[1].metric, db.metrics.ratioElectric);
});

runTest("unfoldMetric_2_2", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig.metric = [db.metrics.salesElectric, db.metrics.salesAll].join(",");
  chartConfig.detailLevel = db.detailLevels.company;
  chartConfig = completeChartConfig(chartConfig);
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 2);
  assert(chartConfigs[0].country, "DE");
  assert(chartConfigs[0].metric, db.metrics.salesElectric);
  assert(chartConfigs[1].country, "DE");
  assert(chartConfigs[1].metric, db.metrics.salesAll);
});

runTest("unfoldMetric_2_3", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig.metric = [db.metrics.salesElectric, db.metrics.salesAll].join(",");
  chartConfig.xProperty = [db.xProperties.month, db.xProperties.monthAvg3].join(",");
  chartConfig = completeChartConfig(chartConfig);
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 2);
  assert(chartConfigs[0].country, "DE");
  assert(chartConfigs[0].metric, db.metrics.salesElectric);
  assert(chartConfigs[1].country, "DE");
  assert(chartConfigs[1].metric, db.metrics.salesAll);
});

runTest("compatibleMetrics", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig.metric = [db.metrics.salesElectric, db.metrics.salesAll].join(",");
  chartConfig = completeChartConfig(chartConfig);
  assert(!db.needsUnfold(chartConfig));
});


runTest("unfoldXProperty_all", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.xProperty = db.xProperties.all;
  chartConfig = completeChartConfig(chartConfig);
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 9);
  for (let i in chartConfigs) {
    assert(chartConfigs[i].xProperty != db.xProperties.all);
  }
});

runTest("unfoldXProperty_2", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.xProperty = [db.xProperties.month, db.xProperties.quarter].join(",");
  chartConfig = completeChartConfig(chartConfig);
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 2);
  assert(chartConfigs[0].country, "DE");
  assert(chartConfigs[0].metric, db.metrics.salesElectric);
  assert(chartConfigs[0].xProperty, db.xProperties.month);
  assert(chartConfigs[1].country, "DE");
  assert(chartConfigs[1].metric, db.metrics.salesElectric);
  assert(chartConfigs[1].xProperty, db.xProperties.quarter);
});

runTest("unfoldXProperty_all_oldEncoding", function() {
  let chartConfig = db.decodeChartConfigString("DE:electric-ratio:all");
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 6);
  for (let i in chartConfigs) {
    assert(chartConfigs[i].xProperty != db.xProperties.all);
  }
});

runTest("unfoldCountry_all", function() {
  let chartConfig = {};
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.detailLevel = db.detailLevels.company;
  chartConfig = completeChartConfig(chartConfig);
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 3);
});

runTest("unfoldCountry_2", function() {
  let chartConfig = {};
  chartConfig.country = ["BR", "DE"].join(",");
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.detailLevel = db.detailLevels.company;
  chartConfig = completeChartConfig(chartConfig);
  assert(db.needsUnfold(chartConfig));
  const chartConfigs = db.unfoldChartConfig(chartConfig);
  assert(chartConfigs.length, 2);
  assert(chartConfigs[0].country, "BR");
  assert(chartConfigs[0].metric, db.metrics.salesElectric);
  assert(chartConfigs[0].detailLevel, db.detailLevels.company);
  assert(chartConfigs[1].country, "DE");
  assert(chartConfigs[1].metric, db.metrics.salesElectric);
  assert(chartConfigs[1].detailLevel, db.detailLevels.company);
});

runTest("combineCountry_all_byCompany", function() {
  let chartConfig = {};
  chartConfig.country = "combine-countries";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.detailLevel = db.detailLevels.company;
  chartConfig = completeChartConfig(chartConfig);
  assert(!db.needsUnfold(chartConfig));
  const chartData = db.queryChartData(chartConfig);
  assert(chartData.series.length, 3);
});

runTest("combineCountry_all_total", function() {
  let chartConfig = {};
  chartConfig.country = "combine-countries";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig = completeChartConfig(chartConfig);
  assert(!db.needsUnfold(chartConfig));
  const chartData = db.queryChartData(chartConfig);
  assert(chartData.series.length, 1);
});

runTest("combineCountry_2", function() {
  let chartConfig = {};
  chartConfig.country = ["BR", "DE", "combine-countries"].join(",");
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.detailLevel = db.detailLevels.company;
  chartConfig = completeChartConfig(chartConfig);
  assert(!db.needsUnfold(chartConfig));
});

runTest("multipleMetrics_byYear_table", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig.xProperty = db.xProperties.year;
  chartConfig.timeSpan = "2y";
  chartConfig.view = db.views.table;
  chartConfig = completeChartConfig(chartConfig);
  assert(!db.needsUnfold(chartConfig));
  let chartData = db.queryChartData(chartConfig);
  roundData(chartData);
  assert(chartData.categories.length, 2);
  assert(chartData.series.length, 3);
  assert(chartData.series[0].name, "Car Market");
  assert(chartData.series[0].data, [4000, 4000]);
  assert(chartData.series[1].name, "BEV Market");
  assert(chartData.series[1].data, [1200, 1400]);
  assert(chartData.series[2].name, "BEV Market Share");
  assert(chartData.series[2].data, [30, 35]);
});

runTest("multipleMetrics_byBrand_table", function() {
  let chartConfig = {};
  chartConfig.country = "DE";
  chartConfig.xProperty = db.xProperties.brand;
  chartConfig.timeSpan = "2y";
  chartConfig.view = db.views.table;
  chartConfig = completeChartConfig(chartConfig);
  assert(!db.needsUnfold(chartConfig));
  let chartData = db.queryChartData(chartConfig);
  roundData(chartData);
  assert(chartData.categories.length, 4);
  assert(chartData.series.length, 5);
  assert(chartData.series[0].name, "Car Market");
  assert(chartData.series[0].data, [2800, 2400, 1600, 1200]);
  assert(chartData.series[1].name, "Car Market Split");
  assert(chartData.series[1].data, [35, 30, 20, 15]);
  assert(chartData.series[2].name, "BEV Market");
  assert(chartData.series[2].data, [0, 800, 800, 1000]);
});

runTest("global_total", function() {
  let chartConfig = {};
  chartConfig.country = "global";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig = completeChartConfig(chartConfig);
  assert(!db.needsUnfold(chartConfig));
  const chartData = db.queryChartData(chartConfig);
  assert(chartData.series.length, 1);
});

runTest("global_byCompany", function() {
  let chartConfig = {};
  chartConfig.country = "global";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.detailLevel = db.detailLevels.company;
  chartConfig = completeChartConfig(chartConfig);
  assert(!db.needsUnfold(chartConfig));
  const chartData = db.queryChartData(chartConfig);
  roundData(chartData);
  assert(chartData.series.length, 3);
  assert(chartData.series[0].name, "Unknown");
  assert(chartData.series[0].data, [2800, 3100, 3400, 3700, 3950, 4250, 4550, 4850]);
  assert(chartData.series[1].name, "Alpha");
  assert(chartData.series[1].data, [100, 100, 100, 100, 150, 150, 150, 150]);
  assert(chartData.series[2].name, "Bravo");
  assert(chartData.series[2].data, [100, 100, 100, 100, 100, 100, 100, 100]);
});

} catch (err) {
  logError("Exception raised, see console.");
  throw err;
}

showSummary();
