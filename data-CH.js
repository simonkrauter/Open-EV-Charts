// Data sets for car sales in Switzerland

"use strict";

db.addCountry("CH", "Switzerland");

// https://www.auto.swiss/statistiken/pw-zulassungen-nach-marken
// https://www.auto.swiss/statistiken/pw-zulassungen-nach-modellen

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

db.insert(db.countries.CH, "2018-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-04", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-05", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-06", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-07", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-08", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-09", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-10", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-11", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.CH, "2018-12", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 134
, "Jaguar|I-Pace": 2
, "Tesla|Model X": 112
, "Tesla|Model S": 83
, "Peugeot|iOn": 47
, "Nissan|Leaf": 56
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_3.xlsx",
{ "Alfa Romeo": 269
, "Audi": 1183
, "BMW": 1583
, "Citroën": 424
, "Dacia": 674
, "DS Automobiles": 58
, "Fiat": 590
, "Ford": 974
, "Honda": 218
, "Hyundai": 577
, "Infiniti": 11
, "Jaguar": 194
, "Jeep": 359
, "Kia": 281
, "Land Rover": 313
, "Lexus": 54
, "Maserati": 26
, "Mazda": 411
, "Mercedes-Benz": 1779
, "Mini": 355
, "Mitsubishi": 314
, "Nissan": 345
, "Opel": 471
, "Peugeot": 802
, "Porsche": 122
, "Renault": 642
, "Seat": 664
, "Škoda": 1745
, "Smart": 140
, "SsangYong": 46
, "Subaru": 366
, "Suzuki": 480
, "Tesla": 38
, "Toyota": 724
, "Volkswagen": 2670
, "Volvo": 882
, "other": 147
});

db.insert(db.countries.CH, "2019-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Renault|ZOE": 122
, "BMW|i3 BEV": 64
, "Nissan|Leaf": 58
, "Tesla|Model S": 23
, "Tesla|Model X": 15
, "Jaguar|I-Pace": 14
, "Peugeot|iOn": 8
, "Citroën|C-Zero": 2
});

db.insert(db.countries.CH, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_3.xlsx",
{ "Alfa Romeo": 247
, "Audi": 777
, "BMW": 1945
, "Citroën": 430
, "Dacia": 556
, "DS Automobiles": 28
, "Fiat": 635
, "Ford": 1104
, "Honda": 348
, "Hyundai": 573
, "Infiniti": 10
, "Jaguar": 172
, "Jeep": 428
, "Kia": 310
, "Land Rover": 342
, "Lexus": 29
, "Maserati": 24
, "Mazda": 375
, "Mercedes-Benz": 2084
, "Mini": 310
, "Mitsubishi": 262
, "Nissan": 369
, "Opel": 723
, "Peugeot": 648
, "Porsche": 67
, "Renault": 741
, "Seat": 1298
, "Škoda": 1963
, "Smart": 187
, "SsangYong": 41
, "Subaru": 284
, "Suzuki": 510
, "Tesla": 316
, "Toyota": 881
, "Volkswagen": 2445
, "Volvo": 572
, "other": 142
});

db.insert(db.countries.CH, "2019-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 277
, "Renault|ZOE": 91
, "BMW|i3 BEV": 80
, "Nissan|Leaf": 59
, "Jaguar|I-Pace": 39
, "Tesla|Model S": 26
, "Tesla|Model X": 13
, "Citroën|C-Zero": 4
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_3.xlsx",
{ "Alfa Romeo": 259
, "Audi": 2173
, "BMW": 1881
, "Citroën": 523
, "Dacia": 691
, "DS Automobiles": 47
, "Fiat": 811
, "Ford": 1301
, "Honda": 376
, "Hyundai": 672
, "Infiniti": 15
, "Jaguar": 257
, "Jeep": 442
, "Kia": 437
, "Land Rover": 426
, "Lexus": 64
, "Maserati": 43
, "Mazda": 556
, "Mercedes-Benz": 2286
, "Mini": 453
, "Mitsubishi": 358
, "Nissan": 622
, "Opel": 826
, "Peugeot": 827
, "Porsche": 241
, "Renault": 1084
, "Seat": 1387
, "Škoda": 2420
, "Smart": 242
, "SsangYong": 43
, "Subaru": 389
, "Suzuki": 821
, "Tesla": 1243
, "Toyota": 919
, "Volkswagen": 2829
, "Volvo": 755
, "other": 239
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 1094
, "Renault|ZOE": 151
, "BMW|i3 BEV": 79
, "Nissan|Leaf": 46
, "Tesla|Model S": 80
, "Jaguar|I-Pace": 70
, "Tesla|Model X": 69
, "Audi|e-tron": 93
, "Citroën|C-Zero": 2
});

db.insert(db.countries.CH, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_4.xlsx",
{ "Alfa Romeo": 274
, "Audi": 1399
, "BMW": 2198
, "Citroën": 499
, "Dacia": 686
, "DS Automobiles": 60
, "Fiat": 744
, "Ford": 1124
, "Honda": 267
, "Hyundai": 921
, "Infiniti": 14
, "Jaguar": 278
, "Jeep": 526
, "Kia": 430
, "Land Rover": 360
, "Lexus": 66
, "Maserati": 50
, "Mazda": 538
, "Mercedes-Benz": 2108
, "Mini": 538
, "Mitsubishi": 348
, "Nissan": 553
, "Opel": 1129
, "Peugeot": 814
, "Porsche": 441
, "Renault": 1069
, "Seat": 1279
, "Škoda": 2192
, "Smart": 217
, "SsangYong": 61
, "Subaru": 695
, "Suzuki": 708
, "Tesla": 538
, "Toyota": 966
, "Volkswagen": 3331
, "Volvo": 883
, "other": 316
});

db.insert(db.countries.CH, "2019-04", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 495
, "Renault|ZOE": 164
, "BMW|i3 BEV": 79
, "Nissan|Leaf": 39
, "Jaguar|I-Pace": 69
, "Tesla|Model S": 27
, "Audi|e-tron": 33
, "Tesla|Model X": 16
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
});

db.insert(db.countries.CH, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_5.xlsx",
{ "Alfa Romeo": 296
, "Audi": 1942
, "BMW": 2291
, "Citroën": 524
, "Dacia": 700
, "DS Automobiles": 58
, "Fiat": 756
, "Ford": 1316
, "Honda": 328
, "Hyundai": 747
, "Infiniti": 12
, "Jaguar": 176
, "Jeep": 448
, "Kia": 377
, "Land Rover": 284
, "Lexus": 79
, "Maserati": 39
, "Mazda": 578
, "Mercedes-Benz": 2222
, "Mini": 293
, "Mitsubishi": 435
, "Nissan": 402
, "Opel": 1194
, "Peugeot": 882
, "Porsche": 302
, "Renault": 996
, "Seat": 1470
, "Škoda": 2110
, "Smart": 202
, "SsangYong": 34
, "Subaru": 133
, "Suzuki": 901
, "Tesla": 195
, "Toyota": 996
, "Volkswagen": 3431
, "Volvo": 671
, "other": 240
});

db.insert(db.countries.CH, "2019-05", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 125
, "Renault|ZOE": 118
, "BMW|i3 BEV": 92
, "Jaguar|I-Pace": 55
, "Nissan|Leaf": 17
, "Tesla|Model S": 33
, "Audi|e-tron": 48
, "Tesla|Model X": 37
, "Citroën|C-Zero": 5
, "Peugeot|iOn": 2
});

db.insert(db.countries.CH, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_6.xlsx",
{ "Alfa Romeo": 236
, "Audi": 1500
, "BMW": 2152
, "Citroën": 687
, "Dacia": 773
, "DS Automobiles": 55
, "Fiat": 867
, "Ford": 1147
, "Honda": 263
, "Hyundai": 723
, "Infiniti": 9
, "Jaguar": 237
, "Jeep": 472
, "Kia": 384
, "Land Rover": 358
, "Lexus": 97
, "Maserati": 19
, "Mazda": 532
, "Mercedes-Benz": 2261
, "Mini": 438
, "Mitsubishi": 509
, "Nissan": 427
, "Opel": 1308
, "Peugeot": 914
, "Porsche": 376
, "Renault": 1351
, "Seat": 1182
, "Škoda": 2039
, "Smart": 133
, "SsangYong": 34
, "Subaru": 292
, "Suzuki": 796
, "Tesla": 659
, "Toyota": 985
, "Volkswagen": 3098
, "Volvo": 831
, "other": 247
});

db.insert(db.countries.CH, "2019-06", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 586
, "Renault|ZOE": 130
, "BMW|i3 BEV": 62
, "Jaguar|I-Pace": 41
, "Nissan|Leaf": 23
, "Audi|e-tron": 58
, "Tesla|Model S": 37
, "Tesla|Model X": 36
, "Citroën|C-Zero": 3
, "Peugeot|iOn": 1
});

db.insert(db.countries.CH, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_7.xlsx",
{ "Alfa Romeo": 262
, "Audi": 1895
, "BMW": 2159
, "Citroën": 716
, "Dacia": 783
, "DS Automobiles": 88
, "Fiat": 730
, "Ford": 1294
, "Honda": 258
, "Hyundai": 671
, "Infiniti": 7
, "Jaguar": 180
, "Jeep": 463
, "Kia": 302
, "Land Rover": 311
, "Lexus": 81
, "Maserati": 40
, "Mazda": 609
, "Mercedes-Benz": 2119
, "Mini": 498
, "Mitsubishi": 330
, "Nissan": 300
, "Opel": 774
, "Peugeot": 752
, "Porsche": 298
, "Renault": 799
, "Seat": 1230
, "Škoda": 1607
, "Smart": 134
, "SsangYong": 48
, "Subaru": 162
, "Suzuki": 437
, "Tesla": 234
, "Toyota": 923
, "Volkswagen": 3021
, "Volvo": 749
, "other": 254
});

db.insert(db.countries.CH, "2019-07", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 186
, "Renault|ZOE": 93
, "BMW|i3 BEV": 85
, "Jaguar|I-Pace": 31
, "Audi|e-tron": 77
, "Nissan|Leaf": 36
, "Tesla|Model S": 24
, "Tesla|Model X": 24
, "Mercedes-Benz|EQC": 32
, "Citroën|C-Zero": 1
, "Peugeot|iOn": 2
});

db.insert(db.countries.CH, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/auto-schweiz_PW_2019_8.xlsx",
{ "Alfa Romeo": 168
, "Audi": 1024
, "BMW": 1519
, "Citroën": 400
, "Dacia": 492
, "DS Automobiles": 45
, "Fiat": 587
, "Ford": 1043
, "Honda": 245
, "Hyundai": 568
, "Infiniti": 8
, "Jaguar": 132
, "Jeep": 352
, "Kia": 293
, "Land Rover": 223
, "Lexus": 68
, "Maserati": 26
, "Mazda": 410
, "Mercedes-Benz": 1935
, "Mini": 307
, "Mitsubishi": 217
, "Nissan": 271
, "Opel": 690
, "Peugeot": 523
, "Porsche": 273
, "Renault": 794
, "Seat": 1039
, "Škoda": 1394
, "Smart": 122
, "SsangYong": 14
, "Subaru": 110
, "Suzuki": 405
, "Tesla": 192
, "Toyota": 1001
, "Volkswagen": 1930
, "Volvo": 424
, "other": 193
});

db.insert(db.countries.CH, "2019-08", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 108
, "Renault|ZOE": 82
, "BMW|i3 BEV": 80
, "Audi|e-tron": 37
, "Jaguar|I-Pace": 26
, "Nissan|Leaf": 45
, "Tesla|Model S": 37
, "Tesla|Model X": 47
, "Mercedes-Benz|EQC": 19
, "Citroën|C-Zero": 3
});

db.insert(db.countries.CH, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/2019/auto-schweiz_PW_2019_9.xlsx",
{ "Alfa Romeo": 132
, "Audi": 1125
, "BMW": 1796
, "Citroën": 710
, "Dacia": 524
, "DS Automobiles": 50
, "Fiat": 661
, "Ford": 1150
, "Honda": 358
, "Hyundai": 744
, "Infiniti": 12
, "Jaguar": 176
, "Jeep": 324
, "Kia": 571
, "Land Rover": 334
, "Lexus": 71
, "Maserati": 20
, "Mazda": 486
, "Mercedes-Benz": 2194
, "Mini": 457
, "Mitsubishi": 357
, "Nissan": 304
, "Opel": 1154
, "Peugeot": 780
, "Porsche": 376
, "Renault": 900
, "Seat": 986
, "Škoda": 1907
, "Smart": 119
, "SsangYong": 46
, "Subaru": 190
, "Suzuki": 631
, "Tesla": 834
, "Toyota": 792
, "Volkswagen": 2151
, "other": 192
});

db.insert(db.countries.CH, "2019-09", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 628
, "Renault|ZOE": 181
, "BMW|i3 BEV": 156
, "Tesla|Model S": 101
, "Nissan|Leaf": 56
, "Audi|e-tron": 30
, "Jaguar|I-Pace": 20
, "Tesla|Model X": 105
, "Mercedes-Benz|EQC": 16
, "Peugeot|iOn": 1
});

db.insert(db.countries.CH, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/2019/auto-schweiz_PW_2019_10.xlsx",
{ "Alfa Romeo": 276
, "Audi": 1773
, "BMW": 2232
, "Citroën": 734
, "Dacia": 710
, "DS Automobiles": 29
, "Fiat": 740
, "Ford": 1060
, "Honda": 265
, "Hyundai": 705
, "Infiniti": 9
, "Jaguar": 107
, "Jeep": 386
, "Kia": 352
, "Land Rover": 247
, "Lexus": 70
, "Maserati": 19
, "Mazda": 716
, "Mercedes-Benz": 2407
, "Mini": 429
, "Mitsubishi": 314
, "Nissan": 300
, "Opel": 756
, "Peugeot": 845
, "Porsche": 468
, "Renault": 827
, "Seat": 1263
, "Škoda": 1929
, "Smart": 105
, "SsangYong": 86
, "Subaru": 177
, "Suzuki": 780
, "Tesla": 189
, "Toyota": 885
, "Volkswagen": 2903
, "Volvo": 769
, "other": 242
});

db.insert(db.countries.CH, "2019-10", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 109
, "Renault|ZOE": 152
, "BMW|i3 BEV": 103
, "Tesla|Model S": 34
, "Nissan|Leaf": 41
, "Tesla|Model X": 46
, "Audi|e-tron": 26
, "Jaguar|I-Pace": 17
, "Mercedes-Benz|EQC": 18
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
});

db.insert(db.countries.CH, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/2019/auto-schweiz_PW_2019_11.xlsx",
{ "Alfa Romeo": 248
, "Audi": 1488
, "BMW": 2160
, "Citroën": 150
, "Dacia": 805
, "DS Automobiles": 12
, "Fiat": 597
, "Ford": 1081
, "Honda": 382
, "Hyundai": 689
, "Infiniti": 9
, "Jaguar": 87
, "Jeep": 458
, "Kia": 360
, "Land Rover": 295
, "Lexus": 109
, "Maserati": 23
, "Mazda": 639
, "Mercedes-Benz": 2455
, "Mini": 345
, "Mitsubishi": 346
, "Nissan": 329
, "Opel": 227
, "Peugeot": 255
, "Porsche": 478
, "Renault": 1119
, "Seat": 1080
, "Škoda": 2119
, "Smart": 65
, "SsangYong": 90
, "Subaru": 263
, "Suzuki": 669
, "Tesla": 301
, "Toyota": 783
, "Volkswagen": 2748
, "Volvo": 769
, "other": 195
});

db.insert(db.countries.CH, "2019-11", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 231
, "Renault|ZOE": 132
, "BMW|i3 BEV": 87
, "Nissan|Leaf": 57
, "Tesla|Model S": 33
, "Tesla|Model X": 37
, "Audi|e-tron": 35
, "Jaguar|I-Pace": 12
, "Mercedes-Benz|EQC": 14
, "Citroën|C-Zero": 1
, "Peugeot|iOn": 1
});

db.insert(db.countries.CH, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Marken/2019/auto-schweiz_PW_2019_12.xlsx",
{ "Alfa Romeo": 216
, "Audi": 2424
, "BMW": 2902
, "Citroën": 276
, "Dacia": 601
, "DS Automobiles": 25
, "Fiat": 669
, "Ford": 1556
, "Honda": 754
, "Hyundai": 1097
, "Infiniti": 10
, "Jaguar": 224
, "Jeep": 484
, "Kia": 415
, "Land Rover": 492
, "Lexus": 148
, "Maserati": 47
, "Mazda": 687
, "Mercedes-Benz": 2880
, "Mini": 511
, "Mitsubishi": 517
, "Nissan": 633
, "Opel": 599
, "Peugeot": 577
, "Porsche": 418
, "Renault": 1396
, "Seat": 1499
, "Škoda": 2678
, "Smart": 72
, "SsangYong": 248
, "Subaru": 962
, "Suzuki": 1288
, "Tesla": 1322
, "Toyota": 1199
, "Volkswagen": 3888
, "Volvo": 949
, "other": 162
});

db.insert(db.countries.CH, "2019-12", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2019.xlsx (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 1189
, "Renault|ZOE": 388
, "BMW|i3 BEV": 115
, "Audi|e-tron": 246
, "Nissan|Leaf": 59
, "Tesla|Model X": 83
, "Tesla|Model S": 50
, "Jaguar|I-Pace": 50
, "Mercedes-Benz|EQC": 53
, "Citroën|C-Zero": 1
, "Peugeot|iOn": 1
});
