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
[ "hsl(207, 80%, 45%)"
, "hsl(1, 80%, 56%)"
, "hsl(123, 41%, 45%)"
, "hsl(32, 100%, 48%)"
, "hsl(186, 74%, 54%)"
, "hsl(48, 100%, 50%)"
, "hsl(282, 64%, 40%)"
, "hsl(0, 0%, 55%)"
, "hsl(186, 61%, 22%)"
, "hsl(16, 25%, 38%)"
, "hsl(0, 100%, 31%)"
, "hsl(234, 100%, 28%)"
, "hsl(118, 100%, 15%)"
, "hsl(33, 100%, 27%)"
, "hsl(48, 66%, 32%)"
, "hsl(122, 79%, 76%)"
, "hsl(259, 64%, 63%)"
, "hsl(64, 60%, 50%)"
, "hsl(331, 78%, 53%)"
, "hsl(33, 100%, 70%)"
];

const otherSeriesColor = "hsl(0, 0%, 15%)";

const colorIndexByCompanyOrBrand =
{ "Audi": 6
, "BMW": 4
, "BMW Group": 4
, "BYD": 16
, "Citroën": 9
, "Dacia": 12
, "Fiat": 13
, "Ford": 17
, "Geely Holding Group": 8
, "Hyundai": 11
, "Hyundai Motor Group": 11
, "Kia": 10
, "Mercedes-Benz": 7
, "Peugeot": 3
, "Renault": 5
, "Renault-Nissan-Mitsubishi": 5
, "Škoda": 15
, "Stellantis": 3
, "Tesla": 1
, "Toyota": 2
, "Volkswagen": 0
, "Volkswagen Group": 0
, "Volvo": 8
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
    [ "Hyundai"
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
    , "Zeekr"
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
, "Renault": "FR"
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
, "Xpeng": "CN"
};
