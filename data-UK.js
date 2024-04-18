// Data sets for car sales in the United Kingdom

"use strict";

// source: https://www.gov.uk/government/statistical-data-sets/vehicle-licensing-statistics-data-files

db.insert(db.countries.UK, "2017-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 105346
, "Vauxhall": 66794
, "Volkswagen": 60563
, "Mercedes-Benz": 54787
, "Nissan": 53914
, "BMW": 49847
, "Audi": 47989
, "Toyota": 35856
, "Land Rover": 30186
, "Kia": 29676
, "Peugeot": 28317
, "Hyundai": 27830
, "Renault": 25343
, "Škoda": 22407
, "Citroën": 18346
, "Honda": 17944
, "Fiat": 17683
, "Mini": 17214
, "Seat": 16850
, "Mazda": 15339
, "Suzuki": 13930
, "Volvo": 13734
, "Jaguar": 13477
, "Dacia": 8181
, "Mitsubishi": 5203
, "Porsche": 3868
, "Smart": 3216
, "Jeep": 2593
, "Tesla": 1413
, "MG": 1113
, "Subaru": 1056
, "other": 16583
});

db.insert(db.countries.UK, "2017-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 2482
, "Tesla|Model S": 786
, "Tesla|Model X": 627
, "Renault|Zoe": 344
, "BMW|i3 BEV": 227
, "Mercedes-Benz|B250e": 63
, "Kia|Soul EV": 54
, "Hyundai|Ioniq Electric": 43
, "Nissan|e-NV200": 36
, "Peugeot|iOn": 4
, "Volkswagen|e-Golf": 4
, "other": 2
});

db.insert(db.countries.UK, "2017-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 63724
, "Volkswagen": 48199
, "Vauxhall": 45400
, "Mercedes-Benz": 44112
, "BMW": 43396
, "Audi": 42156
, "Nissan": 32210
, "Hyundai": 22231
, "Toyota": 21902
, "Kia": 21005
, "Škoda": 20293
, "Peugeot": 19205
, "Mini": 17762
, "Land Rover": 16359
, "Renault": 15843
, "Seat": 12724
, "Honda": 11627
, "Citroën": 11580
, "Fiat": 11177
, "Volvo": 11009
, "Suzuki": 7867
, "Jaguar": 7630
, "Mazda": 7577
, "Dacia": 6106
, "Porsche": 3958
, "Mitsubishi": 3901
, "Smart": 2775
, "Jeep": 1081
, "MG": 977
, "Tesla": 849
, "Subaru": 566
, "Chevrolet": 90
, "other": 11070
});

db.insert(db.countries.UK, "2017-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 1385
, "Tesla|Model X": 448
, "Tesla|Model S": 401
, "Renault|Zoe": 285
, "BMW|i3 BEV": 242
, "Hyundai|Ioniq Electric": 116
, "Mercedes-Benz|B250e": 49
, "Kia|Soul EV": 35
, "Nissan|e-NV200": 33
, "Smart|Forfour ED": 11
, "Smart|Fortwo ED": 11
, "Volkswagen|e-Golf": 6
, "Ford|Focus Electric": 5
, "Peugeot|iOn": 5
, "Citroën|C-Zero": 4
, "Volkswagen|e-up!": 3
});

db.insert(db.countries.UK, "2017-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 66286
, "Volkswagen": 57538
, "Vauxhall": 49199
, "Audi": 48979
, "Mercedes-Benz": 48083
, "BMW": 45442
, "Nissan": 43035
, "Toyota": 29286
, "Kia": 26107
, "Hyundai": 25156
, "Land Rover": 21688
, "Škoda": 20637
, "Peugeot": 20375
, "Renault": 17983
, "Mini": 16823
, "Honda": 15705
, "Seat": 14787
, "Citroën": 13718
, "Volvo": 12169
, "Suzuki": 11838
, "Mazda": 11409
, "Fiat": 9829
, "Jaguar": 9089
, "Dacia": 6608
, "Mitsubishi": 3966
, "Porsche": 3488
, "Smart": 2758
, "Jeep": 1746
, "MG": 1383
, "Tesla": 1263
, "Subaru": 844
, "Chevrolet": 76
, "other": 13780
});

db.insert(db.countries.UK, "2017-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 1431
, "Tesla|Model S": 674
, "Tesla|Model X": 589
, "Renault|Zoe": 326
, "BMW|i3 BEV": 197
, "Volkswagen|e-Golf": 49
, "Nissan|e-NV200": 47
, "Kia|Soul EV": 40
, "Smart|Fortwo ED": 34
, "Hyundai|Ioniq Electric": 25
, "Mercedes-Benz|B250e": 18
, "Smart|Forfour ED": 16
, "Volkswagen|e-up!": 4
, "Peugeot|iOn": 2
, "other": 1
});

db.insert(db.countries.UK, "2017-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 53694
, "Volkswagen": 43409
, "BMW": 37606
, "Audi": 36617
, "Mercedes-Benz": 35025
, "Vauxhall": 33968
, "Nissan": 24417
, "Hyundai": 18080
, "Toyota": 18019
, "Kia": 16707
, "Mini": 16390
, "Land Rover": 16108
, "Škoda": 15890
, "Peugeot": 14662
, "Seat": 11930
, "Renault": 10594
, "Volvo": 9664
, "Honda": 9279
, "Citroën": 7975
, "Jaguar": 6713
, "Suzuki": 6650
, "Fiat": 6065
, "Mazda": 5446
, "Dacia": 4043
, "Mitsubishi": 3415
, "Porsche": 3239
, "Smart": 1541
, "Tesla": 1231
, "MG": 1139
, "Jeep": 918
, "Subaru": 682
, "Chevrolet": 73
, "other": 9109
});

db.insert(db.countries.UK, "2017-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model S": 779
, "Tesla|Model X": 452
, "Nissan|Leaf": 369
, "BMW|i3 BEV": 315
, "Renault|Zoe": 220
, "Kia|Soul EV": 86
, "Smart|Fortwo ED": 71
, "Hyundai|Ioniq Electric": 66
, "Smart|Forfour ED": 45
, "Volkswagen|e-Golf": 33
, "Nissan|e-NV200": 16
, "Volkswagen|e-up!": 12
, "Peugeot|iOn": 5
, "Mercedes-Benz|B250e": 3
, "Citroën|C-Zero": 2
});

db.insert(db.countries.UK, "2018-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 82658
, "Volkswagen": 57865
, "Vauxhall": 54282
, "Mercedes-Benz": 51520
, "Audi": 48114
, "BMW": 47691
, "Nissan": 35395
, "Toyota": 33874
, "Kia": 28488
, "Hyundai": 27990
, "Peugeot": 24705
, "Land Rover": 24418
, "Škoda": 21547
, "Renault": 19821
, "Seat": 18440
, "Honda": 18305
, "Mini": 17049
, "Citroën": 14863
, "Mazda": 14289
, "Volvo": 11771
, "Fiat": 11611
, "Suzuki": 11283
, "Jaguar": 10210
, "Dacia": 7176
, "Mitsubishi": 6101
, "Porsche": 4176
, "Smart": 2075
, "MG": 1816
, "Jeep": 1761
, "Subaru": 1097
, "Tesla": 834
, "other": 13505
});

db.insert(db.countries.UK, "2018-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 2015
, "Tesla|Model S": 541
, "Renault|Zoe": 429
, "Tesla|Model X": 293
, "BMW|i3 BEV": 256
, "Volkswagen|e-Golf": 134
, "Hyundai|Ioniq Electric": 87
, "Kia|Soul EV": 58
, "Smart|Forfour ED": 51
, "Smart|Fortwo ED": 17
, "Nissan|e-NV200": 9
, "Volkswagen|e-up!": 4
, "Jaguar|I-Pace": 3
, "Mercedes-Benz|B250e": 2
, "other": 1
});

db.insert(db.countries.UK, "2018-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 64040
, "Volkswagen": 56061
, "BMW": 45284
, "Vauxhall": 42742
, "Audi": 41431
, "Mercedes-Benz": 40466
, "Nissan": 25292
, "Toyota": 24168
, "Hyundai": 23007
, "Kia": 22847
, "Škoda": 20788
, "Peugeot": 20280
, "Land Rover": 17968
, "Seat": 17550
, "Mini": 17167
, "Renault": 15147
, "Citroën": 13484
, "Volvo": 12026
, "Honda": 11678
, "Suzuki": 9120
, "Jaguar": 8775
, "Fiat": 8457
, "Mazda": 7852
, "Dacia": 6423
, "Porsche": 4936
, "Mitsubishi": 4223
, "MG": 2535
, "Jeep": 1792
, "Smart": 1756
, "Tesla": 921
, "Subaru": 788
, "Chevrolet": 78
, "other": 11428
});

db.insert(db.countries.UK, "2018-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 1501
, "Tesla|Model S": 498
, "Tesla|Model X": 422
, "Renault|Zoe": 402
, "BMW|i3 BEV": 171
, "Volkswagen|e-Golf": 156
, "Kia|Soul EV": 96
, "Jaguar|I-Pace": 92
, "Hyundai|Ioniq Electric": 84
, "Smart|Fortwo ED": 54
, "Smart|Forfour ED": 28
, "Nissan|e-NV200": 16
, "Volkswagen|e-up!": 13
, "Peugeot|iOn": 5
});

db.insert(db.countries.UK, "2018-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 61289
, "Mercedes-Benz": 46605
, "Vauxhall": 45693
, "Volkswagen": 44507
, "BMW": 44177
, "Audi": 35005
, "Toyota": 30575
, "Kia": 27450
, "Nissan": 26389
, "Hyundai": 24713
, "Peugeot": 20820
, "Land Rover": 19394
, "Škoda": 15823
, "Mini": 15309
, "Renault": 15235
, "Honda": 14714
, "Seat": 14640
, "Volvo": 14026
, "Citroën": 13420
, "Suzuki": 11872
, "Mazda": 10962
, "Jaguar": 10819
, "Fiat": 9307
, "Mitsubishi": 5741
, "Dacia": 4613
, "MG": 2484
, "Smart": 2357
, "Porsche": 1908
, "Jeep": 1499
, "Subaru": 1197
, "Tesla": 942
, "Chevrolet": 74
, "other": 10876
});

db.insert(db.countries.UK, "2018-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 961
, "Tesla|Model S": 498
, "Renault|Zoe": 454
, "Tesla|Model X": 442
, "BMW|i3 BEV": 363
, "Volkswagen|e-Golf": 332
, "Jaguar|I-Pace": 211
, "Kia|Soul EV": 181
, "Hyundai|Ioniq Electric": 137
, "Smart|Fortwo ED": 105
, "Hyundai|Kona Electric": 82
, "Smart|Forfour ED": 25
, "Nissan|e-NV200": 23
, "Volkswagen|e-up!": 5
});

db.insert(db.countries.UK, "2018-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 49064
, "Volkswagen": 45713
, "BMW": 36106
, "Mercedes-Benz": 34863
, "Vauxhall": 34271
, "Audi": 19752
, "Nissan": 18130
, "Land Rover": 18023
, "Toyota": 17781
, "Mini": 17645
, "Kia": 17110
, "Škoda": 16033
, "Peugeot": 15675
, "Hyundai": 14169
, "Volvo": 12964
, "Renault": 12442
, "Seat": 12407
, "Honda": 8654
, "Jaguar": 8541
, "Citroën": 8116
, "Mazda": 7007
, "Fiat": 6603
, "Suzuki": 6147
, "Dacia": 5917
, "Mitsubishi": 5568
, "MG": 2407
, "Porsche": 1962
, "Smart": 1406
, "Jeep": 1304
, "Tesla": 675
, "Subaru": 637
, "Chevrolet": 72
, "other": 7203
});

db.insert(db.countries.UK, "2018-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 939
, "Renault|Zoe": 696
, "Jaguar|I-Pace": 534
, "BMW|i3 BEV": 419
, "Volkswagen|e-Golf": 358
, "Tesla|Model S": 351
, "Tesla|Model X": 322
, "Hyundai|Kona Electric": 140
, "Hyundai|Ioniq Electric": 136
, "Smart|Fortwo ED": 112
, "Kia|Soul EV": 88
, "Smart|Forfour ED": 75
, "Nissan|e-NV200": 25
, "Volkswagen|e-up!": 5
, "other": 1
});

db.insert(db.countries.UK, "2019-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 68668
, "Volkswagen": 60350
, "Vauxhall": 55300
, "Mercedes-Benz": 52108
, "BMW": 47240
, "Audi": 41994
, "Toyota": 33809
, "Nissan": 30009
, "Kia": 29985
, "Peugeot": 25289
, "Hyundai": 24787
, "Land Rover": 24113
, "Škoda": 22061
, "Seat": 20680
, "Renault": 19164
, "Mini": 18194
, "Citroën": 17857
, "Volvo": 16349
, "Honda": 15683
, "Mazda": 13154
, "Suzuki": 11974
, "Jaguar": 11555
, "Fiat": 11041
, "Dacia": 10863
, "Mitsubishi": 5786
, "MG": 3122
, "Porsche": 2549
, "Smart": 1710
, "Jeep": 1604
, "Subaru": 1074
, "Tesla": 646
, "other": 11904
});

db.insert(db.countries.UK, "2019-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 1454
, "Jaguar|I-Pace": 917
, "BMW|i3 BEV": 794
, "Renault|Zoe": 745
, "Volkswagen|e-Golf": 521
, "Tesla|Model X": 325
, "Tesla|Model S": 320
, "Hyundai|Kona Electric": 232
, "Kia|Niro EV": 205
, "Hyundai|Ioniq Electric": 146
, "Smart|Fortwo ED": 112
, "Smart|Forfour ED": 68
, "Audi|Q8 e-tron": 63
, "Nissan|e-NV200": 41
, "Kia|Soul EV": 30
, "Mini|Cooper SE": 4
, "other": 1
});

db.insert(db.countries.UK, "2019-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 60619
, "Volkswagen": 52274
, "BMW": 43617
, "Mercedes-Benz": 41435
, "Vauxhall": 39625
, "Audi": 39399
, "Toyota": 26553
, "Nissan": 23951
, "Kia": 23291
, "Hyundai": 21188
, "Peugeot": 19444
, "Škoda": 19385
, "Land Rover": 18592
, "Seat": 17207
, "Mini": 15156
, "Volvo": 13890
, "Renault": 12897
, "Citroën": 11839
, "Honda": 9811
, "Jaguar": 8735
, "Mazda": 8494
, "Suzuki": 8334
, "Dacia": 7649
, "Fiat": 6901
, "Porsche": 4514
, "Mitsubishi": 4304
, "MG": 3294
, "Jeep": 1741
, "Smart": 1443
, "Tesla": 976
, "Subaru": 664
, "Chevrolet": 85
, "other": 8840
});

db.insert(db.countries.UK, "2019-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Jaguar|I-Pace": 982
, "BMW|i3 BEV": 969
, "Volkswagen|e-Golf": 796
, "Renault|Zoe": 773
, "Nissan|Leaf": 760
, "Tesla|Model S": 456
, "Audi|Q8 e-tron": 352
, "Tesla|Model X": 341
, "Hyundai|Kona Electric": 238
, "Kia|Niro EV": 234
, "Tesla|Model 3": 177
, "Hyundai|Ioniq Electric": 66
, "Nissan|e-NV200": 51
, "Smart|Forfour ED": 23
, "Smart|Fortwo ED": 20
, "Mercedes-Benz|eVito": 12
, "other": 6
});

db.insert(db.countries.UK, "2019-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 60883
, "Mercedes-Benz": 47760
, "Volkswagen": 46964
, "Vauxhall": 42772
, "BMW": 41860
, "Toyota": 32742
, "Audi": 32271
, "Kia": 26958
, "Nissan": 22959
, "Hyundai": 22746
, "Peugeot": 20843
, "Land Rover": 19019
, "Mini": 17535
, "Seat": 17215
, "Škoda": 17146
, "Renault": 15871
, "Volvo": 14546
, "Citroën": 13062
, "Mazda": 12017
, "Honda": 11306
, "Jaguar": 9900
, "Suzuki": 9410
, "Fiat": 7226
, "Dacia": 6762
, "Tesla": 5974
, "Mitsubishi": 3881
, "Porsche": 3343
, "MG": 3137
, "Jeep": 1714
, "Subaru": 834
, "Smart": 693
, "Chevrolet": 103
, "other": 11946
});

db.insert(db.countries.UK, "2019-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 5350
, "Nissan|Leaf": 1386
, "Volkswagen|e-Golf": 1208
, "BMW|i3 BEV": 1183
, "Jaguar|I-Pace": 1171
, "Renault|Zoe": 646
, "Tesla|Model X": 366
, "Audi|Q8 e-tron": 333
, "Tesla|Model S": 256
, "Hyundai|Kona Electric": 185
, "Hyundai|Ioniq Electric": 172
, "Kia|Niro EV": 169
, "Smart|Fortwo ED": 136
, "Nissan|e-NV200": 72
, "MG|ZS EV": 66
, "Smart|Forfour ED": 65
, "Mercedes-Benz|EQC": 48
, "other": 7
});

db.insert(db.countries.UK, "2019-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 48841
, "Volkswagen": 44604
, "BMW": 38077
, "Mercedes-Benz": 31582
, "Audi": 25879
, "Vauxhall": 23226
, "Toyota": 21479
, "Nissan": 17990
, "Kia": 17156
, "Škoda": 16288
, "Land Rover": 16268
, "Peugeot": 16197
, "Hyundai": 14640
, "Mini": 14162
, "Seat": 13858
, "Volvo": 11938
, "Renault": 11243
, "Citroën": 8344
, "Honda": 7956
, "Jaguar": 6996
, "Mazda": 6911
, "Dacia": 5593
, "Tesla": 5577
, "Porsche": 5393
, "Suzuki": 5330
, "Fiat": 5148
, "MG": 3763
, "Mitsubishi": 2735
, "Jeep": 1373
, "Subaru": 1135
, "Smart": 151
, "other": 8576
});

db.insert(db.countries.UK, "2019-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 5122
, "Nissan|Leaf": 1683
, "Volkswagen|e-Golf": 1310
, "BMW|i3 BEV": 1150
, "Jaguar|I-Pace": 1125
, "MG|ZS EV": 591
, "Audi|Q8 e-tron": 364
, "Tesla|Model X": 254
, "Renault|Zoe": 216
, "Hyundai|Kona Electric": 208
, "Tesla|Model S": 201
, "Smart|Fortwo ED": 120
, "Mercedes-Benz|EQC": 103
, "Hyundai|Ioniq Electric": 89
, "Kia|Niro EV": 73
, "Nissan|e-NV200": 73
, "Smart|Forfour ED": 25
, "Mini|Cooper SE": 12
, "other": 7
});

db.insert(db.countries.UK, "2020-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 45684
, "Ford": 44308
, "BMW": 34531
, "Mercedes-Benz": 34041
, "Audi": 30806
, "Toyota": 29707
, "Vauxhall": 26957
, "Nissan": 24098
, "Kia": 22348
, "Land Rover": 20495
, "Škoda": 17400
, "Seat": 15737
, "Peugeot": 14994
, "Hyundai": 13787
, "Mini": 13028
, "Volvo": 12245
, "Renault": 10049
, "Honda": 9817
, "Citroën": 9187
, "Jaguar": 8193
, "Mazda": 7270
, "Fiat": 6287
, "Suzuki": 6257
, "Tesla": 5700
, "MG": 5487
, "Dacia": 5046
, "Mitsubishi": 3926
, "Porsche": 2868
, "Jeep": 1061
, "Subaru": 401
, "Smart": 248
, "Chevrolet": 58
, "other": 9578
});

db.insert(db.countries.UK, "2020-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 5365
, "Nissan|Leaf": 2659
, "MG|ZS EV": 1795
, "Volkswagen|e-Golf": 1205
, "Jaguar|I-Pace": 1146
, "BMW|i3 BEV": 920
, "Peugeot|e-208": 792
, "Audi|Q8 e-tron": 726
, "Kia|Niro EV": 523
, "Hyundai|Ioniq Electric": 434
, "Mini|Cooper SE": 409
, "Vauxhall|Corsa-e": 359
, "Hyundai|Kona Electric": 286
, "Renault|Zoe": 266
, "Kia|Soul EV": 217
, "Tesla|Model X": 178
, "Tesla|Model S": 155
, "Smart|Forfour ED": 134
, "Mercedes-Benz|EQC": 122
, "Smart|Fortwo ED": 110
, "Volkswagen|e-up!": 91
, "Škoda|Citigo-e": 80
, "Nissan|e-NV200": 74
, "Seat|Mii Electric": 57
, "Porsche|Taycan": 49
, "other": 1
});

db.insert(db.countries.UK, "2020-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 16044
, "Volkswagen": 14014
, "Toyota": 12756
, "BMW": 12437
, "Mercedes-Benz": 11937
, "Vauxhall": 10768
, "Audi": 9804
, "Nissan": 6690
, "Kia": 6616
, "Peugeot": 6384
, "Škoda": 5740
, "Land Rover": 5684
, "Volvo": 5644
, "Renault": 5355
, "Mini": 5287
, "Seat": 4617
, "Tesla": 4480
, "Hyundai": 3903
, "Jaguar": 2693
, "Citroën": 2460
, "Dacia": 2358
, "MG": 2259
, "Fiat": 2219
, "Honda": 1877
, "Mazda": 1594
, "Suzuki": 1528
, "Porsche": 1335
, "Mitsubishi": 869
, "Jeep": 547
, "Smart": 181
, "Subaru": 87
, "other": 3382
});

db.insert(db.countries.UK, "2020-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 4029
, "Renault|Zoe": 1136
, "Jaguar|I-Pace": 1030
, "Nissan|Leaf": 773
, "Kia|Niro EV": 737
, "Audi|Q8 e-tron": 569
, "Vauxhall|Corsa-e": 529
, "MG|ZS EV": 431
, "Hyundai|Ioniq Electric": 408
, "BMW|i3 BEV": 407
, "Peugeot|e-208": 344
, "Hyundai|Kona Electric": 284
, "Volkswagen|e-Golf": 263
, "Peugeot|e-2008": 257
, "Tesla|Model X": 254
, "Mini|Cooper SE": 241
, "Porsche|Taycan": 216
, "Tesla|Model S": 197
, "Kia|Soul EV": 151
, "Mercedes-Benz|EQC": 121
, "Smart|Forfour ED": 110
, "Smart|Fortwo ED": 69
, "Volkswagen|e-up!": 36
, "Škoda|Citigo-e": 35
, "Nissan|e-NV200": 30
, "Seat|Mii Electric": 20
, "other": 4
});

db.insert(db.countries.UK, "2020-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 58730
, "Volkswagen": 52331
, "Audi": 40157
, "Mercedes-Benz": 39371
, "BMW": 38387
, "Toyota": 35359
, "Vauxhall": 34660
, "Kia": 28182
, "Nissan": 24553
, "Peugeot": 20875
, "Škoda": 20782
, "Hyundai": 20208
, "Renault": 19971
, "Land Rover": 19885
, "Mini": 15575
, "Seat": 14765
, "Volvo": 14618
, "Honda": 11260
, "Citroën": 10681
, "Mazda": 10186
, "Dacia": 8974
, "Suzuki": 8662
, "Jaguar": 8103
, "Fiat": 7568
, "Tesla": 6877
, "MG": 6573
, "Porsche": 4703
, "Mitsubishi": 3101
, "Jeep": 1855
, "Smart": 585
, "Subaru": 557
, "Polestar": 252
, "other": 11012
});

db.insert(db.countries.UK, "2020-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 5988
, "Renault|Zoe": 3072
, "Kia|Niro EV": 2988
, "Hyundai|Kona Electric": 2471
, "Audi|Q8 e-tron": 2309
, "Nissan|Leaf": 2187
, "Jaguar|I-Pace": 2032
, "MG|ZS EV": 1800
, "BMW|i3 BEV": 1617
, "Mini|Cooper SE": 1274
, "Hyundai|Ioniq Electric": 1195
, "Vauxhall|Corsa-e": 1032
, "Porsche|Taycan": 909
, "Volkswagen|e-Golf": 846
, "Peugeot|e-208": 817
, "Mercedes-Benz|EQC": 761
, "Volkswagen|ID.3": 657
, "Tesla|Model X": 604
, "Honda|e": 556
, "Peugeot|e-2008": 505
, "Smart|Forfour ED": 340
, "Kia|Soul EV": 314
, "Tesla|Model S": 285
, "Polestar|2": 249
, "Smart|Fortwo ED": 242
, "Seat|Mii Electric": 117
, "Škoda|Citigo-e": 115
, "Volkswagen|e-up!": 86
, "Nissan|e-NV200": 72
, "Mercedes-Benz|eVito": 27
, "other": 9
});

db.insert(db.countries.UK, "2020-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 38103
, "Ford": 35314
, "BMW": 31129
, "Audi": 27566
, "Mercedes-Benz": 26503
, "Vauxhall": 23533
, "Toyota": 21166
, "Nissan": 18700
, "Peugeot": 14916
, "Škoda": 14687
, "Volvo": 14369
, "Land Rover": 13976
, "Kia": 13390
, "Mini": 12303
, "Seat": 10467
, "Hyundai": 9634
, "Tesla": 7732
, "Renault": 7716
, "Jaguar": 7376
, "Porsche": 5758
, "Citroën": 5740
, "Honda": 5033
, "MG": 4210
, "Mazda": 4066
, "Fiat": 3616
, "Suzuki": 3325
, "Dacia": 2440
, "Mitsubishi": 1569
, "Jeep": 1350
, "Polestar": 599
, "Subaru": 454
, "Smart": 341
, "Cupra": 162
, "Chevrolet": 40
, "other": 6614
});

db.insert(db.countries.UK, "2020-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 6968
, "Volkswagen|ID.3": 4179
, "Jaguar|I-Pace": 4093
, "Nissan|Leaf": 2614
, "Audi|Q8 e-tron": 2295
, "Kia|Niro EV": 2287
, "Mercedes-Benz|EQC": 2094
, "Porsche|Taycan": 1956
, "Renault|Zoe": 1886
, "MG|ZS EV": 1562
, "BMW|i3 BEV": 1504
, "Mini|Cooper SE": 1428
, "Hyundai|Kona Electric": 1207
, "Peugeot|e-2008": 1038
, "Vauxhall|Corsa-e": 937
, "Peugeot|e-208": 787
, "Hyundai|Ioniq Electric": 698
, "Polestar|2": 599
, "Tesla|Model X": 493
, "Honda|e": 436
, "Volkswagen|e-Golf": 379
, "MG|MG5 EV": 273
, "Tesla|Model S": 270
, "Kia|Soul EV": 202
, "Smart|Fortwo ED": 200
, "Smart|Forfour ED": 138
, "Seat|Mii Electric": 111
, "Nissan|e-NV200": 99
, "Mercedes-Benz|EQV": 93
, "Mercedes-Benz|eVito": 71
, "Škoda|Citigo-e": 59
, "Ford|Mustang Mach-E": 39
, "Volkswagen|e-up!": 32
, "other": 26
});

db.insert(db.countries.UK, "2021-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 36764
, "Ford": 36496
, "BMW": 32221
, "Mercedes-Benz": 32076
, "Audi": 29573
, "Toyota": 25865
, "Vauxhall": 25010
, "Nissan": 22016
, "Land Rover": 20849
, "Kia": 20195
, "Peugeot": 15887
, "Škoda": 14389
, "Volvo": 14115
, "Hyundai": 13497
, "Seat": 11514
, "Mini": 10786
, "Citroën": 8652
, "Renault": 8143
, "Tesla": 7234
, "MG": 6220
, "Mazda": 5444
, "Jaguar": 5312
, "Honda": 4906
, "Suzuki": 3907
, "Fiat": 3395
, "Dacia": 3267
, "Porsche": 3061
, "Mitsubishi": 1990
, "Cupra": 924
, "Polestar": 922
, "Jeep": 915
, "Subaru": 480
, "Smart": 402
, "Chevrolet": 48
, "other": 7364
});

db.insert(db.countries.UK, "2021-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 7164
, "Kia|Niro EV": 3268
, "Nissan|Leaf": 2293
, "Audi|Q8 e-tron": 1505
, "Vauxhall|Corsa-e": 1231
, "MG|ZS EV": 1191
, "Peugeot|e-2008": 1155
, "Hyundai|Kona Electric": 1094
, "Mercedes-Benz|EQC": 1059
, "Mini|Cooper SE": 1022
, "Peugeot|e-208": 968
, "Hyundai|Ioniq Electric": 935
, "Polestar|2": 922
, "Porsche|Taycan": 896
, "MG|MG5 EV": 874
, "Volkswagen|ID.3": 778
, "BMW|i3 BEV": 768
, "Jaguar|I-Pace": 740
, "Renault|Zoe": 626
, "Volkswagen|ID.4": 480
, "Smart|Fortwo ED": 271
, "Mazda|MX-30 BEV": 264
, "Vauxhall|Mokka-e": 250
, "Citroën|ë-C4": 230
, "Kia|Soul EV": 217
, "Seat|Mii Electric": 210
, "Mercedes-Benz|EQA": 194
, "Nissan|e-NV200": 177
, "Volvo|EX40": 154
, "Smart|Forfour ED": 127
, "Honda|e": 95
, "Tesla|Model X": 50
, "Volkswagen|e-Golf": 45
, "Mercedes-Benz|EQV": 40
, "Škoda|Citigo-e": 33
, "Mercedes-Benz|eVito": 29
, "Vauxhall|Vivaro-e": 24
, "Peugeot|e-Traveller": 21
, "Tesla|Model S": 18
, "Volkswagen|e-up!": 16
, "other": 6
});

db.insert(db.countries.UK, "2021-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 49560
, "Ford": 38866
, "Audi": 38541
, "BMW": 33642
, "Toyota": 29497
, "Vauxhall": 28697
, "Mercedes-Benz": 27390
, "Kia": 24896
, "Škoda": 18786
, "Peugeot": 18663
, "Hyundai": 18242
, "Nissan": 16221
, "Land Rover": 15823
, "Seat": 14638
, "Volvo": 13279
, "Mini": 11840
, "Mazda": 8398
, "Honda": 8281
, "Citroën": 8268
, "Renault": 7671
, "Tesla": 7541
, "MG": 7468
, "Jaguar": 6867
, "Suzuki": 6859
, "Fiat": 6578
, "Dacia": 3597
, "Porsche": 2981
, "Mitsubishi": 2428
, "Cupra": 2238
, "Jeep": 1321
, "Polestar": 720
, "Subaru": 608
, "Smart": 397
, "Chevrolet": 49
, "other": 8270
});

db.insert(db.countries.UK, "2021-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 7536
, "Volkswagen|ID.3": 3631
, "Kia|Niro EV": 2500
, "Hyundai|Kona Electric": 2452
, "Nissan|Leaf": 2263
, "Audi|Q8 e-tron": 2177
, "Renault|Zoe": 1836
, "Vauxhall|Corsa-e": 1561
, "Mini|Cooper SE": 1352
, "MG|ZS EV": 1350
, "Jaguar|I-Pace": 1216
, "Peugeot|e-2008": 1179
, "Mercedes-Benz|EQC": 1120
, "Volkswagen|ID.4": 1112
, "Peugeot|e-208": 996
, "BMW|i3 BEV": 965
, "Porsche|Taycan": 915
, "MG|MG5 EV": 852
, "Mercedes-Benz|EQA": 802
, "Polestar|2": 720
, "Hyundai|Ioniq Electric": 546
, "Kia|Soul EV": 507
, "Vauxhall|Mokka-e": 468
, "Fiat|500e": 429
, "Volvo|EX40": 421
, "Škoda|Enyaq": 389
, "Ford|Mustang Mach-E": 379
, "Seat|Mii Electric": 318
, "Mazda|MX-30 BEV": 264
, "Audi|Q4 e-tron": 252
, "Citroën|ë-C4": 251
, "Honda|e": 234
, "Smart|Fortwo ED": 230
, "Smart|Forfour ED": 165
, "Volkswagen|e-up!": 133
, "Nissan|e-NV200": 87
, "Mercedes-Benz|EQV": 85
, "Vauxhall|Vivaro-e": 35
, "Mercedes-Benz|eVito": 31
, "other": 43
});

db.insert(db.countries.UK, "2021-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 36530
, "Toyota": 32766
, "Kia": 28802
, "Audi": 28443
, "BMW": 28340
, "Ford": 25043
, "Hyundai": 21313
, "Mercedes-Benz": 19657
, "Vauxhall": 18939
, "Nissan": 16575
, "Škoda": 13696
, "Seat": 11576
, "Peugeot": 11493
, "Honda": 10310
, "Land Rover": 10133
, "Volvo": 9448
, "MG": 9404
, "Mazda": 8449
, "Mini": 8278
, "Tesla": 7382
, "Renault": 7338
, "Citroën": 7304
, "Suzuki": 7149
, "Fiat": 6400
, "Dacia": 6353
, "Jaguar": 3882
, "Porsche": 2331
, "Cupra": 2270
, "Jeep": 1775
, "Subaru": 987
, "Polestar": 784
, "Mitsubishi": 640
, "Smart": 263
, "Genesis": 70
, "Chevrolet": 60
, "other": 9773
});

db.insert(db.countries.UK, "2021-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 7379
, "Volkswagen|ID.3": 3978
, "Kia|Niro EV": 3228
, "Audi|Q8 e-tron": 2212
, "Hyundai|Ioniq Electric": 2187
, "Mercedes-Benz|EQA": 2058
, "MG|MG5 EV": 1849
, "Renault|Zoe": 1782
, "Jaguar|I-Pace": 1729
, "Ford|Mustang Mach-E": 1691
, "Nissan|Leaf": 1609
, "Hyundai|Kona Electric": 1519
, "MG|ZS EV": 1390
, "Vauxhall|Corsa-e": 1390
, "Volkswagen|ID.4": 1364
, "Škoda|Enyaq": 1321
, "Peugeot|e-208": 1233
, "Audi|Q4 e-tron": 1171
, "Peugeot|e-2008": 1103
, "Fiat|500e": 1036
, "Mini|Cooper SE": 1005
, "Mazda|MX-30 BEV": 902
, "BMW|iX3": 864
, "Mercedes-Benz|EQC": 856
, "Vauxhall|Mokka-e": 837
, "BMW|i3 BEV": 819
, "Polestar|2": 784
, "Porsche|Taycan": 554
, "Seat|Mii Electric": 539
, "Citroën|ë-C4": 376
, "Volvo|EX40": 367
, "Kia|Soul EV": 328
, "Volkswagen|e-up!": 273
, "Honda|e": 251
, "Mercedes-Benz|EQV": 160
, "Smart|Fortwo ED": 159
, "Smart|Forfour ED": 100
, "Nissan|e-NV200": 75
, "Vauxhall|Vivaro-e": 49
, "Peugeot|e-Traveller": 35
, "Mercedes-Benz|eVito": 27
, "other": 32
});

db.insert(db.countries.UK, "2021-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 27305
, "BMW": 23556
, "Audi": 22061
, "Toyota": 20753
, "Mercedes-Benz": 19918
, "Vauxhall": 19194
, "Nissan": 17600
, "Ford": 17582
, "Hyundai": 16786
, "Kia": 16735
, "Mini": 14968
, "Peugeot": 14888
, "Tesla": 12713
, "Volvo": 12042
, "Škoda": 8952
, "MG": 7683
, "Land Rover": 7387
, "Renault": 6939
, "Citroën": 5900
, "Porsche": 5750
, "Seat": 5537
, "Honda": 4957
, "Dacia": 4288
, "Fiat": 4196
, "Mazda": 4107
, "Jaguar": 3449
, "Suzuki": 3085
, "Cupra": 2156
, "Polestar": 1669
, "Subaru": 683
, "Jeep": 673
, "Smart": 481
, "Mitsubishi": 118
, "Chevrolet": 88
, "Genesis": 40
, "other": 6090
});

db.insert(db.countries.UK, "2021-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 12707
, "Kia|Niro EV": 3274
, "Mini|Cooper SE": 3203
, "Nissan|Leaf": 2904
, "Volkswagen|ID.3": 2597
, "Audi|Q4 e-tron": 2435
, "BMW|iX3": 2208
, "Hyundai|Kona Electric": 2132
, "Mercedes-Benz|EQA": 2055
, "Audi|Q8 e-tron": 2010
, "Hyundai|Ioniq Electric": 1733
, "Polestar|2": 1668
, "Porsche|Taycan": 1653
, "Škoda|Enyaq": 1541
, "Volkswagen|ID.4": 1530
, "Jaguar|I-Pace": 1519
, "Renault|Zoe": 1506
, "MG|MG5 EV": 1498
, "MG|ZS EV": 1448
, "Vauxhall|Corsa-e": 1425
, "Peugeot|e-2008": 1320
, "Mercedes-Benz|EQC": 1215
, "Fiat|500e": 1165
, "Peugeot|e-208": 1122
, "Vauxhall|Mokka-e": 1113
, "BMW|i3 BEV": 1045
, "Volkswagen|e-up!": 961
, "Kia|EV6": 920
, "Volvo|EX40": 856
, "Ford|Mustang Mach-E": 669
, "Mazda|MX-30 BEV": 612
, "Citroën|ë-C4": 489
, "BMW|iX": 380
, "Vauxhall|Vivaro-e": 304
, "Smart|Forfour ED": 298
, "Mercedes-Benz|EQV": 204
, "Smart|Fortwo ED": 178
, "Honda|e": 117
, "Seat|Mii Electric": 116
, "BMW|i4": 94
, "Kia|Soul EV": 84
, "Citroën|ë-Berlingo Electric": 71
, "Nissan|e-NV200": 59
, "Mercedes-Benz|eVito": 46
, "other": 111
});

db.insert(db.countries.UK, "2022-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Kia": 32060
, "Toyota": 31028
, "Ford": 30260
, "BMW": 28312
, "Audi": 27425
, "Volkswagen": 27233
, "Mercedes-Benz": 25117
, "Vauxhall": 23999
, "Hyundai": 19756
, "Nissan": 17135
, "Peugeot": 16631
, "Tesla": 15581
, "MG": 13880
, "Volvo": 11345
, "Mini": 11175
, "Land Rover": 10866
, "Škoda": 10607
, "Renault": 8661
, "Citroën": 7509
, "Honda": 7412
, "Seat": 6843
, "Mazda": 6794
, "Fiat": 6077
, "Dacia": 5386
, "Suzuki": 5375
, "Porsche": 4336
, "Jaguar": 3454
, "Cupra": 1901
, "Polestar": 1441
, "Jeep": 657
, "Smart": 440
, "Subaru": 438
, "Mitsubishi": 112
, "Genesis": 90
, "Chevrolet": 66
, "other": 7681
});

db.insert(db.countries.UK, "2022-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 7797
, "Tesla|Model Y": 7779
, "Kia|Niro EV": 3849
, "Volkswagen|ID.3": 2679
, "Mercedes-Benz|EQC": 2181
, "Hyundai|Kona Electric": 1959
, "MG|MG5 EV": 1955
, "Hyundai|Ioniq Electric": 1768
, "Audi|Q4 e-tron": 1725
, "Mercedes-Benz|EQA": 1603
, "Fiat|500e": 1593
, "Kia|EV6": 1579
, "Vauxhall|Mokka-e": 1574
, "BMW|iX3": 1562
, "Ford|Mustang Mach-E": 1553
, "Nissan|Leaf": 1482
, "Porsche|Taycan": 1435
, "Polestar|2": 1434
, "Volkswagen|ID.4": 1433
, "Mini|Cooper SE": 1374
, "Audi|Q8 e-tron": 1265
, "Jaguar|I-Pace": 1249
, "Peugeot|e-2008": 1201
, "BMW|i3 BEV": 1099
, "Renault|Zoe": 1088
, "Škoda|Enyaq": 1075
, "MG|ZS EV": 945
, "Peugeot|e-208": 945
, "Vauxhall|Corsa-e": 918
, "BMW|iX": 869
, "Citroën|ë-C4": 573
, "Volvo|EX40": 478
, "Volvo|EC40": 461
, "Mercedes-Benz|EQB": 448
, "BMW|i4": 432
, "Volkswagen|e-up!": 395
, "Kia|Soul EV": 382
, "Smart|Forfour ED": 236
, "Mazda|MX-30 BEV": 201
, "Smart|Fortwo ED": 196
, "Mercedes-Benz|EQV": 170
, "Honda|e": 135
, "Vauxhall|Vivaro-e": 123
, "Mercedes-Benz|EQS": 120
, "Vauxhall|Combo-e": 108
, "Cupra|Born": 104
, "Nissan|e-NV200": 60
, "Citroën|ë-Berlingo Electric": 46
, "Peugeot|e-Rifter": 37
, "Mercedes-Benz|eVito": 35
, "other": 23
});

db.insert(db.countries.UK, "2022-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Ford": 31502
, "Volkswagen": 30301
, "Audi": 26877
, "BMW": 25904
, "Kia": 25333
, "Toyota": 25166
, "Vauxhall": 23953
, "Hyundai": 21126
, "Mercedes-Benz": 20936
, "Nissan": 16175
, "Peugeot": 15553
, "Land Rover": 12564
, "Škoda": 12291
, "MG": 11269
, "Mini": 11173
, "Volvo": 8236
, "Citroën": 7554
, "Dacia": 6690
, "Honda": 6517
, "Renault": 6326
, "Seat": 5993
, "Tesla": 5730
, "Fiat": 5400
, "Mazda": 4988
, "Suzuki": 4577
, "Porsche": 4146
, "Jaguar": 3497
, "Cupra": 3167
, "Polestar": 1394
, "Jeep": 804
, "Smart": 361
, "Subaru": 354
, "Genesis": 211
, "Mitsubishi": 81
, "Chevrolet": 59
, "other": 6679
});

db.insert(db.countries.UK, "2022-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model Y": 4234
, "Kia|Niro EV": 3043
, "Hyundai|Ioniq Electric": 2504
, "Audi|Q8 e-tron": 2078
, "Volkswagen|ID.3": 2007
, "Vauxhall|Corsa-e": 1778
, "Fiat|500e": 1756
, "MG|ZS EV": 1642
, "Peugeot|e-208": 1582
, "Citroën|ë-C4": 1518
, "Mini|Cooper SE": 1514
, "Tesla|Model 3": 1490
, "Jaguar|I-Pace": 1483
, "MG|MG5 EV": 1402
, "Nissan|Leaf": 1399
, "Polestar|2": 1391
, "Hyundai|Kona Electric": 1311
, "BMW|i4": 1210
, "Vauxhall|Mokka-e": 1209
, "BMW|iX": 1161
, "Porsche|Taycan": 1128
, "BMW|iX3": 1053
, "Renault|Zoe": 993
, "Kia|EV6": 985
, "Mercedes-Benz|EQA": 953
, "Peugeot|e-2008": 946
, "Ford|Mustang Mach-E": 892
, "Volkswagen|ID.4": 879
, "Mercedes-Benz|EQB": 875
, "Škoda|Enyaq": 799
, "Audi|Q4 e-tron": 766
, "BMW|i3 BEV": 707
, "Cupra|Born": 702
, "Mercedes-Benz|EQC": 625
, "Mazda|MX-30 BEV": 331
, "Volvo|EX40": 272
, "Kia|Soul EV": 227
, "Smart|Forfour ED": 209
, "Honda|e": 195
, "Mercedes-Benz|EQS": 183
, "Toyota|bZ4X": 170
, "Volvo|EC40": 165
, "Volkswagen|ID.5": 162
, "Smart|Fortwo ED": 147
, "Mercedes-Benz|EQE": 104
, "Volkswagen|e-up!": 96
, "Vauxhall|Vivaro-e": 87
, "Mercedes-Benz|EQV": 76
, "Mercedes-Benz|eVito": 49
, "Genesis|GV60": 47
, "Citroën|other": 52
, "Peugeot|other": 47
, "Vauxhall|other": 41
, "Nissan|other": 35
, "other": 14
});

db.insert(db.countries.UK, "2022-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 37276
, "Ford": 34455
, "Toyota": 32814
, "Audi": 26574
, "BMW": 26464
, "Kia": 25538
, "Hyundai": 23197
, "Nissan": 22346
, "Mercedes-Benz": 19895
, "Vauxhall": 18293
, "Škoda": 13392
, "MG": 13231
, "Land Rover": 11344
, "Peugeot": 11054
, "Tesla": 10942
, "Mini": 10020
, "Dacia": 9145
, "Citroën": 7776
, "Renault": 7374
, "Honda": 7283
, "Volvo": 7128
, "Mazda": 7113
, "Cupra": 5436
, "Seat": 4229
, "Suzuki": 4156
, "Fiat": 4075
, "Porsche": 3639
, "Jaguar": 3555
, "Polestar": 1095
, "Jeep": 707
, "Subaru": 517
, "Genesis": 267
, "Smart": 221
, "Mitsubishi": 92
, "Chevrolet": 54
, "other": 6735
});

db.insert(db.countries.UK, "2022-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model Y": 8644
, "Kia|Niro EV": 2475
, "Nissan|Leaf": 2415
, "Tesla|Model 3": 2284
, "Hyundai|Ioniq Electric": 2164
, "Volkswagen|ID.3": 2160
, "MG|MG5 EV": 2030
, "Mini|Cooper SE": 1900
, "MG|ZS EV": 1879
, "Cupra|Born": 1821
, "BMW|iX3": 1788
, "Hyundai|Kona Electric": 1677
, "Audi|Q8 e-tron": 1590
, "Vauxhall|Mokka-e": 1552
, "Škoda|Enyaq": 1500
, "Renault|Zoe": 1395
, "Jaguar|I-Pace": 1367
, "BMW|i4": 1274
, "Peugeot|e-2008": 1256
, "Mercedes-Benz|EQC": 1253
, "Audi|Q4 e-tron": 1241
, "Peugeot|e-208": 1207
, "BMW|iX": 1183
, "Ford|Mustang Mach-E": 1098
, "Polestar|2": 1095
, "Volkswagen|ID.4": 1092
, "Kia|EV6": 1085
, "Fiat|500e": 1056
, "Mercedes-Benz|EQA": 884
, "Vauxhall|Corsa-e": 759
, "Citroën|ë-C4": 706
, "Volkswagen|ID.5": 689
, "Mercedes-Benz|EQB": 658
, "BMW|i3 BEV": 622
, "Nissan|Ariya": 577
, "Porsche|Taycan": 531
, "MG|MG4 EV": 521
, "Volvo|EX40": 418
, "Mercedes-Benz|EQS": 290
, "Volvo|EC40": 273
, "Mercedes-Benz|EQE": 239
, "Kia|Soul EV": 234
, "Mazda|MX-30 BEV": 198
, "Genesis|GV60": 189
, "Smart|Forfour ED": 157
, "Honda|e": 101
, "Citroën|ë-Berlingo Electric": 93
, "Smart|Fortwo ED": 63
, "Renault|Megane E-Tech": 50
, "Vauxhall|Combo-e": 47
, "Vauxhall|other": 42
, "Peugeot|other": 33
, "Mercedes-Benz|other": 30
, "other": 84
});

db.insert(db.countries.UK, "2022-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 40641
, "Ford": 32463
, "Audi": 30389
, "BMW": 29370
, "Toyota": 27160
, "Nissan": 24542
, "Tesla": 22423
, "Vauxhall": 17746
, "Kia": 17056
, "Hyundai": 16372
, "Mercedes-Benz": 15827
, "Mini": 13657
, "Škoda": 13088
, "MG": 12352
, "Volvo": 10638
, "Renault": 10170
, "Land Rover": 9516
, "Peugeot": 9215
, "Mazda": 6696
, "Porsche": 6373
, "Dacia": 5940
, "Citroën": 5672
, "Honda": 5410
, "Seat": 5201
, "Fiat": 4332
, "Cupra": 3917
, "Polestar": 3420
, "Suzuki": 3308
, "Jaguar": 2164
, "Subaru": 620
, "Jeep": 538
, "Genesis": 435
, "Smart": 187
, "Chevrolet": 97
, "Mitsubishi": 70
, "GWM": 68
, "other": 7653
});

db.insert(db.countries.UK, "2022-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model Y": 14897
, "Tesla|Model 3": 7514
, "Nissan|Leaf": 3911
, "BMW|i4": 3778
, "Polestar|2": 3420
, "Volkswagen|ID.3": 2980
, "Audi|Q4 e-tron": 2862
, "Mini|Cooper SE": 2606
, "MG|MG4 EV": 2470
, "Renault|Zoe": 2274
, "BMW|iX": 2174
, "Volkswagen|ID.4": 2156
, "Škoda|Enyaq": 2155
, "MG|ZS EV": 2115
, "BMW|iX3": 2070
, "Cupra|Born": 2017
, "Vauxhall|Mokka-e": 1979
, "Volkswagen|ID.5": 1974
, "Porsche|Taycan": 1964
, "Audi|Q8 e-tron": 1855
, "Kia|Niro EV": 1828
, "Hyundai|Ioniq Electric": 1695
, "MG|MG5 EV": 1546
, "Volvo|EX40": 1466
, "Mercedes-Benz|EQC": 1408
, "Peugeot|e-2008": 1366
, "Hyundai|Kona Electric": 1353
, "Mercedes-Benz|EQA": 1255
, "Renault|Megane E-Tech": 1180
, "Volvo|EC40": 1015
, "Vauxhall|Corsa-e": 977
, "Ford|Mustang Mach-E": 955
, "Nissan|Ariya": 888
, "Peugeot|e-208": 841
, "Kia|EV6": 671
, "Mercedes-Benz|EQB": 666
, "Jaguar|I-Pace": 640
, "Fiat|500e": 501
, "Volkswagen|e-up!": 482
, "BMW|i3 BEV": 396
, "Citroën|ë-C4": 394
, "Volkswagen|ID. Buzz": 361
, "Genesis|GV60": 346
, "Toyota|bZ4X": 268
, "Mercedes-Benz|EQE": 174
, "Citroën|ë-Berlingo Electric": 173
, "Mazda|MX-30 BEV": 167
, "Smart|Fortwo ED": 158
, "Mercedes-Benz|EQS": 154
, "Subaru|Solterra": 126
, "Vauxhall|other": 151
, "BMW|other": 71
, "GWM|other": 68
, "Mercedes-Benz|other": 50
, "other": 133
});

db.insert(db.countries.UK, "2023-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Volkswagen": 42065
, "Ford": 36824
, "Toyota": 34736
, "Audi": 32971
, "Kia": 32303
, "Nissan": 26562
, "BMW": 26244
, "Hyundai": 24127
, "Mercedes-Benz": 23976
, "Vauxhall": 22892
, "MG": 20705
, "Škoda": 17044
, "Land Rover": 15970
, "Peugeot": 15128
, "Tesla": 13360
, "Volvo": 12073
, "Mini": 12061
, "Seat": 9805
, "Citroën": 9614
, "Mazda": 8793
, "Honda": 8672
, "Renault": 8584
, "Dacia": 7532
, "Suzuki": 6907
, "Porsche": 6103
, "Fiat": 5962
, "Cupra": 5283
, "Polestar": 3521
, "Jaguar": 3429
, "Jeep": 1063
, "Subaru": 667
, "Genesis": 361
, "GWM": 214
, "Mitsubishi": 80
, "Smart": 72
, "other": 7311
});

db.insert(db.countries.UK, "2023-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model Y": 9952
, "MG|MG4 EV": 5235
, "Audi|Q4 e-tron": 4220
, "Volkswagen|ID.3": 3874
, "Polestar|2": 3521
, "Tesla|Model 3": 3406
, "Kia|Niro EV": 3130
, "Hyundai|Kona Electric": 2043
, "Vauxhall|Mokka-e": 1938
, "Kia|EV6": 1931
, "Škoda|Enyaq": 1906
, "BMW|i4": 1755
, "Porsche|Taycan": 1722
, "Peugeot|e-2008": 1716
, "Mercedes-Benz|EQA": 1698
, "Volvo|EX40": 1658
, "BMW|iX": 1604
, "Audi|Q8 e-tron": 1565
, "Mini|Cooper SE": 1521
, "BMW|iX3": 1409
, "Volkswagen|ID.4": 1336
, "Cupra|Born": 1329
, "Hyundai|Ioniq Electric": 1266
, "MG|ZS EV": 1209
, "Nissan|Leaf": 1144
, "Mercedes-Benz|EQC": 973
, "Jaguar|I-Pace": 956
, "Vauxhall|Corsa-e": 927
, "Nissan|Ariya": 913
, "Peugeot|e-208": 880
, "Volvo|EC40": 869
, "Mercedes-Benz|EQB": 777
, "MG|MG5 EV": 742
, "Renault|Megane E-Tech": 740
, "Volkswagen|ID.5": 650
, "Ford|Mustang Mach-E": 636
, "Citroën|ë-C4": 532
, "Citroën|ë-Berlingo Electric": 500
, "Fiat|500e": 416
, "Mercedes-Benz|EQE": 369
, "Renault|Zoe": 331
, "Volkswagen|ID. Buzz": 309
, "Vauxhall|Vivaro-e": 269
, "Genesis|GV60": 240
, "GWM|Ora 03": 214
, "Toyota|bZ4X": 210
, "Mercedes-Benz|EQS": 163
, "Mazda|MX-30 BEV": 157
, "Kia|Soul EV": 129
, "Volkswagen|e-up!": 108
, "Peugeot|other": 82
, "BMW|other": 76
, "Vauxhall|other": 66
, "Smart|other": 64
, "Genesis|other": 62
, "Citroën|other": 55
, "Honda|other": 54
, "Subaru|other": 50
, "Mercedes-Benz|other": 47
, "other": 38
});

db.insert(db.countries.UK, "2023-04", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 11758
, "Audi": 11379
, "Ford": 10291
, "Kia": 7935
, "Vauxhall": 7845
, "BMW": 6804
, "Hyundai": 6569
, "Toyota": 6531
, "Peugeot": 5525
, "Škoda": 5272
, "Mercedes-Benz": 5118
, "MG": 5034
, "Nissan": 4907
, "Land Rover": 4030
, "Volvo": 3711
, "Mini": 3558
, "Dacia": 2933
, "Renault": 2335
, "Honda": 2319
, "Mazda": 2237
, "Citroën": 2236
, "Cupra": 1931
, "Porsche": 1876
, "Seat": 1867
, "Tesla": 1627
, "Suzuki": 1393
, "Fiat": 1297
, "Polestar": 1183
, "Jaguar": 692
, "Jeep": 115
, "Genesis": 99
, "Subaru": 81
, "Smart": 32
, "BYD": 29
, "other": 2441
});

db.insert(db.countries.UK, "2023-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/4 (includes commercial vehicles), https://www.acea.auto/files/20230517_PRPC_2304_FINAL.pdf",
{ "Tesla|Model Y": 1380
, "MG|MG4 EV": 1256
, "Polestar|2": 1183
, "Volkswagen|ID.3": 901
, "Audi|Q4 e-tron": 851
, "Hyundai|Kona Electric": 727
, "Vauxhall|Mokka-e": 671
, "Kia|Niro EV": 628
, "Volkswagen|ID.4": 540
, "BMW|i4": 538
, "Volvo|EX40": 488
, "Škoda|Enyaq": 481
, "Mercedes-Benz|EQA": 455
, "Cupra|Born": 446
, "Peugeot|e-208": 423
, "MG|ZS EV": 402
, "Kia|EV6": 391
, "Hyundai|Ioniq 5": 388
, "Nissan|Leaf": 319
, "Mini|Cooper SE": 300
, "BMW|iX3": 292
, "Porsche|Taycan": 289
, "Vauxhall|Corsa-e": 273
, "Peugeot|e-2008": 267
, "Audi|Q8 e-tron": 259
, "Tesla|Model 3": 247
, "Jaguar|I-Pace": 243
, "Mercedes-Benz|EQC": 242
, "Volvo|EC40": 231
, "BMW|iX1": 226
, "Nissan|Ariya": 207
, "BMW|iX": 202
, "Vauxhall|Combo-e": 196
, "Fiat|500e": 194
, "Mercedes-Benz|EQB": 194
, "Citroën|ë-C4": 164
, "Hyundai|Ioniq 6": 162
, "Ford|Mustang Mach-E": 155
, "Volkswagen|ID.5": 153
, "Renault|Megane E-Tech": 152
, "MG|MG5 EV": 110
, "Mercedes-Benz|EQE": 80
, "Audi|e-tron GT": 71
, "Renault|Zoe": 56
, "Toyota|bZ4X": 53
, "BMW|i7": 36
, "Volkswagen|e-up!": 34
, "Mazda|MX-30 BEV": 33
, "Genesis|GV60": 27
, "Smart|Fortwo ED": 27
, "Hyundai|other": 63
, "Vauxhall|other": 55
, "Mercedes-Benz|other": 47
, "MG|other": 41
, "BMW|other": 34
, "Citroën|other": 32
, "Kia|other": 30
, "Volkswagen|other": 29
, "BYD|other": 24
, "Audi|other": 22
, "Peugeot|other": 22
, "Honda|other": 21
, "Nissan|other": 16
, "Renault|other": 14
, "Genesis|other": 13
, "other": 2416
});

db.insert(db.countries.UK, "2023-05", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Audi": 11808
, "Volkswagen": 11687
, "Ford": 10970
, "Kia": 8976
, "Vauxhall": 8879
, "Toyota": 8325
, "BMW": 8025
, "Hyundai": 7260
, "Nissan": 6484
, "MG": 6304
, "Mercedes-Benz": 5816
, "Škoda": 5720
, "Peugeot": 5171
, "Volvo": 4835
, "Tesla": 3099
, "Land Rover": 3391
, "Mini": 3099
, "Dacia": 2540
, "Renault": 2385
, "Mazda": 2277
, "Citroën": 2205
, "Seat": 1973
, "Porsche": 1920
, "Cupra": 1908
, "Suzuki": 1878
, "Honda": 1505
, "Jaguar": 1341
, "Polestar": 1034
, "Fiat": 950
, "Subaru": 134
, "Genesis": 104
, "Jeep": 98
, "GWM": 33
, "BYD": 21
, "Smart": 16
, "other": 3033
});

db.insert(db.countries.UK, "2023-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/5 (includes commercial vehicles), https://www.acea.auto/files/20230621_PRPC_2305_FINAL.pdf",
{ "Tesla|Model Y": 2253
, "MG|MG4 EV": 1790
, "Vauxhall|Mokka-e": 1136
, "Polestar|2": 1004
, "Audi|Q4 e-tron": 901
, "Tesla|Model 3": 846
, "Volkswagen|ID.4": 776
, "Volkswagen|ID.3": 766
, "BMW|i4": 663
, "MG|ZS EV": 611
, "Škoda|Enyaq": 611
, "Kia|Niro EV": 607
, "Hyundai|Kona Electric": 596
, "Kia|EV6": 591
, "Peugeot|e-2008": 536
, "Vauxhall|Corsa-e": 516
, "Mercedes-Benz|EQA": 513
, "Volvo|EX40": 490
, "Cupra|Born": 442
, "Hyundai|Ioniq 5": 408
, "BMW|iX3": 388
, "BMW|iX1": 383
, "Nissan|Leaf": 370
, "Mini|Cooper SE": 360
, "Volvo|EC40": 333
, "Mercedes-Benz|EQB": 313
, "Audi|Q8 e-tron": 296
, "Jaguar|I-Pace": 290
, "Nissan|Ariya": 222
, "Renault|Megane E-Tech": 199
, "Porsche|Taycan": 197
, "Mercedes-Benz|EQC": 192
, "Volkswagen|ID.5": 178
, "BMW|iX": 172
, "MG|MG5 EV": 163
, "Fiat|500e": 157
, "Ford|Mustang Mach-E": 146
, "Renault|Zoe": 142
, "Citroën|ë-C4": 133
, "Peugeot|e-208": 97
, "Audi|e-tron GT": 90
, "Hyundai|Ioniq 6": 87
, "Mercedes-Benz|EQE": 59
, "Vauxhall|Combo-e": 58
, "Genesis|GV60": 56
, "Mazda|MX-30 BEV": 55
, "Volkswagen|e-up!": 41
, "BMW|i7": 33
, "GWM|Ora 03": 31
, "Genesis|GV70": 23
, "Kia|Soul EV": 23
, "Toyota|bZ4X": 23
, "Vauxhall|other": 73
, "Peugeot|other": 64
, "MG|other": 53
, "Volkswagen|other": 46
, "BMW|other": 41
, "Hyundai|other": 41
, "Citroën|other": 40
, "Mercedes-Benz|other": 38
, "Audi|other": 32
, "Renault|other": 26
, "Kia|other": 25
, "Nissan|other": 16
, "Škoda|other": 16
, "BYD|other": 15
, "other": 2621
});

db.insert(db.countries.UK, "2023-06", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 15185
, "Ford": 14744
, "Audi": 12235
, "BMW": 11600
, "Vauxhall": 9927
, "Kia": 9594
, "Toyota": 9441
, "Hyundai": 8435
, "Mercedes-Benz": 8163
, "Nissan": 7968
, "MG": 7607
, "Tesla": 6992
, "Škoda": 6359
, "Peugeot": 4679
, "Land Rover": 4633
, "Volvo": 4416
, "Mini": 4182
, "Renault": 4154
, "Mazda": 2887
, "Porsche": 2480
, "Seat": 2358
, "Dacia": 2354
, "Honda": 2286
, "Cupra": 2276
, "Suzuki": 2044
, "Citroën": 1590
, "Jaguar": 1466
, "Fiat": 1191
, "Polestar": 1125
, "Jeep": 363
, "Subaru": 299
, "Genesis": 247
, "Smart": 49
, "GWM": 38
, "other": 3899
});

db.insert(db.countries.UK, "2023-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/6 (includes commercial vehicles), https://www.acea.auto/files/20230719_PRPC_2306-FINAL.pdf",
{ "Tesla|Model Y": 5101
, "MG|MG4 EV": 2111
, "Tesla|Model 3": 1828
, "Polestar|2": 1117
, "Vauxhall|Mokka-e": 1077
, "Volkswagen|ID.4": 999
, "Audi|Q4 e-tron": 982
, "Volkswagen|ID.3": 907
, "BMW|i4": 900
, "Kia|EV6": 686
, "BMW|iX1": 683
, "Hyundai|Kona Electric": 630
, "Škoda|Enyaq": 620
, "Cupra|Born": 617
, "Porsche|Taycan": 580
, "MG|ZS EV": 561
, "Kia|Niro EV": 557
, "Mercedes-Benz|EQA": 514
, "Nissan|Leaf": 481
, "Hyundai|Ioniq 5": 479
, "Volkswagen|ID.5": 463
, "Volvo|EX40": 450
, "BMW|iX3": 448
, "Audi|Q8 e-tron": 446
, "Mini|Cooper SE": 437
, "Mercedes-Benz|EQC": 423
, "Volvo|EC40": 408
, "Peugeot|e-2008": 392
, "Jaguar|I-Pace": 332
, "Ford|Mustang Mach-E": 307
, "Vauxhall|Corsa-e": 271
, "Fiat|500e": 269
, "Renault|Megane E-Tech": 258
, "Nissan|Ariya": 245
, "BMW|iX": 236
, "Mercedes-Benz|EQB": 225
, "Renault|Zoe": 184
, "MG|MG5 EV": 167
, "Mercedes-Benz|EQE": 156
, "Genesis|GV60": 115
, "Peugeot|e-208": 112
, "Audi|e-tron GT": 109
, "Toyota|bZ4X": 105
, "Vauxhall|Combo-e": 90
, "Hyundai|Ioniq 6": 73
, "Citroën|ë-C4": 66
, "Mazda|MX-30 BEV": 53
, "Mercedes-Benz|EQS": 47
, "BMW|i7": 40
, "GWM|Ora 03": 39
, "Volkswagen|e-up!": 39
, "Tesla|other": 63
, "BMW|other": 60
, "Hyundai|other": 59
, "MG|other": 59
, "Kia|other": 57
, "Audi|other": 54
, "Volkswagen|other": 53
, "Vauxhall|other": 45
, "Volvo|other": 43
, "Peugeot|other": 35
, "Smart|other": 32
, "Mercedes-Benz|other": 27
, "Genesis|other": 25
, "Renault|other": 21
, "Škoda|other": 17
, "BYD|other": 16
, "other": 2599
});

db.insert(db.countries.UK, "2023-07", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13064
, "Ford": 11248
, "Audi": 11081
, "Kia": 9624
, "BMW": 8668
, "Toyota": 8546
, "Vauxhall": 7452
, "Hyundai": 6479
, "Škoda": 6469
, "Nissan": 6087
, "MG": 6070
, "Mercedes-Benz": 5989
, "Land Rover": 4470
, "Volvo": 4025
, "Peugeot": 3547
, "Mini": 3247
, "Tesla": 3141
, "Renault": 2723
, "Seat": 2654
, "Suzuki": 2196
, "Mazda": 2136
, "Cupra": 1947
, "Honda": 1925
, "Porsche": 1901
, "Citroën": 1630
, "Dacia": 1572
, "Polestar": 1300
, "Jaguar": 1046
, "Fiat": 776
, "Jeep": 205
, "Subaru": 99
, "BYD": 81
, "GWM": 77
, "Genesis": 40
, "Smart": 28
, "other": 2378
});

db.insert(db.countries.UK, "2023-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/7 (includes commercial vehicles), https://www.acea.auto/files/20230830_PRPC_2307_FINAL.pdf",
{ "Tesla|Model Y": 2234
, "MG|MG4 EV": 1910
, "Polestar|2": 1235
, "Volkswagen|ID.4": 1012
, "Kia|Niro EV": 876
, "Audi|Q4 e-tron": 851
, "Tesla|Model 3": 787
, "Škoda|Enyaq": 653
, "Vauxhall|Mokka-e": 649
, "BMW|i4": 611
, "MG|ZS EV": 592
, "Kia|EV6": 591
, "Volkswagen|ID.3": 580
, "BMW|iX1": 574
, "BMW|iX3": 574
, "Cupra|Born": 492
, "Hyundai|Kona Electric": 482
, "Porsche|Taycan": 481
, "Audi|Q8 e-tron": 445
, "Mercedes-Benz|EQA": 440
, "Mini|Cooper SE": 414
, "BMW|iX": 398
, "Hyundai|Ioniq 5": 385
, "Volkswagen|ID.5": 378
, "Mercedes-Benz|EQC": 367
, "Renault|Megane E-Tech": 313
, "Nissan|Leaf": 308
, "Ford|Mustang Mach-E": 279
, "Mercedes-Benz|EQB": 219
, "Volvo|EC40": 207
, "Volvo|EX40": 202
, "Jaguar|I-Pace": 197
, "Peugeot|e-2008": 191
, "MG|MG5 EV": 186
, "Audi|e-tron GT": 161
, "Fiat|500e": 144
, "Vauxhall|Corsa-e": 134
, "Mercedes-Benz|EQE": 125
, "Nissan|Ariya": 117
, "Mazda|MX-30 BEV": 115
, "Renault|Zoe": 106
, "Hyundai|Ioniq 6": 98
, "Vauxhall|Combo-e": 91
, "GWM|Ora 03": 72
, "Citroën|ë-C4": 69
, "BYD|Yuan Plus": 68
, "Peugeot|e-208": 57
, "Toyota|bZ4X": 54
, "BMW|i7": 43
, "Jeep|Avenger EV": 38
, "Volkswagen|other": 71
, "BMW|other": 69
, "Kia|other": 58
, "Tesla|other": 53
, "Audi|other": 47
, "Hyundai|other": 42
, "MG|other": 42
, "Mercedes-Benz|other": 33
, "Genesis|other": 31
, "Smart|other": 24
, "Vauxhall|other": 24
, "Renault|other": 18
, "Peugeot|other": 12
, "other": 881
});

db.insert(db.countries.UK, "2023-08", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 8335
, "Ford": 7449
, "Audi": 6084
, "Vauxhall": 5562
, "BMW": 4750
, "Kia": 4663
, "Toyota": 4099
, "Hyundai": 4082
, "Tesla": 4021
, "Škoda": 3737
, "Mercedes-Benz": 3646
, "MG": 3350
, "Peugeot": 3112
, "Nissan": 2366
, "Renault": 2042
, "Suzuki": 1794
, "Citroën": 1698
, "Volvo": 1648
, "Seat": 1644
, "Mini": 1374
, "Cupra": 1284
, "Land Rover": 1131
, "Mazda": 1110
, "Dacia": 1081
, "Porsche": 1064
, "Fiat": 959
, "Honda": 861
, "Polestar": 878
, "Jaguar": 348
, "GWM": 86
, "Jeep": 77
, "Subaru": 75
, "Genesis": 69
, "Smart": 42
, "BYD": 59
, "other": 1077
});

db.insert(db.countries.UK, "2023-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/8 (includes commercial vehicles), https://www.acea.auto/files/20230920_PRPC_2308_FINAL.pdf",
{ "Tesla|Model Y": 2328
, "Tesla|Model 3": 1592
, "MG|MG4 EV": 1331
, "Polestar|2": 878
, "Kia|Niro EV": 703
, "Audi|Q4 e-tron": 648
, "BMW|iX1": 578
, "Volkswagen|ID.4": 551
, "MG|ZS EV": 542
, "Škoda|Enyaq": 473
, "BMW|i4": 420
, "Renault|Megane E-Tech": 399
, "Volkswagen|ID.3": 380
, "Kia|EV6": 361
, "Hyundai|Ioniq 5": 344
, "BMW|iX3": 328
, "Vauxhall|Mokka-e": 325
, "Cupra|Born": 319
, "Hyundai|Kona Electric": 310
, "Mercedes-Benz|EQA": 297
, "BMW|iX": 284
, "Porsche|Taycan": 256
, "Mercedes-Benz|EQC": 228
, "Audi|Q8 e-tron": 225
, "Nissan|Leaf": 221
, "Volvo|EX40": 217
, "Mini|Cooper SE": 198
, "Mercedes-Benz|EQB": 175
, "Peugeot|e-2008": 161
, "Ford|Mustang Mach-E": 140
, "Volkswagen|ID.5": 137
, "Volvo|EC40": 103
, "Mercedes-Benz|EQE": 100
, "Jaguar|I-Pace": 94
, "Fiat|500e": 91
, "Nissan|Ariya": 87
, "GWM|Ora 03": 83
, "MG|MG5 EV": 83
, "Vauxhall|Corsa-e": 83
, "Audi|e-tron GT": 76
, "Peugeot|e-208": 76
, "Vauxhall|Combo-e": 66
, "Hyundai|Ioniq 6": 65
, "BYD|Yuan Plus": 59
, "Renault|Zoe": 54
, "Genesis|GV60": 44
, "Mazda|MX-30 BEV": 44
, "Citroën|ë-C4": 34
, "Smart|Hashtag 1": 33
, "Jeep|Avenger EV": 21
, "Tesla|other": 79
, "BMW|other": 78
, "Audi|other": 70
, "Volkswagen|other": 50
, "Kia|other": 47
, "Mercedes-Benz|other": 36
, "Renault|other": 36
, "Hyundai|other": 34
, "MG|other": 33
, "Vauxhall|other": 23
, "Fiat|other": 21
, "Peugeot|other": 14
, "Porsche|other": 12
, "Ford|other": 11
, "Škoda|other": 10
, "other": 44
});

db.insert(db.countries.UK, "2023-09", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 22313
, "Ford": 20650
, "Audi": 18783
, "Kia": 16906
, "Toyota": 16333
, "Nissan": 15794
, "Mercedes-Benz": 14486
, "Vauxhall": 13434
, "MG": 12616
, "BMW": 12522
, "Hyundai": 12388
, "Peugeot": 9331
, "Škoda": 8678
, "Renault": 8080
, "Volvo": 6617
, "Tesla": 6427
, "Land Rover": 6117
, "Mini": 5528
, "Mazda": 5507
, "Citroën": 4808
, "Suzuki": 4588
, "Seat": 4066
, "Cupra": 4062
, "Dacia": 3399
, "Honda": 3200
, "Fiat": 3116
, "Porsche": 2457
, "Jaguar": 2008
, "Polestar": 1136
, "Subaru": 552
, "Jeep": 516
, "BYD": 232
, "GWM": 209
, "Genesis": 119
, "Smart": 112
, "other": 5520
});

db.insert(db.countries.UK, "2023-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/9 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_September_2023.pdf",
{ "Tesla|Model Y": 3999
, "MG|MG4 EV": 3006
, "Mercedes-Benz|EQC": 2570
, "Tesla|Model 3": 2357
, "Audi|Q4 e-tron": 2153
, "Kia|Niro EV": 1720
, "Volkswagen|ID.4": 1459
, "Cupra|Born": 1302
, "Mercedes-Benz|EQA": 1226
, "Volkswagen|ID.3": 1190
, "Nissan|Leaf": 1171
, "Polestar|2": 1140
, "MG|ZS EV": 1131
, "Kia|EV6": 1028
, "Škoda|Enyaq": 1026
, "BMW|iX3": 991
, "BMW|iX1": 931
, "Volkswagen|ID.5": 815
, "BMW|i4": 784
, "Audi|Q8 e-tron": 775
, "Hyundai|Kona Electric": 740
, "Volvo|EX40": 722
, "Hyundai|Ioniq 5": 694
, "Mini|Cooper SE": 664
, "Renault|Megane E-Tech": 597
, "Porsche|Taycan": 578
, "Ford|Mustang Mach-E": 575
, "Vauxhall|Corsa-e": 569
, "BMW|iX": 568
, "Citroën|ë-C4": 552
, "Mercedes-Benz|EQB": 479
, "Fiat|500e": 417
, "Peugeot|e-208": 415
, "Jaguar|I-Pace": 391
, "Mercedes-Benz|EQE": 368
, "Vauxhall|Mokka-e": 362
, "Volvo|EC40": 328
, "Peugeot|e-2008": 302
, "Audi|e-tron GT": 247
, "Hyundai|Ioniq 6": 228
, "MG|MG5 EV": 207
, "GWM|Ora 03": 200
, "Vauxhall|Combo-e": 182
, "BYD|Yuan Plus": 177
, "Mazda|MX-30 BEV": 148
, "Nissan|Ariya": 133
, "BMW|i5": 107
, "Jeep|Avenger EV": 95
, "Mercedes-Benz|EQS": 92
, "Renault|Zoe": 92
, "BMW|other": 117
, "Smart|other": 112
, "Kia|other": 110
, "Volkswagen|other": 84
, "Genesis|other": 76
, "Subaru|other": 65
, "Peugeot|other": 63
, "Audi|other": 59
, "Toyota|other": 52
, "Tesla|other": 44
, "MG|other": 39
, "Hyundai|other": 36
, "Mercedes-Benz|other": 33
, "Honda|other": 32
, "Renault|other": 29
, "other": 2369
});

db.insert(db.countries.UK, "2023-10", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13058
, "Audi": 12598
, "Ford": 12119
, "BMW": 11188
, "Vauxhall": 9266
, "Toyota": 8616
, "Peugeot": 7106
, "Kia": 6831
, "Hyundai": 6156
, "MG": 6079
, "Mercedes-Benz": 5900
, "Škoda": 5670
, "Nissan": 5036
, "Land Rover": 4582
, "Mini": 4512
, "Volvo": 4489
, "Renault": 4347
, "Tesla": 2677
, "Cupra": 2523
, "Citroën": 2463
, "Seat": 2339
, "Porsche": 1996
, "Suzuki": 1962
, "Dacia": 1843
, "Mazda": 1842
, "Honda": 1777
, "Jaguar": 1449
, "Fiat": 1070
, "Polestar": 744
, "Jeep": 261
, "BYD": 183
, "Genesis": 149
, "Smart": 117
, "GWM": 92
, "Subaru": 89
, "other": 2400
});

db.insert(db.countries.UK, "2023-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/10 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_October_2023.pdf",
{ "Tesla|Model Y": 1913
, "Audi|Q4 e-tron": 1829
, "MG|MG4 EV": 1446
, "Volvo|EX40": 985
, "BMW|i4": 937
, "Tesla|Model 3": 755
, "Polestar|2": 743
, "BMW|iX1": 691
, "BMW|iX3": 677
, "Mini|Cooper SE": 655
, "Porsche|Taycan": 614
, "Volkswagen|ID.4": 608
, "Cupra|Born": 599
, "Mercedes-Benz|EQA": 590
, "Kia|Niro EV": 586
, "MG|ZS EV": 584
, "Škoda|Enyaq": 549
, "Audi|Q8 e-tron": 508
, "Volkswagen|ID.3": 446
, "Hyundai|Ioniq 5": 416
, "Nissan|Leaf": 410
, "Mercedes-Benz|EQC": 407
, "Mercedes-Benz|EQB": 373
, "Hyundai|Kona Electric": 346
, "Renault|Megane E-Tech": 324
, "Kia|EV6": 293
, "Volvo|EC40": 291
, "BMW|i5": 240
, "Ford|Mustang Mach-E": 229
, "Hyundai|Ioniq 6": 206
, "Vauxhall|Mokka-e": 203
, "Jaguar|I-Pace": 180
, "Volkswagen|ID.5": 166
, "Nissan|Ariya": 163
, "Audi|e-tron GT": 156
, "Mercedes-Benz|EQE": 147
, "BYD|Yuan Plus": 144
, "BMW|iX": 132
, "Jeep|Avenger EV": 130
, "Vauxhall|Corsa-e": 127
, "Peugeot|e-2008": 118
, "Honda|e:Ny1": 114
, "MG|MG5 EV": 114
, "Genesis|GV70": 97
, "GWM|Ora 03": 90
, "Fiat|500e": 85
, "Smart|Hashtag 1": 73
, "Peugeot|e-208": 69
, "Vauxhall|Combo-e": 59
, "Mercedes-Benz|EQS": 56
, "BMW|other": 85
, "Renault|other": 70
, "Audi|other": 67
, "Citroën|other": 54
, "Kia|other": 49
, "Mercedes-Benz|other": 47
, "Volkswagen|other": 40
, "Mazda|other": 37
, "BYD|other": 35
, "Subaru|other": 31
, "MG|other": 30
, "Peugeot|other": 30
, "Hyundai|other": 26
, "Genesis|other": 23
, "Vauxhall|other": 19
, "Smart|other": 17
, "Tesla|other": 17
, "Volvo|other": 17
, "Nissan|other": 16
, "Honda|other": 14
, "Toyota|other": 13
, "Škoda|other": 13
, "other": 1520
});

db.insert(db.countries.UK, "2023-11", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13433
, "BMW": 11989
, "Ford": 11349
, "Audi": 11205
, "Vauxhall": 9204
, "Toyota": 8550
, "Mercedes-Benz": 7688
, "Kia": 7396
, "Nissan": 7156
, "MG": 6785
, "Hyundai": 6422
, "Peugeot": 5831
, "Škoda": 5814
, "Renault": 4914
, "Mini": 4768
, "Land Rover": 4712
, "Volvo": 4301
, "Citroën": 2504
, "Porsche": 2249
, "Cupra": 2185
, "Suzuki": 2170
, "Dacia": 2154
, "Seat": 2062
, "Mazda": 2034
, "Honda": 1786
, "Tesla": 1648
, "Jaguar": 1539
, "Fiat": 653
, "Polestar": 579
, "BYD": 267
, "Jeep": 231
, "Smart": 185
, "Subaru": 181
, "Chevrolet": 102
, "Genesis": 102
, "GWM": 94
, "other": 2283
});

db.insert(db.countries.UK, "2023-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/11 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_November_2023.pdf",
{ "Audi|Q4 e-tron": 1981
, "MG|MG4 EV": 1521
, "Volvo|EX40": 1013
, "Tesla|Model Y": 973
, "Porsche|Taycan": 924
, "BMW|iX1": 870
, "BMW|i4": 844
, "Audi|Q8 e-tron": 797
, "Kia|Niro EV": 671
, "BMW|iX3": 668
, "Mercedes-Benz|EQA": 608
, "Mini|Cooper SE": 602
, "Tesla|Model 3": 594
, "Cupra|Born": 579
, "Polestar|2": 579
, "Mercedes-Benz|EQB": 553
, "MG|ZS EV": 537
, "Mercedes-Benz|EQC": 506
, "Škoda|Enyaq": 478
, "Volkswagen|ID.4": 446
, "BMW|iX": 392
, "Volkswagen|ID.3": 380
, "Kia|EV6": 361
, "Hyundai|Ioniq 5": 360
, "Hyundai|Kona Electric": 352
, "Nissan|Leaf": 291
, "Renault|Megane E-Tech": 274
, "Mercedes-Benz|EQE": 265
, "Volvo|EC40": 256
, "Volkswagen|ID.5": 223
, "BYD|Yuan Plus": 213
, "Audi|e-tron GT": 207
, "Nissan|Ariya": 201
, "Hyundai|Ioniq 6": 181
, "Vauxhall|Mokka-e": 180
, "Peugeot|e-208": 159
, "Jaguar|I-Pace": 146
, "MG|MG5 EV": 142
, "Ford|Mustang Mach-E": 136
, "Smart|Hashtag 1": 125
, "Peugeot|e-2008": 110
, "GWM|Ora 03": 92
, "Vauxhall|Corsa-e": 89
, "Subaru|Solterra": 84
, "Citroën|ë-C4": 82
, "BMW|i5": 72
, "Mazda|MX-30 BEV": 71
, "Jeep|Avenger EV": 68
, "Vauxhall|Combo-e": 65
, "Fiat|500e": 60
, "Mercedes-Benz|other": 119
, "BMW|other": 91
, "Tesla|other": 89
, "Audi|other": 88
, "Genesis|other": 75
, "MG|other": 74
, "Kia|other": 68
, "Renault|other": 65
, "Volkswagen|other": 57
, "Hyundai|other": 50
, "Smart|other": 46
, "Volvo|other": 45
, "BYD|other": 44
, "Peugeot|other": 42
, "Vauxhall|other": 39
, "Porsche|other": 27
, "Škoda|other": 19
, "Honda|other": 16
, "other": 1924
});

db.insert(db.countries.UK, "2023-12", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 12263
, "BMW": 10342
, "Audi": 9614
, "Ford": 8829
, "Nissan": 7712
, "Toyota": 7675
, "Mercedes-Benz": 7293
, "MG": 6765
, "Vauxhall": 5994
, "Tesla": 5517
, "Škoda": 5297
, "Mini": 5279
, "Hyundai": 5234
, "Land Rover": 4519
, "Volvo": 4227
, "Kia": 3585
, "Seat": 3436
, "Dacia": 3198
, "Renault": 3164
, "Peugeot": 3093
, "Cupra": 2275
, "Porsche": 2244
, "Citroën": 2242
, "Mazda": 1760
, "Suzuki": 1648
, "Honda": 1341
, "Polestar": 1102
, "Jaguar": 1068
, "Fiat": 643
, "Subaru": 318
, "BYD": 263
, "Jeep": 201
, "Smart": 129
, "Genesis": 72
, "GWM": 57
, "other": 2693
});

db.insert(db.countries.UK, "2023-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/12 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_full_year_2023.pdf",
{ "Tesla|Model Y": 4801
, "Audi|Q4 e-tron": 1347
, "MG|MG4 EV": 1233
, "Mini|Cooper SE": 1190
, "Polestar|2": 1101
, "Mercedes-Benz|EQC": 1096
, "BMW|iX1": 1073
, "Škoda|Enyaq": 1006
, "BMW|i4": 874
, "Porsche|Taycan": 868
, "BMW|iX": 802
, "Volvo|EX40": 695
, "Cupra|Born": 682
, "Tesla|Model 3": 677
, "BMW|iX3": 661
, "Volkswagen|ID.3": 620
, "Audi|Q8 e-tron": 535
, "Nissan|Leaf": 453
, "Volkswagen|ID.4": 449
, "MG|ZS EV": 405
, "Mercedes-Benz|EQA": 403
, "Mercedes-Benz|EQB": 364
, "Volkswagen|ID.5": 296
, "Kia|Niro EV": 290
, "Audi|e-tron GT": 287
, "Hyundai|Kona Electric": 243
, "Hyundai|Ioniq 5": 239
, "BYD|Yuan Plus": 232
, "Mercedes-Benz|EQE": 227
, "Volvo|EC40": 203
, "BMW|i5": 187
, "Nissan|Ariya": 181
, "Kia|EV6": 153
, "MG|MG5 EV": 148
, "Jaguar|I-Pace": 142
, "Renault|Megane E-Tech": 140
, "Ford|Mustang Mach-E": 128
, "Fiat|500e": 125
, "Honda|e:Ny1": 120
, "Hyundai|Ioniq 6": 119
, "Vauxhall|Mokka-e": 106
, "Subaru|Solterra": 103
, "Smart|Hashtag 1": 97
, "Peugeot|e-2008": 73
, "GWM|Ora 03": 56
, "Mercedes-Benz|EQS": 54
, "Jeep|Avenger EV": 47
, "Mercedes-Benz|eCitan": 45
, "Vauxhall|Combo-e": 43
, "Citroën|ë-C4": 36
, "Vauxhall|Corsa-e": 36
, "Volkswagen|other": 58
, "BMW|other": 51
, "Genesis|other": 50
, "Audi|other": 46
, "Tesla|other": 42
, "Peugeot|other": 39
, "BYD|other": 28
, "Mazda|other": 25
, "Smart|other": 24
, "Volvo|other": 23
, "Renault|other": 21
, "MG|other": 18
, "Honda|other": 15
, "Mercedes-Benz|other": 15
, "other": 1895
});

db.insert(db.countries.UK, "2024-01", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 11460
, "BMW": 10795
, "Kia": 10207
, "Ford": 9696
, "Audi": 8832
, "Nissan": 8639
, "Vauxhall": 8327
, "MG": 6711
, "Hyundai": 6191
, "Toyota": 6111
, "Peugeot": 6033
, "Mercedes-Benz": 5495
, "Škoda": 4931
, "Land Rover": 4679
, "Volvo": 3881
, "Renault": 3818
, "Mini": 3744
, "Seat": 2731
, "Honda": 2411
, "Citroën": 2339
, "Dacia": 2087
, "Mazda": 1965
, "Cupra": 1818
, "Tesla": 1581
, "Suzuki": 1546
, "Jaguar": 1331
, "Porsche": 1192
, "Fiat": 1097
, "Jeep": 512
, "BYD": 248
, "Polestar": 236
, "Subaru": 193
, "Smart": 147
, "Genesis": 62
, "GWM": 56
, "other": 1774
});

db.insert(db.countries.UK, "2024-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/1 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations-January_2024.pdf",
{ "MG|MG4 EV": 1158
, "Toyota|bZ4X": 1064
, "Audi|Q4 e-tron": 957
, "Tesla|Model Y": 794
, "Tesla|Model 3": 781
, "Kia|Niro EV": 682
, "BMW|i4": 616
, "Vauxhall|Mokka-e": 583
, "BMW|iX": 578
, "Škoda|Enyaq": 566
, "Volvo|EX40": 513
, "Mercedes-Benz|EQB": 481
, "Renault|Megane E-Tech": 480
, "Peugeot|e-208": 460
, "Mercedes-Benz|EQC": 450
, "Kia|EV6": 425
, "Audi|Q8 e-tron": 390
, "Cupra|Born": 362
, "Nissan|Ariya": 343
, "Kia|EV9": 341
, "MG|ZS EV": 331
, "Hyundai|Kona Electric": 330
, "Nissan|Leaf": 326
, "Mercedes-Benz|EQA": 297
, "Jaguar|I-Pace": 281
, "Vauxhall|Corsa-e": 275
, "Hyundai|Ioniq 5": 266
, "BMW|iX1": 252
, "Polestar|2": 235
, "Ford|Mustang Mach-E": 233
, "Volkswagen|ID.3": 227
, "Volvo|EX30": 227
, "Mini|Cooper SE": 219
, "Honda|e:Ny1": 217
, "Mercedes-Benz|EQE": 213
, "BYD|Yuan Plus": 204
, "Peugeot|e-2008": 202
, "Porsche|Taycan": 198
, "BMW|i5": 184
, "Volvo|EC40": 177
, "Volkswagen|ID.4": 175
, "Volkswagen|ID.7": 144
, "Hyundai|Ioniq 6": 141
, "BMW|iX3": 136
, "Citroën|ë-C4": 118
, "Smart|Hashtag 1": 114
, "Peugeot|e-308": 109
, "Jeep|Avenger EV": 107
, "Mazda|MX-30 BEV": 94
, "MG|MG5 EV": 91
, "Audi|other": 111
, "Volkswagen|other": 100
, "Fiat|other": 89
, "Vauxhall|other": 89
, "BMW|other": 61
, "Mercedes-Benz|other": 58
, "GWM|other": 54
, "Kia|other": 52
, "Renault|other": 50
, "Toyota|other": 40
, "BYD|other": 35
, "Genesis|other": 29
, "MG|other": 29
, "Subaru|other": 29
, "Hyundai|other": 28
, "Smart|other": 22
, "Peugeot|other": 20
, "Honda|other": 18
, "Tesla|other": 16
, "Volvo|other": 15
, "Nissan|other": 14
, "Porsche|other": 13
, "other": 1816
});

db.insert(db.countries.UK, "2024-02", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 7724
, "BMW": 5911
, "Ford": 5845
, "Audi": 5176
, "Vauxhall": 4784
, "Kia": 4399
, "Nissan": 4205
, "Hyundai": 3719
, "Škoda": 3538
, "MG": 3493
, "Peugeot": 3329
, "Mercedes-Benz": 3254
, "Toyota": 3196
, "Tesla": 3192
, "Seat": 2378
, "Mini": 2366
, "Volvo": 2216
, "Citroën": 2165
, "Renault": 2063
, "Honda": 1852
, "Land Rover": 1517
, "Dacia": 1245
, "Cupra": 1183
, "Suzuki": 1081
, "Mazda": 874
, "Fiat": 775
, "Jaguar": 738
, "Porsche": 528
, "Jeep": 368
, "BYD": 271
, "Polestar": 259
, "Smart": 78
, "Subaru": 65
, "GWM": 56
, "Genesis": 15
, "other": 1028
});

db.insert(db.countries.UK, "2024-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/2 (includes commercial vehicles), https://www.acea.auto/files/Press_release_car_registrations_February_2024.pdf",
{ "Tesla|Model Y": 1768
, "Tesla|Model 3": 1402
, "BMW|i4": 850
, "MG|MG4 EV": 810
, "Audi|Q4 e-tron": 601
, "Volvo|EX40": 456
, "Toyota|bZ4X": 365
, "Škoda|Enyaq": 351
, "BMW|iX": 338
, "Vauxhall|Mokka-e": 314
, "MG|ZS EV": 292
, "Hyundai|Kona Electric": 283
, "Mercedes-Benz|EQB": 268
, "Polestar|2": 259
, "Kia|Niro EV": 253
, "Nissan|Ariya": 242
, "Kia|EV6": 221
, "BYD|Yuan Plus": 211
, "Mercedes-Benz|EQA": 206
, "Cupra|Born": 202
, "Mercedes-Benz|EQE": 198
, "Jeep|Avenger EV": 192
, "Hyundai|Ioniq 5": 189
, "Audi|Q8 e-tron": 178
, "Jaguar|I-Pace": 178
, "Citroën|ë-C4": 177
, "BMW|iX1": 170
, "Peugeot|e-2008": 148
, "Ford|Mustang Mach-E": 146
, "Honda|e:Ny1": 130
, "Peugeot|e-208": 125
, "Vauxhall|Corsa-e": 125
, "BMW|iX3": 121
, "BMW|i5": 120
, "Mercedes-Benz|EQC": 106
, "Renault|Megane E-Tech": 106
, "Nissan|Leaf": 105
, "Volkswagen|ID.3": 102
, "Volkswagen|ID.4": 91
, "Volvo|EC40": 89
, "Fiat|600e": 86
, "Mini|Cooper SE": 86
, "Kia|EV9": 85
, "Porsche|Taycan": 85
, "Volkswagen|ID.5": 77
, "Volvo|EX30": 67
, "Hyundai|Ioniq 6": 66
, "MG|MG5 EV": 66
, "Smart|Hashtag 1": 57
, "GWM|Ora 03": 56
, "Fiat|other": 77
, "Vauxhall|other": 73
, "Mercedes-Benz|other": 68
, "BMW|other": 65
, "Peugeot|other": 64
, "Audi|other": 54
, "BYD|other": 52
, "Mazda|other": 44
, "Tesla|other": 29
, "Volkswagen|other": 29
, "Renault|other": 27
, "Subaru|other": 20
, "Toyota|other": 20
, "Hyundai|other": 18
, "MG|other": 11
, "Smart|other": 10
, "Volvo|other": 10
, "Genesis|other": 8
, "other": 1093
});
