"use strict";

const testCases =
{ 100: "electric-ratio:DE"
, 101: "electric-ratio:DE:ES:combine-countries"
, 102: "electric-ratio:combine-countries"
, 103: "electric-ratio:DE:ES"
, 104: "electric-ratio"
, 105: "electric-ratio:DE:all-models"
, 106: "electric-ratio:DE:ES:all-models:combine-countries"
, 107: "electric-ratio:all-models:combine-countries"
, 108: "electric-ratio:DE:ES:all-models"
, 109: "electric-ratio:all-models"
, 110: "electric-ratio:DE:Renault:all-models"
, 111: "electric-ratio:DE:ES:Renault:all-models:combine-countries"
, 112: "electric-ratio:Renault:all-models:combine-countries"
, 113: "electric-ratio:DE:ES:Renault:all-models"
, 114: "electric-ratio:Renault:all-models"
, 115: "electric-ratio:DE:Renault"
, 116: "electric-ratio:DE:ES:Renault:combine-countries"
, 117: "electric-ratio:Renault:combine-countries"
, 118: "electric-ratio:DE:ES:Renault"
, 119: "electric-ratio:Renault"
, 120: "electric-ratio:DE:Renault:Zoe"
, 121: "electric-ratio:DE:ES:Renault:Zoe:combine-countries"
, 122: "electric-ratio:Renault:Zoe:combine-countries"
, 123: "electric-ratio:DE:ES:Renault:Zoe"
, 124: "electric-ratio:Renault:Zoe"
, 125: "electric-ratio:DE:combine-brands"
, 126: "electric-ratio:DE:ES:combine-brands:combine-countries"
, 127: "electric-ratio:combine-brands:combine-countries"
, 128: "electric-ratio:DE:ES:combine-brands"
, 129: "electric-ratio:combine-brands"
, 130: "electric-ratio:country"
, 131: "electric-ratio:all-models:country"
, 132: "electric-ratio:combine-brands:country"
, 133: "electric-ratio:Renault:country"
, 134: "electric-ratio:Renault:all-models:country"
, 135: "electric-ratio:Renault:Zoe:country"

, 200: "electric-sales:DE"
, 201: "electric-sales:DE:ES:combine-countries"
, 202: "electric-sales:combine-countries"
, 203: "electric-sales:DE:ES"
, 204: "electric-sales"
, 205: "electric-sales:DE:all-models"
, 206: "electric-sales:DE:ES:all-models:combine-countries"
, 207: "electric-sales:all-models:combine-countries"
, 208: "electric-sales:DE:ES:all-models"
, 209: "electric-sales:all-models"
, 210: "electric-sales:DE:Renault:all-models"
, 211: "electric-sales:DE:ES:Renault:all-models:combine-countries"
, 212: "electric-sales:Renault:all-models:combine-countries"
, 213: "electric-sales:DE:ES:Renault:all-models"
, 214: "electric-sales:Renault:all-models"
, 215: "electric-sales:DE:Renault"
, 216: "electric-sales:DE:ES:Renault:combine-countries"
, 217: "electric-sales:Renault:combine-countries"
, 218: "electric-sales:DE:ES:Renault"
, 219: "electric-sales:Renault"
, 220: "electric-sales:DE:Renault:Zoe"
, 221: "electric-sales:DE:ES:Renault:Zoe:combine-countries"
, 222: "electric-sales:Renault:Zoe:combine-countries"
, 223: "electric-sales:DE:ES:Renault:Zoe"
, 224: "electric-sales:Renault:Zoe"
, 225: "electric-sales:DE:combine-brands"
, 226: "electric-sales:DE:ES:combine-brands:combine-countries"
, 227: "electric-sales:combine-brands:combine-countries"
, 228: "electric-sales:DE:ES:combine-brands"
, 229: "electric-sales:combine-brands"
, 230: "electric-sales:country"
, 231: "electric-sales:all-models:country"
, 232: "electric-sales:combine-brands:country"
, 233: "electric-sales:Renault:country"
, 234: "electric-sales:Renault:all-models:country"
, 235: "electric-sales:Renault:Zoe:country"
, 236: "electric-sales:DE:brand"
, 237: "electric-sales:DE:ES:brand:combine-countries"
, 238: "electric-sales:brand:combine-countries"
, 239: "electric-sales:DE:ES:brand"
, 240: "electric-sales:brand"
, 241: "electric-sales:model:DE"
, 242: "electric-sales:model:DE:ES:combine-countries"
, 243: "electric-sales:model:combine-countries"
, 244: "electric-sales:model:DE:ES"
, 245: "electric-sales:model"
, 246: "electric-sales:model:Renault:DE"
, 247: "electric-sales:model:Renault:DE:ES:combine-countries"
, 248: "electric-sales:model:Renault:combine-countries"
, 249: "electric-sales:model:Renault:DE:ES"
, 250: "electric-sales:model:Renault"

, 300: "electric-share:DE"
, 301: "electric-share:DE:ES:combine-countries"
, 302: "electric-share:combine-countries"
, 303: "electric-share:DE:ES"
, 304: "electric-share"
, 305: "electric-share:DE:all-models"
, 306: "electric-share:DE:ES:all-models:combine-countries"
, 307: "electric-share:all-models:combine-countries"
, 308: "electric-share:DE:ES:all-models"
, 309: "electric-share:all-models"
, 310: "electric-share:DE:Renault:all-models"
, 311: "electric-share:DE:ES:Renault:all-models:combine-countries"
, 312: "electric-share:Renault:all-models:combine-countries"
, 313: "electric-share:DE:ES:Renault:all-models"
, 314: "electric-share:Renault:all-models"
, 315: "electric-share:DE:Renault"
, 316: "electric-share:DE:ES:Renault:combine-countries"
, 317: "electric-share:Renault:combine-countries"
, 318: "electric-share:DE:ES:Renault"
, 319: "electric-share:Renault"
, 320: "electric-share:DE:Renault:Zoe"
, 321: "electric-share:DE:ES:Renault:Zoe:combine-countries"
, 322: "electric-share:Renault:Zoe:combine-countries"
, 323: "electric-share:DE:ES:Renault:Zoe"
, 324: "electric-share:Renault:Zoe"
, 325: "electric-share:DE:brand"
, 326: "electric-share:DE:ES:brand:combine-countries"
, 327: "electric-share:brand:combine-countries"
, 328: "electric-share:DE:ES:brand"
, 329: "electric-share:brand"
, 330: "electric-share:DE:model"
, 331: "electric-share:DE:ES:model:combine-countries"
, 332: "electric-share:model:combine-countries"
, 333: "electric-share:DE:ES:model"
, 334: "electric-share:model"
, 335: "electric-share:DE:model:Renault"
, 336: "electric-share:DE:ES:model:Renault:combine-countries"
, 337: "electric-share:model:Renault:combine-countries"
, 338: "electric-share:DE:ES:model:Renault"
, 339: "electric-share:model:Renault"

, 400: "brand-electric-ratio:DE"
, 401: "brand-electric-ratio:DE:ES:combine-countries"
, 402: "brand-electric-ratio:combine-countries"
, 403: "brand-electric-ratio:DE:ES"
, 404: "brand-electric-ratio"
, 405: "brand-electric-ratio:DE:Renault"
, 406: "brand-electric-ratio:DE:ES:combine-countries:Renault"
, 407: "brand-electric-ratio:combine-countries:Renault"
, 408: "brand-electric-ratio:DE:ES:Renault"
, 409: "brand-electric-ratio:Renault"
, 410: "brand-electric-ratio:brand:DE"
, 411: "brand-electric-ratio:brand:DE:ES:combine-countries"
, 412: "brand-electric-ratio:brand:combine-countries"
, 413: "brand-electric-ratio:brand:DE:ES"
, 414: "brand-electric-ratio:brand"

, 500: "all-sales:DE"
, 501: "all-sales:DE:ES:combine-countries"
, 502: "all-sales:combine-countries"
, 503: "all-sales:DE:ES"
, 504: "all-sales"
, 505: "all-sales:DE:Renault"
, 506: "all-sales:DE:ES:combine-countries:Renault"
, 507: "all-sales:combine-countries:Renault"
, 508: "all-sales:DE:ES:combine-models:Renault"
, 509: "all-sales:combine-models:Renault"
, 510: "all-sales:DE:combine-brands"
, 511: "all-sales:DE:ES:combine-countries:combine-brands"
, 512: "all-sales:combine-countries:combine-brands"
, 513: "all-sales:DE:ES:combine-brands"
, 514: "all-sales:combine-brands"
, 515: "all-sales:country"
, 516: "all-sales:Renault:country"
, 517: "all-sales:combine-brands:country"
, 518: "all-sales:brand:DE"
, 519: "all-sales:brand:DE:ES:combine-countries"
, 520: "all-sales:brand:combine-countries"
, 521: "all-sales:brand:DE:ES"
, 522: "all-sales:brand"

, 600: "all-share:DE"
, 601: "all-share:DE:ES:combine-countries"
, 602: "all-share:combine-countries"
, 603: "all-share:DE:ES"
, 604: "all-share"
, 605: "all-share:DE:Renault"
, 606: "all-share:DE:ES:combine-countries:Renault"
, 607: "all-share:combine-countries:Renault"
, 608: "all-share:DE:ES:Renault"
, 609: "all-share:Renault"
, 610: "all-share:brand:DE"
, 611: "all-share:brand:DE:ES:combine-countries"
, 612: "all-share:brand:combine-countries"
, 613: "all-share:brand:DE:ES"
, 614: "all-share:brand"
};

const testCaseNumbers = Object.keys(testCases);
var testCaseNumberInput;
var testCaseNumber = -1;

function addNextPrevButton(div, inc) {
  var button = document.createElement("A");
  button.href = "#";
  if (inc == 1) {
    button.innerHTML = "+";
    button.title = "Next test case";
  } else {
    button.innerHTML = "−";
    button.title = "Previous test case";
  }
  button.classList.add("button");
  button.classList.add("active");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    const oldIndex = testCaseNumbers.indexOf(testCaseNumber.toString()); // object keys are always strings
    testCaseNumber = testCaseNumbers[(oldIndex + inc + testCaseNumbers.length) % testCaseNumbers.length];
    loadTestCase();
  });
  div.appendChild(button);
}

function initTesting() {
  var div = document.createElement("A");
  div.style.marginLeft = "1em";
  homeLink.parentNode.appendChild(div);

  addNextPrevButton(div, -1);

  testCaseNumberInput = document.createElement("INPUT");
  testCaseNumberInput.type = "text";
  testCaseNumberInput.style.width = "2.2em";
  testCaseNumberInput.title = "Test case number";
  testCaseNumberInput.addEventListener("keyup", function(event) {
    const parsed = parseInt(testCaseNumberInput.value);
    if (Number.isInteger(parsed))
      testCaseNumber = parsed;
    else
      testCaseNumber = -1;
    console.log(testCaseNumber);
    loadTestCase();
  });
  div.appendChild(testCaseNumberInput);

  addNextPrevButton(div, 1);

  addRandomTestingButton(div);

  const hash = decodeURIComponent(location.hash.substr(1));
  if (hash.length > 0) {
    const index = Object.values(testCases).indexOf(hash);
    if (index != -1) {
      testCaseNumber = testCaseNumbers[index];
    }
  } else {
    testCaseNumber = testCaseNumbers[0];
  }
  if (testCaseNumber != -1) {
    loadTestCase();
  }
}

function loadTestCase() {
  if (testCaseNumber != -1)
    testCaseNumberInput.value = testCaseNumber;
  if (testCases[testCaseNumber] == null) {
    dynamicContent.innerHTML = "";
    if (testCaseNumberInput.value != "") {
      var div = document.createElement("DIV");
      div.style.color = "red";
      div.style.marginTop = "1em";
      div.appendChild(document.createTextNode("Test case does not exist."));
      dynamicContent.appendChild(div);
    }
  } else {
    history.pushState(null, null, "#" + testCases[testCaseNumber]);
    navigate();
  }
}

function addRandomTestingButton(div) {
  var button = document.createElement("A");
  button.href = "#";
  button.innerHTML = "Randomize Chart Config";
  button.style.fontSize = "40%";
  button.style.fontWeight = "normal";
  button.addEventListener("click", function(event) {
    event.preventDefault();
    randomizeChartConfig();
  });
  div.appendChild(button);
}

function randomizeChartConfig() {
  var chartConfig = db.decodeChartConfigString("");
  const params = db.getChartParams();
  for (const i in params) {
    const param = params[i];
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
    } else if (param.name == "view" || param.name == "maxSeries") {
      optionKeys = Object.keys(param.options);
    }
    if (optionKeys.length > 0) {
      chartConfig[param.name] = optionKeys[Math.floor(Math.random() * optionKeys.length)];
    }
  }
  navigateToChartConfig(chartConfig);
}

initTesting();
