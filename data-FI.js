// Data sets for car sales in Finland

"use strict";

// https://www.aut.fi/en/statistics/new_registrations/monthly
// https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars

db.insert(db.countries.FI, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1828/January_2018.xlsx",
{ "Toyota": 1948
, "Škoda": 1448
, "Volkswagen": 1435
, "Volvo": 1050
, "Ford": 1020
, "Audi": 856
, "Nissan": 811
, "Kia": 741
, "Opel": 733
, "BMW": 658
, "Mercedes-Benz": 623
, "Hyundai": 389
, "Peugeot": 342
, "Honda": 225
, "Seat": 214
, "Citroën": 180
, "Mazda": 167
, "Suzuki": 136
, "Subaru": 86
, "Dacia": 80
, "Mitsubishi": 61
, "Renault": 47
, "Land Rover": 39
, "Lexus": 35
, "Porsche": 31
, "Mini": 27
, "Fiat": 25
, "Jaguar": 22
, "Tesla": 17
, "other": 133
});

db.insert(db.countries.FI, "2018-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model S": 16
, "Volkswagen|e-Golf": 8
, "Nissan|Leaf": 2
, "Renault|Zoe": 2
, "BMW|i3 BEV": 1
, "Hyundai|Ioniq Electric": 1
, "Kia|Soul EV": 1
, "Tesla|Model X": 1
});

db.insert(db.countries.FI, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1837/February_2018.xlsx",
{ "Toyota": 1256
, "Volkswagen": 1014
, "Škoda": 810
, "Ford": 744
, "Volvo": 630
, "Opel": 601
, "Nissan": 589
, "Kia": 483
, "Mercedes-Benz": 416
, "Audi": 389
, "Hyundai": 383
, "BMW": 331
, "Peugeot": 246
, "Seat": 156
, "Honda": 147
, "Suzuki": 128
, "Mazda": 108
, "Citroën": 104
, "Renault": 93
, "Subaru": 89
, "Dacia": 78
, "Mitsubishi": 45
, "Land Rover": 28
, "Mini": 22
, "Lexus": 20
, "Porsche": 17
, "Jaguar": 16
, "Fiat": 11
, "Tesla": 4
, "other": 148
});

db.insert(db.countries.FI, "2018-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 23
, "Volkswagen|e-Golf": 8
, "Tesla|Model S": 2
, "Tesla|Model X": 2
, "Hyundai|Ioniq Electric": 1
, "Renault|Zoe": 1
});

db.insert(db.countries.FI, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1848/March_2018-2.xlsx",
{ "Toyota": 1384
, "Škoda": 1325
, "Volkswagen": 1276
, "Ford": 958
, "Nissan": 855
, "Volvo": 845
, "Opel": 616
, "Mercedes-Benz": 545
, "Kia": 543
, "Audi": 470
, "BMW": 423
, "Hyundai": 393
, "Seat": 298
, "Peugeot": 288
, "Honda": 195
, "Dacia": 187
, "Suzuki": 182
, "Citroën": 169
, "Mazda": 139
, "Renault": 133
, "Subaru": 80
, "Mitsubishi": 72
, "Lexus": 40
, "Land Rover": 37
, "Tesla": 36
, "Mini": 34
, "Jaguar": 17
, "Porsche": 15
, "Fiat": 14
, "other": 152
});

db.insert(db.countries.FI, "2018-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 43
, "Tesla|Model S": 29
, "Volkswagen|e-Golf": 11
, "Hyundai|Ioniq Electric": 7
, "Tesla|Model X": 7
, "BMW|i3 BEV": 3
, "Kia|Soul EV": 2
});

db.insert(db.countries.FI, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1871/April_2018.xlsx",
{ "Toyota": 1402
, "Volkswagen": 1171
, "Ford": 947
, "Škoda": 931
, "Volvo": 891
, "Opel": 595
, "Nissan": 556
, "Kia": 537
, "Mercedes-Benz": 530
, "Audi": 500
, "Hyundai": 461
, "BMW": 374
, "Peugeot": 282
, "Citroën": 264
, "Renault": 242
, "Seat": 222
, "Dacia": 189
, "Suzuki": 176
, "Honda": 140
, "Mazda": 131
, "Mitsubishi": 95
, "Subaru": 92
, "Porsche": 28
, "Mini": 27
, "Lexus": 25
, "Jaguar": 23
, "Land Rover": 17
, "Tesla": 8
, "Fiat": 6
, "other": 182
});

db.insert(db.countries.FI, "2018-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 40
, "Hyundai|Ioniq Electric": 9
, "Tesla|Model S": 5
, "Renault|Zoe": 4
, "Volkswagen|e-Golf": 4
, "Tesla|Model X": 3
, "BMW|i3 BEV": 1
});

db.insert(db.countries.FI, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1881/May_2018.xlsx",
{ "Toyota": 1590
, "Volkswagen": 1589
, "Škoda": 1151
, "Ford": 962
, "Volvo": 882
, "Opel": 763
, "Kia": 626
, "Mercedes-Benz": 622
, "Nissan": 562
, "Audi": 517
, "BMW": 433
, "Hyundai": 378
, "Peugeot": 342
, "Renault": 330
, "Seat": 262
, "Dacia": 209
, "Honda": 170
, "Citroën": 152
, "Mazda": 147
, "Suzuki": 138
, "Subaru": 136
, "Mitsubishi": 97
, "Lexus": 39
, "Fiat": 31
, "Jaguar": 25
, "Mini": 23
, "Land Rover": 22
, "Porsche": 17
, "Tesla": 12
, "Alfa Romeo": 11
, "other": 244
});

db.insert(db.countries.FI, "2018-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Hyundai|Ioniq Electric": 13
, "Tesla|Model S": 9
, "Volkswagen|e-Golf": 7
, "Nissan|Leaf": 6
, "Renault|Zoe": 5
, "Tesla|Model X": 3
});

db.insert(db.countries.FI, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1889/June_2018.xlsx",
{ "Volkswagen": 1377
, "Toyota": 1361
, "Škoda": 1149
, "Ford": 856
, "Mercedes-Benz": 685
, "Opel": 655
, "Volvo": 648
, "Nissan": 631
, "BMW": 515
, "Audi": 509
, "Kia": 493
, "Hyundai": 410
, "Seat": 369
, "Peugeot": 283
, "Renault": 241
, "Honda": 195
, "Mazda": 178
, "Dacia": 170
, "Citroën": 129
, "Mitsubishi": 120
, "Subaru": 100
, "Suzuki": 85
, "Mini": 42
, "Jaguar": 34
, "Lexus": 30
, "Fiat": 27
, "Tesla": 23
, "Porsche": 19
, "Land Rover": 14
, "other": 304
});

db.insert(db.countries.FI, "2018-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/6, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model S": 17
, "Nissan|Leaf": 14
, "Renault|Zoe": 11
, "Volkswagen|e-Golf": 11
, "Tesla|Model X": 6
, "Hyundai|Ioniq Electric": 4
, "Jaguar|I-Pace": 2
, "BMW|i3 BEV": 1
, "Kia|Soul EV": 1
, "Nissan|e-NV200": 1
});

db.insert(db.countries.FI, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1905/July_2018.xlsx",
{ "Toyota": 1293
, "Volkswagen": 1179
, "Škoda": 888
, "Volvo": 661
, "Opel": 618
, "Kia": 584
, "Ford": 581
, "Nissan": 580
, "BMW": 435
, "Mercedes-Benz": 389
, "Audi": 356
, "Peugeot": 240
, "Renault": 210
, "Hyundai": 204
, "Seat": 179
, "Mazda": 167
, "Dacia": 151
, "Suzuki": 121
, "Citroën": 119
, "Honda": 111
, "Subaru": 101
, "Mitsubishi": 88
, "Mini": 38
, "Porsche": 33
, "Fiat": 24
, "Jaguar": 18
, "Lexus": 18
, "Land Rover": 16
, "Tesla": 12
, "other": 165
});

db.insert(db.countries.FI, "2018-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/7, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 10
, "Tesla|Model S": 9
, "Renault|Zoe": 7
, "Volkswagen|e-Golf": 4
, "Tesla|Model X": 3
, "BMW|i3 BEV": 2
, "other": 3
});

db.insert(db.countries.FI, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1907/August_2018.xlsx",
{ "Nissan": 1649
, "Toyota": 1284
, "Volkswagen": 1050
, "Škoda": 864
, "Opel": 721
, "Ford": 699
, "Volvo": 696
, "Kia": 681
, "Audi": 508
, "Hyundai": 432
, "Mercedes-Benz": 415
, "Renault": 372
, "Seat": 321
, "Peugeot": 312
, "BMW": 288
, "Mazda": 263
, "Dacia": 233
, "Citroën": 207
, "Subaru": 166
, "Suzuki": 157
, "Honda": 153
, "Mitsubishi": 137
, "Porsche": 109
, "Fiat": 42
, "Mini": 33
, "Lexus": 29
, "Land Rover": 21
, "Alfa Romeo": 13
, "Jaguar": 13
, "Tesla": 4
, "other": 132
});

db.insert(db.countries.FI, "2018-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 20
, "Hyundai|Ioniq Electric": 16
, "Volkswagen|e-Golf": 13
, "BMW|i3 BEV": 6
, "Renault|Zoe": 4
, "Tesla|Model X": 3
, "Jaguar|I-Pace": 2
, "Nissan|e-NV200": 2
, "Kia|Soul EV": 1
, "Tesla|Model S": 1
});

db.insert(db.countries.FI, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1912/September_2018.xlsx",
{ "Toyota": 1063
, "Volvo": 678
, "Škoda": 634
, "Volkswagen": 455
, "Kia": 431
, "Mercedes-Benz": 427
, "Ford": 395
, "Nissan": 312
, "Hyundai": 283
, "BMW": 269
, "Opel": 219
, "Audi": 182
, "Mazda": 145
, "Seat": 143
, "Peugeot": 140
, "Honda": 131
, "Citroën": 96
, "Renault": 93
, "Suzuki": 66
, "Mitsubishi": 64
, "Subaru": 62
, "Dacia": 49
, "Jaguar": 18
, "Mini": 18
, "Lexus": 16
, "Tesla": 16
, "Porsche": 12
, "Land Rover": 9
, "Fiat": 8
, "Alfa Romeo": 3
, "other": 91
});

db.insert(db.countries.FI, "2018-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/9, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 27
, "Volkswagen|e-Golf": 18
, "Hyundai|Ioniq Electric": 10
, "Tesla|Model S": 8
, "Tesla|Model X": 8
, "BMW|i3 BEV": 4
, "Kia|Soul EV": 3
, "Renault|Zoe": 2
, "Jaguar|I-Pace": 1
, "Nissan|e-NV200": 1
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.FI, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1927/October_2018.xlsx",
{ "Toyota": 1106
, "Volvo": 901
, "Škoda": 883
, "Volkswagen": 693
, "Mercedes-Benz": 558
, "Ford": 500
, "Kia": 435
, "Nissan": 278
, "BMW": 263
, "Opel": 253
, "Renault": 251
, "Audi": 245
, "Hyundai": 243
, "Peugeot": 182
, "Seat": 169
, "Honda": 134
, "Mazda": 125
, "Citroën": 119
, "Subaru": 113
, "Dacia": 109
, "Mitsubishi": 80
, "Suzuki": 66
, "Mini": 28
, "Land Rover": 21
, "Jaguar": 16
, "Lexus": 14
, "Porsche": 10
, "Fiat": 9
, "Alfa Romeo": 6
, "Tesla": 4
, "other": 121
});

db.insert(db.countries.FI, "2018-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 14
, "Hyundai|Ioniq Electric": 12
, "Volkswagen|e-Golf": 11
, "Hyundai|Kona Electric": 7
, "Renault|Zoe": 6
, "Tesla|Model S": 4
, "Kia|Soul EV": 2
, "BMW|i3 BEV": 1
, "Jaguar|I-Pace": 1
});

db.insert(db.countries.FI, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1937/November_2018.xlsx",
{ "Toyota": 1039
, "Volkswagen": 1000
, "Škoda": 905
, "Volvo": 718
, "Ford": 645
, "Renault": 514
, "Mercedes-Benz": 494
, "Kia": 468
, "Opel": 358
, "Nissan": 293
, "BMW": 278
, "Hyundai": 263
, "Audi": 222
, "Peugeot": 222
, "Dacia": 211
, "Seat": 167
, "Mitsubishi": 136
, "Mazda": 131
, "Subaru": 128
, "Citroën": 111
, "Honda": 88
, "Suzuki": 79
, "Lexus": 20
, "Mini": 18
, "Tesla": 12
, "Land Rover": 10
, "Jaguar": 9
, "Fiat": 6
, "Porsche": 6
, "other": 111
});

db.insert(db.countries.FI, "2018-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 30
, "BMW|i3 BEV": 16
, "Volkswagen|e-Golf": 9
, "Hyundai|Ioniq Electric": 8
, "Hyundai|Kona Electric": 8
, "Tesla|Model S": 6
, "Tesla|Model X": 6
, "Renault|Zoe": 4
, "Jaguar|I-Pace": 3
, "Kia|Soul EV": 2
});

db.insert(db.countries.FI, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1948/December_2018.xlsx",
{ "Volkswagen": 1027
, "Škoda": 705
, "Renault": 653
, "Volvo": 595
, "Ford": 425
, "Toyota": 306
, "Dacia": 271
, "Mercedes-Benz": 267
, "Kia": 247
, "BMW": 195
, "Hyundai": 191
, "Audi": 161
, "Nissan": 153
, "Peugeot": 146
, "Opel": 142
, "Seat": 129
, "Citroën": 80
, "Mitsubishi": 80
, "Subaru": 80
, "Mazda": 69
, "Honda": 59
, "Suzuki": 46
, "Tesla": 24
, "Lexus": 22
, "Jaguar": 15
, "Mini": 15
, "Land Rover": 8
, "Porsche": 3
, "Fiat": 1
, "other": 44
});

db.insert(db.countries.FI, "2018-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2018/12, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|e-Golf": 24
, "Nissan|Leaf": 14
, "Tesla|Model S": 12
, "Tesla|Model X": 12
, "Renault|Zoe": 9
, "Hyundai|Ioniq Electric": 7
, "Jaguar|I-Pace": 3
, "Hyundai|Kona Electric": 2
, "BMW|i3 BEV": 1
, "Nissan|e-NV200": 1
});

db.insert(db.countries.FI, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1955/January_2019.xlsx",
{ "Toyota": 1603
, "Škoda": 1566
, "Volvo": 1194
, "Volkswagen": 1130
, "Ford": 921
, "Kia": 683
, "Opel": 638
, "Mercedes-Benz": 617
, "Nissan": 551
, "BMW": 379
, "Hyundai": 350
, "Audi": 318
, "Peugeot": 294
, "Renault": 206
, "Seat": 181
, "Mitsubishi": 163
, "Citroën": 145
, "Honda": 140
, "Mazda": 137
, "Suzuki": 114
, "Subaru": 94
, "Dacia": 69
, "Jaguar": 29
, "Lexus": 27
, "Land Rover": 21
, "Mini": 19
, "Tesla": 16
, "Alfa Romeo": 5
, "Fiat": 5
, "Porsche": 5
, "DS Automobiles": 1
, "other": 111
});

db.insert(db.countries.FI, "2019-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 31
, "Jaguar|I-Pace": 19
, "Hyundai|Ioniq Electric": 15
, "Tesla|Model S": 15
, "BMW|i3 BEV": 12
, "Hyundai|Kona Electric": 8
, "Renault|Zoe": 4
, "Kia|Soul EV": 2
, "Tesla|Model X": 1
});

db.insert(db.countries.FI, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1965/February_2019.xlsx",
{ "Škoda": 992
, "Toyota": 979
, "Volkswagen": 886
, "Volvo": 703
, "Ford": 645
, "Kia": 539
, "Opel": 448
, "Mercedes-Benz": 412
, "Hyundai": 352
, "Nissan": 319
, "BMW": 231
, "Audi": 199
, "Seat": 198
, "Mitsubishi": 175
, "Peugeot": 154
, "Citroën": 104
, "Honda": 96
, "Mazda": 85
, "Suzuki": 85
, "Subaru": 70
, "Renault": 65
, "Dacia": 54
, "Tesla": 40
, "Lexus": 31
, "Jaguar": 23
, "Mini": 23
, "Land Rover": 20
, "Jeep": 8
, "Fiat": 7
, "other": 141
});

db.insert(db.countries.FI, "2019-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 37
, "Nissan|Leaf": 24
, "Audi|Q8 e-tron": 14
, "Hyundai|Ioniq Electric": 14
, "Hyundai|Kona Electric": 12
, "Jaguar|I-Pace": 11
, "Renault|Zoe": 4
, "Volkswagen|e-Golf": 3
, "Tesla|Model X": 2
, "BMW|i3 BEV": 1
, "Kia|Soul EV": 1
, "Tesla|Model S": 1
, "other": 3
});

db.insert(db.countries.FI, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1978/March_2019.xlsx",
{ "Toyota": 1103
, "Volkswagen": 994
, "Škoda": 865
, "Ford": 768
, "Volvo": 720
, "Nissan": 570
, "Kia": 515
, "Mercedes-Benz": 513
, "BMW": 409
, "Audi": 377
, "Opel": 322
, "Hyundai": 319
, "Seat": 198
, "Mitsubishi": 189
, "Citroën": 175
, "Peugeot": 171
, "Tesla": 153
, "Suzuki": 146
, "Mazda": 115
, "Dacia": 112
, "Honda": 112
, "Renault": 104
, "Subaru": 62
, "Jaguar": 23
, "Land Rover": 23
, "Lexus": 19
, "Mini": 19
, "Fiat": 13
, "Porsche": 12
, "other": 156
});

db.insert(db.countries.FI, "2019-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 146
, "Nissan|Leaf": 20
, "Hyundai|Ioniq Electric": 16
, "Hyundai|Kona Electric": 12
, "Audi|Q8 e-tron": 9
, "Jaguar|I-Pace": 7
, "Volkswagen|e-Golf": 7
, "Kia|Niro EV": 6
, "BMW|i3 BEV": 4
, "Tesla|Model S": 4
, "Tesla|Model X": 3
, "Renault|Zoe": 2
, "Kia|Soul EV": 1
, "Nissan|e-NV200": 1
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.FI, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/1995/April_2019.xlsx",
{ "Toyota": 1179
, "Škoda": 958
, "Volkswagen": 927
, "Volvo": 762
, "Ford": 735
, "Kia": 644
, "Nissan": 542
, "Mercedes-Benz": 510
, "Opel": 502
, "Peugeot": 342
, "Hyundai": 330
, "Audi": 325
, "BMW": 242
, "Citroën": 183
, "Seat": 174
, "Mitsubishi": 170
, "Mazda": 160
, "Renault": 154
, "Honda": 135
, "Suzuki": 113
, "Tesla": 97
, "Dacia": 83
, "Subaru": 68
, "Land Rover": 57
, "Lexus": 41
, "Jaguar": 40
, "Mini": 18
, "Porsche": 16
, "Fiat": 6
, "other": 235
});

db.insert(db.countries.FI, "2019-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 91
, "Nissan|Leaf": 42
, "Jaguar|I-Pace": 16
, "Audi|Q8 e-tron": 10
, "Hyundai|Ioniq Electric": 10
, "BMW|i3 BEV": 8
, "Tesla|Model S": 4
, "Renault|Zoe": 2
, "Tesla|Model X": 2
, "Volkswagen|e-Golf": 2
, "Hyundai|Kona Electric": 1
, "Nissan|e-NV200": 1
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.FI, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2015/May_2019.xlsx",
{ "Toyota": 1565
, "Volkswagen": 1202
, "Škoda": 972
, "Volvo": 725
, "Ford": 714
, "Kia": 636
, "Opel": 600
, "Mercedes-Benz": 561
, "Nissan": 535
, "Audi": 425
, "BMW": 401
, "Renault": 365
, "Hyundai": 285
, "Seat": 260
, "Peugeot": 240
, "Mitsubishi": 200
, "Citroën": 185
, "Mazda": 157
, "Honda": 108
, "Suzuki": 102
, "Dacia": 80
, "Subaru": 79
, "Lexus": 51
, "Tesla": 42
, "Land Rover": 35
, "Jaguar": 24
, "Mini": 18
, "Porsche": 15
, "Fiat": 12
, "other": 290
});

db.insert(db.countries.FI, "2019-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 23
, "Audi|Q8 e-tron": 13
, "Jaguar|I-Pace": 13
, "Nissan|Leaf": 13
, "Tesla|Model S": 11
, "Tesla|Model X": 8
, "BMW|i3 BEV": 3
, "Hyundai|Ioniq Electric": 3
, "Volkswagen|e-Golf": 3
, "Hyundai|Kona Electric": 2
, "Renault|Zoe": 1
});

db.insert(db.countries.FI, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2041/June_2019.xlsx",
{ "Toyota": 1413
, "Volkswagen": 1268
, "Škoda": 1191
, "Ford": 810
, "Opel": 773
, "Volvo": 652
, "Mercedes-Benz": 609
, "Kia": 602
, "Audi": 347
, "Nissan": 335
, "Renault": 327
, "Hyundai": 294
, "Seat": 288
, "BMW": 238
, "Peugeot": 178
, "Tesla": 171
, "Citroën": 166
, "Mitsubishi": 160
, "Mazda": 111
, "Dacia": 110
, "Suzuki": 83
, "Honda": 42
, "Subaru": 40
, "Land Rover": 31
, "Mini": 23
, "Lexus": 22
, "Jaguar": 21
, "Porsche": 15
, "Fiat": 3
, "other": 214
});

db.insert(db.countries.FI, "2019-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/6, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 105
, "Tesla|Model S": 35
, "Tesla|Model X": 31
, "Audi|Q8 e-tron": 24
, "Nissan|Leaf": 19
, "Hyundai|Ioniq Electric": 8
, "Hyundai|Kona Electric": 7
, "Volkswagen|e-Golf": 4
, "Nissan|e-NV200": 2
, "BMW|i3 BEV": 1
, "Jaguar|I-Pace": 1
, "Mercedes-Benz|EQC": 1
, "Renault|Zoe": 1
});

db.insert(db.countries.FI, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2049/July_2019.xlsx",
{ "Toyota": 1654
, "Volkswagen": 986
, "Škoda": 856
, "Kia": 651
, "Volvo": 640
, "Ford": 632
, "Nissan": 489
, "Mercedes-Benz": 342
, "Hyundai": 323
, "Opel": 290
, "Audi": 287
, "Peugeot": 254
, "Seat": 241
, "BMW": 237
, "Renault": 232
, "Mitsubishi": 161
, "Citroën": 152
, "Mazda": 107
, "Suzuki": 88
, "Tesla": 68
, "Honda": 63
, "Dacia": 60
, "Subaru": 60
, "Jaguar": 33
, "Mini": 28
, "Lexus": 27
, "Land Rover": 23
, "Fiat": 9
, "Porsche": 9
, "other": 215
});

db.insert(db.countries.FI, "2019-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/7, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 56
, "Audi|Q8 e-tron": 36
, "Nissan|Leaf": 21
, "Hyundai|Kona Electric": 18
, "Tesla|Model X": 8
, "Hyundai|Ioniq Electric": 7
, "Jaguar|I-Pace": 7
, "Tesla|Model S": 4
, "Mercedes-Benz|EQC": 3
, "Volkswagen|e-Golf": 2
, "Volkswagen|e-up!": 2
, "other": 4
});

db.insert(db.countries.FI, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2055/August_2019.xlsx",
{ "Toyota": 1432
, "Volkswagen": 857
, "Škoda": 811
, "Kia": 770
, "Ford": 686
, "Volvo": 657
, "Nissan": 616
, "Hyundai": 512
, "Mercedes-Benz": 507
, "Opel": 374
, "BMW": 312
, "Peugeot": 307
, "Renault": 291
, "Audi": 277
, "Seat": 261
, "Mitsubishi": 235
, "Citroën": 213
, "Suzuki": 120
, "Mazda": 108
, "Dacia": 103
, "Honda": 96
, "Subaru": 55
, "Tesla": 53
, "Lexus": 47
, "Mini": 27
, "Land Rover": 25
, "Jaguar": 11
, "Porsche": 10
, "Fiat": 6
, "other": 214
});

db.insert(db.countries.FI, "2019-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 43
, "Tesla|Model 3": 28
, "Tesla|Model S": 18
, "Audi|Q8 e-tron": 16
, "Hyundai|Kona Electric": 11
, "Hyundai|Ioniq Electric": 8
, "Tesla|Model X": 7
, "Volkswagen|e-Golf": 6
, "BMW|i3 BEV": 5
, "Jaguar|I-Pace": 3
, "Renault|Zoe": 3
, "Kia|Soul EV": 1
, "Nissan|e-NV200": 1
, "other": 1
});

db.insert(db.countries.FI, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2068/September_2019.xlsx",
{ "Toyota": 1273
, "Škoda": 854
, "Volkswagen": 789
, "Volvo": 715
, "Ford": 567
, "Kia": 523
, "Mercedes-Benz": 509
, "Opel": 413
, "Hyundai": 383
, "Nissan": 365
, "BMW": 290
, "Audi": 239
, "Mitsubishi": 171
, "Citroën": 169
, "Seat": 158
, "Tesla": 156
, "Mazda": 150
, "Dacia": 134
, "Peugeot": 109
, "Renault": 107
, "Suzuki": 90
, "Honda": 52
, "Lexus": 38
, "Subaru": 35
, "Land Rover": 25
, "Mini": 17
, "Jaguar": 11
, "Fiat": 10
, "Porsche": 2
, "other": 82
});

db.insert(db.countries.FI, "2019-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/9, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 128
, "Hyundai|Kona Electric": 54
, "Tesla|Model S": 19
, "Nissan|Leaf": 18
, "Audi|Q8 e-tron": 14
, "Tesla|Model X": 9
, "Jaguar|I-Pace": 6
, "Hyundai|Ioniq Electric": 5
, "Volkswagen|e-Golf": 5
, "BMW|i3 BEV": 3
, "Kia|Soul EV": 1
});

db.insert(db.countries.FI, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2079/October_2019.xlsx",
{ "Toyota": 1235
, "Volkswagen": 945
, "Škoda": 903
, "Volvo": 885
, "Kia": 707
, "Ford": 672
, "Mercedes-Benz": 513
, "BMW": 381
, "Nissan": 334
, "Renault": 322
, "Opel": 292
, "Hyundai": 291
, "Audi": 269
, "Citroën": 245
, "Dacia": 223
, "Mazda": 200
, "Seat": 156
, "Peugeot": 149
, "Mitsubishi": 129
, "Suzuki": 110
, "Subaru": 59
, "Honda": 56
, "Porsche": 51
, "Lexus": 37
, "Mini": 25
, "Land Rover": 17
, "Jaguar": 15
, "Fiat": 9
, "Tesla": 7
, "other": 129
});

db.insert(db.countries.FI, "2019-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Hyundai|Kona Electric": 26
, "Audi|Q8 e-tron": 9
, "Nissan|Leaf": 7
, "Jaguar|I-Pace": 6
, "Volkswagen|e-Golf": 6
, "Renault|Zoe": 5
, "Mercedes-Benz|EQC": 4
, "Tesla|Model 3": 4
, "Hyundai|Ioniq Electric": 3
, "Tesla|Model X": 2
, "Tesla|Model S": 1
});

db.insert(db.countries.FI, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2086/November_2019.xlsx",
{ "Toyota": 1119
, "Volkswagen": 1063
, "Škoda": 769
, "Volvo": 715
, "Mercedes-Benz": 588
, "Kia": 499
, "Ford": 488
, "Renault": 386
, "Nissan": 360
, "Hyundai": 338
, "Opel": 312
, "Dacia": 309
, "BMW": 299
, "Audi": 244
, "Mazda": 205
, "Peugeot": 161
, "Citroën": 144
, "Seat": 139
, "Mitsubishi": 133
, "Suzuki": 97
, "Subaru": 63
, "Honda": 39
, "Porsche": 39
, "Lexus": 26
, "Mini": 20
, "Land Rover": 18
, "Tesla": 14
, "Jaguar": 7
, "Fiat": 2
, "other": 84
});

db.insert(db.countries.FI, "2019-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Hyundai|Kona Electric": 34
, "Nissan|Leaf": 24
, "Tesla|Model S": 10
, "Audi|Q8 e-tron": 8
, "Volkswagen|e-Golf": 6
, "Tesla|Model 3": 3
, "Hyundai|Ioniq Electric": 2
, "Jaguar|I-Pace": 2
, "Renault|Zoe": 1
, "Tesla|Model X": 1
});

db.insert(db.countries.FI, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2090/December_2019.xlsx",
{ "Renault": 877
, "Volvo": 804
, "Škoda": 759
, "Volkswagen": 756
, "Toyota": 626
, "Mercedes-Benz": 535
, "Ford": 487
, "Kia": 417
, "Dacia": 381
, "Opel": 373
, "BMW": 297
, "Hyundai": 295
, "Audi": 246
, "Seat": 232
, "Mazda": 224
, "Nissan": 195
, "Citroën": 142
, "Peugeot": 137
, "Tesla": 107
, "Mitsubishi": 75
, "Suzuki": 58
, "Subaru": 30
, "Porsche": 25
, "Honda": 22
, "Lexus": 22
, "Mini": 18
, "Land Rover": 16
, "Jaguar": 4
, "Fiat": 3
, "other": 50
});

db.insert(db.countries.FI, "2019-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2019/12, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 76
, "Hyundai|Kona Electric": 17
, "Tesla|Model S": 17
, "Tesla|Model X": 14
, "Nissan|Leaf": 12
, "Hyundai|Ioniq Electric": 7
, "Audi|Q8 e-tron": 6
, "Volkswagen|e-Golf": 3
, "Mercedes-Benz|EQC": 2
, "BMW|i3 BEV": 1
, "Jaguar|I-Pace": 1
, "Kia|Soul EV": 1
});

db.insert(db.countries.FI, "2020-01", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2124/January_2020.xlsx",
{ "Toyota": 1683
, "Škoda": 1173
, "Volkswagen": 1078
, "Volvo": 1049
, "Kia": 690
, "Ford": 658
, "Mercedes-Benz": 617
, "BMW": 582
, "Opel": 535
, "Nissan": 469
, "Hyundai": 408
, "Audi": 388
, "Citroën": 196
, "Mitsubishi": 178
, "Seat": 175
, "Peugeot": 171
, "Renault": 91
, "Subaru": 79
, "Mazda": 78
, "Honda": 72
, "Suzuki": 67
, "Lexus": 55
, "Porsche": 38
, "Dacia": 36
, "Tesla": 27
, "Land Rover": 25
, "Mini": 23
, "Jaguar": 9
, "Fiat": 4
, "DS Automobiles": 3
, "other": 141
});

db.insert(db.countries.FI, "2020-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Renault|Zoe": 29
, "Hyundai|Kona Electric": 25
, "Nissan|Leaf": 21
, "Audi|Q8 e-tron": 20
, "Volkswagen|e-Golf": 16
, "Tesla|Model 3": 13
, "Volkswagen|e-up!": 13
, "Hyundai|Ioniq Electric": 11
, "Tesla|Model S": 11
, "Seat|Mii Electric": 5
, "Mercedes-Benz|EQC": 4
, "Nissan|e-NV200": 3
, "Tesla|Model X": 3
, "BMW|i3 BEV": 2
, "Jaguar|I-Pace": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Kia|Soul EV": 1
});

db.insert(db.countries.FI, "2020-02", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2137/February_2020.xlsx",
{ "Toyota": 1286
, "Volkswagen": 829
, "Škoda": 788
, "Volvo": 744
, "Kia": 566
, "Ford": 492
, "BMW": 443
, "Mercedes-Benz": 437
, "Opel": 421
, "Nissan": 304
, "Hyundai": 267
, "Audi": 234
, "Peugeot": 225
, "Citroën": 224
, "Mitsubishi": 161
, "Seat": 149
, "Renault": 118
, "Suzuki": 107
, "Mazda": 87
, "Honda": 65
, "Lexus": 32
, "Subaru": 27
, "Dacia": 26
, "Mini": 19
, "Land Rover": 18
, "DS Automobiles": 11
, "Porsche": 11
, "SsangYong": 10
, "Jaguar": 6
, "Tesla": 6
, "other": 158
});

db.insert(db.countries.FI, "2020-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Seat|Mii Electric": 50
, "Volkswagen|e-Golf": 35
, "Volkswagen|e-up!": 32
, "Hyundai|Kona Electric": 28
, "Škoda|Citigo-e": 23
, "Nissan|Leaf": 13
, "Hyundai|Ioniq Electric": 8
, "Audi|Q8 e-tron": 7
, "Mercedes-Benz|EQC": 6
, "Jaguar|I-Pace": 5
, "Mini|Cooper SE Electric": 4
, "Renault|Zoe": 4
, "Tesla|Model 3": 4
, "Kia|Soul EV": 3
, "Tesla|Model S": 2
, "BMW|i3 BEV": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Porsche|Taycan": 1
});

db.insert(db.countries.FI, "2020-03", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2143/March_2020.xlsx",
{ "Toyota": 1283
, "Škoda": 981
, "Volkswagen": 823
, "Volvo": 752
, "Mercedes-Benz": 653
, "Kia": 613
, "Ford": 543
, "Nissan": 409
, "BMW": 391
, "Audi": 379
, "Opel": 312
, "Tesla": 303
, "Hyundai": 233
, "Seat": 186
, "Mitsubishi": 178
, "Renault": 167
, "Citroën": 165
, "Peugeot": 152
, "Mazda": 96
, "Suzuki": 92
, "Dacia": 74
, "Honda": 57
, "Land Rover": 29
, "Lexus": 29
, "Subaru": 28
, "Mini": 24
, "Porsche": 21
, "DS Automobiles": 10
, "Jaguar": 9
, "SsangYong": 8
, "Fiat": 4
, "other": 190
});

db.insert(db.countries.FI, "2020-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 273
, "Seat|Mii Electric": 56
, "Volkswagen|e-Golf": 30
, "Hyundai|Kona Electric": 29
, "Volkswagen|e-up!": 22
, "Tesla|Model S": 15
, "Tesla|Model X": 15
, "Mercedes-Benz|EQC": 13
, "Nissan|Leaf": 12
, "Škoda|Citigo-e": 11
, "Audi|Q8 e-tron": 10
, "Jaguar|I-Pace": 7
, "BMW|i3 BEV": 6
, "Hyundai|Ioniq Electric": 4
, "Porsche|Taycan": 3
, "Kia|Soul EV": 2
, "Mini|Cooper SE Electric": 2
, "Renault|Zoe": 1
});

db.insert(db.countries.FI, "2020-04", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2183/April_2020.xlsx",
{ "Toyota": 806
, "Škoda": 659
, "Volkswagen": 567
, "Volvo": 450
, "Mercedes-Benz": 406
, "Ford": 379
, "Kia": 365
, "BMW": 295
, "Audi": 274
, "Nissan": 233
, "Opel": 222
, "Citroën": 153
, "Peugeot": 151
, "Hyundai": 140
, "Renault": 104
, "Seat": 92
, "Mitsubishi": 75
, "Mazda": 72
, "Honda": 62
, "Suzuki": 60
, "Dacia": 49
, "Tesla": 43
, "Porsche": 36
, "Subaru": 25
, "Lexus": 24
, "Land Rover": 23
, "Mini": 19
, "Jaguar": 5
, "SsangYong": 4
, "DS Automobiles": 3
, "other": 185
});

db.insert(db.countries.FI, "2020-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 34
, "Kia|Niro EV": 21
, "Volkswagen|e-Golf": 19
, "Hyundai|Kona Electric": 17
, "Seat|Mii Electric": 17
, "Mercedes-Benz|EQC": 15
, "Porsche|Taycan": 15
, "Volkswagen|e-up!": 11
, "Hyundai|Ioniq Electric": 9
, "Škoda|Citigo-e": 9
, "Nissan|Leaf": 8
, "Tesla|Model S": 8
, "BMW|i3 BEV": 3
, "Mini|Cooper SE Electric": 3
, "Kia|Soul EV": 2
, "Audi|Q8 e-tron": 1
, "Jaguar|I-Pace": 1
, "Renault|Zoe": 1
, "Tesla|Model X": 1
});

db.insert(db.countries.FI, "2020-05", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2201/May_2020.xlsx",
{ "Toyota": 689
, "Volkswagen": 469
, "Kia": 451
, "Škoda": 388
, "Ford": 351
, "Mercedes-Benz": 347
, "BMW": 243
, "Opel": 213
, "Volvo": 205
, "Nissan": 180
, "Peugeot": 171
, "Audi": 170
, "Hyundai": 161
, "Citroën": 124
, "Renault": 122
, "Mitsubishi": 120
, "Seat": 98
, "Suzuki": 85
, "Mazda": 67
, "Dacia": 55
, "Honda": 41
, "Subaru": 26
, "Tesla": 26
, "Lexus": 23
, "Mini": 22
, "Porsche": 15
, "Fiat": 11
, "Land Rover": 11
, "DS Automobiles": 6
, "Jaguar": 2
, "SsangYong": 2
, "other": 216
});

db.insert(db.countries.FI, "2020-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 17
, "Hyundai|Ioniq Electric": 16
, "Kia|Niro EV": 11
, "Seat|Mii Electric": 11
, "Hyundai|Kona Electric": 8
, "Nissan|Leaf": 6
, "Porsche|Taycan": 6
, "Tesla|Model X": 5
, "Volkswagen|e-up!": 5
, "Mercedes-Benz|EQC": 4
, "Tesla|Model S": 4
, "Volkswagen|e-Golf": 4
, "Škoda|Citigo-e": 4
, "Audi|Q8 e-tron": 3
, "Renault|Zoe": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "BMW|i3 BEV": 1
, "other": 2
});

db.insert(db.countries.FI, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2216/June_2020.xlsx",
{ "Volkswagen": 973
, "Škoda": 913
, "Toyota": 721
, "Volvo": 714
, "Kia": 681
, "Ford": 577
, "Mercedes-Benz": 408
, "BMW": 315
, "Hyundai": 281
, "Audi": 275
, "Opel": 250
, "Nissan": 238
, "Citroën": 201
, "Peugeot": 193
, "Renault": 177
, "Mitsubishi": 148
, "Seat": 123
, "Suzuki": 119
, "Mazda": 89
, "Dacia": 72
, "Tesla": 57
, "Honda": 40
, "Porsche": 32
, "Subaru": 24
, "Lexus": 23
, "Land Rover": 18
, "Mini": 11
, "Fiat": 10
, "SsangYong": 10
, "Jaguar": 2
, "DS Automobiles": 1
, "other": 327
});

db.insert(db.countries.FI, "2020-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/6, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|e-up!": 59
, "Tesla|Model 3": 47
, "Volkswagen|e-Golf": 35
, "Seat|Mii Electric": 30
, "Hyundai|Ioniq Electric": 18
, "Hyundai|Kona Electric": 14
, "Škoda|Citigo-e": 14
, "Porsche|Taycan": 11
, "Renault|Zoe": 11
, "BMW|i3 BEV": 5
, "Mercedes-Benz|EQC": 5
, "Tesla|Model S": 5
, "Tesla|Model X": 5
, "Audi|Q8 e-tron": 4
, "Kia|Niro EV": 3
, "Nissan|Leaf": 3
, "Opel|Corsa-e": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Jaguar|I-Pace": 1
, "Mini|Cooper SE Electric": 1
});

db.insert(db.countries.FI, "2020-07", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2223/July_2020.xlsx",
{ "Toyota": 1064
, "Škoda": 1049
, "Volkswagen": 976
, "Volvo": 800
, "Kia": 715
, "Ford": 518
, "Mercedes-Benz": 515
, "Hyundai": 411
, "Nissan": 405
, "Audi": 344
, "Peugeot": 306
, "Opel": 297
, "BMW": 257
, "Citroën": 186
, "Mitsubishi": 169
, "Renault": 169
, "Seat": 169
, "Suzuki": 100
, "Mazda": 84
, "Dacia": 71
, "Honda": 60
, "Mini": 40
, "Subaru": 37
, "Porsche": 33
, "Lexus": 13
, "Fiat": 12
, "Land Rover": 11
, "DS Automobiles": 4
, "SsangYong": 4
, "Tesla": 1
, "other": 281
});

db.insert(db.countries.FI, "2020-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/7, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|e-up!": 50
, "Hyundai|Kona Electric": 32
, "Seat|Mii Electric": 29
, "Hyundai|Ioniq Electric": 28
, "Audi|Q8 e-tron": 15
, "Volkswagen|e-Golf": 15
, "Porsche|Taycan": 9
, "Škoda|Citigo-e": 9
, "Mercedes-Benz|EQC": 7
, "Renault|Zoe": 7
, "Mini|Cooper SE Electric": 5
, "Nissan|Leaf": 5
, "BMW|i3 BEV": 3
, "Kia|Niro EV": 3
, "Opel|Corsa-e": 3
, "Jaguar|I-Pace": 2
, "Peugeot|e-208": 2
, "Honda|e": 1
, "Tesla|Model X": 1
});

db.insert(db.countries.FI, "2020-08", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2236/August_2020.xlsx",
{ "Toyota": 1443
, "Volkswagen": 687
, "Škoda": 679
, "Kia": 672
, "Mercedes-Benz": 590
, "Ford": 560
, "Volvo": 494
, "BMW": 419
, "Audi": 356
, "Nissan": 344
, "Opel": 329
, "Peugeot": 317
, "Hyundai": 241
, "Renault": 213
, "Seat": 145
, "Mitsubishi": 136
, "Citroën": 108
, "Suzuki": 100
, "Dacia": 90
, "Mazda": 70
, "Honda": 58
, "Porsche": 55
, "Subaru": 38
, "Mini": 32
, "Tesla": 32
, "Lexus": 23
, "DS Automobiles": 14
, "Fiat": 14
, "Jaguar": 10
, "Land Rover": 6
, "SsangYong": 5
, "other": 205
});

db.insert(db.countries.FI, "2020-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Porsche|Taycan": 32
, "Tesla|Model 3": 32
, "Volkswagen|e-up!": 30
, "Kia|Niro EV": 25
, "Seat|Mii Electric": 22
, "Škoda|Citigo-e": 20
, "Nissan|Leaf": 19
, "Audi|Q8 e-tron": 18
, "Hyundai|Kona Electric": 18
, "Mini|Cooper SE Electric": 12
, "Mercedes-Benz|EQC": 11
, "Hyundai|Ioniq Electric": 9
, "Peugeot|e-208": 6
, "Jaguar|I-Pace": 5
, "Renault|Zoe": 5
, "BMW|i3 BEV": 3
, "Kia|Soul EV": 3
, "Volkswagen|e-Golf": 3
, "Opel|Corsa-e": 2
, "Peugeot|e-2008": 2
, "Honda|e": 1
});

db.insert(db.countries.FI, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2251/September_2020.xlsx",
{ "Toyota": 1186
, "Volkswagen": 785
, "Škoda": 714
, "Kia": 637
, "Mercedes-Benz": 633
, "Volvo": 551
, "Ford": 544
, "BMW": 379
, "Nissan": 360
, "Opel": 301
, "Hyundai": 297
, "Peugeot": 251
, "Audi": 249
, "Tesla": 244
, "Renault": 233
, "Seat": 175
, "Mitsubishi": 122
, "Citroën": 113
, "Mazda": 106
, "Suzuki": 103
, "Dacia": 100
, "Honda": 47
, "Subaru": 27
, "Porsche": 24
, "Mini": 21
, "Land Rover": 19
, "Lexus": 18
, "Fiat": 10
, "Jaguar": 5
, "DS Automobiles": 4
, "other": 166
});

db.insert(db.countries.FI, "2020-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/9, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 201
, "Tesla|Model 3": 182
, "Hyundai|Ioniq Electric": 35
, "Tesla|Model S": 31
, "Tesla|Model X": 31
, "Hyundai|Kona Electric": 27
, "Kia|Niro EV": 27
, "Volkswagen|e-up!": 19
, "Škoda|Citigo-e": 18
, "Seat|Mii Electric": 16
, "Nissan|Leaf": 15
, "Opel|Corsa-e": 12
, "Porsche|Taycan": 11
, "Renault|Zoe": 10
, "Audi|Q8 e-tron": 9
, "Peugeot|e-2008": 8
, "Peugeot|e-208": 6
, "Mazda|MX-30": 5
, "Honda|e": 4
, "Mercedes-Benz|EQC": 4
, "BMW|i3 BEV": 2
, "Jaguar|I-Pace": 2
, "Mini|Cooper SE Electric": 2
, "Nissan|e-NV200": 1
});

db.insert(db.countries.FI, "2020-10", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2257/October_2020.xlsx",
{ "Toyota": 1080
, "Škoda": 786
, "Volkswagen": 752
, "Kia": 550
, "Ford": 513
, "Volvo": 509
, "Mercedes-Benz": 445
, "Nissan": 404
, "Audi": 300
, "Opel": 299
, "BMW": 261
, "Peugeot": 255
, "Hyundai": 230
, "Renault": 219
, "Citroën": 177
, "Mitsubishi": 106
, "Suzuki": 91
, "Seat": 75
, "Mazda": 68
, "Honda": 44
, "Dacia": 42
, "Subaru": 33
, "Mini": 29
, "Lexus": 23
, "Porsche": 23
, "Fiat": 22
, "Tesla": 21
, "Land Rover": 14
, "DS Automobiles": 3
, "Jaguar": 2
, "other": 123
});

db.insert(db.countries.FI, "2020-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 50
, "Kia|Niro EV": 23
, "Škoda|Citigo-e": 19
, "Audi|Q8 e-tron": 14
, "Volkswagen|e-up!": 14
, "Mini|Cooper SE Electric": 13
, "Peugeot|e-2008": 13
, "Hyundai|Kona Electric": 11
, "Seat|Mii Electric": 11
, "Nissan|Leaf": 10
, "Tesla|Model S": 9
, "Mercedes-Benz|EQC": 8
, "Opel|Corsa-e": 8
, "Tesla|Model 3": 8
, "Peugeot|e-208": 7
, "Renault|Zoe": 6
, "Kia|Soul EV": 4
, "Porsche|Taycan": 4
, "Tesla|Model X": 4
, "Hyundai|Ioniq Electric": 3
, "BMW|i3 BEV": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Mazda|MX-30": 1
});

db.insert(db.countries.FI, "2020-11", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2284/November_2020.xlsx",
{ "Toyota": 1193
, "Volkswagen": 893
, "Škoda": 724
, "Volvo": 540
, "Kia": 514
, "Ford": 463
, "Mercedes-Benz": 454
, "Nissan": 294
, "Renault": 288
, "BMW": 279
, "Audi": 274
, "Peugeot": 224
, "Citroën": 213
, "Opel": 142
, "Hyundai": 135
, "Dacia": 111
, "Seat": 94
, "Mitsubishi": 90
, "Suzuki": 85
, "Mazda": 65
, "Subaru": 37
, "Honda": 32
, "Mini": 32
, "Land Rover": 19
, "Fiat": 18
, "Lexus": 13
, "Tesla": 12
, "Porsche": 11
, "SsangYong": 11
, "DS Automobiles": 7
, "other": 107
});

db.insert(db.countries.FI, "2020-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 53
, "Volkswagen|e-up!": 40
, "Kia|Niro EV": 27
, "Hyundai|Kona Electric": 18
, "Seat|Mii Electric": 18
, "Nissan|Leaf": 16
, "Mini|Cooper SE Electric": 14
, "Peugeot|e-2008": 13
, "Škoda|Citigo-e": 11
, "Audi|Q8 e-tron": 10
, "Peugeot|e-208": 8
, "Tesla|Model 3": 8
, "Mercedes-Benz|EQC": 7
, "Hyundai|Ioniq Electric": 5
, "Tesla|Model S": 4
, "Opel|Corsa-e": 3
, "Porsche|Taycan": 3
, "Renault|Zoe": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Kia|Soul EV": 1
, "Mazda|MX-30": 1
, "Nissan|e-NV200": 1
, "Volvo|XC40 Recharge pure electric": 1
});

db.insert(db.countries.FI, "2020-12", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2292/December_2020.xlsx",
{ "Volkswagen": 1106
, "Volvo": 873
, "Škoda": 840
, "Toyota": 831
, "BMW": 450
, "Renault": 426
, "Kia": 402
, "Mercedes-Benz": 398
, "Ford": 361
, "Hyundai": 324
, "Opel": 288
, "Nissan": 276
, "Peugeot": 227
, "Audi": 223
, "Tesla": 220
, "Seat": 148
, "Citroën": 138
, "Dacia": 109
, "Mitsubishi": 86
, "Mazda": 65
, "Suzuki": 62
, "Honda": 48
, "Jaguar": 34
, "Subaru": 29
, "Mini": 21
, "Land Rover": 15
, "Porsche": 14
, "Lexus": 13
, "Fiat": 11
, "DS Automobiles": 2
, "other": 92
});

db.insert(db.countries.FI, "2020-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/12, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 194
, "Tesla|Model 3": 169
, "Volvo|XC40 Recharge pure electric": 153
, "Hyundai|Kona Electric": 107
, "Nissan|Leaf": 82
, "Renault|Zoe": 62
, "Jaguar|I-Pace": 34
, "Volkswagen|e-up!": 34
, "Tesla|Model S": 30
, "Kia|Niro EV": 26
, "Tesla|Model X": 21
, "Mazda|MX-30": 19
, "Mercedes-Benz|EQV": 16
, "Opel|Corsa-e": 14
, "Škoda|Citigo-e": 12
, "Honda|e": 11
, "Seat|Mii Electric": 11
, "Hyundai|Ioniq Electric": 10
, "Mercedes-Benz|EQC": 9
, "Porsche|Taycan": 7
, "Audi|Q8 e-tron": 6
, "Mini|Cooper SE Electric": 6
, "Mercedes-Benz|eVito": 5
, "Peugeot|e-2008": 5
, "BMW|i3 BEV": 2
, "Ford|Mustang Mach-E": 2
, "Peugeot|e-208": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Nissan|e-NV200": 1
, "Volkswagen|e-Golf": 1
, "other": 1
});

db.insert(db.countries.FI, "2021-01", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2352/January_2021.xlsx",
{ "Toyota": 1521
, "Škoda": 991
, "Volvo": 918
, "Volkswagen": 765
, "Mercedes-Benz": 760
, "Ford": 606
, "Audi": 498
, "Kia": 496
, "BMW": 416
, "Opel": 321
, "Nissan": 306
, "Seat": 250
, "Hyundai": 246
, "Peugeot": 205
, "Renault": 195
, "Dacia": 187
, "Citroën": 116
, "Mazda": 85
, "Suzuki": 71
, "Mitsubishi": 66
, "Lexus": 39
, "Subaru": 34
, "Fiat": 28
, "Cupra": 27
, "Mini": 26
, "Honda": 21
, "Land Rover": 13
, "Porsche": 9
, "Jeep": 8
, "Tesla": 7
, "other": 142
});

db.insert(db.countries.FI, "2021-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volvo|XC40 Recharge pure electric": 105
, "Hyundai|Kona Electric": 48
, "Audi|Q8 e-tron": 29
, "Mercedes-Benz|EQC": 25
, "Kia|Niro EV": 24
, "Opel|Corsa-e": 16
, "Volkswagen|ID.3": 14
, "Nissan|Leaf": 13
, "Škoda|Citigo-e": 13
, "Seat|Mii Electric": 12
, "Tesla|Model 3": 7
, "Peugeot|e-2008": 6
, "Peugeot|e-208": 6
, "Renault|Zoe": 6
, "Mini|Cooper SE Electric": 5
, "Citroën|ë-C4": 4
, "Porsche|Taycan": 4
, "Volkswagen|e-up!": 4
, "Hyundai|Ioniq Electric": 3
, "Mazda|MX-30": 3
, "Nissan|e-NV200": 3
, "Kia|Soul EV": 2
, "BMW|iX3": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Mercedes-Benz|EQV": 1
});

db.insert(db.countries.FI, "2021-02", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2384/February_2021.xlsx",
{ "Toyota": 1375
, "Volkswagen": 815
, "Volvo": 807
, "Škoda": 785
, "Kia": 496
, "Ford": 495
, "Mercedes-Benz": 449
, "BMW": 420
, "Peugeot": 318
, "Citroën": 259
, "Nissan": 252
, "Audi": 229
, "Hyundai": 226
, "Opel": 226
, "Seat": 165
, "Dacia": 84
, "Suzuki": 79
, "Mazda": 74
, "Mitsubishi": 70
, "Renault": 68
, "Tesla": 58
, "Land Rover": 41
, "Subaru": 29
, "Mini": 24
, "Honda": 23
, "Lexus": 20
, "Fiat": 18
, "Porsche": 18
, "Cupra": 14
, "Jeep": 9
, "other": 224
});

db.insert(db.countries.FI, "2021-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 58
, "Seat|Mii Electric": 43
, "Volkswagen|ID.3": 39
, "Volvo|XC40 Recharge pure electric": 37
, "Volkswagen|ID.4": 32
, "Hyundai|Kona Electric": 22
, "Nissan|Leaf": 21
, "Audi|Q8 e-tron": 20
, "Kia|Niro EV": 19
, "Peugeot|e-2008": 13
, "Mercedes-Benz|EQC": 9
, "Porsche|Taycan": 9
, "Hyundai|Ioniq Electric": 6
, "BMW|i3 BEV": 5
, "Peugeot|e-208": 4
, "Volkswagen|e-up!": 4
, "Mazda|MX-30": 3
, "Opel|Corsa-e": 3
, "Škoda|Citigo-e": 3
, "Citroën|ë-C4": 2
, "Ford|Mustang Mach-E": 2
, "Jaguar|I-Pace": 2
, "Mini|Cooper SE Electric": 2
, "BMW|iX3": 1
});

db.insert(db.countries.FI, "2021-03", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2405/March_2021.xlsx",
{ "Toyota": 1501
, "Volkswagen": 1020
, "Škoda": 913
, "Kia": 739
, "Volvo": 702
, "Ford": 662
, "Mercedes-Benz": 568
, "Nissan": 545
, "BMW": 457
, "Audi": 414
, "Opel": 376
, "Hyundai": 366
, "Peugeot": 314
, "Tesla": 298
, "Citroën": 261
, "Seat": 228
, "Mitsubishi": 156
, "Suzuki": 97
, "Renault": 96
, "Mazda": 76
, "Dacia": 61
, "Cupra": 49
, "Land Rover": 41
, "Honda": 35
, "Porsche": 35
, "Subaru": 34
, "Mini": 29
, "Fiat": 27
, "Lexus": 25
, "DS Automobiles": 16
, "Jeep": 10
, "other": 277
});

db.insert(db.countries.FI, "2021-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 298
, "Volkswagen|ID.4": 94
, "Volkswagen|ID.3": 64
, "Seat|Mii Electric": 60
, "Nissan|Leaf": 57
, "Volvo|XC40 Recharge pure electric": 36
, "Kia|Niro EV": 28
, "Audi|Q8 e-tron": 15
, "Volkswagen|e-up!": 15
, "Mercedes-Benz|EQC": 13
, "Peugeot|e-2008": 12
, "Porsche|Taycan": 12
, "Opel|Zafira-e": 11
, "BMW|iX3": 9
, "Hyundai|Kona Electric": 9
, "Peugeot|e-208": 8
, "BMW|i3 BEV": 7
, "Hyundai|Ioniq Electric": 7
, "Lexus|UX 300e": 7
, "Polestar|2": 5
, "Škoda|Citigo-e": 5
, "Citroën|ë-C4": 3
, "Mazda|MX-30": 3
, "Opel|Corsa-e": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Mercedes-Benz|EQA": 1
, "Mini|Cooper SE Electric": 1
, "Škoda|Enyaq": 1
, "other": 4
});

db.insert(db.countries.FI, "2021-04", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2421/April_2021.xlsx",
{ "Toyota": 1158
, "Volvo": 881
, "Škoda": 865
, "Volkswagen": 839
, "Kia": 660
, "Mercedes-Benz": 620
, "Ford": 468
, "BMW": 416
, "Audi": 367
, "Peugeot": 312
, "Hyundai": 280
, "Seat": 271
, "Nissan": 248
, "Citroën": 245
, "Opel": 171
, "Renault": 127
, "Suzuki": 104
, "Mitsubishi": 86
, "Dacia": 76
, "Mazda": 67
, "Porsche": 58
, "Land Rover": 42
, "Mini": 37
, "Cupra": 36
, "Honda": 29
, "Lexus": 28
, "Subaru": 18
, "Fiat": 17
, "Jeep": 10
, "Tesla": 7
, "other": 269
});

db.insert(db.countries.FI, "2021-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 154
, "Volkswagen|ID.3": 75
, "Seat|Mii Electric": 69
, "Kia|Niro EV": 38
, "Volvo|XC40 Recharge pure electric": 33
, "Volkswagen|e-up!": 28
, "Nissan|Leaf": 26
, "Porsche|Taycan": 22
, "Škoda|Enyaq": 22
, "Hyundai|Kona Electric": 21
, "Mercedes-Benz|EQC": 20
, "Audi|Q8 e-tron": 19
, "Mercedes-Benz|EQA": 17
, "Peugeot|e-2008": 11
, "BMW|iX3": 7
, "Peugeot|e-208": 7
, "Tesla|Model 3": 7
, "BMW|i3 BEV": 6
, "Mini|Cooper SE Electric": 6
, "Fiat|500e": 4
, "Renault|Zoe": 4
, "Citroën|ë-C4": 3
, "Hyundai|Ioniq Electric": 3
, "Jaguar|I-Pace": 3
, "Citroën|ë-Jumpy": 1
, "Lexus|UX 300e": 1
, "Mercedes-Benz|EQV": 1
, "Opel|Corsa-e": 1
, "Opel|Zafira-e": 1
, "Peugeot|e-Expert": 1
, "other": 3
});

db.insert(db.countries.FI, "2021-05", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2431/May_2021.xlsx",
{ "Toyota": 1342
, "Volkswagen": 1284
, "Škoda": 1027
, "Volvo": 785
, "Kia": 643
, "Mercedes-Benz": 551
, "BMW": 512
, "Ford": 458
, "Audi": 436
, "Peugeot": 361
, "Hyundai": 346
, "Seat": 331
, "Citroën": 256
, "Opel": 253
, "Nissan": 247
, "Renault": 169
, "Mazda": 105
, "Suzuki": 92
, "Mitsubishi": 81
, "Porsche": 38
, "Mini": 32
, "Dacia": 31
, "Honda": 27
, "Cupra": 26
, "Subaru": 25
, "Fiat": 24
, "Land Rover": 21
, "Lexus": 20
, "Tesla": 19
, "Jeep": 10
, "other": 412
});

db.insert(db.countries.FI, "2021-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 221
, "Škoda|Enyaq": 172
, "Seat|Mii Electric": 129
, "Volkswagen|ID.3": 86
, "Hyundai|Kona Electric": 48
, "Volvo|XC40 Recharge pure electric": 44
, "Volkswagen|e-up!": 29
, "Nissan|Leaf": 28
, "Kia|Niro EV": 23
, "Audi|Q8 e-tron": 21
, "Tesla|Model 3": 19
, "Mercedes-Benz|EQC": 18
, "Porsche|Taycan": 17
, "Ford|Mustang Mach-E": 15
, "Opel|Mokka-e": 15
, "Peugeot|e-208": 12
, "Mini|Cooper SE Electric": 9
, "Citroën|ë-C4": 7
, "BMW|iX3": 5
, "Kia|Soul EV": 5
, "Peugeot|e-2008": 5
, "Renault|Zoe": 5
, "Mercedes-Benz|EQA": 4
, "Opel|Corsa-e": 4
, "BMW|i3 BEV": 3
, "Fiat|500e": 3
, "Hyundai|Ioniq Electric": 3
, "Mazda|MX-30": 2
, "Citroën|ë-Jumpy": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Jaguar|I-Pace": 1
, "Lexus|UX 300e": 1
, "Mercedes-Benz|eVito": 1
, "Opel|Zafira-e": 1
, "Peugeot|e-Expert": 1
, "other": 3
});

db.insert(db.countries.FI, "2021-06", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2454/June_2021.xlsx",
{ "Toyota": 1801
, "Volkswagen": 1195
, "Škoda": 948
, "Kia": 834
, "Volvo": 477
, "Mercedes-Benz": 470
, "BMW": 452
, "Ford": 429
, "Audi": 415
, "Hyundai": 318
, "Peugeot": 314
, "Tesla": 277
, "Nissan": 217
, "Opel": 196
, "Renault": 191
, "Suzuki": 184
, "Seat": 147
, "Citroën": 136
, "Mitsubishi": 115
, "Mazda": 88
, "Dacia": 59
, "Fiat": 56
, "Porsche": 35
, "Mini": 34
, "Lexus": 32
, "Honda": 31
, "Cupra": 29
, "Jeep": 21
, "Subaru": 20
, "Land Rover": 16
, "other": 404
});

db.insert(db.countries.FI, "2021-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/6, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 277
, "Volkswagen|ID.4": 214
, "Škoda|Enyaq": 130
, "Volkswagen|ID.3": 61
, "Audi|Q4 e-tron": 45
, "Hyundai|Kona Electric": 45
, "Audi|Q8 e-tron": 32
, "Ford|Mustang Mach-E": 32
, "Seat|Mii Electric": 32
, "Kia|Niro EV": 23
, "Volvo|XC40 Recharge pure electric": 22
, "Volkswagen|e-up!": 19
, "BMW|iX3": 17
, "Nissan|Leaf": 17
, "Mercedes-Benz|EQA": 16
, "Mini|Cooper SE Electric": 11
, "Renault|Zoe": 9
, "Citroën|ë-C4": 8
, "Fiat|500e": 8
, "Mercedes-Benz|EQC": 6
, "Peugeot|e-208": 6
, "Peugeot|e-2008": 4
, "Hyundai|Ioniq Electric": 3
, "Kia|Soul EV": 3
, "BMW|i3 BEV": 2
, "Lexus|UX 300e": 2
, "Opel|Mokka-e": 2
, "Porsche|Taycan": 2
, "Jaguar|I-Pace": 1
, "Mazda|MX-30": 1
, "Mercedes-Benz|EQV": 1
, "Nissan|e-NV200": 1
, "Opel|Zafira-e": 1
, "other": 3
});

db.insert(db.countries.FI, "2021-07", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2461/July_2021.xlsx",
{ "Toyota": 1119
, "Volkswagen": 886
, "Kia": 751
, "Škoda": 682
, "Volvo": 506
, "Mercedes-Benz": 424
, "Ford": 356
, "Audi": 314
, "BMW": 314
, "Hyundai": 280
, "Peugeot": 202
, "Nissan": 196
, "Opel": 171
, "Citroën": 133
, "Mitsubishi": 111
, "Renault": 104
, "Seat": 104
, "Suzuki": 101
, "Dacia": 90
, "Mazda": 85
, "Subaru": 37
, "Fiat": 36
, "Land Rover": 33
, "Porsche": 21
, "Cupra": 20
, "Lexus": 20
, "Honda": 17
, "Mini": 15
, "Jeep": 9
, "DS Automobiles": 6
, "Tesla": 1
, "other": 337
});

db.insert(db.countries.FI, "2021-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/7, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 210
, "Škoda|Enyaq": 101
, "Ford|Mustang Mach-E": 100
, "Volkswagen|ID.3": 63
, "Volvo|XC40 Recharge pure electric": 56
, "Hyundai|Kona Electric": 34
, "Peugeot|e-2008": 22
, "Kia|Niro EV": 20
, "Audi|Q8 e-tron": 17
, "Audi|Q4 e-tron": 16
, "Seat|Mii Electric": 13
, "Volkswagen|e-up!": 12
, "Mercedes-Benz|EQA": 11
, "Polestar|2": 10
, "Nissan|Leaf": 8
, "Peugeot|e-208": 7
, "Renault|Zoe": 7
, "BMW|iX3": 6
, "Porsche|Taycan": 6
, "Fiat|500e": 5
, "Hyundai|Ioniq Electric": 5
, "Hyundai|Ioniq 5": 4
, "Mini|Cooper SE Electric": 4
, "Citroën|ë-C4": 2
, "Jaguar|I-Pace": 2
, "Mercedes-Benz|EQC": 2
, "Mazda|MX-30": 1
, "Opel|Corsa-e": 1
, "Opel|Mokka-e": 1
, "Tesla|Model 3": 1
, "other": 5
});

db.insert(db.countries.FI, "2021-08", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2470/August_2021.xlsx",
{ "Toyota": 1238
, "Volkswagen": 827
, "Kia": 670
, "Škoda": 620
, "Ford": 501
, "Volvo": 458
, "Mercedes-Benz": 428
, "BMW": 403
, "Hyundai": 341
, "Audi": 322
, "Opel": 257
, "Nissan": 241
, "Dacia": 229
, "Peugeot": 161
, "Citroën": 129
, "Mitsubishi": 100
, "Seat": 98
, "Renault": 93
, "Mazda": 90
, "Suzuki": 90
, "Fiat": 43
, "Mini": 32
, "Cupra": 28
, "Porsche": 27
, "Lexus": 25
, "Subaru": 25
, "Land Rover": 24
, "Honda": 19
, "Tesla": 17
, "Jeep": 7
, "DS Automobiles": 3
, "other": 358
});

db.insert(db.countries.FI, "2021-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 162
, "Ford|Mustang Mach-E": 81
, "Volkswagen|ID.3": 77
, "Škoda|Enyaq": 64
, "Volvo|XC40 Recharge pure electric": 49
, "Hyundai|Kona Electric": 42
, "Nissan|Leaf": 39
, "Kia|Niro EV": 27
, "Audi|Q4 e-tron": 22
, "Polestar|2": 22
, "Audi|Q8 e-tron": 21
, "Hyundai|Ioniq 5": 21
, "Mercedes-Benz|EQC": 19
, "Tesla|Model 3": 17
, "Mini|Cooper SE Electric": 16
, "Mercedes-Benz|EQA": 15
, "BMW|iX3": 12
, "Hyundai|Ioniq Electric": 12
, "Renault|Zoe": 11
, "Seat|Mii Electric": 11
, "Opel|Mokka-e": 9
, "Volkswagen|e-up!": 9
, "Citroën|ë-C4": 7
, "Porsche|Taycan": 7
, "Peugeot|e-2008": 5
, "Jaguar|I-Pace": 4
, "Lexus|UX 300e": 3
, "Kia|Soul EV": 2
, "Mercedes-Benz|eVito": 2
, "Peugeot|e-208": 2
, "Peugeot|e-Expert": 2
, "BMW|i3 BEV": 1
, "Fiat|500e": 1
, "Mercedes-Benz|EQS": 1
, "Mercedes-Benz|EQV": 1
, "Opel|Corsa-e": 1
, "other": 5
});

db.insert(db.countries.FI, "2021-09", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2483/September_2021.xlsx",
{ "Toyota": 891
, "Kia": 796
, "Volkswagen": 538
, "Škoda": 472
, "Ford": 407
, "Tesla": 405
, "Volvo": 355
, "Mercedes-Benz": 349
, "BMW": 340
, "Hyundai": 333
, "Nissan": 230
, "Audi": 210
, "Opel": 182
, "Renault": 162
, "Citroën": 122
, "Mazda": 104
, "Seat": 82
, "Suzuki": 82
, "Mitsubishi": 67
, "Peugeot": 55
, "Dacia": 53
, "Subaru": 26
, "Honda": 25
, "Lexus": 17
, "Fiat": 16
, "Mini": 16
, "Land Rover": 13
, "Porsche": 13
, "Cupra": 11
, "Jeep": 8
, "DS Automobiles": 6
, "other": 148
});

db.insert(db.countries.FI, "2021-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/9, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 219
, "Tesla|Model 3": 186
, "Volkswagen|ID.4": 45
, "Volkswagen|ID.3": 38
, "Škoda|Enyaq": 37
, "Hyundai|Ioniq Electric": 27
, "Hyundai|Kona Electric": 26
, "Kia|Niro EV": 25
, "Ford|Mustang Mach-E": 19
, "Nissan|Leaf": 18
, "Audi|Q4 e-tron": 13
, "Volvo|XC40 Recharge pure electric": 13
, "Hyundai|Ioniq 5": 11
, "Mercedes-Benz|EQC": 7
, "Renault|Zoe": 7
, "Mini|Cooper SE Electric": 6
, "Audi|Q8 e-tron": 5
, "Mercedes-Benz|EQA": 5
, "Seat|Mii Electric": 5
, "Mercedes-Benz|EQS": 3
, "BMW|iX3": 2
, "Citroën|ë-C4": 2
, "Fiat|500e": 2
, "Mazda|MX-30": 2
, "Peugeot|e-2008": 2
, "Polestar|2": 2
, "Volkswagen|e-up!": 2
, "BMW|iX": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Opel|Corsa-e": 1
, "Peugeot|e-Expert": 1
, "Porsche|Taycan": 1
});

db.insert(db.countries.FI, "2021-10", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2497/October_2021.xlsx",
{ "Toyota": 914
, "Volkswagen": 734
, "Kia": 674
, "Volvo": 527
, "Mercedes-Benz": 396
, "Ford": 366
, "Škoda": 364
, "BMW": 320
, "Hyundai": 303
, "Opel": 252
, "Peugeot": 234
, "Nissan": 230
, "Audi": 212
, "Citroën": 173
, "Renault": 115
, "Mazda": 103
, "Mitsubishi": 102
, "Seat": 65
, "Suzuki": 61
, "Subaru": 46
, "Land Rover": 43
, "Fiat": 30
, "Mini": 28
, "Dacia": 26
, "Porsche": 24
, "Honda": 22
, "Lexus": 11
, "Cupra": 7
, "Jeep": 7
, "Tesla": 3
, "other": 219
});

db.insert(db.countries.FI, "2021-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 148
, "Volkswagen|ID.4": 144
, "Nissan|Leaf": 104
, "Škoda|Enyaq": 104
, "Hyundai|Kona Electric": 81
, "Volvo|XC40 Recharge pure electric": 60
, "Audi|Q4 e-tron": 58
, "Hyundai|Ioniq 5": 52
, "Polestar|2": 52
, "Volkswagen|e-up!": 50
, "Kia|Niro EV": 44
, "Ford|Mustang Mach-E": 37
, "Opel|Mokka-e": 27
, "Hyundai|Ioniq Electric": 21
, "Audi|Q8 e-tron": 18
, "BMW|iX3": 16
, "Mazda|MX-30": 16
, "Peugeot|e-2008": 16
, "Porsche|Taycan": 15
, "Citroën|ë-C4": 14
, "Mercedes-Benz|EQS": 12
, "Opel|Corsa-e": 12
, "Mini|Cooper SE Electric": 11
, "Fiat|500e": 10
, "Mercedes-Benz|EQA": 9
, "Mercedes-Benz|EQC": 9
, "Renault|Zoe": 9
, "BMW|i3 BEV": 6
, "Seat|Mii Electric": 6
, "Kia|EV6": 5
, "BMW|iX": 4
, "Peugeot|e-208": 4
, "Opel|Zafira-e": 3
, "Peugeot|e-Expert": 3
, "Tesla|Model 3": 3
, "Citroën|ë-Jumpy": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Kia|Soul EV": 1
, "Mercedes-Benz|EQV": 1
, "Nissan|e-NV200": 1
, "other": 5
});

db.insert(db.countries.FI, "2021-11", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2510/November_2021.xlsx",
{ "Toyota": 935
, "Volvo": 795
, "Volkswagen": 656
, "Kia": 610
, "Škoda": 470
, "BMW": 385
, "Mercedes-Benz": 370
, "Peugeot": 299
, "Nissan": 258
, "Opel": 246
, "Ford": 221
, "Renault": 185
, "Hyundai": 182
, "Audi": 171
, "Citroën": 127
, "Mazda": 119
, "Mitsubishi": 86
, "Suzuki": 74
, "Seat": 61
, "Polestar": 50
, "Tesla": 48
, "Fiat": 39
, "Subaru": 23
, "Porsche": 22
, "Dacia": 21
, "Mini": 21
, "Land Rover": 15
, "Honda": 13
, "Cupra": 9
, "Lexus": 9
, "other": 156
});

db.insert(db.countries.FI, "2021-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 91
, "Škoda|Enyaq": 80
, "Volkswagen|ID.4": 77
, "Volvo|XC40 Recharge pure electric": 60
, "Volkswagen|ID.3": 54
, "Polestar|2": 50
, "Tesla|Model 3": 47
, "Audi|Q4 e-tron": 41
, "Ford|Mustang Mach-E": 41
, "Kia|EV6": 40
, "Kia|Niro EV": 39
, "Peugeot|e-2008": 39
, "Volkswagen|e-up!": 35
, "Peugeot|e-208": 32
, "Hyundai|Ioniq 5": 31
, "Hyundai|Kona Electric": 26
, "BMW|iX": 21
, "Opel|Corsa-e": 21
, "Porsche|Taycan": 14
, "BMW|iX3": 12
, "Mazda|MX-30": 12
, "Opel|Mokka-e": 10
, "Hyundai|Ioniq Electric": 9
, "Renault|Zoe": 9
, "Fiat|500e": 7
, "Mercedes-Benz|EQC": 7
, "Mini|Cooper SE Electric": 7
, "Audi|Q8 e-tron": 6
, "Citroën|ë-C4": 6
, "Mercedes-Benz|EQS": 6
, "Opel|Zafira-e": 6
, "Mercedes-Benz|EQA": 3
, "Opel|Combo-e": 2
, "Volvo|C40 Recharge": 2
, "Citroën|ë-Jumpy": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Kia|Soul EV": 1
, "Lexus|UX 300e": 1
, "Peugeot|e-Expert": 1
, "Seat|Mii Electric": 1
, "Tesla|Model Y": 1
, "other": 7
});

db.insert(db.countries.FI, "2021-12", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2522/December_2021.xlsx",
{ "Kia": 644
, "Volvo": 568
, "Toyota": 529
, "Volkswagen": 518
, "Škoda": 416
, "Tesla": 376
, "Renault": 375
, "BMW": 347
, "Hyundai": 338
, "Nissan": 287
, "Opel": 286
, "Mercedes-Benz": 257
, "Peugeot": 231
, "Ford": 226
, "Audi": 191
, "Citroën": 121
, "Dacia": 99
, "Suzuki": 83
, "Seat": 72
, "Mazda": 69
, "Cupra": 65
, "Polestar": 61
, "Mitsubishi": 53
, "Mini": 49
, "Fiat": 38
, "Porsche": 32
, "Land Rover": 27
, "Honda": 17
, "Subaru": 17
, "Lexus": 5
, "other": 129
});

db.insert(db.countries.FI, "2021-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/12, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 214
, "Tesla|Model 3": 162
, "Nissan|Leaf": 147
, "Hyundai|Kona Electric": 98
, "Hyundai|Ioniq 5": 92
, "Kia|Niro EV": 87
, "Volkswagen|ID.4": 75
, "Škoda|Enyaq": 73
, "Polestar|2": 60
, "Audi|Q4 e-tron": 54
, "Cupra|Born": 54
, "Ford|Mustang Mach-E": 53
, "Mini|Cooper SE Electric": 36
, "Seat|Mii Electric": 31
, "Volkswagen|e-up!": 30
, "Volvo|C40 Recharge": 28
, "Volvo|XC40 Recharge pure electric": 28
, "Volkswagen|ID.3": 27
, "Peugeot|e-Expert": 25
, "Kia|EV6": 23
, "Opel|Mokka-e": 19
, "Porsche|Taycan": 18
, "Renault|Zoe": 17
, "Mazda|MX-30": 15
, "Peugeot|e-208": 14
, "BMW|iX": 13
, "BMW|iX3": 13
, "Peugeot|e-2008": 12
, "Opel|Corsa-e": 10
, "Mercedes-Benz|EQA": 6
, "BMW|i3 BEV": 5
, "Citroën|ë-C4": 5
, "Audi|Q8 e-tron": 4
, "DS Automobiles|DS 3 Crossback E-Tense": 4
, "Fiat|500e": 4
, "Hyundai|Ioniq Electric": 4
, "Opel|Zafira-e": 4
, "Kia|Soul EV": 2
, "Mercedes-Benz|EQB": 2
, "Mercedes-Benz|EQC": 2
, "Citroën|Berlingo Electric": 1
, "Jaguar|I-Pace": 1
, "Mercedes-Benz|EQS": 1
, "Mercedes-Benz|eVito": 1
, "Peugeot|e-Rifter": 1
, "other": 4
});

db.insert(db.countries.FI, "2022-01", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2534/January_2022.xlsx",
{ "Toyota": 1708
, "Volvo": 743
, "Kia": 630
, "Škoda": 567
, "Volkswagen": 537
, "Ford": 496
, "BMW": 442
, "Mercedes-Benz": 408
, "Opel": 351
, "Nissan": 292
, "Hyundai": 258
, "Audi": 246
, "Dacia": 168
, "Peugeot": 144
, "Citroën": 129
, "Renault": 81
, "Seat": 77
, "Mazda": 75
, "Mitsubishi": 61
, "Porsche": 56
, "Suzuki": 43
, "Land Rover": 37
, "Lexus": 35
, "Cupra": 31
, "Polestar": 26
, "Fiat": 22
, "Honda": 21
, "Jeep": 21
, "Mini": 21
, "Subaru": 20
, "DS Automobiles": 9
, "Jaguar": 8
, "other": 118
});

db.insert(db.countries.FI, "2022-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Hyundai|Ioniq 5": 137
, "Kia|EV6": 82
, "Volvo|C40 Recharge": 71
, "Volkswagen|ID.4": 69
, "Škoda|Enyaq": 68
, "Nissan|Leaf": 58
, "Ford|Mustang Mach-E": 56
, "Hyundai|Kona Electric": 45
, "Audi|Q4 e-tron": 44
, "Opel|Mokka-e": 42
, "Porsche|Taycan": 35
, "Volvo|XC40 Recharge pure electric": 29
, "Audi|Q8 e-tron": 27
, "Polestar|2": 26
, "Volkswagen|ID.3": 25
, "BMW|iX": 24
, "Kia|Niro EV": 23
, "Mercedes-Benz|EQA": 20
, "BMW|iX3": 11
, "Volkswagen|e-up!": 9
, "Mazda|MX-30": 8
, "Mercedes-Benz|EQC": 8
, "Cupra|Born": 7
, "Fiat|500e": 6
, "Mercedes-Benz|EQB": 6
, "Peugeot|e-208": 6
, "Mini|Cooper SE Electric": 5
, "Opel|Zafira-e": 5
, "BMW|i4": 4
, "Peugeot|e-2008": 4
, "Citroën|Berlingo Electric": 3
, "Citroën|ë-C4": 3
, "Lexus|UX 300e": 3
, "Mercedes-Benz|EQS": 3
, "Opel|Corsa-e": 3
, "Tesla|Model Y": 2
, "Citroën|ë-Jumpy": 1
, "Hyundai|Ioniq Electric": 1
, "Kia|Soul EV": 1
, "Peugeot|e-Expert": 1
, "Renault|Zoe": 1
, "other": 10
});

db.insert(db.countries.FI, "2022-02", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2568/February_2022.xlsx",
{ "Toyota": 1132
, "Volvo": 641
, "Kia": 582
, "Škoda": 525
, "BMW": 465
, "Volkswagen": 370
, "Opel": 320
, "Ford": 315
, "Mercedes-Benz": 304
, "Nissan": 244
, "Audi": 234
, "Hyundai": 154
, "Citroën": 140
, "Peugeot": 104
, "Renault": 75
, "Dacia": 63
, "Mazda": 63
, "Polestar": 57
, "Mitsubishi": 50
, "Seat": 46
, "Suzuki": 44
, "Subaru": 39
, "Land Rover": 38
, "Tesla": 35
, "Porsche": 34
, "Lexus": 24
, "Fiat": 20
, "Mini": 20
, "Cupra": 16
, "Jeep": 16
, "Honda": 12
, "DS Automobiles": 10
, "Jaguar": 4
, "other": 107
});

db.insert(db.countries.FI, "2022-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Kia|EV6": 113
, "Polestar|2": 57
, "Audi|Q4 e-tron": 55
, "Nissan|Leaf": 50
, "Ford|Mustang Mach-E": 47
, "Kia|Niro EV": 43
, "Škoda|Enyaq": 42
, "Volvo|C40 Recharge": 38
, "Hyundai|Ioniq 5": 34
, "Tesla|Model Y": 30
, "Volvo|XC40 Recharge pure electric": 30
, "Hyundai|Kona Electric": 29
, "Mercedes-Benz|EQA": 26
, "Peugeot|e-208": 18
, "Volkswagen|ID.4": 18
, "Porsche|Taycan": 16
, "Fiat|500e": 15
, "Audi|Q8 e-tron": 14
, "Mercedes-Benz|EQS": 11
, "Opel|Mokka-e": 10
, "Volkswagen|ID.3": 9
, "Mini|Cooper SE Electric": 8
, "BMW|i4": 7
, "BMW|iX": 6
, "Opel|Corsa-e": 6
, "BMW|iX3": 5
, "Renault|Zoe": 5
, "Tesla|Model 3": 5
, "Citroën|ë-C4": 4
, "Peugeot|e-2008": 4
, "Volkswagen|e-up!": 4
, "Cupra|Born": 3
, "Mercedes-Benz|EQC": 3
, "Opel|Zafira-e": 3
, "Jaguar|I-Pace": 2
, "Mazda|MX-30": 2
, "Mercedes-Benz|EQB": 2
, "Citroën|ë-Jumpy": 1
, "Hyundai|Ioniq Electric": 1
, "Kia|Soul EV": 1
, "Lexus|UX 300e": 1
, "Peugeot|e-Expert": 1
, "other": 5
});

db.insert(db.countries.FI, "2022-03", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2582/March_2022.xlsx",
{ "Toyota": 1309
, "Volvo": 646
, "Kia": 580
, "Volkswagen": 541
, "Mercedes-Benz": 476
, "Škoda": 476
, "Tesla": 420
, "BMW": 400
, "Opel": 400
, "Ford": 383
, "Nissan": 323
, "Audi": 239
, "Hyundai": 201
, "Peugeot": 139
, "Citroën": 107
, "Mitsubishi": 103
, "Dacia": 72
, "Polestar": 72
, "Mazda": 65
, "Renault": 63
, "Suzuki": 60
, "Cupra": 54
, "Fiat": 44
, "Porsche": 43
, "Land Rover": 39
, "Lexus": 32
, "Seat": 30
, "Honda": 20
, "Subaru": 20
, "Mini": 8
, "other": 171
});

db.insert(db.countries.FI, "2022-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 257
, "Tesla|Model 3": 163
, "Nissan|Leaf": 79
, "Polestar|2": 72
, "Kia|EV6": 63
, "Audi|Q4 e-tron": 47
, "Volvo|XC40 Recharge pure electric": 46
, "Ford|Mustang Mach-E": 45
, "Hyundai|Ioniq 5": 42
, "Mercedes-Benz|EQS": 34
, "Škoda|Enyaq": 34
, "Volvo|C40 Recharge": 33
, "Opel|Mokka-e": 32
, "BMW|i4": 31
, "Kia|Niro EV": 29
, "Cupra|Born": 27
, "Audi|Q8 e-tron": 19
, "BMW|iX": 18
, "Porsche|Taycan": 18
, "Mercedes-Benz|EQA": 16
, "Peugeot|e-2008": 15
, "Hyundai|Kona Electric": 13
, "Mercedes-Benz|EQB": 13
, "Mercedes-Benz|EQC": 11
, "Peugeot|e-208": 10
, "BMW|iX3": 9
, "Fiat|500e": 8
, "Mazda|MX-30": 8
, "Opel|Corsa-e": 8
, "Volkswagen|ID.3": 7
, "Volkswagen|ID.4": 7
, "Volkswagen|e-up!": 7
, "Kia|Soul EV": 6
, "Renault|Zoe": 5
, "Citroën|ë-C4": 4
, "Opel|Zafira-e": 3
, "BMW|i3 BEV": 2
, "Citroën|ë-SpaceTourer": 2
, "Peugeot|e-Rifter": 2
, "Honda|e": 1
, "Jaguar|I-Pace": 1
, "Lexus|UX 300e": 1
, "Mercedes-Benz|EQV": 1
, "Mercedes-Benz|eVito": 1
, "Mini|Cooper SE Electric": 1
, "Opel|Combo-e": 1
, "other": 12
});

db.insert(db.countries.FI, "2022-04", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2591/April_2022.xlsx",
{ "Toyota": 1137
, "Kia": 549
, "Volvo": 505
, "Volkswagen": 499
, "Nissan": 416
, "BMW": 412
, "Škoda": 383
, "Mercedes-Benz": 373
, "Ford": 288
, "Opel": 286
, "Hyundai": 258
, "Audi": 244
, "Polestar": 127
, "Peugeot": 125
, "Renault": 99
, "Dacia": 85
, "Mitsubishi": 78
, "Citroën": 76
, "Suzuki": 55
, "Porsche": 42
, "Mazda": 40
, "Cupra": 34
, "Land Rover": 23
, "Seat": 21
, "Honda": 17
, "Lexus": 17
, "Subaru": 17
, "Mini": 15
, "Fiat": 14
, "Tesla": 12
, "other": 143
});

db.insert(db.countries.FI, "2022-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Polestar|2": 127
, "Nissan|Leaf": 74
, "Škoda|Enyaq": 57
, "Kia|EV6": 50
, "Hyundai|Kona Electric": 47
, "Hyundai|Ioniq 5": 41
, "Ford|Mustang Mach-E": 38
, "Volvo|XC40 Recharge pure electric": 38
, "Volvo|C40 Recharge": 27
, "BMW|i4": 24
, "Audi|Q8 e-tron": 22
, "BMW|iX": 22
, "Porsche|Taycan": 19
, "Audi|Q4 e-tron": 18
, "Volkswagen|ID.4": 15
, "Mercedes-Benz|EQS": 14
, "BMW|iX3": 10
, "Fiat|500e": 10
, "Kia|Niro EV": 9
, "Mercedes-Benz|EQA": 9
, "Peugeot|e-208": 9
, "Tesla|Model Y": 9
, "Renault|Megane E-Tech": 7
, "Volkswagen|e-up!": 7
, "Cupra|Born": 6
, "Opel|Mokka-e": 6
, "Volkswagen|ID.3": 6
, "Mini|Cooper SE Electric": 5
, "Toyota|Proace Electric": 5
, "Volkswagen|ID.5": 5
, "Kia|Soul EV": 4
, "Mercedes-Benz|EQE": 4
, "Renault|Zoe": 4
, "Citroën|ë-C4": 3
, "Peugeot|e-2008": 3
, "Tesla|Model 3": 3
, "Opel|Corsa-e": 2
, "Mazda|MX-30": 1
, "Mercedes-Benz|EQB": 1
, "Mercedes-Benz|EQC": 1
, "Mercedes-Benz|EQV": 1
, "Mercedes-Benz|eVito": 1
, "Peugeot|e-Expert": 1
, "other": 12
});

db.insert(db.countries.FI, "2022-05", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2594/May_2022.xlsx",
{ "Toyota": 1506
, "Kia": 742
, "Volkswagen": 731
, "Škoda": 635
, "BMW": 510
, "Volvo": 506
, "Mercedes-Benz": 472
, "Peugeot": 308
, "Ford": 304
, "Hyundai": 290
, "Audi": 270
, "Nissan": 212
, "Renault": 197
, "Opel": 160
, "Citroën": 137
, "Dacia": 133
, "Mitsubishi": 120
, "Polestar": 78
, "Mazda": 63
, "Cupra": 57
, "Suzuki": 41
, "Porsche": 36
, "Seat": 31
, "Land Rover": 27
, "Subaru": 25
, "Lexus": 23
, "Honda": 19
, "Mini": 18
, "Fiat": 14
, "Tesla": 11
, "other": 265
});

db.insert(db.countries.FI, "2022-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Škoda|Enyaq": 128
, "Volkswagen|ID.4": 117
, "Polestar|2": 78
, "BMW|i4": 47
, "Nissan|Leaf": 45
, "Hyundai|Ioniq 5": 44
, "Audi|Q4 e-tron": 43
, "Peugeot|e-2008": 42
, "Kia|EV6": 35
, "Peugeot|e-208": 35
, "BMW|iX": 28
, "Citroën|ë-C4": 27
, "Volkswagen|ID.3": 22
, "Audi|Q8 e-tron": 20
, "Kia|Niro EV": 20
, "Mercedes-Benz|EQS": 20
, "Volkswagen|ID.5": 20
, "Cupra|Born": 19
, "Volvo|XC40 Recharge pure electric": 18
, "Ford|Mustang Mach-E": 17
, "Opel|Corsa-e": 14
, "Mercedes-Benz|EQB": 13
, "Mercedes-Benz|EQE": 13
, "Volvo|C40 Recharge": 13
, "Mercedes-Benz|EQA": 11
, "Tesla|Model Y": 10
, "Hyundai|Kona Electric": 9
, "Mini|Cooper SE Electric": 9
, "Volkswagen|e-up!": 8
, "Fiat|500e": 7
, "BMW|iX3": 6
, "Renault|Zoe": 6
, "Toyota|Proace Electric": 6
, "Mercedes-Benz|EQC": 5
, "Peugeot|e-Rifter": 4
, "Porsche|Taycan": 3
, "BMW|i3 BEV": 2
, "Dacia|Spring": 2
, "Mazda|MX-30": 2
, "Citroën|ë-SpaceTourer": 1
, "Honda|e": 1
, "Hyundai|Ioniq Electric": 1
, "Jaguar|I-Pace": 1
, "Kia|Soul EV": 1
, "Mercedes-Benz|EQV": 1
, "Opel|Combo-e": 1
, "Tesla|Model 3": 1
, "other": 16
});

db.insert(db.countries.FI, "2022-06", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2613/June_2022.xlsx",
{ "Toyota": 1194
, "Volkswagen": 763
, "Kia": 686
, "Škoda": 653
, "Mercedes-Benz": 507
, "BMW": 487
, "Renault": 289
, "Audi": 260
, "Nissan": 236
, "Volvo": 236
, "Ford": 234
, "Opel": 221
, "Hyundai": 217
, "Peugeot": 165
, "Tesla": 155
, "Citroën": 151
, "Dacia": 150
, "Mitsubishi": 111
, "Land Rover": 71
, "Cupra": 67
, "Mazda": 48
, "Seat": 45
, "Suzuki": 44
, "Honda": 30
, "Polestar": 30
, "Porsche": 29
, "Fiat": 19
, "Mini": 14
, "Lexus": 11
, "Subaru": 10
, "other": 263
});

db.insert(db.countries.FI, "2022-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/6, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Renault|Zoe": 149
, "Škoda|Enyaq": 138
, "Tesla|Model Y": 110
, "Volkswagen|ID.4": 92
, "Volkswagen|ID.5": 62
, "Tesla|Model 3": 45
, "Audi|Q4 e-tron": 36
, "Cupra|Born": 31
, "Polestar|2": 28
, "Kia|EV6": 27
, "Mercedes-Benz|EQB": 27
, "Audi|Q8 e-tron": 26
, "Nissan|Leaf": 26
, "Hyundai|Kona Electric": 25
, "Volkswagen|ID.3": 25
, "BMW|i4": 24
, "Mercedes-Benz|EQA": 24
, "Peugeot|e-208": 22
, "Opel|Mokka-e": 20
, "Ford|Mustang Mach-E": 17
, "Peugeot|e-2008": 16
, "Porsche|Taycan": 16
, "BMW|iX": 13
, "Citroën|ë-C4": 13
, "Opel|Corsa-e": 13
, "Hyundai|Ioniq 5": 11
, "Kia|Niro EV": 11
, "Mercedes-Benz|EQE": 11
, "Fiat|500e": 9
, "Mercedes-Benz|EQS": 8
, "Toyota|Proace Electric": 7
, "Mini|Cooper SE Electric": 6
, "BMW|iX3": 4
, "Citroën|Berlingo Electric": 4
, "Mercedes-Benz|EQC": 4
, "BMW|i3 BEV": 3
, "Peugeot|e-Rifter": 3
, "Volvo|C40 Recharge": 3
, "Mazda|MX-30": 2
, "Peugeot|e-Traveller": 2
, "Toyota|bZ4X": 2
, "Volkswagen|e-up!": 2
, "Jaguar|I-Pace": 1
, "Mercedes-Benz|eVito": 1
, "Nissan|e-NV200": 1
, "Opel|Zafira-e": 1
, "other": 20
});

db.insert(db.countries.FI, "2022-07", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2620/July_2022.xlsx",
{ "Toyota": 920
, "Volkswagen": 689
, "Kia": 531
, "Škoda": 475
, "Mercedes-Benz": 371
, "BMW": 297
, "Ford": 276
, "Volvo": 259
, "Audi": 197
, "Peugeot": 165
, "Renault": 164
, "Hyundai": 152
, "Citroën": 115
, "Dacia": 115
, "Nissan": 114
, "Mitsubishi": 98
, "Suzuki": 66
, "Opel": 52
, "Mazda": 47
, "Cupra": 34
, "Porsche": 28
, "Tesla": 28
, "Seat": 26
, "Fiat": 20
, "Land Rover": 18
, "Honda": 17
, "Polestar": 17
, "Mini": 15
, "Subaru": 13
, "Lexus": 10
, "other": 174
});

db.insert(db.countries.FI, "2022-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/7, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Škoda|Enyaq": 108
, "Volkswagen|ID.4": 89
, "Volkswagen|ID.5": 89
, "BMW|i4": 47
, "Ford|Mustang Mach-E": 41
, "Volkswagen|ID.3": 39
, "Kia|EV6": 30
, "Audi|Q8 e-tron": 27
, "Tesla|Model Y": 27
, "Peugeot|e-2008": 25
, "Volkswagen|e-up!": 23
, "Nissan|Leaf": 21
, "Audi|Q4 e-tron": 19
, "Peugeot|e-208": 18
, "Fiat|500e": 17
, "Polestar|2": 17
, "Volvo|XC40 Recharge pure electric": 17
, "Cupra|Born": 15
, "Mercedes-Benz|EQA": 15
, "Mercedes-Benz|EQS": 14
, "Porsche|Taycan": 13
, "BMW|iX": 12
, "Citroën|ë-C4": 12
, "Renault|Megane E-Tech": 12
, "Hyundai|Kona Electric": 11
, "Mercedes-Benz|EQE": 10
, "Mini|Cooper SE Electric": 10
, "Hyundai|Ioniq 5": 9
, "Mercedes-Benz|EQB": 9
, "Toyota|Proace Electric": 9
, "Opel|Mokka-e": 8
, "Kia|Niro EV": 6
, "Volvo|C40 Recharge": 5
, "Mercedes-Benz|EQC": 4
, "BMW|iX3": 2
, "Honda|e": 1
, "Hyundai|Ioniq Electric": 1
, "Jaguar|I-Pace": 1
, "Lexus|UX 300e": 1
, "Opel|Combo-e": 1
, "Opel|Corsa-e": 1
, "Peugeot|e-Rifter": 1
, "Tesla|Model 3": 1
, "other": 24
});

db.insert(db.countries.FI, "2022-08", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2624/August_2022.xlsx",
{ "Toyota": 1021
, "Volkswagen": 762
, "Škoda": 687
, "Kia": 573
, "Volvo": 556
, "Mercedes-Benz": 493
, "Peugeot": 374
, "BMW": 371
, "Ford": 319
, "Nissan": 246
, "Audi": 222
, "Opel": 186
, "Hyundai": 168
, "Citroën": 146
, "Suzuki": 115
, "Renault": 105
, "Mitsubishi": 92
, "Dacia": 91
, "Fiat": 72
, "Mazda": 70
, "Tesla": 67
, "Cupra": 44
, "Honda": 32
, "Subaru": 31
, "Porsche": 27
, "Mini": 26
, "Polestar": 23
, "Seat": 23
, "Lexus": 12
, "Land Rover": 10
, "other": 149
});

db.insert(db.countries.FI, "2022-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Škoda|Enyaq": 149
, "Nissan|Leaf": 139
, "Volvo|XC40 Recharge pure electric": 133
, "Peugeot|e-2008": 118
, "Volkswagen|ID.5": 104
, "Volvo|C40 Recharge": 104
, "Volkswagen|ID.4": 103
, "Tesla|Model Y": 66
, "BMW|i4": 53
, "Volkswagen|ID.3": 44
, "Hyundai|Ioniq 5": 43
, "Kia|EV6": 41
, "Opel|Mokka-e": 41
, "BMW|iX": 40
, "Audi|Q4 e-tron": 38
, "Cupra|Born": 36
, "Ford|Mustang Mach-E": 36
, "Mercedes-Benz|EQS": 27
, "Audi|Q8 e-tron": 24
, "Polestar|2": 23
, "Fiat|500e": 21
, "Mercedes-Benz|EQE": 21
, "Opel|Corsa-e": 21
, "Mercedes-Benz|EQB": 20
, "Mercedes-Benz|EQA": 18
, "Peugeot|e-208": 18
, "Mini|Cooper SE Electric": 15
, "Mercedes-Benz|EQC": 13
, "Porsche|Taycan": 13
, "Jaguar|I-Pace": 6
, "Renault|Megane E-Tech": 5
, "Hyundai|Kona Electric": 4
, "BMW|iX3": 3
, "Citroën|Berlingo Electric": 3
, "Citroën|ë-C4": 3
, "Kia|Niro EV": 3
, "Renault|Zoe": 3
, "Peugeot|e-Rifter": 2
, "Volkswagen|e-up!": 2
, "BMW|i3 BEV": 1
, "Mercedes-Benz|EQV": 1
, "Opel|Combo-e": 1
, "Peugeot|e-Traveller": 1
, "Tesla|Model 3": 1
, "Toyota|Proace Electric": 1
, "other": 28
});

db.insert(db.countries.FI, "2022-09", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2631/September_2022.xlsx",
{ "Toyota": 988
, "Škoda": 729
, "Kia": 694
, "Volvo": 604
, "Volkswagen": 537
, "Mercedes-Benz": 523
, "BMW": 391
, "Ford": 249
, "Nissan": 236
, "Tesla": 218
, "Peugeot": 202
, "Audi": 184
, "Renault": 133
, "Dacia": 126
, "Citroën": 113
, "Hyundai": 111
, "Opel": 100
, "Suzuki": 81
, "Mitsubishi": 77
, "Mazda": 73
, "Polestar": 59
, "Cupra": 56
, "Seat": 38
, "Honda": 37
, "Fiat": 26
, "Lexus": 22
, "Subaru": 20
, "Mini": 19
, "Land Rover": 12
, "Porsche": 9
, "other": 131
});

db.insert(db.countries.FI, "2022-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/9, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 131
, "Volvo|XC40 Recharge pure electric": 131
, "BMW|i4": 119
, "Škoda|Enyaq": 119
, "Volvo|C40 Recharge": 94
, "Nissan|Leaf": 87
, "Tesla|Model 3": 87
, "Volkswagen|ID.4": 77
, "Polestar|2": 59
, "Mercedes-Benz|EQB": 47
, "Cupra|Born": 42
, "Volkswagen|ID.5": 42
, "Kia|Niro EV": 35
, "Audi|Q4 e-tron": 34
, "Volkswagen|ID.3": 33
, "Renault|Megane E-Tech": 31
, "BMW|iX": 28
, "Nissan|Ariya": 24
, "Hyundai|Ioniq 5": 22
, "Mercedes-Benz|EQA": 20
, "Kia|EV6": 16
, "Audi|Q8 e-tron": 15
, "Peugeot|e-208": 15
, "Ford|Mustang Mach-E": 14
, "Mercedes-Benz|EQC": 14
, "Mercedes-Benz|EQE": 14
, "Mercedes-Benz|EQS": 13
, "Fiat|500e": 12
, "Peugeot|e-2008": 10
, "Hyundai|Kona Electric": 9
, "Citroën|ë-C4": 8
, "Opel|Mokka-e": 8
, "Mini|Cooper SE Electric": 6
, "Opel|Corsa-e": 5
, "Citroën|Berlingo Electric": 4
, "Peugeot|e-Traveller": 3
, "BMW|iX3": 2
, "Citroën|ë-SpaceTourer": 2
, "Opel|Zafira-e": 2
, "Porsche|Taycan": 2
, "Toyota|Proace Electric": 2
, "Volkswagen|e-up!": 2
, "Hyundai|Ioniq Electric": 1
, "Kia|Soul EV": 1
, "Mazda|MX-30": 1
, "Peugeot|e-Rifter": 1
, "other": 19
});

db.insert(db.countries.FI, "2022-10", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2634/October_2022.xlsx",
{ "Toyota": 1128
, "Volvo": 792
, "Škoda": 649
, "Volkswagen": 581
, "Kia": 505
, "Mercedes-Benz": 394
, "BMW": 333
, "Ford": 226
, "Audi": 220
, "Nissan": 195
, "Peugeot": 138
, "Citroën": 119
, "Renault": 104
, "Hyundai": 92
, "Polestar": 90
, "Dacia": 84
, "Opel": 80
, "Suzuki": 68
, "Mazda": 53
, "Mitsubishi": 42
, "Seat": 27
, "Cupra": 26
, "Lexus": 25
, "Honda": 20
, "Mini": 15
, "Subaru": 15
, "Land Rover": 13
, "Porsche": 9
, "Fiat": 5
, "Tesla": 5
, "other": 142
});

db.insert(db.countries.FI, "2022-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "BMW|i4": 120
, "Volkswagen|ID.4": 102
, "Škoda|Enyaq": 99
, "Polestar|2": 90
, "Volvo|C40 Recharge": 87
, "Volvo|XC40 Recharge pure electric": 83
, "Nissan|Leaf": 69
, "Renault|Megane E-Tech": 57
, "Volkswagen|ID.3": 57
, "Volkswagen|ID.5": 53
, "Toyota|bZ4X": 42
, "Kia|Niro EV": 31
, "Audi|Q4 e-tron": 29
, "Mercedes-Benz|EQA": 27
, "Peugeot|e-208": 26
, "Mercedes-Benz|EQC": 20
, "Hyundai|Kona Electric": 19
, "Mercedes-Benz|EQE": 18
, "Cupra|Born": 17
, "Audi|Q8 e-tron": 15
, "BMW|iX": 15
, "Citroën|ë-C4": 15
, "Hyundai|Ioniq 5": 15
, "Mercedes-Benz|EQB": 15
, "Opel|Mokka-e": 10
, "Mercedes-Benz|EQS": 9
, "Ford|Mustang Mach-E": 8
, "Kia|EV6": 8
, "Volkswagen|e-up!": 8
, "Mini|Cooper SE Electric": 5
, "Fiat|500e": 3
, "Porsche|Taycan": 3
, "Tesla|Model 3": 3
, "Opel|Zafira-e": 2
, "Peugeot|e-2008": 2
, "Tesla|Model Y": 2
, "BMW|i7": 1
, "BMW|iX3": 1
, "Dacia|Spring": 1
, "Lexus|UX 300e": 1
, "Nissan|Ariya": 1
, "Opel|Combo-e": 1
, "Opel|Corsa-e": 1
, "Subaru|Solterra": 1
, "Toyota|Proace Electric": 1
, "other": 45
});

db.insert(db.countries.FI, "2022-11", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2640/November_2022.xlsx",
{ "Toyota": 1240
, "Volvo": 710
, "Škoda": 537
, "BMW": 485
, "Volkswagen": 480
, "Kia": 402
, "Mercedes-Benz": 397
, "Ford": 218
, "Citroën": 201
, "Audi": 198
, "Tesla": 190
, "Nissan": 177
, "Polestar": 172
, "Opel": 134
, "Renault": 117
, "Peugeot": 98
, "Mazda": 84
, "Suzuki": 78
, "Hyundai": 77
, "Dacia": 62
, "Mitsubishi": 40
, "Subaru": 31
, "Honda": 30
, "Lexus": 27
, "Seat": 25
, "Porsche": 22
, "Mini": 16
, "Land Rover": 13
, "Fiat": 10
, "Cupra": 8
, "other": 112
});

db.insert(db.countries.FI, "2022-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Polestar|2": 172
, "Tesla|Model Y": 145
, "Škoda|Enyaq": 132
, "BMW|i4": 118
, "Nissan|Leaf": 102
, "Toyota|bZ4X": 98
, "Volvo|XC40 Recharge pure electric": 95
, "Volkswagen|ID.4": 93
, "Volkswagen|ID.5": 76
, "Volvo|C40 Recharge": 73
, "Renault|Megane E-Tech": 48
, "Tesla|Model 3": 45
, "Audi|Q4 e-tron": 35
, "Volkswagen|ID.3": 34
, "BMW|iX": 31
, "Hyundai|Ioniq 5": 26
, "Mercedes-Benz|EQB": 24
, "Kia|Niro EV": 22
, "Subaru|Solterra": 18
, "Volkswagen|e-up!": 17
, "Audi|Q8 e-tron": 13
, "Kia|EV6": 13
, "Nissan|Ariya": 13
, "Porsche|Taycan": 13
, "Ford|Mustang Mach-E": 11
, "Mercedes-Benz|EQC": 10
, "Mercedes-Benz|EQA": 8
, "Peugeot|e-208": 8
, "BMW|iX3": 7
, "Citroën|ë-C4": 7
, "Mercedes-Benz|EQE": 7
, "Cupra|Born": 5
, "Hyundai|Kona Electric": 5
, "Opel|Mokka-e": 4
, "BMW|i3 BEV": 3
, "Fiat|500e": 3
, "Mini|Cooper SE Electric": 3
, "Opel|Corsa-e": 3
, "BMW|i7": 2
, "Mercedes-Benz|EQS": 2
, "Mercedes-Benz|eVito": 2
, "Toyota|Proace Electric": 2
, "Citroën|Berlingo Electric": 1
, "Lexus|UX 300e": 1
, "Mazda|MX-30": 1
, "Opel|Zafira-e": 1
, "Peugeot|e-2008": 1
, "Renault|Zoe": 1
, "other": 30
});

db.insert(db.countries.FI, "2022-12", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2653/December_2022.xlsx",
{ "Toyota": 1175
, "Volkswagen": 632
, "Tesla": 546
, "Volvo": 504
, "Škoda": 436
, "Kia": 426
, "Mercedes-Benz": 385
, "BMW": 300
, "Nissan": 246
, "Audi": 217
, "Citroën": 157
, "Polestar": 144
, "Ford": 132
, "Hyundai": 117
, "Opel": 106
, "Renault": 97
, "Dacia": 87
, "Peugeot": 87
, "Mazda": 64
, "Porsche": 50
, "Suzuki": 46
, "Honda": 25
, "Mitsubishi": 23
, "DS Automobiles": 21
, "Mini": 20
, "Lexus": 19
, "Subaru": 16
, "Cupra": 11
, "Land Rover": 9
, "Seat": 9
, "Fiat": 7
, "Jeep": 3
, "other": 69
});

db.insert(db.countries.FI, "2022-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/12, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 354
, "Nissan|Leaf": 145
, "Polestar|2": 144
, "Volkswagen|ID.5": 134
, "Volkswagen|ID.4": 99
, "Tesla|Model S": 97
, "Volvo|XC40 Recharge pure electric": 92
, "Škoda|Enyaq": 89
, "Tesla|Model X": 74
, "BMW|i4": 57
, "Kia|EV6": 49
, "Volvo|C40 Recharge": 48
, "Audi|Q4 e-tron": 40
, "Porsche|Taycan": 40
, "Volkswagen|ID.3": 40
, "Nissan|Ariya": 31
, "Renault|Megane E-Tech": 29
, "BMW|iX": 27
, "Kia|Niro EV": 26
, "Tesla|Model 3": 21
, "Hyundai|Ioniq 5": 18
, "Mercedes-Benz|EQA": 18
, "Mercedes-Benz|EQB": 18
, "Audi|Q8 e-tron": 16
, "Volkswagen|e-up!": 13
, "Mercedes-Benz|EQE": 11
, "Toyota|bZ4X": 11
, "Mercedes-Benz|EQC": 9
, "Mercedes-Benz|EQS": 8
, "Cupra|Born": 7
, "BMW|i3 BEV": 6
, "Mini|Cooper SE Electric": 6
, "BMW|iX3": 5
, "Opel|Corsa-e": 5
, "Toyota|Proace Electric": 5
, "Ford|Mustang Mach-E": 4
, "Hyundai|Kona Electric": 4
, "Opel|Combo-e": 4
, "Subaru|Solterra": 4
, "Fiat|500e": 3
, "BMW|i7": 2
, "Kia|Soul EV": 2
, "Opel|Zafira-e": 2
, "Peugeot|e-Rifter": 2
, "Peugeot|e-Traveller": 2
, "other": 22
});

db.insert(db.countries.FI, "2023-01", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2664/January_2023.xlsx",
{ "Toyota": 1564
, "Volvo": 650
, "Volkswagen": 621
, "Škoda": 607
, "Mercedes-Benz": 533
, "Kia": 500
, "BMW": 404
, "Audi": 323
, "Nissan": 282
, "Ford": 202
, "Hyundai": 201
, "Opel": 125
, "Citroën": 124
, "Peugeot": 118
, "Polestar": 118
, "Suzuki": 106
, "Mazda": 96
, "Dacia": 80
, "Renault": 74
, "Mitsubishi": 64
, "Tesla": 49
, "Lexus": 35
, "Honda": 33
, "Cupra": 30
, "Porsche": 29
, "Subaru": 28
, "Seat": 21
, "Land Rover": 19
, "DS Automobiles": 9
, "Mini": 7
, "other": 123
});

db.insert(db.countries.FI, "2023-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Škoda|Enyaq": 189
, "Volkswagen|ID.4": 174
, "Volvo|XC40 Recharge pure electric": 140
, "Polestar|2": 118
, "Nissan|Leaf": 111
, "Hyundai|Ioniq 5": 101
, "Volvo|C40 Recharge": 99
, "BMW|i4": 80
, "Mercedes-Benz|EQA": 68
, "Audi|Q4 e-tron": 62
, "Volkswagen|ID.5": 62
, "Volkswagen|ID.3": 59
, "Peugeot|e-2008": 43
, "Kia|EV6": 36
, "BMW|iX": 35
, "Mercedes-Benz|EQE": 35
, "Tesla|Model Y": 33
, "Audi|Q8 e-tron": 32
, "Mercedes-Benz|EQC": 27
, "BMW|iX1": 26
, "Opel|Corsa-e": 26
, "Toyota|bZ4X": 26
, "Mercedes-Benz|EQB": 24
, "Cupra|Born": 22
, "Mercedes-Benz|EQS": 22
, "Porsche|Taycan": 22
, "Kia|Niro EV": 21
, "Ford|Mustang Mach-E": 20
, "Renault|Megane E-Tech": 17
, "Nissan|Ariya": 14
, "BMW|iX3": 13
, "Tesla|Model 3": 11
, "Peugeot|e-208": 10
, "Subaru|Solterra": 9
, "Toyota|Proace Electric": 7
, "Volkswagen|e-up!": 7
, "Fiat|500e": 6
, "Kia|Soul EV": 4
, "Peugeot|e-Rifter": 4
, "BMW|i7": 3
, "Citroën|Berlingo Electric": 3
, "Citroën|ë-C4": 3
, "Tesla|Model S": 3
, "Hyundai|Kona Electric": 2
, "Mercedes-Benz|EQV": 2
, "Mini|Cooper SE Electric": 2
, "Opel|Combo-e": 2
, "Tesla|Model X": 2
, "other": 25
});

db.insert(db.countries.FI, "2023-02", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2679/February_2023.xlsx",
{ "Toyota": 784
, "Škoda": 617
, "Volvo": 616
, "Volkswagen": 554
, "Kia": 470
, "BMW": 386
, "Tesla": 382
, "Mercedes-Benz": 324
, "Nissan": 248
, "Ford": 246
, "Audi": 241
, "Peugeot": 146
, "Hyundai": 144
, "Opel": 142
, "Polestar": 126
, "Mazda": 105
, "Dacia": 78
, "Renault": 72
, "Citroën": 70
, "Suzuki": 47
, "Mitsubishi": 36
, "Subaru": 32
, "Cupra": 30
, "Honda": 25
, "Porsche": 25
, "Land Rover": 19
, "Lexus": 18
, "Seat": 16
, "Fiat": 8
, "DS Automobiles": 6
, "other": 101
});

db.insert(db.countries.FI, "2023-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 291
, "Škoda|Enyaq": 145
, "Volvo|XC40 Recharge pure electric": 141
, "Polestar|2": 126
, "Volkswagen|ID.4": 120
, "Volkswagen|ID.3": 98
, "Tesla|Model 3": 88
, "Volvo|C40 Recharge": 74
, "Audi|Q4 e-tron": 72
, "Nissan|Leaf": 71
, "BMW|i4": 68
, "Nissan|Ariya": 59
, "Kia|EV6": 48
, "Mercedes-Benz|EQA": 48
, "Volkswagen|ID.5": 46
, "Peugeot|e-208": 43
, "Hyundai|Ioniq 5": 31
, "Hyundai|Kona Electric": 28
, "Audi|Q8 e-tron": 21
, "Cupra|Born": 20
, "Porsche|Taycan": 18
, "BMW|iX": 17
, "Toyota|bZ4X": 17
, "Mercedes-Benz|EQE": 15
, "BMW|iX1": 13
, "Mercedes-Benz|EQB": 12
, "Mercedes-Benz|EQC": 9
, "Mercedes-Benz|EQS": 9
, "Opel|Corsa-e": 9
, "Kia|Niro EV": 8
, "Ford|Mustang Mach-E": 7
, "BMW|iX3": 6
, "Peugeot|e-2008": 6
, "BMW|i7": 5
, "Kia|Soul EV": 5
, "Opel|Mokka-e": 5
, "Renault|Megane E-Tech": 5
, "Citroën|Berlingo Electric": 4
, "Fiat|500e": 4
, "Opel|Zafira-e": 3
, "Citroën|ë-C4": 2
, "Citroën|ë-SpaceTourer": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Opel|Combo-e": 2
, "Renault|Zoe": 2
, "Tesla|Model S": 2
, "other": 25
});

db.insert(db.countries.FI, "2023-03", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2737/March_2023.xlsx",
{ "Toyota": 1150
, "Tesla": 897
, "Volkswagen": 792
, "Kia": 544
, "Volvo": 524
, "Škoda": 497
, "Mercedes-Benz": 457
, "BMW": 436
, "Audi": 323
, "Nissan": 298
, "Ford": 259
, "Opel": 243
, "Peugeot": 188
, "Hyundai": 177
, "Citroën": 169
, "Mazda": 97
, "Dacia": 69
, "Mitsubishi": 64
, "Suzuki": 54
, "Cupra": 53
, "Renault": 43
, "Land Rover": 33
, "Seat": 29
, "Subaru": 26
, "Polestar": 23
, "Porsche": 22
, "DS Automobiles": 19
, "Fiat": 19
, "Lexus": 17
, "Honda": 15
, "other": 140
});

db.insert(db.countries.FI, "2023-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 720
, "Volkswagen|ID.4": 273
, "Tesla|Model 3": 170
, "Toyota|bZ4X": 151
, "Volkswagen|ID.3": 144
, "Škoda|Enyaq": 128
, "Nissan|Leaf": 111
, "Audi|Q4 e-tron": 103
, "Opel|Mokka-e": 101
, "Kia|EV6": 86
, "BMW|i4": 82
, "Volvo|XC40 Recharge pure electric": 80
, "Volkswagen|ID.5": 65
, "Volvo|C40 Recharge": 65
, "Hyundai|Kona Electric": 58
, "Audi|Q8 e-tron": 50
, "Mercedes-Benz|EQA": 46
, "Mercedes-Benz|EQE": 41
, "Citroën|ë-C4": 39
, "BMW|iX": 31
, "Nissan|Ariya": 27
, "Mercedes-Benz|EQS": 26
, "Hyundai|Ioniq 5": 25
, "Cupra|Born": 24
, "Polestar|2": 23
, "Peugeot|e-208": 22
, "BMW|iX1": 21
, "Mercedes-Benz|EQC": 17
, "Mercedes-Benz|EQB": 15
, "Ford|Mustang Mach-E": 14
, "Kia|Niro EV": 13
, "Porsche|Taycan": 12
, "Opel|Corsa-e": 11
, "Renault|Megane E-Tech": 11
, "Hyundai|Ioniq 6": 8
, "Fiat|500e": 6
, "BMW|iX3": 5
, "Citroën|Berlingo Electric": 5
, "Jaguar|I-Pace": 4
, "Tesla|Model S": 4
, "Mini|Cooper SE Electric": 3
, "Opel|Zafira-e": 3
, "Peugeot|e-Rifter": 3
, "Tesla|Model X": 3
, "BMW|i7": 2
, "Volkswagen|e-up!": 2
, "other": 19
});

db.insert(db.countries.FI, "2023-04", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2761/April_2023.xlsx",
{ "Toyota": 1251
, "Volkswagen": 821
, "Volvo": 792
, "Mercedes-Benz": 581
, "Škoda": 551
, "Kia": 549
, "BMW": 417
, "Audi": 400
, "Ford": 275
, "Nissan": 243
, "Tesla": 226
, "Hyundai": 216
, "Opel": 87
, "Citroën": 80
, "Renault": 79
, "Peugeot": 74
, "Polestar": 74
, "Dacia": 64
, "Mazda": 63
, "Suzuki": 57
, "Mitsubishi": 51
, "Cupra": 48
, "Land Rover": 41
, "Lexus": 32
, "Seat": 32
, "Honda": 21
, "Subaru": 16
, "Fiat": 11
, "Porsche": 11
, "DS Automobiles": 1
, "other": 140
});

db.insert(db.countries.FI, "2023-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 226
, "Škoda|Enyaq": 210
, "Tesla|Model Y": 202
, "Audi|Q4 e-tron": 147
, "Volvo|XC40 Recharge pure electric": 140
, "Volkswagen|ID.3": 137
, "Volvo|C40 Recharge": 124
, "BMW|i4": 99
, "Toyota|bZ4X": 77
, "Polestar|2": 74
, "Nissan|Leaf": 71
, "Hyundai|Ioniq 5": 68
, "Audi|Q8 e-tron": 62
, "Mercedes-Benz|EQE": 60
, "Nissan|Ariya": 60
, "Volkswagen|ID.5": 59
, "Kia|EV6": 52
, "Hyundai|Kona Electric": 44
, "Renault|Megane E-Tech": 42
, "Mercedes-Benz|EQA": 38
, "BMW|iX1": 32
, "Mercedes-Benz|EQS": 28
, "Cupra|Born": 27
, "Kia|Niro EV": 24
, "Hyundai|Ioniq 6": 23
, "Mercedes-Benz|EQB": 21
, "Mercedes-Benz|EQC": 21
, "Tesla|Model 3": 21
, "BMW|iX": 18
, "Citroën|ë-C4": 15
, "Ford|Mustang Mach-E": 15
, "Opel|Mokka-e": 13
, "Peugeot|e-208": 12
, "Fiat|500e": 9
, "Porsche|Taycan": 9
, "Opel|Corsa-e": 8
, "Toyota|Proace Electric": 5
, "Subaru|Solterra": 4
, "Mini|Cooper SE Electric": 3
, "BMW|i7": 2
, "BMW|iX3": 2
, "Opel|Combo-e": 2
, "Tesla|Model X": 2
, "other": 39
});

db.insert(db.countries.FI, "2023-05", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2767/May_2023.xlsx",
{ "Toyota": 1707
, "Volkswagen": 1047
, "Škoda": 1045
, "Volvo": 852
, "Kia": 564
, "Mercedes-Benz": 549
, "Tesla": 532
, "BMW": 521
, "Audi": 441
, "Opel": 319
, "Ford": 221
, "Nissan": 214
, "Hyundai": 192
, "Peugeot": 142
, "Citroën": 130
, "Polestar": 114
, "Mazda": 99
, "Renault": 94
, "Suzuki": 76
, "Dacia": 75
, "Land Rover": 56
, "Mitsubishi": 55
, "Lexus": 46
, "Cupra": 39
, "Seat": 28
, "Porsche": 19
, "Mini": 17
, "Subaru": 14
, "Honda": 13
, "Fiat": 3
, "other": 211
});

db.insert(db.countries.FI, "2023-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 443
, "Škoda|Enyaq": 348
, "Volkswagen|ID.4": 244
, "BMW|i4": 205
, "Volvo|XC40 Recharge pure electric": 197
, "Audi|Q4 e-tron": 187
, "Volvo|C40 Recharge": 168
, "Toyota|bZ4X": 142
, "Opel|Mokka-e": 129
, "Volkswagen|ID.3": 126
, "Polestar|2": 114
, "Hyundai|Kona Electric": 87
, "Nissan|Ariya": 80
, "Citroën|ë-C4": 72
, "Mercedes-Benz|EQE": 67
, "Audi|Q8 e-tron": 49
, "Mercedes-Benz|EQA": 45
, "Tesla|Model 3": 43
, "Nissan|Leaf": 40
, "Volkswagen|ID.5": 39
, "Tesla|Model S": 38
, "Peugeot|e-208": 36
, "Opel|Corsa-e": 35
, "Renault|Megane E-Tech": 34
, "Mercedes-Benz|EQS": 33
, "BMW|iX1": 30
, "Cupra|Born": 23
, "BMW|iX": 19
, "Hyundai|Ioniq 5": 19
, "Kia|EV6": 17
, "Mercedes-Benz|EQB": 15
, "Ford|Mustang Mach-E": 13
, "Mercedes-Benz|EQC": 11
, "Porsche|Taycan": 11
, "Hyundai|Ioniq 6": 9
, "Kia|Niro EV": 9
, "Tesla|Model X": 8
, "BMW|i7": 7
, "Citroën|Berlingo Electric": 7
, "BMW|iX3": 6
, "Peugeot|e-2008": 6
, "Renault|Zoe": 5
, "Mini|Cooper SE Electric": 4
, "Toyota|Proace Electric": 4
, "BYD|Han EV": 3
, "Citroën|ë-SpaceTourer": 2
, "Fiat|500e": 2
, "Jeep|Avenger EV": 2
, "Peugeot|e-Rifter": 2
, "other": 40
});

db.insert(db.countries.FI, "2023-06", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2775/June_2023.xlsx",
{ "Toyota": 1509
, "Škoda": 923
, "Volkswagen": 902
, "Tesla": 899
, "Kia": 684
, "Volvo": 626
, "Mercedes-Benz": 585
, "BMW": 448
, "Opel": 396
, "Audi": 352
, "Citroën": 206
, "Nissan": 203
, "Ford": 196
, "Peugeot": 168
, "Hyundai": 150
, "Mazda": 81
, "Dacia": 66
, "Seat": 65
, "Polestar": 60
, "Renault": 59
, "Suzuki": 59
, "Cupra": 57
, "Fiat": 47
, "Mitsubishi": 47
, "Lexus": 41
, "Land Rover": 33
, "Subaru": 22
, "Mini": 19
, "Porsche": 16
, "Honda": 15
, "DS Automobiles": 5
, "other": 224
});

db.insert(db.countries.FI, "2023-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/6",
{ "Tesla|Model Y": 677
, "Škoda|Enyaq": 224
, "Volkswagen|ID.4": 190
, "BMW|i4": 187
, "Tesla|Model 3": 155
, "Volvo|XC40 Recharge pure electric": 133
, "Toyota|bZ4X": 128
, "Opel|Mokka-e": 125
, "Audi|Q4 e-tron": 113
, "Opel|Corsa-e": 107
, "Volvo|C40 Recharge": 88
, "Citroën|ë-C4": 79
, "Peugeot|e-2008": 67
, "Mercedes-Benz|EQE": 60
, "Polestar|2": 60
, "Volkswagen|ID.3": 58
, "Hyundai|Kona Electric": 51
, "Mercedes-Benz|EQB": 44
, "Audi|Q8 e-tron": 43
, "Tesla|Model S": 43
, "Volkswagen|ID.5": 39
, "Kia|EV6": 32
, "BMW|iX1": 28
, "Nissan|Leaf": 25
, "Mercedes-Benz|EQA": 24
, "Tesla|Model X": 24
, "Kia|Niro EV": 23
, "Mercedes-Benz|EQS": 23
, "Cupra|Born": 22
, "Hyundai|Ioniq 5": 21
, "Peugeot|e-208": 20
, "Nissan|Ariya": 16
, "Ford|Mustang Mach-E": 15
, "Fiat|500e": 12
, "Porsche|Taycan": 12
, "Hyundai|Ioniq 6": 11
, "Mercedes-Benz|EQC": 11
, "Renault|Megane E-Tech": 10
, "BMW|iX": 9
, "Subaru|Solterra": 7
, "BMW|iX3": 6
, "Toyota|Proace Electric": 6
, "BYD|Han EV": 5
, "Citroën|Berlingo Electric": 5
, "Mini|Cooper SE Electric": 5
, "Volkswagen|e-up!": 4
, "BMW|i7": 3
, "BYD|Tang EV": 3
, "Lexus|UX 300e": 2
, "other": 36
});
