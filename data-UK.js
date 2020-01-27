// Data sets for car sales in the United Kingdom

"use strict";

db.addCountry("UK", "United Kingdom");

db.insert(db.countries.UK, "q2018-1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
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
, "Bentley": 555
, "Maserati": 441
, "Infiniti": 312
, "Chevrolet": 69
, "Dodge": 56
, "Opel": 25
, "Cadillac": 20
, "Chrysler": 20
, "Lincoln": 18
, "Buick": 3
, "other": 1931
});

db.insert(db.countries.UK, "q2018-1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
{ "Nissan|Leaf": 2015
, "Tesla|Model S": 541
, "Renault|ZOE": 429
, "Tesla|Model X": 293
, "BMW|i3 BEV": 256
, "Volkswagen|e-Golf": 134
, "Kia|Soul EV": 58
, "Nissan|e-NV200": 9
, "Volkswagen|e-up!": 4
, "Jaguar|I-Pace": 3
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "q2018-2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
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
, "Bentley": 518
, "Maserati": 316
, "Infiniti": 241
, "Chevrolet": 78
, "Dodge": 72
, "Opel": 36
, "Chrysler": 23
, "Cadillac": 20
, "Lincoln": 18
, "Buick": 17
, "Alpine": 2
, "Acura": 1
, "other": 2181
});

db.insert(db.countries.UK, "q2018-2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
{ "Nissan|Leaf": 1501
, "Tesla|Model S": 498
, "Tesla|Model X": 422
, "Renault|ZOE": 402
, "BMW|i3 BEV": 171
, "Volkswagen|e-Golf": 156
, "Kia|Soul EV": 96
, "Jaguar|I-Pace": 92
, "Nissan|e-NV200": 16
, "Volkswagen|e-up!": 13
, "Peugeot|iOn": 5
});

db.insert(db.countries.UK, "q2018-3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
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
, "Bentley": 532
, "Maserati": 308
, "Alpine": 126
, "Infiniti": 122
, "Chevrolet": 74
, "Dodge": 74
, "Chrysler": 35
, "Cadillac": 25
, "Opel": 25
, "Lincoln": 22
, "Buick": 11
, "Acura": 2
, "other": 2084
});

db.insert(db.countries.UK, "q2018-3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
{ "Nissan|Leaf": 961
, "Tesla|Model S": 498
, "Renault|ZOE": 454
, "Tesla|Model X": 442
, "BMW|i3 BEV": 363
, "Volkswagen|e-Golf": 332
, "Jaguar|I-Pace": 211
, "Kia|Soul EV": 181
, "Nissan|e-NV200": 23
, "Volkswagen|e-up!": 5
});

db.insert(db.countries.UK, "q2018-4", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
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
, "Bentley": 344
, "Maserati": 287
, "Infiniti": 91
, "Dodge": 73
, "Chevrolet": 72
, "Opel": 31
, "Chrysler": 25
, "Lincoln": 18
, "Alpine": 17
, "Cadillac": 15
, "Buick": 14
, "Acura": 2
, "other": 1595
});

db.insert(db.countries.UK, "q2018-4", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
{ "Nissan|Leaf": 939
, "Renault|ZOE": 696
, "Jaguar|I-Pace": 534
, "BMW|i3 BEV": 419
, "Volkswagen|e-Golf": 358
, "Tesla|Model S": 351
, "Tesla|Model X": 322
, "Kia|Soul EV": 88
, "Nissan|e-NV200": 25
, "Volkswagen|e-up!": 5
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "q2019-1", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
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
, "Bentley": 534
, "Maserati": 307
, "Infiniti": 95
, "Chevrolet": 67
, "Dodge": 63
, "Alpine": 44
, "Opel": 30
, "Chrysler": 26
, "Cadillac": 17
, "Lincoln": 16
, "Buick": 12
, "Acura": 4
, "other": 2279
});

db.insert(db.countries.UK, "q2019-1", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
{ "Volkswagen|e-Golf": 1579
, "Nissan|Leaf": 1454
, "Jaguar|I-Pace": 917
, "BMW|i3 BEV": 794
, "Renault|ZOE": 745
, "Tesla|Model X": 325
, "Tesla|Model S": 320
, "Audi|e-tron": 63
, "Nissan|e-NV200": 41
, "Kia|Soul EV": 30
, "Peugeot|iOn": 1
});

db.insert(db.countries.UK, "q2019-2", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
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
, "Bentley": 495
, "SsangYong": 380
, "Maserati": 262
, "Infiniti": 105
, "Chevrolet": 85
, "Dodge": 61
, "Alpine": 44
, "Opel": 38
, "Lincoln": 28
, "Cadillac": 23
, "Chrysler": 22
, "Buick": 14
, "Acura": 3
, "other": 2064
});

db.insert(db.countries.UK, "q2019-2", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
{ "Jaguar|I-Pace": 982
, "BMW|i3 BEV": 969
, "Volkswagen|e-Golf": 796
, "Renault|ZOE": 773
, "Nissan|Leaf": 760
, "Tesla|Model S": 456
, "Audi|e-tron": 352
, "Tesla|Model X": 341
, "Tesla|Model 3": 177
, "Nissan|e-NV200": 51
, "Mercedes-Benz|eVito": 12
, "Volkswagen|e-up!": 3
, "Citroën|C-Zero": 1
, "Tesla|Roadster": 1
});

db.insert(db.countries.UK, "q2019-3", db.dsTypes.AllCarsByBrand, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
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
, "Bentley": 475
, "Maserati": 237
, "Chevrolet": 103
, "Infiniti": 87
, "Alpine": 51
, "Dodge": 51
, "Chrysler": 36
, "Opel": 32
, "Cadillac": 30
, "Lincoln": 27
, "Buick": 6
, "Acura": 2
, "other": 1965
});

db.insert(db.countries.UK, "q2019-3", db.dsTypes.ElectricCarsByModel, "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/853466/veh0161.ods (per quarter)",
{ "Tesla|Model 3": 5350
, "Nissan|Leaf": 1386
, "Volkswagen|e-Golf": 1208
, "BMW|i3 BEV": 1183
, "Jaguar|I-Pace": 1171
, "Renault|ZOE": 646
, "Tesla|Model X": 366
, "Audi|e-tron": 333
, "Tesla|Model S": 256
, "Nissan|e-NV200": 72
, "Mercedes-Benz|EQC": 48
, "Peugeot|Partner Electric": 1
, "Volkswagen|e-up!": 1
});
