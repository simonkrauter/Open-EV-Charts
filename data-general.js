// Country-independent data

"use strict";

var colorSet =
[ "#E83835"
, "#1469AA"
, "#43A047"
, "#F78300"
, "#31CEE0"
, "#FFCC00"
, "#8025A8"
, "#8C8C8C"
, "#16545B"
, "#795548"
, "#A00000"
, "#000E8E"
, "#024C00"
, "#8C4D00"
, "#87711C"
, "#93F296"
, "#8B66DD"
, "#C0CA33"
, "#E52984"
, "#FFBB68"
];

var colorIndexByBrand =
{ "Tesla": 0
, "Nissan": 7
, "Chevrolet": 5
, "Renault": 3
, "Volkswagen": 1
, "Smart": 2
, "BMW": 4
, "Kia": 10
, "Hyundai": 11
, "Fiat": 18
, "Jaguar": 8
, "Audi": 6
, "Peugeot": 9
};

// Company goups, sorted by all car sales
var companyGroups = {
  "Stellantis":
    [ "Abarth"
    , "Alfa Romeo"
    , "Chrysler"
    , "Citroën"
    , "Dodge"
    , "DS Automobiles"
    , "Fiat"
    , "Jeep"
    , "Jeep/Dodge"
    , "Maserati"
    , "Opel"
    , "Peugeot"
    , "Ram"
    , "Vauxhall"
    ],
  "Volkswagen Group":
    [ "Audi"
    , "Cupra"
    , "Porsche"
    , "Seat"
    , "Škoda"
    , "Volkswagen"
    ],
  "Toyota Motor Corporation":
    [ "Lexus"
    , "Suzuki"
    , "Toyota"
    ],
  "General Motors":
    [ "Buick"
    , "Cadillac"
    , "Chevrolet"
    , "GMC"
    ],
  "Ford Motor Company":
    [ "Ford"
    , "Lincoln"
    ],
  "Hyundai Motor Group":
    [ "Genesis"
    , "Hyundai"
    , "Kia"
    ],
  "Renault-Nissan-Mitsubishi":
    [ "Dacia"
    , "Infiniti"
    , "Mitsubishi"
    , "Nissan"
    , "Renault"
    ],
  "Honda Motor":
    [ "Acura"
    , "Honda"
    ],
  "BMW Group":
    [ "BMW"
    , "Mini"
    ],
  "Geely Holding Group":
    [ "Geely"
    , "Polestar"
    , "Volvo"
    , "Zeekr"
    ],
  "Jaguar Land Rover":
    [ "Jaguar"
    , "Land Rover"
    ],
  "SAIC Motor":
    [ "Baojun"
    , "Maxus"
    , "MG"
    , "Roewe"
    , "Wuling"
    ],
  "Dongfeng Motor":
    [ "Dongfeng"
    , "DFSK"
    ],
  "GAC Group":
    [ "Aion"
    , "Trumpchi"
    ],
  "BYD Auto":
    [ "BYD"
    , "Denza"
    ]
};
