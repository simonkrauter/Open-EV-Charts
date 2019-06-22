// Data sets for car sales in Norway

"use strict";

db.addCountry("NO", "Norway");

db.insert(db.countries.NO, "2019-01", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1388
, "BMW": 1044
, "Toyota": 871
, "Nissan": 787
, "Volvo": 764
, "Hyundai": 714
, "Mitsubishi": 437
, "Škoda": 342
, "Peugeot": 320
, "Ford": 280
, "Kia": 267
, "Mercedes-Benz": 235
, "Suzuki": 207
, "Tesla": 186
, "Mazda": 171
, "Renault": 171
, "Audi": 161
, "Opel": 124
, "Jaguar": 101
, "Mini": 86
});

db.insert(db.countries.NO, "2019-01", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/02/norway-january-2018.html (incomplete, only models with no hybrid variant included)",
{ "Nissan|Leaf": 673
, "Volkswagen|e-Golf": 666
, "Hyundai|Ioniq Electric": 347
, "Hyundai|Kona Electric": 325
, "Renault|ZOE": 155
, "Tesla|Model X": 150
, "Kia|Soul EV": 86
, "Volkswagen|e-up!": 80
, "Jaguar|I-Pace": 79
, "Opel|Ampera-e": 48
, "Tesla|Model S": 36
});

db.insert(db.countries.NO, "2019-02", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1702
, "Toyota": 1069
, "BMW": 769
, "Hyundai": 775
, "Volvo": 693
, "Nissan": 604
, "Tesla": 1016
, "Mitsubishi": 616
, "Škoda": 473
, "Peugeot": 363
, "Kia": 338
, "Ford": 288
, "Jaguar": 419
, "Mercedes-Benz": 268
, "Audi": 263
, "Renault": 250
, "Suzuki": 180
, "Mazda": 197
, "Opel": 175
, "Citroën": 218
});

db.insert(db.countries.NO, "2019-02", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/03/norway-february-2019.html (incomplete, only models with no hybrid variant included)",
{ "Volkswagen|e-Golf": 780
, "Nissan|Leaf": 508
, "Tesla|Model 3": 791
, "Hyundai|Kona Electric": 414
, "Hyundai|Ioniq Electric": 302
, "Jaguar|I-Pace": 391
, "Renault|ZOE": 208
, "Tesla|Model X": 141
, "Volkswagen|e-up!": 81
, "Kia|Niro EV": 133
, "Kia|Soul EV": 28
, "Opel|Ampera-e": 62
, "Tesla|Model S": 84
});

db.insert(db.countries.NO, "2019-03", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 5822
, "Volkswagen": 1647
, "Toyota": 1168
, "BMW": 1165
, "Volvo": 1038
, "Hyundai": 788
, "Nissan": 751
, "Mitsubishi": 1008
, "Škoda": 525
, "Audi": 822
, "Kia": 422
, "Peugeot": 327
, "Jaguar": 474
, "Ford": 385
, "Mercedes-Benz": 387
, "Renault": 393
, "Suzuki": 274
, "Mazda": 196
, "Opel": 226
, "Citroën": 127
});

db.insert(db.countries.NO, "2019-03", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/04/norway-march-2019.html (incomplete, only models with no hybrid variant included)",
{ "Tesla|Model 3": 5315
, "Volkswagen|e-Golf": 894
, "Nissan|Leaf": 618
, "Hyundai|Kona Electric": 331
, "Hyundai|Ioniq Electric": 314
, "Jaguar|I-Pace": 442
, "Audi|e-tron": 680
, "Renault|ZOE": 344
, "Tesla|Model X": 341
, "Kia|Niro EV": 187
, "Tesla|Model S": 166
, "Volkswagen|e-up!": 51
, "Opel|Ampera-e": 65
});

db.insert(db.countries.NO, "2019-04", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 811
, "Volkswagen": 1927
, "Toyota": 1002
, "BMW": 845
, "Volvo": 933
, "Hyundai": 613
, "Nissan": 529
, "Mitsubishi": 151
, "Škoda": 612
, "Audi": 544
, "Kia": 371
, "Jaguar": 372
, "Peugeot": 354
, "Ford": 362
, "Mercedes-Benz": 240
, "Renault": 230
, "Suzuki": 308
, "Mazda": 280
, "Opel": 192
, "Citroën": 125
});

db.insert(db.countries.NO, "2019-04", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/05/norway-april-2019.html (incomplete, only models with no hybrid variant included)",
{ "Tesla|Model 3": 720
, "Volkswagen|e-Golf": 911
, "Nissan|Leaf": 386
, "Hyundai|Kona Electric": 306
, "Jaguar|I-Pace": 350
, "Hyundai|Ioniq Electric": 243
, "Audi|e-tron": 371
, "Renault|ZOE": 206
, "Tesla|Model X": 68
, "Kia|Niro EV": 77
, "Volkswagen|e-up!": 105
, "Tesla|Model S": 23
});

db.insert(db.countries.NO, "2019-05", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 1010
, "Volkswagen": 1692
, "Toyota": 2048
, "BMW": 746
, "Volvo": 922
, "Hyundai": 552
, "Nissan": 514
, "Škoda": 798
, "Mitsubishi": 345
, "Audi": 743
, "Jaguar": 524
, "Kia": 434
, "Peugeot": 376
, "Ford": 372
, "Mercedes-Benz": 240
, "Renault": 322
, "Suzuki": 243
, "Mazda": 270
, "Opel": 184
, "Citroën": 151
});

db.insert(db.countries.NO, "2019-05", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/06/norway-may-2019.html (incomplete, only models with no hybrid variant included)",
{ "Tesla|Model 3": 705
, "Volkswagen|e-Golf": 779
, "Nissan|Leaf": 390
, "Jaguar|I-Pace": 510
, "Audi|e-tron": 530
, "Renault|ZOE": 268
, "Tesla|Model X": 258
, "Hyundai|Kona Electric": 234
, "Hyundai|Ioniq Electric": 216
, "Kia|Niro EV": 84
, "Volkswagen|e-up!": 71
, "Tesla|Model S": 47
});

// Template:

// db.insert(db.countries.NO, "xx", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
// { "Tesla":
// , "Volkswagen":
// , "Toyota":
// , "BMW":
// , "Volvo":
// , "Hyundai":
// , "Nissan":
// , "Škoda":
// , "Mitsubishi":
// , "Audi":
// , "Jaguar":
// , "Kia":
// , "Peugeot":
// , "Ford":
// , "Mercedes-Benz":
// , "Renault":
// , "Suzuki":
// , "Mazda":
// , "Opel":
// , "Citroën":
// });

// db.insert(db.countries.NO, "xx", db.dsTypes.ElectricCarsByModel, "https://ofv.no/registreringsstatistikk (incomplete, only models with no hybrid variant included)",
// { "Tesla|Model 3":
// , "Volkswagen|e-Golf":
// , "Nissan|Leaf":
// , "Jaguar|I-Pace":
// , "Audi|e-tron":
// , "Renault|ZOE":
// , "Tesla|Model X":
// , "Hyundai|Kona Electric":
// , "Hyundai|Ioniq Electric":
// , "Kia|Niro EV":
// , "Volkswagen|e-up!":
// , "Tesla|Model S":
