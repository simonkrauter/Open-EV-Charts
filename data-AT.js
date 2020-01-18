// // Data sets for car sales in Austria

"use strict";

db.addCountry("AT", "Austria");

db.insert(db.countries.AT, "2019-01", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 16
, "other": 1550
});

db.insert(db.countries.AT, "2019-01", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "BMW|i3 BEV": 106
, "Hyundai|Kona Electric": 84
, "Volkswagen|e-Golf": 71
, "Renault|ZOE": 65
, "Nissan|Leaf": 56
, "Kia|Niro EV": 36
, "Hyundai|Ioniq Electric": 27
, "Tesla|Model S": 16
, "Jaguar|I-Pace": 15
, "Smart|Fortwo electric drive": 13
});

db.insert(db.countries.AT, "2019-02", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 156
, "other": 1636
});

db.insert(db.countries.AT, "2019-02", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Tesla|Model 3": 136
, "BMW|i3 BEV": 105
, "Nissan|Leaf": 83
, "Volkswagen|e-Golf": 81
, "Renault|ZOE": 75
, "Kia|Niro EV": 47
, "Hyundai|Ioniq Electric": 41
, "Hyundai|Kona Electric": 35
, "Jaguar|I-Pace": 25
, "Tesla|Model S": 20
});

db.insert(db.countries.AT, "2019-03", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 727
, "Toyota": 550
, "Nissan": 533
, "other": 2578
});

db.insert(db.countries.AT, "2019-03", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Tesla|Model 3": 703
, "BMW|i3 BEV": 107
, "Volkswagen|e-Golf": 97
, "Renault|ZOE": 79
, "Hyundai|Kona Electric": 62
, "Nissan|Leaf": 62
, "Audi|e-tron": 53
, "Kia|Niro EV": 48
, "Jaguar|I-Pace": 28
, "Tesla|Model X": 24
});

db.insert(db.countries.AT, "2019-04", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 173
, "other": 2219
});

db.insert(db.countries.AT, "2019-04", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Tesla|Model 3": 142
, "Renault|ZOE": 82
, "Volkswagen|e-Golf": 78
, "BMW|i3 BEV": 77
, "Kia|Niro EV": 62
, "Hyundai|Kona Electric": 59
, "Jaguar|I-Pace": 39
, "Nissan|Leaf": 38
, "Tesla|Model S": 31
, "Hyundai|Ioniq Electric": 29
});

db.insert(db.countries.AT, "2019-05", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 159
, "other": 2106
});

db.insert(db.countries.AT, "2019-05", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Renault|ZOE": 133
, "Tesla|Model 3": 127
, "BMW|i3 BEV": 77
, "Volkswagen|e-Golf": 62
, "Kia|Niro EV": 48
, "Hyundai|Kona Electric": 43
, "Hyundai|Ioniq Electric": 42
, "Audi|e-tron": 36
, "Tesla|Model S": 32
, "Nissan|Leaf": 27
});

db.insert(db.countries.AT, "2019-06", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "other": 2394
});

db.insert(db.countries.AT, "2019-06", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Tesla|Model 3": 346
, "BMW|i3 BEV": 99
, "Tesla|Model S": 80
, "Renault|ZOE": 72
, "Volkswagen|e-Golf": 58
, "Hyundai|Kona Electric": 44
, "Nissan|Leaf": 43
, "Tesla|Model X": 43
, "Audi|e-tron": 38
, "Kia|Niro EV": 30
});

db.insert(db.countries.AT, "2019-07", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Volkswagen": 5524
, "Škoda": 2490
, "Seat": 1917
, "Ford": 1828
, "BMW": 1738
, "Opel": 1726
, "Renault": 1407
, "Hyundai": 1382
, "Mercedes-Benz": 1374
, "Audi": 1354
, "Fiat": 1256
, "Peugeot": 1150
, "Suzuki": 977
, "Dacia": 943
, "Mazda": 866
, "Kia": 793
, "Citroën": 716
, "Toyota": 647
, "Mini": 528
, "Volvo": 478
, "Tesla": 163
, "other": 2360
});

db.insert(db.countries.AT, "2019-07", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Tesla|Model 3": 111
, "Hyundai|Kona Electric": 85
, "BMW|i3 BEV": 79
, "Audi|e-tron": 78
, "Volkswagen|e-Golf": 53
, "Renault|ZOE": 52
, "Nissan|Leaf": 47
, "Tesla|Model X": 30
, "Tesla|Model S": 22
});

db.insert(db.countries.AT, "2019-08", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 130
, "other": 2094
});

db.insert(db.countries.AT, "2019-08", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Tesla|Model 3": 83
, "BMW|i3 BEV": 156
, "Renault|ZOE": 133
, "Volkswagen|e-Golf": 77
, "Hyundai|Kona Electric": 114
, "Nissan|Leaf": 28
, "Kia|Niro EV": 88
, "Audi|e-tron": 58
, "Tesla|Model S": 47
, "Hyundai|Ioniq Electric": 95
});

db.insert(db.countries.AT, "2019-09", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "other": 1818
});

db.insert(db.countries.AT, "2019-09", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Tesla|Model 3": 387
, "BMW|i3 BEV": 112
, "Renault|ZOE": 88
, "Hyundai|Kona Electric": 76
, "Nissan|Leaf": 60
, "Tesla|Model S": 44
, "Audi|e-tron": 40
, "Volkswagen|e-Golf": 33
, "Tesla|Model X": 27
, "Kia|Niro EV": 24
});

db.insert(db.countries.AT, "2019-10", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 25
, "other": 1830
});

db.insert(db.countries.AT, "2019-10", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "BMW|i3 BEV": 90
, "Renault|ZOE": 58
, "Nissan|Leaf": 52
, "Volkswagen|e-Golf": 50
, "Hyundai|Kona Electric": 48
, "Hyundai|Ioniq Electric": 47
, "Smart|Fortwo electric drive": 27
, "Tesla|Model 3": 25
, "Audi|e-tron": 24
, "Kia|Soul": 23
});

db.insert(db.countries.AT, "2019-11", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 119
, "other": 1210
});

db.insert(db.countries.AT, "2019-11", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Hyundai|Kona Electric": 194
, "BMW|i3 BEV": 116
, "Volkswagen|e-Golf": 67
, "Tesla|Model 3": 66
, "Nissan|Leaf": 46
, "Tesla|Model S": 36
, "Hyundai|Ioniq Electric": 33
, "Renault|ZOE": 25
, "Audi|e-tron": 21
, "Tesla|Model X": 17
});

db.insert(db.countries.AT, "2019-12", db.dsTypes.AllCarsByBrand, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
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
, "Tesla": 256
, "other": 1143
});

db.insert(db.countries.AT, "2019-12", db.dsTypes.ElectricCarsByModel, "http://www.statistik.at/wcm/idc/idcplg?IdcService=GET_NATIVE_FILE&RevisionSelectionMethod=LatestReleased&dDocName=120255",
{ "Tesla|Model 3": 216
, "BMW|i3 BEV": 67
, "Renault|ZOE": 82
, "Hyundai|Kona Electric": 53
, "Volkswagen|e-Golf": 78
, "Nissan|Leaf": 15
, "Kia|Niro EV": 22
, "Tesla|Model S": 40
, "Audi|e-tron": 16
, "Hyundai|Ioniq Electric": 28
});
