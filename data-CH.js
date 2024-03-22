// Data sets for car sales in Switzerland

"use strict";

// https://www.auto.swiss/#statistics

db.insert(db.countries.CH, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 2358
, "BMW": 1858
, "Mercedes-Benz": 1826
, "Škoda": 1540
, "Audi": 1018
, "Seat": 961
, "Ford": 957
, "Opel": 871
, "Renault": 818
, "Volvo": 712
, "Peugeot": 698
, "Fiat": 693
, "Hyundai": 690
, "Toyota": 689
, "Dacia": 568
, "Citroën": 542
, "Mazda": 517
, "Suzuki": 504
, "Nissan": 493
, "Mini": 368
, "Jeep": 349
, "Subaru": 345
, "Land Rover": 308
, "Kia": 285
, "Honda": 272
, "Porsche": 258
, "Mitsubishi": 231
, "Smart": 176
, "Jaguar": 116
, "Tesla": 15
, "Chevrolet": 14
, "other": 621
});

db.insert(db.countries.CH, "2018-01", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 45
, "Tesla|Model S": 9
, "Tesla|Model X": 6
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 2
, "Nissan|Leaf": 1
, "other": 47
});

db.insert(db.countries.CH, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Mercedes-Benz": 1997
, "Volkswagen": 1948
, "BMW": 1841
, "Škoda": 1642
, "Audi": 1340
, "Ford": 1097
, "Opel": 1035
, "Seat": 1024
, "Renault": 970
, "Dacia": 731
, "Peugeot": 698
, "Toyota": 689
, "Fiat": 676
, "Hyundai": 620
, "Volvo": 557
, "Mazda": 524
, "Suzuki": 514
, "Citroën": 488
, "Mini": 481
, "Nissan": 438
, "Honda": 365
, "Kia": 339
, "Subaru": 335
, "Mitsubishi": 289
, "Porsche": 272
, "Land Rover": 263
, "Jeep": 261
, "Smart": 122
, "Jaguar": 110
, "Tesla": 37
, "Chevrolet": 9
, "other": 580
});

db.insert(db.countries.CH, "2018-02", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 63
, "Tesla|Model X": 9
, "Tesla|Model S": 28
, "Peugeot|iOn": 4
, "Citroën|C-Zero": 4
, "other": 77
});

db.insert(db.countries.CH, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 2601
, "Mercedes-Benz": 2411
, "BMW": 2035
, "Škoda": 1748
, "Audi": 1603
, "Ford": 1567
, "Opel": 1199
, "Renault": 1166
, "Seat": 1015
, "Peugeot": 951
, "Toyota": 902
, "Volvo": 773
, "Dacia": 759
, "Fiat": 743
, "Hyundai": 735
, "Suzuki": 711
, "Citroën": 707
, "Mazda": 595
, "Mini": 593
, "Nissan": 592
, "Honda": 543
, "Kia": 502
, "Subaru": 499
, "Mitsubishi": 472
, "Porsche": 457
, "Land Rover": 409
, "Jeep": 378
, "Tesla": 322
, "Jaguar": 182
, "Smart": 153
, "Chevrolet": 22
, "other": 781
});

db.insert(db.countries.CH, "2018-03", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 84
, "Tesla|Model X": 113
, "Tesla|Model S": 209
, "Peugeot|iOn": 3
, "Nissan|Leaf": 58
, "Citroën|C-Zero": 1
, "other": 336
});

db.insert(db.countries.CH, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 2835
, "BMW": 2128
, "Mercedes-Benz": 2089
, "Audi": 1745
, "Renault": 1468
, "Škoda": 1423
, "Ford": 1164
, "Seat": 1090
, "Toyota": 983
, "Fiat": 936
, "Opel": 917
, "Hyundai": 844
, "Peugeot": 837
, "Suzuki": 829
, "Dacia": 742
, "Volvo": 620
, "Citroën": 563
, "Mini": 558
, "Kia": 538
, "Mazda": 497
, "Jeep": 469
, "Subaru": 468
, "Porsche": 411
, "Nissan": 338
, "Mitsubishi": 327
, "Land Rover": 298
, "Honda": 266
, "Smart": 155
, "Jaguar": 142
, "Tesla": 67
, "Chevrolet": 24
, "other": 748
});

db.insert(db.countries.CH, "2018-04", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 81
, "Tesla|Model X": 18
, "Tesla|Model S": 49
, "Peugeot|iOn": 1
, "Nissan|Leaf": 25
, "Citroën|C-Zero": 4
, "other": 128
});

db.insert(db.countries.CH, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 3414
, "BMW": 2236
, "Mercedes-Benz": 2188
, "Škoda": 1887
, "Audi": 1714
, "Renault": 1404
, "Ford": 1314
, "Seat": 1153
, "Opel": 1093
, "Fiat": 873
, "Peugeot": 869
, "Toyota": 858
, "Dacia": 821
, "Suzuki": 696
, "Volvo": 649
, "Hyundai": 633
, "Citroën": 564
, "Jeep": 530
, "Mini": 520
, "Mazda": 483
, "Kia": 475
, "Subaru": 457
, "Mitsubishi": 394
, "Porsche": 383
, "Nissan": 341
, "Honda": 267
, "Land Rover": 254
, "Smart": 218
, "Jaguar": 141
, "Tesla": 64
, "Chevrolet": 27
, "other": 906
});

db.insert(db.countries.CH, "2018-05", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 52
, "Tesla|Model X": 8
, "Tesla|Model 3": 1
, "Tesla|Model S": 55
, "Peugeot|iOn": 2
, "Nissan|Leaf": 15
, "Citroën|C-Zero": 3
, "other": 98
});

db.insert(db.countries.CH, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 4034
, "Mercedes-Benz": 2381
, "BMW": 2344
, "Škoda": 1977
, "Renault": 1779
, "Ford": 1726
, "Audi": 1587
, "Opel": 1524
, "Seat": 1184
, "Dacia": 1061
, "Fiat": 957
, "Toyota": 935
, "Suzuki": 880
, "Citroën": 788
, "Peugeot": 788
, "Volvo": 737
, "Mazda": 667
, "Hyundai": 587
, "Mini": 557
, "Kia": 521
, "Mitsubishi": 451
, "Subaru": 444
, "Porsche": 433
, "Land Rover": 421
, "Nissan": 421
, "Jeep": 389
, "Honda": 340
, "Jaguar": 285
, "Tesla": 283
, "Smart": 174
, "Chevrolet": 14
, "other": 807
});

db.insert(db.countries.CH, "2018-06", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 71
, "Tesla|Model X": 147
, "Tesla|Model S": 136
, "Peugeot|iOn": 1
, "Nissan|Leaf": 25
, "Citroën|C-Zero": 2
, "other": 274
});

db.insert(db.countries.CH, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 3288
, "BMW": 2088
, "Audi": 1898
, "Mercedes-Benz": 1573
, "Škoda": 1426
, "Ford": 1314
, "Seat": 1228
, "Peugeot": 1158
, "Opel": 937
, "Renault": 900
, "Dacia": 869
, "Fiat": 866
, "Volvo": 780
, "Citroën": 726
, "Hyundai": 679
, "Toyota": 662
, "Mini": 501
, "Mazda": 478
, "Suzuki": 429
, "Mitsubishi": 416
, "Jeep": 375
, "Porsche": 375
, "Nissan": 338
, "Subaru": 325
, "Kia": 301
, "Honda": 204
, "Land Rover": 202
, "Smart": 180
, "Jaguar": 114
, "Chevrolet": 38
, "Tesla": 31
, "other": 784
});

db.insert(db.countries.CH, "2018-07", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 46
, "Jaguar|I-Pace": 21
, "Tesla|Model X": 13
, "Tesla|Model S": 18
, "Peugeot|iOn": 3
, "Nissan|Leaf": 21
, "Citroën|C-Zero": 5
, "other": 91
});

db.insert(db.countries.CH, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 2739
, "Mercedes-Benz": 1851
, "BMW": 1737
, "Audi": 1606
, "Škoda": 1213
, "Ford": 1103
, "Seat": 907
, "Fiat": 762
, "Renault": 717
, "Peugeot": 714
, "Toyota": 709
, "Opel": 696
, "Dacia": 632
, "Hyundai": 561
, "Volvo": 485
, "Suzuki": 460
, "Mazda": 454
, "Mini": 426
, "Citroën": 425
, "Jeep": 367
, "Kia": 337
, "Nissan": 334
, "Mitsubishi": 313
, "Subaru": 268
, "Porsche": 267
, "Honda": 247
, "Land Rover": 172
, "Smart": 157
, "Tesla": 71
, "Jaguar": 55
, "Chevrolet": 13
, "other": 686
});

db.insert(db.countries.CH, "2018-08", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 82
, "Jaguar|I-Pace": 3
, "Tesla|Model X": 39
, "Tesla|Model S": 32
, "Peugeot|iOn": 1
, "Nissan|Leaf": 58
, "other": 154
});

db.insert(db.countries.CH, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Mercedes-Benz": 1900
, "Volkswagen": 1891
, "BMW": 1516
, "Audi": 1326
, "Ford": 1241
, "Škoda": 1148
, "Opel": 854
, "Renault": 834
, "Toyota": 771
, "Fiat": 705
, "Hyundai": 600
, "Peugeot": 585
, "Suzuki": 581
, "Volvo": 543
, "Mazda": 526
, "Kia": 516
, "Seat": 503
, "Jeep": 426
, "Dacia": 390
, "Mini": 386
, "Citroën": 379
, "Nissan": 370
, "Subaru": 363
, "Mitsubishi": 281
, "Tesla": 275
, "Land Rover": 228
, "Porsche": 192
, "Jaguar": 188
, "Smart": 180
, "Honda": 143
, "Chevrolet": 16
, "other": 552
});

db.insert(db.countries.CH, "2018-09", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 37
, "Jaguar|I-Pace": 1
, "Tesla|Model X": 130
, "Tesla|Model S": 145
, "Peugeot|iOn": 3
, "Nissan|Leaf": 66
, "Citroën|C-Zero": 2
, "other": 275
});

db.insert(db.countries.CH, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 2200
, "Mercedes-Benz": 2175
, "BMW": 1686
, "Audi": 1595
, "Škoda": 1371
, "Ford": 1209
, "Opel": 944
, "Toyota": 830
, "Renault": 798
, "Volvo": 770
, "Fiat": 738
, "Hyundai": 702
, "Suzuki": 657
, "Peugeot": 655
, "Seat": 587
, "Dacia": 532
, "Mazda": 467
, "Jeep": 458
, "Mitsubishi": 448
, "Subaru": 445
, "Citroën": 423
, "Mini": 413
, "Honda": 373
, "Land Rover": 361
, "Kia": 342
, "Nissan": 339
, "Jaguar": 215
, "Smart": 185
, "Porsche": 167
, "Tesla": 35
, "Chevrolet": 13
, "other": 655
});

db.insert(db.countries.CH, "2018-10", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 86
, "Jaguar|I-Pace": 15
, "Tesla|Model X": 8
, "Tesla|Model S": 27
, "Peugeot|iOn": 5
, "Nissan|Leaf": 57
, "Citroën|C-Zero": 1
, "other": 143
});

db.insert(db.countries.CH, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 2484
, "Mercedes-Benz": 2319
, "BMW": 2240
, "Škoda": 1832
, "Ford": 1251
, "Audi": 1080
, "Renault": 975
, "Seat": 892
, "Peugeot": 870
, "Toyota": 835
, "Hyundai": 826
, "Suzuki": 753
, "Volvo": 691
, "Opel": 685
, "Fiat": 681
, "Dacia": 619
, "Mazda": 512
, "Jeep": 455
, "Mitsubishi": 447
, "Mini": 377
, "Nissan": 371
, "Subaru": 346
, "Citroën": 328
, "Honda": 321
, "Land Rover": 316
, "Kia": 289
, "Jaguar": 200
, "Smart": 175
, "Porsche": 141
, "Tesla": 68
, "Chevrolet": 25
, "other": 699
});

db.insert(db.countries.CH, "2018-11", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 127
, "Jaguar|I-Pace": 21
, "Tesla|Model X": 22
, "Tesla|Model S": 46
, "Nissan|Leaf": 46
, "Citroën|C-Zero": 5
, "other": 192
});

db.insert(db.countries.CH, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2018.xlsx",
{ "Volkswagen": 3152
, "Mercedes-Benz": 2946
, "BMW": 2518
, "Škoda": 1953
, "Audi": 1862
, "Ford": 1236
, "Opel": 1175
, "Seat": 924
, "Renault": 900
, "Peugeot": 886
, "Volvo": 804
, "Hyundai": 722
, "Suzuki": 659
, "Toyota": 635
, "Dacia": 577
, "Land Rover": 574
, "Fiat": 540
, "Mini": 533
, "Mazda": 506
, "Citroën": 482
, "Mitsubishi": 480
, "Kia": 434
, "Jeep": 386
, "Subaru": 386
, "Honda": 361
, "Nissan": 343
, "Jaguar": 208
, "Porsche": 208
, "Tesla": 195
, "Smart": 150
, "Chevrolet": 33
, "other": 771
});

db.insert(db.countries.CH, "2018-12", db.dsTypes.ElectricCarsByModel, "https://www.auto.swiss/fileadmin/3_Statistiken/Autoverkaeufe_nach_Modellen/ModellePW2018.xlsx (Incomplete: EV models with ICE/hybrid variant are not listed by name, but included as 'other'.)",
{ "Renault|Zoe": 134
, "Jaguar|I-Pace": 2
, "Tesla|Model X": 112
, "Tesla|Model S": 83
, "Peugeot|iOn": 47
, "Nissan|Leaf": 56
, "Citroën|C-Zero": 4
, "other": 314
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
, "Honda": 218
, "Jaguar": 194
, "Smart": 140
, "Porsche": 122
, "Tesla": 38
, "Chevrolet": 18
, "other": 594
});

db.insert(db.countries.CH, "2019-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/1 (includes commercial vehicles)",
{ "Renault|Zoe": 122
, "Nissan|Leaf": 58
, "BMW|i3 BEV": 55
, "Hyundai|Kona Electric": 54
, "Smart|Fortwo ED": 24
, "Tesla|Model S": 23
, "Volkswagen|e-Golf": 17
, "Tesla|Model X": 15
, "Jaguar|I-Pace": 14
, "Hyundai|Ioniq Electric": 9
, "Peugeot|iOn": 8
, "Opel|Ampera-e": 6
, "Kia|Soul EV": 3
, "Mitsubishi|i-MiEV": 3
, "Smart|Forfour ED": 3
, "Citroën|C-Zero": 2
, "Volkswagen|e-up!": 2
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
, "Kia": 310
, "Mini": 310
, "Subaru": 284
, "Mitsubishi": 262
, "Smart": 187
, "Jaguar": 172
, "Porsche": 67
, "Chevrolet": 16
, "other": 506
});

db.insert(db.countries.CH, "2019-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/2 (includes commercial vehicles)",
{ "Tesla|Model 3": 277
, "Renault|Zoe": 91
, "BMW|i3 BEV": 78
, "Hyundai|Kona Electric": 78
, "Nissan|Leaf": 59
, "Jaguar|I-Pace": 39
, "Volkswagen|e-Golf": 27
, "Tesla|Model S": 26
, "Smart|Fortwo ED": 13
, "Tesla|Model X": 13
, "Smart|Forfour ED": 8
, "Mitsubishi|i-MiEV": 6
, "Kia|Soul EV": 5
, "Citroën|C-Zero": 4
, "Hyundai|Ioniq Electric": 4
, "Opel|Ampera-e": 1
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
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
, "Jaguar": 257
, "Smart": 242
, "Porsche": 241
, "Chevrolet": 18
, "other": 697
});

db.insert(db.countries.CH, "2019-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/3 (includes commercial vehicles)",
{ "Tesla|Model 3": 1094
, "Renault|Zoe": 151
, "Audi|Q8 e-tron": 93
, "Hyundai|Kona Electric": 82
, "Tesla|Model S": 80
, "BMW|i3 BEV": 79
, "Jaguar|I-Pace": 70
, "Tesla|Model X": 68
, "Nissan|Leaf": 46
, "Volkswagen|e-Golf": 34
, "Smart|Fortwo ED": 16
, "Hyundai|Ioniq Electric": 10
, "Kia|Soul EV": 10
, "Mitsubishi|i-MiEV": 5
, "Smart|Forfour ED": 5
, "Opel|Ampera-e": 4
, "Citroën|C-Zero": 2
, "Volkswagen|e-up!": 2
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
, "Mazda": 538
, "Mini": 538
, "Tesla": 538
, "Jeep": 526
, "Citroën": 498
, "Porsche": 441
, "Kia": 430
, "Land Rover": 360
, "Mitsubishi": 348
, "Jaguar": 278
, "Honda": 267
, "Smart": 217
, "Chevrolet": 66
, "other": 777
});

db.insert(db.countries.CH, "2019-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/4 (includes commercial vehicles)",
{ "Tesla|Model 3": 492
, "Renault|Zoe": 164
, "Hyundai|Kona Electric": 103
, "BMW|i3 BEV": 79
, "Jaguar|I-Pace": 69
, "Nissan|Leaf": 39
, "Volkswagen|e-Golf": 34
, "Audi|Q8 e-tron": 33
, "Tesla|Model S": 27
, "Smart|Fortwo ED": 17
, "Tesla|Model X": 16
, "Mitsubishi|i-MiEV": 12
, "Hyundai|Ioniq Electric": 8
, "Smart|Forfour ED": 7
, "Volkswagen|e-up!": 4
, "Opel|Ampera-e": 3
, "Citroën|C-Zero": 2
, "Kia|Soul EV": 2
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
, "Renault": 996
, "Toyota": 996
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
, "Mini": 293
, "Land Rover": 284
, "Smart": 202
, "Tesla": 195
, "Jaguar": 176
, "Subaru": 133
, "Chevrolet": 27
, "other": 733
});

db.insert(db.countries.CH, "2019-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/5 (includes commercial vehicles)",
{ "Tesla|Model 3": 125
, "Renault|Zoe": 118
, "BMW|i3 BEV": 92
, "Hyundai|Kona Electric": 60
, "Jaguar|I-Pace": 55
, "Audi|Q8 e-tron": 48
, "Tesla|Model X": 37
, "Tesla|Model S": 33
, "Volkswagen|e-Golf": 32
, "Smart|Fortwo ED": 19
, "Nissan|Leaf": 17
, "Smart|Forfour ED": 12
, "Hyundai|Ioniq Electric": 6
, "Mitsubishi|i-MiEV": 6
, "Citroën|C-Zero": 5
, "Kia|Soul EV": 2
, "Opel|Ampera-e": 2
, "Peugeot|iOn": 2
, "Volkswagen|e-up!": 2
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
, "Smart": 133
, "Chevrolet": 28
, "other": 667
});

db.insert(db.countries.CH, "2019-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/6 (includes commercial vehicles)",
{ "Tesla|Model 3": 584
, "Renault|Zoe": 128
, "BMW|i3 BEV": 62
, "Audi|Q8 e-tron": 57
, "Jaguar|I-Pace": 41
, "Tesla|Model S": 39
, "Hyundai|Kona Electric": 36
, "Tesla|Model X": 36
, "Volkswagen|e-Golf": 25
, "Nissan|Leaf": 23
, "Smart|Fortwo ED": 20
, "Kia|Soul EV": 19
, "Mitsubishi|i-MiEV": 11
, "Hyundai|Ioniq Electric": 8
, "Mercedes-Benz|EQC": 6
, "Opel|Ampera-e": 5
, "Smart|Forfour ED": 4
, "Citroën|C-Zero": 3
, "Volkswagen|e-up!": 2
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
, "Nissan": 300
, "Porsche": 300
, "Honda": 258
, "Tesla": 234
, "Jaguar": 180
, "Subaru": 162
, "Smart": 134
, "Chevrolet": 23
, "other": 772
});

db.insert(db.countries.CH, "2019-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/7 (includes commercial vehicles)",
{ "Tesla|Model 3": 188
, "Renault|Zoe": 95
, "BMW|i3 BEV": 83
, "Hyundai|Kona Electric": 78
, "Audi|Q8 e-tron": 77
, "Nissan|Leaf": 36
, "Jaguar|I-Pace": 31
, "Mercedes-Benz|EQC": 26
, "Tesla|Model X": 24
, "Tesla|Model S": 22
, "Volkswagen|e-Golf": 21
, "Smart|Fortwo ED": 9
, "Smart|Forfour ED": 7
, "Mitsubishi|i-MiEV": 6
, "Opel|Ampera-e": 6
, "Hyundai|Ioniq Electric": 5
, "Kia|Soul EV": 4
, "Peugeot|iOn": 2
, "Citroën|C-Zero": 1
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.CH, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
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
, "Nissan": 271
, "Porsche": 271
, "Honda": 245
, "Land Rover": 223
, "Mitsubishi": 217
, "Tesla": 192
, "Jaguar": 132
, "Smart": 122
, "Subaru": 110
, "Chevrolet": 42
, "other": 469
});

db.insert(db.countries.CH, "2019-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/8 (includes commercial vehicles)",
{ "Tesla|Model 3": 108
, "Hyundai|Kona Electric": 91
, "Renault|Zoe": 81
, "BMW|i3 BEV": 80
, "Tesla|Model X": 47
, "Nissan|Leaf": 45
, "Audi|Q8 e-tron": 37
, "Tesla|Model S": 37
, "Jaguar|I-Pace": 26
, "Smart|Fortwo ED": 15
, "Kia|Soul EV": 7
, "Volkswagen|e-Golf": 5
, "Hyundai|Ioniq Electric": 4
, "Opel|Ampera-e": 4
, "Citroën|C-Zero": 3
, "Smart|Forfour ED": 3
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
, "Toyota": 790
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
, "Smart": 119
, "Chevrolet": 18
, "other": 507
});

db.insert(db.countries.CH, "2019-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/9 (includes commercial vehicles)",
{ "Tesla|Model 3": 629
, "Renault|Zoe": 181
, "BMW|i3 BEV": 155
, "Tesla|Model X": 105
, "Hyundai|Kona Electric": 101
, "Tesla|Model S": 101
, "Nissan|Leaf": 56
, "Opel|Ampera-e": 41
, "Mercedes-Benz|EQC": 35
, "Audi|Q8 e-tron": 30
, "Hyundai|Ioniq Electric": 24
, "Jaguar|I-Pace": 20
, "Mitsubishi|i-MiEV": 9
, "Smart|Forfour ED": 8
, "Kia|Soul EV": 6
, "Volkswagen|e-Golf": 6
, "Peugeot|iOn": 1
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.CH, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2020/07/ModellePW2019.xlsx",
{ "Volkswagen": 2902
, "Mercedes-Benz": 2407
, "BMW": 2234
, "Škoda": 1930
, "Audi": 1774
, "Seat": 1263
, "Ford": 1061
, "Toyota": 885
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
, "Honda": 265
, "Land Rover": 237
, "Tesla": 189
, "Subaru": 177
, "Jaguar": 107
, "Smart": 105
, "Chevrolet": 74
, "other": 658
});

db.insert(db.countries.CH, "2019-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/10 (includes commercial vehicles)",
{ "Renault|Zoe": 152
, "Tesla|Model 3": 108
, "BMW|i3 BEV": 103
, "Smart|Fortwo ED": 58
, "Tesla|Model X": 45
, "Nissan|Leaf": 41
, "Hyundai|Kona Electric": 40
, "Tesla|Model S": 34
, "Audi|Q8 e-tron": 26
, "Volkswagen|e-Golf": 23
, "Hyundai|Ioniq Electric": 19
, "Mercedes-Benz|EQC": 18
, "Jaguar|I-Pace": 17
, "Opel|Ampera-e": 17
, "Mitsubishi|i-MiEV": 12
, "Smart|Forfour ED": 8
, "Citroën|C-Zero": 2
, "Kia|Soul EV": 1
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
, "Opel": 227
, "Citroën": 150
, "Jaguar": 87
, "Smart": 65
, "Chevrolet": 37
, "other": 653
});

db.insert(db.countries.CH, "2019-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/11 (includes commercial vehicles)",
{ "Tesla|Model 3": 231
, "Renault|Zoe": 131
, "BMW|i3 BEV": 86
, "Nissan|Leaf": 55
, "Volkswagen|e-Golf": 44
, "Tesla|Model X": 37
, "Audi|Q8 e-tron": 35
, "Hyundai|Kona Electric": 34
, "Tesla|Model S": 33
, "Smart|Fortwo ED": 29
, "Mercedes-Benz|EQC": 14
, "Jaguar|I-Pace": 12
, "Hyundai|Ioniq Electric": 8
, "Smart|Forfour ED": 8
, "Mitsubishi|i-MiEV": 3
, "Kia|Soul EV": 2
, "Citroën|C-Zero": 1
, "Peugeot|iOn": 1
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
, "Jaguar": 224
, "Smart": 72
, "Chevrolet": 40
, "other": 818
});

db.insert(db.countries.CH, "2019-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2019/12 (includes commercial vehicles)",
{ "Tesla|Model 3": 1188
, "Renault|Zoe": 385
, "Volkswagen|e-Golf": 348
, "Audi|Q8 e-tron": 245
, "BMW|i3 BEV": 111
, "Hyundai|Kona Electric": 93
, "Tesla|Model X": 83
, "Hyundai|Ioniq Electric": 63
, "Nissan|Leaf": 55
, "Mercedes-Benz|EQC": 53
, "Tesla|Model S": 50
, "Jaguar|I-Pace": 49
, "Smart|Fortwo ED": 26
, "Mitsubishi|i-MiEV": 14
, "Opel|Ampera-e": 12
, "Smart|Forfour ED": 9
, "Kia|Soul EV": 3
, "other": 2
});

db.insert(db.countries.CH, "2020-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Subaru": 115
, "Jaguar": 94
, "Honda": 83
, "Smart": 35
, "Chevrolet": 6
, "JAC": 2
, "other": 401
});

db.insert(db.countries.CH, "2020-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/1 (includes commercial vehicles)",
{ "Renault|Zoe": 210
, "Tesla|Model 3": 146
, "BMW|i3 BEV": 89
, "Hyundai|Kona Electric": 61
, "Nissan|Leaf": 48
, "Škoda|Citigo-e": 44
, "Tesla|Model X": 37
, "Mercedes-Benz|EQC": 35
, "Smart|Fortwo ED": 25
, "Tesla|Model S": 20
, "Audi|Q8 e-tron": 13
, "Jaguar|I-Pace": 12
, "Kia|Soul EV": 6
, "Seat|Mii Electric": 5
, "Smart|Forfour ED": 4
, "Hyundai|Ioniq Electric": 3
, "JAC|iEV7 S/E": 2
, "Kia|Niro EV": 2
, "Volkswagen|e-Golf": 2
, "Mitsubishi|i-MiEV": 1
, "Peugeot|iOn": 1
, "Porsche|Taycan": 1
, "Volkswagen|e-up!": 1
, "other": 9
});

db.insert(db.countries.CH, "2020-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Land Rover": 226
, "Subaru": 123
, "Jaguar": 118
, "Tesla": 107
, "Honda": 63
, "Smart": 26
, "Chevrolet": 3
, "JAC": 3
, "other": 510
});

db.insert(db.countries.CH, "2020-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/2 (includes commercial vehicles)",
{ "Renault|Zoe": 267
, "Tesla|Model 3": 80
, "BMW|i3 BEV": 55
, "Hyundai|Kona Electric": 52
, "Nissan|Leaf": 44
, "Mercedes-Benz|EQC": 43
, "Škoda|Citigo-e": 36
, "Audi|Q8 e-tron": 27
, "Jaguar|I-Pace": 27
, "Porsche|Taycan": 21
, "Seat|Mii Electric": 19
, "Smart|Fortwo ED": 18
, "Tesla|Model X": 16
, "Volkswagen|e-up!": 12
, "Tesla|Model S": 11
, "Mini|Cooper SE": 10
, "Hyundai|Ioniq Electric": 8
, "Volkswagen|e-Golf": 7
, "Smart|Forfour ED": 6
, "Citroën|C-Zero": 5
, "JAC|iEV7 S/E": 3
, "Kia|Soul EV": 2
, "Mitsubishi|i-MiEV": 1
, "other": 21
});

db.insert(db.countries.CH, "2020-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Subaru": 115
, "Jaguar": 87
, "Honda": 51
, "Smart": 32
, "Chevrolet": 11
, "other": 371
});

db.insert(db.countries.CH, "2020-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/3 (includes commercial vehicles)",
{ "Tesla|Model 3": 736
, "Renault|Zoe": 197
, "Mercedes-Benz|EQC": 74
, "Mini|Cooper SE": 66
, "BMW|i3 BEV": 58
, "Porsche|Taycan": 55
, "Tesla|Model X": 45
, "Nissan|Leaf": 40
, "Tesla|Model S": 40
, "Hyundai|Kona Electric": 38
, "Audi|Q8 e-tron": 35
, "Škoda|Citigo-e": 32
, "Seat|Mii Electric": 25
, "Smart|Fortwo ED": 23
, "Volkswagen|e-up!": 18
, "Jaguar|I-Pace": 10
, "Volkswagen|e-Golf": 10
, "Kia|Soul EV": 9
, "Smart|Forfour ED": 8
, "Hyundai|Ioniq Electric": 7
, "Opel|Ampera-e": 6
, "Kia|Niro EV": 4
, "Mitsubishi|i-MiEV": 4
, "Peugeot|e-208": 4
, "Honda|e": 2
, "Citroën|C-Zero": 1
, "other": 15
});

db.insert(db.countries.CH, "2020-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Subaru": 65
, "Jaguar": 28
, "Honda": 24
, "Smart": 23
, "Chevrolet": 5
, "JAC": 4
, "other": 231
});

db.insert(db.countries.CH, "2020-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/4 (includes commercial vehicles)",
{ "Tesla|Model 3": 127
, "Renault|Zoe": 87
, "Mini|Cooper SE": 38
, "Hyundai|Kona Electric": 35
, "Mercedes-Benz|EQC": 31
, "Nissan|Leaf": 29
, "BMW|i3 BEV": 26
, "Smart|Fortwo ED": 20
, "Škoda|Citigo-e": 19
, "Opel|Corsa-e": 16
, "Seat|Mii Electric": 14
, "Porsche|Taycan": 12
, "Kia|Soul EV": 10
, "Volkswagen|e-Golf": 10
, "Volkswagen|e-up!": 10
, "Audi|Q8 e-tron": 8
, "Tesla|Model S": 8
, "Tesla|Model X": 7
, "JAC|iEV7 S/E": 4
, "Kia|Niro EV": 4
, "Smart|Forfour ED": 3
, "Peugeot|iOn": 2
, "Citroën|C-Zero": 1
, "Citroën|E-Mehari": 1
, "Hyundai|Ioniq Electric": 1
, "Jaguar|I-Pace": 1
, "Opel|Ampera-e": 1
, "Peugeot|e-208": 1
, "other": 5
});

db.insert(db.countries.CH, "2020-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Jaguar": 36
, "Smart": 34
, "Chevrolet": 7
, "JAC": 4
, "other": 288
});

db.insert(db.countries.CH, "2020-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/5 (includes commercial vehicles)",
{ "Tesla|Model 3": 146
, "Renault|Zoe": 114
, "Hyundai|Kona Electric": 55
, "Mercedes-Benz|EQC": 41
, "Opel|Corsa-e": 37
, "Porsche|Taycan": 31
, "Mini|Cooper SE": 29
, "BMW|i3 BEV": 24
, "Smart|Fortwo ED": 24
, "Tesla|Model X": 21
, "Volkswagen|e-up!": 21
, "Audi|Q8 e-tron": 19
, "Škoda|Citigo-e": 19
, "Kia|Soul EV": 16
, "Nissan|Leaf": 16
, "Seat|Mii Electric": 14
, "Tesla|Model S": 9
, "Volkswagen|e-Golf": 9
, "Smart|Forfour ED": 8
, "Kia|Niro EV": 7
, "Jaguar|I-Pace": 6
, "Hyundai|Ioniq Electric": 5
, "Peugeot|e-208": 5
, "JAC|iEV7 S/E": 4
, "Mitsubishi|i-MiEV": 4
, "Citroën|C-Zero": 2
, "Peugeot|e-2008": 1
, "Peugeot|iOn": 1
, "other": 7
});

db.insert(db.countries.CH, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Honda": 154
, "Jaguar": 87
, "Smart": 46
, "Chevrolet": 5
, "JAC": 4
, "other": 463
});

db.insert(db.countries.CH, "2020-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/6 (includes commercial vehicles)",
{ "Tesla|Model 3": 383
, "Renault|Zoe": 279
, "BMW|i3 BEV": 75
, "Tesla|Model X": 71
, "Hyundai|Kona Electric": 65
, "Porsche|Taycan": 53
, "Audi|Q8 e-tron": 47
, "Nissan|Leaf": 37
, "Mercedes-Benz|EQC": 36
, "Tesla|Model S": 35
, "Smart|Fortwo ED": 33
, "Volkswagen|e-up!": 31
, "Škoda|Citigo-e": 31
, "Mini|Cooper SE": 28
, "Opel|Corsa-e": 26
, "Volkswagen|e-Golf": 22
, "Jaguar|I-Pace": 14
, "Kia|Niro EV": 13
, "Smart|Forfour ED": 12
, "Peugeot|e-2008": 10
, "Kia|Soul EV": 6
, "Peugeot|e-208": 6
, "Seat|Mii Electric": 6
, "Hyundai|Ioniq Electric": 4
, "JAC|iEV7 S/E": 4
, "Mitsubishi|i-MiEV": 4
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 2
, "Opel|Ampera-e": 1
, "other": 13
});

db.insert(db.countries.CH, "2020-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Subaru": 85
, "Jaguar": 56
, "Smart": 44
, "Tesla": 43
, "JAC": 12
, "Chevrolet": 6
, "other": 471
});

db.insert(db.countries.CH, "2020-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/7 (includes commercial vehicles)",
{ "Renault|Zoe": 238
, "Audi|Q8 e-tron": 116
, "Hyundai|Kona Electric": 63
, "Porsche|Taycan": 58
, "BMW|i3 BEV": 54
, "Mini|Cooper SE": 48
, "Škoda|Citigo-e": 48
, "Mercedes-Benz|EQC": 43
, "Nissan|Leaf": 43
, "Smart|Fortwo ED": 37
, "Tesla|Model 3": 31
, "Honda|e": 30
, "Kia|Niro EV": 21
, "Volkswagen|e-Golf": 21
, "Volkswagen|e-up!": 18
, "Peugeot|e-2008": 17
, "Peugeot|e-208": 13
, "JAC|iEV7 S/E": 12
, "Opel|Corsa-e": 8
, "Jaguar|I-Pace": 7
, "Mitsubishi|i-MiEV": 7
, "Tesla|Model S": 7
, "Smart|Forfour ED": 6
, "Tesla|Model X": 5
, "Kia|Soul EV": 4
, "Hyundai|Ioniq Electric": 3
, "Seat|Mii Electric": 2
, "Opel|Ampera-e": 1
, "other": 10
});

db.insert(db.countries.CH, "2020-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Mini": 299
, "Opel": 299
, "Kia": 269
, "Jeep": 258
, "Mitsubishi": 235
, "Porsche": 235
, "Nissan": 230
, "Honda": 223
, "Suzuki": 191
, "Land Rover": 139
, "Subaru": 87
, "Jaguar": 51
, "Smart": 37
, "JAC": 10
, "Chevrolet": 8
, "Polestar": 5
, "other": 351
});

db.insert(db.countries.CH, "2020-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/8 (includes commercial vehicles)",
{ "Tesla|Model 3": 541
, "Renault|Zoe": 220
, "Hyundai|Kona Electric": 132
, "Audi|Q8 e-tron": 83
, "Peugeot|e-208": 75
, "Mini|Cooper SE": 71
, "Škoda|Citigo-e": 52
, "Peugeot|e-2008": 36
, "Porsche|Taycan": 36
, "Tesla|Model X": 32
, "BMW|i3 BEV": 31
, "Honda|e": 31
, "Smart|Fortwo ED": 31
, "Nissan|Leaf": 25
, "Kia|Niro EV": 21
, "Volkswagen|e-Golf": 21
, "Jaguar|I-Pace": 19
, "Volkswagen|e-up!": 14
, "Mazda|MX-30 BEV": 13
, "Tesla|Model S": 13
, "Seat|Mii Electric": 12
, "JAC|iEV7 S/E": 10
, "Opel|Corsa-e": 10
, "Hyundai|Ioniq Electric": 7
, "Smart|Forfour ED": 6
, "Polestar|2": 5
, "Citroën|C-Zero": 3
, "Mitsubishi|i-MiEV": 3
, "Kia|Soul EV": 1
, "Opel|Ampera-e": 1
, "Peugeot|iOn": 1
, "other": 15
});

db.insert(db.countries.CH, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
{ "Mercedes-Benz": 2505
, "BMW": 1735
, "Škoda": 1717
, "Volkswagen": 1546
, "Audi": 1160
, "Tesla": 1144
, "Renault": 1051
, "Ford": 959
, "Seat": 925
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
, "Jaguar": 140
, "Smart": 30
, "JAC": 10
, "other": 392
});

db.insert(db.countries.CH, "2020-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/9 (includes commercial vehicles)",
{ "Tesla|Model 3": 882
, "Renault|Zoe": 304
, "Volkswagen|ID.3": 302
, "Tesla|Model X": 147
, "Tesla|Model S": 113
, "Hyundai|Kona Electric": 101
, "BMW|i3 BEV": 90
, "Mercedes-Benz|EQC": 82
, "Škoda|Citigo-e": 80
, "Audi|Q8 e-tron": 78
, "Jaguar|I-Pace": 72
, "Peugeot|e-208": 72
, "Mazda|MX-30 BEV": 70
, "Porsche|Taycan": 68
, "Kia|Niro EV": 59
, "Opel|Corsa-e": 56
, "Seat|Mii Electric": 56
, "Mini|Cooper SE": 44
, "Nissan|Leaf": 38
, "Honda|e": 30
, "Smart|Fortwo ED": 28
, "Kia|Soul EV": 19
, "Volkswagen|e-up!": 14
, "Peugeot|e-2008": 12
, "Volkswagen|e-Golf": 10
, "JAC|iEV7 S/E": 9
, "Hyundai|Ioniq Electric": 8
, "Mitsubishi|i-MiEV": 5
, "Opel|Ampera-e": 5
, "Citroën|C-Zero": 2
, "Smart|Forfour ED": 2
, "other": 33
});


db.insert(db.countries.CH, "2020-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
{ "Volkswagen": 2152
, "Mercedes-Benz": 2017
, "BMW": 1748
, "Škoda": 1723
, "Audi": 1597
, "Renault": 1027
, "Seat": 967
, "Ford": 791
, "Dacia": 755
, "Hyundai": 709
, "Volvo": 709
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
, "Cupra": 140
, "Tesla": 103
, "Jaguar": 70
, "Smart": 29
, "Polestar": 12
, "JAC": 6
, "other": 382
});

db.insert(db.countries.CH, "2020-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/10 (includes commercial vehicles)",
{ "Renault|Zoe": 214
, "Volkswagen|ID.3": 189
, "Hyundai|Kona Electric": 120
, "Audi|Q8 e-tron": 88
, "Mazda|MX-30 BEV": 81
, "Škoda|Citigo-e": 80
, "Mini|Cooper SE": 79
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
, "Smart|Fortwo ED": 20
, "Tesla|Model S": 20
, "Kia|Soul EV": 14
, "Seat|Mii Electric": 14
, "Peugeot|e-2008": 13
, "Renault|Twingo E-Tech": 12
, "Jaguar|I-Pace": 11
, "Polestar|2": 10
, "Volkswagen|e-Golf": 10
, "Smart|Forfour ED": 7
, "Volkswagen|e-up!": 7
, "JAC|iEV7 S/E": 6
, "Hyundai|Ioniq Electric": 5
, "Opel|Ampera-e": 5
, "Citroën|C-Zero": 2
, "Mitsubishi|i-MiEV": 1
, "Peugeot|iOn": 1
, "other": 25
});

db.insert(db.countries.CH, "2020-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2021/01/ModellePW2020.xlsx",
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
, "Jaguar": 141
, "Cupra": 92
, "Smart": 37
, "JAC": 5
, "Polestar": 3
, "other": 397
});

db.insert(db.countries.CH, "2020-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/11 (includes commercial vehicles)",
{ "Tesla|Model 3": 356
, "Renault|Zoe": 280
, "Volkswagen|ID.3": 168
, "Audi|Q8 e-tron": 165
, "Hyundai|Kona Electric": 153
, "Fiat|500e": 123
, "Mini|Cooper SE": 89
, "Škoda|Citigo-e": 86
, "Peugeot|e-208": 80
, "Jaguar|I-Pace": 76
, "BMW|i3 BEV": 66
, "Porsche|Taycan": 57
, "Mercedes-Benz|EQV": 48
, "Mazda|MX-30 BEV": 43
, "Tesla|Model X": 40
, "Mercedes-Benz|EQC": 36
, "Kia|Niro EV": 35
, "Opel|Corsa-e": 32
, "Smart|Fortwo ED": 31
, "Renault|Twingo E-Tech": 25
, "Tesla|Model S": 25
, "Nissan|Leaf": 24
, "Honda|e": 22
, "Volkswagen|e-up!": 20
, "Opel|Ampera-e": 16
, "Peugeot|e-2008": 13
, "Kia|Soul EV": 7
, "Seat|Mii Electric": 7
, "Smart|Forfour ED": 6
, "Hyundai|Ioniq Electric": 5
, "JAC|iEV7 S/E": 5
, "Peugeot|e-Traveller": 4
, "Volkswagen|e-Golf": 4
, "Citroën|C-Zero": 3
, "Polestar|2": 3
, "other": 37
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
, "Land Rover": 183
, "Jaguar": 153
, "Cupra": 110
, "JAC": 34
, "Smart": 31
, "Polestar": 15
, "Chevrolet": 12
, "other": 465
});

db.insert(db.countries.CH, "2020-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2020/12 (includes commercial vehicles)",
{ "Tesla|Model 3": 1560
, "Renault|Zoe": 477
, "Volkswagen|ID.3": 346
, "Fiat|500e": 234
, "Audi|Q8 e-tron": 224
, "BMW|i3 BEV": 195
, "Hyundai|Kona Electric": 159
, "Tesla|Model X": 159
, "Mini|Cooper SE": 153
, "Nissan|Leaf": 134
, "Mazda|MX-30 BEV": 126
, "Jaguar|I-Pace": 102
, "Volvo|EX40": 93
, "Tesla|Model S": 90
, "Škoda|Citigo-e": 85
, "Porsche|Taycan": 70
, "Kia|Niro EV": 44
, "Peugeot|e-208": 35
, "JAC|iEV7 S/E": 34
, "Renault|Twingo E-Tech": 31
, "Volkswagen|e-up!": 31
, "Mercedes-Benz|EQC": 30
, "Opel|Corsa-e": 24
, "Smart|Fortwo ED": 22
, "Honda|e": 18
, "Mercedes-Benz|EQV": 14
, "Polestar|2": 13
, "Volkswagen|e-Golf": 11
, "Hyundai|Ioniq Electric": 10
, "Kia|Soul EV": 9
, "Smart|Forfour ED": 9
, "Peugeot|e-2008": 8
, "Citroën|C-Zero": 4
, "other": 50
});

db.insert(db.countries.CH, "2021-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Mercedes-Benz": 1629
, "BMW": 1340
, "Volkswagen": 1297
, "Škoda": 1023
, "Audi": 953
, "Seat": 849
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
, "Cupra": 119
, "Subaru": 109
, "Tesla": 63
, "Jaguar": 50
, "Polestar": 44
, "Smart": 23
, "other": 331
});

db.insert(db.countries.CH, "2021-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/1 (includes commercial vehicles)",
{ "Renault|Zoe": 144
, "Volkswagen|ID.3": 108
, "Volvo|EX40": 82
, "Audi|Q8 e-tron": 75
, "Fiat|500e": 66
, "Tesla|Model 3": 53
, "Peugeot|e-208": 51
, "Porsche|Taycan": 44
, "Polestar|2": 43
, "Hyundai|Kona Electric": 42
, "BMW|i3 BEV": 29
, "Kia|Niro EV": 29
, "Škoda|Citigo-e": 28
, "Opel|Corsa-e": 26
, "Peugeot|e-2008": 26
, "Mercedes-Benz|EQC": 22
, "Smart|Fortwo ED": 19
, "Mini|Cooper SE": 14
, "Volkswagen|e-up!": 14
, "Honda|e": 11
, "Seat|Mii Electric": 11
, "Volkswagen|e-Golf": 11
, "Jaguar|I-Pace": 10
, "Renault|Twingo E-Tech": 8
, "Tesla|Model X": 8
, "Nissan|Leaf": 6
, "Opel|Ampera-e": 6
, "Mazda|MX-30 BEV": 5
, "Smart|Forfour ED": 4
, "Hyundai|Ioniq Electric": 3
, "Kia|Soul EV": 3
, "Citroën|C-Zero": 1
, "Citroën|ë-C4": 1
, "Mercedes-Benz|EQV": 1
, "Mitsubishi|i-MiEV": 1
, "Tesla|Model S": 1
, "Volkswagen|e-Transporter": 1
, "other": 17
});

db.insert(db.countries.CH, "2021-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Volkswagen": 1549
, "Mercedes-Benz": 1493
, "Škoda": 1403
, "BMW": 1293
, "Audi": 1003
, "Seat": 920
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
, "Cupra": 273
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
, "Jaguar": 76
, "Smart": 20
, "Genesis": 5
, "other": 297
});

db.insert(db.countries.CH, "2021-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/2 (includes commercial vehicles)",
{ "Volkswagen|ID.3": 181
, "Renault|Zoe": 166
, "Tesla|Model 3": 160
, "Polestar|2": 98
, "Fiat|500e": 92
, "Audi|Q8 e-tron": 62
, "Volvo|EX40": 60
, "Peugeot|e-208": 48
, "Citroën|ë-C4": 45
, "Hyundai|Kona Electric": 43
, "Renault|Twingo E-Tech": 37
, "BMW|i3 BEV": 34
, "Opel|Corsa-e": 30
, "Seat|Mii Electric": 30
, "Škoda|Citigo-e": 30
, "Mercedes-Benz|EQC": 29
, "Porsche|Taycan": 23
, "Kia|Niro EV": 20
, "Smart|Fortwo ED": 18
, "Peugeot|e-2008": 16
, "Nissan|Leaf": 15
, "Volkswagen|e-up!": 15
, "Mini|Cooper SE": 14
, "BMW|iX3": 11
, "Tesla|Model X": 10
, "Jaguar|I-Pace": 9
, "Honda|e": 8
, "Kia|Soul EV": 8
, "Mazda|MX-30 BEV": 6
, "Hyundai|Ioniq Electric": 5
, "Opel|Ampera-e": 5
, "Mercedes-Benz|EQV": 4
, "Citroën|C-Zero": 3
, "Ford|Mustang Mach-E": 3
, "Peugeot|e-Traveller": 3
, "Smart|Forfour ED": 2
, "Tesla|Model S": 1
, "other": 19
});

db.insert(db.countries.CH, "2021-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Volkswagen": 2609
, "BMW": 2557
, "Mercedes-Benz": 2504
, "Škoda": 1729
, "Audi": 1707
, "Seat": 1201
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
, "Cupra": 213
, "Jaguar": 104
, "Polestar": 81
, "Smart": 34
, "Genesis": 5
, "Chevrolet": 3
, "other": 502
});

db.insert(db.countries.CH, "2021-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/3 (includes commercial vehicles)",
{ "Tesla|Model 3": 526
, "Volkswagen|ID.3": 227
, "Renault|Zoe": 161
, "Volkswagen|ID.4": 140
, "Fiat|500e": 138
, "Audi|Q8 e-tron": 115
, "Hyundai|Kona Electric": 98
, "Polestar|2": 81
, "Volvo|EX40": 70
, "Mercedes-Benz|EQC": 68
, "Nissan|Leaf": 59
, "BMW|i3 BEV": 58
, "Porsche|Taycan": 55
, "Renault|Twingo E-Tech": 49
, "Peugeot|e-2008": 47
, "Opel|Ampera-e": 37
, "Opel|Corsa-e": 36
, "Peugeot|e-208": 36
, "Kia|Niro EV": 35
, "Seat|Mii Electric": 33
, "Mini|Cooper SE": 31
, "Smart|Fortwo ED": 28
, "Honda|e": 24
, "Škoda|Citigo-e": 24
, "Jaguar|I-Pace": 19
, "Volkswagen|e-up!": 19
, "BMW|iX3": 12
, "Citroën|ë-C4": 12
, "Mercedes-Benz|EQA": 12
, "Kia|Soul EV": 9
, "Mercedes-Benz|EQV": 7
, "Audi|e-tron GT": 5
, "Smart|Forfour ED": 5
, "Volkswagen|e-Transporter": 4
, "Hyundai|Ioniq Electric": 3
, "Peugeot|e-Traveller": 3
, "Mazda|MX-30 BEV": 2
, "Tesla|Model X": 2
, "other": 28
});

db.insert(db.countries.CH, "2021-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Mercedes-Benz": 2479
, "Volkswagen": 2304
, "BMW": 1891
, "Škoda": 1812
, "Audi": 1801
, "Seat": 1116
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
, "Cupra": 190
, "Honda": 178
, "Subaru": 152
, "Jaguar": 125
, "Polestar": 74
, "Tesla": 63
, "Smart": 31
, "Chevrolet": 3
, "other": 420
});

db.insert(db.countries.CH, "2021-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/4 (includes commercial vehicles)",
{ "Volkswagen|ID.3": 345
, "Volkswagen|ID.4": 140
, "Renault|Zoe": 136
, "Fiat|500e": 131
, "Audi|Q8 e-tron": 97
, "Mercedes-Benz|EQA": 91
, "BMW|i3 BEV": 90
, "Hyundai|Kona Electric": 79
, "Polestar|2": 74
, "Volvo|EX40": 64
, "Tesla|Model 3": 61
, "Škoda|Enyaq": 54
, "Mercedes-Benz|EQC": 51
, "Opel|Mokka-e": 51
, "Mini|Cooper SE": 49
, "Renault|Twingo E-Tech": 48
, "Peugeot|e-208": 44
, "Porsche|Taycan": 34
, "Nissan|Leaf": 32
, "Opel|Ampera-e": 30
, "Opel|Corsa-e": 30
, "Volkswagen|e-up!": 26
, "Škoda|Citigo-e": 26
, "Kia|Niro EV": 25
, "Smart|Fortwo ED": 25
, "Seat|Mii Electric": 23
, "Honda|e": 17
, "Peugeot|e-2008": 13
, "Jaguar|I-Pace": 12
, "Citroën|ë-C4": 11
, "Mercedes-Benz|EQV": 10
, "Kia|Soul EV": 7
, "Mazda|MX-30 BEV": 5
, "Smart|Forfour ED": 5
, "BMW|iX3": 4
, "Peugeot|e-Traveller": 3
, "Volkswagen|e-Transporter": 3
, "Hyundai|Ioniq Electric": 2
, "Mitsubishi|i-MiEV": 2
, "Tesla|Model S": 2
, "other": 19
});

db.insert(db.countries.CH, "2021-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Volkswagen": 2470
, "Škoda": 2019
, "BMW": 1833
, "Mercedes-Benz": 1785
, "Audi": 1781
, "Seat": 957
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
, "Subaru": 129
, "Cupra": 107
, "Jaguar": 104
, "Polestar": 52
, "Smart": 40
, "Chevrolet": 7
, "other": 366
});

db.insert(db.countries.CH, "2021-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/5 (includes commercial vehicles)",
{ "Volkswagen|ID.3": 230
, "Tesla|Model 3": 143
, "Fiat|500e": 136
, "Renault|Zoe": 135
, "Škoda|Enyaq": 122
, "Audi|Q8 e-tron": 114
, "Volkswagen|ID.4": 99
, "Hyundai|Kona Electric": 81
, "Volvo|EX40": 75
, "Ford|Mustang Mach-E": 69
, "Audi|e-tron GT": 60
, "Polestar|2": 50
, "Peugeot|e-208": 49
, "BMW|i3 BEV": 44
, "Mercedes-Benz|EQC": 44
, "Opel|Corsa-e": 44
, "Mercedes-Benz|EQA": 41
, "Kia|Niro EV": 37
, "Porsche|Taycan": 35
, "Mini|Cooper SE": 31
, "Smart|Fortwo ED": 29
, "Volkswagen|e-up!": 27
, "Renault|Twingo E-Tech": 23
, "BMW|iX3": 20
, "Nissan|Leaf": 17
, "Honda|e": 16
, "Opel|Mokka-e": 16
, "Citroën|ë-C4": 15
, "Jaguar|I-Pace": 14
, "Seat|Mii Electric": 14
, "Škoda|Citigo-e": 11
, "Mercedes-Benz|EQV": 10
, "Smart|Forfour ED": 10
, "Mazda|MX-30 BEV": 9
, "Peugeot|e-2008": 9
, "Kia|Soul EV": 7
, "Hyundai|Ioniq Electric": 4
, "Opel|Ampera-e": 3
, "Volkswagen|e-Transporter": 3
, "Dacia|Spring": 2
, "Citroën|C-Zero": 1
, "Peugeot|e-Traveller": 1
, "other": 13
});

db.insert(db.countries.CH, "2021-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Volkswagen": 3458
, "BMW": 2156
, "Mercedes-Benz": 2042
, "Audi": 1957
, "Škoda": 1757
, "Seat": 1346
, "Tesla": 1297
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
, "Cupra": 174
, "Nissan": 160
, "Jaguar": 116
, "Polestar": 97
, "Smart": 30
, "Genesis": 11
, "other": 466
});

db.insert(db.countries.CH, "2021-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/6 (includes commercial vehicles)",
{ "Tesla|Model 3": 1296
, "Volkswagen|ID.3": 268
, "Volkswagen|ID.4": 229
, "Fiat|500e": 155
, "Škoda|Enyaq": 152
, "Renault|Zoe": 140
, "BMW|i3 BEV": 137
, "Volvo|EX40": 100
, "Polestar|2": 96
, "Hyundai|Kona Electric": 95
, "Mercedes-Benz|EQA": 95
, "Ford|Mustang Mach-E": 85
, "Audi|Q4 e-tron": 78
, "Audi|Q8 e-tron": 75
, "Peugeot|e-208": 59
, "Audi|e-tron GT": 54
, "Opel|Corsa-e": 54
, "Renault|Twingo E-Tech": 50
, "Dacia|Spring": 47
, "BMW|iX3": 45
, "Mini|Cooper SE": 36
, "Kia|Niro EV": 31
, "Volkswagen|e-up!": 30
, "Nissan|Leaf": 28
, "Porsche|Taycan": 28
, "Seat|Mii Electric": 24
, "Honda|e": 21
, "Smart|Fortwo ED": 21
, "Škoda|Citigo-e": 19
, "Citroën|ë-C4": 17
, "Jaguar|I-Pace": 16
, "Mercedes-Benz|EQC": 15
, "Peugeot|e-2008": 12
, "Kia|Soul EV": 11
, "Peugeot|e-Traveller": 10
, "Opel|Mokka-e": 9
, "Smart|Forfour ED": 8
, "Hyundai|Ioniq Electric": 6
, "Opel|Ampera-e": 6
, "Mercedes-Benz|EQV": 5
, "Volkswagen|e-Transporter": 2
, "other": 26
});

db.insert(db.countries.CH, "2021-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Volkswagen": 2304
, "Mercedes-Benz": 1812
, "BMW": 1707
, "Škoda": 1477
, "Audi": 1375
, "Seat": 1002
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
, "Cupra": 116
, "Subaru": 93
, "Jaguar": 83
, "Polestar": 50
, "Tesla": 19
, "Genesis": 18
, "Smart": 17
, "Chevrolet": 5
, "other": 363
});

db.insert(db.countries.CH, "2021-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/7 (includes commercial vehicles)",
{ "Škoda|Enyaq": 135
, "Volkswagen|ID.3": 132
, "Fiat|500e": 131
, "Mercedes-Benz|EQA": 115
, "Hyundai|Kona Electric": 114
, "Renault|Zoe": 108
, "Volvo|EX40": 102
, "Peugeot|e-208": 92
, "Ford|Mustang Mach-E": 80
, "Volkswagen|ID.4": 73
, "BMW|i3 BEV": 66
, "Audi|Q8 e-tron": 63
, "Audi|e-tron GT": 61
, "Polestar|2": 49
, "Porsche|Taycan": 45
, "Mini|Cooper SE": 44
, "Seat|Mii Electric": 35
, "Nissan|Leaf": 33
, "Peugeot|e-2008": 31
, "Audi|Q4 e-tron": 26
, "Opel|Corsa-e": 26
, "Kia|Niro EV": 24
, "Mercedes-Benz|EQC": 23
, "Renault|Twingo E-Tech": 23
, "Hyundai|Ioniq Electric": 22
, "Tesla|Model 3": 17
, "Volkswagen|e-up!": 17
, "Jaguar|I-Pace": 15
, "BMW|iX3": 14
, "Honda|e": 12
, "Škoda|Citigo-e": 12
, "Citroën|ë-C4": 11
, "Mazda|MX-30 BEV": 11
, "Mercedes-Benz|EQV": 9
, "Smart|Fortwo ED": 9
, "Dacia|Spring": 8
, "Smart|Forfour ED": 6
, "Opel|Ampera-e": 5
, "Opel|Mokka-e": 4
, "Peugeot|e-Traveller": 4
, "Kia|Soul EV": 3
, "Volkswagen|e-Transporter": 2
, "Citroën|C-Zero": 1
, "Mitsubishi|i-MiEV": 1
, "Tesla|Model S": 1
, "Tesla|Model X": 1
, "Volkswagen|e-Golf": 1
, "other": 29
});

db.insert(db.countries.CH, "2021-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Volkswagen": 1838
, "Mercedes-Benz": 1410
, "BMW": 1356
, "Audi": 1243
, "Škoda": 1164
, "Toyota": 996
, "Ford": 759
, "Seat": 710
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
, "Cupra": 224
, "Mitsubishi": 215
, "Jeep": 198
, "Porsche": 195
, "Honda": 188
, "Nissan": 186
, "Land Rover": 126
, "Subaru": 124
, "Jaguar": 64
, "Polestar": 38
, "Smart": 29
, "Genesis": 12
, "Chevrolet": 2
, "other": 313
});

db.insert(db.countries.CH, "2021-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/8 (includes commercial vehicles)",
{ "Volkswagen|ID.3": 289
, "Škoda|Enyaq": 160
, "Tesla|Model Y": 142
, "Tesla|Model 3": 141
, "Fiat|500e": 98
, "Renault|Zoe": 98
, "Audi|Q8 e-tron": 94
, "Mercedes-Benz|EQC": 81
, "Volkswagen|ID.4": 81
, "Hyundai|Kona Electric": 80
, "Mercedes-Benz|EQA": 76
, "Hyundai|Ioniq Electric": 73
, "BMW|iX3": 61
, "Ford|Mustang Mach-E": 55
, "Audi|e-tron GT": 51
, "Mini|Cooper SE": 48
, "Audi|Q4 e-tron": 45
, "Volvo|EX40": 44
, "Peugeot|e-208": 41
, "Volkswagen|e-up!": 41
, "Polestar|2": 38
, "Renault|Twingo E-Tech": 35
, "Citroën|ë-C4": 33
, "Porsche|Taycan": 29
, "Nissan|Leaf": 27
, "BMW|i3 BEV": 25
, "Kia|Niro EV": 24
, "Smart|Fortwo ED": 24
, "Opel|Corsa-e": 23
, "Jaguar|I-Pace": 22
, "Seat|Mii Electric": 21
, "Opel|Mokka-e": 19
, "Mazda|MX-30 BEV": 17
, "Peugeot|e-2008": 17
, "Škoda|Citigo-e": 12
, "Honda|e": 11
, "Mercedes-Benz|EQV": 9
, "Mercedes-Benz|EQS": 8
, "Kia|Soul EV": 6
, "BMW|iX": 5
, "Smart|Forfour ED": 5
, "Dacia|Spring": 4
, "Opel|Zafira-e": 2
, "Peugeot|e-Traveller": 2
, "other": 20
});

db.insert(db.countries.CH, "2021-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
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
, "Seat": 589
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
, "Cupra": 116
, "Jaguar": 71
, "Polestar": 48
, "Smart": 41
, "JAC": 16
, "Genesis": 8
, "Chevrolet": 6
, "other": 322
});

db.insert(db.countries.CH, "2021-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/9 (includes commercial vehicles)",
{ "Tesla|Model 3": 1062
, "Tesla|Model Y": 567
, "Škoda|Enyaq": 299
, "Volkswagen|ID.3": 283
, "Fiat|500e": 163
, "Hyundai|Ioniq 5": 158
, "Audi|Q4 e-tron": 126
, "Volkswagen|ID.4": 118
, "Renault|Zoe": 114
, "Audi|Q8 e-tron": 83
, "Hyundai|Kona Electric": 69
, "Mercedes-Benz|EQA": 68
, "BMW|i3 BEV": 57
, "Volkswagen|e-up!": 56
, "Peugeot|e-208": 52
, "Peugeot|e-2008": 47
, "Polestar|2": 47
, "Porsche|Taycan": 46
, "Volvo|EX40": 43
, "Mercedes-Benz|EQC": 39
, "BMW|iX3": 38
, "Ford|Mustang Mach-E": 37
, "Kia|Niro EV": 35
, "Opel|Corsa-e": 34
, "Audi|e-tron GT": 33
, "Mini|Cooper SE": 32
, "Renault|Twingo E-Tech": 32
, "Smart|Fortwo ED": 31
, "Nissan|Leaf": 28
, "Jaguar|I-Pace": 26
, "Opel|Mokka-e": 24
, "Kia|Soul EV": 21
, "JAC|iEV7 S/E": 16
, "Citroën|ë-C4": 15
, "Honda|e": 15
, "Seat|Mii Electric": 14
, "Mazda|MX-30 BEV": 10
, "Mercedes-Benz|EQV": 10
, "Smart|Forfour ED": 7
, "Škoda|Citigo-e": 7
, "Opel|Zafira-e": 4
, "Peugeot|e-Traveller": 4
, "other": 36
});

db.insert(db.countries.CH, "2021-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
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
, "Seat": 403
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
, "Land Rover": 185
, "Mitsubishi": 185
, "Subaru": 161
, "Jeep": 153
, "Cupra": 99
, "Polestar": 71
, "Jaguar": 58
, "Tesla": 58
, "Smart": 52
, "Genesis": 5
, "Chevrolet": 4
, "JAC": 4
, "other": 369
});

db.insert(db.countries.CH, "2021-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/10 (includes commercial vehicles)",
{ "Škoda|Enyaq": 302
, "Hyundai|Ioniq 5": 170
, "Fiat|500e": 114
, "Renault|Zoe": 107
, "Mercedes-Benz|EQA": 102
, "Volkswagen|ID.4": 101
, "Volkswagen|ID.3": 99
, "Audi|Q4 e-tron": 93
, "Volvo|EX40": 91
, "Mini|Cooper SE": 76
, "Hyundai|Kona Electric": 75
, "Polestar|2": 71
, "BMW|i3 BEV": 58
, "Porsche|Taycan": 51
, "Smart|Fortwo ED": 48
, "Tesla|Model 3": 47
, "Volkswagen|e-up!": 44
, "Audi|Q8 e-tron": 38
, "Dacia|Spring": 37
, "Peugeot|e-208": 36
, "Audi|e-tron GT": 34
, "Nissan|Leaf": 34
, "Mercedes-Benz|EQC": 30
, "BMW|iX3": 27
, "Kia|Niro EV": 26
, "Opel|Corsa-e": 26
, "Renault|Twingo E-Tech": 25
, "Citroën|ë-C4": 18
, "Seat|Mii Electric": 18
, "Mercedes-Benz|EQS": 17
, "Opel|Mokka-e": 16
, "Ford|Mustang Mach-E": 15
, "Honda|e": 14
, "Jaguar|I-Pace": 14
, "Peugeot|e-2008": 13
, "Tesla|Model Y": 10
, "Škoda|Citigo-e": 9
, "Kia|EV6": 8
, "Mercedes-Benz|EQV": 8
, "Cupra|Born": 6
, "Kia|Soul EV": 6
, "Peugeot|e-Traveller": 5
, "Volkswagen|e-Transporter": 5
, "JAC|iEV7 S/E": 4
, "Mazda|MX-30 BEV": 3
, "Smart|Forfour ED": 3
, "Opel|Zafira-e": 2
, "other": 28
});

db.insert(db.countries.CH, "2021-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
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
, "Seat": 458
, "Peugeot": 426
, "Opel": 383
, "Mini": 365
, "Suzuki": 358
, "Kia": 343
, "Porsche": 294
, "Jeep": 269
, "Mazda": 240
, "Honda": 198
, "Cupra": 197
, "Mitsubishi": 163
, "Subaru": 162
, "Nissan": 161
, "Land Rover": 158
, "Polestar": 88
, "Jaguar": 72
, "Smart": 36
, "Genesis": 26
, "Chevrolet": 19
, "JAC": 12
, "other": 330
});

db.insert(db.countries.CH, "2021-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/11 (includes commercial vehicles)",
{ "Tesla|Model 3": 463
, "Tesla|Model Y": 360
, "Škoda|Enyaq": 353
, "Hyundai|Ioniq 5": 137
, "Renault|Zoe": 134
, "Volkswagen|ID.4": 134
, "Fiat|500e": 131
, "Audi|Q4 e-tron": 129
, "Mercedes-Benz|EQA": 122
, "Volvo|EX40": 114
, "BMW|iX": 107
, "Mini|Cooper SE": 101
, "Volkswagen|ID.3": 91
, "Polestar|2": 87
, "Audi|Q8 e-tron": 84
, "Cupra|Born": 73
, "Porsche|Taycan": 73
, "Hyundai|Kona Electric": 65
, "Audi|e-tron GT": 61
, "BMW|i3 BEV": 59
, "Dacia|Spring": 54
, "Volkswagen|e-up!": 50
, "Renault|Twingo E-Tech": 49
, "Peugeot|e-208": 48
, "Ford|Mustang Mach-E": 46
, "Nissan|Leaf": 43
, "Kia|EV6": 36
, "Mercedes-Benz|EQC": 34
, "Mercedes-Benz|EQS": 30
, "Smart|Fortwo ED": 30
, "Citroën|ë-C4": 28
, "BMW|iX3": 24
, "Seat|Mii Electric": 22
, "Kia|Niro EV": 21
, "Peugeot|e-2008": 17
, "Honda|e": 15
, "Jaguar|I-Pace": 13
, "Opel|Corsa-e": 13
, "Opel|Mokka-e": 13
, "JAC|iEV7 S/E": 12
, "Mercedes-Benz|EQV": 11
, "Peugeot|e-Traveller": 8
, "Volvo|EC40": 8
, "Škoda|Citigo-e": 8
, "Smart|Forfour ED": 6
, "Mazda|MX-30 BEV": 5
, "Opel|Zafira-e": 5
, "other": 42
});

db.insert(db.countries.CH, "2021-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2022/01/ModellePW2021.xlsx",
{ "Volkswagen": 2791
, "Škoda": 2336
, "Mercedes-Benz": 1949
, "Audi": 1862
, "BMW": 1848
, "Tesla": 1409
, "Renault": 1152
, "Hyundai": 889
, "Volvo": 877
, "Seat": 791
, "Toyota": 764
, "Ford": 752
, "Cupra": 614
, "Dacia": 555
, "Porsche": 535
, "Kia": 481
, "Peugeot": 477
, "Fiat": 429
, "Opel": 425
, "Mini": 410
, "Suzuki": 405
, "Jeep": 305
, "Citroën": 298
, "Honda": 245
, "Mazda": 236
, "Mitsubishi": 209
, "Land Rover": 205
, "Subaru": 202
, "Nissan": 193
, "Polestar": 118
, "Jaguar": 95
, "JAC": 49
, "Smart": 46
, "Chevrolet": 36
, "Genesis": 18
, "other": 516
});

db.insert(db.countries.CH, "2021-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2021/12 (includes commercial vehicles)",
{ "Tesla|Model 3": 1095
, "Škoda|Enyaq": 607
, "Volkswagen|e-up!": 355
, "Audi|Q4 e-tron": 343
, "Tesla|Model Y": 313
, "Volkswagen|ID.4": 255
, "Cupra|Born": 236
, "Hyundai|Ioniq 5": 187
, "Volkswagen|ID.3": 166
, "Polestar|2": 118
, "Mercedes-Benz|EQA": 117
, "Renault|Zoe": 114
, "Audi|Q8 e-tron": 110
, "Fiat|500e": 110
, "Volvo|EX40": 107
, "BMW|iX3": 100
, "Dacia|Spring": 98
, "BMW|i3 BEV": 92
, "BMW|iX": 80
, "Volvo|EC40": 80
, "Mini|Cooper SE": 79
, "Porsche|Taycan": 75
, "Nissan|Leaf": 72
, "Hyundai|Kona Electric": 69
, "Seat|Mii Electric": 66
, "Kia|EV6": 56
, "JAC|iEV7 S/E": 49
, "Renault|Twingo E-Tech": 49
, "Ford|Mustang Mach-E": 43
, "Smart|Fortwo ED": 42
, "Audi|e-tron GT": 41
, "Peugeot|e-208": 38
, "Mercedes-Benz|EQC": 33
, "Opel|Mokka-e": 28
, "Kia|Niro EV": 27
, "Citroën|ë-C4": 21
, "Honda|e": 16
, "Opel|Corsa-e": 15
, "Jaguar|I-Pace": 10
, "Peugeot|e-2008": 10
, "Mercedes-Benz|EQS": 9
, "Mercedes-Benz|EQV": 6
, "Opel|Zafira-e": 5
, "Škoda|Citigo-e": 5
, "Kia|Soul EV": 4
, "Smart|Forfour ED": 4
, "other": 41
});

db.insert(db.countries.CH, "2022-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Škoda": 1578
, "Volkswagen": 1518
, "Mercedes-Benz": 1469
, "Audi": 1421
, "BMW": 1196
, "Toyota": 842
, "Hyundai": 689
, "Renault": 683
, "Volvo": 680
, "Peugeot": 652
, "Seat": 575
, "Ford": 494
, "Porsche": 420
, "Opel": 377
, "Dacia": 333
, "Kia": 324
, "Mini": 293
, "Mazda": 290
, "Suzuki": 277
, "Citroën": 263
, "Fiat": 260
, "Cupra": 215
, "Honda": 150
, "Nissan": 132
, "Mitsubishi": 113
, "Jeep": 98
, "Subaru": 79
, "Land Rover": 77
, "Polestar": 47
, "Jaguar": 30
, "Genesis": 19
, "Tesla": 17
, "Smart": 14
, "JAC": 9
, "other": 265
});

db.insert(db.countries.CH, "2022-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/1 (includes commercial vehicles)",
{ "Audi|Q4 e-tron": 268
, "Škoda|Enyaq": 225
, "Hyundai|Ioniq 5": 117
, "Cupra|Born": 95
, "Porsche|Taycan": 90
, "Renault|Zoe": 88
, "Hyundai|Kona Electric": 83
, "Peugeot|e-208": 79
, "Fiat|500e": 75
, "Volvo|EC40": 73
, "Audi|Q8 e-tron": 61
, "Mercedes-Benz|EQA": 59
, "Volkswagen|ID.4": 57
, "Volvo|EX40": 53
, "Volkswagen|ID.3": 51
, "Polestar|2": 45
, "Audi|e-tron GT": 39
, "Mini|Cooper SE": 39
, "Peugeot|e-2008": 34
, "BMW|iX3": 31
, "Dacia|Spring": 30
, "Opel|Corsa-e": 30
, "BMW|iX": 29
, "Ford|Mustang Mach-E": 28
, "Kia|EV6": 28
, "BMW|i3 BEV": 26
, "Mercedes-Benz|EQC": 26
, "Renault|Twingo E-Tech": 22
, "Kia|Niro EV": 21
, "Nissan|Leaf": 19
, "Opel|Mokka-e": 19
, "Citroën|ë-C4": 17
, "Volkswagen|e-up!": 14
, "Smart|Fortwo ED": 13
, "BMW|i4": 12
, "JAC|iEV7 S/E": 9
, "Tesla|Model Y": 9
, "Peugeot|e-Traveller": 8
, "Tesla|Model 3": 8
, "Honda|e": 7
, "Mercedes-Benz|EQS": 6
, "Opel|Zafira-e": 6
, "Kia|Soul EV": 5
, "Jaguar|I-Pace": 4
, "Škoda|Citigo-e": 4
, "Mercedes-Benz|EQV": 2
, "Volkswagen|e-Transporter": 2
, "other": 82
});

db.insert(db.countries.CH, "2022-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 1719
, "Mercedes-Benz": 1453
, "Škoda": 1450
, "BMW": 1361
, "Audi": 1247
, "Toyota": 1039
, "Hyundai": 707
, "Peugeot": 707
, "Ford": 573
, "Volvo": 528
, "Seat": 506
, "Mazda": 476
, "Renault": 464
, "Citroën": 418
, "Opel": 396
, "Tesla": 374
, "Kia": 363
, "Mini": 362
, "Dacia": 322
, "Porsche": 310
, "Honda": 239
, "Suzuki": 234
, "Fiat": 211
, "Mitsubishi": 151
, "Subaru": 144
, "Jeep": 122
, "Cupra": 113
, "Land Rover": 88
, "Nissan": 68
, "Polestar": 64
, "Jaguar": 56
, "Genesis": 20
, "Smart": 18
, "JAC": 10
, "other": 293
});

db.insert(db.countries.CH, "2022-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/2 (includes commercial vehicles)",
{ "Tesla|Model Y": 246
, "Audi|Q4 e-tron": 169
, "Hyundai|Ioniq 5": 159
, "Škoda|Enyaq": 158
, "Tesla|Model 3": 128
, "BMW|i3 BEV": 92
, "Hyundai|Kona Electric": 87
, "Fiat|500e": 86
, "Peugeot|e-208": 83
, "Mercedes-Benz|EQB": 72
, "Volkswagen|ID.4": 66
, "Polestar|2": 64
, "Volvo|EX40": 64
, "Volkswagen|ID.3": 59
, "Porsche|Taycan": 58
, "Renault|Zoe": 56
, "Mercedes-Benz|EQA": 55
, "Citroën|ë-C4": 51
, "Volvo|EC40": 48
, "Audi|Q8 e-tron": 46
, "Mini|Cooper SE": 46
, "Ford|Mustang Mach-E": 41
, "Renault|Twingo E-Tech": 37
, "Peugeot|e-2008": 36
, "Cupra|Born": 33
, "Dacia|Spring": 32
, "Kia|EV6": 28
, "Opel|Corsa-e": 28
, "Audi|e-tron GT": 27
, "BMW|iX": 24
, "Opel|Mokka-e": 22
, "BMW|iX3": 20
, "Mercedes-Benz|EQC": 18
, "Mercedes-Benz|EQS": 17
, "Kia|Niro EV": 16
, "Smart|Fortwo ED": 14
, "Jaguar|I-Pace": 13
, "Honda|e": 12
, "JAC|iEV7 S/E": 10
, "Mercedes-Benz|EQV": 10
, "Volkswagen|e-up!": 9
, "Škoda|Citigo-e": 8
, "Peugeot|e-Traveller": 6
, "Kia|Soul EV": 4
, "Opel|Zafira-e": 4
, "Renault|Megane E-Tech": 3
, "Smart|Forfour ED": 2
, "other": 96
});

db.insert(db.countries.CH, "2022-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 2214
, "BMW": 2108
, "Mercedes-Benz": 1651
, "Audi": 1572
, "Tesla": 1569
, "Škoda": 1251
, "Toyota": 1097
, "Dacia": 806
, "Hyundai": 785
, "Ford": 742
, "Renault": 709
, "Volvo": 700
, "Peugeot": 580
, "Opel": 564
, "Kia": 547
, "Porsche": 491
, "Seat": 457
, "Mazda": 425
, "Fiat": 418
, "Suzuki": 401
, "Cupra": 323
, "Mini": 319
, "Honda": 300
, "Citroën": 290
, "Subaru": 238
, "Mitsubishi": 223
, "Jeep": 180
, "Land Rover": 110
, "Nissan": 103
, "Polestar": 66
, "Jaguar": 53
, "Smart": 29
, "Genesis": 15
, "JAC": 11
, "other": 375
});

db.insert(db.countries.CH, "2022-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/3 (includes commercial vehicles)",
{ "Tesla|Model 3": 916
, "Tesla|Model Y": 652
, "Fiat|500e": 190
, "Hyundai|Ioniq 5": 176
, "Peugeot|e-208": 151
, "Volkswagen|ID.3": 139
, "Audi|Q4 e-tron": 116
, "BMW|i4": 110
, "Škoda|Enyaq": 108
, "Volkswagen|ID.4": 99
, "BMW|i3 BEV": 89
, "Hyundai|Kona Electric": 89
, "Volvo|EX40": 87
, "Dacia|Spring": 84
, "Volvo|EC40": 77
, "Audi|Q8 e-tron": 76
, "Ford|Mustang Mach-E": 66
, "Polestar|2": 66
, "Porsche|Taycan": 66
, "Renault|Zoe": 66
, "Mini|Cooper SE": 57
, "Kia|Niro EV": 54
, "Renault|Twingo E-Tech": 54
, "BMW|iX": 48
, "Audi|e-tron GT": 43
, "Kia|EV6": 37
, "Cupra|Born": 36
, "Mercedes-Benz|EQB": 36
, "BMW|iX3": 34
, "Opel|Corsa-e": 34
, "Opel|Mokka-e": 33
, "Honda|e": 32
, "Mercedes-Benz|EQA": 30
, "Mercedes-Benz|EQS": 27
, "Peugeot|e-2008": 26
, "Citroën|ë-C4": 23
, "Smart|Fortwo ED": 23
, "Volkswagen|e-up!": 23
, "Mercedes-Benz|EQC": 18
, "Opel|Zafira-e": 16
, "Mercedes-Benz|EQV": 13
, "JAC|iEV7 S/E": 11
, "Kia|Soul EV": 11
, "Nissan|Leaf": 11
, "Jaguar|I-Pace": 8
, "Renault|Megane E-Tech": 6
, "Škoda|Citigo-e": 6
, "Volkswagen|e-Transporter": 5
, "Smart|Forfour ED": 4
, "other": 136
});

db.insert(db.countries.CH, "2022-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "BMW": 1545
, "Volkswagen": 1526
, "Mercedes-Benz": 1406
, "Audi": 1285
, "Škoda": 1022
, "Toyota": 931
, "Hyundai": 702
, "Ford": 648
, "Peugeot": 600
, "Kia": 486
, "Seat": 462
, "Renault": 444
, "Volvo": 435
, "Dacia": 420
, "Mazda": 334
, "Porsche": 330
, "Suzuki": 320
, "Fiat": 295
, "Citroën": 277
, "Opel": 268
, "Cupra": 263
, "Mini": 254
, "Honda": 206
, "Nissan": 167
, "Land Rover": 131
, "Mitsubishi": 129
, "Subaru": 105
, "Jeep": 98
, "Polestar": 92
, "Tesla": 63
, "Jaguar": 40
, "Smart": 18
, "Genesis": 12
, "Chevrolet": 3
, "other": 329
});

db.insert(db.countries.CH, "2022-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/4 (includes commercial vehicles)",
{ "Fiat|500e": 160
, "Hyundai|Ioniq 5": 123
, "Volkswagen|ID.4": 111
, "Polestar|2": 92
, "Audi|Q8 e-tron": 89
, "Škoda|Enyaq": 87
, "Volvo|EC40": 86
, "Kia|EV6": 80
, "BMW|i3 BEV": 68
, "Dacia|Spring": 62
, "Renault|Zoe": 61
, "Peugeot|e-208": 60
, "Volvo|EX40": 59
, "Ford|Mustang Mach-E": 56
, "Tesla|Model Y": 55
, "Hyundai|Kona Electric": 54
, "Mercedes-Benz|EQE": 53
, "Volkswagen|ID.3": 47
, "Audi|Q4 e-tron": 46
, "BMW|iX": 46
, "Cupra|Born": 45
, "Mini|Cooper SE": 44
, "BMW|i4": 41
, "Mercedes-Benz|EQA": 39
, "Porsche|Taycan": 37
, "Renault|Twingo E-Tech": 37
, "Kia|Niro EV": 31
, "Citroën|ë-C4": 28
, "Opel|Corsa-e": 26
, "Volkswagen|e-up!": 26
, "Audi|e-tron GT": 24
, "BMW|iX3": 20
, "Honda|e": 17
, "Mercedes-Benz|EQB": 17
, "Smart|Fortwo ED": 15
, "Opel|Mokka-e": 13
, "Mercedes-Benz|EQS": 12
, "Nissan|Leaf": 12
, "Opel|Zafira-e": 9
, "Renault|Megane E-Tech": 8
, "Tesla|Model 3": 8
, "Kia|Soul EV": 7
, "Jaguar|I-Pace": 6
, "Mercedes-Benz|EQC": 6
, "Peugeot|e-2008": 6
, "Volkswagen|e-Transporter": 5
, "Mercedes-Benz|EQV": 4
, "Smart|Forfour ED": 3
, "Mazda|MX-30 BEV": 2
, "other": 76
});

db.insert(db.countries.CH, "2022-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 1947
, "BMW": 1784
, "Audi": 1688
, "Mercedes-Benz": 1525
, "Škoda": 1442
, "Toyota": 1008
, "Ford": 805
, "Hyundai": 681
, "Seat": 610
, "Peugeot": 603
, "Kia": 525
, "Renault": 508
, "Volvo": 431
, "Cupra": 419
, "Porsche": 380
, "Citroën": 370
, "Fiat": 355
, "Opel": 325
, "Suzuki": 311
, "Mini": 302
, "Dacia": 301
, "Mazda": 299
, "Tesla": 249
, "Honda": 209
, "Jeep": 202
, "Land Rover": 200
, "Mitsubishi": 176
, "Nissan": 157
, "Polestar": 91
, "Subaru": 90
, "Jaguar": 51
, "Genesis": 29
, "Smart": 29
, "Chevrolet": 5
, "other": 343
});

db.insert(db.countries.CH, "2022-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/5 (includes commercial vehicles)",
{ "Tesla|Model Y": 247
, "Cupra|Born": 179
, "Audi|Q4 e-tron": 132
, "Fiat|500e": 128
, "Škoda|Enyaq": 125
, "Audi|Q8 e-tron": 119
, "Hyundai|Ioniq 5": 116
, "Volkswagen|ID.4": 105
, "Volkswagen|ID.5": 98
, "Peugeot|e-208": 90
, "Polestar|2": 90
, "Volkswagen|ID.3": 77
, "BMW|iX": 75
, "Mercedes-Benz|EQA": 74
, "Volvo|EX40": 63
, "Porsche|Taycan": 56
, "BMW|i4": 55
, "Volvo|EC40": 54
, "Kia|EV6": 50
, "Mini|Cooper SE": 49
, "BMW|iX3": 46
, "Hyundai|Kona Electric": 46
, "Ford|Mustang Mach-E": 42
, "BMW|i3 BEV": 39
, "Kia|Niro EV": 39
, "Renault|Zoe": 39
, "Opel|Corsa-e": 38
, "Dacia|Spring": 31
, "Volkswagen|e-up!": 27
, "Smart|Fortwo ED": 26
, "Audi|e-tron GT": 25
, "Mercedes-Benz|EQS": 20
, "Citroën|ë-C4": 19
, "Kia|Soul EV": 17
, "Renault|Twingo E-Tech": 17
, "Mercedes-Benz|EQB": 16
, "Nissan|Leaf": 14
, "Mercedes-Benz|EQC": 12
, "Mercedes-Benz|EQE": 12
, "Jaguar|I-Pace": 11
, "Honda|e": 10
, "Opel|Mokka-e": 10
, "Genesis|GV60": 9
, "Opel|Zafira-e": 8
, "Peugeot|e-2008": 7
, "Mercedes-Benz|EQV": 5
, "Tesla|Model 3": 2
, "other": 99
});

db.insert(db.countries.CH, "2022-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 2050
, "Tesla": 1958
, "BMW": 1746
, "Mercedes-Benz": 1744
, "Škoda": 1602
, "Audi": 1541
, "Toyota": 1093
, "Dacia": 909
, "Ford": 711
, "Peugeot": 699
, "Renault": 646
, "Seat": 592
, "Kia": 579
, "Hyundai": 516
, "Cupra": 432
, "Porsche": 362
, "Opel": 336
, "Suzuki": 332
, "Citroën": 330
, "Fiat": 329
, "Mazda": 329
, "Mini": 329
, "Volvo": 318
, "Honda": 265
, "Mitsubishi": 209
, "Subaru": 208
, "Jeep": 188
, "Nissan": 167
, "Land Rover": 118
, "Jaguar": 61
, "Genesis": 60
, "Polestar": 44
, "Smart": 27
, "other": 447
});

db.insert(db.countries.CH, "2022-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/6 (includes commercial vehicles)",
{ "Tesla|Model 3": 1139
, "Tesla|Model Y": 819
, "Škoda|Enyaq": 240
, "Cupra|Born": 194
, "Volkswagen|ID.4": 173
, "Audi|Q8 e-tron": 129
, "Fiat|500e": 127
, "Renault|Megane E-Tech": 111
, "Audi|Q4 e-tron": 101
, "Volkswagen|ID.3": 100
, "Hyundai|Ioniq 5": 87
, "BMW|iX": 79
, "Renault|Zoe": 65
, "BMW|iX3": 64
, "Mercedes-Benz|EQA": 54
, "Ford|Mustang Mach-E": 51
, "Porsche|Taycan": 51
, "Volkswagen|ID.5": 50
, "Dacia|Spring": 46
, "Polestar|2": 44
, "Hyundai|Kona Electric": 40
, "BMW|i4": 39
, "Audi|e-tron GT": 36
, "Mercedes-Benz|EQB": 36
, "Citroën|ë-C4": 35
, "BMW|i3 BEV": 32
, "Kia|EV6": 32
, "Kia|Niro EV": 32
, "Mini|Cooper SE": 31
, "Volvo|EC40": 29
, "Peugeot|e-208": 28
, "Opel|Mokka-e": 27
, "Smart|Fortwo ED": 25
, "Renault|Twingo E-Tech": 21
, "Volvo|EX40": 21
, "Genesis|GV60": 20
, "Honda|e": 20
, "Nissan|Leaf": 18
, "Volkswagen|e-up!": 17
, "Mercedes-Benz|EQS": 15
, "Opel|Corsa-e": 15
, "Peugeot|e-2008": 13
, "Mercedes-Benz|EQC": 11
, "Kia|Soul EV": 10
, "Mercedes-Benz|EQV": 10
, "Opel|Zafira-e": 10
, "Subaru|Solterra": 8
, "Genesis|G80": 7
, "Jaguar|I-Pace": 5
, "Toyota|bZ4X": 5
, "Mercedes-Benz|other": 3
, "other": 130
});

db.insert(db.countries.CH, "2022-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 2079
, "Mercedes-Benz": 1477
, "Škoda": 1263
, "Audi": 1186
, "BMW": 1102
, "Toyota": 797
, "Hyundai": 617
, "Dacia": 603
, "Ford": 563
, "Volvo": 496
, "Seat": 492
, "Peugeot": 446
, "Kia": 420
, "Opel": 415
, "Renault": 386
, "Cupra": 369
, "Fiat": 329
, "Mini": 296
, "Porsche": 294
, "Citroën": 273
, "Mazda": 225
, "Suzuki": 195
, "Land Rover": 160
, "Jeep": 145
, "Mitsubishi": 118
, "Nissan": 107
, "Tesla": 80
, "Honda": 79
, "Subaru": 65
, "Jaguar": 53
, "Polestar": 48
, "Genesis": 47
, "Smart": 28
, "Chevrolet": 3
, "other": 398
});

db.insert(db.countries.CH, "2022-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/7 (includes commercial vehicles)",
{ "Škoda|Enyaq": 223
, "Cupra|Born": 139
, "Ford|Mustang Mach-E": 137
, "Fiat|500e": 130
, "Volkswagen|ID.4": 88
, "Audi|Q4 e-tron": 87
, "Hyundai|Ioniq 5": 82
, "Audi|Q8 e-tron": 76
, "Renault|Zoe": 61
, "Tesla|Model Y": 61
, "Mercedes-Benz|EQA": 58
, "Renault|Megane E-Tech": 52
, "Volkswagen|ID.3": 48
, "Polestar|2": 47
, "Citroën|ë-C4": 43
, "Opel|Mokka-e": 39
, "Kia|EV6": 33
, "Dacia|Spring": 32
, "Mercedes-Benz|EQS": 30
, "Mini|Cooper SE": 30
, "Mercedes-Benz|EQC": 29
, "Volkswagen|ID.5": 29
, "Porsche|Taycan": 28
, "Smart|Fortwo ED": 28
, "BMW|i3 BEV": 27
, "BMW|i4": 27
, "Peugeot|e-208": 27
, "Audi|e-tron GT": 24
, "BMW|iX": 24
, "Mercedes-Benz|EQB": 24
, "Hyundai|Kona Electric": 22
, "Volkswagen|e-up!": 20
, "Nissan|Leaf": 19
, "Tesla|Model 3": 19
, "Volvo|EX40": 19
, "Volvo|EC40": 15
, "Jaguar|I-Pace": 9
, "Mercedes-Benz|EQE": 9
, "Honda|e": 8
, "Opel|Corsa-e": 8
, "Subaru|Solterra": 8
, "BMW|iX3": 7
, "Mercedes-Benz|EQV": 7
, "Renault|Twingo E-Tech": 7
, "Kia|Niro EV": 6
, "Kia|Soul EV": 6
, "Genesis|G80": 4
, "Genesis|GV60": 4
, "Peugeot|e-2008": 4
, "Opel|Zafira-e": 3
, "other": 68
});

db.insert(db.countries.CH, "2022-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 1884
, "BMW": 1534
, "Mercedes-Benz": 1422
, "Audi": 1368
, "Škoda": 1325
, "Toyota": 851
, "Dacia": 787
, "Ford": 773
, "Seat": 605
, "Hyundai": 520
, "Peugeot": 452
, "Fiat": 436
, "Kia": 375
, "Cupra": 368
, "Renault": 366
, "Mazda": 339
, "Opel": 329
, "Mini": 305
, "Tesla": 286
, "Volvo": 269
, "Suzuki": 232
, "Citroën": 218
, "Porsche": 186
, "Honda": 153
, "Mitsubishi": 140
, "Land Rover": 127
, "Jeep": 96
, "Subaru": 79
, "Nissan": 77
, "Polestar": 45
, "Genesis": 38
, "Jaguar": 33
, "Smart": 11
, "Chevrolet": 4
, "other": 372
});

db.insert(db.countries.CH, "2022-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/8 (includes commercial vehicles)",
{ "Škoda|Enyaq": 268
, "Tesla|Model Y": 245
, "Cupra|Born": 144
, "Audi|Q4 e-tron": 136
, "Fiat|500e": 123
, "Volkswagen|ID.4": 116
, "BMW|iX": 106
, "Renault|Megane E-Tech": 98
, "Ford|Mustang Mach-E": 68
, "Volkswagen|ID.3": 60
, "Hyundai|Ioniq 5": 55
, "BMW|i4": 53
, "Renault|Zoe": 52
, "Polestar|2": 45
, "Mercedes-Benz|EQA": 43
, "Tesla|Model 3": 41
, "Audi|Q8 e-tron": 40
, "Dacia|Spring": 40
, "Mini|Cooper SE": 40
, "Peugeot|e-208": 40
, "Mercedes-Benz|EQC": 39
, "Volkswagen|ID.5": 32
, "BMW|i3 BEV": 27
, "Mercedes-Benz|EQS": 26
, "BMW|iX3": 24
, "Honda|e": 23
, "Porsche|Taycan": 23
, "Kia|Niro EV": 21
, "Mercedes-Benz|EQB": 20
, "Opel|Mokka-e": 20
, "Volkswagen|e-up!": 19
, "Kia|EV6": 17
, "Hyundai|Kona Electric": 15
, "Mercedes-Benz|EQE": 15
, "Volvo|EC40": 11
, "Renault|Twingo E-Tech": 9
, "Smart|Fortwo ED": 9
, "Citroën|ë-C4": 8
, "Jaguar|I-Pace": 8
, "Fiat|E-Ulysse": 7
, "Mercedes-Benz|EQV": 7
, "Opel|Corsa-e": 7
, "Peugeot|e-2008": 7
, "Genesis|GV60": 6
, "Genesis|GV70": 6
, "Nissan|Leaf": 6
, "Kia|Soul EV": 5
, "Audi|e-tron GT": 4
, "Genesis|G80": 4
, "Volvo|EX40": 3
, "Smart|other": 2
, "other": 64
});

db.insert(db.countries.CH, "2022-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 2052
, "Mercedes-Benz": 1946
, "Tesla": 1796
, "BMW": 1676
, "Škoda": 1483
, "Audi": 1434
, "Toyota": 1098
, "Ford": 970
, "Dacia": 856
, "Renault": 688
, "Kia": 645
, "Hyundai": 561
, "Peugeot": 551
, "Seat": 468
, "Mazda": 462
, "Fiat": 417
, "Cupra": 413
, "Volvo": 392
, "Mini": 379
, "Opel": 371
, "Porsche": 364
, "Suzuki": 303
, "Citroën": 212
, "Mitsubishi": 182
, "Honda": 170
, "Jeep": 144
, "Nissan": 143
, "Subaru": 114
, "Land Rover": 109
, "Jaguar": 66
, "Polestar": 56
, "Genesis": 50
, "Smart": 14
, "Chevrolet": 3
, "other": 360
});

db.insert(db.countries.CH, "2022-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/9 (includes commercial vehicles)",
{ "Tesla|Model Y": 979
, "Tesla|Model 3": 817
, "Škoda|Enyaq": 238
, "Renault|Megane E-Tech": 190
, "Audi|Q4 e-tron": 153
, "Volkswagen|ID.3": 132
, "Cupra|Born": 126
, "Volkswagen|ID.4": 125
, "Fiat|500e": 117
, "Volvo|EC40": 94
, "Mercedes-Benz|EQA": 87
, "Audi|Q8 e-tron": 74
, "BMW|i3 BEV": 67
, "Dacia|Spring": 60
, "Polestar|2": 56
, "BMW|i4": 55
, "Ford|Mustang Mach-E": 55
, "BMW|iX": 54
, "Renault|Twingo E-Tech": 51
, "Kia|Niro EV": 49
, "Opel|Mokka-e": 47
, "Mercedes-Benz|EQC": 43
, "Volkswagen|ID.5": 41
, "BMW|iX3": 38
, "Mercedes-Benz|EQB": 36
, "Mini|Cooper SE": 31
, "Hyundai|Kona Electric": 30
, "Hyundai|Ioniq 5": 27
, "Peugeot|e-208": 26
, "Renault|Zoe": 21
, "Nissan|Ariya": 18
, "Mercedes-Benz|EQE": 17
, "Mercedes-Benz|EQS": 17
, "Peugeot|e-2008": 17
, "Kia|EV6": 16
, "Subaru|Solterra": 16
, "Volkswagen|e-up!": 15
, "Volvo|EX40": 14
, "Genesis|GV60": 12
, "Smart|Fortwo ED": 11
, "Genesis|GV70": 10
, "Nissan|Leaf": 10
, "Opel|Corsa-e": 9
, "Porsche|Taycan": 9
, "Audi|e-tron GT": 7
, "Citroën|ë-C4": 7
, "Jaguar|I-Pace": 6
, "Opel|Zafira-e": 5
, "Honda|e": 4
, "Mercedes-Benz|EQV": 4
, "Toyota|other": 3
, "other": 132
});

db.insert(db.countries.CH, "2022-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 2057
, "Audi": 1481
, "Mercedes-Benz": 1419
, "BMW": 1394
, "Škoda": 1319
, "Toyota": 1241
, "Ford": 818
, "Renault": 708
, "Seat": 518
, "Hyundai": 512
, "Dacia": 508
, "Kia": 507
, "Cupra": 484
, "Volvo": 423
, "Mazda": 421
, "Peugeot": 380
, "Suzuki": 341
, "Porsche": 298
, "Mini": 272
, "Fiat": 245
, "Citroën": 242
, "Opel": 232
, "Honda": 183
, "Nissan": 176
, "Mitsubishi": 133
, "Land Rover": 119
, "Subaru": 93
, "Jeep": 80
, "Polestar": 62
, "Genesis": 39
, "Jaguar": 38
, "Tesla": 31
, "Smart": 18
, "Chevrolet": 2
, "other": 391
});

db.insert(db.countries.CH, "2022-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/10 (includes commercial vehicles)",
{ "Škoda|Enyaq": 251
, "Volkswagen|ID.3": 195
, "Audi|Q4 e-tron": 186
, "Cupra|Born": 148
, "Renault|Megane E-Tech": 125
, "Mercedes-Benz|EQA": 110
, "Audi|Q8 e-tron": 91
, "Volkswagen|ID.4": 91
, "Fiat|500e": 71
, "Hyundai|Ioniq 5": 67
, "BMW|i4": 65
, "Polestar|2": 62
, "Ford|Mustang Mach-E": 59
, "Volkswagen|ID.5": 49
, "Hyundai|Kona Electric": 45
, "Mercedes-Benz|EQB": 41
, "Renault|Zoe": 41
, "Peugeot|e-208": 38
, "Mercedes-Benz|EQC": 37
, "Volvo|EC40": 34
, "Volvo|EX40": 34
, "Renault|Twingo E-Tech": 33
, "BMW|iX": 31
, "BMW|iX3": 31
, "Mini|Cooper SE": 29
, "Toyota|bZ4X": 29
, "Opel|Mokka-e": 26
, "Dacia|Spring": 25
, "Tesla|Model Y": 25
, "Porsche|Taycan": 22
, "Citroën|ë-C4": 19
, "Smart|Fortwo ED": 18
, "Audi|e-tron GT": 17
, "Nissan|Ariya": 17
, "Genesis|GV60": 16
, "Kia|Niro EV": 16
, "Mercedes-Benz|EQE": 15
, "Subaru|Solterra": 15
, "Mercedes-Benz|EQS": 14
, "Kia|EV6": 12
, "Nissan|Leaf": 12
, "BMW|i3 BEV": 11
, "Volkswagen|e-up!": 10
, "Genesis|GV70": 9
, "Peugeot|e-2008": 8
, "Jaguar|I-Pace": 7
, "Opel|Corsa-e": 7
, "Tesla|Model 3": 6
, "Mazda|MX-30 BEV": 5
, "Honda|e": 3
, "Genesis|other": 2
, "Mercedes-Benz|other": 2
, "Opel|other": 2
, "other": 63
});

db.insert(db.countries.CH, "2022-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 2714
, "BMW": 1956
, "Audi": 1808
, "Škoda": 1594
, "Mercedes-Benz": 1571
, "Toyota": 1209
, "Ford": 957
, "Renault": 870
, "Tesla": 800
, "Dacia": 723
, "Hyundai": 643
, "Volvo": 552
, "Seat": 542
, "Opel": 506
, "Kia": 488
, "Peugeot": 454
, "Fiat": 378
, "Citroën": 376
, "Porsche": 342
, "Cupra": 339
, "Mini": 319
, "Mazda": 314
, "Suzuki": 304
, "Honda": 278
, "Nissan": 199
, "Land Rover": 153
, "Mitsubishi": 143
, "Subaru": 134
, "Jeep": 130
, "Genesis": 65
, "Polestar": 54
, "Jaguar": 37
, "Smart": 22
, "Chevrolet": 7
, "JAC": 5
, "other": 420
});

db.insert(db.countries.CH, "2022-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/11 (includes commercial vehicles)",
{ "Tesla|Model Y": 736
, "Škoda|Enyaq": 524
, "Volkswagen|ID.3": 234
, "Renault|Megane E-Tech": 215
, "Hyundai|Ioniq 5": 203
, "Volkswagen|ID.4": 181
, "Audi|Q4 e-tron": 169
, "Cupra|Born": 143
, "Mercedes-Benz|EQA": 131
, "Fiat|500e": 124
, "BMW|i4": 88
, "Porsche|Taycan": 86
, "Volvo|EC40": 83
, "BMW|iX": 72
, "Peugeot|e-208": 71
, "Subaru|Solterra": 70
, "Ford|Mustang Mach-E": 68
, "Volkswagen|ID.5": 63
, "Tesla|Model 3": 61
, "Opel|Mokka-e": 57
, "Dacia|Spring": 56
, "Polestar|2": 54
, "Toyota|bZ4X": 44
, "Volvo|EX40": 44
, "Genesis|GV60": 43
, "Audi|e-tron GT": 42
, "Audi|Q8 e-tron": 38
, "Mercedes-Benz|EQB": 37
, "Hyundai|Kona Electric": 35
, "Mercedes-Benz|EQC": 32
, "Citroën|ë-C4": 25
, "Mercedes-Benz|EQE": 22
, "Smart|Fortwo ED": 22
, "Kia|Niro EV": 20
, "Mini|Cooper SE": 20
, "Renault|Twingo E-Tech": 20
, "Volkswagen|e-up!": 19
, "Fiat|E-Doblò": 15
, "Kia|EV6": 15
, "Renault|Zoe": 15
, "Honda|e": 13
, "Nissan|Ariya": 13
, "Opel|Corsa-e": 13
, "BMW|iX3": 12
, "Nissan|Leaf": 12
, "Peugeot|e-2008": 12
, "Mercedes-Benz|EQS": 11
, "BMW|i7": 8
, "BMW|i3 BEV": 7
, "Genesis|GV70": 6
, "Opel|Zafira-e": 6
, "JAC|other": 5
, "Jaguar|other": 4
, "other": 122
});

db.insert(db.countries.CH, "2022-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2023/01/ModellePW2022.xlsx",
{ "Volkswagen": 3655
, "BMW": 2283
, "Mercedes-Benz": 2218
, "Škoda": 2074
, "Audi": 2020
, "Tesla": 1499
, "Renault": 1040
, "Toyota": 948
, "Ford": 818
, "Dacia": 736
, "Hyundai": 645
, "Seat": 602
, "Porsche": 557
, "Suzuki": 540
, "Kia": 523
, "Volvo": 507
, "Cupra": 466
, "Mini": 382
, "Mazda": 340
, "Opel": 334
, "Fiat": 316
, "Peugeot": 292
, "Nissan": 208
, "Citroën": 181
, "Jeep": 167
, "Honda": 154
, "Polestar": 145
, "Land Rover": 132
, "Mitsubishi": 130
, "Subaru": 101
, "Genesis": 93
, "JAC": 42
, "Jaguar": 32
, "Smart": 26
, "Chevrolet": 13
, "other": 518
});

db.insert(db.countries.CH, "2022-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2022/12 (includes commercial vehicles)",
{ "Tesla|Model Y": 846
, "Škoda|Enyaq": 791
, "Volkswagen|ID.3": 489
, "Tesla|Model 3": 380
, "Renault|Megane E-Tech": 336
, "Cupra|Born": 316
, "Volkswagen|ID.4": 313
, "Audi|Q4 e-tron": 290
, "Mercedes-Benz|EQA": 224
, "Tesla|Model S": 180
, "Volkswagen|ID.5": 180
, "Hyundai|Ioniq 5": 178
, "Audi|Q8 e-tron": 161
, "Polestar|2": 145
, "BMW|i4": 141
, "Fiat|500e": 127
, "Volvo|EC40": 115
, "BMW|iX": 104
, "Dacia|Spring": 101
, "Tesla|Model X": 92
, "Porsche|Taycan": 83
, "BMW|iX3": 73
, "Renault|Zoe": 73
, "Volkswagen|e-up!": 73
, "Audi|e-tron GT": 63
, "Mercedes-Benz|EQS": 60
, "Renault|Twingo E-Tech": 60
, "Ford|Mustang Mach-E": 57
, "Genesis|GV60": 57
, "Mercedes-Benz|EQC": 56
, "Opel|Mokka-e": 47
, "Kia|Niro EV": 43
, "JAC|e-JS4": 42
, "Mini|Cooper SE": 42
, "BMW|iX1": 32
, "Mercedes-Benz|EQE": 27
, "Peugeot|e-208": 27
, "Mercedes-Benz|EQV": 25
, "Smart|Fortwo ED": 24
, "Mercedes-Benz|EQB": 23
, "Subaru|Solterra": 20
, "Kia|EV6": 18
, "Volvo|EX40": 18
, "Opel|Zafira-e": 17
, "Fiat|E-Doblò": 15
, "Genesis|GV70": 14
, "Toyota|bZ4X": 14
, "Hyundai|Kona Electric": 11
, "Nissan|Ariya": 11
, "Honda|e": 7
, "Nissan|Leaf": 7
, "BMW|other": 10
, "Opel|other": 6
, "Peugeot|other": 6
, "Citroën|other": 5
, "Jaguar|other": 5
, "other": 148
});

db.insert(db.countries.CH, "2023-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 1742
, "Škoda": 1623
, "Audi": 1384
, "BMW": 1358
, "Mercedes-Benz": 1314
, "Toyota": 1172
, "Renault": 674
, "Ford": 626
, "Hyundai": 626
, "Dacia": 549
, "Volvo": 541
, "Peugeot": 498
, "Porsche": 485
, "Kia": 483
, "Seat": 447
, "Cupra": 331
, "Mazda": 301
, "Opel": 230
, "Suzuki": 227
, "Mini": 213
, "Fiat": 189
, "Citroën": 176
, "Honda": 152
, "Land Rover": 136
, "Jeep": 115
, "Tesla": 115
, "Mitsubishi": 96
, "Nissan": 89
, "Subaru": 67
, "Polestar": 50
, "Genesis": 41
, "Jaguar": 18
, "Smart": 13
, "JAC": 8
, "Chevrolet": 4
, "other": 344
});

db.insert(db.countries.CH, "2023-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/1 (includes commercial vehicles), https://www.acea.auto/files/20230221_PRPC_2301_FINAL.pdf",
{ "Škoda|Enyaq": 338
, "Audi|Q4 e-tron": 203
, "Hyundai|Ioniq 5": 184
, "Volkswagen|ID.4": 178
, "Cupra|Born": 139
, "Mercedes-Benz|EQA": 134
, "Volkswagen|ID.3": 128
, "Volvo|EC40": 105
, "Renault|Zoe": 101
, "Renault|Megane E-Tech": 92
, "Peugeot|e-208": 91
, "Ford|Mustang Mach-E": 75
, "Porsche|Taycan": 74
, "Tesla|Model Y": 73
, "Audi|Q8 e-tron": 60
, "Opel|Mokka-e": 58
, "Toyota|bZ4X": 54
, "Fiat|500e": 50
, "Polestar|2": 50
, "BMW|i4": 46
, "Citroën|ë-C4": 43
, "Renault|Twingo E-Tech": 42
, "Dacia|Spring": 34
, "BMW|iX": 29
, "Audi|e-tron GT": 28
, "Tesla|Model S": 25
, "Mercedes-Benz|EQC": 22
, "BMW|iX3": 21
, "Kia|Niro EV": 21
, "Mercedes-Benz|EQS": 20
, "Mercedes-Benz|EQE": 19
, "Volkswagen|ID.5": 17
, "Mercedes-Benz|EQB": 15
, "BMW|iX1": 14
, "Genesis|G80": 14
, "Mini|Cooper SE": 14
, "Subaru|Solterra": 14
, "Volkswagen|e-up!": 14
, "Smart|Fortwo ED": 13
, "Volvo|EX40": 13
, "Genesis|GV60": 12
, "Genesis|GV70": 11
, "Nissan|Ariya": 11
, "Kia|EV6": 10
, "Tesla|Model X": 10
, "Peugeot|e-2008": 9
, "BMW|i7": 8
, "JAC|e-JS4": 8
, "Opel|Corsa-e": 8
, "Tesla|Model 3": 7
, "Honda|other": 4
, "Hyundai|other": 4
, "Mercedes-Benz|other": 4
, "Nissan|other": 4
, "Kia|other": 3
, "Mazda|other": 3
, "Jaguar|other": 2
, "Peugeot|other": 2
, "other": 55
});

db.insert(db.countries.CH, "2023-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 1870
, "Audi": 1524
, "Škoda": 1507
, "Mercedes-Benz": 1456
, "BMW": 1393
, "Toyota": 1006
, "Ford": 866
, "Dacia": 739
, "Volvo": 646
, "Seat": 579
, "Renault": 539
, "Hyundai": 475
, "Kia": 460
, "Peugeot": 401
, "Porsche": 399
, "Cupra": 370
, "Fiat": 251
, "Jeep": 249
, "Mazda": 244
, "Mini": 244
, "Suzuki": 233
, "Opel": 231
, "Honda": 204
, "Citroën": 195
, "Tesla": 195
, "Land Rover": 144
, "Nissan": 135
, "Mitsubishi": 92
, "Subaru": 89
, "Polestar": 51
, "Jaguar": 37
, "Genesis": 35
, "Smart": 15
, "JAC": 13
, "Chevrolet": 6
, "other": 305
});

db.insert(db.countries.CH, "2023-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/2 (includes commercial vehicles), https://www.acea.auto/files/20230321_PRPC_2302-FINAL.pdf",
{ "Volvo|EX40": 269
, "Audi|Q4 e-tron": 264
, "Škoda|Enyaq": 201
, "Tesla|Model Y": 190
, "Volkswagen|ID.3": 171
, "Fiat|500e": 135
, "Cupra|Born": 112
, "Hyundai|Ioniq 5": 110
, "Mercedes-Benz|EQA": 97
, "Volkswagen|ID.4": 82
, "Volvo|EC40": 58
, "Peugeot|e-208": 56
, "Renault|Megane E-Tech": 53
, "Polestar|2": 51
, "BMW|iX1": 41
, "BMW|i4": 40
, "Dacia|Spring": 38
, "Volkswagen|ID.5": 38
, "Porsche|Taycan": 36
, "Renault|Zoe": 36
, "Ford|Mustang Mach-E": 35
, "Opel|Mokka-e": 33
, "Mini|Cooper SE": 24
, "Toyota|bZ4X": 23
, "Kia|EV6": 22
, "Citroën|ë-C4": 21
, "BMW|iX3": 18
, "Mercedes-Benz|EQC": 18
, "Audi|Q8 e-tron": 17
, "BMW|iX": 17
, "Mercedes-Benz|EQB": 15
, "Subaru|Solterra": 15
, "Kia|Niro EV": 14
, "Mercedes-Benz|EQS": 14
, "Opel|Corsa-e": 14
, "Renault|Twingo E-Tech": 14
, "Smart|Fortwo ED": 14
, "Volkswagen|e-up!": 14
, "JAC|e-JS4": 13
, "Mercedes-Benz|EQV": 13
, "Genesis|GV60": 12
, "Peugeot|e-2008": 11
, "Nissan|Ariya": 10
, "Genesis|GV70": 9
, "Mercedes-Benz|EQE": 8
, "Nissan|Leaf": 7
, "Audi|e-tron GT": 6
, "Honda|e": 6
, "Kia|Soul EV": 4
, "BMW|i7": 3
, "Hyundai|Kona Electric": 3
, "Tesla|Model 3": 3
, "Fiat|other": 2
, "Tesla|other": 2
, "other": 66
});

db.insert(db.countries.CH, "2023-03", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 2525
, "Mercedes-Benz": 2206
, "BMW": 2195
, "Audi": 1883
, "Škoda": 1697
, "Toyota": 1304
, "Tesla": 1252
, "Ford": 1096
, "Dacia": 932
, "Hyundai": 865
, "Volvo": 755
, "Renault": 722
, "Kia": 686
, "Peugeot": 665
, "Seat": 627
, "Mazda": 576
, "Cupra": 519
, "Porsche": 459
, "Mini": 453
, "Suzuki": 414
, "Citroën": 406
, "Fiat": 405
, "Nissan": 384
, "Opel": 357
, "Jeep": 294
, "Mitsubishi": 222
, "Subaru": 213
, "Honda": 190
, "Land Rover": 181
, "Jaguar": 58
, "Genesis": 52
, "Smart": 32
, "Polestar": 26
, "JAC": 23
, "Chevrolet": 8
, "other": 502
});

db.insert(db.countries.CH, "2023-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/3 (includes commercial vehicles), https://www.acea.auto/files/20230419_PRPC_2303-FINAL.pdf",
{ "Tesla|Model Y": 922
, "Tesla|Model 3": 254
, "Volvo|EX40": 254
, "Škoda|Enyaq": 250
, "Audi|Q4 e-tron": 219
, "Hyundai|Ioniq 5": 218
, "Cupra|Born": 217
, "Volkswagen|ID.3": 206
, "Fiat|500e": 186
, "Volkswagen|ID.4": 185
, "Mercedes-Benz|EQA": 110
, "Renault|Megane E-Tech": 94
, "BMW|iX1": 93
, "Audi|Q8 e-tron": 87
, "Ford|Mustang Mach-E": 82
, "Volvo|EC40": 82
, "BMW|i4": 69
, "Renault|Zoe": 63
, "Mercedes-Benz|EQC": 57
, "Peugeot|e-208": 53
, "Mini|Cooper SE": 51
, "Volkswagen|ID.5": 50
, "Kia|EV6": 41
, "Tesla|Model X": 38
, "Toyota|bZ4X": 37
, "BMW|iX3": 36
, "Opel|Corsa-e": 36
, "Citroën|ë-C4": 35
, "Genesis|GV60": 35
, "Mercedes-Benz|EQS": 35
, "Tesla|Model S": 35
, "Volkswagen|e-up!": 35
, "Renault|Twingo E-Tech": 34
, "BMW|iX": 32
, "Kia|Niro EV": 32
, "Peugeot|e-2008": 32
, "Smart|Fortwo ED": 32
, "Hyundai|Ioniq 6": 31
, "Hyundai|Kona Electric": 30
, "Dacia|Spring": 29
, "Mercedes-Benz|EQE": 29
, "Mercedes-Benz|EQB": 28
, "Polestar|2": 26
, "Porsche|Taycan": 26
, "Fiat|E-Doblò": 24
, "JAC|e-JS4": 23
, "Opel|Mokka-e": 23
, "Audi|e-tron GT": 18
, "Subaru|Solterra": 18
, "Nissan|Leaf": 16
, "Jaguar|other": 14
, "Nissan|other": 11
, "Genesis|other": 10
, "BMW|other": 9
, "Mercedes-Benz|other": 7
, "Peugeot|other": 5
, "Honda|other": 3
, "Kia|other": 3
, "other": 102
});

db.insert(db.countries.CH, "2023-04", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 1801
, "Audi": 1722
, "Mercedes-Benz": 1672
, "Škoda": 1630
, "BMW": 1422
, "Toyota": 1013
, "Ford": 842
, "Hyundai": 620
, "Renault": 565
, "Seat": 538
, "Volvo": 493
, "Kia": 475
, "Tesla": 475
, "Dacia": 450
, "Porsche": 442
, "Cupra": 435
, "Suzuki": 401
, "Mazda": 383
, "Fiat": 330
, "Mini": 318
, "Peugeot": 251
, "Opel": 234
, "Mitsubishi": 184
, "Land Rover": 177
, "Nissan": 177
, "Jeep": 146
, "Subaru": 120
, "Honda": 119
, "Citroën": 93
, "Polestar": 65
, "Genesis": 44
, "Jaguar": 31
, "Smart": 19
, "JAC": 10
, "Chevrolet": 6
, "other": 446
});

db.insert(db.countries.CH, "2023-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/4 (includes commercial vehicles), https://www.acea.auto/files/20230517_PRPC_2304_FINAL.pdf",
{ "Škoda|Enyaq": 342
, "Audi|Q4 e-tron": 305
, "Tesla|Model Y": 302
, "Fiat|500e": 185
, "Cupra|Born": 175
, "Volkswagen|ID.3": 146
, "Mercedes-Benz|EQA": 138
, "Volkswagen|ID.4": 129
, "Volvo|EX40": 118
, "Hyundai|Ioniq 5": 106
, "Tesla|Model 3": 94
, "Renault|Megane E-Tech": 86
, "Polestar|2": 65
, "Volvo|EC40": 64
, "Ford|Mustang Mach-E": 59
, "Toyota|bZ4X": 58
, "Volkswagen|ID.5": 57
, "Dacia|Spring": 54
, "Audi|Q8 e-tron": 53
, "BMW|iX1": 50
, "Tesla|Model X": 43
, "Kia|Niro EV": 40
, "Kia|EV6": 39
, "Porsche|Taycan": 39
, "BMW|i4": 38
, "Renault|Zoe": 35
, "Peugeot|e-208": 31
, "Hyundai|Kona Electric": 30
, "Tesla|Model S": 30
, "Mercedes-Benz|EQS": 27
, "Hyundai|Ioniq 6": 26
, "BMW|iX": 22
, "Opel|Mokka-e": 22
, "Genesis|GV60": 21
, "Mercedes-Benz|EQB": 21
, "Mercedes-Benz|EQC": 19
, "Opel|Corsa-e": 18
, "Renault|Twingo E-Tech": 18
, "Smart|Fortwo ED": 17
, "BMW|iX3": 16
, "Mini|Cooper SE": 16
, "Genesis|GV70": 14
, "Mercedes-Benz|EQV": 13
, "Audi|e-tron GT": 12
, "Mercedes-Benz|EQE": 12
, "Volkswagen|e-up!": 11
, "BMW|i7": 10
, "JAC|e-JS4": 10
, "Peugeot|e-2008": 10
, "Subaru|Solterra": 10
, "Nissan|other": 10
, "Honda|other": 8
, "Kia|other": 7
, "Fiat|other": 6
, "Peugeot|other": 4
, "Genesis|other": 3
, "other": 81
});

db.insert(db.countries.CH, "2023-05", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 2232
, "Škoda": 2106
, "Audi": 1793
, "BMW": 1748
, "Mercedes-Benz": 1601
, "Toyota": 989
, "Ford": 941
, "Tesla": 919
, "Hyundai": 711
, "Renault": 695
, "Seat": 642
, "Dacia": 582
, "Volvo": 535
, "Kia": 484
, "Opel": 461
, "Peugeot": 453
, "Suzuki": 426
, "Nissan": 418
, "Mini": 414
, "Fiat": 413
, "Cupra": 394
, "Porsche": 365
, "Mazda": 355
, "Citroën": 227
, "Jeep": 178
, "Subaru": 172
, "Honda": 158
, "Mitsubishi": 153
, "Land Rover": 139
, "Polestar": 104
, "Genesis": 89
, "Jaguar": 33
, "Smart": 29
, "JAC": 17
, "Chevrolet": 5
, "other": 589
});

db.insert(db.countries.CH, "2023-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/5 (includes commercial vehicles), https://www.acea.auto/files/20230621_PRPC_2305_FINAL.pdf",
{ "Tesla|Model Y": 576
, "Škoda|Enyaq": 365
, "Audi|Q4 e-tron": 256
, "Volkswagen|ID.3": 220
, "Cupra|Born": 172
, "Tesla|Model 3": 158
, "Fiat|500e": 152
, "Audi|Q8 e-tron": 147
, "Volkswagen|ID.4": 140
, "BMW|iX1": 138
, "Volvo|EX40": 126
, "Mercedes-Benz|EQA": 123
, "Hyundai|Ioniq 5": 119
, "Polestar|2": 104
, "Tesla|Model S": 102
, "Renault|Megane E-Tech": 94
, "Tesla|Model X": 81
, "Ford|Mustang Mach-E": 74
, "Toyota|bZ4X": 74
, "BMW|i4": 57
, "Hyundai|Kona Electric": 57
, "Renault|Zoe": 55
, "Volkswagen|ID.5": 51
, "Volvo|EC40": 51
, "Mini|Cooper SE": 49
, "Porsche|Taycan": 40
, "BMW|iX": 39
, "Genesis|GV60": 31
, "Mercedes-Benz|EQS": 31
, "Mercedes-Benz|EQB": 30
, "Subaru|Solterra": 30
, "Kia|EV6": 29
, "Opel|Mokka-e": 28
, "Mercedes-Benz|EQC": 27
, "Peugeot|e-208": 27
, "Genesis|GV70": 25
, "Smart|Fortwo ED": 25
, "Opel|Corsa-e": 24
, "Hyundai|Ioniq 6": 21
, "Volkswagen|e-up!": 20
, "Peugeot|e-2008": 18
, "Citroën|ë-C4": 17
, "JAC|e-JS4": 17
, "Kia|Niro EV": 17
, "Honda|e": 16
, "Mercedes-Benz|EQE": 15
, "Renault|Twingo E-Tech": 15
, "Audi|e-tron GT": 11
, "BMW|i7": 10
, "Dacia|Spring": 10
, "Nissan|other": 11
, "BMW|other": 9
, "Fiat|other": 8
, "Genesis|other": 5
, "Jeep|other": 5
, "Mercedes-Benz|other": 5
, "Opel|other": 5
, "Jaguar|other": 4
, "Kia|other": 4
, "Peugeot|other": 4
, "Smart|other": 4
, "Mazda|other": 3
, "other": 132
});

db.insert(db.countries.CH, "2023-06", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 2681
, "Škoda": 2043
, "Mercedes-Benz": 1984
, "BMW": 1926
, "Audi": 1881
, "Tesla": 1374
, "Toyota": 1200
, "Renault": 1125
, "Ford": 977
, "Volvo": 798
, "Hyundai": 771
, "Kia": 710
, "Seat": 688
, "Dacia": 681
, "Suzuki": 636
, "Cupra": 528
, "Opel": 481
, "Peugeot": 444
, "Fiat": 443
, "Mazda": 442
, "Porsche": 393
, "Mini": 385
, "Nissan": 378
, "Citroën": 318
, "Jeep": 214
, "Land Rover": 203
, "Mitsubishi": 196
, "Subaru": 188
, "Honda": 187
, "Genesis": 80
, "Polestar": 79
, "Smart": 34
, "Jaguar": 30
, "Chevrolet": 13
, "JAC": 9
, "other": 694
});

db.insert(db.countries.CH, "2023-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/6 (includes commercial vehicles), https://www.acea.auto/files/20230719_PRPC_2306-FINAL.pdf",
{ "Tesla|Model Y": 948
, "Škoda|Enyaq": 370
, "Tesla|Model 3": 321
, "Volkswagen|ID.3": 302
, "Audi|Q4 e-tron": 238
, "Fiat|500e": 206
, "Cupra|Born": 184
, "Renault|Megane E-Tech": 164
, "Audi|Q8 e-tron": 148
, "Volkswagen|ID.4": 144
, "BMW|iX1": 139
, "Volvo|EX40": 128
, "Mercedes-Benz|EQA": 112
, "Toyota|bZ4X": 95
, "Kia|EV6": 91
, "Ford|Mustang Mach-E": 88
, "Hyundai|Ioniq 5": 85
, "BMW|i4": 81
, "Volvo|EC40": 81
, "Polestar|2": 79
, "Kia|Niro EV": 61
, "Tesla|Model X": 58
, "Hyundai|Kona Electric": 55
, "Mercedes-Benz|EQE": 54
, "Renault|Zoe": 53
, "Porsche|Taycan": 51
, "Peugeot|e-208": 46
, "Tesla|Model S": 46
, "Genesis|GV60": 44
, "Mercedes-Benz|EQB": 42
, "Renault|Twingo E-Tech": 42
, "BMW|iX": 41
, "Volkswagen|ID.5": 39
, "Jeep|Avenger EV": 36
, "Mercedes-Benz|EQC": 36
, "Opel|Corsa-e": 30
, "Mercedes-Benz|EQS": 28
, "Citroën|ë-C4": 25
, "Hyundai|Ioniq 6": 24
, "Audi|e-tron GT": 23
, "Fiat|E-Doblò": 22
, "Honda|e": 21
, "Volkswagen|e-up!": 21
, "Peugeot|e-2008": 20
, "Genesis|GV70": 19
, "Smart|Fortwo ED": 19
, "Opel|Mokka-e": 18
, "Smart|Hashtag 1": 15
, "BMW|iX3": 14
, "Dacia|Spring": 13
, "Mini|Cooper SE": 13
, "Subaru|Solterra": 13
, "Nissan|other": 19
, "BMW|other": 12
, "Mercedes-Benz|other": 11
, "JAC|other": 9
, "Jaguar|other": 3
, "Kia|other": 3
, "other": 123
});

db.insert(db.countries.CH, "2023-07", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 2434
, "Škoda": 1659
, "Audi": 1510
, "BMW": 1457
, "Mercedes-Benz": 1279
, "Toyota": 1165
, "Volvo": 735
, "Ford": 705
, "Hyundai": 694
, "Renault": 612
, "Seat": 537
, "Peugeot": 495
, "Tesla": 453
, "Kia": 437
, "Porsche": 411
, "Cupra": 401
, "Dacia": 385
, "Fiat": 285
, "Mini": 284
, "Suzuki": 250
, "Opel": 245
, "Mazda": 243
, "Nissan": 210
, "Honda": 194
, "Jeep": 188
, "Land Rover": 161
, "Citroën": 149
, "Mitsubishi": 141
, "Polestar": 109
, "Subaru": 99
, "Genesis": 75
, "Smart": 42
, "Jaguar": 29
, "Chevrolet": 11
, "JAC": 10
, "other": 505
});

db.insert(db.countries.CH, "2023-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/7 (includes commercial vehicles), https://www.acea.auto/files/20230830_PRPC_2307_FINAL.pdf",
{ "Tesla|Model Y": 316
, "Škoda|Enyaq": 315
, "Volvo|EX40": 172
, "Volkswagen|ID.3": 171
, "Cupra|Born": 165
, "Audi|Q4 e-tron": 164
, "Volkswagen|ID.4": 164
, "Fiat|500e": 121
, "Audi|Q8 e-tron": 117
, "Tesla|Model 3": 114
, "Polestar|2": 109
, "Mercedes-Benz|EQA": 98
, "Hyundai|Ioniq 5": 93
, "BMW|iX1": 92
, "Ford|Mustang Mach-E": 84
, "Renault|Megane E-Tech": 82
, "Volvo|EC40": 78
, "Toyota|bZ4X": 76
, "Hyundai|Kona Electric": 71
, "Kia|EV6": 71
, "Porsche|Taycan": 63
, "Peugeot|e-208": 55
, "Jeep|Avenger EV": 50
, "Mercedes-Benz|EQE": 50
, "Peugeot|e-2008": 42
, "BMW|iX": 41
, "Kia|Niro EV": 40
, "BMW|i4": 39
, "Genesis|GV60": 34
, "Volkswagen|e-up!": 33
, "BMW|iX3": 32
, "Volkswagen|ID.5": 31
, "Smart|Fortwo ED": 30
, "Genesis|GV70": 26
, "Audi|e-tron GT": 22
, "Mercedes-Benz|EQB": 22
, "Dacia|Spring": 21
, "Mercedes-Benz|EQS": 20
, "Renault|Twingo E-Tech": 19
, "Hyundai|Ioniq 6": 18
, "Mercedes-Benz|EQC": 15
, "Renault|Zoe": 14
, "Tesla|Model X": 13
, "Smart|Hashtag 1": 12
, "Mini|Cooper SE": 11
, "JAC|e-JS4": 10
, "Opel|Mokka-e": 10
, "BMW|i7": 9
, "Tesla|Model S": 9
, "Citroën|ë-C4": 6
, "Honda|e": 6
, "Opel|Corsa-e": 6
, "Jaguar|other": 5
, "Nissan|other": 5
, "Subaru|other": 5
, "Fiat|other": 3
, "Kia|other": 3
, "Mercedes-Benz|other": 3
, "Opel|other": 2
, "other": 141
});

db.insert(db.countries.CH, "2023-08", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 1977
, "BMW": 1714
, "Audi": 1477
, "Mercedes-Benz": 1329
, "Škoda": 1329
, "Toyota": 1219
, "Ford": 850
, "Tesla": 795
, "Hyundai": 716
, "Dacia": 686
, "Renault": 664
, "Kia": 614
, "Seat": 572
, "Volvo": 493
, "Peugeot": 426
, "Cupra": 330
, "Porsche": 330
, "Mazda": 317
, "Nissan": 310
, "Fiat": 308
, "Opel": 302
, "Mini": 284
, "Suzuki": 229
, "Honda": 205
, "Citroën": 188
, "Smart": 160
, "Land Rover": 158
, "Mitsubishi": 141
, "Jeep": 126
, "Subaru": 98
, "Polestar": 93
, "Genesis": 52
, "Jaguar": 21
, "Chevrolet": 16
, "JAC": 6
, "other": 442
});

db.insert(db.countries.CH, "2023-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/8 (includes commercial vehicles), https://www.acea.auto/files/20230920_PRPC_2308_FINAL.pdf",
{ "Tesla|Model Y": 673
, "Škoda|Enyaq": 232
, "Audi|Q4 e-tron": 217
, "BMW|iX1": 217
, "Volkswagen|ID.3": 192
, "Volvo|EX40": 174
, "Kia|EV6": 155
, "Cupra|Born": 144
, "Smart|Hashtag 1": 144
, "Fiat|500e": 141
, "Mercedes-Benz|EQA": 138
, "Volkswagen|ID.4": 135
, "Tesla|Model 3": 104
, "Hyundai|Ioniq 5": 101
, "Polestar|2": 93
, "Audi|Q8 e-tron": 85
, "Mercedes-Benz|EQE": 81
, "Toyota|bZ4X": 79
, "Peugeot|e-208": 77
, "Ford|Mustang Mach-E": 76
, "Renault|Megane E-Tech": 65
, "Hyundai|Kona Electric": 57
, "Kia|Niro EV": 54
, "BMW|i4": 53
, "Porsche|Taycan": 46
, "BMW|iX": 40
, "Volkswagen|ID.5": 39
, "BMW|iX3": 35
, "Volvo|EC40": 33
, "Citroën|ë-C4": 32
, "Peugeot|e-2008": 32
, "Opel|Mokka-e": 29
, "Renault|Zoe": 28
, "Mercedes-Benz|EQB": 26
, "Dacia|Spring": 24
, "Nissan|Ariya": 23
, "Honda|e:Ny1": 22
, "Mercedes-Benz|EQS": 22
, "Volkswagen|e-up!": 20
, "Genesis|GV60": 17
, "Genesis|GV70": 17
, "Mini|Cooper SE": 17
, "Smart|Fortwo ED": 16
, "Subaru|Solterra": 13
, "Jeep|Avenger EV": 12
, "Kia|Soul EV": 11
, "Tesla|Model X": 10
, "Hyundai|Ioniq 6": 9
, "Audi|e-tron GT": 8
, "BMW|i5": 8
, "Mercedes-Benz|EQC": 8
, "Nissan|Leaf": 8
, "Opel|Corsa-e": 8
, "Renault|Twingo E-Tech": 8
, "Mercedes-Benz|other": 13
, "JAC|other": 6
, "Tesla|other": 6
, "Honda|other": 5
, "Fiat|other": 4
, "Opel|other": 4
, "BMW|other": 3
, "Peugeot|other": 3
, "other": 137
});

db.insert(db.countries.CH, "2023-09", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 2216
, "BMW": 1855
, "Mercedes-Benz": 1754
, "Škoda": 1636
, "Audi": 1567
, "Toyota": 1070
, "Tesla": 991
, "Hyundai": 779
, "Ford": 766
, "Kia": 730
, "Dacia": 669
, "Seat": 666
, "Renault": 653
, "Volvo": 648
, "Opel": 573
, "Peugeot": 519
, "Mini": 407
, "Mazda": 366
, "Porsche": 355
, "Suzuki": 344
, "Fiat": 316
, "Citroën": 293
, "Cupra": 290
, "Honda": 284
, "Jeep": 275
, "Mitsubishi": 206
, "Smart": 177
, "Nissan": 172
, "Subaru": 123
, "Land Rover": 121
, "Polestar": 80
, "Genesis": 55
, "Jaguar": 29
, "JAC": 11
, "Chevrolet": 4
, "other": 578
});

db.insert(db.countries.CH, "2023-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/9 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_September_2023.pdf",
{ "Tesla|Model Y": 786
, "Škoda|Enyaq": 646
, "Audi|Q4 e-tron": 331
, "Volkswagen|ID.3": 232
, "Mercedes-Benz|EQA": 191
, "Volvo|EX40": 162
, "Smart|Hashtag 1": 160
, "BMW|iX1": 149
, "Cupra|Born": 149
, "Fiat|500e": 145
, "Tesla|Model S": 125
, "Volvo|EC40": 106
, "Volkswagen|ID.4": 105
, "Kia|EV6": 97
, "Audi|Q8 e-tron": 90
, "Peugeot|e-208": 90
, "Polestar|2": 80
, "Volkswagen|ID.5": 80
, "Tesla|Model X": 73
, "Ford|Mustang Mach-E": 65
, "Kia|Niro EV": 63
, "Opel|Mokka-e": 62
, "Toyota|bZ4X": 62
, "Citroën|ë-C4": 60
, "Renault|Megane E-Tech": 58
, "Dacia|Spring": 56
, "BMW|iX3": 55
, "Hyundai|Ioniq 5": 53
, "Hyundai|Kona Electric": 45
, "Mercedes-Benz|EQE": 45
, "BMW|i4": 44
, "Mercedes-Benz|EQB": 35
, "Porsche|Taycan": 32
, "Honda|e:Ny1": 29
, "Opel|Astra Electric": 28
, "Opel|Corsa-e": 28
, "Peugeot|e-2008": 28
, "Renault|Twingo E-Tech": 26
, "BMW|iX": 25
, "Genesis|GV60": 25
, "Mercedes-Benz|EQC": 25
, "Renault|Zoe": 22
, "Mercedes-Benz|EQS": 21
, "Fiat|E-Doblò": 19
, "Volkswagen|e-up!": 19
, "Genesis|GV70": 18
, "Hyundai|Ioniq 6": 17
, "Smart|Fortwo ED": 17
, "Mini|Cooper SE": 16
, "Audi|e-tron GT": 13
, "Mercedes-Benz|eCitan": 13
, "Nissan|other": 18
, "Jeep|other": 12
, "Subaru|other": 12
, "JAC|other": 11
, "BMW|other": 7
, "Kia|other": 7
, "Tesla|other": 6
, "Honda|other": 4
, "Mercedes-Benz|other": 4
, "other": 131
});

db.insert(db.countries.CH, "2023-10", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 2428
, "Škoda": 1823
, "BMW": 1703
, "Audi": 1701
, "Mercedes-Benz": 1605
, "Toyota": 1017
, "Volvo": 887
, "Ford": 768
, "Dacia": 666
, "Hyundai": 663
, "Renault": 597
, "Kia": 541
, "Seat": 515
, "Porsche": 416
, "Peugeot": 406
, "Mazda": 389
, "Opel": 382
, "Fiat": 366
, "Suzuki": 340
, "Tesla": 310
, "Cupra": 308
, "Citroën": 277
, "Subaru": 257
, "Mini": 253
, "Nissan": 244
, "Honda": 237
, "Jeep": 206
, "Mitsubishi": 160
, "Land Rover": 153
, "Smart": 95
, "Polestar": 58
, "Genesis": 54
, "Jaguar": 46
, "JAC": 18
, "Chevrolet": 8
, "other": 458
});

db.insert(db.countries.CH, "2023-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/10 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_October_2023.pdf",
{ "Škoda|Enyaq": 628
, "Audi|Q4 e-tron": 521
, "Volvo|EX40": 293
, "Tesla|Model Y": 254
, "Volkswagen|ID.3": 191
, "BMW|iX1": 187
, "Volvo|EC40": 165
, "Cupra|Born": 164
, "Volkswagen|ID.4": 143
, "Mercedes-Benz|EQA": 115
, "Ford|Mustang Mach-E": 113
, "Fiat|500e": 106
, "Audi|Q8 e-tron": 85
, "Renault|Megane E-Tech": 78
, "Smart|Hashtag 1": 77
, "Mercedes-Benz|EQE": 67
, "Jeep|Avenger EV": 66
, "Volkswagen|ID.5": 60
, "Polestar|2": 57
, "Dacia|Spring": 54
, "Hyundai|Kona Electric": 54
, "Toyota|bZ4X": 48
, "BMW|i4": 47
, "Nissan|Ariya": 46
, "Porsche|Taycan": 45
, "Hyundai|Ioniq 5": 43
, "Kia|Niro EV": 43
, "Opel|Mokka-e": 36
, "BMW|i5": 34
, "Peugeot|e-208": 33
, "Renault|Twingo E-Tech": 33
, "Renault|Zoe": 33
, "Subaru|Solterra": 25
, "Volkswagen|e-up!": 25
, "Kia|EV6": 24
, "Mercedes-Benz|EQS": 24
, "Tesla|Model S": 24
, "Tesla|Model X": 23
, "Mercedes-Benz|EQB": 22
, "Honda|e:Ny1": 20
, "Peugeot|e-2008": 20
, "BMW|iX": 19
, "Audi|e-tron GT": 18
, "JAC|e-JS4": 17
, "Smart|Fortwo ED": 17
, "Genesis|GV60": 16
, "Hyundai|Ioniq 6": 16
, "Mercedes-Benz|EQC": 16
, "Mini|Cooper SE": 16
, "BMW|iX3": 15
, "Opel|other": 22
, "Genesis|other": 15
, "Mercedes-Benz|other": 15
, "Fiat|other": 12
, "Citroën|other": 10
, "Peugeot|other": 9
, "Kia|other": 5
, "Nissan|other": 5
, "Tesla|other": 4
, "BMW|other": 3
, "Honda|other": 3
, "other": 126
});

db.insert(db.countries.CH, "2023-11", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 2483
, "BMW": 2038
, "Škoda": 1978
, "Audi": 1767
, "Mercedes-Benz": 1605
, "Toyota": 1154
, "Renault": 846
, "Hyundai": 798
, "Tesla": 792
, "Dacia": 737
, "Ford": 669
, "Opel": 660
, "Volvo": 617
, "Kia": 614
, "Seat": 534
, "Fiat": 457
, "Peugeot": 446
, "Citroën": 348
, "Suzuki": 340
, "Mazda": 328
, "Mini": 300
, "Cupra": 294
, "Porsche": 264
, "Mitsubishi": 260
, "Jeep": 247
, "Honda": 192
, "Nissan": 181
, "Land Rover": 178
, "Subaru": 137
, "Smart": 89
, "Genesis": 57
, "Polestar": 46
, "Jaguar": 38
, "JAC": 13
, "Chevrolet": 9
, "other": 489
});

db.insert(db.countries.CH, "2023-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/11 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_November_2023.pdf",
{ "Škoda|Enyaq": 536
, "Audi|Q4 e-tron": 433
, "Tesla|Model Y": 425
, "Tesla|Model 3": 288
, "Volkswagen|ID.3": 215
, "Cupra|Born": 154
, "Volkswagen|ID.4": 146
, "BMW|iX1": 138
, "Volvo|EX40": 112
, "Fiat|500e": 111
, "Audi|Q8 e-tron": 103
, "Renault|Megane E-Tech": 103
, "Mercedes-Benz|EQA": 99
, "Opel|Mokka-e": 88
, "Kia|Niro EV": 86
, "Hyundai|Kona Electric": 74
, "Kia|EV9": 73
, "Smart|Hashtag 1": 66
, "Tesla|Model S": 64
, "Dacia|Spring": 63
, "Volkswagen|ID.5": 62
, "BMW|i4": 58
, "Ford|Mustang Mach-E": 56
, "Hyundai|Ioniq 5": 55
, "Toyota|bZ4X": 54
, "Citroën|ë-C4": 51
, "Polestar|2": 46
, "Renault|Twingo E-Tech": 46
, "BMW|iX": 45
, "BMW|iX3": 45
, "Renault|Zoe": 43
, "Volvo|EC40": 43
, "Mercedes-Benz|EQE": 40
, "Porsche|Taycan": 36
, "Opel|Corsa-e": 32
, "Jeep|Avenger EV": 30
, "Hyundai|Ioniq 6": 29
, "Peugeot|e-208": 26
, "Mercedes-Benz|EQS": 25
, "Genesis|GV60": 24
, "Volkswagen|ID.7": 24
, "Smart|Fortwo ED": 22
, "Mercedes-Benz|EQB": 21
, "Volkswagen|e-up!": 21
, "BMW|i5": 18
, "Nissan|Ariya": 18
, "Genesis|GV70": 16
, "Kia|EV6": 16
, "Peugeot|e-308": 16
, "Mini|Cooper SE": 15
, "Mercedes-Benz|other": 33
, "Honda|other": 14
, "Audi|other": 13
, "JAC|other": 13
, "Tesla|other": 13
, "Subaru|other": 9
, "Fiat|other": 5
, "Nissan|other": 5
, "Opel|other": 5
, "Peugeot|other": 4
, "BMW|other": 3
, "Jaguar|other": 3
, "other": 218
});

db.insert(db.countries.CH, "2023-12", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/01/ModellePW2023.xlsx",
{ "Volkswagen": 3959
, "BMW": 2480
, "Mercedes-Benz": 2157
, "Škoda": 2129
, "Audi": 2103
, "Tesla": 1086
, "Toyota": 976
, "Ford": 897
, "Renault": 892
, "Dacia": 885
, "Hyundai": 734
, "Cupra": 733
, "Seat": 679
, "Volvo": 679
, "Opel": 627
, "Kia": 625
, "Mazda": 548
, "Fiat": 538
, "Suzuki": 481
, "Peugeot": 370
, "Mini": 336
, "Mitsubishi": 321
, "Nissan": 300
, "Subaru": 286
, "Citroën": 253
, "Porsche": 244
, "Land Rover": 225
, "Honda": 221
, "Jeep": 189
, "Polestar": 140
, "Smart": 121
, "Genesis": 83
, "JAC": 79
, "Jaguar": 44
, "Chevrolet": 27
, "other": 501
});

db.insert(db.countries.CH, "2023-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2023/12 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_full_year_2023.pdf",
{ "Škoda|Enyaq": 924
, "Tesla|Model Y": 689
, "Audi|Q4 e-tron": 513
, "Cupra|Born": 509
, "Volkswagen|ID.3": 382
, "Tesla|Model 3": 320
, "Volkswagen|ID.4": 285
, "Audi|Q8 e-tron": 226
, "Renault|Megane E-Tech": 210
, "BMW|iX1": 204
, "Volkswagen|ID.5": 143
, "Polestar|2": 140
, "Fiat|500e": 138
, "Mercedes-Benz|EQA": 129
, "Ford|Mustang Mach-E": 126
, "Volvo|EX40": 123
, "BMW|iX": 116
, "Dacia|Spring": 99
, "Volkswagen|ID.7": 90
, "Volkswagen|e-up!": 85
, "Smart|Hashtag 1": 84
, "BMW|i4": 82
, "JAC|e-JS4": 78
, "Hyundai|Kona Electric": 77
, "Nissan|Ariya": 76
, "Porsche|Taycan": 70
, "Renault|Zoe": 67
, "Kia|EV9": 62
, "Toyota|bZ4X": 55
, "BMW|iX3": 54
, "Renault|Twingo E-Tech": 52
, "Mercedes-Benz|EQE": 49
, "Volvo|EC40": 48
, "Tesla|Model S": 46
, "Subaru|Solterra": 44
, "Kia|Niro EV": 41
, "Fiat|E-Doblò": 40
, "Mercedes-Benz|EQB": 37
, "Fiat|600e": 36
, "Hyundai|Ioniq 5": 36
, "Opel|Mokka-e": 36
, "Mercedes-Benz|eCitan": 34
, "Smart|Fortwo ED": 34
, "Genesis|GV70": 31
, "Hyundai|Ioniq 6": 31
, "Kia|EV6": 27
, "Genesis|GV60": 26
, "Jeep|Avenger EV": 26
, "Tesla|Model X": 26
, "Mercedes-Benz|EQC": 25
, "Mercedes-Benz|EQS": 25
, "BMW|other": 28
, "Opel|other": 26
, "Mercedes-Benz|other": 21
, "Honda|other": 20
, "Audi|other": 19
, "Peugeot|other": 16
, "Nissan|other": 12
, "Mini|other": 10
, "Jaguar|other": 6
, "Kia|other": 4
, "Volvo|other": 4
, "other": 168
});

db.insert(db.countries.CH, "2024-01", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/02/ModellePW2024.xlsx",
{ "BMW": 1529
, "Škoda": 1503
, "Volkswagen": 1313
, "Mercedes-Benz": 1090
, "Audi": 1079
, "Toyota": 890
, "Volvo": 689
, "Ford": 581
, "Porsche": 493
, "Opel": 478
, "Dacia": 454
, "Peugeot": 451
, "Hyundai": 391
, "Kia": 387
, "Renault": 363
, "Seat": 355
, "Tesla": 327
, "Citroën": 278
, "Fiat": 267
, "Honda": 252
, "Mazda": 245
, "Suzuki": 232
, "Mitsubishi": 188
, "Mini": 177
, "Land Rover": 153
, "Subaru": 152
, "Jeep": 148
, "Cupra": 91
, "Nissan": 85
, "Smart": 80
, "Genesis": 51
, "Polestar": 31
, "JAC": 26
, "Jaguar": 24
, "other": 383
});

db.insert(db.countries.CH, "2024-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2024/1 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations-January_2024.pdf",
{ "Škoda|Enyaq": 339
, "Tesla|Model Y": 250
, "Volvo|EX30": 153
, "Audi|Q4 e-tron": 87
, "BMW|iX1": 71
, "BMW|iX": 55
, "Hyundai|Kona Electric": 55
, "Kia|Niro EV": 55
, "Smart|Hashtag 1": 55
, "Tesla|Model 3": 53
, "Volkswagen|ID.3": 53
, "Volvo|EX40": 52
, "BMW|i4": 49
, "Toyota|bZ4X": 47
, "Kia|EV9": 45
, "Jeep|Avenger EV": 42
, "Kia|EV6": 42
, "Mercedes-Benz|EQA": 40
, "Ford|Mustang Mach-E": 39
, "Hyundai|Ioniq 5": 34
, "Audi|Q8 e-tron": 31
, "Polestar|2": 31
, "Fiat|500e": 30
, "Renault|Megane E-Tech": 30
, "Fiat|600e": 29
, "BMW|iX3": 26
, "Mercedes-Benz|EQE": 23
, "Volkswagen|ID.4": 23
, "BMW|i5": 22
, "Dacia|Spring": 21
, "Nissan|Ariya": 21
, "Peugeot|e-308": 20
, "Porsche|Taycan": 20
, "Smart|Hashtag 3": 20
, "Volvo|EC40": 20
, "Renault|Zoe": 19
, "Cupra|Born": 17
, "Peugeot|e-2008": 17
, "Genesis|GV60": 16
, "Hyundai|Ioniq 6": 16
, "Peugeot|e-208": 16
, "Genesis|GV70": 14
, "Tesla|Model X": 14
, "Mercedes-Benz|EQS": 13
, "Volkswagen|ID.5": 12
, "Volkswagen|e-up!": 10
, "Opel|Astra Electric": 9
, "Tesla|Model S": 9
, "Honda|e:Ny1": 8
, "Mercedes-Benz|EQB": 8
, "Opel|other": 9
, "BMW|other": 8
, "Mercedes-Benz|other": 7
, "Citroën|other": 5
, "Smart|other": 5
, "Honda|other": 3
, "Nissan|other": 3
, "Volkswagen|other": 3
, "Fiat|other": 2
, "Genesis|other": 2
, "Renault|other": 2
, "other": 134
});

db.insert(db.countries.CH, "2024-02", db.dsTypes.AllCarsByBrand, "https://www.auto.swiss/wp-content/uploads/2024/03/ModellePW2024.xlsx",
{ "BMW": 1564
, "Škoda": 1533
, "Volkswagen": 1513
, "Mercedes-Benz": 1268
, "Toyota": 1241
, "Audi": 1084
, "Tesla": 1003
, "Dacia": 866
, "Hyundai": 700
, "Ford": 680
, "Renault": 676
, "Volvo": 672
, "Fiat": 564
, "Seat": 547
, "Kia": 507
, "Peugeot": 475
, "Porsche": 465
, "Mini": 298
, "Mitsubishi": 291
, "Mazda": 286
, "Suzuki": 286
, "Cupra": 248
, "Honda": 223
, "Opel": 215
, "Land Rover": 202
, "Citroën": 186
, "Nissan": 159
, "Jeep": 128
, "Subaru": 78
, "Smart": 75
, "Polestar": 20
, "Genesis": 17
, "Jaguar": 13
, "JAC": 8
, "Chevrolet": 2
, "other": 428
});

db.insert(db.countries.CH, "2024-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/CH/Brands/Month/2024/2 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_February_2024.pdf",
{ "Tesla|Model Y": 771
, "Tesla|Model 3": 216
, "Škoda|Enyaq": 198
, "Volvo|EX30": 158
, "Volkswagen|ID.3": 144
, "Fiat|500e": 106
, "BMW|iX1": 96
, "Hyundai|Ioniq 5": 96
, "Audi|Q4 e-tron": 95
, "Hyundai|Kona Electric": 85
, "Toyota|bZ4X": 73
, "Renault|Megane E-Tech": 66
, "Mercedes-Benz|EQA": 65
, "Peugeot|e-208": 53
, "Mercedes-Benz|EQE": 51
, "BMW|iX": 47
, "Opel|Corsa-e": 46
, "Smart|Hashtag 1": 46
, "Audi|Q8 e-tron": 45
, "Dacia|Spring": 44
, "BMW|i4": 42
, "Hyundai|Ioniq 6": 38
, "Kia|EV6": 38
, "Volkswagen|ID.4": 35
, "Volvo|EX40": 31
, "Kia|Niro EV": 29
, "Smart|Hashtag 3": 26
, "Renault|Twingo E-Tech": 25
, "Fiat|600e": 23
, "Volvo|EC40": 23
, "Kia|EV9": 21
, "Nissan|Ariya": 21
, "Polestar|2": 20
, "Cupra|Born": 19
, "Jeep|Avenger EV": 19
, "Porsche|Taycan": 19
, "BMW|i5": 18
, "BMW|iX2": 18
, "Mercedes-Benz|EQB": 17
, "BMW|iX3": 16
, "Peugeot|e-308": 16
, "Ford|Mustang Mach-E": 14
, "Honda|e:Ny1": 14
, "Renault|Zoe": 14
, "Opel|Astra Electric": 12
, "Mercedes-Benz|EQV": 10
, "Volkswagen|ID.5": 9
, "Mercedes-Benz|EQS": 8
, "Genesis|GV60": 7
, "Mercedes-Benz|EQC": 7
, "Peugeot|e-2008": 7
, "Volkswagen|other": 8
, "Audi|other": 6
, "Genesis|other": 5
, "Tesla|other": 5
, "Fiat|other": 4
, "Citroën|other": 3
, "Opel|other": 3
, "Smart|other": 3
, "BMW|other": 2
, "Subaru|other": 2
, "other": 143
});
