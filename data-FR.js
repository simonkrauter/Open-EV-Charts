// Data sets for car sales in France

"use strict";

db.addCountry("FR", "France");

// https://ccfa.fr/immatriculations-commandes/
// http://www.avere-france.org/Site/Category/?arborescence_id=247

db.insert(db.countries.FR, "2018-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/06/2018_01_vpfrance.pdf",
{ "Peugeot": 31523
, "Renault": 27282
, "Citroën": 17292
, "Dacia": 9888
, "Volkswagen": 8656
, "Toyota": 7951
, "Ford": 6933
, "Opel": 5467
, "Fiat": 5219
, "Nissan": 4631
, "BMW": 3811
, "Audi": 3400
, "Kia": 3153
, "Mercedes-Benz": 2888
, "Hyundai": 2461
, "Suzuki": 2192
, "Škoda": 2153
, "Seat": 2115
, "Mini": 2095
, "DS Automobiles": 1460
, "Volvo": 1185
, "Jeep": 883
, "Mazda": 656
, "Honda": 622
, "Alfa Romeo": 592
, "Lexus": 523
, "Land Rover": 464
, "Smart": 415
, "Porsche": 317
, "Jaguar": 225
, "Mitsubishi": 142
, "Infiniti": 69
, "Maserati": 48
, "Subaru": 30
, "SsangYong": 22
, "Tesla": 12
, "Chevrolet": 3
, "other": 68
});

db.insert(db.countries.FR, "2018-01", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1520266815361253686bfda401bf217a7bc644eb32-Barometre%20janvier%202018.pdf",
{ "Renault|Zoé": 633
, "BMW|i3 BEV": 172
, "Kia|Soul EV": 136
, "Smart|Fortwo ED": 98
, "Peugeot|iOn": 56
, "Nissan|Leaf": 48
, "Citroën|C-Zero": 43
, "Hyundai|Ioniq Electric": 42
, "Peugeot|Partner Electric": 40
, "Smart|Forfour ED": 27
, "Volkswagen|e-Golf": 16
, "Citroën|Berlingo Electric": 14
, "Volkswagen|e-up!": 14
, "Bollore|Bluecar": 10
, "Tesla|Model S": 9
, "Citroën|E-Mehari": 7
, "Nissan|e-NV200": 7
, "Tesla|Model X": 3
});

db.insert(db.countries.FR, "2018-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/06/2018_02_vpfrance.pdf",
{ "Peugeot": 31003
, "Renault": 30241
, "Citroën": 16643
, "Volkswagen": 10916
, "Dacia": 10081
, "Toyota": 7892
, "Ford": 7249
, "Fiat": 5912
, "Opel": 5718
, "Nissan": 5515
, "BMW": 4842
, "Mercedes-Benz": 4826
, "Audi": 4036
, "Kia": 3723
, "Hyundai": 2755
, "Suzuki": 2384
, "Seat": 2255
, "Škoda": 2189
, "Mini": 1975
, "DS Automobiles": 1340
, "Volvo": 1325
, "Jeep": 1048
, "Honda": 816
, "Mazda": 800
, "Alfa Romeo": 730
, "Land Rover": 558
, "Lexus": 464
, "Porsche": 418
, "Smart": 398
, "Jaguar": 379
, "Mitsubishi": 161
, "Infiniti": 52
, "Tesla": 51
, "Maserati": 47
, "Subaru": 45
, "SsangYong": 29
, "Chevrolet": 13
, "other": 63
});

db.insert(db.countries.FR, "2018-02", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/03/france-february-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Renault|Zoé": 1155
, "Nissan|Leaf": 306
, "Kia|Soul EV": 73
, "Smart|Fortwo ED": 72
, "Peugeot|iOn": 41
, "Citroën|C-Zero": 35
});

db.insert(db.countries.FR, "2018-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/05/2018_03_vpfrance.pdf",
{ "Renault": 49166
, "Peugeot": 40525
, "Citroën": 21577
, "Volkswagen": 14504
, "Dacia": 13921
, "Ford": 10335
, "Fiat": 8412
, "Toyota": 8222
, "Nissan": 7402
, "Opel": 7363
, "Mercedes-Benz": 6406
, "Audi": 5688
, "BMW": 5670
, "Kia": 4439
, "Hyundai": 3227
, "Seat": 2962
, "Škoda": 2821
, "Mini": 2650
, "Suzuki": 2615
, "DS Automobiles": 2540
, "Volvo": 2069
, "Mazda": 1496
, "Jeep": 1269
, "Honda": 1206
, "Alfa Romeo": 967
, "Land Rover": 789
, "Smart": 606
, "Lexus": 531
, "Jaguar": 444
, "Porsche": 369
, "Mitsubishi": 277
, "Tesla": 241
, "Infiniti": 94
, "Subaru": 66
, "Maserati": 66
, "SsangYong": 26
, "Chevrolet": 10
, "other": 132
});

db.insert(db.countries.FR, "2018-03", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/04/france-march-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Renault|Zoé": 2245
, "Nissan|Leaf": 719
, "Kia|Soul EV": 59
, "Smart|Fortwo ED": 77
, "Tesla|Model S": 162
, "Peugeot|iOn": 98
, "Hyundai|Ioniq Electric": 127
});

db.insert(db.countries.FR, "2018-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/06/2018_04_vpfrance.pdf",
{ "Peugeot": 34573
, "Renault": 33721
, "Citroën": 16991
, "Dacia": 14114
, "Volkswagen": 12445
, "Toyota": 8070
, "Ford": 7406
, "Fiat": 6961
, "Opel": 6305
, "Audi": 4941
, "Mercedes-Benz": 4773
, "Nissan": 4604
, "BMW": 4574
, "Kia": 4288
, "Hyundai": 3326
, "Škoda": 2635
, "DS Automobiles": 2630
, "Suzuki": 2550
, "Seat": 2342
, "Mini": 1992
, "Jeep": 1297
, "Volvo": 1252
, "Mazda": 901
, "Land Rover": 738
, "Alfa Romeo": 707
, "Lexus": 574
, "Jaguar": 542
, "Smart": 538
, "Honda": 529
, "Porsche": 380
, "Mitsubishi": 244
, "Infiniti": 72
, "Subaru": 53
, "Maserati": 53
, "Tesla": 39
, "SsangYong": 35
, "Chevrolet": 6
, "other": 189
});

db.insert(db.countries.FR, "2018-04", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/05/france-april-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Renault|Zoé": 961
, "Nissan|Leaf": 375
, "Kia|Soul EV": 70
, "Smart|Fortwo ED": 69
, "Peugeot|iOn": 59
, "Tesla|Model S": 23
, "Citroën|C-Zero": 42
});

db.insert(db.countries.FR, "2018-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/06/2018_05_vpfrance.pdf",
{ "Renault": 36246
, "Peugeot": 33079
, "Citroën": 17164
, "Dacia": 13169
, "Volkswagen": 12659
, "Ford": 7723
, "Toyota": 7627
, "Fiat": 7397
, "Opel": 7014
, "Mercedes-Benz": 6525
, "Nissan": 5433
, "BMW": 4993
, "Audi": 4769
, "Kia": 3627
, "Hyundai": 3228
, "Škoda": 3025
, "Seat": 2573
, "DS Automobiles": 2240
, "Mini": 2197
, "Suzuki": 2139
, "Jeep": 1577
, "Volvo": 1380
, "Mazda": 1043
, "Alfa Romeo": 787
, "Land Rover": 686
, "Honda": 666
, "Smart": 560
, "Lexus": 507
, "Jaguar": 449
, "Porsche": 385
, "Mitsubishi": 287
, "Tesla": 112
, "Maserati": 67
, "Infiniti": 62
, "Subaru": 53
, "SsangYong": 23
, "Chevrolet": 8
, "other": 223
});

db.insert(db.countries.FR, "2018-05", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/06/france-may-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Renault|Zoé": 1085
, "Nissan|Leaf": 331
, "Kia|Soul EV": 51
, "Smart|Fortwo ED": 68
, "Peugeot|iOn": 63
, "Tesla|Model S": 63
, "Hyundai|Ioniq Electric": 20
});

db.insert(db.countries.FR, "2018-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/07/2018_06_vpfrance.pdf",
{ "Renault": 59497
, "Peugeot": 42883
, "Citroën": 24403
, "Dacia": 16551
, "Volkswagen": 15880
, "Fiat": 10507
, "Toyota": 9403
, "Opel": 7284
, "Ford": 7274
, "Nissan": 6612
, "Audi": 5876
, "BMW": 5875
, "Mercedes-Benz": 5769
, "Kia": 4357
, "Hyundai": 3420
, "Škoda": 3404
, "Seat": 3391
, "DS Automobiles": 3190
, "Mini": 2849
, "Suzuki": 2692
, "Volvo": 1823
, "Jeep": 1377
, "Mazda": 1181
, "Alfa Romeo": 1033
, "Smart": 930
, "Honda": 892
, "Land Rover": 813
, "Mitsubishi": 631
, "Porsche": 593
, "Jaguar": 584
, "Lexus": 522
, "Tesla": 173
, "Subaru": 136
, "Maserati": 67
, "Infiniti": 60
, "SsangYong": 30
, "Chevrolet": 16
, "other": 238
});

db.insert(db.countries.FR, "2018-06", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/07/france-june-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Renault|Zoé": 1928
, "Nissan|Leaf": 469
, "Smart|Fortwo ED": 95
, "Peugeot|iOn": 91
, "Kia|Soul EV": 18
, "Tesla|Model S": 103
, "Hyundai|Ioniq Electric": 21
, "Citroën|C-Zero": 77
});

// No source for 2018-07 found

db.insert(db.countries.FR, "2018-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/09/2018_08_vpfrance.pdf",
{ "Renault": 27812
, "Peugeot": 21026
, "Citroën": 13694
, "Dacia": 11377
, "Volkswagen": 9868
, "Nissan": 9296
, "Toyota": 6057
, "Fiat": 5517
, "Audi": 5052
, "Ford": 4822
, "Mercedes-Benz": 4180
, "BMW": 3782
, "Opel": 3465
, "Seat": 2715
, "Škoda": 2394
, "Suzuki": 2345
, "Kia": 2278
, "Hyundai": 2123
, "Mini": 1690
, "Jeep": 1573
, "Alfa Romeo": 1404
, "DS Automobiles": 1143
, "Volvo": 913
, "Porsche": 902
, "Mazda": 752
, "Mitsubishi": 649
, "Smart": 551
, "Land Rover": 506
, "Honda": 488
, "Jaguar": 436
, "Lexus": 431
, "Infiniti": 421
, "Subaru": 151
, "Tesla": 64
, "SsangYong": 52
, "Maserati": 45
, "Chevrolet": 2
, "other": 414
});

db.insert(db.countries.FR, "2018-08", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/09/norway-august-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Nissan|Leaf": 1241
, "Volkswagen|e-Golf": 764
, "Tesla|Model X": 113
, "Tesla|Model S": 82
, "Renault|Zoé": 386
, "Hyundai|Ioniq Electric": 159
, "Kia|Soul EV": 168
});

db.insert(db.countries.FR, "2018-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/10/2018_09_vpfrance.pdf",
{ "Peugeot": 29353
, "Renault": 28109
, "Citroën": 15751
, "Dacia": 9353
, "Toyota": 7128
, "Volkswagen": 6807
, "Opel": 6404
, "Mercedes-Benz": 5612
, "Ford": 5095
, "Fiat": 4940
, "BMW": 4936
, "Kia": 3196
, "Hyundai": 3021
, "Audi": 2444
, "Mini": 2067
, "Škoda": 1955
, "Seat": 1731
, "DS Automobiles": 1636
, "Volvo": 1596
, "Suzuki": 1507
, "Nissan": 1458
, "Mazda": 993
, "Honda": 601
, "Smart": 587
, "Jeep": 491
, "Lexus": 383
, "Mitsubishi": 346
, "Jaguar": 319
, "Land Rover": 301
, "Tesla": 171
, "Alfa Romeo": 169
, "Porsche": 124
, "Maserati": 34
, "SsangYong": 18
, "Subaru": 16
, "Chevrolet": 8
, "Infiniti": 6
, "other": 188
});

db.insert(db.countries.FR, "2018-09", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/10/france-september-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Renault|Zoé": 1482
, "Nissan|Leaf": 390
, "Smart|Fortwo ED": 81
, "Peugeot|iOn": 85
, "Tesla|Model S": 107
, "Kia|Soul EV": 44
, "Hyundai|Ioniq Electric": 64
, "Citroën|C-Zero": 63
});

db.insert(db.countries.FR, "2018-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2018/11/2018_10_vpfrance.pdf",
{ "Peugeot": 34962
, "Renault": 29479
, "Citroën": 18780
, "Dacia": 10138
, "Toyota": 9354
, "Volkswagen": 9244
, "Ford": 7563
, "Opel": 6420
, "Mercedes-Benz": 6381
, "Fiat": 5162
, "BMW": 5108
, "Kia": 3629
, "Hyundai": 3201
, "Škoda": 2936
, "Mini": 2795
, "Audi": 2755
, "Nissan": 2652
, "Seat": 2461
, "Suzuki": 2240
, "Volvo": 1832
, "DS Automobiles": 1506
, "Mazda": 811
, "Jeep": 726
, "Smart": 705
, "Honda": 691
, "Lexus": 486
, "Mitsubishi": 476
, "Jaguar": 329
, "Land Rover": 317
, "Alfa Romeo": 246
, "Porsche": 125
, "Maserati": 44
, "Tesla": 30
, "Subaru": 26
, "SsangYong": 15
, "Infiniti": 10
, "Chevrolet": 2
, "other": 161
});

db.insert(db.countries.FR, "2018-10", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/11/france-october-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Renault|Zoé": 1745
, "Nissan|Leaf": 410
, "Smart|Fortwo ED": 108
, "Peugeot|iOn":  68
, "Kia|Soul EV": 47
, "Tesla|Model S": 23
, "Hyundai|Ioniq Electric": 55
, "Citroën|C-Zero": 54
});

db.insert(db.countries.FR, "2018-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/01/2018_11_vpfrance.pdf",
{ "Peugeot": 32820
, "Renault": 25698
, "Citroën": 17743
, "Volkswagen": 13146
, "Dacia": 12351
, "Toyota": 8940
, "Mercedes-Benz": 6432
, "Opel": 6096
, "Ford": 6055
, "Fiat": 5422
, "BMW": 4973
, "Audi": 3540
, "Hyundai": 3130
, "Kia": 3074
, "Škoda": 2782
, "Seat": 2600
, "Mini": 2594
, "Nissan": 2421
, "Suzuki": 2369
, "DS Automobiles": 1970
, "Volvo": 1800
, "Mazda": 904
, "Mitsubishi": 741
, "Smart": 714
, "Jeep": 686
, "Honda": 578
, "Lexus": 536
, "Land Rover": 482
, "Alfa Romeo": 327
, "Jaguar": 202
, "Tesla": 119
, "Porsche": 83
, "Subaru": 33
, "Maserati": 28
, "SsangYong": 18
, "Infiniti": 8
, "Chevrolet": 7
, "other": 189
});

db.insert(db.countries.FR, "2018-11", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1547740964b4293d4c688a85f0f64776ee401217b3-Novembre%202018.pdf",
{ "Renault|Zoé": 1895
, "Nissan|Leaf": 420
, "Peugeot|iOn": 258
, "Citroën|C-Zero": 224
, "Smart|Fortwo ED": 133
, "Hyundai|Ioniq Electric": 112
, "BMW|i3 BEV": 81
, "Tesla|Model S": 63
, "Tesla|Model X": 56
, "Volkswagen|e-up!": 47
, "Smart|Forfour ED": 45
, "Volkswagen|e-Golf": 44
, "Kia|Soul EV": 42
, "Kia|Niro EV": 30
, "Jaguar|I-Pace": 26
, "Hyundai|Kona Electric": 22
, "Citroën|E-Mehari": 19
, "Citroën|Berlingo Electric": 11
, "Peugeot|Partner Electric": 8
, "Nissan|e-NV200": 4
, "other": 828
});

db.insert(db.countries.FR, "2018-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/01/2018_12_vpfrance.pdf",
{ "Renault": 31301
, "Peugeot": 27045
, "Citroën": 16228
, "Volkswagen": 13093
, "Dacia": 9603
, "Toyota": 8085
, "Mercedes-Benz": 7382
, "Ford": 5940
, "BMW": 4944
, "Fiat": 4931
, "Opel": 4844
, "Audi": 3967
, "Kia": 3052
, "Seat": 3022
, "Mini": 2846
, "Škoda": 2760
, "Nissan": 2619
, "Hyundai": 2528
, "Suzuki": 1849
, "Volvo": 1721
, "DS Automobiles": 1701
, "Smart": 914
, "Mazda": 857
, "Jeep": 671
, "Honda": 593
, "Lexus": 579
, "Land Rover": 507
, "Alfa Romeo": 457
, "Mitsubishi": 374
, "Jaguar": 252
, "Porsche": 230
, "Tesla": 192
, "Maserati": 34
, "Subaru": 19
, "Infiniti": 14
, "Chevrolet": 8
, "SsangYong": 6
, "other": 326
});

db.insert(db.countries.FR, "2018-12", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/01/france-december-2018.html (Incomplete: BMW i3 BEV is not included.)",
{ "Renault|Zoé": 2558
, "Nissan|Leaf": 447
, "Smart|Fortwo ED": 339
, "Peugeot|iOn": 99
, "Tesla|Model S": 99
, "Citroën|C-Zero": 53
, "Kia|Soul EV": 26
, "Hyundai|Ioniq Electric": 47
});

db.insert(db.countries.FR, "2019-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/02/2019_01_vpfrance.pdf",
{ "Peugeot": 29651
, "Renault": 26357
, "Citroën": 17563
, "Volkswagen": 10141
, "Dacia": 9350
, "Toyota": 8357
, "Opel": 5882
, "Ford": 5860
, "Fiat": 4865
, "Mercedes-Benz": 4224
, "BMW": 3441
, "Kia": 3364
, "Audi": 3167
, "Hyundai": 2785
, "Nissan": 2546
, "Suzuki": 2535
, "Mini": 2251
, "Škoda": 2185
, "Seat": 2003
, "DS Automobiles": 1767
, "Volvo": 1574
, "Mazda": 716
, "Smart": 649
, "Honda": 643
, "Lexus": 532
, "Jeep": 476
, "Land Rover": 455
, "Mitsubishi": 421
, "Jaguar": 294
, "Alfa Romeo": 253
, "Porsche": 243
, "Tesla": 32
, "Maserati": 28
, "Subaru": 22
, "Infiniti": 11
, "SsangYong": 9
, "Chevrolet": 3
, "other": 424
});

db.insert(db.countries.FR, "2019-01", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15495492248cd691d9fa4f2bee8d93483d2fbf9f2a-Barometre%20janvier%20AvereFrance.pdf",
{ "Renault|Zoé": 1496
, "Nissan|Leaf": 341
, "Smart|Fortwo ED": 306
, "BMW|i3 BEV": 229
, "Kia|Niro EV": 149
, "Hyundai|Kona Electric": 147
, "Citroën|C-Zero": 60
, "Peugeot|iOn": 59
, "Volkswagen|e-Golf": 50
, "Hyundai|Ioniq Electric": 47
, "Jaguar|I-Pace": 31
, "Volkswagen|e-up!": 25
, "Smart|Forfour ED": 24
, "Kia|Soul EV": 23
, "Tesla|Model S": 21
, "Nissan|e-NV200": 15
, "Tesla|Model X": 11
, "Peugeot|Partner Electric": 10
, "Citroën|E-Mehari": 8
, "Citroën|Berlingo Electric": 7
, "other": 514
});

db.insert(db.countries.FR, "2019-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/03/2019_02_vpfrance.pdf",
{ "Peugeot": 31784
, "Renault": 29797
, "Citroën": 19986
, "Volkswagen": 11258
, "Dacia": 10428
, "Toyota": 7833
, "Opel": 7122
, "Ford": 6693
, "Fiat": 5438
, "Mercedes-Benz": 4941
, "BMW": 3950
, "Nissan": 3767
, "Audi": 3766
, "Kia": 3471
, "Hyundai": 3129
, "Seat": 2631
, "Škoda": 2553
, "Suzuki": 2470
, "Mini": 1943
, "Volvo": 1914
, "DS Automobiles": 1684
, "Mazda": 976
, "Jeep": 779
, "Honda": 733
, "Smart": 724
, "Land Rover": 461
, "Tesla": 445
, "Mitsubishi": 416
, "Lexus": 351
, "Alfa Romeo": 266
, "Jaguar": 241
, "Porsche": 133
, "Maserati": 24
, "Subaru": 20
, "Infiniti": 13
, "Chevrolet": 6
, "SsangYong": 5
, "other": 287
});

db.insert(db.countries.FR, "2019-02", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/155186746334385712e0880d4efa60463604ed3785-immats-mars-2019.pdf",
{ "Renault|Zoé": 1197
, "Tesla|Model 3": 401
, "Nissan|Leaf": 326
, "Kia|Niro EV": 253
, "BMW|i3 BEV": 196
, "Smart|Fortwo ED": 87
, "Hyundai|Kona Electric": 79
, "Jaguar|I-Pace": 47
, "Volkswagen|e-Golf": 42
, "Peugeot|iOn": 42
, "Smart|Forfour ED": 41
, "Hyundai|Ioniq Electric": 34
, "Tesla|Model S": 33
, "Citroën|C-Zero": 22
, "Volkswagen|e-up!": 15
, "Audi|e-tron": 14
, "Kia|Soul EV": 14
, "Tesla|Model X": 11
, "Peugeot|Partner Electric": 11
, "Nissan|e-NV200": 6
, "Citroën|E-Mehari": 5
, "Citroën|Berlingo Electric": 3
, "other": 665
});

db.insert(db.countries.FR, "2019-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/04/2019_03_vpfrance.pdf",
{ "Renault": 45911
, "Peugeot": 37262
, "Citroën": 23677
, "Dacia": 15838
, "Volkswagen": 15704
, "Ford": 9320
, "Toyota": 8237
, "Opel": 7991
, "Fiat": 7468
, "Mercedes-Benz": 6125
, "Audi": 5700
, "Nissan": 4958
, "BMW": 4820
, "Kia": 4283
, "Hyundai": 3688
, "Škoda": 3268
, "Seat": 3262
, "Suzuki": 2729
, "Mini": 2616
, "DS Automobiles": 1986
, "Volvo": 1978
, "Mazda": 1559
, "Tesla": 1250
, "Jeep": 1145
, "Honda": 1083
, "Land Rover": 716
, "Smart": 653
, "Mitsubishi": 609
, "Lexus": 555
, "Alfa Romeo": 387
, "Jaguar": 283
, "Porsche": 278
, "Maserati": 35
, "Infiniti": 17
, "Subaru": 13
, "SsangYong": 10
, "Chevrolet": 3
, "other": 401
});

db.insert(db.countries.FR, "2019-03", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1554462213a58da558147631652560897fe8b30dee-immats-avril-2019.pdf",
{ "Renault|Zoé": 1536
, "Tesla|Model 3": 1153
, "Nissan|Leaf": 455
, "Kia|Niro EV": 299
, "BMW|i3 BEV": 207
, "Hyundai|Kona Electric": 141
, "Audi|e-tron": 140
, "Peugeot|iOn": 127
, "Smart|Fortwo ED": 104
, "Citroën|C-Zero": 93
, "Volkswagen|e-Golf": 61
, "Tesla|Model S": 51
, "Hyundai|Ioniq Electric": 48
, "Tesla|Model X": 46
, "Jaguar|I-Pace": 42
, "Peugeot|Partner Electric": 37
, "Citroën|E-Mehari": 27
, "Smart|Forfour ED": 21
, "Nissan|e-NV200": 9
, "Volkswagen|e-up!": 9
, "Citroën|Berlingo Electric": 7
, "Kia|Soul EV": 1
, "other": 798
});

db.insert(db.countries.FR, "2019-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/05/2019_04_vpfrance.pdf",
{ "Peugeot": 34117
, "Renault": 31494
, "Citroën": 21874
, "Volkswagen": 12676
, "Dacia": 12501
, "Toyota": 8222
, "Opel": 6622
, "Fiat": 6476
, "Ford": 6371
, "Mercedes-Benz": 5503
, "Audi": 5043
, "BMW": 5037
, "Kia": 4191
, "Hyundai": 3317
, "Nissan": 3315
, "Seat": 3260
, "Škoda": 3007
, "Suzuki": 2662
, "Mini": 2371
, "DS Automobiles": 1948
, "Volvo": 1527
, "Jeep": 964
, "Mazda": 887
, "Land Rover": 677
, "Lexus": 671
, "Smart": 551
, "Mitsubishi": 540
, "Honda": 510
, "Jaguar": 370
, "Porsche": 352
, "Tesla": 305
, "Alfa Romeo": 292
, "Maserati": 38
, "Subaru": 21
, "Infiniti": 20
, "Chevrolet": 10
, "SsangYong": 9
, "other": 444
});

db.insert(db.countries.FR, "2019-04", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/155715869983878c91171338902e0fe0fb97a8c47a-immats-mai-2019.pdf",
{ "Renault|Zoé": 1543
, "Nissan|Leaf": 347
, "Tesla|Model 3": 251
, "Kia|Niro EV": 239
, "BMW|i3 BEV": 202
, "Hyundai|Kona Electric": 161
, "Smart|Fortwo ED": 110
, "Peugeot|iOn": 58
, "Citroën|C-Zero": 53
, "Jaguar|I-Pace": 53
, "Smart|Forfour ED": 51
, "Hyundai|Ioniq Electric": 47
, "Volkswagen|e-Golf": 38
, "Tesla|Model S": 33
, "Audi|e-tron": 22
, "Tesla|Model X": 21
, "Citroën|E-Mehari": 16
, "Volkswagen|e-up!": 12
, "Citroën|Berlingo Electric": 36
, "Kia|Soul EV": 10
, "Peugeot|Partner Electric": 39
, "Nissan|e-NV200": 64
, "Renault|Kangoo Z.E.": 371
, "other": 138
});

db.insert(db.countries.FR, "2019-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/06/2019_05_vpfrance.pdf",
{ "Renault": 36026
, "Peugeot": 34838
, "Citroën": 21127
, "Dacia": 13002
, "Volkswagen": 11487
, "Toyota": 8835
, "Fiat": 7615
, "Opel": 6809
, "Ford": 6541
, "Mercedes-Benz": 6201
, "BMW": 5568
, "Audi": 5281
, "Kia": 3842
, "Hyundai": 3354
, "Škoda": 3159
, "Nissan": 3110
, "Seat": 3024
, "DS Automobiles": 2222
, "Suzuki": 2134
, "Mini": 1760
, "Volvo": 1454
, "Mazda": 873
, "Jeep": 865
, "Smart": 645
, "Land Rover": 621
, "Lexus": 573
, "Honda": 554
, "Mitsubishi": 498
, "Porsche": 435
, "Tesla": 413
, "Jaguar": 308
, "Alfa Romeo": 289
, "Subaru": 42
, "Maserati": 23
, "Chevrolet": 12
, "Infiniti": 7
, "SsangYong": 6
, "other": 395
});

db.insert(db.countries.FR, "2019-05", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15598367646482fda3e8e139d80cbbc783c7550665-immats-juin-2019.pdf",
{ "Renault|Zoé": 1409
, "Tesla|Model 3": 321
, "Nissan|Leaf": 172
, "BMW|i3 BEV": 160
, "Kia|Niro EV": 152
, "Hyundai|Kona Electric": 141
, "Smart|Fortwo ED": 78
, "Citroën|C-Zero": 58
, "Tesla|Model S": 50
, "Tesla|Model X": 42
, "Jaguar|I-Pace": 39
, "Peugeot|iOn": 32
, "Kia|Soul EV": 30
, "Hyundai|Ioniq Electric": 28
, "Volkswagen|e-Golf": 28
, "Volkswagen|e-up!": 24
, "Smart|Forfour ED": 15
, "Audi|e-tron": 13
, "Citroën|E-Mehari": 7
, "Citroën|Berlingo Electric": 26
, "Peugeot|Partner Electric": 61
, "Nissan|e-NV200": 66
, "Renault|Kangoo Z.E.": 297
, "other": 122
});

db.insert(db.countries.FR, "2019-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/07/2019_06_vpfrance.pdf",
{ "Renault": 51654
, "Peugeot": 36595
, "Citroën": 22876
, "Volkswagen": 15963
, "Dacia": 15330
, "Toyota": 9912
, "Fiat": 8717
, "Ford": 7856
, "Audi": 6905
, "Mercedes-Benz": 6527
, "Opel": 6225
, "BMW": 4321
, "Nissan": 4109
, "Kia": 3924
, "Seat": 3809
, "DS Automobiles": 3591
, "Hyundai": 3502
, "Škoda": 3242
, "Suzuki": 2633
, "Mini": 2234
, "Volvo": 1853
, "Jeep": 1398
, "Tesla": 1285
, "Mazda": 1172
, "Land Rover": 739
, "Honda": 734
, "Mitsubishi": 710
, "Porsche": 658
, "Smart": 657
, "Lexus": 623
, "Alfa Romeo": 406
, "Jaguar": 375
, "Subaru": 30
, "Maserati": 27
, "SsangYong": 14
, "Infiniti": 13
, "Chevrolet": 5
, "other": 340
});

db.insert(db.countries.FR, "2019-06", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15627732242408730ad248ad4e4aa36fb14f5e0631-immats%20juin%202019.pdf",
{ "Renault|Zoé": 2135
, "Tesla|Model 3": 1097
, "Nissan|Leaf": 332
, "Hyundai|Kona Electric": 189
, "BMW|i3 BEV": 179
, "Kia|Niro EV": 159
, "Tesla|Model S": 108
, "Smart|Fortwo ED": 87
, "Tesla|Model X": 80
, "Citroën|C-Zero": 76
, "Renault|Kangoo Z.E.": 392
, "Nissan|e-NV200": 121
, "Peugeot|Partner Electric": 52
, "Citroën|Berlingo Electric": 41
, "other": 430
});

db.insert(db.countries.FR, "2019-07", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/08/2019_07_vpfrance.pdf",
{ "Peugeot": 30807
, "Renault": 23662
, "Citroën": 19823
, "Volkswagen": 13056
, "Dacia": 9928
, "Toyota": 9522
, "Ford": 6002
, "Fiat": 5323
, "Mercedes-Benz": 5269
, "Opel": 5206
, "Audi": 5130
, "BMW": 4186
, "Kia": 3859
, "Hyundai": 3677
, "Seat": 3329
, "Nissan": 3150
, "Škoda": 2947
, "Suzuki": 2886
, "DS Automobiles": 2646
, "Mini": 2234
, "Jeep": 1761
, "Volvo": 1646
, "Smart": 888
, "Mazda": 845
, "Lexus": 741
, "Land Rover": 671
, "Honda": 611
, "Mitsubishi": 462
, "Porsche": 417
, "Tesla": 356
, "Alfa Romeo": 308
, "Jaguar": 266
, "Subaru": 54
, "Infiniti": 54
, "Maserati": 42
, "SsangYong": 12
, "Chevrolet": 6
, "other": 443
});

db.insert(db.countries.FR, "2019-07", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1568280460e03fa2a94992bba0db1deea2e706abf8-immats-ete-2019.pdf (because July and August are combined, halves are used)",
{ "Renault|Zoé": 1235
, "Nissan|Leaf": 321
, "Tesla|Model 3": 259
, "BMW|i3 BEV": 170
, "Hyundai|Kona Electric": 99
, "Kia|Niro EV": 93
, "Smart|Fortwo ED": 67
, "Kia|Soul EV": 45
, "Tesla|Model S": 35
, "Smart|Forfour ED": 33
, "Renault|Kangoo Z.E.": 322
, "Nissan|e-NV200": 41
, "Peugeot|Partner Electric": 25
, "Citroën|Berlingo Electric": 23
, "other": 428
});

db.insert(db.countries.FR, "2019-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/09/2019_08_vpfrance.pdf",
{ "Peugeot": 19695
, "Renault": 18718
, "Citroën": 12911
, "Volkswagen": 8542
, "Dacia": 8050
, "Toyota": 6784
, "Suzuki": 5408
, "Mercedes-Benz": 4734
, "Ford": 4148
, "Audi": 3807
, "Fiat": 3432
, "Opel": 3310
, "Smart": 3193
, "Nissan": 3182
, "BMW": 2961
, "Seat": 2956
, "Kia": 2721
, "Škoda": 2416
, "Hyundai": 2082
, "Mini": 1667
, "DS Automobiles": 1501
, "Mitsubishi": 1309
, "Volvo": 954
, "Jeep": 815
, "Mazda": 751
, "Honda": 599
, "Lexus": 566
, "Land Rover": 440
, "Tesla": 293
, "Porsche": 287
, "Alfa Romeo": 214
, "Jaguar": 156
, "Subaru": 64
, "Maserati": 29
, "Infiniti": 22
, "SsangYong": 12
, "Chevrolet": 1
, "other": 527
});

db.insert(db.countries.FR, "2019-08", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1568280460e03fa2a94992bba0db1deea2e706abf8-immats-ete-2019.pdf (because July and August are combined, halves are used)",
{ "Renault|Zoé": 1235
, "Nissan|Leaf": 321
, "Tesla|Model 3": 259
, "BMW|i3 BEV": 170
, "Hyundai|Kona Electric": 99
, "Kia|Niro EV": 93
, "Smart|Fortwo ED": 67
, "Kia|Soul EV": 45
, "Tesla|Model S": 35
, "Smart|Forfour ED": 33
, "Renault|Kangoo Z.E.": 322
, "Nissan|e-NV200": 41
, "Peugeot|Partner Electric": 25
, "Citroën|Berlingo Electric": 23
, "other": 428
});

db.insert(db.countries.FR, "2019-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/10/2019_09_vpfrance.pdf",
{ "Renault": 36487
, "Peugeot": 30281
, "Citroën": 18710
, "Volkswagen": 10001
, "Dacia": 9134
, "Toyota": 8015
, "Opel": 6488
, "Ford": 5911
, "Mercedes-Benz": 5450
, "Fiat": 5348
, "BMW": 4662
, "Kia": 3542
, "Hyundai": 3528
, "Audi": 3107
, "Škoda": 3042
, "Seat": 2968
, "Nissan": 2738
, "Mini": 2376
, "DS Automobiles": 2142
, "Volvo": 2009
, "Suzuki": 1207
, "Mazda": 1191
, "Tesla": 1165
, "Honda": 696
, "Jeep": 672
, "Land Rover": 555
, "Lexus": 481
, "Porsche": 370
, "Mitsubishi": 306
, "Jaguar": 272
, "Smart": 234
, "Alfa Romeo": 213
, "Maserati": 12
, "SsangYong": 10
, "Subaru": 9
, "Chevrolet": 2
, "other": 266
});

db.insert(db.countries.FR, "2019-09", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1570545565f08eb0fd30ec313709d8c39f8fe20075-immats-octobre-2019.pdf",
{ "Renault|Zoé": 2470
, "Nissan|Leaf": 642
, "Tesla|Model 3": 518
, "BMW|i3 BEV": 340
, "Hyundai|Kona Electric": 199
, "Kia|Niro EV": 187
, "Smart|Fortwo ED": 135
, "Kia|Soul EV": 91
, "Tesla|Model S": 70
, "Smart|Forfour ED": 67
, "Renault|Kangoo Z.E.": 644
, "Nissan|e-NV200": 82
, "Peugeot|Partner Electric": 51
, "Citroën|Berlingo Electric": 46
});

db.insert(db.countries.FR, "2019-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/11/2019_10_vpfrance.pdf",
{ "Renault": 34667
, "Peugeot": 33775
, "Citroën": 21477
, "Dacia": 12431
, "Volkswagen": 11938
, "Toyota": 10365
, "Ford": 6449
, "BMW": 5568
, "Fiat": 5555
, "Mercedes-Benz": 5490
, "Opel": 4241
, "Audi": 4008
, "Hyundai": 3981
, "Kia": 3929
, "Seat": 3422
, "Nissan": 3296
, "Škoda": 3030
, "DS Automobiles": 2665
, "Mini": 2547
, "Volvo": 2009
, "Suzuki": 1601
, "Mazda": 942
, "Jeep": 935
, "Porsche": 659
, "Smart": 658
, "Land Rover": 658
, "Mitsubishi": 541
, "Lexus": 540
, "Honda": 540
, "Alfa Romeo": 332
, "Jaguar": 277
, "Tesla": 192
, "Subaru": 37
, "SsangYong": 26
, "Maserati": 20
, "Infiniti": 16
, "Chevrolet": 1
, "other": 169
});

db.insert(db.countries.FR, "2019-10", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/157313247269f0fce55475a3683d0110d1960f1837-barometre%20octobre%202019.pdf",
{ "Renault|Zoé": 1939
, "Smart|Fortwo ED": 491
, "Nissan|Leaf": 363
, "Kia|Niro EV": 253
, "BMW|i3 BEV": 240
, "Tesla|Model 3": 178
, "Hyundai|Ioniq Electric": 174
, "Hyundai|Kona Electric": 122
, "DS Automobiles|DS 3 Crossback E-Tense": 110
, "Volkswagen|e-Golf": 105
, "Renault|Kangoo Z.E.": 302
, "Nissan|e-NV200": 121
, "Peugeot|e-208": 54
, "Citroën|Berlingo Electric": 42
, "Peugeot|Partner Electric": 23
, "other": 562
});

db.insert(db.countries.FR, "2019-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2019/11/2019_11_vpfrance.pdf",
{ "Renault": 32614
, "Peugeot": 31509
, "Citroën": 17181
, "Volkswagen": 12134
, "Dacia": 9770
, "Toyota": 7749
, "Ford": 6259
, "Mercedes-Benz": 6065
, "BMW": 5884
, "Fiat": 4917
, "Audi": 4710
, "Opel": 3801
, "Hyundai": 3600
, "Nissan": 3392
, "Škoda": 3276
, "Kia": 3262
, "Seat": 3200
, "DS Automobiles": 2011
, "Mini": 1956
, "Volvo": 1731
, "Suzuki": 1464
, "Mazda": 1131
, "Jeep": 723
, "Mitsubishi": 685
, "Land Rover": 656
, "Porsche": 616
, "Honda": 598
, "Lexus": 529
, "Alfa Romeo": 349
, "Tesla": 271
, "Jaguar": 183
, "Smart": 170
, "Subaru": 30
, "Maserati": 28
, "SsangYong": 11
, "Infiniti": 7
, "Chevrolet": 1
, "other": 258
});

db.insert(db.countries.FR, "2019-11", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1575639106b8246659af0aba2bf961bc2e285f68f8-barometre%20decembre%202019.pdf",
{ "Renault|Zoé": 1923
, "BMW|i3 BEV": 324
, "Nissan|Leaf": 241
, "Tesla|Model 3": 225
, "Nissan|e-NV200": 170
, "Smart|Fortwo ED": 106
, "Hyundai|Kona Electric": 77
, "Volkswagen|e-Golf": 75
, "Hyundai|Ioniq Electric": 32
, "Audi|e-tron": 31
, "Renault|Kangoo Z.E.": 277
, "Peugeot|Partner Electric": 32
, "Citroën|Berlingo Electric": 18
, "other": 276
});

db.insert(db.countries.FR, "2019-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/01/2019_12_vpfrance.pdf",
{ "Renault": 39747
, "Peugeot": 29268
, "Citroën": 17905
, "Volkswagen": 16205
, "Dacia": 13215
, "Mercedes-Benz": 9685
, "BMW": 8353
, "Toyota": 7899
, "Ford": 7428
, "Audi": 6909
, "Fiat": 6512
, "Nissan": 4750
, "Kia": 4668
, "Škoda": 4373
, "Hyundai": 3327
, "Seat": 3284
, "Opel": 3204
, "Mini": 3203
, "Volvo": 3047
, "Suzuki": 3029
, "DS Automobiles": 2682
, "Mazda": 1553
, "Smart": 1472
, "Tesla": 1435
, "Land Rover": 1229
, "Porsche": 1124
, "Jeep": 1008
, "Lexus": 997
, "Honda": 895
, "Mitsubishi": 710
, "Alfa Romeo": 628
, "Jaguar": 536
, "Subaru": 168
, "Maserati": 114
, "Infiniti": 36
, "SsangYong": 33
, "Chevrolet": 2
, "other": 561
});

db.insert(db.countries.FR, "2019-12", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1578561037dfcf28d0734569a6a693bc8194de62bf-BILANANNUEL2019.pdf",
{ "Renault|Zoé": 2146
, "Tesla|Model 3": 1250
, "BMW|i3 BEV": 475
, "Nissan|Leaf": 222
, "Smart|Fortwo ED": 159
, "Tesla|Model S": 102
, "Tesla|Model X": 83
, "Volkswagen|e-Golf": 80
, "Jaguar|I-Pace": 74
, "Audi|e-tron": 53
, "Renault|Kangoo Z.E.": 350
, "Nissan|e-NV200": 105
, "Citroën|Berlingo Electric": 25
, "Peugeot|Partner Electric": 24
, "Peugeot|iOn": 6
, "other": 299
});

db.insert(db.countries.FR, "2020-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/02/2020_01_vpfrance-1.pdf",
{ "Peugeot": 29246
, "Renault": 23884
, "Citroën": 15634
, "Toyota": 9716
, "Volkswagen": 7040
, "Dacia": 5852
, "Opel": 4268
, "Ford": 3917
, "BMW": 3285
, "Nissan": 3277
, "Fiat": 3095
, "Kia": 2931
, "Audi": 2785
, "Hyundai": 2682
, "DS Automobiles": 2469
, "Mercedes-Benz": 2412
, "Seat": 2332
, "Škoda": 2310
, "Suzuki": 1431
, "Mini": 1424
, "Volvo": 771
, "Mazda": 673
, "Lexus": 523
, "Land Rover": 444
, "Honda": 418
, "Porsche": 323
, "Mitsubishi": 266
, "Jeep": 248
, "Tesla": 170
, "Alfa Romeo": 164
, "Jaguar": 127
, "Smart": 77
, "Subaru": 4
, "Maserati": 3
, "SsangYong": 1
, "Chevrolet": 1
, "other": 26
});

db.insert(db.countries.FR, "2020-01", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15810701345ba87c5934635d85077d6afe8094f115-bilan_janvier_2020.pdf",
{ "Renault|Zoé": 5471
, "Peugeot|e-208": 2644
, "DS Automobiles|DS 3 Crossback E-Tense": 597
, "Kia|Niro EV": 429
, "Citroën|C-Zero": 414
, "Nissan|Leaf": 360
, "Hyundai|Kona Electric": 248
, "BMW|i3 BEV": 137
, "Škoda|Citigo-e": 124
, "Tesla|Model 3": 124
, "Renault|Kangoo Z.E.": 193
, "Nissan|e-NV200": 82
, "Citroën|Berlingo Electric": 38
, "Peugeot|Partner Electric": 34
, "other": 734
});

db.insert(db.countries.FR, "2020-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/03/2020_02_vpfrance.pdf",
{ "Peugeot": 32326
, "Renault": 28863
, "Citroën": 18735
, "Volkswagen": 9667
, "Toyota": 8625
, "Dacia": 7619
, "Opel": 6216
, "BMW": 5402
, "Ford": 4948
, "Audi": 4926
, "Mercedes-Benz": 4860
, "Nissan": 4343
, "Fiat": 4089
, "Hyundai": 4040
, "Kia": 3644
, "Seat": 2893
, "Škoda": 2726
, "Mini": 1601
, "Volvo": 1559
, "Suzuki": 1558
, "Tesla": 1047
, "Mazda": 732
, "Honda": 671
, "Lexus": 667
, "Land Rover": 652
, "Jeep": 440
, "Porsche": 429
, "Mitsubishi": 297
, "Jaguar": 270
, "Alfa Romeo": 136
, "Smart": 118
, "Subaru": 23
, "Maserati": 3
, "other": 6128
});

db.insert(db.countries.FR, "2020-02", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1583508368d6ec42e0ea5eb1f7c37fcb43d7cfba48-bilan_fevrier_2020.pdf",
{ "Renault|Zoé": 3169
, "Peugeot|e-208": 2500
, "Tesla|Model 3": 1025
, "DS Automobiles|DS 3 Crossback E-Tense": 517
, "Hyundai|Kona Electric": 414
, "Nissan|Leaf": 283
, "Kia|Niro EV": 278
, "Opel|Corsa-e": 165
, "Citroën|C-Zero": 162
, "BMW|i3 BEV": 153
, "Renault|Kangoo Z.E.": 313
, "Nissan|e-NV200": 97
, "Citroën|Berlingo Electric": 29
, "Peugeot|Partner Electric": 18
, "Peugeot|iOn": 4
, "other": 1029
});

db.insert(db.countries.FR, "2020-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/03/2020_03_vpfrance.pdf",
{ "Renault": 14461
, "Peugeot": 11381
, "Citroën": 5390
, "Toyota": 3545
, "Dacia": 3107
, "Volkswagen": 2955
, "Kia": 2007
, "Ford": 1857
, "Mercedes-Benz": 1722
, "Tesla": 1580
, "Hyundai": 1572
, "BMW": 1532
, "Fiat": 1357
, "Audi": 1345
, "Mini": 1304
, "DS Automobiles": 1241
, "Nissan": 1235
, "Opel": 829
, "Škoda": 807
, "Volvo": 775
, "Seat": 603
, "Mazda": 419
, "Suzuki": 331
, "Mitsubishi": 283
, "Porsche": 237
, "Jeep": 165
, "Lexus": 154
, "Land Rover": 129
, "Honda": 113
, "Alfa Romeo": 60
, "Smart": 55
, "Jaguar": 31
, "Subaru": 6
, "SsangYong": 6
, "Maserati": 2
, "Infiniti": 1
, "other": 97
});

db.insert(db.countries.FR, "2020-03", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1586339557fdd064f408becd3e4d6cd093e807fa4d-barometre-mensuel-de-la-mobilite-electrique-mars-2020.pdf",
{ "Renault|Zoé": 1814
, "Tesla|Model 3": 1385
, "Peugeot|e-208": 756
, "DS Automobiles|DS 3 Crossback E-Tense": 210
, "Mini|Cooper SE Electric": 179
, "Nissan|Leaf": 154
, "Kia|Niro EV": 152
, "Hyundai|Kona Electric": 153
, "Volkswagen|e-up!": 119
, "Tesla|Model S": 111
, "Renault|Kangoo Z.E.": 227
, "Citroën|Berlingo Electric": 4
, "other": 668
});

db.insert(db.countries.FR, "2020-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/05/2020_04_vpfrance.pdf",
{ "Renault": 5910
, "Peugeot": 5237
, "Citroën": 3513
, "Dacia": 1227
, "Opel": 914
, "Ford": 553
, "Volkswagen": 511
, "DS Automobiles": 434
, "Fiat": 357
, "BMW": 276
, "Toyota": 274
, "Škoda": 266
, "Tesla": 216
, "Audi": 183
, "Mini": 170
, "Kia": 152
, "Hyundai": 113
, "Seat": 109
, "Mercedes-Benz": 101
, "Suzuki": 84
, "Volvo": 71
, "Nissan": 71
, "Jeep": 50
, "Mazda": 45
, "Porsche": 33
, "Land Rover": 25
, "Mitsubishi": 22
, "Alfa Romeo": 19
, "Jaguar": 14
, "Lexus": 12
, "Honda": 8
, "Smart": 5
, "SsangYong": 1
, "other": 64
});

db.insert(db.countries.FR, "2020-04", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15888552657b04f6d7082af7596a357fe91565b4f2-barometre-mensuel-de-la-mobilite-electrique-avril-2020.pdf",
{ "Peugeot|e-208": 360
, "Renault|Zoé": 322
, "Tesla|Model 3": 189
, "Citroën|C-Zero": 89
, "DS Automobiles|DS 3 Crossback E-Tense": 50
, "Mini|Cooper SE Electric": 31
, "Opel|Corsa-e": 26
, "Peugeot|e-2008": 18
, "Hyundai|Kona Electric": 16
, "Tesla|Model S": 14
, "Renault|Kangoo Z.E.": 35
, "Citroën|Berlingo Electric": 33
, "Mercedes-Benz|eVito": 6
, "Nissan|e-NV200": 3
, "Peugeot|Partner Electric": 2
, "other": 123
});

db.insert(db.countries.FR, "2020-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/06/2020_05_vpfrance.pdf",
{ "Renault": 18041
, "Peugeot": 15214
, "Citroën": 9567
, "Dacia": 6352
, "Volkswagen": 6236
, "Toyota": 6055
, "Ford": 3431
, "Mercedes-Benz": 3077
, "Audi": 2952
, "BMW": 2687
, "Opel": 2595
, "Kia": 2504
, "Hyundai": 2336
, "Fiat": 2247
, "Škoda": 1987
, "Mini": 1932
, "Seat": 1727
, "Nissan": 1634
, "DS Automobiles": 1176
, "Volvo": 1052
, "Mazda": 615
, "Suzuki": 611
, "Porsche": 353
, "Lexus": 273
, "Jeep": 272
, "Tesla": 269
, "Land Rover": 268
, "Honda": 252
, "Mitsubishi": 210
, "Alfa Romeo": 125
, "Smart": 75
, "Jaguar": 73
, "Subaru": 3
, "SsangYong": 2
, "other": 115
});

db.insert(db.countries.FR, "2020-05", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15919479677694f4a66316e53c8cdd9d9954bd611d-barometre-mensuel-de-la-mobilite-electrique-mai-2020.pdf",
{ "Renault|Zoé": 1313
, "Peugeot|e-208": 679
, "Hyundai|Kona Electric": 351
, "Citroën|C-Zero": 247
, "Tesla|Model 3": 219
, "Kia|Niro EV": 205
, "Mini|Cooper SE Electric": 191
, "Peugeot|e-2008": 151
, "BMW|i3 BEV": 122
, "Nissan|Leaf": 113
, "Renault|Kangoo Z.E.": 128
, "Nissan|e-NV200": 35
, "Volkswagen|e-Crafter": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Seat|Mii Electric": 2
, "other": 746
});

db.insert(db.countries.FR, "2020-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/07/2020_06_vpfrance.pdf",
{ "Renault": 54961
, "Peugeot": 34507
, "Citroën": 20929
, "Dacia": 16573
, "Volkswagen": 13714
, "Toyota": 11361
, "Ford": 9810
, "Mercedes-Benz": 9391
, "BMW": 6156
, "Audi": 6140
, "Fiat": 5504
, "Opel": 5341
, "Kia": 5042
, "Hyundai": 4413
, "Suzuki": 4085
, "Nissan": 3997
, "Škoda": 3895
, "Seat": 3844
, "Mini": 2862
, "DS Automobiles": 2174
, "Volvo": 2129
, "Mazda": 1302
, "Lexus": 929
, "Mitsubishi": 838
, "Tesla": 728
, "Porsche": 615
, "Jeep": 607
, "Land Rover": 544
, "Honda": 521
, "Alfa Romeo": 250
, "Smart": 233
, "Jaguar": 152
, "Subaru": 9
, "SsangYong": 9
, "Maserati": 4
, "other": 247
});

db.insert(db.countries.FR, "2020-06", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1594205177ec599f8e4fb76b7ada0373696c9cf556-barometre-mensuel-de-la-mobilite-electrique-juin-2020.pdf",
{ "Renault|Zoé": 6412
, "Peugeot|e-208": 2220
, "Hyundai|Kona Electric": 674
, "Tesla|Model 3": 620
, "Citroën|C-Zero": 548
, "Nissan|Leaf": 494
, "Kia|Niro EV": 456
, "Peugeot|e-2008": 406
, "Volkswagen|e-up!": 397
, "Opel|Corsa-e": 300
, "Renault|Kangoo Z.E.": 778
, "Nissan|e-NV200": 86
, "Volkswagen|e-Crafter": 71
, "Citroën|Berlingo Electric": 47
, "Peugeot|Partner Electric": 10
, "other": 1804
});

db.insert(db.countries.FR, "2020-07", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/08/2020_07_vpfrance.pdf",
{ "Renault": 33481
, "Peugeot": 32736
, "Citroën": 15835
, "Dacia": 11397
, "Toyota": 10959
, "Volkswagen": 9730
, "Ford": 6278
, "Fiat": 5252
, "Kia": 5054
, "Opel": 4579
, "Audi": 4477
, "Mercedes-Benz": 4430
, "Hyundai": 4426
, "Nissan": 4112
, "BMW": 4104
, "Škoda": 3586
, "Seat": 3336
, "Suzuki": 2605
, "DS Automobiles": 2214
, "Mini": 2114
, "Volvo": 1999
, "Mitsubishi": 1092
, "Mazda": 873
, "Jeep": 854
, "Honda": 721
, "Lexus": 694
, "Porsche": 486
, "Land Rover": 444
, "Alfa Romeo": 219
, "Smart": 174
, "Tesla": 148
, "Jaguar": 125
, "SsangYong": 11
, "Maserati": 8
, "Subaru": 4
, "other": 425
});

db.insert(db.countries.FR, "2020-07", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Site/Article/?article_id=7905, http://ev-sales.blogspot.com/2020/09/france-august-2020.html",
{ "Renault|Zoé": 4018
, "Peugeot|e-208": 1326
, "Hyundai|Kona Electric": 780
, "Kia|Niro EV": 609
, "Nissan|Leaf": 722
, "Peugeot|e-2008": 445
, "Volkswagen|e-up!": 309
, "DS Automobiles|DS 3 Crossback E-Tense": 288
, "Mini|Cooper SE Electric": 209
, "Tesla|Model 3": 119
, "Renault|Kangoo Z.E.": 137
, "Citroën|Berlingo Electric": 45
, "Volkswagen|e-Crafter": 41
, "Nissan|e-NV200": 38
});

db.insert(db.countries.FR, "2020-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/09/2020_08_vpfrance.pdf",
{ "Peugeot": 18997
, "Renault": 14158
, "Citroën": 11190
, "Dacia": 7538
, "Toyota": 6945
, "Volkswagen": 4251
, "Ford": 4072
, "Mercedes-Benz": 3316
, "Opel": 3188
, "Fiat": 3072
, "Kia": 3046
, "Audi": 2990
, "BMW": 2949
, "Hyundai": 2899
, "Seat": 2306
, "Nissan": 2205
, "Škoda": 1900
, "Suzuki": 1520
, "Mini": 1476
, "Volvo": 1014
, "DS Automobiles": 893
, "Mazda": 555
, "Honda": 545
, "Mitsubishi": 532
, "Jeep": 479
, "Lexus": 377
, "Tesla": 269
, "Porsche": 249
, "Land Rover": 162
, "Alfa Romeo": 142
, "Smart": 121
, "Jaguar": 77
, "SsangYong": 17
, "Subaru": 12
, "Maserati": 10
, "other": 161
});

db.insert(db.countries.FR, "2020-08", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Site/Article/?article_id=7905, http://ev-sales.blogspot.com/2020/09/france-august-2020.html",
{ "Renault|Zoé": 1618
, "Peugeot|e-208": 697
, "Tesla|Model 3": 261
, "Hyundai|Kona Electric": 520
, "Kia|Niro EV": 620
, "Nissan|Leaf": 235
, "DS Automobiles|DS 3 Crossback E-Tense": 106
, "Citroën|C-Zero": 10
, "Mini|Cooper SE Electric": 209
, "Peugeot|e-2008": 202
, "Volkswagen|e-up!": 133
, "Renault|Kangoo Z.E.": 138
, "Citroën|Berlingo Electric": 46
, "Volkswagen|e-Crafter": 42
, "Nissan|e-NV200": 39
, "other": 714
});

db.insert(db.countries.FR, "2020-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/10/2020_09_vpfrance.pdf",
{ "Peugeot": 32308
, "Renault": 30634
, "Citroën": 16779
, "Dacia": 12320
, "Volkswagen": 9272
, "Toyota": 8484
, "Ford": 6160
, "Mercedes-Benz": 5303
, "Fiat": 4885
, "Opel": 4430
, "Audi": 4338
, "BMW": 3998
, "Kia": 3660
, "Hyundai": 3337
, "Nissan": 3093
, "Škoda": 3081
, "Seat": 2862
, "Suzuki": 2249
, "Mini": 1938
, "DS Automobiles": 1599
, "Volvo": 1433
, "Tesla": 1267
, "Mazda": 1179
, "Jeep": 839
, "Honda": 667
, "Lexus": 442
, "Mitsubishi": 401
, "Land Rover": 359
, "Porsche": 272
, "Alfa Romeo": 262
, "Smart": 180
, "Jaguar": 66
, "SsangYong": 16
, "Subaru": 11
, "Maserati": 9
, "other": 157
});

db.insert(db.countries.FR, "2020-09", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/160250351194dd331f23f5dee3187185b9047eb9e5-barometre-mensuel-de-la-mobilite-electrique-septembre-2020(5).pdf, http://ev-sales.blogspot.com/2020/10/france-september-2020.html",
{ "Renault|Zoé": 3007
, "Peugeot|e-208": 1291
, "Tesla|Model 3": 1083
, "Volkswagen|ID.3": 616
, "Kia|Niro EV": 583
, "Hyundai|Kona Electric": 559
, "Opel|Corsa-e": 400
, "Peugeot|e-2008": 376
, "Mini|Cooper SE Electric": 239
, "Nissan|Leaf": 217
, "Renault|Kangoo Z.E.": 251
, "DS Automobiles|DS 3 Crossback E-Tense": 175
, "Nissan|e-NV200": 61
, "Citroën|C-Zero": 1
, "other": 1862
});

db.insert(db.countries.FR, "2020-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/11/2020-10-vpfrance.pdf",
{ "Peugeot": 34499
, "Renault": 33043
, "Citroën": 18881
, "Volkswagen": 10620
, "Dacia": 9535
, "Toyota": 6939
, "Mercedes-Benz": 5361
, "Opel": 5097
, "Audi": 4724
, "Ford": 4696
, "Kia": 4318
, "Fiat": 4082
, "BMW": 3979
, "Hyundai": 3593
, "Škoda": 3012
, "Nissan": 3009
, "Seat": 2448
, "Suzuki": 2294
, "Mini": 2262
, "DS Automobiles": 1953
, "Volvo": 1656
, "Mazda": 881
, "Honda": 769
, "Jeep": 708
, "Land Rover": 594
, "Lexus": 500
, "Porsche": 346
, "Alfa Romeo": 283
, "Mitsubishi": 227
, "Smart": 192
, "Tesla": 107
, "Jaguar": 84
, "SsangYong": 32
, "Maserati": 11
, "Subaru": 9
, "other": 308
});

db.insert(db.countries.FR, "2020-10", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/160502708592eb5ffee6ae2fec3ad71c777531578f-barometre-mensuel-de-la-mobilite-electrique-octobre-2020(8).pdf",
{ "Renault|Zoé": 2609
, "Peugeot|e-208": 2059
, "Renault|Twingo Z.E.": 678
, "Kia|Niro EV": 678
, "Hyundai|Kona Electric": 627
, "Volkswagen|ID.3": 524
, "Peugeot|e-2008": 460
, "Mini|Cooper SE Electric": 425
, "Opel|Corsa-e": 316
, "Nissan|Leaf": 181
, "Volkswagen|e-Crafter": 52
, "Nissan|e-NV200": 47
, "other": 2329
});

db.insert(db.countries.FR, "2020-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2020/12/2020-11-vpfrance.pdf",
{ "Peugeot": 25310
, "Renault": 21271
, "Citroën": 11485
, "Volkswagen": 9298
, "Toyota": 6932
, "Dacia": 6653
, "Mercedes-Benz": 4943
, "BMW": 4127
, "Audi": 4072
, "Ford": 3646
, "Fiat": 3080
, "Kia": 3014
, "Opel": 2981
, "Škoda": 2510
, "Nissan": 2081
, "DS Automobiles": 1996
, "Mini": 1975
, "Seat": 1699
, "Hyundai": 1578
, "Volvo": 1460
, "Suzuki": 1159
, "Land Rover": 757
, "Jeep": 632
, "Mazda": 591
, "Tesla": 537
, "Porsche": 426
, "Lexus": 357
, "Honda": 352
, "Alfa Romeo": 244
, "Smart": 221
, "Mitsubishi": 201
, "Jaguar": 51
, "SsangYong": 48
, "Subaru": 11
, "Maserati": 11
, "other": 340
});

db.insert(db.countries.FR, "2020-11", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/16076131731061bf930edb9ea8a6a642dae6cff744-barometre-des-immatriculations-novembre-2020(1).pdf, http://ev-sales.blogspot.com/2020/12/france-november-2020.html",
{ "Renault|Zoé": 3029
, "Peugeot|e-208": 1325
, "Volkswagen|e-up!": 520
, "Tesla|Model 3": 501
, "Volkswagen|ID.3": 497
, "Kia|Niro EV": 478
, "Mini|Cooper SE Electric": 405
, "Renault|Kangoo Z.E.": 360
, "Hyundai|Kona Electric": 342
, "Peugeot|e-2008": 342
, "Fiat|500e": 307
, "Nissan|e-NV200": 96
, "Volkswagen|e-Crafter": 59
, "other": 2288
});

db.insert(db.countries.FR, "2020-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2021/01/2020-12-vpfrance.pdf",
{ "Renault": 35923
, "Peugeot": 30174
, "Citroën": 14750
, "Volkswagen": 14490
, "Toyota": 9892
, "Dacia": 8997
, "Mercedes-Benz": 7654
, "BMW": 6983
, "Audi": 6428
, "Ford": 5851
, "Fiat": 5340
, "Nissan": 3906
, "Škoda": 3795
, "Kia": 3680
, "Hyundai": 3596
, "Opel": 3363
, "Mini": 2823
, "Seat": 2517
, "Volvo": 2493
, "DS Automobiles": 2438
, "Suzuki": 1724
, "Porsche": 1109
, "Jeep": 1087
, "Land Rover": 1078
, "Tesla": 1034
, "Mazda": 1025
, "Lexus": 985
, "Honda": 765
, "Mitsubishi": 643
, "Alfa Romeo": 468
, "Smart": 241
, "Jaguar": 239
, "Maserati": 74
, "SsangYong": 34
, "Subaru": 33
, "other": 693
});

db.insert(db.countries.FR, "2020-12", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/161011498173a9d7b7d55aef7bdda9008a7e50cb38-barometre-des-immatriculations-decembre-2020(9).pdf",
{ "Renault|Zoé": 6226
, "Volkswagen|ID.3": 2550
, "Dacia|Spring": 1721
, "Fiat|500e": 1454
, "Renault|Twingo Z.E.": 1353
, "Peugeot|e-208": 1314
, "Tesla|Model 3": 878
, "Kia|Niro EV": 601
, "Volkswagen|e-up!": 525
, "Hyundai|Kona Electric": 474
, "Renault|Kangoo Z.E.": 462
, "Volkswagen|e-Crafter": 66
, "Citroën|ë-Jumpy": 52
, "Nissan|e-NV200": 43
, "other": 4363
});

db.insert(db.countries.FR, "2021-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2021/02/2021-01-vpfrance.pdf",
{ "Peugeot": 26063
, "Renault": 18881
, "Citroën": 12314
, "Dacia": 11417
, "Toyota": 9050
, "Volkswagen": 7521
, "Ford": 4343
, "Kia": 3145
, "Hyundai": 3102
, "BMW": 3095
, "Opel": 2913
, "Audi": 2785
, "Škoda": 2580
, "Mercedes-Benz": 2486
, "Fiat": 2328
, "Seat": 2305
, "Nissan": 2281
, "Suzuki": 2080
, "Mini": 1706
, "DS Automobiles": 1634
, "Volvo": 1143
, "Mazda": 801
, "Jeep": 447
, "Lexus": 340
, "Honda": 340
, "Land Rover": 295
, "Porsche": 228
, "Smart": 109
, "Mitsubishi": 92
, "Tesla": 86
, "Alfa Romeo": 79
, "Jaguar": 61
, "SsangYong": 13
, "Maserati": 10
, "Subaru": 1
, "other": 306
});

db.insert(db.countries.FR, "2021-01", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1612448430b10b711437cc42c40123a8dbe2d70df1-barometre-des-immatriculations-janvier-2021(2).pdf",
{ "Peugeot|e-208": 1458
, "Renault|Zoé": 1162
, "Kia|Niro EV": 748
, "Renault|Kangoo Z.E.": 522
, "Hyundai|Kona Electric": 475
, "Fiat|500e": 382
, "Renault|Twingo Z.E.": 370
, "Peugeot|e-2008": 360
, "Opel|Corsa-e": 281
, "Mini|Cooper SE Electric": 172
, "Volkswagen|ID.3": 142
, "Nissan|e-NV200": 91
, "Peugeot|e-Expert": 69
, "Citroën|ë-Jumpy": 45
, "Volkswagen|e-Crafter": 21
, "Mercedes-Benz|eVito": 10
, "other": 1284
});

db.insert(db.countries.FR, "2021-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2021/03/2021-02-vpfrance.pdf",
{ "Peugeot": 26750
, "Renault": 18734
, "Citroën": 13947
, "Dacia": 9582
, "Toyota": 8155
, "Volkswagen": 7962
, "Ford": 4584
, "Mercedes-Benz": 3988
, "BMW": 3932
, "Kia": 3437
, "Hyundai": 3353
, "Audi": 3243
, "Nissan": 3087
, "Opel": 3026
, "Fiat": 2630
, "Škoda": 2559
, "Seat": 2286
, "Suzuki": 1899
, "DS Automobiles": 1716
, "Mini": 1677
, "Volvo": 1218
, "Tesla": 1175
, "Mazda": 840
, "Jeep": 576
, "Land Rover": 508
, "Honda": 380
, "Lexus": 295
, "Porsche": 213
, "Mitsubishi": 128
, "Jaguar": 106
, "Alfa Romeo": 89
, "Smart": 88
, "SsangYong": 16
, "Maserati": 4
, "other": 455
});

db.insert(db.countries.FR, "2021-02", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/16148675254882c35714c5f5852ab421daf7deaea9-Barom%C3%A8tre_immatriculations_v%C3%A9hicules_%C3%A9lectriques_PHEV%20-%20F%C3%A9vrier%202021.pdf",
{ "Peugeot|e-208": 1563
, "Tesla|Model 3": 1166
, "Renault|Zoé": 1194
, "Renault|Twingo Z.E.": 810
, "Fiat|500e": 645
, "Kia|Niro EV": 567
, "Peugeot|e-2008": 446
, "Volkswagen|ID.3": 361
, "Hyundai|Kona Electric": 300
, "Renault|Kangoo Z.E.": 239
, "Opel|Corsa-e": 221
, "Citroën|ë-Jumpy": 70
, "Peugeot|e-Expert": 37
, "Nissan|e-NV200": 33
, "other": 1498
});

db.insert(db.countries.FR, "2021-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2021/04/2021-03-vpfrance.pdf",
{ "Peugeot": 32510
, "Renault": 30019
, "Citroën": 19173
, "Volkswagen": 11272
, "Dacia": 9676
, "Toyota": 9504
, "Mercedes-Benz": 6212
, "Ford": 6168
, "Audi": 5515
, "BMW": 5237
, "Tesla": 4527
, "Fiat": 4474
, "Opel": 4441
, "Kia": 4227
, "Hyundai": 3966
, "Nissan": 3789
, "Škoda": 3257
, "Seat": 3119
, "Mini": 3016
, "Suzuki": 2614
, "DS Automobiles": 2436
, "Volvo": 1724
, "Jeep": 1276
, "Mazda": 1018
, "Land Rover": 700
, "Honda": 612
, "Lexus": 485
, "Porsche": 343
, "Smart": 234
, "Mitsubishi": 206
, "Alfa Romeo": 152
, "Jaguar": 148
, "SsangYong": 15
, "Subaru": 4
, "Maserati": 4
, "other": 701
});

db.insert(db.countries.FR, "2021-03", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1617812675df62b278d33dfa70c93458893a5480ca-Barometre_immats_Avere_France_mars_2021.pdf",
{ "Tesla|Model 3": 4524
, "Peugeot|e-208": 1739
, "Renault|Zoé": 1654
, "Renault|Twingo Z.E.": 1114
, "Fiat|500e": 838
, "Kia|Niro EV": 627
, "Volkswagen|ID.3": 527
, "Peugeot|e-2008": 509
, "Nissan|Leaf": 507
, "Mini|Cooper SE Electric": 499
, "Renault|Kangoo Z.E.": 426
, "Citroën|ë-Jumpy": 49
, "Nissan|e-NV200": 37
, "Peugeot|e-Expert": 34
, "other": 3483
});
