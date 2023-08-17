// Data sets for car sales in the United Kingdom

"use strict";

// source: https://www.gov.uk/government/statistical-data-sets/vehicle-licensing-statistics-data-files

db.insert(db.countries.UK, "2017-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 3910
, "Porsche": 3868
, "Smart": 3216
, "DS Automobiles": 3198
, "Jeep": 2593
, "Alfa Romeo": 1757
, "Tesla": 1413
, "SsangYong": 1341
, "Infiniti": 1298
, "Abarth": 1282
, "MG": 1113
, "Subaru": 1056
, "Maserati": 655
, "Chevrolet": 78
, "Dodge": 45
, "Opel": 35
, "Chrysler": 33
, "Cadillac": 16
, "Buick": 12
, "Lincoln": 12
, "Acura": 4
, "other": 2907
});

db.insert(db.countries.UK, "2017-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 2482
, "Tesla|Model S": 786
, "Tesla|Model X": 627
, "Renault|Zoe": 344
, "BMW|i3 BEV": 227
, "Kia|Soul EV": 54
, "Hyundai|Ioniq Electric": 43
, "Nissan|e-NV200": 36
, "Peugeot|iOn": 4
, "Volkswagen|e-Golf": 4
, "Volkswagen|e-up!": 2
});

db.insert(db.countries.UK, "2017-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 2548
, "DS Automobiles": 1935
, "Jeep": 1081
, "Alfa Romeo": 1019
, "Abarth": 981
, "MG": 977
, "SsangYong": 884
, "Infiniti": 861
, "Tesla": 849
, "Subaru": 566
, "Maserati": 334
, "Chevrolet": 90
, "Dodge": 51
, "Opel": 38
, "Chrysler": 31
, "Cadillac": 14
, "Buick": 10
, "Lincoln": 7
, "Acura": 4
, "other": 2353
});

db.insert(db.countries.UK, "2017-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
{ "Nissan|Leaf": 1385
, "Tesla|Model X": 448
, "Tesla|Model S": 401
, "Renault|Zoe": 285
, "BMW|i3 BEV": 242
, "Hyundai|Ioniq Electric": 116
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

db.insert(db.countries.UK, "2017-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 3971
, "Mitsubishi": 3966
, "Porsche": 3488
, "Smart": 2758
, "DS Automobiles": 2679
, "Jeep": 1746
, "MG": 1383
, "Alfa Romeo": 1356
, "Tesla": 1263
, "Abarth": 1203
, "Infiniti": 956
, "Subaru": 844
, "SsangYong": 741
, "Maserati": 351
, "Chevrolet": 76
, "Dodge": 67
, "Opel": 36
, "Chrysler": 28
, "Cadillac": 24
, "Buick": 15
, "Lincoln": 12
, "Acura": 4
, "other": 2337
});

db.insert(db.countries.UK, "2017-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Smart|Forfour ED": 16
, "Volkswagen|e-up!": 4
, "Peugeot|iOn": 2
, "Citroën|C-Zero": 1
});

db.insert(db.countries.UK, "2017-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 2277
, "Smart": 1541
, "DS Automobiles": 1254
, "Tesla": 1231
, "MG": 1139
, "Alfa Romeo": 1024
, "Abarth": 928
, "Jeep": 918
, "Subaru": 682
, "SsangYong": 584
, "Infiniti": 424
, "Maserati": 411
, "Chevrolet": 73
, "Dodge": 44
, "Opel": 35
, "Chrysler": 25
, "Cadillac": 20
, "Lincoln": 18
, "Buick": 15
, "Acura": 6
, "other": 2044
});

db.insert(db.countries.UK, "2017-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Citroën|C-Zero": 2
});

db.insert(db.countries.UK, "2018-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 4093
, "DS Automobiles": 2092
, "Smart": 2075
, "MG": 1816
, "Jeep": 1761
, "Abarth": 1512
, "Alfa Romeo": 1497
, "Subaru": 1097
, "SsangYong": 861
, "Tesla": 834
, "Maserati": 441
, "Infiniti": 312
, "Chevrolet": 69
, "Dodge": 56
, "Opel": 25
, "Cadillac": 20
, "Chrysler": 20
, "Lincoln": 18
, "Buick": 3
, "other": 2486
});

db.insert(db.countries.UK, "2018-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "2018-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 2833
, "MG": 2535
, "Jeep": 1792
, "DS Automobiles": 1789
, "Smart": 1756
, "Abarth": 1492
, "Alfa Romeo": 1116
, "Tesla": 921
, "Subaru": 788
, "SsangYong": 753
, "Maserati": 316
, "Infiniti": 241
, "Chevrolet": 78
, "Dodge": 72
, "Opel": 36
, "Chrysler": 23
, "Cadillac": 20
, "Lincoln": 18
, "Buick": 17
, "Acura": 1
, "other": 2701
});

db.insert(db.countries.UK, "2018-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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

db.insert(db.countries.UK, "2018-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 3743
, "MG": 2484
, "Smart": 2357
, "Porsche": 1908
, "Jeep": 1499
, "Abarth": 1461
, "Subaru": 1197
, "Tesla": 942
, "Alfa Romeo": 932
, "DS Automobiles": 719
, "SsangYong": 655
, "Maserati": 308
, "Infiniti": 122
, "Chevrolet": 74
, "Dodge": 74
, "Chrysler": 35
, "Cadillac": 25
, "Opel": 25
, "Lincoln": 22
, "Buick": 11
, "Acura": 2
, "other": 2742
});

db.insert(db.countries.UK, "2018-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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

db.insert(db.countries.UK, "2018-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 1769
, "Smart": 1406
, "Jeep": 1304
, "Abarth": 1100
, "Alfa Romeo": 786
, "Tesla": 675
, "Subaru": 637
, "DS Automobiles": 561
, "SsangYong": 475
, "Maserati": 287
, "Infiniti": 91
, "Dodge": 73
, "Chevrolet": 72
, "Opel": 31
, "Chrysler": 25
, "Lincoln": 18
, "Cadillac": 15
, "Buick": 14
, "Acura": 2
, "other": 1956
});

db.insert(db.countries.UK, "2018-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "2019-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 4412
, "MG": 3122
, "Porsche": 2549
, "Smart": 1710
, "Jeep": 1604
, "Abarth": 1223
, "Subaru": 1074
, "Alfa Romeo": 1070
, "DS Automobiles": 975
, "SsangYong": 730
, "Tesla": 646
, "Maserati": 307
, "Infiniti": 95
, "Chevrolet": 67
, "Dodge": 63
, "Opel": 30
, "Chrysler": 26
, "Cadillac": 17
, "Lincoln": 16
, "Buick": 12
, "Acura": 4
, "other": 2857
});

db.insert(db.countries.UK, "2019-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 4
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "2019-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 3020
, "Jeep": 1741
, "Smart": 1443
, "Tesla": 976
, "Alfa Romeo": 886
, "DS Automobiles": 757
, "Subaru": 664
, "Abarth": 639
, "SsangYong": 380
, "Maserati": 262
, "Infiniti": 105
, "Chevrolet": 85
, "Dodge": 61
, "Opel": 38
, "Lincoln": 28
, "Cadillac": 23
, "Chrysler": 22
, "Buick": 14
, "Acura": 3
, "other": 2602
});

db.insert(db.countries.UK, "2019-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Volkswagen|e-up!": 3
, "Citroën|C-Zero": 1
, "Mini|Cooper SE Electric": 1
, "Tesla|Roadster": 1
});

db.insert(db.countries.UK, "2019-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 5415
, "Mitsubishi": 3881
, "Porsche": 3343
, "MG": 3137
, "Jeep": 1714
, "DS Automobiles": 1012
, "Abarth": 990
, "Alfa Romeo": 978
, "Subaru": 834
, "Smart": 693
, "SsangYong": 557
, "Maserati": 237
, "Chevrolet": 103
, "Infiniti": 87
, "Dodge": 51
, "Chrysler": 36
, "Opel": 32
, "Cadillac": 30
, "Lincoln": 27
, "Buick": 6
, "Acura": 2
, "other": 2486
});

db.insert(db.countries.UK, "2019-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 4
, "Mitsubishi|i-MiEV": 1
, "Peugeot|Partner Electric": 1
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.UK, "2019-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 2891
, "Mitsubishi": 2735
, "DS Automobiles": 1490
, "Jeep": 1373
, "Subaru": 1135
, "Alfa Romeo": 650
, "Abarth": 553
, "SsangYong": 284
, "Maserati": 193
, "Smart": 151
, "Dodge": 67
, "Chevrolet": 43
, "Opel": 24
, "Chrysler": 22
, "Lincoln": 21
, "Infiniti": 19
, "Cadillac": 16
, "Buick": 9
, "Acura": 1
, "other": 2293
});

db.insert(db.countries.UK, "2019-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 12
, "Mercedes-Benz|eVito": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 4
, "Volkswagen|e-up!": 2
});

db.insert(db.countries.UK, "2020-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 4488
, "Mitsubishi": 3926
, "Porsche": 2868
, "Jeep": 1061
, "DS Automobiles": 685
, "Alfa Romeo": 678
, "Abarth": 613
, "SsangYong": 484
, "Subaru": 401
, "Smart": 248
, "Maserati": 177
, "Chevrolet": 58
, "Dodge": 54
, "Opel": 31
, "Cadillac": 26
, "Chrysler": 19
, "Lincoln": 14
, "Buick": 9
, "Infiniti": 5
, "Acura": 1
, "other": 2294
});

db.insert(db.countries.UK, "2020-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 409
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
, "DS Automobiles|DS 3 Crossback E-Tense": 79
, "Nissan|e-NV200": 74
, "Seat|Mii Electric": 57
, "Porsche|Taycan": 49
, "Mitsubishi|i-MiEV": 1
});

db.insert(db.countries.UK, "2020-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 1497
, "Porsche": 1335
, "Mitsubishi": 869
, "Jeep": 547
, "Alfa Romeo": 305
, "Abarth": 284
, "DS Automobiles": 201
, "SsangYong": 186
, "Smart": 181
, "Subaru": 87
, "Maserati": 63
, "Dodge": 19
, "Chevrolet": 14
, "Opel": 9
, "Cadillac": 7
, "Chrysler": 7
, "Lincoln": 3
, "Infiniti": 1
, "other": 786
});

db.insert(db.countries.UK, "2020-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 241
, "Porsche|Taycan": 216
, "Tesla|Model S": 197
, "Kia|Soul EV": 151
, "Mercedes-Benz|EQC": 121
, "Smart|Forfour ED": 110
, "Smart|Fortwo ED": 69
, "DS Automobiles|DS 3 Crossback E-Tense": 42
, "Volkswagen|e-up!": 36
, "Škoda|Citigo-e": 35
, "Nissan|e-NV200": 30
, "Seat|Mii Electric": 20
, "Honda|e": 4
});

db.insert(db.countries.UK, "2020-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 5378
, "Porsche": 4703
, "Mitsubishi": 3101
, "Jeep": 1855
, "Abarth": 922
, "DS Automobiles": 889
, "Alfa Romeo": 633
, "SsangYong": 615
, "Smart": 585
, "Subaru": 557
, "Polestar": 252
, "Maserati": 204
, "Dodge": 52
, "Chevrolet": 39
, "Lincoln": 19
, "Chrysler": 18
, "Opel": 17
, "Cadillac": 14
, "Buick": 11
, "Infiniti": 8
, "other": 2193
});

db.insert(db.countries.UK, "2020-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 5988
, "Renault|Zoe": 3072
, "Kia|Niro EV": 2988
, "Hyundai|Kona Electric": 2471
, "Audi|Q8 e-tron": 2309
, "Nissan|Leaf": 2187
, "Jaguar|I-Pace": 2032
, "MG|ZS EV": 1800
, "BMW|i3 BEV": 1617
, "Mini|Cooper SE Electric": 1274
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
, "DS Automobiles|DS 3 Crossback E-Tense": 139
, "Seat|Mii Electric": 117
, "Škoda|Citigo-e": 115
, "Volkswagen|e-up!": 86
, "Nissan|e-NV200": 72
, "Mercedes-Benz|eVito": 27
, "Vauxhall|Vivaro-e": 5
, "Citroën|ë-SpaceTourer": 2
, "MG|MG5 EV": 1
, "Mitsubishi|i-MiEV": 1
});

db.insert(db.countries.UK, "2020-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 2394
, "Mitsubishi": 1569
, "Jeep": 1350
, "Alfa Romeo": 620
, "DS Automobiles": 615
, "Polestar": 599
, "Abarth": 482
, "Subaru": 454
, "Smart": 341
, "SsangYong": 200
, "Maserati": 173
, "Cupra": 162
, "Dodge": 67
, "Chevrolet": 40
, "Opel": 25
, "Cadillac": 21
, "Lincoln": 15
, "Chrysler": 12
, "Buick": 9
, "Acura": 7
, "Infiniti": 2
, "other": 1972
});

db.insert(db.countries.UK, "2020-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 1428
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
, "DS Automobiles|DS 3 Crossback E-Tense": 190
, "Smart|Forfour ED": 138
, "Seat|Mii Electric": 111
, "Nissan|e-NV200": 99
, "Mercedes-Benz|EQV": 93
, "Mercedes-Benz|eVito": 71
, "Škoda|Citigo-e": 59
, "Ford|Mustang Mach-E": 39
, "Volkswagen|e-up!": 32
, "Vauxhall|Vivaro-e": 20
, "Citroën|ë-SpaceTourer": 2
, "Lexus|UX 300e": 1
});

db.insert(db.countries.UK, "2021-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 3417
, "Fiat": 3395
, "Dacia": 3267
, "Porsche": 3061
, "Mitsubishi": 1990
, "Cupra": 924
, "Polestar": 922
, "Jeep": 915
, "Abarth": 520
, "Subaru": 480
, "DS Automobiles": 416
, "Smart": 402
, "Alfa Romeo": 376
, "SsangYong": 241
, "Maserati": 158
, "Dodge": 75
, "Chevrolet": 48
, "Opel": 23
, "Chrysler": 20
, "Lincoln": 20
, "Cadillac": 15
, "Buick": 9
, "Acura": 2
, "other": 2072
});

db.insert(db.countries.UK, "2021-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 7164
, "Kia|Niro EV": 3268
, "Nissan|Leaf": 2293
, "Audi|Q8 e-tron": 1505
, "Vauxhall|Corsa-e": 1231
, "MG|ZS EV": 1191
, "Peugeot|e-2008": 1155
, "Hyundai|Kona Electric": 1094
, "Mercedes-Benz|EQC": 1059
, "Mini|Cooper SE Electric": 1022
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
, "Mazda|MX-30": 264
, "Vauxhall|Mokka-e": 250
, "Citroën|ë-C4": 230
, "Kia|Soul EV": 217
, "Seat|Mii Electric": 210
, "Mercedes-Benz|EQA": 194
, "Nissan|e-NV200": 177
, "Volvo|XC40 Recharge pure electric": 154
, "DS Automobiles|DS 3 Crossback E-Tense": 139
, "Smart|Forfour ED": 127
, "Lexus|UX 300e": 117
, "Honda|e": 95
, "Tesla|Model X": 50
, "Volkswagen|e-Golf": 45
, "Mercedes-Benz|EQV": 40
, "Škoda|Citigo-e": 33
, "Mercedes-Benz|eVito": 29
, "Vauxhall|Vivaro-e": 24
, "Tesla|Model S": 18
, "Volkswagen|e-up!": 16
, "Citroën|ë-SpaceTourer": 2
, "Ford|Mustang Mach-E": 2
, "Fiat|500e": 1
, "Tesla|Roadster": 1
});

db.insert(db.countries.UK, "2021-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 3767
, "Dacia": 3597
, "Porsche": 2981
, "Mitsubishi": 2428
, "Cupra": 2238
, "Jeep": 1321
, "Abarth": 752
, "Polestar": 720
, "Subaru": 608
, "Alfa Romeo": 448
, "DS Automobiles": 442
, "Smart": 397
, "SsangYong": 377
, "Maserati": 185
, "Chevrolet": 49
, "Dodge": 49
, "Genesis": 28
, "Opel": 25
, "Chrysler": 19
, "Cadillac": 9
, "Lincoln": 9
, "Buick": 5
, "Acura": 1
, "Infiniti": 1
, "other": 2153
});

db.insert(db.countries.UK, "2021-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 7536
, "Volkswagen|ID.3": 3631
, "Kia|Niro EV": 2500
, "Hyundai|Kona Electric": 2452
, "Nissan|Leaf": 2263
, "Audi|Q8 e-tron": 2177
, "Renault|Zoe": 1836
, "Vauxhall|Corsa-e": 1561
, "Mini|Cooper SE Electric": 1352
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
, "Volvo|XC40 Recharge pure electric": 421
, "Škoda|Enyaq": 389
, "Ford|Mustang Mach-E": 379
, "Seat|Mii Electric": 318
, "Mazda|MX-30": 264
, "Audi|Q4 e-tron": 252
, "Citroën|ë-C4": 251
, "Honda|e": 234
, "Smart|Fortwo ED": 230
, "Smart|Forfour ED": 165
, "Volkswagen|e-up!": 133
, "DS Automobiles|DS 3 Crossback E-Tense": 116
, "Lexus|UX 300e": 111
, "Nissan|e-NV200": 87
, "Mercedes-Benz|EQV": 85
, "Vauxhall|Vivaro-e": 35
, "Mercedes-Benz|eVito": 31
, "Škoda|Citigo-e": 13
, "Citroën|ë-SpaceTourer": 5
, "Volkswagen|e-Golf": 5
, "Tesla|Model S": 3
, "Tesla|Model X": 1
});

db.insert(db.countries.UK, "2021-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 4873
, "Jaguar": 3882
, "Porsche": 2331
, "Cupra": 2270
, "Jeep": 1775
, "Subaru": 987
, "DS Automobiles": 870
, "Polestar": 784
, "Abarth": 698
, "Mitsubishi": 640
, "SsangYong": 510
, "Alfa Romeo": 468
, "Smart": 263
, "Maserati": 207
, "Genesis": 70
, "Dodge": 67
, "Chevrolet": 60
, "Opel": 26
, "Chrysler": 18
, "Lincoln": 16
, "Cadillac": 14
, "Buick": 10
, "Infiniti": 4
, "Acura": 3
, "other": 1989
});

db.insert(db.countries.UK, "2021-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 1005
, "Mazda|MX-30": 902
, "BMW|iX3": 864
, "Mercedes-Benz|EQC": 856
, "Vauxhall|Mokka-e": 837
, "BMW|i3 BEV": 819
, "Polestar|2": 784
, "Porsche|Taycan": 554
, "Seat|Mii Electric": 539
, "Citroën|ë-C4": 376
, "Volvo|XC40 Recharge pure electric": 367
, "Kia|Soul EV": 328
, "Volkswagen|e-up!": 273
, "DS Automobiles|DS 3 Crossback E-Tense": 270
, "Honda|e": 251
, "Lexus|UX 300e": 199
, "Mercedes-Benz|EQV": 160
, "Smart|Fortwo ED": 159
, "Smart|Forfour ED": 100
, "Nissan|e-NV200": 75
, "Vauxhall|Vivaro-e": 49
, "Mercedes-Benz|eVito": 27
, "BMW|iX": 19
, "Škoda|Citigo-e": 8
, "Tesla|Model S": 2
, "Citroën|ë-SpaceTourer": 1
, "Mercedes-Benz|EQS": 1
, "Tesla|Model X": 1
});

db.insert(db.countries.UK, "2021-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 1878
, "Polestar": 1669
, "Subaru": 683
, "Jeep": 673
, "DS Automobiles": 636
, "Smart": 481
, "Alfa Romeo": 468
, "SsangYong": 411
, "Abarth": 309
, "Maserati": 236
, "Mitsubishi": 118
, "Chevrolet": 88
, "Dodge": 79
, "Genesis": 40
, "Opel": 24
, "Cadillac": 23
, "Chrysler": 18
, "Buick": 16
, "Lincoln": 15
, "Infiniti": 3
, "Acura": 1
, "other": 1973
});

db.insert(db.countries.UK, "2021-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
{ "Tesla|Model 3": 12707
, "Kia|Niro EV": 3274
, "Mini|Cooper SE Electric": 3203
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
, "Volvo|XC40 Recharge pure electric": 856
, "Ford|Mustang Mach-E": 669
, "Lexus|UX 300e": 650
, "Mazda|MX-30": 612
, "Citroën|ë-C4": 489
, "BMW|iX": 380
, "Vauxhall|Vivaro-e": 304
, "Smart|Forfour ED": 298
, "DS Automobiles|DS 3 Crossback E-Tense": 248
, "Mercedes-Benz|EQV": 204
, "Smart|Fortwo ED": 178
, "Honda|e": 117
, "Seat|Mii Electric": 116
, "BMW|i4": 94
, "Kia|Soul EV": 84
, "Citroën|Berlingo Electric": 71
, "Nissan|e-NV200": 59
, "Mercedes-Benz|eVito": 46
, "Volvo|C40 Recharge": 29
, "Citroën|ë-SpaceTourer": 28
, "Vauxhall|Combo-e": 18
, "Peugeot|e-Rifter": 11
, "other": 18
});

db.insert(db.countries.UK, "2022-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 3166
, "Cupra": 1901
, "Polestar": 1441
, "DS Automobiles": 707
, "Jeep": 657
, "Alfa Romeo": 454
, "Smart": 440
, "Subaru": 438
, "SsangYong": 406
, "Abarth": 280
, "Maserati": 201
, "Mitsubishi": 112
, "Genesis": 90
, "Chevrolet": 66
, "Dodge": 58
, "Cadillac": 21
, "Chrysler": 21
, "Opel": 15
, "Lincoln": 12
, "Buick": 7
, "Infiniti": 4
, "Acura": 2
, "BYD": 2
, "other": 2325
});

db.insert(db.countries.UK, "2022-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 1374
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
, "Volvo|XC40 Recharge pure electric": 478
, "Volvo|C40 Recharge": 461
, "Mercedes-Benz|EQB": 448
, "BMW|i4": 432
, "Volkswagen|e-up!": 395
, "Kia|Soul EV": 382
, "Smart|Forfour ED": 236
, "Mazda|MX-30": 201
, "Smart|Fortwo ED": 196
, "DS Automobiles|DS 3 Crossback E-Tense": 195
, "Mercedes-Benz|EQV": 170
, "Lexus|UX 300e": 148
, "Honda|e": 135
, "Vauxhall|Vivaro-e": 123
, "Mercedes-Benz|EQS": 120
, "Vauxhall|Combo-e": 108
, "Cupra|Born": 104
, "Nissan|e-NV200": 60
, "Citroën|Berlingo Electric": 46
, "other": 123
});

db.insert(db.countries.UK, "2022-Q2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 1741
, "Polestar": 1394
, "DS Automobiles": 868
, "Jeep": 804
, "Abarth": 701
, "Alfa Romeo": 422
, "SsangYong": 382
, "Smart": 361
, "Subaru": 354
, "Maserati": 227
, "Genesis": 211
, "Mitsubishi": 81
, "Chevrolet": 59
, "Dodge": 44
, "Opel": 24
, "Cadillac": 19
, "Chrysler": 14
, "Lincoln": 5
, "Buick": 3
, "Acura": 1
, "other": 2228
});

db.insert(db.countries.UK, "2022-Q2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Mini|Cooper SE Electric": 1514
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
, "Mazda|MX-30": 331
, "Volvo|XC40 Recharge pure electric": 272
, "Kia|Soul EV": 227
, "Smart|Forfour ED": 209
, "Honda|e": 195
, "Mercedes-Benz|EQS": 183
, "Toyota|bZ4X": 170
, "Volvo|C40 Recharge": 165
, "Volkswagen|ID.5": 162
, "Smart|Fortwo ED": 147
, "Mercedes-Benz|EQE": 104
, "Volkswagen|e-up!": 96
, "Lexus|UX 300e": 88
, "Vauxhall|Vivaro-e": 87
, "DS Automobiles|DS 3 Crossback E-Tense": 81
, "Mercedes-Benz|EQV": 76
, "other": 277
});

db.insert(db.countries.UK, "2022-Q3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 2383
, "DS Automobiles": 1182
, "Polestar": 1095
, "Jeep": 707
, "Alfa Romeo": 555
, "Subaru": 517
, "SsangYong": 436
, "Genesis": 267
, "Smart": 221
, "Maserati": 166
, "Abarth": 112
, "Mitsubishi": 92
, "Chevrolet": 54
, "Dodge": 51
, "Opel": 22
, "Chrysler": 18
, "Buick": 7
, "Cadillac": 7
, "Lincoln": 7
, "Acura": 4
, "Infiniti": 2
, "other": 1783
});

db.insert(db.countries.UK, "2022-Q3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
{ "Tesla|Model Y": 8644
, "Kia|Niro EV": 2475
, "Nissan|Leaf": 2415
, "Tesla|Model 3": 2284
, "Hyundai|Ioniq Electric": 2164
, "Volkswagen|ID.3": 2160
, "MG|MG5 EV": 2030
, "Mini|Cooper SE Electric": 1900
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
, "Volvo|XC40 Recharge pure electric": 418
, "Mercedes-Benz|EQS": 290
, "Volvo|C40 Recharge": 273
, "DS Automobiles|DS 3 Crossback E-Tense": 266
, "Mercedes-Benz|EQE": 239
, "Kia|Soul EV": 234
, "Mazda|MX-30": 198
, "Genesis|GV60": 189
, "Smart|Forfour ED": 157
, "Honda|e": 101
, "Citroën|Berlingo Electric": 93
, "Smart|Fortwo ED": 63
, "Lexus|UX 300e": 58
, "other": 281
});

db.insert(db.countries.UK, "2022-Q4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
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
, "Lexus": 3482
, "Polestar": 3420
, "Suzuki": 3308
, "Jaguar": 2164
, "DS Automobiles": 940
, "Subaru": 620
, "Jeep": 538
, "Genesis": 435
, "Abarth": 434
, "SsangYong": 330
, "Alfa Romeo": 305
, "Smart": 187
, "Maserati": 108
, "Chevrolet": 97
, "Mitsubishi": 70
, "Ora": 68
, "Dodge": 54
, "Opel": 24
, "Cadillac": 12
, "Chrysler": 9
, "Lincoln": 6
, "Buick": 2
, "Infiniti": 2
, "other": 1945
});

db.insert(db.countries.UK, "2022-Q4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1162962/df_VEH0160_UK.csv",
{ "Tesla|Model Y": 14897
, "Tesla|Model 3": 7514
, "Nissan|Leaf": 3911
, "BMW|i4": 3778
, "Polestar|2": 3420
, "Volkswagen|ID.3": 2980
, "Audi|Q4 e-tron": 2862
, "Mini|Cooper SE Electric": 2606
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
, "Volvo|XC40 Recharge pure electric": 1466
, "Mercedes-Benz|EQC": 1408
, "Peugeot|e-2008": 1366
, "Hyundai|Kona Electric": 1353
, "Mercedes-Benz|EQA": 1255
, "Renault|Megane E-Tech": 1180
, "Volvo|C40 Recharge": 1015
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
, "DS Automobiles|DS 3 Crossback E-Tense": 177
, "Mercedes-Benz|EQE": 174
, "Citroën|Berlingo Electric": 173
, "Mazda|MX-30": 167
, "Smart|Fortwo ED": 158
, "Mercedes-Benz|EQS": 154
, "other": 708
});

db.insert(db.countries.UK, "2023-Q1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1178602/df_VEH0160_UK.csv",
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
, "Lexus": 2577
, "Jeep": 1063
, "DS Automobiles": 802
, "Subaru": 667
, "SsangYong": 419
, "Alfa Romeo": 385
, "Genesis": 361
, "Maserati": 318
, "Ora": 214
, "Abarth": 102
, "Mitsubishi": 80
, "Smart": 72
, "Dodge": 49
, "Chevrolet": 40
, "BYD": 34
, "Opel": 15
, "Cadillac": 11
, "Chrysler": 10
, "Lincoln": 6
, "Buick": 4
, "Acura": 3
, "other": 2536
});

db.insert(db.countries.UK, "2023-Q1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1178602/df_VEH0160_UK.csv",
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
, "Volvo|XC40 Recharge pure electric": 1658
, "BMW|iX": 1604
, "Audi|Q8 e-tron": 1565
, "Mini|Cooper SE Electric": 1521
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
, "Volvo|C40 Recharge": 869
, "Mercedes-Benz|EQB": 777
, "MG|MG5 EV": 742
, "Renault|Megane E-Tech": 740
, "Volkswagen|ID.5": 650
, "Ford|Mustang Mach-E": 636
, "Citroën|ë-C4": 532
, "Citroën|Berlingo Electric": 500
, "Fiat|500e": 416
, "Mercedes-Benz|EQE": 369
, "Renault|Zoe": 331
, "Volkswagen|ID. Buzz": 309
, "Vauxhall|Vivaro-e": 269
, "Genesis|GV60": 240
, "Ora|Good Cat": 214
, "Toyota|bZ4X": 210
, "Lexus|UX 300e": 201
, "Mercedes-Benz|EQS": 163
, "Mazda|MX-30": 157
, "Kia|Soul EV": 129
, "other": 821
});
