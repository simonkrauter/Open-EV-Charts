// Data sets for car sales in Austria

"use strict";

db.addCountry("AT", "Austria");

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
, "Suzuki": 558
, "Kia": 558
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
, "Lexus": 23
, "DS Automobiles": 23
, "Tesla": 21
, "Maserati": 5
, "Infiniti": 1
, "Dodge": 1
, "other": 151
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
, "Lexus": 21
, "DS Automobiles": 16
, "Maserati": 3
, "Dodge": 1
, "other": 165
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
, "Lexus": 26
, "DS Automobiles": 12
, "Maserati": 10
, "Dodge": 2
, "Infiniti": 1
, "Chrysler": 1
, "Chevrolet": 1
, "other": 216
});

db.insert(db.countries.AT, "2019-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 703
, "BMW|i3 BEV": 107
, "Volkswagen|e-Golf": 97
, "other": 81
, "Renault|Zoe": 79
, "Nissan|Leaf": 62
, "Hyundai|Kona Electric": 62
, "Audi|e-tron": 53
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
, "Lexus": 50
, "Subaru": 44
, "DS Automobiles": 16
, "Maserati": 6
, "Dodge": 1
, "Chevrolet": 1
, "other": 205
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
, "Lexus": 27
, "DS Automobiles": 17
, "Chevrolet": 3
, "Maserati": 2
, "Infiniti": 2
, "Dodge": 1
, "other": 172
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
, "Audi|e-tron": 36
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
, "DS Automobiles": 28
, "Lexus": 23
, "Maserati": 3
, "Infiniti": 3
, "Dodge": 2
, "Chrysler": 1
, "other": 210
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
, "Audi|e-tron": 38
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
, "Tesla": 163
, "Honda": 163
, "Porsche": 147
, "Land Rover": 124
, "Jaguar": 101
, "DS Automobiles": 35
, "Subaru": 33
, "Lexus": 19
, "Maserati": 7
, "Dodge": 2
, "other": 166
});

db.insert(db.countries.AT, "2019-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 111
, "other": 87
, "Hyundai|Kona Electric": 85
, "BMW|i3 BEV": 79
, "Audi|e-tron": 78
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
, "Lexus": 43
, "Jaguar": 39
, "Subaru": 32
, "DS Automobiles": 20
, "Maserati": 3
, "Dodge": 2
, "other": 175
});

db.insert(db.countries.AT, "2019-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "BMW|i3 BEV": 156
, "Renault|Zoe": 133
, "Hyundai|Kona Electric": 114
, "Tesla|Model 3": 83
, "other": 82
, "Volkswagen|e-Golf": 77
, "Audi|e-tron": 39
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
, "Lexus": 32
, "DS Automobiles": 22
, "Maserati": 2
, "Dodge": 1
, "other": 158
});

db.insert(db.countries.AT, "2019-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2019.ods",
{ "Tesla|Model 3": 387
, "BMW|i3 BEV": 112
, "Renault|Zoe": 88
, "other": 78
, "Hyundai|Kona Electric": 76
, "Nissan|Leaf": 60
, "Tesla|Model S": 44
, "Audi|e-tron": 40
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
, "Mini": 282
, "Jeep": 282
, "Mitsubishi": 274
, "Porsche": 230
, "Land Rover": 166
, "Honda": 155
, "Jaguar": 77
, "Tesla": 53
, "Subaru": 49
, "Smart": 37
, "Lexus": 21
, "DS Automobiles": 13
, "Maserati": 2
, "Dodge": 1
, "other": 213
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
, "Audi|e-tron": 24
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
, "Tesla": 119
, "Land Rover": 119
, "Jaguar": 25
, "Subaru": 21
, "Smart": 21
, "Lexus": 20
, "DS Automobiles": 19
, "Maserati": 2
, "other": 83
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
, "Audi|e-tron": 21
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
, "Lexus": 14
, "DS Automobiles": 7
, "Maserati": 2
, "Dodge": 1
, "other": 83
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
, "DS Automobiles": 22
, "Lexus": 21
, "Smart": 15
, "MG": 12
, "Maserati": 4
, "Infiniti": 1
, "other": 83
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
, "Audi|e-tron": 24
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
, "Volvo": 289
, "Nissan": 289
, "Tesla": 243
, "Mini": 164
, "Jeep": 152
, "Honda": 115
, "Porsche": 100
, "Land Rover": 100
, "Subaru": 64
, "Jaguar": 50
, "Lexus": 22
, "DS Automobiles": 17
, "MG": 16
, "Smart": 14
, "Maserati": 4
, "other": 113
});

db.insert(db.countries.AT, "2020-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "other": 230
, "Tesla|Model 3": 219
, "Renault|Zoe": 182
, "BMW|i3 BEV": 57
, "Audi|e-tron": 52
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
, "Toyota": 293
, "Peugeot": 293
, "Kia": 291
, "Fiat": 273
, "Mazda": 248
, "Dacia": 245
, "Citroën": 218
, "Volvo": 161
, "Mini": 161
, "Nissan": 155
, "Mitsubishi": 149
, "Jeep": 134
, "Land Rover": 82
, "Porsche": 80
, "Honda": 45
, "Jaguar": 26
, "Subaru": 23
, "DS Automobiles": 14
, "Lexus": 13
, "MG": 4
, "Smart": 3
, "other": 60
});

db.insert(db.countries.AT, "2020-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Tesla|Model 3": 372
, "other": 98
, "Renault|Zoe": 74
, "BMW|i3 BEV": 33
, "Audi|e-tron": 33
, "Mini|Cooper SE Electric": 26
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
, "DS Automobiles": 12
, "Smart": 7
, "MG": 5
, "Lexus": 5
, "Dodge": 3
, "other": 49
});

db.insert(db.countries.AT, "2020-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Tesla|Model 3": 227
, "Renault|Zoe": 93
, "other": 66
, "BMW|i3 BEV": 42
, "Kia|Niro EV": 36
, "Audi|e-tron": 26
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
, "DS Automobiles": 25
, "Lexus": 21
, "Smart": 12
, "MG": 6
, "other": 87
});

db.insert(db.countries.AT, "2020-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Renault|Zoe": 175
, "other": 127
, "Kia|Niro EV": 104
, "Tesla|Model 3": 91
, "BMW|i3 BEV": 50
, "Audi|e-tron": 47
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
, "DS Automobiles": 38
, "Lexus": 31
, "Smart": 18
, "MG": 9
, "Maserati": 6
, "Dodge": 4
, "Infiniti": 1
, "other": 172
});

db.insert(db.countries.AT, "2020-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Tesla|Model 3": 245
, "Renault|Zoe": 219
, "other": 170
, "Kia|Niro EV": 133
, "Audi|e-tron": 60
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
, "Tesla": 60
, "Jaguar": 60
, "Smart": 40
, "Subaru": 35
, "DS Automobiles": 29
, "Lexus": 17
, "MG": 14
, "Maserati": 4
, "Dodge": 2
, "other": 138
});

db.insert(db.countries.AT, "2020-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Renault|Zoe": 277
, "other": 253
, "Kia|Niro EV": 114
, "Audi|e-tron": 92
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
, "Lexus": 34
, "Subaru": 29
, "Smart": 29
, "DS Automobiles": 24
, "MG": 19
, "Maserati": 10
, "Infiniti": 2
, "Polestar": 1
, "Dodge": 1
, "other": 161
});

db.insert(db.countries.AT, "2020-08", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "other": 250
, "Tesla|Model 3": 191
, "Hyundai|Kona Electric": 148
, "Renault|Zoe": 141
, "Kia|Niro EV": 76
, "Opel|Corsa-e": 75
, "Audi|e-tron": 68
, "Peugeot|e-208": 49
, "BMW|i3 BEV": 40
, "Volkswagen|e-Golf": 33
, "Škoda|Citigo-e": 28
, "Mini|Cooper SE Electric": 28
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
, "Lexus": 15
, "DS Automobiles": 10
, "Maserati": 2
, "Dodge": 2
, "Chevrolet": 1
, "other": 155
});

db.insert(db.countries.AT, "2020-09", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Tesla|Model 3": 546
, "other": 369
, "Volkswagen|ID.3": 251
, "Renault|Zoe": 187
, "Hyundai|Kona Electric": 126
, "Kia|Niro EV": 117
, "Mazda|MX-30": 95
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
, "Volvo": 282
, "Mini": 282
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
, "DS Automobiles": 27
, "Smart": 22
, "Subaru": 19
, "Lexus": 16
, "other": 101
});

db.insert(db.countries.AT, "2020-10", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "other": 424
, "Kia|Niro EV": 244
, "Volkswagen|ID.3": 201
, "Renault|Zoe": 137
, "Hyundai|Kona Electric": 108
, "Opel|Corsa-e": 102
, "BMW|i3 BEV": 101
, "Audi|e-tron": 78
, "Peugeot|e-208": 65
, "Mazda|MX-30": 60
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
, "Peugeot": 788
, "Opel": 788
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
, "DS Automobiles": 17
, "Lexus": 13
, "other": 134
});

db.insert(db.countries.AT, "2020-11", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "Volkswagen|ID.3": 523
, "other": 522
, "Tesla|Model 3": 191
, "Renault|Zoe": 129
, "Mazda|MX-30": 125
, "Kia|Niro EV": 123
, "Audi|e-tron": 113
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
, "DS Automobiles": 20
, "MG": 12
, "Lexus": 12
, "Maserati": 5
, "other": 354
});

db.insert(db.countries.AT, "2020-12", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2020.ods",
{ "other": 830
, "Volkswagen|ID.3": 694
, "Tesla|Model 3": 687
, "Renault|Zoe": 289
, "Seat|Mii Electric": 182
, "Audi|e-tron": 137
, "Fiat|500e": 134
, "Hyundai|Kona Electric": 120
, "Kia|Niro EV": 112
, "Mazda|MX-30": 77
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
, "Nissan": 105
, "Jeep": 105
, "Cupra": 102
, "Mitsubishi": 91
, "Porsche": 73
, "Land Rover": 69
, "Jaguar": 61
, "Honda": 48
, "MG": 19
, "Subaru": 17
, "Smart": 13
, "Lexus": 5
, "DS Automobiles": 5
, "other": 18
});

db.insert(db.countries.AT, "2021-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "other": 404
, "Volkswagen|ID.3": 199
, "Renault|Zoe": 196
, "Audi|e-tron": 135
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
, "Nissan": 193
, "Mitsubishi": 193
, "Jeep": 187
, "Mini": 159
, "Land Rover": 148
, "Cupra": 124
, "Honda": 75
, "Porsche": 74
, "Jaguar": 71
, "MG": 37
, "Subaru": 17
, "DS Automobiles": 15
, "Smart": 14
, "Lexus": 5
, "Maserati": 2
, "other": 62
});

db.insert(db.countries.AT, "2021-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "other": 462
, "Tesla|Model 3": 362
, "Volkswagen|ID.3": 260
, "Fiat|500e": 152
, "Kia|Niro EV": 123
, "Renault|Zoe": 116
, "Audi|e-tron": 101
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
, "Lexus": 37
, "DS Automobiles": 15
, "Smart": 14
, "Polestar": 2
, "Maserati": 2
, "Dodge": 1
, "Cadillac": 1
, "other": 100
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
, "Audi|e-tron": 112
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
, "Lexus": 10
, "DS Automobiles": 8
, "Polestar": 1
, "Cadillac": 1
, "other": 65
});

db.insert(db.countries.AT, "2021-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "other": 690
, "Volkswagen|ID.3": 363
, "Škoda|Enyaq": 339
, "Volkswagen|ID.4": 280
, "Audi|e-tron": 159
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
, "Tesla": 170
, "Cupra": 170
, "Porsche": 145
, "Honda": 135
, "Land Rover": 130
, "Jeep": 128
, "Jaguar": 93
, "MG": 64
, "Subaru": 42
, "DS Automobiles": 21
, "Lexus": 15
, "Smart": 11
, "Polestar": 5
, "Maserati": 4
, "other": 88
});

db.insert(db.countries.AT, "2021-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "other": 782
, "Volkswagen|ID.3": 379
, "Škoda|Enyaq": 378
, "Volkswagen|ID.4": 265
, "Fiat|500e": 190
, "Tesla|Model 3": 170
, "Audi|e-tron": 132
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
, "Lexus": 15
, "DS Automobiles": 10
, "Maserati": 7
, "Cadillac": 2
, "other": 109
});

db.insert(db.countries.AT, "2021-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Tesla|Model 3": 806
, "Škoda|Enyaq": 313
, "Volkswagen|ID.4": 309
, "Volkswagen|ID.3": 243
, "Renault|Zoe": 201
, "Seat|Mii Electric": 198
, "Fiat|500e": 185
, "Audi|e-tron": 121
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
, "DS Automobiles": 10
, "Lexus": 6
, "Polestar": 5
, "Maserati": 3
, "other": 69
});

db.insert(db.countries.AT, "2021-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Volkswagen|ID.3": 181
, "Volkswagen|ID.4": 159
, "Renault|Zoe": 139
, "Ford|Mustang Mach-E": 139
, "Škoda|Enyaq": 133
, "Audi|e-tron": 115
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
, "Lexus": 24
, "Polestar": 8
, "DS Automobiles": 4
, "other": 76
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
, "DS Automobiles": 17
, "Lexus": 11
, "Smart": 7
, "Maserati": 4
, "other": 87
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
, "Audi|e-tron": 118
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
, "Land Rover": 124
, "Jeep": 124
, "Porsche": 111
, "Cupra": 108
, "Mitsubishi": 89
, "Honda": 82
, "MG": 63
, "Jaguar": 50
, "Subaru": 45
, "Tesla": 41
, "DS Automobiles": 20
, "Polestar": 18
, "Lexus": 13
, "Smart": 6
, "Ram": 1
, "Maserati": 1
, "Chrysler": 1
, "other": 63
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
, "DS Automobiles": 12
, "Lexus": 8
, "Smart": 7
, "Chevrolet": 1
, "other": 44
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
, "DS Automobiles": 25
, "Jaguar": 22
, "Lexus": 16
, "Smart": 13
, "Maserati": 3
, "Chrysler": 3
, "Dodge": 1
, "other": 78
});

db.insert(db.countries.AT, "2021-12", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/kfz-neuzulassungen_jaenner_bis_dezember_2021.ods",
{ "Hyundai|Ioniq Electric": 277
, "Mini|Cooper SE Electric": 233
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

db.insert(db.countries.AT, "2022-01", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
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
, "Lexus": 18
, "DS Automobiles": 11
, "Smart": 6
, "Maserati": 1
, "Chevrolet": 1
, "other": 41
});

db.insert(db.countries.AT, "2022-01", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
{ "Cupra|Born": 266
, "Audi|Q4 e-tron": 156
, "Škoda|Enyaq": 132
, "Ford|Mustang Mach-E": 119
, "Kia|EV6": 103
, "Renault|Zoe": 89
, "Volkswagen|ID.3": 88
, "Volkswagen|ID.4": 83
, "Audi|e-tron": 79
, "BMW|i3 BEV": 67
, "other": 831
});

db.insert(db.countries.AT, "2022-02", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
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
, "Dacia": 365
, "Citroën": 365
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
, "Lexus": 23
, "Smart": 9
, "DS Automobiles": 9
, "Maserati": 2
, "other": 48
});

db.insert(db.countries.AT, "2022-02", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
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

db.insert(db.countries.AT, "2022-03", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
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
, "Lexus": 25
, "DS Automobiles": 16
, "Smart": 13
, "Chrysler": 4
, "Maserati": 2
, "Chevrolet": 1
, "other": 72
});

db.insert(db.countries.AT, "2022-03", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
{ "Tesla|Model Y": 655
, "Tesla|Model 3": 315
, "Škoda|Enyaq": 175
, "Cupra|Born": 146
, "BMW|i3 BEV": 145
, "Audi|Q4 e-tron": 113
, "Ford|Mustang Mach-E": 112
, "Kia|EV6": 89
, "Audi|e-tron": 81
, "Kia|Niro EV": 80
, "other": 1128
});

db.insert(db.countries.AT, "2022-04", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
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
, "Lexus": 19
, "DS Automobiles": 14
, "Smart": 10
, "Maserati": 3
, "Chrysler": 1
, "other": 95
});

db.insert(db.countries.AT, "2022-04", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
{ "Cupra|Born": 144
, "Škoda|Enyaq": 104
, "Ford|Mustang Mach-E": 99
, "BMW|i3 BEV": 98
, "Kia|EV6": 93
, "Renault|Zoe": 85
, "Volkswagen|ID.3": 81
, "Audi|e-tron": 78
, "Dacia|Spring": 76
, "Fiat|500e": 73
, "other": 918
});

db.insert(db.countries.AT, "2022-05", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
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
, "DS Automobiles": 33
, "Tesla": 30
, "Lexus": 30
, "Jaguar": 18
, "Smart": 9
, "Maserati": 1
, "Chrysler": 1
, "Chevrolet": 1
, "other": 72
});

db.insert(db.countries.AT, "2022-05", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/KfzNeuzulassungenJaennerBisMai2022.ods",
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

db.insert(db.countries.AT, "2022-06", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuni2022.ods",
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
, "DS Automobiles": 49
, "Jaguar": 39
, "Lexus": 31
, "Subaru": 14
, "Smart": 5
, "Chrysler": 2
, "Chevrolet": 2
, "Maserati": 1
, "Cadillac": 1
, "other": 122
});

db.insert(db.countries.AT, "2022-06", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuni2022.ods",
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

db.insert(db.countries.AT, "2022-07", db.dsTypes.AllCarsByBrand, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuli2022.ods",
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
, "Polestar": 36
, "Jaguar": 36
, "Subaru": 28
, "DS Automobiles": 15
, "Lexus": 10
, "Maserati": 6
, "Smart": 4
, "other": 119
});

db.insert(db.countries.AT, "2022-07", db.dsTypes.ElectricCarsByModel, "https://www.statistik.at/fileadmin/pages/77/NeuzulassungenFahrzeugeJaennerBisJuli2022.ods",
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
