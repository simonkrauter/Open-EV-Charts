Open EV Charts
==============

Open EV Charts is a collection of electric car (BEV) registration numbers with powerful visualization.<br>
The main purpose is to track the adoption of electric cars over time, countries and brands.

Online version: https://open-ev-charts.org/

Included countries
------------------
| Country        | Data included
|----------------|-------------------------------------------------------
| China          | since 2018-01, all car sales per brand missing
| United States  | since 2018-01, data is per quarter, EV models incomplete, only models with no ICE/hybrid variant included
| Germany        | since 2018-01
| United Kingdom | since 2018-01, data is per quarter
| France         | since 2018-01
| Italy          | since 2020-01
| Spain          | since 2018-01
| Netherlands    | since 2018-01
| Sweden         | since 2018-01
| Austria        | since 2019-01
| Switzerland    | since 2018-01, EV models incomplete, only models with no ICE/hybrid variant included
| Norway         | since 2018-01
| Finland        | since 2020-01
| Ireland        | since 2020-01

Data sources for other countries wanted.

Database structure
------------------

For each country there is a JavaScript file.<br>
This file contains two data sets for each month/quarter:

- Sales numbers of all cars by brand
- Sales numbers of electric cars (BEV) by model

In addition every data set has a source URL.

Technology
----------

- JavaScript/HTML/CSS running in a web browser
- [Chart.js](https://www.chartjs.org/), a JavaScript chart library
- https://open-ev-charts.org/ is hosted by GitHub Pages

Feeback
-------

Feeback of any kind is welcome:
- Send an email to trustable@disroot.org
- [Create a GitHub issue](https://github.com/trustable-code/Open-EV-Charts/issues/new)

Contributing
------------

Contributions of any kind are welcome. Feel free to submit pull requests and issues.<br>
Especially you can help by adding finding a data source for more countries.<br>

[Tutorial for first GitHub contributions](https://github.com/firstcontributions/first-contributions/blob/master/README.md)

License
-------

Open EV Charts is FLOSS (free and open-source software).<br>
All files in this repository are licensed under the [GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0) (GPLv3).<br>
Copyright 2019–2021 Simon Krauter
