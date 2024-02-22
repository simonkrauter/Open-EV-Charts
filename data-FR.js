// Data sets for car sales in France

"use strict";

// https://ccfa.fr/immatriculations-commandes/
// https://www.avere-france.org/publications/?publication-type%5B%5D=barometres-immatriculations

db.insert(db.countries.FR, "2018-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_01_vpfrance.pdf",
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
, "Škoda": 2153
, "Seat": 2115
, "Mini": 2095
, "Volvo": 1185
, "Jeep": 883
, "Mazda": 656
, "Honda": 622
, "Land Rover": 464
, "Smart": 415
, "Porsche": 317
, "Jaguar": 225
, "Mitsubishi": 142
, "Subaru": 30
, "other": 4989
});

db.insert(db.countries.FR, "2018-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/1",
{ "Renault|Zoe": 633
, "Kia|Soul EV": 136
, "Smart|Fortwo ED": 98
, "BMW|i3 BEV": 83
, "Peugeot|iOn": 56
, "Nissan|Leaf": 48
, "Citroën|C-Zero": 43
, "Hyundai|Ioniq Electric": 42
, "Peugeot|Partner Electric": 40
, "Smart|Forfour ED": 27
, "Volkswagen|e-Golf": 16
, "Volkswagen|e-up!": 14
, "Citroën|ë-Berlingo Electric": 14
, "Tesla|Model S": 9
, "Nissan|e-NV200": 7
, "Citroën|E-Mehari": 7
, "Tesla|Model X": 3
, "other": 10
});

db.insert(db.countries.FR, "2018-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_02_vpfrance.pdf",
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
, "Seat": 2255
, "Škoda": 2189
, "Mini": 1975
, "Volvo": 1325
, "Jeep": 1048
, "Honda": 816
, "Mazda": 800
, "Land Rover": 558
, "Porsche": 418
, "Smart": 398
, "Jaguar": 379
, "Mitsubishi": 161
, "Tesla": 51
, "Subaru": 45
, "other": 5122
});

db.insert(db.countries.FR, "2018-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/2",
{ "Renault|Zoe": 1155
, "Nissan|Leaf": 306
, "BMW|i3 BEV": 82
, "Kia|Soul EV": 73
, "Smart|Fortwo ED": 72
, "Peugeot|Partner Electric": 45
, "Peugeot|iOn": 41
, "Tesla|Model S": 38
, "Citroën|C-Zero": 35
, "Hyundai|Ioniq Electric": 22
, "Volkswagen|e-Golf": 20
, "Citroën|ë-Berlingo Electric": 14
, "Tesla|Model X": 13
, "Smart|Forfour ED": 11
, "Citroën|E-Mehari": 11
, "Nissan|e-NV200": 6
, "Volkswagen|e-up!": 5
});

db.insert(db.countries.FR, "2018-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_03_vpfrance.pdf",
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
, "Volvo": 2069
, "Mazda": 1496
, "Jeep": 1269
, "Honda": 1206
, "Land Rover": 789
, "Smart": 606
, "Jaguar": 444
, "Porsche": 369
, "Mitsubishi": 277
, "Tesla": 241
, "Subaru": 66
, "other": 6981
});

db.insert(db.countries.FR, "2018-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/3",
{ "Renault|Zoe": 2245
, "Nissan|Leaf": 719
, "Tesla|Model S": 162
, "BMW|i3 BEV": 152
, "Hyundai|Ioniq Electric": 127
, "Peugeot|Partner Electric": 110
, "Peugeot|iOn": 98
, "Tesla|Model X": 79
, "Smart|Forfour ED": 77
, "Kia|Soul EV": 59
, "Citroën|C-Zero": 46
, "Volkswagen|e-Golf": 36
, "Smart|Fortwo ED": 33
, "Citroën|ë-Berlingo Electric": 33
, "Volkswagen|e-up!": 30
, "Citroën|E-Mehari": 25
, "Nissan|e-NV200": 2
, "other": 14
});

db.insert(db.countries.FR, "2018-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_04_vpfrance.pdf",
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
, "Seat": 2342
, "Mini": 1992
, "Jeep": 1297
, "Volvo": 1252
, "Mazda": 901
, "Land Rover": 738
, "Jaguar": 542
, "Smart": 538
, "Honda": 529
, "Porsche": 380
, "Mitsubishi": 244
, "Subaru": 53
, "Tesla": 39
, "other": 6816
});

db.insert(db.countries.FR, "2018-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/4",
{ "Renault|Zoe": 961
, "Nissan|Leaf": 375
, "BMW|i3 BEV": 104
, "Kia|Soul EV": 70
, "Smart|Fortwo ED": 69
, "Peugeot|iOn": 59
, "Hyundai|Ioniq Electric": 53
, "Citroën|C-Zero": 42
, "Volkswagen|e-Golf": 28
, "Tesla|Model S": 23
, "Volkswagen|e-up!": 20
, "Jaguar|I-Pace": 20
, "Tesla|Model X": 16
, "Peugeot|Partner Electric": 15
, "Citroën|E-Mehari": 15
, "Smart|Forfour ED": 12
, "Nissan|e-NV200": 8
, "Citroën|ë-Berlingo Electric": 3
, "other": 1
});

db.insert(db.countries.FR, "2018-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_05_vpfrance.pdf",
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
, "Mini": 2197
, "Jeep": 1577
, "Volvo": 1380
, "Mazda": 1043
, "Land Rover": 686
, "Honda": 666
, "Smart": 560
, "Jaguar": 449
, "Porsche": 385
, "Mitsubishi": 287
, "Tesla": 112
, "Subaru": 53
, "other": 6056
});

db.insert(db.countries.FR, "2018-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/5",
{ "Renault|Zoe": 1085
, "Nissan|Leaf": 331
, "BMW|i3 BEV": 117
, "Smart|Fortwo ED": 68
, "Tesla|Model S": 63
, "Peugeot|iOn": 63
, "Kia|Soul EV": 51
, "Tesla|Model X": 49
, "Volkswagen|e-Golf": 41
, "Citroën|C-Zero": 37
, "Hyundai|Ioniq Electric": 20
, "Citroën|E-Mehari": 15
, "Volkswagen|e-up!": 14
, "Citroën|ë-Berlingo Electric": 14
, "Smart|Forfour ED": 9
, "Peugeot|Partner Electric": 8
, "Nissan|e-NV200": 5
, "other": 28
});

db.insert(db.countries.FR, "2018-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_06_vpfrance.pdf",
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
, "Mini": 2849
, "Volvo": 1823
, "Jeep": 1377
, "Mazda": 1181
, "Smart": 930
, "Honda": 892
, "Land Rover": 813
, "Mitsubishi": 631
, "Porsche": 593
, "Jaguar": 584
, "Tesla": 173
, "Subaru": 136
, "other": 7848
});

db.insert(db.countries.FR, "2018-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/6",
{ "Renault|Zoe": 1928
, "Nissan|Leaf": 469
, "BMW|i3 BEV": 108
, "Tesla|Model S": 103
, "Smart|Fortwo ED": 95
, "Peugeot|iOn": 91
, "Citroën|C-Zero": 77
, "Tesla|Model X": 70
, "Citroën|E-Mehari": 42
, "Smart|Forfour ED": 39
, "Volkswagen|e-Golf": 35
, "Peugeot|Partner Electric": 22
, "Hyundai|Ioniq Electric": 21
, "Volkswagen|e-up!": 18
, "Kia|Soul EV": 18
, "Citroën|ë-Berlingo Electric": 10
, "Nissan|e-NV200": 8
, "Jaguar|I-Pace": 1
, "other": 11
});

db.insert(db.countries.FR, "2018-07", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_07_vpfrance.pdf",
{ "Peugeot": 30726
, "Renault": 27669
, "Citroën": 17578
, "Volkswagen": 13095
, "Dacia": 9781
, "Toyota": 8557
, "Fiat": 7846
, "Nissan": 6963
, "Ford": 6238
, "Opel": 5239
, "Audi": 5114
, "Mercedes-Benz": 4634
, "BMW": 4029
, "Kia": 3497
, "Hyundai": 3122
, "Seat": 3052
, "Škoda": 2369
, "Mini": 1628
, "Jeep": 1593
, "Volvo": 1453
, "Mazda": 735
, "Land Rover": 642
, "Porsche": 641
, "Honda": 627
, "Mitsubishi": 551
, "Smart": 528
, "Jaguar": 419
, "Subaru": 92
, "Tesla": 48
, "other": 6926
});

db.insert(db.countries.FR, "2018-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/7",
{ "Renault|Zoe": 721
, "Nissan|Leaf": 492
, "BMW|i3 BEV": 111
, "Smart|Fortwo ED": 66
, "Peugeot|iOn": 60
, "Citroën|C-Zero": 45
, "Smart|Forfour ED": 33
, "Volkswagen|e-Golf": 31
, "Kia|Soul EV": 31
, "Tesla|Model S": 29
, "Hyundai|Ioniq Electric": 29
, "Tesla|Model X": 19
, "Citroën|E-Mehari": 16
, "Citroën|ë-Berlingo Electric": 14
, "Volkswagen|e-up!": 5
, "Peugeot|Partner Electric": 5
, "Nissan|e-NV200": 4
, "Jaguar|I-Pace": 4
, "other": 19
});

db.insert(db.countries.FR, "2018-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_08_vpfrance.pdf",
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
, "Kia": 2278
, "Hyundai": 2123
, "Mini": 1690
, "Jeep": 1573
, "Volvo": 913
, "Porsche": 902
, "Mazda": 752
, "Mitsubishi": 649
, "Smart": 551
, "Land Rover": 506
, "Honda": 488
, "Jaguar": 436
, "Subaru": 151
, "Tesla": 64
, "other": 6257
});

db.insert(db.countries.FR, "2018-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/8",
{ "Renault|Zoe": 810
, "Nissan|Leaf": 261
, "BMW|i3 BEV": 96
, "Smart|Fortwo ED": 72
, "Kia|Soul EV": 63
, "Peugeot|iOn": 52
, "Hyundai|Ioniq Electric": 40
, "Tesla|Model X": 34
, "Tesla|Model S": 30
, "Citroën|C-Zero": 27
, "Smart|Forfour ED": 26
, "Volkswagen|e-Golf": 22
, "Citroën|E-Mehari": 19
, "Nissan|e-NV200": 13
, "Jaguar|I-Pace": 13
, "Citroën|ë-Berlingo Electric": 10
, "Volkswagen|e-up!": 8
, "Peugeot|Partner Electric": 8
});

db.insert(db.countries.FR, "2018-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_09_vpfrance.pdf",
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
, "Volvo": 1596
, "Nissan": 1458
, "Mazda": 993
, "Honda": 601
, "Smart": 587
, "Jeep": 491
, "Mitsubishi": 346
, "Jaguar": 319
, "Land Rover": 301
, "Tesla": 171
, "Porsche": 124
, "Subaru": 16
, "other": 3949
});

db.insert(db.countries.FR, "2018-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/9",
{ "Renault|Zoe": 1482
, "Nissan|Leaf": 390
, "Tesla|Model S": 107
, "BMW|i3 BEV": 107
, "Peugeot|iOn": 85
, "Smart|Fortwo ED": 81
, "Tesla|Model X": 64
, "Hyundai|Ioniq Electric": 64
, "Citroën|C-Zero": 63
, "Kia|Soul EV": 44
, "Peugeot|Partner Electric": 29
, "Smart|Forfour ED": 24
, "Citroën|E-Mehari": 22
, "Jaguar|I-Pace": 16
, "Volkswagen|e-up!": 12
, "Citroën|ë-Berlingo Electric": 12
, "Volkswagen|e-Golf": 6
, "Nissan|e-NV200": 6
});

db.insert(db.countries.FR, "2018-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_10_vpfrance.pdf",
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
, "Volvo": 1832
, "Mazda": 811
, "Jeep": 726
, "Smart": 705
, "Honda": 691
, "Mitsubishi": 476
, "Jaguar": 329
, "Land Rover": 317
, "Porsche": 125
, "Tesla": 30
, "Subaru": 26
, "other": 4710
});

db.insert(db.countries.FR, "2018-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/10",
{ "Renault|Zoe": 1745
, "Nissan|Leaf": 410
, "Smart|Fortwo ED": 108
, "BMW|i3 BEV": 82
, "Volkswagen|e-Golf": 79
, "Peugeot|iOn": 68
, "Hyundai|Ioniq Electric": 55
, "Citroën|C-Zero": 54
, "Kia|Soul EV": 47
, "Jaguar|I-Pace": 40
, "Hyundai|Kona Electric": 36
, "Smart|Forfour ED": 32
, "Tesla|Model S": 23
, "Citroën|E-Mehari": 23
, "Citroën|ë-Berlingo Electric": 17
, "Volkswagen|e-up!": 16
, "Peugeot|Partner Electric": 12
, "Tesla|Model X": 7
, "Nissan|e-NV200": 7
});

db.insert(db.countries.FR, "2018-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_11_vpfrance.pdf",
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
, "Volvo": 1800
, "Mazda": 904
, "Mitsubishi": 741
, "Smart": 714
, "Jeep": 686
, "Honda": 578
, "Land Rover": 482
, "Jaguar": 202
, "Tesla": 119
, "Porsche": 83
, "Subaru": 33
, "other": 5452
});

db.insert(db.countries.FR, "2018-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/11",
{ "Renault|Zoe": 1895
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
, "Citroën|ë-Berlingo Electric": 11
, "Peugeot|Partner Electric": 8
, "Nissan|e-NV200": 4
, "other": 1
});

db.insert(db.countries.FR, "2018-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2018_12_vpfrance.pdf",
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
, "Volvo": 1721
, "Smart": 914
, "Mazda": 857
, "Jeep": 671
, "Honda": 593
, "Land Rover": 507
, "Mitsubishi": 374
, "Jaguar": 252
, "Porsche": 230
, "Tesla": 192
, "Subaru": 19
, "other": 4974
});

db.insert(db.countries.FR, "2018-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2018/12",
{ "Renault|Zoe": 2378
, "Nissan|Leaf": 447
, "Smart|Fortwo ED": 383
, "Hyundai|Kona Electric": 216
, "Kia|Niro EV": 175
, "BMW|i3 BEV": 144
, "Tesla|Model S": 99
, "Peugeot|iOn": 99
, "Tesla|Model X": 93
, "Volkswagen|e-Golf": 60
, "Citroën|C-Zero": 53
, "Hyundai|Ioniq Electric": 47
, "Volkswagen|e-up!": 45
, "Kia|Soul EV": 26
, "Nissan|e-NV200": 18
, "Citroën|E-Mehari": 14
, "Citroën|ë-Berlingo Electric": 14
, "Peugeot|Partner Electric": 12
, "Jaguar|I-Pace": 9
, "other": 23
});

db.insert(db.countries.FR, "2019-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_01_vpfrance.pdf",
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
, "Mini": 2251
, "Škoda": 2185
, "Seat": 2003
, "Volvo": 1574
, "Mazda": 716
, "Smart": 649
, "Honda": 643
, "Jeep": 476
, "Land Rover": 455
, "Mitsubishi": 421
, "Jaguar": 294
, "Porsche": 243
, "Tesla": 32
, "Subaru": 22
, "other": 5562
});

db.insert(db.countries.FR, "2019-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/1",
{ "Renault|Zoe": 1496
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
, "Citroën|ë-Berlingo Electric": 7
});

db.insert(db.countries.FR, "2019-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_02_vpfrance.pdf",
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
, "Mini": 1943
, "Volvo": 1914
, "Mazda": 976
, "Jeep": 779
, "Honda": 733
, "Smart": 724
, "Land Rover": 461
, "Tesla": 445
, "Mitsubishi": 416
, "Jaguar": 241
, "Porsche": 133
, "Subaru": 20
, "other": 5106
});

db.insert(db.countries.FR, "2019-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/2",
{ "Renault|Zoe": 1197
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
, "Kia|Soul EV": 14
, "Audi|Q8 e-tron": 14
, "Tesla|Model X": 11
, "Peugeot|Partner Electric": 11
, "Nissan|e-NV200": 6
, "Citroën|E-Mehari": 5
, "Citroën|ë-Berlingo Electric": 3
});

db.insert(db.countries.FR, "2019-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_03_vpfrance.pdf",
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
, "Mini": 2616
, "Volvo": 1978
, "Mazda": 1559
, "Tesla": 1250
, "Jeep": 1145
, "Honda": 1083
, "Land Rover": 716
, "Smart": 653
, "Mitsubishi": 609
, "Jaguar": 283
, "Porsche": 278
, "other": 6136
});

db.insert(db.countries.FR, "2019-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/3",
{ "Renault|Zoe": 1536
, "Tesla|Model 3": 1153
, "Nissan|Leaf": 455
, "Kia|Niro EV": 299
, "BMW|i3 BEV": 207
, "Hyundai|Kona Electric": 141
, "Audi|Q8 e-tron": 140
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
, "Volkswagen|e-up!": 9
, "Nissan|e-NV200": 9
, "Citroën|ë-Berlingo Electric": 7
, "Kia|Soul EV": 1
});

db.insert(db.countries.FR, "2019-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_04_vpfrance.pdf",
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
, "Mini": 2371
, "Volvo": 1527
, "Jeep": 964
, "Mazda": 887
, "Land Rover": 677
, "Smart": 551
, "Mitsubishi": 540
, "Honda": 510
, "Jaguar": 370
, "Porsche": 352
, "Tesla": 305
, "Subaru": 21
, "other": 6094
});

db.insert(db.countries.FR, "2019-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/4",
{ "Renault|Zoe": 1472
, "Nissan|Leaf": 347
, "Tesla|Model 3": 251
, "Kia|Niro EV": 239
, "BMW|i3 BEV": 202
, "Hyundai|Kona Electric": 161
, "Smart|Fortwo ED": 110
, "Peugeot|iOn": 58
, "Jaguar|I-Pace": 53
, "Citroën|C-Zero": 53
, "Smart|Forfour ED": 51
, "Hyundai|Ioniq Electric": 47
, "Volkswagen|e-Golf": 38
, "Tesla|Model S": 33
, "Audi|Q8 e-tron": 22
, "Tesla|Model X": 21
, "Citroën|E-Mehari": 16
, "Volkswagen|e-up!": 12
, "Peugeot|Partner Electric": 10
, "Kia|Soul EV": 10
, "Citroën|ë-Berlingo Electric": 10
, "Nissan|e-NV200": 6
});

db.insert(db.countries.FR, "2019-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_05_vpfrance.pdf",
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
, "Mini": 1760
, "Volvo": 1454
, "Mazda": 873
, "Jeep": 865
, "Smart": 645
, "Land Rover": 621
, "Honda": 554
, "Mitsubishi": 498
, "Porsche": 435
, "Tesla": 413
, "Jaguar": 308
, "Subaru": 42
, "other": 5661
});

db.insert(db.countries.FR, "2019-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/5",
{ "Renault|Zoe": 1331
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
, "Volkswagen|e-Golf": 28
, "Hyundai|Ioniq Electric": 28
, "Volkswagen|e-up!": 24
, "Smart|Forfour ED": 15
, "Audi|Q8 e-tron": 13
, "Citroën|E-Mehari": 7
, "Peugeot|Partner Electric": 6
, "Citroën|ë-Berlingo Electric": 6
, "Nissan|e-NV200": 3
});

db.insert(db.countries.FR, "2019-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_06_vpfrance.pdf",
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
, "Hyundai": 3502
, "Škoda": 3242
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
, "Jaguar": 375
, "Subaru": 30
, "other": 7652
});

db.insert(db.countries.FR, "2019-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/6",
{ "Renault|Zoe": 1845
, "Tesla|Model 3": 1097
, "Nissan|Leaf": 332
, "Hyundai|Kona Electric": 189
, "BMW|i3 BEV": 179
, "Kia|Niro EV": 156
, "Tesla|Model S": 108
, "Smart|Fortwo ED": 87
, "Tesla|Model X": 80
, "Citroën|C-Zero": 76
, "Volkswagen|e-Golf": 61
, "Kia|Soul EV": 54
, "Jaguar|I-Pace": 51
, "Audi|Q8 e-tron": 35
, "Peugeot|iOn": 34
, "Smart|Forfour ED": 24
, "Hyundai|Ioniq Electric": 22
, "Citroën|E-Mehari": 18
, "Volkswagen|e-up!": 17
, "Nissan|e-NV200": 12
, "Peugeot|Partner Electric": 8
, "Mercedes-Benz|EQC": 6
, "Citroën|ë-Berlingo Electric": 6
});

db.insert(db.countries.FR, "2019-07", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_07_vpfrance.pdf",
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
, "Mini": 2234
, "Jeep": 1761
, "Volvo": 1646
, "Smart": 888
, "Mazda": 845
, "Land Rover": 671
, "Honda": 611
, "Mitsubishi": 462
, "Porsche": 417
, "Tesla": 356
, "Jaguar": 266
, "Subaru": 54
, "other": 7138
});

db.insert(db.countries.FR, "2019-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/7",
{ "Renault|Zoe": 1491
, "Nissan|Leaf": 445
, "Tesla|Model 3": 304
, "BMW|i3 BEV": 147
, "Hyundai|Kona Electric": 119
, "Kia|Niro EV": 111
, "Smart|Fortwo ED": 80
, "Kia|Soul EV": 59
, "Audi|Q8 e-tron": 45
, "Volkswagen|e-Golf": 33
, "Citroën|C-Zero": 30
, "Tesla|Model X": 29
, "Smart|Forfour ED": 28
, "Mercedes-Benz|EQC": 25
, "Jaguar|I-Pace": 24
, "Tesla|Model S": 23
, "Hyundai|Ioniq Electric": 23
, "Volkswagen|e-up!": 17
, "Peugeot|iOn": 13
, "Nissan|e-NV200": 11
, "Citroën|E-Mehari": 8
, "Citroën|ë-Berlingo Electric": 7
, "Peugeot|Partner Electric": 5
});

db.insert(db.countries.FR, "2019-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_08_vpfrance.pdf",
{ "Peugeot": 19695
, "Renault": 18718
, "Citroën": 12911
, "Volkswagen": 8542
, "Dacia": 8050
, "Toyota": 6784
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
, "Mitsubishi": 1309
, "Volvo": 954
, "Jeep": 815
, "Mazda": 751
, "Honda": 599
, "Land Rover": 440
, "Tesla": 293
, "Porsche": 287
, "Jaguar": 156
, "Subaru": 64
, "other": 8280
});

db.insert(db.countries.FR, "2019-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/8",
{ "Renault|Zoe": 979
, "Tesla|Model 3": 214
, "Nissan|Leaf": 197
, "BMW|i3 BEV": 193
, "Hyundai|Kona Electric": 80
, "Kia|Niro EV": 76
, "Smart|Fortwo ED": 55
, "Tesla|Model S": 47
, "Smart|Forfour ED": 39
, "Volkswagen|e-Golf": 33
, "Tesla|Model X": 32
, "Kia|Soul EV": 32
, "Citroën|C-Zero": 26
, "Peugeot|iOn": 23
, "Audi|Q8 e-tron": 20
, "Hyundai|Ioniq Electric": 12
, "Jaguar|I-Pace": 11
, "Citroën|E-Mehari": 10
, "Volkswagen|e-up!": 6
, "Nissan|e-NV200": 5
, "Citroën|ë-Berlingo Electric": 2
});

db.insert(db.countries.FR, "2019-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_09_vpfrance.pdf",
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
, "Volvo": 2009
, "Mazda": 1191
, "Tesla": 1165
, "Honda": 696
, "Jeep": 672
, "Land Rover": 555
, "Porsche": 370
, "Mitsubishi": 306
, "Jaguar": 272
, "Smart": 234
, "other": 4342
});

db.insert(db.countries.FR, "2019-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/9",
{ "Renault|Zoe": 1568
, "Tesla|Model 3": 1061
, "Nissan|Leaf": 298
, "BMW|i3 BEV": 241
, "Hyundai|Kona Electric": 216
, "Kia|Niro EV": 136
, "Smart|Fortwo ED": 127
, "Kia|Soul EV": 90
, "Hyundai|Ioniq Electric": 72
, "Tesla|Model X": 69
, "Citroën|C-Zero": 68
, "Audi|Q8 e-tron": 57
, "Volkswagen|e-Golf": 55
, "Tesla|Model S": 35
, "Jaguar|I-Pace": 33
, "Smart|Forfour ED": 29
, "Peugeot|iOn": 16
, "Citroën|E-Mehari": 9
, "Peugeot|Partner Electric": 7
, "Nissan|e-NV200": 6
, "Citroën|ë-Berlingo Electric": 5
, "Volkswagen|e-up!": 2
, "Mercedes-Benz|EQC": 1
});

db.insert(db.countries.FR, "2019-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_10_vpfrance.pdf",
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
, "Mini": 2547
, "Volvo": 2009
, "Mazda": 942
, "Jeep": 935
, "Porsche": 659
, "Land Rover": 658
, "Smart": 658
, "Mitsubishi": 541
, "Honda": 540
, "Jaguar": 277
, "Tesla": 192
, "Subaru": 37
, "other": 5370
});

db.insert(db.countries.FR, "2019-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/10",
{ "Renault|Zoe": 1939
, "Smart|Fortwo ED": 491
, "Nissan|Leaf": 363
, "Kia|Niro EV": 253
, "BMW|i3 BEV": 240
, "Tesla|Model 3": 178
, "Hyundai|Ioniq Electric": 174
, "Hyundai|Kona Electric": 122
, "DS Automobiles|DS 3 Crossback E-Tense": 110
, "Volkswagen|e-Golf": 105
, "Smart|Forfour ED": 98
, "Kia|Soul EV": 79
, "Peugeot|e-208": 50
, "Peugeot|iOn": 42
, "Jaguar|I-Pace": 24
, "Citroën|C-Zero": 23
, "Audi|Q8 e-tron": 23
, "Mercedes-Benz|EQC": 19
, "Nissan|e-NV200": 12
, "Volkswagen|e-up!": 10
, "Tesla|Model X": 9
, "Citroën|ë-Berlingo Electric": 7
, "Tesla|Model S": 5
, "Citroën|E-Mehari": 4
, "Peugeot|Partner Electric": 2
});

db.insert(db.countries.FR, "2019-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_11_vpfrance.pdf",
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
, "Mini": 1956
, "Volvo": 1731
, "Mazda": 1131
, "Jeep": 723
, "Mitsubishi": 685
, "Land Rover": 656
, "Porsche": 616
, "Honda": 598
, "Tesla": 271
, "Jaguar": 183
, "Smart": 170
, "Subaru": 30
, "other": 4658
});

db.insert(db.countries.FR, "2019-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/11",
{ "Renault|Zoe": 1866
, "BMW|i3 BEV": 324
, "Nissan|Leaf": 241
, "Tesla|Model 3": 225
, "Smart|Fortwo ED": 106
, "Hyundai|Kona Electric": 77
, "Volkswagen|e-Golf": 75
, "Nissan|e-NV200": 43
, "Hyundai|Ioniq Electric": 32
, "Smart|Forfour ED": 31
, "Audi|Q8 e-tron": 31
, "Tesla|Model X": 25
, "Jaguar|I-Pace": 22
, "Tesla|Model S": 21
, "Peugeot|iOn": 21
, "Citroën|C-Zero": 21
, "Kia|Niro EV": 19
, "Mercedes-Benz|EQC": 10
, "Volkswagen|e-up!": 3
, "Citroën|E-Mehari": 2
, "Citroën|ë-Berlingo Electric": 2
, "Peugeot|Partner Electric": 1
, "Kia|Soul EV": 1
});

db.insert(db.countries.FR, "2019-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2019_12_vpfrance.pdf",
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
, "Mazda": 1553
, "Smart": 1472
, "Tesla": 1435
, "Land Rover": 1229
, "Porsche": 1124
, "Jeep": 1008
, "Honda": 895
, "Mitsubishi": 710
, "Jaguar": 536
, "Subaru": 168
, "other": 8082
});

db.insert(db.countries.FR, "2019-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2019/12",
{ "Renault|Zoe": 2097
, "Tesla|Model 3": 1250
, "BMW|i3 BEV": 475
, "Nissan|Leaf": 222
, "Smart|Fortwo ED": 159
, "Tesla|Model S": 102
, "Tesla|Model X": 83
, "Volkswagen|e-Golf": 80
, "Jaguar|I-Pace": 74
, "Audi|Q8 e-tron": 53
, "Hyundai|Kona Electric": 41
, "Smart|Forfour ED": 28
, "Mercedes-Benz|EQC": 28
, "Volkswagen|e-up!": 27
, "Nissan|e-NV200": 26
, "Hyundai|Ioniq Electric": 14
, "Citroën|C-Zero": 13
, "Peugeot|iOn": 12
, "Kia|Niro EV": 7
, "Citroën|E-Mehari": 5
, "Citroën|ë-Berlingo Electric": 3
, "Peugeot|e-2008": 1
, "Peugeot|Partner Electric": 1
, "Kia|Soul EV": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
});

db.insert(db.countries.FR, "2020-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_01_vpfrance-1.pdf",
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
, "Mercedes-Benz": 2412
, "Seat": 2332
, "Škoda": 2310
, "Mini": 1424
, "Volvo": 771
, "Mazda": 673
, "Land Rover": 444
, "Honda": 418
, "Porsche": 323
, "Mitsubishi": 266
, "Jeep": 248
, "Tesla": 170
, "Jaguar": 127
, "Smart": 77
, "other": 4622
});

db.insert(db.countries.FR, "2020-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/1",
{ "Renault|Zoe": 5331
, "Peugeot|e-208": 2537
, "DS Automobiles|DS 3 Crossback E-Tense": 597
, "Kia|Niro EV": 429
, "Citroën|C-Zero": 414
, "Nissan|Leaf": 360
, "Hyundai|Kona Electric": 248
, "BMW|i3 BEV": 137
, "Škoda|Citigo-e": 124
, "Tesla|Model 3": 124
, "Seat|Mii Electric": 116
, "Kia|Soul EV": 99
, "Hyundai|Ioniq Electric": 91
, "Volkswagen|e-Golf": 66
, "Smart|Fortwo ED": 63
, "Peugeot|e-2008": 52
, "Citroën|E-Mehari": 34
, "Tesla|Model S": 31
, "Mercedes-Benz|EQC": 21
, "Audi|Q8 e-tron": 21
, "Tesla|Model X": 15
, "Smart|Forfour ED": 14
, "Citroën|ë-Berlingo Electric": 8
, "Nissan|e-NV200": 7
, "Peugeot|iOn": 6
, "Volkswagen|e-up!": 4
, "Peugeot|Partner Electric": 3
});

db.insert(db.countries.FR, "2020-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_02_vpfrance.pdf",
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
, "Tesla": 1047
, "Mazda": 732
, "Honda": 671
, "Land Rover": 652
, "Jeep": 440
, "Porsche": 429
, "Mitsubishi": 297
, "Jaguar": 270
, "Smart": 118
, "Subaru": 23
, "other": 8492
});

db.insert(db.countries.FR, "2020-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/2",
{ "Renault|Zoe": 3076
, "Peugeot|e-208": 2495
, "Tesla|Model 3": 1025
, "DS Automobiles|DS 3 Crossback E-Tense": 517
, "Hyundai|Kona Electric": 414
, "Nissan|Leaf": 283
, "Kia|Niro EV": 278
, "Opel|Corsa-e": 165
, "Citroën|C-Zero": 162
, "BMW|i3 BEV": 153
, "Volkswagen|e-up!": 108
, "Audi|Q8 e-tron": 101
, "Smart|Fortwo ED": 93
, "Peugeot|e-2008": 85
, "Kia|Soul EV": 79
, "Hyundai|Ioniq Electric": 78
, "Volkswagen|e-Golf": 77
, "Mercedes-Benz|EQC": 37
, "Seat|Mii Electric": 34
, "Mini|Cooper SE Electric": 34
, "Škoda|Citigo-e": 27
, "Porsche|Taycan": 25
, "Smart|Forfour ED": 23
, "Peugeot|iOn": 17
, "Tesla|Model X": 14
, "Nissan|e-NV200": 14
, "Citroën|ë-Berlingo Electric": 11
, "Jaguar|I-Pace": 9
, "Tesla|Model S": 8
, "Citroën|E-Mehari": 8
, "Peugeot|Partner Electric": 2
});

db.insert(db.countries.FR, "2020-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_03_vpfrance.pdf",
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
, "Nissan": 1235
, "Opel": 829
, "Škoda": 807
, "Volvo": 775
, "Seat": 603
, "Mazda": 419
, "Mitsubishi": 283
, "Porsche": 237
, "Jeep": 165
, "Land Rover": 129
, "Honda": 113
, "Smart": 55
, "Jaguar": 31
, "other": 1898
});

db.insert(db.countries.FR, "2020-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/3",
{ "Renault|Zoe": 1744
, "Tesla|Model 3": 1385
, "Peugeot|e-208": 756
, "DS Automobiles|DS 3 Crossback E-Tense": 210
, "Mini|Cooper SE Electric": 179
, "Nissan|Leaf": 154
, "Kia|Niro EV": 152
, "Hyundai|Kona Electric": 151
, "Volkswagen|e-up!": 116
, "Tesla|Model S": 111
, "BMW|i3 BEV": 98
, "Tesla|Model X": 84
, "Peugeot|e-2008": 83
, "Smart|Fortwo ED": 42
, "Hyundai|Ioniq Electric": 38
, "Opel|Corsa-e": 36
, "Porsche|Taycan": 33
, "Audi|Q8 e-tron": 28
, "Volkswagen|e-Golf": 23
, "Mercedes-Benz|EQC": 18
, "Kia|Soul EV": 14
, "Citroën|C-Zero": 12
, "Smart|Forfour ED": 11
, "Škoda|Citigo-e": 10
, "Seat|Mii Electric": 8
, "Nissan|e-NV200": 6
, "Honda|e": 3
, "Jaguar|I-Pace": 2
, "Citroën|ë-Berlingo Electric": 2
, "Citroën|E-Mehari": 1
});

db.insert(db.countries.FR, "2020-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_04_vpfrance.pdf",
{ "Renault": 5910
, "Peugeot": 5237
, "Citroën": 3513
, "Dacia": 1227
, "Opel": 914
, "Ford": 553
, "Volkswagen": 511
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
, "Nissan": 71
, "Volvo": 71
, "Jeep": 50
, "Mazda": 45
, "Porsche": 33
, "Land Rover": 25
, "Mitsubishi": 22
, "Jaguar": 14
, "Honda": 8
, "Smart": 5
, "other": 614
});

db.insert(db.countries.FR, "2020-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/4",
{ "Peugeot|e-208": 360
, "Renault|Zoe": 322
, "Tesla|Model 3": 189
, "Citroën|C-Zero": 89
, "DS Automobiles|DS 3 Crossback E-Tense": 50
, "Mini|Cooper SE Electric": 31
, "Opel|Corsa-e": 26
, "Peugeot|e-2008": 18
, "Hyundai|Kona Electric": 16
, "Tesla|Model S": 14
});

db.insert(db.countries.FR, "2020-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_05_vpfrance.pdf",
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
, "Volvo": 1052
, "Mazda": 615
, "Porsche": 353
, "Jeep": 272
, "Tesla": 269
, "Land Rover": 268
, "Honda": 252
, "Mitsubishi": 210
, "Smart": 75
, "Jaguar": 73
, "other": 2305
});

db.insert(db.countries.FR, "2020-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/5",
{ "Renault|Zoe": 1165
, "Peugeot|e-208": 679
, "Hyundai|Kona Electric": 351
, "Citroën|C-Zero": 247
, "Tesla|Model 3": 219
, "Kia|Niro EV": 205
, "Mini|Cooper SE Electric": 191
, "Peugeot|e-2008": 151
, "BMW|i3 BEV": 122
, "Nissan|Leaf": 113
, "Volkswagen|e-up!": 106
, "DS Automobiles|DS 3 Crossback E-Tense": 103
, "Opel|Corsa-e": 87
, "Smart|Fortwo ED": 68
, "Hyundai|Ioniq Electric": 59
, "Kia|Soul EV": 53
, "Porsche|Taycan": 39
, "Tesla|Model S": 32
, "Honda|e": 29
, "Audi|Q8 e-tron": 20
, "Tesla|Model X": 18
, "Volkswagen|e-Golf": 14
, "Mercedes-Benz|EQC": 10
, "Škoda|Citigo-e": 8
, "Smart|Forfour ED": 7
, "Seat|Mii Electric": 7
, "Peugeot|iOn": 2
, "Jaguar|I-Pace": 2
, "Peugeot|Partner Electric": 1
, "Nissan|e-NV200": 1
, "MG|ZS EV": 1
, "Citroën|E-Mehari": 1
});

db.insert(db.countries.FR, "2020-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_06_vpfrance.pdf",
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
, "Nissan": 3997
, "Škoda": 3895
, "Seat": 3844
, "Mini": 2862
, "Volvo": 2129
, "Mazda": 1302
, "Mitsubishi": 838
, "Tesla": 728
, "Porsche": 615
, "Jeep": 607
, "Land Rover": 544
, "Honda": 521
, "Smart": 233
, "Jaguar": 152
, "other": 7707
});

db.insert(db.countries.FR, "2020-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/6",
{ "Renault|Zoe": 6012
, "Peugeot|e-208": 2127
, "Hyundai|Kona Electric": 674
, "Tesla|Model 3": 620
, "Citroën|C-Zero": 548
, "Nissan|Leaf": 494
, "Kia|Niro EV": 456
, "Peugeot|e-2008": 406
, "Volkswagen|e-up!": 397
, "Opel|Corsa-e": 300
, "DS Automobiles|DS 3 Crossback E-Tense": 252
, "BMW|i3 BEV": 249
, "Smart|Fortwo ED": 198
, "Mini|Cooper SE Electric": 172
, "Audi|Q8 e-tron": 115
, "Hyundai|Ioniq Electric": 96
, "MG|ZS EV": 88
, "Kia|Soul EV": 81
, "Porsche|Taycan": 72
, "Volkswagen|e-Golf": 68
, "Tesla|Model S": 62
, "Tesla|Model X": 46
, "Mercedes-Benz|EQC": 38
, "Škoda|Citigo-e": 36
, "Smart|Forfour ED": 34
, "Honda|e": 34
, "Citroën|E-Mehari": 14
, "Nissan|e-NV200": 11
, "Jaguar|I-Pace": 11
, "Seat|Mii Electric": 9
, "Citroën|ë-Berlingo Electric": 4
, "Peugeot|Partner Electric": 2
, "Peugeot|iOn": 1
});

db.insert(db.countries.FR, "2020-07", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_07_vpfrance.pdf",
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
, "Mini": 2114
, "Volvo": 1999
, "Mitsubishi": 1092
, "Mazda": 873
, "Jeep": 854
, "Honda": 721
, "Porsche": 486
, "Land Rover": 444
, "Smart": 174
, "Tesla": 148
, "Jaguar": 125
, "other": 6180
});

db.insert(db.countries.FR, "2020-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/7",
{ "Renault|Zoe": 3834
, "Peugeot|e-208": 1265
, "Hyundai|Kona Electric": 779
, "Nissan|Leaf": 722
, "Kia|Niro EV": 609
, "Peugeot|e-2008": 445
, "Volkswagen|e-up!": 309
, "DS Automobiles|DS 3 Crossback E-Tense": 288
, "MG|ZS EV": 224
, "BMW|i3 BEV": 195
, "Mini|Cooper SE Electric": 174
, "Opel|Corsa-e": 161
, "Smart|Fortwo ED": 142
, "Volkswagen|e-Golf": 132
, "Tesla|Model 3": 119
, "Kia|Soul EV": 105
, "Hyundai|Ioniq Electric": 93
, "Audi|Q8 e-tron": 85
, "Porsche|Taycan": 52
, "Smart|Forfour ED": 32
, "Citroën|C-Zero": 28
, "Škoda|Citigo-e": 27
, "Tesla|Model X": 24
, "Mercedes-Benz|EQC": 22
, "Peugeot|e-Expert": 20
, "Seat|Mii Electric": 15
, "Nissan|e-NV200": 11
, "Honda|e": 10
, "Jaguar|I-Pace": 8
, "Tesla|Model S": 5
, "Peugeot|iOn": 2
, "Mercedes-Benz|eVito": 2
, "Citroën|ë-Berlingo Electric": 1
, "Aiways|U5": 1
});

db.insert(db.countries.FR, "2020-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_08_vpfrance.pdf",
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
, "Mini": 1476
, "Volvo": 1014
, "Mazda": 555
, "Honda": 545
, "Mitsubishi": 532
, "Jeep": 479
, "Tesla": 269
, "Porsche": 249
, "Land Rover": 162
, "Smart": 121
, "Jaguar": 77
, "Subaru": 12
, "other": 3120
});

db.insert(db.countries.FR, "2020-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/8",
{ "Renault|Zoe": 1618
, "Peugeot|e-208": 697
, "Kia|Niro EV": 620
, "Hyundai|Kona Electric": 521
, "Tesla|Model 3": 261
, "Mini|Cooper SE Electric": 244
, "Nissan|Leaf": 235
, "Peugeot|e-2008": 202
, "Opel|Corsa-e": 157
, "Audi|Q8 e-tron": 145
, "Volkswagen|e-up!": 133
, "DS Automobiles|DS 3 Crossback E-Tense": 106
, "BMW|i3 BEV": 93
, "Smart|Fortwo ED": 90
, "Hyundai|Ioniq Electric": 77
, "MG|ZS EV": 76
, "Volkswagen|e-Golf": 72
, "Kia|Soul EV": 50
, "Smart|Forfour ED": 31
, "Porsche|Taycan": 27
, "Mercedes-Benz|EQC": 27
, "Škoda|Citigo-e": 26
, "Nissan|e-NV200": 19
, "Citroën|ë-C4": 14
, "Honda|e": 11
, "Citroën|C-Zero": 10
, "Seat|Mii Electric": 7
, "Peugeot|e-Expert": 6
, "Tesla|Model S": 5
, "Tesla|Model X": 3
, "Citroën|ë-Jumpy": 3
, "Jaguar|I-Pace": 2
, "Peugeot|iOn": 1
, "Mazda|MX-30": 1
, "Citroën|E-Mehari": 1
});

db.insert(db.countries.FR, "2020-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020_09_vpfrance.pdf",
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
, "Mini": 1938
, "Volvo": 1433
, "Tesla": 1267
, "Mazda": 1179
, "Jeep": 839
, "Honda": 667
, "Mitsubishi": 401
, "Land Rover": 359
, "Porsche": 272
, "Smart": 180
, "Jaguar": 66
, "other": 4745
});

db.insert(db.countries.FR, "2020-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/9",
{ "Renault|Zoe": 2878
, "Peugeot|e-208": 1230
, "Tesla|Model 3": 1083
, "Volkswagen|ID.3": 616
, "Kia|Niro EV": 583
, "Hyundai|Kona Electric": 559
, "Opel|Corsa-e": 400
, "Peugeot|e-2008": 376
, "Mini|Cooper SE Electric": 239
, "Nissan|Leaf": 217
, "Mazda|MX-30": 203
, "BMW|i3 BEV": 178
, "DS Automobiles|DS 3 Crossback E-Tense": 175
, "Smart|Fortwo ED": 152
, "Kia|Soul EV": 143
, "Volkswagen|e-Golf": 114
, "Volkswagen|e-up!": 107
, "Tesla|Model S": 99
, "Tesla|Model X": 85
, "Hyundai|Ioniq Electric": 83
, "Audi|Q8 e-tron": 77
, "Mercedes-Benz|EQC": 72
, "Škoda|Citigo-e": 62
, "Honda|e": 57
, "Porsche|Taycan": 47
, "Seat|Mii Electric": 43
, "MG|ZS EV": 43
, "Citroën|ë-C4": 30
, "Smart|Forfour ED": 28
, "Peugeot|e-Expert": 10
, "Nissan|e-NV200": 6
, "Mercedes-Benz|EQV": 6
, "Jaguar|I-Pace": 3
, "Citroën|ë-Jumpy": 3
, "Renault|Twingo Z.E.": 1
, "Peugeot|iOn": 1
, "Citroën|C-Zero": 1
, "Aiways|U5": 1
});

db.insert(db.countries.FR, "2020-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020-10-vpfrance.pdf",
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
, "Mini": 2262
, "Volvo": 1656
, "Mazda": 881
, "Honda": 769
, "Jeep": 708
, "Land Rover": 594
, "Porsche": 346
, "Mitsubishi": 227
, "Smart": 192
, "Tesla": 107
, "Jaguar": 84
, "other": 5390
});

db.insert(db.countries.FR, "2020-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/10",
{ "Renault|Zoe": 2507
, "Peugeot|e-208": 1988
, "Renault|Twingo Z.E.": 678
, "Kia|Niro EV": 678
, "Hyundai|Kona Electric": 627
, "Volkswagen|ID.3": 524
, "Peugeot|e-2008": 460
, "Mini|Cooper SE Electric": 425
, "Opel|Corsa-e": 316
, "Nissan|Leaf": 181
, "BMW|i3 BEV": 168
, "DS Automobiles|DS 3 Crossback E-Tense": 166
, "Smart|Fortwo ED": 160
, "Mazda|MX-30": 131
, "MG|ZS EV": 114
, "Kia|Soul EV": 96
, "Volkswagen|e-up!": 87
, "Škoda|Citigo-e": 84
, "Citroën|ë-C4": 83
, "Seat|Mii Electric": 81
, "Hyundai|Ioniq Electric": 76
, "Volkswagen|e-Golf": 75
, "Tesla|Model 3": 73
, "Honda|e": 54
, "Audi|Q8 e-tron": 46
, "Porsche|Taycan": 38
, "Smart|Forfour ED": 32
, "Mercedes-Benz|EQC": 19
, "Tesla|Model X": 18
, "Citroën|ë-Jumpy": 18
, "Tesla|Model S": 16
, "Jaguar|I-Pace": 6
, "Peugeot|e-Expert": 5
, "Nissan|e-NV200": 5
, "Mercedes-Benz|EQV": 5
, "Citroën|C-Zero": 3
});

db.insert(db.countries.FR, "2020-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020-11-vpfrance.pdf",
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
, "Mini": 1975
, "Seat": 1699
, "Hyundai": 1578
, "Volvo": 1460
, "Land Rover": 757
, "Jeep": 632
, "Mazda": 591
, "Tesla": 537
, "Porsche": 426
, "Honda": 352
, "Smart": 221
, "Mitsubishi": 201
, "Jaguar": 51
, "other": 4166
});

db.insert(db.countries.FR, "2020-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/11",
{ "Renault|Zoe": 2944
, "Peugeot|e-208": 1258
, "Volkswagen|e-up!": 520
, "Tesla|Model 3": 501
, "Volkswagen|ID.3": 497
, "Kia|Niro EV": 478
, "Mini|Cooper SE Electric": 405
, "Peugeot|e-2008": 342
, "Hyundai|Kona Electric": 342
, "Fiat|500e": 307
, "Renault|Twingo Z.E.": 230
, "Opel|Corsa-e": 222
, "Nissan|Leaf": 203
, "Mazda|MX-30": 185
, "Smart|Fortwo ED": 182
, "BMW|i3 BEV": 127
, "Škoda|Citigo-e": 112
, "Citroën|ë-C4": 101
, "Seat|Mii Electric": 81
, "DS Automobiles|DS 3 Crossback E-Tense": 81
, "Mercedes-Benz|EQV": 63
, "MG|ZS EV": 58
, "Honda|e": 46
, "Hyundai|Ioniq Electric": 45
, "Kia|Soul EV": 42
, "Smart|Forfour ED": 39
, "Mercedes-Benz|EQC": 32
, "Porsche|Taycan": 25
, "Audi|Q8 e-tron": 25
, "Volkswagen|e-Golf": 21
, "Tesla|Model X": 20
, "Nissan|e-NV200": 20
, "Tesla|Model S": 16
, "Peugeot|e-Expert": 9
, "Jaguar|I-Pace": 9
, "Citroën|ë-Jumpy": 9
, "Lexus|UX 300e": 2
, "Dacia|Spring": 1
, "Citroën|C-Zero": 1
});

db.insert(db.countries.FR, "2020-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2020-12-vpfrance.pdf",
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
, "Porsche": 1109
, "Jeep": 1087
, "Land Rover": 1078
, "Tesla": 1034
, "Mazda": 1025
, "Honda": 765
, "Mitsubishi": 643
, "Smart": 241
, "Jaguar": 239
, "Subaru": 33
, "other": 6416
});

db.insert(db.countries.FR, "2020-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2020/12",
{ "Renault|Zoe": 5978
, "Volkswagen|ID.3": 2550
, "Dacia|Spring": 1721
, "Fiat|500e": 1454
, "Renault|Twingo Z.E.": 1353
, "Peugeot|e-208": 1165
, "Tesla|Model 3": 878
, "Kia|Niro EV": 601
, "Volkswagen|e-up!": 525
, "Hyundai|Kona Electric": 474
, "Nissan|Leaf": 433
, "Mini|Cooper SE Electric": 387
, "Peugeot|e-2008": 313
, "Opel|Corsa-e": 280
, "Honda|e": 234
, "Smart|Fortwo ED": 218
, "Volkswagen|e-Golf": 210
, "BMW|i3 BEV": 207
, "Porsche|Taycan": 167
, "DS Automobiles|DS 3 Crossback E-Tense": 165
, "Audi|Q8 e-tron": 140
, "Volvo|XC40 Recharge pure electric": 134
, "Citroën|ë-C4": 134
, "Mercedes-Benz|EQV": 115
, "Aiways|U5": 98
, "Mazda|MX-30": 97
, "Seat|Mii Electric": 81
, "Škoda|Citigo-e": 79
, "Tesla|Model X": 79
, "Jaguar|I-Pace": 78
, "Tesla|Model S": 77
, "Kia|Soul EV": 61
, "Hyundai|Ioniq Electric": 49
, "MG|ZS EV": 44
, "Mercedes-Benz|eVito": 43
, "Smart|Forfour ED": 23
, "Mercedes-Benz|EQC": 22
, "Opel|Zafira-e": 21
, "Ford|Mustang Mach-E": 20
, "Nissan|e-NV200": 8
, "Citroën|ë-Jumpy": 6
, "Citroën|C-Zero": 6
, "Peugeot|e-Expert": 4
, "Citroën|E-Mehari": 1
, "other": 1
});

db.insert(db.countries.FR, "2021-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-01-vpfrance.pdf",
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
, "Mini": 1706
, "Volvo": 1143
, "Mazda": 801
, "Jeep": 447
, "Honda": 340
, "Land Rover": 295
, "Porsche": 228
, "Smart": 109
, "Mitsubishi": 92
, "Tesla": 86
, "Jaguar": 61
, "other": 4463
});

db.insert(db.countries.FR, "2021-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/1",
{ "Peugeot|e-208": 1346
, "Renault|Zoe": 1013
, "Kia|Niro EV": 748
, "Hyundai|Kona Electric": 475
, "Fiat|500e": 382
, "Renault|Twingo Z.E.": 370
, "Peugeot|e-2008": 360
, "Opel|Corsa-e": 281
, "Mini|Cooper SE Electric": 172
, "Volkswagen|ID.3": 142
, "Nissan|Leaf": 141
, "Citroën|ë-C4": 121
, "DS Automobiles|DS 3 Crossback E-Tense": 118
, "BMW|i3 BEV": 103
, "Kia|Soul EV": 98
, "Smart|Fortwo ED": 96
, "Tesla|Model 3": 73
, "Seat|Mii Electric": 54
, "MG|ZS EV": 43
, "Volkswagen|e-up!": 39
, "Dacia|Spring": 36
, "Audi|Q8 e-tron": 32
, "Mazda|MX-30": 29
, "Volvo|XC40 Recharge pure electric": 27
, "Hyundai|Ioniq Electric": 27
, "Porsche|Taycan": 19
, "Mercedes-Benz|EQC": 19
, "Aiways|U5": 19
, "Škoda|Citigo-e": 13
, "Smart|Forfour ED": 13
, "Tesla|Model X": 11
, "Peugeot|e-Expert": 11
, "Ford|Mustang Mach-E": 10
, "Citroën|ë-Jumpy": 9
, "Mercedes-Benz|EQV": 7
, "Jaguar|I-Pace": 5
, "Tesla|Model S": 2
, "Nissan|e-NV200": 2
, "BMW|iX3": 2
, "Opel|Zafira-e": 1
, "Mercedes-Benz|eVito": 1
, "Lexus|UX 300e": 1
});

db.insert(db.countries.FR, "2021-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-02-vpfrance.pdf",
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
, "Mini": 1677
, "Volvo": 1218
, "Tesla": 1175
, "Mazda": 840
, "Jeep": 576
, "Land Rover": 508
, "Honda": 380
, "Porsche": 213
, "Mitsubishi": 128
, "Jaguar": 106
, "Smart": 88
, "other": 4474
});

db.insert(db.countries.FR, "2021-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/2",
{ "Peugeot|e-208": 1484
, "Tesla|Model 3": 1166
, "Renault|Zoe": 1074
, "Renault|Twingo Z.E.": 810
, "Fiat|500e": 645
, "Kia|Niro EV": 567
, "Peugeot|e-2008": 446
, "Volkswagen|ID.3": 361
, "Hyundai|Kona Electric": 300
, "Opel|Corsa-e": 221
, "Nissan|Leaf": 203
, "Mini|Cooper SE Electric": 146
, "BMW|i3 BEV": 125
, "DS Automobiles|DS 3 Crossback E-Tense": 111
, "Volkswagen|e-up!": 97
, "Citroën|ë-C4": 88
, "Kia|Soul EV": 84
, "Smart|Fortwo ED": 80
, "Seat|Mii Electric": 67
, "Dacia|Spring": 60
, "MG|ZS EV": 54
, "Audi|Q8 e-tron": 27
, "Porsche|Taycan": 24
, "Mazda|MX-30": 23
, "Lexus|UX 300e": 21
, "Aiways|U5": 20
, "Mercedes-Benz|EQC": 18
, "Hyundai|Ioniq Electric": 15
, "Volkswagen|ID.4": 14
, "Volvo|XC40 Recharge pure electric": 11
, "Honda|e": 10
, "Škoda|Citigo-e": 8
, "Tesla|Model X": 8
, "Smart|Forfour ED": 8
, "BMW|iX3": 7
, "Citroën|ë-Jumpy": 5
, "Peugeot|e-Expert": 3
, "Nissan|e-NV200": 3
, "Jaguar|I-Pace": 3
, "Mercedes-Benz|eVito": 2
, "Mercedes-Benz|EQV": 2
, "Volkswagen|e-Golf": 1
, "Tesla|Model S": 1
, "Opel|Zafira-e": 1
, "Mercedes-Benz|EQA": 1
});

db.insert(db.countries.FR, "2021-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-03-vpfrance.pdf",
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
, "Volvo": 1724
, "Jeep": 1276
, "Mazda": 1018
, "Land Rover": 700
, "Honda": 612
, "Porsche": 343
, "Smart": 234
, "Mitsubishi": 206
, "Jaguar": 148
, "other": 6411
});

db.insert(db.countries.FR, "2021-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/3",
{ "Tesla|Model 3": 4524
, "Peugeot|e-208": 1667
, "Renault|Zoe": 1519
, "Renault|Twingo Z.E.": 1114
, "Fiat|500e": 838
, "Kia|Niro EV": 627
, "Volkswagen|ID.3": 527
, "Peugeot|e-2008": 509
, "Nissan|Leaf": 507
, "Mini|Cooper SE Electric": 499
, "Hyundai|Kona Electric": 409
, "Volkswagen|ID.4": 408
, "DS Automobiles|DS 3 Crossback E-Tense": 287
, "Volkswagen|e-up!": 286
, "Citroën|ë-C4": 237
, "Dacia|Spring": 229
, "Smart|Fortwo ED": 204
, "Opel|Corsa-e": 191
, "Seat|Mii Electric": 125
, "BMW|i3 BEV": 120
, "MG|ZS EV": 92
, "Audi|Q8 e-tron": 58
, "Kia|Soul EV": 55
, "Porsche|Taycan": 54
, "BMW|iX3": 41
, "Hyundai|Ioniq Electric": 32
, "Mazda|MX-30": 31
, "Smart|Forfour ED": 30
, "Honda|e": 30
, "Lexus|UX 300e": 20
, "Citroën|ë-Jumpy": 19
, "Volvo|XC40 Recharge pure electric": 18
, "Toyota|Proace Electric": 16
, "Mercedes-Benz|EQC": 15
, "Peugeot|e-Expert": 13
, "Aiways|U5": 13
, "Audi|e-tron GT": 11
, "Nissan|e-NV200": 8
, "Mercedes-Benz|EQV": 8
, "Škoda|Citigo-e": 7
, "Jaguar|I-Pace": 5
, "Volkswagen|e-Golf": 3
, "Tesla|Model X": 3
, "Opel|Zafira-e": 2
, "Ford|Mustang Mach-E": 1
, "other": 1
});

db.insert(db.countries.FR, "2021-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-04-vpfrance.pdf",
{ "Peugeot": 26142
, "Renault": 21836
, "Citroën": 14129
, "Volkswagen": 9596
, "Toyota": 8171
, "Dacia": 8025
, "Mercedes-Benz": 4888
, "Audi": 4486
, "BMW": 4476
, "Hyundai": 3973
, "Opel": 3865
, "Ford": 3632
, "Kia": 3630
, "Fiat": 3470
, "Škoda": 3093
, "Seat": 2800
, "Mini": 2654
, "Nissan": 1967
, "Volvo": 1626
, "Mazda": 691
, "Jeep": 668
, "Land Rover": 607
, "Honda": 393
, "Jaguar": 277
, "Porsche": 264
, "Tesla": 211
, "Smart": 117
, "Mitsubishi": 100
, "other": 4639
});

db.insert(db.countries.FR, "2021-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/4",
{ "Peugeot|e-208": 1537
, "Renault|Zoe": 1265
, "Fiat|500e": 740
, "Renault|Twingo Z.E.": 679
, "Mini|Cooper SE Electric": 592
, "Kia|Niro EV": 481
, "Peugeot|e-2008": 427
, "Hyundai|Kona Electric": 397
, "Volkswagen|ID.3": 391
, "Volkswagen|ID.4": 372
, "Citroën|ë-C4": 282
, "Dacia|Spring": 249
, "Nissan|Leaf": 224
, "Tesla|Model 3": 209
, "Opel|Corsa-e": 186
, "BMW|i3 BEV": 157
, "DS Automobiles|DS 3 Crossback E-Tense": 144
, "Škoda|Enyaq": 134
, "Volkswagen|e-up!": 113
, "Smart|Fortwo ED": 99
, "Mercedes-Benz|EQA": 96
, "Hyundai|Ioniq Electric": 96
, "Opel|Mokka-e": 86
, "Kia|Soul EV": 76
, "MG|ZS EV": 67
, "BMW|iX3": 65
, "Porsche|Taycan": 62
, "Honda|e": 55
, "Mazda|MX-30": 49
, "Seat|Mii Electric": 30
, "Volvo|XC40 Recharge pure electric": 25
, "Audi|Q8 e-tron": 22
, "Peugeot|e-Expert": 19
, "Lexus|UX 300e": 19
, "Smart|Forfour ED": 18
, "Mercedes-Benz|EQC": 17
, "Citroën|ë-Jumpy": 14
, "Audi|e-tron GT": 14
, "Aiways|U5": 14
, "Mercedes-Benz|EQV": 9
, "Škoda|Citigo-e": 8
, "Ford|Mustang Mach-E": 7
, "Jaguar|I-Pace": 4
, "Toyota|Proace Electric": 3
, "Nissan|e-NV200": 3
, "Tesla|Model X": 2
, "Opel|Zafira-e": 1
, "Citroën|ë-Berlingo Electric": 1
});

db.insert(db.countries.FR, "2021-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-05-vpfrance.pdf",
{ "Renault": 26163
, "Peugeot": 22623
, "Citroën": 12304
, "Volkswagen": 10885
, "Dacia": 9387
, "Toyota": 7680
, "Audi": 4996
, "BMW": 4018
, "Mercedes-Benz": 3949
, "Ford": 3787
, "Hyundai": 3622
, "Fiat": 3520
, "Opel": 3276
, "Kia": 3197
, "Škoda": 3098
, "Seat": 2832
, "Tesla": 2111
, "Mini": 2096
, "Volvo": 1541
, "Nissan": 1408
, "Jeep": 834
, "Mazda": 795
, "Honda": 580
, "Land Rover": 496
, "Porsche": 338
, "Jaguar": 220
, "Smart": 118
, "Mitsubishi": 79
, "other": 5087
});

db.insert(db.countries.FR, "2021-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/5",
{ "Renault|Zoe": 2577
, "Tesla|Model 3": 2111
, "Peugeot|e-208": 1199
, "Fiat|500e": 845
, "Renault|Twingo Z.E.": 490
, "Kia|Niro EV": 434
, "Hyundai|Kona Electric": 414
, "Peugeot|e-2008": 405
, "Mini|Cooper SE Electric": 395
, "Volkswagen|ID.3": 365
, "Škoda|Enyaq": 234
, "Nissan|Leaf": 207
, "Volkswagen|ID.4": 204
, "Citroën|ë-C4": 197
, "Opel|Corsa-e": 191
, "Volkswagen|e-up!": 156
, "Ford|Mustang Mach-E": 126
, "BMW|i3 BEV": 121
, "Smart|Fortwo ED": 94
, "MG|ZS EV": 86
, "DS Automobiles|DS 3 Crossback E-Tense": 80
, "Mercedes-Benz|EQA": 76
, "Porsche|Taycan": 56
, "Opel|Mokka-e": 53
, "Mazda|MX-30": 48
, "Seat|Mii Electric": 47
, "Kia|Soul EV": 41
, "Hyundai|Ioniq Electric": 35
, "Dacia|Spring": 33
, "Peugeot|e-Expert": 29
, "Volvo|XC40 Recharge pure electric": 28
, "Audi|Q8 e-tron": 26
, "Smart|Forfour ED": 24
, "Audi|e-tron GT": 23
, "BMW|iX3": 20
, "Aiways|U5": 19
, "Honda|e": 15
, "Citroën|ë-Jumpy": 15
, "Mercedes-Benz|EQC": 13
, "Mercedes-Benz|EQV": 11
, "Lexus|UX 300e": 7
, "Jaguar|I-Pace": 4
, "Nissan|e-NV200": 3
, "Škoda|Citigo-e": 1
, "Toyota|Proace Electric": 1
, "Mercedes-Benz|eVito": 1
, "other": 4
});

db.insert(db.countries.FR, "2021-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-06-vpfrance.pdf",
{ "Renault": 36734
, "Peugeot": 29806
, "Citroën": 18714
, "Dacia": 14910
, "Volkswagen": 14889
, "Toyota": 11458
, "Audi": 6788
, "Fiat": 5829
, "Hyundai": 5023
, "Opel": 5006
, "Tesla": 5002
, "Mercedes-Benz": 4776
, "Kia": 4568
, "Ford": 4359
, "BMW": 4344
, "Škoda": 3711
, "Seat": 3617
, "Mini": 2389
, "Nissan": 2196
, "Volvo": 1791
, "Jeep": 1725
, "Mazda": 1164
, "Honda": 575
, "Land Rover": 561
, "Porsche": 459
, "Jaguar": 226
, "Mitsubishi": 202
, "Smart": 151
, "other": 8535
});

db.insert(db.countries.FR, "2021-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/6",
{ "Tesla|Model 3": 5001
, "Renault|Zoe": 3349
, "Peugeot|e-208": 1900
, "Fiat|500e": 1413
, "Renault|Twingo Z.E.": 961
, "Volkswagen|ID.3": 722
, "Kia|Niro EV": 715
, "Peugeot|e-2008": 624
, "Dacia|Spring": 556
, "Seat|Mii Electric": 531
, "Hyundai|Kona Electric": 494
, "Volkswagen|ID.4": 387
, "DS Automobiles|DS 3 Crossback E-Tense": 381
, "Nissan|Leaf": 371
, "Mini|Cooper SE Electric": 357
, "Opel|Corsa-e": 342
, "MG|ZS EV": 286
, "Škoda|Enyaq": 282
, "Hyundai|Ioniq 5": 278
, "Citroën|ë-C4": 234
, "Mercedes-Benz|EQA": 197
, "BMW|i3 BEV": 170
, "Mazda|MX-30": 144
, "Smart|Fortwo ED": 139
, "Ford|Mustang Mach-E": 122
, "Audi|Q4 e-tron": 119
, "Volkswagen|e-up!": 113
, "Kia|Soul EV": 82
, "Porsche|Taycan": 71
, "BMW|iX3": 65
, "Lexus|UX 300e": 62
, "Volvo|XC40 Recharge pure electric": 61
, "Opel|Mokka-e": 57
, "Audi|Q8 e-tron": 48
, "Peugeot|e-Expert": 34
, "Audi|e-tron GT": 32
, "Mercedes-Benz|EQC": 28
, "Honda|e": 28
, "Nissan|e-NV200": 27
, "Aiways|U5": 27
, "Citroën|ë-Berlingo Electric": 23
, "Hyundai|Ioniq Electric": 19
, "Smart|Forfour ED": 12
, "Citroën|ë-Jumpy": 11
, "Opel|Zafira-e": 6
, "Peugeot|e-Rifter": 5
, "MG|Marvel R": 3
, "Jaguar|I-Pace": 3
, "Škoda|Citigo-e": 2
, "other": 5
});

db.insert(db.countries.FR, "2021-07", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-07-vp-france.pdf",
{ "Peugeot": 21058
, "Renault": 13236
, "Citroën": 10260
, "Dacia": 9000
, "Volkswagen": 8782
, "Toyota": 8595
, "Hyundai": 3921
, "Audi": 3830
, "Mercedes-Benz": 3736
, "Kia": 3570
, "BMW": 3211
, "Opel": 2922
, "Fiat": 2631
, "Ford": 2470
, "Škoda": 2435
, "Seat": 2330
, "Nissan": 2083
, "Mini": 2069
, "Volvo": 1348
, "Jeep": 1155
, "Mazda": 676
, "Land Rover": 413
, "Honda": 339
, "Porsche": 294
, "Mitsubishi": 187
, "Jaguar": 158
, "Smart": 135
, "Tesla": 43
, "other": 4826
});

db.insert(db.countries.FR, "2021-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/7",
{ "Renault|Zoe": 1148
, "Peugeot|e-208": 898
, "Fiat|500e": 632
, "Kia|Niro EV": 472
, "Hyundai|Kona Electric": 451
, "Renault|Twingo Z.E.": 425
, "Mini|Cooper SE Electric": 341
, "Peugeot|e-2008": 323
, "Volkswagen|ID.3": 264
, "MG|ZS EV": 231
, "Opel|Corsa-e": 201
, "Volkswagen|ID.4": 177
, "Nissan|Leaf": 168
, "Hyundai|Ioniq 5": 129
, "Citroën|ë-C4": 126
, "Škoda|Enyaq": 124
, "Ford|Mustang Mach-E": 112
, "Volkswagen|e-up!": 105
, "Mercedes-Benz|EQA": 105
, "Smart|Forfour ED": 104
, "DS Automobiles|DS 3 Crossback E-Tense": 96
, "Kia|Soul EV": 90
, "BMW|i3 BEV": 81
, "Peugeot|e-Rifter": 69
, "Dacia|Spring": 65
, "BMW|iX3": 57
, "Porsche|Taycan": 53
, "Opel|Mokka-e": 51
, "Audi|Q4 e-tron": 50
, "Tesla|Model 3": 43
, "Volvo|XC40 Recharge pure electric": 33
, "Smart|Fortwo ED": 31
, "Citroën|ë-Berlingo Electric": 31
, "Audi|e-tron GT": 30
, "Peugeot|e-Expert": 23
, "Mazda|MX-30": 23
, "Lexus|UX 300e": 21
, "Audi|Q8 e-tron": 19
, "Citroën|ë-Jumpy": 18
, "Seat|Mii Electric": 17
, "Hyundai|Ioniq Electric": 16
, "Honda|e": 16
, "Aiways|U5": 16
, "Mercedes-Benz|EQV": 11
, "Mercedes-Benz|EQC": 11
, "Nissan|e-NV200": 6
, "Opel|Zafira-e": 3
, "Jaguar|I-Pace": 3
, "Škoda|Citigo-e": 1
, "other": 4
});

db.insert(db.countries.FR, "2021-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-08-vp-france.pdf",
{ "Renault": 12856
, "Peugeot": 12493
, "Citroën": 8917
, "Dacia": 7820
, "Toyota": 6581
, "Volkswagen": 5933
, "BMW": 2769
, "Audi": 2717
, "Tesla": 2658
, "Hyundai": 2560
, "Mercedes-Benz": 2321
, "Kia": 2210
, "Ford": 2155
, "Opel": 2072
, "Fiat": 1676
, "Mini": 1585
, "Škoda": 1517
, "Seat": 1255
, "Nissan": 1137
, "Volvo": 730
, "Jeep": 622
, "Mazda": 530
, "Honda": 293
, "Porsche": 229
, "Land Rover": 228
, "Mitsubishi": 102
, "Jaguar": 60
, "Smart": 55
, "other": 3984
});

db.insert(db.countries.FR, "2021-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/8",
{ "Tesla|Model 3": 2541
, "Renault|Zoe": 1177
, "Peugeot|e-208": 1033
, "MG|ZS EV": 659
, "Fiat|500e": 503
, "Volkswagen|ID.3": 388
, "Mini|Cooper SE Electric": 382
, "Renault|Twingo Z.E.": 335
, "Hyundai|Kona Electric": 304
, "Kia|Niro EV": 293
, "Peugeot|e-2008": 212
, "Dacia|Spring": 183
, "Nissan|Leaf": 174
, "Volkswagen|ID.4": 169
, "Škoda|Enyaq": 167
, "Opel|Corsa-e": 130
, "Ford|Mustang Mach-E": 122
, "Citroën|ë-C4": 120
, "Tesla|Model Y": 117
, "Hyundai|Ioniq 5": 114
, "Volkswagen|e-up!": 102
, "Mercedes-Benz|EQA": 76
, "BMW|i3 BEV": 64
, "DS Automobiles|DS 3 Crossback E-Tense": 48
, "Smart|Fortwo ED": 47
, "Opel|Mokka-e": 46
, "BMW|iX3": 41
, "Audi|Q8 e-tron": 38
, "Aiways|U5": 38
, "Audi|e-tron GT": 32
, "Citroën|ë-Jumpy": 31
, "Porsche|Taycan": 30
, "Kia|Soul EV": 30
, "Honda|e": 27
, "Audi|Q4 e-tron": 22
, "Mazda|MX-30": 18
, "Hyundai|Ioniq Electric": 18
, "Volvo|XC40 Recharge pure electric": 16
, "Seat|Mii Electric": 13
, "Mercedes-Benz|EQV": 10
, "Smart|Forfour ED": 8
, "Mercedes-Benz|EQC": 8
, "Peugeot|e-Expert": 7
, "Lexus|UX 300e": 5
, "Jaguar|I-Pace": 4
, "Opel|Zafira-e": 3
, "Mercedes-Benz|eVito": 3
, "Peugeot|e-Rifter": 2
, "other": 1
});

db.insert(db.countries.FR, "2021-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-09-vp-france.pdf",
{ "Renault": 24327
, "Peugeot": 20748
, "Citroën": 13930
, "Dacia": 11903
, "Volkswagen": 7359
, "Toyota": 5970
, "Audi": 4434
, "Hyundai": 4375
, "Kia": 4169
, "Ford": 3830
, "BMW": 3571
, "Fiat": 3377
, "Tesla": 3263
, "Opel": 3030
, "Mercedes-Benz": 3009
, "Nissan": 2031
, "Seat": 1876
, "Škoda": 1870
, "Mini": 1401
, "Volvo": 1022
, "Mazda": 991
, "Jeep": 842
, "Honda": 492
, "Land Rover": 461
, "Porsche": 202
, "Mitsubishi": 141
, "Smart": 138
, "Jaguar": 44
, "other": 5024
});

db.insert(db.countries.FR, "2021-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/9",
{ "Tesla|Model 3": 2833
, "Renault|Zoe": 2382
, "Peugeot|e-208": 2090
, "Dacia|Spring": 2089
, "Fiat|500e": 864
, "Volkswagen|ID.3": 749
, "Renault|Twingo Z.E.": 598
, "Peugeot|e-2008": 558
, "Kia|Niro EV": 557
, "Tesla|Model Y": 430
, "Hyundai|Kona Electric": 337
, "Opel|Corsa-e": 301
, "Citroën|ë-C4": 294
, "Mini|Cooper SE Electric": 285
, "Nissan|Leaf": 260
, "Škoda|Enyaq": 231
, "Volkswagen|ID.4": 195
, "Volkswagen|e-up!": 189
, "BMW|i3 BEV": 186
, "Hyundai|Ioniq 5": 184
, "DS Automobiles|DS 3 Crossback E-Tense": 182
, "Mazda|MX-30": 151
, "Smart|Fortwo ED": 119
, "Opel|Mokka-e": 119
, "Mercedes-Benz|EQA": 80
, "Audi|Q8 e-tron": 78
, "Audi|Q4 e-tron": 78
, "Ford|Mustang Mach-E": 70
, "Porsche|Taycan": 55
, "Kia|Soul EV": 44
, "Hyundai|Ioniq Electric": 44
, "Volvo|XC40 Recharge pure electric": 37
, "BMW|iX3": 36
, "Aiways|U5": 32
, "Seat|Mii Electric": 30
, "MG|ZS EV": 26
, "Citroën|ë-Berlingo Electric": 21
, "Audi|e-tron GT": 21
, "Smart|Forfour ED": 19
, "Mercedes-Benz|EQC": 17
, "Kia|EV6": 15
, "BMW|iX": 14
, "Honda|e": 13
, "Citroën|ë-Jumpy": 13
, "Peugeot|e-Expert": 11
, "Mercedes-Benz|EQV": 11
, "Opel|Zafira-e": 10
, "Peugeot|e-Rifter": 9
, "Lexus|UX 300e": 8
, "Toyota|Proace Electric": 6
, "other": 9
});

db.insert(db.countries.FR, "2021-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-10-vp-france.pdf",
{ "Peugeot": 21538
, "Renault": 20442
, "Citroën": 11909
, "Dacia": 9800
, "Toyota": 6631
, "Volkswagen": 5840
, "Kia": 4078
, "Mercedes-Benz": 4009
, "Hyundai": 3972
, "BMW": 3094
, "Fiat": 3067
, "Audi": 2907
, "Ford": 2290
, "Nissan": 1908
, "Škoda": 1877
, "Opel": 1702
, "Mini": 1623
, "Seat": 1381
, "Volvo": 1189
, "Tesla": 977
, "Jeep": 952
, "Mazda": 713
, "Land Rover": 494
, "Honda": 473
, "Porsche": 327
, "Mitsubishi": 189
, "Smart": 167
, "Jaguar": 54
, "other": 4916
});

db.insert(db.countries.FR, "2021-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/10",
{ "Renault|Zoe": 2348
, "Dacia|Spring": 2204
, "Peugeot|e-208": 1732
, "Tesla|Model 3": 951
, "Renault|Twingo Z.E.": 903
, "Fiat|500e": 875
, "Peugeot|e-2008": 655
, "Kia|Niro EV": 530
, "Mini|Cooper SE Electric": 466
, "Hyundai|Kona Electric": 463
, "Volkswagen|ID.3": 448
, "Kia|EV6": 408
, "Volkswagen|ID.4": 399
, "Citroën|ë-C4": 342
, "Škoda|Enyaq": 292
, "Nissan|Leaf": 288
, "Hyundai|Ioniq 5": 207
, "Opel|Corsa-e": 154
, "MG|Marvel R": 144
, "Smart|Fortwo ED": 139
, "BMW|i3 BEV": 135
, "MG|ZS EV": 125
, "DS Automobiles|DS 3 Crossback E-Tense": 122
, "Mercedes-Benz|EQA": 116
, "Mazda|MX-30": 115
, "Volkswagen|e-up!": 108
, "Opel|Mokka-e": 101
, "Audi|Q4 e-tron": 90
, "Porsche|Taycan": 85
, "Citroën|ë-Berlingo Electric": 80
, "Kia|Soul EV": 60
, "Honda|e": 49
, "Citroën|ë-Jumpy": 41
, "Seat|Mii Electric": 40
, "Volvo|XC40 Recharge pure electric": 38
, "Ford|Mustang Mach-E": 32
, "Peugeot|e-Expert": 30
, "Hyundai|Ioniq Electric": 29
, "Smart|Forfour ED": 28
, "Tesla|Model Y": 26
, "Peugeot|e-Rifter": 23
, "Audi|e-tron GT": 22
, "Audi|Q8 e-tron": 21
, "Mercedes-Benz|EQC": 20
, "Aiways|U5": 20
, "Mercedes-Benz|EQS": 17
, "BMW|iX3": 14
, "Mercedes-Benz|EQV": 12
, "Renault|Megane E-Tech": 9
, "Lexus|UX 300e": 6
, "other": 20
});

db.insert(db.countries.FR, "2021-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2021-11-vp-france.pdf",
{ "Peugeot": 19589
, "Renault": 18936
, "Citroën": 13171
, "Dacia": 11085
, "Toyota": 7064
, "Volkswagen": 6340
, "Mercedes-Benz": 4407
, "Kia": 4057
, "Audi": 3998
, "BMW": 3850
, "Hyundai": 3286
, "Fiat": 3064
, "Opel": 2381
, "Tesla": 2142
, "Ford": 2004
, "Nissan": 1967
, "Mini": 1918
, "Škoda": 1856
, "Volvo": 1315
, "Seat": 1196
, "Jeep": 755
, "Mazda": 652
, "Honda": 467
, "Land Rover": 419
, "Porsche": 361
, "Mitsubishi": 322
, "Smart": 160
, "Jaguar": 96
, "other": 5136
});

db.insert(db.countries.FR, "2021-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/11",
{ "Dacia|Spring": 2895
, "Renault|Zoe": 2189
, "Tesla|Model 3": 1500
, "Peugeot|e-208": 1374
, "Renault|Twingo Z.E.": 831
, "Fiat|500e": 807
, "Tesla|Model Y": 642
, "Mini|Cooper SE Electric": 566
, "Volkswagen|ID.3": 524
, "Hyundai|Kona Electric": 487
, "Peugeot|e-2008": 445
, "Kia|Niro EV": 431
, "Kia|EV6": 384
, "Citroën|ë-C4": 349
, "Nissan|Leaf": 309
, "Škoda|Enyaq": 266
, "Volkswagen|ID.4": 237
, "Hyundai|Ioniq 5": 195
, "Opel|Corsa-e": 155
, "BMW|i3 BEV": 148
, "Smart|Fortwo ED": 143
, "BMW|iX": 141
, "Mazda|MX-30": 132
, "Opel|Mokka-e": 125
, "Mercedes-Benz|EQA": 120
, "Audi|Q4 e-tron": 105
, "Volkswagen|e-up!": 101
, "DS Automobiles|DS 3 Crossback E-Tense": 90
, "Ford|Mustang Mach-E": 75
, "Kia|Soul EV": 56
, "Porsche|Taycan": 51
, "Honda|e": 45
, "Audi|Q8 e-tron": 45
, "Seat|Mii Electric": 40
, "Citroën|ë-Jumpy": 38
, "MG|Marvel R": 32
, "Aiways|U5": 32
, "Volvo|XC40 Recharge pure electric": 31
, "Peugeot|e-Expert": 30
, "Audi|e-tron GT": 28
, "Citroën|ë-Berlingo Electric": 26
, "Mercedes-Benz|EQC": 23
, "Peugeot|e-Rifter": 20
, "BMW|i4": 20
, "Cupra|Born": 19
, "Hyundai|Ioniq Electric": 18
, "BMW|iX3": 18
, "Smart|Forfour ED": 17
, "Mercedes-Benz|EQV": 14
, "other": 51
});

db.insert(db.countries.FR, "2021-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/01/2021-12-vp-france.pdf",
{ "Renault": 26787
, "Peugeot": 26609
, "Citroën": 13115
, "Dacia": 12599
, "Volkswagen": 8919
, "Toyota": 7311
, "Mercedes-Benz": 7008
, "Audi": 4384
, "BMW": 4371
, "Tesla": 4251
, "Ford": 4155
, "Hyundai": 4088
, "Kia": 3927
, "Fiat": 3848
, "Mini": 3203
, "Opel": 2759
, "Volvo": 2638
, "Nissan": 2560
, "Škoda": 2546
, "Seat": 1690
, "Porsche": 1229
, "Jeep": 970
, "Land Rover": 896
, "Mazda": 611
, "Honda": 430
, "Jaguar": 268
, "Mitsubishi": 219
, "Smart": 130
, "Subaru": 23
, "other": 6573
});

db.insert(db.countries.FR, "2021-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2021/12",
{ "Tesla|Model 3": 3959
, "Renault|Zoe": 3532
, "Dacia|Spring": 2787
, "Peugeot|e-208": 1598
, "Renault|Twingo Z.E.": 1321
, "Fiat|500e": 1012
, "Volkswagen|ID.3": 979
, "Mini|Cooper SE Electric": 940
, "Nissan|Leaf": 677
, "Kia|EV6": 599
, "Peugeot|e-2008": 497
, "Volkswagen|ID.4": 471
, "Hyundai|Kona Electric": 471
, "Kia|Niro EV": 449
, "Škoda|Enyaq": 422
, "Tesla|Model Y": 292
, "BMW|i3 BEV": 268
, "Hyundai|Ioniq 5": 262
, "MG|ZS EV": 235
, "Volkswagen|e-up!": 212
, "Audi|Q4 e-tron": 184
, "Citroën|ë-C4": 179
, "Mercedes-Benz|EQA": 173
, "Opel|Mokka-e": 154
, "DS Automobiles|DS 3 Crossback E-Tense": 147
, "Opel|Corsa-e": 126
, "Porsche|Taycan": 121
, "Smart|Fortwo ED": 113
, "Ford|Mustang Mach-E": 95
, "Honda|e": 71
, "Lexus|UX 300e": 67
, "Kia|Soul EV": 63
, "Audi|Q8 e-tron": 51
, "BMW|iX3": 47
, "BMW|iX": 44
, "Audi|e-tron GT": 43
, "Volvo|XC40 Recharge pure electric": 42
, "Mercedes-Benz|EQC": 40
, "Cupra|Born": 40
, "Renault|Megane E-Tech": 36
, "BMW|i4": 35
, "Peugeot|e-Rifter": 24
, "Peugeot|e-Expert": 24
, "Hyundai|Ioniq Electric": 24
, "Smart|Forfour ED": 17
, "Seat|Mii Electric": 15
, "Citroën|ë-Berlingo Electric": 15
, "MG|Marvel R": 14
, "Jaguar|I-Pace": 12
, "other": 169
});

db.insert(db.countries.FR, "2022-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/02/2022-01-vp-france.pdf",
{ "Peugeot": 20458
, "Renault": 15662
, "Citroën": 10600
, "Dacia": 7475
, "Toyota": 7190
, "Volkswagen": 6484
, "Hyundai": 3513
, "Kia": 3333
, "Ford": 2783
, "Opel": 2511
, "BMW": 2480
, "Audi": 2398
, "Mini": 2281
, "Mercedes-Benz": 2129
, "Fiat": 1787
, "Škoda": 1784
, "Nissan": 1732
, "Seat": 1412
, "Volvo": 758
, "Mazda": 543
, "Jeep": 409
, "Honda": 340
, "Mitsubishi": 225
, "Porsche": 147
, "Land Rover": 133
, "Smart": 97
, "Tesla": 48
, "Jaguar": 36
, "other": 4151
});

db.insert(db.countries.FR, "2022-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2022/1",
{ "Dacia|Spring": 1494
, "Renault|Zoe": 1362
, "Peugeot|e-208": 1183
, "Renault|Twingo Z.E.": 812
, "Fiat|500e": 623
, "Peugeot|e-2008": 523
, "Hyundai|Kona Electric": 474
, "Kia|Niro EV": 392
, "Kia|EV6": 351
, "Mini|Cooper SE Electric": 333
, "Citroën|ë-C4": 235
, "Nissan|Leaf": 206
, "Hyundai|Ioniq 5": 202
, "Volkswagen|ID.3": 186
, "Opel|Mokka-e": 161
, "Audi|Q4 e-tron": 133
, "Škoda|Enyaq": 113
, "Volkswagen|e-up!": 89
, "Smart|Fortwo ED": 87
, "BMW|i3 BEV": 85
, "Mazda|MX-30": 76
, "Opel|Corsa-e": 73
, "Cupra|Born": 62
, "Porsche|Taycan": 54
, "Mercedes-Benz|EQA": 53
, "Volkswagen|ID.4": 49
, "Kia|Soul EV": 39
, "Ford|Mustang Mach-E": 39
, "Audi|e-tron GT": 39
, "Peugeot|e-Rifter": 38
, "Tesla|Model 3": 37
, "Renault|Megane E-Tech": 36
, "Audi|Q8 e-tron": 35
, "Lexus|UX 300e": 33
, "Volvo|C40 Recharge": 31
, "Volvo|XC40 Recharge pure electric": 22
, "Citroën|ë-Jumpy": 18
, "Hyundai|Ioniq Electric": 17
, "Honda|e": 16
, "BMW|iX3": 16
, "BMW|iX": 16
, "Opel|Combo-e": 13
, "Mercedes-Benz|EQC": 13
, "Aiways|U5": 13
, "Peugeot|e-Expert": 12
, "Mercedes-Benz|EQV": 12
, "Tesla|Model Y": 11
, "Smart|Forfour ED": 10
, "Opel|Zafira-e": 8
, "Mercedes-Benz|EQS": 3
, "other": 280
});

db.insert(db.countries.FR, "2022-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/03/2022-02-vp-france.pdf",
{ "Peugeot": 19346
, "Renault": 16150
, "Citroën": 11975
, "Dacia": 8887
, "Volkswagen": 7439
, "Toyota": 6500
, "Ford": 3631
, "Hyundai": 3618
, "Tesla": 3583
, "BMW": 3481
, "Kia": 3400
, "Mercedes-Benz": 3259
, "Audi": 2877
, "Fiat": 2818
, "Opel": 2759
, "Nissan": 2175
, "Škoda": 2126
, "Mini": 2039
, "Seat": 1452
, "Volvo": 1048
, "Honda": 520
, "Mazda": 494
, "Jeep": 484
, "Land Rover": 260
, "Porsche": 257
, "Mitsubishi": 117
, "Smart": 84
, "Jaguar": 68
, "other": 4536
});

db.insert(db.countries.FR, "2022-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/FR/Brands/Month/2022/2, https://www.avere-france.org/wp-content/uploads/2022/04/barometre-avere-colombus-mars-2022-1.pdf",
{ "Tesla|Model 3": 2717
, "Dacia|Spring": 1348
, "Renault|Zoe": 1088
, "Fiat|500e": 1028
, "Renault|Twingo Z.E.": 867
, "Tesla|Model Y": 866
, "Peugeot|e-208": 783
, "Kia|EV6": 402
, "Mini|Cooper SE Electric": 370
, "Hyundai|Kona Electric": 362
, "Peugeot|e-2008": 344
, "Kia|Soul EV": 314
, "Citroën|ë-C4": 291
, "Hyundai|Ioniq 5": 286
, "Nissan|Leaf": 223
, "BMW|i3 BEV": 206
, "Opel|Mokka-e": 187
, "Audi|Q4 e-tron": 130
, "Volkswagen|ID.3": 128
, "Škoda|Enyaq": 116
, "Volvo|XC40 Recharge pure electric": 106
, "Mercedes-Benz|EQA": 105
, "Opel|Corsa-e": 84
, "Smart|Fortwo ED": 75
, "Volkswagen|e-up!": 52
, "BMW|iX3": 45
, "Volkswagen|ID.4": 38
, "Lexus|UX 300e": 38
, "Audi|e-tron GT": 37
, "Audi|Q8 e-tron": 36
, "Volvo|C40 Recharge": 34
, "Ford|Mustang Mach-E": 33
, "Porsche|Taycan": 29
, "Renault|Megane E-Tech": 23
, "Honda|e": 22
, "Peugeot|e-Expert": 20
, "Mercedes-Benz|EQS": 20
, "Mercedes-Benz|EQC": 14
, "Mazda|MX-30": 13
, "BMW|iX": 12
, "Jaguar|I-Pace": 11
, "Hyundai|Ioniq Electric": 11
, "Smart|Forfour ED": 9
, "Aiways|U5": 9
, "Mercedes-Benz|EQV": 8
, "Kia|Niro EV": 7
, "Peugeot|e-Rifter": 5
, "Citroën|ë-Jumpy": 5
, "Opel|Zafira-e": 3
, "Opel|Combo-e": 2
, "other": 491
});

db.insert(db.countries.FR, "2022-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/04/2022-03-vp-france.pdf",
{ "Peugeot": 21598
, "Renault": 20874
, "Citroën": 13843
, "Dacia": 12719
, "Volkswagen": 10096
, "Toyota": 7584
, "Ford": 6088
, "Mercedes-Benz": 4890
, "Tesla": 4850
, "Kia": 4502
, "Audi": 4288
, "Hyundai": 4040
, "BMW": 3981
, "Opel": 3403
, "Fiat": 3239
, "Nissan": 3032
, "Škoda": 3032
, "Mini": 2068
, "Seat": 1551
, "Volvo": 1389
, "Mazda": 783
, "Honda": 710
, "Jeep": 672
, "Land Rover": 370
, "Porsche": 250
, "Smart": 186
, "Jaguar": 128
, "Mitsubishi": 119
, "other": 6792
});

db.insert(db.countries.FR, "2022-03", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2022/04/barometre-avere-colombus-avril-2022-1.pdf",
{ "Tesla|Model 3": 3882
, "Dacia|Spring": 2111
, "Peugeot|e-208": 1842
, "Fiat|500e": 1562
, "Renault|Twingo Z.E.": 1498
, "Renault|Zoe": 1127
, "Tesla|Model Y": 968
, "Kia|Niro EV": 584
, "Citroën|ë-C4": 560
, "Hyundai|Kona Electric": 513
, "other": 5188
});

db.insert(db.countries.FR, "2022-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/05/2022-04-vp-france.pdf",
{ "Peugeot": 17708
, "Renault": 14920
, "Citroën": 9333
, "Dacia": 8550
, "Volkswagen": 6603
, "Toyota": 6506
, "Ford": 4027
, "Kia": 3960
, "BMW": 3642
, "Hyundai": 3638
, "Mercedes-Benz": 3496
, "Fiat": 3411
, "Audi": 3098
, "Nissan": 2908
, "Opel": 2605
, "Škoda": 2553
, "Mini": 1502
, "Seat": 1183
, "Volvo": 811
, "Mazda": 483
, "Honda": 471
, "Jeep": 412
, "Land Rover": 346
, "Mitsubishi": 258
, "Porsche": 171
, "Tesla": 97
, "Smart": 93
, "Jaguar": 77
, "other": 5860
});

db.insert(db.countries.FR, "2022-04", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/publication/barometre-la-hausse-des-immatriculations-sest-poursuivie-en-avril-2022-bientot-900-000-vehicules-electriques-et-hybrides-rechargeables-en-circulation/",
{ "Fiat|500e": 1737
, "Dacia|Spring": 1568
, "Peugeot|e-208": 1375
, "Renault|Zoe": 1052
, "Renault|Twingo Z.E.": 948
, "Peugeot|e-2008": 722
, "Kia|Niro EV": 516
, "Hyundai|Kona Electric": 455
, "Citroën|ë-C4": 448
, "other": 3871
});

db.insert(db.countries.FR, "2022-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/06/2022-05-vp-france.pdf",
{ "Renault": 22969
, "Peugeot": 20741
, "Dacia": 9781
, "Citroën": 8672
, "Volkswagen": 7352
, "Toyota": 7205
, "Hyundai": 4714
, "Mercedes-Benz": 4245
, "BMW": 4220
, "Fiat": 4213
, "Audi": 4147
, "Ford": 4123
, "Opel": 3883
, "Kia": 3680
, "Škoda": 2350
, "Nissan": 2264
, "Mini": 2210
, "Seat": 1175
, "Jeep": 633
, "Volvo": 580
, "Mazda": 561
, "Honda": 523
, "Mitsubishi": 282
, "Land Rover": 208
, "Porsche": 171
, "Tesla": 152
, "Smart": 117
, "Jaguar": 100
, "other": 5550
});

db.insert(db.countries.FR, "2022-05", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/publication/barometre-en-mai-2022-la-barre-des-900-000-vehicules-electrifies-rechargeables-a-ete-franchie/",
{ "Fiat|500e": 2129
, "Peugeot|e-208": 1668
, "Renault|Twingo Z.E.": 1500
, "Renault|Zoe": 1447
, "Dacia|Spring": 1357
, "Renault|Megane E-Tech": 758
, "Mini|Cooper SE Electric": 733
, "Hyundai|Kona Electric": 634
, "Peugeot|e-2008": 561
, "Citroën|ë-C4": 369
, "other": 4089
});

db.insert(db.countries.FR, "2022-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/07/2022-06-vp-france.pdf",
{ "Renault": 36443
, "Peugeot": 28360
, "Dacia": 17278
, "Citroën": 13217
, "Volkswagen": 9103
, "Toyota": 8715
, "Mercedes-Benz": 5426
, "Opel": 4731
, "Hyundai": 4475
, "Fiat": 4379
, "Audi": 4166
, "BMW": 4092
, "Kia": 4053
, "Ford": 3537
, "Tesla": 3011
, "Škoda": 2930
, "Nissan": 2601
, "Mini": 1905
, "Seat": 1400
, "Volvo": 922
, "Jeep": 773
, "Mazda": 694
, "Honda": 569
, "Land Rover": 459
, "Porsche": 424
, "Mitsubishi": 190
, "Jaguar": 169
, "Smart": 117
, "other": 6946
});

db.insert(db.countries.FR, "2022-06", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/publication/barometre-des-immatriculations-de-vehicules-100-electriques-en-hausse-de-28-sur-le-premier-semestre-2022/",
{ "Peugeot|e-208": 2860
, "Renault|Twingo Z.E.": 2158
, "Renault|Zoe": 2048
, "Tesla|Model Y": 1964
, "Renault|Megane E-Tech": 1854
, "Fiat|500e": 1843
, "Dacia|Spring": 1325
, "Tesla|Model 3": 1047
, "Hyundai|Kona Electric": 618
, "Citroën|ë-C4": 568
, "other": 5603
});

db.insert(db.countries.FR, "2022-07", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/08/2022-07-vp-france.pdf",
{ "Peugeot": 17537
, "Renault": 15149
, "Citroën": 9480
, "Dacia": 9438
, "Toyota": 7772
, "Volkswagen": 6580
, "Hyundai": 4742
, "Fiat": 3551
, "Kia": 3481
, "Mercedes-Benz": 3413
, "Audi": 3183
, "BMW": 3149
, "Opel": 2988
, "Ford": 2611
, "Mini": 2103
, "Škoda": 2044
, "Nissan": 1547
, "Volvo": 1402
, "Seat": 967
, "Jeep": 521
, "Land Rover": 432
, "Mazda": 346
, "Honda": 328
, "Porsche": 285
, "Mitsubishi": 182
, "Jaguar": 93
, "Tesla": 79
, "Smart": 70
, "other": 4070
});

db.insert(db.countries.FR, "2022-07", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/publication/barometre-les-immatriculations-de-vehicules-100-electriques-en-hausse-de-62-par-rapport-a-lan-passe/",
{ "Renault|Megane E-Tech": 1937
, "Peugeot|e-208": 1379
, "Renault|Zoe": 953
, "Fiat|500e": 938
, "Peugeot|e-2008": 876
, "Renault|Twingo Z.E.": 818
, "Hyundai|Kona Electric": 711
, "Dacia|Spring": 661
, "Citroën|ë-C4": 348
, "Opel|Mokka-e": 310
, "other": 3805
});

db.insert(db.countries.FR, "2022-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/09/2022-08-vp-france.pdf",
{ "Peugeot": 14287
, "Renault": 10872
, "Citroën": 9568
, "Dacia": 8846
, "Toyota": 7227
, "Volkswagen": 5572
, "Ford": 3145
, "Opel": 2842
, "Hyundai": 2800
, "Mercedes-Benz": 2771
, "Kia": 2743
, "BMW": 2725
, "Audi": 2527
, "Fiat": 2434
, "Škoda": 1787
, "Mini": 1626
, "Nissan": 1520
, "Tesla": 957
, "Volvo": 820
, "Seat": 656
, "Mazda": 560
, "Land Rover": 308
, "Jeep": 307
, "Mitsubishi": 230
, "Honda": 208
, "Porsche": 147
, "Jaguar": 84
, "Smart": 59
, "other": 3766
});

db.insert(db.countries.FR, "2022-08", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/publication/barometre-en-aout-2022-les-vehicules-electriques-et-hybrides-rechargeables-se-sont-octroyes-plus-de-18-de-parts-de-marche/",
{ "Renault|Megane E-Tech": 1521
, "Fiat|500e": 1325
, "Dacia|Spring": 988
, "Peugeot|e-208": 889
, "Renault|Twingo Z.E.": 714
, "Tesla|Model Y": 702
, "Peugeot|e-2008": 602
, "Hyundai|Kona Electric": 465
, "Renault|Zoe": 438
, "Kia|Niro EV": 398
, "other": 4260
});

db.insert(db.countries.FR, "2022-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/10/2022-09-vp-france.pdf",
{ "Peugeot": 23534
, "Renault": 22240
, "Citroën": 12521
, "Dacia": 12213
, "Toyota": 9589
, "Volkswagen": 7873
, "Ford": 5187
, "Mercedes-Benz": 4665
, "Kia": 4232
, "Audi": 4067
, "Hyundai": 3765
, "BMW": 3601
, "Tesla": 3463
, "Opel": 3236
, "Škoda": 3052
, "Fiat": 2786
, "Mini": 1965
, "Nissan": 1958
, "Volvo": 1367
, "Mazda": 877
, "Seat": 643
, "Honda": 505
, "Land Rover": 497
, "Jeep": 341
, "Porsche": 258
, "Mitsubishi": 206
, "Smart": 142
, "Jaguar": 106
, "other": 6261
});

db.insert(db.countries.FR, "2022-09", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/publication/barometre-en-septembre-2022-les-vehicules-electriques-et-hybrides-rechargeables-se-sont-octroyes-pres-de-21-de-parts-de-marche/",
{ "Renault|Megane E-Tech": 2897
, "Tesla|Model 3": 2202
, "Dacia|Spring": 2170
, "Peugeot|e-208": 2129
, "Renault|Twingo Z.E.": 1387
, "Fiat|500e": 1269
, "Tesla|Model Y": 1261
, "Renault|Zoe": 1117
, "Peugeot|e-2008": 867
, "Volkswagen|ID.3": 632
, "other": 6550
});

db.insert(db.countries.FR, "2022-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/11/2022-10-vp-france.pdf",
{ "Peugeot": 21106
, "Renault": 18364
, "Toyota": 10288
, "Citroën": 10267
, "Dacia": 10157
, "Volkswagen": 8502
, "Kia": 4292
, "Mercedes-Benz": 4102
, "Hyundai": 3868
, "Audi": 3652
, "Ford": 3498
, "BMW": 3482
, "Fiat": 2798
, "Opel": 2643
, "Nissan": 2202
, "Škoda": 1908
, "Tesla": 1790
, "Mini": 1615
, "Volvo": 1301
, "Seat": 956
, "Mazda": 563
, "Honda": 408
, "Land Rover": 403
, "Jeep": 373
, "Porsche": 330
, "Mitsubishi": 190
, "Jaguar": 101
, "Smart": 96
, "other": 5744
});

db.insert(db.countries.FR, "2022-10", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/publication/barometre-nous-y-sommes-plus-d1-million-de-vehicules-electriques-et-hybrides-rechargeables-circulent-en-france/",
{ "Peugeot|e-208": 2350
, "Renault|Megane E-Tech": 2109
, "Fiat|500e": 1276
, "Tesla|Model 3": 1256
, "Renault|Twingo Z.E.": 810
, "Peugeot|e-2008": 642
, "Renault|Zoe": 635
, "Volkswagen|ID.3": 602
, "Hyundai|Kona Electric": 551
, "Dacia|Spring": 550
, "other": 6080
});

db.insert(db.countries.FR, "2022-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2022/12/2022-11-vp-france.pdf",
{ "Peugeot": 21510
, "Renault": 18788
, "Dacia": 10493
, "Citroën": 10397
, "Toyota": 10041
, "Volkswagen": 9355
, "Tesla": 5753
, "BMW": 4333
, "Ford": 4223
, "Kia": 4108
, "Mercedes-Benz": 4076
, "Audi": 4024
, "Hyundai": 3777
, "Mini": 2744
, "Fiat": 2511
, "Škoda": 2331
, "Opel": 2056
, "Nissan": 1992
, "Volvo": 1413
, "Seat": 917
, "Mazda": 459
, "Honda": 429
, "Porsche": 420
, "Land Rover": 362
, "Jeep": 267
, "Mitsubishi": 248
, "Smart": 142
, "Jaguar": 64
, "other": 6745
});

db.insert(db.countries.FR, "2022-11", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/publication/barometre-plus-d1-vehicule-neuf-sur-5-etait-en-novembre-2022-electrique-ou-hybride-rechargeable/",
{ "Tesla|Model Y": 2891
, "Tesla|Model 3": 2809
, "Dacia|Spring": 1954
, "Renault|Megane E-Tech": 1783
, "Peugeot|e-208": 1428
, "Mini|Cooper SE Electric": 760
, "Fiat|500e": 683
, "Hyundai|Kona Electric": 571
, "Volkswagen|ID.3": 559
, "Peugeot|e-2008": 531
, "other": 6305
});

db.insert(db.countries.FR, "2022-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/01/2022-12-vp-france.pdf",
{ "Renault": 23974
, "Peugeot": 19423
, "Dacia": 15018
, "Volkswagen": 12333
, "Toyota": 11651
, "Citroën": 10010
, "BMW": 6253
, "Mercedes-Benz": 5505
, "Tesla": 5416
, "Audi": 5260
, "Kia": 4440
, "Ford": 4242
, "Hyundai": 4156
, "Mini": 3591
, "Nissan": 3238
, "Škoda": 3007
, "Fiat": 2581
, "Opel": 2395
, "Volvo": 1704
, "Seat": 1372
, "Porsche": 997
, "Mazda": 677
, "Land Rover": 594
, "Jeep": 535
, "Honda": 427
, "Mitsubishi": 192
, "Smart": 138
, "Jaguar": 67
, "other": 8849
});

db.insert(db.countries.FR, "2022-12", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/01/barometre-avere-colombus-janvier-2023.pdf",
{ "Dacia|Spring": 2800
, "Tesla|Model 3": 2675
, "Renault|Megane E-Tech": 2534
, "Tesla|Model Y": 2493
, "Peugeot|e-208": 1333
, "Volkswagen|ID.3": 971
, "Mini|Cooper SE Electric": 840
, "Renault|Twingo Z.E.": 800
, "Fiat|500e": 750
, "MG|MG4 EV": 729
, "other": 9019
});

db.insert(db.countries.FR, "2023-01", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/02/2023-01-vp-france.pdf",
{ "Peugeot": 17683
, "Renault": 17097
, "Dacia": 11538
, "Toyota": 8671
, "Volkswagen": 8249
, "Citroën": 8205
, "Kia": 3428
, "Hyundai": 3214
, "BMW": 3081
, "Ford": 3009
, "Audi": 2873
, "Opel": 2860
, "Fiat": 2354
, "Nissan": 2337
, "Škoda": 2235
, "Mercedes-Benz": 2210
, "MG": 1742
, "Mini": 1449
, "Seat": 1303
, "Volvo": 1090
, "Tesla": 741
, "Mazda": 450
, "Jeep": 429
, "Cupra": 387
, "Land Rover": 361
, "Honda": 267
, "Mitsubishi": 207
, "Porsche": 184
, "Smart": 82
, "Jaguar": 27
, "other": 4176
});

db.insert(db.countries.FR, "2023-01", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/02/barometre-avere-colombus-fevrier-2023.pdf",
{ "Dacia|Spring": 1911
, "Fiat|500e": 1598
, "Renault|Megane E-Tech": 1506
, "Peugeot|e-208": 1336
, "MG|MG4 EV": 686
, "Renault|Zoe": 646
, "Renault|Twingo Z.E.": 543
, "Peugeot|e-2008": 441
, "Tesla|Model Y": 424
, "Hyundai|Kona Electric": 282
, "other": 5256
});

db.insert(db.countries.FR, "2023-02", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/03/2023-02-vp-france.pdf",
{ "Peugeot": 20057
, "Renault": 18478
, "Dacia": 11900
, "Citroën": 9136
, "Volkswagen": 8521
, "Toyota": 8312
, "Ford": 3974
, "Hyundai": 3828
, "BMW": 3697
, "Audi": 3691
, "Kia": 3428
, "Tesla": 3376
, "Mercedes-Benz": 3351
, "Opel": 3266
, "Nissan": 2944
, "Škoda": 2935
, "Fiat": 2454
, "Mini": 1806
, "Seat": 1529
, "MG": 1472
, "Volvo": 1076
, "Cupra": 646
, "Mazda": 538
, "Land Rover": 428
, "Jeep": 390
, "Honda": 246
, "Porsche": 232
, "Mitsubishi": 210
, "Smart": 65
, "Jaguar": 62
, "other": 4188
});

db.insert(db.countries.FR, "2023-02", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/03/Barometre-immatriculations-Avere-France-fevrier-2023.pdf, https://cleantechnica.com/2023/03/04/frances-plugin-evs-hit-24-in-february-dacia-spring-still-boss/",
{ "Dacia|Spring": 2872
, "Tesla|Model Y": 2485
, "Peugeot|e-208": 2092
, "Fiat|500e": 1919
, "Renault|Megane E-Tech": 1069
, "MG|MG4 EV": 1004
, "Tesla|Model 3": 872
, "Renault|Zoe": 795
, "Renault|Twingo Z.E.": 779
, "Hyundai|Kona Electric": 522
, "Volkswagen|ID.3": 445
, "Mini|Cooper SE Electric": 344
, "Opel|Corsa-e": 290
, "Peugeot|e-2008": 279
, "Kia|Niro EV": 260
, "Volvo|XC40 Recharge pure electric": 252
, "Kia|EV6": 227
, "Škoda|Enyaq": 221
, "Audi|Q4 e-tron": 215
, "Hyundai|Ioniq 5": 192
, "other": 2461
});

db.insert(db.countries.FR, "2023-03", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2023-03-vp-france.pdf",
{ "Peugeot": 29158
, "Renault": 27172
, "Citroën": 16444
, "Dacia": 15189
, "Volkswagen": 12314
, "Tesla": 8710
, "Toyota": 7994
, "BMW": 7082
, "Ford": 5634
, "Audi": 5191
, "Hyundai": 4624
, "Mercedes-Benz": 4390
, "Opel": 4381
, "Nissan": 4030
, "Fiat": 3905
, "Kia": 3851
, "Mini": 3563
, "Škoda": 3050
, "Seat": 2005
, "MG": 1958
, "Mazda": 1522
, "Cupra": 1380
, "Volvo": 1305
, "Land Rover": 780
, "Jeep": 427
, "Honda": 407
, "Porsche": 338
, "Mitsubishi": 172
, "Jaguar": 132
, "Smart": 109
, "other": 5495
});

db.insert(db.countries.FR, "2023-03", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/04/barometre-avere-colombus-mars-2023-2.pdf, https://cleantechnica.com/2023/04/03/french-ev-market-record-high-in-march-tesla-model-y-4th-overall-auto/",
{ "Tesla|Model Y": 6455
, "Dacia|Spring": 3481
, "Peugeot|e-208": 3256
, "Fiat|500e": 2021
, "Tesla|Model 3": 2008
, "Renault|Megane E-Tech": 1885
, "MG|MG4 EV": 997
, "Renault|Zoe": 923
, "Renault|Twingo Z.E.": 873
, "Peugeot|e-2008": 693
, "Hyundai|Kona Electric": 650
, "Opel|Corsa-e": 571
, "Citroën|ë-C4": 468
, "Volkswagen|ID.3": 409
, "Mini|Cooper SE Electric": 349
, "Cupra|Born": 321
, "Volkswagen|e-up!": 321
, "Volvo|XC40 Recharge pure electric": 288
, "Volkswagen|ID.4": 286
, "Audi|Q4 e-tron": 268
, "other": 4112
});

db.insert(db.countries.FR, "2023-04", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/04/2023_04_VP_france.pdf",
{ "Renault": 22489
, "Peugeot": 18789
, "Dacia": 13972
, "Citroën": 10324
, "Volkswagen": 8975
, "Toyota": 6748
, "Hyundai": 4188
, "Ford": 4021
, "Kia": 3796
, "BMW": 3701
, "Audi": 3684
, "Mercedes-Benz": 3470
, "Nissan": 3364
, "Opel": 3053
, "Škoda": 2910
, "Fiat": 2708
, "Tesla": 1824
, "Mini": 1789
, "Seat": 1744
, "MG": 1377
, "Cupra": 1216
, "Volvo": 1002
, "Land Rover": 576
, "Mazda": 516
, "Mitsubishi": 296
, "Porsche": 294
, "Jeep": 286
, "Honda": 211
, "Smart": 91
, "Jaguar": 62
, "other": 5030
});

db.insert(db.countries.FR, "2023-04", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/05/barometre-avere-colombus-avril-2023.pdf, https://cleantechnica.com/2023/05/02/france-in-april-bevs-up-phevs-down-spring-is-sprung/",
{ "Dacia|Spring": 2432
, "Peugeot|e-208": 1563
, "Fiat|500e": 1365
, "Tesla|Model Y": 1333
, "Renault|Megane E-Tech": 1184
, "MG|MG4 EV": 782
, "Peugeot|e-2008": 638
, "Hyundai|Kona Electric": 618
, "Renault|Zoe": 567
, "Mini|Cooper SE Electric": 502
, "Volkswagen|ID.3": 439
, "Opel|Corsa-e": 415
, "Tesla|Model 3": 389
, "Renault|Twingo Z.E.": 368
, "Kia|Niro EV": 331
, "Volkswagen|ID.4": 323
, "Škoda|Enyaq": 250
, "Kia|EV6": 238
, "MG|ZS EV": 233
, "Citroën|ë-C4": 205
, "Volvo|XC40 Recharge pure electric": 170
, "other": 2768
});

db.insert(db.countries.FR, "2023-05", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/06/2023_05_VP_france.pdf",
{ "Renault": 26134
, "Peugeot": 22325
, "Dacia": 12504
, "Volkswagen": 9889
, "Toyota": 7508
, "BMW": 4615
, "Ford": 4047
, "Tesla": 4012
, "Kia": 4007
, "Fiat": 3887
, "Audi": 3796
, "Hyundai": 3558
, "Mercedes-Benz": 3540
, "Opel": 3286
, "Nissan": 2950
, "Škoda": 2837
, "MG": 2484
, "Mini": 2066
, "Seat": 1423
, "Cupra": 1238
, "Volvo": 1181
, "Jeep": 762
, "Mazda": 690
, "Land Rover": 522
, "Honda": 241
, "Porsche": 221
, "Mitsubishi": 149
, "Smart": 90
, "Jaguar": 66
, "other": 15508
});

db.insert(db.countries.FR, "2023-05", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/06/barometre-avere-colombus-mai-2023-1.pdf, https://cleantechnica.com/2023/06/04/france-plugins-up-new-stellantis-bevs/",
{ "Tesla|Model Y": 2709
, "Fiat|500e": 2601
, "Peugeot|e-208": 1914
, "Dacia|Spring": 1897
, "MG|MG4 EV": 1593
, "Renault|Megane E-Tech": 1467
, "Tesla|Model 3": 1111
, "Mini|Cooper SE Electric": 574
, "Peugeot|e-2008": 563
, "Opel|Corsa-e": 491
, "Renault|Zoe": 491
, "Kia|Niro EV": 481
, "Hyundai|Kona Electric": 464
, "Volkswagen|ID.4": 441
, "MG|ZS EV": 399
, "Volkswagen|ID.3": 371
, "Jeep|Avenger EV": 334
, "Volvo|XC40 Recharge pure electric": 316
, "Škoda|Enyaq": 309
, "Renault|Twingo Z.E.": 303
, "other": 3838
});

db.insert(db.countries.FR, "2023-06", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/07/2023_06_VP_france.pdf",
{ "Renault": 33345
, "Peugeot": 25396
, "Dacia": 15460
, "Citroën": 12629
, "Volkswagen": 11884
, "Toyota": 11540
, "Tesla": 8516
, "Hyundai": 5750
, "Kia": 5458
, "Opel": 5416
, "Ford": 5410
, "BMW": 5249
, "Audi": 4946
, "Mercedes-Benz": 4729
, "Fiat": 4496
, "MG": 4084
, "Nissan": 3876
, "Škoda": 3138
, "Mini": 2650
, "Volvo": 1853
, "Seat": 1700
, "Cupra": 1501
, "Mazda": 1294
, "Jeep": 1134
, "Land Rover": 659
, "Honda": 381
, "Porsche": 364
, "Mitsubishi": 350
, "Jaguar": 132
, "Smart": 91
, "other": 7416
});

db.insert(db.countries.FR, "2023-06", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/07/barometre-avere-colombus-juin-2023-2.pdf, https://cleantechnica.com/2023/07/24/100-electric-vehicles-now-equal-18-of-new-car-sales-in-france/",
{ "Tesla|Model Y": 4335
, "Tesla|Model 3": 3966
, "Fiat|500e": 2781
, "MG|MG4 EV": 2511
, "Dacia|Spring": 2490
, "Renault|Megane E-Tech": 2377
, "Peugeot|e-208": 1889
, "Kia|Niro EV": 885
, "Mini|Cooper SE Electric": 880
, "Renault|Twingo Z.E.": 823
, "MG|ZS EV": 741
, "Volkswagen|ID.3": 740
, "Peugeot|e-2008": 645
, "Volvo|XC40 Recharge pure electric": 143
, "other": 8074
});

db.insert(db.countries.FR, "2023-07", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/08/2023_07_VP_france.pdf",
{ "Renault": 20462
, "Peugeot": 15991
, "Dacia": 11695
, "Volkswagen": 10040
, "Citroën": 8406
, "Toyota": 8361
, "Kia": 4494
, "BMW": 4094
, "Mercedes-Benz": 3915
, "Hyundai": 3854
, "Audi": 3808
, "Ford": 3736
, "Opel": 3251
, "Fiat": 3224
, "Škoda": 3039
, "Tesla": 2717
, "Nissan": 2444
, "Mini": 2237
, "Cupra": 1527
, "MG": 1427
, "Seat": 1331
, "Volvo": 960
, "Land Rover": 723
, "Mazda": 608
, "Jeep": 569
, "Honda": 310
, "Smart": 292
, "Mitsubishi": 183
, "Porsche": 146
, "Jaguar": 97
, "other": 5005
});

db.insert(db.countries.FR, "2023-07", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/08/barometre-avere-colombus-juillet-2023-1.pdf",
{ "Dacia|Spring": 2127
, "Tesla|Model Y": 1631
, "Fiat|500e": 1251
, "Peugeot|e-208": 1185
, "MG|MG4 EV": 1083
, "Tesla|Model 3": 1048
, "Renault|Megane E-Tech": 998
, "Mini|Cooper SE Electric": 621
, "Renault|Twingo Z.E.": 525
, "Kia|Niro EV": 443
, "other": 5955
});

db.insert(db.countries.FR, "2023-08", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/09/2023_08_VP_france.pdf",
{ "Renault": 16508
, "Peugeot": 15911
, "Dacia": 10586
, "Citroën": 8846
, "Toyota": 7739
, "Volkswagen": 6755
, "Tesla": 5365
, "BMW": 3560
, "Kia": 3216
, "Hyundai": 3208
, "Ford": 3207
, "Opel": 3151
, "Mercedes-Benz": 2944
, "Audi": 2883
, "Fiat": 2641
, "Škoda": 2423
, "MG": 2332
, "Mini": 1804
, "Nissan": 1740
, "Seat": 753
, "Cupra": 738
, "Volvo": 563
, "Jeep": 542
, "Mazda": 509
, "Land Rover": 417
, "Honda": 279
, "Smart": 270
, "Mitsubishi": 184
, "Porsche": 110
, "Jaguar": 55
, "other": 4360
});

db.insert(db.countries.FR, "2023-08", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/09/barometre-avere-colombus-aout-2023.pdf",
{ "Tesla|Model Y": 3051
, "Tesla|Model 3": 2258
, "Peugeot|e-208": 1915
, "Fiat|500e": 1609
, "MG|MG4 EV": 1598
, "Dacia|Spring": 1379
, "Renault|Megane E-Tech": 791
, "Mini|Cooper SE Electric": 503
, "Renault|Twingo Z.E.": 414
, "Kia|Niro EV": 341
, "other": 5798
});

db.insert(db.countries.FR, "2023-09", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/10/2023_09_VP_france.pdf",
{ "Renault": 25049
, "Peugeot": 19710
, "Dacia": 14350
, "Citroën": 12644
, "Volkswagen": 9687
, "Toyota": 8115
, "Tesla": 5557
, "BMW": 4912
, "Mercedes-Benz": 4898
, "Audi": 4873
, "Ford": 4831
, "Kia": 4366
, "Hyundai": 4348
, "Opel": 4087
, "Škoda": 3845
, "Fiat": 3731
, "MG": 3335
, "Nissan": 2457
, "Mini": 1911
, "Cupra": 1479
, "Volvo": 1280
, "Mazda": 1126
, "Seat": 1116
, "Jeep": 895
, "Honda": 600
, "Land Rover": 539
, "Porsche": 269
, "Mitsubishi": 203
, "Smart": 169
, "Jaguar": 119
, "other": 5802
});

db.insert(db.countries.FR, "2023-09", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/10/barometre-avere-colombus-septembre-2023-1.pdf",
{ "Tesla|Model Y": 5035
, "Peugeot|e-208": 3924
, "Dacia|Spring": 2514
, "Fiat|500e": 2296
, "MG|MG4 EV": 1945
, "Renault|Megane E-Tech": 1372
, "Renault|Twingo Z.E.": 968
, "Kia|Niro EV": 623
, "Citroën|ë-C4": 596
, "MG|ZS EV": 585
, "other": 10315
});

db.insert(db.countries.FR, "2023-10", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/11/2023_10_VP_france.pdf",
{ "Renault": 23732
, "Peugeot": 21327
, "Dacia": 13533
, "Citroën": 12242
, "Toyota": 10188
, "Volkswagen": 9151
, "Mercedes-Benz": 4863
, "BMW": 4607
, "Ford": 4347
, "Kia": 4294
, "Hyundai": 4289
, "Audi": 4051
, "Škoda": 3584
, "Opel": 3500
, "Fiat": 3419
, "Nissan": 3316
, "Tesla": 3262
, "MG": 2589
, "Mini": 2528
, "Cupra": 1714
, "Volvo": 1323
, "Seat": 1312
, "Jeep": 757
, "Porsche": 723
, "Mazda": 626
, "Honda": 615
, "Land Rover": 522
, "Smart": 267
, "Mitsubishi": 248
, "Jaguar": 81
, "other": 5373
});

db.insert(db.countries.FR, "2023-10", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/11/barometre-avere-colombus-octobre_2023_.pdf, https://cleantechnica.com/2023/11/29/27-of-new-cars-in-france-now-plugin-electric-cars/",
{ "Dacia|Spring": 3291
, "Fiat|500e": 1887
, "MG|MG4 EV": 1864
, "Tesla|Model Y": 1833
, "Renault|Megane E-Tech": 1571
, "Tesla|Model 3": 1353
, "Peugeot|e-208": 1353
, "Mini|Cooper SE Electric": 1063
, "Renault|Twingo Z.E.": 752
, "Kia|Niro EV": 610
, "Cupra|Born": 551
, "BMW|iX1": 511
, "other": 8834
});

db.insert(db.countries.FR, "2023-11", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2023/12/2023_11_VP_france.pdf",
{ "Renault": 21481
, "Peugeot": 17957
, "Dacia": 12182
, "Toyota": 10823
, "Volkswagen": 10117
, "Citroën": 9957
, "Tesla": 9389
, "BMW": 5962
, "Mercedes-Benz": 5214
, "Kia": 4400
, "Audi": 4394
, "Ford": 4346
, "Hyundai": 3963
, "Škoda": 3882
, "Fiat": 3449
, "Opel": 3387
, "Nissan": 3206
, "Mini": 2868
, "MG": 2679
, "Seat": 1602
, "Cupra": 1463
, "Volvo": 1373
, "Mazda": 897
, "Honda": 610
, "Land Rover": 584
, "Jeep": 540
, "Mitsubishi": 272
, "Smart": 248
, "Porsche": 216
, "Jaguar": 70
, "other": 5180
});

db.insert(db.countries.FR, "2023-11", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2023/12/Barometre-immatriculation-Novembre-2023.pdf",
{ "Tesla|Model 3": 6081
, "Tesla|Model Y":3218
, "Dacia|Spring": 2557
, "MG|MG4 EV": 1871
, "Fiat|500e": 1762
, "Renault|Megane E-Tech": 1642
, "Renault|Twingo Z.E.": 1059
, "Peugeot|e-208": 993
, "Mini|Cooper SE Electric": 811
, "Kia|Niro EV": 717
, "other": 10064
});

db.insert(db.countries.FR, "2023-12", db.dsTypes.AllCarsByBrand, "https://ccfa.fr/wp-content/uploads/2024/01/2023_12_VP_france.pdf",
{ "Renault": 25967
, "Peugeot": 17208
, "Volkswagen": 14643
, "Dacia": 13481
, "Toyota": 11951
, "Tesla": 9572
, "BMW": 9041
, "Mercedes-Benz": 8312
, "MG": 7895
, "Citroën": 7250
, "Audi": 5227
, "Ford": 5087
, "Hyundai": 4576
, "Kia": 4454
, "Škoda": 4379
, "Fiat": 4068
, "Nissan": 3786
, "Opel": 3599
, "Mini": 3516
, "Seat": 2061
, "Volvo": 1983
, "Cupra": 1657
, "Mazda": 1319
, "Land Rover": 807
, "Jeep": 721
, "Honda": 714
, "Porsche": 408
, "Smart": 250
, "Mitsubishi": 191
, "Jaguar": 105
, "other": 6777
});

db.insert(db.countries.FR, "2023-12", db.dsTypes.ElectricCarsByModel, "https://www.avere-france.org/wp-content/uploads/2024/01/barometre-avere-colombus-decembre-2023.pdf",
{ "Tesla|Model 3": 4790
, "Tesla|Model Y": 4618
, "MG|MG4 EV": 4138
, "Dacia|Spring": 2810
, "Fiat|500e": 2099
, "Renault|Megane E-Tech": 1761
, "Peugeot|e-208": 1278
, "Mini|Cooper SE Electric": 1146
, "Renault|Twingo Z.E.": 1096
, "BMW|iX1": 1007
, "other": 12612
});
