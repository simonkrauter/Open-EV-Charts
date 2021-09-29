// Data sets for car sales in the United Kingdom

"use strict";

db.addCountry("UK", "United Kingdom");

// source: https://www.gov.uk/government/statistical-data-sets/all-vehicles-veh01#registered-for-the-first-time

db.insert(db.countries.UK, "q2018-1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
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

db.insert(db.countries.UK, "q2018-1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
{ "Nissan|Leaf": 2015
, "Tesla|Model S": 541
, "Renault|Zoe": 429
, "Tesla|Model X": 293
, "BMW|i3 BEV": 256
, "Volkswagen|e-Golf": 134
, "Hyundai|Ioniq Electric": 87
, "Kia|Soul EV": 58
, "Nissan|e-NV200": 9
, "Volkswagen|e-up!": 4
, "Jaguar|I-Pace": 3
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "q2018-2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
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

db.insert(db.countries.UK, "q2018-2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
{ "Nissan|Leaf": 1501
, "Tesla|Model S": 498
, "Tesla|Model X": 422
, "Renault|Zoe": 402
, "BMW|i3 BEV": 171
, "Volkswagen|e-Golf": 156
, "Kia|Soul EV": 96
, "Jaguar|I-Pace": 92
, "Hyundai|Ioniq Electric": 84
, "Smart|Fortwo ED": 53
, "Nissan|e-NV200": 16
, "Volkswagen|e-up!": 13
, "Smart|Forfour ED": 12
, "Peugeot|iOn": 5
});

db.insert(db.countries.UK, "q2018-3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
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
, "Tesla": 939
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

db.insert(db.countries.UK, "q2018-3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
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
, "Smart|Forfour ED": 25
, "Nissan|e-NV200": 23
, "Volkswagen|e-up!": 5
});

db.insert(db.countries.UK, "q2018-4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
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
, "Tesla": 672
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

db.insert(db.countries.UK, "q2018-4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
{ "Nissan|Leaf": 939
, "Renault|Zoe": 696
, "Jaguar|I-Pace": 534
, "BMW|i3 BEV": 419
, "Volkswagen|e-Golf": 358
, "Tesla|Model S": 351
, "Tesla|Model X": 322
, "Hyundai|Ioniq Electric": 136
, "Smart|Fortwo ED": 112
, "Kia|Soul EV": 88
, "Smart|Forfour ED": 74
, "Nissan|e-NV200": 25
, "Volkswagen|e-up!": 5
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "q2019-1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
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

db.insert(db.countries.UK, "q2019-1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
{ "Nissan|Leaf": 1454
, "Jaguar|I-Pace": 917
, "BMW|i3 BEV": 794
, "Renault|Zoe": 745
, "Volkswagen|e-Golf": 521
, "Tesla|Model X": 325
, "Tesla|Model S": 320
, "Kia|Niro EV": 205
, "Hyundai|Ioniq Electric": 146
, "Smart|Fortwo ED": 112
, "Smart|Forfour ED": 66
, "Audi|e-tron": 63
, "Nissan|e-NV200": 41
, "Kia|Soul EV": 30
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "q2019-2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
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
, "Renault": 12896
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
, "other": 2603
});

db.insert(db.countries.UK, "q2019-2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
{ "Jaguar|I-Pace": 982
, "BMW|i3 BEV": 969
, "Volkswagen|e-Golf": 796
, "Renault|Zoe": 773
, "Nissan|Leaf": 760
, "Tesla|Model S": 456
, "Audi|e-tron": 352
, "Tesla|Model X": 341
, "Kia|Niro EV": 234
, "Tesla|Model 3": 177
, "Hyundai|Ioniq Electric": 66
, "Nissan|e-NV200": 51
, "Smart|Forfour ED": 23
, "Smart|Fortwo ED": 20
, "Mercedes-Benz|eVito": 12
, "Volkswagen|e-up!": 3
, "Tesla|Roadster": 1
, "Citroën|C-Zero": 1
});

db.insert(db.countries.UK, "q2019-3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
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
, "Renault": 15866
, "Volvo": 14546
, "Citroën": 13062
, "Mazda": 12017
, "Honda": 11306
, "Jaguar": 9900
, "Suzuki": 9410
, "Fiat": 7226
, "Dacia": 6762
, "Tesla": 5970
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
, "other": 2491
});

db.insert(db.countries.UK, "q2019-3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853465/veh0160.ods (per quarter)",
{ "Tesla|Model 3": 5350
, "Nissan|Leaf": 1386
, "Volkswagen|e-Golf": 1208
, "BMW|i3 BEV": 1183
, "Jaguar|I-Pace": 1171
, "Renault|Zoe": 646
, "Tesla|Model X": 366
, "Audi|e-tron": 333
, "Tesla|Model S": 256
, "Hyundai|Ioniq Electric": 172
, "Kia|Niro EV": 169
, "Smart|Fortwo ED": 136
, "Nissan|e-NV200": 72
, "MG|ZS EV": 66
, "Smart|Forfour ED": 65
, "Mercedes-Benz|EQC": 48
, "Volkswagen|e-up!": 1
, "Peugeot|Partner Electric": 1
, "Mitsubishi|i-MiEV": 1
});

db.insert(db.countries.UK, "q2019-4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/882232/veh0160.ods (per quarter)",
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

db.insert(db.countries.UK, "q2019-4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/882232/veh0160.ods (per quarter)",
{ "Tesla|Model 3": 5122
, "Nissan|Leaf": 1683
, "Volkswagen|e-Golf": 1310
, "BMW|i3 BEV": 1150
, "Jaguar|I-Pace": 1125
, "MG|ZS EV": 591
, "Audi|e-tron": 364
, "Tesla|Model X": 254
, "Renault|Zoe": 216
, "Tesla|Model S": 201
, "Smart|Fortwo ED": 120
, "Mercedes-Benz|EQC": 103
, "Hyundai|Ioniq Electric": 89
, "Nissan|e-NV200": 73
, "Kia|Niro EV": 73
, "Smart|Forfour ED": 25
, "Mini|Cooper SE Electric": 11
, "Mercedes-Benz|eVito": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 4
, "Volkswagen|e-up!": 2
});

db.insert(db.countries.UK, "q2020-1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/896250/veh0160.ods (per quarter)",
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
, "Tesla": 5697
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

db.insert(db.countries.UK, "q2020-1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/896250/veh0160.ods (per quarter)",
{ "Tesla|Model 3": 5365
, "Nissan|Leaf": 2659
, "MG|ZS EV": 1795
, "Volkswagen|e-Golf": 1205
, "Jaguar|I-Pace": 1146
, "BMW|i3 BEV": 920
, "Peugeot|e-208": 792
, "Audi|e-tron": 726
, "Kia|Niro EV": 523
, "Hyundai|Ioniq Electric": 434
, "Mini|Cooper SE Electric": 409
, "Vauxhall|Corsa-e": 359
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

db.insert(db.countries.UK, "q2020-2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/942253/veh0160.ods (per quarter)",
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
, "Tesla": 4482
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
, "Chrysler": 7
, "Cadillac": 7
, "Lincoln": 3
, "Infiniti": 1
, "other": 786
});

db.insert(db.countries.UK, "q2020-2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/942253/veh0160.ods (per quarter)",
{ "Tesla|Model 3": 4029
, "Renault|Zoe": 1136
, "Jaguar|I-Pace": 1030
, "Nissan|Leaf": 773
, "Kia|Niro EV": 737
, "Audi|e-tron": 569
, "Vauxhall|Corsa-e": 529
, "MG|ZS EV": 431
, "Hyundai|Ioniq Electric": 408
, "BMW|i3 BEV": 407
, "Peugeot|e-208": 344
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

db.insert(db.countries.UK, "q2020-3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/942253/veh0160.ods (per quarter)",
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

db.insert(db.countries.UK, "q2020-3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/942253/veh0160.ods (per quarter)",
{ "Tesla|Model 3": 5988
, "Renault|Zoe": 3072
, "Kia|Niro EV": 2988
, "Audi|e-tron": 2309
, "Nissan|Leaf": 2187
, "Jaguar|I-Pace": 2032
, "MG|ZS EV": 1800
, "BMW|i3 BEV": 1617
, "Mini|Cooper SE Electric": 1273
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
, "Mitsubishi|i-MiEV": 1
, "MG|MG5 EV": 1
});

db.insert(db.countries.UK, "q2020-4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/985637/veh0160.ods (per quarter)",
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
, "Renault": 7714
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
, "Dodge": 67
, "Chevrolet": 40
, "Opel": 25
, "Cadillac": 21
, "Lincoln": 15
, "Chrysler": 12
, "Buick": 9
, "Acura": 7
, "Infiniti": 2
, "other": 2136
});

db.insert(db.countries.UK, "q2020-4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/985637/veh0160.ods (per quarter)",
{ "Tesla|Model 3": 6968
, "Volkswagen|ID.3": 4179
, "Jaguar|I-Pace": 4093
, "Nissan|Leaf": 2614
, "Audi|e-tron": 2295
, "Kia|Niro EV": 2287
, "Mercedes-Benz|EQC": 2094
, "Porsche|Taycan": 1956
, "Renault|Zoe": 1886
, "MG|ZS EV": 1562
, "BMW|i3 BEV": 1504
, "Mini|Cooper SE Electric": 1427
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
, "Ford|Mustang Mach-E": 37
, "Volkswagen|e-up!": 32
, "Vauxhall|Vivaro-e": 20
, "Peugeot|e-Traveller": 3
, "Citroën|ë-SpaceTourer": 2
, "Lexus|UX 300e": 1
});

db.insert(db.countries.UK, "q2021-1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/985637/veh0160.ods (per quarter)",
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
, "Lincoln": 20
, "Chrysler": 20
, "Cadillac": 15
, "Buick": 9
, "Acura": 2
, "other": 2996
});

db.insert(db.countries.UK, "q2021-1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/985637/veh0160.ods (per quarter)",
{ "Tesla|Model 3": 7164
, "Kia|Niro EV": 3268
, "Nissan|Leaf": 2293
, "Audi|e-tron": 1500
, "Vauxhall|Corsa-e": 1231
, "MG|ZS EV": 1191
, "Peugeot|e-2008": 1155
, "Hyundai|Kona Electric": 1094
, "Mercedes-Benz|EQC": 1059
, "Mini|Cooper SE Electric": 1020
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
, "Peugeot|e-Traveller": 21
, "Tesla|Model S": 18
, "Volkswagen|e-up!": 16
, "Audi|e-tron GT": 3
, "Ford|Mustang Mach-E": 2
, "Citroën|ë-SpaceTourer": 2
, "Tesla|Roadster": 1
});
