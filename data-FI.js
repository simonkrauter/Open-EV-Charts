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
, "BMW": 670
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
, "Porsche": 31
, "Mini": 27
, "Fiat": 25
, "Jaguar": 22
, "Tesla": 17
, "other": 156
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
, "BMW": 332
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
, "Porsche": 17
, "Jaguar": 16
, "Fiat": 11
, "Tesla": 4
, "other": 167
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
, "BMW": 433
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
, "Land Rover": 37
, "Tesla": 36
, "Mini": 34
, "Jaguar": 17
, "Porsche": 15
, "Fiat": 14
, "other": 182
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
, "BMW": 377
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
, "Jaguar": 23
, "Land Rover": 17
, "Tesla": 8
, "Fiat": 6
, "other": 204
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
, "Fiat": 31
, "Jaguar": 25
, "Mini": 23
, "Land Rover": 22
, "Porsche": 17
, "Tesla": 12
, "other": 294
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
, "BMW": 525
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
, "Fiat": 27
, "Tesla": 23
, "Porsche": 19
, "Land Rover": 14
, "other": 324
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
, "BMW": 441
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
, "Land Rover": 16
, "Tesla": 12
, "other": 177
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
, "Land Rover": 21
, "Jaguar": 13
, "Tesla": 4
, "other": 174
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
, "Tesla": 16
, "Porsche": 12
, "Land Rover": 9
, "Fiat": 8
, "other": 110
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
, "Porsche": 10
, "Fiat": 9
, "Tesla": 4
, "other": 141
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
, "BMW": 299
, "Nissan": 293
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
, "Mini": 18
, "Tesla": 12
, "Land Rover": 10
, "Jaguar": 9
, "Fiat": 6
, "Porsche": 6
, "other": 110
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
, "BMW": 196
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
, "Jaguar": 15
, "Mini": 15
, "Land Rover": 8
, "Porsche": 3
, "Fiat": 1
, "other": 65
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
, "BMW": 391
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
, "Land Rover": 21
, "Mini": 19
, "Tesla": 16
, "Fiat": 5
, "Porsche": 5
, "other": 132
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
, "BMW": 232
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
, "Jaguar": 23
, "Mini": 23
, "Land Rover": 20
, "Jeep": 8
, "Fiat": 7
, "other": 171
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
, "BMW": 413
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
, "Mini": 19
, "Fiat": 13
, "Porsche": 12
, "other": 171
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
, "BMW": 251
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
, "Jaguar": 40
, "Mini": 18
, "Porsche": 16
, "Fiat": 6
, "other": 267
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
, "BMW": 404
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
, "Tesla": 42
, "Land Rover": 35
, "Jaguar": 24
, "Mini": 18
, "Porsche": 15
, "Fiat": 12
, "other": 338
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
, "BMW": 239
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
, "Jaguar": 21
, "Porsche": 15
, "Fiat": 3
, "other": 235
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
, "Land Rover": 23
, "Fiat": 9
, "Porsche": 9
, "other": 242
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
, "BMW": 318
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
, "Mini": 27
, "Land Rover": 25
, "Jaguar": 11
, "Porsche": 10
, "Fiat": 6
, "other": 255
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
, "BMW": 293
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
, "Subaru": 35
, "Land Rover": 25
, "Mini": 17
, "Jaguar": 11
, "Fiat": 10
, "Porsche": 2
, "other": 117
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
, "Mini": 25
, "Land Rover": 17
, "Jaguar": 15
, "Fiat": 9
, "Tesla": 7
, "other": 166
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
, "Mini": 20
, "Land Rover": 18
, "Tesla": 14
, "Jaguar": 7
, "Fiat": 2
, "other": 110
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
, "BMW": 298
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
, "Mini": 18
, "Land Rover": 16
, "Jaguar": 4
, "Fiat": 3
, "other": 71
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
, "Porsche": 38
, "Dacia": 36
, "Tesla": 27
, "Land Rover": 25
, "Mini": 23
, "Jaguar": 9
, "Fiat": 4
, "other": 199
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
, "Kia|Soul EV": 1
, "other": 1
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
, "Subaru": 27
, "Dacia": 26
, "Mini": 19
, "Land Rover": 18
, "Porsche": 11
, "Jaguar": 6
, "Tesla": 6
, "other": 211
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
, "Mini|Cooper SE": 4
, "Renault|Zoe": 4
, "Tesla|Model 3": 4
, "Kia|Soul EV": 3
, "Tesla|Model S": 2
, "BMW|i3 BEV": 1
, "Porsche|Taycan": 1
, "other": 1
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
, "Subaru": 28
, "Mini": 24
, "Porsche": 21
, "Jaguar": 9
, "Fiat": 4
, "other": 237
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
, "Mini|Cooper SE": 2
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
, "Land Rover": 23
, "Mini": 19
, "Jaguar": 5
, "other": 216
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
, "Mini|Cooper SE": 3
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
, "Mini": 22
, "Porsche": 15
, "Fiat": 11
, "Land Rover": 11
, "Jaguar": 2
, "other": 247
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
, "BMW|i3 BEV": 1
, "other": 4
});

db.insert(db.countries.FI, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2216/June_2020.xlsx",
{ "Volkswagen": 973
, "Škoda": 913
, "Toyota": 721
, "Volvo": 714
, "Kia": 681
, "Ford": 577
, "Mercedes-Benz": 408
, "BMW": 320
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
, "Land Rover": 18
, "Mini": 11
, "Fiat": 10
, "Jaguar": 2
, "other": 356
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
, "Jaguar|I-Pace": 1
, "Mini|Cooper SE": 1
, "other": 1
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
, "Fiat": 12
, "Land Rover": 11
, "Tesla": 1
, "other": 302
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
, "Mini|Cooper SE": 5
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
, "Fiat": 14
, "Jaguar": 10
, "Land Rover": 6
, "other": 247
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
, "Mini|Cooper SE": 12
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
, "Fiat": 10
, "Jaguar": 5
, "other": 188
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
, "Mazda|MX-30 BEV": 5
, "Honda|e": 4
, "Mercedes-Benz|EQC": 4
, "BMW|i3 BEV": 2
, "Jaguar|I-Pace": 2
, "Mini|Cooper SE": 2
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
, "Porsche": 23
, "Fiat": 22
, "Tesla": 21
, "Land Rover": 14
, "Jaguar": 2
, "other": 149
});

db.insert(db.countries.FI, "2020-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 50
, "Kia|Niro EV": 23
, "Škoda|Citigo-e": 19
, "Audi|Q8 e-tron": 14
, "Volkswagen|e-up!": 14
, "Mini|Cooper SE": 13
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
, "Mazda|MX-30 BEV": 1
, "other": 1
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
, "Tesla": 12
, "Porsche": 11
, "other": 138
});

db.insert(db.countries.FI, "2020-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 53
, "Volkswagen|e-up!": 40
, "Kia|Niro EV": 27
, "Hyundai|Kona Electric": 18
, "Seat|Mii Electric": 18
, "Nissan|Leaf": 16
, "Mini|Cooper SE": 14
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
, "Kia|Soul EV": 1
, "Mazda|MX-30 BEV": 1
, "Nissan|e-NV200": 1
, "Volvo|EX40": 1
, "other": 2
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
, "Fiat": 11
, "other": 107
});

db.insert(db.countries.FI, "2020-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2020/12, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 194
, "Tesla|Model 3": 169
, "Volvo|EX40": 153
, "Hyundai|Kona Electric": 107
, "Nissan|Leaf": 82
, "Renault|Zoe": 62
, "Jaguar|I-Pace": 34
, "Volkswagen|e-up!": 34
, "Tesla|Model S": 30
, "Kia|Niro EV": 26
, "Tesla|Model X": 21
, "Mazda|MX-30 BEV": 19
, "Mercedes-Benz|EQV": 16
, "Opel|Corsa-e": 14
, "Škoda|Citigo-e": 12
, "Honda|e": 11
, "Seat|Mii Electric": 11
, "Hyundai|Ioniq Electric": 10
, "Mercedes-Benz|EQC": 9
, "Porsche|Taycan": 7
, "Audi|Q8 e-tron": 6
, "Mini|Cooper SE": 6
, "Mercedes-Benz|eVito": 5
, "Peugeot|e-2008": 5
, "BMW|i3 BEV": 2
, "Ford|Mustang Mach-E": 2
, "Peugeot|e-208": 2
, "Nissan|e-NV200": 1
, "Volkswagen|e-Golf": 1
, "other": 2
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
, "Subaru": 34
, "Fiat": 28
, "Cupra": 27
, "Mini": 26
, "Honda": 21
, "Land Rover": 13
, "Porsche": 9
, "Jeep": 8
, "Tesla": 7
, "other": 181
});

db.insert(db.countries.FI, "2021-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volvo|EX40": 105
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
, "Mini|Cooper SE": 5
, "Citroën|ë-C4": 4
, "Porsche|Taycan": 4
, "Volkswagen|e-up!": 4
, "Hyundai|Ioniq Electric": 3
, "Mazda|MX-30 BEV": 3
, "Nissan|e-NV200": 3
, "Kia|Soul EV": 2
, "BMW|iX3": 1
, "Mercedes-Benz|EQV": 1
, "other": 1
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
, "Fiat": 18
, "Porsche": 18
, "Cupra": 14
, "Jeep": 9
, "other": 244
});

db.insert(db.countries.FI, "2021-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 58
, "Seat|Mii Electric": 43
, "Volkswagen|ID.3": 39
, "Volvo|EX40": 37
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
, "Mazda|MX-30 BEV": 3
, "Opel|Corsa-e": 3
, "Škoda|Citigo-e": 3
, "Citroën|ë-C4": 2
, "Ford|Mustang Mach-E": 2
, "Jaguar|I-Pace": 2
, "Mini|Cooper SE": 2
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
, "Jeep": 10
, "other": 318
});

db.insert(db.countries.FI, "2021-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model 3": 298
, "Volkswagen|ID.4": 94
, "Volkswagen|ID.3": 64
, "Seat|Mii Electric": 60
, "Nissan|Leaf": 57
, "Volvo|EX40": 36
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
, "Polestar|2": 5
, "Škoda|Citigo-e": 5
, "Citroën|ë-C4": 3
, "Mazda|MX-30 BEV": 3
, "Opel|Corsa-e": 3
, "Mercedes-Benz|EQA": 1
, "Mini|Cooper SE": 1
, "Škoda|Enyaq": 1
, "other": 12
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
, "Subaru": 18
, "Fiat": 17
, "Jeep": 10
, "Tesla": 7
, "other": 325
});

db.insert(db.countries.FI, "2021-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 154
, "Volkswagen|ID.3": 75
, "Seat|Mii Electric": 69
, "Kia|Niro EV": 38
, "Volvo|EX40": 33
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
, "Mini|Cooper SE": 6
, "Fiat|500e": 4
, "Renault|Zoe": 4
, "Citroën|ë-C4": 3
, "Hyundai|Ioniq Electric": 3
, "Jaguar|I-Pace": 3
, "Citroën|ë-Jumpy": 1
, "Mercedes-Benz|EQV": 1
, "Opel|Corsa-e": 1
, "Opel|Zafira-e": 1
, "Peugeot|e-Expert": 1
, "other": 4
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
, "Tesla": 19
, "Jeep": 10
, "other": 432
});

db.insert(db.countries.FI, "2021-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 221
, "Škoda|Enyaq": 172
, "Seat|Mii Electric": 129
, "Volkswagen|ID.3": 86
, "Hyundai|Kona Electric": 48
, "Volvo|EX40": 44
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
, "Mini|Cooper SE": 9
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
, "Mazda|MX-30 BEV": 2
, "Citroën|ë-Jumpy": 1
, "Jaguar|I-Pace": 1
, "Mercedes-Benz|eVito": 1
, "Opel|Zafira-e": 1
, "Peugeot|e-Expert": 1
, "other": 5
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
, "Honda": 31
, "Cupra": 29
, "Jeep": 21
, "Subaru": 20
, "Land Rover": 16
, "other": 436
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
, "Volvo|EX40": 22
, "Volkswagen|e-up!": 19
, "BMW|iX3": 17
, "Nissan|Leaf": 17
, "Mercedes-Benz|EQA": 16
, "Mini|Cooper SE": 11
, "Renault|Zoe": 9
, "Citroën|ë-C4": 8
, "Fiat|500e": 8
, "Mercedes-Benz|EQC": 6
, "Peugeot|e-208": 6
, "Peugeot|e-2008": 4
, "Hyundai|Ioniq Electric": 3
, "Kia|Soul EV": 3
, "BMW|i3 BEV": 2
, "Opel|Mokka-e": 2
, "Porsche|Taycan": 2
, "Jaguar|I-Pace": 1
, "Mazda|MX-30 BEV": 1
, "Mercedes-Benz|EQV": 1
, "Nissan|e-NV200": 1
, "Opel|Zafira-e": 1
, "other": 5
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
, "Honda": 17
, "Mini": 15
, "Jeep": 9
, "Tesla": 1
, "other": 363
});

db.insert(db.countries.FI, "2021-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/7, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 210
, "Škoda|Enyaq": 101
, "Ford|Mustang Mach-E": 100
, "Volkswagen|ID.3": 63
, "Volvo|EX40": 56
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
, "Mini|Cooper SE": 4
, "Citroën|ë-C4": 2
, "Jaguar|I-Pace": 2
, "Mercedes-Benz|EQC": 2
, "Mazda|MX-30 BEV": 1
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
, "Subaru": 25
, "Land Rover": 24
, "Honda": 19
, "Tesla": 17
, "Jeep": 7
, "other": 386
});

db.insert(db.countries.FI, "2021-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 162
, "Ford|Mustang Mach-E": 81
, "Volkswagen|ID.3": 77
, "Škoda|Enyaq": 64
, "Volvo|EX40": 49
, "Hyundai|Kona Electric": 42
, "Nissan|Leaf": 39
, "Kia|Niro EV": 27
, "Audi|Q4 e-tron": 22
, "Polestar|2": 22
, "Audi|Q8 e-tron": 21
, "Hyundai|Ioniq 5": 21
, "Mercedes-Benz|EQC": 19
, "Tesla|Model 3": 17
, "Mini|Cooper SE": 16
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
, "Kia|Soul EV": 2
, "Mercedes-Benz|eVito": 2
, "Peugeot|e-208": 2
, "Peugeot|e-Expert": 2
, "BMW|i3 BEV": 1
, "Fiat|500e": 1
, "Mercedes-Benz|EQS": 1
, "Mercedes-Benz|EQV": 1
, "Opel|Corsa-e": 1
, "other": 8
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
, "Fiat": 16
, "Mini": 16
, "Land Rover": 13
, "Porsche": 13
, "Cupra": 11
, "Jeep": 8
, "other": 171
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
, "Volvo|EX40": 13
, "Hyundai|Ioniq 5": 11
, "Mercedes-Benz|EQC": 7
, "Renault|Zoe": 7
, "Mini|Cooper SE": 6
, "Audi|Q8 e-tron": 5
, "Mercedes-Benz|EQA": 5
, "Seat|Mii Electric": 5
, "Mercedes-Benz|EQS": 3
, "BMW|iX3": 2
, "Citroën|ë-C4": 2
, "Fiat|500e": 2
, "Mazda|MX-30 BEV": 2
, "Peugeot|e-2008": 2
, "Polestar|2": 2
, "Volkswagen|e-up!": 2
, "BMW|iX": 1
, "Opel|Corsa-e": 1
, "Peugeot|e-Expert": 1
, "Porsche|Taycan": 1
, "other": 1
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
, "Cupra": 7
, "Jeep": 7
, "Tesla": 3
, "other": 230
});

db.insert(db.countries.FI, "2021-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.3": 148
, "Volkswagen|ID.4": 144
, "Nissan|Leaf": 104
, "Škoda|Enyaq": 104
, "Hyundai|Kona Electric": 81
, "Volvo|EX40": 60
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
, "Mazda|MX-30 BEV": 16
, "Peugeot|e-2008": 16
, "Porsche|Taycan": 15
, "Citroën|ë-C4": 14
, "Mercedes-Benz|EQS": 12
, "Opel|Corsa-e": 12
, "Mini|Cooper SE": 11
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
, "Kia|Soul EV": 1
, "Mercedes-Benz|EQV": 1
, "Nissan|e-NV200": 1
, "other": 6
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
, "other": 165
});

db.insert(db.countries.FI, "2021-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2021/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Nissan|Leaf": 91
, "Škoda|Enyaq": 80
, "Volkswagen|ID.4": 77
, "Volvo|EX40": 60
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
, "Mazda|MX-30 BEV": 12
, "Opel|Mokka-e": 10
, "Hyundai|Ioniq Electric": 9
, "Renault|Zoe": 9
, "Fiat|500e": 7
, "Mercedes-Benz|EQC": 7
, "Mini|Cooper SE": 7
, "Audi|Q8 e-tron": 6
, "Citroën|ë-C4": 6
, "Mercedes-Benz|EQS": 6
, "Opel|Zafira-e": 6
, "Mercedes-Benz|EQA": 3
, "Opel|Combo-e": 2
, "Volvo|EC40": 2
, "Citroën|ë-Jumpy": 1
, "Kia|Soul EV": 1
, "Peugeot|e-Expert": 1
, "Seat|Mii Electric": 1
, "Tesla|Model Y": 1
, "other": 9
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
, "other": 134
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
, "Mini|Cooper SE": 36
, "Seat|Mii Electric": 31
, "Volkswagen|e-up!": 30
, "Volvo|EC40": 28
, "Volvo|EX40": 28
, "Volkswagen|ID.3": 27
, "Peugeot|e-Expert": 25
, "Kia|EV6": 23
, "Opel|Mokka-e": 19
, "Porsche|Taycan": 18
, "Renault|Zoe": 17
, "Mazda|MX-30 BEV": 15
, "Peugeot|e-208": 14
, "BMW|iX": 13
, "BMW|iX3": 13
, "Peugeot|e-2008": 12
, "Opel|Corsa-e": 10
, "Mercedes-Benz|EQA": 6
, "BMW|i3 BEV": 5
, "Citroën|ë-C4": 5
, "Audi|Q8 e-tron": 4
, "Fiat|500e": 4
, "Hyundai|Ioniq Electric": 4
, "Opel|Zafira-e": 4
, "Kia|Soul EV": 2
, "Mercedes-Benz|EQB": 2
, "Mercedes-Benz|EQC": 2
, "Citroën|ë-Berlingo Electric": 1
, "Jaguar|I-Pace": 1
, "Mercedes-Benz|EQS": 1
, "Mercedes-Benz|eVito": 1
, "Peugeot|e-Rifter": 1
, "other": 8
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
, "Cupra": 31
, "Polestar": 26
, "Fiat": 22
, "Honda": 21
, "Jeep": 21
, "Mini": 21
, "Subaru": 20
, "Jaguar": 8
, "other": 162
});

db.insert(db.countries.FI, "2022-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Hyundai|Ioniq 5": 137
, "Kia|EV6": 82
, "Volvo|EC40": 71
, "Volkswagen|ID.4": 69
, "Škoda|Enyaq": 68
, "Nissan|Leaf": 58
, "Ford|Mustang Mach-E": 56
, "Hyundai|Kona Electric": 45
, "Audi|Q4 e-tron": 44
, "Opel|Mokka-e": 42
, "Porsche|Taycan": 35
, "Volvo|EX40": 29
, "Audi|Q8 e-tron": 27
, "Polestar|2": 26
, "Volkswagen|ID.3": 25
, "BMW|iX": 24
, "Kia|Niro EV": 23
, "Mercedes-Benz|EQA": 20
, "BMW|iX3": 11
, "Volkswagen|e-up!": 9
, "Mazda|MX-30 BEV": 8
, "Mercedes-Benz|EQC": 8
, "Cupra|Born": 7
, "Fiat|500e": 6
, "Mercedes-Benz|EQB": 6
, "Peugeot|e-208": 6
, "Mini|Cooper SE": 5
, "Opel|Zafira-e": 5
, "BMW|i4": 4
, "Peugeot|e-2008": 4
, "Citroën|ë-Berlingo Electric": 3
, "Citroën|ë-C4": 3
, "Mercedes-Benz|EQS": 3
, "Opel|Corsa-e": 3
, "Tesla|Model Y": 2
, "Citroën|ë-Jumpy": 1
, "Hyundai|Ioniq Electric": 1
, "Kia|Soul EV": 1
, "Peugeot|e-Expert": 1
, "Renault|Zoe": 1
, "other": 13
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
, "Fiat": 20
, "Mini": 20
, "Cupra": 16
, "Jeep": 16
, "Honda": 12
, "Jaguar": 4
, "other": 141
});

db.insert(db.countries.FI, "2022-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Kia|EV6": 113
, "Polestar|2": 57
, "Audi|Q4 e-tron": 55
, "Nissan|Leaf": 50
, "Ford|Mustang Mach-E": 47
, "Kia|Niro EV": 43
, "Škoda|Enyaq": 42
, "Volvo|EC40": 38
, "Hyundai|Ioniq 5": 34
, "Tesla|Model Y": 30
, "Volvo|EX40": 30
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
, "Mini|Cooper SE": 8
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
, "Mazda|MX-30 BEV": 2
, "Mercedes-Benz|EQB": 2
, "Citroën|ë-Jumpy": 1
, "Hyundai|Ioniq Electric": 1
, "Kia|Soul EV": 1
, "Peugeot|e-Expert": 1
, "other": 6
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
, "Seat": 30
, "Honda": 20
, "Subaru": 20
, "Mini": 8
, "other": 203
});

db.insert(db.countries.FI, "2022-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 257
, "Tesla|Model 3": 163
, "Nissan|Leaf": 79
, "Polestar|2": 72
, "Kia|EV6": 63
, "Audi|Q4 e-tron": 47
, "Volvo|EX40": 46
, "Ford|Mustang Mach-E": 45
, "Hyundai|Ioniq 5": 42
, "Mercedes-Benz|EQS": 34
, "Škoda|Enyaq": 34
, "Volvo|EC40": 33
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
, "Mazda|MX-30 BEV": 8
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
, "Mercedes-Benz|EQV": 1
, "Mercedes-Benz|eVito": 1
, "Mini|Cooper SE": 1
, "Opel|Combo-e": 1
, "other": 13
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
, "Subaru": 17
, "Mini": 15
, "Fiat": 14
, "Tesla": 12
, "other": 201
});

db.insert(db.countries.FI, "2022-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Polestar|2": 127
, "Nissan|Leaf": 74
, "Škoda|Enyaq": 57
, "Kia|EV6": 50
, "Hyundai|Kona Electric": 47
, "Hyundai|Ioniq 5": 41
, "Ford|Mustang Mach-E": 38
, "Volvo|EX40": 38
, "Volvo|EC40": 27
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
, "Mini|Cooper SE": 5
, "Toyota|Proace Electric": 5
, "Volkswagen|ID.5": 5
, "Kia|Soul EV": 4
, "Mercedes-Benz|EQE": 4
, "Renault|Zoe": 4
, "Citroën|ë-C4": 3
, "Peugeot|e-2008": 3
, "Tesla|Model 3": 3
, "Opel|Corsa-e": 2
, "Mazda|MX-30 BEV": 1
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
, "Honda": 19
, "Mini": 18
, "Fiat": 14
, "Tesla": 11
, "other": 288
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
, "Volvo|EX40": 18
, "Ford|Mustang Mach-E": 17
, "Opel|Corsa-e": 14
, "Mercedes-Benz|EQB": 13
, "Mercedes-Benz|EQE": 13
, "Volvo|EC40": 13
, "Mercedes-Benz|EQA": 11
, "Tesla|Model Y": 10
, "Hyundai|Kona Electric": 9
, "Mini|Cooper SE": 9
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
, "Mazda|MX-30 BEV": 2
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
, "Subaru": 10
, "other": 274
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
, "Mini|Cooper SE": 6
, "BMW|iX3": 4
, "Citroën|ë-Berlingo Electric": 4
, "Mercedes-Benz|EQC": 4
, "BMW|i3 BEV": 3
, "Peugeot|e-Rifter": 3
, "Volvo|EC40": 3
, "Mazda|MX-30 BEV": 2
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
, "other": 184
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
, "Volvo|EX40": 17
, "Cupra|Born": 15
, "Mercedes-Benz|EQA": 15
, "Mercedes-Benz|EQS": 14
, "Porsche|Taycan": 13
, "BMW|iX": 12
, "Citroën|ë-C4": 12
, "Renault|Megane E-Tech": 12
, "Hyundai|Kona Electric": 11
, "Mercedes-Benz|EQE": 10
, "Mini|Cooper SE": 10
, "Hyundai|Ioniq 5": 9
, "Mercedes-Benz|EQB": 9
, "Toyota|Proace Electric": 9
, "Opel|Mokka-e": 8
, "Kia|Niro EV": 6
, "Volvo|EC40": 5
, "Mercedes-Benz|EQC": 4
, "BMW|iX3": 2
, "Honda|e": 1
, "Hyundai|Ioniq Electric": 1
, "Jaguar|I-Pace": 1
, "Opel|Combo-e": 1
, "Opel|Corsa-e": 1
, "Peugeot|e-Rifter": 1
, "Tesla|Model 3": 1
, "other": 25
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
, "Land Rover": 10
, "other": 161
});

db.insert(db.countries.FI, "2022-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Škoda|Enyaq": 149
, "Nissan|Leaf": 139
, "Volvo|EX40": 133
, "Peugeot|e-2008": 118
, "Volkswagen|ID.5": 104
, "Volvo|EC40": 104
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
, "Mini|Cooper SE": 15
, "Mercedes-Benz|EQC": 13
, "Porsche|Taycan": 13
, "Jaguar|I-Pace": 6
, "Renault|Megane E-Tech": 5
, "Hyundai|Kona Electric": 4
, "BMW|iX3": 3
, "Citroën|ë-Berlingo Electric": 3
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
, "Subaru": 20
, "Mini": 19
, "Land Rover": 12
, "Porsche": 9
, "other": 153
});

db.insert(db.countries.FI, "2022-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/9, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 131
, "Volvo|EX40": 131
, "BMW|i4": 119
, "Škoda|Enyaq": 119
, "Volvo|EC40": 94
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
, "Mini|Cooper SE": 6
, "Opel|Corsa-e": 5
, "Citroën|ë-Berlingo Electric": 4
, "Peugeot|e-Traveller": 3
, "BMW|iX3": 2
, "Citroën|ë-SpaceTourer": 2
, "Opel|Zafira-e": 2
, "Porsche|Taycan": 2
, "Toyota|Proace Electric": 2
, "Volkswagen|e-up!": 2
, "Hyundai|Ioniq Electric": 1
, "Kia|Soul EV": 1
, "Mazda|MX-30 BEV": 1
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
, "Honda": 20
, "Mini": 15
, "Subaru": 15
, "Land Rover": 13
, "Porsche": 9
, "Fiat": 5
, "Tesla": 5
, "other": 167
});

db.insert(db.countries.FI, "2022-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "BMW|i4": 120
, "Volkswagen|ID.4": 102
, "Škoda|Enyaq": 99
, "Polestar|2": 90
, "Volvo|EC40": 87
, "Volvo|EX40": 83
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
, "Mini|Cooper SE": 5
, "Fiat|500e": 3
, "Porsche|Taycan": 3
, "Tesla|Model 3": 3
, "Opel|Zafira-e": 2
, "Peugeot|e-2008": 2
, "Tesla|Model Y": 2
, "BMW|i7": 1
, "BMW|iX3": 1
, "Dacia|Spring": 1
, "Nissan|Ariya": 1
, "Opel|Combo-e": 1
, "Opel|Corsa-e": 1
, "Subaru|Solterra": 1
, "Toyota|Proace Electric": 1
, "other": 46
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
, "Seat": 25
, "Porsche": 22
, "Mini": 16
, "Land Rover": 13
, "Fiat": 10
, "Cupra": 8
, "other": 139
});

db.insert(db.countries.FI, "2022-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Polestar|2": 172
, "Tesla|Model Y": 145
, "Škoda|Enyaq": 132
, "BMW|i4": 118
, "Nissan|Leaf": 102
, "Toyota|bZ4X": 98
, "Volvo|EX40": 95
, "Volkswagen|ID.4": 93
, "Volkswagen|ID.5": 76
, "Volvo|EC40": 73
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
, "Mini|Cooper SE": 3
, "Opel|Corsa-e": 3
, "BMW|i7": 2
, "Mercedes-Benz|EQS": 2
, "Mercedes-Benz|eVito": 2
, "Toyota|Proace Electric": 2
, "Citroën|ë-Berlingo Electric": 1
, "Mazda|MX-30 BEV": 1
, "Opel|Zafira-e": 1
, "Peugeot|e-2008": 1
, "Renault|Zoe": 1
, "other": 31
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
, "Mini": 20
, "Subaru": 16
, "Cupra": 11
, "Land Rover": 9
, "Seat": 9
, "Fiat": 7
, "Jeep": 3
, "other": 109
});

db.insert(db.countries.FI, "2022-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2022/12, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 354
, "Nissan|Leaf": 145
, "Polestar|2": 144
, "Volkswagen|ID.5": 134
, "Volkswagen|ID.4": 99
, "Tesla|Model S": 97
, "Volvo|EX40": 92
, "Škoda|Enyaq": 89
, "Tesla|Model X": 74
, "BMW|i4": 57
, "Kia|EV6": 49
, "Volvo|EC40": 48
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
, "Mini|Cooper SE": 6
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
, "BMW|iX1": 1
, "Citroën|ë-C4": 1
, "Citroën|ë-SpaceTourer": 1
, "Mercedes-Benz|eVito": 1
, "Opel|Mokka-e": 1
, "Peugeot|e-208": 1
, "other": 16
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
, "Honda": 33
, "Cupra": 30
, "Porsche": 29
, "Subaru": 28
, "Seat": 21
, "Land Rover": 19
, "Mini": 7
, "other": 167
});

db.insert(db.countries.FI, "2023-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Škoda|Enyaq": 189
, "Volkswagen|ID.4": 174
, "Volvo|EX40": 140
, "Polestar|2": 118
, "Nissan|Leaf": 111
, "Hyundai|Ioniq 5": 101
, "Volvo|EC40": 99
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
, "Citroën|ë-Berlingo Electric": 3
, "Citroën|ë-C4": 3
, "Tesla|Model S": 3
, "Hyundai|Kona Electric": 2
, "Mercedes-Benz|EQV": 2
, "Mini|Cooper SE": 2
, "Opel|Combo-e": 2
, "Tesla|Model X": 2
, "Citroën|ë-SpaceTourer": 1
, "Jaguar|I-Pace": 1
, "Opel|Mokka-e": 1
, "Renault|Zoe": 1
, "other": 21
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
, "Seat": 16
, "Fiat": 8
, "other": 125
});

db.insert(db.countries.FI, "2023-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 291
, "Škoda|Enyaq": 145
, "Volvo|EX40": 141
, "Polestar|2": 126
, "Volkswagen|ID.4": 120
, "Volkswagen|ID.3": 98
, "Tesla|Model 3": 88
, "Volvo|EC40": 74
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
, "Citroën|ë-Berlingo Electric": 4
, "Fiat|500e": 4
, "Opel|Zafira-e": 3
, "Citroën|ë-C4": 2
, "Citroën|ë-SpaceTourer": 2
, "Opel|Combo-e": 2
, "Renault|Zoe": 2
, "Tesla|Model S": 2
, "Mercedes-Benz|eVito": 1
, "Mini|Cooper SE": 1
, "Peugeot|e-Rifter": 1
, "Peugeot|e-Traveller": 1
, "Tesla|Model X": 1
, "Toyota|Proace Electric": 1
, "Volkswagen|e-up!": 1
, "other": 20
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
, "Fiat": 19
, "Honda": 15
, "other": 176
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
, "Volvo|EX40": 80
, "Volkswagen|ID.5": 65
, "Volvo|EC40": 65
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
, "Citroën|ë-Berlingo Electric": 5
, "Jaguar|I-Pace": 4
, "Tesla|Model S": 4
, "Mini|Cooper SE": 3
, "Opel|Zafira-e": 3
, "Peugeot|e-Rifter": 3
, "Tesla|Model X": 3
, "BMW|i7": 2
, "Volkswagen|e-up!": 2
, "Peugeot|other": 2
, "other": 17
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
, "Seat": 32
, "Honda": 21
, "Subaru": 16
, "Fiat": 11
, "Porsche": 11
, "other": 173
});

db.insert(db.countries.FI, "2023-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volkswagen|ID.4": 226
, "Škoda|Enyaq": 210
, "Tesla|Model Y": 202
, "Audi|Q4 e-tron": 147
, "Volvo|EX40": 140
, "Volkswagen|ID.3": 137
, "Volvo|EC40": 124
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
, "Mini|Cooper SE": 3
, "BMW|i7": 2
, "BMW|iX3": 2
, "Opel|Combo-e": 2
, "Tesla|Model X": 2
, "Citroën|other": 2
, "other": 37
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
, "Cupra": 39
, "Seat": 28
, "Porsche": 19
, "Mini": 17
, "Subaru": 14
, "Honda": 13
, "Fiat": 3
, "other": 257
});

db.insert(db.countries.FI, "2023-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 443
, "Škoda|Enyaq": 348
, "Volkswagen|ID.4": 244
, "BMW|i4": 205
, "Volvo|EX40": 197
, "Audi|Q4 e-tron": 187
, "Volvo|EC40": 168
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
, "Citroën|ë-Berlingo Electric": 7
, "BMW|iX3": 6
, "Peugeot|e-2008": 6
, "Renault|Zoe": 5
, "Mini|Cooper SE": 4
, "Toyota|Proace Electric": 4
, "BYD|Han EV": 3
, "BYD|Yuan Plus": 2
, "Citroën|ë-SpaceTourer": 2
, "Fiat|500e": 2
, "Jeep|Avenger EV": 2
, "Peugeot|e-Rifter": 2
, "Mercedes-Benz|other": 2
, "other": 36
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
, "Land Rover": 33
, "Subaru": 22
, "Mini": 19
, "Porsche": 16
, "Honda": 15
, "other": 270
});

db.insert(db.countries.FI, "2023-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/6, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 677
, "Škoda|Enyaq": 224
, "Volkswagen|ID.4": 190
, "BMW|i4": 187
, "Tesla|Model 3": 155
, "Volvo|EX40": 133
, "Toyota|bZ4X": 128
, "Opel|Mokka-e": 125
, "Audi|Q4 e-tron": 113
, "Opel|Corsa-e": 107
, "Volvo|EC40": 88
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
, "Citroën|ë-Berlingo Electric": 5
, "Mini|Cooper SE": 5
, "Volkswagen|e-up!": 4
, "BMW|i7": 3
, "BYD|Tang EV": 3
, "Peugeot|other": 2
, "other": 36
});

db.insert(db.countries.FI, "2023-07", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2779/July_2023.xlsx",
{ "Toyota": 1237
, "Škoda": 702
, "Kia": 581
, "Volkswagen": 555
, "Volvo": 466
, "Mercedes-Benz": 461
, "BMW": 370
, "Audi": 236
, "Ford": 200
, "Peugeot": 193
, "Hyundai": 182
, "Opel": 172
, "Nissan": 139
, "Tesla": 120
, "Citroën": 64
, "Cupra": 59
, "Polestar": 56
, "Land Rover": 53
, "Mazda": 49
, "Suzuki": 46
, "Dacia": 45
, "Mitsubishi": 40
, "Renault": 36
, "Seat": 30
, "Mini": 27
, "Fiat": 26
, "Subaru": 25
, "Honda": 10
, "Porsche": 10
, "other": 207
});

db.insert(db.countries.FI, "2023-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/7, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Škoda|Enyaq": 182
, "Peugeot|e-2008": 137
, "BMW|i4": 136
, "Volkswagen|ID.4": 131
, "Opel|Mokka-e": 124
, "Mercedes-Benz|EQE": 88
, "Audi|Q4 e-tron": 86
, "Kia|EV6": 69
, "Tesla|Model Y": 61
, "Polestar|2": 56
, "Tesla|Model 3": 51
, "Toyota|bZ4X": 50
, "Citroën|ë-C4": 40
, "Kia|Niro EV": 40
, "Audi|Q8 e-tron": 37
, "Mercedes-Benz|EQA": 34
, "Volkswagen|ID.3": 31
, "Volvo|EC40": 26
, "Fiat|500e": 24
, "Mercedes-Benz|EQB": 22
, "Volkswagen|ID.5": 21
, "Hyundai|Kona Electric": 18
, "Volvo|EX40": 18
, "Ford|Mustang Mach-E": 16
, "Mini|Cooper SE": 15
, "Cupra|Born": 14
, "Hyundai|Ioniq 5": 13
, "Nissan|Leaf": 13
, "Hyundai|Ioniq 6": 11
, "Mercedes-Benz|EQS": 11
, "Subaru|Solterra": 11
, "BMW|iX": 10
, "Nissan|Ariya": 10
, "BMW|iX1": 8
, "Porsche|Taycan": 7
, "BMW|i7": 6
, "Peugeot|e-208": 6
, "Toyota|Proace Electric": 6
, "Opel|Corsa-e": 4
, "Renault|Megane E-Tech": 4
, "Tesla|Model S": 4
, "Tesla|Model X": 4
, "BYD|Yuan Plus": 3
, "Mercedes-Benz|EQC": 3
, "Volkswagen|e-up!": 3
, "BYD|Han EV": 2
, "Mercedes-Benz|eVito": 2
, "BMW|iX3": 1
, "Citroën|ë-Berlingo Electric": 1
, "Jaguar|I-Pace": 1
, "Jeep|Avenger EV": 1
, "other": 30
});

db.insert(db.countries.FI, "2023-08", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2787/August_2023.xlsx",
{ "Toyota": 1132
, "Peugeot": 719
, "Kia": 671
, "Škoda": 670
, "Volkswagen": 625
, "Tesla": 573
, "Volvo": 500
, "BMW": 442
, "Mercedes-Benz": 429
, "Audi": 281
, "Hyundai": 274
, "Ford": 245
, "Nissan": 230
, "Citroën": 106
, "Mazda": 97
, "Polestar": 97
, "Dacia": 75
, "Land Rover": 74
, "Opel": 59
, "Suzuki": 46
, "Mitsubishi": 43
, "Renault": 40
, "Mini": 32
, "Cupra": 29
, "Seat": 29
, "Honda": 19
, "Fiat": 10
, "Subaru": 10
, "Porsche": 5
, "other": 261
});

db.insert(db.countries.FI, "2023-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Peugeot|e-2008": 654
, "Tesla|Model Y": 450
, "Škoda|Enyaq": 156
, "BMW|i4": 126
, "Tesla|Model 3": 121
, "Volkswagen|ID.4": 115
, "Audi|Q4 e-tron": 105
, "Mercedes-Benz|EQE": 100
, "Polestar|2": 97
, "Kia|EV6": 91
, "Hyundai|Ioniq 5": 60
, "Mercedes-Benz|EQA": 50
, "Kia|Niro EV": 49
, "Nissan|Leaf": 49
, "Volkswagen|ID.3": 49
, "Hyundai|Kona Electric": 42
, "Audi|Q8 e-tron": 41
, "Toyota|bZ4X": 38
, "Volkswagen|ID.5": 38
, "Volvo|EX40": 34
, "Mercedes-Benz|EQB": 31
, "Mercedes-Benz|EQS": 29
, "Volvo|EC40": 27
, "Mini|Cooper SE": 26
, "BMW|iX1": 23
, "Citroën|ë-C4": 23
, "Nissan|Ariya": 19
, "Hyundai|Ioniq 6": 18
, "Ford|Mustang Mach-E": 14
, "Renault|Megane E-Tech": 11
, "Cupra|Born": 10
, "BMW|iX": 8
, "Opel|Mokka-e": 8
, "BYD|Yuan Plus": 7
, "BYD|Han EV": 6
, "Fiat|500e": 6
, "Mercedes-Benz|EQC": 5
, "BYD|Tang EV": 4
, "Citroën|ë-Berlingo Electric": 4
, "Peugeot|e-208": 4
, "Porsche|Taycan": 4
, "Peugeot|e-Rifter": 3
, "Subaru|Solterra": 2
, "Tesla|Model S": 2
, "Volkswagen|e-up!": 2
, "other": 51
});

db.insert(db.countries.FI, "2023-09", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2799/September_2023.xlsx",
{ "Tesla": 1202
, "Toyota": 1037
, "Škoda": 692
, "Kia": 621
, "Volvo": 505
, "Mercedes-Benz": 464
, "Volkswagen": 456
, "BMW": 401
, "Nissan": 278
, "Audi": 255
, "Ford": 230
, "Hyundai": 170
, "Opel": 151
, "Peugeot": 144
, "Mazda": 80
, "Polestar": 76
, "Cupra": 69
, "Dacia": 66
, "Renault": 62
, "Suzuki": 61
, "Mitsubishi": 46
, "Land Rover": 44
, "Citroën": 32
, "Seat": 32
, "Fiat": 28
, "Subaru": 26
, "Porsche": 21
, "Honda": 20
, "Mini": 9
, "other": 203
});

db.insert(db.countries.FI, "2023-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/9, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 1134
, "Škoda|Enyaq": 181
, "Volvo|EX40": 139
, "BMW|i4": 136
, "Volvo|EC40": 111
, "Volkswagen|ID.4": 102
, "Audi|Q4 e-tron": 93
, "Kia|EV6": 88
, "Polestar|2": 76
, "Mercedes-Benz|EQA": 67
, "Mercedes-Benz|EQE": 66
, "Kia|Niro EV": 58
, "Mercedes-Benz|EQB": 56
, "Cupra|Born": 45
, "Nissan|Ariya": 45
, "Opel|Mokka-e": 44
, "Peugeot|e-2008": 44
, "Tesla|Model 3": 41
, "Hyundai|Ioniq 5": 32
, "Nissan|Leaf": 31
, "Volkswagen|ID.5": 30
, "Audi|Q8 e-tron": 28
, "Fiat|500e": 28
, "BMW|iX1": 26
, "Toyota|bZ4X": 23
, "Volkswagen|ID.3": 23
, "Tesla|Model S": 20
, "Hyundai|Kona Electric": 19
, "Mercedes-Benz|EQS": 17
, "Renault|Megane E-Tech": 16
, "Citroën|ë-C4": 15
, "Ford|Mustang Mach-E": 14
, "Hyundai|Ioniq 6": 10
, "BMW|iX": 9
, "Peugeot|e-Rifter": 9
, "BYD|Han EV": 8
, "BYD|Yuan Plus": 8
, "Peugeot|e-308": 7
, "Tesla|Model X": 7
, "BMW|iX3": 6
, "BYD|Tang EV": 6
, "Opel|Zafira-e": 4
, "Peugeot|e-208": 4
, "Porsche|Taycan": 4
, "Subaru|Solterra": 4
, "Volkswagen|e-up!": 4
, "BMW|i5": 3
, "Citroën|ë-SpaceTourer": 3
, "Mercedes-Benz|EQC": 3
, "Opel|Combo-e": 3
, "Mercedes-Benz|other": 3
, "Ford|other": 2
, "Opel|other": 2
, "other": 45
});

db.insert(db.countries.FI, "2023-10", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2805/October_2023.xlsx",
{ "Toyota": 903
, "Škoda": 695
, "Kia": 598
, "Volvo": 577
, "Volkswagen": 420
, "BMW": 394
, "Mercedes-Benz": 365
, "Peugeot": 364
, "Audi": 299
, "Hyundai": 247
, "Nissan": 195
, "Mazda": 151
, "Tesla": 149
, "Ford": 132
, "Citroën": 121
, "Opel": 96
, "Cupra": 61
, "Renault": 61
, "Mitsubishi": 56
, "Dacia": 55
, "Porsche": 53
, "Polestar": 38
, "Suzuki": 37
, "Land Rover": 33
, "Seat": 31
, "Subaru": 30
, "Mini": 25
, "Honda": 17
, "Fiat": 4
, "other": 244
});

db.insert(db.countries.FI, "2023-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Peugeot|e-2008": 267
, "Škoda|Enyaq": 258
, "Volvo|EX40": 165
, "BMW|i4": 158
, "Audi|Q4 e-tron": 157
, "Tesla|Model Y": 137
, "Hyundai|Ioniq 5": 87
, "Volvo|EC40": 82
, "Volkswagen|ID.4": 76
, "Mercedes-Benz|EQA": 70
, "Kia|EV6": 66
, "Audi|Q8 e-tron": 49
, "Mercedes-Benz|EQE": 49
, "Mercedes-Benz|EQB": 46
, "Cupra|Born": 44
, "Kia|Niro EV": 41
, "Polestar|2": 38
, "Volkswagen|ID.5": 38
, "Volkswagen|ID.3": 37
, "BMW|iX1": 36
, "Nissan|Leaf": 34
, "Nissan|Ariya": 32
, "BMW|i5": 30
, "Citroën|ë-C4": 28
, "Hyundai|Kona Electric": 25
, "Opel|Mokka-e": 23
, "Mini|Cooper SE": 16
, "Toyota|bZ4X": 15
, "BYD|Yuan Plus": 14
, "Ford|Mustang Mach-E": 14
, "Hyundai|Ioniq 6": 14
, "Renault|Megane E-Tech": 12
, "Mercedes-Benz|EQS": 11
, "Porsche|Taycan": 11
, "Subaru|Solterra": 10
, "Peugeot|e-308": 8
, "BYD|Tang EV": 6
, "BYD|Han EV": 5
, "Tesla|Model 3": 5
, "BMW|iX": 4
, "Tesla|Model S": 4
, "BMW|iX3": 3
, "Kia|Soul EV": 3
, "Peugeot|e-208": 3
, "Tesla|Model X": 3
, "Fiat|500e": 2
, "Jeep|Avenger EV": 2
, "Kia|EV9": 2
, "Opel|Corsa-e": 2
, "Toyota|Proace Electric": 2
, "Mercedes-Benz|other": 3
, "Citroën|other": 2
, "other": 53
});

db.insert(db.countries.FI, "2023-11", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2814/November_2023.xlsx",
{ "Toyota": 1147
, "Škoda": 998
, "Volvo": 620
, "Kia": 485
, "Volkswagen": 455
, "Tesla": 432
, "Mercedes-Benz": 375
, "BMW": 356
, "Hyundai": 279
, "Audi": 196
, "Nissan": 176
, "Ford": 129
, "Peugeot": 119
, "Citroën": 82
, "Mazda": 82
, "Suzuki": 78
, "Polestar": 71
, "Renault": 68
, "Opel": 67
, "Dacia": 58
, "Mitsubishi": 54
, "Seat": 40
, "Cupra": 36
, "Land Rover": 36
, "Subaru": 22
, "Mini": 21
, "Porsche": 17
, "Honda": 12
, "other": 162
});

db.insert(db.countries.FI, "2023-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 304
, "Škoda|Enyaq": 301
, "Volvo|EX40": 186
, "Volvo|EC40": 139
, "Tesla|Model 3": 118
, "BMW|i4": 113
, "Hyundai|Ioniq 5": 113
, "Audi|Q4 e-tron": 72
, "Polestar|2": 71
, "Mercedes-Benz|EQB": 62
, "Hyundai|Kona Electric": 55
, "Mercedes-Benz|EQA": 55
, "Toyota|bZ4X": 55
, "Volkswagen|ID.4": 53
, "Volkswagen|ID.3": 46
, "Kia|EV6": 44
, "Mercedes-Benz|EQE": 42
, "Kia|Niro EV": 37
, "BMW|iX1": 31
, "Volkswagen|ID.7": 30
, "Opel|Astra Electric": 24
, "Peugeot|e-2008": 24
, "Mercedes-Benz|EQS": 23
, "Nissan|Leaf": 23
, "Audi|Q8 e-tron": 22
, "BMW|i5": 22
, "Cupra|Born": 20
, "Nissan|Ariya": 16
, "Volkswagen|ID.5": 15
, "BMW|iX": 14
, "Mini|Cooper SE": 14
, "Ford|Mustang Mach-E": 13
, "Porsche|Taycan": 13
, "Hyundai|Ioniq 6": 10
, "Peugeot|e-308": 10
, "Kia|EV9": 9
, "Renault|Megane E-Tech": 8
, "BYD|Dolphin": 7
, "Jeep|Avenger EV": 6
, "BMW|iX3": 5
, "BYD|Yuan Plus": 5
, "Citroën|ë-C4": 5
, "Peugeot|e-Rifter": 5
, "Tesla|Model S": 5
, "Tesla|Model X": 5
, "Subaru|Solterra": 4
, "Opel|Zafira-e": 3
, "Honda|e:Ny1": 2
, "Mercedes-Benz|EQC": 2
, "Peugeot|e-Expert": 2
, "Toyota|Proace Electric": 2
, "other": 45
});

db.insert(db.countries.FI, "2023-12", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2825/December_2023.xlsx",
{ "Toyota": 846
, "Škoda": 821
, "Tesla": 677
, "Volvo": 559
, "BMW": 398
, "Volkswagen": 389
, "Kia": 334
, "Mercedes-Benz": 246
, "Hyundai": 213
, "Audi": 189
, "Nissan": 134
, "Ford": 108
, "Mazda": 106
, "Polestar": 94
, "Cupra": 73
, "Dacia": 66
, "Peugeot": 63
, "Citroën": 57
, "Opel": 47
, "Renault": 43
, "Land Rover": 39
, "Mitsubishi": 37
, "Suzuki": 30
, "Seat": 26
, "Mini": 23
, "Subaru": 19
, "Fiat": 17
, "Porsche": 10
, "Honda": 1
, "other": 135
});

db.insert(db.countries.FI, "2023-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2023/12, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 452
, "Tesla|Model 3": 216
, "Volvo|EX40": 172
, "Škoda|Enyaq": 151
, "BMW|i4": 134
, "Polestar|2": 94
, "Volvo|EC40": 94
, "Volkswagen|ID.4": 60
, "Hyundai|Kona Electric": 55
, "Audi|Q4 e-tron": 53
, "Hyundai|Ioniq 5": 41
, "BMW|iX1": 39
, "Mercedes-Benz|EQE": 31
, "Cupra|Born": 29
, "Audi|Q8 e-tron": 27
, "Kia|EV6": 27
, "Mercedes-Benz|EQB": 26
, "Volkswagen|ID.7": 26
, "BMW|iX": 25
, "BYD|Yuan Plus": 24
, "Volvo|EX30": 24
, "Nissan|Leaf": 21
, "Volkswagen|ID.5": 21
, "Kia|Niro EV": 20
, "Volkswagen|ID.3": 19
, "Mercedes-Benz|EQA": 18
, "Fiat|500e": 17
, "Kia|EV9": 17
, "BMW|iX3": 12
, "Toyota|bZ4X": 12
, "BMW|i5": 11
, "Mini|Cooper SE": 10
, "Nissan|Ariya": 9
, "BYD|Dolphin": 8
, "Renault|Megane E-Tech": 8
, "Ford|Mustang Mach-E": 7
, "Opel|Astra Electric": 7
, "Mercedes-Benz|EQS": 6
, "Porsche|Taycan": 6
, "Tesla|Model X": 6
, "Subaru|Solterra": 5
, "Mazda|MX-30 BEV": 4
, "Mercedes-Benz|EQC": 4
, "Peugeot|e-2008": 4
, "Jeep|Avenger EV": 3
, "Tesla|Model S": 3
, "Toyota|Proace Electric": 3
, "Citroën|ë-C4": 2
, "Hyundai|Ioniq 6": 2
, "Jaguar|I-Pace": 2
, "Kia|Soul EV": 2
, "other": 34
});

db.insert(db.countries.FI, "2024-01", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2840/January_2024.xlsx",
{ "Toyota": 1524
, "Škoda": 740
, "Volvo": 661
, "Kia": 476
, "Volkswagen": 421
, "Mercedes-Benz": 419
, "BMW": 386
, "Nissan": 346
, "Hyundai": 269
, "Audi": 267
, "Tesla": 169
, "Ford": 127
, "Citroën": 74
, "Suzuki": 68
, "Mazda": 63
, "Mitsubishi": 62
, "BYD": 43
, "Renault": 33
, "Dacia": 32
, "Polestar": 30
, "Opel": 29
, "Porsche": 28
, "Cupra": 26
, "Peugeot": 25
, "Subaru": 23
, "Land Rover": 22
, "Honda": 17
, "Mini": 16
, "Seat": 16
, "Jeep": 8
, "other": 169
});

db.insert(db.countries.FI, "2024-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/1, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volvo|EX40": 207
, "Tesla|Model Y": 123
, "Hyundai|Ioniq 5": 122
, "Audi|Q4 e-tron": 104
, "Škoda|Enyaq": 89
, "Volvo|EC40": 84
, "BMW|i4": 71
, "Volkswagen|ID.7": 60
, "Tesla|Model 3": 45
, "Kia|EV6": 44
, "Kia|EV9": 41
, "Mercedes-Benz|EQA": 41
, "Volvo|EX30": 41
, "Mercedes-Benz|EQE": 39
, "Hyundai|Kona Electric": 37
, "Mercedes-Benz|EQB": 34
, "Toyota|bZ4X": 34
, "Nissan|Ariya": 32
, "Polestar|2": 30
, "Audi|Q8 e-tron": 21
, "Nissan|Leaf": 21
, "BYD|Yuan Plus": 20
, "BMW|iX": 19
, "Kia|Niro EV": 19
, "Volkswagen|ID.4": 19
, "BMW|i5": 16
, "Cupra|Born": 15
, "BYD|Dolphin": 14
, "Volkswagen|ID.3": 13
, "BMW|iX1": 12
, "Hyundai|Ioniq 6": 11
, "Porsche|Taycan": 9
, "Jeep|Avenger EV": 8
, "Mini|Cooper SE": 7
, "Subaru|Solterra": 7
, "Volkswagen|ID.5": 7
, "Ford|Mustang Mach-E": 6
, "Mercedes-Benz|EQS": 6
, "BYD|Seal": 4
, "BMW|iX3": 3
, "BYD|Tang EV": 3
, "Citroën|ë-C4": 3
, "Renault|Megane E-Tech": 3
, "BYD|Han EV": 2
, "Fiat|500e": 2
, "Peugeot|e-308": 2
, "BMW|i7": 1
, "Honda|e:Ny1": 1
, "Kia|Soul EV": 1
, "Mercedes-Benz|eVito": 1
, "Opel|Zafira-e": 1
, "Peugeot|e-208": 1
, "Peugeot|e-Rifter": 1
, "Tesla|Model S": 1
, "Toyota|Proace Electric": 1
, "other": 28
});

db.insert(db.countries.FI, "2024-02", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2846/February_2024.xlsx",
{ "Toyota": 997
, "Škoda": 615
, "Volvo": 563
, "Kia": 445
, "Volkswagen": 346
, "BMW": 326
, "Mercedes-Benz": 310
, "Tesla": 238
, "Nissan": 215
, "Hyundai": 195
, "Audi": 194
, "Ford": 157
, "Peugeot": 84
, "Dacia": 61
, "BYD": 58
, "Mitsubishi": 55
, "Suzuki": 52
, "Mazda": 42
, "Opel": 33
, "Renault": 31
, "Honda": 29
, "Citroën": 26
, "Land Rover": 24
, "Porsche": 24
, "Cupra": 23
, "Subaru": 22
, "Mini": 19
, "Fiat": 12
, "Polestar": 11
, "Seat": 7
, "other": 159
});

db.insert(db.countries.FI, "2024-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/2, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 192
, "Volvo|EX40": 104
, "BMW|i4": 99
, "Škoda|Enyaq": 92
, "Audi|Q4 e-tron": 79
, "Volvo|EX30": 61
, "Volvo|EC40": 54
, "Hyundai|Ioniq 5": 48
, "Tesla|Model 3": 45
, "Volkswagen|ID.4": 43
, "Volkswagen|ID.7": 42
, "BYD|Yuan Plus": 40
, "Mercedes-Benz|EQE": 33
, "Hyundai|Kona Electric": 32
, "Mercedes-Benz|EQA": 32
, "Peugeot|e-208": 32
, "Kia|EV6": 26
, "Mercedes-Benz|EQB": 25
, "Kia|EV9": 24
, "BMW|iX": 18
, "Kia|Niro EV": 18
, "Audi|Q8 e-tron": 14
, "BMW|iX1": 12
, "BYD|Dolphin": 11
, "Cupra|Born": 11
, "Nissan|Ariya": 11
, "Polestar|2": 11
, "Volkswagen|ID.3": 11
, "BMW|iX2": 10
, "Hyundai|Ioniq 6": 9
, "BMW|i5": 8
, "Mercedes-Benz|EQS": 8
, "Renault|Megane E-Tech": 8
, "BYD|Seal": 7
, "Nissan|Leaf": 7
, "Ford|Mustang Mach-E": 5
, "Porsche|Taycan": 5
, "Toyota|bZ4X": 5
, "Volkswagen|ID.5": 5
, "Jeep|Avenger EV": 3
, "BMW|iX3": 2
, "Kia|Soul EV": 2
, "Mini|Cooper SE": 2
, "Peugeot|e-308": 2
, "Citroën|ë-C4": 1
, "Fiat|600e": 1
, "Opel|Zafira-e": 1
, "Peugeot|e-2008": 1
, "Peugeot|e-Rifter": 1
, "Subaru|Solterra": 1
, "Tesla|Model X": 1
, "other": 15
});

db.insert(db.countries.FI, "2024-03", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2851/March_2024.xlsx",
{ "Toyota": 1199
, "Volvo": 705
, "Škoda": 536
, "Kia": 511
, "Tesla": 487
, "Volkswagen": 476
, "Mercedes-Benz": 387
, "BMW": 337
, "Hyundai": 335
, "Nissan": 329
, "Ford": 178
, "Audi": 172
, "Opel": 92
, "Suzuki": 82
, "Mitsubishi": 56
, "Subaru": 54
, "BYD": 53
, "Mazda": 48
, "Peugeot": 45
, "Dacia": 43
, "Renault": 43
, "Land Rover": 30
, "Polestar": 29
, "Cupra": 22
, "Porsche": 21
, "Honda": 17
, "Seat": 15
, "Citroën": 12
, "Fiat": 9
, "Mini": 8
, "other": 155
});

db.insert(db.countries.FI, "2024-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/3, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 340
, "Tesla|Model 3": 140
, "Volkswagen|ID.4": 134
, "Volvo|EX40": 123
, "Škoda|Enyaq": 116
, "Volvo|EX30": 109
, "Hyundai|Ioniq 5": 80
, "Audi|Q4 e-tron": 70
, "BMW|i4": 69
, "Volvo|EC40": 55
, "Volkswagen|ID.7": 50
, "Hyundai|Kona Electric": 40
, "Mercedes-Benz|EQE": 38
, "Mercedes-Benz|EQA": 36
, "Kia|EV9": 32
, "Kia|EV6": 31
, "Nissan|Ariya": 31
, "Polestar|2": 29
, "BYD|Seal": 25
, "BMW|iX1": 24
, "Mercedes-Benz|EQB": 24
, "Volkswagen|ID.3": 24
, "BMW|iX": 17
, "BYD|Yuan Plus": 17
, "Audi|Q8 e-tron": 15
, "Ford|Mustang Mach-E": 15
, "BMW|i5": 11
, "Kia|Niro EV": 11
, "Mercedes-Benz|EQS": 11
, "Volkswagen|ID.5": 11
, "Nissan|Leaf": 10
, "BMW|iX2": 9
, "Cupra|Born": 9
, "Renault|Megane E-Tech": 8
, "BYD|Dolphin": 7
, "Hyundai|Ioniq 6": 7
, "Toyota|bZ4X": 7
, "Fiat|600e": 4
, "Tesla|Model S": 4
, "Toyota|Proace Electric": 4
, "Kia|Soul EV": 3
, "Mercedes-Benz|eVito": 3
, "Peugeot|e-208": 3
, "Subaru|Solterra": 3
, "Tesla|Model X": 3
, "BYD|Han EV": 2
, "BYD|Tang EV": 2
, "Mini|Cooper SE": 2
, "Peugeot|E-3008": 2
, "Peugeot|e-2008": 2
, "Peugeot|e-308": 2
, "Peugeot|e-Expert": 2
, "Porsche|Taycan": 2
, "BMW|other": 1
, "Ford|other": 1
, "Jaguar|other": 1
, "Jeep|other": 1
, "Opel|other": 1
, "Renault|other": 1
, "other": 16
});

db.insert(db.countries.FI, "2024-04", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2856/April_2024.xlsx",
{ "Toyota": 1186
, "Volvo": 812
, "Volkswagen": 543
, "Škoda": 466
, "Kia": 411
, "BMW": 375
, "Nissan": 324
, "Hyundai": 310
, "Mercedes-Benz": 286
, "Audi": 258
, "Ford": 148
, "Tesla": 128
, "Mitsubishi": 88
, "Mazda": 77
, "Suzuki": 68
, "Dacia": 58
, "Polestar": 49
, "Citroën": 43
, "Renault": 38
, "Porsche": 36
, "Cupra": 32
, "Opel": 31
, "BYD": 29
, "Peugeot": 27
, "Land Rover": 25
, "Honda": 24
, "Subaru": 15
, "Mini": 9
, "Seat": 7
, "other": 253
});

db.insert(db.countries.FI, "2024-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/4, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volvo|EX30": 262
, "Volkswagen|ID.4": 166
, "Volvo|EX40": 130
, "Audi|Q4 e-tron": 97
, "Tesla|Model Y": 94
, "Škoda|Enyaq": 87
, "Volvo|EC40": 62
, "BMW|i4": 57
, "Polestar|2": 49
, "Toyota|bZ4X": 48
, "Volkswagen|ID.7": 44
, "BMW|iX1": 36
, "Hyundai|Ioniq 5": 35
, "Mercedes-Benz|EQB": 32
, "Mercedes-Benz|EQA": 31
, "Tesla|Model 3": 31
, "BMW|i5": 30
, "Ford|Mustang Mach-E": 30
, "Hyundai|Kona Electric": 30
, "Kia|EV6": 29
, "Mercedes-Benz|EQE": 25
, "Audi|Q8 e-tron": 24
, "Volkswagen|ID.3": 22
, "Hyundai|Ioniq 6": 20
, "Cupra|Born": 17
, "Nissan|Leaf": 17
, "Nissan|Ariya": 16
, "Kia|Niro EV": 15
, "Kia|EV9": 14
, "BYD|Yuan Plus": 11
, "Smart|Hashtag 3": 10
, "Volkswagen|ID.5": 10
, "BMW|iX": 9
, "BYD|Seal": 9
, "BYD|Dolphin": 8
, "Smart|Hashtag 1": 7
, "Porsche|Taycan": 5
, "Mercedes-Benz|EQS": 4
, "BMW|i7": 3
, "BMW|iX2": 3
, "Mini|Cooper SE": 3
, "BMW|iX3": 2
, "Peugeot|e-2008": 2
, "Tesla|Model X": 2
, "Toyota|Proace Electric": 2
, "BYD|Tang EV": 1
, "Citroën|ë-SpaceTourer": 1
, "Honda|e:Ny1": 1
, "Jaguar|I-Pace": 1
, "Mercedes-Benz|EQC": 1
, "Mercedes-Benz|eVito": 1
, "Peugeot|e-308": 1
, "Tesla|Model S": 1
, "other": 29
});

db.insert(db.countries.FI, "2024-05", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2866/May_2024.xlsx",
{ "Toyota": 1508
, "Volvo": 1066
, "Volkswagen": 740
, "Kia": 554
, "Škoda": 501
, "Mercedes-Benz": 472
, "BMW": 325
, "Tesla": 304
, "Hyundai": 289
, "Nissan": 281
, "Audi": 268
, "Ford": 164
, "Peugeot": 120
, "Mazda": 92
, "Renault": 88
, "Suzuki": 84
, "Citroën": 77
, "Opel": 69
, "BYD": 67
, "Seat": 63
, "Dacia": 59
, "Subaru": 53
, "Mitsubishi": 47
, "Cupra": 37
, "Land Rover": 35
, "Polestar": 30
, "Honda": 17
, "Porsche": 17
, "Mini": 10
, "other": 343
});

db.insert(db.countries.FI, "2024-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/5, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volvo|EX30": 528
, "Volkswagen|ID.4": 193
, "Tesla|Model Y": 180
, "Škoda|Enyaq": 124
, "Tesla|Model 3": 122
, "Audi|Q4 e-tron": 109
, "Volvo|EX40": 106
, "Mercedes-Benz|EQA": 63
, "Volkswagen|ID.7": 52
, "Volvo|EC40": 52
, "Mercedes-Benz|EQE": 47
, "BMW|iX1": 44
, "BYD|Seal": 43
, "Mercedes-Benz|EQB": 43
, "BMW|i4": 39
, "Hyundai|Ioniq 5": 30
, "Polestar|2": 30
, "Ford|Mustang Mach-E": 26
, "BMW|i5": 21
, "Kia|EV6": 21
, "Cupra|Born": 20
, "Nissan|Ariya": 20
, "Hyundai|Kona Electric": 19
, "Toyota|bZ4X": 19
, "BYD|Yuan Plus": 18
, "Volkswagen|ID.3": 18
, "Peugeot|E-3008": 17
, "Kia|Niro EV": 13
, "Smart|Hashtag 3": 13
, "Subaru|Solterra": 13
, "Audi|Q8 e-tron": 12
, "BMW|iX": 11
, "Nissan|Leaf": 11
, "Kia|EV9": 8
, "BMW|iX2": 7
, "Hyundai|Ioniq 6": 7
, "Volkswagen|ID.5": 7
, "Smart|Hashtag 1": 6
, "Jeep|Avenger EV": 5
, "Mercedes-Benz|EQS": 5
, "Renault|Megane E-Tech": 5
, "BYD|Dolphin": 4
, "Jaguar|I-Pace": 4
, "Mini|Cooper SE": 4
, "Fiat|600e": 3
, "Porsche|Taycan": 3
, "Renault|Scénic E-Tech": 3
, "BYD|Tang EV": 2
, "Citroën|ë-C4": 2
, "Kia|Soul EV": 2
, "MG|MG4 EV": 2
, "Opel|Mokka-e": 2
, "Tesla|Model X": 2
, "Toyota|Proace Electric": 2
, "Mercedes-Benz|other": 2
, "other": 59
});

db.insert(db.countries.FI, "2024-06", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2875/June_2024.xlsx",
{ "Toyota": 1074
, "Škoda": 642
, "Volvo": 641
, "Volkswagen": 628
, "Kia": 555
, "Tesla": 479
, "Mercedes-Benz": 365
, "Nissan": 317
, "BMW": 281
, "Ford": 253
, "Hyundai": 237
, "Audi": 168
, "Polestar": 101
, "Mitsubishi": 96
, "Mazda": 91
, "Suzuki": 88
, "Renault": 78
, "Peugeot": 75
, "Seat": 50
, "BYD": 40
, "Citroën": 40
, "Opel": 40
, "Cupra": 36
, "Dacia": 33
, "Subaru": 33
, "Land Rover": 28
, "Porsche": 16
, "Honda": 14
, "Mini": 7
, "other": 258
});

db.insert(db.countries.FI, "2024-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/6, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volvo|EX30": 271
, "Tesla|Model Y": 249
, "Tesla|Model 3": 227
, "Volkswagen|ID.4": 133
, "Škoda|Enyaq": 101
, "Audi|Q4 e-tron": 72
, "Volvo|EX40": 68
, "Volkswagen|ID.7": 66
, "BMW|i4": 44
, "Mercedes-Benz|EQE": 39
, "Hyundai|Kona Electric": 37
, "Mercedes-Benz|EQB": 32
, "Hyundai|Ioniq 5": 31
, "Mercedes-Benz|EQA": 29
, "Kia|EV9": 28
, "BMW|i5": 24
, "BYD|Seal": 23
, "Kia|Niro EV": 21
, "Nissan|Leaf": 21
, "Volvo|EC40": 21
, "Cupra|Born": 18
, "Kia|EV6": 18
, "Nissan|Ariya": 16
, "Renault|Scénic E-Tech": 16
, "BMW|iX1": 14
, "Toyota|bZ4X": 14
, "Ford|Mustang Mach-E": 13
, "Volkswagen|ID.3": 12
, "BYD|Yuan Plus": 11
, "Hyundai|Ioniq 6": 11
, "Mercedes-Benz|EQS": 10
, "Peugeot|E-3008": 10
, "Audi|Q8 e-tron": 9
, "BMW|iX2": 9
, "BMW|iX": 6
, "Mini|Cooper SE": 6
, "Porsche|Taycan": 6
, "Peugeot|e-2008": 5
, "BYD|Dolphin": 4
, "Renault|Megane E-Tech": 4
, "Subaru|Solterra": 3
, "Tesla|Model S": 3
, "Ford|E-Transit": 2
, "Mercedes-Benz|eVito": 2
, "Opel|Astra Electric": 2
, "Peugeot|e-308": 2
, "BYD|Han EV": 1
, "BYD|Tang EV": 1
, "Kia|Soul EV": 1
, "Peugeot|e-208": 1
, "Peugeot|e-Rifter": 1
, "Volkswagen|ID.5": 1
, "other": 133
});

db.insert(db.countries.FI, "2024-07", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2879/July_2024.xlsx",
{ "Toyota": 984
, "Volvo": 523
, "Škoda": 428
, "Volkswagen": 425
, "Kia": 387
, "Nissan": 279
, "Mercedes-Benz": 262
, "Hyundai": 233
, "BMW": 215
, "Ford": 171
, "Audi": 162
, "Opel": 111
, "Peugeot": 109
, "Suzuki": 83
, "Polestar": 68
, "Mazda": 62
, "Renault": 60
, "Tesla": 59
, "BYD": 55
, "Mitsubishi": 41
, "Subaru": 41
, "Citroën": 33
, "Cupra": 33
, "Seat": 25
, "Dacia": 20
, "Porsche": 19
, "Honda": 18
, "Land Rover": 15
, "Mini": 8
, "other": 266
});

db.insert(db.countries.FI, "2024-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/7, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volvo|EX30": 161
, "Volkswagen|ID.4": 101
, "Škoda|Enyaq": 83
, "Volvo|EX40": 81
, "Polestar|2": 60
, "Audi|Q4 e-tron": 56
, "Tesla|Model Y": 48
, "Volvo|EC40": 43
, "Nissan|Leaf": 38
, "Mercedes-Benz|EQE": 37
, "Hyundai|Ioniq 5": 36
, "Kia|EV6": 34
, "BYD|Seal": 33
, "Volkswagen|ID.7": 27
, "BMW|i5": 26
, "Audi|Q6 e-tron": 25
, "Mercedes-Benz|EQA": 25
, "BMW|i4": 24
, "Hyundai|Kona Electric": 24
, "Nissan|Ariya": 24
, "Toyota|bZ4X": 24
, "Renault|Scénic E-Tech": 23
, "Mercedes-Benz|EQB": 21
, "Kia|Niro EV": 19
, "Subaru|Solterra": 19
, "Peugeot|E-3008": 17
, "BYD|Yuan Plus": 16
, "Kia|EV9": 16
, "Volkswagen|ID.3": 16
, "Cupra|Born": 15
, "BMW|iX1": 13
, "Hyundai|Ioniq 6": 13
, "Ford|Mustang Mach-E": 12
, "BMW|iX2": 11
, "BMW|iX": 9
, "Audi|Q8 e-tron": 8
, "Mini|Cooper SE": 7
, "Porsche|Taycan": 7
, "Mercedes-Benz|EQS": 6
, "Tesla|Model 3": 6
, "BYD|Han EV": 4
, "Tesla|Model X": 3
, "Citroën|ë-Berlingo Electric": 2
, "Opel|Mokka-e": 2
, "Opel|Zafira-e": 2
, "Renault|Megane E-Tech": 2
, "Tesla|Model S": 2
, "BMW|i7": 1
, "BMW|iX3": 1
, "BYD|Dolphin": 1
, "BYD|Tang EV": 1
, "Fiat|500e": 1
, "Mercedes-Benz|EQV": 1
, "Peugeot|e-2008": 1
, "Peugeot|e-308": 1
, "other": 51
});

db.insert(db.countries.FI, "2024-08", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2896/August_2024.xlsx",
{ "Toyota": 1031
, "Volvo": 614
, "Volkswagen": 561
, "Kia": 512
, "Škoda": 508
, "Hyundai": 327
, "Mercedes-Benz": 316
, "Tesla": 312
, "BMW": 245
, "Ford": 241
, "Nissan": 233
, "Audi": 229
, "Peugeot": 216
, "Opel": 193
, "Mazda": 93
, "Renault": 92
, "Subaru": 88
, "Suzuki": 63
, "Polestar": 59
, "Dacia": 57
, "BYD": 48
, "Citroën": 48
, "Mitsubishi": 46
, "Cupra": 36
, "Porsche": 29
, "Land Rover": 23
, "Honda": 22
, "Mini": 18
, "Seat": 9
, "other": 279
});

db.insert(db.countries.FI, "2024-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/8, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Volvo|EX30": 224
, "Tesla|Model Y": 195
, "Volkswagen|ID.4": 120
, "Tesla|Model 3": 115
, "Škoda|Enyaq": 86
, "Volkswagen|ID.7": 71
, "Volvo|EX40": 70
, "Audi|Q4 e-tron": 63
, "Subaru|Solterra": 61
, "Hyundai|Kona Electric": 56
, "Kia|EV6": 55
, "BMW|i4": 42
, "Mercedes-Benz|EQE": 41
, "Volvo|EC40": 38
, "BYD|Seal": 32
, "Hyundai|Ioniq 5": 32
, "Mercedes-Benz|EQB": 28
, "Nissan|Leaf": 28
, "Volkswagen|ID.3": 28
, "Nissan|Ariya": 24
, "Renault|Scénic E-Tech": 24
, "Audi|Q6 e-tron": 23
, "Kia|Niro EV": 23
, "Mercedes-Benz|EQA": 23
, "Toyota|bZ4X": 23
, "Hyundai|Ioniq 6": 19
, "BMW|iX1": 17
, "Ford|Mustang Mach-E": 17
, "Mini|Cooper SE": 17
, "Peugeot|E-3008": 17
, "BMW|i5": 16
, "Kia|EV9": 15
, "BYD|Yuan Plus": 13
, "Audi|Q8 e-tron": 12
, "BMW|iX2": 12
, "Cupra|Born": 12
, "Porsche|Taycan": 11
, "Ford|Explorer EV": 10
, "Cupra|Tavascan": 9
, "Mercedes-Benz|EQS": 6
, "Renault|Megane E-Tech": 6
, "BMW|iX": 4
, "Porsche|Macan Electric": 4
, "BMW|iX3": 2
, "Mercedes-Benz|eVito": 2
, "Opel|Astra Electric": 2
, "Volkswagen|ID.5": 2
, "BMW|i7": 1
, "BYD|Dolphin": 1
, "BYD|Tang EV": 1
, "Citroën|ë-C4": 1
, "Kia|Soul EV": 1
, "Opel|Combo-e": 1
, "Opel|Zafira-e": 1
, "Peugeot|E-5008": 1
, "Peugeot|e-208": 1
, "Tesla|Model S": 1
, "Tesla|Model X": 1
, "other": 132
});

db.insert(db.countries.FI, "2024-09", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2903/September_2024.xlsx",
{ "Toyota": 487
, "Škoda": 484
, "Tesla": 456
, "Volkswagen": 421
, "Volvo": 412
, "Kia": 311
, "Hyundai": 213
, "BMW": 212
, "Mercedes-Benz": 209
, "Ford": 189
, "Audi": 186
, "Nissan": 161
, "Peugeot": 111
, "Polestar": 100
, "Opel": 81
, "Renault": 69
, "Mazda": 55
, "BYD": 44
, "Porsche": 38
, "Dacia": 37
, "Mitsubishi": 37
, "Suzuki": 31
, "Citroën": 30
, "Subaru": 30
, "Cupra": 25
, "Honda": 19
, "Land Rover": 18
, "Mini": 9
, "Seat": 3
, "other": 123
});

db.insert(db.countries.FI, "2024-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/9, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 272
, "Škoda|Enyaq": 238
, "Tesla|Model 3": 172
, "Volvo|EX30": 119
, "Volkswagen|ID.4": 116
, "Audi|Q4 e-tron": 62
, "Volvo|EX40": 54
, "Volkswagen|ID.7": 52
, "Ford|Explorer EV": 50
, "Audi|Q6 e-tron": 42
, "Toyota|bZ4X": 37
, "Nissan|Leaf": 31
, "Porsche|Macan Electric": 31
, "Hyundai|Ioniq 5": 26
, "Volvo|EC40": 26
, "BMW|i4": 25
, "Mercedes-Benz|EQB": 22
, "Hyundai|Ioniq 6": 21
, "Volkswagen|ID.3": 20
, "BYD|Seal": 19
, "BMW|i5": 18
, "Hyundai|Kona Electric": 18
, "Mercedes-Benz|EQE": 18
, "Subaru|Solterra": 17
, "Kia|EV6": 15
, "BMW|iX1": 14
, "Kia|Niro EV": 14
, "Nissan|Ariya": 14
, "Mercedes-Benz|EQA": 13
, "Renault|Scénic E-Tech": 13
, "Cupra|Born": 11
, "BMW|iX2": 8
, "Tesla|Model S": 8
, "BMW|iX": 7
, "BYD|Tang EV": 7
, "Ford|Mustang Mach-E": 7
, "BYD|Yuan Plus": 6
, "Jeep|Avenger EV": 6
, "Kia|EV9": 6
, "Mini|Cooper SE": 6
, "Peugeot|E-3008": 6
, "Tesla|Model X": 4
, "Audi|Q8 e-tron": 3
, "BYD|Dolphin": 3
, "Cupra|Tavascan": 3
, "Peugeot|E-5008": 3
, "Peugeot|e-208": 3
, "Kia|Soul EV": 2
, "Mazda|MX-30 BEV": 2
, "Opel|Mokka-e": 2
, "Peugeot|e-308": 2
, "Peugeot|e-Traveller": 2
, "Mercedes-Benz|other": 3
, "BYD|other": 1
, "Citroën|other": 1
, "Peugeot|other": 1
, "Porsche|other": 1
, "Volkswagen|other": 1
, "other": 137
});

db.insert(db.countries.FI, "2024-10", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2907/October_2024.xlsx",
{ "Toyota": 892
, "Škoda": 750
, "Volvo": 611
, "Volkswagen": 580
, "Kia": 455
, "BMW": 273
, "Audi": 246
, "Mercedes-Benz": 242
, "Hyundai": 214
, "Nissan": 208
, "Ford": 197
, "Peugeot": 159
, "Tesla": 145
, "Polestar": 116
, "Mazda": 86
, "Porsche": 83
, "Opel": 76
, "Renault": 75
, "BYD": 47
, "Suzuki": 45
, "Citroën": 40
, "Mitsubishi": 38
, "Cupra": 34
, "Subaru": 27
, "Land Rover": 23
, "Dacia": 19
, "Mini": 11
, "Honda": 9
, "Seat": 7
, "other": 228
});

db.insert(db.countries.FI, "2024-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/10, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Škoda|Enyaq": 265
, "Volkswagen|ID.4": 123
, "Volkswagen|ID.7": 105
, "Tesla|Model Y": 102
, "Audi|Q6 e-tron": 99
, "Volvo|EX30": 91
, "Volvo|EX40": 91
, "Porsche|Macan Electric": 68
, "Volvo|EC40": 50
, "Ford|Explorer EV": 44
, "Hyundai|Ioniq 5": 44
, "Audi|Q4 e-tron": 42
, "Mercedes-Benz|EQA": 42
, "Tesla|Model 3": 37
, "BYD|Seal": 36
, "Toyota|bZ4X": 35
, "BMW|i4": 32
, "Mercedes-Benz|EQB": 32
, "Nissan|Ariya": 31
, "Peugeot|e-2008": 29
, "Hyundai|Kona Electric": 26
, "Citroën|ë-C4": 22
, "BMW|i5": 20
, "BMW|iX1": 20
, "BMW|iX2": 20
, "Kia|EV6": 19
, "Renault|Scénic E-Tech": 19
, "Kia|Niro EV": 16
, "Mercedes-Benz|EQE": 14
, "Kia|EV9": 12
, "Ford|Mustang Mach-E": 11
, "Nissan|Leaf": 11
, "Volkswagen|ID.3": 11
, "BMW|iX": 10
, "Cupra|Tavascan": 9
, "Cupra|Born": 8
, "Ford|Capri EV": 8
, "Audi|Q8 e-tron": 7
, "Hyundai|Ioniq 6": 7
, "Mercedes-Benz|EQS": 7
, "Mini|Cooper SE": 7
, "BYD|Yuan Plus": 6
, "Peugeot|E-5008": 6
, "Peugeot|E-3008": 4
, "Renault|Megane E-Tech": 4
, "Opel|Astra Electric": 3
, "Porsche|Taycan": 3
, "Subaru|Solterra": 3
, "Tesla|Model S": 3
, "Tesla|Model X": 3
, "Volvo|EX90": 3
, "BYD|other": 4
, "Fiat|other": 3
, "Ford|other": 2
, "Mercedes-Benz|other": 2
, "Peugeot|other": 2
, "Toyota|other": 2
, "Jeep|other": 1
, "MG|other": 1
, "Opel|other": 1
, "Volkswagen|other": 1
, "other": 162
});

db.insert(db.countries.FI, "2024-11", db.dsTypes.AllCarsByBrand, "https://www.aut.fi/files/2913/November_2024.xlsx",
{ "Toyota": 902
, "Škoda": 762
, "Volkswagen": 752
, "Volvo": 647
, "Kia": 382
, "Tesla": 323
, "Mercedes-Benz": 267
, "BMW": 244
, "Hyundai": 218
, "Audi": 215
, "Ford": 203
, "Nissan": 189
, "Opel": 171
, "Renault": 142
, "Peugeot": 123
, "Polestar": 118
, "Mazda": 86
, "Cupra": 56
, "Porsche": 54
, "Citroën": 47
, "Smart": 45
, "Suzuki": 45
, "BYD": 38
, "Mitsubishi": 36
, "Dacia": 27
, "Subaru": 24
, "Land Rover": 21
, "Honda": 13
, "Seat": 12
, "other": 176
});

db.insert(db.countries.FI, "2024-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FI/Brands/Month/2024/11, https://www.aut.fi/en/statistics/new_registrations/new_registrations_by_fuel_type/passenger_cars",
{ "Tesla|Model Y": 247
, "Škoda|Enyaq": 209
, "Volkswagen|ID.7": 125
, "Volkswagen|ID.4": 108
, "Volvo|EX30": 99
, "Volvo|EX40": 83
, "Audi|Q4 e-tron": 76
, "Tesla|Model 3": 75
, "Audi|Q6 e-tron": 70
, "Porsche|Macan Electric": 44
, "Ford|Explorer EV": 38
, "Hyundai|Ioniq 5": 37
, "Volvo|EC40": 36
, "BMW|i4": 35
, "Kia|EV3": 33
, "Mercedes-Benz|EQA": 33
, "Cupra|Tavascan": 31
, "Mercedes-Benz|EQB": 30
, "Hyundai|Kona Electric": 28
, "BMW|i5": 24
, "Nissan|Ariya": 24
, "Volkswagen|ID.3": 23
, "BYD|Seal": 22
, "BMW|iX2": 21
, "Kia|EV6": 21
, "Renault|Scénic E-Tech": 21
, "BMW|iX1": 19
, "Mercedes-Benz|EQE": 15
, "Kia|EV9": 14
, "Toyota|bZ4X": 14
, "Ford|Capri EV": 12
, "Peugeot|E-5008": 11
, "Renault|Megane E-Tech": 11
, "Kia|Niro EV": 9
, "Volvo|EX90": 8
, "Citroën|ë-C3": 7
, "Peugeot|e-2008": 7
, "BMW|iX": 6
, "Cupra|Born": 6
, "Hyundai|Ioniq 6": 6
, "Mini|Cooper SE": 6
, "Audi|Q8 e-tron": 5
, "BYD|Dolphin": 5
, "Citroën|ë-C4": 5
, "Peugeot|E-3008": 4
, "BMW|i7": 3
, "Jaguar|I-Pace": 3
, "Opel|Mokka-e": 3
, "Porsche|Taycan": 3
, "Subaru|Solterra": 3
, "Volkswagen|ID.5": 3
, "BYD|other": 6
, "Mercedes-Benz|other": 4
, "Peugeot|other": 4
, "Ford|other": 3
, "Opel|other": 3
, "Kia|other": 2
, "Toyota|other": 2
, "BMW|other": 1
, "Fiat|other": 1
, "Jeep|other": 1
, "Mazda|other": 1
, "Tesla|other": 1
, "other": 185
});
