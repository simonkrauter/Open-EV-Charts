// Data sets for car sales in Sweden

"use strict";

db.addCountry("SE", "Sweden");

db.insert(db.countries.SE, "2018-01", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4744
, "Volkswagen": 3436
, "Toyota": 1531
, "Kia": 1438
, "Škoda": 1399
, "BMW": 1336
, "Mercedes-Benz": 1200
, "Audi": 1190
, "Peugeot": 824
, "Ford": 752
, "Nissan": 737
, "Subaru": 456
, "Seat": 409
, "Renault": 403
, "Opel": 377
, "Mazda": 331
, "Dacia": 285
, "Hyundai": 244
, "Mini": 232
, "Suzuki": 225
, "Honda": 220
, "Mitsubishi": 216
, "Citroën": 182
, "Fiat": 182
, "Porsche": 145
, "Lexus": 131
, "SsangYong": 63
, "Jeep": 50
, "Alfa Romeo": 30
, "Jaguar": 30
, "DS Automobiles": 27
, "Land Rover": 26
, "Tesla": 19
, "Chevrolet": 6
, "Maserati": 5
, "Cadillac": 2
, "other": 97
});

db.insert(db.countries.SE, "2018-01", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 71
, "BMW|i3 BEV": 36
, "Volkswagen|e-Golf": 31
, "Tesla|Model S": 15
, "Hyundai|Ioniq Electric": 13
, "Volkswagen|e-up!": 13
, "Tesla|Model X": 4
, "Kia|Soul EV": 1
, "Nissan|e-NV200": 1
});

db.insert(db.countries.SE, "2018-02", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 6700
, "Volkswagen": 3927
, "Kia": 1701
, "Toyota": 1650
, "Audi": 1546
, "BMW": 1477
, "Mercedes-Benz": 1360
, "Škoda": 1325
, "Peugeot": 910
, "Nissan": 813
, "Ford": 650
, "Renault": 625
, "Seat": 571
, "Opel": 501
, "Hyundai": 442
, "Subaru": 362
, "Mazda": 348
, "Dacia": 322
, "Mitsubishi": 307
, "Fiat": 287
, "Citroën": 263
, "Honda": 247
, "Mini": 193
, "Suzuki": 190
, "Porsche": 122
, "Lexus": 93
, "Jeep": 68
, "SsangYong": 30
, "Tesla": 29
, "Land Rover": 25
, "Alfa Romeo": 22
, "Jaguar": 16
, "Chevrolet": 4
, "Cadillac": 3
, "Maserati": 3
, "other": 78
});

db.insert(db.countries.SE, "2018-02", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Hyundai|Ioniq Electric": 97
, "Renault|Zoe": 80
, "Nissan|Leaf": 54
, "Volkswagen|e-Golf": 31
, "BMW|i3 BEV": 23
, "Tesla|Model S": 22
, "Tesla|Model X": 7
, "Volkswagen|e-up!": 3
, "Kia|Soul EV": 1
, "NEVS|9-3EV": 1
});

db.insert(db.countries.SE, "2018-03", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 8719
, "Volkswagen": 5340
, "Toyota": 2376
, "Kia": 2130
, "Mercedes-Benz": 2027
, "BMW": 1978
, "Škoda": 1757
, "Audi": 1715
, "Nissan": 1364
, "Hyundai": 1157
, "Ford": 1037
, "Peugeot": 935
, "Renault": 909
, "Seat": 670
, "Citroën": 606
, "Opel": 582
, "Fiat": 578
, "Mazda": 461
, "Subaru": 420
, "Honda": 379
, "Mitsubishi": 379
, "Dacia": 325
, "Mini": 268
, "Tesla": 198
, "Suzuki": 194
, "Porsche": 182
, "Lexus": 144
, "SsangYong": 93
, "Jeep": 91
, "Alfa Romeo": 41
, "Land Rover": 31
, "Jaguar": 25
, "Chevrolet": 5
, "Cadillac": 2
, "Maserati": 2
, "Smart": 2
, "other": 83
});

db.insert(db.countries.SE, "2018-03", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Nissan|Leaf": 250
, "Tesla|Model S": 146
, "Hyundai|Ioniq Electric": 114
, "Renault|Zoe": 85
, "BMW|i3 BEV": 53
, "Tesla|Model X": 52
, "Volkswagen|e-Golf": 36
, "Volkswagen|e-up!": 7
, "Kia|Soul EV": 2
});

db.insert(db.countries.SE, "2018-04", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 7313
, "Volkswagen": 5351
, "Kia": 2110
, "Toyota": 2077
, "Mercedes-Benz": 1999
, "BMW": 1652
, "Škoda": 1649
, "Audi": 1569
, "Peugeot": 1238
, "Nissan": 1118
, "Fiat": 1029
, "Renault": 995
, "Seat": 699
, "Opel": 698
, "Ford": 681
, "Subaru": 519
, "Mazda": 511
, "Citroën": 414
, "Hyundai": 399
, "Dacia": 343
, "Mini": 309
, "Porsche": 268
, "Honda": 232
, "Mitsubishi": 230
, "Suzuki": 188
, "Lexus": 143
, "SsangYong": 89
, "Alfa Romeo": 83
, "Tesla": 67
, "Jeep": 62
, "Land Rover": 41
, "Jaguar": 27
, "Chevrolet": 15
, "Maserati": 5
, "DS Automobiles": 2
, "Cadillac": 1
, "other": 77
});

db.insert(db.countries.SE, "2018-04", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Nissan|Leaf": 139
, "Renault|Zoe": 56
, "Tesla|Model S": 44
, "BMW|i3 BEV": 43
, "Hyundai|Ioniq Electric": 28
, "Volkswagen|e-Golf": 27
, "Tesla|Model X": 23
, "Kia|Soul EV": 5
, "Volkswagen|e-up!": 5
});

db.insert(db.countries.SE, "2018-05", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 6544
, "Volkswagen": 5920
, "Kia": 2405
, "Toyota": 2194
, "BMW": 2191
, "Mercedes-Benz": 2029
, "Škoda": 1978
, "Renault": 1951
, "Audi": 1718
, "Fiat": 1360
, "Peugeot": 1134
, "Ford": 961
, "Nissan": 914
, "Seat": 815
, "Opel": 653
, "Mazda": 571
, "Subaru": 559
, "Dacia": 536
, "Hyundai": 441
, "Mitsubishi": 373
, "Alfa Romeo": 358
, "Citroën": 348
, "Suzuki": 302
, "Honda": 291
, "Mini": 279
, "Porsche": 221
, "Lexus": 155
, "SsangYong": 90
, "Land Rover": 77
, "Jeep": 69
, "Tesla": 49
, "Jaguar": 47
, "Chevrolet": 27
, "Cadillac": 7
, "Maserati": 5
, "DS Automobiles": 1
, "Smart": 1
, "other": 111
});

db.insert(db.countries.SE, "2018-05", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 51
, "Nissan|Leaf": 47
, "Volkswagen|e-Golf": 40
, "BMW|i3 BEV": 38
, "Tesla|Model S": 29
, "Kia|Soul EV": 21
, "Tesla|Model X": 20
, "Hyundai|Ioniq Electric": 19
, "Volkswagen|e-up!": 11
, "NEVS|9-3EV": 4
, "Nissan|e-NV200": 2
});

db.insert(db.countries.SE, "2018-06", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 14695
, "Volkswagen": 10273
, "BMW": 3650
, "Toyota": 3379
, "Fiat": 3054
, "Renault": 3017
, "Nissan": 2798
, "Audi": 2797
, "Mercedes-Benz": 2710
, "Kia": 2410
, "Škoda": 2345
, "Peugeot": 2064
, "Ford": 1996
, "Opel": 1178
, "Mazda": 1132
, "Dacia": 1017
, "Subaru": 1016
, "Mitsubishi": 962
, "Hyundai": 931
, "Citroën": 907
, "Seat": 895
, "Honda": 473
, "Mini": 438
, "Suzuki": 410
, "Porsche": 271
, "Jeep": 250
, "Alfa Romeo": 240
, "Lexus": 236
, "Chevrolet": 139
, "Tesla": 124
, "Jaguar": 96
, "Land Rover": 92
, "Cadillac": 34
, "SsangYong": 15
, "Maserati": 10
, "DS Automobiles": 2
, "other": 172
});

db.insert(db.countries.SE, "2018-06", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model S": 85
, "BMW|i3 BEV": 63
, "Renault|Zoe": 43
, "Tesla|Model X": 39
, "Volkswagen|e-Golf": 30
, "Kia|Soul EV": 29
, "Nissan|Leaf": 19
, "Hyundai|Ioniq Electric": 13
, "NEVS|9-3EV": 8
, "Nissan|e-NV200": 1
});

db.insert(db.countries.SE, "2018-07", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 2414
, "Volvo": 1462
, "Kia": 1440
, "Toyota": 858
, "Audi": 783
, "Škoda": 742
, "Mercedes-Benz": 650
, "BMW": 579
, "Nissan": 413
, "Ford": 388
, "Peugeot": 340
, "Seat": 316
, "Renault": 238
, "Fiat": 227
, "Citroën": 203
, "Honda": 155
, "Mini": 139
, "Opel": 125
, "Hyundai": 107
, "Porsche": 106
, "Mazda": 102
, "Tesla": 96
, "Mitsubishi": 82
, "Suzuki": 80
, "Lexus": 73
, "Subaru": 66
, "Dacia": 60
, "Chevrolet": 59
, "Cadillac": 37
, "Alfa Romeo": 25
, "Jeep": 24
, "Jaguar": 19
, "Land Rover": 13
, "DS Automobiles": 1
, "Maserati": 1
, "Smart": 1
, "other": 79
});

db.insert(db.countries.SE, "2018-07", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 126
, "Tesla|Model S": 65
, "Nissan|Leaf": 62
, "Volkswagen|e-Golf": 54
, "BMW|i3 BEV": 50
, "Tesla|Model X": 31
, "Kia|Soul EV": 26
, "Hyundai|Ioniq Electric": 16
, "Jaguar|I-Pace": 9
, "Volkswagen|e-up!": 7
, "other": 1
});

db.insert(db.countries.SE, "2018-08", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 6040
, "Volvo": 3082
, "Kia": 1939
, "Audi": 1924
, "Toyota": 1495
, "Mercedes-Benz": 1281
, "BMW": 1222
, "Škoda": 1168
, "Seat": 784
, "Nissan": 699
, "Peugeot": 666
, "Renault": 627
, "Ford": 561
, "Citroën": 366
, "Dacia": 356
, "Fiat": 271
, "Porsche": 255
, "Honda": 233
, "Mini": 230
, "Opel": 228
, "Mazda": 220
, "Subaru": 155
, "Suzuki": 153
, "Lexus": 144
, "Mitsubishi": 130
, "Hyundai": 108
, "Tesla": 99
, "Jeep": 66
, "Land Rover": 34
, "Jaguar": 18
, "Chevrolet": 17
, "Alfa Romeo": 16
, "Cadillac": 5
, "SsangYong": 2
, "other": 76
});

db.insert(db.countries.SE, "2018-08", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 155
, "Nissan|Leaf": 121
, "Tesla|Model S": 75
, "Volkswagen|e-Golf": 53
, "BMW|i3 BEV": 46
, "Kia|Soul EV": 37
, "Hyundai|Ioniq Electric": 25
, "Tesla|Model X": 24
, "Volkswagen|e-up!": 14
, "Nissan|e-NV200": 5
, "Jaguar|I-Pace": 1
});

db.insert(db.countries.SE, "2018-09", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3301
, "Kia": 2101
, "Volkswagen": 1881
, "Mercedes-Benz": 1378
, "Toyota": 1370
, "BMW": 1067
, "Audi": 917
, "Škoda": 873
, "Renault": 728
, "Ford": 597
, "Peugeot": 588
, "Citroën": 572
, "Fiat": 416
, "Seat": 358
, "Mitsubishi": 327
, "Nissan": 308
, "Mini": 284
, "Mazda": 266
, "Subaru": 248
, "Opel": 243
, "Tesla": 215
, "Honda": 189
, "Suzuki": 176
, "Dacia": 157
, "Lexus": 110
, "Hyundai": 103
, "Jeep": 75
, "Porsche": 66
, "Land Rover": 55
, "Jaguar": 40
, "Alfa Romeo": 10
, "Chevrolet": 6
, "Cadillac": 3
, "DS Automobiles": 3
, "Maserati": 2
, "SsangYong": 2
, "Dodge": 1
, "Smart": 1
, "other": 73
});

db.insert(db.countries.SE, "2018-09", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 191
, "Tesla|Model S": 173
, "Nissan|Leaf": 168
, "Tesla|Model X": 42
, "BMW|i3 BEV": 35
, "Kia|Soul EV": 15
, "Jaguar|I-Pace": 12
, "Hyundai|Ioniq Electric": 11
, "Volkswagen|e-Golf": 6
, "Nissan|e-NV200": 4
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.SE, "2018-10", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3883
, "Volkswagen": 2971
, "Kia": 2002
, "Toyota": 1786
, "BMW": 1704
, "Mercedes-Benz": 1478
, "Škoda": 1143
, "Ford": 938
, "Audi": 905
, "Renault": 886
, "Peugeot": 736
, "Nissan": 456
, "Opel": 418
, "Mitsubishi": 414
, "Mini": 396
, "Mazda": 381
, "Seat": 379
, "Subaru": 369
, "Hyundai": 287
, "Fiat": 264
, "Citroën": 242
, "Honda": 233
, "Suzuki": 184
, "Dacia": 152
, "Lexus": 106
, "Jeep": 77
, "Jaguar": 71
, "Tesla": 54
, "Porsche": 52
, "Land Rover": 51
, "Alfa Romeo": 15
, "Chevrolet": 3
, "Cadillac": 2
, "Maserati": 1
, "Smart": 1
, "other": 48
});

db.insert(db.countries.SE, "2018-10", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 299
, "Nissan|Leaf": 240
, "Hyundai|Ioniq Electric": 74
, "BMW|i3 BEV": 69
, "Tesla|Model S": 44
, "Jaguar|I-Pace": 29
, "Volkswagen|e-Golf": 12
, "Tesla|Model X": 10
, "Kia|Soul EV": 6
, "Nissan|e-NV200": 6
, "Hyundai|Kona Electric": 4
, "other": 1
});

db.insert(db.countries.SE, "2018-11", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4943
, "Volkswagen": 3236
, "Kia": 1907
, "BMW": 1832
, "Toyota": 1734
, "Mercedes-Benz": 1697
, "Škoda": 1614
, "Renault": 1000
, "Audi": 950
, "Peugeot": 768
, "Opel": 712
, "Ford": 695
, "Nissan": 613
, "Seat": 582
, "Subaru": 442
, "Mitsubishi": 437
, "Fiat": 321
, "Mini": 306
, "Mazda": 305
, "Hyundai": 233
, "Suzuki": 208
, "Honda": 205
, "Dacia": 203
, "Citroën": 194
, "Alfa Romeo": 110
, "Lexus": 107
, "Jaguar": 100
, "Jeep": 99
, "Tesla": 97
, "Land Rover": 36
, "Porsche": 31
, "Cadillac": 6
, "Chevrolet": 2
, "Smart": 2
, "DS Automobiles": 1
, "Maserati": 1
, "other": 82
});

db.insert(db.countries.SE, "2018-11", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Nissan|Leaf": 388
, "Volkswagen|e-Golf": 225
, "Renault|Zoe": 166
, "BMW|i3 BEV": 92
, "Kia|Niro EV": 84
, "Hyundai|Ioniq Electric": 78
, "Tesla|Model S": 72
, "Kia|Soul EV": 45
, "Tesla|Model X": 25
, "Jaguar|I-Pace": 17
, "Volkswagen|e-up!": 7
, "other": 2
});

db.insert(db.countries.SE, "2018-12", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4557
, "Volkswagen": 2682
, "Renault": 1988
, "Kia": 1462
, "Audi": 1455
, "Toyota": 1345
, "Mercedes-Benz": 1324
, "BMW": 1291
, "Škoda": 1172
, "Ford": 795
, "Peugeot": 548
, "Nissan": 546
, "Mitsubishi": 480
, "Seat": 438
, "Dacia": 327
, "Subaru": 272
, "Fiat": 227
, "Mazda": 224
, "Honda": 218
, "Suzuki": 205
, "Tesla": 181
, "Mini": 177
, "Hyundai": 170
, "Jeep": 144
, "Lexus": 143
, "Jaguar": 142
, "Citroën": 141
, "Porsche": 114
, "Land Rover": 85
, "Opel": 48
, "Alfa Romeo": 30
, "Chevrolet": 6
, "Cadillac": 2
, "DS Automobiles": 1
, "Smart": 1
, "other": 58
});

db.insert(db.countries.SE, "2018-12", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Nissan|Leaf": 343
, "Renault|Zoe": 340
, "Tesla|Model S": 113
, "Tesla|Model X": 68
, "BMW|i3 BEV": 61
, "Volkswagen|e-Golf": 61
, "Kia|Soul EV": 40
, "Hyundai|Ioniq Electric": 31
, "Kia|Niro EV": 15
, "Jaguar|I-Pace": 10
, "Volkswagen|e-up!": 10
, "Hyundai|Kona Electric": 3
, "Nissan|e-NV200": 2
, "other": 1
});

db.insert(db.countries.SE, "2019-01", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4073
, "Volkswagen": 2691
, "Kia": 1571
, "BMW": 1504
, "Toyota": 1203
, "Mercedes-Benz": 1196
, "Škoda": 1090
, "Audi": 868
, "Ford": 789
, "Peugeot": 616
, "Renault": 598
, "Nissan": 529
, "Mitsubishi": 527
, "Seat": 498
, "Hyundai": 377
, "Citroën": 271
, "Mazda": 253
, "Subaru": 247
, "Honda": 201
, "Mini": 197
, "Dacia": 182
, "Suzuki": 159
, "Fiat": 135
, "Lexus": 131
, "Jeep": 122
, "Jaguar": 109
, "Porsche": 89
, "Alfa Romeo": 61
, "Land Rover": 60
, "Tesla": 37
, "Opel": 11
, "Chevrolet": 5
, "Smart": 3
, "Cadillac": 1
, "Maserati": 1
, "other": 69
});

db.insert(db.countries.SE, "2019-01", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Nissan|Leaf": 264
, "Renault|Zoe": 239
, "Kia|Niro EV": 175
, "Hyundai|Ioniq Electric": 101
, "BMW|i3 BEV": 95
, "Kia|Soul EV": 53
, "Hyundai|Kona Electric": 42
, "Volkswagen|e-Golf": 37
, "Tesla|Model S": 29
, "Volkswagen|e-up!": 21
, "Jaguar|I-Pace": 16
, "Tesla|Model X": 8
, "Nissan|e-NV200": 1
, "other": 3
});

db.insert(db.countries.SE, "2019-02", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4507
, "Volkswagen": 3700
, "Kia": 1889
, "Mercedes-Benz": 1472
, "Škoda": 1399
, "BMW": 1325
, "Audi": 1310
, "Toyota": 1030
, "Renault": 668
, "Peugeot": 632
, "Nissan": 629
, "Seat": 625
, "Mitsubishi": 598
, "Ford": 501
, "Hyundai": 402
, "Dacia": 293
, "Mini": 257
, "Mazda": 251
, "Subaru": 244
, "Fiat": 232
, "Honda": 220
, "Suzuki": 141
, "Opel": 126
, "Jaguar": 102
, "Citroën": 100
, "Lexus": 95
, "Porsche": 78
, "Land Rover": 74
, "Jeep": 59
, "Tesla": 59
, "Alfa Romeo": 42
, "Chevrolet": 11
, "Cadillac": 1
, "DS Automobiles": 1
, "other": 73
});

db.insert(db.countries.SE, "2019-02", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 236
, "Kia|Niro EV": 163
, "Nissan|Leaf": 153
, "BMW|i3 BEV": 111
, "Tesla|Model S": 52
, "Hyundai|Kona Electric": 51
, "Volkswagen|e-Golf": 35
, "Hyundai|Ioniq Electric": 27
, "Audi|Q8 e-tron": 25
, "Jaguar|I-Pace": 11
, "Volkswagen|e-up!": 11
, "Nissan|e-NV200": 8
, "Tesla|Model X": 7
, "Kia|Soul EV": 5
, "Peugeot|iOn": 1
});

db.insert(db.countries.SE, "2019-03", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5419
, "Volkswagen": 3623
, "Kia": 2245
, "Mercedes-Benz": 2124
, "Audi": 2007
, "Toyota": 1790
, "Škoda": 1624
, "BMW": 1615
, "Renault": 1122
, "Tesla": 1106
, "Mitsubishi": 814
, "Ford": 766
, "Seat": 760
, "Peugeot": 605
, "Hyundai": 584
, "Nissan": 575
, "Fiat": 430
, "Mazda": 418
, "Dacia": 334
, "Mini": 326
, "Honda": 314
, "Subaru": 309
, "Suzuki": 190
, "Opel": 178
, "Porsche": 161
, "Citroën": 155
, "Lexus": 141
, "Jaguar": 136
, "Jeep": 94
, "Land Rover": 91
, "Alfa Romeo": 55
, "Chevrolet": 18
, "DS Automobiles": 9
, "Cadillac": 4
, "Smart": 1
, "other": 112
});

db.insert(db.countries.SE, "2019-03", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 1005
, "Kia|Niro EV": 296
, "Renault|Zoe": 194
, "BMW|i3 BEV": 146
, "Nissan|Leaf": 134
, "Hyundai|Kona Electric": 90
, "Tesla|Model S": 72
, "Audi|Q8 e-tron": 47
, "Jaguar|I-Pace": 33
, "Hyundai|Ioniq Electric": 31
, "Tesla|Model X": 29
, "Volkswagen|e-Golf": 22
, "Volkswagen|e-up!": 8
, "Nissan|e-NV200": 3
, "Kia|Soul EV": 1
});

db.insert(db.countries.SE, "2019-04", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5768
, "Volkswagen": 3714
, "Mercedes-Benz": 2831
, "Kia": 2182
, "BMW": 1815
, "Toyota": 1807
, "Audi": 1562
, "Škoda": 1510
, "Ford": 840
, "Renault": 821
, "Seat": 788
, "Fiat": 773
, "Peugeot": 718
, "Nissan": 573
, "Tesla": 559
, "Mazda": 440
, "Subaru": 371
, "Mini": 367
, "Mitsubishi": 359
, "Hyundai": 338
, "Dacia": 318
, "Opel": 247
, "Honda": 242
, "Porsche": 240
, "Citroën": 219
, "Suzuki": 194
, "Jaguar": 185
, "Lexus": 174
, "Jeep": 75
, "Land Rover": 55
, "Alfa Romeo": 27
, "DS Automobiles": 17
, "Chevrolet": 16
, "Cadillac": 4
, "Maserati": 1
, "other": 96
});

db.insert(db.countries.SE, "2019-04", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 446
, "Renault|Zoe": 204
, "Kia|Niro EV": 174
, "Nissan|Leaf": 113
, "BMW|i3 BEV": 110
, "Tesla|Model S": 90
, "Volkswagen|e-Golf": 52
, "Hyundai|Kona Electric": 50
, "Audi|Q8 e-tron": 43
, "Jaguar|I-Pace": 33
, "Tesla|Model X": 23
, "Hyundai|Ioniq Electric": 22
, "Nissan|e-NV200": 6
, "Kia|Soul EV": 5
, "Volkswagen|e-up!": 2
});

db.insert(db.countries.SE, "2019-05", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 6235
, "Volkswagen": 3556
, "Kia": 2308
, "Toyota": 2231
, "BMW": 2067
, "Audi": 1929
, "Škoda": 1685
, "Mercedes-Benz": 1331
, "Renault": 1261
, "Ford": 897
, "Peugeot": 884
, "Seat": 862
, "Fiat": 802
, "Citroën": 550
, "Nissan": 516
, "Opel": 516
, "Subaru": 447
, "Mitsubishi": 435
, "Mazda": 431
, "Hyundai": 412
, "Dacia": 399
, "Tesla": 366
, "Mini": 324
, "Lexus": 264
, "Honda": 244
, "Suzuki": 228
, "Porsche": 222
, "Jaguar": 136
, "Jeep": 75
, "Alfa Romeo": 73
, "Land Rover": 61
, "Chevrolet": 31
, "DS Automobiles": 20
, "Dodge": 1
, "Maserati": 1
, "Smart": 1
, "other": 117
});

db.insert(db.countries.SE, "2019-05", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 199
, "Tesla|Model 3": 198
, "Kia|Niro EV": 140
, "BMW|i3 BEV": 138
, "Kia|Soul EV": 112
, "Tesla|Model S": 112
, "Audi|Q8 e-tron": 80
, "Volkswagen|e-Golf": 62
, "Tesla|Model X": 56
, "Hyundai|Kona Electric": 51
, "Hyundai|Ioniq Electric": 27
, "Jaguar|I-Pace": 23
, "Nissan|Leaf": 17
, "Nissan|e-NV200": 8
, "Volkswagen|e-up!": 5
});

db.insert(db.countries.SE, "2019-06", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5691
, "Volkswagen": 3402
, "Kia": 2504
, "Toyota": 2222
, "Audi": 2143
, "Renault": 1967
, "BMW": 1724
, "Škoda": 1712
, "Mercedes-Benz": 1328
, "Tesla": 819
, "Seat": 799
, "Dacia": 797
, "Ford": 787
, "Peugeot": 753
, "Fiat": 718
, "Nissan": 574
, "Mitsubishi": 514
, "Mazda": 470
, "Hyundai": 464
, "Mini": 361
, "Opel": 310
, "Subaru": 305
, "Honda": 241
, "Citroën": 225
, "Porsche": 225
, "Suzuki": 214
, "Jaguar": 143
, "Lexus": 111
, "Jeep": 85
, "Land Rover": 71
, "Alfa Romeo": 26
, "Chevrolet": 17
, "DS Automobiles": 16
, "Cadillac": 3
, "Smart": 2
, "Maserati": 1
, "other": 84
});

db.insert(db.countries.SE, "2019-06", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 524
, "Renault|Zoe": 229
, "Tesla|Model S": 209
, "BMW|i3 BEV": 98
, "Kia|Soul EV": 94
, "Kia|Niro EV": 91
, "Tesla|Model X": 86
, "Hyundai|Kona Electric": 84
, "Nissan|Leaf": 79
, "Audi|Q8 e-tron": 75
, "Volkswagen|e-Golf": 45
, "Hyundai|Ioniq Electric": 28
, "Jaguar|I-Pace": 9
, "Nissan|e-NV200": 6
, "Volkswagen|e-up!": 6
, "Mercedes-Benz|EQC": 5
, "Peugeot|iOn": 3
, "other": 2
});

db.insert(db.countries.SE, "2019-07", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4232
, "Volkswagen": 2766
, "Kia": 1929
, "Toyota": 1720
, "Škoda": 1418
, "BMW": 1188
, "Mercedes-Benz": 1068
, "Audi": 1026
, "Seat": 843
, "Peugeot": 841
, "Fiat": 620
, "Tesla": 576
, "Ford": 567
, "Renault": 518
, "Nissan": 512
, "Mitsubishi": 445
, "Citroën": 438
, "Hyundai": 436
, "Mazda": 357
, "Opel": 312
, "Subaru": 308
, "Mini": 272
, "Dacia": 208
, "Suzuki": 208
, "Honda": 202
, "Porsche": 157
, "Lexus": 133
, "Jaguar": 96
, "Jeep": 61
, "Land Rover": 46
, "Alfa Romeo": 36
, "Chevrolet": 15
, "DS Automobiles": 13
, "Smart": 2
, "other": 84
});

db.insert(db.countries.SE, "2019-07", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 453
, "Renault|Zoe": 122
, "Nissan|Leaf": 84
, "Tesla|Model S": 70
, "BMW|i3 BEV": 67
, "Tesla|Model X": 53
, "Audi|Q8 e-tron": 49
, "Kia|Soul EV": 47
, "Hyundai|Ioniq Electric": 32
, "Volkswagen|e-Golf": 30
, "Hyundai|Kona Electric": 29
, "Kia|Niro EV": 18
, "Jaguar|I-Pace": 13
, "Volkswagen|e-up!": 5
, "Mercedes-Benz|EQC": 2
, "Nissan|e-NV200": 2
});

db.insert(db.countries.SE, "2019-08", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 4405
, "Volvo": 4142
, "Kia": 2255
, "Toyota": 2189
, "Audi": 1779
, "Škoda": 1682
, "Mercedes-Benz": 1563
, "BMW": 1552
, "Seat": 1144
, "Nissan": 857
, "Peugeot": 856
, "Dacia": 775
, "Renault": 763
, "Ford": 586
, "Fiat": 542
, "Hyundai": 521
, "Mazda": 441
, "Mitsubishi": 427
, "Subaru": 389
, "Citroën": 370
, "Mini": 324
, "Tesla": 324
, "Opel": 245
, "Honda": 218
, "Suzuki": 214
, "Lexus": 188
, "Porsche": 187
, "Jeep": 106
, "Land Rover": 78
, "Chevrolet": 73
, "Jaguar": 73
, "Alfa Romeo": 64
, "DS Automobiles": 19
, "Cadillac": 15
, "other": 111
});

db.insert(db.countries.SE, "2019-08", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 148
, "Renault|Zoe": 138
, "Nissan|Leaf": 119
, "Tesla|Model S": 117
, "BMW|i3 BEV": 78
, "Audi|Q8 e-tron": 75
, "Volkswagen|e-Golf": 63
, "Tesla|Model X": 59
, "Hyundai|Ioniq Electric": 55
, "Kia|Niro EV": 32
, "Kia|Soul EV": 28
, "Jaguar|I-Pace": 11
, "Hyundai|Kona Electric": 10
, "Mercedes-Benz|EQC": 10
, "Volkswagen|e-up!": 9
, "Nissan|e-NV200": 8
});

db.insert(db.countries.SE, "2019-09", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4268
, "Volkswagen": 4111
, "Kia": 2182
, "Toyota": 1914
, "BMW": 1600
, "Mercedes-Benz": 1457
, "Audi": 1363
, "Škoda": 1225
, "Tesla": 1002
, "Hyundai": 717
, "Ford": 698
, "Renault": 675
, "Nissan": 646
, "Peugeot": 571
, "Mazda": 540
, "Seat": 521
, "Fiat": 429
, "Mitsubishi": 413
, "Mini": 338
, "Citroën": 323
, "Subaru": 269
, "Suzuki": 235
, "Lexus": 216
, "Honda": 202
, "Opel": 194
, "Dacia": 185
, "Porsche": 134
, "Jeep": 79
, "Land Rover": 77
, "Jaguar": 51
, "Alfa Romeo": 22
, "DS Automobiles": 22
, "Chevrolet": 1
, "Dodge": 1
, "other": 76
});

db.insert(db.countries.SE, "2019-09", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 716
, "Tesla|Model S": 197
, "Renault|Zoe": 148
, "Nissan|Leaf": 142
, "Volkswagen|e-Golf": 132
, "Tesla|Model X": 89
, "Audi|Q8 e-tron": 87
, "Kia|Niro EV": 86
, "BMW|i3 BEV": 69
, "Hyundai|Ioniq Electric": 35
, "Hyundai|Kona Electric": 20
, "Jaguar|I-Pace": 13
, "Kia|Soul EV": 6
, "Mercedes-Benz|EQC": 5
, "Nissan|e-NV200": 4
, "Volkswagen|e-up!": 2
});

db.insert(db.countries.SE, "2019-10", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5215
, "Volkswagen": 4939
, "Kia": 2474
, "Toyota": 2349
, "BMW": 1802
, "Audi": 1693
, "Mercedes-Benz": 1609
, "Škoda": 1270
, "Nissan": 778
, "Seat": 730
, "Ford": 703
, "Peugeot": 689
, "Hyundai": 647
, "Mazda": 559
, "Mitsubishi": 522
, "Renault": 487
, "Fiat": 435
, "Subaru": 390
, "Opel": 358
, "Mini": 338
, "Porsche": 281
, "Honda": 211
, "Citroën": 205
, "Suzuki": 190
, "Lexus": 183
, "Jeep": 102
, "Alfa Romeo": 95
, "Land Rover": 85
, "Tesla": 83
, "Dacia": 79
, "Jaguar": 42
, "DS Automobiles": 8
, "Chevrolet": 1
, "other": 78
});

db.insert(db.countries.SE, "2019-10", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Nissan|Leaf": 141
, "Renault|Zoe": 128
, "Kia|Niro EV": 104
, "Audi|Q8 e-tron": 78
, "Volkswagen|e-Golf": 69
, "BMW|i3 BEV": 62
, "Hyundai|Ioniq Electric": 61
, "Tesla|Model 3": 47
, "Hyundai|Kona Electric": 43
, "Tesla|Model X": 21
, "Jaguar|I-Pace": 17
, "Tesla|Model S": 15
, "Kia|Soul EV": 9
, "Nissan|e-NV200": 6
, "Mercedes-Benz|EQC": 5
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.SE, "2019-11", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5435
, "Volkswagen": 5361
, "Toyota": 2215
, "Kia": 2027
, "BMW": 1959
, "Audi": 1906
, "Mercedes-Benz": 1466
, "Škoda": 1417
, "Peugeot": 955
, "Renault": 825
, "Seat": 730
, "Hyundai": 693
, "Ford": 683
, "Nissan": 630
, "Mazda": 621
, "Mitsubishi": 493
, "Fiat": 401
, "Subaru": 372
, "Mini": 333
, "Honda": 249
, "Suzuki": 240
, "Tesla": 230
, "Dacia": 218
, "Porsche": 217
, "Lexus": 197
, "Opel": 136
, "Citroën": 134
, "Alfa Romeo": 92
, "Jeep": 82
, "Land Rover": 71
, "Jaguar": 36
, "DS Automobiles": 10
, "Smart": 1
, "other": 66
});

db.insert(db.countries.SE, "2019-11", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Nissan|Leaf": 224
, "Hyundai|Ioniq Electric": 114
, "Renault|Zoe": 113
, "Tesla|Model S": 104
, "BMW|i3 BEV": 90
, "Tesla|Model 3": 75
, "Kia|Niro EV": 63
, "Tesla|Model X": 51
, "Volkswagen|e-Golf": 47
, "Audi|Q8 e-tron": 46
, "Hyundai|Kona Electric": 42
, "Kia|Soul EV": 31
, "Jaguar|I-Pace": 23
, "Mini|Cooper SE Electric": 4
, "Nissan|e-NV200": 2
, "other": 1
});

db.insert(db.countries.SE, "2019-12", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 10297
, "Volkswagen": 6677
, "BMW": 2750
, "Nissan": 2546
, "Audi": 2336
, "Mercedes-Benz": 2255
, "Renault": 2240
, "Toyota": 2222
, "Škoda": 2030
, "Kia": 1887
, "Peugeot": 1771
, "Subaru": 1676
, "Ford": 1364
, "Tesla": 1038
, "Mazda": 1025
, "Seat": 894
, "Hyundai": 813
, "Dacia": 660
, "Mitsubishi": 612
, "Fiat": 521
, "Lexus": 370
, "Suzuki": 353
, "Opel": 332
, "Mini": 329
, "Honda": 311
, "Porsche": 284
, "Citroën": 133
, "Jeep": 111
, "Land Rover": 90
, "Alfa Romeo": 55
, "Jaguar": 51
, "DS Automobiles": 32
, "Smart": 3
, "Maserati": 2
, "Chevrolet": 1
, "other": 57
});

db.insert(db.countries.SE, "2019-12", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 604
, "Tesla|Model S": 288
, "Tesla|Model X": 146
, "Hyundai|Kona Electric": 117
, "BMW|i3 BEV": 108
, "Renault|Zoe": 86
, "Nissan|Leaf": 71
, "Hyundai|Ioniq Electric": 70
, "Audi|Q8 e-tron": 47
, "Volkswagen|e-Golf": 19
, "Jaguar|I-Pace": 13
, "Mercedes-Benz|EQC": 11
, "Volkswagen|e-up!": 11
, "Kia|Niro EV": 8
, "Kia|Soul EV": 5
, "Nissan|e-NV200": 2
});

db.insert(db.countries.SE, "2020-01", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 2853
, "Volvo": 2793
, "Kia": 1959
, "Mercedes-Benz": 1144
, "Toyota": 1101
, "Audi": 1097
, "BMW": 1077
, "Škoda": 781
, "Seat": 620
, "Mitsubishi": 439
, "Hyundai": 399
, "Renault": 384
, "Peugeot": 371
, "Ford": 228
, "Fiat": 203
, "Opel": 179
, "Mini": 177
, "Tesla": 165
, "Porsche": 126
, "Nissan": 114
, "Honda": 88
, "Lexus": 86
, "Citroën": 85
, "Dacia": 68
, "Suzuki": 65
, "Subaru": 56
, "Land Rover": 40
, "Alfa Romeo": 23
, "Jaguar": 22
, "Jeep": 22
, "Mazda": 7
, "DS Automobiles": 3
, "Polestar": 1
, "other": 22
});

db.insert(db.countries.SE, "2020-01", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 282
, "Renault|Zoe": 133
, "Kia|Soul EV": 117
, "Audi|Q8 e-tron": 116
, "Nissan|Leaf": 89
, "Tesla|Model S": 83
, "BMW|i3 BEV": 73
, "Tesla|Model 3": 67
, "Volkswagen|e-Golf": 67
, "Hyundai|Ioniq Electric": 66
, "Volkswagen|e-up!": 39
, "Hyundai|Kona Electric": 30
, "Mercedes-Benz|EQC": 25
, "Tesla|Model X": 15
, "Jaguar|I-Pace": 14
, "Seat|Mii Electric": 5
, "Mini|Cooper SE Electric": 2
, "Nissan|e-NV200": 2
});

db.insert(db.countries.SE, "2020-02", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4654
, "Volkswagen": 3171
, "Kia": 2191
, "Toyota": 1684
, "Audi": 1406
, "Mercedes-Benz": 1405
, "BMW": 1324
, "Škoda": 1229
, "Seat": 652
, "Peugeot": 536
, "Hyundai": 429
, "Renault": 422
, "Mitsubishi": 367
, "Ford": 275
, "Fiat": 259
, "Mini": 220
, "Nissan": 182
, "Opel": 139
, "Tesla": 139
, "Citroën": 137
, "Porsche": 137
, "Dacia": 112
, "Honda": 105
, "Suzuki": 101
, "Land Rover": 92
, "Lexus": 89
, "Jeep": 54
, "Subaru": 42
, "Alfa Romeo": 39
, "Mazda": 36
, "Jaguar": 34
, "DS Automobiles": 8
, "other": 24
});

db.insert(db.countries.SE, "2020-02", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 359
, "Audi|Q8 e-tron": 208
, "Renault|Zoe": 138
, "Hyundai|Kona Electric": 101
, "Tesla|Model 3": 98
, "Nissan|Leaf": 93
, "Volkswagen|e-Golf": 72
, "Kia|Soul EV": 62
, "BMW|i3 BEV": 61
, "Hyundai|Ioniq Electric": 50
, "Volkswagen|e-up!": 41
, "Škoda|Citigo-e": 35
, "Tesla|Model X": 21
, "Tesla|Model S": 20
, "Jaguar|I-Pace": 18
, "Mini|Cooper SE Electric": 15
, "Mercedes-Benz|EQC": 11
, "Nissan|e-NV200": 3
, "Porsche|Taycan": 3
});

db.insert(db.countries.SE, "2020-03", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5177
, "Volkswagen": 3739
, "Kia": 2497
, "Audi": 2226
, "Toyota": 1764
, "BMW": 1675
, "Mercedes-Benz": 1618
, "Škoda": 1376
, "Tesla": 1359
, "Renault": 832
, "Seat": 688
, "Peugeot": 675
, "Hyundai": 584
, "Mitsubishi": 523
, "Ford": 487
, "Nissan": 343
, "Porsche": 311
, "Mini": 291
, "Fiat": 276
, "Dacia": 186
, "Citroën": 183
, "Suzuki": 164
, "Lexus": 123
, "Subaru": 102
, "Opel": 96
, "Land Rover": 78
, "Honda": 72
, "Mazda": 58
, "DS Automobiles": 40
, "Jaguar": 31
, "Jeep": 22
, "Alfa Romeo": 13
, "Polestar": 4
, "Dodge": 2
, "Maserati": 1
, "Smart": 1
, "other": 32
});

db.insert(db.countries.SE, "2020-03", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 1084
, "Audi|Q8 e-tron": 315
, "Renault|Zoe": 310
, "Tesla|Model S": 179
, "Volkswagen|e-Golf": 155
, "Nissan|Leaf": 152
, "Kia|Niro EV": 139
, "Hyundai|Kona Electric": 134
, "Tesla|Model X": 96
, "BMW|i3 BEV": 84
, "Volkswagen|e-up!": 60
, "Hyundai|Ioniq Electric": 50
, "Mercedes-Benz|EQC": 50
, "Mini|Cooper SE Electric": 50
, "Porsche|Taycan": 42
, "Škoda|Citigo-e": 33
, "Kia|Soul EV": 22
, "Seat|Mii Electric": 22
, "Nissan|e-NV200": 10
, "Jaguar|I-Pace": 9
, "DS Automobiles|DS 3 Crossback E-Tense": 7
, "other": 1
});

db.insert(db.countries.SE, "2020-04", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3082
, "Volkswagen": 2678
, "Mercedes-Benz": 1417
, "Kia": 1334
, "BMW": 1327
, "Toyota": 1263
, "Audi": 1248
, "Škoda": 991
, "Renault": 640
, "Seat": 631
, "Fiat": 593
, "Peugeot": 566
, "Ford": 512
, "Hyundai": 423
, "Nissan": 345
, "Mini": 284
, "Mitsubishi": 167
, "Porsche": 154
, "Dacia": 147
, "Tesla": 141
, "Citroën": 139
, "Subaru": 123
, "Mazda": 118
, "Land Rover": 115
, "Suzuki": 112
, "Lexus": 104
, "Opel": 87
, "Honda": 61
, "Jaguar": 19
, "DS Automobiles": 18
, "Jeep": 10
, "Alfa Romeo": 2
, "Chevrolet": 2
, "Dodge": 1
, "Polestar": 1
, "Smart": 1
, "other": 60
});

db.insert(db.countries.SE, "2020-04", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Renault|Zoe": 159
, "Audi|Q8 e-tron": 146
, "Nissan|Leaf": 139
, "Hyundai|Kona Electric": 76
, "Tesla|Model 3": 76
, "BMW|i3 BEV": 64
, "Volkswagen|e-up!": 62
, "Tesla|Model S": 55
, "Kia|Niro EV": 44
, "Volkswagen|e-Golf": 38
, "Mercedes-Benz|EQC": 36
, "Hyundai|Ioniq Electric": 32
, "Kia|Soul EV": 30
, "Mini|Cooper SE Electric": 25
, "Porsche|Taycan": 16
, "Škoda|Citigo-e": 13
, "Tesla|Model X": 10
, "Seat|Mii Electric": 7
, "Jaguar|I-Pace": 5
, "Nissan|e-NV200": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "other": 1
});

db.insert(db.countries.SE, "2020-05", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 2536
, "Volkswagen": 1738
, "Kia": 1577
, "Audi": 1102
, "Mercedes-Benz": 1077
, "Toyota": 1063
, "BMW": 1041
, "Škoda": 796
, "Seat": 545
, "Renault": 528
, "Peugeot": 511
, "Ford": 462
, "Fiat": 433
, "Hyundai": 422
, "Nissan": 242
, "Opel": 234
, "Citroën": 226
, "Mini": 208
, "Mitsubishi": 155
, "Mazda": 124
, "Dacia": 120
, "Porsche": 117
, "Tesla": 109
, "Lexus": 100
, "Honda": 81
, "Land Rover": 76
, "Suzuki": 75
, "Subaru": 74
, "Jeep": 30
, "Jaguar": 19
, "DS Automobiles": 12
, "Alfa Romeo": 11
, "Chevrolet": 2
, "Dodge": 1
, "other": 34
});

db.insert(db.countries.SE, "2020-05", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|e-Golf": 135
, "Hyundai|Kona Electric": 123
, "Renault|Zoe": 98
, "Nissan|Leaf": 90
, "Audi|Q8 e-tron": 70
, "Tesla|Model 3": 69
, "BMW|i3 BEV": 52
, "Kia|Niro EV": 29
, "Tesla|Model S": 25
, "Hyundai|Ioniq Electric": 24
, "Volkswagen|e-up!": 24
, "Kia|Soul EV": 18
, "Tesla|Model X": 15
, "Porsche|Taycan": 12
, "Mercedes-Benz|EQC": 10
, "Seat|Mii Electric": 9
, "Jaguar|I-Pace": 6
, "Nissan|e-NV200": 6
, "Mini|Cooper SE Electric": 5
, "Škoda|Citigo-e": 5
, "Honda|e": 4
, "other": 5
});

db.insert(db.countries.SE, "2020-06", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5829
, "Volkswagen": 3460
, "Audi": 1727
, "Kia": 1663
, "BMW": 1372
, "Škoda": 1271
, "Mercedes-Benz": 1117
, "Toyota": 1067
, "Renault": 944
, "Peugeot": 913
, "Fiat": 597
, "Ford": 584
, "Seat": 532
, "Tesla": 466
, "Hyundai": 445
, "Porsche": 298
, "Mitsubishi": 277
, "Citroën": 267
, "Mini": 240
, "Opel": 233
, "Nissan": 215
, "Suzuki": 183
, "Honda": 182
, "Dacia": 172
, "Mazda": 139
, "Lexus": 115
, "Subaru": 102
, "Land Rover": 95
, "Jeep": 46
, "Jaguar": 21
, "DS Automobiles": 18
, "Polestar": 12
, "Alfa Romeo": 9
, "Smart": 3
, "other": 133
});

db.insert(db.countries.SE, "2020-06", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 312
, "Renault|Zoe": 299
, "Audi|Q8 e-tron": 218
, "Kia|Niro EV": 126
, "Hyundai|Kona Electric": 100
, "Tesla|Model S": 86
, "Nissan|Leaf": 84
, "Tesla|Model X": 68
, "Volkswagen|e-Golf": 59
, "BMW|i3 BEV": 57
, "Volkswagen|e-up!": 57
, "Porsche|Taycan": 37
, "Volvo|other": 30
, "Hyundai|Ioniq Electric": 27
, "Honda|e": 23
, "Kia|Soul EV": 23
, "Seat|Mii Electric": 20
, "Mercedes-Benz|EQC": 19
, "Škoda|Citigo-e": 14
, "Mini|Cooper SE Electric": 13
, "Peugeot|e-208": 9
, "Polestar|2": 6
, "Jaguar|I-Pace": 5
, "Nissan|e-NV200": 1
, "Volkswagen|e-Caddy": 1
, "other": 3
});

db.insert(db.countries.SE, "2020-07", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4623
, "Volkswagen": 3015
, "Kia": 2436
, "Toyota": 1342
, "Škoda": 1329
, "Mercedes-Benz": 1214
, "BMW": 1188
, "Audi": 1155
, "Peugeot": 893
, "Ford": 593
, "Seat": 581
, "Renault": 535
, "Fiat": 526
, "Hyundai": 473
, "Citroën": 409
, "Porsche": 339
, "Nissan": 334
, "Mini": 224
, "Mitsubishi": 176
, "Opel": 164
, "Dacia": 156
, "Mazda": 152
, "Jeep": 123
, "Honda": 120
, "Suzuki": 110
, "Lexus": 108
, "Subaru": 87
, "Land Rover": 55
, "Polestar": 50
, "Jaguar": 29
, "Alfa Romeo": 20
, "DS Automobiles": 14
, "Tesla": 11
, "Dodge": 4
, "SsangYong": 3
, "other": 127
});

db.insert(db.countries.SE, "2020-07", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 229
, "Audi|Q8 e-tron": 138
, "Renault|Zoe": 136
, "Volkswagen|e-Golf": 131
, "Hyundai|Kona Electric": 122
, "Porsche|Taycan": 88
, "Mercedes-Benz|EQC": 72
, "BMW|i3 BEV": 69
, "Nissan|Leaf": 64
, "Polestar|2": 50
, "Volkswagen|e-up!": 48
, "Mini|Cooper SE Electric": 31
, "Hyundai|Ioniq Electric": 23
, "Kia|Soul EV": 19
, "Peugeot|e-2008": 19
, "Seat|Mii Electric": 15
, "Jaguar|I-Pace": 7
, "Opel|Corsa-e": 7
, "Peugeot|e-208": 5
, "Tesla|Model 3": 5
, "Škoda|Citigo-e": 5
, "Tesla|Model X": 3
, "Honda|e": 2
, "Tesla|Model S": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Nissan|e-NV200": 1
, "Tesla|Model Y": 1
, "other": 10
});

db.insert(db.countries.SE, "2020-08", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 3736
, "Volvo": 3424
, "Kia": 2819
, "Toyota": 2500
, "Audi": 1580
, "Mercedes-Benz": 1523
, "BMW": 1223
, "Škoda": 1035
, "Peugeot": 877
, "Hyundai": 791
, "Seat": 767
, "Renault": 761
, "Ford": 733
, "Fiat": 518
, "Nissan": 417
, "Citroën": 369
, "Polestar": 284
, "Tesla": 239
, "Mini": 223
, "Mazda": 212
, "Porsche": 205
, "Suzuki": 162
, "Dacia": 159
, "Mitsubishi": 150
, "Jeep": 140
, "Honda": 139
, "Lexus": 113
, "Subaru": 111
, "Opel": 79
, "Land Rover": 58
, "Jaguar": 31
, "DS Automobiles": 20
, "Alfa Romeo": 19
, "SsangYong": 17
, "Dodge": 1
, "other": 87
});

db.insert(db.countries.SE, "2020-08", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 358
, "Polestar|2": 284
, "Tesla|Model 3": 235
, "Audi|Q8 e-tron": 233
, "Hyundai|Kona Electric": 230
, "Nissan|Leaf": 181
, "Renault|Zoe": 117
, "Porsche|Taycan": 78
, "Volkswagen|e-Golf": 65
, "Mercedes-Benz|EQC": 57
, "BMW|i3 BEV": 48
, "Hyundai|Ioniq Electric": 39
, "Volkswagen|e-up!": 39
, "Mini|Cooper SE Electric": 34
, "Kia|Soul EV": 28
, "Peugeot|e-208": 22
, "Škoda|Citigo-e": 13
, "Peugeot|e-2008": 12
, "Honda|e": 10
, "Jaguar|I-Pace": 8
, "Seat|Mii Electric": 8
, "Opel|Corsa-e": 5
, "Nissan|e-NV200": 4
, "Tesla|Model S": 4
, "Volkswagen|e-Caddy": 1
, "other": 2
});

db.insert(db.countries.SE, "2020-09", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4606
, "Volkswagen": 3575
, "Toyota": 2948
, "Kia": 2331
, "Mercedes-Benz": 1819
, "Audi": 1709
, "BMW": 1392
, "Škoda": 1310
, "Tesla": 1058
, "Renault": 879
, "Peugeot": 871
, "Seat": 849
, "Hyundai": 656
, "Ford": 645
, "Nissan": 612
, "Polestar": 583
, "Citroën": 374
, "Fiat": 290
, "Mazda": 281
, "Mini": 264
, "Suzuki": 257
, "Mitsubishi": 220
, "Dacia": 182
, "Honda": 176
, "Subaru": 139
, "Lexus": 134
, "Porsche": 125
, "Opel": 119
, "Jeep": 89
, "Land Rover": 65
, "Jaguar": 26
, "Alfa Romeo": 17
, "DS Automobiles": 13
, "Dodge": 2
, "other": 103
});

db.insert(db.countries.SE, "2020-09", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 754
, "Polestar|2": 582
, "Volkswagen|ID.3": 460
, "Kia|Niro EV": 233
, "Renault|Zoe": 211
, "Tesla|Model S": 189
, "Hyundai|Kona Electric": 178
, "Nissan|Leaf": 172
, "Audi|Q8 e-tron": 130
, "Tesla|Model X": 115
, "Mazda|MX-30": 75
, "Mercedes-Benz|EQC": 74
, "Volkswagen|e-Golf": 66
, "BMW|i3 BEV": 64
, "Volkswagen|e-up!": 63
, "Peugeot|e-208": 42
, "Mini|Cooper SE Electric": 36
, "Peugeot|e-2008": 36
, "Škoda|Citigo-e": 36
, "Honda|e": 31
, "Hyundai|Ioniq Electric": 28
, "Kia|Soul EV": 26
, "Opel|Corsa-e": 21
, "Porsche|Taycan": 14
, "Seat|Mii Electric": 9
, "Jaguar|I-Pace": 6
, "Mercedes-Benz|EQV": 4
, "NEVS|9-3EV": 4
, "Nissan|e-NV200": 3
, "Volkswagen|e-Caddy": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "other": 3
});

db.insert(db.countries.SE, "2020-10", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5139
, "Volkswagen": 4515
, "Toyota": 2693
, "Kia": 2314
, "Audi": 1808
, "Mercedes-Benz": 1806
, "BMW": 1384
, "Škoda": 1207
, "Peugeot": 990
, "Seat": 715
, "Nissan": 659
, "Hyundai": 611
, "Renault": 600
, "Ford": 380
, "Fiat": 366
, "Citroën": 306
, "Mazda": 295
, "Suzuki": 294
, "Mini": 293
, "Polestar": 276
, "Subaru": 243
, "Honda": 195
, "Mitsubishi": 186
, "Opel": 181
, "Dacia": 163
, "Porsche": 147
, "Lexus": 97
, "Jeep": 76
, "Tesla": 55
, "Land Rover": 40
, "Alfa Romeo": 21
, "DS Automobiles": 13
, "Jaguar": 11
, "Chevrolet": 3
, "Smart": 1
, "other": 64
});

db.insert(db.countries.SE, "2020-10", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Polestar|2": 274
, "Kia|Niro EV": 235
, "Volkswagen|ID.3": 212
, "Nissan|Leaf": 189
, "Volkswagen|e-Golf": 166
, "Renault|Zoe": 165
, "Audi|Q8 e-tron": 151
, "Hyundai|Kona Electric": 125
, "Mazda|MX-30": 103
, "Mercedes-Benz|EQC": 98
, "BMW|i3 BEV": 70
, "Honda|e": 57
, "Peugeot|e-208": 56
, "Peugeot|e-2008": 53
, "Volvo|other": 53
, "Mini|Cooper SE Electric": 48
, "Porsche|Taycan": 48
, "Kia|Soul EV": 36
, "Hyundai|Ioniq Electric": 34
, "Tesla|Model 3": 34
, "Opel|Corsa-e": 30
, "Volkswagen|e-up!": 30
, "Škoda|Citigo-e": 24
, "Tesla|Model S": 12
, "Tesla|Model X": 9
, "Jaguar|I-Pace": 7
, "Mercedes-Benz|EQV": 3
, "Volkswagen|e-Caddy": 3
, "Nissan|e-NV200": 2
, "Seat|Mii Electric": 1
, "Volvo|XC40 Recharge pure electric": 1
, "other": 1
});

db.insert(db.countries.SE, "2020-11", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4842
, "Volkswagen": 4411
, "Toyota": 2695
, "BMW": 1922
, "Kia": 1705
, "Mercedes-Benz": 1693
, "Audi": 1618
, "Peugeot": 923
, "Škoda": 888
, "Renault": 613
, "Seat": 586
, "Nissan": 572
, "Hyundai": 517
, "Ford": 422
, "Mitsubishi": 389
, "Subaru": 339
, "Mini": 320
, "Mazda": 274
, "Citroën": 269
, "Porsche": 225
, "Polestar": 167
, "Fiat": 159
, "Opel": 147
, "Suzuki": 143
, "Tesla": 143
, "Dacia": 126
, "Honda": 110
, "Lexus": 93
, "Land Rover": 63
, "Jeep": 58
, "Jaguar": 30
, "Alfa Romeo": 15
, "DS Automobiles": 12
, "Chevrolet": 3
, "Smart": 1
, "other": 78
});

db.insert(db.countries.SE, "2020-11", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.3": 773
, "Nissan|Leaf": 230
, "Polestar|2": 166
, "Audi|Q8 e-tron": 161
, "Kia|Niro EV": 160
, "Renault|Zoe": 142
, "Mercedes-Benz|EQC": 119
, "Mazda|MX-30": 101
, "Tesla|Model 3": 87
, "Hyundai|Kona Electric": 84
, "Peugeot|e-2008": 84
, "Volvo|XC40 Recharge pure electric": 80
, "Porsche|Taycan": 74
, "BMW|i3 BEV": 58
, "Volkswagen|e-Golf": 48
, "Peugeot|e-208": 47
, "Mini|Cooper SE Electric": 44
, "Tesla|Model S": 40
, "Kia|Soul EV": 37
, "Hyundai|Ioniq Electric": 34
, "Mercedes-Benz|EQV": 29
, "Jaguar|I-Pace": 28
, "Volkswagen|e-up!": 19
, "Honda|e": 16
, "Tesla|Model X": 16
, "Škoda|Citigo-e": 14
, "Opel|Corsa-e": 4
, "Nissan|e-NV200": 3
, "NEVS|9-3EV": 2
, "Peugeot|iOn": 1
, "other": 8
});

db.insert(db.countries.SE, "2020-12", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5986
, "Volkswagen": 5926
, "BMW": 2801
, "Toyota": 2597
, "Kia": 2365
, "Mercedes-Benz": 2337
, "Škoda": 2183
, "Audi": 1375
, "Tesla": 1064
, "Seat": 1048
, "Renault": 958
, "Peugeot": 892
, "Hyundai": 723
, "Ford": 578
, "Nissan": 534
, "Mitsubishi": 491
, "Mini": 313
, "Polestar": 262
, "Subaru": 240
, "Suzuki": 236
, "Opel": 221
, "Mazda": 211
, "Jeep": 184
, "Citroën": 183
, "Porsche": 182
, "Fiat": 160
, "Lexus": 154
, "Honda": 153
, "Dacia": 124
, "Jaguar": 42
, "DS Automobiles": 26
, "Land Rover": 24
, "Alfa Romeo": 21
, "Chevrolet": 6
, "other": 62
});

db.insert(db.countries.SE, "2020-12", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.3": 2569
, "Tesla|Model 3": 736
, "Hyundai|Kona Electric": 368
, "Kia|Niro EV": 360
, "Nissan|Leaf": 332
, "Polestar|2": 260
, "Renault|Zoe": 253
, "Tesla|Model S": 199
, "Audi|Q8 e-tron": 181
, "Volvo|XC40 Recharge pure electric": 177
, "Mercedes-Benz|EQC": 140
, "Tesla|Model X": 129
, "Mazda|MX-30": 104
, "Volkswagen|e-up!": 97
, "Honda|e": 78
, "Peugeot|e-208": 70
, "BMW|i3 BEV": 69
, "Hyundai|Ioniq Electric": 64
, "Kia|Soul EV": 57
, "Peugeot|e-2008": 56
, "Porsche|Taycan": 54
, "Škoda|Citigo-e": 54
, "Mini|Cooper SE Electric": 50
, "Volkswagen|e-Golf": 46
, "Jaguar|I-Pace": 39
, "Mercedes-Benz|EQV": 28
, "Volkswagen|e-Caddy": 26
, "Fiat|500e": 17
, "Opel|Corsa-e": 11
, "Seat|Mii Electric": 3
, "Ford|Mustang Mach-E": 1
, "Nissan|e-NV200": 1
, "other": 5
});

db.insert(db.countries.SE, "2021-01", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4237
, "Volkswagen": 2717
, "Kia": 2001
, "Toyota": 1808
, "Mercedes-Benz": 1537
, "BMW": 1367
, "Audi": 1185
, "Škoda": 922
, "Seat": 716
, "Peugeot": 596
, "Nissan": 562
, "Hyundai": 396
, "Renault": 341
, "Opel": 290
, "Ford": 247
, "Citroën": 208
, "Subaru": 163
, "Porsche": 154
, "Polestar": 150
, "Fiat": 133
, "Mini": 129
, "Lexus": 117
, "Mazda": 112
, "Mitsubishi": 91
, "Dacia": 78
, "Suzuki": 72
, "Honda": 70
, "Land Rover": 43
, "Tesla": 33
, "Jeep": 28
, "DS Automobiles": 19
, "Jaguar": 3
, "Alfa Romeo": 1
, "Chevrolet": 1
, "other": 46
});

db.insert(db.countries.SE, "2021-01", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 230
, "Polestar|2": 150
, "Nissan|Leaf": 120
, "Audi|Q8 e-tron": 105
, "Renault|Zoe": 58
, "Porsche|Taycan": 49
, "Škoda|Citigo-e": 44
, "Kia|Soul EV": 43
, "Volvo|XC40 Recharge pure electric": 38
, "Mercedes-Benz|EQC": 33
, "Tesla|Model 3": 32
, "Hyundai|Kona Electric": 30
, "BMW|i3 BEV": 28
, "Fiat|500e": 25
, "Peugeot|e-208": 25
, "Volkswagen|ID.3": 25
, "Mini|Cooper SE Electric": 17
, "Peugeot|e-2008": 12
, "Opel|Corsa-e": 8
, "Hyundai|Ioniq Electric": 5
, "Volkswagen|e-Golf": 3
, "Honda|e": 2
, "Nissan|e-NV200": 2
, "Volkswagen|e-up!": 2
, "Mercedes-Benz|eVito": 1
, "Seat|Mii Electric": 1
, "Tesla|Model X": 1
, "other": 17
});

db.insert(db.countries.SE, "2021-02", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 5163
, "Volkswagen": 2861
, "Kia": 2206
, "Toyota": 2019
, "Mercedes-Benz": 1530
, "BMW": 1319
, "Audi": 1095
, "Škoda": 1012
, "Seat": 787
, "Peugeot": 713
, "Hyundai": 471
, "Nissan": 469
, "Renault": 395
, "Ford": 341
, "Citroën": 321
, "Opel": 292
, "Subaru": 191
, "Porsche": 181
, "Mitsubishi": 179
, "Fiat": 168
, "Polestar": 153
, "Mazda": 140
, "Tesla": 134
, "Mini": 128
, "Suzuki": 108
, "Lexus": 100
, "Dacia": 90
, "Honda": 70
, "Land Rover": 38
, "Jeep": 27
, "Jaguar": 19
, "DS Automobiles": 18
, "Alfa Romeo": 12
, "Chevrolet": 3
, "Cadillac": 1
, "Dodge": 1
, "other": 82
});

db.insert(db.countries.SE, "2021-02", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 165
, "Polestar|2": 151
, "Volkswagen|ID.3": 148
, "Audi|Q8 e-tron": 145
, "Tesla|Model 3": 133
, "Nissan|Leaf": 117
, "Volvo|XC40 Recharge pure electric": 72
, "Peugeot|e-2008": 67
, "Renault|Zoe": 54
, "Kia|Soul EV": 44
, "Hyundai|Kona Electric": 34
, "Porsche|Taycan": 34
, "BMW|i3 BEV": 27
, "Opel|Corsa-e": 26
, "Volkswagen|ID.4": 26
, "Fiat|500e": 21
, "Mercedes-Benz|EQC": 21
, "Hyundai|Ioniq Electric": 13
, "Škoda|Citigo-e": 11
, "Jaguar|I-Pace": 10
, "Nissan|e-NV200": 10
, "Peugeot|e-208": 10
, "BMW|iX3": 9
, "Mini|Cooper SE Electric": 8
, "Mazda|MX-30": 5
, "Seat|Mii Electric": 3
, "Volkswagen|e-Golf": 3
, "Honda|e": 2
, "Mercedes-Benz|EQV": 2
, "NEVS|9-3EV": 2
, "Volkswagen|e-up!": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Mercedes-Benz|eVito": 1
, "Tesla|Model X": 1
, "other": 16
});

db.insert(db.countries.SE, "2021-03", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 11866
, "Volkswagen": 4651
, "Toyota": 3649
, "Kia": 3580
, "BMW": 2601
, "Mercedes-Benz": 2517
, "Audi": 2031
, "Škoda": 1815
, "Peugeot": 1495
, "Seat": 1478
, "Nissan": 1254
, "Tesla": 1192
, "Renault": 1129
, "Fiat": 1064
, "Ford": 1020
, "Hyundai": 984
, "Citroën": 616
, "Opel": 579
, "Mazda": 547
, "Subaru": 537
, "Mitsubishi": 458
, "Mini": 386
, "Porsche": 344
, "Dacia": 328
, "Suzuki": 288
, "Lexus": 278
, "Honda": 171
, "Polestar": 129
, "Jeep": 105
, "Land Rover": 104
, "DS Automobiles": 40
, "Jaguar": 25
, "Alfa Romeo": 22
, "Chevrolet": 5
, "Maserati": 5
, "Cadillac": 3
, "other": 164
});

db.insert(db.countries.SE, "2021-03", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model 3": 1192
, "Kia|Niro EV": 322
, "Nissan|Leaf": 156
, "Volkswagen|ID.3": 132
, "Polestar|2": 129
, "Volkswagen|ID.4": 87
, "Renault|Zoe": 73
, "Audi|Q8 e-tron": 66
, "Volvo|XC40 Recharge pure electric": 66
, "Porsche|Taycan": 44
, "Kia|Soul EV": 39
, "Mercedes-Benz|EQC": 34
, "Opel|Corsa-e": 34
, "BMW|i3 BEV": 33
, "Fiat|500e": 28
, "Hyundai|Kona Electric": 26
, "Mini|Cooper SE Electric": 26
, "Mercedes-Benz|EQA": 19
, "Mazda|MX-30": 18
, "Peugeot|e-2008": 17
, "BMW|iX3": 14
, "Škoda|Citigo-e": 9
, "Peugeot|e-208": 7
, "Volkswagen|e-up!": 5
, "Audi|e-tron GT": 4
, "Lexus|UX 300e": 4
, "Hyundai|Ioniq Electric": 3
, "Mercedes-Benz|EQV": 3
, "Mercedes-Benz|eVito": 3
, "Nissan|e-NV200": 2
, "Seat|Mii Electric": 2
, "Citroën|ë-C4": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Honda|e": 1
, "Jaguar|I-Pace": 1
, "Volkswagen|e-Golf": 1
, "other": 7
});

db.insert(db.countries.SE, "2021-04", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 3464
, "Volvo": 2592
, "Kia": 2118
, "Toyota": 2013
, "Audi": 1891
, "Mercedes-Benz": 1642
, "BMW": 1300
, "Škoda": 873
, "Peugeot": 831
, "Seat": 689
, "Hyundai": 652
, "Nissan": 394
, "Renault": 357
, "Citroën": 340
, "Fiat": 329
, "Mini": 325
, "Ford": 324
, "Opel": 320
, "Polestar": 280
, "Porsche": 245
, "Dacia": 165
, "Suzuki": 160
, "Subaru": 101
, "Lexus": 76
, "Mazda": 72
, "Honda": 69
, "Mitsubishi": 42
, "Land Rover": 39
, "Jaguar": 24
, "DS Automobiles": 16
, "Tesla": 11
, "Jeep": 7
, "Alfa Romeo": 5
, "Chevrolet": 4
, "Dodge": 2
, "Maserati": 1
, "other": 98
});

db.insert(db.countries.SE, "2021-04", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.4": 1444
, "Volkswagen|ID.3": 469
, "Kia|Niro EV": 403
, "Audi|Q8 e-tron": 347
, "Polestar|2": 280
, "Nissan|Leaf": 234
, "Hyundai|Kona Electric": 191
, "Volvo|XC40 Recharge pure electric": 161
, "Škoda|Enyaq": 150
, "Renault|Zoe": 138
, "Peugeot|e-2008": 112
, "Mercedes-Benz|EQC": 101
, "Peugeot|e-208": 97
, "Porsche|Taycan": 89
, "BMW|i3 BEV": 67
, "Kia|Soul EV": 67
, "Mini|Cooper SE Electric": 61
, "Mercedes-Benz|EQA": 57
, "BMW|iX3": 49
, "Opel|Corsa-e": 47
, "Fiat|500e": 44
, "Mazda|MX-30": 40
, "Hyundai|Ioniq Electric": 38
, "Seat|Mii Electric": 30
, "Volkswagen|e-up!": 20
, "Citroën|ë-C4": 19
, "Opel|Mokka-e": 19
, "Lexus|UX 300e": 16
, "Audi|e-tron GT": 13
, "Tesla|Model 3": 11
, "Škoda|Citigo-e": 9
, "Honda|e": 7
, "Toyota|Proace Electric": 7
, "Jaguar|I-Pace": 6
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Mercedes-Benz|EQV": 3
, "Peugeot|e-Expert": 3
, "Volkswagen|e-Golf": 3
, "Nissan|e-NV200": 2
, "Dacia|Spring": 1
, "Mercedes-Benz|eVito": 1
, "other": 10
});

db.insert(db.countries.SE, "2021-05", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 3541
, "Volvo": 2681
, "Toyota": 2353
, "Kia": 2127
, "Audi": 1727
, "Mercedes-Benz": 1623
, "BMW": 1459
, "Škoda": 1428
, "Peugeot": 1008
, "Seat": 839
, "Hyundai": 676
, "Fiat": 573
, "Renault": 526
, "Ford": 402
, "Opel": 380
, "Citroën": 370
, "Mini": 345
, "Nissan": 330
, "Polestar": 277
, "Porsche": 241
, "Dacia": 234
, "Tesla": 228
, "Suzuki": 166
, "Mazda": 163
, "Lexus": 109
, "Subaru": 109
, "Honda": 86
, "Land Rover": 40
, "Jeep": 38
, "Jaguar": 35
, "Mitsubishi": 27
, "MG": 15
, "DS Automobiles": 12
, "Alfa Romeo": 10
, "Chevrolet": 4
, "Dodge": 1
, "other": 144
});

db.insert(db.countries.SE, "2021-05", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.4": 693
, "Kia|Niro EV": 430
, "Škoda|Enyaq": 364
, "Volkswagen|ID.3": 343
, "Polestar|2": 276
, "Audi|Q8 e-tron": 242
, "Tesla|Model 3": 228
, "Nissan|Leaf": 215
, "Renault|Zoe": 132
, "Volvo|XC40 Recharge pure electric": 131
, "Hyundai|Kona Electric": 91
, "Mazda|MX-30": 75
, "Peugeot|e-208": 72
, "Mercedes-Benz|EQC": 68
, "Fiat|500e": 65
, "Porsche|Taycan": 62
, "Kia|Soul EV": 49
, "Mercedes-Benz|EQA": 44
, "Opel|Mokka-e": 44
, "BMW|i3 BEV": 43
, "Mini|Cooper SE Electric": 36
, "BMW|iX3": 34
, "Peugeot|e-2008": 34
, "Volvo|other": 33
, "Hyundai|Ioniq Electric": 26
, "Seat|Mii Electric": 19
, "Audi|e-tron GT": 18
, "Opel|Corsa-e": 16
, "Citroën|ë-C4": 14
, "Honda|e": 9
, "Lexus|UX 300e": 9
, "Jaguar|I-Pace": 6
, "Škoda|Citigo-e": 5
, "Volkswagen|e-up!": 4
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "MG|ZS EV": 3
, "Mercedes-Benz|EQV": 3
, "Mercedes-Benz|eVito": 3
, "Nissan|e-NV200": 2
, "Toyota|Proace Electric": 2
, "Peugeot|e-Expert": 1
, "other": 2
});

db.insert(db.countries.SE, "2021-06", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 5368
, "Volvo": 5295
, "Kia": 2939
, "Toyota": 2757
, "Škoda": 1967
, "Audi": 1962
, "MG": 1685
, "Mercedes-Benz": 1665
, "BMW": 1606
, "Tesla": 1499
, "Peugeot": 1400
, "Hyundai": 973
, "Seat": 959
, "Renault": 923
, "Ford": 880
, "Fiat": 579
, "Citroën": 467
, "Opel": 396
, "Polestar": 388
, "Nissan": 349
, "Mini": 334
, "Subaru": 220
, "Dacia": 205
, "Porsche": 200
, "Mazda": 188
, "Suzuki": 171
, "Lexus": 157
, "Honda": 126
, "Mitsubishi": 56
, "Alfa Romeo": 40
, "Jeep": 37
, "Land Rover": 32
, "DS Automobiles": 25
, "Jaguar": 14
, "Chevrolet": 6
, "Dodge": 1
, "Maserati": 1
, "Smart": 1
, "other": 224
});

db.insert(db.countries.SE, "2021-06", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "MG|ZS EV": 1665
, "Tesla|Model 3": 1499
, "Volkswagen|ID.4": 1229
, "Kia|Niro EV": 691
, "Škoda|Enyaq": 640
, "Volkswagen|ID.3": 475
, "Polestar|2": 387
, "Renault|Zoe": 217
, "Nissan|Leaf": 208
, "Ford|Mustang Mach-E": 166
, "BMW|iX3": 147
, "Volvo|XC40 Recharge pure electric": 134
, "Audi|Q8 e-tron": 130
, "Audi|Q4 e-tron": 114
, "Mini|Cooper SE Electric": 97
, "Peugeot|e-2008": 94
, "Mercedes-Benz|EQC": 87
, "Hyundai|Kona Electric": 80
, "Mercedes-Benz|EQA": 76
, "BMW|i3 BEV": 68
, "Fiat|500e": 59
, "Opel|Mokka-e": 59
, "Peugeot|e-208": 59
, "Mazda|MX-30": 43
, "Hyundai|Ioniq Electric": 35
, "Audi|e-tron GT": 34
, "Kia|Soul EV": 27
, "Porsche|Taycan": 27
, "Opel|Corsa-e": 25
, "Citroën|ë-C4": 18
, "Lexus|UX 300e": 17
, "Seat|Mii Electric": 16
, "Honda|e": 14
, "Mercedes-Benz|EQV": 7
, "DS Automobiles|DS 3 Crossback E-Tense": 5
, "Peugeot|e-Expert": 5
, "Toyota|Proace Electric": 5
, "Volkswagen|e-up!": 5
, "Nissan|e-NV200": 2
, "Škoda|Citigo-e": 2
, "Mercedes-Benz|eVito": 1
, "other": 18
});

db.insert(db.countries.SE, "2021-07", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 2210
, "Kia": 2053
, "Volvo": 1883
, "Toyota": 1625
, "Audi": 929
, "BMW": 904
, "Mercedes-Benz": 885
, "Peugeot": 754
, "Škoda": 668
, "Seat": 599
, "Hyundai": 509
, "Ford": 483
, "Fiat": 469
, "Citroën": 421
, "Opel": 316
, "Renault": 284
, "Nissan": 281
, "Subaru": 230
, "MG": 201
, "Dacia": 171
, "Mini": 156
, "Porsche": 151
, "Mazda": 126
, "Suzuki": 122
, "Lexus": 111
, "Honda": 57
, "Land Rover": 27
, "Polestar": 27
, "Alfa Romeo": 25
, "Jeep": 22
, "Jaguar": 17
, "DS Automobiles": 13
, "Tesla": 6
, "Chevrolet": 2
, "Mitsubishi": 1
, "other": 40
});

db.insert(db.countries.SE, "2021-07", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 587
, "Volkswagen|ID.3": 206
, "Ford|Mustang Mach-E": 177
, "Volkswagen|ID.4": 176
, "MG|ZS EV": 168
, "Škoda|Enyaq": 129
, "Audi|Q4 e-tron": 99
, "Nissan|Leaf": 92
, "Mini|Cooper SE Electric": 68
, "BMW|iX3": 65
, "Peugeot|e-208": 62
, "Peugeot|e-2008": 52
, "BMW|i3 BEV": 51
, "Mercedes-Benz|EQA": 49
, "Audi|Q8 e-tron": 48
, "Fiat|500e": 47
, "Mazda|MX-30": 45
, "Citroën|ë-C4": 40
, "Volvo|XC40 Recharge pure electric": 40
, "Renault|Zoe": 38
, "Mercedes-Benz|EQC": 35
, "Audi|e-tron GT": 33
, "Hyundai|Kona Electric": 33
, "Porsche|Taycan": 31
, "Kia|Soul EV": 25
, "Polestar|2": 24
, "Hyundai|Ioniq Electric": 23
, "Opel|Mokka-e": 23
, "Seat|Mii Electric": 12
, "Opel|Corsa-e": 10
, "Hyundai|Ioniq 5": 8
, "Lexus|UX 300e": 7
, "Honda|e": 6
, "Tesla|Model 3": 6
, "Jaguar|I-Pace": 3
, "Toyota|Proace Electric": 3
, "Volkswagen|e-Caddy": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Mercedes-Benz|EQV": 1
, "Nissan|e-NV200": 1
, "Peugeot|e-Expert": 1
, "Volkswagen|e-up!": 1
, "other": 6
});

db.insert(db.countries.SE, "2021-08", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 2558
, "Kia": 2338
, "Toyota": 1771
, "Volvo": 1555
, "BMW": 1190
, "Ford": 1069
, "Mercedes-Benz": 1044
, "Audi": 1027
, "Škoda": 784
, "Hyundai": 690
, "Peugeot": 688
, "Seat": 585
, "MG": 517
, "Dacia": 480
, "Renault": 464
, "Fiat": 383
, "Opel": 354
, "Nissan": 342
, "Citroën": 311
, "Mazda": 270
, "Tesla": 249
, "Subaru": 182
, "Mini": 173
, "Porsche": 138
, "Suzuki": 116
, "Lexus": 112
, "Polestar": 107
, "Honda": 73
, "Land Rover": 37
, "Alfa Romeo": 33
, "Jeep": 17
, "Jaguar": 15
, "DS Automobiles": 10
, "Chevrolet": 2
, "Cadillac": 1
, "Dodge": 1
, "Smart": 1
, "other": 121
});

db.insert(db.countries.SE, "2021-08", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 731
, "Volkswagen|ID.4": 553
, "MG|ZS EV": 465
, "Volkswagen|ID.3": 344
, "Ford|Mustang Mach-E": 303
, "Nissan|Leaf": 179
, "Škoda|Enyaq": 164
, "Audi|Q8 e-tron": 156
, "Mazda|MX-30": 156
, "Tesla|Model Y": 152
, "Audi|Q4 e-tron": 107
, "Polestar|2": 106
, "Peugeot|e-2008": 104
, "Renault|Zoe": 99
, "Tesla|Model 3": 97
, "Hyundai|Kona Electric": 94
, "Mini|Cooper SE Electric": 83
, "BMW|i3 BEV": 79
, "BMW|iX3": 79
, "Mercedes-Benz|EQC": 73
, "Fiat|500e": 68
, "Kia|Soul EV": 68
, "Mercedes-Benz|EQA": 67
, "Hyundai|Ioniq 5": 60
, "Porsche|Taycan": 49
, "Audi|e-tron GT": 45
, "Peugeot|e-208": 45
, "Volvo|XC40 Recharge pure electric": 41
, "Opel|Corsa-e": 32
, "Opel|Mokka-e": 32
, "Citroën|ë-C4": 29
, "Volvo|other": 27
, "Hyundai|Ioniq Electric": 23
, "Toyota|Proace Electric": 14
, "Seat|Mii Electric": 12
, "Honda|e": 11
, "Lexus|UX 300e": 11
, "Mercedes-Benz|EQV": 7
, "Mercedes-Benz|eVito": 4
, "Jaguar|I-Pace": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Nissan|e-NV200": 1
, "Peugeot|e-Expert": 1
, "Volkswagen|e-up!": 1
, "other": 5
});

db.insert(db.countries.SE, "2021-09", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia": 2869
, "Volkswagen": 2530
, "Volvo": 2085
, "Tesla": 1979
, "Toyota": 1421
, "Ford": 1170
, "Mercedes-Benz": 1058
, "Audi": 985
, "BMW": 974
, "MG": 970
, "Škoda": 880
, "Hyundai": 800
, "Peugeot": 564
, "Seat": 501
, "Renault": 481
, "Nissan": 422
, "Opel": 384
, "Fiat": 331
, "Subaru": 318
, "Citroën": 307
, "Mazda": 270
, "Suzuki": 192
, "Polestar": 189
, "Dacia": 168
, "Lexus": 115
, "Honda": 98
, "Mini": 96
, "Porsche": 91
, "Land Rover": 53
, "Jeep": 25
, "DS Automobiles": 19
, "Jaguar": 15
, "Alfa Romeo": 12
, "Cadillac": 3
, "Chevrolet": 3
, "Maserati": 1
, "other": 255
});

db.insert(db.countries.SE, "2021-09", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model Y": 1213
, "Kia|Niro EV": 858
, "MG|ZS EV": 854
, "Tesla|Model 3": 766
, "Volkswagen|ID.4": 643
, "Volkswagen|ID.3": 404
, "Škoda|Enyaq": 347
, "Ford|Mustang Mach-E": 277
, "Nissan|Leaf": 256
, "Audi|Q8 e-tron": 191
, "Polestar|2": 188
, "Audi|Q4 e-tron": 178
, "Mazda|MX-30": 129
, "Renault|Zoe": 112
, "Hyundai|Kona Electric": 109
, "BMW|i3 BEV": 108
, "Fiat|500e": 105
, "Peugeot|e-2008": 74
, "Mercedes-Benz|EQA": 66
, "Mercedes-Benz|EQC": 50
, "BMW|iX3": 45
, "Kia|Soul EV": 45
, "Opel|Corsa-e": 44
, "Volvo|XC40 Recharge pure electric": 38
, "Mini|Cooper SE Electric": 37
, "Hyundai|Ioniq 5": 36
, "Hyundai|Ioniq Electric": 34
, "Opel|Mokka-e": 30
, "Porsche|Taycan": 30
, "Volvo|other": 30
, "Citroën|ë-C4": 27
, "Peugeot|e-208": 27
, "Audi|e-tron GT": 20
, "Seat|Mii Electric": 18
, "Volkswagen|e-up!": 12
, "Honda|e": 10
, "Mercedes-Benz|EQV": 10
, "Toyota|Proace Electric": 10
, "Lexus|UX 300e": 6
, "Mercedes-Benz|EQS": 3
, "Jaguar|I-Pace": 2
, "Mercedes-Benz|eVito": 2
, "Peugeot|e-Expert": 2
, "BMW|iX": 1
, "Nissan|e-NV200": 1
, "Opel|Zafira-e": 1
, "Volkswagen|e-Caddy": 1
, "other": 4
});

db.insert(db.countries.SE, "2021-10", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3074
, "Kia": 2571
, "Volkswagen": 2219
, "Toyota": 1476
, "Mercedes-Benz": 1082
, "BMW": 920
, "Ford": 890
, "Škoda": 878
, "Hyundai": 812
, "Audi": 781
, "Peugeot": 548
, "MG": 531
, "Renault": 496
, "Nissan": 476
, "Seat": 411
, "Polestar": 379
, "Opel": 346
, "Subaru": 272
, "Citroën": 247
, "Fiat": 199
, "Suzuki": 192
, "Mazda": 188
, "Mini": 162
, "Porsche": 154
, "Dacia": 135
, "Lexus": 107
, "Honda": 77
, "Tesla": 36
, "Land Rover": 35
, "Jeep": 26
, "DS Automobiles": 22
, "Jaguar": 17
, "Mitsubishi": 8
, "Alfa Romeo": 6
, "Chevrolet": 5
, "Maserati": 2
, "Cadillac": 1
, "other": 181
});

db.insert(db.countries.SE, "2021-10", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.4": 640
, "Škoda|Enyaq": 380
, "Polestar|2": 379
, "Kia|Niro EV": 358
, "Nissan|Leaf": 346
, "MG|ZS EV": 275
, "Volkswagen|ID.3": 270
, "Ford|Mustang Mach-E": 246
, "Volvo|XC40 Recharge pure electric": 145
, "BMW|i3 BEV": 130
, "Hyundai|Ioniq 5": 107
, "Audi|Q8 e-tron": 105
, "Hyundai|Kona Electric": 103
, "Renault|Zoe": 96
, "Mazda|MX-30": 89
, "Opel|Mokka-e": 77
, "Porsche|Taycan": 76
, "Audi|Q4 e-tron": 69
, "Mini|Cooper SE Electric": 56
, "Peugeot|e-2008": 55
, "Mercedes-Benz|EQS": 54
, "Kia|Soul EV": 49
, "BMW|iX3": 48
, "Mercedes-Benz|EQA": 41
, "Opel|Corsa-e": 40
, "Fiat|500e": 38
, "Tesla|Model 3": 34
, "Mercedes-Benz|EQC": 30
, "Citroën|ë-C4": 28
, "Hyundai|Ioniq Electric": 24
, "Peugeot|e-208": 24
, "Audi|e-tron GT": 21
, "Seat|Mii Electric": 19
, "Volkswagen|e-up!": 15
, "Honda|e": 14
, "Toyota|Proace Electric": 14
, "Kia|EV6": 11
, "BMW|iX": 10
, "Jaguar|I-Pace": 7
, "Mercedes-Benz|EQV": 7
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Nissan|e-NV200": 3
, "Lexus|UX 300e": 2
, "Peugeot|e-Expert": 2
, "Tesla|Model Y": 2
, "Mercedes-Benz|eVito": 1
, "Opel|Zafira-e": 1
, "other": 29
});

db.insert(db.countries.SE, "2021-11", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3334
, "Kia": 2679
, "Volkswagen": 2251
, "Toyota": 1407
, "BMW": 1262
, "Ford": 1168
, "Mercedes-Benz": 1060
, "Renault": 807
, "Škoda": 800
, "Hyundai": 729
, "Peugeot": 694
, "Nissan": 597
, "Audi": 591
, "Polestar": 443
, "Seat": 333
, "Opel": 328
, "MG": 308
, "Citroën": 303
, "Tesla": 299
, "Mini": 238
, "Porsche": 185
, "Suzuki": 179
, "Subaru": 173
, "Fiat": 172
, "Mazda": 121
, "Dacia": 107
, "Honda": 76
, "Lexus": 53
, "Cupra": 43
, "DS Automobiles": 34
, "Land Rover": 16
, "Jaguar": 10
, "Jeep": 8
, "Mitsubishi": 7
, "Chevrolet": 4
, "Cadillac": 1
, "other": 236
});

db.insert(db.countries.SE, "2021-11", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.4": 583
, "Nissan|Leaf": 448
, "Polestar|2": 443
, "Kia|Niro EV": 365
, "Kia|EV6": 355
, "Renault|Zoe": 300
, "Ford|Mustang Mach-E": 265
, "Škoda|Enyaq": 242
, "Volkswagen|ID.3": 233
, "Tesla|Model Y": 181
, "Peugeot|e-208": 169
, "Peugeot|e-2008": 144
, "Tesla|Model 3": 118
, "Volvo|C40 Recharge": 113
, "Hyundai|Ioniq 5": 106
, "BMW|i3 BEV": 105
, "Mini|Cooper SE Electric": 104
, "Volkswagen|e-up!": 92
, "Porsche|Taycan": 85
, "Hyundai|Kona Electric": 80
, "MG|ZS EV": 71
, "Audi|Q8 e-tron": 70
, "Volvo|XC40 Recharge pure electric": 68
, "BMW|iX3": 66
, "Mercedes-Benz|EQA": 63
, "Kia|Soul EV": 56
, "MG|Marvel R": 54
, "BMW|iX": 53
, "Audi|Q4 e-tron": 50
, "Mazda|MX-30": 49
, "Opel|Mokka-e": 47
, "Cupra|Born": 43
, "Mercedes-Benz|EQC": 29
, "Opel|Corsa-e": 29
, "Audi|e-tron GT": 23
, "Fiat|500e": 23
, "Citroën|ë-C4": 22
, "Hyundai|Ioniq Electric": 21
, "Honda|e": 17
, "Opel|Zafira-e": 16
, "Lexus|UX 300e": 14
, "Seat|Mii Electric": 11
, "Toyota|Proace Electric": 10
, "Mercedes-Benz|EQV": 3
, "Mercedes-Benz|eVito": 3
, "Opel|Combo-e": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Jaguar|I-Pace": 2
, "other": 19
});

db.insert(db.countries.SE, "2021-12", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4455
, "Volkswagen": 3534
, "Tesla": 2414
, "Kia": 2386
, "Toyota": 1625
, "Ford": 1571
, "Renault": 1532
, "BMW": 1303
, "Hyundai": 1131
, "Mercedes-Benz": 1092
, "Nissan": 889
, "Audi": 860
, "Škoda": 811
, "Peugeot": 553
, "Seat": 354
, "Polestar": 342
, "Citroën": 328
, "Porsche": 307
, "Mini": 292
, "MG": 281
, "Dacia": 231
, "Suzuki": 224
, "Subaru": 206
, "Opel": 145
, "Honda": 101
, "Fiat": 91
, "Lexus": 91
, "Cupra": 66
, "Mazda": 65
, "Land Rover": 64
, "Jeep": 24
, "DS Automobiles": 23
, "Chevrolet": 12
, "Cadillac": 11
, "Alfa Romeo": 5
, "Jaguar": 5
, "Mitsubishi": 3
, "Maserati": 1
, "Smart": 1
, "other": 176
});

db.insert(db.countries.SE, "2021-12", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model Y": 1532
, "Volkswagen|ID.4": 1103
, "Renault|Zoe": 1030
, "Tesla|Model 3": 882
, "Kia|Niro EV": 750
, "Nissan|Leaf": 720
, "Hyundai|Ioniq 5": 575
, "Ford|Mustang Mach-E": 387
, "Polestar|2": 342
, "Volkswagen|ID.3": 335
, "Škoda|Enyaq": 283
, "Kia|EV6": 231
, "BMW|i3 BEV": 184
, "Volvo|XC40 Recharge pure electric": 177
, "Porsche|Taycan": 152
, "Mini|Cooper SE Electric": 133
, "Peugeot|e-208": 110
, "Peugeot|e-2008": 107
, "Audi|Q8 e-tron": 102
, "Volvo|C40 Recharge": 90
, "Hyundai|Kona Electric": 76
, "BMW|iX": 73
, "BMW|iX3": 66
, "Cupra|Born": 66
, "Mercedes-Benz|EQA": 62
, "Audi|Q4 e-tron": 61
, "Kia|Soul EV": 51
, "MG|Marvel R": 43
, "Opel|Corsa-e": 42
, "Citroën|ë-C4": 37
, "Volkswagen|e-up!": 32
, "MG|ZS EV": 29
, "Lexus|UX 300e": 28
, "Audi|e-tron GT": 20
, "Mercedes-Benz|EQC": 19
, "Honda|e": 16
, "Mazda|MX-30": 14
, "BMW|i4": 13
, "Opel|Mokka-e": 13
, "Fiat|500e": 10
, "Seat|Mii Electric": 7
, "Mercedes-Benz|EQS": 6
, "Peugeot|e-Expert": 6
, "Hyundai|Ioniq Electric": 4
, "Mercedes-Benz|eVito": 4
, "Opel|Zafira-e": 4
, "Toyota|Proace Electric": 3
, "Opel|Combo-e": 2
, "other": 12
});

db.insert(db.countries.SE, "2022-01", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3721
, "Kia": 2827
, "Volkswagen": 2333
, "Toyota": 1634
, "BMW": 1147
, "Ford": 1007
, "Audi": 841
, "Škoda": 830
, "Mercedes-Benz": 792
, "Peugeot": 505
, "Hyundai": 473
, "Renault": 447
, "MG": 388
, "Nissan": 367
, "Seat": 296
, "Opel": 293
, "Dacia": 278
, "Polestar": 248
, "Citroën": 213
, "Mini": 194
, "Porsche": 169
, "Suzuki": 128
, "Mitsubishi": 92
, "Subaru": 88
, "Lexus": 72
, "Honda": 67
, "Mazda": 60
, "Fiat": 59
, "DS Automobiles": 38
, "Land Rover": 33
, "Cupra": 20
, "Jeep": 11
, "Tesla": 11
, "Alfa Romeo": 2
, "Jaguar": 1
, "Maserati": 1
, "other": 207
});

db.insert(db.countries.SE, "2022-01", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 996
, "Volkswagen|ID.4": 683
, "Volvo|XC40 Recharge pure electric": 467
, "Kia|EV6": 293
, "Nissan|Leaf": 255
, "Polestar|2": 247
, "BMW|i3 BEV": 219
, "Škoda|Enyaq": 200
, "Audi|Q4 e-tron": 156
, "Peugeot|e-2008": 136
, "Ford|Mustang Mach-E": 119
, "Volkswagen|ID.3": 117
, "Hyundai|Ioniq 5": 112
, "Opel|Mokka-e": 110
, "Porsche|Taycan": 96
, "Mini|Cooper SE Electric": 82
, "Audi|Q8 e-tron": 78
, "Hyundai|Kona Electric": 72
, "Kia|Soul EV": 68
, "Peugeot|e-208": 68
, "Volvo|C40 Recharge": 67
, "Opel|Corsa-e": 57
, "Mercedes-Benz|EQA": 55
, "Mercedes-Benz|EQB": 53
, "MG|ZS EV": 48
, "Renault|Zoe": 48
, "BMW|iX": 42
, "BMW|iX3": 31
, "Cupra|Born": 20
, "MG|Marvel R": 19
, "Citroën|ë-C4": 17
, "Honda|e": 17
, "Fiat|500e": 13
, "Mercedes-Benz|EQC": 10
, "Audi|e-tron GT": 8
, "Mazda|MX-30": 8
, "Mercedes-Benz|EQS": 8
, "Tesla|Model Y": 8
, "Toyota|Proace Electric": 6
, "Lexus|UX 300e": 3
, "Mercedes-Benz|EQV": 3
, "Tesla|Model 3": 3
, "BMW|i4": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Opel|Zafira-e": 2
, "Peugeot|e-Expert": 1
, "other": 34
});

db.insert(db.countries.SE, "2022-02", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3979
, "Kia": 2170
, "Toyota": 1886
, "Volkswagen": 1862
, "BMW": 1611
, "Škoda": 1051
, "Mercedes-Benz": 896
, "Audi": 893
, "Ford": 787
, "Tesla": 769
, "Peugeot": 583
, "Hyundai": 526
, "Polestar": 436
, "MG": 387
, "Nissan": 359
, "Opel": 319
, "Renault": 313
, "Seat": 275
, "Dacia": 245
, "Porsche": 234
, "Subaru": 231
, "Citroën": 207
, "Mini": 197
, "Suzuki": 175
, "Honda": 130
, "Fiat": 105
, "Mazda": 92
, "Lexus": 82
, "Mitsubishi": 40
, "DS Automobiles": 35
, "Land Rover": 34
, "Jeep": 31
, "Cupra": 12
, "Alfa Romeo": 10
, "Jaguar": 7
, "Maserati": 2
, "Chevrolet": 1
, "other": 164
});

db.insert(db.countries.SE, "2022-02", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 711
, "Tesla|Model Y": 583
, "Polestar|2": 436
, "Volkswagen|ID.4": 433
, "Volvo|XC40 Recharge pure electric": 303
, "BMW|i3 BEV": 285
, "Škoda|Enyaq": 211
, "Audi|Q4 e-tron": 209
, "Kia|EV6": 198
, "Tesla|Model 3": 186
, "Nissan|Leaf": 171
, "Peugeot|e-2008": 151
, "MG|ZS EV": 143
, "Hyundai|Kona Electric": 122
, "Opel|Mokka-e": 113
, "Volkswagen|ID.3": 110
, "Ford|Mustang Mach-E": 108
, "Porsche|Taycan": 85
, "Volvo|C40 Recharge": 69
, "Opel|Corsa-e": 66
, "Audi|Q8 e-tron": 64
, "Hyundai|Ioniq 5": 63
, "Peugeot|e-208": 62
, "Mini|Cooper SE Electric": 61
, "BMW|iX3": 53
, "Kia|Soul EV": 49
, "MG|Marvel R": 46
, "Renault|Zoe": 45
, "Mercedes-Benz|EQA": 37
, "BMW|iX": 30
, "Fiat|500e": 25
, "Citroën|ë-C4": 24
, "Audi|e-tron GT": 18
, "Mercedes-Benz|EQB": 17
, "Honda|e": 14
, "Mercedes-Benz|EQC": 13
, "Peugeot|e-Rifter": 13
, "Cupra|Born": 12
, "BMW|i4": 11
, "Mercedes-Benz|EQS": 10
, "Mazda|MX-30": 8
, "Mercedes-Benz|EQV": 7
, "Peugeot|e-Expert": 6
, "Hyundai|Ioniq Electric": 5
, "Toyota|Proace Electric": 5
, "Jaguar|I-Pace": 3
, "Lexus|UX 300e": 3
, "Opel|Zafira-e": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Mercedes-Benz|eVito": 2
, "other": 9
});

db.insert(db.countries.SE, "2022-03", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4744
, "Volkswagen": 2948
, "Kia": 2874
, "Tesla": 2353
, "Toyota": 2216
, "BMW": 1825
, "Mercedes-Benz": 1618
, "Audi": 1509
, "Ford": 838
, "Škoda": 782
, "Peugeot": 774
, "Nissan": 668
, "Renault": 635
, "Hyundai": 521
, "Polestar": 507
, "MG": 456
, "Opel": 409
, "Fiat": 369
, "Seat": 316
, "Porsche": 303
, "Subaru": 268
, "Mini": 265
, "Dacia": 254
, "Suzuki": 213
, "Citroën": 166
, "Honda": 134
, "Mazda": 119
, "Lexus": 110
, "Jeep": 75
, "Cupra": 72
, "Land Rover": 54
, "Mitsubishi": 52
, "DS Automobiles": 39
, "Alfa Romeo": 14
, "Jaguar": 9
, "Chevrolet": 6
, "other": 195
});

db.insert(db.countries.SE, "2022-03", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model Y": 1363
, "Tesla|Model 3": 990
, "Volkswagen|ID.4": 906
, "Kia|Niro EV": 773
, "Volvo|XC40 Recharge pure electric": 596
, "Polestar|2": 505
, "Nissan|Leaf": 402
, "BMW|i3 BEV": 373
, "Audi|Q4 e-tron": 328
, "Kia|EV6": 282
, "Ford|Mustang Mach-E": 194
, "Volkswagen|ID.3": 169
, "Peugeot|e-208": 156
, "Peugeot|e-2008": 151
, "MG|ZS EV": 139
, "Audi|Q8 e-tron": 136
, "Škoda|Enyaq": 129
, "Renault|Zoe": 104
, "Mini|Cooper SE Electric": 96
, "Porsche|Taycan": 94
, "Volvo|C40 Recharge": 94
, "MG|MG5 EV": 92
, "BMW|iX": 90
, "Opel|Mokka-e": 79
, "Cupra|Born": 72
, "Opel|Corsa-e": 72
, "Fiat|500e": 69
, "BMW|iX3": 67
, "BMW|i4": 65
, "Mercedes-Benz|EQB": 64
, "Hyundai|Ioniq 5": 57
, "Mercedes-Benz|EQA": 56
, "Mercedes-Benz|EQS": 47
, "Kia|Soul EV": 37
, "Mercedes-Benz|EQC": 33
, "Hyundai|Kona Electric": 29
, "MG|Marvel R": 28
, "Audi|e-tron GT": 24
, "Citroën|ë-C4": 21
, "Mercedes-Benz|EQV": 19
, "DS Automobiles|DS 3 Crossback E-Tense": 18
, "Honda|e": 17
, "Peugeot|e-Expert": 17
, "Peugeot|e-Rifter": 16
, "Lexus|UX 300e": 10
, "Opel|Zafira-e": 9
, "Mazda|MX-30": 7
, "Toyota|Proace Electric": 7
, "Citroën|Berlingo Electric": 6
, "other": 34
});

db.insert(db.countries.SE, "2022-04", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3319
, "Kia": 2749
, "Volkswagen": 2179
, "Toyota": 2060
, "BMW": 1535
, "Mercedes-Benz": 1272
, "Audi": 985
, "Škoda": 775
, "Renault": 685
, "Nissan": 654
, "Peugeot": 620
, "Ford": 557
, "Polestar": 498
, "Hyundai": 416
, "Fiat": 386
, "MG": 384
, "Opel": 341
, "Seat": 315
, "Dacia": 276
, "Citroën": 260
, "Porsche": 231
, "Mazda": 171
, "Mini": 165
, "Suzuki": 165
, "Subaru": 159
, "Cupra": 133
, "Honda": 119
, "Lexus": 93
, "DS Automobiles": 55
, "Mitsubishi": 33
, "Jeep": 24
, "Land Rover": 16
, "Jaguar": 9
, "Tesla": 9
, "Chevrolet": 8
, "Xpeng": 7
, "Alfa Romeo": 1
, "Cadillac": 1
, "Smart": 1
, "other": 276
});

db.insert(db.countries.SE, "2022-04", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia|Niro EV": 670
, "Polestar|2": 496
, "Volvo|XC40 Recharge pure electric": 447
, "Kia|EV6": 420
, "Volkswagen|ID.4": 420
, "Nissan|Leaf": 391
, "BMW|i3 BEV": 294
, "Škoda|Enyaq": 259
, "MG|ZS EV": 233
, "Audi|Q8 e-tron": 194
, "Cupra|Born": 133
, "Ford|Mustang Mach-E": 128
, "Peugeot|e-208": 107
, "MG|Marvel R": 92
, "Volkswagen|ID.3": 90
, "BMW|iX": 87
, "Audi|Q4 e-tron": 85
, "Mercedes-Benz|EQE": 64
, "Volvo|C40 Recharge": 63
, "Mazda|MX-30": 60
, "Renault|Zoe": 58
, "BMW|i4": 52
, "Mini|Cooper SE Electric": 52
, "Fiat|500e": 43
, "Porsche|Taycan": 40
, "Opel|Corsa-e": 39
, "Citroën|ë-C4": 37
, "Hyundai|Kona Electric": 36
, "Mercedes-Benz|EQS": 29
, "Kia|Soul EV": 26
, "Peugeot|e-2008": 26
, "BMW|iX3": 24
, "Mercedes-Benz|EQA": 24
, "Hyundai|Ioniq 5": 23
, "Volkswagen|ID.5": 20
, "Audi|e-tron GT": 14
, "Mercedes-Benz|EQB": 14
, "Opel|Mokka-e": 13
, "Honda|e": 11
, "Mercedes-Benz|EQC": 11
, "MG|MG5 EV": 10
, "DS Automobiles|DS 3 Crossback E-Tense": 9
, "Toyota|Proace Electric": 9
, "Mercedes-Benz|EQV": 7
, "Lexus|UX 300e": 6
, "Renault|Megane E-Tech": 6
, "Opel|Combo-e": 5
, "Tesla|Model Y": 5
, "Xpeng|P5": 5
, "Tesla|Model 3": 4
, "other": 30
});

db.insert(db.countries.SE, "2022-05", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3670
, "Volkswagen": 3348
, "Kia": 2825
, "Toyota": 2217
, "Mercedes-Benz": 1466
, "BMW": 1401
, "Ford": 1290
, "Audi": 1263
, "Škoda": 1040
, "Peugeot": 992
, "MG": 754
, "Hyundai": 552
, "Citroën": 547
, "Seat": 474
, "Nissan": 429
, "Fiat": 424
, "Renault": 388
, "Mini": 349
, "Polestar": 315
, "Tesla": 312
, "Dacia": 257
, "Subaru": 248
, "Porsche": 223
, "Cupra": 205
, "Mazda": 198
, "Honda": 180
, "Suzuki": 173
, "Opel": 123
, "Lexus": 98
, "DS Automobiles": 63
, "Mitsubishi": 55
, "Land Rover": 54
, "Jeep": 44
, "Jaguar": 35
, "Chevrolet": 6
, "Alfa Romeo": 4
, "Cadillac": 1
, "other": 390
});

db.insert(db.countries.SE, "2022-05", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.4": 658
, "Kia|Niro EV": 564
, "Škoda|Enyaq": 391
, "Volvo|XC40 Recharge pure electric": 318
, "Polestar|2": 315
, "Tesla|Model Y": 312
, "Kia|EV6": 296
, "MG|Marvel R": 278
, "Audi|Q8 e-tron": 253
, "MG|ZS EV": 233
, "Nissan|Leaf": 231
, "Audi|Q4 e-tron": 212
, "Cupra|Born": 205
, "Mini|Cooper SE Electric": 162
, "Peugeot|e-208": 156
, "BMW|i4": 155
, "Volkswagen|ID.3": 135
, "Mercedes-Benz|EQE": 120
, "Ford|Mustang Mach-E": 112
, "BMW|i3 BEV": 108
, "BMW|iX": 106
, "Citroën|ë-C4": 101
, "Peugeot|e-2008": 98
, "Renault|Zoe": 80
, "Porsche|Taycan": 76
, "Fiat|500e": 69
, "Mazda|MX-30": 63
, "MG|MG5 EV": 61
, "Mercedes-Benz|EQB": 56
, "Volkswagen|ID.5": 53
, "Volvo|C40 Recharge": 50
, "Hyundai|Kona Electric": 46
, "Mercedes-Benz|EQA": 35
, "Volvo|other": 35
, "Hyundai|Ioniq 5": 25
, "BMW|iX3": 24
, "Kia|Soul EV": 24
, "Audi|e-tron GT": 18
, "Mercedes-Benz|EQS": 16
, "Mercedes-Benz|EQV": 13
, "Citroën|Berlingo Electric": 12
, "Toyota|Proace Electric": 12
, "Lexus|UX 300e": 11
, "DS Automobiles|DS 3 Crossback E-Tense": 10
, "Mercedes-Benz|EQC": 10
, "Honda|e": 9
, "Opel|Corsa-e": 6
, "Jaguar|I-Pace": 5
, "Peugeot|e-Rifter": 4
, "Opel|Combo-e": 3
, "other": 38
});

db.insert(db.countries.SE, "2022-06", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Kia": 3257
, "Volvo": 3105
, "Volkswagen": 2979
, "Tesla": 2051
, "Toyota": 1929
, "Mercedes-Benz": 1882
, "BMW": 1376
, "Audi": 1309
, "Škoda": 1251
, "Ford": 973
, "MG": 942
, "Citroën": 484
, "Peugeot": 475
, "Renault": 448
, "Hyundai": 330
, "Fiat": 325
, "Porsche": 322
, "Seat": 305
, "Polestar": 291
, "Nissan": 287
, "Dacia": 221
, "Opel": 193
, "Mini": 174
, "Cupra": 171
, "Suzuki": 130
, "Mazda": 116
, "Subaru": 98
, "Lexus": 91
, "Mitsubishi": 91
, "Honda": 69
, "Jeep": 50
, "DS Automobiles": 46
, "Land Rover": 46
, "Jaguar": 12
, "Chevrolet": 11
, "Xpeng": 3
, "Cadillac": 2
, "Alfa Romeo": 1
, "other": 242
});

db.insert(db.countries.SE, "2022-06", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model Y": 1876
, "Volkswagen|ID.4": 759
, "Kia|Niro EV": 703
, "Škoda|Enyaq": 526
, "Audi|Q8 e-tron": 387
, "MG|ZS EV": 382
, "Polestar|2": 289
, "BMW|i4": 226
, "Citroën|ë-C4": 218
, "Kia|EV6": 214
, "Tesla|Model 3": 175
, "Cupra|Born": 171
, "Mercedes-Benz|EQE": 165
, "MG|Marvel R": 151
, "BMW|iX": 141
, "Peugeot|e-208": 128
, "Mercedes-Benz|EQB": 113
, "Volkswagen|ID.3": 108
, "Audi|Q4 e-tron": 106
, "Porsche|Taycan": 96
, "Toyota|bZ4X": 95
, "Renault|Zoe": 94
, "Peugeot|e-2008": 92
, "Volkswagen|ID.5": 92
, "Volvo|XC40 Recharge pure electric": 89
, "MG|MG5 EV": 72
, "Ford|Mustang Mach-E": 68
, "Nissan|Leaf": 68
, "Mini|Cooper SE Electric": 67
, "Mazda|MX-30": 51
, "Fiat|500e": 50
, "Opel|Corsa-e": 50
, "BMW|iX3": 43
, "Opel|Mokka-e": 36
, "Audi|e-tron GT": 31
, "Mercedes-Benz|EQA": 31
, "Hyundai|Kona Electric": 30
, "BMW|i3 BEV": 29
, "Kia|Soul EV": 28
, "Mercedes-Benz|EQV": 21
, "Mercedes-Benz|EQS": 18
, "Mercedes-Benz|EQC": 17
, "Volvo|C40 Recharge": 17
, "DS Automobiles|DS 3 Crossback E-Tense": 16
, "Honda|e": 11
, "Lexus|UX 300e": 8
, "Mercedes-Benz|eVito": 6
, "Peugeot|e-Rifter": 4
, "Toyota|Proace Electric": 3
, "other": 66
});

db.insert(db.countries.SE, "2022-07", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 2357
, "Volvo": 2086
, "Kia": 2016
, "Mercedes-Benz": 1290
, "Toyota": 1206
, "BMW": 996
, "Ford": 994
, "MG": 845
, "Peugeot": 786
, "Audi": 622
, "Škoda": 596
, "Renault": 517
, "Hyundai": 409
, "Citroën": 310
, "Nissan": 297
, "Seat": 292
, "Fiat": 269
, "Dacia": 246
, "Porsche": 207
, "Mini": 198
, "Opel": 167
, "Mazda": 152
, "Cupra": 148
, "Polestar": 129
, "Subaru": 129
, "Suzuki": 76
, "Tesla": 69
, "Lexus": 55
, "Honda": 39
, "Land Rover": 25
, "Mitsubishi": 23
, "Jeep": 22
, "DS Automobiles": 12
, "Alfa Romeo": 9
, "Chevrolet": 9
, "Jaguar": 5
, "Cadillac": 1
, "other": 225
});

db.insert(db.countries.SE, "2022-07", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.4": 516
, "MG|ZS EV": 409
, "Kia|EV6": 336
, "Škoda|Enyaq": 243
, "Ford|Mustang Mach-E": 227
, "MG|MG5 EV": 216
, "MG|Marvel R": 157
, "Cupra|Born": 148
, "BMW|iX": 145
, "Nissan|Leaf": 144
, "Peugeot|e-2008": 137
, "BMW|i3 BEV": 134
, "Polestar|2": 128
, "Volkswagen|ID.5": 124
, "Citroën|ë-C4": 114
, "Audi|Q8 e-tron": 109
, "BMW|i4": 106
, "Renault|Megane E-Tech": 98
, "Hyundai|Kona Electric": 93
, "Kia|Niro EV": 91
, "Volkswagen|ID.3": 91
, "Mercedes-Benz|EQE": 79
, "Peugeot|e-208": 79
, "Audi|Q4 e-tron": 75
, "Porsche|Taycan": 69
, "Tesla|Model Y": 69
, "Mini|Cooper SE Electric": 67
, "Renault|Zoe": 66
, "Opel|Mokka-e": 61
, "Mercedes-Benz|EQB": 58
, "Volvo|XC40 Recharge pure electric": 47
, "Fiat|500e": 37
, "Kia|Soul EV": 23
, "Mercedes-Benz|EQC": 20
, "Mercedes-Benz|EQA": 18
, "Mercedes-Benz|EQS": 17
, "Toyota|Proace Electric": 16
, "Opel|Corsa-e": 14
, "Lexus|UX 300e": 11
, "Audi|e-tron GT": 10
, "BMW|iX3": 10
, "Citroën|Berlingo Electric": 7
, "Mercedes-Benz|EQV": 7
, "Mercedes-Benz|eVito": 5
, "Honda|e": 4
, "Mazda|MX-30": 4
, "Volvo|C40 Recharge": 4
, "other": 34
});

db.insert(db.countries.SE, "2022-08", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 3357
, "Toyota": 2303
, "Kia": 2026
, "Mercedes-Benz": 1198
, "BMW": 1188
, "Škoda": 1111
, "Volvo": 1061
, "Peugeot": 996
, "MG": 778
, "Audi": 774
, "Nissan": 742
, "Ford": 627
, "Citroën": 461
, "Tesla": 458
, "Hyundai": 353
, "Mini": 336
, "Opel": 318
, "Fiat": 255
, "Seat": 253
, "Renault": 236
, "Dacia": 234
, "Mazda": 224
, "Cupra": 187
, "Subaru": 167
, "Porsche": 156
, "Suzuki": 127
, "Polestar": 119
, "Lexus": 104
, "Honda": 88
, "DS Automobiles": 44
, "Jeep": 26
, "Land Rover": 22
, "Alfa Romeo": 16
, "Mitsubishi": 13
, "Jaguar": 7
, "Cadillac": 4
, "Chevrolet": 2
, "other": 205
});

db.insert(db.countries.SE, "2022-08", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.4": 654
, "Nissan|Leaf": 527
, "MG|ZS EV": 487
, "Škoda|Enyaq": 472
, "Kia|EV6": 379
, "Tesla|Model Y": 244
, "Tesla|Model 3": 214
, "MG|MG5 EV": 189
, "Peugeot|e-2008": 188
, "Cupra|Born": 187
, "Volkswagen|ID.5": 180
, "Mini|Cooper SE Electric": 168
, "Ford|Mustang Mach-E": 155
, "BMW|i3 BEV": 133
, "Volkswagen|ID.3": 124
, "Polestar|2": 119
, "BMW|i4": 115
, "MG|Marvel R": 100
, "Citroën|ë-C4": 92
, "Opel|Mokka-e": 84
, "BMW|iX": 81
, "Opel|Corsa-e": 80
, "Peugeot|e-208": 79
, "Audi|Q4 e-tron": 71
, "Mercedes-Benz|EQB": 53
, "Kia|Niro EV": 51
, "Audi|Q8 e-tron": 45
, "BMW|iX3": 44
, "Mercedes-Benz|EQA": 41
, "Mercedes-Benz|EQS": 41
, "Volvo|XC40 Recharge pure electric": 39
, "Fiat|500e": 38
, "Kia|Soul EV": 38
, "Hyundai|Kona Electric": 35
, "Renault|Megane E-Tech": 34
, "Mercedes-Benz|EQE": 31
, "Mercedes-Benz|EQC": 27
, "Porsche|Taycan": 27
, "Hyundai|Ioniq 5": 24
, "Volvo|C40 Recharge": 24
, "Toyota|Proace Electric": 19
, "Citroën|Berlingo Electric": 13
, "Mazda|MX-30": 10
, "Lexus|UX 300e": 5
, "Renault|Zoe": 5
, "Honda|e": 2
, "Peugeot|e-Rifter": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "other": 42
});

db.insert(db.countries.SE, "2022-09", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen": 2717
, "Volvo": 2496
, "Kia": 2336
, "Toyota": 1999
, "Mercedes-Benz": 1374
, "BMW": 1283
, "Škoda": 1112
, "Audi": 971
, "Tesla": 915
, "Ford": 810
, "Peugeot": 621
, "Nissan": 554
, "MG": 548
, "Hyundai": 521
, "Mazda": 510
, "Seat": 304
, "Citroën": 302
, "Polestar": 274
, "Fiat": 260
, "Dacia": 226
, "Renault": 224
, "Opel": 221
, "Mini": 211
, "Cupra": 166
, "Subaru": 162
, "Suzuki": 136
, "Honda": 130
, "Porsche": 125
, "Lexus": 101
, "Land Rover": 63
, "DS Automobiles": 41
, "Mitsubishi": 33
, "Chevrolet": 11
, "Jeep": 10
, "Alfa Romeo": 7
, "Jaguar": 4
, "Cadillac": 2
, "other": 268
});

db.insert(db.countries.SE, "2022-09", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volkswagen|ID.4": 595
, "Volvo|XC40 Recharge pure electric": 566
, "Kia|Niro EV": 555
, "Škoda|Enyaq": 516
, "Tesla|Model 3": 484
, "Tesla|Model Y": 431
, "Volvo|C40 Recharge": 350
, "Kia|EV6": 295
, "Nissan|Leaf": 285
, "Polestar|2": 274
, "MG|Marvel R": 242
, "BMW|i3 BEV": 238
, "Citroën|ë-C4": 207
, "Volkswagen|ID.5": 198
, "BMW|i4": 183
, "Mazda|MX-30": 180
, "Cupra|Born": 166
, "MG|ZS EV": 148
, "MG|MG5 EV": 147
, "Audi|Q4 e-tron": 145
, "Mercedes-Benz|EQB": 138
, "Ford|Mustang Mach-E": 137
, "Volkswagen|ID.3": 135
, "Mini|Cooper SE Electric": 120
, "Fiat|500e": 113
, "Peugeot|e-208": 107
, "Peugeot|e-2008": 88
, "Hyundai|Kona Electric": 85
, "Mercedes-Benz|EQE": 82
, "BMW|iX3": 65
, "BMW|iX": 63
, "Nissan|Ariya": 55
, "Audi|Q8 e-tron": 40
, "Mercedes-Benz|EQA": 39
, "Mercedes-Benz|EQC": 38
, "Opel|Mokka-e": 29
, "Kia|Soul EV": 27
, "Renault|Megane E-Tech": 27
, "Opel|Corsa-e": 25
, "Mercedes-Benz|EQS": 22
, "Hyundai|Ioniq 5": 20
, "Toyota|Proace Electric": 16
, "Renault|Zoe": 15
, "Porsche|Taycan": 7
, "MG|MG4 EV": 6
, "Citroën|Berlingo Electric": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 5
, "Peugeot|e-Rifter": 4
, "Lexus|UX 300e": 3
, "Mercedes-Benz|EQV": 3
, "other": 53
});

db.insert(db.countries.SE, "2022-10", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4101
, "Volkswagen": 2748
, "Kia": 2153
, "Toyota": 1847
, "Audi": 1426
, "Mercedes-Benz": 1335
, "BMW": 1179
, "Škoda": 994
, "Ford": 797
, "Nissan": 724
, "MG": 589
, "Hyundai": 545
, "Renault": 520
, "Polestar": 440
, "Mazda": 404
, "Mini": 280
, "Peugeot": 269
, "Dacia": 253
, "Seat": 229
, "Cupra": 200
, "Fiat": 173
, "Subaru": 168
, "Porsche": 150
, "Opel": 101
, "Suzuki": 101
, "Citroën": 88
, "Lexus": 84
, "Honda": 83
, "Mitsubishi": 44
, "DS Automobiles": 43
, "Tesla": 43
, "Jeep": 28
, "Land Rover": 18
, "Jaguar": 6
, "Alfa Romeo": 4
, "Chevrolet": 3
, "BYD": 1
, "other": 212
});

db.insert(db.countries.SE, "2022-10", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo|XC40 Recharge pure electric": 1127
, "Volkswagen|ID.4": 618
, "Kia|Niro EV": 463
, "Nissan|Leaf": 460
, "Škoda|Enyaq": 442
, "Polestar|2": 440
, "Volvo|C40 Recharge": 378
, "Kia|EV6": 321
, "Ford|Mustang Mach-E": 305
, "Volkswagen|ID.3": 270
, "Audi|Q4 e-tron": 265
, "Volkswagen|ID.5": 235
, "MG|Marvel R": 233
, "Cupra|Born": 200
, "MG|ZS EV": 195
, "Mini|Cooper SE Electric": 191
, "Mercedes-Benz|EQB": 176
, "Renault|Megane E-Tech": 171
, "MG|MG5 EV": 154
, "Hyundai|Kona Electric": 135
, "BMW|i4": 108
, "Peugeot|e-208": 96
, "BMW|iX": 85
, "Mazda|MX-30": 78
, "BMW|iX3": 72
, "Mercedes-Benz|EQA": 67
, "Fiat|500e": 60
, "Mercedes-Benz|EQE": 60
, "Volvo|other": 52
, "Kia|Soul EV": 51
, "BMW|i3 BEV": 47
, "Tesla|Model Y": 38
, "Audi|Q8 e-tron": 37
, "Mercedes-Benz|EQC": 35
, "Citroën|ë-C4": 33
, "Mercedes-Benz|EQS": 30
, "Nissan|Ariya": 29
, "Porsche|Taycan": 28
, "Renault|Zoe": 27
, "Toyota|Proace Electric": 19
, "DS Automobiles|DS 3 Crossback E-Tense": 15
, "Peugeot|e-2008": 13
, "Opel|Mokka-e": 11
, "MG|MG4 EV": 7
, "Subaru|Solterra": 7
, "Opel|Corsa-e": 5
, "Tesla|Model 3": 5
, "Volkswagen|ID. Buzz": 5
, "Hyundai|Ioniq 5": 4
, "other": 37
});

db.insert(db.countries.SE, "2022-11", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 4813
, "Volkswagen": 2897
, "Toyota": 2107
, "Kia": 2105
, "Audi": 1501
, "BMW": 1449
, "Mercedes-Benz": 1262
, "Škoda": 958
, "Renault": 942
, "MG": 923
, "Ford": 823
, "Polestar": 612
, "Nissan": 560
, "Hyundai": 556
, "Tesla": 551
, "Peugeot": 523
, "Mazda": 365
, "Cupra": 309
, "Mini": 271
, "Subaru": 232
, "Fiat": 193
, "Porsche": 181
, "Citroën": 175
, "Dacia": 175
, "Lexus": 158
, "Seat": 142
, "Suzuki": 105
, "BYD": 104
, "Opel": 93
, "DS Automobiles": 67
, "Honda": 62
, "Mitsubishi": 45
, "Land Rover": 16
, "Jeep": 14
, "Chevrolet": 9
, "Jaguar": 5
, "Alfa Romeo": 2
, "other": 283
});

db.insert(db.countries.SE, "2022-11", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo|XC40 Recharge pure electric": 1627
, "Volkswagen|ID.4": 911
, "Volvo|C40 Recharge": 874
, "Polestar|2": 612
, "Tesla|Model Y": 531
, "Škoda|Enyaq": 395
, "Kia|Niro EV": 382
, "Nissan|Leaf": 382
, "MG|Marvel R": 369
, "Ford|Mustang Mach-E": 361
, "Volkswagen|ID.5": 318
, "Cupra|Born": 309
, "Kia|EV6": 305
, "MG|ZS EV": 273
, "Volkswagen|ID.3": 239
, "Renault|Megane E-Tech": 237
, "Audi|Q4 e-tron": 227
, "Peugeot|e-208": 185
, "Mini|Cooper SE Electric": 179
, "MG|MG5 EV": 179
, "BMW|iX": 147
, "BMW|i4": 129
, "Mercedes-Benz|EQA": 119
, "Mazda|MX-30": 114
, "Mercedes-Benz|EQB": 111
, "Hyundai|Kona Electric": 102
, "MG|MG4 EV": 102
, "Volkswagen|ID. Buzz": 94
, "Mercedes-Benz|EQE": 91
, "BYD|Yuan Plus": 83
, "Subaru|Solterra": 74
, "Fiat|500e": 66
, "Porsche|Taycan": 63
, "Hyundai|Ioniq 5": 60
, "BMW|iX3": 59
, "Peugeot|e-2008": 57
, "Citroën|ë-C4": 53
, "Kia|Soul EV": 44
, "Audi|Q8 e-tron": 39
, "Nissan|Ariya": 30
, "Opel|Mokka-e": 27
, "Volvo|other": 25
, "Mercedes-Benz|EQC": 24
, "BYD|Tang EV": 21
, "DS Automobiles|DS 3 Crossback E-Tense": 21
, "Tesla|Model 3": 20
, "Mercedes-Benz|EQS": 18
, "Renault|Zoe": 14
, "other": 166
});

db.insert(db.countries.SE, "2022-12", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 8804
, "Volkswagen": 3987
, "Kia": 2511
, "Toyota": 1876
, "Audi": 1780
, "Tesla": 1645
, "BMW": 1573
, "MG": 1462
, "Mercedes-Benz": 1369
, "Škoda": 1230
, "Ford": 1170
, "BYD": 983
, "Nissan": 729
, "Renault": 718
, "Cupra": 707
, "Peugeot": 698
, "Hyundai": 666
, "Polestar": 604
, "Mazda": 391
, "Porsche": 368
, "Dacia": 260
, "Mini": 203
, "Seat": 193
, "Lexus": 178
, "Opel": 154
, "Ora": 146
, "Citroën": 139
, "Subaru": 127
, "Suzuki": 102
, "Honda": 90
, "DS Automobiles": 79
, "Fiat": 76
, "Mitsubishi": 45
, "Land Rover": 27
, "Alfa Romeo": 18
, "Jeep": 9
, "Chevrolet": 6
, "Jaguar": 3
, "Smart": 2
, "other": 348
});

db.insert(db.countries.SE, "2022-12", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo|XC40 Recharge pure electric": 2616
, "Volkswagen|ID.4": 1729
, "Volvo|C40 Recharge": 1349
, "Tesla|Model Y": 1090
, "BYD|Yuan Plus": 980
, "Cupra|Born": 707
, "MG|Marvel R": 641
, "Kia|EV6": 631
, "Polestar|2": 604
, "Kia|Niro EV": 583
, "Škoda|Enyaq": 575
, "Nissan|Leaf": 535
, "Volkswagen|ID.5": 447
, "MG|MG5 EV": 403
, "Volkswagen|ID.3": 399
, "Renault|Megane E-Tech": 375
, "Peugeot|e-2008": 369
, "Ford|Mustang Mach-E": 325
, "Audi|Q4 e-tron": 291
, "BMW|iX3": 282
, "MG|ZS EV": 213
, "Tesla|Model S": 211
, "MG|MG4 EV": 198
, "BMW|iX": 190
, "Tesla|Model X": 187
, "BMW|i4": 172
, "Tesla|Model 3": 157
, "Ora|Good Cat": 146
, "Hyundai|Ioniq 5": 145
, "Porsche|Taycan": 142
, "Mercedes-Benz|EQA": 140
, "Mini|Cooper SE Electric": 134
, "BMW|iX1": 127
, "Mercedes-Benz|EQB": 99
, "Nissan|Ariya": 96
, "Kia|Soul EV": 90
, "Peugeot|e-208": 83
, "Mercedes-Benz|EQE": 81
, "Renault|Zoe": 80
, "Audi|Q8 e-tron": 60
, "Hyundai|Kona Electric": 52
, "Opel|Mokka-e": 39
, "Citroën|ë-C4": 35
, "Audi|e-tron GT": 26
, "Mercedes-Benz|EQC": 26
, "Toyota|Proace Electric": 26
, "Honda|e": 22
, "Fiat|500e": 20
, "DS Automobiles|DS 3 Crossback E-Tense": 14
, "Subaru|Solterra": 14
, "other": 249
});

db.insert(db.countries.SE, "2023-01", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3026
, "Kia": 1479
, "Toyota": 1439
, "Volkswagen": 1389
, "BMW": 1024
, "Audi": 900
, "Mercedes-Benz": 622
, "Škoda": 565
, "Peugeot": 434
, "Dacia": 388
, "Mazda": 342
, "Renault": 332
, "Porsche": 260
, "Hyundai": 249
, "MG": 225
, "Tesla": 225
, "Nissan": 196
, "Seat": 178
, "Ford": 156
, "Lexus": 143
, "Subaru": 133
, "Citroën": 122
, "Mini": 106
, "Opel": 101
, "Polestar": 97
, "Suzuki": 70
, "Cupra": 53
, "Mitsubishi": 43
, "Fiat": 36
, "DS Automobiles": 26
, "Honda": 25
, "Land Rover": 23
, "BYD": 18
, "Ora": 10
, "Chevrolet": 5
, "Alfa Romeo": 4
, "Jaguar": 4
, "Cadillac": 2
, "Nio": 1
, "other": 150
});

db.insert(db.countries.SE, "2023-01", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo|XC40 Recharge pure electric": 698
, "Kia|EV6": 425
, "Volvo|C40 Recharge": 372
, "Volkswagen|ID.4": 276
, "Kia|Niro EV": 204
, "Mazda|MX-30": 178
, "Škoda|Enyaq": 153
, "BMW|iX1": 110
, "Audi|Q4 e-tron": 102
, "Porsche|Taycan": 102
, "Tesla|Model Y": 102
, "Polestar|2": 97
, "Tesla|Model 3": 96
, "BMW|i4": 93
, "MG|MG5 EV": 81
, "Peugeot|e-2008": 79
, "Nissan|Leaf": 72
, "BMW|iX": 69
, "Volkswagen|ID.3": 59
, "Peugeot|e-208": 57
, "Renault|Megane E-Tech": 57
, "MG|Marvel R": 55
, "MG|ZS EV": 49
, "Opel|Corsa-e": 48
, "Mercedes-Benz|EQE": 45
, "BMW|iX3": 42
, "Volkswagen|ID.5": 38
, "Audi|Q8 e-tron": 35
, "Cupra|Born": 33
, "MG|MG4 EV": 33
, "Mercedes-Benz|EQA": 28
, "Mini|Cooper SE Electric": 27
, "Nissan|Ariya": 26
, "Renault|Zoe": 24
, "Mercedes-Benz|EQB": 23
, "Tesla|Model X": 20
, "Opel|Mokka-e": 18
, "Volkswagen|ID. Buzz": 18
, "Hyundai|Ioniq 5": 16
, "Mercedes-Benz|EQS": 14
, "Kia|Soul EV": 12
, "Hyundai|Kona Electric": 11
, "BMW|i7": 10
, "Ora|Good Cat": 10
, "BYD|Yuan Plus": 9
, "Mercedes-Benz|EQV": 9
, "BYD|Han EV": 8
, "Tesla|Model S": 7
, "Audi|e-tron GT": 6
, "DS Automobiles|DS 3 Crossback E-Tense": 6
, "other": 41
});

db.insert(db.countries.SE, "2023-02", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 2695
, "Volkswagen": 2062
, "Kia": 1840
, "Toyota": 1594
, "BMW": 1193
, "Mercedes-Benz": 1007
, "Audi": 966
, "Škoda": 821
, "Peugeot": 747
, "Tesla": 518
, "MG": 462
, "Ford": 428
, "Hyundai": 404
, "Nissan": 360
, "Dacia": 297
, "Renault": 274
, "Mazda": 269
, "Porsche": 231
, "Subaru": 230
, "Fiat": 218
, "Seat": 215
, "Polestar": 204
, "Mini": 195
, "Citroën": 192
, "Lexus": 177
, "Opel": 143
, "BYD": 131
, "Cupra": 116
, "Suzuki": 69
, "Mitsubishi": 47
, "Honda": 46
, "Land Rover": 27
, "DS Automobiles": 23
, "Alfa Romeo": 18
, "Nio": 17
, "Jaguar": 11
, "Hongqi": 4
, "Jeep": 3
, "Chevrolet": 2
, "Ora": 2
, "Cadillac": 1
, "other": 183
});

db.insert(db.countries.SE, "2023-02", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo|XC40 Recharge pure electric": 794
, "Volkswagen|ID.4": 718
, "Tesla|Model Y": 306
, "Kia|EV6": 300
, "Kia|Niro EV": 252
, "Škoda|Enyaq": 248
, "Volkswagen|ID.3": 225
, "MG|MG5 EV": 219
, "Polestar|2": 204
, "Tesla|Model 3": 197
, "Audi|Q4 e-tron": 186
, "Volvo|C40 Recharge": 184
, "BMW|i4": 152
, "Peugeot|e-208": 152
, "BMW|iX3": 123
, "BMW|iX1": 121
, "Mercedes-Benz|EQE": 116
, "BYD|Yuan Plus": 110
, "MG|MG4 EV": 105
, "Peugeot|e-2008": 99
, "MG|ZS EV": 97
, "Hyundai|Ioniq 5": 94
, "Nissan|Leaf": 86
, "Volkswagen|ID.5": 84
, "Mini|Cooper SE Electric": 66
, "Mercedes-Benz|EQB": 64
, "Audi|Q8 e-tron": 61
, "Cupra|Born": 60
, "Renault|Megane E-Tech": 54
, "Mazda|MX-30": 52
, "Porsche|Taycan": 51
, "BMW|iX": 46
, "Volkswagen|ID. Buzz": 45
, "Opel|Mokka-e": 43
, "Mercedes-Benz|EQA": 42
, "MG|Marvel R": 37
, "Nissan|Ariya": 23
, "BYD|Han EV": 20
, "Hyundai|Ioniq Electric": 20
, "Mercedes-Benz|EQS": 18
, "Subaru|Solterra": 18
, "Fiat|500e": 17
, "Ford|Mustang Mach-E": 15
, "Kia|Soul EV": 15
, "Renault|Zoe": 15
, "Citroën|ë-C4": 13
, "Hyundai|Kona Electric": 12
, "Nio|ES7": 12
, "Tesla|Model S": 12
, "Opel|Corsa-e": 11
, "other": 110
});

db.insert(db.countries.SE, "2023-03", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla": 3940
, "Volvo": 3643
, "Volkswagen": 2587
, "Toyota": 2556
, "Kia": 2289
, "Audi": 1766
, "BMW": 1530
, "Mercedes-Benz": 1524
, "Škoda": 1276
, "MG": 962
, "Mazda": 942
, "Peugeot": 845
, "Ford": 840
, "Nissan": 694
, "Hyundai": 599
, "Renault": 538
, "Citroën": 532
, "Opel": 354
, "Cupra": 317
, "Subaru": 290
, "Porsche": 279
, "Seat": 255
, "Polestar": 223
, "Mini": 219
, "Dacia": 200
, "Fiat": 162
, "Lexus": 134
, "Suzuki": 85
, "Honda": 81
, "Alfa Romeo": 72
, "DS Automobiles": 67
, "BYD": 58
, "Mitsubishi": 48
, "Land Rover": 33
, "Nio": 23
, "Hongqi": 19
, "Ora": 11
, "Jaguar": 10
, "Jeep": 5
, "Chevrolet": 3
, "Cadillac": 2
, "other": 248
});

db.insert(db.countries.SE, "2023-03", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Tesla|Model Y": 3202
, "Volvo|XC40 Recharge pure electric": 1255
, "Volkswagen|ID.4": 898
, "Tesla|Model 3": 712
, "Kia|EV6": 563
, "MG|MG5 EV": 413
, "Škoda|Enyaq": 410
, "Kia|Niro EV": 386
, "BMW|i4": 308
, "Volvo|C40 Recharge": 285
, "Volkswagen|ID.3": 283
, "Audi|Q4 e-tron": 273
, "Nissan|Leaf": 264
, "Renault|Megane E-Tech": 241
, "Polestar|2": 223
, "Audi|Q8 e-tron": 198
, "MG|Marvel R": 175
, "Mercedes-Benz|EQE": 153
, "Cupra|Born": 146
, "Citroën|ë-C4": 145
, "Volkswagen|ID.5": 145
, "MG|MG4 EV": 134
, "Peugeot|e-208": 128
, "BMW|iX1": 125
, "MG|ZS EV": 114
, "Hyundai|Ioniq 5": 100
, "Mini|Cooper SE Electric": 100
, "Volkswagen|ID. Buzz": 86
, "Mercedes-Benz|EQA": 77
, "BMW|iX": 76
, "Mercedes-Benz|EQB": 73
, "Opel|Corsa-e": 70
, "BMW|iX3": 68
, "Mazda|MX-30": 66
, "Ford|Mustang Mach-E": 63
, "BYD|Yuan Plus": 53
, "Porsche|Taycan": 48
, "Toyota|bZ4X": 44
, "Hyundai|Kona Electric": 35
, "Kia|Soul EV": 31
, "Opel|Mokka-e": 30
, "Renault|Zoe": 30
, "Mercedes-Benz|EQS": 21
, "Toyota|Proace Electric": 21
, "Hongqi|E-HS9": 19
, "Peugeot|e-2008": 19
, "Subaru|Solterra": 19
, "BMW|i7": 17
, "Nissan|Ariya": 15
, "Tesla|Model S": 14
, "other": 203
});

db.insert(db.countries.SE, "2023-04", db.dsTypes.AllCarsByBrand, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo": 3012
, "Volkswagen": 2515
, "Toyota": 1701
, "Kia": 1633
, "Audi": 1486
, "BMW": 1325
, "Mercedes-Benz": 1291
, "Škoda": 988
, "Ford": 771
, "Tesla": 742
, "Renault": 533
, "Peugeot": 516
, "MG": 417
, "Hyundai": 403
, "Nissan": 332
, "Porsche": 323
, "Cupra": 263
, "Subaru": 237
, "Seat": 205
, "Citroën": 203
, "Fiat": 202
, "Lexus": 196
, "Mini": 169
, "Dacia": 155
, "Opel": 133
, "Polestar": 120
, "Mazda": 91
, "Suzuki": 84
, "Mitsubishi": 72
, "BYD": 63
, "Honda": 53
, "Alfa Romeo": 36
, "Jeep": 24
, "Land Rover": 20
, "Nio": 14
, "Ora": 12
, "Chevrolet": 9
, "DS Automobiles": 7
, "Cadillac": 2
, "Hongqi": 2
, "Jaguar": 1
, "Smart": 1
, "other": 224
});

db.insert(db.countries.SE, "2023-04", db.dsTypes.ElectricCarsByModel, "https://mobilitysweden.se/statistik/databas-nyregistreringar",
{ "Volvo|XC40 Recharge pure electric": 695
, "Volkswagen|ID.4": 661
, "Tesla|Model Y": 652
, "Škoda|Enyaq": 346
, "Kia|Niro EV": 326
, "Volkswagen|ID.3": 325
, "Kia|EV6": 322
, "BMW|i4": 314
, "Volvo|C40 Recharge": 261
, "Renault|Megane E-Tech": 235
, "Audi|Q4 e-tron": 193
, "Toyota|bZ4X": 190
, "MG|MG5 EV": 165
, "Audi|Q8 e-tron": 151
, "Volkswagen|ID.5": 149
, "Nissan|Leaf": 144
, "BMW|iX1": 140
, "Polestar|2": 120
, "MG|MG4 EV": 115
, "Cupra|Born": 113
, "Mercedes-Benz|EQA": 92
, "Volkswagen|ID. Buzz": 83
, "Citroën|ë-C4": 77
, "MG|Marvel R": 74
, "Mercedes-Benz|EQE": 73
, "BMW|iX3": 68
, "Mercedes-Benz|EQB": 61
, "Tesla|Model 3": 61
, "BYD|Yuan Plus": 60
, "MG|ZS EV": 58
, "Mini|Cooper SE Electric": 56
, "Porsche|Taycan": 56
, "Hyundai|Ioniq 5": 49
, "BMW|iX": 39
, "Opel|Corsa-e": 37
, "Peugeot|e-208": 37
, "Mercedes-Benz|EQS": 28
, "Peugeot|e-2008": 22
, "Hyundai|Kona Electric": 21
, "Renault|Zoe": 21
, "Tesla|Model X": 21
, "Nissan|Ariya": 19
, "Ford|Mustang Mach-E": 15
, "Lexus|RZ": 12
, "Ora|Good Cat": 12
, "Peugeot|e-Expert": 12
, "Opel|Mokka-e": 10
, "Subaru|Solterra": 10
, "BMW|i7": 8
, "Tesla|Model S": 8
, "other": 111
});
