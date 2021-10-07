Open EV Charts
==============

Open EV Charts is a collection of electric car (BEV) registration numbers with powerful visualization.<br>
The main purpose is to track the adoption of electric cars over time, countries and brands.

Online version: https://open-ev-charts.org/

Database status
---------------

| Country        | Since | Interval | EV models  | All car sales
|----------------|-------|----------|------------|--------------
| China          | 2018  | Month    | Complete   | Total only
| United States  | 2018  | Quarter  | Incomplete | Per brand
| Germany        | 2017  | Month    | Complete   | Per brand
| United Kingdom | 2018  | Quarter  | Complete   | Per brand
| France         | 2018  | Month    | Complete   | Per brand
| Italy          | 2020  | Month    | Complete   | Per brand
| Spain          | 2018  | Month    | Complete   | Per brand
| Netherlands    | 2018  | Month    | Complete   | Per brand
| Sweden         | 2018  | Month    | Complete   | Total only
| Austria        | 2019  | Month    | Complete   | Per brand
| Switzerland    | 2018  | Month    | Incomplete | Per brand
| Denmark        | 2020  | Month    | Complete   | Total only
| Norway         | 2018  | Month    | Complete   | Per brand
| Finland        | 2020  | Month    | Complete   | Total only
| Ireland        | 2020  | Month    | Complete   | Total only

Data sources for other countries wanted.

Database structure
------------------

For each country there is a JavaScript file.<br>
This file contains two data sets for each month/quarter:

- Number of all cars by brand
- Number of electric cars (BEV) by model (limited to top 50 models)

In addition every data set has one or multiple source URLs.

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
