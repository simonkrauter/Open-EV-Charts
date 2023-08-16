// Country-independent data

"use strict";

const countryNamesByCode =
// Note: The entries and their order has to be consistent to country-flags.png.
// Regular countries:
{ "AR": "Argentina"
, "AT": "Austria"
, "AU": "Australia"
, "BR": "Brazil"
, "CA": "Canada"
, "CH": "Switzerland"
, "CN": "China"
, "CZ": "Czech Republic"
, "DE": "Germany"
, "DK": "Denmark"
, "ES": "Spain"
, "FI": "Finland"
, "FR": "France"
, "ID": "Indonesia"
, "IE": "Ireland"
, "IN": "India"
, "IT": "Italy"
, "JP": "Japan"
, "KR": "South Korea"
, "MX": "Mexico"
, "NL": "Netherlands"
, "NO": "Norway"
, "RO": "Romania"
, "RU": "Russia"
, "SA": "Saudi Arabia"
, "SE": "Sweden"
, "TR": "Turkey"
, "UK": "United Kingdom"
, "US": "United States"
, "ZA": "South Africa"
// Mixed countries:
, "EU": "Europe"
, "CN/DE": "China / Germany"
, "US/EU": "United States / Europe"
, "JP/EU": "Japan / Europe"
};

const colorSet =
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

const colorIndexByCompanyGroup =
{ "Volkswagen Group": 1
, "Renault-Nissan-Mitsubishi": 3
, "BMW Group": 4
, "General Motors": 5
, "Stellantis": 9
, "Hyundai Motor Group": 10
, "Toyota Motor Corporation": 12
, "Geely Holding Group": 16
, "Ford Motor Company": 17
};

const colorIndexByBrand =
{ "Tesla": 0
, "Volkswagen": 1
, "Smart": 2
, "Renault": 3
, "BMW": 4
, "Chevrolet": 5
, "Audi": 6
, "Mercedes-Benz": 7
, "Jaguar": 8
, "Peugeot": 9
, "Kia": 10
, "Hyundai": 11
, "Toyota": 12
, "Fiat": 13
, "Opel": 14
, "Škoda": 15
, "Volvo": 16
, "Ford": 17
};

// Company goups, sorted by all car sales
const companyGroups = {
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
  "GAC Group":
    [ "Aion"
    , "Trumpchi"
    ],
  "BYD Auto":
    [ "BYD"
    , "Denza"
    ],
  "FAW Group":
    [ "Besturn"
    , "Hongqi"
    ]
};

const companyGroupCountries =
{ "Stellantis": "US/EU"
, "Volkswagen Group": "EU"
, "Toyota Motor Corporation": "JP"
, "General Motors": "US"
, "Ford Motor Company": "US"
, "Hyundai Motor Group": "KR"
, "Renault-Nissan-Mitsubishi": "JP/EU"
, "Honda Motor": "JP"
, "BMW Group": "DE"
, "Geely Holding Group": "CN"
, "Jaguar Land Rover": "UK"
, "SAIC Motor": "CN"
, "GAC Group": "CN"
, "BYD Auto": "CN"
, "FAW Group": "CN"
};

const brandCountries =
{ "Abarth": "IT"
, "Aiways": "CN"
, "Alfa Romeo": "IT"
, "Audi": "DE"
, "BAIC": "CN"
, "Changan": "CN"
, "Chery": "CN"
, "Chrysler": "US"
, "Citroën": "FR"
, "Cupra": "FR"
, "Dacia": "RO"
, "Dodge": "US"
, "Dongfeng": "CN"
, "DS Automobiles": "FR"
, "Fiat": "IT"
, "GAC Toyota": "CN"
, "Haima": "CN"
, "Hawtai": "CN"
, "Hozon": "CN"
, "Infiniti": "JP"
, "JAC": "CN"
, "Jeep": "US"
, "Jeep/Dodge": "US"
, "JMC": "CN"
, "Leapmotor": "CN"
, "Letin": "CN"
, "Lifan": "CN"
, "Lucid": "US"
, "Maserati": "IT"
, "Mazda": "JP"
, "Mercedes-Benz": "DE"
, "Mitsubishi": "JP"
, "Nio": "CN"
, "Nissan": "JP"
, "Opel": "DE"
, "Ora": "CN"
, "Peugeot": "FR"
, "Pocco": "CN"
, "Polestar": "SE"
, "Porsche": "DE"
, "Ram": "UK"
, "Renault": "FR"
, "Rivian": "US"
, "Seat": "ES"
, "Sehol": "CN"
, "Škoda": "CZ"
, "Smart": "CN/DE"
, "SsangYong": "KR"
, "Subaru": "JP"
, "Tesla": "US"
, "Vauxhall": "UK"
, "Volkswagen": "DE"
, "Volvo": "SE"
, "Weltmeister": "CN"
, "Xpeng": "CN"
, "Zhidou": "CN"
, "Zotye": "CN"
};
