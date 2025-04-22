Open EV Charts
==============

Open EV Charts is an open-source project to collect and visualize sales/registration numbers of passenger cars from various countries. The primary goal is to track the adoption of battery electric vehicles (BEVs), both in absolute numbers and market share. The chart data aggregation is highly configurable, enabling a wide range of analyses.

Online version: https://open-ev-charts.org/

Data Status
-----------

Currently, Open EV Charts includes data from 22 countries, complemented by global sales data.

For more details, see the [Status page](https://open-ev-charts.org/#status).

Technology
----------

- Developed in JavaScript, HTML and CSS
- Runs entirely client-side in a web browser (no server-side processing)
- Stores data in plain-text files
- Uses [Chart.js](https://www.chartjs.org/) to render charts
- Hosted via GitHub Pages: https://open-ev-charts.org/

Data Format
-----------

Each country has its own JavaScript data file.<br>
It contains two data sets for each month or quarter:

- The number of newly registered passenger cars by brand or total
- The number of newly registered battery electric passenger cars by model or brand or total

In addition every data set has one or more source URLs.

Feedback
--------

Suggestions, bug reports, or ideas?
- Email: trustable@disroot.org
- [Create a GitHub issue](https://github.com/simonkrauter/Open-EV-Charts/issues/new)

Contributing
------------

You can contribute by:

- Finding new data sources for additional countries
- Checking and improving existing data to ensure accuracy

Feel free to submit an [issue](https://github.com/simonkrauter/Open-EV-Charts/issues/new) or a [pull request](https://github.com/firstcontributions/first-contributions/blob/master/README.md)!

License
-------

Open EV Charts is free and open-source software (FOSS)..<br>
All files in this repository are licensed under the [GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0) (GPLv3).<br>
Copyright 2019–2025 Simon Krauter
