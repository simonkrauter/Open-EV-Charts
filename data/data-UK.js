// Data sets for car sales in the United Kingdom

"use strict";

// https://www.smmt.co.uk/vehicle-data/car-registrations/

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
, "other": 10
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
, "other": 17
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
, "other": 7
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
, "other": 7
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
, "other": 10
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
, "other": 5
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
, "other": 5
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
, "other": 5
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
, "MG|5 EV": 273
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
, "MG|5 EV": 874
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
, "MG|5 EV": 852
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
, "Chevrolet": 60
, "other": 9843
});

db.insert(db.countries.UK, "2021-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 7379
, "Volkswagen|ID.3": 3978
, "Kia|Niro EV": 3228
, "Audi|Q8 e-tron": 2212
, "Hyundai|Ioniq Electric": 2187
, "Mercedes-Benz|EQA": 2058
, "MG|5 EV": 1849
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
, "other": 6130
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
, "MG|5 EV": 1498
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
, "Chevrolet": 66
, "other": 7771
});

db.insert(db.countries.UK, "2022-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 7797
, "Tesla|Model Y": 7779
, "Kia|Niro EV": 3849
, "Volkswagen|ID.3": 2679
, "Mercedes-Benz|EQC": 2181
, "Hyundai|Kona Electric": 1959
, "MG|5 EV": 1955
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
, "Mitsubishi": 81
, "Chevrolet": 59
, "other": 6890
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
, "MG|5 EV": 1402
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
, "Citroën|other": 52
, "Peugeot|other": 47
, "Vauxhall|other": 41
, "Nissan|other": 35
, "other": 61
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
, "Smart": 221
, "Mitsubishi": 92
, "Chevrolet": 54
, "other": 7002
});

db.insert(db.countries.UK, "2022-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model Y": 8644
, "Kia|Niro EV": 2475
, "Nissan|Leaf": 2415
, "Tesla|Model 3": 2284
, "Hyundai|Ioniq Electric": 2164
, "Volkswagen|ID.3": 2160
, "MG|5 EV": 2030
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
, "MG|4 EV": 521
, "Volvo|EX40": 418
, "Mercedes-Benz|EQS": 290
, "Volvo|EC40": 273
, "Mercedes-Benz|EQE": 239
, "Kia|Soul EV": 234
, "Mazda|MX-30 BEV": 198
, "Smart|Forfour ED": 157
, "Honda|e": 101
, "Citroën|ë-Berlingo Electric": 93
, "Smart|Fortwo ED": 63
, "Renault|Megane E-Tech": 50
, "Vauxhall|Combo-e": 47
, "Vauxhall|other": 42
, "Peugeot|other": 33
, "Mercedes-Benz|other": 30
, "other": 273
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
, "Smart": 187
, "Chevrolet": 97
, "Mitsubishi": 70
, "GWM": 68
, "other": 8088
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
, "MG|4 EV": 2470
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
, "MG|5 EV": 1546
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
, "other": 479
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
, "GWM": 214
, "Mitsubishi": 80
, "Smart": 72
, "other": 7672
});

db.insert(db.countries.UK, "2023-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/media/6573411b049516000d49bf1f/df_VEH0160_UK.csv",
{ "Tesla|Model Y": 9952
, "MG|4 EV": 5235
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
, "MG|5 EV": 742
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
, "Citroën|other": 55
, "Honda|other": 54
, "Subaru|other": 50
, "Mercedes-Benz|other": 47
, "other": 340
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
, "Subaru": 81
, "Smart": 32
, "BYD": 29
, "other": 2540
});

db.insert(db.countries.UK, "2023-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/4 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 1380
, "MG|4 EV": 1257
, "Polestar|2": 1183
, "Volkswagen|ID.3": 901
, "Audi|Q4 e-tron": 851
, "Hyundai|Kona Electric": 727
, "Vauxhall|Mokka-e": 671
, "Kia|Niro EV": 628
, "Volkswagen|ID.4": 540
, "BMW|i4": 538
, "Volvo|EX40": 488
, "Škoda|Enyaq": 484
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
, "MG|5 EV": 110
, "Audi|e-tron GT": 84
, "Mercedes-Benz|EQE": 80
, "Renault|Zoe": 56
, "Toyota|bZ4X": 53
, "BMW|i7": 36
, "Volkswagen|e-up!": 34
, "Mazda|MX-30 BEV": 33
, "Smart|Fortwo ED": 27
, "BYD|Yuan Plus": 24
, "Hyundai|other": 63
, "Vauxhall|other": 55
, "Mercedes-Benz|other": 47
, "MG|other": 41
, "BMW|other": 34
, "Citroën|other": 32
, "Kia|other": 30
, "Volkswagen|other": 29
, "Audi|other": 22
, "Peugeot|other": 22
, "Honda|other": 21
, "Nissan|other": 16
, "Renault|other": 14
, "other": 2439
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
, "Land Rover": 3391
, "Mini": 3099
, "Tesla": 3099
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
, "Jeep": 98
, "GWM": 33
, "BYD": 21
, "Smart": 16
, "other": 3137
});

db.insert(db.countries.UK, "2023-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/5 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 2253
, "MG|4 EV": 1807
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
, "Cupra|Born": 443
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
, "MG|5 EV": 163
, "Fiat|500e": 157
, "Ford|Mustang Mach-E": 146
, "Renault|Zoe": 142
, "Citroën|ë-C4": 133
, "Audi|e-tron GT": 107
, "Peugeot|e-208": 97
, "Hyundai|Ioniq 6": 87
, "Mercedes-Benz|EQE": 59
, "Vauxhall|Combo-e": 58
, "Mazda|MX-30 BEV": 55
, "Volkswagen|e-up!": 41
, "BMW|i7": 33
, "GWM|Ora 03": 31
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
, "other": 2665
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
, "Smart": 49
, "GWM": 38
, "other": 4146
});

db.insert(db.countries.UK, "2023-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/6 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 5101
, "MG|4 EV": 2113
, "Tesla|Model 3": 1828
, "Polestar|2": 1117
, "Vauxhall|Mokka-e": 1077
, "Volkswagen|ID.4": 1002
, "Audi|Q4 e-tron": 982
, "Volkswagen|ID.3": 910
, "BMW|i4": 901
, "Kia|EV6": 686
, "BMW|iX1": 683
, "Hyundai|Kona Electric": 630
, "Škoda|Enyaq": 621
, "Cupra|Born": 618
, "Porsche|Taycan": 580
, "MG|ZS EV": 561
, "Kia|Niro EV": 557
, "Mercedes-Benz|EQA": 514
, "Nissan|Leaf": 481
, "Hyundai|Ioniq 5": 479
, "Volkswagen|ID.5": 463
, "BMW|iX3": 450
, "Volvo|EX40": 450
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
, "MG|5 EV": 167
, "Mercedes-Benz|EQE": 156
, "Audi|e-tron GT": 143
, "Peugeot|e-208": 112
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
, "Vauxhall|other": 58
, "Kia|other": 57
, "Audi|other": 54
, "Volkswagen|other": 53
, "Volvo|other": 43
, "Peugeot|other": 35
, "Smart|other": 32
, "Mercedes-Benz|other": 27
, "Renault|other": 21
, "Škoda|other": 17
, "BYD|other": 16
, "other": 2679
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
, "Smart": 28
, "other": 2418
});

db.insert(db.countries.UK, "2023-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/7 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 2234
, "MG|4 EV": 1910
, "Polestar|2": 1235
, "Volkswagen|ID.4": 1013
, "Kia|Niro EV": 876
, "Audi|Q4 e-tron": 851
, "Tesla|Model 3": 787
, "Škoda|Enyaq": 660
, "Vauxhall|Mokka-e": 649
, "BMW|i4": 613
, "MG|ZS EV": 592
, "Kia|EV6": 591
, "Volkswagen|ID.3": 580
, "BMW|iX3": 575
, "BMW|iX1": 574
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
, "Audi|e-tron GT": 191
, "Peugeot|e-2008": 191
, "MG|5 EV": 186
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
, "Smart|other": 24
, "Vauxhall|other": 24
, "Renault|other": 18
, "Peugeot|other": 12
, "other": 871
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
, "Polestar": 874
, "Honda": 861
, "Jaguar": 348
, "GWM": 86
, "Jeep": 77
, "Subaru": 75
, "BYD": 58
, "Smart": 42
, "other": 1151
});

db.insert(db.countries.UK, "2023-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/8 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 2317
, "Tesla|Model 3": 1585
, "MG|4 EV": 1324
, "Polestar|2": 874
, "Kia|Niro EV": 699
, "Audi|Q4 e-tron": 645
, "BMW|iX1": 575
, "Volkswagen|ID.4": 549
, "MG|ZS EV": 539
, "Škoda|Enyaq": 471
, "BMW|i4": 418
, "Renault|Megane E-Tech": 398
, "Volkswagen|ID.3": 378
, "Kia|EV6": 359
, "Hyundai|Ioniq 5": 343
, "BMW|iX3": 327
, "Vauxhall|Mokka-e": 324
, "Cupra|Born": 319
, "Hyundai|Kona Electric": 308
, "Mercedes-Benz|EQA": 295
, "BMW|iX": 283
, "Porsche|Taycan": 255
, "Mercedes-Benz|EQC": 227
, "Audi|Q8 e-tron": 224
, "Nissan|Leaf": 220
, "Volvo|EX40": 216
, "Mini|Cooper SE": 197
, "Mercedes-Benz|EQB": 174
, "Peugeot|e-2008": 161
, "Ford|Mustang Mach-E": 139
, "Volkswagen|ID.5": 136
, "Vauxhall|Astra Electric": 117
, "Volvo|EC40": 103
, "Mercedes-Benz|EQE": 100
, "Jaguar|I-Pace": 94
, "Fiat|500e": 91
, "Audi|e-tron GT": 88
, "Nissan|Ariya": 87
, "GWM|Ora 03": 83
, "MG|5 EV": 83
, "Vauxhall|Corsa-e": 83
, "Peugeot|e-208": 75
, "Vauxhall|Combo-e": 65
, "Hyundai|Ioniq 6": 64
, "BYD|Yuan Plus": 58
, "Renault|Zoe": 54
, "Mazda|MX-30 BEV": 44
, "Citroën|ë-C4": 34
, "Smart|Hashtag 1": 33
, "Jeep|Avenger EV": 21
, "Tesla|other": 79
, "BMW|other": 78
, "Audi|other": 69
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
, "other": 34
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
, "Smart": 112
, "other": 5639
});

db.insert(db.countries.UK, "2023-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/9 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 3999
, "MG|4 EV": 3006
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
, "Audi|e-tron GT": 276
, "Hyundai|Ioniq 6": 228
, "MG|5 EV": 207
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
, "Subaru|other": 65
, "Peugeot|other": 63
, "Audi|other": 59
, "Toyota|other": 52
, "Vauxhall|other": 51
, "Tesla|other": 44
, "MG|other": 39
, "Hyundai|other": 36
, "Mercedes-Benz|other": 33
, "Honda|other": 32
, "Renault|other": 29
, "other": 2365
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
, "Smart": 117
, "GWM": 92
, "Subaru": 89
, "other": 2549
});

db.insert(db.countries.UK, "2023-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/10 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 1913
, "Audi|Q4 e-tron": 1829
, "MG|4 EV": 1446
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
, "Ford|Mustang Mach-E": 240
, "Hyundai|Ioniq 6": 206
, "Vauxhall|Mokka-e": 203
, "Jaguar|I-Pace": 180
, "Audi|e-tron GT": 166
, "Volkswagen|ID.5": 166
, "Nissan|Ariya": 163
, "Mercedes-Benz|EQE": 147
, "BYD|Yuan Plus": 144
, "BMW|iX": 132
, "Jeep|Avenger EV": 130
, "Vauxhall|Corsa-e": 127
, "Peugeot|e-2008": 118
, "Honda|e:Ny1": 114
, "MG|5 EV": 114
, "GWM|Ora 03": 90
, "Fiat|500e": 85
, "Smart|Hashtag 1": 73
, "Peugeot|e-208": 69
, "Vauxhall|Combo-e": 59
, "Mercedes-Benz|EQS": 56
, "Renault|Zoe": 54
, "BMW|other": 85
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
, "Vauxhall|other": 28
, "Hyundai|other": 26
, "Smart|other": 17
, "Tesla|other": 17
, "Volvo|other": 17
, "Nissan|other": 16
, "Renault|other": 16
, "Honda|other": 14
, "Toyota|other": 13
, "Škoda|other": 13
, "other": 1610
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
, "GWM": 94
, "other": 2385
});

db.insert(db.countries.UK, "2023-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/11 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Audi|Q4 e-tron": 1981
, "MG|4 EV": 1521
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
, "Audi|e-tron GT": 226
, "Volkswagen|ID.5": 223
, "BYD|Yuan Plus": 213
, "Nissan|Ariya": 201
, "Hyundai|Ioniq 6": 181
, "Vauxhall|Mokka-e": 180
, "Peugeot|e-208": 159
, "Jaguar|I-Pace": 146
, "MG|5 EV": 142
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
, "MG|other": 74
, "Kia|other": 68
, "Renault|other": 65
, "Volkswagen|other": 57
, "Hyundai|other": 50
, "Vauxhall|other": 49
, "Smart|other": 46
, "Volvo|other": 45
, "BYD|other": 44
, "Peugeot|other": 42
, "Porsche|other": 27
, "Škoda|other": 19
, "Honda|other": 16
, "other": 1970
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
, "GWM": 57
, "other": 2765
});

db.insert(db.countries.UK, "2023-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2023/12 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 4801
, "Audi|Q4 e-tron": 1347
, "MG|4 EV": 1233
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
, "Audi|Q8 e-tron": 536
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
, "MG|5 EV": 148
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
, "Audi|other": 45
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
, "other": 1945
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
, "GWM": 56
, "other": 1836
});

db.insert(db.countries.UK, "2024-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/1 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "MG|4 EV": 1158
, "Toyota|bZ4X": 1066
, "Audi|Q4 e-tron": 957
, "Tesla|Model Y": 794
, "Tesla|Model 3": 781
, "Kia|Niro EV": 683
, "BMW|i4": 616
, "Vauxhall|Mokka-e": 584
, "BMW|iX": 578
, "Škoda|Enyaq": 567
, "Volvo|EX40": 513
, "Mercedes-Benz|EQB": 481
, "Renault|Megane E-Tech": 481
, "Peugeot|e-208": 460
, "Mercedes-Benz|EQC": 450
, "Kia|EV6": 425
, "Audi|Q8 e-tron": 390
, "Cupra|Born": 364
, "Nissan|Ariya": 343
, "Kia|EV9": 341
, "Hyundai|Kona Electric": 333
, "MG|ZS EV": 331
, "Nissan|Leaf": 326
, "Mercedes-Benz|EQA": 297
, "Jaguar|I-Pace": 282
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
, "Porsche|Taycan": 200
, "BMW|i5": 184
, "Volvo|EC40": 178
, "Volkswagen|ID.4": 175
, "Volkswagen|ID.7": 144
, "Hyundai|Ioniq 6": 141
, "BMW|iX3": 136
, "Citroën|ë-C4": 118
, "Smart|Hashtag 1": 114
, "Peugeot|e-308": 109
, "Jeep|Avenger EV": 107
, "Mazda|MX-30 BEV": 94
, "MG|5 EV": 91
, "Vauxhall|other": 141
, "Audi|other": 111
, "Volkswagen|other": 100
, "Fiat|other": 89
, "BMW|other": 61
, "Mercedes-Benz|other": 58
, "GWM|other": 54
, "Kia|other": 51
, "Renault|other": 50
, "Toyota|other": 38
, "BYD|other": 35
, "MG|other": 29
, "Subaru|other": 29
, "Hyundai|other": 25
, "Smart|other": 22
, "Peugeot|other": 20
, "Honda|other": 18
, "Tesla|other": 16
, "Nissan|other": 14
, "Volvo|other": 14
, "Porsche|other": 11
, "other": 1787
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
, "other": 1043
});

db.insert(db.countries.UK, "2024-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/2 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 1768
, "Tesla|Model 3": 1402
, "BMW|i4": 850
, "MG|4 EV": 810
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
, "Ford|Mustang Mach-E": 147
, "Honda|e:Ny1": 130
, "Peugeot|e-208": 125
, "Vauxhall|Corsa-e": 125
, "BMW|iX3": 121
, "BMW|i5": 120
, "Renault|Megane E-Tech": 107
, "Mercedes-Benz|EQC": 106
, "Nissan|Leaf": 105
, "Volkswagen|ID.3": 102
, "Volkswagen|ID.4": 91
, "Volvo|EC40": 89
, "Fiat|600e": 86
, "Mini|Cooper SE": 86
, "Kia|EV9": 85
, "Porsche|Taycan": 85
, "Vauxhall|Astra Electric": 82
, "Volkswagen|ID.5": 77
, "Volvo|EX30": 67
, "Hyundai|Ioniq 6": 66
, "MG|5 EV": 66
, "Smart|Hashtag 1": 57
, "Fiat|other": 77
, "Vauxhall|other": 73
, "Mercedes-Benz|other": 68
, "BMW|other": 65
, "Peugeot|other": 64
, "Audi|other": 56
, "GWM|other": 56
, "BYD|other": 52
, "Mazda|other": 44
, "Renault|other": 38
, "Tesla|other": 29
, "Volkswagen|other": 29
, "Subaru|other": 20
, "Toyota|other": 20
, "Hyundai|other": 18
, "MG|other": 11
, "Smart|other": 10
, "Volvo|other": 10
, "other": 1004
});

db.insert(db.countries.UK, "2024-03", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 22147
, "Nissan": 20559
, "BMW": 20065
, "Mercedes-Benz": 19794
, "Kia": 18478
, "Audi": 18454
, "Ford": 17026
, "Toyota": 16886
, "Vauxhall": 15553
, "Hyundai": 13570
, "MG": 12934
, "Land Rover": 12376
, "Peugeot": 11944
, "Škoda": 9982
, "Renault": 8783
, "Honda": 7919
, "Volvo": 7526
, "Tesla": 6995
, "Mini": 6484
, "Seat": 6041
, "Suzuki": 5049
, "Dacia": 4993
, "Citroën": 4870
, "Jaguar": 4690
, "Mazda": 4628
, "Cupra": 3982
, "Fiat": 3387
, "Porsche": 3128
, "Jeep": 1609
, "Polestar": 803
, "BYD": 759
, "Subaru": 641
, "GWM": 310
, "Smart": 306
, "other": 5115
});

db.insert(db.countries.UK, "2024-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/3 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 5592
, "MG|4 EV": 2015
, "Audi|Q4 e-tron": 1960
, "BMW|i4": 1553
, "Toyota|bZ4X": 1533
, "Volvo|EX30": 1404
, "Tesla|Model 3": 1383
, "Honda|e:Ny1": 1266
, "Mercedes-Benz|EQA": 1225
, "Hyundai|Kona Electric": 1158
, "Kia|Niro EV": 1155
, "Mercedes-Benz|EQB": 1053
, "Jaguar|I-Pace": 1027
, "BMW|i5": 1007
, "Nissan|Leaf": 979
, "Vauxhall|Mokka-e": 974
, "Škoda|Enyaq": 958
, "Volvo|EX40": 954
, "Kia|EV6": 823
, "Nissan|Ariya": 813
, "Polestar|2": 802
, "BMW|iX1": 750
, "Vauxhall|Corsa-e": 741
, "Cupra|Born": 709
, "Peugeot|e-2008": 687
, "Peugeot|e-208": 672
, "MG|ZS EV": 625
, "Hyundai|Ioniq 5": 622
, "Volkswagen|ID.4": 618
, "BMW|iX": 595
, "Audi|Q8 e-tron": 589
, "Ford|Mustang Mach-E": 544
, "Mercedes-Benz|EQE": 543
, "Jeep|Avenger EV": 475
, "Porsche|Taycan": 425
, "BMW|iX3": 413
, "BYD|Yuan Plus": 407
, "Renault|Megane E-Tech": 400
, "Citroën|ë-C4": 391
, "Hyundai|Ioniq 6": 381
, "Volkswagen|ID.3": 371
, "GWM|Ora 03": 303
, "Kia|EV9": 294
, "Vauxhall|Astra Electric": 246
, "Volkswagen|ID.5": 245
, "Volvo|EC40": 238
, "BMW|iX2": 234
, "Audi|e-tron GT": 220
, "Smart|Hashtag 1": 199
, "BYD|Dolphin": 188
, "MG|5 EV": 188
, "Mercedes-Benz|other": 267
, "Peugeot|other": 215
, "Fiat|other": 195
, "Kia|other": 159
, "Subaru|other": 157
, "Vauxhall|other": 154
, "BYD|other": 145
, "Honda|other": 98
, "Mazda|other": 90
, "Smart|other": 90
, "BMW|other": 86
, "Renault|other": 78
, "Mini|other": 71
, "Toyota|other": 63
, "Volkswagen|other": 48
, "Nissan|other": 40
, "Hyundai|other": 37
, "Volvo|other": 37
, "Tesla|other": 27
, "other": 3384
});

db.insert(db.countries.UK, "2024-04", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13260
, "Audi": 10253
, "BMW": 9156
, "Ford": 8152
, "Kia": 8044
, "Toyota": 7022
, "Hyundai": 6619
, "Mercedes-Benz": 6572
, "Škoda": 5986
, "Nissan": 5800
, "MG": 5371
, "Volvo": 4809
, "Vauxhall": 4386
, "Land Rover": 4298
, "Peugeot": 4290
, "Renault": 4123
, "Seat": 3433
, "Dacia": 2333
, "Mini": 2307
, "Citroën": 2108
, "Cupra": 1984
, "Suzuki": 1578
, "Mazda": 1537
, "Honda": 1530
, "Porsche": 1416
, "Tesla": 1352
, "Jaguar": 1329
, "Fiat": 1175
, "Polestar": 470
, "Jeep": 346
, "BYD": 333
, "Smart": 248
, "Subaru": 142
, "GWM": 88
, "other": 2424
});

db.insert(db.countries.UK, "2024-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/4 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "BMW|i4": 1503
, "MG|4 EV": 1284
, "Audi|Q4 e-tron": 1266
, "Tesla|Model Y": 1077
, "Hyundai|Kona Electric": 718
, "Mercedes-Benz|EQA": 701
, "Volvo|EX30": 692
, "Toyota|bZ4X": 644
, "Kia|Niro EV": 603
, "Škoda|Enyaq": 590
, "Volvo|EX40": 582
, "Mercedes-Benz|EQB": 577
, "Kia|EV6": 547
, "Hyundai|Ioniq 5": 538
, "Nissan|Ariya": 533
, "Cupra|Born": 475
, "Polestar|2": 470
, "BMW|iX1": 438
, "Ford|Mustang Mach-E": 396
, "BMW|iX3": 376
, "Volkswagen|ID.4": 359
, "Peugeot|e-2008": 352
, "Nissan|Leaf": 349
, "Jaguar|I-Pace": 326
, "Audi|Q8 e-tron": 314
, "Vauxhall|Mokka-e": 301
, "Tesla|Model 3": 277
, "BMW|iX": 271
, "Renault|Megane E-Tech": 270
, "MG|ZS EV": 257
, "Citroën|ë-C4": 241
, "Mini|Cooper SE": 226
, "BMW|i5": 198
, "BYD|Yuan Plus": 190
, "Mercedes-Benz|EQE": 187
, "Volvo|EC40": 179
, "Volkswagen|ID.3": 176
, "Smart|Hashtag 1": 166
, "Jeep|Avenger EV": 154
, "Kia|EV9": 142
, "Vauxhall|Combo-e": 139
, "Vauxhall|Corsa-e": 138
, "Porsche|Taycan": 101
, "Audi|e-tron GT": 93
, "Hyundai|Ioniq 6": 93
, "Mazda|MX-30 BEV": 86
, "GWM|Ora 03": 85
, "Fiat|500e": 69
, "BYD|Seal": 67
, "Subaru|Solterra": 61
, "Mercedes-Benz|other": 116
, "Peugeot|other": 100
, "BMW|other": 78
, "Smart|other": 78
, "Volkswagen|other": 71
, "BYD|other": 65
, "MG|other": 65
, "Vauxhall|other": 57
, "Fiat|other": 39
, "Honda|other": 35
, "Hyundai|other": 24
, "Toyota|other": 23
, "Kia|other": 19
, "Renault|other": 18
, "Audi|other": 13
, "other": 2039
});

db.insert(db.countries.UK, "2024-05", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13503
, "Audi": 10673
, "BMW": 10353
, "Kia": 8917
, "Mercedes-Benz": 7758
, "Ford": 7520
, "MG": 7223
, "Hyundai": 7107
, "Toyota": 6834
, "Škoda": 6671
, "Nissan": 6602
, "Vauxhall": 6026
, "Volvo": 5707
, "Land Rover": 4730
, "Peugeot": 4504
, "Renault": 3798
, "Seat": 3572
, "Tesla": 3152
, "Dacia": 2691
, "Mini": 2679
, "Cupra": 2289
, "Mazda": 2171
, "Citroën": 2100
, "Suzuki": 2032
, "Honda": 1781
, "Jaguar": 1363
, "Porsche": 1315
, "BYD": 596
, "Fiat": 523
, "Polestar": 314
, "Jeep": 297
, "Subaru": 182
, "Smart": 148
, "GWM": 101
, "other": 2446
});

db.insert(db.countries.UK, "2024-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/5 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 2107
, "Audi|Q4 e-tron": 1406
, "BMW|i4": 1178
, "MG|4 EV": 1072
, "Tesla|Model 3": 1031
, "Hyundai|Kona Electric": 843
, "Volvo|EX30": 814
, "Mercedes-Benz|EQA": 790
, "Škoda|Enyaq": 701
, "Mercedes-Benz|EQB": 694
, "Vauxhall|Mokka-e": 644
, "Cupra|Born": 636
, "Nissan|Ariya": 609
, "Volkswagen|ID.4": 593
, "Peugeot|e-2008": 580
, "Volvo|EX40": 564
, "Kia|Niro EV": 519
, "Nissan|Leaf": 490
, "BMW|iX1": 487
, "Hyundai|Ioniq 5": 444
, "Vauxhall|Corsa-e": 413
, "Mini|Cooper SE": 403
, "Kia|EV6": 395
, "Ford|Mustang Mach-E": 378
, "BMW|i5": 352
, "Toyota|bZ4X": 309
, "Polestar|2": 296
, "BMW|iX": 289
, "BMW|iX3": 285
, "BYD|Yuan Plus": 283
, "MG|ZS EV": 253
, "Volkswagen|ID.3": 221
, "Audi|Q8 e-tron": 219
, "Renault|Megane E-Tech": 201
, "BYD|Dolphin": 198
, "Mercedes-Benz|EQE": 193
, "Citroën|ë-C4": 184
, "Porsche|Taycan": 177
, "Peugeot|e-208": 174
, "Volvo|EC40": 140
, "Kia|EV9": 134
, "Smart|Hashtag 1": 132
, "Mazda|MX-30 BEV": 127
, "BMW|iX2": 123
, "Honda|e:Ny1": 120
, "Jaguar|I-Pace": 119
, "Jeep|Avenger EV": 111
, "Hyundai|Ioniq 6": 102
, "Peugeot|E-3008": 99
, "GWM|Ora 03": 97
, "Vauxhall|other": 122
, "Audi|other": 107
, "Fiat|other": 82
, "BYD|other": 81
, "Volkswagen|other": 80
, "MG|other": 76
, "Subaru|other": 67
, "Mercedes-Benz|other": 51
, "BMW|other": 48
, "Peugeot|other": 30
, "Hyundai|other": 20
, "Polestar|other": 16
, "other": 2522
});

db.insert(db.countries.UK, "2024-06", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 15458
, "BMW": 13547
, "Audi": 11929
, "Toyota": 11068
, "Kia": 10321
, "Hyundai": 9198
, "Nissan": 9131
, "Mercedes-Benz": 8859
, "Ford": 8496
, "MG": 8314
, "Tesla": 6757
, "Škoda": 6533
, "Volvo": 6283
, "Vauxhall": 6248
, "Renault": 6011
, "Land Rover": 5246
, "Peugeot": 4553
, "Mini": 3693
, "Seat": 3191
, "Mazda": 2908
, "Dacia": 2813
, "Cupra": 2661
, "Suzuki": 2302
, "Honda": 2281
, "Citroën": 2235
, "Porsche": 1483
, "Jaguar": 1175
, "Fiat": 1105
, "BYD": 697
, "Polestar": 660
, "Jeep": 624
, "GWM": 284
, "Subaru": 203
, "Smart": 135
, "other": 2861
});

db.insert(db.countries.UK, "2024-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/6 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 3612
, "Tesla|Model 3": 3080
, "Audi|Q4 e-tron": 1660
, "Hyundai|Kona Electric": 1156
, "Volvo|EX30": 995
, "MG|4 EV": 986
, "BMW|i4": 979
, "Mercedes-Benz|EQA": 830
, "Mini|Cooper SE": 830
, "BMW|iX1": 824
, "Volkswagen|ID.4": 812
, "Škoda|Enyaq": 741
, "Nissan|Ariya": 729
, "Vauxhall|Mokka-e": 660
, "Polestar|2": 643
, "Mercedes-Benz|EQB": 588
, "Volkswagen|ID.3": 582
, "Cupra|Born": 568
, "Kia|EV6": 558
, "BMW|iX3": 547
, "Nissan|Leaf": 483
, "Volvo|EX40": 477
, "Hyundai|Ioniq 5": 447
, "Ford|Mustang Mach-E": 429
, "Kia|Niro EV": 405
, "Peugeot|E-3008": 398
, "Vauxhall|Corsa-e": 386
, "BMW|iX2": 369
, "Peugeot|e-2008": 344
, "Toyota|bZ4X": 337
, "BYD|Dolphin": 295
, "Audi|Q8 e-tron": 284
, "BMW|iX": 275
, "GWM|Ora 03": 270
, "BMW|i5": 265
, "MG|ZS EV": 262
, "Renault|Megane E-Tech": 254
, "BYD|Yuan Plus": 250
, "Vauxhall|Combo-e": 237
, "Vauxhall|Astra Electric": 210
, "Peugeot|e-208": 209
, "Mazda|MX-30 BEV": 203
, "Honda|e:Ny1": 200
, "Jeep|Avenger EV": 187
, "Citroën|ë-C4": 186
, "Kia|EV9": 184
, "Mercedes-Benz|EQE": 155
, "Volvo|EC40": 144
, "Volkswagen|ID.5": 136
, "Fiat|500e": 129
, "Renault|other": 143
, "Hyundai|other": 142
, "BMW|other": 136
, "Smart|other": 130
, "Mercedes-Benz|other": 127
, "Jaguar|other": 122
, "Audi|other": 119
, "Peugeot|other": 108
, "Porsche|other": 107
, "BYD|other": 106
, "MG|other": 105
, "Volkswagen|other": 67
, "Fiat|other": 63
, "Škoda|other": 61
, "Subaru|other": 41
, "Vauxhall|other": 22
, "Tesla|other": 21
, "other": 2624
});

db.insert(db.countries.UK, "2024-07", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 14046
, "BMW": 9885
, "Kia": 9764
, "Audi": 9428
, "Nissan": 7919
, "Ford": 7814
, "Mercedes-Benz": 7631
, "Hyundai": 7560
, "Toyota": 7384
, "Volvo": 6537
, "MG": 6231
, "Vauxhall": 5466
, "Škoda": 5201
, "Land Rover": 5063
, "Peugeot": 4633
, "Renault": 3623
, "Seat": 3196
, "Mini": 3007
, "Cupra": 2798
, "Tesla": 2462
, "Honda": 2441
, "Dacia": 2100
, "Citroën": 1947
, "Suzuki": 1884
, "Mazda": 1756
, "Porsche": 1195
, "Jaguar": 1058
, "Polestar": 816
, "BYD": 768
, "Fiat": 759
, "Jeep": 710
, "Smart": 120
, "Subaru": 120
, "GWM": 55
, "other": 2140
});

db.insert(db.countries.UK, "2024-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/7 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "BMW|i4": 1354
, "Tesla|Model 3": 1209
, "Tesla|Model Y": 1177
, "Audi|Q4 e-tron": 1131
, "Mini|Cooper SE": 932
, "Volvo|EX30": 896
, "Hyundai|Kona Electric": 889
, "Škoda|Enyaq": 848
, "Mercedes-Benz|EQA": 765
, "Polestar|2": 742
, "Volkswagen|ID.3": 723
, "MG|4 EV": 679
, "Peugeot|E-3008": 654
, "Cupra|Born": 622
, "Volkswagen|ID.4": 572
, "Kia|Niro EV": 520
, "BMW|iX1": 500
, "Nissan|Leaf": 497
, "Vauxhall|Mokka-e": 494
, "Kia|EV6": 489
, "Mercedes-Benz|EQB": 439
, "Volvo|EX40": 415
, "Toyota|bZ4X": 378
, "Honda|e:Ny1": 346
, "Nissan|Ariya": 340
, "BYD|Yuan Plus": 324
, "Renault|Megane E-Tech": 302
, "Peugeot|e-2008": 298
, "Ford|Mustang Mach-E": 296
, "Audi|Q8 e-tron": 264
, "Vauxhall|Corsa-e": 255
, "Hyundai|Ioniq 5": 254
, "MG|ZS EV": 241
, "BYD|Dolphin": 214
, "BMW|iX": 205
, "Vauxhall|Combo-e": 200
, "Volvo|EC40": 199
, "Kia|EV9": 193
, "Vauxhall|Astra Electric": 186
, "BMW|i5": 184
, "BMW|iX3": 180
, "BMW|iX2": 172
, "Porsche|Taycan": 149
, "Citroën|ë-C4": 147
, "BYD|Seal": 141
, "Mercedes-Benz|EQE": 136
, "Jeep|Avenger EV": 129
, "Jaguar|I-Pace": 116
, "Mazda|MX-30 BEV": 102
, "Renault|Scénic E-Tech": 98
, "Audi|other": 292
, "Volkswagen|other": 263
, "Peugeot|other": 240
, "Mercedes-Benz|other": 202
, "BMW|other": 182
, "Hyundai|other": 140
, "Fiat|other": 119
, "MG|other": 118
, "Smart|other": 110
, "Volvo|other": 85
, "Polestar|other": 72
, "Tesla|other": 72
, "GWM|other": 55
, "BYD|other": 52
, "Nissan|other": 46
, "Kia|other": 45
, "Renault|other": 45
, "Škoda|other": 44
, "Vauxhall|other": 38
, "Cupra|other": 31
, "Subaru|other": 29
, "Honda|other": 24
, "Ford|other": 18
, "Toyota|other": 16
, "other": 2401
});

db.insert(db.countries.UK, "2024-08", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 7988
, "Audi": 6213
, "Ford": 5303
, "Kia": 4755
, "BMW": 4566
, "Mercedes-Benz": 4413
, "Toyota": 4170
, "Škoda": 3887
, "Hyundai": 3828
, "Vauxhall": 3265
, "Peugeot": 3203
, "Tesla": 3013
, "MG": 2953
, "Nissan": 2922
, "Renault": 2839
, "Volvo": 2834
, "Seat": 2255
, "Land Rover": 2074
, "Honda": 1684
, "Citroën": 1551
, "Suzuki": 1496
, "Cupra": 1460
, "Dacia": 1403
, "Mazda": 1062
, "Mini": 952
, "Fiat": 663
, "Porsche": 618
, "Jaguar": 607
, "BYD": 438
, "Polestar": 374
, "Jeep": 355
, "Subaru": 82
, "Smart": 81
, "GWM": 12
, "other": 1256
});

db.insert(db.countries.UK, "2024-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/8 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model 3": 1540
, "Tesla|Model Y": 1452
, "BMW|i4": 704
, "Audi|Q4 e-tron": 687
, "Škoda|Enyaq": 674
, "MG|4 EV": 650
, "Mercedes-Benz|EQA": 638
, "Hyundai|Kona Electric": 584
, "Peugeot|E-3008": 475
, "Honda|e:Ny1": 467
, "Volvo|EX30": 458
, "Vauxhall|Corsa-e": 430
, "Cupra|Born": 427
, "Volkswagen|ID.4": 426
, "Toyota|bZ4X": 378
, "Polestar|2": 375
, "Ford|Explorer EV": 366
, "Volkswagen|ID.3": 365
, "Mercedes-Benz|EQB": 318
, "Vauxhall|Mokka-e": 283
, "Nissan|Ariya": 272
, "Volvo|EC40": 265
, "Renault|Scénic E-Tech": 241
, "Kia|EV6": 239
, "Volvo|EX40": 239
, "Kia|Niro EV": 231
, "MG|ZS EV": 231
, "Mini|Cooper SE": 225
, "Ford|Mustang Mach-E": 215
, "Renault|Megane E-Tech": 197
, "BMW|iX": 195
, "Peugeot|e-2008": 189
, "BYD|Yuan Plus": 180
, "Audi|Q8 e-tron": 149
, "Citroën|ë-C4": 141
, "Hyundai|Ioniq 6": 136
, "Nissan|Leaf": 132
, "BYD|Seal": 130
, "Kia|EV9": 129
, "Vauxhall|Combo-e": 128
, "BMW|iX3": 123
, "Hyundai|Ioniq 5": 121
, "Porsche|Taycan": 101
, "Volkswagen|ID.7": 94
, "BMW|iX1": 89
, "BYD|Dolphin": 86
, "Jeep|Avenger EV": 85
, "Jaguar|I-Pace": 83
, "Mercedes-Benz|EQE": 83
, "Vauxhall|Astra Electric": 81
, "BMW|other": 141
, "Peugeot|other": 118
, "Fiat|other": 96
, "Audi|other": 84
, "Smart|other": 79
, "Mazda|other": 77
, "MG|other": 68
, "Volkswagen|other": 59
, "Mercedes-Benz|other": 48
, "Volvo|other": 13
, "GWM|other": 12
, "Hyundai|other": 11
, "Škoda|other": 10
, "other": 1790
});

db.insert(db.countries.UK, "2024-09", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 22955
, "Kia": 17535
, "Audi": 17317
, "Toyota": 16621
, "Mercedes-Benz": 16476
, "Ford": 15875
, "Nissan": 15079
, "Hyundai": 14874
, "BMW": 12538
, "Škoda": 11454
, "Volvo": 9384
, "Vauxhall": 9347
, "Land Rover": 8993
, "MG": 8959
, "Peugeot": 8393
, "Renault": 7797
, "Tesla": 7656
, "Mazda": 5873
, "Honda": 5060
, "Mini": 4912
, "Cupra": 4706
, "Seat": 4430
, "Citroën": 3874
, "Suzuki": 3833
, "Dacia": 3360
, "Polestar": 2429
, "Fiat": 2215
, "Porsche": 1967
, "Jaguar": 1814
, "Jeep": 1289
, "BYD": 1150
, "Smart": 462
, "Subaru": 366
, "GWM": 116
, "other": 6130
});

db.insert(db.countries.UK, "2024-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/9 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 5739
, "MG|4 EV": 2255
, "Mercedes-Benz|EQA": 2191
, "Audi|Q4 e-tron": 1917
, "Volkswagen|ID.4": 1838
, "Tesla|Model 3": 1837
, "Volvo|EX30": 1593
, "Polestar|2": 1585
, "Hyundai|Kona Electric": 1560
, "Peugeot|E-3008": 1524
, "Cupra|Born": 1459
, "Nissan|Leaf": 1454
, "Škoda|Enyaq": 1439
, "Honda|e:Ny1": 1197
, "Ford|Explorer EV": 1180
, "BMW|i4": 1124
, "Volkswagen|ID.3": 1052
, "Kia|Niro EV": 990
, "Mercedes-Benz|EQB": 965
, "Vauxhall|Mokka-e": 934
, "Vauxhall|Corsa-e": 931
, "Volkswagen|ID.7": 919
, "Toyota|bZ4X": 880
, "MG|ZS EV": 878
, "Nissan|Ariya": 764
, "Kia|EV6": 750
, "Polestar|4": 744
, "Renault|Scénic E-Tech": 735
, "Mini|Cooper SE": 572
, "Hyundai|Ioniq 5": 523
, "Renault|Megane E-Tech": 520
, "BYD|Yuan Plus": 488
, "Ford|Mustang Mach-E": 480
, "Citroën|ë-C4": 430
, "Volvo|EX40": 428
, "Peugeot|e-2008": 421
, "Kia|EV9": 403
, "BMW|iX": 399
, "MG|5 EV": 393
, "Smart|Hashtag 1": 391
, "Audi|Q8 e-tron": 367
, "Mercedes-Benz|EQE": 367
, "BMW|iX3": 360
, "Hyundai|Ioniq 6": 341
, "Volvo|EC40": 328
, "BYD|Dolphin": 307
, "Porsche|Taycan": 288
, "BMW|iX2": 278
, "Volkswagen|ID.5": 278
, "Vauxhall|Combo-e": 277
, "Peugeot|other": 478
, "Jeep|other": 270
, "BYD|other": 259
, "Fiat|other": 249
, "Jaguar|other": 230
, "BMW|other": 225
, "Mazda|other": 185
, "Mercedes-Benz|other": 174
, "Audi|other": 136
, "Vauxhall|other": 120
, "Porsche|other": 114
, "GWM|other": 113
, "Polestar|other": 93
, "Kia|other": 76
, "MG|other": 71
, "Smart|other": 64
, "other": 4457
});

db.insert(db.countries.UK, "2024-10", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13294
, "BMW": 9407
, "Audi": 9009
, "Ford": 8792
, "Kia": 8516
, "Mercedes-Benz": 8105
, "Toyota": 7553
, "Peugeot": 7421
, "Škoda": 7061
, "Hyundai": 6765
, "Volvo": 5761
, "Nissan": 5497
, "MG": 5303
, "Vauxhall": 4999
, "Renault": 4578
, "Mini": 4034
, "Land Rover": 3852
, "Citroën": 2958
, "Dacia": 2454
, "Porsche": 2032
, "Cupra": 2005
, "Mazda": 1719
, "Seat": 1514
, "Jaguar": 1405
, "Honda": 1372
, "Jeep": 1032
, "Tesla": 971
, "Suzuki": 884
, "BYD": 780
, "Fiat": 779
, "Polestar": 762
, "Subaru": 139
, "Smart": 118
, "GWM": 51
, "other": 3366
});

db.insert(db.countries.UK, "2024-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/10 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Škoda|Enyaq": 1459
, "Volkswagen|ID.4": 1145
, "MG|4 EV": 1038
, "Mercedes-Benz|EQA": 1031
, "Audi|Q4 e-tron": 1019
, "Mercedes-Benz|EQB": 990
, "Peugeot|E-3008": 946
, "Hyundai|Kona Electric": 899
, "Tesla|Model Y": 854
, "Ford|Explorer EV": 734
, "Mini|Cooper SE": 715
, "BMW|i4": 711
, "Renault|Scénic E-Tech": 667
, "Volkswagen|ID.3": 655
, "Volvo|EX30": 653
, "Cupra|Born": 491
, "Porsche|Macan Electric": 461
, "Toyota|bZ4X": 412
, "Volkswagen|ID.7": 409
, "BMW|iX1": 402
, "Vauxhall|Mokka-e": 401
, "Honda|e:Ny1": 388
, "Renault|Megane E-Tech": 384
, "Audi|Q6 e-tron": 376
, "Volvo|EX40": 364
, "BMW|iX2": 351
, "Hyundai|Ioniq 5": 344
, "Nissan|Ariya": 341
, "Polestar|2": 341
, "Peugeot|e-2008": 332
, "Dacia|Spring": 331
, "Nissan|Leaf": 329
, "Jaguar|I-Pace": 295
, "Vauxhall|Combo-e": 282
, "BYD|Dolphin": 277
, "MG|ZS EV": 274
, "Ford|Mustang Mach-E": 256
, "BYD|Yuan Plus": 251
, "Polestar|4": 238
, "Vauxhall|Grandland Electric": 237
, "Mercedes-Benz|EQE": 232
, "BYD|Seal": 227
, "Volkswagen|ID.5": 220
, "BMW|iX": 214
, "Kia|Niro EV": 209
, "BMW|iX3": 188
, "Vauxhall|Astra Electric": 187
, "Kia|EV9": 185
, "Peugeot|E-5008": 185
, "Porsche|Taycan": 183
, "Peugeot|other": 232
, "MG|other": 225
, "Hyundai|other": 195
, "BMW|other": 189
, "Polestar|other": 182
, "Kia|other": 166
, "Jeep|other": 164
, "Volvo|other": 123
, "Audi|other": 121
, "Citroën|other": 120
, "Tesla|other": 119
, "Smart|other": 115
, "Vauxhall|other": 114
, "Mercedes-Benz|other": 107
, "Fiat|other": 98
, "Mazda|other": 72
, "GWM|other": 49
, "Ford|other": 48
, "Subaru|other": 19
, "other": 3231
});

db.insert(db.countries.UK, "2024-11", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 12467
, "BMW": 10558
, "Mercedes-Benz": 8278
, "Audi": 7972
, "Ford": 7707
, "Nissan": 7492
, "MG": 7339
, "Kia": 7331
, "Toyota": 7327
, "Hyundai": 7279
, "Peugeot": 6945
, "Mini": 6850
, "Škoda": 6399
, "Volvo": 5846
, "Renault": 5370
, "Land Rover": 4833
, "Vauxhall": 4817
, "Tesla": 4558
, "Dacia": 3214
, "Cupra": 2458
, "Porsche": 2342
, "Citroën": 2289
, "Seat": 1852
, "Mazda": 1605
, "BYD": 1393
, "Honda": 1298
, "Jeep": 1219
, "Fiat": 900
, "Suzuki": 811
, "Jaguar": 725
, "Polestar": 672
, "Subaru": 115
, "Smart": 81
, "GWM": 17
, "other": 3251
});

db.insert(db.countries.UK, "2024-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/11 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 3335
, "Mini|Cooper SE": 2246
, "Audi|Q4 e-tron": 1468
, "Škoda|Enyaq": 1353
, "Mercedes-Benz|EQB": 1222
, "MG|4 EV": 1216
, "Tesla|Model 3": 1207
, "Mercedes-Benz|EQA": 1149
, "Peugeot|E-3008": 1021
, "Renault|Scénic E-Tech": 954
, "Ford|Explorer EV": 892
, "Volkswagen|ID.4": 851
, "Hyundai|Kona Electric": 820
, "Cupra|Born": 649
, "Volkswagen|ID.3": 623
, "Kia|EV3": 614
, "Volvo|EX30": 591
, "BMW|i4": 579
, "Vauxhall|Combo-e": 556
, "Audi|Q6 e-tron": 533
, "Porsche|Macan Electric": 516
, "BMW|i5": 494
, "Vauxhall|Mokka-e": 456
, "Volkswagen|ID.5": 451
, "MG|ZS EV": 443
, "Nissan|Ariya": 437
, "Vauxhall|Grandland Electric": 414
, "Hyundai|Ioniq 5": 412
, "BMW|iX1": 380
, "Renault|Megane E-Tech": 380
, "Volkswagen|ID.7": 372
, "BYD|Dolphin": 364
, "Toyota|bZ4X": 361
, "BMW|iX2": 360
, "Nissan|Leaf": 338
, "BYD|Seal": 314
, "Peugeot|e-2008": 301
, "Polestar|4": 301
, "Honda|e:Ny1": 297
, "Porsche|Taycan": 289
, "Peugeot|e-208": 268
, "Dacia|Spring": 267
, "BMW|iX": 259
, "Ford|Capri EV": 257
, "Jaguar|I-Pace": 257
, "Polestar|2": 245
, "BYD|Yuan Plus": 244
, "Kia|Niro EV": 234
, "Jeep|Avenger EV": 224
, "Volvo|EX40": 222
, "Peugeot|other": 352
, "Kia|other": 289
, "Mercedes-Benz|other": 235
, "Hyundai|other": 214
, "Vauxhall|other": 211
, "MG|other": 197
, "Ford|other": 194
, "Audi|other": 190
, "BMW|other": 167
, "Polestar|other": 126
, "Citroën|other": 110
, "Volvo|other": 106
, "Fiat|other": 99
, "Mazda|other": 77
, "Smart|other": 73
, "Cupra|other": 33
, "other": 3872
});

db.insert(db.countries.UK, "2024-12", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 12002
, "Tesla": 8645
, "BMW": 8484
, "Ford": 7729
, "Toyota": 7272
, "Audi": 7175
, "Škoda": 6958
, "MG": 6705
, "Nissan": 6601
, "Mercedes-Benz": 6122
, "Mini": 5947
, "Vauxhall": 5677
, "Volvo": 5624
, "Renault": 5164
, "Hyundai": 5098
, "Kia": 3985
, "Peugeot": 3657
, "Land Rover": 3629
, "Cupra": 3054
, "Porsche": 2784
, "Dacia": 2764
, "Mazda": 2331
, "Seat": 2189
, "Citroën": 1935
, "BYD": 1355
, "Honda": 1007
, "Polestar": 898
, "Fiat": 875
, "Jeep": 680
, "Suzuki": 563
, "Jaguar": 382
, "Jaecoo": 209
, "Subaru": 171
, "Smart": 57
, "GWM": 18
, "other": 3040
});

db.insert(db.countries.UK, "2024-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2024/12 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 5103
, "Tesla|Model 3": 3408
, "Mini|Cooper SE": 2608
, "Audi|Q4 e-tron": 1915
, "MG|4 EV": 1377
, "Ford|Explorer EV": 1141
, "Škoda|Enyaq": 1085
, "Mercedes-Benz|EQA": 1027
, "Volkswagen|ID.3": 989
, "Volkswagen|ID.7": 983
, "Hyundai|Kona Electric": 952
, "Volvo|EX30": 927
, "Audi|Q6 e-tron": 926
, "Cupra|Born": 913
, "Porsche|Macan Electric": 896
, "Volkswagen|ID.4": 865
, "Mercedes-Benz|EQB": 855
, "Renault|Scénic E-Tech": 837
, "BMW|i4": 752
, "BMW|iX1": 581
, "Cupra|Tavascan": 543
, "Polestar|4": 495
, "BMW|i5": 482
, "Renault|Megane E-Tech": 473
, "Volkswagen|ID.5": 470
, "Nissan|Ariya": 462
, "Vauxhall|Combo-e": 452
, "BYD|Dolphin": 432
, "BYD|Seal": 417
, "BMW|iX": 379
, "Dacia|Spring": 379
, "Toyota|bZ4X": 376
, "BMW|iX2": 368
, "Kia|EV3": 314
, "Hyundai|Ioniq 5": 303
, "Vauxhall|Mokka-e": 293
, "Porsche|Taycan": 266
, "BMW|iX3": 248
, "Volvo|EX40": 245
, "Kia|Niro EV": 239
, "Polestar|2": 239
, "MG|ZS EV": 236
, "Jaguar|I-Pace": 225
, "BYD|Yuan Plus": 218
, "Nissan|Leaf": 207
, "Vauxhall|Corsa-e": 202
, "Peugeot|E-3008": 188
, "Hyundai|Ioniq 6": 174
, "Ford|Mustang Mach-E": 170
, "Peugeot|e-2008": 167
, "Polestar|3": 167
, "Vauxhall|other": 291
, "Mercedes-Benz|other": 269
, "Kia|other": 223
, "Peugeot|other": 218
, "Citroën|other": 172
, "Ford|other": 159
, "MG|other": 148
, "BMW|other": 123
, "Fiat|other": 114
, "Jeep|other": 104
, "Audi|other": 102
, "Volvo|other": 72
, "Mazda|other": 62
, "Smart|other": 53
, "Honda|other": 51
, "other": 3526
});

db.insert(db.countries.UK, "2025-01", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13565
, "Kia": 10813
, "BMW": 9265
, "Peugeot": 8096
, "Nissan": 7129
, "Vauxhall": 7084
, "Ford": 6636
, "Audi": 6433
, "Mercedes-Benz": 6361
, "Hyundai": 6332
, "MG": 5440
, "Škoda": 5261
, "Land Rover": 5089
, "Toyota": 4660
, "Volvo": 4266
, "Renault": 4082
, "Mini": 2985
, "Mazda": 2768
, "Dacia": 2309
, "Cupra": 2243
, "Seat": 1929
, "Suzuki": 1837
, "Honda": 1624
, "BYD": 1614
, "Tesla": 1458
, "Fiat": 1428
, "Citroën": 1256
, "Porsche": 1191
, "Jeep": 960
, "Jaguar": 783
, "Polestar": 746
, "Jaecoo": 724
, "Subaru": 113
, "Smart": 59
, "GWM": 52
, "other": 2754
});

db.insert(db.countries.UK, "2025-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2025/1 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 1168
, "Mini|Cooper SE": 1068
, "BMW|i4": 930
, "Kia|EV3": 896
, "Mercedes-Benz|EQB": 885
, "Škoda|Enyaq": 873
, "Mercedes-Benz|EQA": 865
, "Cupra|Born": 850
, "Audi|Q4 e-tron": 845
, "Jaguar|I-Pace": 719
, "Volkswagen|ID.4": 711
, "Vauxhall|Combo-e": 661
, "Ford|Explorer EV": 655
, "Hyundai|Kona Electric": 643
, "Volvo|EX30": 632
, "Nissan|Ariya": 604
, "Renault|Scénic E-Tech": 579
, "MG|4 EV": 548
, "Porsche|Macan Electric": 503
, "Peugeot|E-3008": 502
, "Volkswagen|ID.3": 496
, "Hyundai|Ioniq 5": 453
, "Audi|Q6 e-tron": 448
, "BMW|iX1": 444
, "Toyota|bZ4X": 425
, "Polestar|4": 422
, "BYD|Dolphin": 419
, "Volkswagen|ID.7": 407
, "BMW|i5": 355
, "Peugeot|e-2008": 352
, "Dacia|Spring": 343
, "Renault|Megane E-Tech": 339
, "BMW|iX": 337
, "BMW|iX2": 310
, "BYD|Yuan Plus": 301
, "Kia|EV6": 295
, "Volkswagen|ID.5": 288
, "Tesla|Model 3": 278
, "Vauxhall|Grandland Electric": 267
, "BYD|Seal": 260
, "Kia|Niro EV": 250
, "Vauxhall|Corsa-e": 232
, "Jeep|Avenger EV": 230
, "Polestar|2": 226
, "MG|ZS EV": 212
, "Peugeot|E-5008": 208
, "Peugeot|e-208": 178
, "Vauxhall|Mokka-e": 174
, "Mercedes-Benz|EQE": 164
, "Volvo|EX40": 148
, "BMW|other": 218
, "Ford|other": 201
, "Peugeot|other": 178
, "Audi|other": 157
, "Kia|other": 147
, "Citroën|other": 146
, "Cupra|other": 137
, "Polestar|other": 98
, "Volvo|other": 98
, "Hyundai|other": 94
, "Fiat|other": 80
, "Mercedes-Benz|other": 78
, "MG|other": 71
, "Porsche|other": 67
, "Smart|other": 59
, "Nissan|other": 57
, "BYD|other": 55
, "GWM|other": 53
, "Mazda|other": 46
, "Škoda|other": 38
, "Vauxhall|other": 29
, "other": 3129
});

db.insert(db.countries.UK, "2025-02", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 8029
, "BMW": 4724
, "Ford": 4433
, "Peugeot": 4264
, "Kia": 4257
, "Hyundai": 4111
, "Mini": 3978
, "Nissan": 3948
, "Vauxhall": 3889
, "Audi": 3860
, "Tesla": 3852
, "Škoda": 3702
, "Mercedes-Benz": 3390
, "MG": 3325
, "Toyota": 2968
, "Volvo": 2803
, "Renault": 2539
, "Land Rover": 1878
, "Cupra": 1607
, "Honda": 1427
, "Mazda": 1339
, "BYD": 1177
, "Seat": 986
, "Dacia": 981
, "Citroën": 883
, "Jaecoo": 725
, "Suzuki": 701
, "Fiat": 606
, "Porsche": 603
, "Jeep": 557
, "Polestar": 515
, "Jaguar": 206
, "Subaru": 85
, "Smart": 43
, "Chevrolet": 16
, "other": 1647
});

db.insert(db.countries.UK, "2025-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2025/2 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model 3": 1939
, "Tesla|Model Y": 1795
, "Mini|Cooper SE": 1262
, "Škoda|Enyaq": 578
, "Audi|Q4 e-tron": 549
, "BMW|i4": 512
, "Volkswagen|ID.4": 488
, "Peugeot|E-3008": 438
, "Ford|Explorer EV": 433
, "Kia|EV3": 424
, "MG|4 EV": 421
, "Hyundai|Kona Electric": 410
, "Mercedes-Benz|EQA": 409
, "Cupra|Born": 408
, "Audi|Q6 e-tron": 342
, "Mercedes-Benz|EQB": 333
, "Polestar|4": 331
, "Volkswagen|ID.7": 321
, "Renault|Scénic E-Tech": 308
, "Hyundai|Ioniq 5": 306
, "BMW|iX1": 302
, "Vauxhall|Combo-e": 291
, "BMW|i5": 290
, "Volkswagen|ID.3": 288
, "Volvo|EX30": 286
, "BYD|Dolphin": 275
, "Porsche|Macan Electric": 268
, "Cupra|Tavascan": 231
, "BYD|Yuan Plus": 229
, "Nissan|Ariya": 229
, "Kia|Niro EV": 223
, "BMW|iX2": 214
, "Jaguar|I-Pace": 201
, "Dacia|Spring": 198
, "Jeep|Avenger EV": 181
, "MG|ZS EV": 167
, "Vauxhall|Grandland Electric": 165
, "Citroën|ë-C3": 162
, "Kia|EV6": 159
, "Renault|5 E-Tech": 158
, "Vauxhall|Mokka-e": 152
, "Toyota|bZ4X": 151
, "BYD|Seal": 143
, "Peugeot|e-2008": 141
, "Volvo|EX40": 139
, "Volkswagen|ID.5": 136
, "Renault|Megane E-Tech": 135
, "BMW|iX": 120
, "Mercedes-Benz|EQE": 118
, "Polestar|2": 108
, "Peugeot|other": 227
, "Ford|other": 150
, "Vauxhall|other": 129
, "BMW|other": 113
, "Tesla|other": 86
, "Polestar|other": 72
, "Kia|other": 71
, "Hyundai|other": 62
, "Fiat|other": 56
, "Porsche|other": 55
, "Smart|other": 41
, "Volvo|other": 35
, "MG|other": 31
, "Mercedes-Benz|other": 30
, "Citroën|other": 28
, "Audi|other": 27
, "Mazda|other": 20
, "Škoda|other": 15
, "Jeep|other": 14
, "Nissan|other": 14
, "other": 2101
});

db.insert(db.countries.UK, "2025-03", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 31562
, "Ford": 23634
, "BMW": 21570
, "Kia": 19993
, "Toyota": 18516
, "Mercedes-Benz": 17664
, "Audi": 17513
, "Nissan": 16778
, "Vauxhall": 16398
, "Peugeot": 16176
, "MG": 15876
, "Hyundai": 14443
, "Land Rover": 14178
, "Škoda": 13609
, "Volvo": 11898
, "Renault": 11072
, "Tesla": 7164
, "Mazda": 6889
, "BYD": 6480
, "Cupra": 6182
, "Mini": 6086
, "Dacia": 5971
, "Honda": 5851
, "Seat": 4038
, "Porsche": 3537
, "Suzuki": 3387
, "Jeep": 2568
, "Polestar": 2434
, "Citroën": 2250
, "Fiat": 2050
, "Jaecoo": 1786
, "Jaguar": 736
, "Subaru": 627
, "Smart": 385
, "Xpeng": 36
, "other": 7766
});

db.insert(db.countries.UK, "2025-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2025/3 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model 3": 3444
, "Tesla|Model Y": 3194
, "Audi|Q4 e-tron": 2020
, "Kia|EV3": 1829
, "Audi|Q6 e-tron": 1667
, "BMW|i4": 1641
, "BYD|Seal": 1614
, "Škoda|Enyaq": 1575
, "MG|4 EV": 1439
, "Volkswagen|ID.7": 1384
, "Mini|Cooper SE": 1362
, "Ford|Explorer EV": 1328
, "Volkswagen|ID.4": 1299
, "Peugeot|E-3008": 1103
, "Mercedes-Benz|EQA": 1081
, "Polestar|4": 1078
, "Škoda|Elroq": 959
, "Porsche|Macan Electric": 929
, "Mercedes-Benz|EQB": 918
, "Vauxhall|Combo-e": 897
, "Volvo|EX30": 888
, "BMW|i5": 870
, "Toyota|bZ4X": 859
, "Hyundai|Ioniq 5": 826
, "Volkswagen|ID.3": 823
, "Renault|Scénic E-Tech": 819
, "BMW|iX1": 799
, "Cupra|Born": 792
, "BMW|iX2": 786
, "Kia|Niro EV": 771
, "Hyundai|Kona Electric": 770
, "Cupra|Tavascan": 766
, "Dacia|Spring": 701
, "Volvo|EX40": 688
, "Vauxhall|Mokka-e": 671
, "Jaguar|I-Pace": 648
, "MG|ZS EV": 645
, "Polestar|2": 635
, "Ford|Capri EV": 631
, "BYD|Dolphin": 607
, "Volkswagen|ID.5": 604
, "Kia|EV6": 600
, "Vauxhall|Grandland Electric": 589
, "Peugeot|e-2008": 554
, "BYD|Yuan Plus": 542
, "Nissan|Ariya": 534
, "Peugeot|E-5008": 498
, "Jeep|Avenger EV": 381
, "Renault|Megane E-Tech": 373
, "Mercedes-Benz|EQE": 368
, "BMW|other": 1283
, "Vauxhall|other": 871
, "Peugeot|other": 828
, "Audi|other": 768
, "Kia|other": 751
, "Ford|other": 667
, "Polestar|other": 587
, "Volkswagen|other": 532
, "Mercedes-Benz|other": 474
, "MG|other": 471
, "Volvo|other": 458
, "Citroën|other": 410
, "Tesla|other": 409
, "Porsche|other": 356
, "Smart|other": 355
, "BYD|other": 345
, "Škoda|other": 334
, "Hyundai|other": 262
, "Fiat|other": 251
, "Renault|other": 227
, "Jeep|other": 163
, "Cupra|other": 128
, "Toyota|other": 116
, "Nissan|other": 89
, "Mazda|other": 80
, "Dacia|other": 65
, "other": 7234
});

db.insert(db.countries.UK, "2025-04", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 10474
, "Kia": 8320
, "BMW": 8086
, "Audi": 8017
, "Ford": 7006
, "Hyundai": 6524
, "Peugeot": 5914
, "Škoda": 5483
, "Mercedes-Benz": 5371
, "Toyota": 5301
, "Vauxhall": 5162
, "Nissan": 4899
, "Renault": 4369
, "Volvo": 4231
, "MG": 3789
, "Land Rover": 3787
, "Mini": 2512
, "BYD": 2511
, "Cupra": 2205
, "Dacia": 1977
, "Seat": 1842
, "Mazda": 1541
, "Porsche": 1225
, "Honda": 1206
, "Jaecoo": 1053
, "Suzuki": 1015
, "Citroën": 958
, "Polestar": 872
, "Jeep": 815
, "Tesla": 512
, "Fiat": 289
, "Subaru": 91
, "Smart": 70
, "GWM": 38
, "other": 2866
});

db.insert(db.countries.UK, "2025-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2025/4 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Škoda|Elroq": 713
, "Audi|Q4 e-tron": 537
, "Volkswagen|ID.7": 530
, "Ford|Explorer EV": 527
, "Peugeot|E-3008": 523
, "Škoda|Enyaq": 523
, "Volkswagen|ID.3": 504
, "Kia|EV3": 466
, "Volkswagen|ID.4": 454
, "Audi|Q6 e-tron": 443
, "BMW|i4": 431
, "Volvo|EX30": 431
, "Mini|Cooper SE": 410
, "Polestar|4": 406
, "Cupra|Born": 382
, "Renault|5 E-Tech": 370
, "BYD|Seal": 350
, "BYD|Yuan Plus": 347
, "Renault|Scénic E-Tech": 332
, "Mercedes-Benz|EQA": 328
, "Peugeot|e-2008": 321
, "MG|4 EV": 318
, "Tesla|Model 3": 303
, "Ford|Puma Gen-E": 301
, "Hyundai|Kona Electric": 293
, "Porsche|Macan Electric": 291
, "BMW|iX1": 288
, "Renault|Megane E-Tech": 271
, "Dacia|Spring": 269
, "Toyota|bZ4X": 257
, "Polestar|2": 247
, "Vauxhall|Grandland Electric": 240
, "BYD|Dolphin": 235
, "Kia|Niro EV": 231
, "Vauxhall|Combo-e": 229
, "Kia|EV9": 219
, "Ford|Capri EV": 213
, "Hyundai|Inster": 204
, "Cupra|Tavascan": 183
, "Mercedes-Benz|EQE": 183
, "Mercedes-Benz|EQB": 180
, "Hyundai|Ioniq 5": 178
, "Peugeot|E-5008": 178
, "BMW|iX2": 177
, "Vauxhall|Corsa-e": 149
, "BMW|i5": 135
, "Volvo|EX40": 131
, "Volkswagen|ID.5": 130
, "Kia|EV6": 120
, "Nissan|Ariya": 119
, "Ford|other": 495
, "BMW|other": 478
, "Volkswagen|other": 474
, "Peugeot|other": 410
, "BYD|other": 404
, "Škoda|other": 361
, "Audi|other": 358
, "MG|other": 315
, "Hyundai|other": 293
, "Vauxhall|other": 293
, "Mercedes-Benz|other": 288
, "Renault|other": 284
, "Kia|other": 280
, "Polestar|other": 219
, "Tesla|other": 203
, "Volvo|other": 203
, "Cupra|other": 192
, "Citroën|other": 169
, "Porsche|other": 150
, "Jeep|other": 126
, "Toyota|other": 97
, "Fiat|other": 94
, "Smart|other": 66
, "Dacia|other": 55
, "Nissan|other": 24
, "other": 2627
});

db.insert(db.countries.UK, "2025-05", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13562
, "BMW": 9327
, "Kia": 8579
, "Ford": 8489
, "Audi": 8091
, "Škoda": 7434
, "Hyundai": 7259
, "Mercedes-Benz": 7086
, "Vauxhall": 7016
, "Nissan": 6884
, "MG": 6625
, "Toyota": 6481
, "Peugeot": 6153
, "Renault": 5216
, "Volvo": 4934
, "Land Rover": 4643
, "Cupra": 3037
, "BYD": 3025
, "Mini": 2883
, "Mazda": 2641
, "Dacia": 2159
, "Tesla": 2016
, "Seat": 1847
, "Jaecoo": 1679
, "Honda": 1434
, "Porsche": 1388
, "Citroën": 1302
, "Polestar": 1174
, "Suzuki": 1142
, "Jeep": 1083
, "Fiat": 1006
, "Subaru": 116
, "Smart": 94
, "GWM": 33
, "other": 4232
});

db.insert(db.countries.UK, "2025-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2025/5 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen|ID.4": 1002
, "Tesla|Model Y": 964
, "Audi|Q6 e-tron": 842
, "Škoda|Enyaq": 784
, "Škoda|Elroq": 750
, "Audi|Q4 e-tron": 746
, "Ford|Explorer EV": 676
, "Hyundai|Kona Electric": 628
, "Volkswagen|ID.7": 608
, "BMW|i4": 607
, "Kia|EV3": 588
, "Volkswagen|ID.3": 586
, "Peugeot|e-2008": 557
, "Polestar|2": 512
, "Renault|5 E-Tech": 510
, "Tesla|Model 3": 507
, "Cupra|Born": 489
, "Polestar|4": 463
, "Renault|Scénic E-Tech": 462
, "BMW|iX2": 457
, "Volvo|EX30": 446
, "Ford|Capri EV": 425
, "Mini|Cooper SE": 398
, "MG|4 EV": 382
, "Mercedes-Benz|EQA": 379
, "BMW|iX1": 370
, "Peugeot|E-3008": 358
, "Ford|Puma Gen-E": 354
, "Mercedes-Benz|EQB": 322
, "Kia|Niro EV": 306
, "Dacia|Spring": 305
, "Peugeot|E-5008": 283
, "Vauxhall|Mokka-e": 265
, "Cupra|Tavascan": 262
, "BYD|Yuan Plus": 253
, "Porsche|Macan Electric": 246
, "BYD|Seal": 231
, "Hyundai|Inster": 228
, "Renault|Megane E-Tech": 228
, "Volvo|EX40": 210
, "Toyota|bZ4X": 206
, "Hyundai|Ioniq 5": 204
, "Vauxhall|Corsa-e": 199
, "BYD|Dolphin": 193
, "Mercedes-Benz|EQE": 190
, "Kia|EV9": 189
, "BYD|Sealion 7": 176
, "Vauxhall|Grandland Electric": 174
, "BMW|iX": 171
, "Kia|EV6": 170
, "Volkswagen|other": 822
, "BMW|other": 685
, "Ford|other": 614
, "Audi|other": 567
, "Tesla|other": 547
, "BYD|other": 522
, "Škoda|other": 418
, "Peugeot|other": 365
, "Vauxhall|other": 349
, "Mercedes-Benz|other": 326
, "Kia|other": 309
, "Hyundai|other": 305
, "MG|other": 273
, "Renault|other": 266
, "Volvo|other": 258
, "Polestar|other": 198
, "Porsche|other": 193
, "Citroën|other": 188
, "Jeep|other": 158
, "Cupra|other": 144
, "Nissan|other": 126
, "Smart|other": 91
, "Fiat|other": 83
, "Toyota|other": 80
, "Dacia|other": 72
, "other": 3918
});

db.insert(db.countries.UK, "2025-06", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 16964
, "BMW": 12726
, "Ford": 10204
, "Hyundai": 10109
, "Kia": 10043
, "Audi": 9624
, "Nissan": 9511
, "Toyota": 8423
, "Škoda": 8348
, "Mercedes-Benz": 8098
, "Peugeot": 8057
, "Tesla": 7719
, "MG": 7562
, "Vauxhall": 7133
, "Renault": 5959
, "Volvo": 5738
, "Land Rover": 5672
, "BYD": 4583
, "Cupra": 3848
, "Mazda": 3631
, "Mini": 3509
, "Citroën": 2734
, "Dacia": 2728
, "Polestar": 2595
, "Jaecoo": 2432
, "Seat": 1682
, "Honda": 1678
, "Porsche": 1587
, "Suzuki": 1417
, "Fiat": 757
, "Jeep": 641
, "Subaru": 229
, "Smart": 124
, "Xpeng": 114
, "GWM": 36
, "other": 5101
});

db.insert(db.countries.UK, "2025-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2025/6 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 3062
, "Tesla|Model 3": 2525
, "BMW|i4": 1404
, "Audi|Q4 e-tron": 1025
, "Škoda|Enyaq": 1016
, "Polestar|2": 993
, "Polestar|4": 947
, "Cupra|Born": 866
, "BYD|Seal": 862
, "Audi|Q6 e-tron": 859
, "Mini|Cooper SE": 836
, "Volkswagen|ID.4": 829
, "Kia|EV3": 826
, "Ford|Explorer EV": 822
, "Škoda|Elroq": 816
, "Hyundai|Kona Electric": 809
, "Volkswagen|ID.3": 798
, "Volvo|EX30": 780
, "Renault|5 E-Tech": 622
, "Dacia|Spring": 617
, "MG|4 EV": 554
, "MG|S5 EV": 519
, "Ford|Puma Gen-E": 491
, "Mercedes-Benz|EQA": 479
, "BMW|iX2": 473
, "BYD|Sealion 7": 473
, "BMW|iX1": 472
, "Hyundai|Inster": 449
, "Mercedes-Benz|EQB": 446
, "Polestar|3": 425
, "Kia|Niro EV": 412
, "Renault|Scénic E-Tech": 403
, "Volkswagen|ID.7": 401
, "BYD|Dolphin": 339
, "Hyundai|Ioniq 5": 315
, "BYD|Yuan Plus": 313
, "Porsche|Macan Electric": 313
, "Ford|Capri EV": 311
, "Cupra|Tavascan": 307
, "Peugeot|e-2008": 287
, "Volvo|EX40": 270
, "BMW|iX": 261
, "Peugeot|E-5008": 257
, "Volkswagen|ID.5": 255
, "Citroën|ë-C3": 241
, "Peugeot|E-3008": 237
, "Kia|EV6": 234
, "Vauxhall|Mokka-e": 225
, "Vauxhall|Grandland Electric": 219
, "BMW|i5": 211
, "Citroën|ë-C4": 211
, "Tesla|other": 2015
, "Audi|other": 772
, "Mercedes-Benz|other": 680
, "Volkswagen|other": 661
, "BMW|other": 555
, "Ford|other": 471
, "Kia|other": 463
, "Vauxhall|other": 463
, "Škoda|other": 453
, "Volvo|other": 428
, "Hyundai|other": 417
, "Renault|other": 409
, "BYD|other": 391
, "Peugeot|other": 306
, "Toyota|other": 260
, "Fiat|other": 233
, "Polestar|other": 228
, "Porsche|other": 188
, "MG|other": 174
, "Nissan|other": 153
, "Cupra|other": 132
, "Jeep|other": 124
, "Honda|other": 118
, "Smart|other": 116
, "Xpeng|other": 113
, "Dacia|other": 92
, "Citroën|other": 57
, "other": 4765
});

db.insert(db.countries.UK, "2025-07", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 13452
, "Ford": 9106
, "Kia": 9028
, "Audi": 8738
, "BMW": 8089
, "Hyundai": 7216
, "Škoda": 6772
, "Mercedes-Benz": 6446
, "Peugeot": 6179
, "Nissan": 6118
, "Toyota": 5709
, "MG": 5637
, "Vauxhall": 4892
, "Mini": 4408
, "Volvo": 4353
, "Land Rover": 4307
, "Cupra": 3639
, "Renault": 3338
, "BYD": 3184
, "Jaecoo": 1915
, "Mazda": 1915
, "Dacia": 1867
, "Seat": 1470
, "Porsche": 1319
, "Honda": 1314
, "Citroën": 1143
, "Suzuki": 1063
, "Tesla": 987
, "Jeep": 826
, "Polestar": 820
, "Fiat": 431
, "Smart": 105
, "Subaru": 84
, "other": 4284
});

db.insert(db.countries.UK, "2025-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2025/7 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Mini|Cooper SE": 1175
, "Ford|Explorer EV": 865
, "Škoda|Elroq": 821
, "MG|4 EV": 805
, "Škoda|Enyaq": 775
, "Hyundai|Kona Electric": 751
, "Audi|Q4 e-tron": 728
, "MG|S5 EV": 689
, "Volkswagen|ID.3": 669
, "Kia|EV3": 665
, "Cupra|Born": 631
, "Audi|Q6 e-tron": 626
, "Mercedes-Benz|EQA": 470
, "Volkswagen|ID.7": 465
, "BMW|i4": 458
, "BYD|Seal": 437
, "Volkswagen|ID.4": 407
, "Mercedes-Benz|EQB": 406
, "Tesla|Model 3": 388
, "Polestar|4": 347
, "Hyundai|Ioniq 5": 334
, "BMW|iX1": 326
, "Peugeot|E-5008": 326
, "Dacia|Spring": 325
, "Volvo|EX30": 314
, "BYD|Sealion 7": 312
, "Ford|Capri EV": 309
, "BMW|iX2": 308
, "Polestar|2": 307
, "Hyundai|Inster": 279
, "Tesla|Model Y": 269
, "Cupra|Tavascan": 261
, "BYD|Dolphin": 257
, "BYD|Seagull": 256
, "BMW|iX": 251
, "Volvo|EX40": 250
, "Ford|Puma Gen-E": 247
, "BYD|Yuan Plus": 243
, "BMW|i5": 240
, "Kia|EV9": 221
, "Kia|EV6": 199
, "Peugeot|e-2008": 198
, "Renault|5 E-Tech": 194
, "Hyundai|Ioniq 6": 163
, "Kia|Niro EV": 163
, "Renault|Scénic E-Tech": 161
, "Peugeot|E-3008": 159
, "Porsche|Macan Electric": 158
, "Mercedes-Benz|EQE": 147
, "Nissan|Ariya": 145
, "Audi|other": 782
, "Volkswagen|other": 682
, "Cupra|other": 438
, "Škoda|other": 388
, "Peugeot|other": 384
, "Tesla|other": 340
, "BMW|other": 262
, "Ford|other": 259
, "Vauxhall|other": 257
, "Hyundai|other": 255
, "Volvo|other": 235
, "Mercedes-Benz|other": 234
, "MG|other": 222
, "Kia|other": 212
, "Citroën|other": 204
, "BYD|other": 195
, "Polestar|other": 165
, "Toyota|other": 157
, "Renault|other": 147
, "Porsche|other": 136
, "Fiat|other": 110
, "Jeep|other": 109
, "Smart|other": 102
, "Dacia|other": 69
, "Nissan|other": 37
, "other": 3544
});

db.insert(db.countries.UK, "2025-08", db.dsTypes.AllCarsByBrand, "https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Volkswagen": 7866
, "Ford": 5617
, "BMW": 5200
, "Audi": 4820
, "Mercedes-Benz": 4551
, "Hyundai": 4278
, "Kia": 4109
, "Peugeot": 3814
, "Škoda": 3692
, "Toyota": 3255
, "Tesla": 3243
, "Vauxhall": 2721
, "Renault": 2579
, "MG": 2563
, "Nissan": 2395
, "Mini": 2316
, "Land Rover": 2284
, "Volvo": 2046
, "Cupra": 1941
, "BYD": 1759
, "Dacia": 1446
, "Jaecoo": 1367
, "Seat": 1072
, "Honda": 1051
, "Citroën": 964
, "Suzuki": 786
, "Polestar": 729
, "Porsche": 666
, "Mazda": 620
, "Jeep": 360
, "Fiat": 199
, "Subaru": 58
, "Xpeng": 55
, "Smart": 37
, "GWM": 17
, "Chery": 13
, "other": 2419
});

db.insert(db.countries.UK, "2025-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/GB/Brands/Month/2025/8 (includes commercial vehicles), https://www.smmt.co.uk/vehicle-data/car-registrations/",
{ "Tesla|Model Y": 1038
, "Tesla|Model 3": 827
, "Ford|Explorer EV": 677
, "Mini|Cooper SE": 656
, "Audi|Q4 e-tron": 481
, "Škoda|Enyaq": 439
, "Hyundai|Kona Electric": 435
, "Audi|Q6 e-tron": 432
, "Volkswagen|ID.3": 415
, "Kia|EV3": 384
, "BMW|i4": 375
, "Cupra|Born": 374
, "Mercedes-Benz|EQA": 359
, "MG|4 EV": 353
, "Škoda|Elroq": 343
, "Volkswagen|ID.4": 331
, "Polestar|4": 305
, "Volkswagen|ID.7": 299
, "Mercedes-Benz|EQB": 298
, "Volvo|EX30": 293
, "Dacia|Spring": 283
, "Ford|Capri EV": 274
, "BYD|Seal": 255
, "Renault|Scénic E-Tech": 253
, "Hyundai|Inster": 239
, "Polestar|2": 216
, "BMW|iX1": 199
, "BYD|Sealion 7": 192
, "MG|S5 EV": 181
, "Citroën|ë-C3": 179
, "BYD|Yuan Plus": 170
, "Ford|Puma Gen-E": 169
, "Cupra|Tavascan": 167
, "Hyundai|Ioniq 5": 155
, "Nissan|Ariya": 155
, "BMW|iX": 144
, "BMW|i5": 136
, "Mercedes-Benz|EQE": 133
, "Renault|5 E-Tech": 130
, "BMW|iX2": 128
, "Peugeot|E-5008": 119
, "BYD|Dolphin": 107
, "Peugeot|E-3008": 107
, "Hyundai|Ioniq 6": 94
, "Vauxhall|Grandland Electric": 93
, "Volvo|EX40": 90
, "Kia|EV6": 88
, "Volkswagen|ID.5": 84
, "Hyundai|Ioniq 9": 83
, "Porsche|Macan Electric": 82
, "Tesla|other": 1369
, "Volkswagen|other": 399
, "Kia|other": 304
, "Peugeot|other": 294
, "Audi|other": 259
, "Ford|other": 241
, "Renault|other": 224
, "Škoda|other": 211
, "Polestar|other": 209
, "Mercedes-Benz|other": 208
, "Hyundai|other": 199
, "BMW|other": 190
, "BYD|other": 181
, "Vauxhall|other": 171
, "Volvo|other": 148
, "Toyota|other": 96
, "MG|other": 80
, "Porsche|other": 77
, "Dacia|other": 61
, "Cupra|other": 60
, "Xpeng|other": 55
, "Jeep|other": 49
, "Citroën|other": 47
, "Fiat|other": 44
, "Smart|other": 34
, "Nissan|other": 28
, "Honda|other": 14
, "other": 2898
});
