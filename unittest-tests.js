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
  if (value !== expectedValue)
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

function queryChartDataByIncompleteChartConfig(chartConfig) {
  return db.queryChartData(db.decodeChartConfigString(db.encodeChartConfig(chartConfig)));
}

try {

db.finalizeDataLoading();


// Test cases

runTest("finalizeDataLoading", function() {
  assert(db.countriesWithData.length, 2);
  assert(Object.keys(db.countries).length > 10);
  assert(Object.keys(db.countriesCodes).length, Object.keys(db.countries).length);
  assert(Object.keys(db.countryNames).length, Object.keys(db.countries).length);
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

runTest("unfoldChartConfig_1", function() {
  let chartSetConfig = {};
  chartSetConfig.country = "DE";
  chartSetConfig.metric = db.metrics.all;
  const chartConfigs = db.unfoldChartConfig(chartSetConfig);
  assert(chartConfigs.length, 6);
});

runTest("queryChartData_month_1", function() {
  let chartConfig = {};
  chartConfig.country = "BR";
  chartConfig.metric = db.metrics.salesElectric;
  chartConfig.xProperty = db.xProperties.month;
  chartConfig.timeSpan = "1y";
  const chartData = queryChartDataByIncompleteChartConfig(chartConfig);
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
  const chartData = queryChartDataByIncompleteChartConfig(chartConfig);
  assert(chartData.categories.length, 12);
  assert(chartData.series.length, 1);
  assert(chartData.series[0].data.length, 12);
});


} catch (err) {
  logError("Exception raised, see console.");
  throw err;
}

showSummary();
