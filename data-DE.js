// // Data sets for car sales in Germany

"use strict";

db.addCountry("DE", "Germany");

db.insert(db.countries.DE, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_03_2018_fahrzeugzulassungen_01_2018_pdf.pdf?__blob=publicationFile&v=9",
{ "Alfa Romeo": 452
, "Audi": 21032
, "BMW": 20759
, "Citroën": 4346
, "Dacia": 5795
, "DS Automobiles": 237
, "Fiat": 4580
, "Ford": 18387
, "Honda": 1651
, "Hyundai": 8314
, "Jaguar": 733
, "Jeep": 1206
, "Kia": 5189
, "Land Rover": 2087
, "Lexus": 199
, "Mazda": 5750
, "Mercedes-Benz": 26419
, "Mini": 3624
, "Mitsubishi": 3374
, "Nissan": 4788
, "Opel": 17364
, "Peugeot": 5805
, "Porsche": 2854
, "Renault": 9708
, "Seat": 7741
, "Škoda": 14904
, "Smart": 3048
, "SsangYong": 213
, "Subaru": 551
, "Suzuki": 2502
, "Tesla": 62
, "Toyota": 6937
, "Volvo": 2711
, "Volkswagen": 54348
, "other": 1758
});

db.insert(db.countries.DE, "2018-01", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/Januar/",
{ "Smart|Fortwo electric drive": 729
, "Kia|Soul EV": 450
, "Volkswagen|e-Golf": 450
, "Renault|ZOE": 299
, "BMW|i3 BEV": 210
, "Hyundai|Ioniq Electric": 189
, "Smart|Forfour electric drive": 173
, "Volkswagen|e-up!": 73
, "Opel|Ampera-e": 67
, "Tesla|Model S": 45
, "Tesla|Model X": 17
, "Nissan|e-NV200": 15
, "Nissan|Leaf": 11
, "Mercedes-Benz|B-Klasse Electric Drive": 3
});

db.insert(db.countries.DE, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_05_2018_fahrzeugzulassungen_02_2018_pdf.pdf?__blob=publicationFile&v=8",
{ "Alfa Romeo": 328
, "Audi": 23510
, "BMW": 17664
, "Citroën": 4579
, "Dacia": 5000
, "DS Automobiles": 423
, "Fiat": 6025
, "Ford": 19258
, "Honda": 2084
, "Hyundai": 7893
, "Jaguar": 460
, "Jeep": 1009
, "Kia": 4795
, "Land Rover": 1599
, "Lexus": 155
, "Mazda": 5289
, "Mercedes-Benz": 21910
, "Mini": 2950
, "Mitsubishi": 3572
, "Nissan": 5022
, "Opel": 19218
, "Peugeot": 6077
, "Porsche": 2504
, "Renault": 9842
, "Seat": 7666
, "Škoda": 16555
, "Smart": 2964
, "SsangYong": 230
, "Subaru": 474
, "Suzuki": 3406
, "Tesla": 175
, "Toyota": 6651
, "Volvo": 2687
, "Volkswagen": 47822
, "other": 1953
});

db.insert(db.countries.DE, "2018-02", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/Februar/",
{ "Smart|Fortwo electric drive": 510
, "Renault|ZOE": 475
, "Volkswagen|e-Golf": 465
, "Smart|Forfour electric drive": 253
, "BMW|i3 BEV": 199
, "Tesla|Model S": 124
, "Opel|Ampera-e": 111
, "Hyundai|Ioniq Electric": 109
, "Kia|Soul EV": 101
, "Volkswagen|e-up!": 73
, "Tesla|Model X": 51
, "Mercedes-Benz|B-Klasse Electric Drive": 25
, "Citroën|C-Zero": 7
, "Nissan|e-NV200": 6
, "Ford|Focus Electric": 5
});

db.insert(db.countries.DE, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_08_2018_fahrzeugzulassungen_03_2018_pdf.pdf?__blob=publicationFile&v=4",
{ "Alfa Romeo": 702
, "Audi": 25673
, "BMW": 26278
, "Citroën": 5894
, "Dacia": 6269
, "DS Automobiles": 451
, "Fiat": 10129
, "Ford": 26890
, "Honda": 3083
, "Hyundai": 11688
, "Jaguar": 1339
, "Jeep": 1625
, "Kia": 5877
, "Land Rover": 2702
, "Lexus": 296
, "Mazda": 7350
, "Mercedes-Benz": 29583
, "Mini": 4657
, "Mitsubishi": 6405
, "Nissan": 7786
, "Opel": 21147
, "Peugeot": 7092
, "Porsche": 3008
, "Renault": 12804
, "Seat": 11482
, "Škoda": 19567
, "Smart": 3652
, "SsangYong": 231
, "Subaru": 664
, "Suzuki": 3971
, "Tesla": 428
, "Toyota": 8379
, "Volvo": 3519
, "Volkswagen": 64496
, "other": 2316
});

db.insert(db.countries.DE, "2018-03", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/Maerz/",
{ "Volkswagen|e-Golf": 534
, "Renault|ZOE": 523
, "Smart|Forfour electric drive": 457
, "Smart|Fortwo electric drive": 454
, "Kia|Soul EV": 396
, "Nissan|Leaf": 346
, "BMW|i3 BEV": 322
, "Tesla|Model S": 304
, "Volkswagen|e-up!": 131
, "Tesla|Model X": 124
, "Hyundai|Ioniq Electric": 61
, "Opel|Ampera-e": 57
, "Ford|Focus Electric": 10
, "Mercedes-Benz|B-Klasse Electric Drive": 10
, "Peugeot|iOn": 9
, "Citroën|C-Zero": 3
, "Nissan|e-NV200": 1
});

db.insert(db.countries.DE, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_10_2018_fahrzeugzulassungen_04_2018_korr_pdf.pdf?__blob=publicationFile&v=3",
{ "Alfa Romeo": 451
, "Audi": 26392
, "BMW": 21079
, "Citroën": 4851
, "Dacia": 6657
, "DS Automobiles": 304
, "Fiat": 7967
, "Ford": 24571
, "Honda": 1977
, "Hyundai": 10020
, "Jaguar": 766
, "Jeep": 1316
, "Kia": 6477
, "Land Rover": 1412
, "Lexus": 219
, "Mazda": 5090
, "Mercedes-Benz": 29112
, "Mini": 4287
, "Mitsubishi": 3449
, "Nissan": 3744
, "Opel": 19970
, "Peugeot": 6164
, "Porsche": 3074
, "Renault": 10944
, "Seat": 11140
, "Škoda": 17075
, "Smart": 3611
, "SsangYong": 206
, "Subaru": 669
, "Suzuki": 2910
, "Tesla": 106
, "Toyota": 7903
, "Volvo": 3450
, "Volkswagen": 64769
, "other": 1923
});

db.insert(db.countries.DE, "2018-04", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/April/",
{ "Kia|Soul EV": 721
, "Volkswagen|e-Golf": 456
, "Renault|ZOE": 422
, "BMW|i3 BEV": 395
, "Nissan|Leaf": 279
, "Smart|Fortwo electric drive": 254
, "Smart|Forfour electric drive": 175
, "Hyundai|Ioniq Electric": 96
, "Volkswagen|e-up!": 95
, "Tesla|Model S": 71
, "Tesla|Model X": 35
, "Jaguar|I-Pace": 31
, "Opel|Ampera-e": 26
, "Nissan|e-NV200": 16
, "Citroën|C-Zero": 12
, "Peugeot|iOn": 7
, "Ford|Focus Electric": 2
});

db.insert(db.countries.DE, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_13_2018_fahrzeugzulassungen_05_2018_pdf.pdf?__blob=publicationFile&v=5",
{ "Alfa Romeo": 621
, "Audi": 26971
, "BMW": 19027
, "Citroën": 4596
, "Dacia": 7515
, "DS Automobiles": 395
, "Fiat": 9148
, "Ford": 22050
, "Honda": 1888
, "Hyundai": 9129
, "Jaguar": 622
, "Jeep": 1479
, "Kia": 5765
, "Land Rover": 1063
, "Lexus": 249
, "Mazda": 4582
, "Mercedes-Benz": 27214
, "Mini": 4576
, "Mitsubishi": 3866
, "Nissan": 3606
, "Opel": 18761
, "Peugeot": 5343
, "Porsche": 2984
, "Renault": 11683
, "Seat": 10478
, "Škoda": 18075
, "Smart": 3251
, "SsangYong": 227
, "Subaru": 661
, "Suzuki": 3003
, "Tesla": 200
, "Toyota": 7228
, "Volvo": 3129
, "Volkswagen": 63835
, "other": 1837
});

db.insert(db.countries.DE, "2018-05", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/Mai/",
{ "Renault|ZOE": 507
, "Volkswagen|e-Golf": 366
, "Kia|Soul EV": 231
, "BMW|i3 BEV": 226
, "Smart|Forfour electric drive": 201
, "Nissan|Leaf": 129
, "Smart|Fortwo electric drive": 122
, "Tesla|Model S": 112
, "Hyundai|Ioniq Electric": 98
, "Tesla|Model X": 88
, "Volkswagen|e-up!": 76
, "Mercedes-Benz|B-Klasse Electric Drive": 34
, "Opel|Ampera-e": 23
, "Nissan|e-NV200": 15
, "Citroën|C-Zero": 12
, "Peugeot|iOn": 11
, "Kia|Niro EV": 3
, "Jaguar|I-Pace": 2
});

db.insert(db.countries.DE, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_15_2018_fahrzeugzulassungen_06_2018_pdf.pdf?__blob=publicationFile&v=6",
{ "Alfa Romeo": 742
, "Audi": 27775
, "BMW": 25325
, "Citroën": 4553
, "Dacia": 7957
, "DS Automobiles": 398
, "Fiat": 8644
, "Ford": 24525
, "Honda": 1545
, "Hyundai": 11938
, "Jaguar": 1141
, "Jeep": 1671
, "Kia": 5667
, "Land Rover": 1731
, "Lexus": 298
, "Mazda": 5911
, "Mercedes-Benz": 28376
, "Mini": 5371
, "Mitsubishi": 4627
, "Nissan": 5276
, "Opel": 22066
, "Peugeot": 6282
, "Porsche": 3568
, "Renault": 13710
, "Seat": 12954
, "Škoda": 20626
, "Smart": 3974
, "SsangYong": 241
, "Subaru": 695
, "Suzuki": 3070
, "Tesla": 280
, "Toyota": 7603
, "Volvo": 4452
, "Volkswagen": 66389
, "other": 1925
});

db.insert(db.countries.DE, "2018-06", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/Juni/",
{ "Renault|ZOE": 465
, "BMW|i3 BEV": 399
, "Smart|Forfour electric drive": 310
, "Volkswagen|e-Golf": 290
, "Smart|Fortwo electric drive": 264
, "Tesla|Model S": 200
, "Nissan|Leaf": 127
, "Hyundai|Ioniq Electric": 126
, "Kia|Soul EV": 125
, "Tesla|Model X": 80
, "Peugeot|iOn": 70
, "Volkswagen|e-up!": 62
, "Nissan|e-NV200": 29
, "Ford|Focus Electric": 17
, "Jaguar|I-Pace": 10
, "Mercedes-Benz|B-Klasse Electric Drive": 8
, "Citroën|C-Zero": 7
, "Opel|Ampera-e": 7
, "Kia|Niro EV": 2
});

db.insert(db.countries.DE, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_17_2018_fahrzeugzulassungen_07_2018_pdf.pdf?__blob=publicationFile&v=7",
{ "Alfa Romeo": 485
, "Audi": 33562
, "BMW": 18250
, "Citroën": 6425
, "Dacia": 7645
, "DS Automobiles": 377
, "Fiat": 7288
, "Ford": 20829
, "Honda": 1236
, "Hyundai": 9170
, "Jaguar": 672
, "Jeep": 1404
, "Kia": 6375
, "Land Rover": 982
, "Lexus": 180
, "Mazda": 4648
, "Mercedes-Benz": 25377
, "Mini": 3676
, "Mitsubishi": 4059
, "Nissan": 3663
, "Opel": 17404
, "Peugeot": 5662
, "Porsche": 3930
, "Renault": 13601
, "Seat": 14016
, "Škoda": 18021
, "Smart": 4562
, "SsangYong": 288
, "Subaru": 715
, "Suzuki": 2879
, "Tesla": 95
, "Toyota": 6993
, "Volvo": 4548
, "Volkswagen": 66367
, "other": 2464
});

db.insert(db.countries.DE, "2018-07", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/Juli/",
{ "Kia|Soul EV": 423
, "Smart|Fortwo electric drive": 387
, "Renault|ZOE": 320
, "BMW|i3 BEV": 314
, "Volkswagen|e-Golf": 311
, "Nissan|Leaf": 159
, "Smart|Forfour electric drive": 116
, "Hyundai|Ioniq Electric": 105
, "Jaguar|I-Pace": 70
, "Tesla|Model S": 51
, "Volkswagen|e-up!": 46
, "Tesla|Model X": 44
, "Citroën|C-Zero": 24
, "Peugeot|iOn": 18
, "Opel|Ampera-e": 15
, "Nissan|e-NV200": 3
});

db.insert(db.countries.DE, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_19_2018_fahrzeugzulassungen_08_2018_pdf.pdf?__blob=publicationFile&v=4",
{ "Alfa Romeo": 625
, "Audi": 28198
, "BMW": 19289
, "Citroën": 5137
, "Dacia": 9838
, "DS Automobiles": 288
, "Fiat": 7034
, "Ford": 17810
, "Honda": 1033
, "Hyundai": 10775
, "Jaguar": 1201
, "Jeep": 1882
, "Kia": 5995
, "Land Rover": 1773
, "Lexus": 203
, "Mazda": 5700
, "Mercedes-Benz": 23764
, "Mini": 3525
, "Mitsubishi": 5704
, "Nissan": 4525
, "Opel": 17609
, "Peugeot": 5372
, "Porsche": 3161
, "Renault": 17865
, "Seat": 17220
, "Škoda": 17218
, "Smart": 3150
, "SsangYong": 257
, "Subaru": 797
, "Suzuki": 3286
, "Tesla": 82
, "Toyota": 6836
, "Volvo": 2779
, "Volkswagen": 63623
, "other": 2851
});

db.insert(db.countries.DE, "2018-08", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/August/",
{ "Renault|ZOE": 421
, "Kia|Soul EV": 339
, "Smart|Fortwo electric drive": 334
, "BMW|i3 BEV": 282
, "Volkswagen|e-Golf": 268
, "Nissan|Leaf": 177
, "Smart|Forfour electric drive": 169
, "Hyundai|Ioniq Electric": 138
, "Volkswagen|e-up!": 105
, "Tesla|Model S": 47
, "Tesla|Model X": 35
, "Opel|Ampera-e": 25
, "Citroën|C-Zero": 6
, "Nissan|e-NV200": 5
, "Peugeot|iOn": 3
, "Jaguar|I-Pace": 2
, "Citroën|Berlingo Electric": 1
});

db.insert(db.countries.DE, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_21_2018_fahrzeugzulassungen_09_2018_pdf.pdf?__blob=publicationFile&v=8",
{ "Alfa Romeo": 219
, "Audi": 4596
, "BMW": 24524
, "Citroën": 4083
, "Dacia": 2083
, "DS Automobiles": 278
, "Fiat": 5622
, "Ford": 15006
, "Honda": 594
, "Hyundai": 8584
, "Jaguar": 943
, "Jeep": 1515
, "Kia": 4896
, "Land Rover": 973
, "Lexus": 258
, "Mazda": 7010
, "Mercedes-Benz": 22379
, "Mini": 3972
, "Mitsubishi": 4396
, "Nissan": 4109
, "Opel": 20337
, "Peugeot": 5276
, "Porsche": 473
, "Renault": 5078
, "Seat": 3836
, "Škoda": 10981
, "Smart": 2273
, "SsangYong": 113
, "Subaru": 620
, "Suzuki": 3104
, "Tesla": 185
, "Toyota": 6982
, "Volvo": 3291
, "Volkswagen": 20278
, "other": 1267
});

db.insert(db.countries.DE, "2018-09", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/September/",
{ "Volkswagen|e-Golf": 432
, "Renault|ZOE": 328
, "BMW|i3 BEV": 282
, "Nissan|Leaf": 275
, "Smart|Fortwo electric drive": 264
, "Kia|Soul EV": 120
, "Hyundai|Ioniq Electric": 110
, "Tesla|Model S": 104
, "Hyundai|Kona Electric": 91
, "Tesla|Model X": 81
, "Volkswagen|e-up!": 80
, "Smart|Forfour electric drive": 74
, "Nissan|e-NV200": 13
, "Opel|Ampera-e": 10
, "Jaguar|I-Pace": 8
, "Peugeot|iOn": 5
, "Kia|Niro EV": 3
, "Citroën|C-Zero": 3
});

db.insert(db.countries.DE, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_24_2018_fahrzeugzulassungen_10_2018_pdf.pdf?__blob=publicationFile&v=7",
{ "Alfa Romeo": 273
, "Audi": 7785
, "BMW": 23521
, "Citroën": 3908
, "Dacia": 3612
, "DS Automobiles": 255
, "Fiat": 5433
, "Ford": 22346
, "Honda": 1411
, "Hyundai": 9272
, "Jaguar": 526
, "Jeep": 1171
, "Kia": 5208
, "Land Rover": 1203
, "Lexus": 176
, "Mazda": 5971
, "Mercedes-Benz": 31737
, "Mini": 4476
, "Mitsubishi": 4883
, "Nissan": 2616
, "Opel": 19545
, "Peugeot": 5756
, "Porsche": 560
, "Renault": 6463
, "Seat": 8099
, "Škoda": 14422
, "Smart": 4539
, "SsangYong": 134
, "Subaru": 576
, "Suzuki": 3049
, "Tesla": 61
, "Toyota": 6896
, "Volvo": 4270
, "Volkswagen": 40811
, "other": 1663
});

db.insert(db.countries.DE, "2018-10", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/Oktober/",
{ "Volkswagen|e-Golf": 784
, "Renault|ZOE": 609
, "Smart|Fortwo electric drive": 402
, "BMW|i3 BEV": 306
, "Nissan|Leaf": 306
, "Smart|Forfour electric drive": 295
, "Hyundai|Ioniq Electric": 257
, "Hyundai|Kona Electric": 78
, "Volkswagen|e-up!": 66
, "Kia|Soul EV": 53
, "Tesla|Model S": 46
, "Jaguar|I-Pace": 22
, "Nissan|e-NV200": 20
, "Opel|Ampera-e": 19
, "Tesla|Model X": 15
, "Peugeot|iOn": 9
, "Citroën|C-Zero": 3
});

db.insert(db.countries.DE, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2018/pm_27_2018_fahrzeugzulassungen_11_2018_pdf.pdf?__blob=publicationFile&v=4",
{ "Alfa Romeo": 296
, "Audi": 13170
, "BMW": 24476
, "Citroën": 3566
, "Dacia": 4489
, "DS Automobiles": 171
, "Fiat": 5118
, "Ford": 22940
, "Honda": 1150
, "Hyundai": 9577
, "Jaguar": 671
, "Jeep": 1481
, "Kia": 5186
, "Land Rover": 1422
, "Lexus": 294
, "Mazda": 5211
, "Mercedes-Benz": 30416
, "Mini": 4876
, "Mitsubishi": 3767
, "Nissan": 2660
, "Opel": 18952
, "Peugeot": 4905
, "Porsche": 1108
, "Renault": 9443
, "Seat": 10347
, "Škoda": 17154
, "Smart": 3723
, "SsangYong": 168
, "Subaru": 483
, "Suzuki": 3258
, "Tesla": 121
, "Toyota": 6469
, "Volvo": 4796
, "Volkswagen": 49253
, "other": 1556
});

db.insert(db.countries.DE, "2018-11", db.dsTypes.ElectricCarsByModel, "https://www.goingelectric.de/zulassungszahlen/2018/November/",
{ "Renault|ZOE": 1047
, "Volkswagen|e-Golf": 858
, "Nissan|Leaf": 366
, "BMW|i3 BEV": 360
, "Smart|Fortwo electric drive": 296
, "Hyundai|Ioniq Electric": 227
, "Smart|Forfour electric drive": 214
, "Kia|Soul EV": 182
, "Volkswagen|e-up!": 126
, "Hyundai|Kona Electric": 95
, "Tesla|Model S": 81
, "Tesla|Model X": 40
, "Jaguar|I-Pace": 38
, "Nissan|e-NV200": 23
, "Opel|Ampera-e": 15
, "Citroën|C-Zero": 12
, "Peugeot|iOn": 3
});

db.insert(db.countries.DE, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_01_2019_fahrzeugzulassungen_12_2018_pdf.pdf?__blob=publicationFile&v=6",
{ "Alfa Romeo": 242
, "Audi": 16636
, "BMW": 24859
, "Citroën": 3285
, "Dacia": 4886
, "DS Automobiles": 155
, "Fiat": 4472
, "Ford": 17711
, "Honda": 1058
, "Hyundai": 8518
, "Jaguar": 426
, "Jeep": 1362
, "Kia": 4367
, "Land Rover": 1194
, "Lexus": 239
, "Mazda": 4875
, "Mercedes-Benz": 22876
, "Mini": 4504
, "Mitsubishi": 2701
, "Nissan": 2571
, "Opel": 15594
, "Peugeot": 4503
, "Porsche": 1471
, "Renault": 9684
, "Seat": 6745
, "Škoda": 12370
, "Smart": 2347
, "SsangYong": 128
, "Subaru": 380
, "Suzuki": 3092
, "Tesla": 105
, "Toyota": 5053
, "Volvo": 5773
, "Volkswagen": 41527
, "other": 1349
});

db.insert(db.countries.DE, "2018-12", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2018_monatlich/FZ10/fz10_2018_12_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Renault|ZOE": 944
, "Volkswagen|e-Golf": 529
, "BMW|i3 BEV": 497
, "Nissan|Leaf": 206
, "Smart|Fortwo electric drive": 188
, "Hyundai|Ioniq Electric": 179
, "Kia|Soul EV": 151
, "Smart|Forfour electric drive": 115
, "Hyundai|Kona Electric": 104
, "Volkswagen|e-up!": 86
, "Tesla|Model S": 63
, "Tesla|Model X": 42
, "Porsche|Taycan": 28
, "Mini|Cooper SE Elektro": 23
, "Kia|Niro EV": 22
, "Opel|Ampera-e": 10
, "Citroën|C-Zero": 9
, "Jaguar|I-Pace": 8
, "Peugeot|iOn": 5
, "Nissan|e-NV200": 4
});

db.insert(db.countries.DE, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_03_2019_fahrzeugzulassungen_01_2019_pdf.pdf?__blob=publicationFile&v=9",
{ "Alfa Romeo": 309
, "Audi": 21814
, "BMW": 19198
, "Citroën": 4782
, "Dacia": 6603
, "DS Automobiles": 222
, "Fiat": 4941
, "Ford": 21064
, "Honda": 1079
, "Hyundai": 9290
, "Jaguar": 543
, "Jeep": 1212
, "Kia": 5418
, "Land Rover": 1831
, "Lexus": 181
, "Mazda": 5587
, "Mercedes-Benz": 25292
, "Mini": 3744
, "Mitsubishi": 3290
, "Nissan": 2879
, "Opel": 16225
, "Peugeot": 6099
, "Porsche": 1318
, "Renault": 9932
, "Seat": 8218
, "Škoda": 14668
, "Smart": 3279
, "SsangYong": 161
, "Subaru": 807
, "Suzuki": 2965
, "Tesla": 135
, "Toyota": 6656
, "Volvo": 3786
, "Volkswagen": 50823
, "other": 1349
});

db.insert(db.countries.DE, "2019-01", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_01_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Renault|ZOE": 799
, "Volkswagen|e-Golf": 746
, "BMW|i3 BEV": 645
, "Audi|e-tron": 407
, "Kia|Soul EV": 302
, "Hyundai|Kona Electric": 291
, "Nissan|Leaf": 288
, "Smart|Fortwo electric drive": 264
, "Hyundai|Ioniq Electric": 203
, "Smart|Forfour electric drive": 145
, "Kia|Niro EV": 103
, "Tesla|Model S": 91
, "Peugeot|iOn": 70
, "Volkswagen|e-up!": 69
, "Nissan|e-NV200": 67
, "Tesla|Model X": 44
, "Jaguar|I-Pace": 16
, "Mini|Cooper SE Elektro": 16
, "Opel|Ampera-e": 14
, "Citroën|C-Zero": 5
, "Porsche|Taycan": 5
});

db.insert(db.countries.DE, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_06_2019_fahrzeugzulassungen_02_2019_pdf.pdf?__blob=publicationFile&v=4",
{ "Alfa Romeo": 272
, "Audi": 24050
, "BMW": 17825
, "Citroën": 4587
, "Dacia": 5849
, "DS Automobiles": 198
, "Fiat": 5594
, "Ford": 21264
, "Honda": 1278
, "Hyundai": 9242
, "Jaguar": 642
, "Jeep": 1162
, "Kia": 5215
, "Land Rover": 1114
, "Lexus": 153
, "Mazda": 5397
, "Mercedes-Benz": 24380
, "Mini": 3301
, "Mitsubishi": 4213
, "Nissan": 2897
, "Opel": 17677
, "Peugeot": 5581
, "Porsche": 1456
, "Renault": 9635
, "Seat": 9100
, "Škoda": 16758
, "Smart": 3705
, "SsangYong": 159
, "Subaru": 547
, "Suzuki": 3190
, "Tesla": 1092
, "Toyota": 6483
, "Volvo": 3431
, "Volkswagen": 49965
, "other": 1455
});

db.insert(db.countries.DE, "2019-02", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_02_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Tesla|Model 3": 959
, "Renault|ZOE": 782
, "BMW|i3 BEV": 628
, "Hyundai|Kona Electric": 400
, "Nissan|Leaf": 302
, "Volkswagen|e-Golf": 281
, "Smart|Forfour electric drive": 190
, "Smart|Fortwo electric drive": 179
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
, "Porsche|Taycan": 20
, "Citroën|C-Zero": 5
, "Peugeot|iOn": 3
});

db.insert(db.countries.DE, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_08_2019_fahrzeugzulassungen_03_2019_pdf.pdf?__blob=publicationFile&v=5",
{ "Alfa Romeo": 410
, "Audi": 29751
, "BMW": 25458
, "Citroën": 6150
, "Dacia": 6487
, "DS Automobiles": 290
, "Fiat": 9951
, "Ford": 25613
, "Honda": 1858
, "Hyundai": 11174
, "Jaguar": 987
, "Jeep": 1779
, "Kia": 5658
, "Land Rover": 2222
, "Lexus": 284
, "Mazda": 7092
, "Mercedes-Benz": 28054
, "Mini": 4690
, "Mitsubishi": 6761
, "Nissan": 4774
, "Opel": 22505
, "Peugeot": 7091
, "Porsche": 2723
, "Renault": 12729
, "Seat": 12451
, "Škoda": 20374
, "Smart": 4113
, "SsangYong": 172
, "Subaru": 514
, "Suzuki": 4431
, "Tesla": 2367
, "Toyota": 7188
, "Volvo": 4905
, "Volkswagen": 62627
, "other": 1890
});

db.insert(db.countries.DE, "2019-03", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_03_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Tesla|Model 3": 2224
, "Renault|ZOE": 1136
, "BMW|i3 BEV": 708
, "Audi|e-tron": 478
, "Smart|Fortwo electric drive": 371
, "Hyundai|Kona Electric": 284
, "Nissan|Leaf": 227
, "Volkswagen|e-Golf": 219
, "Smart|Forfour electric drive": 132
, "Hyundai|Ioniq Electric": 131
, "Jaguar|I-Pace": 106
, "Nissan|e-NV200": 93
, "Kia|Niro EV": 87
, "Tesla|Model S": 82
, "Tesla|Model X": 61
, "Volkswagen|e-up!": 59
, "Mini|Cooper SE Elektro": 33
, "Kia|Soul EV": 33
, "Porsche|Taycan": 30
, "Citroën|C-Zero": 10
, "Peugeot|iOn": 8
, "Opel|Ampera-e": 6
});

db.insert(db.countries.DE, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_10_2019_fahrzeugzulassungen_04_2019_pdf.pdf?__blob=publicationFile&v=4",
{ "Alfa Romeo": 377
, "Audi": 23007
, "BMW": 24748
, "Citroën": 5606
, "Dacia": 6992
, "DS Automobiles": 205
, "Fiat": 10036
, "Ford": 24342
, "Honda": 1408
, "Hyundai": 10539
, "Jaguar": 851
, "Jeep": 1293
, "Kia": 5711
, "Land Rover": 1665
, "Lexus": 333
, "Mazda": 5445
, "Mercedes-Benz": 29590
, "Mini": 3697
, "Mitsubishi": 4748
, "Nissan": 3366
, "Opel": 18935
, "Peugeot": 6419
, "Porsche": 3093
, "Renault": 11379
, "Seat": 10148
, "Škoda": 16851
, "Smart": 4514
, "SsangYong": 206
, "Subaru": 497
, "Suzuki": 2591
, "Tesla": 575
, "Toyota": 7889
, "Volvo": 4160
, "Volkswagen": 57526
, "other": 1973
});

db.insert(db.countries.DE, "2019-04", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_04_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Renault|ZOE": 939
, "BMW|i3 BEV": 734
, "Tesla|Model 3": 514
, "Volkswagen|e-Golf": 489
, "Smart|Fortwo electric drive": 428
, "Hyundai|Kona Electric": 296
, "Smart|Forfour electric drive": 280
, "Audi|e-tron": 174
, "Nissan|Leaf": 165
, "Hyundai|Ioniq Electric": 137
, "Jaguar|I-Pace": 85
, "Volkswagen|e-up!": 68
, "Kia|Soul EV": 60
, "Nissan|e-NV200": 47
, "Citroën|C-Zero": 43
, "Tesla|Model S": 40
, "Kia|Niro EV": 39
, "Porsche|Taycan": 38
, "Mercedes-Benz|EQC": 37
, "Tesla|Model X": 21
, "Peugeot|iOn": 11
, "Mini|Cooper SE Elektro": 9
, "Opel|Ampera-e": 5
});

db.insert(db.countries.DE, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_12_2019_fahrzeugzulassungen_05_2019_pdf.pdf?__blob=publicationFile&v=4",
{ "Alfa Romeo": 283
, "Audi": 25816
, "BMW": 26995
, "Citroën": 5980
, "Dacia": 7807
, "DS Automobiles": 267
, "Fiat": 9895
, "Ford": 26011
, "Honda": 1257
, "Hyundai": 10747
, "Jaguar": 853
, "Jeep": 1449
, "Kia": 6199
, "Land Rover": 1536
, "Lexus": 491
, "Mazda": 5810
, "Mercedes-Benz": 29793
, "Mini": 3780
, "Mitsubishi": 5120
, "Nissan": 3027
, "Opel": 21622
, "Peugeot": 6599
, "Porsche": 3101
, "Renault": 10394
, "Seat": 14139
, "Škoda": 18701
, "Smart": 4430
, "SsangYong": 260
, "Subaru": 428
, "Suzuki": 2980
, "Tesla": 433
, "Toyota": 8549
, "Volvo": 5546
, "Volkswagen": 60906
, "other": 1758
});

db.insert(db.countries.DE, "2019-05", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_05_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Renault|ZOE": 875
, "BMW|i3 BEV": 861
, "Smart|Fortwo electric drive": 495
, "Audi|e-tron": 322
, "Tesla|Model 3": 317
, "Volkswagen|e-Golf": 310
, "Smart|Forfour electric drive": 236
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
, "Porsche|Taycan": 38
, "Citroën|C-Zero": 20
, "Kia|Niro EV": 11
, "Opel|Ampera-e": 7
, "Mini|Cooper SE Elektro": 5
, "Peugeot|iOn": 4
});

db.insert(db.countries.DE, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_15_2019_fahrzeugzulassungen_06_2019_pdf.pdf;jsessionid=6C50FC62219856B068E06061FD22E99F.live21303?__blob=publicationFile&v=6",
{ "Alfa Romeo": 372
, "Audi":  24100
, "BMW":  25602
, "Citroën": 5445
, "Dacia": 7100
, "DS Automobiles": 295
, "Fiat": 9009
, "Ford":  25060
, "Honda": 1035
, "Hyundai":  11103
, "Jaguar": 732
, "Jeep": 1430
, "Kia": 6691
, "Land Rover": 1005
, "Lexus": 427
, "Mazda": 6074
, "Mercedes-Benz":  24069
, "Mini": 4253
, "Mitsubishi": 4187
, "Nissan": 3340
, "Opel":  20461
, "Peugeot": 6408
, "Porsche": 2420
, "Renault": 14645
, "Seat": 14146
, "Škoda": 20034
, "Smart": 3526
, "SsangYong": 266
, "Subaru": 343
, "Suzuki": 3625
, "Tesla": 1605
, "Toyota": 7651
, "Volvo": 4693
, "Volkswagen": 62347
, "other": 1732
});

db.insert(db.countries.DE, "2019-06", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_06_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Tesla|Model 3": 1336
, "Renault|ZOE": 1020
, "BMW|i3 BEV": 702
, "Volkswagen|e-Golf": 635
, "Smart|Fortwo electric drive": 309
, "Hyundai|Kona Electric": 275
, "Audi|e-tron": 246
, "Smart|Forfour electric drive": 212
, "Tesla|Model S": 171
, "Nissan|Leaf": 158
, "Hyundai|Ioniq Electric": 102
, "Tesla|Model X": 98
, "Kia|Soul EV": 76
, "Porsche|Taycan": 64
, "Jaguar|I-Pace": 56
, "Mercedes-Benz|EQC": 47
, "Volkswagen|e-up!": 25
, "Citroën|C-Zero": 20
, "Nissan|e-NV200": 18
, "Peugeot|iOn": 16
, "Kia|Niro EV": 10
, "Opel|Ampera-e": 9
, "Mini|Cooper SE Elektro": 1
});

db.insert(db.countries.DE, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_18_2019_fahrzeugzulassungen_07_2019_pdf.pdf?__blob=publicationFile&v=5",
{ "Alfa Romeo": 354
, "Audi": 28862
, "BMW": 24091
, "Citroën": 5713
, "Dacia": 8189
, "DS Automobiles": 252
, "Fiat": 7710
, "Ford": 26404
, "Honda": 1417
, "Hyundai": 11317
, "Jaguar": 769
, "Jeep": 1304
, "Kia": 6482
, "Land Rover": 1411
, "Lexus": 250
, "Mazda": 5154
, "Mercedes-Benz": 31072
, "Mini": 4343
, "Mitsubishi": 3709
, "Nissan": 2870
, "Opel": 21443
, "Peugeot": 6243
, "Porsche": 3070
, "Renault": 9887
, "Seat": 15882
, "Škoda": 20397
, "Smart": 3735
, "SsangYong": 212
, "Subaru": 457
, "Suzuki": 2883
, "Tesla": 607
, "Toyota": 7419
, "Volvo": 4841
, "Volkswagen": 61783
, "other": 2256
});

db.insert(db.countries.DE, "2019-07", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_07_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Volkswagen|e-Golf": 1007
, "BMW|i3 BEV": 961
, "Renault|ZOE": 910
, "Audi|e-tron": 530
, "Tesla|Model 3": 454
, "Hyundai|Kona Electric": 380
, "Smart|Fortwo electric drive": 261
, "Nissan|Leaf": 249
, "Smart|Forfour electric drive": 211
, "Hyundai|Ioniq Electric": 180
, "Porsche|Taycan": 122
, "Jaguar|I-Pace": 89
, "Kia|Soul EV": 84
, "Tesla|Model X": 78
, "Tesla|Model S": 75
, "Mercedes-Benz|EQC": 74
, "Nissan|e-NV200": 27
, "Peugeot|iOn": 25
, "Kia|Niro EV": 22
, "Volkswagen|ID.3": 17
, "Opel|Ampera-e": 12
, "Volkswagen|e-up!": 12
, "Citroën|C-Zero": 10
, "Mini|Cooper SE Elektro": 6
});

db.insert(db.countries.DE, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_20_2019_fahrzeugzulassungen_08_2019_pdf.pdf?__blob=publicationFile&v=8",
{ "Alfa Romeo": 343
, "Audi": 25227
, "BMW": 18708
, "Citroën": 5763
, "Dacia": 11888
, "DS Automobiles": 218
, "Fiat": 7546
, "Ford": 22713
, "Honda": 1045
, "Hyundai": 12977
, "Jaguar": 962
, "Jeep": 1425
, "Kia": 6155
, "Land Rover": 1679
, "Lexus": 268
, "Mazda": 4801
, "Mercedes-Benz": 28990
, "Mini": 3940
, "Mitsubishi": 3985
, "Nissan": 2601
, "Opel": 17871
, "Peugeot": 6333
, "Porsche": 3392
, "Renault": 13098
, "Seat": 18228
, "Škoda": 19598
, "Smart": 4778
, "SsangYong": 300
, "Subaru": 462
, "Suzuki": 2847
, "Tesla": 514
, "Toyota": 6583
, "Volvo": 2995
, "Volkswagen": 52754
, "other": 2761
});

db.insert(db.countries.DE, "2019-08", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_08_xlsx.xlsx?__blob=publicationFile&v=6",
{ "BMW|i3 BEV": 987
, "Renault|ZOE": 777
, "Hyundai|Kona Electric": 441
, "Volkswagen|e-Golf": 380
, "Audi|e-tron": 366
, "Tesla|Model 3": 356
, "Smart|Fortwo electric drive": 304
, "Nissan|Leaf": 228
, "Kia|Soul EV": 196
, "Smart|Forfour electric drive": 157
, "Hyundai|Ioniq Electric": 152
, "Porsche|Taycan": 105
, "Tesla|Model S": 98
, "Jaguar|I-Pace": 82
, "Mercedes-Benz|EQC": 80
, "Tesla|Model X": 60
, "Volkswagen|ID.3": 25
, "Nissan|e-NV200": 24
, "Peugeot|iOn": 14
, "Opel|Ampera-e": 12
, "Citroën|C-Zero": 12
, "Kia|Niro EV": 8
, "Mini|Cooper SE Elektro": 6
, "Volkswagen|e-up!": 5
});

db.insert(db.countries.DE, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_22_2019_fahrzeugzulassungen_09_2019_pdf.pdf?__blob=publicationFile&v=7",
{ "Alfa Romeo": 262
, "Audi": 11412
, "BMW": 19881
, "Citroën": 3679
, "Dacia": 2744
, "DS Automobiles": 176
, "Fiat": 7130
, "Ford": 18853
, "Honda": 1295
, "Hyundai": 11676
, "Jaguar": 501
, "Jeep": 1610
, "Kia": 5552
, "Land Rover": 1053
, "Lexus": 332
, "Mazda": 6350
, "Mercedes-Benz": 26853
, "Mini": 4565
, "Mitsubishi": 4386
, "Nissan": 3154
, "Opel": 18488
, "Peugeot": 3855
, "Porsche": 2512
, "Renault": 7648
, "Seat": 6848
, "Škoda": 14004
, "Smart": 2826
, "SsangYong": 200
, "Subaru": 389
, "Suzuki": 2904
, "Tesla": 1678
, "Toyota": 6856
, "Volvo": 3998
, "Volkswagen": 39750
, "other": 1202
});

db.insert(db.countries.DE, "2019-09", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_09_xlsx.xlsx?__blob=publicationFile&v=6",
{ "Tesla|Model 3": 1516
, "BMW|i3 BEV": 863
, "Renault|ZOE": 634
, "Smart|Fortwo electric drive": 479
, "Volkswagen|e-Golf": 419
, "Audi|e-tron": 319
, "Nissan|Leaf": 308
, "Hyundai|Kona Electric": 221
, "Smart|Forfour electric drive": 143
, "Kia|Soul EV": 133
, "Hyundai|Ioniq Electric": 112
, "Jaguar|I-Pace": 92
, "Tesla|Model X": 84
, "Porsche|Taycan": 78
, "Tesla|Model S": 78
, "Mercedes-Benz|EQC": 73
, "Nissan|e-NV200": 53
, "Volkswagen|ID.3": 43
, "Volkswagen|e-Crafter": 28
, "Kia|Niro EV": 21
, "Peugeot|iOn": 19
, "Mini|Cooper SE Elektro": 14
, "Opel|Ampera-e": 8
, "Volkswagen|e-up!": 8
, "Citroën|C-Zero": 7
, "Honda|e": 2
});

db.insert(db.countries.DE, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_24_2019_fahrzeugzulassungen_10_2019_pdf.pdf?__blob=publicationFile&v=4",
{ "Alfa Romeo": 468
, "Audi": 16990
, "BMW": 24319
, "Citroën": 3863
, "Dacia": 2889
, "DS Automobiles": 231
, "Fiat": 5554
, "Ford": 22365
, "Honda": 1117
, "Hyundai": 10378
, "Jaguar": 567
, "Jeep": 1158
, "Kia": 5723
, "Land Rover": 1459
, "Lexus": 224
, "Mazda": 6186
, "Mercedes-Benz": 33606
, "Mini": 4707
, "Mitsubishi": 4547
, "Nissan": 2692
, "Opel": 13753
, "Peugeot": 5752
, "Porsche": 3346
, "Renault": 10118
, "Seat": 9800
, "Škoda": 15928
, "Smart": 3749
, "SsangYong": 180
, "Subaru": 372
, "Suzuki": 2360
, "Tesla": 293
, "Toyota": 7237
, "Volvo": 4498
, "Volkswagen": 56877
, "other": 1287
});

db.insert(db.countries.DE, "2019-10", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_10_xlsx.xlsx?__blob=publicationFile&v=4",
{ "BMW|i3 BEV": 858
, "Smart|Fortwo electric drive": 746
, "Volkswagen|e-Golf": 723
, "Renault|ZOE": 458
, "Smart|Forfour electric drive": 320
, "Nissan|Leaf": 275
, "Hyundai|Kona Electric": 263
, "Tesla|Model 3": 221
, "Audi|e-tron": 207
, "Kia|Soul EV": 192
, "Hyundai|Ioniq Electric": 105
, "Jaguar|I-Pace": 85
, "Volkswagen|ID.3": 81
, "Porsche|Taycan": 66
, "Volkswagen|e-Crafter": 52
, "Mercedes-Benz|EQC": 41
, "Tesla|Model X": 38
, "Tesla|Model S": 34
, "Volkswagen|e-up!": 32
, "Nissan|e-NV200": 30
, "Kia|Niro EV": 8
, "Citroën|C-Zero": 5
, "Opel|Ampera-e": 3
, "Mini|Cooper SE Elektro": 3
, "Peugeot|iOn": 2
});

db.insert(db.countries.DE, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2019/pm_26_2019_fahrzeugzulassungen_11_2019_pdf.pdf?__blob=publicationFile&v=3",
{ "Alfa Romeo": 415
, "Audi": 18576
, "BMW": 24874
, "Citroën": 3490
, "Dacia": 5343
, "DS Automobiles": 233
, "Fiat": 5309
, "Ford": 23366
, "Honda": 919
, "Hyundai": 9666
, "Jaguar": 741
, "Jeep": 1285
, "Kia": 5207
, "Land Rover": 1267
, "Lexus": 308
, "Mazda": 6601
, "Mercedes-Benz": 32690
, "Mini": 3954
, "Mitsubishi": 3988
, "Nissan": 2692
, "Opel": 15665
, "Peugeot": 6251
, "Porsche": 2866
, "Renault": 10663
, "Seat": 11852
, "Škoda": 16602
, "Smart": 5939
, "SsangYong": 223
, "Subaru": 418
, "Suzuki": 2089
, "Tesla": 280
, "Toyota": 6384
, "Volvo": 4977
, "Volkswagen": 62642
, "other": 1352
});

db.insert(db.countries.DE, "2019-11", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_11_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Volkswagen|e-Golf": 925
, "Smart|Fortwo electric drive": 828
, "BMW|i3 BEV": 545
, "Renault|ZOE": 321
, "Audi|e-tron": 192
, "Nissan|Leaf": 190
, "Tesla|Model 3": 188
, "Hyundai|Kona Electric": 170
, "Smart|Forfour electric drive": 129
, "Jaguar|I-Pace": 106
, "Nissan|e-NV200": 100
, "Kia|Soul EV": 95
, "Volkswagen|ID.3": 81
, "Mini|Cooper SE Elektro": 79
, "Volkswagen|e-Crafter": 78
, "Hyundai|Ioniq Electric": 76
, "Porsche|Taycan": 75
, "Mercedes-Benz|EQC": 57
, "Kia|Niro EV": 51
, "Tesla|Model X": 49
, "Tesla|Model S": 43
, "Volkswagen|e-up!": 25
, "Opel|Ampera-e": 14
, "Citroën|C-Zero": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Peugeot|iOn": 2
, "Honda|e": 1
});

db.insert(db.countries.DE, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.kba.de/SharedDocs/Pressemitteilungen/DE/2020/pm_01_2020_fahrzeugzulassungen_12_2019_pdf.pdf?__blob=publicationFile&v=6",
{ "Alfa Romeo": 281
, "Audi": 17590
, "BMW": 27544
, "Citroën": 3782
, "Dacia": 8144
, "DS Automobiles": 259
, "Fiat": 6330
, "Ford": 22664
, "Honda": 1968
, "Hyundai": 11399
, "Jaguar": 555
, "Jeep": 1456
, "Kia": 5597
, "Land Rover": 1106
, "Lexus": 336
, "Mazda": 7133
, "Mercedes-Benz": 24796
, "Mini": 5045
, "Mitsubishi": 3214
, "Nissan": 5208
, "Opel": 11219
, "Peugeot": 6078
, "Porsche": 2136
, "Renault": 11010
, "Seat": 7858
, "Škoda": 14256
, "Smart": 4544
, "SsangYong": 531
, "Subaru": 634
, "Suzuki": 7751
, "Tesla": 1129
, "Toyota": 5603
, "Volvo": 5527
, "Volkswagen": 49518
, "other": 1178
});

db.insert(db.countries.DE, "2019-12", db.dsTypes.ElectricCarsByModel, "https://www.kba.de/SharedDocs/Publikationen/DE/Statistik/Fahrzeuge/FZ/2019_monatlich/FZ10/fz10_2019_12_xlsx.xlsx?__blob=publicationFile&v=4",
{ "Tesla|Model 3": 926
, "Renault|ZOE": 780
, "Volkswagen|e-Golf": 764
, "BMW|i3 BEV": 625
, "Smart|Fortwo electric drive": 623
, "Mini|Cooper SE Elektro": 324
, "Hyundai|Kona Electric": 274
, "Smart|Forfour electric drive": 207
, "Audi|e-tron": 182
, "Nissan|Leaf": 134
, "Tesla|Model S": 114
, "Kia|Soul EV": 107
, "Tesla|Model X": 89
, "Nissan|e-NV200": 66
, "Jaguar|I-Pace": 59
, "Mercedes-Benz|EQC": 46
, "Mercedes-Benz|eVito": 29
, "Volkswagen|e-Crafter": 45
, "Volkswagen|e-up!": 42
, "Kia|Niro EV": 38
, "Hyundai|Ioniq Electric": 35
, "Volkswagen|ID.3": 33
, "Porsche|Taycan": 31
, "Opel|Ampera-e": 3
, "Citroën|C-Zero": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 9
});


// Template
// db.insert(db.countries.DE, "", db.dsTypes.AllCarsByBrand, "",
// { "Alfa Romeo":
// , "Audi":
// , "BMW":
// , "Citroën":
// , "Dacia":
// , "DS Automobiles":
// , "Fiat":
// , "Ford":
// , "Honda":
// , "Hyundai":
// , "Jaguar":
// , "Jeep":
// , "Kia":
// , "Land Rover":
// , "Lexus":
// , "Mazda":
// , "Mercedes-Benz":
// , "Mini":
// , "Mitsubishi":
// , "Nissan":
// , "Opel":
// , "Peugeot":
// , "Porsche":
// , "Renault":
// , "Seat":
// , "Škoda":
// , "Smart":
// , "SsangYong":
// , "Subaru":
// , "Suzuki":
// , "Tesla":
// , "Toyota":
// , "Volvo":
// , "Volkswagen":
// , "other":
// });
