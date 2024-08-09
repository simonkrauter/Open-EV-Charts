// Country-independent data

"use strict";

const countryNamesByCode =
// Note: The entries and their order has to be consistent to country-flags.png.
// Regular countries:
{ "AE": "United Arab Emirates"
, "AR": "Argentina"
, "AT": "Austria"
, "AU": "Australia"
, "BE": "Belgium"
, "BR": "Brazil"
, "CA": "Canada"
, "CH": "Switzerland"
, "CN": "China"
, "CZ": "Czechia"
, "DE": "Germany"
, "DK": "Denmark"
, "ES": "Spain"
, "FI": "Finland"
, "FR": "France"
, "ID": "Indonesia"
, "IE": "Ireland"
, "IL": "Israel"
, "IN": "India"
, "IS": "Iceland"
, "IT": "Italy"
, "JP": "Japan"
, "KR": "South Korea"
, "MX": "Mexico"
, "MY": "Malaysia"
, "NL": "Netherlands"
, "NO": "Norway"
, "NZ": "New Zealand"
, "PL": "Poland"
, "PT": "Portugal"
, "RO": "Romania"
, "RU": "Russia"
, "SA": "Saudi Arabia"
, "SE": "Sweden"
, "SG": "Singapore"
, "SI": "Slovenia"
, "SK": "Slovakia"
, "TH": "Thailand"
, "TR": "Turkey"
, "TW": "Taiwan"
, "UK": "United Kingdom"
, "US": "United States"
, "VN": "Vietnam"
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
, "Stellantis": 9
, "Hyundai Motor Group": 10
, "Geely Holding Group": 16
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
    [ "Citroën"
    , "Fiat"
    , "Jeep"
    , "Jeep/Dodge"
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
  "Hyundai Motor Group":
    [ "Genesis"
    , "Hyundai"
    , "Kia"
    ],
  "Renault-Nissan-Mitsubishi":
    [ "Dacia"
    , "Mitsubishi"
    , "Nissan"
    , "Renault"
    ],
  "BMW Group":
    [ "BMW"
    , "Mini"
    ],
  "Geely Holding Group":
    [ "Geely"
    , "Polestar"
    , "Volvo"
    ],
  "Jaguar Land Rover":
    [ "Jaguar"
    , "Land Rover"
    ],
  "SAIC Motor":
    [ "Baojun"
    , "MG"
    , "Wuling"
    ]
};

const companyGroupCountries =
{ "Stellantis": "US/EU"
, "Volkswagen Group": "EU"
, "Hyundai Motor Group": "KR"
, "Renault-Nissan-Mitsubishi": "JP/EU"
, "BMW Group": "DE"
, "Geely Holding Group": "CN"
, "Jaguar Land Rover": "UK"
, "SAIC Motor": "CN"
};

const brandCountries =
{ "Aion": "CN"
, "Audi": "DE"
, "BAIC": "CN"
, "BYD": "CN"
, "Changan": "CN"
, "Chery": "CN"
, "Chevrolet": "US"
, "Citroën": "FR"
, "Cupra": "ES"
, "Dacia": "RO"
, "Fiat": "IT"
, "Ford": "US"
, "GWM": "CN"
, "Hawtai": "CN"
, "Honda": "JP"
, "Isuzu": "JP"
, "JAC": "CN"
, "Jeep/Dodge": "US"
, "Jeep": "US"
, "JMC": "CN"
, "Mazda": "JP"
, "Mercedes-Benz": "DE"
, "Mitsubishi": "JP"
, "Nio": "CN"
, "Nissan": "JP"
, "Opel": "DE"
, "Peugeot": "FR"
, "Polestar": "SE"
, "Porsche": "DE"
, "Ram": "UK"
, "Renault": "FR"
, "Rivian": "US"
, "Seat": "ES"
, "Škoda": "CZ"
, "Smart": "CN/DE"
, "Subaru": "JP"
, "Suzuki": "JP"
, "Tesla": "US"
, "Toyota": "JP"
, "Vauxhall": "UK"
, "Volkswagen": "DE"
, "Volvo": "SE"
};
