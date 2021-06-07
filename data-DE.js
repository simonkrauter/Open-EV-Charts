// // Data sets for car sales in Germany

"use strict";

db.addCountry("DE", "Germany");

db.insert(db.countries.DE, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_01_xls.xls?__blob=publicationFile&v=9",
{ "Volkswagen": 54348
, "Mercedes-Benz": 26419
, "Audi": 21032
, "BMW": 20759
, "Ford": 18387
, "Opel": 17364
, "Škoda": 14904
, "Renault": 9708
, "Hyundai": 8314
, "Seat": 7741
, "Toyota": 6937
, "Peugeot": 5805
, "Dacia": 5795
, "Mazda": 5750
, "Kia": 5189
, "Nissan": 4788
, "Fiat": 4580
, "Citroën": 4346
, "Mini": 3624
, "Mitsubishi": 3374
, "Smart": 3048
, "Porsche": 2854
, "Volvo": 2711
, "Suzuki": 2502
, "Land Rover": 2087
, "Honda": 1651
, "Jeep": 1206
, "Jaguar": 733
, "Subaru": 551
, "Alfa Romeo": 452
, "DS Automobiles": 237
, "SsangYong": 213
, "Lexus": 199
, "Maserati": 142
, "Infiniti": 65
, "Cadillac": 63
, "Tesla": 63
, "Chevrolet": 59
, "other": 1429
});

db.insert(db.countries.DE, "2018-01", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_01_xls.xls?__blob=publicationFile&v=9",
{ "Smart|Fortwo ED": 729
, "Kia|Soul EV": 450
, "Volkswagen|e-Golf": 450
, "Renault|Zoé": 299
, "BMW|i3 BEV": 210
, "Hyundai|Ioniq Electric": 189
, "Smart|Forfour ED": 173
, "Volkswagen|e-up!": 73
, "Opel|Ampera-e": 67
, "Tesla|Model S": 45
, "Tesla|Model X": 17
, "Nissan|e-NV200": 15
, "Nissan|Leaf": 11
, "Mercedes-Benz|B-Klasse ED": 3
, "Volkswagen|other": 1
, "Tesla|Model 3": 1
});

db.insert(db.countries.DE, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_02_xls.xls?__blob=publicationFile&v=7",
{ "Volkswagen": 47822
, "Audi": 23510
, "Mercedes-Benz": 21910
, "Ford": 19258
, "Opel": 19218
, "BMW": 17664
, "Škoda": 16555
, "Renault": 9842
, "Hyundai": 7893
, "Seat": 7666
, "Toyota": 6651
, "Peugeot": 6077
, "Fiat": 6025
, "Mazda": 5289
, "Nissan": 5022
, "Dacia": 5000
, "Kia": 4795
, "Citroën": 4579
, "Mitsubishi": 3572
, "Suzuki": 3406
, "Smart": 2964
, "Mini": 2950
, "Volvo": 2687
, "Porsche": 2504
, "Honda": 2084
, "Land Rover": 1599
, "Jeep": 1009
, "Subaru": 474
, "Jaguar": 460
, "DS Automobiles": 423
, "Alfa Romeo": 328
, "SsangYong": 230
, "Tesla": 175
, "Lexus": 155
, "Maserati": 99
, "Chevrolet": 75
, "Infiniti": 73
, "Cadillac": 25
, "other": 1681
});

db.insert(db.countries.DE, "2018-02", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_02_xls.xls?__blob=publicationFile&v=7",
{ "Smart|Fortwo ED": 510
, "Renault|Zoé": 475
, "Volkswagen|e-Golf": 465
, "Smart|Forfour ED": 253
, "BMW|i3 BEV": 199
, "Tesla|Model S": 124
, "Opel|Ampera-e": 111
, "Hyundai|Ioniq Electric": 109
, "Kia|Soul EV": 101
, "Volkswagen|e-up!": 73
, "Tesla|Model X": 51
, "Mercedes-Benz|B-Klasse ED": 25
, "Citroën|C-Zero": 7
, "Nissan|e-NV200": 6
, "Ford|Focus Electric": 5
});

db.insert(db.countries.DE, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_03_xls.xls?__blob=publicationFile&v=3",
{ "Volkswagen": 64496
, "Mercedes-Benz": 29583
, "Ford": 26890
, "BMW": 26278
, "Audi": 25673
, "Opel": 21147
, "Škoda": 19567
, "Renault": 12804
, "Hyundai": 11688
, "Seat": 11482
, "Fiat": 10129
, "Toyota": 8379
, "Nissan": 7786
, "Mazda": 7350
, "Peugeot": 7092
, "Mitsubishi": 6405
, "Dacia": 6269
, "Citroën": 5894
, "Kia": 5877
, "Mini": 4657
, "Suzuki": 3971
, "Smart": 3652
, "Volvo": 3519
, "Honda": 3083
, "Porsche": 3008
, "Land Rover": 2702
, "Jeep": 1625
, "Jaguar": 1339
, "Alfa Romeo": 702
, "Subaru": 664
, "DS Automobiles": 451
, "Tesla": 428
, "Lexus": 296
, "SsangYong": 231
, "Maserati": 130
, "Chevrolet": 90
, "Infiniti": 62
, "Cadillac": 60
, "other": 1974
});

db.insert(db.countries.DE, "2018-03", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_03_xls.xls?__blob=publicationFile&v=3",
{ "Volkswagen|e-Golf": 534
, "Renault|Zoé": 523
, "Smart|Forfour ED": 457
, "Smart|Fortwo ED": 454
, "Kia|Soul EV": 396
, "Nissan|Leaf": 346
, "BMW|i3 BEV": 322
, "Tesla|Model S": 304
, "Volkswagen|e-up!": 131
, "Tesla|Model X": 124
, "Hyundai|Ioniq Electric": 61
, "Opel|Ampera-e": 57
, "Audi|other": 24
, "Ford|Focus Electric": 10
, "Mercedes-Benz|B-Klasse ED": 10
, "Peugeot|iOn": 9
, "Citroën|C-Zero": 3
, "Nissan|e-NV200": 1
, "Volkswagen|other": 1
});

db.insert(db.countries.DE, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_04_xls.xls?__blob=publicationFile&v=6",
{ "Volkswagen": 64769
, "Mercedes-Benz": 29112
, "Audi": 26392
, "Ford": 24571
, "BMW": 21079
, "Opel": 19970
, "Škoda": 17075
, "Seat": 11140
, "Renault": 10944
, "Hyundai": 10020
, "Fiat": 7967
, "Toyota": 7903
, "Dacia": 6657
, "Kia": 6477
, "Peugeot": 6164
, "Mazda": 5090
, "Citroën": 4851
, "Mini": 4287
, "Nissan": 3744
, "Smart": 3611
, "Volvo": 3450
, "Mitsubishi": 3449
, "Porsche": 3074
, "Suzuki": 2910
, "Honda": 1977
, "Land Rover": 1412
, "Jeep": 1316
, "Jaguar": 766
, "Subaru": 669
, "Alfa Romeo": 451
, "DS Automobiles": 304
, "Lexus": 219
, "SsangYong": 206
, "Maserati": 152
, "Chevrolet": 106
, "Tesla": 106
, "Infiniti": 68
, "Cadillac": 36
, "other": 1561
});

db.insert(db.countries.DE, "2018-04", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_04_xls.xls?__blob=publicationFile&v=6",
{ "Kia|Soul EV": 721
, "Volkswagen|e-Golf": 456
, "Renault|Zoé": 422
, "BMW|i3 BEV": 395
, "Nissan|Leaf": 279
, "Smart|Fortwo ED": 254
, "Smart|Forfour ED": 175
, "Hyundai|Ioniq Electric": 96
, "Volkswagen|e-up!": 95
, "Tesla|Model S": 71
, "Audi|other": 41
, "Tesla|Model X": 35
, "Jaguar|I-Pace": 31
, "Opel|Ampera-e": 26
, "Nissan|e-NV200": 16
, "Citroën|C-Zero": 12
, "Peugeot|iOn": 7
, "Ford|Focus Electric": 2
});

db.insert(db.countries.DE, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_05_xls.xls?__blob=publicationFile&v=4",
{ "Volkswagen": 63835
, "Mercedes-Benz": 27214
, "Audi": 26971
, "Ford": 22050
, "BMW": 19027
, "Opel": 18761
, "Škoda": 18075
, "Renault": 11683
, "Seat": 10478
, "Fiat": 9148
, "Hyundai": 9129
, "Dacia": 7515
, "Toyota": 7228
, "Kia": 5765
, "Peugeot": 5343
, "Citroën": 4596
, "Mazda": 4582
, "Mini": 4576
, "Mitsubishi": 3866
, "Nissan": 3606
, "Smart": 3251
, "Volvo": 3129
, "Suzuki": 3003
, "Porsche": 2984
, "Honda": 1888
, "Jeep": 1479
, "Land Rover": 1063
, "Subaru": 661
, "Jaguar": 622
, "Alfa Romeo": 621
, "DS Automobiles": 395
, "Lexus": 249
, "SsangYong": 227
, "Tesla": 200
, "Chevrolet": 143
, "Maserati": 110
, "Infiniti": 61
, "Cadillac": 38
, "other": 1485
});

db.insert(db.countries.DE, "2018-05", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_05_xls.xls?__blob=publicationFile&v=4",
{ "Renault|Zoé": 507
, "Volkswagen|e-Golf": 366
, "Kia|Soul EV": 231
, "BMW|i3 BEV": 226
, "Smart|Forfour ED": 201
, "Nissan|Leaf": 129
, "Smart|Fortwo ED": 122
, "Tesla|Model S": 112
, "Hyundai|Ioniq Electric": 98
, "Tesla|Model X": 88
, "Volkswagen|e-up!": 76
, "Mercedes-Benz|B-Klasse ED": 34
, "Audi|other": 25
, "Opel|Ampera-e": 23
, "Nissan|e-NV200": 15
, "Citroën|C-Zero": 12
, "Peugeot|iOn": 11
, "Kia|Niro EV": 3
, "Jaguar|I-Pace": 2
});

db.insert(db.countries.DE, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_06_xls.xls?__blob=publicationFile&v=3",
{ "Volkswagen": 66389
, "Mercedes-Benz": 28376
, "Audi": 27775
, "BMW": 25325
, "Ford": 24525
, "Opel": 22066
, "Škoda": 20626
, "Renault": 13710
, "Seat": 12954
, "Hyundai": 11938
, "Fiat": 8644
, "Dacia": 7957
, "Toyota": 7603
, "Peugeot": 6282
, "Mazda": 5911
, "Kia": 5667
, "Mini": 5371
, "Nissan": 5276
, "Mitsubishi": 4627
, "Citroën": 4553
, "Volvo": 4452
, "Smart": 3974
, "Porsche": 3568
, "Suzuki": 3070
, "Land Rover": 1731
, "Jeep": 1671
, "Honda": 1545
, "Jaguar": 1141
, "Alfa Romeo": 742
, "Subaru": 695
, "DS Automobiles": 398
, "Lexus": 298
, "Tesla": 282
, "SsangYong": 241
, "Maserati": 118
, "Chevrolet": 115
, "Infiniti": 52
, "Cadillac": 35
, "other": 1605
});

db.insert(db.countries.DE, "2018-06", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_06_xls.xls?__blob=publicationFile&v=3",
{ "Renault|Zoé": 465
, "BMW|i3 BEV": 399
, "Smart|Forfour ED": 310
, "Volkswagen|e-Golf": 290
, "Smart|Fortwo ED": 264
, "Tesla|Model S": 200
, "Nissan|Leaf": 127
, "Hyundai|Ioniq Electric": 126
, "Kia|Soul EV": 125
, "Tesla|Model X": 80
, "Peugeot|iOn": 70
, "Volkswagen|e-up!": 62
, "Audi|other": 39
, "Nissan|e-NV200": 29
, "Jaguar|I-Pace": 10
, "Mercedes-Benz|B-Klasse ED": 8
, "Citroën|C-Zero": 7
, "Opel|Ampera-e": 7
, "Kia|Niro EV": 2
, "Tesla|Model 3": 2
});

db.insert(db.countries.DE, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_07_xls.xls?__blob=publicationFile&v=3",
{ "Volkswagen": 66367
, "Audi": 33562
, "Mercedes-Benz": 25377
, "Ford": 20829
, "BMW": 18250
, "Škoda": 18021
, "Opel": 17404
, "Seat": 14016
, "Renault": 13601
, "Hyundai": 9170
, "Dacia": 7645
, "Fiat": 7288
, "Toyota": 6993
, "Citroën": 6425
, "Kia": 6375
, "Peugeot": 5662
, "Mazda": 4648
, "Smart": 4562
, "Volvo": 4548
, "Mitsubishi": 4059
, "Porsche": 3930
, "Mini": 3676
, "Nissan": 3663
, "Suzuki": 2879
, "Jeep": 1404
, "Honda": 1236
, "Land Rover": 982
, "Subaru": 715
, "Jaguar": 672
, "Alfa Romeo": 485
, "DS Automobiles": 377
, "SsangYong": 288
, "Lexus": 180
, "Chevrolet": 136
, "Maserati": 118
, "Tesla": 95
, "Infiniti": 93
, "Cadillac": 63
, "other": 2054
});

db.insert(db.countries.DE, "2018-07", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_07_xls.xls?__blob=publicationFile&v=3",
{ "Kia|Soul EV": 423
, "Smart|Fortwo ED": 387
, "Renault|Zoé": 320
, "BMW|i3 BEV": 314
, "Volkswagen|e-Golf": 311
, "Nissan|Leaf": 159
, "Smart|Forfour ED": 116
, "Hyundai|Ioniq Electric": 105
, "Jaguar|I-Pace": 70
, "Tesla|Model S": 51
, "Volkswagen|e-up!": 46
, "Tesla|Model X": 44
, "Porsche|other": 32
, "Audi|other": 30
, "Citroën|C-Zero": 24
, "Peugeot|iOn": 18
, "Opel|Ampera-e": 15
, "Nissan|e-NV200": 3
, "Volkswagen|other": 2
, "Mercedes-Benz|eVito": 1
});

db.insert(db.countries.DE, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_08_xls.xls?__blob=publicationFile&v=2",
{ "Volkswagen": 63623
, "Audi": 28198
, "Mercedes-Benz": 23764
, "BMW": 19289
, "Renault": 17865
, "Ford": 17810
, "Opel": 17609
, "Seat": 17220
, "Škoda": 17218
, "Hyundai": 10775
, "Dacia": 9838
, "Fiat": 7034
, "Toyota": 6836
, "Kia": 5995
, "Mitsubishi": 5704
, "Mazda": 5700
, "Peugeot": 5372
, "Citroën": 5137
, "Nissan": 4525
, "Mini": 3525
, "Suzuki": 3286
, "Porsche": 3161
, "Smart": 3150
, "Volvo": 2779
, "Jeep": 1882
, "Land Rover": 1773
, "Jaguar": 1201
, "Honda": 1033
, "Subaru": 797
, "Alfa Romeo": 625
, "DS Automobiles": 288
, "SsangYong": 257
, "Lexus": 203
, "Infiniti": 195
, "Maserati": 173
, "Chevrolet": 82
, "Tesla": 82
, "Cadillac": 52
, "other": 2349
});

db.insert(db.countries.DE, "2018-08", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_08_xls.xls?__blob=publicationFile&v=2",
{ "Renault|Zoé": 421
, "Kia|Soul EV": 339
, "Smart|Fortwo ED": 334
, "BMW|i3 BEV": 282
, "Volkswagen|e-Golf": 268
, "Nissan|Leaf": 177
, "Smart|Forfour ED": 169
, "Hyundai|Ioniq Electric": 138
, "Volkswagen|e-up!": 105
, "Tesla|Model S": 47
, "Tesla|Model X": 35
, "Audi|other": 25
, "Opel|Ampera-e": 25
, "Citroën|C-Zero": 6
, "Nissan|e-NV200": 5
, "Peugeot|iOn": 3
, "Jaguar|I-Pace": 2
, "Citroën|Berlingo Electric": 1
, "Volkswagen|other": 1
});

db.insert(db.countries.DE, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_09_xls.xls?__blob=publicationFile&v=2",
{ "BMW": 24524
, "Mercedes-Benz": 22379
, "Opel": 20337
, "Volkswagen": 20278
, "Ford": 15006
, "Škoda": 10981
, "Hyundai": 8584
, "Mazda": 7010
, "Toyota": 6982
, "Fiat": 5622
, "Peugeot": 5276
, "Renault": 5078
, "Kia": 4896
, "Audi": 4596
, "Mitsubishi": 4396
, "Nissan": 4109
, "Citroën": 4083
, "Mini": 3972
, "Seat": 3836
, "Volvo": 3291
, "Suzuki": 3104
, "Smart": 2273
, "Dacia": 2083
, "Jeep": 1515
, "Land Rover": 973
, "Jaguar": 943
, "Subaru": 620
, "Honda": 594
, "Porsche": 473
, "DS Automobiles": 278
, "Lexus": 258
, "Alfa Romeo": 219
, "Tesla": 185
, "SsangYong": 113
, "Maserati": 96
, "Chevrolet": 45
, "Infiniti": 15
, "Cadillac": 8
, "other": 1103
});

db.insert(db.countries.DE, "2018-09", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_09_xls.xls?__blob=publicationFile&v=2",
{ "Volkswagen|e-Golf": 432
, "Renault|Zoé": 328
, "BMW|i3 BEV": 282
, "Nissan|Leaf": 275
, "Smart|Fortwo ED": 264
, "Kia|Soul EV": 120
, "Hyundai|Ioniq Electric": 110
, "Tesla|Model S": 104
, "Hyundai|Kona Electric": 91
, "Tesla|Model X": 81
, "Volkswagen|e-up!": 80
, "Smart|Forfour ED": 74
, "Porsche|other": 32
, "Nissan|e-NV200": 13
, "Opel|Ampera-e": 10
, "Jaguar|I-Pace": 8
, "Peugeot|iOn": 5
, "Citroën|C-Zero": 3
, "Kia|Niro EV": 3
, "Volkswagen|other": 3
, "Mercedes-Benz|eVito": 1
});

db.insert(db.countries.DE, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_10_xls.xls?__blob=publicationFile&v=3",
{ "Volkswagen": 40811
, "Mercedes-Benz": 31737
, "BMW": 23521
, "Ford": 22346
, "Opel": 19545
, "Škoda": 14422
, "Hyundai": 9272
, "Seat": 8099
, "Audi": 7785
, "Toyota": 6896
, "Renault": 6463
, "Mazda": 5971
, "Peugeot": 5756
, "Fiat": 5433
, "Kia": 5208
, "Mitsubishi": 4883
, "Smart": 4539
, "Mini": 4476
, "Volvo": 4270
, "Citroën": 3908
, "Dacia": 3612
, "Suzuki": 3049
, "Nissan": 2616
, "Honda": 1411
, "Land Rover": 1203
, "Jeep": 1171
, "Subaru": 576
, "Porsche": 560
, "Jaguar": 526
, "Alfa Romeo": 273
, "DS Automobiles": 255
, "Lexus": 176
, "SsangYong": 134
, "Maserati": 128
, "Chevrolet": 123
, "Cadillac": 65
, "Tesla": 62
, "Infiniti": 26
, "other": 1321
});

db.insert(db.countries.DE, "2018-10", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_10_xls.xls?__blob=publicationFile&v=3",
{ "Volkswagen|e-Golf": 784
, "Renault|Zoé": 609
, "Smart|Fortwo ED": 402
, "BMW|i3 BEV": 306
, "Nissan|Leaf": 306
, "Smart|Forfour ED": 295
, "Hyundai|Ioniq Electric": 257
, "Hyundai|Kona Electric": 78
, "Volkswagen|e-up!": 66
, "Kia|Soul EV": 53
, "Tesla|Model S": 46
, "Porsche|other": 27
, "Jaguar|I-Pace": 22
, "Nissan|e-NV200": 20
, "Opel|Ampera-e": 19
, "Tesla|Model X": 15
, "Peugeot|iOn": 9
, "Volkswagen|other": 8
, "Citroën|C-Zero": 3
, "Mercedes-Benz|eVito": 1
, "Tesla|Model 3": 1
});

db.insert(db.countries.DE, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_11_xls.xls?__blob=publicationFile&v=4",
{ "Volkswagen": 49253
, "Mercedes-Benz": 30416
, "BMW": 24476
, "Ford": 22940
, "Opel": 18952
, "Škoda": 17154
, "Audi": 13170
, "Seat": 10347
, "Hyundai": 9577
, "Renault": 9443
, "Toyota": 6469
, "Mazda": 5211
, "Kia": 5186
, "Fiat": 5118
, "Peugeot": 4905
, "Mini": 4876
, "Volvo": 4796
, "Dacia": 4489
, "Mitsubishi": 3767
, "Smart": 3723
, "Citroën": 3566
, "Suzuki": 3258
, "Nissan": 2660
, "Jeep": 1481
, "Land Rover": 1422
, "Honda": 1150
, "Porsche": 1108
, "Jaguar": 671
, "Subaru": 483
, "Alfa Romeo": 296
, "Lexus": 294
, "DS Automobiles": 171
, "SsangYong": 168
, "Maserati": 138
, "Tesla": 122
, "Chevrolet": 60
, "Infiniti": 39
, "Cadillac": 29
, "other": 1290
});

db.insert(db.countries.DE, "2018-11", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_11_xls.xls?__blob=publicationFile&v=4",
{ "Renault|Zoé": 1047
, "Volkswagen|e-Golf": 858
, "Nissan|Leaf": 366
, "BMW|i3 BEV": 360
, "Smart|Fortwo ED": 296
, "Hyundai|Ioniq Electric": 227
, "Audi|other": 220
, "Smart|Forfour ED": 214
, "Kia|Soul EV": 182
, "Volkswagen|e-up!": 126
, "Hyundai|Kona Electric": 95
, "Tesla|Model S": 81
, "Tesla|Model X": 40
, "Jaguar|I-Pace": 38
, "Porsche|other": 29
, "Nissan|e-NV200": 23
, "Opel|Ampera-e": 15
, "Citroën|C-Zero": 12
, "Volkswagen|other": 9
, "Peugeot|iOn": 3
, "Tesla|Model 3": 1
});

db.insert(db.countries.DE, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_12_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 41527
, "BMW": 24859
, "Mercedes-Benz": 22876
, "Ford": 17711
, "Audi": 16636
, "Opel": 15594
, "Škoda": 12370
, "Renault": 9684
, "Hyundai": 8518
, "Seat": 6745
, "Volvo": 5773
, "Toyota": 5053
, "Dacia": 4886
, "Mazda": 4875
, "Mini": 4504
, "Peugeot": 4503
, "Fiat": 4472
, "Kia": 4367
, "Citroën": 3285
, "Suzuki": 3092
, "Mitsubishi": 2701
, "Nissan": 2571
, "Smart": 2347
, "Porsche": 1471
, "Jeep": 1362
, "Land Rover": 1194
, "Honda": 1058
, "Jaguar": 426
, "Subaru": 380
, "Alfa Romeo": 242
, "Lexus": 239
, "DS Automobiles": 155
, "Maserati": 132
, "SsangYong": 128
, "Cadillac": 116
, "Tesla": 105
, "Chevrolet": 84
, "Infiniti": 13
, "other": 1004
});

db.insert(db.countries.DE, "2018-12", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_12_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Renault|Zoé": 944
, "Volkswagen|e-Golf": 529
, "Audi|other": 528
, "BMW|i3 BEV": 497
, "Nissan|Leaf": 205
, "Smart|Fortwo ED": 188
, "Hyundai|Ioniq Electric": 179
, "Kia|Soul EV": 151
, "Smart|Forfour ED": 115
, "Hyundai|Kona Electric": 104
, "Volkswagen|e-up!": 86
, "Tesla|Model S": 63
, "Tesla|Model X": 42
, "Porsche|other": 28
, "Mini|Cooper SE Electric": 23
, "Kia|Niro EV": 22
, "Volkswagen|other": 12
, "Opel|Ampera-e": 10
, "Citroën|C-Zero": 9
, "Jaguar|I-Pace": 8
, "Peugeot|iOn": 5
, "Nissan|e-NV200": 4
});

db.insert(db.countries.DE, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_01_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 50823
, "Mercedes-Benz": 25292
, "Audi": 21814
, "Ford": 21064
, "BMW": 19198
, "Opel": 16225
, "Škoda": 14668
, "Renault": 9932
, "Hyundai": 9290
, "Seat": 8218
, "Toyota": 6656
, "Dacia": 6603
, "Peugeot": 6099
, "Mazda": 5587
, "Kia": 5418
, "Fiat": 4941
, "Citroën": 4782
, "Volvo": 3786
, "Mini": 3744
, "Mitsubishi": 3290
, "Smart": 3279
, "Suzuki": 2965
, "Nissan": 2879
, "Land Rover": 1831
, "Porsche": 1318
, "Jeep": 1212
, "Honda": 1079
, "Subaru": 807
, "Jaguar": 543
, "Alfa Romeo": 309
, "DS Automobiles": 222
, "Lexus": 181
, "SsangYong": 161
, "Tesla": 137
, "Cadillac": 115
, "Maserati": 87
, "Chevrolet": 72
, "Infiniti": 33
, "other": 1042
});

db.insert(db.countries.DE, "2019-01", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_01_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Renault|Zoé": 799
, "Volkswagen|e-Golf": 746
, "BMW|i3 BEV": 645
, "Audi|e-tron": 407
, "Kia|Soul EV": 302
, "Hyundai|Kona Electric": 291
, "Nissan|Leaf": 288
, "Smart|Fortwo ED": 264
, "Hyundai|Ioniq Electric": 203
, "Smart|Forfour ED": 145
, "Kia|Niro EV": 103
, "Tesla|Model S": 91
, "Peugeot|iOn": 70
, "Volkswagen|e-up!": 69
, "Nissan|e-NV200": 67
, "Tesla|Model X": 44
, "Mercedes-Benz|eVito": 22
, "Jaguar|I-Pace": 16
, "Mini|Cooper SE Electric": 16
, "Opel|Ampera-e": 14
, "Volkswagen|other": 9
, "Volkswagen|e-Crafter": 7
, "Citroën|C-Zero": 5
, "Tesla|Model 3": 2
});

db.insert(db.countries.DE, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_02_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 49965
, "Mercedes-Benz": 24380
, "Audi": 24050
, "Ford": 21264
, "BMW": 17825
, "Opel": 17677
, "Škoda": 16758
, "Renault": 9635
, "Hyundai": 9242
, "Seat": 9100
, "Toyota": 6483
, "Dacia": 5849
, "Fiat": 5594
, "Peugeot": 5581
, "Mazda": 5397
, "Kia": 5215
, "Citroën": 4587
, "Mitsubishi": 4213
, "Smart": 3705
, "Volvo": 3431
, "Mini": 3301
, "Suzuki": 3190
, "Nissan": 2897
, "Porsche": 1456
, "Honda": 1278
, "Jeep": 1162
, "Land Rover": 1114
, "Tesla": 1092
, "Jaguar": 642
, "Subaru": 547
, "Alfa Romeo": 272
, "DS Automobiles": 198
, "SsangYong": 159
, "Lexus": 153
, "Chevrolet": 85
, "Maserati": 56
, "Cadillac": 38
, "Infiniti": 27
, "other": 1249
});

db.insert(db.countries.DE, "2019-02", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_02_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Tesla|Model 3": 959
, "Renault|Zoé": 782
, "BMW|i3 BEV": 628
, "Hyundai|Kona Electric": 400
, "Nissan|Leaf": 302
, "Volkswagen|e-Golf": 281
, "Smart|Forfour ED": 190
, "Smart|Fortwo ED": 179
, "Audi|e-tron": 155
, "Kia|Soul EV": 149
, "Hyundai|Ioniq Electric": 142
, "Jaguar|I-Pace": 92
, "Tesla|Model S": 87
, "Volkswagen|e-up!": 65
, "Kia|Niro EV": 52
, "Tesla|Model X": 46
, "Opel|Ampera-e": 27
, "Nissan|e-NV200": 26
, "Porsche|other": 20
, "Volkswagen|other": 9
, "Citroën|C-Zero": 5
, "Peugeot|iOn": 3
, "Mercedes-Benz|eVito": 1
});

db.insert(db.countries.DE, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_03_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 62627
, "Audi": 29751
, "Mercedes-Benz": 28054
, "Ford": 25613
, "BMW": 25458
, "Opel": 22505
, "Škoda": 20374
, "Renault": 12729
, "Seat": 12451
, "Hyundai": 11174
, "Fiat": 9951
, "Toyota": 7188
, "Mazda": 7092
, "Peugeot": 7091
, "Mitsubishi": 6761
, "Dacia": 6487
, "Citroën": 6150
, "Kia": 5658
, "Volvo": 4905
, "Nissan": 4774
, "Mini": 4690
, "Suzuki": 4431
, "Smart": 4113
, "Porsche": 2723
, "Tesla": 2367
, "Land Rover": 2222
, "Honda": 1858
, "Jeep": 1779
, "Jaguar": 987
, "Subaru": 514
, "Alfa Romeo": 410
, "DS Automobiles": 290
, "Lexus": 284
, "SsangYong": 172
, "Chevrolet": 115
, "Maserati": 84
, "Infiniti": 30
, "Cadillac": 24
, "other": 1637
});

db.insert(db.countries.DE, "2019-03", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_03_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Tesla|Model 3": 2224
, "Renault|Zoé": 1136
, "BMW|i3 BEV": 708
, "Audi|e-tron": 478
, "Smart|Fortwo ED": 371
, "Hyundai|Kona Electric": 284
, "Nissan|Leaf": 227
, "Volkswagen|e-Golf": 219
, "Smart|Forfour ED": 132
, "Hyundai|Ioniq Electric": 131
, "Jaguar|I-Pace": 106
, "Nissan|e-NV200": 93
, "Kia|Niro EV": 87
, "Tesla|Model S": 82
, "Tesla|Model X": 61
, "Volkswagen|e-up!": 59
, "Volkswagen|e-Crafter": 43
, "Kia|Soul EV": 33
, "Mini|Cooper SE Electric": 33
, "Porsche|other": 30
, "Volkswagen|other": 12
, "Citroën|C-Zero": 10
, "Peugeot|iOn": 8
, "Opel|Ampera-e": 6
});

db.insert(db.countries.DE, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_04_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 57526
, "Mercedes-Benz": 29590
, "BMW": 24748
, "Ford": 24342
, "Audi": 23007
, "Opel": 18935
, "Škoda": 16851
, "Renault": 11379
, "Hyundai": 10539
, "Seat": 10148
, "Fiat": 10036
, "Toyota": 7889
, "Dacia": 6992
, "Peugeot": 6419
, "Kia": 5711
, "Citroën": 5606
, "Mazda": 5445
, "Mitsubishi": 4748
, "Smart": 4514
, "Volvo": 4160
, "Mini": 3697
, "Nissan": 3366
, "Porsche": 3093
, "Suzuki": 2591
, "Land Rover": 1665
, "Honda": 1408
, "Jeep": 1293
, "Jaguar": 851
, "Tesla": 575
, "Subaru": 497
, "Alfa Romeo": 377
, "Lexus": 333
, "SsangYong": 206
, "DS Automobiles": 205
, "Chevrolet": 178
, "Maserati": 92
, "Cadillac": 25
, "Infiniti": 20
, "other": 1658
});

db.insert(db.countries.DE, "2019-04", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_04_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Renault|Zoé": 939
, "BMW|i3 BEV": 734
, "Tesla|Model 3": 514
, "Volkswagen|e-Golf": 489
, "Smart|Fortwo ED": 428
, "Hyundai|Kona Electric": 296
, "Smart|Forfour ED": 280
, "Audi|e-tron": 174
, "Nissan|Leaf": 165
, "Hyundai|Ioniq Electric": 137
, "Jaguar|I-Pace": 85
, "Volkswagen|e-up!": 68
, "Kia|Soul EV": 60
, "Volkswagen|e-Crafter": 56
, "Nissan|e-NV200": 47
, "Citroën|C-Zero": 43
, "Tesla|Model S": 40
, "Kia|Niro EV": 39
, "Porsche|other": 38
, "Mercedes-Benz|EQC": 37
, "Volkswagen|other": 30
, "Tesla|Model X": 21
, "Peugeot|iOn": 11
, "Mini|Cooper SE Electric": 9
, "Opel|Ampera-e": 5
, "Mercedes-Benz|eVito": 2
, "Opel|Vivaro-e": 2
});

db.insert(db.countries.DE, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_05_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 60906
, "Mercedes-Benz": 29793
, "BMW": 26995
, "Ford": 26011
, "Audi": 25816
, "Opel": 21622
, "Škoda": 18701
, "Seat": 14139
, "Hyundai": 10747
, "Renault": 10394
, "Fiat": 9895
, "Toyota": 8549
, "Dacia": 7807
, "Peugeot": 6599
, "Kia": 6199
, "Citroën": 5980
, "Mazda": 5810
, "Volvo": 5546
, "Mitsubishi": 5120
, "Smart": 4430
, "Mini": 3780
, "Porsche": 3101
, "Nissan": 3027
, "Suzuki": 2980
, "Land Rover": 1536
, "Jeep": 1449
, "Honda": 1257
, "Jaguar": 853
, "Lexus": 491
, "Tesla": 433
, "Subaru": 428
, "Alfa Romeo": 283
, "DS Automobiles": 267
, "SsangYong": 260
, "Chevrolet": 185
, "Maserati": 63
, "Cadillac": 31
, "Infiniti": 22
, "other": 1457
});

db.insert(db.countries.DE, "2019-05", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_05_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Renault|Zoé": 875
, "BMW|i3 BEV": 861
, "Smart|Fortwo ED": 495
, "Audi|e-tron": 322
, "Tesla|Model 3": 317
, "Volkswagen|e-Golf": 310
, "Smart|Forfour ED": 236
, "Hyundai|Kona Electric": 226
, "Kia|Soul EV": 158
, "Hyundai|Ioniq Electric": 152
, "Nissan|Leaf": 96
, "Mercedes-Benz|EQC": 93
, "Jaguar|I-Pace": 86
, "Tesla|Model S": 68
, "Nissan|e-NV200": 66
, "Volkswagen|e-up!": 55
, "Tesla|Model X": 48
, "Porsche|other": 38
, "Volkswagen|other": 32
, "Citroën|C-Zero": 20
, "Volkswagen|e-Crafter": 16
, "Kia|Niro EV": 11
, "Mercedes-Benz|eVito": 8
, "Opel|Ampera-e": 7
, "Mini|Cooper SE Electric": 5
, "Peugeot|iOn": 4
, "Mercedes-Benz|EQV": 1
});

db.insert(db.countries.DE, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_06_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 62347
, "BMW": 25602
, "Ford": 25060
, "Audi": 24100
, "Mercedes-Benz": 24069
, "Opel": 20461
, "Škoda": 20034
, "Renault": 14645
, "Seat": 14146
, "Hyundai": 11103
, "Fiat": 9009
, "Toyota": 7651
, "Dacia": 7100
, "Kia": 6691
, "Peugeot": 6408
, "Mazda": 6074
, "Citroën": 5445
, "Volvo": 4693
, "Mini": 4253
, "Mitsubishi": 4187
, "Suzuki": 3625
, "Smart": 3526
, "Nissan": 3340
, "Porsche": 2420
, "Tesla": 1605
, "Jeep": 1430
, "Honda": 1035
, "Land Rover": 1005
, "Jaguar": 732
, "Lexus": 427
, "Alfa Romeo": 372
, "Subaru": 343
, "DS Automobiles": 295
, "SsangYong": 266
, "Chevrolet": 191
, "Maserati": 81
, "Cadillac": 39
, "Infiniti": 23
, "other": 1398
});

db.insert(db.countries.DE, "2019-06", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_06_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Tesla|Model 3": 1336
, "Renault|Zoé": 1020
, "BMW|i3 BEV": 702
, "Volkswagen|e-Golf": 635
, "Smart|Fortwo ED": 309
, "Hyundai|Kona Electric": 275
, "Audi|e-tron": 246
, "Smart|Forfour ED": 212
, "Tesla|Model S": 171
, "Nissan|Leaf": 158
, "Hyundai|Ioniq Electric": 102
, "Tesla|Model X": 98
, "Kia|Soul EV": 76
, "Porsche|other": 64
, "Jaguar|I-Pace": 56
, "Volkswagen|other": 48
, "Mercedes-Benz|EQC": 47
, "Volkswagen|e-up!": 25
, "Citroën|C-Zero": 20
, "Nissan|e-NV200": 18
, "Peugeot|iOn": 16
, "Volkswagen|e-Crafter": 14
, "Kia|Niro EV": 10
, "Opel|Ampera-e": 9
, "Mercedes-Benz|eVito": 3
, "Mercedes-Benz|EQV": 2
, "Mini|Cooper SE Electric": 1
});

db.insert(db.countries.DE, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_07_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 61783
, "Mercedes-Benz": 31072
, "Audi": 28862
, "Ford": 26404
, "BMW": 24091
, "Opel": 21443
, "Škoda": 20397
, "Seat": 15882
, "Hyundai": 11317
, "Renault": 9887
, "Dacia": 8189
, "Fiat": 7710
, "Toyota": 7419
, "Kia": 6482
, "Peugeot": 6243
, "Citroën": 5713
, "Mazda": 5154
, "Volvo": 4841
, "Mini": 4343
, "Smart": 3735
, "Mitsubishi": 3709
, "Porsche": 3070
, "Suzuki": 2883
, "Nissan": 2870
, "Honda": 1417
, "Land Rover": 1411
, "Jeep": 1304
, "Jaguar": 769
, "Tesla": 607
, "Subaru": 457
, "Alfa Romeo": 354
, "DS Automobiles": 252
, "Lexus": 250
, "Chevrolet": 247
, "SsangYong": 212
, "Maserati": 109
, "Cadillac": 42
, "Infiniti": 17
, "other": 1841
});

db.insert(db.countries.DE, "2019-07", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_07_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen|e-Golf": 1007
, "BMW|i3 BEV": 961
, "Renault|Zoé": 910
, "Audi|e-tron": 530
, "Tesla|Model 3": 454
, "Hyundai|Kona Electric": 380
, "Smart|Fortwo ED": 261
, "Nissan|Leaf": 249
, "Smart|Forfour ED": 211
, "Hyundai|Ioniq Electric": 180
, "Porsche|other": 122
, "Kia|Soul EV": 90
, "Jaguar|I-Pace": 89
, "Volkswagen|e-Crafter": 79
, "Tesla|Model X": 78
, "Tesla|Model S": 75
, "Mercedes-Benz|EQC": 74
, "Nissan|e-NV200": 27
, "Peugeot|iOn": 25
, "Kia|Niro EV": 22
, "Volkswagen|e-up!": 12
, "Opel|Ampera-e": 12
, "Citroën|C-Zero": 10
, "Mercedes-Benz|eVito": 7
, "Mini|Cooper SE Electric": 6
, "Mercedes-Benz|EQV": 2
, "other": 90
});

db.insert(db.countries.DE, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_08_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 52754
, "Mercedes-Benz": 28990
, "Audi": 25227
, "Ford": 22713
, "Škoda": 19598
, "BMW": 18708
, "Seat": 18228
, "Opel": 17871
, "Renault": 13098
, "Hyundai": 12977
, "Dacia": 11888
, "Fiat": 7546
, "Toyota": 6583
, "Peugeot": 6333
, "Kia": 6155
, "Citroën": 5763
, "Mazda": 4801
, "Smart": 4778
, "Mitsubishi": 3985
, "Mini": 3940
, "Porsche": 3392
, "Volvo": 2995
, "Suzuki": 2847
, "Nissan": 2601
, "Land Rover": 1679
, "Jeep": 1425
, "Honda": 1045
, "Jaguar": 962
, "Tesla": 514
, "Subaru": 462
, "Alfa Romeo": 343
, "Chevrolet": 300
, "SsangYong": 300
, "Lexus": 268
, "DS Automobiles": 218
, "Maserati": 174
, "Cadillac": 79
, "Infiniti": 40
, "other": 2168
});

db.insert(db.countries.DE, "2019-08", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_08_xlsx.xlsx?__blob=publicationFile&v=6",
{ "BMW|i3 BEV": 987
, "Renault|Zoé": 777
, "Hyundai|Kona Electric": 441
, "Volkswagen|e-Golf": 380
, "Audi|e-tron": 366
, "Tesla|Model 3": 356
, "Smart|Fortwo ED": 304
, "Nissan|Leaf": 228
, "Kia|Soul EV": 196
, "Smart|Forfour ED": 157
, "Hyundai|Ioniq Electric": 152
, "Porsche|other": 105
, "Tesla|Model S": 98
, "Jaguar|I-Pace": 82
, "Mercedes-Benz|EQC": 80
, "Tesla|Model X": 60
, "Nissan|e-NV200": 24
, "Peugeot|iOn": 14
, "Opel|Ampera-e": 12
, "Citroën|C-Zero": 12
, "Kia|Niro EV": 8
, "Mercedes-Benz|eVito": 7
, "Mini|Cooper SE Electric": 6
, "Mercedes-Benz|EQV": 6
, "Volkswagen|e-up!": 5
, "other": 138
});

db.insert(db.countries.DE, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_09_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 39750
, "Mercedes-Benz": 26853
, "BMW": 19881
, "Ford": 18853
, "Opel": 18488
, "Škoda": 14004
, "Hyundai": 11676
, "Audi": 11412
, "Renault": 7648
, "Fiat": 7130
, "Toyota": 6856
, "Seat": 6848
, "Mazda": 6350
, "Kia": 5552
, "Mini": 4565
, "Mitsubishi": 4386
, "Volvo": 3998
, "Peugeot": 3855
, "Citroën": 3679
, "Nissan": 3154
, "Suzuki": 2904
, "Smart": 2826
, "Dacia": 2744
, "Porsche": 2512
, "Tesla": 1678
, "Jeep": 1610
, "Honda": 1295
, "Land Rover": 1053
, "Jaguar": 501
, "Subaru": 389
, "Lexus": 332
, "Alfa Romeo": 262
, "SsangYong": 200
, "DS Automobiles": 176
, "Maserati": 35
, "Infiniti": 12
, "Cadillac": 3
, "other": 1152
});

db.insert(db.countries.DE, "2019-09", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_09_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Tesla|Model 3": 1516
, "BMW|i3 BEV": 863
, "Renault|Zoé": 634
, "Smart|Fortwo ED": 479
, "Volkswagen|e-Golf": 419
, "Audi|e-tron": 319
, "Nissan|Leaf": 308
, "Hyundai|Kona Electric": 221
, "Smart|Forfour ED": 143
, "Kia|Soul EV": 133
, "Hyundai|Ioniq Electric": 112
, "Jaguar|I-Pace": 92
, "Tesla|Model X": 84
, "Tesla|Model S": 78
, "Porsche|other": 78
, "Mercedes-Benz|EQC": 73
, "Nissan|e-NV200": 53
, "Volkswagen|e-Crafter": 28
, "Kia|Niro EV": 21
, "Peugeot|iOn": 19
, "Mini|Cooper SE Electric": 14
, "Volkswagen|e-up!": 8
, "Opel|Ampera-e": 8
, "Mercedes-Benz|eVito": 8
, "Citroën|C-Zero": 7
, "other": 162
});

db.insert(db.countries.DE, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_10_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen": 56877
, "Mercedes-Benz": 33606
, "BMW": 24319
, "Ford": 22365
, "Audi": 16990
, "Škoda": 15928
, "Opel": 13753
, "Hyundai": 10378
, "Renault": 10118
, "Seat": 9800
, "Toyota": 7237
, "Mazda": 6186
, "Peugeot": 5752
, "Kia": 5723
, "Fiat": 5554
, "Mini": 4707
, "Mitsubishi": 4547
, "Volvo": 4498
, "Citroën": 3863
, "Smart": 3749
, "Porsche": 3346
, "Dacia": 2889
, "Nissan": 2692
, "Suzuki": 2360
, "Land Rover": 1459
, "Jeep": 1158
, "Honda": 1117
, "Jaguar": 567
, "Alfa Romeo": 468
, "Subaru": 372
, "Tesla": 293
, "DS Automobiles": 231
, "Lexus": 224
, "SsangYong": 180
, "Maserati": 63
, "Infiniti": 14
, "other": 1210
});

db.insert(db.countries.DE, "2019-10", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_10_xlsx.xlsx?__blob=publicationFile&v=4",
{ "BMW|i3 BEV": 858
, "Smart|Fortwo ED": 746
, "Volkswagen|e-Golf": 723
, "Renault|Zoé": 458
, "Smart|Forfour ED": 320
, "Nissan|Leaf": 275
, "Hyundai|Kona Electric": 263
, "Tesla|Model 3": 221
, "Audi|e-tron": 207
, "Kia|Soul EV": 192
, "Hyundai|Ioniq Electric": 105
, "Jaguar|I-Pace": 85
, "Volkswagen|other": 81
, "Porsche|other": 66
, "Volkswagen|e-Crafter": 52
, "Mercedes-Benz|EQC": 41
, "Tesla|Model X": 38
, "Tesla|Model S": 34
, "Volkswagen|e-up!": 32
, "Nissan|e-NV200": 30
, "Mercedes-Benz|eVito": 9
, "Kia|Niro EV": 8
, "Citroën|C-Zero": 5
, "Opel|Ampera-e": 3
, "Mini|Cooper SE Electric": 3
, "Peugeot|iOn": 2
, "Opel|Vivaro-e": 1
, "other": 121
});

db.insert(db.countries.DE, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_11_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen": 62642
, "Mercedes-Benz": 32690
, "BMW": 24874
, "Ford": 23366
, "Audi": 18576
, "Škoda": 16602
, "Opel": 15665
, "Seat": 11852
, "Renault": 10663
, "Hyundai": 9666
, "Mazda": 6601
, "Toyota": 6384
, "Peugeot": 6251
, "Smart": 5939
, "Dacia": 5343
, "Fiat": 5309
, "Kia": 5207
, "Volvo": 4977
, "Mitsubishi": 3988
, "Mini": 3954
, "Citroën": 3490
, "Porsche": 2866
, "Nissan": 2692
, "Suzuki": 2089
, "Jeep": 1285
, "Land Rover": 1267
, "Honda": 919
, "Jaguar": 741
, "Subaru": 418
, "Alfa Romeo": 415
, "Lexus": 308
, "Tesla": 280
, "DS Automobiles": 233
, "SsangYong": 223
, "Maserati": 41
, "Infiniti": 13
, "Cadillac": 1
, "other": 1297
});

db.insert(db.countries.DE, "2019-11", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_11_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen|e-Golf": 925
, "Smart|Fortwo ED": 828
, "BMW|i3 BEV": 545
, "Renault|Zoé": 321
, "Audi|e-tron": 192
, "Nissan|Leaf": 190
, "Tesla|Model 3": 188
, "Hyundai|Kona Electric": 170
, "Smart|Forfour ED": 129
, "Jaguar|I-Pace": 106
, "Nissan|e-NV200": 100
, "Kia|Soul EV": 95
, "Volkswagen|other": 81
, "Mini|Cooper SE Electric": 79
, "Volkswagen|e-Crafter": 78
, "Hyundai|Ioniq Electric": 76
, "Porsche|other": 75
, "Mercedes-Benz|EQC": 57
, "Kia|Niro EV": 51
, "Tesla|Model X": 49
, "Tesla|Model S": 43
, "Mercedes-Benz|eVito": 41
, "Volkswagen|e-up!": 25
, "Opel|Ampera-e": 14
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Peugeot|iOn": 2
, "Citroën|C-Zero": 2
, "other": 186
});

db.insert(db.countries.DE, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_12_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen": 49518
, "BMW": 27544
, "Mercedes-Benz": 24796
, "Ford": 22664
, "Audi": 17590
, "Škoda": 14256
, "Hyundai": 11399
, "Opel": 11219
, "Renault": 11010
, "Dacia": 8144
, "Seat": 7858
, "Suzuki": 7751
, "Mazda": 7133
, "Fiat": 6330
, "Peugeot": 6078
, "Toyota": 5603
, "Kia": 5597
, "Volvo": 5527
, "Nissan": 5208
, "Mini": 5045
, "Smart": 4544
, "Citroën": 3782
, "Mitsubishi": 3214
, "Porsche": 2136
, "Honda": 1968
, "Jeep": 1456
, "Tesla": 1129
, "Land Rover": 1106
, "Subaru": 634
, "Jaguar": 555
, "SsangYong": 531
, "Lexus": 336
, "Alfa Romeo": 281
, "DS Automobiles": 259
, "Maserati": 54
, "Infiniti": 12
, "other": 1112
});

db.insert(db.countries.DE, "2019-12", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_12_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Tesla|Model 3": 926
, "Renault|Zoé": 780
, "Volkswagen|e-Golf": 764
, "BMW|i3 BEV": 625
, "Smart|Fortwo ED": 623
, "Mini|Cooper SE Electric": 324
, "Hyundai|Kona Electric": 274
, "Smart|Forfour ED": 207
, "Audi|e-tron": 182
, "Nissan|Leaf": 134
, "Tesla|Model S": 114
, "Kia|Soul EV": 107
, "Tesla|Model X": 89
, "Nissan|e-NV200": 66
, "Jaguar|I-Pace": 59
, "Mercedes-Benz|EQC": 46
, "Volkswagen|e-Crafter": 45
, "Volkswagen|e-up!": 42
, "Kia|Niro EV": 38
, "Hyundai|Ioniq Electric": 35
, "Porsche|Taycan": 31
, "Mercedes-Benz|eVito": 29
, "DS Automobiles|DS 3 Crossback E-Tense": 9
, "Opel|Ampera-e": 3
, "Citroën|C-Zero": 3
, "other": 193
});

db.insert(db.countries.DE, "2020-01", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_01_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen": 48744
, "Mercedes-Benz": 26034
, "Audi": 22066
, "BMW": 20454
, "Ford": 17335
, "Škoda": 14295
, "Opel": 12279
, "Seat": 10416
, "Renault": 9936
, "Hyundai": 8217
, "Toyota": 5488
, "Peugeot": 5135
, "Citroën": 4898
, "Kia": 4617
, "Fiat": 4428
, "Mitsubishi": 4228
, "Dacia": 3810
, "Mazda": 3526
, "Volvo": 3314
, "Mini": 3095
, "Nissan": 2983
, "Porsche": 2012
, "Land Rover": 1591
, "Suzuki": 1304
, "Jeep": 1028
, "Honda": 958
, "Jaguar": 887
, "Lexus": 391
, "Subaru": 372
, "Tesla": 367
, "DS Automobiles": 366
, "Alfa Romeo": 254
, "SsangYong": 131
, "Smart": 108
, "Maserati": 61
, "Infiniti": 25
, "other": 1147
});

db.insert(db.countries.DE, "2020-01", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_01_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Renault|Zoé": 1798
, "Volkswagen|e-Golf": 1120
, "Audi|e-tron": 572
, "BMW|i3 BEV": 551
, "Volkswagen|e-up!": 463
, "Škoda|Citigo-e": 437
, "Hyundai|Kona Electric": 358
, "Tesla|Model 3": 257
, "Hyundai|Ioniq Electric": 191
, "Nissan|Leaf": 182
, "Porsche|Taycan": 167
, "Kia|Soul EV": 149
, "Opel|Ampera-e": 145
, "Peugeot|e-208": 142
, "Jaguar|I-Pace": 88
, "Volkswagen|other": 84
, "Nissan|e-NV200": 76
, "Mercedes-Benz|EQC": 75
, "Tesla|Model S": 70
, "Seat|Mii Electric": 70
, "Smart|Fortwo ED": 64
, "DS Automobiles|DS 3 Crossback E-Tense": 64
, "Volkswagen|e-Crafter": 46
, "Smart|Forfour ED": 42
, "Citroën|C-Zero": 42
, "Tesla|Model X": 40
, "Kia|Niro EV": 32
, "Mercedes-Benz|eVito": 15
, "Mini|Cooper SE Electric": 12
, "Peugeot|iOn": 11
, "Mercedes-Benz|EQV": 7
, "other": 121
});

db.insert(db.countries.DE, "2020-02", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_02_xlsx.xlsx?__blob=publicationFile&v=3",
{ "Volkswagen": 44405
, "Mercedes-Benz": 23577
, "Audi": 19172
, "BMW": 17613
, "Ford": 17330
, "Škoda": 14870
, "Opel": 14031
, "Seat": 11225
, "Renault": 9420
, "Hyundai": 8534
, "Fiat": 6328
, "Toyota": 5950
, "Kia": 5617
, "Citroën": 4409
, "Peugeot": 4339
, "Volvo": 4301
, "Mitsubishi": 4247
, "Dacia": 3708
, "Mazda": 3515
, "Nissan": 3330
, "Mini": 2792
, "Suzuki": 2082
, "Porsche": 1734
, "Jeep": 1108
, "Land Rover": 868
, "Honda": 774
, "Smart": 695
, "Tesla": 685
, "Jaguar": 667
, "Subaru": 449
, "Lexus": 262
, "Alfa Romeo": 255
, "DS Automobiles": 222
, "SsangYong": 119
, "Maserati": 38
, "Infiniti": 26
, "other": 1246
});

db.insert(db.countries.DE, "2020-02", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_02_xlsx.xlsx?__blob=publicationFile&v=3",
{ "Volkswagen|e-Golf": 1475
, "Renault|Zoé": 1352
, "Volkswagen|e-up!": 679
, "Tesla|Model 3": 610
, "Audi|e-tron": 591
, "BMW|i3 BEV": 480
, "Smart|Fortwo ED": 387
, "Hyundai|Kona Electric": 361
, "Smart|Forfour ED": 307
, "Nissan|Leaf": 283
, "Kia|Soul EV": 229
, "Porsche|Taycan": 195
, "Škoda|Citigo-e": 167
, "Hyundai|Ioniq Electric": 151
, "Opel|Ampera-e": 112
, "Mercedes-Benz|EQC": 109
, "Volkswagen|other": 81
, "Seat|Mii Electric": 68
, "Kia|Niro EV": 67
, "Jaguar|I-Pace": 58
, "Mini|Cooper SE Electric": 52
, "Nissan|e-NV200": 44
, "Tesla|Model X": 41
, "Tesla|Model S": 34
, "Peugeot|iOn": 24
, "DS Automobiles|DS 3 Crossback E-Tense": 12
, "Opel|Corsa-e": 11
, "Citroën|C-Zero": 11
, "Volkswagen|e-Transporter": 10
, "Peugeot|e-208": 9
, "Mercedes-Benz|eVito": 9
, "Mercedes-Benz|EQV": 1
, "other": 134
});

db.insert(db.countries.DE, "2020-03", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_03_xlsx.xlsx?__blob=publicationFile&v=2",
{ "Volkswagen": 40643
, "Mercedes-Benz": 20132
, "BMW": 20047
, "Audi": 18904
, "Ford": 12730
, "Škoda": 12113
, "Opel": 10851
, "Seat": 9052
, "Fiat": 6801
, "Renault": 6270
, "Hyundai": 5981
, "Toyota": 5339
, "Kia": 4785
, "Mitsubishi": 4313
, "Nissan": 3825
, "Volvo": 3751
, "Mini": 3717
, "Dacia": 3339
, "Peugeot": 3157
, "Mazda": 3048
, "Citroën": 3033
, "Tesla": 2263
, "Suzuki": 1976
, "Porsche": 1941
, "Land Rover": 1244
, "Jeep": 950
, "Honda": 890
, "Jaguar": 719
, "Smart": 641
, "Subaru": 522
, "Lexus": 276
, "DS Automobiles": 217
, "Alfa Romeo": 151
, "SsangYong": 127
, "Maserati": 38
, "Infiniti": 30
, "other": 1303
});

db.insert(db.countries.DE, "2020-03", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_03_xlsx.xlsx?__blob=publicationFile&v=2",
{ "Tesla|Model 3": 2034
, "Volkswagen|e-Golf": 1524
, "Renault|Zoé": 945
, "Audi|e-tron": 721
, "Volkswagen|e-up!": 662
, "Opel|Corsa-e": 622
, "BMW|i3 BEV": 551
, "Smart|Fortwo ED": 501
, "Mini|Cooper SE Electric": 326
, "Hyundai|Kona Electric": 278
, "Škoda|Citigo-e": 261
, "Nissan|Leaf": 255
, "Porsche|Taycan": 164
, "Volkswagen|other": 140
, "Smart|Forfour ED": 137
, "Hyundai|Ioniq Electric": 134
, "Tesla|Model S": 129
, "Seat|Mii Electric": 110
, "Tesla|Model X": 100
, "Kia|Soul EV": 99
, "Opel|Ampera-e": 93
, "Mercedes-Benz|EQC": 93
, "Kia|Niro EV": 85
, "Nissan|e-NV200": 53
, "Jaguar|I-Pace": 41
, "Volkswagen|e-Crafter": 36
, "Mercedes-Benz|eVito": 6
, "Honda|e": 6
, "DS Automobiles|DS 3 Crossback E-Tense": 5
, "Peugeot|iOn": 4
, "Mercedes-Benz|EQV": 2
, "Volkswagen|e-Transporter": 1
, "Peugeot|e-208": 1
, "other": 210
});

db.insert(db.countries.DE, "2020-04", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_04_xlsx.xlsx?__blob=publicationFile&v=3",
{ "Volkswagen": 20741
, "BMW": 12410
, "Ford": 9311
, "Audi": 8969
, "Mercedes-Benz": 8508
, "Škoda": 7227
, "Opel": 5153
, "Seat": 4827
, "Renault": 4742
, "Fiat": 3788
, "Toyota": 3780
, "Hyundai": 3253
, "Kia": 3158
, "Dacia": 3057
, "Mitsubishi": 2641
, "Volvo": 2462
, "Peugeot": 2373
, "Mini": 2248
, "Citroën": 2202
, "Mazda": 1370
, "Porsche": 1326
, "Nissan": 1086
, "Land Rover": 963
, "Suzuki": 912
, "Tesla": 635
, "Jeep": 603
, "Jaguar": 602
, "Honda": 380
, "Smart": 265
, "Subaru": 260
, "Alfa Romeo": 207
, "DS Automobiles": 164
, "Lexus": 130
, "SsangYong": 72
, "Maserati": 27
, "other": 988
});

db.insert(db.countries.DE, "2020-04", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_04_xlsx.xlsx?__blob=publicationFile&v=3",
{ "Volkswagen|e-Golf": 738
, "Renault|Zoé": 627
, "Tesla|Model 3": 519
, "Volkswagen|e-up!": 319
, "BMW|i3 BEV": 290
, "Mini|Cooper SE Electric": 263
, "Hyundai|Kona Electric": 250
, "Audi|e-tron": 246
, "Smart|Fortwo ED": 203
, "Škoda|Citigo-e": 134
, "Porsche|Taycan": 123
, "Kia|Niro EV": 79
, "Tesla|Model S": 72
, "Opel|Corsa-e": 71
, "Nissan|Leaf": 71
, "Kia|Soul EV": 62
, "Smart|Forfour ED": 61
, "Seat|Mii Electric": 55
, "Hyundai|Ioniq Electric": 55
, "Opel|Ampera-e": 48
, "Tesla|Model X": 44
, "Volkswagen|e-Crafter": 42
, "Nissan|e-NV200": 34
, "Volkswagen|e-Transporter": 29
, "Jaguar|I-Pace": 24
, "Mercedes-Benz|EQC": 23
, "Peugeot|iOn": 7
, "Mercedes-Benz|eVito": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Citroën|C-Zero": 2
, "Honda|e": 1
, "other": 138
});

db.insert(db.countries.DE, "2020-05", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_05_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen": 29568
, "Mercedes-Benz": 17134
, "Audi": 13915
, "Ford": 11156
, "BMW": 10240
, "Škoda": 9768
, "Opel": 8742
, "Fiat": 8609
, "Renault": 6869
, "Hyundai": 5749
, "Seat": 5494
, "Citroën": 4230
, "Toyota": 4199
, "Mitsubishi": 4139
, "Peugeot": 3899
, "Kia": 3612
, "Dacia": 2856
, "Volvo": 2840
, "Mazda": 2734
, "Mini": 1853
, "Porsche": 1745
, "Nissan": 1570
, "Suzuki": 1273
, "Land Rover": 1050
, "Jeep": 748
, "Honda": 554
, "Jaguar": 500
, "Subaru": 485
, "Smart": 379
, "Tesla": 312
, "DS Automobiles": 200
, "Lexus": 200
, "Alfa Romeo": 178
, "SsangYong": 160
, "Maserati": 22
, "Polestar": 2
, "other": 1164
});

db.insert(db.countries.DE, "2020-05", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_05_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen|e-Golf": 1153
, "Renault|Zoé": 896
, "Audi|e-tron": 583
, "Hyundai|Kona Electric": 371
, "Volkswagen|e-up!": 330
, "Smart|Fortwo ED": 289
, "Tesla|Model 3": 244
, "BMW|i3 BEV": 227
, "Kia|Niro EV": 219
, "Porsche|Taycan": 185
, "Mini|Cooper SE Electric": 110
, "Škoda|Citigo-e": 103
, "Nissan|Leaf": 96
, "Smart|Forfour ED": 89
, "Hyundai|Ioniq Electric": 80
, "Volkswagen|other": 73
, "Seat|Mii Electric": 67
, "Opel|Ampera-e": 65
, "Kia|Soul EV": 58
, "Volkswagen|e-Caddy": 52
, "Mercedes-Benz|EQC": 44
, "Tesla|Model X": 34
, "Tesla|Model S": 34
, "Jaguar|I-Pace": 34
, "Opel|Corsa-e": 30
, "Nissan|e-NV200": 19
, "Honda|e": 11
, "Peugeot|iOn": 7
, "Mercedes-Benz|eVito": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 5
, "Citroën|C-Zero": 3
, "Volkswagen|e-Crafter": 1
, "other": 61
});

db.insert(db.countries.DE, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_06_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen": 39126
, "Mercedes-Benz": 21970
, "BMW": 18075
, "Ford": 16145
, "Audi": 15597
, "Škoda": 13595
, "Renault": 10642
, "Opel": 9764
, "Fiat": 9141
, "Seat": 8993
, "Hyundai": 6414
, "Toyota": 4973
, "Peugeot": 4815
, "Mitsubishi": 4654
, "Volvo": 4647
, "Kia": 4110
, "Citroën": 4008
, "Dacia": 3452
, "Mini": 3239
, "Mazda": 2986
, "Nissan": 2477
, "Porsche": 2407
, "Jeep": 1310
, "Suzuki": 1212
, "Honda": 1064
, "Land Rover": 921
, "Tesla": 841
, "Smart": 580
, "Jaguar": 520
, "Subaru": 352
, "Lexus": 241
, "Alfa Romeo": 184
, "DS Automobiles": 181
, "SsangYong": 151
, "Maserati": 61
, "Polestar": 5
, "other": 1419
});

db.insert(db.countries.DE, "2020-06", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_06_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Renault|Zoé": 1448
, "Volkswagen|e-Golf": 1310
, "Tesla|Model 3": 703
, "Volkswagen|e-up!": 590
, "Audi|e-tron": 520
, "BMW|i3 BEV": 427
, "Smart|Fortwo ED": 426
, "Hyundai|Kona Electric": 381
, "Škoda|Citigo-e": 255
, "Porsche|Taycan": 246
, "Kia|Soul EV": 199
, "Volkswagen|other": 185
, "Kia|Niro EV": 173
, "Smart|Forfour ED": 153
, "Mercedes-Benz|EQC": 136
, "Mini|Cooper SE Electric": 110
, "Seat|Mii Electric": 92
, "Honda|e": 75
, "Tesla|Model X": 72
, "Hyundai|Ioniq Electric": 71
, "Jaguar|I-Pace": 68
, "Tesla|Model S": 66
, "Opel|Ampera-e": 60
, "Opel|Corsa-e": 59
, "Nissan|Leaf": 49
, "Peugeot|e-208": 22
, "Peugeot|iOn": 17
, "Mercedes-Benz|eVito": 13
, "Citroën|C-Zero": 13
, "Nissan|e-NV200": 9
, "Polestar|2": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 5
, "Volkswagen|e-Crafter": 2
, "other": 159
});

db.insert(db.countries.DE, "2020-07", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_07_xlsx.xlsx?__blob=publicationFile&v=2",
{ "Volkswagen": 59714
, "Mercedes-Benz": 34393
, "BMW": 28272
, "Audi": 22865
, "Škoda": 22084
, "Ford": 20453
, "Renault": 12839
, "Seat": 12262
, "Opel": 11746
, "Hyundai": 11060
, "Fiat": 9798
, "Kia": 7970
, "Toyota": 7512
, "Mini": 5892
, "Dacia": 5560
, "Peugeot": 5523
, "Mitsubishi": 4949
, "Volvo": 4557
, "Citroën": 4516
, "Mazda": 3848
, "Nissan": 3473
, "Porsche": 3143
, "Suzuki": 2135
, "Jeep": 1854
, "Smart": 1806
, "Honda": 1290
, "Land Rover": 848
, "Subaru": 749
, "Jaguar": 470
, "SsangYong": 268
, "Lexus": 268
, "DS Automobiles": 239
, "Alfa Romeo": 235
, "Tesla": 203
, "Maserati": 60
, "Polestar": 3
, "other": 2081
});

db.insert(db.countries.DE, "2020-07", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_07_xlsx.xlsx?__blob=publicationFile&v=2",
{ "Renault|Zoé": 2851
, "Volkswagen|e-Golf": 2633
, "Hyundai|Kona Electric": 1688
, "Volkswagen|e-up!": 1344
, "Smart|Fortwo ED": 1209
, "BMW|i3 BEV": 812
, "Mini|Cooper SE Electric": 687
, "Audi|e-tron": 656
, "Škoda|Citigo-e": 650
, "Kia|Niro EV": 613
, "Smart|Forfour ED": 596
, "Kia|Soul EV": 487
, "Hyundai|Ioniq Electric": 426
, "Porsche|Taycan": 346
, "Mercedes-Benz|EQC": 295
, "Nissan|Leaf": 259
, "Seat|Mii Electric": 228
, "Tesla|Model 3": 154
, "Volkswagen|ID.3": 104
, "Peugeot|e-208": 89
, "Jaguar|I-Pace": 73
, "Opel|Corsa-e": 67
, "Opel|Ampera-e": 67
, "Peugeot|iOn": 50
, "Nissan|e-NV200": 45
, "Honda|e": 43
, "Tesla|Model X": 27
, "Tesla|Model S": 22
, "Citroën|C-Zero": 18
, "DS Automobiles|DS 3 Crossback E-Tense": 10
, "Mercedes-Benz|eVito": 5
, "Volkswagen|e-Transporter": 1
, "other": 243
});

db.insert(db.countries.DE, "2020-08", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_08_xlsx.xlsx;?__blob=publicationFile&v=4",
{ "Volkswagen": 43842
, "Mercedes-Benz": 27906
, "BMW": 21549
, "Ford": 16783
, "Audi": 16405
, "Škoda": 15686
, "Renault": 11435
, "Hyundai": 10964
, "Seat": 10907
, "Opel": 9499
, "Fiat": 7623
, "Toyota": 7170
, "Kia": 6185
, "Peugeot": 4746
, "Dacia": 4286
, "Citroën": 4158
, "Mini": 4070
, "Mitsubishi": 3485
, "Mazda": 3166
, "Nissan": 2953
, "Tesla": 2846
, "Volvo": 2672
, "Jeep": 1999
, "Suzuki": 1867
, "Porsche": 1712
, "Smart": 1379
, "Honda": 1060
, "Land Rover": 701
, "Subaru": 434
, "Jaguar": 298
, "Lexus": 263
, "Alfa Romeo": 262
, "DS Automobiles": 244
, "Polestar": 239
, "SsangYong": 183
, "Maserati": 120
, "other": 1947
});

db.insert(db.countries.DE, "2020-08", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_08_xlsx.xlsx;?__blob=publicationFile&v=4",
{ "Tesla|Model 3": 2824
, "Renault|Zoé": 2210
, "Hyundai|Kona Electric": 1397
, "Volkswagen|e-Golf": 1382
, "Smart|Fortwo ED": 885
, "Volkswagen|e-up!": 691
, "Audi|e-tron": 679
, "BMW|i3 BEV": 606
, "Opel|Corsa-e": 560
, "Kia|Niro EV": 545
, "Smart|Forfour ED": 490
, "Mini|Cooper SE Electric": 471
, "Volkswagen|ID.3": 388
, "Škoda|Citigo-e": 339
, "Nissan|Leaf": 322
, "Hyundai|Ioniq Electric": 313
, "Kia|Soul EV": 292
, "Peugeot|e-208": 265
, "Polestar|2": 239
, "Mercedes-Benz|EQC": 239
, "Porsche|Taycan": 216
, "Seat|Mii Electric": 86
, "Peugeot|e-2008": 65
, "Volkswagen|other": 52
, "Opel|Ampera-e": 37
, "Jaguar|I-Pace": 37
, "Nissan|e-NV200": 36
, "Mazda|MX-30": 32
, "Mercedes-Benz|EQV": 23
, "Peugeot|iOn": 19
, "Honda|e": 18
, "Tesla|Model S": 11
, "Citroën|C-Zero": 11
, "Tesla|Model X": 10
, "Volkswagen|e-Transporter": 8
, "DS Automobiles|DS 3 Crossback E-Tense": 7
, "Opel|Zafira-e": 6
, "Mercedes-Benz|eVito": 3
, "Volkswagen|e-Crafter": 2
, "Volkswagen|e-Caddy": 1
, "other": 259
});

db.insert(db.countries.DE, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_09_xlsx.xlsx?__blob=publicationFile&v=5",
{ "Volkswagen": 40398
, "Mercedes-Benz": 27360
, "BMW": 20267
, "Ford": 18696
, "Škoda": 18152
, "Audi": 16247
, "Opel": 13388
, "Renault": 12115
, "Hyundai": 11744
, "Seat": 11717
, "Fiat": 9037
, "Toyota": 7796
, "Kia": 6899
, "Peugeot": 5247
, "Mini": 4780
, "Mazda": 4779
, "Citroën": 4512
, "Volvo": 3773
, "Dacia": 3745
, "Nissan": 3628
, "Mitsubishi": 3518
, "Tesla": 3065
, "Suzuki": 2866
, "Porsche": 2016
, "Jeep": 1788
, "Smart": 1661
, "Honda": 1203
, "Land Rover": 1034
, "Subaru": 663
, "Jaguar": 532
, "Alfa Romeo": 418
, "Lexus": 333
, "Polestar": 149
, "SsangYong": 142
, "DS Automobiles": 103
, "Maserati": 24
, "other": 1432
});

db.insert(db.countries.DE, "2020-09", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_09_xlsx.xlsx?__blob=publicationFile&v=5",
{ "Renault|Zoé": 3603
, "Tesla|Model 3": 2776
, "Volkswagen|ID.3": 1771
, "Hyundai|Kona Electric": 1526
, "Smart|Fortwo ED": 1228
, "Volkswagen|e-Golf": 1210
, "BMW|i3 BEV": 967
, "Volkswagen|e-up!": 909
, "Audi|e-tron": 884
, "Opel|Corsa-e": 834
, "Škoda|Citigo-e": 669
, "Kia|Niro EV": 610
, "Mazda|MX-30": 548
, "Smart|Forfour ED": 432
, "Mini|Cooper SE Electric": 388
, "Mercedes-Benz|EQC": 349
, "Nissan|Leaf": 346
, "Peugeot|e-208": 270
, "Kia|Soul EV": 258
, "Seat|Mii Electric": 184
, "Hyundai|Ioniq Electric": 177
, "Porsche|Taycan": 171
, "Tesla|Model S": 148
, "Polestar|2": 147
, "Honda|e": 144
, "Tesla|Model X": 141
, "Peugeot|e-2008": 88
, "Nissan|e-NV200": 39
, "Peugeot|iOn": 20
, "Jaguar|I-Pace": 20
, "Opel|Ampera-e": 19
, "BMW|iX3": 18
, "DS Automobiles|DS 3 Crossback E-Tense": 9
, "Citroën|C-Zero": 6
, "Mercedes-Benz|EQV": 4
, "Volkswagen|e-Caddy": 3
, "Mercedes-Benz|eVito": 2
, "Volkswagen|e-Crafter": 1
, "Opel|Zafira-e": 1
, "other": 268
});

db.insert(db.countries.DE, "2020-10", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_10_xlsx.xlsx?__blob=publicationFile&v=5",
{ "Volkswagen": 47204
, "Mercedes-Benz": 32698
, "Audi": 20922
, "BMW": 20825
, "Škoda": 17151
, "Opel": 16867
, "Ford": 16572
, "Renault": 12940
, "Hyundai": 10458
, "Seat": 9944
, "Toyota": 7979
, "Fiat": 6733
, "Kia": 6352
, "Peugeot": 5054
, "Volvo": 4571
, "Dacia": 4568
, "Mini": 4347
, "Citroën": 3906
, "Mazda": 3800
, "Mitsubishi": 3432
, "Porsche": 2711
, "Nissan": 2616
, "Smart": 2441
, "Suzuki": 2272
, "Land Rover": 1245
, "Jeep": 1131
, "Honda": 1081
, "Jaguar": 412
, "Subaru": 411
, "Lexus": 397
, "Alfa Romeo": 359
, "Tesla": 252
, "DS Automobiles": 182
, "Polestar": 176
, "SsangYong": 131
, "Maserati": 38
, "Cadillac": 17
, "other": 2108
});

db.insert(db.countries.DE, "2020-10", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_10_xlsx.xlsx?__blob=publicationFile&v=5",
{ "Renault|Zoé": 5010
, "Volkswagen|ID.3": 2647
, "Hyundai|Kona Electric": 1932
, "Smart|Fortwo ED": 1846
, "Volkswagen|e-Golf": 1300
, "Audi|e-tron": 1202
, "BMW|i3 BEV": 1179
, "Opel|Corsa-e": 998
, "Volkswagen|e-up!": 990
, "Mini|Cooper SE Electric": 710
, "Smart|Forfour ED": 595
, "Škoda|Citigo-e": 493
, "Peugeot|e-208": 488
, "Mazda|MX-30": 453
, "Mercedes-Benz|EQC": 421
, "Kia|Niro EV": 421
, "Porsche|Taycan": 373
, "Seat|Mii Electric": 269
, "Nissan|Leaf": 263
, "Peugeot|e-2008": 186
, "Polestar|2": 174
, "Tesla|Model 3": 171
, "Kia|Soul EV": 142
, "Honda|e": 142
, "Hyundai|Ioniq Electric": 128
, "Volkswagen|ID.4": 72
, "Jaguar|I-Pace": 58
, "Tesla|Model X": 44
, "Mercedes-Benz|EQV": 44
, "DS Automobiles|DS 3 Crossback E-Tense": 40
, "Nissan|e-NV200": 38
, "Tesla|Model S": 37
, "BMW|iX3": 17
, "Opel|Ampera-e": 14
, "Mercedes-Benz|EQA": 13
, "Mercedes-Benz|eVito": 11
, "Renault|Twingo Z.E.": 10
, "Volkswagen|e-Caddy": 8
, "Volkswagen|e-Transporter": 7
, "Citroën|C-Zero": 7
, "Opel|Zafira-e": 4
, "Peugeot|iOn": 2
, "other": 199
});

db.insert(db.countries.DE, "2020-11", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_11_xlsx.xlsx?__blob=publicationFile&v=3",
{ "Volkswagen": 51087
, "Mercedes-Benz": 32869
, "BMW": 24532
, "Ford": 19669
, "Audi": 19149
, "Opel": 18338
, "Škoda": 17094
, "Renault": 13775
, "Hyundai": 9936
, "Seat": 9291
, "Toyota": 8498
, "Fiat": 7577
, "Mazda": 5928
, "Peugeot": 5828
, "Kia": 5600
, "Dacia": 4702
, "Volvo": 4615
, "Citroën": 4487
, "Mini": 3634
, "Smart": 3018
, "Nissan": 2975
, "Mitsubishi": 2910
, "Porsche": 2759
, "Suzuki": 2316
, "Tesla": 1680
, "Jeep": 1449
, "Land Rover": 1254
, "Honda": 1043
, "Jaguar": 483
, "Subaru": 357
, "Lexus": 332
, "Alfa Romeo": 324
, "DS Automobiles": 268
, "SsangYong": 116
, "Polestar": 114
, "Maserati": 54
, "Cadillac": 15
, "other": 2074
});

db.insert(db.countries.DE, "2020-11", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_11_xlsx.xlsx?__blob=publicationFile&v=3",
{ "Renault|Zoé": 4287
, "Hyundai|Kona Electric": 2471
, "Volkswagen|ID.3": 2439
, "Smart|Fortwo ED": 2386
, "Volkswagen|e-Golf": 1941
, "Volkswagen|e-up!": 1666
, "Tesla|Model 3": 1617
, "Opel|Corsa-e": 1465
, "BMW|i3 BEV": 1299
, "Mazda|MX-30": 1211
, "Audi|e-tron": 871
, "Smart|Forfour ED": 632
, "Mini|Cooper SE Electric": 597
, "Škoda|Citigo-e": 592
, "Peugeot|e-208": 571
, "Porsche|Taycan": 565
, "Seat|Mii Electric": 538
, "Nissan|Leaf": 508
, "Mercedes-Benz|EQC": 505
, "Peugeot|e-2008": 411
, "Kia|Niro EV": 328
, "Jaguar|I-Pace": 263
, "Honda|e": 252
, "Mercedes-Benz|EQV": 199
, "Renault|Twingo Z.E.": 174
, "Fiat|500e": 153
, "Kia|Soul EV": 125
, "Polestar|2": 112
, "Hyundai|Ioniq Electric": 86
, "Opel|Zafira-e": 81
, "Mercedes-Benz|EQA": 33
, "Tesla|Model S": 32
, "Tesla|Model X": 31
, "DS Automobiles|DS 3 Crossback E-Tense": 29
, "BMW|iX3": 26
, "Nissan|e-NV200": 25
, "Citroën|ë-Jumpy": 25
, "Volkswagen|ID.4": 22
, "Citroën|C-Zero": 14
, "Lexus|UX 300e": 12
, "Volkswagen|e-Caddy": 10
, "Opel|Ampera-e": 10
, "Mercedes-Benz|eVito": 10
, "Volkswagen|e-Transporter": 8
, "Peugeot|e-Expert": 7
, "Citroën|ë-C4": 7
, "Peugeot|iOn": 5
, "other": 314
});

db.insert(db.countries.DE, "2020-12", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_12_xlsx.xlsx?__blob=publicationFile&v=7",
{ "Volkswagen": 60140
, "Mercedes-Benz": 30604
, "BMW": 26684
, "Audi": 19723
, "Škoda": 19163
, "Ford": 18070
, "Opel": 15561
, "Renault": 14335
, "Hyundai": 12741
, "Seat": 10436
, "Fiat": 9287
, "Toyota": 8492
, "Dacia": 7621
, "Volvo": 5691
, "Mazda": 5646
, "Kia": 5391
, "Peugeot": 5285
, "Citroën": 4591
, "Mini": 4485
, "Nissan": 3849
, "Tesla": 3545
, "Smart": 3078
, "Porsche": 2813
, "Mitsubishi": 2469
, "Suzuki": 2200
, "Jeep": 1719
, "Honda": 1399
, "Land Rover": 1265
, "Jaguar": 903
, "Lexus": 437
, "Alfa Romeo": 419
, "DS Automobiles": 387
, "Subaru": 353
, "Polestar": 340
, "SsangYong": 115
, "Maserati": 90
, "Cadillac": 5
, "other": 2262
});

db.insert(db.countries.DE, "2020-12", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2020_monatlich/FZ10/fz10_2020_12_xlsx.xlsx?__blob=publicationFile&v=7",
{ "Volkswagen|ID.3": 7144
, "Renault|Zoé": 5349
, "Tesla|Model 3": 3293
, "Hyundai|Kona Electric": 2995
, "Volkswagen|ID.4": 2306
, "Volkswagen|e-up!": 2196
, "Smart|Fortwo ED": 2120
, "Volkswagen|e-Golf": 1652
, "Mazda|MX-30": 1509
, "Opel|Corsa-e": 1299
, "BMW|i3 BEV": 1240
, "Nissan|Leaf": 963
, "Smart|Forfour ED": 957
, "Renault|Twingo Z.E.": 917
, "Mercedes-Benz|EQC": 866
, "Peugeot|e-208": 774
, "Fiat|500e": 719
, "Mercedes-Benz|EQV": 648
, "Škoda|Citigo-e": 646
, "Mini|Cooper SE Electric": 639
, "Audi|e-tron": 610
, "Jaguar|I-Pace": 577
, "Porsche|Taycan": 452
, "Peugeot|e-2008": 447
, "Honda|e": 435
, "Seat|Mii Electric": 382
, "Kia|Niro EV": 371
, "Polestar|2": 338
, "Kia|Soul EV": 264
, "Mercedes-Benz|eVito": 246
, "Ford|Mustang Mach-E": 181
, "Opel|Zafira-e": 156
, "Tesla|Model X": 130
, "Tesla|Model S": 122
, "Volvo|XC40 Recharge pure electric": 109
, "Hyundai|Ioniq Electric": 103
, "Citroën|ë-Jumpy": 50
, "Mercedes-Benz|EQA": 37
, "Nissan|e-NV200": 35
, "Volkswagen|e-Transporter": 31
, "DS Automobiles|DS 3 Crossback E-Tense": 30
, "Opel|Mokka-e": 18
, "Citroën|ë-C4": 12
, "Opel|Ampera-e": 10
, "BMW|iX3": 10
, "Volkswagen|e-Caddy": 8
, "Lexus|UX 300e": 8
, "Peugeot|iOn": 4
, "Peugeot|e-Expert": 3
, "Citroën|C-Zero": 2
, "other": 258
});

db.insert(db.countries.DE, "2021-01", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_01.xlsx?__blob=publicationFile&v=3",
{ "Volkswagen": 34189
, "Mercedes-Benz": 17912
, "BMW": 16479
, "Audi": 11616
, "Škoda": 11382
, "Opel": 10220
, "Ford": 10208
, "Renault": 8207
, "Seat": 8044
, "Hyundai": 4194
, "Fiat": 3773
, "Toyota": 3626
, "Volvo": 3624
, "Peugeot": 3335
, "Kia": 3024
, "Citroën": 2254
, "Nissan": 1987
, "Porsche": 1933
, "Dacia": 1909
, "Smart": 1833
, "Mini": 1812
, "Mitsubishi": 1406
, "Mazda": 1398
, "Suzuki": 819
, "Jeep": 793
, "Land Rover": 634
, "Tesla": 453
, "Honda": 286
, "Lexus": 215
, "Jaguar": 196
, "Alfa Romeo": 176
, "Subaru": 157
, "Polestar": 136
, "DS Automobiles": 130
, "Maserati": 63
, "SsangYong": 45
, "Cadillac": 14
, "other": 1272
});

db.insert(db.countries.DE, "2021-01", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_01.xlsx?__blob=publicationFile&v=3",
{ "Volkswagen|ID.3": 1799
, "Volkswagen|e-up!": 1446
, "Smart|Fortwo ED": 1271
, "Hyundai|Kona Electric": 1170
, "Renault|Zoé": 1166
, "Volkswagen|e-Golf": 968
, "BMW|i3 BEV": 831
, "Opel|Corsa-e": 689
, "Audi|e-tron": 592
, "Škoda|Citigo-e": 572
, "Smart|Forfour ED": 562
, "Peugeot|e-208": 553
, "Mercedes-Benz|EQC": 466
, "Tesla|Model 3": 422
, "Fiat|500e": 403
, "Seat|Mii Electric": 356
, "Kia|Niro EV": 350
, "Volkswagen|ID.4": 325
, "Porsche|Taycan": 278
, "Peugeot|e-2008": 207
, "Nissan|Leaf": 193
, "Renault|Twingo Z.E.": 178
, "Kia|Soul EV": 140
, "Polestar|2": 135
, "Mini|Cooper SE Electric": 129
, "Mazda|MX-30": 126
, "Hyundai|Ioniq Electric": 104
, "Citroën|ë-C4": 103
, "Volvo|XC40 Recharge pure electric": 86
, "BMW|iX3": 67
, "Honda|e": 62
, "Jaguar|I-Pace": 50
, "Opel|Mokka-e": 36
, "Mercedes-Benz|EQV": 35
, "Citroën|ë-Jumpy": 32
, "Tesla|Model X": 21
, "Mercedes-Benz|eVito": 20
, "Volkswagen|e-Transporter": 17
, "Peugeot|e-Expert": 15
, "Mercedes-Benz|EQA": 13
, "Tesla|Model S": 10
, "Opel|Zafira-e": 10
, "Nissan|e-NV200": 10
, "DS Automobiles|DS 3 Crossback E-Tense": 9
, "Opel|Ampera-e": 5
, "other": 275
});

db.insert(db.countries.DE, "2021-02", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_02.xlsx?__blob=publicationFile&v=5",
{ "Volkswagen": 40115
, "Audi": 17054
, "Mercedes-Benz": 16901
, "BMW": 16508
, "Opel": 12443
, "Škoda": 12120
, "Ford": 10382
, "Seat": 8472
, "Renault": 7830
, "Hyundai": 6511
, "Fiat": 4993
, "Toyota": 4554
, "Peugeot": 4012
, "Kia": 3878
, "Volvo": 3593
, "Mini": 3312
, "Citroën": 3290
, "Nissan": 2356
, "Tesla": 1918
, "Mitsubishi": 1873
, "Dacia": 1805
, "Porsche": 1797
, "Smart": 1550
, "Mazda": 1421
, "Land Rover": 1071
, "Suzuki": 993
, "Jeep": 701
, "Jaguar": 367
, "Subaru": 306
, "Honda": 288
, "Alfa Romeo": 250
, "Lexus": 163
, "DS Automobiles": 148
, "SsangYong": 129
, "Polestar": 104
, "Maserati": 42
, "Cadillac": 15
, "other": 1084
});

db.insert(db.countries.DE, "2021-02", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_02.xlsx?__blob=publicationFile&v=5",
{ "Volkswagen|e-up!": 2215
, "Tesla|Model 3": 1910
, "Volkswagen|ID.3": 1892
, "Renault|Zoé": 1424
, "Hyundai|Kona Electric": 1315
, "Smart|Fortwo ED": 1245
, "BMW|i3 BEV": 849
, "Audi|e-tron": 826
, "Peugeot|e-208": 596
, "Opel|Corsa-e": 592
, "Mini|Cooper SE Electric": 585
, "Fiat|500e": 463
, "Volkswagen|e-Golf": 381
, "Kia|Niro EV": 348
, "Škoda|Citigo-e": 344
, "Smart|Forfour ED": 305
, "Peugeot|e-2008": 280
, "Porsche|Taycan": 270
, "Volkswagen|ID.4": 248
, "Seat|Mii Electric": 246
, "Nissan|Leaf": 235
, "Renault|Twingo Z.E.": 231
, "Kia|Soul EV": 212
, "Audi|e-tron GT": 212
, "Mercedes-Benz|EQC": 197
, "Hyundai|Ioniq Electric": 132
, "Polestar|2": 103
, "Mazda|MX-30": 70
, "Citroën|ë-C4": 62
, "Mercedes-Benz|EQV": 52
, "Opel|Mokka-e": 46
, "Volvo|XC40 Recharge pure electric": 45
, "Citroën|ë-Jumpy": 40
, "Jaguar|I-Pace": 39
, "BMW|iX3": 35
, "Honda|e": 34
, "Opel|Zafira-e": 19
, "Mercedes-Benz|eVito": 12
, "DS Automobiles|DS 3 Crossback E-Tense": 12
, "Nissan|e-NV200": 10
, "Mercedes-Benz|EQA": 9
, "Tesla|Model X": 7
, "Peugeot|e-Expert": 7
, "Volkswagen|e-Transporter": 6
, "Opel|Ampera-e": 4
, "Tesla|Model S": 1
, "other": 107
});

db.insert(db.countries.DE, "2021-03", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_03.xlsx?__blob=publicationFile&v=3",
{ "Volkswagen": 56550
, "Mercedes-Benz": 27520
, "BMW": 23445
, "Audi": 22235
, "Opel": 18998
, "Škoda": 16865
, "Seat": 13895
, "Ford": 13878
, "Hyundai": 10527
, "Renault": 10227
, "Fiat": 10130
, "Toyota": 7023
, "Kia": 6064
, "Mini": 5872
, "Peugeot": 5631
, "Citroën": 4765
, "Mazda": 4587
, "Volvo": 4353
, "Nissan": 4149
, "Tesla": 3703
, "Dacia": 3354
, "Porsche": 3008
, "Mitsubishi": 2889
, "Smart": 2592
, "Suzuki": 2315
, "Land Rover": 1650
, "Jeep": 1293
, "Jaguar": 647
, "Honda": 594
, "Subaru": 471
, "Alfa Romeo": 324
, "Lexus": 307
, "SsangYong": 214
, "Polestar": 208
, "DS Automobiles": 176
, "Maserati": 74
, "Cadillac": 33
, "other": 1783
});

db.insert(db.countries.DE, "2021-03", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_03.xlsx?__blob=publicationFile&v=3",
{ "Tesla|Model 3": 3699
, "Volkswagen|e-up!": 3599
, "Hyundai|Kona Electric": 3237
, "Volkswagen|ID.3": 2260
, "Smart|Fortwo ED": 1901
, "Renault|Zoé": 1692
, "Mini|Cooper SE Electric": 1674
, "BMW|i3 BEV": 1161
, "Volkswagen|ID.4": 872
, "Opel|Corsa-e": 828
, "Peugeot|e-208": 757
, "Fiat|500e": 748
, "Audi|e-tron": 708
, "Smart|Forfour ED": 691
, "Škoda|Citigo-e": 593
, "Nissan|Leaf": 529
, "Opel|Mokka-e": 526
, "Kia|Niro EV": 474
, "Mercedes-Benz|EQC": 447
, "Porsche|Taycan": 409
, "Seat|Mii Electric": 362
, "Renault|Twingo Z.E.": 356
, "Peugeot|e-2008": 328
, "Mercedes-Benz|EQA": 293
, "Mazda|MX-30": 210
, "Polestar|2": 207
, "Hyundai|Ioniq Electric": 204
, "Kia|Soul EV": 199
, "Volkswagen|e-Golf": 123
, "Audi|e-tron GT": 96
, "BMW|iX3": 85
, "Citroën|ë-C4": 78
, "Volvo|XC40 Recharge pure electric": 77
, "Mercedes-Benz|EQV": 73
, "Jaguar|I-Pace": 53
, "Honda|e": 41
, "Nissan|e-NV200": 34
, "Mercedes-Benz|eVito": 34
, "Citroën|ë-Jumpy": 30
, "DS Automobiles|DS 3 Crossback E-Tense": 25
, "Opel|Zafira-e": 22
, "Volkswagen|e-Transporter": 11
, "Peugeot|e-Expert": 11
, "Lexus|UX 300e": 9
, "Škoda|Enyaq": 6
, "Tesla|Model X": 2
, "Tesla|Model S": 2
, "Opel|Ampera-e": 2
, "other": 314
});

db.insert(db.countries.DE, "2021-04", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_04.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen": 43230
, "Mercedes-Benz": 21992
, "BMW": 20441
, "Audi": 16807
, "Opel": 14149
, "Škoda": 13617
, "Ford": 11917
, "Seat": 8979
, "Renault": 8871
, "Hyundai": 7645
, "Fiat": 7109
, "Toyota": 6076
, "Kia": 5441
, "Peugeot": 5301
, "Citroën": 4739
, "Mini": 4033
, "Volvo": 3386
, "Mazda": 3386
, "Dacia": 3322
, "Mitsubishi": 2773
, "Nissan": 2673
, "Smart": 2271
, "Porsche": 2014
, "Land Rover": 1616
, "Jeep": 1458
, "Suzuki": 1304
, "Honda": 732
, "Jaguar": 703
, "Tesla": 484
, "Subaru": 434
, "Alfa Romeo": 268
, "Lexus": 200
, "DS Automobiles": 190
, "Polestar": 154
, "SsangYong": 149
, "Maserati": 51
, "Cadillac": 20
, "other": 1715
});

db.insert(db.countries.DE, "2021-04", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_04.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen|e-up!": 2604
, "Volkswagen|ID.3": 2264
, "Smart|Fortwo ED": 1652
, "Hyundai|Kona Electric": 1574
, "Volkswagen|ID.4": 1446
, "Renault|Zoé": 1268
, "Opel|Corsa-e": 1106
, "BMW|i3 BEV": 964
, "Škoda|Enyaq": 845
, "Peugeot|e-208": 806
, "Mini|Cooper SE Electric": 785
, "Audi|e-tron": 780
, "Fiat|500e": 693
, "Smart|Forfour ED": 619
, "Kia|Niro EV": 575
, "Tesla|Model 3": 482
, "Mercedes-Benz|EQC": 477
, "Peugeot|e-2008": 419
, "Nissan|Leaf": 414
, "Škoda|Citigo-e": 361
, "Renault|Twingo Z.E.": 355
, "Porsche|Taycan": 339
, "Seat|Mii Electric": 304
, "Opel|Mokka-e": 229
, "Hyundai|Ioniq Electric": 219
, "Mercedes-Benz|EQA": 211
, "Kia|Soul EV": 210
, "Audi|e-tron GT": 193
, "Polestar|2": 154
, "Mazda|MX-30": 146
, "Audi|Q4 e-tron": 130
, "BMW|iX3": 123
, "Citroën|ë-C4": 115
, "Mercedes-Benz|EQV": 98
, "Jaguar|I-Pace": 85
, "Volvo|XC40 Recharge pure electric": 66
, "Honda|e": 58
, "Volkswagen|e-Golf": 41
, "Citroën|ë-Jumpy": 39
, "Opel|Zafira-e": 33
, "Mercedes-Benz|eVito": 25
, "Toyota|Proace Electric": 21
, "Peugeot|e-Expert": 19
, "Nissan|e-NV200": 19
, "DS Automobiles|DS 3 Crossback E-Tense": 17
, "Ford|Mustang Mach-E": 12
, "Volkswagen|e-Transporter": 2
, "Opel|Ampera-e": 2
, "Tesla|Model X": 1
, "Tesla|Model S": 1
, "Lexus|UX 300e": 1
, "other": 408
});

db.insert(db.countries.DE, "2021-05", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_05.xlsx?__blob=publicationFile&v=2",
{ "Volkswagen": 45243
, "BMW": 19668
, "Audi": 18561
, "Škoda": 15269
, "Mercedes-Benz": 14598
, "Opel": 12374
, "Seat": 11691
, "Ford": 11632
, "Fiat": 9145
, "Hyundai": 8687
, "Renault": 7119
, "Toyota": 5837
, "Kia": 5642
, "Citroën": 5273
, "Peugeot": 5246
, "Mazda": 3783
, "Volvo": 3778
, "Mini": 3611
, "Mitsubishi": 3053
, "Tesla": 2744
, "Porsche": 2686
, "Dacia": 2629
, "Smart": 2200
, "Nissan": 1973
, "Suzuki": 1941
, "Jeep": 1051
, "Land Rover": 949
, "Honda": 703
, "Subaru": 490
, "Jaguar": 383
, "Alfa Romeo": 266
, "DS Automobiles": 223
, "Lexus": 184
, "Polestar": 181
, "SsangYong": 95
, "Maserati": 57
, "Cadillac": 31
, "other": 1639
});

db.insert(db.countries.DE, "2021-05", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2021_monatlich/FZ10/fz10_2021_05.xlsx?__blob=publicationFile&v=2",
{ "Volkswagen|e-up!": 2819
, "Tesla|Model 3": 2744
, "Volkswagen|ID.3": 2252
, "Smart|Fortwo ED": 1671
, "Škoda|Enyaq": 1646
, "Renault|Zoé": 1521
, "Volkswagen|ID.4": 1277
, "Opel|Corsa-e": 1156
, "BMW|i3 BEV": 979
, "Fiat|500e": 941
, "Hyundai|Kona Electric": 897
, "Audi|e-tron": 657
, "Mini|Cooper SE Electric": 639
, "Renault|Twingo Z.E.": 585
, "Kia|Niro EV": 568
, "Peugeot|e-208": 550
, "Smart|Forfour ED": 529
, "Opel|Mokka-e": 517
, "Seat|Mii Electric": 445
, "Nissan|Leaf": 396
, "Porsche|Taycan": 387
, "Škoda|Citigo-e": 288
, "Peugeot|e-2008": 277
, "BMW|iX3": 261
, "Mazda|MX-30": 252
, "Mercedes-Benz|EQA": 231
, "Mercedes-Benz|EQC": 221
, "Audi|e-tron GT": 217
, "Hyundai|Ioniq Electric": 190
, "Ford|Mustang Mach-E": 190
, "Polestar|2": 179
, "Kia|Soul EV": 179
, "Hyundai|Ioniq 5": 175
, "Audi|Q4 e-tron": 135
, "Mercedes-Benz|EQV": 118
, "Volvo|XC40 Recharge pure electric": 99
, "Citroën|ë-C4": 76
, "Citroën|ë-Jumpy": 69
, "Honda|e": 59
, "Jaguar|I-Pace": 57
, "Opel|Zafira-e": 21
, "Mercedes-Benz|eVito": 20
, "Nissan|e-NV200": 18
, "Volkswagen|e-Transporter": 15
, "Volkswagen|e-Golf": 15
, "DS Automobiles|DS 3 Crossback E-Tense": 10
, "Toyota|Proace Electric": 9
, "Peugeot|e-Expert": 9
, "Lexus|UX 300e": 4
, "other": 214
});
