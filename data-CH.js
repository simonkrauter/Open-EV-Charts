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
{ "Renault|ZOE": 45
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
{ "Renault|ZOE": 63
, "Tesla|Model X": 9
, "Tesla|Model S": 28
, "Peugeot|iOn": 4
, "Nissan|Leaf": 0
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
{ "Renault|ZOE": 84
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
{ "Renault|ZOE": 81
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
{ "Renault|ZOE": 52
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
{ "Renault|ZOE": 71
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
{ "Renault|ZOE": 46
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
{ "Renault|ZOE": 82
, "Jaguar|I-Pace": 3
, "Tesla|Model X": 39
, "Tesla|Model S": 32
, "Peugeot|iOn": 1
, "Nissan|Leaf": 58
, "Citroën|C-Zero": 0
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
{ "Renault|ZOE": 37
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
{ "Renault|ZOE": 86
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
{ "Renault|ZOE": 127
, "Jaguar|I-Pace": 21
, "Tesla|Model X": 22
, "Tesla|Model S": 46
, "Peugeot|iOn": 0
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
{ "Renault|ZOE": 134
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

db.insert(db.countries.CH, "2019-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|ZOE": 122
, "BMW|i3 BEV": 64
, "Nissan|Leaf": 58
, "Tesla|Model S": 23
, "Tesla|Model X": 15
, "Jaguar|I-Pace": 14
, "Peugeot|iOn": 8
, "Mitsubishi|i-MiEV": 3
, "Citroën|C-Zero": 2
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

db.insert(db.countries.CH, "2019-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 277
, "Renault|ZOE": 91
, "BMW|i3 BEV": 80
, "Nissan|Leaf": 59
, "Jaguar|I-Pace": 39
, "Tesla|Model S": 26
, "Tesla|Model X": 13
, "Mitsubishi|i-MiEV": 6
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsxx",
{ "Volkswagen": 2829
, "Škoda": 2420
, "Mercedes-Benz": 2285
, "Audi": 2173
, "BMW": 1880
, "Seat": 1387
, "Ford": 1299
, "Tesla": 1243
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
, "other": 194
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 1094
, "Renault|ZOE": 151
, "Audi|e-tron": 93
, "Tesla|Model S": 80
, "BMW|i3 BEV": 79
, "Jaguar|I-Pace": 70
, "Tesla|Model X": 69
, "Nissan|Leaf": 46
, "Mitsubishi|i-MiEV": 5
, "Citroën|C-Zero": 2
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
, "Tesla": 538
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
, "other": 179
});

db.insert(db.countries.CH, "2019-04", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 495
, "Renault|ZOE": 164
, "BMW|i3 BEV": 79
, "Jaguar|I-Pace": 69
, "Nissan|Leaf": 39
, "Audi|e-tron": 33
, "Tesla|Model S": 27
, "Tesla|Model X": 16
, "Mitsubishi|i-MiEV": 12
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
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

db.insert(db.countries.CH, "2019-05", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 125
, "Renault|ZOE": 118
, "BMW|i3 BEV": 92
, "Jaguar|I-Pace": 55
, "Audi|e-tron": 48
, "Tesla|Model X": 37
, "Tesla|Model S": 33
, "Nissan|Leaf": 17
, "Mitsubishi|i-MiEV": 5
, "Citroën|C-Zero": 5
, "Peugeot|iOn": 2
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

db.insert(db.countries.CH, "2019-06", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 586
, "Renault|ZOE": 130
, "BMW|i3 BEV": 62
, "Audi|e-tron": 58
, "Jaguar|I-Pace": 41
, "Tesla|Model S": 37
, "Tesla|Model X": 36
, "Nissan|Leaf": 23
, "Mitsubishi|i-MiEV": 10
, "Citroën|C-Zero": 3
, "Peugeot|iOn": 1
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

db.insert(db.countries.CH, "2019-07", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 186
, "Renault|ZOE": 93
, "BMW|i3 BEV": 85
, "Audi|e-tron": 77
, "Nissan|Leaf": 36
, "Mercedes-Benz|EQC": 32
, "Jaguar|I-Pace": 31
, "Tesla|Model X": 24
, "Tesla|Model S": 24
, "Mitsubishi|i-MiEV": 6
, "Peugeot|iOn": 2
, "Citroën|C-Zero": 1
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

db.insert(db.countries.CH, "2019-08", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 108
, "Renault|ZOE": 82
, "BMW|i3 BEV": 80
, "Tesla|Model X": 47
, "Nissan|Leaf": 45
, "Tesla|Model S": 37
, "Audi|e-tron": 37
, "Jaguar|I-Pace": 26
, "Mercedes-Benz|EQC": 19
, "Citroën|C-Zero": 3
, "Mitsubishi|i-MiEV": 1
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
, "Tesla": 834
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
, "other": 1358
});

db.insert(db.countries.CH, "2019-09", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 628
, "Renault|ZOE": 181
, "BMW|i3 BEV": 156
, "Tesla|Model X": 105
, "Tesla|Model S": 101
, "Nissan|Leaf": 56
, "Audi|e-tron": 30
, "Jaguar|I-Pace": 20
, "Mercedes-Benz|EQC": 16
, "Mitsubishi|i-MiEV": 9
, "Peugeot|iOn": 1
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
, "Tesla": 189
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
});

db.insert(db.countries.CH, "2019-10", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|ZOE": 152
, "Tesla|Model 3": 109
, "BMW|i3 BEV": 103
, "Tesla|Model X": 46
, "Nissan|Leaf": 41
, "Tesla|Model S": 34
, "Audi|e-tron": 26
, "Mercedes-Benz|EQC": 18
, "Jaguar|I-Pace": 17
, "Mitsubishi|i-MiEV": 12
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
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

db.insert(db.countries.CH, "2019-11", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 231
, "Renault|ZOE": 132
, "BMW|i3 BEV": 87
, "Nissan|Leaf": 57
, "Tesla|Model X": 37
, "Audi|e-tron": 35
, "Tesla|Model S": 33
, "Mercedes-Benz|EQC": 14
, "Jaguar|I-Pace": 12
, "Mitsubishi|i-MiEV": 3
, "Peugeot|iOn": 1
, "Citroën|C-Zero": 1
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
, "Tesla": 1322
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
, "other": 81
});

db.insert(db.countries.CH, "2019-12", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 1189
, "Renault|ZOE": 388
, "Audi|e-tron": 246
, "BMW|i3 BEV": 115
, "Tesla|Model X": 83
, "Nissan|Leaf": 59
, "Mercedes-Benz|EQC": 53
, "Tesla|Model S": 50
, "Jaguar|I-Pace": 50
, "Mitsubishi|i-MiEV": 14
, "Peugeot|iOn": 1
, "Citroën|C-Zero": 1
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

db.insert(db.countries.CH, "2020-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|ZOE": 210
, "Tesla|Model 3": 146
, "BMW|i3 BEV": 89
, "Nissan|Leaf": 50
, "Tesla|Model X": 37
, "Mercedes-Benz|EQC": 35
, "Tesla|Model S": 20
, "Audi|e-tron": 13
, "Jaguar|I-Pace": 12
, "Porsche|Taycan": 1
, "Peugeot|iOn": 1
, "Mitsubishi|i-MiEV": 1
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

db.insert(db.countries.CH, "2020-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|ZOE": 267
, "Tesla|Model 3": 80
, "BMW|i3 BEV": 56
, "Nissan|Leaf": 44
, "Mercedes-Benz|EQC": 43
, "Jaguar|I-Pace": 27
, "Audi|e-tron": 27
, "Porsche|Taycan": 21
, "Tesla|Model X": 16
, "Tesla|Model S": 11
, "Citroën|C-Zero": 5
, "Mitsubishi|i-MiEV": 1
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

db.insert(db.countries.CH, "2020-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 736
, "Renault|ZOE": 197
, "Mercedes-Benz|EQC": 74
, "BMW|i3 BEV": 58
, "Porsche|Taycan": 55
, "Tesla|Model X": 45
, "Tesla|Model S": 40
, "Nissan|Leaf": 40
, "Audi|e-tron": 35
, "Jaguar|I-Pace": 10
, "Mitsubishi|i-MiEV": 4
, "Honda|e": 2
, "Citroën|C-Zero": 1
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

db.insert(db.countries.CH, "2020-04", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 127
, "Renault|ZOE": 87
, "Mercedes-Benz|EQC": 31
, "Nissan|Leaf": 29
, "BMW|i3 BEV": 26
, "Porsche|Taycan": 12
, "Tesla|Model S": 8
, "Audi|e-tron": 8
, "Tesla|Model X": 7
, "Peugeot|iOn": 2
, "Jaguar|I-Pace": 1
, "Citroën|E-Mehari": 1
, "Citroën|C-Zero": 1
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

db.insert(db.countries.CH, "2020-05", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 146
, "Renault|ZOE": 114
, "Mercedes-Benz|EQC": 41
, "Porsche|Taycan": 32
, "BMW|i3 BEV": 24
, "Tesla|Model X": 21
, "Audi|e-tron": 19
, "Nissan|Leaf": 16
, "Tesla|Model S": 9
, "Jaguar|I-Pace": 6
, "Mitsubishi|i-MiEV": 4
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
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

db.insert(db.countries.CH, "2020-06", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2020.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 383
, "Renault|ZOE": 279
, "BMW|i3 BEV": 75
, "Tesla|Model X": 71
, "Porsche|Taycan": 55
, "Audi|e-tron": 47
, "Nissan|Leaf": 37
, "Mercedes-Benz|EQC": 36
, "Tesla|Model S": 35
, "Jaguar|I-Pace": 14
, "Mitsubishi|i-MiEV": 4
, "Peugeot|iOn": 2
, "Citroën|C-Zero": 2
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

db.insert(db.countries.CH, "2020-07", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/08/ModellePW2020.xlsx (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Renault|ZOE": 240
, "Audi|e-tron": 117
, "Porsche|Taycan": 60
, "BMW|i3 BEV": 54
, "Nissan|Leaf": 43
, "Mercedes-Benz|EQC": 43
, "Tesla|Model 3": 31
, "Honda|e": 30
, "Tesla|Model S": 7
, "Mitsubishi|i-MiEV": 7
, "Jaguar|I-Pace": 7
, "Tesla|Model X": 5
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

db.insert(db.countries.CH, "2020-08", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/09/ModellePW2020.xlsx",
{ "Tesla|Model 3": 541
, "Renault|ZOE": 220
, "Audi|e-tron": 83
, "Porsche|Taycan": 38
, "Tesla|Model X": 32
, "Mercedes-Benz|EQC": 31
, "Honda|e": 31
, "BMW|i3 BEV": 31
, "Nissan|Leaf": 26
, "Jaguar|I-Pace": 19
, "Tesla|Model S": 13
, "Mazda|MX-30": 13
, "Polestar|2": 5
, "Mitsubishi|i-MiEV": 3
, "Citroën|C-Zero": 3
, "Peugeot|iOn": 1
});

db.insert(db.countries.CH, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/10/ModellePW2020.xlsx",
{ "Mercedes-Benz": 2505
, "BMW": 1735
, "Škoda": 1717
, "Volkswagen": 1546
, "Audi": 1160
, "Tesla": 1144
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
, "other": 130
});

db.insert(db.countries.CH, "2020-09", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/10/ModellePW2020.xlsx",
{ "Tesla|Model 3": 883
, "Renault|ZOE": 304
, "Volkswagen|ID.3": 302
, "Tesla|Model X": 147
, "Tesla|Model S": 113
, "BMW|i3 BEV": 90
, "Audi|e-tron": 78
, "Jaguar|I-Pace": 72
, "Mazda|MX-30": 70
, "Porsche|Taycan": 68
, "Mercedes-Benz|EQC": 52
, "Nissan|Leaf": 38
, "Honda|e": 30
, "Mitsubishi|i-MiEV": 5
, "Citroën|C-Zero": 2
, "Tesla|Roadster": 1
, "Polestar|2": 1
, "Peugeot|iOn": 1
, "Mercedes-Benz|EQV": 1
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

db.insert(db.countries.CH, "2020-10", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/11/ModellePW2020.xlsx",
{ "Renault|ZOE": 214
, "Volkswagen|ID.3": 189
, "Audi|e-tron": 88
, "Mazda|MX-30": 81
, "Tesla|Model 3": 61
, "Nissan|Leaf": 60
, "Porsche|Taycan": 52
, "Mercedes-Benz|EQC": 45
, "BMW|i3 BEV": 41
, "Honda|e": 37
, "Mercedes-Benz|EQV": 27
, "Tesla|Model X": 22
, "Tesla|Model S": 20
, "Jaguar|I-Pace": 12
, "Polestar|2": 10
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
, "Mitsubishi|i-MiEV": 1
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

db.insert(db.countries.CH, "2020-11", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2020/12/ModellePW2020.xlsx",
{ "Tesla|Model 3": 356
, "Renault|ZOE": 280
, "Volkswagen|ID.3": 168
, "Audi|e-tron": 165
, "Jaguar|I-Pace": 76
, "BMW|i3 BEV": 66
, "Porsche|Taycan": 57
, "Mercedes-Benz|EQV": 48
, "Mazda|MX-30": 43
, "Tesla|Model X": 40
, "Mercedes-Benz|EQC": 36
, "Tesla|Model S": 25
, "Nissan|Leaf": 25
, "Honda|e": 22
, "Polestar|2": 3
, "Citroën|C-Zero": 3
, "Mitsubishi|i-MiEV": 1
});

db.insert(db.countries.CH, "2020-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
{ "Volkswagen": 4396
, "BMW": 3058
, "Mercedes-Benz": 2382
, "Škoda": 2069
, "Tesla": 1810
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
, "other": 250
});

db.insert(db.countries.CH, "2020-12", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
{ "Tesla|Model 3": 1561
, "Renault|ZOE": 478
, "Volkswagen|ID.3": 347
, "Audi|e-tron": 224
, "BMW|i3 BEV": 196
, "Tesla|Model X": 159
, "Nissan|Leaf": 134
, "Mazda|MX-30": 126
, "Jaguar|I-Pace": 102
, "Tesla|Model S": 90
, "Porsche|Taycan": 72
, "Mercedes-Benz|EQC": 30
, "Honda|e": 18
, "Mercedes-Benz|EQV": 14
, "Polestar|2": 13
, "Citroën|C-Zero": 4
, "Maxus|EV80": 1
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
, "Tesla": 63
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
, "other": 1078
});

db.insert(db.countries.CH, "2021-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2021/02/ModellePW2021.xlsx",
{ "Renault|ZOE": 144
, "Volkswagen|ID.3": 109
, "Audi|e-tron": 75
, "Tesla|Model 3": 54
, "Porsche|Taycan": 44
, "Polestar|2": 43
, "BMW|i3 BEV": 29
, "Mercedes-Benz|EQC": 22
, "Jaguar|I-Pace": 12
, "Honda|e": 11
, "Tesla|Model X": 8
, "Nissan|Leaf": 6
, "Mazda|MX-30": 5
, "Tesla|Model S": 1
, "Mitsubishi|i-MiEV": 1
, "Mercedes-Benz|EQV": 1
, "Citroën|C-Zero": 1
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

db.insert(db.countries.CH, "2021-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2021/03/ModellePW2021.xlsx",
{ "Volkswagen|ID.3": 181
, "Renault|ZOE": 166
, "Tesla|Model 3": 160
, "Polestar|2": 98
, "Audi|e-tron": 62
, "BMW|i3 BEV": 45
, "Mercedes-Benz|EQC": 29
, "Porsche|Taycan": 24
, "Nissan|Leaf": 15
, "Jaguar|I-Pace": 15
, "Tesla|Model X": 10
, "Honda|e": 8
, "Mazda|MX-30": 6
, "Mercedes-Benz|EQV": 4
, "Citroën|C-Zero": 3
, "Aiways|U5": 3
, "Tesla|Model S": 1
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

db.insert(db.countries.CH, "2021-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/wp-content/uploads/2021/04/ModellePW2021.xlsx",
{ "Tesla|Model 3": 526
, "Volkswagen|ID.3": 227
, "Renault|ZOE": 161
, "Volkswagen|ID.4": 140
, "Audi|e-tron": 117
, "Polestar|2": 81
, "BMW|i3 BEV": 70
, "Mercedes-Benz|EQC": 68
, "Nissan|Leaf": 59
, "Porsche|Taycan": 55
, "Honda|e": 24
, "Jaguar|I-Pace": 20
, "Mercedes-Benz|EQA": 15
, "Aiways|U5": 9
, "Mercedes-Benz|EQV": 7
, "Mazda|MX-30": 3
, "Audi|e-tron GT": 3
, "Tesla|Model X": 2
, "Mitsubishi|i-MiEV": 1
});
