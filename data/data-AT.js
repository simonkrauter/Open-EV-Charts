// Data sets for car sales in Austria

"use strict";

// https://www.statistik.at/statistiken/tourismus-und-verkehr/fahrzeuge/kfz-neuzulassungen

db.insert(db.countries.AT, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 4384
, "Škoda": 2380
, "Seat": 2303
, "Opel": 1727
, "Ford": 1471
, "BMW": 1422
, "Renault": 1287
, "Hyundai": 1074
, "Mercedes-Benz": 986
, "Audi": 869
, "Fiat": 798
, "Peugeot": 790
, "Dacia": 783
, "Mazda": 646
, "Citroën": 629
, "Kia": 558
, "Suzuki": 558
, "Volvo": 362
, "Mitsubishi": 348
, "Nissan": 332
, "Toyota": 303
, "Jeep": 272
, "Mini": 194
, "Honda": 155
, "Land Rover": 137
, "Smart": 90
, "Jaguar": 84
, "Porsche": 50
, "Subaru": 40
, "Tesla": 21
, "JAC": 3
, "other": 201
});

db.insert(db.countries.AT, "2019-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "BMW|i3 BEV": 106
, "Hyundai|Kona Electric": 84
, "Volkswagen|e-Golf": 71
, "Renault|Zoe": 65
, "Nissan|Leaf": 56
, "Kia|Niro EV": 36
, "Hyundai|Ioniq Electric": 27
, "other": 18
, "Tesla|Model S": 16
, "Jaguar|I-Pace": 15
, "Smart|Fortwo ED": 13
});

db.insert(db.countries.AT, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 4435
, "Škoda": 2198
, "Seat": 1634
, "Ford": 1488
, "Opel": 1348
, "Renault": 1270
, "BMW": 1132
, "Hyundai": 892
, "Audi": 883
, "Mercedes-Benz": 864
, "Fiat": 859
, "Peugeot": 801
, "Dacia": 739
, "Suzuki": 662
, "Kia": 620
, "Mazda": 565
, "Citroën": 529
, "Toyota": 413
, "Jeep": 339
, "Nissan": 333
, "Volvo": 321
, "Mitsubishi": 287
, "Tesla": 166
, "Honda": 161
, "Mini": 139
, "Land Rover": 120
, "Smart": 106
, "Jaguar": 78
, "Subaru": 30
, "Porsche": 22
, "other": 206
});

db.insert(db.countries.AT, "2019-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 136
, "BMW|i3 BEV": 105
, "Nissan|Leaf": 83
, "Volkswagen|e-Golf": 81
, "Renault|Zoe": 75
, "Kia|Niro EV": 47
, "other": 43
, "Hyundai|Ioniq Electric": 41
, "Hyundai|Kona Electric": 35
, "Jaguar|I-Pace": 25
, "Tesla|Model S": 20
});

db.insert(db.countries.AT, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 5233
, "Škoda": 2490
, "Seat": 1919
, "Ford": 1827
, "Renault": 1786
, "BMW": 1676
, "Opel": 1627
, "Fiat": 1386
, "Hyundai": 1379
, "Mercedes-Benz": 1241
, "Audi": 1240
, "Mazda": 1216
, "Peugeot": 1100
, "Kia": 890
, "Dacia": 871
, "Suzuki": 860
, "Citroën": 808
, "Tesla": 748
, "Toyota": 550
, "Nissan": 533
, "Volvo": 484
, "Mitsubishi": 382
, "Jeep": 363
, "Honda": 289
, "Mini": 245
, "Land Rover": 194
, "Jaguar": 132
, "Smart": 118
, "Porsche": 62
, "Subaru": 40
, "other": 269
});

db.insert(db.countries.AT, "2019-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 703
, "BMW|i3 BEV": 107
, "Volkswagen|e-Golf": 97
, "other": 81
, "Renault|Zoe": 79
, "Nissan|Leaf": 62
, "Hyundai|Kona Electric": 62
, "Audi|Q8 e-tron": 53
, "Kia|Niro EV": 48
, "Jaguar|I-Pace": 28
, "Tesla|Model X": 24
});

db.insert(db.countries.AT, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 4939
, "Škoda": 2655
, "Seat": 2041
, "BMW": 2021
, "Ford": 1843
, "Opel": 1724
, "Hyundai": 1664
, "Renault": 1532
, "Mercedes-Benz": 1376
, "Peugeot": 1293
, "Fiat": 1184
, "Kia": 1145
, "Audi": 1122
, "Dacia": 976
, "Mazda": 897
, "Citroën": 775
, "Suzuki": 759
, "Toyota": 681
, "Mitsubishi": 676
, "Volvo": 429
, "Mini": 350
, "Jeep": 337
, "Nissan": 285
, "Honda": 214
, "Smart": 197
, "Tesla": 183
, "Land Rover": 135
, "Porsche": 102
, "Jaguar": 93
, "Subaru": 44
, "JAC": 8
, "other": 271
});

db.insert(db.countries.AT, "2019-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 142
, "other": 87
, "Renault|Zoe": 82
, "Volkswagen|e-Golf": 78
, "BMW|i3 BEV": 77
, "Kia|Niro EV": 62
, "Hyundai|Kona Electric": 59
, "Jaguar|I-Pace": 39
, "Nissan|Leaf": 38
, "Tesla|Model S": 31
, "Hyundai|Ioniq Electric": 29
});

db.insert(db.countries.AT, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 4498
, "Škoda": 2990
, "Seat": 2120
, "Ford": 1792
, "Renault": 1722
, "Opel": 1693
, "BMW": 1649
, "Mercedes-Benz": 1381
, "Hyundai": 1373
, "Audi": 1188
, "Fiat": 1151
, "Peugeot": 1033
, "Kia": 967
, "Dacia": 950
, "Mazda": 918
, "Suzuki": 854
, "Toyota": 713
, "Citroën": 660
, "Mitsubishi": 464
, "Jeep": 352
, "Nissan": 348
, "Volvo": 324
, "Mini": 279
, "Smart": 229
, "Honda": 208
, "Tesla": 178
, "Land Rover": 111
, "Porsche": 109
, "Subaru": 52
, "Jaguar": 44
, "JAC": 5
, "other": 219
});

db.insert(db.countries.AT, "2019-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Renault|Zoe": 133
, "Tesla|Model 3": 127
, "BMW|i3 BEV": 77
, "other": 72
, "Volkswagen|e-Golf": 62
, "Kia|Niro EV": 48
, "Hyundai|Kona Electric": 43
, "Hyundai|Ioniq Electric": 42
, "Audi|Q8 e-tron": 36
, "Tesla|Model S": 32
, "Nissan|Leaf": 27
});

db.insert(db.countries.AT, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 5735
, "Škoda": 2805
, "Seat": 2279
, "Opel": 1799
, "Ford": 1719
, "Renault": 1656
, "Fiat": 1639
, "BMW": 1597
, "Hyundai": 1404
, "Audi": 1361
, "Mercedes-Benz": 1350
, "Peugeot": 1031
, "Dacia": 905
, "Mazda": 894
, "Kia": 849
, "Citroën": 793
, "Suzuki": 789
, "Toyota": 642
, "Tesla": 469
, "Nissan": 419
, "Jeep": 379
, "Mitsubishi": 352
, "Volvo": 343
, "Mini": 303
, "Honda": 214
, "Smart": 173
, "Land Rover": 150
, "Porsche": 121
, "Jaguar": 55
, "Subaru": 34
, "JAC": 5
, "other": 265
});

db.insert(db.countries.AT, "2019-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 346
, "BMW|i3 BEV": 99
, "other": 86
, "Tesla|Model S": 80
, "Renault|Zoe": 72
, "Volkswagen|e-Golf": 58
, "Hyundai|Kona Electric": 44
, "Tesla|Model X": 43
, "Nissan|Leaf": 43
, "Audi|Q8 e-tron": 38
, "Kia|Niro EV": 30
});

db.insert(db.countries.AT, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 5522
, "Škoda": 2490
, "Seat": 1917
, "Ford": 1828
, "BMW": 1735
, "Opel": 1726
, "Renault": 1407
, "Hyundai": 1378
, "Mercedes-Benz": 1374
, "Audi": 1354
, "Fiat": 1256
, "Peugeot": 1150
, "Suzuki": 977
, "Dacia": 943
, "Mazda": 862
, "Kia": 793
, "Citroën": 715
, "Toyota": 647
, "Mini": 520
, "Volvo": 476
, "Nissan": 458
, "Mitsubishi": 422
, "Jeep": 323
, "Smart": 195
, "Honda": 163
, "Tesla": 163
, "Porsche": 147
, "Land Rover": 124
, "Jaguar": 101
, "Subaru": 33
, "other": 229
});

db.insert(db.countries.AT, "2019-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 111
, "other": 87
, "Hyundai|Kona Electric": 85
, "BMW|i3 BEV": 79
, "Audi|Q8 e-tron": 78
, "Kia|Niro EV": 67
, "Volkswagen|e-Golf": 53
, "Renault|Zoe": 52
, "Nissan|Leaf": 47
, "Tesla|Model X": 30
, "Tesla|Model S": 22
});

db.insert(db.countries.AT, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 4640
, "Škoda": 2362
, "Hyundai": 2079
, "Mercedes-Benz": 1761
, "Seat": 1679
, "Opel": 1553
, "Ford": 1525
, "Audi": 1449
, "BMW": 1417
, "Renault": 1321
, "Suzuki": 1268
, "Fiat": 961
, "Kia": 940
, "Peugeot": 858
, "Toyota": 816
, "Mazda": 711
, "Mitsubishi": 688
, "Citroën": 621
, "Dacia": 598
, "Jeep": 547
, "Nissan": 413
, "Smart": 325
, "Mini": 295
, "Volvo": 214
, "Honda": 176
, "Porsche": 129
, "Tesla": 127
, "Land Rover": 101
, "Jaguar": 39
, "Subaru": 32
, "JAC": 4
, "other": 239
});

db.insert(db.countries.AT, "2019-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "BMW|i3 BEV": 156
, "Renault|Zoe": 133
, "Hyundai|Kona Electric": 114
, "Tesla|Model 3": 83
, "other": 82
, "Volkswagen|e-Golf": 77
, "Audi|Q8 e-tron": 39
, "Hyundai|Ioniq Electric": 38
, "Nissan|Leaf": 28
, "Tesla|Model S": 26
, "Kia|Soul EV": 23
});

db.insert(db.countries.AT, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 2417
, "Škoda": 1706
, "Renault": 1388
, "Ford": 1301
, "BMW": 1300
, "Opel": 1243
, "Mercedes-Benz": 1213
, "Hyundai": 1157
, "Fiat": 1090
, "Seat": 953
, "Peugeot": 857
, "Mazda": 774
, "Dacia": 584
, "Citroën": 578
, "Kia": 564
, "Audi": 516
, "Tesla": 458
, "Toyota": 439
, "Volvo": 361
, "Mini": 330
, "Nissan": 291
, "Suzuki": 264
, "Jeep": 250
, "Honda": 218
, "Land Rover": 163
, "Mitsubishi": 142
, "Porsche": 121
, "Jaguar": 54
, "Smart": 51
, "Subaru": 49
, "JAC": 3
, "other": 212
});

db.insert(db.countries.AT, "2019-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 387
, "BMW|i3 BEV": 112
, "Renault|Zoe": 88
, "other": 78
, "Hyundai|Kona Electric": 76
, "Nissan|Leaf": 60
, "Tesla|Model S": 44
, "Audi|Q8 e-tron": 40
, "Volkswagen|e-Golf": 33
, "Tesla|Model X": 27
, "Kia|Niro EV": 24
});

db.insert(db.countries.AT, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 3881
, "BMW": 1889
, "Škoda": 1779
, "Hyundai": 1494
, "Ford": 1453
, "Mercedes-Benz": 1401
, "Renault": 1355
, "Seat": 1346
, "Opel": 1141
, "Mazda": 1046
, "Fiat": 1011
, "Audi": 944
, "Kia": 890
, "Peugeot": 833
, "Toyota": 617
, "Citroën": 555
, "Dacia": 530
, "Volvo": 417
, "Suzuki": 382
, "Nissan": 319
, "Jeep": 282
, "Mini": 282
, "Mitsubishi": 274
, "Porsche": 230
, "Land Rover": 166
, "Honda": 155
, "Jaguar": 77
, "Tesla": 53
, "Subaru": 49
, "Smart": 37
, "JAC": 4
, "other": 246
});

db.insert(db.countries.AT, "2019-10", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "BMW|i3 BEV": 90
, "other": 71
, "Renault|Zoe": 58
, "Nissan|Leaf": 52
, "Volkswagen|e-Golf": 50
, "Hyundai|Kona Electric": 48
, "Hyundai|Ioniq Electric": 47
, "Smart|Fortwo ED": 27
, "Tesla|Model 3": 25
, "Audi|Q8 e-tron": 24
, "Kia|Soul EV": 23
});

db.insert(db.countries.AT, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 3541
, "Škoda": 1890
, "BMW": 1747
, "Hyundai": 1617
, "Ford": 1600
, "Renault": 1523
, "Mercedes-Benz": 1171
, "Mazda": 1068
, "Fiat": 1066
, "Seat": 870
, "Opel": 854
, "Audi": 768
, "Peugeot": 754
, "Kia": 648
, "Dacia": 643
, "Toyota": 601
, "Suzuki": 499
, "Citroën": 446
, "Volvo": 361
, "Mitsubishi": 275
, "Nissan": 238
, "Mini": 180
, "Porsche": 177
, "Jeep": 164
, "Honda": 141
, "Land Rover": 119
, "Tesla": 119
, "Jaguar": 25
, "Smart": 21
, "Subaru": 21
, "other": 124
});

db.insert(db.countries.AT, "2019-11", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Hyundai|Kona Electric": 194
, "BMW|i3 BEV": 116
, "Volkswagen|e-Golf": 67
, "Tesla|Model 3": 66
, "Nissan|Leaf": 46
, "Tesla|Model S": 36
, "Hyundai|Ioniq Electric": 33
, "other": 32
, "Renault|Zoe": 25
, "Audi|Q8 e-tron": 21
, "Tesla|Model X": 17
});

db.insert(db.countries.AT, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Volkswagen": 3421
, "BMW": 1556
, "Škoda": 1539
, "Renault": 1528
, "Ford": 1507
, "Mazda": 1458
, "Hyundai": 1348
, "Mercedes-Benz": 1151
, "Fiat": 947
, "Audi": 897
, "Peugeot": 850
, "Seat": 719
, "Suzuki": 709
, "Opel": 654
, "Dacia": 624
, "Kia": 575
, "Citroën": 573
, "Toyota": 503
, "Nissan": 373
, "Volvo": 351
, "Tesla": 281
, "Mini": 242
, "Honda": 170
, "Mitsubishi": 133
, "Jeep": 131
, "Porsche": 105
, "Land Rover": 87
, "Subaru": 75
, "Jaguar": 46
, "Smart": 22
, "other": 107
});

db.insert(db.countries.AT, "2019-12", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 216
, "Renault|Zoe": 82
, "Volkswagen|e-Golf": 78
, "BMW|i3 BEV": 67
, "other": 61
, "Hyundai|Kona Electric": 53
, "Tesla|Model S": 40
, "Hyundai|Ioniq Electric": 28
, "Tesla|Model X": 25
, "Kia|Niro EV": 22
, "Kia|Soul EV": 19
});

db.insert(db.countries.AT, "2020-01", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 3884
, "Škoda": 2055
, "Seat": 2019
, "BMW": 1706
, "Opel": 1169
, "Hyundai": 1159
, "Mercedes-Benz": 1156
, "Renault": 1090
, "Ford": 984
, "Audi": 925
, "Peugeot": 892
, "Fiat": 774
, "Citroën": 614
, "Mazda": 576
, "Dacia": 560
, "Kia": 524
, "Toyota": 477
, "Volvo": 363
, "Suzuki": 329
, "Mitsubishi": 305
, "Nissan": 239
, "Jeep": 226
, "Mini": 186
, "Land Rover": 178
, "Porsche": 141
, "Honda": 104
, "Tesla": 70
, "Jaguar": 52
, "Subaru": 44
, "Smart": 15
, "MG": 12
, "other": 131
});

db.insert(db.countries.AT, "2020-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Renault|Zoe": 168
, "other": 164
, "BMW|i3 BEV": 63
, "Hyundai|Kona Electric": 57
, "Nissan|Leaf": 47
, "Seat|Mii Electric": 39
, "Volkswagen|e-Golf": 38
, "Tesla|Model 3": 37
, "Kia|Soul EV": 33
, "Volkswagen|e-up!": 25
, "Audi|Q8 e-tron": 24
});

db.insert(db.countries.AT, "2020-02", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 3307
, "Škoda": 2058
, "Seat": 1598
, "BMW": 1173
, "Mercedes-Benz": 1160
, "Hyundai": 1127
, "Ford": 1089
, "Renault": 1061
, "Opel": 1037
, "Fiat": 870
, "Audi": 782
, "Peugeot": 775
, "Citroën": 529
, "Dacia": 518
, "Suzuki": 516
, "Mazda": 513
, "Kia": 481
, "Toyota": 425
, "Mitsubishi": 296
, "Nissan": 289
, "Volvo": 289
, "Tesla": 243
, "Mini": 164
, "Jeep": 152
, "Honda": 115
, "Land Rover": 100
, "Porsche": 100
, "Subaru": 64
, "Jaguar": 50
, "MG": 16
, "Smart": 14
, "other": 156
});

db.insert(db.countries.AT, "2020-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "other": 230
, "Tesla|Model 3": 219
, "Renault|Zoe": 182
, "BMW|i3 BEV": 57
, "Audi|Q8 e-tron": 52
, "Škoda|Citigo-e": 48
, "Volkswagen|e-Golf": 48
, "Kia|Soul EV": 41
, "Opel|Corsa-e": 40
, "Peugeot|e-208": 35
, "Hyundai|Kona Electric": 29
});

db.insert(db.countries.AT, "2020-03", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 1587
, "Škoda": 1197
, "BMW": 745
, "Hyundai": 684
, "Seat": 526
, "Ford": 519
, "Audi": 494
, "Mercedes-Benz": 467
, "Tesla": 410
, "Renault": 386
, "Suzuki": 374
, "Opel": 294
, "Peugeot": 293
, "Toyota": 293
, "Kia": 291
, "Fiat": 273
, "Mazda": 248
, "Dacia": 245
, "Citroën": 218
, "Mini": 161
, "Volvo": 161
, "Nissan": 155
, "Mitsubishi": 149
, "Jeep": 134
, "Land Rover": 82
, "Porsche": 80
, "Honda": 45
, "Jaguar": 26
, "Subaru": 23
, "MG": 4
, "Smart": 3
, "other": 87
});

db.insert(db.countries.AT, "2020-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Tesla|Model 3": 372
, "other": 98
, "Renault|Zoe": 74
, "BMW|i3 BEV": 33
, "Audi|Q8 e-tron": 33
, "Mini|Cooper SE": 26
, "Kia|Niro EV": 26
, "Nissan|Leaf": 25
, "Tesla|Model S": 23
, "Volkswagen|e-Golf": 21
, "Seat|Mii Electric": 21
});

db.insert(db.countries.AT, "2020-04", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 1651
, "Škoda": 1467
, "BMW": 855
, "Renault": 744
, "Ford": 599
, "Mercedes-Benz": 583
, "Seat": 530
, "Peugeot": 488
, "Audi": 486
, "Kia": 376
, "Hyundai": 345
, "Dacia": 314
, "Opel": 300
, "Fiat": 284
, "Citroën": 273
, "Toyota": 266
, "Tesla": 257
, "Suzuki": 241
, "Mazda": 222
, "Volvo": 179
, "Mitsubishi": 152
, "Nissan": 119
, "Land Rover": 109
, "Mini": 92
, "Porsche": 83
, "Jeep": 43
, "Honda": 39
, "Jaguar": 22
, "Subaru": 20
, "Smart": 7
, "MG": 5
, "other": 69
});

db.insert(db.countries.AT, "2020-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Tesla|Model 3": 227
, "Renault|Zoe": 93
, "other": 66
, "BMW|i3 BEV": 42
, "Kia|Niro EV": 36
, "Audi|Q8 e-tron": 26
, "Tesla|Model S": 18
, "Volkswagen|e-Golf": 17
, "Tesla|Model X": 12
, "Seat|Mii Electric": 11
, "Nissan|Leaf": 9
});

db.insert(db.countries.AT, "2020-05", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 2656
, "Škoda": 1739
, "Seat": 1403
, "BMW": 1322
, "Renault": 1213
, "Ford": 1134
, "Mercedes-Benz": 1070
, "Hyundai": 930
, "Opel": 922
, "Audi": 805
, "Peugeot": 768
, "Fiat": 743
, "Kia": 701
, "Dacia": 694
, "Mazda": 599
, "Citroën": 559
, "Suzuki": 540
, "Toyota": 512
, "Mitsubishi": 361
, "Volvo": 272
, "Mini": 215
, "Nissan": 188
, "Porsche": 156
, "Jeep": 152
, "Land Rover": 135
, "Tesla": 110
, "Honda": 92
, "Subaru": 37
, "Jaguar": 32
, "Smart": 12
, "MG": 6
, "other": 133
});

db.insert(db.countries.AT, "2020-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Renault|Zoe": 175
, "other": 127
, "Kia|Niro EV": 104
, "Tesla|Model 3": 91
, "BMW|i3 BEV": 50
, "Audi|Q8 e-tron": 47
, "Volkswagen|e-Golf": 39
, "Hyundai|Kona Electric": 29
, "Nissan|Leaf": 25
, "Seat|Mii Electric": 24
, "Porsche|Taycan": 24
});

db.insert(db.countries.AT, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 4307
, "Škoda": 3030
, "Renault": 1946
, "Seat": 1755
, "BMW": 1618
, "Ford": 1403
, "Mercedes-Benz": 1204
, "Audi": 1123
, "Hyundai": 1016
, "Opel": 959
, "Fiat": 826
, "Peugeot": 810
, "Kia": 765
, "Mazda": 713
, "Dacia": 706
, "Citroën": 642
, "Toyota": 551
, "Suzuki": 540
, "Volvo": 428
, "Mitsubishi": 377
, "Mini": 302
, "Tesla": 292
, "Nissan": 265
, "Jeep": 241
, "Porsche": 213
, "Honda": 167
, "Land Rover": 107
, "Jaguar": 53
, "Subaru": 38
, "Smart": 18
, "MG": 9
, "other": 252
});

db.insert(db.countries.AT, "2020-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Tesla|Model 3": 245
, "Renault|Zoe": 219
, "other": 170
, "Kia|Niro EV": 133
, "Audi|Q8 e-tron": 60
, "Volkswagen|e-Golf": 58
, "Hyundai|Kona Electric": 54
, "BMW|i3 BEV": 54
, "Porsche|Taycan": 34
, "Volkswagen|e-up!": 31
, "Seat|Mii Electric": 27
});

db.insert(db.countries.AT, "2020-07", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 3860
, "Škoda": 2688
, "Seat": 1743
, "Ford": 1628
, "Renault": 1505
, "BMW": 1473
, "Mercedes-Benz": 1436
, "Audi": 1060
, "Hyundai": 1058
, "Peugeot": 896
, "Fiat": 867
, "Kia": 696
, "Opel": 680
, "Mazda": 634
, "Dacia": 603
, "Toyota": 602
, "Suzuki": 596
, "Citroën": 494
, "Volvo": 322
, "Mitsubishi": 305
, "Mini": 286
, "Nissan": 268
, "Jeep": 218
, "Porsche": 200
, "Honda": 174
, "Land Rover": 93
, "Jaguar": 60
, "Tesla": 60
, "Smart": 40
, "Subaru": 35
, "MG": 14
, "other": 190
});

db.insert(db.countries.AT, "2020-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Renault|Zoe": 277
, "other": 253
, "Kia|Niro EV": 114
, "Audi|Q8 e-tron": 92
, "Hyundai|Kona Electric": 67
, "Tesla|Model 3": 54
, "Volkswagen|e-Golf": 52
, "Volkswagen|e-up!": 49
, "Mercedes-Benz|EQC": 40
, "Peugeot|e-208": 33
, "BMW|i3 BEV": 33
});

db.insert(db.countries.AT, "2020-08", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 3452
, "Škoda": 1532
, "Ford": 1346
, "Mercedes-Benz": 1313
, "Hyundai": 1309
, "Seat": 1222
, "BMW": 1141
, "Audi": 1113
, "Renault": 1032
, "Opel": 912
, "Fiat": 804
, "Peugeot": 724
, "Kia": 693
, "Mazda": 557
, "Toyota": 464
, "Citroën": 439
, "Dacia": 430
, "Suzuki": 420
, "Nissan": 278
, "Mini": 241
, "Jeep": 225
, "Mitsubishi": 216
, "Tesla": 197
, "Volvo": 165
, "Honda": 126
, "Porsche": 116
, "Land Rover": 90
, "Jaguar": 39
, "Smart": 29
, "Subaru": 29
, "MG": 19
, "other": 233
});

db.insert(db.countries.AT, "2020-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "other": 250
, "Tesla|Model 3": 191
, "Hyundai|Kona Electric": 148
, "Renault|Zoe": 141
, "Kia|Niro EV": 76
, "Opel|Corsa-e": 75
, "Audi|Q8 e-tron": 68
, "Peugeot|e-208": 49
, "BMW|i3 BEV": 40
, "Volkswagen|e-Golf": 33
, "Škoda|Citigo-e": 28
, "Mini|Cooper SE": 28
});

db.insert(db.countries.AT, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 3217
, "Škoda": 1966
, "Hyundai": 1582
, "Ford": 1408
, "Seat": 1367
, "Mercedes-Benz": 1292
, "BMW": 980
, "Audi": 959
, "Renault": 907
, "Mazda": 895
, "Fiat": 853
, "Opel": 741
, "Kia": 658
, "Peugeot": 611
, "Tesla": 598
, "Dacia": 517
, "Suzuki": 488
, "Citroën": 463
, "Toyota": 451
, "Mitsubishi": 338
, "Nissan": 297
, "Volvo": 289
, "Mini": 236
, "Jeep": 234
, "Land Rover": 223
, "Honda": 157
, "Porsche": 74
, "Subaru": 66
, "Cupra": 38
, "Jaguar": 31
, "MG": 25
, "Smart": 16
, "other": 185
});

db.insert(db.countries.AT, "2020-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Tesla|Model 3": 546
, "other": 369
, "Volkswagen|ID.3": 251
, "Renault|Zoe": 187
, "Hyundai|Kona Electric": 126
, "Kia|Niro EV": 117
, "Mazda|MX-30 BEV": 95
, "Opel|Corsa-e": 67
, "BMW|i3 BEV": 65
, "Seat|Mii Electric": 62
, "Volkswagen|e-up!": 61
});

db.insert(db.countries.AT, "2020-10", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 3413
, "Škoda": 2602
, "Seat": 1579
, "Ford": 1538
, "BMW": 1378
, "Renault": 1279
, "Hyundai": 1235
, "Mercedes-Benz": 1196
, "Audi": 1173
, "Opel": 928
, "Fiat": 908
, "Peugeot": 885
, "Mazda": 866
, "Kia": 834
, "Dacia": 799
, "Toyota": 677
, "Citroën": 526
, "Suzuki": 514
, "Mini": 282
, "Volvo": 282
, "Nissan": 234
, "Jeep": 201
, "Mitsubishi": 195
, "Land Rover": 174
, "Honda": 133
, "Porsche": 79
, "Jaguar": 70
, "Tesla": 39
, "MG": 36
, "Cupra": 34
, "Smart": 22
, "Subaru": 19
, "JAC": 8
, "other": 136
});

db.insert(db.countries.AT, "2020-10", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "other": 424
, "Kia|Niro EV": 244
, "Volkswagen|ID.3": 201
, "Renault|Zoe": 137
, "Hyundai|Kona Electric": 108
, "Opel|Corsa-e": 102
, "BMW|i3 BEV": 101
, "Audi|Q8 e-tron": 78
, "Peugeot|e-208": 65
, "Mazda|MX-30 BEV": 60
, "Hyundai|Ioniq Electric": 58
});

db.insert(db.countries.AT, "2020-11", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 3566
, "BMW": 1753
, "Škoda": 1711
, "Audi": 1144
, "Seat": 1087
, "Renault": 1071
, "Mercedes-Benz": 955
, "Ford": 939
, "Hyundai": 835
, "Opel": 788
, "Peugeot": 788
, "Fiat": 759
, "Dacia": 628
, "Kia": 509
, "Citroën": 504
, "Mazda": 497
, "Toyota": 394
, "Volvo": 299
, "Suzuki": 292
, "Mini": 205
, "Tesla": 203
, "Nissan": 189
, "Land Rover": 182
, "Mitsubishi": 140
, "Jeep": 119
, "Honda": 105
, "Porsche": 76
, "Cupra": 48
, "Jaguar": 41
, "Smart": 24
, "Subaru": 22
, "MG": 18
, "other": 164
});

db.insert(db.countries.AT, "2020-11", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen|ID.3": 523
, "other": 522
, "Tesla|Model 3": 191
, "Renault|Zoe": 129
, "Mazda|MX-30 BEV": 125
, "Kia|Niro EV": 123
, "Audi|Q8 e-tron": 113
, "Hyundai|Kona Electric": 104
, "Seat|Mii Electric": 94
, "BMW|i3 BEV": 69
, "Peugeot|e-2008": 68
});

db.insert(db.countries.AT, "2020-12", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen": 3372
, "Hyundai": 1777
, "BMW": 1668
, "Škoda": 1557
, "Ford": 1432
, "Renault": 1276
, "Mercedes-Benz": 1171
, "Seat": 1064
, "Peugeot": 1034
, "Fiat": 958
, "Audi": 921
, "Opel": 897
, "Dacia": 829
, "Tesla": 750
, "Citroën": 678
, "Toyota": 616
, "Mazda": 556
, "Suzuki": 473
, "Kia": 407
, "Nissan": 345
, "Volvo": 312
, "Mitsubishi": 267
, "Jeep": 218
, "Mini": 199
, "Honda": 170
, "Land Rover": 148
, "Jaguar": 78
, "Smart": 69
, "Porsche": 61
, "Subaru": 38
, "Cupra": 28
, "MG": 12
, "JAC": 11
, "other": 380
});

db.insert(db.countries.AT, "2020-12", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "other": 830
, "Volkswagen|ID.3": 694
, "Tesla|Model 3": 687
, "Renault|Zoe": 289
, "Seat|Mii Electric": 182
, "Audi|Q8 e-tron": 137
, "Fiat|500e": 134
, "Hyundai|Kona Electric": 120
, "Kia|Niro EV": 112
, "Mazda|MX-30 BEV": 77
});

db.insert(db.countries.AT, "2021-01", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 2809
, "Seat": 1559
, "Škoda": 1324
, "BMW": 1240
, "Audi": 864
, "Mercedes-Benz": 685
, "Ford": 625
, "Renault": 617
, "Fiat": 497
, "Opel": 448
, "Peugeot": 419
, "Kia": 326
, "Hyundai": 317
, "Toyota": 301
, "Volvo": 274
, "Mazda": 242
, "Dacia": 238
, "Citroën": 192
, "Suzuki": 191
, "Mini": 122
, "Tesla": 112
, "Jeep": 105
, "Nissan": 105
, "Cupra": 102
, "Mitsubishi": 91
, "Porsche": 73
, "Land Rover": 69
, "Jaguar": 61
, "Honda": 48
, "MG": 19
, "Subaru": 17
, "Smart": 13
, "JAC": 4
, "other": 24
});

db.insert(db.countries.AT, "2021-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "other": 404
, "Volkswagen|ID.3": 199
, "Renault|Zoe": 196
, "Audi|Q8 e-tron": 135
, "Tesla|Model 3": 94
, "BMW|i3 BEV": 69
, "Fiat|500e": 62
, "Peugeot|e-2008": 61
, "Kia|Niro EV": 60
, "Opel|Corsa-e": 49
, "Jaguar|I-Pace": 48
});

db.insert(db.countries.AT, "2021-02", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 3132
, "Škoda": 2008
, "Seat": 1721
, "Ford": 1348
, "BMW": 1059
, "Mercedes-Benz": 983
, "Audi": 967
, "Renault": 938
, "Opel": 836
, "Fiat": 724
, "Peugeot": 667
, "Dacia": 566
, "Kia": 544
, "Mazda": 520
, "Hyundai": 504
, "Suzuki": 468
, "Toyota": 437
, "Citroën": 411
, "Tesla": 362
, "Volvo": 292
, "Mitsubishi": 193
, "Nissan": 193
, "Jeep": 187
, "Mini": 159
, "Land Rover": 148
, "Cupra": 124
, "Honda": 75
, "Porsche": 74
, "Jaguar": 71
, "MG": 37
, "Subaru": 17
, "Smart": 14
, "JAC": 4
, "other": 80
});

db.insert(db.countries.AT, "2021-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "other": 462
, "Tesla|Model 3": 362
, "Volkswagen|ID.3": 260
, "Fiat|500e": 152
, "Kia|Niro EV": 123
, "Renault|Zoe": 116
, "Audi|Q8 e-tron": 101
, "Opel|Corsa-e": 82
, "Seat|Mii Electric": 64
, "Peugeot|e-208": 55
, "BMW|i3 BEV": 54
});

db.insert(db.countries.AT, "2021-03", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 4256
, "Škoda": 2403
, "Seat": 1894
, "BMW": 1528
, "Ford": 1518
, "Mercedes-Benz": 1355
, "Audi": 1345
, "Renault": 1331
, "Hyundai": 1312
, "Opel": 1304
, "Fiat": 1256
, "Tesla": 1128
, "Mazda": 1076
, "Peugeot": 981
, "Kia": 933
, "Suzuki": 916
, "Toyota": 819
, "Citroën": 775
, "Dacia": 688
, "Nissan": 408
, "Mitsubishi": 378
, "Volvo": 316
, "Jeep": 299
, "Mini": 252
, "Land Rover": 187
, "Cupra": 170
, "Porsche": 156
, "Honda": 138
, "Jaguar": 116
, "MG": 73
, "Subaru": 43
, "Smart": 14
, "JAC": 3
, "other": 155
});

db.insert(db.countries.AT, "2021-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Tesla|Model 3": 1127
, "other": 714
, "Volkswagen|ID.4": 419
, "Volkswagen|ID.3": 242
, "Renault|Zoe": 178
, "Hyundai|Kona Electric": 172
, "Fiat|500e": 153
, "Kia|Niro EV": 147
, "Audi|Q8 e-tron": 112
, "Seat|Mii Electric": 86
, "Peugeot|e-2008": 62
});

db.insert(db.countries.AT, "2021-04", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 3899
, "Škoda": 2236
, "Seat": 1701
, "Mercedes-Benz": 1482
, "Audi": 1400
, "BMW": 1368
, "Ford": 1085
, "Renault": 1030
, "Fiat": 899
, "Opel": 781
, "Kia": 748
, "Peugeot": 691
, "Hyundai": 643
, "Mazda": 637
, "Citroën": 508
, "Toyota": 475
, "Suzuki": 452
, "Dacia": 400
, "Mini": 280
, "Volvo": 228
, "Land Rover": 186
, "Jeep": 176
, "Nissan": 174
, "Porsche": 139
, "Jaguar": 128
, "Mitsubishi": 118
, "Cupra": 109
, "Honda": 97
, "MG": 64
, "Tesla": 34
, "Subaru": 32
, "Smart": 11
, "other": 85
});

db.insert(db.countries.AT, "2021-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "other": 690
, "Volkswagen|ID.3": 363
, "Škoda|Enyaq": 339
, "Volkswagen|ID.4": 280
, "Audi|Q8 e-tron": 159
, "Fiat|500e": 144
, "Renault|Zoe": 121
, "Seat|Mii Electric": 92
, "Kia|Niro EV": 90
, "Jaguar|I-Pace": 63
, "BMW|i3 BEV": 63
});

db.insert(db.countries.AT, "2021-05", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 3596
, "Škoda": 2248
, "BMW": 1561
, "Audi": 1437
, "Seat": 1334
, "Renault": 1179
, "Mercedes-Benz": 1057
, "Ford": 1049
, "Hyundai": 1010
, "Peugeot": 886
, "Fiat": 880
, "Kia": 811
, "Mazda": 760
, "Opel": 719
, "Toyota": 528
, "Citroën": 510
, "Suzuki": 464
, "Dacia": 387
, "Volvo": 259
, "Mini": 230
, "Nissan": 191
, "Mitsubishi": 186
, "Cupra": 170
, "Tesla": 170
, "Porsche": 145
, "Honda": 135
, "Land Rover": 130
, "Jeep": 128
, "Jaguar": 93
, "MG": 64
, "Subaru": 42
, "Smart": 11
, "Polestar": 5
, "other": 128
});

db.insert(db.countries.AT, "2021-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "other": 782
, "Volkswagen|ID.3": 379
, "Škoda|Enyaq": 378
, "Volkswagen|ID.4": 265
, "Fiat|500e": 190
, "Tesla|Model 3": 170
, "Audi|Q8 e-tron": 132
, "Kia|Niro EV": 93
, "Seat|Mii Electric": 79
});

db.insert(db.countries.AT, "2021-06", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 4022
, "Škoda": 2358
, "Seat": 1880
, "BMW": 1450
, "Hyundai": 1378
, "Audi": 1352
, "Fiat": 1343
, "Renault": 1341
, "Ford": 1330
, "Mercedes-Benz": 1195
, "Opel": 854
, "Mazda": 853
, "Kia": 818
, "Tesla": 806
, "Toyota": 679
, "Peugeot": 636
, "Dacia": 584
, "Citroën": 570
, "Suzuki": 487
, "Mini": 301
, "Volvo": 279
, "Mitsubishi": 233
, "Jeep": 232
, "Nissan": 188
, "Cupra": 164
, "Porsche": 151
, "Land Rover": 131
, "Honda": 125
, "Jaguar": 77
, "MG": 54
, "Subaru": 42
, "Smart": 19
, "other": 143
});

db.insert(db.countries.AT, "2021-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Tesla|Model 3": 806
, "Škoda|Enyaq": 313
, "Volkswagen|ID.4": 309
, "Volkswagen|ID.3": 243
, "Renault|Zoe": 201
, "Seat|Mii Electric": 198
, "Fiat|500e": 185
, "Audi|Q8 e-tron": 121
, "other": 1001
});

db.insert(db.countries.AT, "2021-07", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 3113
, "Škoda": 1659
, "BMW": 1415
, "Seat": 1185
, "Ford": 1156
, "Mercedes-Benz": 1103
, "Audi": 1045
, "Hyundai": 898
, "Dacia": 875
, "Renault": 765
, "Fiat": 759
, "Kia": 745
, "Opel": 647
, "Mazda": 631
, "Toyota": 590
, "Peugeot": 587
, "Suzuki": 528
, "Citroën": 351
, "Volvo": 321
, "Mini": 301
, "Nissan": 253
, "Mitsubishi": 219
, "Porsche": 124
, "Jeep": 119
, "Land Rover": 114
, "Cupra": 85
, "Honda": 56
, "Jaguar": 50
, "MG": 45
, "Subaru": 41
, "Tesla": 17
, "Smart": 12
, "Polestar": 5
, "JAC": 3
, "other": 85
});

db.insert(db.countries.AT, "2021-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen|ID.3": 181
, "Volkswagen|ID.4": 159
, "Renault|Zoe": 139
, "Ford|Mustang Mach-E": 139
, "Škoda|Enyaq": 133
, "Audi|Q8 e-tron": 115
, "Seat|Mii Electric": 94
, "BMW|i3 BEV": 94
, "Fiat|500e": 82
, "BMW|iX3": 72
, "other": 782
});

db.insert(db.countries.AT, "2021-08", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 3048
, "Škoda": 1318
, "BMW": 1107
, "Audi": 1068
, "Seat": 1043
, "Ford": 955
, "Mercedes-Benz": 945
, "Fiat": 748
, "Renault": 740
, "Hyundai": 719
, "Kia": 640
, "Mazda": 597
, "Peugeot": 511
, "Suzuki": 510
, "Toyota": 503
, "Dacia": 501
, "Opel": 442
, "Tesla": 349
, "Citroën": 313
, "Mitsubishi": 247
, "Nissan": 200
, "Jeep": 174
, "Volvo": 159
, "Cupra": 157
, "Mini": 153
, "MG": 106
, "Porsche": 95
, "Land Rover": 94
, "Honda": 55
, "Smart": 43
, "Subaru": 37
, "Jaguar": 30
, "Polestar": 8
, "other": 104
});

db.insert(db.countries.AT, "2021-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen|ID.3": 325
, "Ford|Mustang Mach-E": 294
, "Volkswagen|ID.4": 271
, "Seat|Mii Electric": 248
, "Tesla|Model Y": 235
, "Škoda|Enyaq": 233
, "Renault|Zoe": 179
, "Hyundai|Ioniq Electric": 114
, "Kia|Niro EV": 111
, "other": 1076
});

db.insert(db.countries.AT, "2021-09", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 2396
, "Škoda": 1351
, "Hyundai": 1325
, "BMW": 1178
, "Ford": 956
, "Mercedes-Benz": 841
, "Opel": 817
, "Renault": 812
, "Kia": 792
, "Audi": 787
, "Tesla": 757
, "Seat": 679
, "Fiat": 649
, "Dacia": 589
, "Mazda": 542
, "Suzuki": 503
, "Toyota": 446
, "Peugeot": 436
, "Citroën": 424
, "Nissan": 261
, "Volvo": 179
, "Jeep": 172
, "Cupra": 144
, "Land Rover": 141
, "Mitsubishi": 122
, "Honda": 102
, "MG": 85
, "Mini": 79
, "Porsche": 76
, "Subaru": 45
, "Polestar": 30
, "Jaguar": 22
, "Smart": 7
, "JAC": 4
, "other": 115
});

db.insert(db.countries.AT, "2021-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Škoda|Enyaq": 404
, "Tesla|Model 3": 385
, "Tesla|Model Y": 372
, "Volkswagen|ID.3": 317
, "Volkswagen|ID.4": 266
, "Renault|Zoe": 169
, "Hyundai|Ioniq Electric": 169
, "Fiat|500e": 156
, "BMW|i3 BEV": 122
, "Audi|Q8 e-tron": 118
, "other": 1119
});

db.insert(db.countries.AT, "2021-10", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 1684
, "Škoda": 1077
, "Hyundai": 1003
, "BMW": 998
, "Mercedes-Benz": 978
, "Ford": 844
, "Audi": 714
, "Kia": 712
, "Fiat": 711
, "Renault": 668
, "Opel": 639
, "Peugeot": 544
, "Mazda": 528
, "Toyota": 513
, "Suzuki": 480
, "Seat": 448
, "Dacia": 441
, "Citroën": 288
, "Volvo": 233
, "Nissan": 150
, "Mini": 142
, "Jeep": 124
, "Land Rover": 124
, "Porsche": 111
, "Cupra": 108
, "Mitsubishi": 89
, "Honda": 82
, "MG": 63
, "Jaguar": 50
, "Subaru": 45
, "Tesla": 41
, "Polestar": 18
, "Smart": 6
, "other": 99
});

db.insert(db.countries.AT, "2021-10", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Hyundai|Ioniq Electric": 222
, "Volkswagen|ID.4": 192
, "Škoda|Enyaq": 188
, "Volkswagen|ID.3": 169
, "Kia|EV6": 137
, "Renault|Zoe": 133
, "Audi|Q4 e-tron": 115
, "BMW|iX3": 98
, "Kia|Niro EV": 71
, "BMW|i3 BEV": 71
, "other": 927
});

db.insert(db.countries.AT, "2021-11", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Škoda": 2106
, "Volkswagen": 1963
, "BMW": 1456
, "Hyundai": 1164
, "Mercedes-Benz": 963
, "Seat": 934
, "Renault": 837
, "Audi": 827
, "Fiat": 706
, "Ford": 663
, "Dacia": 638
, "Toyota": 553
, "Kia": 548
, "Peugeot": 508
, "Tesla": 468
, "Opel": 436
, "Suzuki": 405
, "Cupra": 394
, "Mazda": 392
, "Citroën": 310
, "Volvo": 272
, "Mini": 211
, "Nissan": 150
, "Jeep": 122
, "Porsche": 85
, "MG": 73
, "Mitsubishi": 66
, "Honda": 60
, "Land Rover": 56
, "Jaguar": 34
, "Subaru": 25
, "Polestar": 22
, "Smart": 7
, "other": 65
});

db.insert(db.countries.AT, "2021-11", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Tesla|Model Y": 313
, "Audi|Q4 e-tron": 225
, "Škoda|Enyaq": 220
, "Renault|Zoe": 206
, "Hyundai|Ioniq Electric": 197
, "Volkswagen|ID.4": 180
, "Ford|Mustang Mach-E": 165
, "Volkswagen|e-up!": 156
, "Tesla|Model 3": 155
, "Volkswagen|ID.3": 143
, "other": 1538
});

db.insert(db.countries.AT, "2021-12", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen": 2048
, "Škoda": 1720
, "Hyundai": 1663
, "BMW": 1270
, "Renault": 981
, "Mercedes-Benz": 976
, "Peugeot": 801
, "Seat": 760
, "Dacia": 747
, "Fiat": 659
, "Kia": 649
, "Audi": 618
, "Ford": 580
, "Opel": 475
, "Tesla": 456
, "Toyota": 450
, "Mazda": 398
, "Citroën": 386
, "Mini": 344
, "Suzuki": 267
, "Cupra": 256
, "Volvo": 249
, "Jeep": 174
, "Nissan": 139
, "Porsche": 92
, "Mitsubishi": 87
, "Land Rover": 80
, "Honda": 60
, "MG": 36
, "Polestar": 34
, "Subaru": 32
, "Jaguar": 22
, "Smart": 13
, "other": 126
});

db.insert(db.countries.AT, "2021-12", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Hyundai|Ioniq Electric": 277
, "Mini|Cooper SE": 233
, "Tesla|Model 3": 230
, "Tesla|Model Y": 226
, "Renault|Zoe": 224
, "Cupra|Born": 169
, "Audi|Q4 e-tron": 140
, "Ford|Mustang Mach-E": 137
, "BMW|iX3": 137
, "Dacia|Spring": 136
, "other": 1502
});

db.insert(db.countries.AT, "2022-01", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 2704
, "Škoda": 1610
, "Audi": 1251
, "BMW": 983
, "Mercedes-Benz": 794
, "Ford": 782
, "Toyota": 707
, "Peugeot": 689
, "Dacia": 667
, "Kia": 577
, "Seat": 564
, "Renault": 552
, "Hyundai": 494
, "Cupra": 381
, "Fiat": 351
, "Volvo": 321
, "Opel": 318
, "Mazda": 311
, "Suzuki": 245
, "Citroën": 222
, "Mini": 167
, "Porsche": 164
, "Nissan": 161
, "Jeep": 103
, "Mitsubishi": 94
, "Land Rover": 85
, "Honda": 70
, "MG": 67
, "Subaru": 34
, "Tesla": 28
, "Jaguar": 25
, "Polestar": 20
, "Smart": 6
, "other": 72
});

db.insert(db.countries.AT, "2022-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Cupra|Born": 266
, "Audi|Q4 e-tron": 156
, "Škoda|Enyaq": 132
, "Ford|Mustang Mach-E": 119
, "Kia|EV6": 103
, "Renault|Zoe": 89
, "Volkswagen|ID.3": 88
, "Volkswagen|ID.4": 83
, "Audi|Q8 e-tron": 79
, "BMW|i3 BEV": 67
, "other": 831
});

db.insert(db.countries.AT, "2022-02", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 1691
, "Škoda": 1631
, "Audi": 1123
, "BMW": 1116
, "Seat": 1024
, "Ford": 747
, "Mercedes-Benz": 738
, "Kia": 731
, "Toyota": 707
, "Renault": 664
, "Peugeot": 646
, "Mazda": 548
, "Hyundai": 507
, "Suzuki": 455
, "Opel": 447
, "Tesla": 435
, "Fiat": 395
, "Citroën": 365
, "Dacia": 365
, "Cupra": 325
, "Volvo": 235
, "Nissan": 212
, "Mini": 202
, "Jeep": 158
, "Mitsubishi": 138
, "Honda": 94
, "MG": 78
, "Land Rover": 73
, "Porsche": 70
, "Subaru": 35
, "Polestar": 33
, "Jaguar": 24
, "Smart": 9
, "other": 82
});

db.insert(db.countries.AT, "2022-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Tesla|Model Y": 367
, "Cupra|Born": 169
, "Audi|Q4 e-tron": 126
, "Renault|Zoe": 111
, "BMW|i3 BEV": 109
, "Škoda|Enyaq": 89
, "Kia|Niro EV": 89
, "Tesla|Model 3": 68
, "Kia|EV6": 65
, "Ford|Mustang Mach-E": 63
, "other": 858
});

db.insert(db.countries.AT, "2022-03", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 2570
, "Škoda": 1549
, "BMW": 1494
, "Audi": 1289
, "Mercedes-Benz": 1241
, "Ford": 1049
, "Seat": 1005
, "Renault": 972
, "Mazda": 971
, "Tesla": 970
, "Kia": 865
, "Toyota": 843
, "Hyundai": 813
, "Peugeot": 719
, "Opel": 701
, "Dacia": 521
, "Cupra": 432
, "Citroën": 396
, "Fiat": 333
, "Suzuki": 317
, "Volvo": 276
, "Mitsubishi": 203
, "Mini": 179
, "Honda": 153
, "Porsche": 150
, "Jeep": 148
, "Nissan": 101
, "Land Rover": 88
, "MG": 72
, "Jaguar": 40
, "Subaru": 32
, "Polestar": 28
, "Smart": 13
, "other": 120
});

db.insert(db.countries.AT, "2022-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Tesla|Model Y": 655
, "Tesla|Model 3": 315
, "Škoda|Enyaq": 175
, "Cupra|Born": 146
, "BMW|i3 BEV": 145
, "Audi|Q4 e-tron": 113
, "Ford|Mustang Mach-E": 112
, "Kia|EV6": 89
, "Audi|Q8 e-tron": 81
, "Kia|Niro EV": 80
, "other": 1128
});

db.insert(db.countries.AT, "2022-04", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 2204
, "BMW": 1500
, "Škoda": 1389
, "Audi": 1228
, "Mercedes-Benz": 1018
, "Ford": 948
, "Seat": 865
, "Kia": 839
, "Toyota": 778
, "Renault": 776
, "Hyundai": 733
, "Mazda": 460
, "Cupra": 454
, "Dacia": 435
, "Opel": 380
, "Peugeot": 278
, "Suzuki": 219
, "Volvo": 213
, "Fiat": 195
, "Mitsubishi": 183
, "Citroën": 178
, "Mini": 139
, "Honda": 132
, "Jeep": 117
, "Porsche": 114
, "Land Rover": 100
, "Nissan": 86
, "MG": 71
, "Tesla": 65
, "Jaguar": 49
, "Polestar": 47
, "Subaru": 29
, "Smart": 10
, "JAC": 2
, "other": 130
});

db.insert(db.countries.AT, "2022-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Cupra|Born": 144
, "Škoda|Enyaq": 104
, "Ford|Mustang Mach-E": 99
, "BMW|i3 BEV": 98
, "Kia|EV6": 93
, "Renault|Zoe": 85
, "Volkswagen|ID.3": 81
, "Audi|Q8 e-tron": 78
, "Dacia|Spring": 76
, "Fiat|500e": 73
, "other": 918
});

db.insert(db.countries.AT, "2022-05", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 2309
, "Škoda": 1508
, "BMW": 1263
, "Seat": 1156
, "Audi": 1106
, "Ford": 1055
, "Hyundai": 989
, "Mercedes-Benz": 885
, "Toyota": 807
, "Kia": 788
, "Renault": 625
, "Cupra": 611
, "Mazda": 439
, "Peugeot": 433
, "Opel": 399
, "Dacia": 361
, "Fiat": 327
, "Suzuki": 245
, "Volvo": 237
, "Nissan": 224
, "Citroën": 193
, "Mitsubishi": 168
, "Mini": 165
, "Honda": 117
, "Porsche": 111
, "Jeep": 106
, "Land Rover": 85
, "Polestar": 82
, "MG": 81
, "Subaru": 37
, "Tesla": 30
, "Jaguar": 18
, "Smart": 9
, "JAC": 2
, "other": 136
});

db.insert(db.countries.AT, "2022-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Cupra|Born": 250
, "Renault|Zoe": 151
, "Škoda|Enyaq": 127
, "Ford|Mustang Mach-E": 101
, "Audi|Q4 e-tron": 82
, "BMW|iX3": 81
, "Polestar|2": 80
, "Fiat|500e": 79
, "BMW|i3 BEV": 77
, "Kia|EV6": 76
, "other": 960
});

db.insert(db.countries.AT, "2022-06", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 3689
, "Škoda": 1811
, "Hyundai": 1700
, "BMW": 1309
, "Seat": 1231
, "Audi": 1099
, "Ford": 1042
, "Dacia": 960
, "Mercedes-Benz": 955
, "Kia": 895
, "Peugeot": 874
, "Tesla": 838
, "Renault": 801
, "Opel": 780
, "Toyota": 754
, "Cupra": 583
, "Fiat": 571
, "Citroën": 434
, "Mazda": 405
, "Suzuki": 303
, "Mini": 239
, "Mitsubishi": 230
, "Nissan": 181
, "Volvo": 163
, "Jeep": 150
, "Porsche": 128
, "Land Rover": 114
, "Honda": 110
, "Polestar": 89
, "MG": 56
, "Jaguar": 39
, "Subaru": 14
, "Smart": 5
, "other": 208
});

db.insert(db.countries.AT, "2022-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Tesla|Model Y": 786
, "Volkswagen|ID.4": 307
, "Cupra|Born": 214
, "Škoda|Enyaq": 181
, "Renault|Zoe": 117
, "Renault|Megane E-Tech": 93
, "BMW|iX3": 91
, "Hyundai|Ioniq 5": 88
, "Volkswagen|ID.3": 87
, "Polestar|2": 87
, "other": 1363
});

db.insert(db.countries.AT, "2022-07", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 2252
, "Škoda": 1693
, "Dacia": 1052
, "Mercedes-Benz": 994
, "BMW": 929
, "Audi": 905
, "Ford": 902
, "Peugeot": 824
, "Seat": 706
, "Citroën": 565
, "Toyota": 534
, "Kia": 510
, "Fiat": 471
, "Opel": 469
, "Hyundai": 455
, "Cupra": 440
, "Renault": 314
, "Mazda": 283
, "Suzuki": 251
, "Mini": 244
, "Volvo": 234
, "Nissan": 147
, "Porsche": 142
, "Jeep": 135
, "MG": 116
, "Land Rover": 88
, "Honda": 51
, "Tesla": 49
, "Mitsubishi": 45
, "Jaguar": 36
, "Polestar": 36
, "Subaru": 28
, "Smart": 4
, "other": 150
});

db.insert(db.countries.AT, "2022-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Cupra|Born": 296
, "Škoda|Enyaq": 220
, "Volkswagen|ID.4": 198
, "Ford|Mustang Mach-E": 167
, "Opel|Mokka-e": 75
, "Fiat|500e": 74
, "Kia|Niro EV": 69
, "Citroën|ë-C4": 65
, "Volkswagen|ID.3": 62
, "Audi|Q4 e-tron": 62
, "other": 1130
});

db.insert(db.countries.AT, "2022-08", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 3154
, "Škoda": 1408
, "BMW": 1320
, "Audi": 1018
, "Mercedes-Benz": 980
, "Hyundai": 974
, "Dacia": 916
, "Ford": 890
, "Toyota": 741
, "Kia": 721
, "Seat": 646
, "Fiat": 605
, "Peugeot": 536
, "Citroën": 509
, "Cupra": 438
, "Mazda": 363
, "Opel": 344
, "Renault": 332
, "Suzuki": 323
, "Tesla": 311
, "Mini": 205
, "Volvo": 164
, "Nissan": 137
, "Mitsubishi": 111
, "Land Rover": 105
, "Porsche": 88
, "Jeep": 83
, "Honda": 61
, "MG": 55
, "Polestar": 51
, "Subaru": 32
, "Jaguar": 29
, "JAC": 2
, "other": 162
});

db.insert(db.countries.AT, "2022-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Tesla|Model Y": 309
, "Volkswagen|ID.4": 258
, "Cupra|Born": 221
, "Škoda|Enyaq": 186
, "Volkswagen|ID.3": 135
, "BMW|iX3": 114
, "Ford|Mustang Mach-E": 83
, "Fiat|500e": 75
, "BMW|i3 BEV": 75
, "Audi|Q4 e-tron": 74
, "other": 1109
});

db.insert(db.countries.AT, "2022-09", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 3026
, "Škoda": 1878
, "BMW": 1516
, "Tesla": 1473
, "Hyundai": 1298
, "Mercedes-Benz": 1152
, "Ford": 1130
, "Kia": 813
, "Seat": 812
, "Audi": 777
, "Toyota": 735
, "Cupra": 716
, "Renault": 686
, "Dacia": 681
, "Peugeot": 609
, "Mazda": 607
, "Opel": 458
, "Fiat": 381
, "Citroën": 287
, "Mitsubishi": 279
, "Suzuki": 258
, "Volvo": 178
, "Nissan": 175
, "Mini": 168
, "Honda": 99
, "Porsche": 99
, "Jeep": 69
, "MG": 66
, "Land Rover": 49
, "Polestar": 48
, "Jaguar": 35
, "Subaru": 18
, "other": 159
});

db.insert(db.countries.AT, "2022-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Cupra|Born": 266
, "Audi|Q4 e-tron": 156
, "Škoda|Enyaq": 132
, "Ford|Mustang Mach-E": 119
, "Kia|EV6": 103
, "Renault|Zoe": 89
, "Volkswagen|ID.3": 88
, "Volkswagen|ID.4": 83
, "Audi|Q8 e-tron": 79
, "BMW|i3 BEV": 67
, "other": 831
});

db.insert(db.countries.AT, "2022-10", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 2583
, "Škoda": 1605
, "BMW": 1366
, "Mercedes-Benz": 1057
, "Hyundai": 915
, "Ford": 886
, "Seat": 871
, "Audi": 759
, "Kia": 659
, "Toyota": 656
, "Renault": 621
, "Dacia": 543
, "Mazda": 465
, "Fiat": 331
, "Cupra": 324
, "Peugeot": 298
, "Volvo": 296
, "Opel": 270
, "Citroën": 196
, "Mini": 159
, "Mitsubishi": 156
, "Suzuki": 156
, "Nissan": 150
, "MG": 116
, "Porsche": 103
, "Jeep": 87
, "Honda": 85
, "Tesla": 57
, "Land Rover": 53
, "Polestar": 48
, "Jaguar": 23
, "Subaru": 19
, "Smart": 7
, "other": 141
});

db.insert(db.countries.AT, "2022-10", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen|ID.4": 447
, "Volkswagen|ID.3": 272
, "Škoda|Enyaq": 270
, "Ford|Mustang Mach-E": 112
, "Cupra|Born": 112
, "Hyundai|Ioniq 5": 101
, "BMW|iX3": 82
, "Audi|Q4 e-tron": 81
, "Renault|Megane E-Tech": 78
, "Mercedes-Benz|EQC": 67
, "other": 1038
});

db.insert(db.countries.AT, "2022-11", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 2812
, "BMW": 1709
, "Škoda": 1306
, "Toyota": 979
, "Seat": 919
, "Hyundai": 873
, "Ford": 865
, "Audi": 829
, "Mercedes-Benz": 810
, "Renault": 769
, "Peugeot": 688
, "Kia": 652
, "Dacia": 553
, "Opel": 525
, "Tesla": 506
, "Fiat": 393
, "Citroën": 392
, "Mazda": 386
, "Cupra": 347
, "Volvo": 315
, "MG": 215
, "Suzuki": 209
, "Nissan": 195
, "Mini": 164
, "Mitsubishi": 141
, "Porsche": 96
, "Honda": 93
, "Jeep": 81
, "Polestar": 71
, "Land Rover": 54
, "Jaguar": 22
, "Subaru": 19
, "Smart": 4
, "Chevrolet": 2
, "other": 184
});

db.insert(db.countries.AT, "2022-11", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen|ID.4": 633
, "Tesla|Model Y": 444
, "Volkswagen|ID.3": 208
, "Škoda|Enyaq": 195
, "Hyundai|Ioniq 5": 163
, "Cupra|Born": 127
, "Audi|Q4 e-tron": 107
, "Renault|Megane E-Tech": 103
, "Volkswagen|ID.5": 98
, "BMW|iX3": 97
, "other": 1255
});

db.insert(db.countries.AT, "2022-12", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen": 2957
, "BMW": 1811
, "Hyundai": 1343
, "Škoda": 1337
, "Mercedes-Benz": 891
, "Toyota": 883
, "Audi": 824
, "Ford": 694
, "Kia": 662
, "Tesla": 648
, "Renault": 641
, "Dacia": 624
, "Seat": 607
, "Mazda": 494
, "Peugeot": 429
, "Suzuki": 290
, "Citroën": 281
, "Fiat": 273
, "MG": 271
, "Cupra": 247
, "Volvo": 238
, "Opel": 181
, "Mini": 171
, "Nissan": 167
, "Mitsubishi": 112
, "Porsche": 79
, "Land Rover": 56
, "Honda": 53
, "Jeep": 45
, "Polestar": 33
, "Jaguar": 27
, "Subaru": 12
, "BAIC": 3
, "Smart": 3
, "Chevrolet": 2
, "other": 213
});

db.insert(db.countries.AT, "2022-12", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2022.ods",
{ "Volkswagen|ID.4": 745
, "Tesla|Model 3": 312
, "Volkswagen|ID.5": 235
, "Hyundai|Ioniq 5": 203
, "BMW|iX": 187
, "Tesla|Model Y": 178
, "BMW|iX3": 169
, "Volkswagen|ID.3": 158
, "Audi|Q4 e-tron": 130
, "Cupra|Born": 128
, "other": 1526
});

db.insert(db.countries.AT, "2023-01", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 3139
, "Škoda": 2012
, "Seat": 1742
, "BMW": 1251
, "Audi": 1249
, "Mercedes-Benz": 980
, "Toyota": 881
, "Ford": 722
, "Dacia": 645
, "Kia": 604
, "Renault": 599
, "Cupra": 538
, "Peugeot": 474
, "Hyundai": 430
, "Mazda": 412
, "Tesla": 373
, "Opel": 366
, "Citroën": 316
, "Suzuki": 303
, "Volvo": 276
, "Fiat": 255
, "MG": 216
, "Nissan": 181
, "Porsche": 134
, "Mitsubishi": 122
, "Mini": 117
, "Land Rover": 79
, "Jeep": 67
, "Polestar": 52
, "Honda": 39
, "Jaguar": 27
, "Subaru": 26
, "BYD": 13
, "Smart": 3
, "other": 207
});

db.insert(db.countries.AT, "2023-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Tesla|Model Y": 275
, "Cupra|Born": 253
, "Audi|Q4 e-tron": 170
, "Škoda|Enyaq": 133
, "Volkswagen|ID.4": 133
, "BMW|iX3": 115
, "Volkswagen|ID. Buzz": 103
, "BMW|iX1": 84
, "Hyundai|Ioniq 5": 81
, "Ford|Mustang Mach-E": 77
, "other": 1321
});

db.insert(db.countries.AT, "2023-02", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 2466
, "Škoda": 1666
, "Audi": 1195
, "BMW": 1132
, "Mercedes-Benz": 1071
, "Dacia": 909
, "Tesla": 853
, "Seat": 845
, "Ford": 781
, "Toyota": 773
, "Renault": 744
, "Kia": 665
, "Hyundai": 492
, "Cupra": 485
, "Mazda": 453
, "Opel": 448
, "Fiat": 418
, "Citroën": 355
, "Peugeot": 348
, "Suzuki": 301
, "Volvo": 299
, "Nissan": 174
, "MG": 166
, "Mitsubishi": 159
, "Mini": 154
, "Porsche": 90
, "Land Rover": 67
, "Honda": 59
, "Jeep": 59
, "Polestar": 35
, "Subaru": 31
, "Jaguar": 26
, "BYD": 17
, "Smart": 5
, "other": 154
});

db.insert(db.countries.AT, "2023-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Tesla|Model Y": 627
, "Škoda|Enyaq": 236
, "Cupra|Born": 222
, "Tesla|Model 3": 217
, "Audi|Q4 e-tron": 186
, "Volkswagen|ID.4": 170
, "Fiat|500e": 162
, "Renault|Megane E-Tech": 115
, "BMW|iX3": 91
, "Volkswagen|ID.3": 87
, "other": 1302
});

db.insert(db.countries.AT, "2023-03", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 3504
, "Škoda": 2692
, "Audi": 1769
, "BMW": 1703
, "Tesla": 1487
, "Mercedes-Benz": 1478
, "Ford": 1251
, "Seat": 1226
, "Dacia": 1088
, "Renault": 1017
, "Hyundai": 993
, "Toyota": 941
, "Kia": 905
, "Mazda": 793
, "Cupra": 694
, "Opel": 637
, "Peugeot": 594
, "Citroën": 454
, "Fiat": 433
, "Suzuki": 361
, "Volvo": 322
, "MG": 297
, "Mini": 269
, "Porsche": 239
, "Land Rover": 190
, "Nissan": 182
, "Mitsubishi": 149
, "Honda": 116
, "Jeep": 72
, "BYD": 46
, "Jaguar": 45
, "Polestar": 30
, "Subaru": 27
, "Smart": 5
, "Chevrolet": 3
, "other": 295
});

db.insert(db.countries.AT, "2023-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Tesla|Model Y": 1162
, "Cupra|Born": 276
, "Škoda|Enyaq": 241
, "Tesla|Model 3": 234
, "Volkswagen|ID.4": 233
, "Audi|Q4 e-tron": 185
, "Renault|Megane E-Tech": 166
, "Volkswagen|ID.3": 156
, "BMW|i4": 145
, "BMW|iX1": 128
, "other": 2149
});

db.insert(db.countries.AT, "2023-04", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 2779
, "Škoda": 1650
, "BMW": 1363
, "Audi": 1228
, "Ford": 915
, "Hyundai": 852
, "Mercedes-Benz": 852
, "Kia": 843
, "Seat": 827
, "Toyota": 753
, "Dacia": 712
, "Renault": 680
, "Cupra": 583
, "Mazda": 578
, "Peugeot": 424
, "Tesla": 410
, "Citroën": 361
, "Suzuki": 349
, "Opel": 308
, "Fiat": 301
, "MG": 216
, "Volvo": 205
, "Mitsubishi": 195
, "Nissan": 194
, "Porsche": 164
, "Mini": 135
, "BYD": 92
, "Land Rover": 88
, "Jeep": 85
, "Polestar": 75
, "Honda": 33
, "Subaru": 33
, "Jaguar": 26
, "Smart": 6
, "BAIC": 2
, "Chevrolet": 2
, "other": 185
});

db.insert(db.countries.AT, "2023-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Tesla|Model Y": 346
, "Cupra|Born": 254
, "Volkswagen|ID.4": 233
, "Škoda|Enyaq": 220
, "Audi|Q4 e-tron": 206
, "BMW|iX1": 132
, "Volkswagen|ID.3": 129
, "Renault|Megane E-Tech": 114
, "Kia|EV6": 106
, "BMW|i4": 96
, "other": 1559
});

db.insert(db.countries.AT, "2023-05", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 3107
, "Škoda": 2088
, "BMW": 1650
, "Audi": 1491
, "Seat": 1185
, "Toyota": 939
, "Tesla": 848
, "Mercedes-Benz": 842
, "Kia": 818
, "Cupra": 793
, "Renault": 761
, "Ford": 753
, "Dacia": 651
, "Hyundai": 582
, "Opel": 545
, "Mazda": 448
, "Peugeot": 371
, "Suzuki": 324
, "Fiat": 296
, "Citroën": 277
, "Mitsubishi": 254
, "MG": 249
, "Volvo": 216
, "Mini": 213
, "Nissan": 166
, "Porsche": 146
, "Land Rover": 94
, "Polestar": 78
, "Jeep": 71
, "BYD": 60
, "Honda": 57
, "Subaru": 47
, "Jaguar": 40
, "Chevrolet": 3
, "Smart": 3
, "other": 157
});

db.insert(db.countries.AT, "2023-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Tesla|Model Y": 638
, "Audi|Q4 e-tron": 321
, "Škoda|Enyaq": 261
, "Cupra|Born": 244
, "Volkswagen|ID.4": 242
, "BMW|iX1": 186
, "BMW|i4": 172
, "Tesla|Model 3": 149
, "Volkswagen|ID.3": 121
, "Fiat|500e": 120
, "other": 1676
});

db.insert(db.countries.AT, "2023-06", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 3642
, "Škoda": 2320
, "Audi": 1823
, "BMW": 1507
, "Hyundai": 1379
, "Seat": 1288
, "Mercedes-Benz": 1068
, "Renault": 995
, "Kia": 993
, "Toyota": 949
, "Tesla": 924
, "Opel": 767
, "Mazda": 762
, "Dacia": 745
, "Ford": 723
, "Cupra": 682
, "Peugeot": 568
, "Citroën": 521
, "Fiat": 514
, "Suzuki": 382
, "Nissan": 280
, "Volvo": 239
, "Mitsubishi": 237
, "MG": 203
, "Porsche": 165
, "Mini": 161
, "Jeep": 112
, "Land Rover": 92
, "Polestar": 89
, "BYD": 84
, "Honda": 50
, "Jaguar": 41
, "Subaru": 37
, "Smart": 8
, "other": 161
});

db.insert(db.countries.AT, "2023-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Tesla|Model Y": 701
, "Škoda|Enyaq": 376
, "Volkswagen|ID.3": 232
, "Volkswagen|ID.4": 227
, "Cupra|Born": 216
, "Tesla|Model 3": 175
, "Audi|Q4 e-tron": 159
, "Fiat|500e": 159
, "BMW|i4": 156
, "BMW|iX1": 123
, "other": 2088
});

db.insert(db.countries.AT, "2023-07", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 2248
, "Škoda": 1844
, "BMW": 1338
, "Audi": 1218
, "Seat": 1086
, "Mercedes-Benz": 1005
, "Toyota": 770
, "Cupra": 666
, "Dacia": 664
, "Kia": 644
, "Renault": 608
, "Hyundai": 561
, "Peugeot": 552
, "Ford": 522
, "Opel": 420
, "Mazda": 409
, "Tesla": 366
, "Suzuki": 364
, "Fiat": 266
, "MG": 256
, "Nissan": 232
, "Citroën": 205
, "Volvo": 203
, "Mini": 175
, "Mitsubishi": 173
, "Porsche": 137
, "Land Rover": 116
, "Jeep": 94
, "Honda": 82
, "Polestar": 81
, "BYD": 52
, "Jaguar": 40
, "Subaru": 25
, "Smart": 16
, "BAIC": 2
, "Chevrolet": 2
, "other": 124
});

db.insert(db.countries.AT, "2023-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Škoda|Enyaq": 284
, "Tesla|Model Y": 270
, "Cupra|Born": 221
, "Volkswagen|ID.4": 178
, "Kia|EV6": 162
, "BMW|i4": 131
, "BMW|iX3": 117
, "Audi|Q4 e-tron": 112
, "MG|4 EV": 111
, "BMW|iX1": 102
, "other": 1633
});

db.insert(db.countries.AT, "2023-08", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 2876
, "Škoda": 1875
, "BMW": 1587
, "Audi": 1033
, "Mercedes-Benz": 946
, "Tesla": 880
, "Seat": 830
, "Hyundai": 804
, "Toyota": 800
, "Dacia": 780
, "Cupra": 603
, "Kia": 578
, "Ford": 570
, "Renault": 511
, "Mazda": 510
, "Suzuki": 361
, "Fiat": 359
, "Volvo": 296
, "Opel": 288
, "Peugeot": 266
, "Citroën": 258
, "Nissan": 221
, "Mini": 210
, "Jeep": 188
, "MG": 178
, "Mitsubishi": 153
, "Porsche": 108
, "Honda": 105
, "Land Rover": 103
, "BYD": 95
, "Polestar": 89
, "Jaguar": 23
, "Subaru": 18
, "Smart": 8
, "Chevrolet": 3
, "other": 277
});

db.insert(db.countries.AT, "2023-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Tesla|Model Y": 509
, "Tesla|Model 3": 362
, "Škoda|Enyaq": 299
, "Cupra|Born": 255
, "BMW|iX3": 163
, "Volkswagen|ID.4": 159
, "BMW|iX1": 150
, "BMW|i4": 135
, "Volvo|EX40": 127
, "Kia|EV6": 118
, "other": 1668
});

db.insert(db.countries.AT, "2023-09", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 2364
, "Škoda": 1991
, "Audi": 1388
, "BMW": 1344
, "Hyundai": 1177
, "Mercedes-Benz": 1023
, "Kia": 927
, "Dacia": 866
, "Cupra": 848
, "Renault": 805
, "Toyota": 791
, "Seat": 771
, "Ford": 676
, "Mazda": 668
, "Tesla": 598
, "Opel": 550
, "Suzuki": 456
, "Peugeot": 377
, "Volvo": 265
, "Fiat": 249
, "Citroën": 190
, "Jeep": 173
, "Mitsubishi": 165
, "MG": 152
, "Nissan": 152
, "Honda": 142
, "Mini": 142
, "BYD": 139
, "Land Rover": 80
, "Porsche": 73
, "Polestar": 47
, "Jaguar": 20
, "Smart": 11
, "Subaru": 10
, "Chevrolet": 3
, "other": 207
});

db.insert(db.countries.AT, "2023-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Tesla|Model Y": 541
, "Škoda|Enyaq": 432
, "Cupra|Born": 308
, "Audi|Q4 e-tron": 288
, "Volkswagen|ID.3": 217
, "BMW|iX3": 181
, "Volkswagen|ID.4": 154
, "BMW|i4": 110
, "BMW|iX1": 103
, "BYD|Yuan Plus": 103
, "other": 1819
});

db.insert(db.countries.AT, "2023-10", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 2444
, "Škoda": 1878
, "BMW": 1642
, "Audi": 1398
, "Mercedes-Benz": 1124
, "Dacia": 931
, "Hyundai": 878
, "Toyota": 820
, "Kia": 810
, "Cupra": 681
, "Seat": 660
, "Renault": 652
, "Ford": 584
, "Mazda": 565
, "Opel": 438
, "Tesla": 339
, "Suzuki": 323
, "Peugeot": 302
, "Volvo": 294
, "Fiat": 283
, "MG": 191
, "Mini": 190
, "Nissan": 186
, "Mitsubishi": 185
, "Citroën": 183
, "Porsche": 160
, "BYD": 124
, "Honda": 117
, "Jeep": 110
, "Land Rover": 73
, "Polestar": 52
, "Subaru": 47
, "Smart": 14
, "Jaguar": 12
, "Chevrolet": 3
, "other": 174
});

db.insert(db.countries.AT, "2023-10", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Škoda|Enyaq": 516
, "Volkswagen|ID.3": 340
, "BMW|i4": 280
, "Volkswagen|ID.4": 219
, "BMW|iX1": 216
, "Tesla|Model Y": 206
, "Cupra|Born": 205
, "Audi|Q4 e-tron": 129
, "Audi|Q8 e-tron": 125
, "BMW|iX3": 120
, "other": 2022
});

db.insert(db.countries.AT, "2023-11", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Volkswagen": 2366
, "Škoda": 2041
, "BMW": 1777
, "Hyundai": 1572
, "Dacia": 897
, "Mercedes-Benz": 880
, "Audi": 831
, "Seat": 824
, "Renault": 761
, "Tesla": 752
, "Kia": 697
, "Toyota": 670
, "Mazda": 611
, "Ford": 585
, "Suzuki": 365
, "Cupra": 351
, "Nissan": 313
, "Mitsubishi": 310
, "Volvo": 291
, "Mini": 245
, "Opel": 240
, "Fiat": 233
, "Peugeot": 208
, "BYD": 190
, "Citroën": 187
, "MG": 144
, "Honda": 97
, "Jeep": 88
, "Land Rover": 72
, "Porsche": 56
, "Polestar": 40
, "Subaru": 40
, "Jaguar": 11
, "Smart": 9
, "BAIC": 2
, "other": 144
});

db.insert(db.countries.AT, "2023-11", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Škoda|Enyaq": 407
, "Tesla|Model 3": 370
, "Tesla|Model Y": 351
, "BMW|i4": 273
, "BMW|iX1": 272
, "Hyundai|Ioniq 5": 207
, "Volkswagen|ID.4": 192
, "Volkswagen|ID.3": 146
, "BMW|iX3": 145
, "Cupra|Born": 112
, "other": 1855
});

db.insert(db.countries.AT, "2023-12", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Hyundai": 2742
, "Volkswagen": 2667
, "BMW": 1628
, "Škoda": 1627
, "Mercedes-Benz": 888
, "Toyota": 731
, "Seat": 712
, "Dacia": 688
, "Audi": 616
, "Tesla": 587
, "Kia": 581
, "Renault": 573
, "Ford": 497
, "Mazda": 476
, "Suzuki": 380
, "Volvo": 380
, "Cupra": 299
, "Mitsubishi": 287
, "Peugeot": 263
, "Nissan": 244
, "Mini": 221
, "MG": 218
, "Opel": 198
, "Fiat": 139
, "BYD": 112
, "Citroën": 110
, "Land Rover": 83
, "Subaru": 82
, "Jeep": 79
, "Porsche": 62
, "Honda": 58
, "Polestar": 49
, "Smart": 23
, "Jaguar": 7
, "BAIC": 5
, "other": 185
});

db.insert(db.countries.AT, "2023-12", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2023.ods",
{ "Hyundai|Ioniq 5": 422
, "Tesla|Model Y": 413
, "Škoda|Enyaq": 338
, "BMW|i4": 307
, "BMW|iX1": 240
, "Hyundai|Ioniq 6": 235
, "Volkswagen|ID.4": 162
, "Tesla|Model 3": 138
, "Volkswagen|ID.7": 89
, "MG|4 EV": 88
, "other": 1587
});

db.insert(db.countries.AT, "2024-01", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaenner2024.ods",
{ "Volkswagen": 2355
, "Škoda": 2056
, "BMW": 1561
, "Audi": 1452
, "Seat": 1069
, "Dacia": 918
, "Toyota": 818
, "Mercedes-Benz": 786
, "Kia": 579
, "Suzuki": 540
, "Cupra": 484
, "Ford": 458
, "Tesla": 391
, "Mazda": 388
, "Peugeot": 382
, "Renault": 334
, "Mitsubishi": 331
, "Volvo": 311
, "Opel": 293
, "Hyundai": 259
, "Fiat": 235
, "Citroën": 210
, "Nissan": 197
, "MG": 166
, "BYD": 157
, "Mini": 155
, "Land Rover": 113
, "Jeep": 94
, "Porsche": 93
, "Smart": 58
, "Honda": 54
, "Polestar": 29
, "Subaru": 17
, "Jaguar": 8
, "other": 201
});

db.insert(db.countries.AT, "2024-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaenner2024.ods",
{ "Tesla|Model Y": 304
, "BMW|i4": 214
, "Škoda|Enyaq": 193
, "Audi|Q4 e-tron": 122
, "BMW|iX1": 111
, "Cupra|Born": 107
, "MG|4 EV": 87
, "Volkswagen|ID.4": 76
, "Audi|Q8 e-tron": 74
, "Tesla|Model 3": 70
, "other": 1465
});

db.insert(db.countries.AT, "2024-02", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisFebruar2024.ods",
{ "Volkswagen": 3074
, "Škoda": 1768
, "BMW": 1406
, "Seat": 1329
, "Dacia": 1001
, "Audi": 962
, "Mercedes-Benz": 959
, "Tesla": 876
, "Toyota": 876
, "Suzuki": 756
, "Mazda": 661
, "Peugeot": 657
, "Hyundai": 518
, "Ford": 515
, "Renault": 495
, "Kia": 491
, "Citroën": 362
, "Mitsubishi": 361
, "Volvo": 335
, "Nissan": 331
, "Opel": 322
, "MG": 314
, "Cupra": 306
, "Fiat": 260
, "BYD": 224
, "Porsche": 145
, "Mini": 132
, "Honda": 121
, "Land Rover": 104
, "Jeep": 85
, "Smart": 36
, "Polestar": 28
, "Subaru": 13
, "Jaguar": 10
, "other": 177
});

db.insert(db.countries.AT, "2024-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisFebruar2024.ods",
{ "Tesla|Model Y": 680
, "BMW|i4": 195
, "Tesla|Model 3": 188
, "Škoda|Enyaq": 151
, "Audi|Q4 e-tron": 137
, "BMW|iX1": 134
, "BMW|iX3": 97
, "BYD|Seal": 88
, "BYD|Yuan Plus": 81
, "Volkswagen|ID.4": 70
, "other": 1501
});

db.insert(db.countries.AT, "2024-03", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisMaerz2024.ods",
{ "Volkswagen": 3403
, "Škoda": 2299
, "Seat": 1744
, "BMW": 1660
, "Mercedes-Benz": 1508
, "Audi": 1494
, "Tesla": 1239
, "Toyota": 1141
, "Dacia": 1130
, "Suzuki": 1029
, "Mitsubishi": 837
, "Kia": 799
, "Renault": 777
, "Hyundai": 718
, "Mazda": 715
, "Ford": 627
, "Cupra": 576
, "MG": 509
, "Nissan": 482
, "Volvo": 390
, "Peugeot": 383
, "Opel": 368
, "BYD": 301
, "Citroën": 260
, "Fiat": 226
, "Porsche": 222
, "Honda": 126
, "Mini": 123
, "Land Rover": 119
, "Jeep": 93
, "Smart": 47
, "Polestar": 43
, "Jaguar": 40
, "Subaru": 21
, "other": 252
});

db.insert(db.countries.AT, "2024-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisMaerz2024.ods",
{ "Tesla|Model Y": 978
, "Tesla|Model 3": 239
, "Audi|Q4 e-tron": 224
, "BMW|i4": 199
, "BMW|iX1": 190
, "BYD|Seal": 152
, "Volkswagen|ID.4": 142
, "Mercedes-Benz|EQE": 133
, "MG|4 EV": 108
, "Dacia|Spring": 98
, "other": 2194
});

db.insert(db.countries.AT, "2024-04", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisApril2024.ods",
{ "Volkswagen": 2355
, "Škoda": 2056
, "BMW": 1561
, "Audi": 1452
, "Seat": 1069
, "Dacia": 918
, "Toyota": 818
, "Mercedes-Benz": 786
, "Kia": 579
, "Suzuki": 540
, "Cupra": 484
, "Ford": 458
, "Tesla": 391
, "Mazda": 388
, "Peugeot": 382
, "Renault": 334
, "Mitsubishi": 331
, "Volvo": 311
, "Opel": 293
, "Hyundai": 259
, "Fiat": 235
, "Citroën": 210
, "Nissan": 197
, "MG": 166
, "BYD": 157
, "Mini": 155
, "Land Rover": 113
, "Jeep": 94
, "Porsche": 93
, "Smart": 58
, "Honda": 54
, "Polestar": 29
, "Subaru": 17
, "Jaguar": 8
, "other": 201
});

db.insert(db.countries.AT, "2024-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisApril2024.ods",
{ "Tesla|Model Y": 304
, "BMW|i4": 214
, "Škoda|Enyaq": 193
, "Audi|Q4 e-tron": 122
, "BMW|iX1": 111
, "Cupra|Born": 107
, "MG|4 EV": 87
, "Volkswagen|ID.4": 76
, "Audi|Q8 e-tron": 74
, "Tesla|Model 3": 70
, "other": 1465
});

db.insert(db.countries.AT, "2024-05", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisMai2024.ods",
{ "Volkswagen": 3566
, "Škoda": 1510
, "BMW": 1484
, "Audi": 1336
, "Mercedes-Benz": 985
, "Seat": 976
, "Toyota": 842
, "Dacia": 814
, "Hyundai": 620
, "Cupra": 596
, "Mazda": 537
, "Peugeot": 510
, "Kia": 504
, "Tesla": 499
, "Ford": 489
, "MG": 483
, "Renault": 482
, "Volvo": 453
, "Suzuki": 452
, "Opel": 407
, "Citroën": 377
, "Mitsubishi": 323
, "BYD": 284
, "Fiat": 239
, "Porsche": 158
, "Land Rover": 128
, "Mini": 118
, "Nissan": 108
, "Honda": 99
, "Jeep": 64
, "Polestar": 42
, "Smart": 35
, "Subaru": 34
, "Jaguar": 11
, "other": 255
});

db.insert(db.countries.AT, "2024-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisMai2024.ods",
{ "Tesla|Model Y": 308
, "BMW|i4": 256
, "Tesla|Model 3": 190
, "MG|4 EV": 178
, "Cupra|Born": 160
, "Audi|Q4 e-tron": 149
, "BMW|iX1": 146
, "BYD|Seal": 110
, "Volkswagen|ID.4": 101
, "Škoda|Enyaq": 71
, "other": 1779
});

db.insert(db.countries.AT, "2024-06", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuni2024.ods",
{ "Volkswagen": 5118
, "Škoda": 2139
, "Hyundai": 2039
, "Audi": 1675
, "BMW": 1594
, "Seat": 1370
, "Mitsubishi": 1296
, "Mercedes-Benz": 1181
, "Tesla": 1050
, "Toyota": 1025
, "Cupra": 995
, "Fiat": 993
, "Dacia": 986
, "Opel": 930
, "Kia": 912
, "Suzuki": 906
, "Renault": 889
, "Mazda": 755
, "Peugeot": 667
, "Ford": 657
, "BYD": 616
, "Citroën": 605
, "MG": 551
, "Volvo": 495
, "Nissan": 236
, "Mini": 135
, "Land Rover": 132
, "Porsche": 124
, "Honda": 110
, "Jeep": 81
, "Polestar": 60
, "Subaru": 37
, "Smart": 30
, "Jaguar": 8
, "other": 296
});

db.insert(db.countries.AT, "2024-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuni2024.ods",
{ "BYD|Yuan Plus": 457
, "Tesla|Model Y": 614
, "Tesla|Model 3": 420
, "BMW|i4": 219
, "Volkswagen|ID.4": 210
, "BMW|iX1": 167
, "BYD|Seal": 159
, "Audi|Q4 e-tron": 153
, "Cupra|Born": 144
, "MG|4 EV": 95
, "other": 2649
});

db.insert(db.countries.AT, "2024-07", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuli2024.ods",
{ "Volkswagen": 2572
, "Škoda": 2140
, "BMW": 1658
, "Audi": 1494
, "Mercedes-Benz": 963
, "Toyota": 921
, "Dacia": 834
, "Seat": 829
, "Peugeot": 763
, "Opel": 735
, "Renault": 586
, "Ford": 545
, "Kia": 543
, "Cupra": 433
, "Mazda": 418
, "Hyundai": 412
, "Fiat": 349
, "Volvo": 328
, "Suzuki": 325
, "Citroën": 314
, "BYD": 261
, "Tesla": 245
, "MG": 157
, "Mini": 155
, "Jeep": 147
, "Nissan": 138
, "Porsche": 131
, "Honda": 105
, "Land Rover": 81
, "Mitsubishi": 37
, "Polestar": 37
, "Subaru": 23
, "Smart": 22
, "Jaguar": 9
, "Chevrolet": 2
, "other": 189
});

db.insert(db.countries.AT, "2024-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuli2024.ods",
{ "BMW|iX1": 227
, "BYD|Seal": 206
, "Tesla|Model Y": 201
, "Škoda|Enyaq": 178
, "Cupra|Born": 177
, "BMW|i4": 164
, "Volkswagen|ID.4": 154
, "Audi|Q4 e-tron": 139
, "Volvo|EX30": 114
, "Audi|Q6 e-tron": 106
, "other": 1267
});

db.insert(db.countries.AT, "2024-08", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisAugust2024.ods",
{ "Volkswagen": 2541
, "Škoda": 2061
, "BMW": 1487
, "Audi": 947
, "Toyota": 947
, "Dacia": 813
, "Mercedes-Benz": 813
, "Seat": 789
, "Peugeot": 666
, "Kia": 521
, "Renault": 501
, "Ford": 472
, "Mazda": 456
, "Hyundai": 432
, "Opel": 409
, "Tesla": 398
, "Cupra": 395
, "Suzuki": 350
, "BYD": 335
, "Volvo": 260
, "MG": 166
, "Nissan": 163
, "Jeep": 145
, "Mini": 137
, "Citroën": 134
, "Porsche": 120
, "Land Rover": 112
, "Fiat": 106
, "Honda": 82
, "Polestar": 60
, "Mitsubishi": 57
, "Smart": 44
, "Subaru": 17
, "Jaguar": 6
, "other": 173
});

db.insert(db.countries.AT, "2024-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisAugust2024.ods",
{ "Tesla|Model Y": 360
, "BYD|Seal": 290
, "BMW|iX1": 269
, "Škoda|Enyaq": 178
, "BMW|i4": 152
, "Cupra|Born": 135
, "Volvo|EX30": 109
, "Ford|Explorer EV": 107
, "Audi|Q4 e-tron": 89
, "Volkswagen|ID.7": 89
, "other": 1322
});

db.insert(db.countries.AT, "2024-09", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisSeptember2024.ods",
{ "Volkswagen": 2485
, "Škoda": 2368
, "BMW": 1576
, "Audi": 1390
, "Seat": 993
, "Hyundai": 970
, "Tesla": 961
, "Mercedes-Benz": 866
, "Renault": 789
, "Peugeot": 757
, "Toyota": 744
, "Dacia": 674
, "Kia": 583
, "Ford": 556
, "Opel": 440
, "Cupra": 427
, "Suzuki": 396
, "BYD": 373
, "Volvo": 370
, "Mazda": 334
, "MG": 303
, "Mini": 266
, "Fiat": 207
, "Nissan": 169
, "Citroën": 131
, "Porsche": 127
, "Jeep": 118
, "Polestar": 111
, "Land Rover": 75
, "Honda": 66
, "Mitsubishi": 49
, "Smart": 32
, "Subaru": 23
, "Jaguar": 10
, "other": 155
});

db.insert(db.countries.AT, "2024-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisSeptember2024.ods",
{ "Tesla|Model Y": 655
, "Škoda|Enyaq": 378
, "BYD|Seal": 298
, "Tesla|Model 3": 280
, "BMW|iX1": 227
, "BMW|iX3": 208
, "Volkswagen|ID.4": 131
, "Audi|Q4 e-tron": 130
, "Cupra|Tavascan": 129
, "Cupra|Born": 119
, "other": 1866
});

db.insert(db.countries.AT, "2024-10", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisNovember2024.ods",
{ "Škoda": 2686
, "Volkswagen": 2675
, "BMW": 1791
, "Audi": 1643
, "Mercedes-Benz": 1276
, "Hyundai": 988
, "Seat": 925
, "Toyota": 862
, "Dacia": 834
, "Renault": 722
, "Peugeot": 705
, "Cupra": 680
, "Kia": 664
, "Ford": 655
, "Mazda": 617
, "Opel": 491
, "BYD": 422
, "Volvo": 394
, "Suzuki": 358
, "Nissan": 347
, "Tesla": 273
, "Fiat": 213
, "Mini": 213
, "Citroën": 204
, "Porsche": 200
, "MG": 186
, "Mitsubishi": 186
, "Jeep": 112
, "Honda": 94
, "Land Rover": 92
, "Polestar": 74
, "Smart": 72
, "Subaru": 18
, "Jaguar": 7
, "other": 302
});

db.insert(db.countries.AT, "2024-10", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisNovember2024.ods",
{ "BYD|Seal": 359
, "Škoda|Enyaq": 337
, "BMW|iX1": 227
, "Volkswagen|ID.4": 175
, "Tesla|Model Y": 169
, "BMW|i4": 138
, "Audi|Q6 e-tron": 130
, "Cupra|Born": 121
, "BMW|i5": 116
, "Audi|Q4 e-tron": 110
, "other": 2108
});

db.insert(db.countries.AT, "2024-11", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisNovember2024.ods",
{ "Volkswagen": 2637
, "Škoda": 2150
, "BMW": 1520
, "Audi": 992
, "Mercedes-Benz": 929
, "Cupra": 890
, "Dacia": 875
, "Toyota": 729
, "Renault": 691
, "Ford": 670
, "Peugeot": 632
, "Seat": 614
, "Mazda": 603
, "Hyundai": 583
, "Opel": 552
, "Tesla": 440
, "Kia": 432
, "Volvo": 366
, "BYD": 359
, "Suzuki": 357
, "MG": 299
, "Nissan": 292
, "Citroën": 285
, "Mitsubishi": 172
, "Porsche": 170
, "Fiat": 123
, "Mini": 123
, "Jeep": 93
, "Land Rover": 88
, "Polestar": 77
, "Honda": 71
, "Smart": 33
, "Subaru": 21
, "Jaguar": 4
, "other": 224
});

db.insert(db.countries.AT, "2024-11", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisNovember2024.ods",
{ "Škoda|Enyaq": 362
, "Tesla|Model Y": 300
, "BYD|Seal": 253
, "BMW|iX1": 204
, "Cupra|Born": 188
, "Volkswagen|ID.4": 162
, "Volkswagen|ID.7": 134
, "Tesla|Model 3": 131
, "BMW|i4": 113
, "Ford|Explorer EV": 113
, "other": 1777
});

db.insert(db.countries.AT, "2024-12", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2024.ods",
{ "Hyundai": 3090
, "Volkswagen": 2158
, "Škoda": 2051
, "BMW": 1569
, "Peugeot": 1180
, "Toyota": 1150
, "Tesla": 921
, "Mercedes-Benz": 864
, "Dacia": 826
, "Renault": 766
, "Mazda": 658
, "Audi": 649
, "Opel": 609
, "MG": 526
, "Seat": 519
, "Ford": 516
, "Cupra": 486
, "Volvo": 455
, "Kia": 419
, "BYD": 362
, "Suzuki": 326
, "Citroën": 290
, "Nissan": 181
, "Mitsubishi": 160
, "Fiat": 118
, "Polestar": 107
, "Mini": 105
, "Porsche": 96
, "Jeep": 92
, "Land Rover": 89
, "Honda": 57
, "Smart": 27
, "Subaru": 21
, "Jaguar": 11
, "other": 235
});

db.insert(db.countries.AT, "2024-12", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisDezember2024.ods",
{ "Tesla|Model Y": 588
, "Tesla|Model 3": 326
, "BYD|Seal": 294
, "Škoda|Enyaq": 203
, "BMW|iX1": 198
, "Hyundai|Kona Electric": 189
, "Volkswagen|ID.4": 148
, "BMW|i4": 143
, "Volvo|EX30": 141
, "Audi|Q6 e-tron": 140
, "other": 1893
});

db.insert(db.countries.AT, "2025-01", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaenner2025.ods",
{ "Volkswagen": 2949
, "Škoda": 2496
, "Audi": 1751
, "BMW": 1528
, "Seat": 1222
, "Mercedes-Benz": 1018
, "Cupra": 960
, "Dacia": 930
, "Toyota": 736
, "Hyundai": 689
, "Renault": 637
, "Ford": 602
, "Peugeot": 516
, "BYD": 480
, "Opel": 439
, "Kia": 404
, "Suzuki": 365
, "Mazda": 360
, "Citroën": 322
, "Volvo": 300
, "Nissan": 267
, "Tesla": 227
, "MG": 223
, "Porsche": 152
, "Fiat": 145
, "Mini": 122
, "Land Rover": 119
, "Jeep": 101
, "Honda": 84
, "Mitsubishi": 55
, "Polestar": 53
, "Smart": 25
, "Subaru": 15
, "Jaguar": 4
, "other": 152
});

db.insert(db.countries.AT, "2025-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaenner2025.ods",
{ "BYD|Seal": 333
, "Audi|Q6 e-tron": 197
, "Škoda|Enyaq": 195
, "Renault|5 E-Tech": 182
, "BMW|iX1": 168
, "Tesla|Model Y": 147
, "Volkswagen|ID.4": 128
, "Cupra|Born": 125
, "Kia|EV3": 119
, "Volkswagen|ID.7": 106
, "other": 2122
});

db.insert(db.countries.AT, "2025-02", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisFebruar2025.ods",
{ "Volkswagen": 2913
, "Škoda": 2006
, "BMW": 1516
, "Audi": 1477
, "Seat": 963
, "Dacia": 955
, "Mercedes-Benz": 842
, "Cupra": 728
, "Toyota": 727
, "Renault": 710
, "Ford": 672
, "Opel": 630
, "Suzuki": 567
, "Peugeot": 521
, "Hyundai": 502
, "BYD": 446
, "Kia": 430
, "Mazda": 426
, "Citroën": 422
, "Nissan": 345
, "Tesla": 262
, "Volvo": 202
, "Fiat": 198
, "Mini": 124
, "Mitsubishi": 122
, "Porsche": 114
, "Land Rover": 103
, "Jeep": 98
, "MG": 97
, "Honda": 87
, "Polestar": 48
, "Smart": 35
, "Subaru": 21
, "Jaguar": 5
, "BAIC": 4
, "other": 301
});

db.insert(db.countries.AT, "2025-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisFebruar2025.ods",
{ "Renault|5 E-Tech": 237
, "BYD|Seal": 219
, "Volkswagen|ID.3": 214
, "BMW|iX1": 169
, "Tesla|Model Y": 166
, "Audi|Q6 e-tron": 152
, "Volkswagen|ID.4": 146
, "BMW|iX3": 145
, "Škoda|Enyaq": 142
, "Hyundai|Kona Electric": 137
, "other": 2506
});

db.insert(db.countries.AT, "2025-03", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisMaerz2025.ods",
{ "Volkswagen": 3585
, "Škoda": 2417
, "BMW": 1815
, "Audi": 1571
, "Dacia": 1222
, "Mercedes-Benz": 1207
, "Seat": 1069
, "Cupra": 1050
, "Toyota": 982
, "Renault": 952
, "Mazda": 833
, "Tesla": 815
, "Ford": 800
, "Nissan": 739
, "MG": 711
, "Peugeot": 709
, "BYD": 704
, "Opel": 673
, "Kia": 667
, "Hyundai": 567
, "Citroën": 442
, "Volvo": 372
, "Mitsubishi": 286
, "Suzuki": 278
, "Fiat": 221
, "Porsche": 197
, "Mini": 185
, "Honda": 166
, "Land Rover": 117
, "Polestar": 103
, "Jeep": 96
, "Subaru": 59
, "Smart": 19
, "Jaguar": 5
, "BAIC": 3
, "other": 313
});

db.insert(db.countries.AT, "2025-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisMaerz2025.ods",
{ "Tesla|Model Y": 500
, "BYD|Sealion 7": 323
, "Renault|5 E-Tech": 310
, "BMW|iX1": 306
, "Tesla|Model 3": 306
, "Audi|Q6 e-tron": 230
, "BYD|Seal": 206
, "Volkswagen|ID.4": 203
, "Škoda|Enyaq": 195
, "Volkswagen|ID.3": 192
, "other": 3351
});

db.insert(db.countries.AT, "2025-04", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisApril2025.ods",
{ "Volkswagen": 3607
, "Škoda": 2610
, "BMW": 2187
, "Audi": 1720
, "Cupra": 1325
, "Toyota": 1172
, "Seat": 1087
, "Dacia": 1049
, "Mercedes-Benz": 1029
, "Hyundai": 943
, "Renault": 925
, "Peugeot": 783
, "Ford": 774
, "Opel": 607
, "BYD": 575
, "Citroën": 527
, "Kia": 489
, "Mazda": 441
, "Volvo": 384
, "MG": 373
, "Suzuki": 340
, "Porsche": 208
, "Mini": 201
, "Tesla": 196
, "Fiat": 186
, "Mitsubishi": 172
, "Jeep": 147
, "Land Rover": 141
, "Honda": 130
, "Polestar": 57
, "Nissan": 46
, "Subaru": 38
, "Smart": 13
, "other": 373
});

db.insert(db.countries.AT, "2025-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisApril2025.ods",
{ "BMW|iX1": 347
, "Škoda|Elroq": 344
, "Renault|5 E-Tech": 288
, "BYD|Sealion 7": 270
, "Volkswagen|ID.3": 255
, "Audi|Q6 e-tron": 251
, "BMW|i4": 243
, "Škoda|Enyaq": 233
, "Volkswagen|ID.7": 199
, "Cupra|Born": 190
, "other": 3070
});

db.insert(db.countries.AT, "2025-05", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisMai2025.ods",
{ "Volkswagen": 3532
, "Škoda": 2553
, "BMW": 1846
, "Audi": 1481
, "Cupra": 1149
, "Mercedes-Benz": 1131
, "Seat": 1042
, "Dacia": 1009
, "Toyota": 962
, "Opel": 876
, "Hyundai": 848
, "Renault": 772
, "Peugeot": 761
, "Ford": 648
, "Tesla": 643
, "Mazda": 613
, "BYD": 552
, "Citroën": 549
, "MG": 534
, "Kia": 434
, "Suzuki": 388
, "Volvo": 370
, "Fiat": 231
, "Porsche": 184
, "Mini": 178
, "Mitsubishi": 173
, "Honda": 124
, "Land Rover": 113
, "Jeep": 102
, "Subaru": 66
, "Nissan": 63
, "Polestar": 58
, "Smart": 31
, "BAIC": 4
, "other": 291
});

db.insert(db.countries.AT, "2025-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisMai2025.ods",
{ "Tesla|Model Y": 546
, "Škoda|Elroq": 339
, "BYD|Sealion 7": 267
, "Audi|Q6 e-tron": 222
, "Volkswagen|ID.7": 208
, "Volkswagen|ID.4": 202
, "BMW|iX1": 201
, "Volkswagen|ID.3": 197
, "Škoda|Enyaq": 179
, "Audi|A6 e-tron": 156
, "other": 2911
});

db.insert(db.countries.AT, "2025-06", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuni2025.ods",
{ "Volkswagen": 3592
, "Škoda": 3016
, "BMW": 1647
, "Audi": 1575
, "Cupra": 1467
, "Toyota": 1257
, "Tesla": 1256
, "Mercedes-Benz": 1153
, "Renault": 1153
, "Seat": 1138
, "Dacia": 1046
, "Peugeot": 985
, "Hyundai": 914
, "Ford": 796
, "Opel": 788
, "MG": 726
, "Mazda": 680
, "Citroën": 661
, "Kia": 596
, "BYD": 522
, "Suzuki": 413
, "Volvo": 351
, "Nissan": 284
, "Mitsubishi": 259
, "Fiat": 251
, "Mini": 184
, "Polestar": 172
, "Honda": 162
, "Porsche": 150
, "Land Rover": 135
, "Jeep": 132
, "Subaru": 45
, "Smart": 24
, "other": 338
});

db.insert(db.countries.AT, "2025-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuni2025.ods",
{ "Tesla|Model Y": 953
, "Škoda|Elroq": 383
, "Tesla|Model 3": 302
, "Škoda|Enyaq": 293
, "Volkswagen|ID.3": 214
, "BYD|Sealion 7": 211
, "Volkswagen|ID.7": 202
, "BMW|i4": 183
, "Audi|Q6 e-tron": 177
, "Renault|5 E-Tech": 168
, "other": 3153
});

db.insert(db.countries.AT, "2025-07", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuli2025.ods",
{ "Volkswagen": 3638
, "Škoda": 2941
, "BMW": 1957
, "Dacia": 1558
, "Seat": 1262
, "Audi": 1195
, "Mercedes-Benz": 1151
, "Hyundai": 1106
, "Toyota": 1020
, "Cupra": 995
, "Peugeot": 964
, "Opel": 807
, "Renault": 789
, "Ford": 646
, "BYD": 598
, "Kia": 481
, "Citroën": 434
, "Fiat": 379
, "Mazda": 366
, "Volvo": 355
, "MG": 319
, "Suzuki": 318
, "Tesla": 284
, "Porsche": 143
, "Mini": 142
, "Mitsubishi": 135
, "Land Rover": 131
, "Jeep": 116
, "Nissan": 114
, "Honda": 96
, "Subaru": 39
, "Smart": 35
, "Polestar": 27
, "BAIC": 3
, "other": 323
});

db.insert(db.countries.AT, "2025-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuli2025.ods",
{ "Škoda|Elroq": 421
, "Škoda|Enyaq": 313
, "BMW|iX1": 245
, "Volkswagen|ID.7": 240
, "Renault|5 E-Tech": 190
, "BYD|Sealion 7": 170
, "Tesla|Model Y": 167
, "Volkswagen|ID.4": 167
, "Cupra|Tavascan": 162
, "Volkswagen|ID.3": 148
, "other": 2697
});

db.insert(db.countries.AT, "2025-08", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisAugust2025.ods",
{ "Volkswagen": 2821
, "Škoda": 2415
, "BMW": 1384
, "Audi": 1194
, "Mercedes-Benz": 1187
, "Seat": 1146
, "Dacia": 1124
, "Hyundai": 1069
, "Toyota": 869
, "Cupra": 810
, "BYD": 774
, "Ford": 729
, "Renault": 609
, "Peugeot": 604
, "Kia": 497
, "Opel": 495
, "Suzuki": 450
, "MG": 396
, "Fiat": 389
, "Mazda": 349
, "Tesla": 270
, "Citroën": 267
, "Volvo": 253
, "Jeep": 199
, "Land Rover": 154
, "Mitsubishi": 144
, "Mini": 117
, "Nissan": 111
, "Honda": 110
, "Porsche": 93
, "Polestar": 32
, "Smart": 29
, "Subaru": 24
, "other": 338
});

db.insert(db.countries.AT, "2025-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisAugust2025.ods",
{ "Škoda|Elroq": 284
, "Škoda|Enyaq": 282
, "Cupra|Tavascan": 191
, "BYD|Seal": 188
, "Audi|Q6 e-tron": 154
, "BYD|Sealion 7": 143
, "Ford|Explorer EV": 140
, "Tesla|Model 3": 136
, "Tesla|Model Y": 134
, "BMW|iX1": 130
, "other": 2532
});

db.insert(db.countries.AT, "2025-09", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisSeptember2025.ods",
{ "Volkswagen": 3677
, "Škoda": 2790
, "Hyundai": 1966
, "Audi": 1564
, "Mercedes-Benz": 1295
, "Seat": 1069
, "BMW": 1048
, "Dacia": 1026
, "Tesla": 1026
, "Toyota": 854
, "Peugeot": 807
, "Mazda": 789
, "Renault": 727
, "Opel": 717
, "Cupra": 691
, "Kia": 662
, "Ford": 650
, "BYD": 612
, "Nissan": 552
, "MG": 549
, "Fiat": 409
, "Volvo": 402
, "Citroën": 302
, "Suzuki": 280
, "Jeep": 184
, "Mitsubishi": 156
, "Porsche": 128
, "Honda": 110
, "Mini": 104
, "Land Rover": 96
, "Polestar": 76
, "Smart": 39
, "Subaru": 24
, "other": 364
});

db.insert(db.countries.AT, "2025-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisSeptember2025.ods",
{ "Tesla|Model Y": 736
, "Škoda|Elroq": 303
, "Tesla|Model 3": 289
, "Škoda|Enyaq": 280
, "Volkswagen|ID.7": 213
, "Hyundai|Inster": 183
, "Volkswagen|ID.3": 175
, "BYD|Sealion 7": 166
, "Cupra|Born": 126
, "Volkswagen|ID.4": 122
, "other": 2790
});

db.insert(db.countries.AT, "2025-10", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisOktober2025.ods",
{ "Volkswagen": 3595
, "Škoda": 2867
, "BMW": 1656
, "Audi": 1403
, "Mercedes-Benz": 1365
, "Seat": 1304
, "Dacia": 1250
, "Peugeot": 1033
, "Toyota": 980
, "Opel": 877
, "Cupra": 836
, "Ford": 746
, "Renault": 725
, "Hyundai": 724
, "BYD": 558
, "Citroën": 506
, "Volvo": 503
, "Mazda": 447
, "Kia": 421
, "Fiat": 417
, "MG": 364
, "Suzuki": 338
, "Mitsubishi": 187
, "Mini": 186
, "Jeep": 184
, "Honda": 109
, "Porsche": 101
, "Tesla": 97
, "Smart": 88
, "Land Rover": 87
, "Nissan": 56
, "Polestar": 37
, "Subaru": 19
, "Jaecoo": 13
, "other": 400
});

db.insert(db.countries.AT, "2025-10", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisOktober2025.ods",
{ "Škoda|Elroq": 389
, "Škoda|Enyaq": 335
, "BMW|iX1": 259
, "Volkswagen|ID.7": 242
, "Volkswagen|ID.3": 190
, "BYD|Sealion 7": 160
, "Ford|Explorer EV": 159
, "Volkswagen|ID.4": 148
, "Cupra|Born": 143
, "Audi|Q6 e-tron": 134
, "other": 3006
});
