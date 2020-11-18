// Data sets for car sales in Sweden

"use strict";

db.addCountry("SE", "Sweden");

db.insert(db.countries.SE, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#jan",
{ "Volvo": 4744
, "Volkswagen": 3436
, "Toyota": 1531
, "Kia": 1438
, "Škoda": 1399
, "BMW": 1336
, "Mercedes-Benz": 1200
, "Audi": 1190
, "Ford": 752
, "Nissan": 737
, "Subaru": 456
, "Seat": 409
, "Renault": 403
, "Mazda": 399
, "Opel": 377
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
, "Land Rover": 31
, "Alfa Romeo": 30
, "Jaguar": 30
, "DS Automobiles": 27
, "other": 880
});

db.insert(db.countries.SE, "2018-01", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/02/sweden-january-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 71
, "Volkswagen|e-Golf": 31
});

db.insert(db.countries.SE, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#feb",
{ "Volvo": 6700
, "Volkswagen": 3927
, "Kia": 1701
, "Toyota": 1650
, "Audi": 1546
, "BMW": 1477
, "Mercedes-Benz": 1360
, "Škoda": 1325
, "Nissan": 813
, "Ford": 650
, "Renault": 625
, "Seat": 571
, "Opel": 501
, "Hyundai": 442
, "Mazda": 386
, "Subaru": 362
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
, "Land Rover": 27
, "Alfa Romeo": 22
, "Jaguar": 16
, "other": 988
});

db.insert(db.countries.SE, "2018-02", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/03/sweden-february-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 80
, "Hyundai|Ioniq Electric": 97
, "Volkswagen|e-Golf": 31
, "Nissan|e-NV200": 49
});

db.insert(db.countries.SE, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#mar (Unclear: Why is Tesla missing?)",
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
, "Renault": 909
, "Seat": 670
, "Citroën": 606
, "Opel": 582
, "Fiat": 578
, "Mazda": 492
, "Subaru": 420
, "Mitsubishi": 379
, "Honda": 379
, "Dacia": 325
, "Mini": 268
, "Suzuki": 194
, "Porsche": 182
, "Lexus": 144
, "SsangYong": 93
, "Jeep": 91
, "Alfa Romeo": 41
, "Land Rover": 35
, "Jaguar": 25
, "Smart": 2
, "Tesla": 146
, "other": 1045
});

db.insert(db.countries.SE, "2018-03", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/04/sweden-march-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 250
, "Renault|ZOE": 85
, "Hyundai|Ioniq Electric": 114
, "Tesla|Model S": 146
, "Volkswagen|e-Golf": 36
});

db.insert(db.countries.SE, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#apr (Unclear: Why is Tesla missing?)",
{ "Volvo": 7313
, "Volkswagen": 5351
, "Kia": 2110
, "Toyota": 2077
, "Mercedes-Benz": 1999
, "BMW": 1652
, "Škoda": 1649
, "Audi": 1569
, "Nissan": 1118
, "Fiat": 1029
, "Renault": 995
, "Seat": 699
, "Opel": 698
, "Ford": 681
, "Mazda": 531
, "Subaru": 519
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
, "Jeep": 62
, "Land Rover": 52
, "Jaguar": 27
, "DS Automobiles": 2
, "Tesla": 44
, "other": 1340
});

db.insert(db.countries.SE, "2018-04", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/05/sweden-april-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 139
, "Renault|ZOE": 56
, "Hyundai|Ioniq Electric": 28
, "Tesla|Model S": 44
, "Volkswagen|e-Golf": 27
});

db.insert(db.countries.SE, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#may (Unclear: Why is Tesla missing?)",
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
, "Ford": 961
, "Nissan": 914
, "Seat": 815
, "Opel": 653
, "Mazda": 597
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
, "Land Rover": 85
, "Jeep": 69
, "Jaguar": 47
, "DS Automobiles": 1
, "Smart": 1
, "Tesla": 29
, "other": 1272
});

db.insert(db.countries.SE, "2018-05", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/06/sweden-may-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 47
, "Renault|ZOE": 51
, "Hyundai|Ioniq Electric": 19
, "Tesla|Model S": 29
, "Volkswagen|e-Golf": 40
});

db.insert(db.countries.SE, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#jun (Unclear: Why is Tesla missing?)",
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
, "Ford": 1996
, "Opel": 1178
, "Mazda": 1153
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
, "Land Rover": 113
, "Jaguar": 96
, "SsangYong": 15
, "DS Automobiles": 2
, "Tesla": 85
, "other": 2432
});

db.insert(db.countries.SE, "2018-06", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/07/sweden-june-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 19
, "Renault|ZOE": 43
, "Tesla|Model S": 85
, "Hyundai|Ioniq Electric": 13
, "Volkswagen|e-Golf": 30
});

db.insert(db.countries.SE, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#jul (Unclear: Why is Tesla missing?)",
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
, "Seat": 316
, "Renault": 238
, "Fiat": 227
, "Citroën": 203
, "Honda": 155
, "Mazda": 146
, "Mini": 139
, "Opel": 125
, "Hyundai": 107
, "Porsche": 106
, "Mitsubishi": 82
, "Suzuki": 80
, "Lexus": 73
, "Subaru": 66
, "Dacia": 60
, "Alfa Romeo": 25
, "Jeep": 24
, "Land Rover": 21
, "Jaguar": 19
, "DS Automobiles": 1
, "Smart": 1
, "Tesla": 65
, "other": 496
});

db.insert(db.countries.SE, "2018-07", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/08/sweden-july-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 62
, "Renault|ZOE": 126
, "Tesla|Model S": 65
, "Hyundai|Ioniq Electric": 16
, "Volkswagen|e-Golf": 54
});

// No source found for electric car sales 2019-08

db.insert(db.countries.SE, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#sep (Unclear: Why is Tesla missing?)",
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
, "Citroën": 572
, "Fiat": 416
, "Seat": 358
, "Mitsubishi": 327
, "Nissan": 308
, "Mazda": 284
, "Mini": 284
, "Subaru": 248
, "Opel": 243
, "Honda": 189
, "Suzuki": 176
, "Dacia": 157
, "Lexus": 110
, "Hyundai": 103
, "Jeep": 75
, "Porsche": 66
, "Land Rover": 63
, "Jaguar": 40
, "Alfa Romeo": 10
, "DS Automobiles": 3
, "SsangYong": 2
, "Smart": 1
, "Tesla": 215
, "other": 648
});

db.insert(db.countries.SE, "2018-09", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/10/sweden-september-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 168
, "Renault|ZOE": 191
, "Tesla|Model S": 173
, "Hyundai|Ioniq Electric": 11
, "Volkswagen|e-Golf": 6
, "Tesla|Model X": 42
});

db.insert(db.countries.SE, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#oct (Unclear: Why is Tesla missing?)",
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
, "Nissan": 456
, "Mazda": 419
, "Opel": 418
, "Mitsubishi": 414
, "Mini": 396
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
, "Land Rover": 53
, "Porsche": 52
, "Alfa Romeo": 15
, "Smart": 1
, "Tesla": 54
, "other": 750
});

db.insert(db.countries.SE, "2018-10", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/11/sweden-october-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 299
, "Nissan|Leaf": 240
, "Tesla|Model S": 44
, "Hyundai|Ioniq Electric": 74
, "Volkswagen|e-Golf": 12
, "Tesla|Model X": 10
});

db.insert(db.countries.SE, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#nov (Unclear: Why is Tesla missing?)",
{ "Volvo": 4943
, "Volkswagen": 3236
, "Kia": 1907
, "BMW": 1832
, "Toyota": 1734
, "Mercedes-Benz": 1697
, "Škoda": 1614
, "Renault": 1000
, "Audi": 950
, "Opel": 712
, "Ford": 695
, "Nissan": 613
, "Seat": 582
, "Subaru": 442
, "Mitsubishi": 437
, "Mazda": 342
, "Fiat": 321
, "Mini": 306
, "Hyundai": 233
, "Suzuki": 208
, "Honda": 205
, "Dacia": 203
, "Citroën": 194
, "Alfa Romeo": 110
, "Lexus": 107
, "Jaguar": 100
, "Jeep": 99
, "Land Rover": 44
, "Porsche": 31
, "Smart": 2
, "Tesla": 84
, "other": 830
});

db.insert(db.countries.SE, "2018-11", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/12/sweden-november-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 388
, "Renault|ZOE": 166
, "Tesla|Model S": 72
, "Volkswagen|e-Golf": 225
, "Hyundai|Ioniq Electric": 78
, "Tesla|Model X": 12
});

db.insert(db.countries.SE, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2018#dec (Unclear: Why is Tesla missing?)",
{ "Volvo": 4557
, "Volkswagen": 2682
, "Kia": 1462
, "Toyota": 1345
, "BMW": 1291
, "Mercedes-Benz": 1324
, "Audi": 1455
, "Škoda": 1172
, "Renault": 1988
, "Nissan": 546
, "Ford": 795
, "Fiat": 227
, "Seat": 438
, "Opel": 48
, "Mazda": 252
, "Subaru": 272
, "Hyundai": 170
, "Citroën": 141
, "Mitsubishi": 480
, "Dacia": 327
, "Mini": 177
, "Honda": 218
, "Suzuki": 205
, "Porsche": 114
, "Lexus": 143
, "Jeep": 144
, "Alfa Romeo": 30
, "Land Rover": 94
, "Jaguar": 142
, "DS Automobiles": 1
, "Smart": 1
, "Tesla": 173
, "other": 586
});

db.insert(db.countries.SE, "2018-12", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/01/sweden-december-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 343
, "Renault|ZOE": 340
, "Tesla|Model S": 107
, "Volkswagen|e-Golf": 61
, "Hyundai|Ioniq Electric": 31
, "Tesla|Model X": 66
});

db.insert(db.countries.SE, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#jan",
{ "Volvo": 4073
, "Volkswagen": 2691
, "Kia": 1571
, "BMW": 1504
, "Toyota": 1203
, "Mercedes-Benz": 1196
, "Škoda": 1090
, "Audi": 868
, "Ford": 789
, "Renault": 598
, "Nissan": 529
, "Mitsubishi": 527
, "Seat": 498
, "Hyundai": 377
, "Mazda": 298
, "Citroën": 271
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
, "Land Rover": 70
, "Alfa Romeo": 61
, "Opel": 11
, "Smart": 3
, "other": 678
});

db.insert(db.countries.SE, "2019-01", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/02/sweden-january-2019.html",
{ "Nissan|Leaf": 264
, "Renault|ZOE": 239
, "Kia|Niro EV": 175
, "Hyundai|Ioniq Electric": 101
, "BMW|i3 BEV": 96
, "Kia|Soul EV": 53
, "Hyundai|Kona Electric": 42
, "Volkswagen|e-Golf": 37
});

db.insert(db.countries.SE, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#feb (Unclear: Why is Tesla missing?)",
{ "Volvo": 4507
, "Volkswagen": 3700
, "Kia": 1889
, "Mercedes-Benz": 1472
, "Škoda": 1399
, "BMW": 1325
, "Audi": 1310
, "Toyota": 1030
, "Renault": 668
, "Nissan": 629
, "Seat": 625
, "Mitsubishi": 598
, "Ford": 501
, "Hyundai": 402
, "Dacia": 293
, "Mazda": 278
, "Mini": 257
, "Subaru": 244
, "Fiat": 232
, "Honda": 220
, "Suzuki": 141
, "Opel": 126
, "Jaguar": 102
, "Citroën": 100
, "Lexus": 95
, "Land Rover": 88
, "Porsche": 78
, "Jeep": 59
, "Alfa Romeo": 42
, "DS Automobiles": 1
, "Tesla": 52
, "other": 683
});

db.insert(db.countries.SE, "2019-02", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/03/sweden-february-2019.html",
{ "Renault|ZOE": 236
, "Nissan|Leaf": 153
, "Kia|Niro EV": 163
, "BMW|i3 BEV": 111
, "Hyundai|Ioniq Electric": 27
, "Hyundai|Kona Electric": 51
, "Tesla|Model S": 52
, "Volkswagen|e-Golf": 35
, "Kia|Soul EV": 5
});

db.insert(db.countries.SE, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#mar (Unclear: Why is Tesla missing?)",
{ "Volvo": 5419
, "Volkswagen": 3623
, "Kia": 2245
, "Mercedes-Benz": 2124
, "Audi": 2007
, "Toyota": 1790
, "Škoda": 1624
, "BMW": 1615
, "Renault": 1122
, "Mitsubishi": 814
, "Ford": 766
, "Seat": 760
, "Hyundai": 584
, "Nissan": 575
, "Mazda": 467
, "Fiat": 430
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
, "Land Rover": 118
, "Jeep": 94
, "Alfa Romeo": 55
, "DS Automobiles": 9
, "Smart": 1
, "Tesla": 1077
, "other": 693
});

db.insert(db.countries.SE, "2019-03", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/04/sweden-march-2018.html",
{ "Tesla|Model 3": 1005
, "Renault|ZOE": 194
, "Kia|Niro EV": 296
, "Nissan|Leaf": 134
, "BMW|i3 BEV": 147
, "Hyundai|Kona Electric": 90
, "Hyundai|Ioniq Electric": 31
, "Tesla|Model S": 72
, "Volkswagen|e-Golf": 22
});

db.insert(db.countries.SE, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#apr (Unclear: Why is Tesla missing?)",
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
, "Nissan": 573
, "Mazda": 468
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
, "Land Rover": 76
, "Jeep": 75
, "Alfa Romeo": 27
, "DS Automobiles": 17
, "Tesla": 536
, "other": 816
});

db.insert(db.countries.SE, "2019-04", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/05/sweden-april-2019.html",
{ "Tesla|Model 3": 446
, "Renault|ZOE": 204
, "Kia|Niro EV": 174
, "Nissan|Leaf": 113
, "BMW|i3 BEV": 110
, "Tesla|Model S": 90
, "Hyundai|Kona Electric": 50
, "Hyundai|Ioniq Electric": 22
, "Volkswagen|e-Golf": 52
, "Audi|e-tron": 43
});

db.insert(db.countries.SE, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#may (Unclear: Why is Tesla missing?)",
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
, "Seat": 862
, "Fiat": 802
, "Citroën": 550
, "Nissan": 516
, "Opel": 516
, "Mazda": 452
, "Subaru": 447
, "Mitsubishi": 435
, "Hyundai": 412
, "Dacia": 399
, "Mini": 324
, "Lexus": 264
, "Honda": 244
, "Suzuki": 228
, "Porsche": 222
, "Jaguar": 136
, "Land Rover": 85
, "Jeep": 75
, "Alfa Romeo": 73
, "DS Automobiles": 20
, "Smart": 1
, "Tesla": 310
, "other": 1046
});

db.insert(db.countries.SE, "2019-05", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/06/sweden-may-2019.html",
{ "Tesla|Model 3": 198
, "Renault|ZOE": 199
, "Kia|Niro EV": 140
, "Nissan|Leaf": 17
, "BMW|i3 BEV": 138
, "Tesla|Model S": 112
, "Hyundai|Kona Electric": 51
, "Hyundai|Ioniq Electric": 27
, "Volkswagen|e-Golf": 62
, "Audi|e-tron": 80
});

db.insert(db.countries.SE, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#jun (Unclear: Why is Tesla missing?)",
{ "Volvo": 5691
, "Volkswagen": 3402
, "Kia": 2504
, "Toyota": 2222
, "Audi": 2143
, "Renault": 1967
, "BMW": 1724
, "Škoda": 1712
, "Mercedes-Benz": 1328
, "Seat": 799
, "Dacia": 797
, "Ford": 787
, "Fiat": 718
, "Nissan": 574
, "Mazda": 515
, "Mitsubishi": 514
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
, "Land Rover": 80
, "Alfa Romeo": 26
, "DS Automobiles": 16
, "Smart": 2
, "Tesla": 733
, "other": 892
});

db.insert(db.countries.SE, "2019-06", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/07/sweden-june-2018.html",
{ "Tesla|Model 3": 524
, "Renault|ZOE": 229
, "Kia|Niro EV": 166
, "Nissan|Leaf": 79
, "BMW|i3 BEV": 98
, "Tesla|Model S": 209
, "Hyundai|Kona Electric": 84
, "Audi|e-tron": 75
, "Kia|Soul EV": 94
, "Volkswagen|e-Golf": 45
});

// No source found for electric car sales 2019-07

db.insert(db.countries.SE, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#aug (Unclear: Why is Tesla missing?)",
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
, "Dacia": 775
, "Renault": 763
, "Ford": 586
, "Fiat": 542
, "Hyundai": 521
, "Mazda": 485
, "Mitsubishi": 427
, "Subaru": 389
, "Citroën": 370
, "Mini": 324
, "Opel": 245
, "Honda": 218
, "Suzuki": 214
, "Lexus": 188
, "Porsche": 187
, "Jeep": 106
, "Land Rover": 96
, "Jaguar": 73
, "Alfa Romeo": 64
, "DS Automobiles": 19
, "Tesla": 265
, "other": 1052
});

db.insert(db.countries.SE, "2019-08", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/09/sweden-july-2019.html",
{ "Tesla|Model 3": 148
, "Renault|ZOE": 138
, "Kia|Niro EV": 32
, "Nissan|Leaf": 119
, "BMW|i3 BEV": 78
, "Tesla|Model S": 117
, "Hyundai|Kona Electric": 10
, "Audi|e-tron": 75
, "Volkswagen|e-Golf": 63
, "Kia|Soul EV": 28
, "Hyundai|Ioniq Electric": 55
});

db.insert(db.countries.SE, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#sep (Unclear: Why is Tesla missing?)",
{ "Volvo": 4268
, "Volkswagen": 4111
, "Kia": 2182
, "Toyota": 1914
, "BMW": 1600
, "Mercedes-Benz": 1457
, "Audi": 1363
, "Škoda": 1225
, "Hyundai": 717
, "Ford": 698
, "Renault": 675
, "Nissan": 646
, "Mazda": 582
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
, "Land Rover": 95
, "Jeep": 79
, "Jaguar": 51
, "Alfa Romeo": 22
, "DS Automobiles": 22
, "Tesla": 1002
, "other": 590
});

db.insert(db.countries.SE, "2019-09", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/10/sweden-september-2019.html",
{ "Tesla|Model 3": 716
, "Renault|ZOE": 148
, "Kia|Niro EV": 86
, "Nissan|Leaf": 142
, "Tesla|Model S": 197
, "BMW|i3 BEV": 69
, "Audi|e-tron": 87
, "Volkswagen|e-Golf": 132
, "Hyundai|Kona Electric": 20
, "Tesla|Model X": 89
});

db.insert(db.countries.SE, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#oct (Unclear: Why is Tesla missing?)",
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
, "Hyundai": 647
, "Mazda": 591
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
, "Land Rover": 102
, "Jeep": 102
, "Alfa Romeo": 95
, "Dacia": 79
, "Jaguar": 42
, "DS Automobiles": 8
, "Tesla": 62
, "other": 741
});

db.insert(db.countries.SE, "2019-10", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/11/sweden-october-2019.html",
{ "Tesla|Model 3": 47
, "Renault|ZOE": 128
, "Kia|Niro EV": 104
, "Nissan|Leaf": 141
, "BMW|i3 BEV": 62
, "Tesla|Model S": 15
, "Audi|e-tron": 78
, "Volkswagen|e-Golf": 69
, "Hyundai|Kona Electric": 43
});

db.insert(db.countries.SE, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#nov (Unclear: Why is Tesla missing?)",
{ "Volvo": 5435
, "Volkswagen": 5361
, "Toyota": 2215
, "Kia": 2027
, "BMW": 1959
, "Audi": 1906
, "Mercedes-Benz": 1466
, "Škoda": 1417
, "Renault": 825
, "Seat": 730
, "Hyundai": 693
, "Ford": 683
, "Mazda": 646
, "Nissan": 630
, "Mitsubishi": 493
, "Fiat": 401
, "Subaru": 372
, "Mini": 333
, "Honda": 249
, "Suzuki": 240
, "Dacia": 218
, "Porsche": 217
, "Lexus": 197
, "Opel": 136
, "Citroën": 134
, "Land Rover": 92
, "Alfa Romeo": 92
, "Jeep": 82
, "Jaguar": 36
, "DS Automobiles": 10
, "Smart": 1
, "Tesla": 179
, "other": 1027
});

db.insert(db.countries.SE, "2019-11", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/12/sweden-november-2019.html",
{ "Tesla|Model 3": 75
, "Renault|ZOE": 113
, "Nissan|Leaf": 224
, "Kia|Niro EV": 63
, "BMW|i3 BEV": 90
, "Tesla|Model S": 104
, "Audi|e-tron": 46
, "Volkswagen|e-Golf": 47
});

db.insert(db.countries.SE, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2019#dec (Unclear: Why is Tesla missing?)",
{ "Volvo": 10297
, "Volkswagen": 6677
, "Kia": 1887
, "Toyota": 2222
, "BMW": 2750
, "Audi": 2336
, "Mercedes-Benz": 2255
, "Škoda": 2030
, "Renault": 2240
, "Nissan": 2546
, "Seat": 894
, "Ford": 1364
, "Hyundai": 813
, "Mazda": 1047
, "Mitsubishi": 612
, "Fiat": 521
, "Subaru": 1676
, "Dacia": 660
, "Mini": 329
, "Citroën": 133
, "Opel": 332
, "Honda": 311
, "Suzuki": 353
, "Porsche": 284
, "Lexus": 370
, "Jaguar": 51
, "Land Rover": 110
, "Jeep": 111
, "Alfa Romeo": 55
, "DS Automobiles": 32
, "Smart": 3
, "Tesla": 888
, "other": 1940
});

db.insert(db.countries.SE, "2019-12", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/01/sweden-december-2019.html",
{ "Tesla|Model 3": 602
, "Renault|ZOE": 86
, "Nissan|Leaf": 71
, "Tesla|Model S": 286
, "Kia|Niro EV": 8
, "BMW|i3 BEV": 108
, "Audi|e-tron": 47
});

db.insert(db.countries.SE, "2020-01", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2020#jan (Unclear: Why is Tesla missing?)",
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
, "Ford": 228
, "Fiat": 203
, "Mini": 177
, "Porsche": 126
, "Nissan": 114
, "Honda": 88
, "Lexus": 86
, "Citroën": 85
, "Dacia": 68
, "Suzuki": 65
, "Subaru": 56
, "Land Rover": 55
, "Alfa Romeo": 23
, "Jeep": 22
, "Jaguar": 22
, "Mazda": 7
, "Tesla": 89
, "other": 637
});

db.insert(db.countries.SE, "2020-01", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/02/sweden-january-2020.html",
{ "Kia|Niro EV": 282
, "Renault|ZOE": 133
, "Kia|Soul EV": 117
, "Audi|e-tron": 116
, "Nissan|Leaf": 89
, "Tesla|Model S": 89
, "BMW|i3 BEV": 73
});

db.insert(db.countries.SE, "2020-02", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2020#feb (Unclear: Why is Tesla missing?)",
{ "Volvo": 4654
, "Volkswagen": 3171
, "Kia": 2191
, "Toyota": 1684
, "Audi": 1406
, "Mercedes-Benz": 1405
, "BMW": 1324
, "Škoda": 1229
, "Seat": 652
, "Hyundai": 429
, "Renault": 422
, "Mitsubishi": 367
, "Ford": 275
, "Fiat": 259
, "Mini": 220
, "Nissan": 182
, "Porsche": 137
, "Citroën": 137
, "Dacia": 112
, "Land Rover": 108
, "Honda": 105
, "Suzuki": 101
, "Lexus": 89
, "Jeep": 54
, "Subaru": 42
, "Alfa Romeo": 39
, "Mazda": 36
, "Jaguar": 34
, "Tesla": 98
, "other": 732
});

db.insert(db.countries.SE, "2020-02", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/03/sweden-february-2020.html",
{ "Kia|Niro EV": 359
, "Audi|e-tron": 208
, "Renault|ZOE": 138
, "Nissan|Leaf": 93
, "Kia|Soul EV": 62
, "Tesla|Model 3": 98
});

db.insert(db.countries.SE, "2020-03", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_sweden_2020#mar (Unclear: Why is Tesla missing?)",
{ "Volvo": 5177
, "Volkswagen": 3739
, "Kia": 2497
, "Audi": 2226
, "Toyota": 1764
, "BMW": 1675
, "Mercedes-Benz": 1618
, "Škoda": 1376
, "Renault": 832
, "Seat": 688
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
, "Land Rover": 95
, "Honda": 72
, "Mazda": 59
, "Jaguar": 31
, "Jeep": 22
, "Alfa Romeo": 13
, "Smart": 1
, "Tesla": 1084
, "other": 1107
});

db.insert(db.countries.SE, "2020-03", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/04/sweden-march-2020.html",
{ "Tesla|Model 3": 1084
, "Kia|Niro EV": 139
, "Audi|e-tron": 315
, "Renault|ZOE": 310
, "Nissan|Leaf": 152
, "Volkswagen|e-Golf": 155
});

db.insert(db.countries.SE, "2020-04", db.dsTypes.AllCarsByBrand, "https://www.acea.be/uploads/press_releases_files/20200519_PRPC_2004-FINAL.pdf TODO: numbers per brand wanted",
{ "other": 18916
});

db.insert(db.countries.SE, "2020-04", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/05/sweden-april-2020.html",
{ "Tesla|Model 3": 76
, "Kia|Niro EV": 44
, "Audi|e-tron": 146
, "Renault|ZOE": 159
, "Nissan|Leaf": 139
, "Hyundai|Kona Electric": 76
, "Tesla|Model S": 55
});

db.insert(db.countries.SE, "2020-05", db.dsTypes.AllCarsByBrand, "https://www.acea.be/uploads/press_releases_files/20200617_PRPC_2005_FINAL.pdf TODO: numbers per brand wanted",
{ "other": 15881
});

db.insert(db.countries.SE, "2020-05", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/06/sweden-may-2020.html",
{ "Tesla|Model 3": 69
, "Audi|e-tron": 70
, "Kia|Niro EV": 29
, "Renault|ZOE": 98
, "Nissan|Leaf": 90
, "Volkswagen|e-Golf": 135
, "Hyundai|Kona Electric": 123
});

db.insert(db.countries.SE, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.acea.be/uploads/press_releases_files/20200616_PRPC_2006_FINAL.pdf TODO: numbers per brand wanted",
{ "other": 24747
});

db.insert(db.countries.SE, "2020-06", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/07/sweden-june-2020.html",
{ "Tesla|Model 3": 312
, "Renault|ZOE": 299
, "Audi|e-tron": 218
, "Kia|Niro EV": 129
, "Nissan|Leaf": 84
, "Hyundai|Kona Electric": 100
});

// No source found for electric car sales 2020-07

db.insert(db.countries.SE, "2020-08", db.dsTypes.AllCarsByBrand, "https://www.acea.be/uploads/press_releases_files/20200917_PRPC_2007-08_FINAL.pdf TODO: numbers per brand wanted",
{ "other": 25522
});

db.insert(db.countries.SE, "2020-08", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/09/sweden-august-2020.html",
{ "Tesla|Model 3": 235
, "Kia|Niro EV": 358
, "Audi|e-tron": 233
, "Renault|ZOE": 117
, "Hyundai|Kona Electric": 230
, "Nissan|Leaf": 181
, "Volkswagen|e-Golf": 65
});

db.insert(db.countries.SE, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.acea.be/uploads/press_releases_files/20201016_PRPC_2009_FINAL.pdf TODO: numbers per brand wanted",
{ "other": 28719
});

db.insert(db.countries.SE, "2020-09", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2020/10/sweden-september-2020.html",
{ "Tesla|Model 3": 754
, "Volkswagen|ID.3": 460
, "Kia|Niro EV": 233
, "Renault|ZOE": 211
, "Audi|e-tron": 130
, "Hyundai|Kona Electric": 178
, "Nissan|Leaf": 172
, "Polestar|2": 582
});

db.insert(db.countries.SE, "2020-10", db.dsTypes.AllCarsByBrand, "https://www.acea.be/uploads/press_releases_files/20201118_PRPC_2010_FINAL.pdf TODO: numbers per brand wanted",
{ "other": 28147
});

db.insert(db.countries.SE, "2020-10", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/search/label/Sweden",
{ "Tesla|Model 3": 34
, "Kia|Niro EV": 235
, "Renault|ZOE": 165
, "Audi|e-tron": 132
, "Nissan|Leaf": 189
, "Hyundai|Kona Electric": 125
, "Polestar|2": 274
, "Volkswagen|e-Golf": 166
});

