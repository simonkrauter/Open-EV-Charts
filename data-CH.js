// Data sets for car sales in Switzerland

"use strict";

db.addCountry("CH", "Switzerland");

// https://www.auto.swiss/#statistics

db.insert(db.countries.CH, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_1.xlsx",
{ "Alfa Romeo": 280
, "Audi": 1018
, "BMW": 1859
, "Chevrolet": 14
, "Citroën": 542
, "Dacia": 568
, "DS Automobiles": 70
, "Fiat": 693
, "Ford": 957
, "Honda": 272
, "Hyundai": 691
, "Infiniti": 8
, "Jaguar": 116
, "Jeep": 349
, "Kia": 285
, "Land Rover": 308
, "Lexus": 48
, "Maserati": 66
, "Mazda": 517
, "Mercedes-Benz": 1826
, "Mini": 368
, "Mitsubishi": 231
, "Nissan": 493
, "Opel": 871
, "Peugeot": 698
, "Porsche": 258
, "Renault": 818
, "Seat": 961
, "Škoda": 1540
, "Smart": 176
, "SsangYong": 63
, "Subaru": 345
, "Suzuki": 504
, "Toyota": 689
, "Volkswagen": 2360
, "Volvo": 712
, "Tesla": 15
, "other": 82
});

db.insert(db.countries.CH, "2018-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 45
, "Tesla|Model S": 9
, "Tesla|Model X": 6
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 2
, "Nissan|Leaf": 1
});

db.insert(db.countries.CH, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_2.xlsx",
{ "Alfa Romeo": 241
, "Audi": 1341
, "BMW": 1841
, "Chevrolet": 9
, "Citroën": 488
, "Dacia": 731
, "DS Automobiles": 50
, "Fiat": 675
, "Ford": 1097
, "Honda": 365
, "Hyundai": 620
, "Infiniti": 12
, "Jaguar": 110
, "Jeep": 261
, "Kia": 339
, "Land Rover": 263
, "Lexus": 38
, "Maserati": 55
, "Mazda": 524
, "Mercedes-Benz": 1997
, "Mini": 481
, "Mitsubishi": 289
, "Nissan": 438
, "Opel": 1035
, "Peugeot": 698
, "Porsche": 272
, "Renault": 970
, "Seat": 1024
, "Škoda": 1642
, "Smart": 122
, "SsangYong": 71
, "Subaru": 335
, "Suzuki": 514
, "Toyota": 696
, "Volkswagen": 1947
, "Volvo": 557
, "Tesla": 37
, "other": 107
});

db.insert(db.countries.CH, "2018-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 63
, "Tesla|Model X": 9
, "Tesla|Model S": 28
, "Peugeot|iOn": 4
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_3.xlsx",
{ "Alfa Romeo": 360
, "Audi": 1603
, "BMW": 2037
, "Chevrolet": 25
, "Citroën": 706
, "Dacia": 759
, "DS Automobiles": 54
, "Fiat": 744
, "Ford": 1567
, "Honda": 543
, "Hyundai": 736
, "Infiniti": 10
, "Jaguar": 182
, "Jeep": 378
, "Kia": 502
, "Land Rover": 409
, "Lexus": 48
, "Maserati": 59
, "Mazda": 595
, "Mercedes-Benz": 2413
, "Mini": 593
, "Mitsubishi": 472
, "Nissan": 592
, "Opel": 1199
, "Peugeot": 951
, "Porsche": 457
, "Renault": 1166
, "Seat": 1015
, "Škoda": 1748
, "Smart": 153
, "SsangYong": 71
, "Subaru": 499
, "Suzuki": 711
, "Toyota": 902
, "Volkswagen": 2606
, "Volvo": 773
, "Tesla": 322
, "other": 166
});

db.insert(db.countries.CH, "2018-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 84
, "Tesla|Model X": 113
, "Tesla|Model S": 209
, "Peugeot|iOn": 3
, "Nissan|Leaf": 58
, "Citroën|C-Zero": 1
});

db.insert(db.countries.CH, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_4.xlsx",
{ "Alfa Romeo": 286
, "Audi": 1745
, "BMW": 2126
, "Chevrolet": 25
, "Citroën": 565
, "Dacia": 742
, "DS Automobiles": 68
, "Fiat": 936
, "Ford": 1164
, "Honda": 266
, "Hyundai": 844
, "Infiniti": 9
, "Jaguar": 142
, "Jeep": 469
, "Kia": 538
, "Land Rover": 299
, "Lexus": 50
, "Maserati": 62
, "Mazda": 497
, "Mercedes-Benz": 2089
, "Mini": 558
, "Mitsubishi": 327
, "Nissan": 338
, "Opel": 917
, "Peugeot": 837
, "Porsche": 411
, "Renault": 1468
, "Seat": 1090
, "Škoda": 1423
, "Smart": 155
, "SsangYong": 70
, "Subaru": 468
, "Suzuki": 829
, "Toyota": 985
, "Volkswagen": 2831
, "Volvo": 620
, "Tesla": 67
, "other": 203
});

db.insert(db.countries.CH, "2018-04", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 81
, "Tesla|Model X": 18
, "Tesla|Model S": 49
, "Peugeot|iOn": 1
, "Nissan|Leaf": 25
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_5.xlsx",
{ "Alfa Romeo": 475
, "Audi": 1714
, "BMW": 2235
, "Chevrolet": 28
, "Citroën": 564
, "Dacia": 821
, "DS Automobiles": 76
, "Fiat": 873
, "Ford": 1314
, "Honda": 267
, "Hyundai": 634
, "Infiniti": 13
, "Jaguar": 142
, "Jeep": 530
, "Kia": 475
, "Land Rover": 256
, "Lexus": 47
, "Maserati": 41
, "Mazda": 483
, "Mercedes-Benz": 2188
, "Mini": 520
, "Mitsubishi": 394
, "Nissan": 341
, "Opel": 1095
, "Peugeot": 869
, "Porsche": 384
, "Renault": 1404
, "Seat": 1153
, "Škoda": 1887
, "Smart": 218
, "SsangYong": 64
, "Subaru": 457
, "Suzuki": 696
, "Toyota": 858
, "Volkswagen": 3414
, "Volvo": 649
, "Tesla": 64
, "other": 183
});

db.insert(db.countries.CH, "2018-05", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 52
, "Tesla|Model X": 8
, "Tesla|Model 3": 1
, "Tesla|Model S": 55
, "Peugeot|iOn": 2
, "Nissan|Leaf": 15
, "Citroën|C-Zero": 3
});

db.insert(db.countries.CH, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_6.xlsx",
{ "Alfa Romeo": 382
, "Audi": 1587
, "BMW": 2344
, "Chevrolet": 14
, "Citroën": 788
, "Dacia": 1061
, "DS Automobiles": 88
, "Fiat": 956
, "Ford": 1728
, "Honda": 340
, "Hyundai": 587
, "Infiniti": 6
, "Jaguar": 285
, "Jeep": 389
, "Kia": 521
, "Land Rover": 421
, "Lexus": 28
, "Maserati": 50
, "Mazda": 668
, "Mercedes-Benz": 2383
, "Mini": 557
, "Mitsubishi": 451
, "Nissan": 422
, "Opel": 1524
, "Peugeot": 790
, "Porsche": 433
, "Renault": 1779
, "Seat": 1184
, "Škoda": 1977
, "Smart": 174
, "SsangYong": 74
, "Subaru": 444
, "Suzuki": 880
, "Toyota": 935
, "Volkswagen": 4033
, "Volvo": 737
, "Tesla": 283
, "other": 173
});

db.insert(db.countries.CH, "2018-06", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 71
, "Tesla|Model X": 147
, "Tesla|Model S": 136
, "Peugeot|iOn": 1
, "Nissan|Leaf": 25
, "Citroën|C-Zero": 2
});

db.insert(db.countries.CH, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_7.xlsx",
{ "Alfa Romeo": 323
, "Audi": 1897
, "BMW": 2088
, "Chevrolet": 38
, "Citroën": 726
, "Dacia": 845
, "DS Automobiles": 111
, "Fiat": 867
, "Ford": 1314
, "Honda": 204
, "Hyundai": 679
, "Infiniti": 9
, "Jaguar": 114
, "Jeep": 375
, "Kia": 301
, "Land Rover": 201
, "Lexus": 64
, "Maserati": 46
, "Mazda": 478
, "Mercedes-Benz": 1573
, "Mini": 499
, "Mitsubishi": 416
, "Nissan": 339
, "Opel": 937
, "Peugeot": 1158
, "Porsche": 375
, "Renault": 924
, "Seat": 1228
, "Škoda": 1426
, "Smart": 180
, "SsangYong": 57
, "Subaru": 325
, "Suzuki": 429
, "Toyota": 663
, "Volkswagen": 3288
, "Volvo": 780
, "Tesla": 31
, "other": 175
});

db.insert(db.countries.CH, "2018-07", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 46
, "Jaguar|I-Pace": 21
, "Tesla|Model X": 13
, "Tesla|Model S": 18
, "Peugeot|iOn": 3
, "Nissan|Leaf": 21
, "Citroën|C-Zero": 5
});

db.insert(db.countries.CH, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_8.xlsx",
{ "Alfa Romeo": 316
, "Audi": 1608
, "BMW": 1741
, "Chevrolet": 13
, "Citroën": 425
, "Dacia": 656
, "DS Automobiles": 32
, "Fiat": 762
, "Ford": 1104
, "Honda": 247
, "Hyundai": 561
, "Infiniti": 12
, "Jaguar": 55
, "Jeep": 367
, "Kia": 337
, "Land Rover": 173
, "Lexus": 62
, "Maserati": 23
, "Mazda": 454
, "Mercedes-Benz": 1850
, "Mini": 428
, "Mitsubishi": 313
, "Nissan": 334
, "Opel": 696
, "Peugeot": 714
, "Porsche": 267
, "Renault": 693
, "Seat": 907
, "Škoda": 1213
, "Smart": 157
, "SsangYong": 62
, "Subaru": 268
, "Suzuki": 460
, "Toyota": 709
, "Volkswagen": 2741
, "Volvo": 485
, "Tesla": 71
, "other": 168
});

db.insert(db.countries.CH, "2018-08", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 82
, "Jaguar|I-Pace": 3
, "Tesla|Model X": 39
, "Tesla|Model S": 32
, "Peugeot|iOn": 1
, "Nissan|Leaf": 58
});

db.insert(db.countries.CH, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_9.xlsx",
{ "Alfa Romeo": 220
, "Audi": 1326
, "BMW": 1512
, "Chevrolet": 17
, "Citroën": 379
, "Dacia": 389
, "DS Automobiles": 36
, "Fiat": 705
, "Ford": 1242
, "Honda": 143
, "Hyundai": 601
, "Infiniti": 13
, "Jaguar": 188
, "Jeep": 426
, "Kia": 516
, "Land Rover": 228
, "Lexus": 60
, "Maserati": 52
, "Mazda": 526
, "Mercedes-Benz": 1902
, "Mini": 386
, "Mitsubishi": 281
, "Nissan": 370
, "Opel": 854
, "Peugeot": 586
, "Porsche": 192
, "Renault": 835
, "Seat": 502
, "Škoda": 1148
, "Smart": 180
, "SsangYong": 73
, "Subaru": 363
, "Suzuki": 581
, "Toyota": 771
, "Volkswagen": 1888
, "Volvo": 543
, "Tesla": 275
, "other": 100
});

db.insert(db.countries.CH, "2018-09", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 37
, "Jaguar|I-Pace": 1
, "Tesla|Model X": 130
, "Tesla|Model S": 145
, "Peugeot|iOn": 3
, "Nissan|Leaf": 66
, "Citroën|C-Zero": 2
});

db.insert(db.countries.CH, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_10.xlsx",
{ "Alfa Romeo": 292
, "Audi": 1596
, "BMW": 1686
, "Chevrolet": 14
, "Citroën": 423
, "Dacia": 533
, "DS Automobiles": 34
, "Fiat": 738
, "Ford": 1209
, "Honda": 373
, "Hyundai": 697
, "Infiniti": 13
, "Jaguar": 215
, "Jeep": 458
, "Kia": 342
, "Land Rover": 361
, "Lexus": 73
, "Maserati": 53
, "Mazda": 467
, "Mercedes-Benz": 2175
, "Mini": 413
, "Mitsubishi": 448
, "Nissan": 339
, "Opel": 944
, "Peugeot": 658
, "Porsche": 167
, "Renault": 797
, "Seat": 588
, "Škoda": 1370
, "Smart": 185
, "SsangYong": 55
, "Subaru": 445
, "Suzuki": 657
, "Toyota": 830
, "Volkswagen": 2203
, "Volvo": 770
, "Tesla": 35
, "other": 132
});

db.insert(db.countries.CH, "2018-10", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 86
, "Jaguar|I-Pace": 15
, "Tesla|Model X": 8
, "Tesla|Model S": 27
, "Peugeot|iOn": 5
, "Nissan|Leaf": 57
, "Citroën|C-Zero": 1
});

db.insert(db.countries.CH, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_11.xlsx",
{ "Alfa Romeo": 248
, "Audi": 1081
, "BMW": 2240
, "Chevrolet": 26
, "Citroën": 328
, "Dacia": 619
, "DS Automobiles": 64
, "Fiat": 681
, "Ford": 1251
, "Honda": 321
, "Hyundai": 832
, "Infiniti": 12
, "Jaguar": 200
, "Jeep": 455
, "Kia": 289
, "Land Rover": 316
, "Lexus": 104
, "Maserati": 48
, "Mazda": 512
, "Mercedes-Benz": 2319
, "Mini": 377
, "Mitsubishi": 447
, "Nissan": 371
, "Opel": 686
, "Peugeot": 867
, "Porsche": 141
, "Renault": 975
, "Seat": 892
, "Škoda": 1833
, "Smart": 175
, "SsangYong": 47
, "Subaru": 346
, "Suzuki": 753
, "Toyota": 835
, "Volkswagen": 2485
, "Volvo": 692
, "Tesla": 68
, "other": 167
});

db.insert(db.countries.CH, "2018-11", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 127
, "Jaguar|I-Pace": 21
, "Tesla|Model X": 22
, "Tesla|Model S": 46
, "Nissan|Leaf": 46
, "Citroën|C-Zero": 5
});

db.insert(db.countries.CH, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2018_12.xlsx",
{ "Alfa Romeo": 194
, "Audi": 1862
, "BMW": 2518
, "Chevrolet": 33
, "Citroën": 482
, "Dacia": 577
, "DS Automobiles": 64
, "Fiat": 540
, "Ford": 1238
, "Honda": 361
, "Hyundai": 722
, "Infiniti": 11
, "Jaguar": 209
, "Jeep": 386
, "Kia": 434
, "Land Rover": 574
, "Lexus": 112
, "Maserati": 45
, "Mazda": 506
, "Mercedes-Benz": 2946
, "Mini": 532
, "Mitsubishi": 480
, "Nissan": 343
, "Opel": 1175
, "Peugeot": 886
, "Porsche": 208
, "Renault": 900
, "Seat": 924
, "Škoda": 1953
, "Smart": 150
, "SsangYong": 66
, "Subaru": 386
, "Suzuki": 659
, "Toyota": 635
, "Volkswagen": 3153
, "Volvo": 804
, "Tesla": 195
, "other": 276
});

db.insert(db.countries.CH, "2018-12", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|Zoe": 134
, "Jaguar|I-Pace": 2
, "Tesla|Model X": 112
, "Tesla|Model S": 83
, "Peugeot|iOn": 47
, "Nissan|Leaf": 56
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 2670
, "Mercedes-Benz": 1779
, "Škoda": 1745
, "BMW": 1583
, "Audi": 1183
, "Ford": 973
, "Volvo": 882
, "Peugeot": 802
, "Toyota": 724
, "Dacia": 674
, "Seat": 664
, "Renault": 642
, "Fiat": 590
, "Hyundai": 577
, "Suzuki": 480
, "Opel": 471
, "Citroën": 424
, "Mazda": 411
, "Subaru": 366
, "Jeep": 359
, "Mini": 355
, "Nissan": 345
, "Mitsubishi": 314
, "Land Rover": 313
, "Kia": 281
, "Alfa Romeo": 269
, "Honda": 218
, "Jaguar": 194
, "Smart": 140
, "Porsche": 122
, "DS Automobiles": 58
, "Lexus": 54
, "SsangYong": 46
, "Tesla": 38
, "Maserati": 26
, "Chevrolet": 18
, "Infiniti": 11
, "Cadillac": 10
, "Dodge": 4
, "other": 116
});

db.insert(db.countries.CH, "2019-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/1",
{ "Renault|Zoe": 122
, "Nissan|Leaf": 58
, "BMW|i3 BEV": 55
, "Hyundai|Kona Electric": 54
, "Smart|Fortwo ED": 24
, "Nissan|e-NV200": 24
, "Tesla|Model S": 23
, "Volkswagen|e-Golf": 17
, "Tesla|Model X": 15
, "Jaguar|I-Pace": 14
, "Hyundai|Ioniq Electric": 9
, "Peugeot|iOn": 8
, "Opel|Ampera-e": 6
, "Renault|Kangoo Z.E.": 5
, "Smart|Forfour ED": 3
, "Peugeot|Partner Electric": 3
, "Mitsubishi|i-MiEV": 3
, "Kia|Soul EV": 3
, "Volkswagen|e-up!": 2
, "Citroën|C-Zero": 2
, "other": 5
});

db.insert(db.countries.CH, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 2445
, "Mercedes-Benz": 2084
, "Škoda": 1963
, "BMW": 1946
, "Seat": 1298
, "Ford": 1102
, "Toyota": 881
, "Audi": 777
, "Renault": 741
, "Opel": 723
, "Peugeot": 648
, "Fiat": 635
, "Hyundai": 573
, "Volvo": 572
, "Dacia": 556
, "Suzuki": 510
, "Citroën": 430
, "Jeep": 428
, "Mazda": 375
, "Nissan": 369
, "Honda": 348
, "Land Rover": 342
, "Tesla": 316
, "Mini": 310
, "Kia": 310
, "Subaru": 284
, "Mitsubishi": 262
, "Alfa Romeo": 247
, "Smart": 187
, "Jaguar": 172
, "Porsche": 67
, "SsangYong": 41
, "Lexus": 29
, "DS Automobiles": 28
, "Maserati": 24
, "Chevrolet": 16
, "Infiniti": 10
, "Dodge": 5
, "Cadillac": 5
, "other": 117
});

db.insert(db.countries.CH, "2019-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/2",
{ "Tesla|Model 3": 277
, "Renault|Zoe": 91
, "Hyundai|Kona Electric": 78
, "BMW|i3 BEV": 78
, "Nissan|Leaf": 59
, "Jaguar|I-Pace": 39
, "Renault|Kangoo Z.E.": 33
, "Volkswagen|e-Golf": 27
, "Tesla|Model S": 26
, "Nissan|e-NV200": 16
, "Tesla|Model X": 13
, "Smart|Fortwo ED": 13
, "Smart|Forfour ED": 8
, "Mitsubishi|i-MiEV": 6
, "Kia|Soul EV": 5
, "Volkswagen|e-Crafter": 4
, "Hyundai|Ioniq Electric": 4
, "Citroën|C-Zero": 4
, "Peugeot|Partner Electric": 1
, "Opel|Ampera-e": 1
, "Citroën|Berlingo Electric": 1
, "other": 3
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsxx",
{ "Volkswagen": 2829
, "Škoda": 2420
, "Mercedes-Benz": 2285
, "Audi": 2173
, "BMW": 1880
, "Seat": 1387
, "Ford": 1299
, "Tesla": 1242
, "Renault": 1084
, "Toyota": 919
, "Peugeot": 827
, "Opel": 826
, "Suzuki": 821
, "Fiat": 811
, "Volvo": 755
, "Dacia": 691
, "Hyundai": 671
, "Nissan": 622
, "Mazda": 556
, "Citroën": 523
, "Mini": 453
, "Jeep": 442
, "Kia": 437
, "Land Rover": 426
, "Subaru": 389
, "Honda": 376
, "Mitsubishi": 358
, "Alfa Romeo": 259
, "Jaguar": 257
, "Smart": 242
, "Porsche": 241
, "Lexus": 64
, "DS Automobiles": 47
, "SsangYong": 43
, "Maserati": 43
, "Dodge": 20
, "Chevrolet": 18
, "Infiniti": 15
, "Cadillac": 9
, "Chrysler": 3
, "other": 195
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/3",
{ "Tesla|Model 3": 1094
, "Renault|Zoe": 151
, "Audi|e-tron": 93
, "Hyundai|Kona Electric": 82
, "Tesla|Model S": 80
, "BMW|i3 BEV": 79
, "Jaguar|I-Pace": 70
, "Tesla|Model X": 68
, "Nissan|Leaf": 46
, "Volkswagen|e-Golf": 34
, "Renault|Kangoo Z.E.": 22
, "Smart|Fortwo ED": 16
, "Nissan|e-NV200": 11
, "Kia|Soul EV": 10
, "Hyundai|Ioniq Electric": 10
, "Mercedes-Benz|eVito": 6
, "Smart|Forfour ED": 5
, "Mitsubishi|i-MiEV": 5
, "Opel|Ampera-e": 4
, "Volkswagen|e-up!": 2
, "Volkswagen|e-Crafter": 2
, "Peugeot|Partner Electric": 2
, "Citroën|C-Zero": 2
, "Citroën|Berlingo Electric": 1
, "other": 4
});

db.insert(db.countries.CH, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 3331
, "BMW": 2198
, "Škoda": 2192
, "Mercedes-Benz": 2108
, "Audi": 1399
, "Seat": 1279
, "Opel": 1129
, "Ford": 1124
, "Renault": 1069
, "Toyota": 965
, "Hyundai": 921
, "Volvo": 883
, "Peugeot": 814
, "Fiat": 744
, "Suzuki": 708
, "Subaru": 695
, "Dacia": 686
, "Nissan": 553
, "Tesla": 535
, "Mini": 538
, "Mazda": 538
, "Jeep": 526
, "Citroën": 498
, "Porsche": 441
, "Kia": 430
, "Land Rover": 360
, "Mitsubishi": 348
, "Jaguar": 278
, "Alfa Romeo": 274
, "Honda": 267
, "Smart": 217
, "Lexus": 66
, "Chevrolet": 66
, "SsangYong": 61
, "DS Automobiles": 60
, "Dodge": 55
, "Maserati": 50
, "Infiniti": 14
, "Cadillac": 12
, "Chrysler": 6
, "other": 182
});

db.insert(db.countries.CH, "2019-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/4",
{ "Tesla|Model 3": 492
, "Renault|Zoe": 164
, "Hyundai|Kona Electric": 103
, "BMW|i3 BEV": 79
, "Jaguar|I-Pace": 69
, "Nissan|Leaf": 39
, "Volkswagen|e-Golf": 34
, "Audi|e-tron": 33
, "Tesla|Model S": 27
, "Nissan|e-NV200": 19
, "Smart|Fortwo ED": 17
, "Tesla|Model X": 16
, "Renault|Kangoo Z.E.": 14
, "Mitsubishi|i-MiEV": 12
, "Hyundai|Ioniq Electric": 8
, "Smart|Forfour ED": 7
, "Volkswagen|e-up!": 4
, "Opel|Ampera-e": 3
, "Peugeot|Partner Electric": 2
, "Kia|Soul EV": 2
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
, "Citroën|Berlingo Electric": 1
, "other": 8
});

db.insert(db.countries.CH, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 3431
, "BMW": 2291
, "Mercedes-Benz": 2222
, "Škoda": 2110
, "Audi": 1942
, "Seat": 1470
, "Ford": 1315
, "Opel": 1194
, "Toyota": 996
, "Renault": 996
, "Suzuki": 901
, "Peugeot": 882
, "Fiat": 756
, "Hyundai": 746
, "Dacia": 700
, "Volvo": 671
, "Mazda": 578
, "Citroën": 524
, "Jeep": 448
, "Mitsubishi": 435
, "Nissan": 402
, "Kia": 377
, "Honda": 328
, "Porsche": 302
, "Alfa Romeo": 295
, "Mini": 293
, "Land Rover": 284
, "Smart": 202
, "Tesla": 195
, "Jaguar": 176
, "Subaru": 133
, "Lexus": 79
, "DS Automobiles": 58
, "Dodge": 43
, "Maserati": 39
, "SsangYong": 34
, "Chevrolet": 27
, "Infiniti": 12
, "Cadillac": 12
, "Chrysler": 3
, "other": 158
});

db.insert(db.countries.CH, "2019-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/5",
{ "Tesla|Model 3": 125
, "Renault|Zoe": 118
, "BMW|i3 BEV": 92
, "Hyundai|Kona Electric": 60
, "Jaguar|I-Pace": 55
, "Audi|e-tron": 48
, "Tesla|Model X": 37
, "Tesla|Model S": 33
, "Volkswagen|e-Golf": 32
, "Smart|Fortwo ED": 19
, "Nissan|e-NV200": 18
, "Nissan|Leaf": 17
, "Renault|Kangoo Z.E.": 16
, "Smart|Forfour ED": 12
, "Mitsubishi|i-MiEV": 6
, "Hyundai|Ioniq Electric": 6
, "Citroën|C-Zero": 5
, "Volkswagen|e-up!": 2
, "Peugeot|iOn": 2
, "Opel|Ampera-e": 2
, "Kia|Soul EV": 2
, "Volkswagen|e-Crafter": 1
, "Mercedes-Benz|eVito": 1
, "Citroën|Berlingo Electric": 1
, "other": 7
});

db.insert(db.countries.CH, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 3098
, "Mercedes-Benz": 2261
, "BMW": 2152
, "Škoda": 2041
, "Audi": 1501
, "Renault": 1351
, "Opel": 1308
, "Seat": 1182
, "Ford": 1147
, "Toyota": 985
, "Peugeot": 913
, "Fiat": 867
, "Volvo": 831
, "Suzuki": 796
, "Dacia": 773
, "Hyundai": 723
, "Citroën": 687
, "Tesla": 659
, "Mazda": 532
, "Mitsubishi": 509
, "Jeep": 472
, "Mini": 438
, "Nissan": 427
, "Kia": 384
, "Porsche": 376
, "Land Rover": 358
, "Subaru": 292
, "Honda": 263
, "Jaguar": 237
, "Alfa Romeo": 236
, "Smart": 133
, "Lexus": 97
, "DS Automobiles": 55
, "SsangYong": 34
, "Chevrolet": 28
, "Dodge": 27
, "Maserati": 19
, "Cadillac": 11
, "Infiniti": 9
, "Chrysler": 1
, "other": 178
});

db.insert(db.countries.CH, "2019-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/6",
{ "Tesla|Model 3": 584
, "Renault|Zoe": 128
, "BMW|i3 BEV": 62
, "Audi|e-tron": 57
, "Jaguar|I-Pace": 41
, "Tesla|Model S": 39
, "Tesla|Model X": 36
, "Hyundai|Kona Electric": 36
, "Volkswagen|e-Golf": 25
, "Nissan|Leaf": 23
, "Smart|Fortwo ED": 20
, "Renault|Kangoo Z.E.": 20
, "Nissan|e-NV200": 20
, "Kia|Soul EV": 19
, "Mitsubishi|i-MiEV": 11
, "Hyundai|Ioniq Electric": 8
, "Mercedes-Benz|EQC": 6
, "Opel|Ampera-e": 5
, "Smart|Forfour ED": 4
, "Citroën|C-Zero": 3
, "Volkswagen|e-up!": 2
, "Volkswagen|e-Crafter": 1
, "Peugeot|iOn": 1
, "Peugeot|Partner Electric": 1
, "other": 17
});

db.insert(db.countries.CH, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 3017
, "BMW": 2156
, "Mercedes-Benz": 2117
, "Audi": 1894
, "Škoda": 1603
, "Ford": 1289
, "Seat": 1230
, "Toyota": 925
, "Renault": 800
, "Dacia": 783
, "Opel": 774
, "Peugeot": 751
, "Volvo": 749
, "Fiat": 730
, "Citroën": 716
, "Hyundai": 672
, "Mazda": 609
, "Mini": 498
, "Jeep": 463
, "Suzuki": 437
, "Mitsubishi": 330
, "Land Rover": 311
, "Kia": 302
, "Porsche": 300
, "Nissan": 300
, "Alfa Romeo": 261
, "Honda": 258
, "Tesla": 234
, "Jaguar": 180
, "Subaru": 162
, "Smart": 134
, "DS Automobiles": 88
, "Lexus": 81
, "SsangYong": 48
, "Maserati": 40
, "Dodge": 39
, "Chevrolet": 23
, "Infiniti": 7
, "Cadillac": 5
, "Chrysler": 2
, "other": 201
});

db.insert(db.countries.CH, "2019-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/7",
{ "Tesla|Model 3": 188
, "Renault|Zoe": 95
, "BMW|i3 BEV": 83
, "Hyundai|Kona Electric": 78
, "Audi|e-tron": 77
, "Nissan|Leaf": 36
, "Jaguar|I-Pace": 31
, "Mercedes-Benz|eVito": 28
, "Mercedes-Benz|EQC": 26
, "Tesla|Model X": 24
, "Tesla|Model S": 22
, "Volkswagen|e-Golf": 21
, "Nissan|e-NV200": 19
, "Renault|Kangoo Z.E.": 18
, "Smart|Fortwo ED": 9
, "Smart|Forfour ED": 7
, "Opel|Ampera-e": 6
, "Mitsubishi|i-MiEV": 6
, "Hyundai|Ioniq Electric": 5
, "Kia|Soul EV": 4
, "Peugeot|iOn": 2
, "Volkswagen|e-up!": 1
, "Volkswagen|e-Crafter": 1
, "Citroën|C-Zero": 1
, "other": 2
});

db.insert(db.countries.CH, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsxx",
{ "Mercedes-Benz": 1938
, "Volkswagen": 1933
, "BMW": 1521
, "Škoda": 1397
, "Ford": 1048
, "Seat": 1039
, "Audi": 1023
, "Toyota": 1001
, "Renault": 793
, "Opel": 690
, "Fiat": 587
, "Hyundai": 567
, "Peugeot": 525
, "Dacia": 491
, "Volvo": 424
, "Mazda": 409
, "Suzuki": 405
, "Citroën": 400
, "Jeep": 351
, "Mini": 307
, "Kia": 293
, "Porsche": 271
, "Nissan": 271
, "Honda": 245
, "Land Rover": 223
, "Mitsubishi": 217
, "Tesla": 192
, "Alfa Romeo": 168
, "Jaguar": 132
, "Smart": 122
, "Subaru": 110
, "Lexus": 68
, "DS Automobiles": 45
, "Chevrolet": 42
, "Maserati": 26
, "Cadillac": 17
, "Dodge": 16
, "SsangYong": 14
, "Infiniti": 8
, "Chrysler": 2
, "other": 105
});

db.insert(db.countries.CH, "2019-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/8",
{ "Tesla|Model 3": 108
, "Hyundai|Kona Electric": 91
, "Renault|Zoe": 81
, "BMW|i3 BEV": 80
, "Renault|Kangoo Z.E.": 71
, "Tesla|Model X": 47
, "Nissan|Leaf": 45
, "Tesla|Model S": 37
, "Audi|e-tron": 37
, "Jaguar|I-Pace": 26
, "Nissan|e-NV200": 19
, "Smart|Fortwo ED": 15
, "Mercedes-Benz|eVito": 8
, "Kia|Soul EV": 7
, "Volkswagen|e-Golf": 5
, "Opel|Ampera-e": 4
, "Hyundai|Ioniq Electric": 4
, "Smart|Forfour ED": 3
, "Citroën|C-Zero": 3
, "Mitsubishi|i-MiEV": 1
, "Citroën|Berlingo Electric": 1
, "other": 53
});

db.insert(db.countries.CH, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Mercedes-Benz": 2194
, "Volkswagen": 2149
, "Škoda": 1905
, "BMW": 1795
, "Opel": 1154
, "Ford": 1150
, "Audi": 1125
, "Seat": 986
, "Renault": 899
, "Tesla": 835
, "Peugeot": 778
, "Hyundai": 743
, "Citroën": 709
, "Fiat": 660
, "Suzuki": 631
, "Volvo": 604
, "Kia": 571
, "Dacia": 524
, "Mazda": 487
, "Mini": 457
, "Porsche": 376
, "Honda": 358
, "Mitsubishi": 357
, "Land Rover": 344
, "Jeep": 325
, "Nissan": 304
, "Subaru": 190
, "Jaguar": 176
, "Alfa Romeo": 132
, "Smart": 119
, "Lexus": 71
, "DS Automobiles": 50
, "SsangYong": 46
, "Dodge": 35
, "Maserati": 20
, "Chevrolet": 18
, "Cadillac": 15
, "Infiniti": 12
, "Chrysler": 4
, "other": 1357
});

db.insert(db.countries.CH, "2019-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/9",
{ "Tesla|Model 3": 629
, "Renault|Zoe": 181
, "BMW|i3 BEV": 155
, "Tesla|Model X": 105
, "Tesla|Model S": 101
, "Hyundai|Kona Electric": 101
, "Nissan|Leaf": 56
, "Opel|Ampera-e": 41
, "Mercedes-Benz|EQC": 35
, "Audi|e-tron": 30
, "Nissan|e-NV200": 24
, "Hyundai|Ioniq Electric": 24
, "Jaguar|I-Pace": 20
, "Renault|Kangoo Z.E.": 11
, "Mitsubishi|i-MiEV": 9
, "Smart|Forfour ED": 8
, "Volkswagen|e-Golf": 6
, "Kia|Soul EV": 6
, "Mercedes-Benz|eVito": 4
, "Maxus|EV80": 3
, "Volkswagen|e-up!": 1
, "Peugeot|iOn": 1
, "Citroën|Berlingo Electric": 1
, "other": 2
});

db.insert(db.countries.CH, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 2902
, "Mercedes-Benz": 2407
, "BMW": 2234
, "Toyota": 2121
, "Škoda": 1930
, "Audi": 1774
, "Seat": 1263
, "Ford": 1061
, "Peugeot": 845
, "Renault": 828
, "Suzuki": 780
, "Volvo": 769
, "Opel": 756
, "Fiat": 740
, "Citroën": 735
, "Mazda": 716
, "Dacia": 711
, "Hyundai": 706
, "Porsche": 468
, "Mini": 429
, "Jeep": 386
, "Kia": 352
, "Mitsubishi": 314
, "Nissan": 300
, "Alfa Romeo": 276
, "Honda": 265
, "Land Rover": 237
, "Tesla": 187
, "Subaru": 177
, "Jaguar": 107
, "Smart": 105
, "SsangYong": 86
, "Chevrolet": 74
, "Lexus": 70
, "Dodge": 51
, "DS Automobiles": 29
, "Maserati": 19
, "Infiniti": 9
, "Chrysler": 4
, "Cadillac": 4
, "other": 2
});

db.insert(db.countries.CH, "2019-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/10",
{ "Renault|Zoe": 152
, "Tesla|Model 3": 108
, "BMW|i3 BEV": 103
, "Smart|Fortwo ED": 58
, "Tesla|Model X": 45
, "Nissan|Leaf": 41
, "Hyundai|Kona Electric": 40
, "Tesla|Model S": 34
, "Audi|e-tron": 26
, "Volkswagen|e-Golf": 23
, "Hyundai|Ioniq Electric": 19
, "Mercedes-Benz|EQC": 18
, "Opel|Ampera-e": 17
, "Jaguar|I-Pace": 17
, "Renault|Kangoo Z.E.": 13
, "Mitsubishi|i-MiEV": 12
, "Nissan|e-NV200": 10
, "Smart|Forfour ED": 8
, "Maxus|EV80": 8
, "Peugeot|Partner Electric": 2
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
, "Mercedes-Benz|eVito": 1
, "Kia|Soul EV": 1
, "other": 2
});

db.insert(db.countries.CH, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 2748
, "Mercedes-Benz": 2455
, "BMW": 2160
, "Škoda": 2119
, "Audi": 1487
, "Renault": 1120
, "Ford": 1081
, "Seat": 1080
, "Dacia": 805
, "Toyota": 783
, "Volvo": 769
, "Hyundai": 688
, "Suzuki": 669
, "Mazda": 638
, "Fiat": 597
, "Porsche": 478
, "Jeep": 458
, "Honda": 382
, "Kia": 359
, "Mitsubishi": 346
, "Mini": 345
, "Nissan": 329
, "Tesla": 301
, "Land Rover": 295
, "Subaru": 263
, "Peugeot": 255
, "Alfa Romeo": 248
, "Opel": 227
, "Citroën": 150
, "Lexus": 109
, "SsangYong": 90
, "Jaguar": 87
, "Smart": 65
, "Dodge": 58
, "Chevrolet": 37
, "Maserati": 23
, "DS Automobiles": 12
, "Infiniti": 9
, "Cadillac": 9
, "Chrysler": 4
, "other": 90
});

db.insert(db.countries.CH, "2019-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/11",
{ "Tesla|Model 3": 231
, "Renault|Zoe": 131
, "BMW|i3 BEV": 86
, "Nissan|Leaf": 55
, "Volkswagen|e-Golf": 44
, "Tesla|Model X": 37
, "Audi|e-tron": 35
, "Hyundai|Kona Electric": 34
, "Tesla|Model S": 33
, "Smart|Fortwo ED": 29
, "Renault|Kangoo Z.E.": 18
, "Nissan|e-NV200": 18
, "Mercedes-Benz|EQC": 14
, "Jaguar|I-Pace": 12
, "Smart|Forfour ED": 8
, "Hyundai|Ioniq Electric": 8
, "Mitsubishi|i-MiEV": 3
, "Mercedes-Benz|eVito": 2
, "Kia|Soul EV": 2
, "Peugeot|iOn": 1
, "Citroën|C-Zero": 1
, "other": 5
});

db.insert(db.countries.CH, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 3888
, "BMW": 2902
, "Mercedes-Benz": 2880
, "Škoda": 2678
, "Audi": 2424
, "Ford": 1556
, "Seat": 1499
, "Renault": 1395
, "Tesla": 1321
, "Suzuki": 1288
, "Toyota": 1199
, "Hyundai": 1098
, "Subaru": 962
, "Volvo": 949
, "Honda": 754
, "Mazda": 687
, "Fiat": 669
, "Nissan": 633
, "Dacia": 601
, "Opel": 599
, "Peugeot": 577
, "Mitsubishi": 517
, "Mini": 511
, "Land Rover": 492
, "Jeep": 484
, "Porsche": 418
, "Kia": 415
, "Citroën": 276
, "SsangYong": 248
, "Jaguar": 224
, "Alfa Romeo": 216
, "Lexus": 148
, "Smart": 72
, "Maserati": 47
, "Chevrolet": 40
, "Dodge": 32
, "DS Automobiles": 25
, "Infiniti": 10
, "Cadillac": 7
, "Chrysler": 2
, "other": 82
});

db.insert(db.countries.CH, "2019-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/12",
{ "Tesla|Model 3": 1188
, "Renault|Zoe": 385
, "Volkswagen|e-Golf": 348
, "Audi|e-tron": 245
, "BMW|i3 BEV": 111
, "Hyundai|Kona Electric": 93
, "Tesla|Model X": 83
, "Hyundai|Ioniq Electric": 63
, "Nissan|Leaf": 55
, "Mercedes-Benz|EQC": 53
, "Tesla|Model S": 50
, "Jaguar|I-Pace": 49
, "Nissan|e-NV200": 29
, "Smart|Fortwo ED": 26
, "Renault|Kangoo Z.E.": 22
, "Mitsubishi|i-MiEV": 14
, "Opel|Ampera-e": 12
, "Smart|Forfour ED": 9
, "Kia|Soul EV": 3
, "Peugeot|iOn": 1
, "Mercedes-Benz|eVito": 1
, "Citroën|C-Zero": 1
, "other": 6
});

db.insert(db.countries.CH, "2020-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx",
{ "Volkswagen": 2193
, "BMW": 1877
, "Mercedes-Benz": 1827
, "Škoda": 1484
, "Seat": 1020
, "Volvo": 1000
, "Audi": 990
, "Renault": 914
, "Toyota": 829
, "Fiat": 627
, "Ford": 569
, "Hyundai": 521
, "Dacia": 489
, "Mini": 429
, "Opel": 396
, "Peugeot": 374
, "Jeep": 362
, "Mazda": 334
, "Porsche": 283
, "Mitsubishi": 266
, "Suzuki": 251
, "Kia": 233
, "Nissan": 210
, "Land Rover": 205
, "Tesla": 203
, "Citroën": 166
, "Alfa Romeo": 159
, "Subaru": 115
, "Jaguar": 94
, "Honda": 83
, "Lexus": 45
, "Smart": 35
, "DS Automobiles": 35
, "Maserati": 30
, "Chevrolet": 6
, "Infiniti": 3
, "other": 131
});

db.insert(db.countries.CH, "2020-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/1",
{ "Renault|Zoe": 210
, "Tesla|Model 3": 146
, "BMW|i3 BEV": 89
, "Hyundai|Kona Electric": 61
, "Nissan|Leaf": 48
, "Škoda|Citigo-e": 44
, "Tesla|Model X": 37
, "Mercedes-Benz|EQC": 35
, "Smart|Fortwo ED": 25
, "Renault|Kangoo Z.E.": 21
, "Tesla|Model S": 20
, "Nissan|e-NV200": 17
, "Audi|e-tron": 13
, "Jaguar|I-Pace": 12
, "Kia|Soul EV": 6
, "Seat|Mii Electric": 5
, "Smart|Forfour ED": 4
, "Hyundai|Ioniq Electric": 3
, "Volkswagen|e-Golf": 2
, "Mercedes-Benz|eVito": 2
, "Kia|Niro EV": 2
, "Volkswagen|e-up!": 1
, "Volkswagen|e-Crafter": 1
, "Porsche|Taycan": 1
, "Peugeot|iOn": 1
, "Mitsubishi|i-MiEV": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "other": 10
});

db.insert(db.countries.CH, "2020-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx",
{ "Volkswagen": 2194
, "Mercedes-Benz": 1975
, "BMW": 1799
, "Škoda": 1538
, "Seat": 1112
, "Renault": 1021
, "Audi": 911
, "Ford": 781
, "Toyota": 703
, "Volvo": 617
, "Peugeot": 557
, "Fiat": 551
, "Hyundai": 519
, "Dacia": 517
, "Citroën": 377
, "Opel": 360
, "Mini": 343
, "Mazda": 340
, "Jeep": 317
, "Kia": 304
, "Mitsubishi": 302
, "Suzuki": 285
, "Nissan": 266
, "Porsche": 240
, "Alfa Romeo": 227
, "Land Rover": 226
, "Subaru": 123
, "Jaguar": 118
, "Tesla": 107
, "DS Automobiles": 87
, "Honda": 63
, "Lexus": 52
, "Smart": 26
, "Maserati": 12
, "Infiniti": 5
, "Chevrolet": 3
, "Cadillac": 2
, "SsangYong": 1
, "Chrysler": 1
, "other": 113
});

db.insert(db.countries.CH, "2020-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/2",
{ "Renault|Zoe": 267
, "Tesla|Model 3": 80
, "BMW|i3 BEV": 55
, "Hyundai|Kona Electric": 52
, "Nissan|Leaf": 44
, "Mercedes-Benz|EQC": 43
, "Škoda|Citigo-e": 36
, "Jaguar|I-Pace": 27
, "Audi|e-tron": 27
, "Porsche|Taycan": 21
, "Seat|Mii Electric": 19
, "Smart|Fortwo ED": 18
, "Nissan|e-NV200": 17
, "Tesla|Model X": 16
, "DS Automobiles|DS 3 Crossback E-Tense": 13
, "Volkswagen|e-up!": 12
, "Tesla|Model S": 11
, "Renault|Kangoo Z.E.": 10
, "Mini|Cooper SE Electric": 10
, "Hyundai|Ioniq Electric": 8
, "Volkswagen|e-Golf": 7
, "Smart|Forfour ED": 6
, "Citroën|C-Zero": 5
, "Mercedes-Benz|eVito": 3
, "Kia|Soul EV": 2
, "Peugeot|Partner Electric": 1
, "Mitsubishi|i-MiEV": 1
, "Maxus|EV80": 1
, "Citroën|Berlingo Electric": 1
, "other": 9
});

db.insert(db.countries.CH, "2020-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx",
{ "Volkswagen": 1954
, "BMW": 1625
, "Mercedes-Benz": 1604
, "Škoda": 1449
, "Audi": 1067
, "Seat": 906
, "Tesla": 821
, "Renault": 745
, "Ford": 716
, "Toyota": 650
, "Hyundai": 513
, "Mitsubishi": 498
, "Volvo": 453
, "Fiat": 446
, "Dacia": 418
, "Mini": 360
, "Opel": 346
, "Mazda": 328
, "Peugeot": 318
, "Porsche": 293
, "Suzuki": 265
, "Kia": 243
, "Land Rover": 236
, "Jeep": 222
, "Nissan": 221
, "Citroën": 193
, "Alfa Romeo": 129
, "Subaru": 115
, "Jaguar": 87
, "Lexus": 59
, "Honda": 51
, "Smart": 32
, "DS Automobiles": 23
, "Infiniti": 22
, "Maserati": 17
, "Chevrolet": 11
, "SsangYong": 2
, "Cadillac": 2
, "other": 129
});

db.insert(db.countries.CH, "2020-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/3",
{ "Tesla|Model 3": 736
, "Renault|Zoe": 197
, "Mercedes-Benz|EQC": 74
, "Mini|Cooper SE Electric": 66
, "BMW|i3 BEV": 58
, "Porsche|Taycan": 55
, "Tesla|Model X": 45
, "Tesla|Model S": 40
, "Nissan|Leaf": 40
, "Hyundai|Kona Electric": 38
, "Audi|e-tron": 35
, "Škoda|Citigo-e": 32
, "Seat|Mii Electric": 25
, "Smart|Fortwo ED": 23
, "Nissan|e-NV200": 23
, "Volkswagen|e-up!": 18
, "Volkswagen|e-Golf": 10
, "Jaguar|I-Pace": 10
, "Kia|Soul EV": 9
, "Smart|Forfour ED": 8
, "Hyundai|Ioniq Electric": 7
, "Opel|Ampera-e": 6
, "Renault|Kangoo Z.E.": 5
, "Peugeot|e-208": 4
, "Mitsubishi|i-MiEV": 4
, "Kia|Niro EV": 4
, "Honda|e": 2
, "Volkswagen|e-Crafter": 1
, "Maxus|EV80": 1
, "Citroën|C-Zero": 1
, "Citroën|Berlingo Electric": 1
, "other": 13
});

db.insert(db.countries.CH, "2020-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx",
{ "BMW": 1101
, "Volkswagen": 1011
, "Mercedes-Benz": 980
, "Škoda": 786
, "Seat": 522
, "Audi": 452
, "Ford": 390
, "Dacia": 349
, "Toyota": 344
, "Renault": 342
, "Hyundai": 296
, "Volvo": 258
, "Fiat": 234
, "Mini": 224
, "Peugeot": 209
, "Mazda": 191
, "Porsche": 174
, "Opel": 170
, "Mitsubishi": 161
, "Suzuki": 153
, "Tesla": 142
, "Kia": 131
, "Nissan": 108
, "Land Rover": 96
, "Citroën": 91
, "Jeep": 87
, "Alfa Romeo": 73
, "Subaru": 65
, "Jaguar": 28
, "Honda": 24
, "Smart": 23
, "DS Automobiles": 21
, "Lexus": 20
, "Maserati": 9
, "Chevrolet": 5
, "Cadillac": 3
, "Infiniti": 2
, "Dodge": 1
, "other": 106
});

db.insert(db.countries.CH, "2020-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/4",
{ "Tesla|Model 3": 127
, "Renault|Zoe": 87
, "Mini|Cooper SE Electric": 38
, "Hyundai|Kona Electric": 35
, "Mercedes-Benz|EQC": 31
, "Nissan|Leaf": 29
, "BMW|i3 BEV": 26
, "Smart|Fortwo ED": 20
, "Škoda|Citigo-e": 19
, "Nissan|e-NV200": 19
, "Opel|Corsa-e": 16
, "Seat|Mii Electric": 14
, "Renault|Kangoo Z.E.": 14
, "Porsche|Taycan": 12
, "Volkswagen|e-up!": 10
, "Volkswagen|e-Golf": 10
, "Kia|Soul EV": 10
, "Tesla|Model S": 8
, "Audi|e-tron": 8
, "Tesla|Model X": 7
, "Kia|Niro EV": 4
, "Smart|Forfour ED": 3
, "Mercedes-Benz|eVito": 3
, "Peugeot|iOn": 2
, "Peugeot|e-208": 1
, "Opel|Ampera-e": 1
, "Maxus|EV80": 1
, "Jaguar|I-Pace": 1
, "Hyundai|Ioniq Electric": 1
, "Citroën|E-Mehari": 1
, "Citroën|C-Zero": 1
, "other": 7
});

db.insert(db.countries.CH, "2020-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx",
{ "Mercedes-Benz": 1474
, "Volkswagen": 1384
, "BMW": 1201
, "Škoda": 1121
, "Audi": 835
, "Seat": 690
, "Renault": 654
, "Toyota": 620
, "Ford": 540
, "Volvo": 496
, "Dacia": 417
, "Peugeot": 405
, "Hyundai": 401
, "Opel": 389
, "Fiat": 376
, "Mini": 310
, "Porsche": 285
, "Suzuki": 272
, "Mazda": 260
, "Mitsubishi": 242
, "Citroën": 204
, "Tesla": 176
, "Kia": 175
, "Jeep": 165
, "Subaru": 141
, "Land Rover": 113
, "Nissan": 99
, "Honda": 76
, "Alfa Romeo": 76
, "Lexus": 51
, "Jaguar": 36
, "DS Automobiles": 36
, "Smart": 34
, "Maserati": 15
, "Chevrolet": 7
, "other": 114
});

db.insert(db.countries.CH, "2020-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/5",
{ "Tesla|Model 3": 146
, "Renault|Zoe": 114
, "Hyundai|Kona Electric": 55
, "Mercedes-Benz|EQC": 41
, "Opel|Corsa-e": 37
, "Porsche|Taycan": 31
, "Mini|Cooper SE Electric": 29
, "Renault|Kangoo Z.E.": 25
, "Smart|Fortwo ED": 24
, "BMW|i3 BEV": 24
, "Volkswagen|e-up!": 21
, "Tesla|Model X": 21
, "Škoda|Citigo-e": 19
, "Audi|e-tron": 19
, "Nissan|Leaf": 16
, "Kia|Soul EV": 16
, "Seat|Mii Electric": 14
, "Nissan|e-NV200": 11
, "Volkswagen|e-Golf": 9
, "Tesla|Model S": 9
, "Smart|Forfour ED": 8
, "Kia|Niro EV": 7
, "Jaguar|I-Pace": 6
, "Peugeot|e-208": 5
, "Hyundai|Ioniq Electric": 5
, "Mitsubishi|i-MiEV": 4
, "Maxus|EV80": 3
, "Citroën|C-Zero": 2
, "Citroën|Berlingo Electric": 2
, "Volkswagen|e-Crafter": 1
, "Peugeot|iOn": 1
, "Peugeot|e-2008": 1
, "Mercedes-Benz|eVito": 1
, "other": 5
});

db.insert(db.countries.CH, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx",
{ "Volkswagen": 2842
, "Mercedes-Benz": 2304
, "Škoda": 2015
, "BMW": 1986
, "Audi": 1554
, "Renault": 1184
, "Ford": 1144
, "Seat": 1077
, "Toyota": 990
, "Volvo": 817
, "Dacia": 622
, "Opel": 612
, "Suzuki": 593
, "Mini": 577
, "Fiat": 567
, "Hyundai": 566
, "Porsche": 493
, "Citroën": 491
, "Tesla": 489
, "Peugeot": 482
, "Jeep": 395
, "Mazda": 374
, "Kia": 373
, "Mitsubishi": 365
, "Nissan": 322
, "Land Rover": 244
, "Subaru": 240
, "Alfa Romeo": 159
, "Honda": 154
, "Jaguar": 87
, "Lexus": 68
, "DS Automobiles": 65
, "Smart": 46
, "Maserati": 20
, "Chevrolet": 5
, "Cadillac": 4
, "SsangYong": 2
, "Dodge": 2
, "Infiniti": 1
, "other": 146
});

db.insert(db.countries.CH, "2020-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/6",
{ "Tesla|Model 3": 383
, "Renault|Zoe": 279
, "BMW|i3 BEV": 75
, "Tesla|Model X": 71
, "Hyundai|Kona Electric": 65
, "Porsche|Taycan": 53
, "Audi|e-tron": 47
, "Nissan|Leaf": 37
, "Mercedes-Benz|EQC": 36
, "Tesla|Model S": 35
, "Smart|Fortwo ED": 33
, "Škoda|Citigo-e": 31
, "Volkswagen|e-up!": 31
, "Renault|Kangoo Z.E.": 28
, "Mini|Cooper SE Electric": 28
, "Opel|Corsa-e": 26
, "Nissan|e-NV200": 25
, "Volkswagen|e-Golf": 22
, "Jaguar|I-Pace": 14
, "Kia|Niro EV": 13
, "Smart|Forfour ED": 12
, "Peugeot|e-2008": 10
, "Seat|Mii Electric": 6
, "Peugeot|e-208": 6
, "Kia|Soul EV": 6
, "Mitsubishi|i-MiEV": 4
, "Maxus|EV80": 4
, "Hyundai|Ioniq Electric": 4
, "Peugeot|iOn": 2
, "Citroën|C-Zero": 2
, "Opel|Ampera-e": 1
, "other": 14
});

db.insert(db.countries.CH, "2020-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/08/ModellePW2020.xlsx",
{ "Volkswagen": 2796
, "Mercedes-Benz": 2095
, "Škoda": 2019
, "BMW": 1859
, "Audi": 1604
, "Renault": 1153
, "Peugeot": 994
, "Ford": 978
, "Seat": 935
, "Volvo": 901
, "Toyota": 779
, "Fiat": 630
, "Mazda": 582
, "Dacia": 523
, "Mini": 478
, "Hyundai": 469
, "Porsche": 446
, "Opel": 373
, "Kia": 354
, "Mitsubishi": 335
, "Suzuki": 325
, "Citroën": 307
, "Jeep": 289
, "Honda": 258
, "Nissan": 253
, "Land Rover": 189
, "Alfa Romeo": 164
, "Subaru": 85
, "Jaguar": 56
, "DS Automobiles": 55
, "Lexus": 54
, "Smart": 44
, "Tesla": 43
, "Maserati": 25
, "Chevrolet": 6
, "Dodge": 4
, "SsangYong": 2
, "Infiniti": 2
, "Cadillac": 2
, "other": 175
});

db.insert(db.countries.CH, "2020-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/7",
{ "Renault|Zoe": 238
, "Audi|e-tron": 116
, "Hyundai|Kona Electric": 63
, "Porsche|Taycan": 58
, "BMW|i3 BEV": 54
, "Škoda|Citigo-e": 48
, "Mini|Cooper SE Electric": 48
, "Nissan|Leaf": 43
, "Mercedes-Benz|EQC": 43
, "Smart|Fortwo ED": 37
, "Tesla|Model 3": 31
, "Honda|e": 30
, "Volkswagen|e-Golf": 21
, "Kia|Niro EV": 21
, "Volkswagen|e-up!": 18
, "Peugeot|e-2008": 17
, "Renault|Kangoo Z.E.": 16
, "Peugeot|e-208": 13
, "Nissan|e-NV200": 12
, "Opel|Corsa-e": 8
, "Tesla|Model S": 7
, "Mitsubishi|i-MiEV": 7
, "Jaguar|I-Pace": 7
, "Smart|Forfour ED": 6
, "Tesla|Model X": 5
, "Kia|Soul EV": 4
, "Mercedes-Benz|eVito": 3
, "Hyundai|Ioniq Electric": 3
, "Seat|Mii Electric": 2
, "Volkswagen|e-Crafter": 1
, "Opel|Ampera-e": 1
, "Maxus|EV80": 1
, "other": 20
});

db.insert(db.countries.CH, "2020-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/09/ModellePW2020.xlsx",
{ "Mercedes-Benz": 1702
, "BMW": 1385
, "Škoda": 1175
, "Volkswagen": 1091
, "Audi": 1087
, "Renault": 919
, "Ford": 821
, "Toyota": 695
, "Peugeot": 669
, "Seat": 614
, "Tesla": 586
, "Volvo": 488
, "Hyundai": 480
, "Dacia": 439
, "Citroën": 415
, "Fiat": 413
, "Mazda": 354
, "Opel": 299
, "Mini": 299
, "Kia": 269
, "Jeep": 258
, "Porsche": 235
, "Mitsubishi": 235
, "Nissan": 230
, "Honda": 223
, "Suzuki": 191
, "Land Rover": 139
, "Alfa Romeo": 129
, "Subaru": 87
, "DS Automobiles": 63
, "Jaguar": 51
, "Lexus": 40
, "Smart": 37
, "Chevrolet": 8
, "Maserati": 7
, "Polestar": 5
, "SsangYong": 3
, "Cadillac": 3
, "Dodge": 2
, "other": 114
});

db.insert(db.countries.CH, "2020-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/8",
{ "Tesla|Model 3": 541
, "Renault|Zoe": 220
, "Hyundai|Kona Electric": 132
, "Audi|e-tron": 83
, "Peugeot|e-208": 75
, "Mini|Cooper SE Electric": 71
, "Škoda|Citigo-e": 52
, "Porsche|Taycan": 36
, "Peugeot|e-2008": 36
, "Tesla|Model X": 32
, "Smart|Fortwo ED": 31
, "Honda|e": 31
, "BMW|i3 BEV": 31
, "Nissan|Leaf": 25
, "Volkswagen|e-Golf": 21
, "Kia|Niro EV": 21
, "Jaguar|I-Pace": 19
, "Nissan|e-NV200": 17
, "Volkswagen|e-up!": 14
, "Tesla|Model S": 13
, "Mazda|MX-30": 13
, "Seat|Mii Electric": 12
, "Renault|Kangoo Z.E.": 12
, "Opel|Corsa-e": 10
, "Hyundai|Ioniq Electric": 7
, "Smart|Forfour ED": 6
, "Polestar|2": 5
, "Mercedes-Benz|eSprinter": 4
, "Maxus|EV80": 4
, "Mitsubishi|i-MiEV": 3
, "Citroën|C-Zero": 3
, "Mercedes-Benz|eVito": 2
, "Volkswagen|e-Crafter": 1
, "Peugeot|iOn": 1
, "Opel|Ampera-e": 1
, "Kia|Soul EV": 1
, "other": 356
});

db.insert(db.countries.CH, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/10/ModellePW2020.xlsx",
{ "Mercedes-Benz": 2505
, "BMW": 1735
, "Škoda": 1717
, "Volkswagen": 1546
, "Audi": 1160
, "Tesla": 1142
, "Renault": 1051
, "Ford": 959
, "Seat": 926
, "Volvo": 765
, "Toyota": 760
, "Peugeot": 607
, "Hyundai": 596
, "Dacia": 533
, "Suzuki": 468
, "Opel": 446
, "Fiat": 440
, "Mazda": 430
, "Mini": 421
, "Kia": 389
, "Jeep": 374
, "Mitsubishi": 338
, "Citroën": 319
, "Nissan": 315
, "Honda": 277
, "Porsche": 248
, "Land Rover": 235
, "Subaru": 180
, "Alfa Romeo": 165
, "Jaguar": 140
, "Lexus": 58
, "Smart": 30
, "DS Automobiles": 23
, "Maserati": 11
, "Dodge": 9
, "SsangYong": 2
, "Polestar": 1
, "Chevrolet": 1
, "other": 132
});

db.insert(db.countries.CH, "2020-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/9",
{ "Tesla|Model 3": 882
, "Renault|Zoe": 304
, "Volkswagen|ID.3": 302
, "Tesla|Model X": 147
, "Tesla|Model S": 113
, "Hyundai|Kona Electric": 101
, "BMW|i3 BEV": 90
, "Mercedes-Benz|EQC": 82
, "Škoda|Citigo-e": 80
, "Audi|e-tron": 78
, "Peugeot|e-208": 72
, "Jaguar|I-Pace": 72
, "Mazda|MX-30": 70
, "Porsche|Taycan": 68
, "Kia|Niro EV": 59
, "Seat|Mii Electric": 56
, "Opel|Corsa-e": 56
, "Mini|Cooper SE Electric": 44
, "Nissan|Leaf": 38
, "Honda|e": 30
, "Smart|Fortwo ED": 28
, "Nissan|e-NV200": 25
, "Kia|Soul EV": 19
, "Volkswagen|e-up!": 14
, "Peugeot|e-2008": 12
, "Renault|Kangoo Z.E.": 11
, "Volkswagen|e-Golf": 10
, "Hyundai|Ioniq Electric": 8
, "Opel|Ampera-e": 5
, "Mitsubishi|i-MiEV": 5
, "Smart|Forfour ED": 2
, "Mercedes-Benz|eVito": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Citroën|C-Zero": 2
, "Polestar|2": 1
, "Peugeot|iOn": 1
, "Mercedes-Benz|EQV": 1
, "Maxus|EV80": 1
, "other": 12
});


db.insert(db.countries.CH, "2020-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/11/ModellePW2020.xlsx",
{ "Volkswagen": 2152
, "Mercedes-Benz": 2017
, "BMW": 1748
, "Škoda": 1723
, "Audi": 1597
, "Renault": 1027
, "Seat": 966
, "Ford": 791
, "Dacia": 755
, "Volvo": 709
, "Hyundai": 709
, "Toyota": 673
, "Fiat": 624
, "Suzuki": 576
, "Peugeot": 500
, "Mazda": 458
, "Mini": 440
, "Opel": 358
, "Porsche": 326
, "Honda": 317
, "Kia": 314
, "Jeep": 303
, "Citroën": 263
, "Nissan": 257
, "Subaru": 212
, "Land Rover": 209
, "Mitsubishi": 208
, "Alfa Romeo": 178
, "Tesla": 103
, "Jaguar": 70
, "DS Automobiles": 38
, "Lexus": 34
, "Smart": 29
, "Maserati": 22
, "Polestar": 12
, "Cadillac": 9
, "Dodge": 4
, "SsangYong": 2
, "Chevrolet": 2
, "other": 240
});

db.insert(db.countries.CH, "2020-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/10",
{ "Renault|Zoe": 214
, "Volkswagen|ID.3": 189
, "Hyundai|Kona Electric": 120
, "Audi|e-tron": 88
, "Mazda|MX-30": 81
, "Škoda|Citigo-e": 80
, "Mini|Cooper SE Electric": 79
, "Tesla|Model 3": 61
, "Nissan|Leaf": 59
, "Porsche|Taycan": 50
, "Opel|Corsa-e": 48
, "Mercedes-Benz|EQC": 45
, "Peugeot|e-208": 44
, "BMW|i3 BEV": 41
, "Honda|e": 36
, "Mercedes-Benz|EQV": 27
, "Tesla|Model X": 22
, "Kia|Niro EV": 21
, "Tesla|Model S": 20
, "Smart|Fortwo ED": 20
, "Renault|Kangoo Z.E.": 17
, "Seat|Mii Electric": 14
, "Nissan|e-NV200": 14
, "Kia|Soul EV": 14
, "Peugeot|e-2008": 13
, "Renault|Twingo Z.E.": 12
, "Jaguar|I-Pace": 11
, "Volkswagen|e-Golf": 10
, "Polestar|2": 10
, "DS Automobiles|DS 3 Crossback E-Tense": 10
, "Volkswagen|e-up!": 7
, "Smart|Forfour ED": 7
, "Opel|Ampera-e": 5
, "Hyundai|Ioniq Electric": 5
, "Peugeot|e-Expert": 4
, "Mercedes-Benz|eSprinter": 3
, "Mercedes-Benz|eVito": 2
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
, "Mitsubishi|i-MiEV": 1
, "Maxus|EV80": 1
, "other": 11
});

db.insert(db.countries.CH, "2020-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/12/ModellePW2020.xlsx",
{ "Volkswagen": 2856
, "Mercedes-Benz": 1961
, "BMW": 1956
, "Audi": 1797
, "Škoda": 1661
, "Seat": 1053
, "Renault": 908
, "Toyota": 895
, "Ford": 863
, "Volvo": 809
, "Fiat": 695
, "Peugeot": 687
, "Suzuki": 682
, "Hyundai": 608
, "Dacia": 513
, "Mazda": 476
, "Mini": 443
, "Tesla": 421
, "Porsche": 398
, "Opel": 360
, "Jeep": 334
, "Kia": 326
, "Mitsubishi": 316
, "Citroën": 303
, "Honda": 276
, "Subaru": 209
, "Nissan": 185
, "Land Rover": 183
, "Alfa Romeo": 162
, "Jaguar": 141
, "Lexus": 43
, "Smart": 37
, "DS Automobiles": 36
, "Maserati": 23
, "Cadillac": 5
, "Polestar": 3
, "SsangYong": 1
, "Dodge": 1
, "Chrysler": 1
, "other": 219
});

db.insert(db.countries.CH, "2020-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/11",
{ "Tesla|Model 3": 356
, "Renault|Zoe": 280
, "Volkswagen|ID.3": 168
, "Audi|e-tron": 165
, "Hyundai|Kona Electric": 153
, "Fiat|500e": 123
, "Mini|Cooper SE Electric": 89
, "Škoda|Citigo-e": 86
, "Peugeot|e-208": 80
, "Jaguar|I-Pace": 76
, "Renault|Kangoo Z.E.": 71
, "BMW|i3 BEV": 66
, "Porsche|Taycan": 57
, "Mercedes-Benz|EQV": 48
, "Mazda|MX-30": 43
, "Tesla|Model X": 40
, "Toyota|Proace Electric": 38
, "Mercedes-Benz|EQC": 36
, "Kia|Niro EV": 35
, "Opel|Corsa-e": 32
, "Smart|Fortwo ED": 31
, "Tesla|Model S": 25
, "Renault|Twingo Z.E.": 25
, "Nissan|Leaf": 24
, "Honda|e": 22
, "Opel|Vivaro-e": 21
, "Volkswagen|e-up!": 20
, "Opel|Ampera-e": 16
, "DS Automobiles|DS 3 Crossback E-Tense": 14
, "Peugeot|e-2008": 13
, "Nissan|e-NV200": 13
, "Seat|Mii Electric": 7
, "Kia|Soul EV": 7
, "Smart|Forfour ED": 6
, "Peugeot|e-Expert": 6
, "Mercedes-Benz|eSprinter": 5
, "Hyundai|Ioniq Electric": 5
, "Volkswagen|e-Golf": 4
, "Peugeot|e-Traveller": 4
, "Mercedes-Benz|eVito": 4
, "Polestar|2": 3
, "Citroën|C-Zero": 3
, "Volkswagen|e-Crafter": 2
, "Maxus|EV80": 2
, "Mitsubishi|i-MiEV": 1
, "Citroën|ë-Jumpy": 1
, "other": 26
});

db.insert(db.countries.CH, "2020-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
{ "Volkswagen": 4396
, "BMW": 3058
, "Mercedes-Benz": 2382
, "Škoda": 2069
, "Tesla": 1809
, "Audi": 1808
, "Ford": 1221
, "Renault": 1154
, "Volvo": 1124
, "Seat": 1090
, "Suzuki": 949
, "Toyota": 842
, "Fiat": 695
, "Hyundai": 659
, "Mini": 602
, "Mazda": 587
, "Dacia": 535
, "Subaru": 529
, "Mitsubishi": 396
, "Porsche": 388
, "Kia": 351
, "Peugeot": 335
, "Opel": 322
, "Jeep": 320
, "Honda": 299
, "Nissan": 296
, "Citroën": 234
, "Alfa Romeo": 195
, "Land Rover": 183
, "Jaguar": 153
, "DS Automobiles": 52
, "Lexus": 40
, "Dodge": 34
, "Smart": 31
, "Maserati": 17
, "Cadillac": 17
, "Polestar": 15
, "Chevrolet": 12
, "Chrysler": 1
, "other": 251
});

db.insert(db.countries.CH, "2020-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/12",
{ "Tesla|Model 3": 1560
, "Renault|Zoe": 477
, "Volkswagen|ID.3": 346
, "Fiat|500e": 234
, "Audi|e-tron": 224
, "BMW|i3 BEV": 195
, "Tesla|Model X": 159
, "Hyundai|Kona Electric": 159
, "Mini|Cooper SE Electric": 153
, "Nissan|Leaf": 134
, "Mazda|MX-30": 126
, "Jaguar|I-Pace": 102
, "Volvo|XC40 Recharge pure electric": 93
, "Tesla|Model S": 90
, "Škoda|Citigo-e": 85
, "Renault|Kangoo Z.E.": 84
, "Porsche|Taycan": 70
, "Toyota|Proace Electric": 57
, "Nissan|e-NV200": 48
, "Kia|Niro EV": 44
, "Peugeot|e-208": 35
, "Volkswagen|e-up!": 31
, "Renault|Twingo Z.E.": 31
, "Mercedes-Benz|EQC": 30
, "Mercedes-Benz|eVito": 25
, "Opel|Corsa-e": 24
, "Smart|Fortwo ED": 22
, "Honda|e": 18
, "Mercedes-Benz|EQV": 14
, "Polestar|2": 13
, "Volkswagen|e-Golf": 11
, "Hyundai|Ioniq Electric": 10
, "Smart|Forfour ED": 9
, "Kia|Soul EV": 9
, "Peugeot|e-2008": 8
, "Citroën|ë-Jumpy": 6
, "Opel|Vivaro-e": 4
, "Citroën|C-Zero": 4
, "Volkswagen|e-Crafter": 2
, "Opel|Ampera-e": 2
, "Volkswagen|e-Transporter": 1
, "Peugeot|e-Traveller": 1
, "Peugeot|e-Expert": 1
, "Maxus|EV80": 1
, "DS Automobiles|DS 3 Crossback E-Tense": 1
, "Citroën|Berlingo Electric": 1
, "other": 63
});

db.insert(db.countries.CH, "2021-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/02/ModellePW2021.xlsx",
{ "Mercedes-Benz": 1629
, "BMW": 1340
, "Volkswagen": 1297
, "Škoda": 1023
, "Audi": 953
, "Toyota": 756
, "Volvo": 726
, "Ford": 595
, "Peugeot": 513
, "Hyundai": 512
, "Renault": 486
, "Fiat": 397
, "Dacia": 375
, "Mazda": 367
, "Porsche": 336
, "Citroën": 316
, "Kia": 297
, "Opel": 263
, "Suzuki": 252
, "Mini": 241
, "Land Rover": 218
, "Jeep": 176
, "Mitsubishi": 175
, "Honda": 158
, "Nissan": 141
, "Subaru": 109
, "Alfa Romeo": 100
, "Tesla": 62
, "Jaguar": 50
, "Polestar": 44
, "Lexus": 44
, "DS Automobiles": 40
, "Maserati": 25
, "Smart": 23
, "Cadillac": 9
, "Infiniti": 1
, "Dodge": 1
, "Chevrolet": 1
, "other": 1079
});

db.insert(db.countries.CH, "2021-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/1",
{ "Renault|Zoe": 144
, "Volkswagen|ID.3": 108
, "Volvo|XC40 Recharge pure electric": 82
, "Audi|e-tron": 75
, "Fiat|500e": 66
, "Tesla|Model 3": 53
, "Peugeot|e-208": 51
, "Porsche|Taycan": 44
, "Polestar|2": 43
, "Hyundai|Kona Electric": 42
, "Kia|Niro EV": 29
, "BMW|i3 BEV": 29
, "Škoda|Citigo-e": 28
, "Peugeot|e-2008": 26
, "Opel|Corsa-e": 26
, "Renault|Kangoo Z.E.": 22
, "Mercedes-Benz|EQC": 22
, "Smart|Fortwo ED": 19
, "Nissan|e-NV200": 18
, "Volkswagen|e-up!": 14
, "Mini|Cooper SE Electric": 14
, "Volkswagen|e-Golf": 11
, "Seat|Mii Electric": 11
, "Peugeot|e-Expert": 11
, "Honda|e": 11
, "Jaguar|I-Pace": 10
, "Tesla|Model X": 8
, "Renault|Twingo Z.E.": 8
, "DS Automobiles|DS 3 Crossback E-Tense": 7
, "Citroën|ë-Jumpy": 7
, "Toyota|Proace Electric": 6
, "Opel|Ampera-e": 6
, "Nissan|Leaf": 6
, "Mazda|MX-30": 5
, "Lexus|UX 300e": 5
, "Smart|Forfour ED": 4
, "Mercedes-Benz|eVito": 3
, "Kia|Soul EV": 3
, "Hyundai|Ioniq Electric": 3
, "Volkswagen|e-Crafter": 2
, "Opel|Vivaro-e": 2
, "Maxus|EV80": 2
, "Volkswagen|e-Transporter": 1
, "Tesla|Model S": 1
, "Mitsubishi|i-MiEV": 1
, "Mercedes-Benz|EQV": 1
, "Citroën|ë-C4": 1
, "Citroën|C-Zero": 1
, "other": 4
});

db.insert(db.countries.CH, "2021-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/03/ModellePW2021.xlsx",
{ "Volkswagen": 1549
, "Mercedes-Benz": 1493
, "Škoda": 1403
, "BMW": 1293
, "Audi": 1003
, "Toyota": 880
, "Peugeot": 686
, "Renault": 642
, "Ford": 609
, "Volvo": 536
, "Hyundai": 461
, "Dacia": 386
, "Fiat": 385
, "Opel": 364
, "Mazda": 320
, "Suzuki": 290
, "Porsche": 279
, "Kia": 270
, "Mini": 262
, "Citroën": 261
, "Land Rover": 180
, "Tesla": 171
, "Honda": 169
, "Jeep": 156
, "Mitsubishi": 148
, "Nissan": 145
, "Subaru": 101
, "Polestar": 98
, "Alfa Romeo": 96
, "Jaguar": 76
, "Lexus": 29
, "DS Automobiles": 29
, "Maserati": 25
, "Smart": 20
, "Cadillac": 9
, "Genesis": 5
, "Dodge": 3
, "Aiways": 3
, "SsangYong": 1
, "other": 1295
});

db.insert(db.countries.CH, "2021-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/2",
{ "Volkswagen|ID.3": 181
, "Renault|Zoe": 166
, "Tesla|Model 3": 160
, "Polestar|2": 98
, "Fiat|500e": 92
, "Audi|e-tron": 62
, "Volvo|XC40 Recharge pure electric": 60
, "Peugeot|e-208": 48
, "Citroën|ë-C4": 45
, "Hyundai|Kona Electric": 43
, "Renault|Twingo Z.E.": 37
, "BMW|i3 BEV": 34
, "Škoda|Citigo-e": 30
, "Seat|Mii Electric": 30
, "Opel|Corsa-e": 30
, "Mercedes-Benz|EQC": 29
, "Porsche|Taycan": 23
, "Kia|Niro EV": 20
, "Smart|Fortwo ED": 18
, "Renault|Kangoo Z.E.": 18
, "Peugeot|e-2008": 16
, "Volkswagen|e-up!": 15
, "Nissan|Leaf": 15
, "Mini|Cooper SE Electric": 14
, "Nissan|e-NV200": 12
, "BMW|iX3": 11
, "Tesla|Model X": 10
, "Mercedes-Benz|eVito": 9
, "Jaguar|I-Pace": 9
, "Kia|Soul EV": 8
, "Honda|e": 8
, "Mazda|MX-30": 6
, "Lexus|UX 300e": 6
, "Opel|Ampera-e": 5
, "Hyundai|Ioniq Electric": 5
, "Peugeot|e-Expert": 4
, "Mercedes-Benz|EQV": 4
, "Citroën|ë-Jumpy": 4
, "Volkswagen|e-Crafter": 3
, "Toyota|Proace Electric": 3
, "Peugeot|e-Traveller": 3
, "Opel|Vivaro-e": 3
, "Ford|Mustang Mach-E": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Citroën|C-Zero": 3
, "Aiways|U5": 3
, "Smart|Forfour ED": 2
, "Tesla|Model S": 1
, "Mercedes-Benz|eSprinter": 1
, "other": 14
});

db.insert(db.countries.CH, "2021-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/04/ModellePW2021.xlsx",
{ "Volkswagen": 2609
, "BMW": 2557
, "Mercedes-Benz": 2504
, "Škoda": 1729
, "Audi": 1707
, "Renault": 956
, "Toyota": 894
, "Ford": 871
, "Volvo": 830
, "Hyundai": 812
, "Opel": 719
, "Peugeot": 620
, "Suzuki": 608
, "Fiat": 606
, "Dacia": 574
, "Tesla": 528
, "Porsche": 521
, "Mini": 518
, "Mazda": 445
, "Kia": 430
, "Nissan": 392
, "Honda": 320
, "Jeep": 284
, "Mitsubishi": 282
, "Land Rover": 276
, "Citroën": 275
, "Subaru": 227
, "Alfa Romeo": 145
, "Jaguar": 104
, "Polestar": 81
, "Lexus": 44
, "DS Automobiles": 39
, "Smart": 34
, "Maserati": 31
, "Cadillac": 31
, "Aiways": 9
, "Genesis": 5
, "SsangYong": 4
, "Dodge": 3
, "Chevrolet": 3
, "Infiniti": 1
, "Chrysler": 1
, "other": 1607
});

db.insert(db.countries.CH, "2021-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/3",
{ "Tesla|Model 3": 526
, "Volkswagen|ID.3": 227
, "Renault|Zoe": 161
, "Volkswagen|ID.4": 140
, "Fiat|500e": 138
, "Audi|e-tron": 115
, "Hyundai|Kona Electric": 98
, "Polestar|2": 81
, "Volvo|XC40 Recharge pure electric": 70
, "Mercedes-Benz|EQC": 68
, "Nissan|Leaf": 59
, "BMW|i3 BEV": 58
, "Porsche|Taycan": 55
, "Renault|Twingo Z.E.": 49
, "Peugeot|e-2008": 47
, "Citroën|ë-Jumpy": 42
, "Opel|Ampera-e": 37
, "Peugeot|e-208": 36
, "Opel|Corsa-e": 36
, "Kia|Niro EV": 35
, "Seat|Mii Electric": 33
, "Mini|Cooper SE Electric": 31
, "Smart|Fortwo ED": 28
, "Nissan|e-NV200": 27
, "Škoda|Citigo-e": 24
, "Honda|e": 24
, "Volkswagen|e-up!": 19
, "Jaguar|I-Pace": 19
, "Mercedes-Benz|eSprinter": 16
, "Renault|Kangoo Z.E.": 13
, "Mercedes-Benz|EQA": 12
, "Citroën|ë-C4": 12
, "BMW|iX3": 12
, "Opel|Vivaro-e": 11
, "Kia|Soul EV": 9
, "Aiways|U5": 9
, "Mercedes-Benz|EQV": 7
, "Peugeot|e-Expert": 6
, "Smart|Forfour ED": 5
, "Lexus|UX 300e": 5
, "Audi|e-tron GT": 5
, "Volkswagen|e-Transporter": 4
, "Toyota|Proace Electric": 4
, "Peugeot|e-Traveller": 3
, "Hyundai|Ioniq Electric": 3
, "Tesla|Model X": 2
, "Mazda|MX-30": 2
, "Maxus|EV80": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Mitsubishi|i-MiEV": 1
, "other": 18
});

db.insert(db.countries.CH, "2021-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/05/ModellePW2021.xlsx",
{ "Mercedes-Benz": 2479
, "Volkswagen": 2304
, "BMW": 1891
, "Škoda": 1812
, "Audi": 1801
, "Toyota": 1016
, "Renault": 740
, "Ford": 717
, "Suzuki": 716
, "Volvo": 706
, "Hyundai": 682
, "Fiat": 572
, "Peugeot": 539
, "Mini": 495
, "Opel": 482
, "Mazda": 441
, "Kia": 436
, "Porsche": 305
, "Jeep": 303
, "Dacia": 299
, "Citroën": 277
, "Land Rover": 268
, "Nissan": 218
, "Mitsubishi": 203
, "Honda": 178
, "Subaru": 152
, "Alfa Romeo": 140
, "Jaguar": 125
, "Polestar": 74
, "Tesla": 61
, "Lexus": 36
, "Smart": 31
, "DS Automobiles": 28
, "Maserati": 23
, "Cadillac": 9
, "SsangYong": 3
, "Chevrolet": 3
, "Dodge": 2
, "Aiways": 1
, "other": 1486
});

db.insert(db.countries.CH, "2021-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/4",
{ "Volkswagen|ID.3": 345
, "Volkswagen|ID.4": 140
, "Renault|Zoe": 136
, "Fiat|500e": 131
, "Audi|e-tron": 97
, "Mercedes-Benz|EQA": 91
, "BMW|i3 BEV": 90
, "Hyundai|Kona Electric": 79
, "Polestar|2": 74
, "Volvo|XC40 Recharge pure electric": 64
, "Tesla|Model 3": 61
, "Škoda|Enyaq": 54
, "Opel|Mokka-e": 51
, "Mercedes-Benz|EQC": 51
, "Mini|Cooper SE Electric": 49
, "Renault|Twingo Z.E.": 48
, "Peugeot|e-208": 44
, "Porsche|Taycan": 34
, "Nissan|Leaf": 32
, "Opel|Corsa-e": 30
, "Opel|Ampera-e": 30
, "Škoda|Citigo-e": 26
, "Volkswagen|e-up!": 26
, "Smart|Fortwo ED": 25
, "Kia|Niro EV": 25
, "Seat|Mii Electric": 23
, "Renault|Kangoo Z.E.": 20
, "Honda|e": 17
, "Peugeot|e-2008": 13
, "Jaguar|I-Pace": 12
, "Nissan|e-NV200": 11
, "Citroën|ë-C4": 11
, "Toyota|Proace Electric": 10
, "Mercedes-Benz|EQV": 10
, "Kia|Soul EV": 7
, "Peugeot|e-Expert": 6
, "Opel|Vivaro-e": 6
, "Smart|Forfour ED": 5
, "Mazda|MX-30": 5
, "Lexus|UX 300e": 4
, "BMW|iX3": 4
, "Volkswagen|e-Transporter": 3
, "Peugeot|e-Traveller": 3
, "Mercedes-Benz|eSprinter": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Citroën|ë-Jumpy": 3
, "other": 36
});

db.insert(db.countries.CH, "2021-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/06/ModellePW2021.xlsx",
{ "Volkswagen": 2470
, "Škoda": 2019
, "BMW": 1833
, "Mercedes-Benz": 1785
, "Audi": 1781
, "Toyota": 782
, "Ford": 702
, "Renault": 643
, "Volvo": 616
, "Hyundai": 558
, "Fiat": 475
, "Suzuki": 449
, "Mazda": 445
, "Peugeot": 438
, "Kia": 412
, "Mini": 399
, "Porsche": 365
, "Citroën": 345
, "Opel": 333
, "Dacia": 313
, "Jeep": 290
, "Honda": 185
, "Land Rover": 161
, "Nissan": 145
, "Tesla": 143
, "Mitsubishi": 142
, "Alfa Romeo": 136
, "Subaru": 129
, "Jaguar": 104
, "Polestar": 52
, "DS Automobiles": 44
, "Smart": 40
, "Lexus": 31
, "Maserati": 13
, "Cadillac": 10
, "Chevrolet": 7
, "SsangYong": 2
, "Genesis": 1
, "Dodge": 1
, "Chrysler": 1
, "other": 1191
});

db.insert(db.countries.CH, "2021-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/5",
{ "Volkswagen|ID.3": 230
, "Tesla|Model 3": 143
, "Fiat|500e": 136
, "Renault|Zoe": 135
, "Škoda|Enyaq": 122
, "Audi|e-tron": 114
, "Volkswagen|ID.4": 99
, "Hyundai|Kona Electric": 81
, "Volvo|XC40 Recharge pure electric": 75
, "Ford|Mustang Mach-E": 69
, "Audi|e-tron GT": 60
, "Polestar|2": 50
, "Peugeot|e-208": 49
, "Opel|Corsa-e": 44
, "Mercedes-Benz|EQC": 44
, "BMW|i3 BEV": 44
, "Mercedes-Benz|EQA": 41
, "Kia|Niro EV": 37
, "Porsche|Taycan": 35
, "Toyota|Proace Electric": 33
, "Mini|Cooper SE Electric": 31
, "Smart|Fortwo ED": 29
, "Volkswagen|e-up!": 27
, "Renault|Twingo Z.E.": 23
, "Renault|Kangoo Z.E.": 20
, "BMW|iX3": 20
, "Nissan|Leaf": 17
, "Opel|Mokka-e": 16
, "Honda|e": 16
, "Citroën|ë-C4": 15
, "Seat|Mii Electric": 14
, "Opel|Vivaro-e": 14
, "Jaguar|I-Pace": 14
, "Citroën|ë-Jumpy": 14
, "Nissan|e-NV200": 12
, "Škoda|Citigo-e": 11
, "Smart|Forfour ED": 10
, "Mercedes-Benz|EQV": 10
, "Peugeot|e-2008": 9
, "Mazda|MX-30": 9
, "Kia|Soul EV": 7
, "Mercedes-Benz|eSprinter": 5
, "Hyundai|Ioniq Electric": 4
, "DS Automobiles|DS 3 Crossback E-Tense": 4
, "Volkswagen|e-Transporter": 3
, "Peugeot|e-Expert": 3
, "Opel|Ampera-e": 3
, "Mercedes-Benz|eVito": 2
, "Dacia|Spring": 2
, "other": 42
});

db.insert(db.countries.CH, "2021-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/07/ModellePW2021.xlsx",
{ "Volkswagen": 3458
, "BMW": 2156
, "Mercedes-Benz": 2042
, "Audi": 1957
, "Škoda": 1757
, "Tesla": 1296
, "Toyota": 1018
, "Ford": 916
, "Renault": 907
, "Peugeot": 730
, "Volvo": 720
, "Dacia": 719
, "Fiat": 692
, "Hyundai": 691
, "Mazda": 570
, "Suzuki": 558
, "Mini": 500
, "Opel": 477
, "Kia": 418
, "Citroën": 374
, "Porsche": 368
, "Jeep": 322
, "Honda": 268
, "Mitsubishi": 254
, "Subaru": 251
, "Land Rover": 232
, "Nissan": 160
, "Alfa Romeo": 155
, "Jaguar": 116
, "Polestar": 97
, "Lexus": 38
, "DS Automobiles": 32
, "Smart": 30
, "Maserati": 15
, "Cadillac": 12
, "Genesis": 11
, "Dodge": 4
, "SsangYong": 2
, "Chevrolet": 1
, "Aiways": 1
, "other": 1680
});

db.insert(db.countries.CH, "2021-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/6",
{ "Tesla|Model 3": 1296
, "Volkswagen|ID.3": 268
, "Volkswagen|ID.4": 229
, "Fiat|500e": 155
, "Škoda|Enyaq": 152
, "Renault|Zoe": 140
, "BMW|i3 BEV": 137
, "Volvo|XC40 Recharge pure electric": 100
, "Polestar|2": 96
, "Mercedes-Benz|EQA": 95
, "Hyundai|Kona Electric": 95
, "Ford|Mustang Mach-E": 85
, "Audi|Q4 e-tron": 78
, "Audi|e-tron": 75
, "Peugeot|e-208": 59
, "Opel|Corsa-e": 54
, "Audi|e-tron GT": 54
, "Renault|Twingo Z.E.": 50
, "Dacia|Spring": 47
, "BMW|iX3": 45
, "Mini|Cooper SE Electric": 36
, "Renault|Kangoo Z.E.": 32
, "Kia|Niro EV": 31
, "Volkswagen|e-up!": 30
, "Porsche|Taycan": 28
, "Nissan|Leaf": 28
, "Nissan|e-NV200": 26
, "Seat|Mii Electric": 24
, "Smart|Fortwo ED": 21
, "Honda|e": 21
, "Peugeot|e-Expert": 20
, "Škoda|Citigo-e": 19
, "Citroën|ë-C4": 17
, "Jaguar|I-Pace": 16
, "Mercedes-Benz|EQC": 15
, "Toyota|Proace Electric": 13
, "Peugeot|e-2008": 12
, "Mercedes-Benz|eSprinter": 11
, "Kia|Soul EV": 11
, "Peugeot|e-Traveller": 10
, "Opel|Mokka-e": 9
, "Smart|Forfour ED": 8
, "Opel|Ampera-e": 6
, "Hyundai|Ioniq Electric": 6
, "Opel|Vivaro-e": 5
, "Mercedes-Benz|EQV": 5
, "Mercedes-Benz|eVito": 3
, "Citroën|ë-Jumpy": 3
, "other": 29
});

db.insert(db.countries.CH, "2021-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/08/ModellePW2021.xlsx",
{ "Volkswagen": 2304
, "Mercedes-Benz": 1812
, "BMW": 1707
, "Škoda": 1477
, "Audi": 1375
, "Toyota": 990
, "Ford": 722
, "Hyundai": 670
, "Volvo": 663
, "Peugeot": 647
, "Dacia": 624
, "Renault": 623
, "Mazda": 496
, "Fiat": 441
, "Opel": 404
, "Mini": 397
, "Kia": 358
, "Porsche": 336
, "Suzuki": 305
, "Mitsubishi": 277
, "Jeep": 235
, "Citroën": 225
, "Nissan": 213
, "Land Rover": 194
, "Honda": 161
, "Alfa Romeo": 106
, "Subaru": 93
, "Jaguar": 83
, "Polestar": 50
, "Lexus": 41
, "Maserati": 29
, "DS Automobiles": 24
, "Tesla": 17
, "Genesis": 18
, "Smart": 17
, "Dodge": 12
, "Aiways": 12
, "Cadillac": 8
, "Chevrolet": 5
, "SsangYong": 2
, "other": 1245
});

db.insert(db.countries.CH, "2021-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/7",
{ "Škoda|Enyaq": 135
, "Volkswagen|ID.3": 132
, "Fiat|500e": 131
, "Mercedes-Benz|EQA": 115
, "Hyundai|Kona Electric": 114
, "Renault|Zoe": 108
, "Volvo|XC40 Recharge pure electric": 102
, "Peugeot|e-208": 92
, "Ford|Mustang Mach-E": 80
, "Volkswagen|ID.4": 73
, "BMW|i3 BEV": 66
, "Audi|e-tron": 63
, "Audi|e-tron GT": 61
, "Polestar|2": 49
, "Porsche|Taycan": 45
, "Mini|Cooper SE Electric": 44
, "Renault|Kangoo Z.E.": 36
, "Seat|Mii Electric": 35
, "Nissan|Leaf": 33
, "Peugeot|e-2008": 31
, "Opel|Corsa-e": 26
, "Audi|Q4 e-tron": 26
, "Kia|Niro EV": 24
, "Renault|Twingo Z.E.": 23
, "Mercedes-Benz|EQC": 23
, "Hyundai|Ioniq Electric": 22
, "Nissan|e-NV200": 18
, "Volkswagen|e-up!": 17
, "Tesla|Model 3": 17
, "Jaguar|I-Pace": 15
, "BMW|iX3": 14
, "Škoda|Citigo-e": 12
, "Honda|e": 12
, "Aiways|U5": 12
, "Mazda|MX-30": 11
, "Citroën|ë-C4": 11
, "Toyota|Proace Electric": 9
, "Smart|Fortwo ED": 9
, "Mercedes-Benz|EQV": 9
, "Dacia|Spring": 8
, "Smart|Forfour ED": 6
, "Opel|Vivaro-e": 5
, "Opel|Ampera-e": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 5
, "Peugeot|e-Traveller": 4
, "Opel|Mokka-e": 4
, "Mercedes-Benz|eSprinter": 4
, "other": 56
});

db.insert(db.countries.CH, "2021-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/09/ModellePW2021.xlsx",
{ "Volkswagen": 1838
, "Mercedes-Benz": 1410
, "BMW": 1356
, "Audi": 1243
, "Škoda": 1164
, "Toyota": 996
, "Ford": 759
, "Hyundai": 610
, "Volvo": 479
, "Suzuki": 468
, "Dacia": 459
, "Peugeot": 440
, "Renault": 432
, "Fiat": 430
, "Opel": 315
, "Mazda": 302
, "Kia": 301
, "Tesla": 283
, "Mini": 279
, "Citroën": 268
, "Mitsubishi": 215
, "Jeep": 198
, "Porsche": 195
, "Honda": 188
, "Nissan": 186
, "Land Rover": 126
, "Subaru": 124
, "Alfa Romeo": 67
, "Jaguar": 64
, "Polestar": 38
, "DS Automobiles": 32
, "Smart": 29
, "Lexus": 28
, "Maserati": 20
, "Cadillac": 14
, "Genesis": 12
, "Dodge": 7
, "Aiways": 4
, "Chevrolet": 2
, "SsangYong": 1
, "other": 1074
});

db.insert(db.countries.CH, "2021-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/8",
{ "Volkswagen|ID.3": 289
, "Škoda|Enyaq": 160
, "Tesla|Model Y": 142
, "Tesla|Model 3": 141
, "Renault|Zoe": 98
, "Fiat|500e": 98
, "Audi|e-tron": 94
, "Volkswagen|ID.4": 81
, "Mercedes-Benz|EQC": 81
, "Hyundai|Kona Electric": 80
, "Mercedes-Benz|EQA": 76
, "Hyundai|Ioniq Electric": 73
, "BMW|iX3": 61
, "Ford|Mustang Mach-E": 55
, "Audi|e-tron GT": 51
, "Mini|Cooper SE Electric": 48
, "Audi|Q4 e-tron": 45
, "Volvo|XC40 Recharge pure electric": 44
, "Volkswagen|e-up!": 41
, "Peugeot|e-208": 41
, "Polestar|2": 38
, "Renault|Twingo Z.E.": 35
, "Citroën|ë-C4": 33
, "Porsche|Taycan": 29
, "Nissan|Leaf": 27
, "BMW|i3 BEV": 25
, "Smart|Fortwo ED": 24
, "Kia|Niro EV": 24
, "Opel|Corsa-e": 23
, "Jaguar|I-Pace": 22
, "Seat|Mii Electric": 21
, "Opel|Mokka-e": 19
, "Peugeot|e-2008": 17
, "Mazda|MX-30": 17
, "Renault|Kangoo Z.E.": 16
, "Peugeot|e-Expert": 16
, "Volkswagen|e-Crafter": 15
, "Škoda|Citigo-e": 12
, "Honda|e": 11
, "Mercedes-Benz|eVito": 9
, "Mercedes-Benz|EQV": 9
, "Mercedes-Benz|EQS": 8
, "Opel|Vivaro-e": 6
, "Kia|Soul EV": 6
, "Smart|Forfour ED": 5
, "BMW|iX": 5
, "Nissan|e-NV200": 4
, "Dacia|Spring": 4
, "Citroën|ë-Jumpy": 4
, "Aiways|U5": 4
, "other": 30
});

db.insert(db.countries.CH, "2021-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/10/ModellePW2021.xlsx",
{ "Volkswagen": 2048
, "BMW": 1693
, "Tesla": 1629
, "Mercedes-Benz": 1393
, "Audi": 1262
, "Škoda": 1252
, "Toyota": 980
, "Renault": 811
, "Hyundai": 747
, "Ford": 649
, "Suzuki": 608
, "Volvo": 594
, "Dacia": 527
, "Peugeot": 515
, "Kia": 479
, "Fiat": 432
, "Opel": 379
, "Mazda": 361
, "Mini": 278
, "Nissan": 268
, "Subaru": 255
, "Citroën": 246
, "Jeep": 243
, "Mitsubishi": 224
, "Porsche": 220
, "Honda": 204
, "Land Rover": 134
, "Alfa Romeo": 91
, "Jaguar": 71
, "Polestar": 48
, "Lexus": 42
, "Smart": 41
, "DS Automobiles": 36
, "Maserati": 29
, "Genesis": 8
, "Cadillac": 8
, "Chevrolet": 6
, "Aiways": 5
, "SsangYong": 4
, "Dodge": 1
, "other": 827
});

db.insert(db.countries.CH, "2021-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/9",
{ "Tesla|Model 3": 1062
, "Tesla|Model Y": 567
, "Škoda|Enyaq": 299
, "Volkswagen|ID.3": 283
, "Fiat|500e": 163
, "Hyundai|Ioniq 5": 158
, "Audi|Q4 e-tron": 126
, "Volkswagen|ID.4": 118
, "Renault|Zoe": 114
, "Audi|e-tron": 83
, "Hyundai|Kona Electric": 69
, "Mercedes-Benz|EQA": 68
, "BMW|i3 BEV": 57
, "Volkswagen|e-up!": 56
, "Peugeot|e-208": 52
, "Polestar|2": 47
, "Peugeot|e-2008": 47
, "Porsche|Taycan": 46
, "Volvo|XC40 Recharge pure electric": 43
, "Mercedes-Benz|EQC": 39
, "BMW|iX3": 38
, "Ford|Mustang Mach-E": 37
, "Kia|Niro EV": 35
, "Opel|Corsa-e": 34
, "Audi|e-tron GT": 33
, "Renault|Twingo Z.E.": 32
, "Mini|Cooper SE Electric": 32
, "Smart|Fortwo ED": 31
, "Nissan|Leaf": 28
, "Jaguar|I-Pace": 26
, "Opel|Mokka-e": 24
, "Kia|Soul EV": 21
, "Renault|Kangoo Z.E.": 20
, "Peugeot|e-Expert": 17
, "Honda|e": 15
, "Citroën|ë-Jumpy": 15
, "Citroën|ë-C4": 15
, "Seat|Mii Electric": 14
, "Mercedes-Benz|EQV": 10
, "Mazda|MX-30": 10
, "Nissan|e-NV200": 9
, "Škoda|Citigo-e": 7
, "Smart|Forfour ED": 7
, "Toyota|Proace Electric": 6
, "Opel|Vivaro-e": 6
, "DS Automobiles|DS 3 Crossback E-Tense": 6
, "Aiways|U5": 5
, "Volkswagen|e-Crafter": 4
, "Peugeot|e-Traveller": 4
, "Opel|Zafira-e": 4
, "other": 40
});

db.insert(db.countries.CH, "2021-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/11/ModellePW2021.xlsx",
{ "Mercedes-Benz": 1472
, "BMW": 1422
, "Volkswagen": 1410
, "Škoda": 1205
, "Audi": 832
, "Hyundai": 759
, "Toyota": 748
, "Renault": 577
, "Ford": 522
, "Volvo": 477
, "Suzuki": 447
, "Fiat": 388
, "Kia": 377
, "Opel": 360
, "Mini": 355
, "Dacia": 353
, "Porsche": 338
, "Peugeot": 326
, "Mazda": 265
, "Nissan": 224
, "Citroën": 210
, "Honda": 186
, "Mitsubishi": 185
, "Land Rover": 185
, "Subaru": 161
, "Jeep": 153
, "Alfa Romeo": 106
, "Polestar": 71
, "Tesla": 58
, "Jaguar": 58
, "DS Automobiles": 57
, "Smart": 52
, "Lexus": 44
, "Maserati": 27
, "SsangYong": 6
, "Genesis": 5
, "Chevrolet": 4
, "Dodge": 3
, "Cadillac": 1
, "Aiways": 1
, "other": 630
});

db.insert(db.countries.CH, "2021-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/10",
{ "Škoda|Enyaq": 302
, "Hyundai|Ioniq 5": 170
, "Fiat|500e": 114
, "Renault|Zoe": 107
, "Mercedes-Benz|EQA": 102
, "Volkswagen|ID.4": 101
, "Volkswagen|ID.3": 99
, "Audi|Q4 e-tron": 93
, "Volvo|XC40 Recharge pure electric": 91
, "Mini|Cooper SE Electric": 76
, "Hyundai|Kona Electric": 75
, "Polestar|2": 71
, "BMW|i3 BEV": 58
, "Porsche|Taycan": 51
, "Smart|Fortwo ED": 48
, "Tesla|Model 3": 47
, "Volkswagen|e-up!": 44
, "Audi|e-tron": 38
, "Dacia|Spring": 37
, "Peugeot|e-208": 36
, "Nissan|Leaf": 34
, "Audi|e-tron GT": 34
, "Mercedes-Benz|EQC": 30
, "BMW|iX3": 27
, "Opel|Corsa-e": 26
, "Kia|Niro EV": 26
, "Renault|Twingo Z.E.": 25
, "Seat|Mii Electric": 18
, "Renault|Kangoo Z.E.": 18
, "Citroën|ë-C4": 18
, "Peugeot|e-Expert": 17
, "Mercedes-Benz|EQS": 17
, "Opel|Mokka-e": 16
, "Ford|Mustang Mach-E": 15
, "Jaguar|I-Pace": 14
, "Honda|e": 14
, "Citroën|ë-Jumpy": 14
, "Peugeot|e-2008": 13
, "Tesla|Model Y": 10
, "DS Automobiles|DS 3 Crossback E-Tense": 10
, "Škoda|Citigo-e": 9
, "Mercedes-Benz|EQV": 8
, "Kia|EV6": 8
, "Toyota|Proace Electric": 6
, "Opel|Vivaro-e": 6
, "Nissan|e-NV200": 6
, "Kia|Soul EV": 6
, "Volkswagen|e-Transporter": 5
, "Peugeot|e-Traveller": 5
, "other": 69
});

db.insert(db.countries.CH, "2021-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/12/ModellePW2021.xlsx",
{ "BMW": 1837
, "Volkswagen": 1737
, "Mercedes-Benz": 1619
, "Škoda": 1525
, "Audi": 1257
, "Tesla": 823
, "Renault": 789
, "Hyundai": 775
, "Toyota": 770
, "Dacia": 738
, "Volvo": 648
, "Ford": 582
, "Citroën": 495
, "Fiat": 472
, "Peugeot": 426
, "Opel": 383
, "Mini": 365
, "Suzuki": 358
, "Kia": 343
, "Porsche": 294
, "Jeep": 269
, "Mazda": 240
, "Honda": 198
, "Mitsubishi": 163
, "Subaru": 162
, "Nissan": 161
, "Land Rover": 158
, "Alfa Romeo": 119
, "Polestar": 88
, "Jaguar": 72
, "Lexus": 43
, "DS Automobiles": 43
, "Smart": 36
, "Genesis": 26
, "Maserati": 23
, "Chevrolet": 19
, "Dodge": 7
, "Cadillac": 4
, "SsangYong": 2
, "Aiways": 2
, "other": 754
});

db.insert(db.countries.CH, "2021-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/11",
{ "Tesla|Model 3": 463
, "Tesla|Model Y": 360
, "Škoda|Enyaq": 353
, "Hyundai|Ioniq 5": 137
, "Volkswagen|ID.4": 134
, "Renault|Zoe": 134
, "Fiat|500e": 131
, "Audi|Q4 e-tron": 129
, "Mercedes-Benz|EQA": 122
, "Volvo|XC40 Recharge pure electric": 114
, "BMW|iX": 107
, "Mini|Cooper SE Electric": 101
, "Volkswagen|ID.3": 91
, "Polestar|2": 87
, "Audi|e-tron": 84
, "Porsche|Taycan": 73
, "Hyundai|Kona Electric": 65
, "Audi|e-tron GT": 61
, "BMW|i3 BEV": 59
, "Dacia|Spring": 54
, "Volkswagen|e-up!": 50
, "Renault|Twingo Z.E.": 49
, "Peugeot|e-208": 48
, "Citroën|Berlingo Electric": 48
, "Ford|Mustang Mach-E": 46
, "Nissan|Leaf": 43
, "Kia|EV6": 36
, "Mercedes-Benz|EQC": 34
, "Smart|Fortwo ED": 30
, "Mercedes-Benz|EQS": 30
, "Citroën|ë-C4": 28
, "Renault|Kangoo Z.E.": 27
, "BMW|iX3": 24
, "Seat|Mii Electric": 22
, "Kia|Niro EV": 21
, "Peugeot|e-Expert": 17
, "Peugeot|e-2008": 17
, "Citroën|ë-Jumpy": 16
, "Honda|e": 15
, "Toyota|Proace Electric": 14
, "Opel|Mokka-e": 13
, "Opel|Corsa-e": 13
, "Opel|Combo-e": 13
, "Jaguar|I-Pace": 13
, "Mercedes-Benz|EQV": 11
, "Opel|Vivaro-e": 10
, "Škoda|Citigo-e": 8
, "Peugeot|e-Traveller": 8
, "Mercedes-Benz|eVito": 7
, "other": 154
});
