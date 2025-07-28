// Data sets for car sales in Italy

"use strict";

// http://www.unrae.it/dati-statistici/immatricolazioni

db.insert(db.countries.IT, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Gennaio%202018_UNRAE%20marca_5a73007702c12.pdf",
{ "Fiat": 34470
, "Volkswagen": 13382
, "Ford": 12532
, "Peugeot": 10879
, "Renault": 9503
, "Citroën": 8776
, "Opel": 8702
, "Toyota": 8135
, "Jeep/Dodge": 7439
, "Audi": 6502
, "Nissan": 6446
, "Dacia": 6135
, "BMW": 4832
, "Mercedes-Benz": 4758
, "Kia": 4054
, "Hyundai": 4018
, "Suzuki": 3363
, "Škoda": 2260
, "Land Rover": 1965
, "Seat": 1702
, "Smart": 1570
, "Mini": 1484
, "Mazda": 1157
, "Volvo": 1095
, "Honda": 803
, "Porsche": 678
, "Jaguar": 630
, "Mitsubishi": 387
, "Subaru": 244
, "other": 9921
});

db.insert(db.countries.IT, "2018-01", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/gennaio_Top%20ten%20per%20alimentazione_5a730024c922c.xlsx",
{ "Smart|Fortwo ED": 131
, "Renault|Zoe": 31
, "Tesla|Model S": 22
, "BMW|i3 BEV": 21
, "Smart|Forfour ED": 19
, "Volkswagen|e-Golf": 8
, "Tesla|Model X": 7
, "Citroën|C-Zero": 5
, "Citroën|ë-Berlingo Electric": 4
, "other": 12
});

db.insert(db.countries.IT, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Febbraio%202018_UNRAE_marca_5a98211da8b07.pdf",
{ "Fiat": 32409
, "Volkswagen": 16178
, "Ford": 12841
, "Peugeot": 11444
, "Renault": 9884
, "Citroën": 9088
, "Opel": 8364
, "Toyota": 8049
, "Dacia": 6874
, "Jeep/Dodge": 6854
, "Nissan": 6397
, "Audi": 5681
, "Mercedes-Benz": 5550
, "BMW": 5518
, "Hyundai": 4530
, "Kia": 4413
, "Suzuki": 2970
, "Škoda": 2335
, "Seat": 2158
, "Mini": 2015
, "Smart": 1821
, "Land Rover": 1703
, "Volvo": 1141
, "Mazda": 991
, "Honda": 871
, "Jaguar": 723
, "Porsche": 442
, "Mitsubishi": 355
, "Subaru": 251
, "other": 9884
});

db.insert(db.countries.IT, "2018-02", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20febbraio%202018_UNRAE%20Top%20alimentazione_5a9820a173789.pdf",
{ "Smart|Fortwo ED": 125
, "Citroën|C-Zero": 26
, "Nissan|Leaf": 22
, "Renault|Zoe": 21
, "BMW|i3 BEV": 15
, "Tesla|Model S": 8
, "Tesla|Model X": 7
, "Volkswagen|e-Golf": 7
, "Smart|Forfour ED": 5
, "Citroën|E-Mehari": 3
, "other": 7
});

db.insert(db.countries.IT, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marzo%202018_UNRAE_marca_5ac38b401e2d4.pdf",
{ "Fiat": 40228
, "Volkswagen": 18108
, "Ford": 15502
, "Renault": 13909
, "Peugeot": 11503
, "Opel": 11073
, "Citroën": 9772
, "Jeep/Dodge": 8609
, "Toyota": 8565
, "Mercedes-Benz": 7444
, "Nissan": 6933
, "Audi": 6638
, "BMW": 6446
, "Hyundai": 5389
, "Dacia": 4775
, "Kia": 4236
, "Smart": 3030
, "Suzuki": 2769
, "Škoda": 2709
, "Seat": 2460
, "Land Rover": 2403
, "Mini": 2067
, "Volvo": 1877
, "Mazda": 1416
, "Jaguar": 1261
, "Honda": 1130
, "Mitsubishi": 415
, "Porsche": 368
, "Subaru": 267
, "Tesla": 77
, "other": 12352
});

db.insert(db.countries.IT, "2018-03", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/marzo%202018_UNRAE%20Top%20alimentazione_5ac358306a5a7.pdf",
{ "Smart|Fortwo ED": 117
, "Nissan|Leaf": 102
, "Tesla|Model S": 49
, "Renault|Zoe": 31
, "Citroën|C-Zero": 30
, "Tesla|Model X": 28
, "Smart|Forfour ED": 19
, "Citroën|ë-Berlingo Electric": 15
, "BMW|i3 BEV": 13
, "Volkswagen|e-Golf": 5
, "other": 7
});

db.insert(db.countries.IT, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Aprile%202018_UNRAE_marca_5ae9d6da38912.pdf",
{ "Fiat": 29680
, "Volkswagen": 14397
, "Renault": 12291
, "Ford": 11864
, "Peugeot": 9529
, "Opel": 8168
, "Citroën": 7786
, "Toyota": 7641
, "Jeep/Dodge": 7481
, "Audi": 5849
, "Kia": 5228
, "BMW": 5103
, "Mercedes-Benz": 4924
, "Nissan": 4587
, "Hyundai": 4500
, "Dacia": 4300
, "Suzuki": 2890
, "Škoda": 2471
, "Smart": 2181
, "Seat": 2063
, "Mini": 2022
, "Volvo": 1670
, "Land Rover": 1461
, "Jaguar": 857
, "Mazda": 780
, "Honda": 766
, "Mitsubishi": 420
, "Porsche": 314
, "Subaru": 248
, "Tesla": 34
, "other": 9874
});

db.insert(db.countries.IT, "2018-04", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20aprile%202018_UNRAE_Top_alimentazione_5ae9d660a866e.pdf",
{ "Smart|Fortwo ED": 82
, "Renault|Zoe": 60
, "Tesla|Model S": 26
, "Nissan|Leaf": 24
, "Smart|Forfour ED": 17
, "BMW|i3 BEV": 11
, "Tesla|Model X": 8
, "Volkswagen|e-up!": 5
, "Volkswagen|e-Golf": 3
, "Jaguar|I-Pace": 2
, "other": 5
});

db.insert(db.countries.IT, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Maggio%202018_UNRAE_marca_5b1144e5e99ee.pdf",
{ "Fiat": 35336
, "Volkswagen": 17911
, "Renault": 15145
, "Ford": 12761
, "Peugeot": 10398
, "Opel": 10096
, "Jeep/Dodge": 9885
, "Toyota": 8419
, "Citroën": 8140
, "Audi": 6481
, "Dacia": 6289
, "Mercedes-Benz": 6198
, "Hyundai": 5274
, "BMW": 5243
, "Nissan": 5199
, "Kia": 4773
, "Suzuki": 3218
, "Smart": 2986
, "Škoda": 2463
, "Seat": 2147
, "Mini": 2005
, "Volvo": 1675
, "Land Rover": 1653
, "Jaguar": 897
, "Mazda": 872
, "Honda": 819
, "Porsche": 692
, "Mitsubishi": 453
, "Subaru": 307
, "Tesla": 27
, "other": 11351
});

db.insert(db.countries.IT, "2018-05", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20maggio%20Top%20alimentazione_5b11434668577.pdf",
{ "Nissan|Leaf": 199
, "Renault|Zoe": 186
, "Smart|Fortwo ED": 66
, "Citroën|ë-Berlingo Electric": 46
, "Tesla|Model X": 19
, "Smart|Forfour ED": 17
, "BMW|i3 BEV": 15
, "Volkswagen|e-Golf": 9
, "Tesla|Model S": 8
, "Jaguar|I-Pace": 7
, "other": 22
});

db.insert(db.countries.IT, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Giugno%202018_UNRAE_marca_5b3a1ad79c62d.pdf",
{ "Fiat": 27988
, "Volkswagen": 16068
, "Renault": 13291
, "Ford": 11558
, "Opel": 8984
, "Peugeot": 8913
, "Jeep/Dodge": 7713
, "Toyota": 7505
, "Audi": 7241
, "Citroën": 6813
, "Dacia": 5701
, "Mercedes-Benz": 5682
, "BMW": 5653
, "Hyundai": 5158
, "Nissan": 4138
, "Kia": 3993
, "Smart": 3180
, "Suzuki": 2437
, "Škoda": 2414
, "Mini": 2049
, "Seat": 2000
, "Land Rover": 1588
, "Volvo": 1562
, "Honda": 873
, "Jaguar": 856
, "Mazda": 768
, "Porsche": 705
, "Mitsubishi": 488
, "Subaru": 365
, "Tesla": 75
, "other": 8943
});

db.insert(db.countries.IT, "2018-06", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/giugno%20Top%20alimentazione_5b3a1aa2c718b.pdf",
{ "Smart|Fortwo ED": 106
, "Nissan|Leaf": 99
, "Renault|Zoe": 96
, "Tesla|Model S": 42
, "Tesla|Model X": 33
, "Smart|Forfour ED": 18
, "Citroën|E-Mehari": 12
, "Volkswagen|e-Golf": 8
, "BMW|i3 BEV": 7
, "Volkswagen|e-up!": 6
, "other": 13
});

db.insert(db.countries.IT, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Luglio%202018_UNRAE_marca_5b618ce455dcd.pdf",
{ "Fiat": 26537
, "Volkswagen": 12885
, "Renault": 11109
, "Ford": 9759
, "Peugeot": 7995
, "Opel": 7225
, "Jeep/Dodge": 7205
, "Toyota": 7034
, "Citroën": 5876
, "Audi": 5250
, "Dacia": 4970
, "Kia": 4505
, "Hyundai": 4260
, "Mercedes-Benz": 4239
, "Nissan": 4145
, "BMW": 4106
, "Suzuki": 2576
, "Smart": 2208
, "Volvo": 1633
, "Škoda": 1519
, "Seat": 1405
, "Mini": 1374
, "Land Rover": 1025
, "Porsche": 816
, "Mazda": 798
, "Honda": 638
, "Jaguar": 619
, "Mitsubishi": 535
, "Subaru": 295
, "Tesla": 16
, "other": 9836
});

db.insert(db.countries.IT, "2018-07", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/luglio%202018_UNRAE_Top%2010%20alimentazione_5b618c4a07ec9.pdf",
{ "Nissan|Leaf": 389
, "Smart|Fortwo ED": 74
, "Renault|Zoe": 67
, "Jaguar|I-Pace": 37
, "Citroën|E-Mehari": 14
, "Smart|Forfour ED": 14
, "Tesla|Model S": 9
, "BMW|i3 BEV": 8
, "Tesla|Model X": 7
, "Volkswagen|e-up!": 6
, "other": 16
});

db.insert(db.countries.IT, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Agosto%202018_UNRAE_marca_5b8d559823a4b.pdf",
{ "Fiat": 14151
, "Renault": 9581
, "Volkswagen": 6548
, "Ford": 6025
, "Jeep/Dodge": 5665
, "Peugeot": 4846
, "Dacia": 4476
, "Opel": 4455
, "Citroën": 3957
, "Toyota": 3916
, "Hyundai": 2772
, "BMW": 2557
, "Kia": 2425
, "Nissan": 2344
, "Audi": 2081
, "Mercedes-Benz": 1898
, "Škoda": 1245
, "Suzuki": 1217
, "Seat": 1156
, "Volvo": 893
, "Smart": 677
, "Mini": 664
, "Porsche": 436
, "Mazda": 424
, "Land Rover": 355
, "Honda": 349
, "Mitsubishi": 288
, "Jaguar": 193
, "Subaru": 159
, "Tesla": 25
, "other": 5773
});

db.insert(db.countries.IT, "2018-08", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20agosto%202018_UNRAE_Top%2010%20alimentazione_5b8d5538795ce.pdf",
{ "Renault|Zoe": 60
, "Nissan|Leaf": 30
, "Smart|Fortwo ED": 23
, "Tesla|Model X": 18
, "Citroën|C-Zero": 13
, "Volkswagen|e-up!": 11
, "BMW|i3 BEV": 7
, "Peugeot|iOn": 7
, "Tesla|Model S": 7
, "Hyundai|Kona Electric": 4
, "other": 10
});

db.insert(db.countries.IT, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Settembre%202018_UNRAE_marca_5bb2241490d58.pdf",
{ "Fiat": 18724
, "Volkswagen": 9713
, "Ford": 9125
, "Peugeot": 7866
, "Toyota": 7350
, "Opel": 7060
, "Renault": 5656
, "Mercedes-Benz": 5178
, "Citroën": 5103
, "BMW": 4829
, "Hyundai": 4506
, "Jeep/Dodge": 4442
, "Nissan": 4049
, "Kia": 3755
, "Audi": 3200
, "Suzuki": 2632
, "Dacia": 2333
, "Smart": 1935
, "Volvo": 1921
, "Škoda": 1891
, "Mini": 1736
, "Mazda": 1034
, "Land Rover": 1021
, "Seat": 887
, "Jaguar": 866
, "Honda": 612
, "Mitsubishi": 611
, "Subaru": 329
, "Porsche": 136
, "Tesla": 60
, "other": 6416
});

db.insert(db.countries.IT, "2018-09", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20settembre_Top%2010%20alimentazione_5bb2238424240.pdf",
{ "Nissan|Leaf": 170
, "Renault|Zoe": 102
, "Smart|Fortwo ED": 71
, "Tesla|Model S": 31
, "BMW|i3 BEV": 29
, "Tesla|Model X": 29
, "Smart|Forfour ED": 13
, "Hyundai|Kona Electric": 10
, "Jaguar|I-Pace": 10
, "Citroën|C-Zero": 9
, "other": 15
});

db.insert(db.countries.IT, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Ottobre%202018_UNRAE_marca_5bdc5e5628262.pdf",
{ "Fiat": 22547
, "Volkswagen": 12305
, "Ford": 10578
, "Peugeot": 8935
, "Opel": 8004
, "Toyota": 7975
, "Renault": 7505
, "Citroën": 6213
, "Jeep/Dodge": 5381
, "Mercedes-Benz": 5294
, "Hyundai": 4840
, "BMW": 4641
, "Audi": 4445
, "Kia": 4131
, "Nissan": 4015
, "Dacia": 3835
, "Suzuki": 3182
, "Škoda": 2208
, "Volvo": 2020
, "Smart": 1968
, "Mini": 1934
, "Land Rover": 1712
, "Seat": 1334
, "Mazda": 1001
, "Jaguar": 888
, "Mitsubishi": 771
, "Honda": 722
, "Subaru": 344
, "Porsche": 139
, "Tesla": 17
, "other": 7771
});

db.insert(db.countries.IT, "2018-10", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20ottobre%202018_UNRAE_Top%2010%20alimentazione_5bdc5a39cfb4e.pdf",
{ "Nissan|Leaf": 218
, "Renault|Zoe": 161
, "Smart|Fortwo ED": 112
, "Smart|Forfour ED": 17
, "Jaguar|I-Pace": 15
, "Tesla|Model S": 13
, "BMW|i3 BEV": 12
, "Hyundai|Kona Electric": 11
, "Citroën|C-Zero": 6
, "Peugeot|iOn": 5
, "other": 17
});

db.insert(db.countries.IT, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Novembre%202018_UNRAE_marca_5c05488947aef.pdf",
{ "Fiat": 22064
, "Volkswagen": 13323
, "Ford": 9213
, "Peugeot": 8706
, "Renault": 8109
, "Toyota": 7822
, "Opel": 7469
, "Jeep/Dodge": 7066
, "Dacia": 6319
, "Citroën": 5929
, "Mercedes-Benz": 5262
, "Hyundai": 4654
, "Audi": 4546
, "BMW": 4469
, "Kia": 3402
, "Nissan": 3285
, "Suzuki": 3200
, "Škoda": 2081
, "Mini": 2077
, "Volvo": 2006
, "Smart": 1659
, "Seat": 1519
, "Land Rover": 1423
, "Mazda": 902
, "Jaguar": 892
, "Honda": 728
, "Mitsubishi": 705
, "Subaru": 336
, "Porsche": 123
, "Tesla": 34
, "other": 7668
});

db.insert(db.countries.IT, "2018-11", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20novembre%202018_UNRAE_Top%2010%20alimentazione_5c0542f867e46.pdf",
{ "Nissan|Leaf": 134
, "Renault|Zoe": 97
, "Smart|Fortwo ED": 91
, "Volkswagen|e-Golf": 44
, "Tesla|Model S": 17
, "Tesla|Model X": 17
, "BMW|i3 BEV": 12
, "Hyundai|Kona Electric": 10
, "Jaguar|I-Pace": 10
, "Smart|Forfour ED": 10
, "other": 20
});

db.insert(db.countries.IT, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Dicembre%202018_UNRAE_marca_5c2ccafd4f59a.pdf",
{ "Fiat": 18710
, "Volkswagen": 11424
, "Renault": 8910
, "Ford": 7514
, "Peugeot": 7221
, "Jeep/Dodge": 6664
, "Opel": 5504
, "Dacia": 5426
, "Citroën": 5247
, "Toyota": 4900
, "Audi": 4743
, "Mercedes-Benz": 4371
, "BMW": 3546
, "Hyundai": 3424
, "Nissan": 2947
, "Kia": 2635
, "Suzuki": 2435
, "Škoda": 1679
, "Volvo": 1540
, "Smart": 1379
, "Mini": 1075
, "Seat": 1071
, "Land Rover": 1002
, "Mazda": 700
, "Mitsubishi": 564
, "Jaguar": 546
, "Honda": 525
, "Porsche": 424
, "Subaru": 204
, "Tesla": 53
, "other": 7695
});

db.insert(db.countries.IT, "2018-12", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20dicembre%202018_UNRAE_Top%2010%20alimentazione_5c2cca0d8fb13.pdf",
{ "Renault|Zoe": 116
, "Nissan|Leaf": 68
, "Smart|Fortwo ED": 53
, "Tesla|Model S": 30
, "BMW|i3 BEV": 29
, "Tesla|Model X": 23
, "Volkswagen|e-Golf": 14
, "Smart|Forfour ED": 12
, "Volkswagen|e-up!": 11
, "Hyundai|Kona Electric": 10
, "other": 14
});

db.insert(db.countries.IT, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Gennaio%202019_UNRAE_marca_5c544cec4f74c.pdf",
{ "Fiat": 24445
, "Volkswagen": 14865
, "Peugeot": 11346
, "Ford": 11152
, "Opel": 9638
, "Citroën": 8959
, "Renault": 8213
, "Toyota": 8100
, "Dacia": 7728
, "Jeep/Dodge": 6249
, "BMW": 4894
, "Mercedes-Benz": 4845
, "Kia": 4439
, "Nissan": 4104
, "Audi": 4087
, "Hyundai": 3554
, "Suzuki": 3388
, "Škoda": 2027
, "Smart": 1792
, "Land Rover": 1782
, "Volvo": 1704
, "Seat": 1608
, "Mini": 1543
, "Mazda": 1051
, "Jaguar": 951
, "Honda": 747
, "Mitsubishi": 714
, "Porsche": 282
, "Subaru": 229
, "Tesla": 18
, "other": 10410
});

db.insert(db.countries.IT, "2019-01", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20gennaio%202019_Top%20ten%20per%20alimentazione_5c542aaf547b3.pdf",
{ "Smart|Fortwo ED": 94
, "Renault|Zoe": 57
, "Nissan|Leaf": 51
, "BMW|i3 BEV": 16
, "Jaguar|I-Pace": 14
, "Tesla|Model X": 12
, "Citroën|C-Zero": 6
, "Tesla|Model S": 6
, "Volkswagen|e-Golf": 6
, "Smart|Forfour ED": 5
, "other": 15
});

db.insert(db.countries.IT, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Febbraio%202019_UNRAE_marca_5c7914402f4be.pdf",
{ "Fiat": 26562
, "Volkswagen": 15915
, "Ford": 11433
, "Peugeot": 11264
, "Renault": 9868
, "Opel": 9626
, "Jeep/Dodge": 9449
, "Citroën": 9127
, "Toyota": 8351
, "Dacia": 6068
, "Mercedes-Benz": 5889
, "Audi": 5675
, "BMW": 5658
, "Nissan": 4518
, "Hyundai": 4123
, "Kia": 4083
, "Suzuki": 3510
, "Seat": 2592
, "Škoda": 2258
, "Land Rover": 2049
, "Mini": 2038
, "Volvo": 1877
, "Smart": 1456
, "Jaguar": 1116
, "Mazda": 1079
, "Honda": 909
, "Mitsubishi": 757
, "Porsche": 346
, "Subaru": 282
, "Tesla": 96
, "other": 9851
});

db.insert(db.countries.IT, "2019-02", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/febbraio_Top%2010%20alimentazione_5c790836520b6.pdf",
{ "Tesla|Model 3": 80
, "Nissan|Leaf": 46
, "Smart|Fortwo ED": 28
, "BMW|i3 BEV": 20
, "Jaguar|I-Pace": 12
, "Audi|Q8 e-tron": 10
, "Renault|Zoe": 10
, "Smart|Forfour ED": 10
, "Tesla|Model X": 9
, "Tesla|Model S": 7
, "other": 18
});

db.insert(db.countries.IT, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marzo%202019_UNRAE_marca_5ca21da1f1f3e.pdf",
{ "Fiat": 31632
, "Volkswagen": 17535
, "Ford": 12296
, "Renault": 12225
, "Opel": 10959
, "Peugeot": 10889
, "Citroën": 9516
, "Dacia": 8653
, "Toyota": 8558
, "Jeep/Dodge": 7907
, "Audi": 6418
, "BMW": 6327
, "Mercedes-Benz": 6300
, "Nissan": 4654
, "Hyundai": 4624
, "Kia": 3935
, "Suzuki": 2835
, "Seat": 2804
, "Škoda": 2671
, "Smart": 2362
, "Mini": 2226
, "Volvo": 2103
, "Mazda": 1369
, "Land Rover": 1338
, "Honda": 893
, "Jaguar": 659
, "Mitsubishi": 604
, "Porsche": 390
, "Tesla": 269
, "Subaru": 166
, "other": 10545
});

db.insert(db.countries.IT, "2019-03", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20marzo%202019_UNRAE_Top%2010%20alimentazione_5ca21cfa3ad7f.pdf",
{ "Tesla|Model 3": 232
, "Nissan|Leaf": 96
, "Renault|Zoe": 68
, "Audi|Q8 e-tron": 39
, "Jaguar|I-Pace": 29
, "Smart|Fortwo ED": 25
, "Smart|Forfour ED": 24
, "BMW|i3 BEV": 22
, "Tesla|Model X": 19
, "Tesla|Model S": 18
, "other": 49
});

db.insert(db.countries.IT, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Aprile%202019_UNRAE_marca_5ccb0103396fd.pdf",
{ "Fiat": 29612
, "Volkswagen": 15237
, "Ford": 10928
, "Peugeot": 10195
, "Opel": 9964
, "Renault": 9414
, "Dacia": 8483
, "Citroën": 8335
, "Toyota": 8169
, "Jeep/Dodge": 6557
, "Audi": 5623
, "Kia": 4794
, "BMW": 4749
, "Mercedes-Benz": 4555
, "Nissan": 4416
, "Hyundai": 3733
, "Suzuki": 3401
, "Smart": 3116
, "Seat": 2546
, "Škoda": 2363
, "Volvo": 1777
, "Mini": 1742
, "Land Rover": 1211
, "Mazda": 833
, "Porsche": 787
, "Honda": 745
, "Jaguar": 731
, "Mitsubishi": 577
, "Tesla": 209
, "Subaru": 128
, "other": 9482
});

db.insert(db.countries.IT, "2019-04", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20aprile%20Top%2010%20alimentazione_5ccb005f4ad89.pdf",
{ "Renault|Zoe": 398
, "Nissan|Leaf": 203
, "Smart|Fortwo ED": 162
, "Tesla|Model 3": 149
, "Hyundai|Kona Electric": 48
, "Smart|Forfour ED": 42
, "Tesla|Model S": 42
, "BMW|i3 BEV": 33
, "Jaguar|I-Pace": 20
, "Tesla|Model X": 18
, "other": 75
});

db.insert(db.countries.IT, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Maggio%202019_UNRAE%20marca_5cf53a3b8b613.pdf",
{ "Fiat": 29612
, "Volkswagen": 15237
, "Ford": 10928
, "Peugeot": 10195
, "Opel": 9964
, "Renault": 9414
, "Dacia": 8483
, "Citroën": 8335
, "Toyota": 8169
, "Jeep/Dodge": 6557
, "Audi": 5623
, "Kia": 4794
, "BMW": 4749
, "Mercedes-Benz": 4555
, "Nissan": 4416
, "Hyundai": 3733
, "Suzuki": 3401
, "Smart": 3116
, "Seat": 2546
, "Škoda": 2363
, "Volvo": 1777
, "Mini": 1742
, "Land Rover": 1211
, "Mazda": 833
, "Porsche": 787
, "Honda": 745
, "Jaguar": 731
, "Mitsubishi": 577
, "Tesla": 209
, "Subaru": 128
, "other": 9482
});

db.insert(db.countries.IT, "2019-05", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20maggio%202019_UNRAE%20Top%2010%20alimentazione_5cf5393301a9d.pdf",
{ "Renault|Zoe": 450
, "Smart|Fortwo ED": 213
, "Tesla|Model 3": 125
, "Smart|Forfour ED": 72
, "BMW|i3 BEV": 67
, "Hyundai|Kona Electric": 58
, "Nissan|Leaf": 55
, "Citroën|C-Zero": 25
, "Jaguar|I-Pace": 22
, "Tesla|Model S": 21
, "other": 59
});

db.insert(db.countries.IT, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Giugno%202019_UNRAE%20marca_5d1a27f6184c1.pdf",
{ "Fiat": 23232
, "Volkswagen": 16139
, "Renault": 13160
, "Ford": 9814
, "Opel": 8844
, "Peugeot": 8652
, "Dacia": 8514
, "Jeep/Dodge": 8425
, "Toyota": 7664
, "Citroën": 7341
, "Audi": 6639
, "Mercedes-Benz": 5661
, "BMW": 5196
, "Hyundai": 4589
, "Kia": 4174
, "Suzuki": 3738
, "Nissan": 3372
, "Škoda": 2573
, "Smart": 2408
, "Seat": 2256
, "Mini": 2221
, "Volvo": 1690
, "Land Rover": 1548
, "Mazda": 1009
, "Mitsubishi": 947
, "Honda": 769
, "Jaguar": 678
, "Porsche": 635
, "Tesla": 471
, "Subaru": 261
, "other": 9006
});

db.insert(db.countries.IT, "2019-06", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20giugno%202019%20UNRAE_Top%2010%20alimentazione_5d1a272c84736.pdf",
{ "Tesla|Model 3": 372
, "Renault|Zoe": 351
, "Smart|Fortwo ED": 185
, "Smart|Forfour ED": 114
, "Nissan|Leaf": 104
, "Hyundai|Kona Electric": 98
, "BMW|i3 BEV": 63
, "Tesla|Model S": 55
, "Tesla|Model X": 44
, "Jaguar|I-Pace": 17
, "other": 42
});

db.insert(db.countries.IT, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Luglio%202019_UNRAE_marca_5d4311a781330.pdf",
{ "Fiat": 20088
, "Volkswagen": 14395
, "Ford": 9511
, "Renault": 9260
, "Peugeot": 9101
, "Opel": 8494
, "Dacia": 7635
, "Jeep/Dodge": 7446
, "Toyota": 6640
, "Citroën": 6323
, "Audi": 6096
, "Mercedes-Benz": 4769
, "Hyundai": 4265
, "Kia": 3987
, "Suzuki": 3853
, "BMW": 3715
, "Nissan": 3184
, "Škoda": 2452
, "Seat": 2380
, "Smart": 2079
, "Volvo": 1613
, "Mini": 1539
, "Land Rover": 1406
, "Mazda": 922
, "Jaguar": 730
, "Porsche": 674
, "Mitsubishi": 659
, "Honda": 620
, "Subaru": 247
, "Tesla": 167
, "GWM": 39
, "other": 8511
});

db.insert(db.countries.IT, "2019-07", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20luglio%202019%20UNRAE%20Top%2010%20alimentazione_5d430a48408c9.pdf",
{ "Renault|Zoe": 224
, "Smart|Fortwo ED": 191
, "Nissan|Leaf": 156
, "Tesla|Model 3": 132
, "Smart|Forfour ED": 83
, "BMW|i3 BEV": 38
, "Hyundai|Kona Electric": 23
, "Tesla|Model S": 20
, "Jaguar|I-Pace": 19
, "Tesla|Model X": 15
, "other": 39
});

db.insert(db.countries.IT, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Agosto%202019_UNRAE_marca_5d6d2c39dc785.pdf",
{ "Fiat": 13000
, "Volkswagen": 7429
, "Renault": 5858
, "Dacia": 5839
, "Ford": 5620
, "Peugeot": 4855
, "Opel": 4539
, "Jeep/Dodge": 4134
, "Toyota": 3696
, "Citroën": 3484
, "BMW": 2779
, "Smart": 2686
, "Audi": 2663
, "Mercedes-Benz": 2390
, "Kia": 2299
, "Hyundai": 2276
, "Nissan": 1669
, "Suzuki": 1460
, "Škoda": 1382
, "Seat": 1322
, "Volvo": 894
, "Mini": 758
, "Land Rover": 621
, "Mazda": 424
, "Mitsubishi": 347
, "Honda": 302
, "Jaguar": 288
, "Porsche": 238
, "Subaru": 124
, "Tesla": 113
, "other": 5450
});

db.insert(db.countries.IT, "2019-08", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20agosto%20Top%2010%20alimentazione_5d6d2bcde6543.pdf",
{ "Smart|Fortwo ED": 137
, "Renault|Zoe": 98
, "Tesla|Model 3": 71
, "Nissan|Leaf": 68
, "Smart|Forfour ED": 32
, "BMW|i3 BEV": 28
, "Hyundai|Kona Electric": 24
, "Tesla|Model S": 24
, "Tesla|Model X": 18
, "Citroën|C-Zero": 7
, "other": 27
});

db.insert(db.countries.IT, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Settembre%202019_UNRAE_marca_5d936235c9efa.pdf",
{ "Fiat": 19393
, "Volkswagen": 14075
, "Ford": 9511
, "Opel": 8552
, "Peugeot": 7931
, "Toyota": 7718
, "Renault": 6276
, "Citroën": 6199
, "Jeep/Dodge": 5694
, "Mercedes-Benz": 5205
, "BMW": 4718
, "Hyundai": 4553
, "Audi": 4516
, "Dacia": 4325
, "Kia": 3803
, "Nissan": 3678
, "Suzuki": 2507
, "Mini": 2079
, "Seat": 2068
, "Škoda": 1979
, "Volvo": 1973
, "Smart": 1634
, "Land Rover": 1457
, "Mazda": 1273
, "Honda": 753
, "Porsche": 636
, "Jaguar": 599
, "Mitsubishi": 457
, "Tesla": 375
, "Subaru": 192
, "other": 8007
});

db.insert(db.countries.IT, "2019-09", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20settembre%20Top%2010%20alimentazione_5d936ba2d3846.pdf",
{ "Tesla|Model 3": 325
, "Nissan|Leaf": 260
, "Smart|Fortwo ED": 250
, "Renault|Zoe": 139
, "BMW|i3 BEV": 76
, "Smart|Forfour ED": 64
, "Hyundai|Kona Electric": 41
, "Tesla|Model X": 35
, "Jaguar|I-Pace": 27
, "Tesla|Model S": 15
, "other": 21
});

db.insert(db.countries.IT, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20ottobre%202019_UNRAE%20marca_5dc0581455cca.pdf",
{ "Fiat": 21487
, "Volkswagen": 16890
, "Ford": 10772
, "Peugeot": 9772
, "Toyota": 8468
, "Renault": 8368
, "Citroën": 6809
, "Opel": 5923
, "Audi": 5559
, "Jeep/Dodge": 5431
, "BMW": 5158
, "Dacia": 5134
, "Mercedes-Benz": 5124
, "Hyundai": 4998
, "Kia": 4562
, "Nissan": 3811
, "Suzuki": 3545
, "Smart": 2162
, "Seat": 2159
, "Volvo": 2111
, "Škoda": 2035
, "Mini": 1983
, "Land Rover": 1583
, "Mazda": 1399
, "Jaguar": 782
, "Porsche": 768
, "Honda": 736
, "Mitsubishi": 685
, "Subaru": 225
, "Tesla": 67
, "GWM": 17
, "other": 8328
});

db.insert(db.countries.IT, "2019-10", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20ottobre%202019%20Top%2010%20alimentazione_5dc04e27db892.pdf",
{ "Smart|Fortwo ED": 407
, "Nissan|Leaf": 96
, "Renault|Zoe": 89
, "Smart|Forfour ED": 85
, "Hyundai|Kona Electric": 55
, "Tesla|Model 3": 54
, "BMW|i3 BEV": 49
, "Jaguar|I-Pace": 37
, "Volkswagen|e-Golf": 24
, "Citroën|C-Zero": 12
, "other": 31
});

db.insert(db.countries.IT, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20novembre%202019_UNRAE%20marca_5de51a62920a2.pdf",
{ "Fiat": 21733
, "Volkswagen": 14022
, "Ford": 9996
, "Renault": 8472
, "Peugeot": 8021
, "Toyota": 7642
, "Citroën": 6296
, "Jeep/Dodge": 5943
, "Dacia": 5884
, "Smart": 5609
, "Opel": 5534
, "Audi": 5431
, "Mercedes-Benz": 5388
, "BMW": 4758
, "Hyundai": 4715
, "Kia": 3949
, "Nissan": 2893
, "Suzuki": 2395
, "Seat": 2189
, "Volvo": 2142
, "Škoda": 2089
, "Mini": 2066
, "Mazda": 1443
, "Land Rover": 1267
, "Honda": 726
, "Mitsubishi": 628
, "Porsche": 575
, "Jaguar": 477
, "Subaru": 303
, "Tesla": 136
, "GWM": 21
, "other": 7844
});

db.insert(db.countries.IT, "2019-11", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20novembre_Top%2010%20alimentazione_5de51b63ae97e.pdf",
{ "Smart|Fortwo ED": 426
, "Renault|Zoe": 254
, "Tesla|Model 3": 102
, "Nissan|Leaf": 68
, "Smart|Forfour ED": 47
, "Hyundai|Kona Electric": 42
, "BMW|i3 BEV": 39
, "Tesla|Model X": 18
, "Tesla|Model S": 16
, "Audi|Q8 e-tron": 13
, "other": 43
});

db.insert(db.countries.IT, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20dicembre%202019_UNRAE%20marca_5e0e1e63493e8.pdf",
{ "Fiat": 19294
, "Volkswagen": 10891
, "Renault": 9655
, "Ford": 9326
, "Peugeot": 7587
, "Smart": 7551
, "Dacia": 6677
, "Mercedes-Benz": 6241
, "Jeep/Dodge": 5741
, "Toyota": 5452
, "Citroën": 5254
, "Audi": 4913
, "BMW": 4526
, "Hyundai": 4086
, "Suzuki": 4083
, "Kia": 3444
, "Opel": 3305
, "Nissan": 2754
, "Seat": 1976
, "Škoda": 1792
, "Mazda": 1593
, "Mini": 1330
, "Volvo": 1212
, "Land Rover": 926
, "Honda": 585
, "Mitsubishi": 573
, "Porsche": 450
, "Jaguar": 424
, "Subaru": 380
, "Tesla": 364
, "GWM": 23
, "other": 7667
});

db.insert(db.countries.IT, "2019-12", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20dicembre%20UNRAE%20Top%2010%20alimentazione_5e0e1d2f0bfc8.pdf",
{ "Tesla|Model 3": 296
, "Smart|Fortwo ED": 239
, "Hyundai|Kona Electric": 56
, "Nissan|Leaf": 55
, "Tesla|Model X": 40
, "Renault|Zoe": 39
, "BMW|i3 BEV": 36
, "Smart|Forfour ED": 35
, "Tesla|Model S": 28
, "Citroën|C-Zero": 4
, "other": 16
});

db.insert(db.countries.IT, "2020-01", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20gennaio%202020_UNRAE_marca_5e384c4443c01.pdf",
{ "Fiat": 25842
, "Volkswagen": 15003
, "Peugeot": 9858
, "Ford": 9106
, "Citroën": 8805
, "Opel": 7869
, "Renault": 7419
, "Toyota": 7183
, "Jeep/Dodge": 5987
, "Dacia": 5649
, "BMW": 5347
, "Audi": 5004
, "Kia": 4435
, "Mercedes-Benz": 4140
, "Hyundai": 3679
, "Nissan": 3326
, "Suzuki": 2852
, "Škoda": 2625
, "Seat": 2113
, "Land Rover": 1823
, "Mini": 1596
, "Volvo": 1469
, "Mazda": 1228
, "Honda": 733
, "Mitsubishi": 686
, "Porsche": 624
, "Jaguar": 592
, "Smart": 301
, "Subaru": 146
, "Tesla": 97
, "GWM": 20
, "other": 9971
});

db.insert(db.countries.IT, "2020-01", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20gennaio%202020_%20UNRAE_Top%20ten%20per%20alimentazione_5e384af489aaa.pdf",
{ "Renault|Zoe": 411
, "Peugeot|e-208": 318
, "Volkswagen|e-up!": 215
, "Smart|Fortwo ED": 213
, "Hyundai|Kona Electric": 149
, "Volkswagen|e-Golf": 112
, "Nissan|Leaf": 66
, "Smart|Forfour ED": 65
, "Tesla|Model 3": 63
, "other": 331
});

db.insert(db.countries.IT, "2020-02", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20febbraio%202020_UNRAE%20marca_5e5d2590ca8f9.pdf",
{ "Fiat": 27801
, "Volkswagen": 16172
, "Peugeot": 10811
, "Ford": 10773
, "Renault": 9861
, "Citroën": 8015
, "Toyota": 7501
, "Opel": 6974
, "Audi": 5840
, "Jeep/Dodge": 5648
, "BMW": 5130
, "Mercedes-Benz": 4747
, "Kia": 4539
, "Dacia": 4273
, "Nissan": 3709
, "Hyundai": 3555
, "Suzuki": 3207
, "Seat": 2883
, "Škoda": 2807
, "Mini": 1792
, "Volvo": 1409
, "Land Rover": 1160
, "Mazda": 1042
, "Honda": 759
, "Porsche": 636
, "Mitsubishi": 559
, "Jaguar": 436
, "Smart": 333
, "Subaru": 273
, "Tesla": 258
, "other": 9890
});

db.insert(db.countries.IT, "2020-02", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20febbraio%202020_UNRAE%20Top%2010%20alimentazione_5e5d243e7deff.pdf",
{ "Renault|Zoe": 387
, "Volkswagen|e-up!": 341
, "Peugeot|e-208": 287
, "Smart|Fortwo ED": 286
, "Tesla|Model 3": 236
, "Nissan|Leaf": 234
, "Mini|Cooper SE": 123
, "Volkswagen|e-Golf": 123
, "Opel|Corsa-e": 117
, "other": 396
});

db.insert(db.countries.IT, "2020-03", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20marzo%202020_UNRAE%20marca_5e84a46dd200e.pdf",
{ "Fiat": 2794
, "Volkswagen": 2316
, "Ford": 1759
, "Renault": 1702
, "Kia": 1624
, "Mercedes-Benz": 1591
, "Peugeot": 1496
, "Dacia": 1215
, "Audi": 1208
, "Suzuki": 1208
, "Toyota": 1126
, "Jeep/Dodge": 1070
, "Citroën": 1031
, "Opel": 824
, "Hyundai": 783
, "BMW": 723
, "Škoda": 719
, "Nissan": 684
, "Volvo": 653
, "Land Rover": 496
, "Tesla": 424
, "Mini": 349
, "Seat": 283
, "Porsche": 216
, "Jaguar": 170
, "Smart": 165
, "Mazda": 147
, "Honda": 142
, "Mitsubishi": 118
, "Subaru": 87
, "GWM": 18
, "other": 1185
});

db.insert(db.countries.IT, "2020-03", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20marzo_UNRAE%20Top%2010%20alimentazione_5e84a144b5847.pdf",
{ "Tesla|Model 3": 358
, "Smart|Fortwo ED": 128
, "Volkswagen|e-up!": 70
, "Renault|Zoe": 55
, "Tesla|Model S": 38
, "Mini|Cooper SE": 36
, "Peugeot|e-208": 35
, "Smart|Forfour ED": 34
, "Tesla|Model X": 28
, "Opel|Corsa-e": 27
, "other": 117
});

db.insert(db.countries.IT, "2020-04", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20aprile%202020_UNRAE%20marca_5eb0185bf2890.pdf",
{ "Fiat": 969
, "Peugeot": 477
, "Renault": 452
, "Jeep/Dodge": 395
, "Citroën": 272
, "Opel": 259
, "Ford": 222
, "Volkswagen": 138
, "Tesla": 104
, "BMW": 93
, "Audi": 73
, "Dacia": 69
, "Toyota": 52
, "Mercedes-Benz": 51
, "Land Rover": 48
, "Škoda": 45
, "Hyundai": 37
, "Seat": 36
, "Kia": 23
, "Suzuki": 23
, "Nissan": 18
, "Honda": 16
, "Volvo": 13
, "Jaguar": 11
, "Porsche": 10
, "Mini": 8
, "Subaru": 8
, "Mazda": 7
, "Mitsubishi": 6
, "GWM": 3
, "Smart": 1
, "other": 340
});

db.insert(db.countries.IT, "2020-04", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/aprile%20Top%2010%20alimentazione_5eb017f9dcddb.pdf",
{ "Renault|Zoe": 366
, "Tesla|Model 3": 88
, "Tesla|Model S": 10
, "Opel|Corsa-e": 7
, "Peugeot|e-208": 6
, "Tesla|Model X": 6
, "Volkswagen|e-up!": 3
, "Audi|Q8 e-tron": 2
, "other": 12
});

db.insert(db.countries.IT, "2020-05", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20maggio%202020_UNRAE%20marca_5ed50c192c549.pdf",
{ "Fiat": 13975
, "Volkswagen": 8910
, "Ford": 6868
, "Peugeot": 6257
, "Renault": 6219
, "Citroën": 4770
, "Jeep/Dodge": 4608
, "Dacia": 4532
, "Toyota": 4309
, "Opel": 3988
, "Audi": 3841
, "BMW": 3810
, "Mercedes-Benz": 3562
, "Suzuki": 2867
, "Kia": 2445
, "Hyundai": 2358
, "Škoda": 1910
, "Nissan": 1644
, "Seat": 1600
, "Volvo": 1538
, "Mini": 1167
, "Land Rover": 985
, "Mazda": 713
, "Porsche": 549
, "Honda": 389
, "Smart": 362
, "Mitsubishi": 237
, "Jaguar": 216
, "Subaru": 173
, "Tesla": 80
, "GWM": 61
, "other": 4768
});

db.insert(db.countries.IT, "2020-05", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/maggio%20Top%2010%20alimentazione_5ed5061f56ab3.pdf",
{ "Renault|Zoe": 529
, "Smart|Fortwo ED": 308
, "Volkswagen|e-up!": 299
, "Opel|Corsa-e": 107
, "Peugeot|e-208": 102
, "Nissan|Leaf": 68
, "Tesla|Model 3": 53
, "Hyundai|Kona Electric": 51
, "Mini|Cooper SE": 50
, "Smart|Forfour ED": 45
, "other": 204
});

db.insert(db.countries.IT, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20giugno%202020_UNRAE_marca_5efcb1f412df9.pdf",
{ "Fiat": 18561
, "Volkswagen": 11431
, "Renault": 9617
, "Ford": 8866
, "Toyota": 7537
, "Peugeot": 7224
, "Dacia": 6393
, "Audi": 5847
, "Citroën": 5696
, "Jeep/Dodge": 5373
, "Mercedes-Benz": 4988
, "Opel": 4817
, "BMW": 4627
, "Suzuki": 3301
, "Hyundai": 2990
, "Kia": 2989
, "Škoda": 2555
, "Seat": 2261
, "Nissan": 2132
, "Volvo": 1907
, "Mini": 1667
, "Land Rover": 1120
, "Mazda": 1021
, "Porsche": 693
, "Honda": 642
, "Tesla": 382
, "Mitsubishi": 342
, "Smart": 317
, "Jaguar": 257
, "Subaru": 221
, "GWM": 45
, "other": 6638
});

db.insert(db.countries.IT, "2020-06", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/giugno%202020_UNRAE_Top%2010%20alimentazione_5efc8ad723c0f.pdf",
{ "Tesla|Model 3": 317
, "Renault|Zoe": 314
, "Smart|Fortwo ED": 260
, "Volkswagen|e-up!": 235
, "Peugeot|e-2008": 166
, "Peugeot|e-208": 158
, "Opel|Corsa-e": 136
, "Nissan|Leaf": 92
, "Hyundai|Kona Electric": 73
, "Smart|Forfour ED": 57
, "other": 420
});

db.insert(db.countries.IT, "2020-07", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20luglio%202020_UNRAE%20marca_5f281f933b3dd.pdf",
{ "Fiat": 19536
, "Volkswagen": 14489
, "Ford": 9259
, "Peugeot": 7459
, "Renault": 7316
, "Audi": 6252
, "Jeep/Dodge": 6147
, "Toyota": 6021
, "Opel": 5863
, "Mercedes-Benz": 5383
, "BMW": 5150
, "Dacia": 5134
, "Citroën": 4941
, "Hyundai": 4295
, "Kia": 3346
, "Škoda": 2618
, "Seat": 2510
, "Nissan": 2221
, "Suzuki": 2129
, "Volvo": 2104
, "Mini": 1921
, "Land Rover": 1214
, "Mazda": 951
, "Porsche": 846
, "Honda": 639
, "Smart": 420
, "Mitsubishi": 369
, "Jaguar": 358
, "Subaru": 197
, "GWM": 53
, "Tesla": 52
, "other": 7262
});

db.insert(db.countries.IT, "2020-07", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20luglio%20Top%2010%20per%20alimentazione_5f280b700672d.pdf",
{ "Smart|Fortwo ED": 350
, "Renault|Zoe": 198
, "Opel|Corsa-e": 156
, "Peugeot|e-208": 142
, "Peugeot|e-2008": 104
, "Mini|Cooper SE": 99
, "Volkswagen|e-up!": 85
, "Smart|Forfour ED": 70
, "Audi|Q8 e-tron": 68
, "Hyundai|Kona Electric": 45
, "other": 291
});

db.insert(db.countries.IT, "2020-08", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20agosto%202020%20UNRAE%20marca_5f4e4f3616265.pdf",
{ "Fiat": 12219
, "Volkswagen": 8708
, "Ford": 6569
, "Peugeot": 5278
, "Renault": 5099
, "Jeep/Dodge": 4480
, "Citroën": 4357
, "Toyota": 4154
, "Dacia": 3761
, "Opel": 3725
, "Hyundai": 3163
, "Audi": 2893
, "Mercedes-Benz": 2574
, "Kia": 2552
, "BMW": 2539
, "Nissan": 2080
, "Suzuki": 1865
, "Škoda": 1648
, "Seat": 1568
, "Volvo": 1115
, "Mini": 934
, "Mazda": 722
, "Land Rover": 525
, "Honda": 411
, "Mitsubishi": 286
, "Porsche": 274
, "Tesla": 195
, "Smart": 184
, "Jaguar": 155
, "Subaru": 87
, "GWM": 24
, "other": 4657
});

db.insert(db.countries.IT, "2020-08", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/agosto%20Top%2010%20per%20alimentazione_5f4e4e8147454.pdf",
{ "Renault|Zoe": 506
, "Volkswagen|e-up!": 201
, "Tesla|Model 3": 189
, "Hyundai|Kona Electric": 174
, "Opel|Corsa-e": 162
, "Smart|Fortwo ED": 158
, "Peugeot|e-208": 91
, "Mini|Cooper SE": 60
, "Nissan|Leaf": 60
, "Volkswagen|e-Golf": 29
, "other": 247
});

db.insert(db.countries.IT, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20settembre%202020%20UNRAE%20marca_5f75eb60adc52.pdf",
{ "Fiat": 23134
, "Volkswagen": 13578
, "Renault": 11012
, "Ford": 10657
, "Toyota": 8962
, "Peugeot": 8205
, "Jeep/Dodge": 7085
, "Dacia": 7022
, "Citroën": 6304
, "Mercedes-Benz": 5568
, "Suzuki": 4966
, "Opel": 4963
, "BMW": 4819
, "Kia": 4428
, "Hyundai": 4062
, "Audi": 4005
, "Nissan": 3597
, "Škoda": 2937
, "Mini": 2008
, "Seat": 1975
, "Volvo": 1766
, "Mazda": 1451
, "Land Rover": 1021
, "Honda": 1000
, "Tesla": 956
, "Mitsubishi": 593
, "Smart": 554
, "Jaguar": 364
, "Porsche": 283
, "Subaru": 196
, "GWM": 50
, "other": 8611
});

db.insert(db.countries.IT, "2020-09", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/settembre%20Top%2010%20per%20alimentazione_5f75debcb4b24.pdf",
{ "Tesla|Model 3": 880
, "Renault|Zoe": 676
, "Smart|Fortwo ED": 461
, "Nissan|Leaf": 297
, "Volkswagen|ID.3": 270
, "Hyundai|Kona Electric": 168
, "Volkswagen|e-up!": 167
, "Peugeot|e-208": 141
, "Mini|Cooper SE": 108
, "Opel|Corsa-e": 100
, "other": 821
});

db.insert(db.countries.IT, "2020-10", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20ottobre%202020%20UNRAE%20marca_5fa01f87eab43.pdf",
{ "Fiat": 25360
, "Volkswagen": 12737
, "Ford": 10285
, "Renault": 9124
, "Peugeot": 8648
, "Toyota": 8294
, "Citroën": 7931
, "Jeep/Dodge": 6262
, "Opel": 6136
, "Mercedes-Benz": 5719
, "Audi": 5618
, "Dacia": 5557
, "BMW": 5291
, "Suzuki": 4951
, "Kia": 4262
, "Hyundai": 4067
, "Nissan": 3469
, "Škoda": 2733
, "Seat": 2339
, "Volvo": 1892
, "Mini": 1883
, "Land Rover": 1377
, "Mazda": 1307
, "Honda": 1000
, "Smart": 682
, "Porsche": 630
, "Mitsubishi": 399
, "Jaguar": 359
, "Subaru": 279
, "Tesla": 64
, "GWM": 18
, "other": 8305
});

db.insert(db.countries.IT, "2020-10", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20ottobre%202020%20UNRAE%20Top%2010%20per%20alimentazione_5fa01edbc205c.pdf",
{ "Smart|Fortwo ED": 571
, "Renault|Zoe": 304
, "Hyundai|Kona Electric": 258
, "Volkswagen|ID.3": 234
, "Volkswagen|e-up!": 198
, "Mini|Cooper SE": 149
, "Opel|Corsa-e": 129
, "Smart|Forfour ED": 108
, "Peugeot|e-208": 100
, "Peugeot|e-2008": 97
, "other": 741
});

db.insert(db.countries.IT, "2020-11", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20novembre%202020%20UNRAE%20marca_5fc65f1a3041f.pdf",
{ "Fiat": 21342
, "Volkswagen": 11882
, "Renault": 9291
, "Ford": 8311
, "Peugeot": 7896
, "Toyota": 7706
, "Jeep/Dodge": 7022
, "Citroën": 6840
, "Dacia": 6188
, "Audi": 5435
, "BMW": 4884
, "Opel": 4807
, "Mercedes-Benz": 4238
, "Suzuki": 3684
, "Nissan": 2970
, "Kia": 2804
, "Hyundai": 2666
, "Škoda": 2283
, "Seat": 2140
, "Mini": 2055
, "Volvo": 1515
, "Mazda": 888
, "Land Rover": 869
, "Smart": 728
, "Honda": 587
, "Porsche": 497
, "Jaguar": 382
, "Tesla": 263
, "Mitsubishi": 217
, "Subaru": 204
, "GWM": 28
, "other": 7783
});

db.insert(db.countries.IT, "2020-11", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/novembre%20Top%2010%20per%20alimentazione_5fc64c8b18558.pdf",
{ "Volkswagen|e-up!": 657
, "Smart|Fortwo ED": 558
, "Renault|Zoe": 554
, "Fiat|500e": 513
, "Renault|Twingo E-Tech": 411
, "Tesla|Model 3": 243
, "Mini|Cooper SE": 233
, "Peugeot|e-208": 223
, "Hyundai|Kona Electric": 216
, "Smart|Forfour ED": 170
, "other": 1032
});

db.insert(db.countries.IT, "2020-12", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20dicembre%202020%20UNRAE%20marca_5ff32f37137c5.pdf",
{ "Fiat": 19519
, "Volkswagen": 12600
, "Renault": 8651
, "Toyota": 8043
, "Peugeot": 7925
, "Ford": 6759
, "Jeep/Dodge": 5458
, "Citroën": 5245
, "Audi": 3770
, "Opel": 3597
, "Dacia": 3563
, "BMW": 3525
, "Mercedes-Benz": 3142
, "Nissan": 2481
, "Seat": 2408
, "Suzuki": 2381
, "Kia": 1916
, "Škoda": 1742
, "Hyundai": 1699
, "Volvo": 1643
, "Mini": 1193
, "Tesla": 923
, "Land Rover": 674
, "Mazda": 606
, "Smart": 527
, "Porsche": 422
, "Honda": 362
, "Jaguar": 231
, "Subaru": 220
, "Mitsubishi": 210
, "GWM": 38
, "other": 7981
});

db.insert(db.countries.IT, "2020-12", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/06%20dicembre%20Top%2010%20per%20alimentazione_5ff32ed50d06c.pdf",
{ "Fiat|500e": 1549
, "Renault|Zoe": 1153
, "Tesla|Model 3": 851
, "Renault|Twingo E-Tech": 683
, "Smart|Fortwo ED": 477
, "Volkswagen|ID.3": 449
, "Volkswagen|e-up!": 366
, "Hyundai|Kona Electric": 232
, "Opel|Corsa-e": 194
, "Nissan|Leaf": 177
, "other": 1124
});

db.insert(db.countries.IT, "2021-01", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20gennaio%202021%20UNRAE%20marca_6018231ee6bef.pdf",
{ "Fiat": 20191
, "Volkswagen": 11157
, "Peugeot": 9184
, "Ford": 8933
, "Toyota": 8547
, "Citroën": 7121
, "Renault": 6895
, "Jeep": 5487
, "BMW": 5457
, "Opel": 5296
, "Audi": 5184
, "Dacia": 4962
, "Mercedes-Benz": 4675
, "Hyundai": 3472
, "Suzuki": 3459
, "Kia": 3179
, "Škoda": 2762
, "Nissan": 2442
, "Seat": 1617
, "Mini": 1605
, "Volvo": 1558
, "Mazda": 947
, "Land Rover": 759
, "Porsche": 615
, "Honda": 457
, "Smart": 449
, "Mitsubishi": 327
, "Jaguar": 173
, "Subaru": 148
, "Tesla": 56
, "GWM": 50
, "other": 6837
});

db.insert(db.countries.IT, "2021-01", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/gennaio%202021_%20UNRAE%20Top%20ten%20per%20alimentazione_601821e524cfc.pdf",
{ "Fiat|500e": 419
, "Smart|Fortwo ED": 419
, "Renault|Zoe": 255
, "Opel|Corsa-e": 216
, "Peugeot|e-208": 193
, "Renault|Twingo E-Tech": 129
, "Peugeot|e-2008": 128
, "Volkswagen|e-up!": 111
, "Hyundai|Kona Electric": 91
, "Citroën|ë-C4": 75
, "other": 458
});

db.insert(db.countries.IT, "2021-02", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20febbraio%202021%20UNRAE%20marca_603d11f4a7690.pdf",
{ "Fiat": 22769
, "Volkswagen": 10969
, "Peugeot": 10671
, "Ford": 9623
, "Citroën": 8243
, "Toyota": 7969
, "Opel": 6671
, "Renault": 6577
, "Jeep": 5601
, "Audi": 5554
, "Suzuki": 4955
, "BMW": 4922
, "Dacia": 4508
, "Mercedes-Benz": 3875
, "Kia": 3723
, "Hyundai": 3611
, "Škoda": 2823
, "Nissan": 2764
, "Seat": 1972
, "Volvo": 1742
, "Mini": 1428
, "Mazda": 1195
, "Land Rover": 932
, "Honda": 652
, "Smart": 601
, "Porsche": 545
, "Mitsubishi": 361
, "Jaguar": 303
, "Tesla": 281
, "Subaru": 187
, "GWM": 64
, "other": 6907
});

db.insert(db.countries.IT, "2021-02", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/febbraio%20Top%2010%20per%20alimentazione_603cfea9edb94.pdf",
{ "Fiat|500e": 583
, "Smart|Fortwo ED": 545
, "Renault|Twingo E-Tech": 386
, "Renault|Zoe": 296
, "Tesla|Model 3": 278
, "Peugeot|e-208": 184
, "Peugeot|e-2008": 163
, "Opel|Corsa-e": 157
, "Nissan|Leaf": 142
, "Hyundai|Kona Electric": 134
, "other": 589
});

db.insert(db.countries.IT, "2021-03", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20marzo%202021%20UNRAE%20marca_6065db1d2665e.pdf",
{ "Fiat": 26400
, "Volkswagen": 13690
, "Peugeot": 11446
, "Ford": 10776
, "Citroën": 8862
, "Toyota": 8784
, "Renault": 8706
, "Opel": 7397
, "Jeep": 7348
, "Audi": 6427
, "Mercedes-Benz": 5846
, "BMW": 5745
, "Dacia": 5524
, "Hyundai": 4644
, "Kia": 4165
, "Suzuki": 3776
, "Nissan": 3401
, "Škoda": 2978
, "Seat": 2717
, "Mini": 2162
, "Volvo": 1926
, "Land Rover": 1771
, "Mazda": 1463
, "Tesla": 1366
, "Smart": 847
, "Jaguar": 669
, "Porsche": 665
, "Honda": 547
, "Mitsubishi": 380
, "Subaru": 281
, "GWM": 85
, "other": 8890
});

db.insert(db.countries.IT, "2021-03", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20marzo%202021%20UNRAE%20Top%2010%20per%20alimentazione_6065c0aa1a619.pdf",
{ "Tesla|Model 3": 1363
, "Fiat|500e": 1056
, "Smart|Fortwo ED": 759
, "Renault|Twingo E-Tech": 738
, "Renault|Zoe": 721
, "Peugeot|e-208": 381
, "Peugeot|e-2008": 294
, "Volkswagen|ID.3": 270
, "Hyundai|Kona Electric": 217
, "Nissan|Leaf": 216
, "other": 1347
});

db.insert(db.countries.IT, "2021-04", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20aprile%202021_60901084ac463.pdf",
{ "Fiat": 23237
, "Volkswagen": 13702
, "Peugeot": 9022
, "Ford": 8986
, "Toyota": 8078
, "Citroën": 7061
, "Jeep": 6383
, "Opel": 6168
, "Audi": 6020
, "Renault": 5444
, "BMW": 4973
, "Mercedes-Benz": 4886
, "Dacia": 4581
, "Suzuki": 4253
, "Kia": 3754
, "Hyundai": 3325
, "Škoda": 2634
, "Seat": 2349
, "Nissan": 2156
, "Volvo": 2007
, "Mini": 1868
, "Land Rover": 1683
, "Mazda": 1157
, "Smart": 650
, "Honda": 620
, "Jaguar": 569
, "Porsche": 457
, "Mitsubishi": 412
, "Cupra": 367
, "Subaru": 203
, "GWM": 76
, "Tesla": 22
, "other": 7930
});

db.insert(db.countries.IT, "2021-04", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20aprile%202021_60900cb9c02fa.pdf",
{ "Fiat|500e": 1062
, "Smart|Fortwo ED": 601
, "Renault|Twingo E-Tech": 528
, "Renault|Zoe": 421
, "Volkswagen|ID.4": 330
, "Peugeot|e-208": 308
, "Volkswagen|ID.3": 296
, "Opel|Corsa-e": 149
, "Peugeot|e-2008": 147
, "Nissan|Leaf": 139
, "other": 870
});

db.insert(db.countries.IT, "2021-05", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20maggio%202021_60b6212b07955.pdf",
{ "Fiat": 23798
, "Volkswagen": 13127
, "Toyota": 8618
, "Peugeot": 8093
, "Ford": 7695
, "Citroën": 6594
, "Audi": 6171
, "Jeep": 6020
, "Renault": 5680
, "Opel": 5475
, "Mercedes-Benz": 5016
, "BMW": 4986
, "Dacia": 4555
, "Hyundai": 3922
, "Kia": 3800
, "Suzuki": 3631
, "Škoda": 2851
, "Nissan": 2314
, "Volvo": 2231
, "Seat": 2070
, "Mini": 1808
, "Land Rover": 1230
, "Mazda": 996
, "Cupra": 784
, "Smart": 700
, "Honda": 605
, "Porsche": 522
, "Mitsubishi": 499
, "Jaguar": 485
, "Tesla": 426
, "Subaru": 217
, "GWM": 96
, "other": 7715
});

db.insert(db.countries.IT, "2021-05", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20maggio%202021_60b6173455395.pdf",
{ "Fiat|500e": 1030
, "Smart|Fortwo ED": 641
, "Renault|Twingo E-Tech": 513
, "Volkswagen|ID.3": 473
, "Tesla|Model 3": 425
, "Peugeot|e-208": 283
, "Renault|Zoe": 243
, "Nissan|Leaf": 167
, "Škoda|Enyaq": 157
, "Volkswagen|ID.4": 141
, "other": 1090
});

db.insert(db.countries.IT, "2021-06", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20giugno%202021_60dde84571934.pdf",
{ "Fiat": 22191
, "Volkswagen": 13644
, "Renault": 8716
, "Toyota": 8377
, "Peugeot": 8068
, "Citroën": 7248
, "Dacia": 6959
, "Audi": 6556
, "Jeep": 6511
, "Opel": 6433
, "Ford": 5846
, "Hyundai": 5228
, "BMW": 4891
, "Mercedes-Benz": 4624
, "Kia": 4057
, "Suzuki": 3383
, "Seat": 3002
, "Škoda": 2910
, "Volvo": 2615
, "Nissan": 2080
, "Mini": 1791
, "Mazda": 1081
, "Tesla": 984
, "Land Rover": 966
, "Smart": 731
, "Cupra": 688
, "Honda": 529
, "Porsche": 497
, "Jaguar": 438
, "Mitsubishi": 381
, "Subaru": 189
, "GWM": 78
, "other": 7746
});

db.insert(db.countries.IT, "2021-06", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20giugno%202021_60dde79684a99.pdf",
{ "Tesla|Model 3": 984
, "Fiat|500e": 955
, "Renault|Twingo E-Tech": 829
, "Dacia|Spring": 618
, "Smart|Fortwo ED": 615
, "Volkswagen|ID.3": 398
, "Renault|Zoe": 321
, "Peugeot|e-208": 282
, "Peugeot|e-2008": 239
, "Nissan|Leaf": 156
, "other": 1628
});

db.insert(db.countries.IT, "2021-07", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20luglio%202021_6107d28d4f202.pdf",
{ "Fiat": 16420
, "Volkswagen": 10602
, "Toyota": 6455
, "Peugeot": 6159
, "Jeep": 6071
, "Ford": 5631
, "Renault": 5460
, "Audi": 4989
, "Dacia": 4594
, "BMW": 4042
, "Mercedes-Benz": 3854
, "Hyundai": 3708
, "Kia": 3518
, "Citroën": 3411
, "Opel": 3245
, "Suzuki": 3025
, "Škoda": 2095
, "Nissan": 2035
, "Seat": 1426
, "Volvo": 1389
, "Mini": 1374
, "Mazda": 1012
, "Land Rover": 898
, "Cupra": 601
, "Honda": 462
, "Porsche": 428
, "Smart": 402
, "Jaguar": 368
, "Mitsubishi": 285
, "Subaru": 192
, "GWM": 82
, "other": 6059
});

db.insert(db.countries.IT, "2021-07", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20luglio%202021_6107ca5800fe2.pdf",
{ "Fiat|500e": 883
, "Renault|Twingo E-Tech": 629
, "Volkswagen|e-up!": 374
, "Smart|Fortwo ED": 348
, "Volkswagen|ID.3": 309
, "Peugeot|e-2008": 305
, "Opel|Corsa-e": 292
, "Renault|Zoe": 259
, "Peugeot|e-208": 247
, "Hyundai|Kona Electric": 190
, "other": 1260
});

db.insert(db.countries.IT, "2021-08", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20agosto%202021_612f55b15b1a1.pdf",
{ "Fiat": 9327
, "Volkswagen": 5718
, "Ford": 4518
, "Renault": 4284
, "Toyota": 3993
, "Jeep": 3407
, "Kia": 2890
, "Peugeot": 2887
, "Dacia": 2559
, "Audi": 2425
, "Hyundai": 2305
, "BMW": 2262
, "Suzuki": 1754
, "Citroën": 1730
, "Mercedes-Benz": 1643
, "Nissan": 1541
, "Opel": 1499
, "Škoda": 1186
, "Seat": 1035
, "Mini": 700
, "Volvo": 638
, "Mazda": 606
, "Land Rover": 395
, "Cupra": 350
, "Tesla": 308
, "Honda": 302
, "Mitsubishi": 212
, "Smart": 171
, "Jaguar": 145
, "Porsche": 145
, "Subaru": 107
, "GWM": 57
, "other": 3525
});

db.insert(db.countries.IT, "2021-08", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20agosto%202021_612f55224438d.pdf",
{ "Fiat|500e": 578
, "Volkswagen|e-up!": 324
, "Tesla|Model 3": 308
, "Volkswagen|ID.3": 281
, "Renault|Zoe": 214
, "Renault|Twingo E-Tech": 196
, "Smart|Fortwo ED": 152
, "Volkswagen|ID.4": 135
, "Ford|Mustang Mach-E": 121
, "Mini|Cooper SE": 91
, "other": 847
});

db.insert(db.countries.IT, "2021-09", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20settembre%202021_6156e1371a0e2.pdf",
{ "Fiat": 13169
, "Volkswagen": 9446
, "Dacia": 7219
, "Renault": 6404
, "Ford": 5856
, "Toyota": 5555
, "Jeep": 4960
, "Kia": 4768
, "Hyundai": 4169
, "Peugeot": 4112
, "Suzuki": 3669
, "Citroën": 3499
, "BMW": 3461
, "Opel": 3284
, "Audi": 3096
, "Mercedes-Benz": 3080
, "Nissan": 2308
, "Tesla": 1429
, "Seat": 1352
, "Mazda": 1306
, "Land Rover": 1175
, "Škoda": 1151
, "Volvo": 1002
, "Mini": 824
, "Honda": 656
, "Smart": 545
, "Cupra": 465
, "Mitsubishi": 361
, "Jaguar": 315
, "Porsche": 236
, "Subaru": 176
, "GWM": 68
, "MG": 50
, "other": 6009
});

db.insert(db.countries.IT, "2021-09", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20settembre%202021_6156dc959e628.pdf",
{ "Dacia|Spring": 1876
, "Fiat|500e": 1289
, "Tesla|Model 3": 999
, "Smart|Fortwo ED": 477
, "Tesla|Model Y": 430
, "Renault|Zoe": 408
, "Volkswagen|ID.3": 356
, "Opel|Corsa-e": 230
, "Volkswagen|e-up!": 214
, "Peugeot|e-2008": 206
, "other": 2007
});

db.insert(db.countries.IT, "2021-10", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Ottobre%202021_61811fed657c0.pdf",
{ "Fiat": 17116
, "Volkswagen": 7641
, "Toyota": 5793
, "Renault": 5736
, "Dacia": 5188
, "Ford": 4500
, "Peugeot": 4438
, "Hyundai": 4362
, "Kia": 4009
, "BMW": 3838
, "Citroën": 3739
, "Jeep": 3705
, "Mercedes-Benz": 3664
, "Suzuki": 3393
, "Audi": 2986
, "Opel": 2496
, "Nissan": 2132
, "Volvo": 1398
, "Mini": 1280
, "Mazda": 1217
, "Seat": 975
, "Škoda": 868
, "Land Rover": 863
, "Honda": 704
, "Smart": 682
, "Cupra": 618
, "Porsche": 595
, "Mitsubishi": 329
, "Subaru": 223
, "Jaguar": 190
, "MG": 140
, "Tesla": 89
, "GWM": 51
, "other": 6057
});

db.insert(db.countries.IT, "2021-10", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Ottobre%202021_618129e4bb290.pdf",
{ "Dacia|Spring": 1777
, "Fiat|500e": 1060
, "Smart|Fortwo ED": 621
, "Renault|Twingo E-Tech": 532
, "Renault|Zoe": 341
, "Peugeot|e-2008": 301
, "Volkswagen|ID.3": 266
, "Volkswagen|e-up!": 222
, "Peugeot|e-208": 173
, "Opel|Corsa-e": 165
, "other": 1676
});

db.insert(db.countries.IT, "2021-11", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Novembre%202021_61a757558ab06.pdf",
{ "Fiat": 15251
, "Volkswagen": 8723
, "Toyota": 6437
, "Dacia": 6338
, "Renault": 5842
, "Ford": 4832
, "Peugeot": 4657
, "Citroën": 4376
, "Jeep": 4182
, "Kia": 3872
, "Hyundai": 3842
, "BMW": 3519
, "Opel": 3356
, "Audi": 3290
, "Mercedes-Benz": 3232
, "Suzuki": 2497
, "Nissan": 2350
, "Mini": 1643
, "Seat": 1476
, "Volvo": 1420
, "Škoda": 1348
, "Mazda": 873
, "Cupra": 707
, "Porsche": 669
, "Smart": 624
, "Land Rover": 583
, "Honda": 538
, "Tesla": 438
, "MG": 256
, "Subaru": 222
, "Jaguar": 219
, "Mitsubishi": 213
, "GWM": 31
, "other": 6622
});

db.insert(db.countries.IT, "2021-11", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Novembre%202021_61a7810980607.pdf",
{ "Fiat|500e": 946
, "Renault|Twingo E-Tech": 656
, "Volkswagen|e-up!": 570
, "Smart|Fortwo ED": 543
, "Dacia|Spring": 416
, "Volkswagen|ID.3": 354
, "Tesla|Model Y": 325
, "Peugeot|e-208": 265
, "Mini|Cooper SE": 255
, "Volkswagen|ID.4": 222
, "other": 2406
});

db.insert(db.countries.IT, "2021-12", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca_Dicembre%202021_61d31b0a26b92.pdf",
{ "Fiat": 13503
, "Volkswagen": 7555
, "Toyota": 6029
, "Peugeot": 5418
, "Renault": 4760
, "Dacia": 4644
, "Jeep": 3840
, "Ford": 3715
, "BMW": 3138
, "Audi": 2998
, "Citroën": 2908
, "Mercedes-Benz": 2749
, "Hyundai": 2376
, "Opel": 2312
, "Kia": 2080
, "Mini": 1829
, "Nissan": 1666
, "Suzuki": 1482
, "Škoda": 1331
, "Seat": 1258
, "Porsche": 867
, "Volvo": 802
, "Tesla": 633
, "Mazda": 538
, "Cupra": 501
, "Land Rover": 487
, "Smart": 476
, "Honda": 321
, "Subaru": 251
, "MG": 250
, "Mitsubishi": 157
, "Jaguar": 141
, "GWM": 11
, "other": 5653
});

db.insert(db.countries.IT, "2021-12", db.dsTypes.ElectricCarsByModel, "https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Dicembre%202021_61d31a534d7a8.pdf",
{ "Fiat|500e": 887
, "Dacia|Spring": 805
, "Renault|Twingo E-Tech": 519
, "Volkswagen|e-up!": 459
, "Smart|Fortwo ED": 440
, "Tesla|Model 3": 418
, "Volkswagen|ID.3": 260
, "Tesla|Model Y": 215
, "Peugeot|e-208": 184
, "Volkswagen|ID.4": 179
, "other": 1839
});

db.insert(db.countries.IT, "2022-01", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Gennaio%202022_61f94c3262901.pdf",
{ "Fiat": 16024
, "Ford": 8168
, "Volkswagen": 7859
, "Toyota": 7575
, "Dacia": 7082
, "Peugeot": 6639
, "Renault": 5415
, "Jeep": 4515
, "BMW": 4285
, "Opel": 3609
, "Citroën": 3460
, "Kia": 3147
, "Mercedes-Benz": 3142
, "Hyundai": 3141
, "Audi": 2985
, "Suzuki": 2625
, "Mini": 1871
, "Nissan": 1841
, "Škoda": 1781
, "Seat": 1031
, "Volvo": 961
, "Mazda": 806
, "Porsche": 699
, "Honda": 574
, "Land Rover": 566
, "Cupra": 372
, "MG": 266
, "Smart": 266
, "Subaru": 159
, "Jaguar": 128
, "Mitsubishi": 93
, "Tesla": 32
, "GWM": 18
, "other": 6679
});

db.insert(db.countries.IT, "2022-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/1, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20gennaio%202022_61f93960afe2d.pdf",
{ "Dacia|Spring": 656
, "Fiat|500e": 548
, "Renault|Twingo E-Tech": 298
, "Smart|Fortwo ED": 230
, "Renault|Zoe": 228
, "Peugeot|e-208": 178
, "Peugeot|e-2008": 159
, "Volkswagen|ID.3": 113
, "Opel|Corsa-e": 83
, "Ford|Mustang Mach-E": 71
, "Mini|Cooper SE": 67
, "Hyundai|Kona Electric": 65
, "Porsche|Taycan": 65
, "Audi|Q4 e-tron": 60
, "Hyundai|Ioniq 5": 52
, "Volkswagen|ID.4": 52
, "Opel|Mokka-e": 48
, "BMW|i3 BEV": 45
, "Kia|Niro EV": 44
, "Volvo|EC40": 41
, "Smart|Forfour ED": 36
, "Škoda|Enyaq": 33
, "Audi|Q8 e-tron": 32
, "Volkswagen|e-up!": 32
, "BMW|iX3": 31
, "Citroën|ë-C4": 31
, "Mercedes-Benz|EQA": 31
, "Kia|EV6": 30
, "MG|ZS EV": 29
, "Nissan|Leaf": 29
, "Volvo|EX40": 28
, "BMW|iX": 23
, "Tesla|Model 3": 21
, "Audi|e-tron GT": 14
, "MG|Marvel R": 14
, "Kia|Soul EV": 12
, "Mazda|MX-30 BEV": 12
, "Tesla|Model Y": 11
, "other": 106
});

db.insert(db.countries.IT, "2022-02", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Febbraio%202022_621e27a7f3bbf.pdf",
{ "Fiat": 16066
, "Ford": 8656
, "Volkswagen": 7265
, "Peugeot": 6931
, "Toyota": 5896
, "Renault": 5292
, "Dacia": 5141
, "Citroën": 4729
, "Jeep": 4700
, "Opel": 4436
, "Audi": 4371
, "BMW": 4250
, "Hyundai": 3630
, "Kia": 3608
, "Mercedes-Benz": 3399
, "Suzuki": 2411
, "Nissan": 2180
, "Škoda": 1988
, "Mini": 1664
, "Seat": 1312
, "Volvo": 1031
, "Mazda": 941
, "Honda": 719
, "Cupra": 460
, "MG": 433
, "Land Rover": 409
, "Porsche": 349
, "Smart": 322
, "Tesla": 279
, "Mitsubishi": 196
, "Subaru": 172
, "Jaguar": 168
, "other": 7465
});

db.insert(db.countries.IT, "2022-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/2, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20Febbraio%202022_621e264a1e0e9.pdf",
{ "Fiat|500e": 509
, "Smart|Fortwo ED": 297
, "Tesla|Model Y": 223
, "Volkswagen|ID.3": 152
, "Renault|Zoe": 145
, "Audi|Q4 e-tron": 112
, "BMW|i4": 107
, "Hyundai|Kona Electric": 101
, "Peugeot|e-2008": 97
, "Nissan|Leaf": 96
, "Volkswagen|ID.4": 94
, "Peugeot|e-208": 93
, "Renault|Twingo E-Tech": 88
, "Mini|Cooper SE": 80
, "Mercedes-Benz|EQA": 62
, "Dacia|Spring": 61
, "Hyundai|Ioniq 5": 58
, "Opel|Mokka-e": 58
, "Tesla|Model 3": 56
, "Ford|Mustang Mach-E": 55
, "Citroën|ë-C4": 54
, "BMW|i3 BEV": 53
, "Porsche|Taycan": 51
, "Volvo|EX40": 40
, "Opel|Corsa-e": 36
, "Škoda|Enyaq": 34
, "Kia|Niro EV": 30
, "Toyota|Proace City Electric": 28
, "Volvo|EC40": 26
, "Smart|Forfour ED": 25
, "Audi|Q8 e-tron": 23
, "Mercedes-Benz|EQB": 22
, "MG|ZS EV": 18
, "BMW|iX3": 17
, "BMW|iX": 16
, "Cupra|Born": 16
, "Volkswagen|e-up!": 16
, "Citroën|ë-Berlingo Electric": 15
, "Mazda|MX-30 BEV": 15
, "Mercedes-Benz|EQC": 15
, "Toyota|Proace Electric": 15
, "Kia|EV6": 13
, "MG|Marvel R": 13
, "Jaguar|I-Pace": 11
, "Peugeot|e-Rifter": 11
, "Audi|e-tron GT": 10
, "Kia|Soul EV": 7
, "other": 1
});

db.insert(db.countries.IT, "2022-03", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Marzo%202022_6246de835759c.pdf",
{ "Fiat": 15582
, "Volkswagen": 8892
, "Ford": 7642
, "Toyota": 7430
, "Citroën": 7039
, "Dacia": 6962
, "Peugeot": 6593
, "Audi": 5552
, "Renault": 5221
, "Opel": 4584
, "Mercedes-Benz": 4559
, "Jeep": 4417
, "Kia": 4102
, "BMW": 4100
, "Hyundai": 2905
, "Nissan": 2537
, "Suzuki": 2114
, "Škoda": 1848
, "Seat": 1412
, "Volvo": 1226
, "Mini": 1178
, "Tesla": 1056
, "Mazda": 966
, "Cupra": 815
, "Porsche": 738
, "Honda": 609
, "MG": 542
, "Land Rover": 449
, "Smart": 373
, "Jaguar": 286
, "Mitsubishi": 203
, "Subaru": 156
, "other": 7409
});

db.insert(db.countries.IT, "2022-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/3, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20marzo%202022_6246dd5fd9e67.pdf",
{ "Tesla|Model Y": 678
, "Dacia|Spring": 517
, "Fiat|500e": 495
, "Tesla|Model 3": 378
, "Smart|Fortwo ED": 314
, "Mini|Cooper SE": 155
, "Peugeot|e-208": 141
, "Renault|Zoe": 111
, "Hyundai|Kona Electric": 109
, "Volkswagen|ID.3": 86
, "Audi|Q4 e-tron": 85
, "Volkswagen|ID.4": 85
, "Mercedes-Benz|EQA": 83
, "Opel|Corsa-e": 82
, "Nissan|Leaf": 77
, "Peugeot|e-2008": 73
, "Ford|Mustang Mach-E": 72
, "Smart|Forfour ED": 59
, "Kia|Niro EV": 56
, "Volvo|EX40": 54
, "Citroën|ë-C4": 52
, "BMW|i4": 51
, "Renault|Twingo E-Tech": 49
, "Audi|Q8 e-tron": 48
, "BMW|i3 BEV": 47
, "Porsche|Taycan": 46
, "Škoda|Enyaq": 41
, "Mercedes-Benz|EQB": 40
, "MG|ZS EV": 37
, "BMW|iX": 35
, "Hyundai|Ioniq 5": 32
, "Opel|Mokka-e": 29
, "Toyota|Proace Electric": 27
, "Volvo|EC40": 27
, "Cupra|Born": 25
, "Kia|EV6": 19
, "Volkswagen|e-up!": 18
, "Mercedes-Benz|EQS": 17
, "Mercedes-Benz|EQC": 14
, "BMW|iX3": 11
, "MG|Marvel R": 11
, "Kia|Soul EV": 10
, "Mazda|MX-30 BEV": 8
, "Audi|e-tron GT": 7
, "Citroën|ë-Berlingo Electric": 6
, "Jaguar|I-Pace": 6
, "Toyota|Proace City Electric": 6
, "other": 82
});

db.insert(db.countries.IT, "2022-04", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Aprile%202022_626fd61c67f03.pdf",
{ "Fiat": 14601
, "Volkswagen": 8487
, "Toyota": 7140
, "Ford": 5863
, "Audi": 4492
, "Peugeot": 4361
, "Dacia": 4356
, "Jeep": 4134
, "BMW": 4088
, "Citroën": 3733
, "Opel": 3475
, "Kia": 3453
, "Mercedes-Benz": 3308
, "Renault": 3112
, "Hyundai": 2804
, "Škoda": 2062
, "Nissan": 1814
, "Mini": 1135
, "Suzuki": 1106
, "Cupra": 1077
, "Land Rover": 1008
, "Honda": 1001
, "Volvo": 920
, "Seat": 860
, "Mazda": 761
, "MG": 524
, "Smart": 427
, "Porsche": 338
, "Jaguar": 255
, "Mitsubishi": 244
, "Subaru": 145
, "Tesla": 27
, "other": 6228
});

db.insert(db.countries.IT, "2022-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/4, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20aprile%202022_626fd24f80053.pdf",
{ "Fiat|500e": 497
, "Smart|Fortwo ED": 405
, "Dacia|Spring": 372
, "Renault|Zoe": 215
, "Volkswagen|ID.4": 95
, "Mini|Cooper SE": 94
, "Volkswagen|ID.3": 93
, "Hyundai|Kona Electric": 92
, "BMW|i3 BEV": 83
, "Opel|Corsa-e": 83
, "Peugeot|e-208": 83
, "Renault|Twingo E-Tech": 66
, "Ford|Mustang Mach-E": 64
, "Škoda|Enyaq": 61
, "Audi|Q4 e-tron": 60
, "Mercedes-Benz|EQA": 53
, "Peugeot|e-2008": 41
, "Mercedes-Benz|EQB": 36
, "Porsche|Taycan": 34
, "Kia|EV6": 31
, "Volvo|EC40": 31
, "Audi|Q8 e-tron": 30
, "Cupra|Born": 28
, "Kia|Niro EV": 28
, "Volvo|EX40": 27
, "Tesla|Model Y": 25
, "Nissan|Leaf": 24
, "Smart|Forfour ED": 22
, "BMW|iX": 21
, "BMW|i4": 20
, "Opel|Mokka-e": 20
, "Honda|e": 18
, "Toyota|Proace Electric": 17
, "Kia|Soul EV": 15
, "Mercedes-Benz|EQV": 15
, "Renault|Megane E-Tech": 15
, "Opel|Combo-e": 14
, "Hyundai|Ioniq 5": 13
, "Mazda|MX-30 BEV": 13
, "MG|Marvel R": 12
, "Volkswagen|ID.5": 11
, "Volkswagen|e-up!": 11
, "Citroën|ë-C4": 10
, "MG|ZS EV": 9
, "Mercedes-Benz|EQS": 6
, "Peugeot|e-Rifter": 6
, "BMW|iX3": 5
, "Jaguar|I-Pace": 5
, "Audi|e-tron GT": 4
, "Mercedes-Benz|EQC": 4
, "Tesla|other": 2
, "other": 11
});

db.insert(db.countries.IT, "2022-05", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02_Marca%20Maggio%202022_629775401787e.pdf",
{ "Fiat": 19531
, "Volkswagen": 11129
, "Toyota": 8520
, "Peugeot": 6411
, "Ford": 6042
, "Jeep": 5689
, "Citroën": 5190
, "Opel": 4687
, "Dacia": 4580
, "Audi": 4472
, "Renault": 4206
, "BMW": 4141
, "Hyundai": 3926
, "Kia": 3704
, "Mercedes-Benz": 3659
, "Nissan": 2723
, "Škoda": 2334
, "Seat": 1773
, "Cupra": 1549
, "Volvo": 1547
, "Suzuki": 1254
, "Mini": 1167
, "Honda": 827
, "Land Rover": 738
, "Mazda": 678
, "Porsche": 523
, "Smart": 476
, "Mitsubishi": 321
, "MG": 274
, "Jaguar": 255
, "Subaru": 99
, "Tesla": 14
, "other": 8860
});

db.insert(db.countries.IT, "2022-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/5, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20maggio%202022_629754c4832a3.pdf",
{ "Fiat|500e": 749
, "Smart|Fortwo ED": 450
, "Peugeot|e-208": 297
, "Renault|Twingo E-Tech": 275
, "Dacia|Spring": 269
, "Peugeot|e-2008": 219
, "Mini|Cooper SE": 177
, "Renault|Zoe": 177
, "Volkswagen|e-up!": 164
, "Volkswagen|ID.3": 154
, "Hyundai|Kona Electric": 148
, "Cupra|Born": 120
, "Opel|Corsa-e": 96
, "Audi|Q4 e-tron": 92
, "Mercedes-Benz|EQA": 81
, "Volkswagen|ID.4": 80
, "Ford|Mustang Mach-E": 72
, "Nissan|Leaf": 68
, "Škoda|Enyaq": 60
, "Opel|Mokka-e": 54
, "Porsche|Taycan": 51
, "Kia|Niro EV": 50
, "Citroën|ë-C4": 49
, "Kia|EV6": 49
, "Volvo|EC40": 42
, "BMW|i3 BEV": 39
, "BMW|iX": 39
, "MG|Marvel R": 29
, "MG|ZS EV": 29
, "Mercedes-Benz|EQB": 28
, "Smart|Forfour ED": 26
, "Audi|Q8 e-tron": 22
, "Mercedes-Benz|EQE": 21
, "Volkswagen|ID.5": 21
, "Mazda|MX-30 BEV": 20
, "BMW|i4": 19
, "BMW|iX3": 19
, "MG|5 EV": 17
, "Tesla|Model Y": 14
, "Hyundai|Ioniq 5": 12
, "Mercedes-Benz|EQS": 11
, "Peugeot|e-Traveller": 11
, "Citroën|ë-SpaceTourer": 10
, "Volvo|EX40": 9
, "Peugeot|e-Rifter": 8
, "Audi|e-tron GT": 7
, "Mercedes-Benz|EQC": 7
, "Mercedes-Benz|EQV": 5
, "Toyota|Proace Electric": 5
, "Honda|e": 3
, "Jaguar|I-Pace": 3
, "Opel|Combo-e": 3
, "Toyota|Proace City Electric": 3
, "other": 6
});

db.insert(db.countries.IT, "2022-06", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02_Marca%20Giugno%202022_62befaffac56a.pdf",
{ "Fiat": 16812
, "Volkswagen": 10249
, "Peugeot": 9560
, "Dacia": 9301
, "Toyota": 8392
, "Citroën": 5899
, "Renault": 5754
, "Opel": 5227
, "Jeep": 5125
, "Audi": 4408
, "BMW": 4060
, "Ford": 4028
, "Mercedes-Benz": 3929
, "Hyundai": 3918
, "Kia": 3613
, "Nissan": 2951
, "Škoda": 2324
, "Cupra": 1721
, "Seat": 1533
, "Suzuki": 1509
, "Tesla": 1143
, "Volvo": 1080
, "Mini": 1075
, "Land Rover": 804
, "Smart": 754
, "MG": 619
, "Honda": 590
, "Porsche": 581
, "Mazda": 534
, "Jaguar": 207
, "Mitsubishi": 168
, "Subaru": 146
, "other": 9195
});

db.insert(db.countries.IT, "2022-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/6, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20giugno%202022_62befa7adc5df.pdf",
{ "Fiat|500e": 781
, "Tesla|Model Y": 769
, "Smart|Fortwo ED": 723
, "Tesla|Model 3": 374
, "Renault|Twingo E-Tech": 271
, "Peugeot|e-208": 222
, "Renault|Zoe": 217
, "Renault|Megane E-Tech": 189
, "Peugeot|e-2008": 177
, "Volkswagen|ID.3": 170
, "Dacia|Spring": 165
, "Mercedes-Benz|EQA": 163
, "Škoda|Enyaq": 163
, "Mini|Cooper SE": 140
, "Volkswagen|ID.4": 136
, "Cupra|Born": 134
, "Nissan|Leaf": 115
, "Hyundai|Kona Electric": 113
, "Volkswagen|e-up!": 101
, "Audi|Q4 e-tron": 93
, "Opel|Mokka-e": 82
, "Opel|Corsa-e": 64
, "BMW|i3 BEV": 50
, "Volkswagen|ID.5": 46
, "Ford|Mustang Mach-E": 45
, "Porsche|Taycan": 45
, "Citroën|ë-C4": 44
, "MG|Marvel R": 43
, "MG|ZS EV": 42
, "Mercedes-Benz|EQB": 33
, "Smart|Forfour ED": 31
, "BMW|iX": 30
, "Kia|Niro EV": 29
, "Audi|Q8 e-tron": 28
, "Honda|e": 27
, "Mazda|MX-30 BEV": 22
, "Toyota|Proace Electric": 21
, "BMW|i4": 19
, "Kia|EV6": 18
, "Volvo|EC40": 17
, "Mercedes-Benz|EQE": 15
, "MG|5 EV": 14
, "Jaguar|I-Pace": 13
, "Subaru|Solterra": 12
, "Hyundai|Ioniq 5": 11
, "BMW|iX3": 10
, "Toyota|Proace City Electric": 8
, "Peugeot|e-Rifter": 7
, "Audi|e-tron GT": 6
, "Volvo|EX40": 6
, "Mercedes-Benz|other": 15
, "Kia|other": 5
, "other": 116
});

db.insert(db.countries.IT, "2022-07", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02_Marca%20Luglio%202022_62e7d48f1cccf.pdf",
{ "Fiat": 15300
, "Volkswagen": 9847
, "Toyota": 8119
, "Renault": 6134
, "Ford": 5536
, "Peugeot": 5256
, "Dacia": 5154
, "Citroën": 5116
, "Audi": 4750
, "Jeep": 4124
, "Mercedes-Benz": 3830
, "Opel": 3615
, "Hyundai": 3560
, "Kia": 3442
, "BMW": 3164
, "Škoda": 2314
, "Nissan": 1958
, "Seat": 1366
, "Suzuki": 1311
, "Volvo": 1287
, "Mini": 1242
, "Cupra": 907
, "Land Rover": 837
, "Porsche": 669
, "Mazda": 571
, "Honda": 534
, "MG": 519
, "Mitsubishi": 394
, "Smart": 311
, "Jaguar": 180
, "Subaru": 115
, "Tesla": 37
, "other": 8081
});

db.insert(db.countries.IT, "2022-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/7, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20luglio%202022_63106f1c9dcb6.pdf",
{ "Fiat|500e": 779
, "Smart|Fortwo ED": 304
, "Renault|Twingo E-Tech": 263
, "Renault|Megane E-Tech": 234
, "Peugeot|e-208": 188
, "Cupra|Born": 126
, "Peugeot|e-2008": 104
, "Mini|Cooper SE": 98
, "Ford|Mustang Mach-E": 97
, "Opel|Mokka-e": 94
, "Renault|Zoe": 91
, "Volkswagen|ID.3": 88
, "Hyundai|Kona Electric": 87
, "Mercedes-Benz|EQA": 81
, "Audi|Q4 e-tron": 79
, "Volkswagen|ID.4": 68
, "Opel|Corsa-e": 62
, "BMW|i3 BEV": 61
, "Porsche|Taycan": 59
, "Nissan|Leaf": 58
, "Škoda|Enyaq": 54
, "Dacia|Spring": 52
, "Audi|Q8 e-tron": 42
, "Citroën|ë-C4": 37
, "Tesla|Model Y": 37
, "Mercedes-Benz|EQB": 34
, "BMW|i4": 32
, "Volkswagen|ID.5": 31
, "BMW|iX": 27
, "MG|ZS EV": 24
, "Kia|EV6": 22
, "Toyota|Proace Electric": 22
, "Volkswagen|e-up!": 20
, "Toyota|Proace City Electric": 15
, "Volvo|EC40": 15
, "BMW|iX3": 14
, "Mercedes-Benz|EQE": 13
, "Jaguar|I-Pace": 9
, "Mazda|MX-30 BEV": 7
, "Smart|Forfour ED": 7
, "Audi|e-tron GT": 6
, "Kia|Niro EV": 6
, "Mercedes-Benz|EQC": 6
, "Mercedes-Benz|EQS": 6
, "Honda|e": 5
, "Hyundai|Ioniq 5": 4
, "MG|Marvel R": 4
, "Opel|Combo-e": 3
, "Citroën|ë-Berlingo Electric": 2
, "Kia|Soul EV": 2
, "Peugeot|e-Rifter": 2
, "other": 36
});

db.insert(db.countries.IT, "2022-08", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02_Marca%20Agosto%202022_6310a8afd3969.pdf",
{ "Fiat": 10724
, "Volkswagen": 5685
, "Ford": 5412
, "Toyota": 4468
, "Peugeot": 3755
, "Audi": 3428
, "Citroën": 3345
, "Dacia": 2993
, "Renault": 2622
, "Hyundai": 2445
, "Kia": 2261
, "Mercedes-Benz": 2260
, "BMW": 2257
, "Opel": 1965
, "Jeep": 1635
, "Škoda": 1596
, "Nissan": 1417
, "Mini": 929
, "Suzuki": 867
, "Volvo": 673
, "Cupra": 563
, "Land Rover": 547
, "Mazda": 519
, "Seat": 474
, "MG": 392
, "Honda": 343
, "Porsche": 272
, "Mitsubishi": 142
, "Smart": 134
, "Jaguar": 115
, "Subaru": 103
, "Tesla": 100
, "other": 6749
});

db.insert(db.countries.IT, "2022-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/8, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20agosto%202022_6310a72eba3cf.pdf",
{ "Fiat|500e": 360
, "Smart|Fortwo ED": 128
, "Renault|Twingo E-Tech": 114
, "Opel|Corsa-e": 113
, "Volkswagen|ID.3": 101
, "Tesla|Model Y": 100
, "Peugeot|e-2008": 93
, "Hyundai|Kona Electric": 86
, "Nissan|Ariya": 84
, "Cupra|Born": 80
, "Volkswagen|ID.4": 78
, "Renault|Zoe": 75
, "Mini|Cooper SE": 72
, "Audi|Q4 e-tron": 70
, "Renault|Megane E-Tech": 69
, "Peugeot|e-208": 67
, "Opel|Mokka-e": 47
, "Nissan|Leaf": 40
, "Audi|Q8 e-tron": 39
, "Volvo|EC40": 37
, "Volkswagen|ID.5": 34
, "Škoda|Enyaq": 34
, "BMW|i3 BEV": 33
, "Porsche|Taycan": 32
, "Volvo|EX40": 30
, "Mercedes-Benz|EQA": 29
, "BMW|iX": 27
, "Dacia|Spring": 26
, "Ford|Mustang Mach-E": 24
, "BMW|i4": 22
, "Citroën|ë-C4": 17
, "Mercedes-Benz|EQB": 17
, "Mercedes-Benz|EQC": 13
, "BMW|iX3": 12
, "Kia|EV6": 12
, "Toyota|Proace Electric": 10
, "Mazda|MX-30 BEV": 8
, "Mercedes-Benz|EQE": 6
, "Smart|Forfour ED": 6
, "Toyota|Proace City Electric": 6
, "Volkswagen|e-up!": 6
, "Hyundai|Ioniq 5": 5
, "Kia|Niro EV": 4
, "MG|ZS EV": 3
, "Mercedes-Benz|EQS": 3
, "Mercedes-Benz|EQV": 3
, "MG|Marvel R": 2
, "other": 27
});

db.insert(db.countries.IT, "2022-09", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Settembre%202022_633eebf0d59b6.pdf",
{ "Fiat": 14268
, "Volkswagen": 8346
, "Toyota": 8252
, "Ford": 5747
, "Renault": 5624
, "Audi": 5136
, "Mercedes-Benz": 4889
, "Citroën": 4793
, "Dacia": 4771
, "Peugeot": 4102
, "BMW": 3818
, "Opel": 3715
, "Kia": 3712
, "Hyundai": 3693
, "Jeep": 2896
, "Škoda": 2538
, "Nissan": 2254
, "Suzuki": 2253
, "Mini": 1395
, "Volvo": 1346
, "Cupra": 1275
, "Tesla": 1207
, "Mazda": 980
, "Land Rover": 767
, "Seat": 748
, "Honda": 742
, "Porsche": 655
, "MG": 484
, "Smart": 325
, "Jaguar": 243
, "Subaru": 182
, "Mitsubishi": 87
, "other": 9733
});

db.insert(db.countries.IT, "2022-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/9, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Settembre%202022_633eeb536b1b9.pdf",
{ "Tesla|Model Y": 968
, "Fiat|500e": 470
, "Smart|Fortwo ED": 308
, "Tesla|Model 3": 238
, "Renault|Twingo E-Tech": 233
, "Opel|Mokka-e": 210
, "Volkswagen|ID.4": 201
, "Opel|Corsa-e": 184
, "Volvo|EX40": 183
, "Peugeot|e-208": 152
, "Renault|Megane E-Tech": 134
, "Volkswagen|ID.3": 127
, "Hyundai|Kona Electric": 122
, "Cupra|Born": 107
, "Peugeot|e-2008": 104
, "Mini|Cooper SE": 98
, "Audi|Q4 e-tron": 96
, "Dacia|Spring": 90
, "Kia|Niro EV": 81
, "Renault|Zoe": 72
, "BMW|i3 BEV": 70
, "BMW|i4": 68
, "Mercedes-Benz|EQA": 65
, "Mercedes-Benz|EQB": 62
, "Nissan|Leaf": 60
, "Audi|Q8 e-tron": 53
, "BMW|iX3": 46
, "MG|Marvel R": 40
, "BMW|iX": 36
, "Ford|Mustang Mach-E": 36
, "Volvo|EC40": 35
, "Citroën|ë-C4": 28
, "Škoda|Enyaq": 28
, "Mazda|MX-30 BEV": 25
, "Nissan|Ariya": 22
, "Kia|EV6": 20
, "Porsche|Taycan": 18
, "Smart|Forfour ED": 17
, "MG|ZS EV": 15
, "MG|4 EV": 14
, "Mercedes-Benz|EQE": 14
, "Volkswagen|ID.5": 13
, "Fiat|E-Ulysse": 12
, "Mercedes-Benz|EQC": 12
, "Mercedes-Benz|EQS": 12
, "Hyundai|Ioniq 5": 9
, "Toyota|Proace City Electric": 9
, "Toyota|Proace Electric": 7
, "Volkswagen|e-up!": 7
, "MG|5 EV": 4
, "Audi|other": 3
, "Honda|other": 3
, "Jaguar|other": 3
, "Mercedes-Benz|other": 3
, "other": 41
});

db.insert(db.countries.IT, "2022-10", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Ottobre%202022_6362879f08071.pdf",
{ "Fiat": 13377
, "Toyota": 9032
, "Volkswagen": 8633
, "Ford": 6611
, "Renault": 5838
, "Audi": 5438
, "Citroën": 5374
, "Peugeot": 5118
, "Jeep": 4984
, "Dacia": 4889
, "BMW": 4814
, "Mercedes-Benz": 4455
, "Kia": 4058
, "Hyundai": 3693
, "Opel": 3435
, "Mini": 1999
, "Škoda": 1835
, "Nissan": 1778
, "Suzuki": 1729
, "MG": 1482
, "Volvo": 1475
, "Cupra": 1028
, "Seat": 838
, "Mazda": 797
, "Land Rover": 728
, "Honda": 708
, "Porsche": 576
, "Smart": 470
, "Jaguar": 177
, "Mitsubishi": 114
, "Subaru": 109
, "Tesla": 30
, "other": 10205
});

db.insert(db.countries.IT, "2022-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/10, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Ottobre%202022_636286ffbac16.pdf",
{ "Smart|Fortwo ED": 468
, "Renault|Twingo E-Tech": 419
, "Fiat|500e": 398
, "Peugeot|e-208": 281
, "Mini|Cooper SE": 198
, "Renault|Megane E-Tech": 164
, "Volkswagen|ID.3": 137
, "Audi|Q4 e-tron": 117
, "Peugeot|e-2008": 117
, "Cupra|Born": 99
, "BMW|i4": 92
, "Volvo|EX40": 84
, "Volkswagen|ID.4": 69
, "Mercedes-Benz|EQA": 66
, "Opel|Corsa-e": 53
, "Hyundai|Kona Electric": 49
, "Ford|Mustang Mach-E": 47
, "Nissan|Leaf": 47
, "Renault|Zoe": 46
, "BMW|iX3": 45
, "Mercedes-Benz|EQB": 44
, "Opel|Mokka-e": 43
, "Volkswagen|ID.5": 36
, "Dacia|Spring": 35
, "Porsche|Taycan": 35
, "Audi|Q8 e-tron": 34
, "BMW|i3 BEV": 33
, "BMW|iX": 31
, "Tesla|Model Y": 31
, "MG|4 EV": 29
, "Škoda|Enyaq": 29
, "Kia|Niro EV": 28
, "Volvo|EC40": 28
, "Citroën|ë-C4": 21
, "MG|Marvel R": 21
, "Nissan|Ariya": 21
, "Toyota|Proace City Electric": 20
, "Mercedes-Benz|EQE": 18
, "Kia|EV6": 17
, "Polestar|2": 16
, "Hyundai|Ioniq 5": 14
, "Mazda|MX-30 BEV": 11
, "Mercedes-Benz|EQC": 11
, "MG|ZS EV": 10
, "Mercedes-Benz|EQS": 6
, "MG|5 EV": 5
, "Peugeot|e-Rifter": 5
, "Subaru|Solterra": 5
, "Toyota|Proace Electric": 5
, "Audi|e-tron GT": 3
, "Mercedes-Benz|EQV": 3
, "Smart|other": 2
, "other": 49
});

db.insert(db.countries.IT, "2022-11", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Novembre%202022_6388b6e495397.pdf",
{ "Fiat": 14071
, "Volkswagen": 9717
, "Toyota": 9131
, "Dacia": 7213
, "Peugeot": 6092
, "Audi": 6049
, "Ford": 5587
, "Renault": 5201
, "Jeep": 4599
, "Kia": 4529
, "BMW": 4409
, "Hyundai": 4123
, "Mercedes-Benz": 4110
, "Citroën": 3799
, "Opel": 2516
, "Mini": 2439
, "Škoda": 2291
, "Suzuki": 2180
, "Nissan": 1859
, "Volvo": 1526
, "Tesla": 1108
, "MG": 1078
, "Seat": 1048
, "Mazda": 866
, "Porsche": 810
, "Cupra": 749
, "Land Rover": 650
, "Honda": 540
, "Smart": 472
, "Subaru": 199
, "Jaguar": 112
, "Mitsubishi": 67
, "other": 10713
});

db.insert(db.countries.IT, "2022-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/11, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20novembre%202022_6388ae2076c5b.pdf",
{ "Tesla|Model Y": 1006
, "Smart|Fortwo ED": 470
, "Fiat|500e": 395
, "Renault|Twingo E-Tech": 392
, "Dacia|Spring": 350
, "Peugeot|e-208": 236
, "Mini|Cooper SE": 223
, "Volkswagen|ID.3": 159
, "Audi|Q4 e-tron": 157
, "Peugeot|e-2008": 130
, "Volkswagen|ID.4": 120
, "BMW|i4": 103
, "Renault|Megane E-Tech": 100
, "Tesla|Model 3": 98
, "BMW|iX": 94
, "Cupra|Born": 81
, "Porsche|Taycan": 78
, "Mercedes-Benz|EQA": 52
, "Volvo|EX40": 52
, "Hyundai|Ioniq 5": 47
, "Volkswagen|ID.5": 45
, "Renault|Zoe": 44
, "Nissan|Leaf": 43
, "Opel|Mokka-e": 43
, "Mercedes-Benz|EQB": 39
, "Subaru|Solterra": 39
, "BMW|i3 BEV": 36
, "Ford|Mustang Mach-E": 35
, "Nissan|Ariya": 34
, "Hyundai|Kona Electric": 33
, "BMW|i7": 30
, "Škoda|Enyaq": 30
, "Opel|Corsa-e": 26
, "Kia|Niro EV": 24
, "MG|4 EV": 24
, "MG|Marvel R": 23
, "Fiat|E-Doblò": 21
, "Audi|Q8 e-tron": 20
, "Polestar|2": 19
, "Volvo|EC40": 17
, "BMW|iX3": 16
, "Mercedes-Benz|EQC": 15
, "MG|ZS EV": 14
, "Kia|EV6": 12
, "Mercedes-Benz|EQE": 10
, "Toyota|Proace City Electric": 10
, "Volkswagen|ID. Buzz": 10
, "Audi|e-tron GT": 9
, "Citroën|ë-C4": 9
, "Citroën|ë-SpaceTourer": 8
, "Mercedes-Benz|other": 12
, "Mazda|other": 6
, "Toyota|other": 5
, "MG|other": 3
, "other": 55
});

db.insert(db.countries.IT, "2022-12", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Dicembre%202022_63b3ce802469b.pdf",
{ "Fiat": 12526
, "Volkswagen": 8916
, "Toyota": 8171
, "Renault": 5296
, "Dacia": 4927
, "Ford": 4819
, "Audi": 4710
, "Jeep": 4661
, "Peugeot": 4476
, "Mercedes-Benz": 4316
, "BMW": 4049
, "Kia": 3732
, "Citroën": 3386
, "Hyundai": 3178
, "Opel": 2611
, "Nissan": 2193
, "Suzuki": 2190
, "Škoda": 2002
, "Mini": 1750
, "Volvo": 1523
, "Seat": 1260
, "Porsche": 1208
, "Cupra": 947
, "Mazda": 786
, "MG": 761
, "Tesla": 566
, "Land Rover": 467
, "Smart": 450
, "Honda": 324
, "Mitsubishi": 205
, "Subaru": 128
, "Jaguar": 43
, "other": 8338
});

db.insert(db.countries.IT, "2022-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/12, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Dicembre%202022_63b311183e874.pdf",
{ "Smart|Fortwo ED": 447
, "Tesla|Model Y": 412
, "Fiat|500e": 303
, "Renault|Twingo E-Tech": 273
, "Dacia|Spring": 231
, "Volkswagen|ID.4": 192
, "Peugeot|e-208": 183
, "Volkswagen|ID.3": 172
, "Volkswagen|ID.5": 159
, "Mini|Cooper SE": 158
, "BMW|i4": 152
, "Tesla|Model 3": 143
, "Audi|Q4 e-tron": 129
, "Porsche|Taycan": 126
, "BMW|iX": 108
, "Cupra|Born": 101
, "Nissan|Leaf": 100
, "Volkswagen|ID. Buzz": 70
, "Mercedes-Benz|EQB": 67
, "Audi|Q8 e-tron": 64
, "Volvo|EX40": 64
, "Nissan|Ariya": 63
, "Mercedes-Benz|EQA": 62
, "Opel|Mokka-e": 62
, "MG|4 EV": 55
, "Peugeot|e-2008": 54
, "Volvo|EC40": 47
, "Renault|Megane E-Tech": 44
, "BMW|iX3": 38
, "BMW|iX1": 36
, "Kia|EV6": 29
, "Opel|Corsa-e": 26
, "Škoda|Enyaq": 25
, "Toyota|Proace Electric": 24
, "MG|Marvel R": 23
, "Mercedes-Benz|EQE": 23
, "Polestar|2": 22
, "Renault|Zoe": 20
, "Citroën|ë-C4": 17
, "Ford|Mustang Mach-E": 17
, "Kia|Niro EV": 17
, "Audi|e-tron GT": 16
, "Hyundai|Ioniq 5": 16
, "MG|ZS EV": 15
, "Tesla|Model S": 12
, "Mercedes-Benz|EQC": 11
, "Subaru|Solterra": 11
, "Hyundai|Kona Electric": 9
, "Fiat|E-Doblò": 7
, "Mercedes-Benz|EQS": 5
, "BMW|other": 7
, "Citroën|other": 4
, "Honda|other": 4
, "MG|other": 4
, "Peugeot|other": 4
, "Toyota|other": 3
, "other": 112
});

db.insert(db.countries.IT, "2023-01", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Gennaio%202023_63da853aee5fb.pdf",
{ "Fiat": 17929
, "Volkswagen": 11003
, "Toyota": 9206
, "Dacia": 8671
, "Renault": 6926
, "Jeep": 6571
, "Ford": 6460
, "Peugeot": 5199
, "Citroën": 4655
, "Audi": 4610
, "BMW": 4417
, "Mercedes-Benz": 4281
, "Hyundai": 3989
, "Kia": 3680
, "Opel": 3183
, "Škoda": 2548
, "Nissan": 2491
, "Suzuki": 2349
, "Mazda": 2125
, "Mini": 1609
, "MG": 1392
, "Volvo": 1322
, "Land Rover": 871
, "Cupra": 836
, "Seat": 831
, "Porsche": 672
, "Honda": 483
, "Smart": 370
, "Tesla": 326
, "Subaru": 175
, "Mitsubishi": 108
, "Jaguar": 107
, "other": 8906
});

db.insert(db.countries.IT, "2023-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/1, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20gennaio%202023_63da7ad70a678.pdf",
{ "Fiat|500e": 540
, "Smart|Fortwo ED": 369
, "Renault|Twingo E-Tech": 212
, "Audi|Q4 e-tron": 186
, "Tesla|Model Y": 147
, "Volkswagen|ID.3": 135
, "Dacia|Spring": 128
, "Peugeot|e-208": 128
, "MG|Marvel R": 100
, "Tesla|Model S": 98
, "MG|4 EV": 77
, "BMW|iX1": 72
, "Mini|Cooper SE": 60
, "Peugeot|e-2008": 52
, "Renault|Megane E-Tech": 52
, "Cupra|Born": 51
, "Tesla|Model X": 51
, "BMW|iX3": 50
, "Volvo|EX40": 50
, "Hyundai|Ioniq 5": 46
, "BMW|i4": 44
, "Nissan|Leaf": 40
, "Mazda|MX-30 BEV": 39
, "Opel|Corsa-e": 39
, "Citroën|ë-C4": 37
, "Hyundai|Kona Electric": 37
, "Mercedes-Benz|EQA": 35
, "Opel|Mokka-e": 33
, "Porsche|Taycan": 33
, "Tesla|Model 3": 30
, "Volkswagen|ID.4": 30
, "Ford|Mustang Mach-E": 28
, "Volkswagen|ID. Buzz": 28
, "BMW|iX": 25
, "Škoda|Enyaq": 24
, "Kia|EV6": 22
, "Audi|e-tron GT": 18
, "Kia|Niro EV": 17
, "Nissan|Ariya": 12
, "MG|5 EV": 11
, "MG|ZS EV": 11
, "Volvo|EC40": 11
, "Fiat|E-Doblò": 10
, "other": 124
});

db.insert(db.countries.IT, "2023-02", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Febbraio%202023_63ff72e39b529.pdf",
{ "Fiat": 15306
, "Volkswagen": 11381
, "Toyota": 8641
, "Dacia": 7799
, "Ford": 7440
, "Renault": 6822
, "Peugeot": 6472
, "Jeep": 6247
, "Audi": 5566
, "Citroën": 4605
, "BMW": 4446
, "Mercedes-Benz": 4212
, "Kia": 4053
, "Opel": 4016
, "Hyundai": 3624
, "Nissan": 3364
, "Škoda": 2682
, "Suzuki": 2520
, "Mini": 1767
, "Volvo": 1476
, "Mazda": 1335
, "Tesla": 1313
, "Cupra": 1112
, "Seat": 1105
, "MG": 1028
, "Land Rover": 888
, "Porsche": 639
, "Honda": 473
, "Smart": 409
, "Subaru": 185
, "Mitsubishi": 128
, "Jaguar": 107
, "other": 9204
});

db.insert(db.countries.IT, "2023-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/2, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20Febbraio%202023_63ff73aeb3cd9.pdf",
{ "Tesla|Model Y": 1116
, "Fiat|500e": 538
, "Smart|Fortwo ED": 409
, "Renault|Megane E-Tech": 403
, "Renault|Twingo E-Tech": 203
, "Tesla|Model 3": 192
, "Peugeot|e-208": 158
, "Audi|Q4 e-tron": 147
, "MG|4 EV": 134
, "Polestar|2": 111
, "Cupra|Born": 108
, "Volkswagen|ID.3": 90
, "Citroën|ë-C4": 88
, "Mini|Cooper SE": 79
, "Nissan|Leaf": 73
, "BMW|iX1": 69
, "Hyundai|Kona Electric": 63
, "Dacia|Spring": 60
, "Volvo|EX40": 58
, "Peugeot|e-2008": 57
, "BMW|i4": 48
, "MG|Marvel R": 48
, "Fiat|E-Doblò": 42
, "Opel|Mokka-e": 39
, "Mercedes-Benz|EQA": 37
, "Kia|EV6": 32
, "BMW|iX3": 31
, "Opel|Corsa-e": 30
, "BMW|iX": 26
, "Mercedes-Benz|EQB": 26
, "Audi|Q8 e-tron": 25
, "Kia|Niro EV": 24
, "Volkswagen|ID.4": 24
, "Volkswagen|ID.5": 23
, "Mercedes-Benz|EQE": 22
, "Volvo|EC40": 22
, "Toyota|Proace City Electric": 19
, "Volkswagen|ID. Buzz": 19
, "Hyundai|Ioniq 5": 14
, "Mercedes-Benz|EQS": 14
, "Nissan|Ariya": 14
, "Škoda|Enyaq": 14
, "Porsche|Taycan": 13
, "Audi|e-tron GT": 12
, "Renault|Zoe": 12
, "Citroën|ë-Berlingo Electric": 11
, "Fiat|E-Ulysse": 11
, "Subaru|Solterra": 11
, "Mercedes-Benz|EQC": 10
, "Mazda|MX-30 BEV": 8
, "MG|other": 12
, "Tesla|other": 5
, "other": 60
});

db.insert(db.countries.IT, "2023-03", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Marzo%202023_642ad178ad402.pdf",
{ "Fiat": 17379
, "Volkswagen": 11710
, "Peugeot": 10589
, "Toyota": 9861
, "Ford": 9798
, "Dacia": 8082
, "Jeep": 7998
, "Renault": 7323
, "Citroën": 7280
, "Opel": 6911
, "Audi": 6868
, "BMW": 6128
, "Nissan": 5226
, "Mercedes-Benz": 5175
, "Hyundai": 4951
, "Kia": 4768
, "Suzuki": 3509
, "Škoda": 3214
, "Tesla": 2911
, "MG": 2378
, "Mini": 2069
, "Cupra": 1840
, "Mazda": 1616
, "Volvo": 1578
, "Seat": 1514
, "Porsche": 787
, "Land Rover": 743
, "Honda": 632
, "Smart": 554
, "Subaru": 395
, "Mitsubishi": 292
, "Jaguar": 130
, "other": 14085
});

db.insert(db.countries.IT, "2023-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/3, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20marzo%202023_642ad0c507a46.pdf",
{ "Tesla|Model Y": 1653
, "Tesla|Model 3": 1094
, "Smart|Fortwo ED": 539
, "Fiat|500e": 440
, "Dacia|Spring": 356
, "MG|4 EV": 276
, "Renault|Megane E-Tech": 271
, "Peugeot|e-208": 262
, "Volkswagen|ID.3": 214
, "Renault|Twingo E-Tech": 209
, "Audi|Q4 e-tron": 202
, "Mercedes-Benz|EQA": 134
, "Polestar|2": 133
, "Mini|Cooper SE": 131
, "BMW|iX1": 128
, "Cupra|Born": 127
, "Citroën|ë-C4": 117
, "Toyota|Proace City Electric": 112
, "Renault|Zoe": 100
, "Mercedes-Benz|EQB": 94
, "Fiat|E-Doblò": 93
, "Opel|Corsa-e": 86
, "Ford|Mustang Mach-E": 82
, "Peugeot|e-2008": 80
, "BMW|i4": 78
, "Audi|Q8 e-tron": 75
, "Volkswagen|ID. Buzz": 74
, "Opel|Mokka-e": 73
, "Hyundai|Kona Electric": 66
, "BMW|iX": 63
, "Volkswagen|ID.4": 62
, "MG|Marvel R": 56
, "Tesla|Model S": 55
, "Volvo|EX40": 50
, "BMW|iX3": 40
, "Jeep|Avenger EV": 38
, "Tesla|Model X": 33
, "MG|5 EV": 32
, "Fiat|E-Ulysse": 31
, "Nissan|Leaf": 31
, "Škoda|Enyaq": 31
, "Volkswagen|ID.5": 30
, "Volvo|EC40": 29
, "Toyota|Proace Electric": 28
, "Mercedes-Benz|EQE": 26
, "Citroën|ë-Berlingo Electric": 22
, "Mazda|MX-30 BEV": 20
, "Hyundai|Ioniq 5": 19
, "Jaguar|I-Pace": 18
, "MG|ZS EV": 18
, "Kia|other": 35
, "Mercedes-Benz|other": 28
, "Honda|other": 17
, "Nissan|other": 14
, "Peugeot|other": 12
, "BMW|other": 11
, "Porsche|other": 11
, "Audi|other": 7
, "other": 29
});

db.insert(db.countries.IT, "2023-04", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Aprile%202023_64512d2f52fa6.pdf",
{ "Fiat": 15359
, "Volkswagen": 11644
, "Peugeot": 7622
, "Ford": 7381
, "Dacia": 6437
, "Audi": 6415
, "Renault": 6164
, "Jeep": 6025
, "Toyota": 6023
, "BMW": 5062
, "Opel": 4070
, "Kia": 3855
, "Mercedes-Benz": 3796
, "Hyundai": 3727
, "Citroën": 3029
, "MG": 3029
, "Škoda": 2882
, "Suzuki": 2714
, "Nissan": 1481
, "Mini": 1346
, "Volvo": 1214
, "Cupra": 1034
, "Seat": 877
, "Mazda": 742
, "Tesla": 740
, "Porsche": 573
, "Land Rover": 512
, "Smart": 365
, "Honda": 311
, "Subaru": 214
, "Jaguar": 127
, "Polestar": 96
, "Mitsubishi": 43
, "other": 10896
});

db.insert(db.countries.IT, "2023-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/4, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Aprile%202023_64512c803114c.pdf",
{ "Tesla|Model Y": 480
, "Fiat|500e": 372
, "Smart|Fortwo ED": 365
, "MG|4 EV": 228
, "Tesla|Model 3": 224
, "Dacia|Spring": 148
, "Renault|Twingo E-Tech": 144
, "Renault|Megane E-Tech": 143
, "Audi|Q4 e-tron": 129
, "Peugeot|e-208": 129
, "Mini|Cooper SE": 120
, "Opel|Mokka-e": 105
, "Volkswagen|ID.4": 97
, "Polestar|2": 96
, "Volkswagen|ID.5": 88
, "Opel|Corsa-e": 73
, "Volkswagen|ID.3": 70
, "Volvo|EX40": 70
, "Hyundai|Kona Electric": 68
, "Cupra|Born": 67
, "Mercedes-Benz|EQA": 54
, "BMW|i4": 53
, "BMW|iX1": 52
, "Kia|Niro EV": 51
, "Peugeot|e-2008": 49
, "Citroën|ë-C4": 45
, "Ford|Mustang Mach-E": 37
, "Renault|Zoe": 32
, "BMW|iX": 30
, "BMW|iX3": 26
, "Hyundai|Ioniq 6": 26
, "Škoda|Enyaq": 23
, "Porsche|Taycan": 22
, "Audi|Q8 e-tron": 20
, "Tesla|Model S": 20
, "MG|5 EV": 19
, "Volkswagen|ID. Buzz": 18
, "Volvo|EC40": 17
, "Kia|EV6": 16
, "Tesla|Model X": 16
, "Hyundai|Ioniq 5": 15
, "Mercedes-Benz|EQE": 14
, "MG|Marvel R": 13
, "Nissan|Ariya": 13
, "Nissan|Leaf": 13
, "Fiat|E-Doblò": 12
, "Mercedes-Benz|EQB": 11
, "Mercedes-Benz|EQS": 11
, "Subaru|Solterra": 9
, "Toyota|Proace City Electric": 9
, "MG|other": 7
, "Jaguar|other": 6
, "Citroën|other": 5
, "Mazda|other": 5
, "BMW|other": 4
, "Toyota|other": 4
, "Fiat|other": 3
});

db.insert(db.countries.IT, "2023-05", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca_Maggio%202023_6478b30f87cc6.pdf",
{ "Fiat": 14691
, "Volkswagen": 11090
, "Toyota": 10713
, "Peugeot": 10678
, "Ford": 8399
, "Dacia": 7878
, "Jeep": 6898
, "Renault": 6825
, "Audi": 6428
, "BMW": 5306
, "Kia": 4783
, "Opel": 4450
, "Hyundai": 4353
, "Mercedes-Benz": 4233
, "Citroën": 3994
, "Suzuki": 3915
, "MG": 3027
, "Škoda": 3013
, "Nissan": 2253
, "Volvo": 2093
, "Mini": 1996
, "Cupra": 1548
, "Tesla": 1477
, "Seat": 1308
, "Mazda": 1138
, "Land Rover": 859
, "Porsche": 686
, "Honda": 473
, "Smart": 405
, "Jaguar": 228
, "Subaru": 207
, "Polestar": 91
, "Mitsubishi": 84
, "other": 13891
});

db.insert(db.countries.IT, "2023-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/5, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_maggio%202023_6478c1a90afec.pdf",
{ "Tesla|Model Y": 726
, "Tesla|Model 3": 662
, "Fiat|500e": 516
, "Smart|Fortwo ED": 390
, "Opel|Corsa-e": 366
, "MG|4 EV": 347
, "Peugeot|e-2008": 233
, "Peugeot|e-208": 180
, "Volkswagen|ID.4": 173
, "Volkswagen|ID.5": 171
, "Audi|Q4 e-tron": 162
, "Jeep|Avenger EV": 156
, "Dacia|Spring": 154
, "Volvo|EX40": 154
, "Renault|Megane E-Tech": 112
, "Mini|Cooper SE": 99
, "Renault|Twingo E-Tech": 93
, "Opel|Mokka-e": 92
, "Polestar|2": 91
, "Volkswagen|ID.3": 86
, "BMW|i4": 82
, "Mercedes-Benz|EQA": 80
, "Cupra|Born": 75
, "Renault|Zoe": 70
, "Citroën|ë-C4": 64
, "Ford|Mustang Mach-E": 55
, "BMW|iX1": 52
, "Tesla|Model S": 51
, "Hyundai|Kona Electric": 45
, "Kia|EV6": 43
, "Volvo|EC40": 41
, "BMW|iX": 38
, "Tesla|Model X": 38
, "Volkswagen|ID. Buzz": 38
, "Škoda|Enyaq": 35
, "BMW|iX3": 33
, "Porsche|Taycan": 28
, "Mercedes-Benz|EQE": 26
, "Fiat|E-Doblò": 25
, "Mercedes-Benz|EQB": 24
, "Nissan|Leaf": 24
, "MG|ZS EV": 23
, "Audi|Q8 e-tron": 22
, "BYD|Yuan Plus": 21
, "Toyota|bZ4X": 20
, "Hyundai|Ioniq 5": 17
, "Citroën|ë-SpaceTourer": 16
, "Kia|Niro EV": 15
, "MG|Marvel R": 15
, "Smart|Hashtag 1": 15
, "Mercedes-Benz|other": 16
, "Chery|other": 14
, "Toyota|other": 9
, "Citroën|other": 8
, "Fiat|other": 8
, "Nissan|other": 6
, "Jaguar|other": 5
, "BMW|other": 4
, "other": 49
});

db.insert(db.countries.IT, "2023-06", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Giugno%202023_64a2d3b0bb224.pdf",
{ "Fiat": 13012
, "Volkswagen": 11414
, "Toyota": 7837
, "Dacia": 7801
, "Peugeot": 7583
, "Renault": 7499
, "Ford": 7494
, "Audi": 6532
, "Jeep": 6206
, "BMW": 5257
, "Hyundai": 4722
, "Citroën": 4147
, "Mercedes-Benz": 4128
, "Kia": 4081
, "Opel": 3989
, "MG": 3371
, "Suzuki": 3128
, "Škoda": 3105
, "Nissan": 3007
, "Volvo": 1818
, "Tesla": 1751
, "Mini": 1647
, "Cupra": 1634
, "Seat": 1275
, "Mazda": 1159
, "Land Rover": 1128
, "Porsche": 491
, "Honda": 476
, "Smart": 365
, "Subaru": 288
, "Jaguar": 255
, "Polestar": 124
, "Mitsubishi": 80
, "other": 12123
});

db.insert(db.countries.IT, "2023-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/6, https://www.unrae.it/files/07_Top%2010%20per%20alimentazione%20giugno%202023_64a2eefa4edff.pdf",
{ "Tesla|Model 3": 1010
, "Tesla|Model Y": 667
, "Fiat|500e": 452
, "Smart|Fortwo ED": 350
, "Opel|Corsa-e": 305
, "Renault|Twingo E-Tech": 303
, "Jeep|Avenger EV": 285
, "Peugeot|e-208": 193
, "MG|4 EV": 165
, "Renault|Megane E-Tech": 139
, "Volkswagen|ID.4": 137
, "Audi|Q4 e-tron": 136
, "Volkswagen|ID.3": 128
, "Polestar|2": 124
, "BMW|iX1": 109
, "Mercedes-Benz|EQA": 109
, "Ford|Mustang Mach-E": 107
, "Dacia|Spring": 79
, "Chery|eQ1": 78
, "Mini|Cooper SE": 76
, "Volkswagen|ID.5": 76
, "Mercedes-Benz|EQB": 68
, "Citroën|ë-C4": 67
, "Cupra|Born": 66
, "Peugeot|e-2008": 66
, "Škoda|Enyaq": 59
, "Volvo|EX40": 56
, "Hyundai|Kona Electric": 55
, "Mercedes-Benz|EQE": 54
, "Porsche|Taycan": 54
, "Renault|Zoe": 53
, "Opel|Mokka-e": 49
, "Tesla|Model S": 41
, "Mercedes-Benz|EQS SUV": 39
, "MG|Marvel R": 33
, "Tesla|Model X": 33
, "BMW|i4": 31
, "Volkswagen|ID. Buzz": 31
, "BMW|iX": 30
, "MG|ZS EV": 30
, "Nissan|Leaf": 29
, "Audi|Q8 e-tron": 19
, "MG|5 EV": 19
, "Kia|EV6": 17
, "Mercedes-Benz|EQV": 16
, "Smart|Hashtag 1": 15
, "Volvo|EC40": 13
, "BMW|iX3": 12
, "Audi|e-tron GT": 10
, "Fiat|E-Doblò": 10
, "Kia|Niro EV": 10
, "Citroën|other": 13
, "Toyota|other": 12
, "Hyundai|other": 7
, "Mercedes-Benz|other": 4
, "Nissan|other": 4
, "other": 6
});

db.insert(db.countries.IT, "2023-07", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Luglio%202023_64c8de6ccdfd3.pdf",
{ "Fiat": 14341
, "Volkswagen": 9229
, "Dacia": 7108
, "Audi": 5932
, "Renault": 5877
, "Ford": 5613
, "Peugeot": 5530
, "Jeep": 5466
, "BMW": 5161
, "Toyota": 3996
, "Mercedes-Benz": 3970
, "Kia": 3886
, "Hyundai": 3881
, "Citroën": 3772
, "Suzuki": 2977
, "Opel": 2914
, "Škoda": 2898
, "Nissan": 2816
, "MG": 2468
, "Mini": 1916
, "Cupra": 1640
, "Volvo": 1475
, "Mazda": 1316
, "Seat": 1024
, "Land Rover": 942
, "Porsche": 624
, "Honda": 481
, "Tesla": 478
, "Smart": 375
, "Subaru": 238
, "Jaguar": 181
, "Mitsubishi": 77
, "Polestar": 66
, "other": 10539
});

db.insert(db.countries.IT, "2023-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/7, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Luglio%202023_64c8fda24a8df.pdf",
{ "Tesla|Model Y": 399
, "Fiat|500e": 332
, "Smart|Fortwo ED": 317
, "MG|4 EV": 222
, "Peugeot|e-208": 220
, "Dacia|Spring": 208
, "Renault|Megane E-Tech": 179
, "Opel|Corsa-e": 163
, "Jeep|Avenger EV": 127
, "Mini|Cooper SE": 93
, "Volkswagen|ID.4": 90
, "Hyundai|Kona Electric": 88
, "MG|ZS EV": 86
, "Audi|Q4 e-tron": 85
, "Renault|Twingo E-Tech": 84
, "Volkswagen|ID.3": 83
, "BMW|iX1": 79
, "Mercedes-Benz|EQA": 71
, "Audi|Q8 e-tron": 69
, "Citroën|ë-C4": 68
, "Tesla|Model 3": 67
, "Polestar|2": 66
, "MG|Marvel R": 63
, "Porsche|Taycan": 63
, "BMW|i4": 60
, "Ford|Mustang Mach-E": 59
, "Smart|Hashtag 1": 58
, "Škoda|Enyaq": 54
, "Chery|eQ1": 49
, "Peugeot|e-2008": 46
, "Cupra|Born": 42
, "Fiat|600e": 37
, "Mercedes-Benz|EQB": 33
, "Mercedes-Benz|EQE": 30
, "BMW|iX3": 25
, "Citroën|ë-SpaceTourer": 25
, "Volvo|EX40": 25
, "MG|5 EV": 24
, "Opel|Mokka-e": 22
, "Volkswagen|ID.5": 22
, "BYD|Yuan Plus": 21
, "Renault|Zoe": 21
, "Nissan|Ariya": 20
, "BMW|iX": 19
, "Kia|EV6": 18
, "Nissan|Leaf": 17
, "Volkswagen|ID. Buzz": 17
, "Volvo|EC40": 14
, "Kia|Niro EV": 12
, "Opel|Zafira-e": 11
, "Tesla|other": 12
, "Mercedes-Benz|other": 9
, "Fiat|other": 8
, "Hyundai|other": 7
, "Citroën|other": 6
, "Toyota|other": 6
, "other": 7
});

db.insert(db.countries.IT, "2023-08", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Agosto%202023_64f1c3708072b.pdf",
{ "Fiat": 8542
, "Volkswagen": 5565
, "Toyota": 4884
, "Dacia": 4255
, "Ford": 3948
, "Peugeot": 3859
, "Audi": 3529
, "Jeep": 3381
, "Renault": 3367
, "Citroën": 3203
, "BMW": 2961
, "Kia": 2737
, "Hyundai": 2570
, "Mercedes-Benz": 2520
, "Opel": 2470
, "Nissan": 2373
, "Tesla": 2129
, "Škoda": 1944
, "Suzuki": 1496
, "MG": 1481
, "Cupra": 1064
, "Mini": 968
, "Volvo": 719
, "Seat": 566
, "Mazda": 550
, "Land Rover": 503
, "Porsche": 392
, "Honda": 385
, "Smart": 161
, "Subaru": 123
, "Jaguar": 99
, "Mitsubishi": 61
, "Polestar": 8
, "other": 6943
});

db.insert(db.countries.IT, "2023-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/8, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20agosto%202023_64f1ba79b0a5d.pdf",
{ "Tesla|Model 3": 1192
, "Tesla|Model Y": 931
, "Renault|Megane E-Tech": 172
, "Fiat|500e": 135
, "Smart|Fortwo ED": 129
, "Audi|Q4 e-tron": 114
, "Dacia|Spring": 108
, "Ford|Mustang Mach-E": 106
, "BMW|iX1": 90
, "Hyundai|Kona Electric": 74
, "Opel|Corsa-e": 73
, "Mini|Cooper SE": 60
, "MG|4 EV": 58
, "Volkswagen|ID.3": 56
, "Peugeot|e-2008": 53
, "Peugeot|e-208": 50
, "Jeep|Avenger EV": 47
, "Citroën|ë-C4": 46
, "BMW|i4": 40
, "Cupra|Born": 37
, "Chery|eQ1": 35
, "Volkswagen|ID.4": 35
, "Smart|Hashtag 1": 32
, "Porsche|Taycan": 23
, "Renault|Twingo E-Tech": 23
, "Mercedes-Benz|EQE": 22
, "Volvo|EC40": 22
, "Škoda|Enyaq": 22
, "BMW|iX": 21
, "Nissan|Leaf": 21
, "Opel|Mokka-e": 19
, "Mercedes-Benz|EQA": 17
, "Mercedes-Benz|EQB": 16
, "BYD|Yuan Plus": 14
, "Audi|Q8 e-tron": 13
, "Hyundai|Ioniq 6": 13
, "BMW|iX3": 12
, "Volkswagen|ID.5": 12
, "Volvo|EX40": 12
, "Opel|Combo-e": 11
, "Volkswagen|ID. Buzz": 11
, "Kia|Niro EV": 10
, "Polestar|2": 8
, "Hyundai|Ioniq 5": 7
, "Fiat|600e": 5
, "Fiat|E-Doblò": 5
, "Renault|Zoe": 5
, "Citroën|ë-SpaceTourer": 4
, "Kia|EV6": 4
, "Mazda|MX-30 BEV": 4
, "Mercedes-Benz|EQS SUV": 4
, "Tesla|Model S": 4
, "BMW|other": 3
, "other": 41
});

db.insert(db.countries.IT, "2023-09", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Settembre%202023_651a9f6eedac7.pdf",
{ "Fiat": 16137
, "Toyota": 10315
, "Volkswagen": 10124
, "Renault": 6755
, "Ford": 6669
, "Peugeot": 6659
, "Dacia": 6441
, "Jeep": 6069
, "Mercedes-Benz": 5515
, "Audi": 5513
, "BMW": 5101
, "Citroën": 5075
, "Kia": 4146
, "Hyundai": 4042
, "Opel": 3840
, "Suzuki": 3549
, "Nissan": 3474
, "Škoda": 3067
, "MG": 2875
, "Cupra": 1847
, "Mazda": 1376
, "Volvo": 1317
, "Land Rover": 1241
, "Mini": 1201
, "Seat": 1010
, "Honda": 909
, "Tesla": 906
, "Porsche": 693
, "Smart": 466
, "Jaguar": 202
, "Subaru": 153
, "Polestar": 134
, "Mitsubishi": 53
, "other": 9409
});

db.insert(db.countries.IT, "2023-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/9, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Settembre%202023_651aa04b66bcd.pdf",
{ "Tesla|Model Y": 790
, "Smart|Fortwo ED": 405
, "Volkswagen|ID.3": 277
, "Fiat|500e": 276
, "Ford|Mustang Mach-E": 208
, "Cupra|Born": 199
, "Audi|Q4 e-tron": 162
, "Hyundai|Kona Electric": 146
, "Mercedes-Benz|EQA": 146
, "BMW|iX1": 132
, "Polestar|2": 131
, "Renault|Megane E-Tech": 129
, "Opel|Corsa-e": 121
, "Mini|Cooper SE": 113
, "Dacia|Spring": 107
, "Peugeot|e-208": 105
, "Jeep|Avenger EV": 103
, "Peugeot|e-2008": 101
, "MG|4 EV": 83
, "Mercedes-Benz|EQB": 82
, "Renault|Twingo E-Tech": 79
, "Chery|eQ1": 72
, "Audi|Q8 e-tron": 66
, "Mercedes-Benz|EQE SUV": 66
, "Volkswagen|ID.4": 59
, "Citroën|ë-C4": 57
, "Porsche|Taycan": 56
, "Smart|Hashtag 1": 52
, "Škoda|Enyaq": 49
, "BMW|iX": 47
, "Honda|e:Ny1": 43
, "Tesla|Model S": 40
, "BMW|i4": 36
, "Nissan|Leaf": 36
, "Volvo|EC40": 34
, "Volvo|EX40": 34
, "Tesla|Model 3": 32
, "Tesla|Model X": 29
, "Audi|e-tron GT": 24
, "Volkswagen|ID.5": 22
, "BMW|i5": 19
, "Opel|Combo-e": 18
, "Opel|Mokka-e": 18
, "BYD|Han EV": 14
, "Mercedes-Benz|EQS SUV": 13
, "Volkswagen|ID. Buzz": 13
, "Renault|Zoe": 12
, "Peugeot|e-Traveller": 11
, "BMW|iX3": 10
, "Nissan|Ariya": 10
, "Hyundai|other": 15
, "Citroën|other": 14
, "Kia|other": 13
, "Toyota|other": 9
, "MG|other": 6
, "Mazda|other": 6
, "BMW|other": 4
, "other": 38
});

db.insert(db.countries.IT, "2023-10", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca_Ottobre%202023_65439ec121bb0.pdf",
{ "Fiat": 16236
, "Toyota": 9896
, "Volkswagen": 9750
, "Dacia": 8077
, "Renault": 7685
, "Ford": 6821
, "Jeep": 6818
, "Audi": 5781
, "Peugeot": 5424
, "BMW": 5353
, "Citroën": 5150
, "Mercedes-Benz": 4685
, "Hyundai": 4323
, "Kia": 4251
, "Suzuki": 3645
, "Nissan": 3543
, "Opel": 3288
, "MG": 2811
, "Škoda": 2688
, "Cupra": 1640
, "Mazda": 1620
, "Volvo": 1338
, "Mini": 1248
, "Land Rover": 1178
, "Seat": 1127
, "Porsche": 938
, "Honda": 932
, "Tesla": 908
, "Smart": 681
, "Subaru": 227
, "Jaguar": 162
, "Mitsubishi": 55
, "Polestar": 38
, "other": 10735
});

db.insert(db.countries.IT, "2023-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/10, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Ottobre%202023_65439f19d30ef.pdf",
{ "Tesla|Model 3": 537
, "Smart|Fortwo ED": 513
, "Tesla|Model Y": 349
, "Volkswagen|ID.3": 242
, "BMW|iX1": 233
, "Peugeot|e-208": 232
, "Dacia|Spring": 231
, "Ford|Mustang Mach-E": 221
, "Audi|Q4 e-tron": 189
, "Jeep|Avenger EV": 188
, "Smart|Hashtag 1": 168
, "Fiat|500e": 144
, "Renault|Twingo E-Tech": 140
, "Chery|eQ1": 136
, "Renault|Megane E-Tech": 122
, "Hyundai|Kona Electric": 121
, "Opel|Corsa-e": 104
, "Opel|Mokka-e": 104
, "Fiat|600e": 98
, "Mercedes-Benz|EQA": 93
, "MG|4 EV": 92
, "Mini|Cooper SE": 92
, "Škoda|Enyaq": 92
, "Cupra|Born": 89
, "Citroën|ë-C4": 87
, "BMW|i4": 75
, "Porsche|Taycan": 65
, "Peugeot|e-2008": 59
, "Kia|EV9": 57
, "Volkswagen|ID.4": 56
, "Volvo|EC40": 52
, "Volkswagen|ID. Buzz": 42
, "Polestar|2": 38
, "Audi|Q8 e-tron": 36
, "Mercedes-Benz|EQB": 36
, "Volvo|EX40": 34
, "BYD|Yuan Plus": 32
, "Renault|Zoe": 30
, "BMW|i5": 29
, "Kia|EV6": 25
, "Mazda|MX-30 BEV": 23
, "Mercedes-Benz|EQE SUV": 22
, "Volkswagen|ID.5": 22
, "BMW|iX": 21
, "Kia|Niro EV": 21
, "Nissan|Leaf": 18
, "BYD|Dolphin": 16
, "Tesla|Model S": 16
, "Nissan|Ariya": 14
, "BMW|iX3": 13
, "Hyundai|Ioniq 6": 13
, "Toyota|other": 29
, "Citroën|other": 13
, "MG|other": 11
, "Audi|other": 10
, "Mercedes-Benz|other": 7
, "Tesla|other": 6
, "Hyundai|other": 5
, "Fiat|other": 4
, "BYD|other": 3
, "Honda|other": 3
, "other": 241
});

db.insert(db.countries.IT, "2023-11", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca_Novembre%202023_6569e73bc87bd.pdf",
{ "Fiat": 15092
, "Toyota": 10081
, "Volkswagen": 9099
, "Dacia": 8977
, "Renault": 7355
, "Ford": 6360
, "BMW": 6184
, "Jeep": 5837
, "Audi": 5664
, "Peugeot": 5383
, "Mercedes-Benz": 4947
, "Hyundai": 4646
, "Nissan": 4367
, "Citroën": 4300
, "Kia": 3844
, "Škoda": 3254
, "MG": 3080
, "Opel": 3025
, "Suzuki": 2954
, "Tesla": 2710
, "Mini": 1638
, "Seat": 1459
, "Cupra": 1369
, "Mazda": 1290
, "Volvo": 1225
, "Land Rover": 942
, "Honda": 872
, "Porsche": 616
, "Smart": 600
, "Subaru": 251
, "Jaguar": 113
, "Mitsubishi": 40
, "Polestar": 28
, "other": 11676
});

db.insert(db.countries.IT, "2023-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/11, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Novembre%202023_6569e81112702.pdf",
{ "Tesla|Model 3": 1956
, "Tesla|Model Y": 703
, "Dacia|Spring": 509
, "Smart|Fortwo ED": 422
, "Fiat|500e": 421
, "Jeep|Avenger EV": 246
, "MG|4 EV": 216
, "Audi|Q4 e-tron": 202
, "Smart|Hashtag 1": 177
, "BMW|iX1": 167
, "Fiat|600e": 164
, "Peugeot|e-208": 157
, "Ford|Mustang Mach-E": 156
, "Mercedes-Benz|EQA": 129
, "BMW|i4": 127
, "Citroën|ë-C4": 127
, "Opel|Mokka-e": 125
, "Volkswagen|ID.3": 113
, "Volkswagen|ID.5": 111
, "Renault|Megane E-Tech": 104
, "Renault|Twingo E-Tech": 99
, "Hyundai|Kona Electric": 97
, "Škoda|Enyaq": 88
, "Mini|Cooper SE": 87
, "Mercedes-Benz|EQB": 80
, "Volvo|EX40": 75
, "Volvo|EC40": 68
, "Cupra|Born": 66
, "Volkswagen|ID.4": 65
, "Opel|Corsa-e": 60
, "Chery|eQ1": 56
, "Porsche|Taycan": 53
, "Volkswagen|ID. Buzz": 53
, "BMW|iX": 51
, "Peugeot|e-308": 46
, "Peugeot|e-2008": 39
, "BMW|iX3": 38
, "Renault|Kangoo E-Tech": 34
, "Audi|Q8 e-tron": 33
, "Nissan|Ariya": 32
, "Tesla|Model S": 31
, "Mazda|MX-30 BEV": 29
, "Kia|EV9": 28
, "Mercedes-Benz|EQE SUV": 28
, "Polestar|2": 28
, "BYD|Yuan Plus": 27
, "Tesla|Model X": 20
, "Renault|Zoe": 13
, "BMW|i5": 12
, "BYD|Dolphin": 12
, "Mercedes-Benz|other": 23
, "MG|other": 20
, "Kia|other": 15
, "Toyota|other": 12
, "Hyundai|other": 10
, "Citroën|other": 9
, "Opel|other": 8
, "Nissan|other": 6
, "Audi|other": 5
, "BMW|other": 4
, "other": 68
});

db.insert(db.countries.IT, "2023-12", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Dicembre%202023_659430b321a77.pdf",
{ "Volkswagen": 10752
, "Fiat": 10523
, "Renault": 8339
, "Toyota": 7188
, "Ford": 5343
, "BMW": 5154
, "Peugeot": 4811
, "Mercedes-Benz": 4510
, "Audi": 4091
, "Hyundai": 4058
, "Dacia": 4024
, "Jeep": 3930
, "Citroën": 3568
, "Nissan": 3422
, "MG": 3318
, "Kia": 2781
, "Škoda": 2380
, "Opel": 2123
, "Suzuki": 2028
, "Seat": 1913
, "Cupra": 1569
, "Mini": 1348
, "Volvo": 1344
, "Tesla": 983
, "Mazda": 861
, "Porsche": 599
, "Smart": 578
, "Land Rover": 514
, "Honda": 508
, "Subaru": 180
, "Jaguar": 42
, "Mitsubishi": 22
, "other": 8280
});

db.insert(db.countries.IT, "2023-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/12, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Dicembre%202023_65942e7dee0f3.pdf",
{ "Tesla|Model Y": 569
, "Fiat|500e": 566
, "Audi|Q4 e-tron": 424
, "Smart|Fortwo ED": 409
, "Tesla|Model 3": 359
, "Jeep|Avenger EV": 302
, "Renault|Megane E-Tech": 273
, "Volkswagen|ID.4": 266
, "Peugeot|e-208": 222
, "BMW|iX1": 194
, "Mercedes-Benz|EQA": 179
, "Smart|Hashtag 1": 169
, "Dacia|Spring": 167
, "Porsche|Taycan": 163
, "Citroën|ë-C4": 154
, "Renault|Zoe": 139
, "Volkswagen|ID.3": 139
, "MG|4 EV": 125
, "BMW|iX": 123
, "Opel|Mokka-e": 118
, "Volkswagen|ID.5": 117
, "Volvo|EX30": 114
, "BMW|i4": 106
, "Renault|Twingo E-Tech": 100
, "Ford|Mustang Mach-E": 90
, "Hyundai|Kona Electric": 82
, "Mercedes-Benz|EQB": 79
, "Cupra|Born": 76
, "Opel|Corsa-e": 68
, "Fiat|600e": 64
, "Peugeot|e-2008": 63
, "Chery|eQ1": 48
, "Opel|Astra Electric": 45
, "Mini|Cooper SE": 43
, "Peugeot|e-308": 43
, "Škoda|Enyaq": 42
, "BYD|Yuan Plus": 39
, "Volvo|EC40": 39
, "Mercedes-Benz|EQE SUV": 35
, "Nissan|Leaf": 34
, "Tesla|Model S": 32
, "Mercedes-Benz|EQE": 29
, "Toyota|bZ4X": 28
, "Nissan|Ariya": 26
, "Audi|Q8 e-tron": 24
, "Tesla|Model X": 23
, "Volkswagen|ID. Buzz": 20
, "BMW|iX3": 19
, "Volvo|EX40": 18
, "Mazda|MX-30 BEV": 16
, "Mercedes-Benz|other": 39
, "MG|other": 28
, "Kia|other": 27
, "BMW|other": 20
, "Audi|other": 10
, "Hyundai|other": 10
, "Citroën|other": 9
, "Fiat|other": 7
, "Renault|other": 7
, "Toyota|other": 6
, "BYD|other": 5
, "Polestar|other": 5
, "Subaru|other": 5
, "other": 40
});

db.insert(db.countries.IT, "2024-01", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca_Gennaio%202024_65bb99ab90866.pdf",
{ "Fiat": 15893
, "Dacia": 10319
, "Toyota": 10086
, "Volkswagen": 9384
, "Peugeot": 8265
, "Jeep": 7281
, "Citroën": 6527
, "Audi": 6515
, "BMW": 6239
, "Ford": 6204
, "Renault": 5844
, "Opel": 4852
, "Hyundai": 4040
, "Nissan": 3972
, "Kia": 3721
, "Suzuki": 3374
, "Mercedes-Benz": 2985
, "Škoda": 2877
, "MG": 2838
, "Mazda": 1682
, "Volvo": 1660
, "Mini": 1273
, "Land Rover": 1087
, "Seat": 1051
, "Cupra": 1021
, "Porsche": 762
, "Honda": 656
, "Tesla": 404
, "Smart": 257
, "Jaguar": 138
, "Subaru": 133
, "Mitsubishi": 104
, "other": 10502
});

db.insert(db.countries.IT, "2024-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/1, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Gennaio%202024_65bb9a72b6bbb.pdf",
{ "Jeep|Avenger EV": 327
, "Tesla|Model Y": 306
, "Fiat|500e": 234
, "Dacia|Spring": 174
, "Smart|Fortwo ED": 151
, "Peugeot|e-208": 119
, "Tesla|Model 3": 84
, "Smart|Hashtag 1": 83
, "Audi|Q4 e-tron": 75
, "BMW|iX1": 75
, "Fiat|600e": 74
, "Citroën|ë-C4": 64
, "Ford|Mustang Mach-E": 62
, "Volkswagen|ID.3": 57
, "Opel|Corsa-e": 49
, "Opel|Mokka-e": 47
, "MG|4 EV": 43
, "Peugeot|e-2008": 43
, "Chery|eQ1": 42
, "Renault|Twingo E-Tech": 40
, "BMW|iX": 39
, "Volvo|EX30": 39
, "Mercedes-Benz|EQA": 37
, "Audi|Q8 e-tron": 36
, "Nissan|Leaf": 36
, "Hyundai|Kona Electric": 35
, "Kia|EV6": 32
, "Volvo|EX40": 32
, "Škoda|Enyaq": 30
, "Renault|Megane E-Tech": 29
, "BMW|i4": 28
, "Nissan|Ariya": 26
, "Volvo|EC40": 26
, "BYD|Dolphin": 25
, "Smart|Hashtag 3": 23
, "Porsche|Taycan": 21
, "Renault|Zoe": 21
, "BMW|iX2": 20
, "Cupra|Born": 20
, "Peugeot|e-308": 19
, "BYD|Yuan Plus": 18
, "Audi|e-tron GT": 13
, "Hyundai|Ioniq 6": 12
, "Mercedes-Benz|EQB": 12
, "Kia|EV9": 11
, "Mercedes-Benz|EQE SUV": 11
, "Mini|Cooper SE": 11
, "Hyundai|Ioniq 5": 10
, "other": 163
});

db.insert(db.countries.IT, "2024-02", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Febbraio%202024_65e2016ea99b8.pdf",
{ "Fiat": 17580
, "Toyota": 10889
, "Volkswagen": 9860
, "Dacia": 8974
, "Peugeot": 7708
, "Renault": 7408
, "Jeep": 6497
, "Ford": 6465
, "Citroën": 6463
, "Audi": 6406
, "BMW": 6065
, "Hyundai": 5052
, "Suzuki": 4163
, "Opel": 4107
, "Kia": 3965
, "Nissan": 3694
, "Mercedes-Benz": 3415
, "Škoda": 3187
, "MG": 3117
, "Tesla": 1851
, "Cupra": 1823
, "Seat": 1816
, "Volvo": 1705
, "Mazda": 1196
, "Mini": 1116
, "Porsche": 795
, "Land Rover": 692
, "Honda": 663
, "Mitsubishi": 222
, "Smart": 210
, "Subaru": 119
, "Jaguar": 118
, "other": 9753
});

db.insert(db.countries.IT, "2024-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/2, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Febbraio%202024_65e1ee0cbab9c.pdf",
{ "Tesla|Model Y": 1252
, "Tesla|Model 3": 586
, "Volkswagen|ID.3": 365
, "Fiat|500e": 245
, "BMW|iX1": 211
, "Volvo|EX30": 201
, "Jeep|Avenger EV": 184
, "Peugeot|e-208": 174
, "Smart|Fortwo ED": 120
, "Renault|Twingo E-Tech": 108
, "Audi|Q4 e-tron": 103
, "MG|4 EV": 101
, "Dacia|Spring": 90
, "Ford|Mustang Mach-E": 88
, "Škoda|Enyaq": 86
, "Fiat|600e": 82
, "Citroën|ë-C4": 67
, "BMW|iX2": 66
, "Smart|Hashtag 1": 57
, "Mercedes-Benz|EQA": 54
, "Cupra|Born": 51
, "Audi|Q8 e-tron": 45
, "BMW|i4": 41
, "Volkswagen|ID. Buzz": 36
, "Nissan|Leaf": 35
, "Opel|Corsa-e": 33
, "Renault|Megane E-Tech": 33
, "Smart|Hashtag 3": 33
, "BMW|iX": 31
, "Peugeot|e-2008": 27
, "BMW|i5": 24
, "Volvo|EX40": 24
, "BMW|iX3": 22
, "Audi|e-tron GT": 18
, "Tesla|Model X": 18
, "BYD|Dolphin": 17
, "BYD|Yuan Plus": 17
, "Hyundai|Kona Electric": 17
, "Kia|EV6": 17
, "Mercedes-Benz|EQB": 17
, "Volkswagen|ID.4": 17
, "Chery|eQ1": 16
, "Volvo|EC40": 16
, "Opel|Mokka-e": 15
, "Volkswagen|ID.5": 15
, "Peugeot|e-308": 13
, "Kia|EV9": 12
, "Mercedes-Benz|EQE SUV": 12
, "BYD|Seal": 11
, "Mercedes-Benz|EQE": 11
, "Nissan|Ariya": 11
, "Polestar|2": 11
, "Renault|Zoe": 11
, "Toyota|bZ4X": 11
, "Hyundai|other": 11
, "Porsche|other": 7
, "Mini|other": 3
, "other": 55
});

db.insert(db.countries.IT, "2024-03", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Marzo_2024_660c26f88b2a5.pdf",
{ "Fiat": 17012
, "Volkswagen": 13352
, "Toyota": 12945
, "Dacia": 8520
, "Peugeot": 8358
, "Renault": 7685
, "Ford": 7433
, "Jeep": 7061
, "Citroën": 6856
, "BMW": 6468
, "Audi": 6249
, "Mercedes-Benz": 6027
, "Nissan": 5240
, "Opel": 4690
, "Hyundai": 4657
, "Kia": 4501
, "MG": 3969
, "Škoda": 3677
, "Suzuki": 3387
, "Volvo": 2447
, "Cupra": 1643
, "Tesla": 1465
, "Mazda": 1426
, "Mini": 1334
, "Porsche": 1049
, "Seat": 1034
, "Land Rover": 781
, "Honda": 761
, "Mitsubishi": 433
, "Smart": 414
, "Subaru": 150
, "Jaguar": 137
, "BYD": 70
, "Polestar": 26
, "other": 10826
});

db.insert(db.countries.IT, "2024-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/3, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20marzo%202024_660c2679ae9b8.pdf",
{ "Tesla|Model Y": 787
, "Tesla|Model 3": 609
, "Volvo|EX30": 367
, "Smart|Fortwo ED": 309
, "BMW|iX1": 261
, "Audi|Q4 e-tron": 259
, "Volkswagen|ID.3": 226
, "Mercedes-Benz|EQA": 204
, "Jeep|Avenger EV": 155
, "Fiat|500e": 135
, "MG|4 EV": 131
, "Renault|Twingo E-Tech": 128
, "Ford|Mustang Mach-E": 106
, "Mercedes-Benz|EQB": 99
, "Peugeot|e-208": 96
, "Audi|Q8 e-tron": 85
, "Opel|Corsa-e": 81
, "Cupra|Born": 71
, "Citroën|ë-C4": 67
, "Smart|Hashtag 1": 58
, "BMW|i4": 55
, "Fiat|600e": 52
, "BMW|iX": 51
, "Smart|Hashtag 3": 47
, "BYD|Yuan Plus": 45
, "Hyundai|Kona Electric": 43
, "Tesla|Model S": 43
, "Toyota|Proace Electric": 39
, "Volvo|EC40": 38
, "Mini|Cooper SE": 37
, "Tesla|Model X": 36
, "Renault|Megane E-Tech": 33
, "Volkswagen|ID.4": 32
, "Mercedes-Benz|EQE SUV": 31
, "Peugeot|e-2008": 30
, "Škoda|Enyaq": 29
, "BMW|iX2": 28
, "Mercedes-Benz|EQE": 27
, "Polestar|2": 26
, "Nissan|Leaf": 24
, "Dacia|Spring": 21
, "Volvo|EX40": 21
, "Mercedes-Benz|EQS SUV": 19
, "Nissan|Ariya": 19
, "Volkswagen|ID.5": 19
, "BMW|i5": 18
, "Hyundai|Ioniq 6": 18
, "Volkswagen|ID. Buzz": 17
, "Kia|Niro EV": 14
, "MG|Marvel R": 14
, "Opel|Mokka-e": 14
, "Volkswagen|ID.7": 14
, "BYD|other": 25
, "Kia|other": 24
, "Renault|other": 23
, "Audi|other": 13
, "Subaru|other": 11
, "Citroën|other": 10
, "BMW|other": 9
, "Chery|other": 9
, "Porsche|other": 7
, "Peugeot|other": 6
, "Toyota|other": 5
, "Hyundai|other": 3
, "other": 34
});

db.insert(db.countries.IT, "2024-04", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Aprile%202024_66338f3fb7b0d.pdf",
{ "Fiat": 15207
, "Volkswagen": 10281
, "Toyota": 9972
, "Dacia": 7798
, "Renault": 7096
, "Ford": 6610
, "BMW": 6199
, "Peugeot": 5957
, "Citroën": 5945
, "Audi": 5762
, "Jeep": 5025
, "Mercedes-Benz": 4301
, "Hyundai": 4269
, "Kia": 3860
, "MG": 3646
, "Opel": 3617
, "Suzuki": 3346
, "Škoda": 3204
, "Nissan": 2509
, "Cupra": 1668
, "Seat": 1423
, "Volvo": 1346
, "Mini": 1215
, "Land Rover": 957
, "Mazda": 889
, "Porsche": 831
, "Honda": 698
, "Mitsubishi": 551
, "Tesla": 345
, "Smart": 300
, "Jaguar": 84
, "Subaru": 83
, "BYD": 57
, "other": 10302
});

db.insert(db.countries.IT, "2024-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/4, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Aprile%202024_6633b7b4eb765.pdf",
{ "Tesla|Model Y": 236
, "Volvo|EX30": 207
, "Jeep|Avenger EV": 190
, "Smart|Fortwo ED": 182
, "BMW|iX1": 156
, "Audi|Q4 e-tron": 137
, "Mercedes-Benz|EQA": 127
, "Fiat|500e": 101
, "Tesla|Model 3": 100
, "Mercedes-Benz|EQB": 90
, "MG|4 EV": 89
, "Mini|Cooper SE": 87
, "Volkswagen|ID.3": 86
, "Toyota|bZ4X": 85
, "Renault|Twingo E-Tech": 81
, "Ford|Mustang Mach-E": 79
, "Peugeot|E-3008": 74
, "BMW|i4": 73
, "Citroën|ë-C4": 66
, "Smart|Hashtag 1": 65
, "Volkswagen|ID.4": 54
, "Smart|Hashtag 3": 48
, "Fiat|600e": 40
, "Peugeot|e-208": 40
, "Opel|Corsa-e": 37
, "BMW|iX": 31
, "Renault|Megane E-Tech": 29
, "Audi|Q8 e-tron": 28
, "Volvo|EC40": 28
, "Volvo|EX40": 28
, "BMW|iX2": 27
, "Mercedes-Benz|EQE SUV": 26
, "Cupra|Born": 23
, "Volkswagen|ID. Buzz": 22
, "Volkswagen|ID.5": 22
, "Peugeot|e-2008": 21
, "Opel|Mokka-e": 20
, "Renault|Zoe": 20
, "BMW|i5": 19
, "MG|ZS EV": 16
, "Nissan|Ariya": 15
, "Porsche|Taycan": 15
, "BMW|i7": 12
, "Chery|eQ1": 12
, "Jaguar|I-Pace": 12
, "Mercedes-Benz|EQV": 12
, "Fiat|E-Doblò": 11
, "Hyundai|Ioniq 6": 11
, "Mazda|MX-30 BEV": 11
, "Mercedes-Benz|EQE": 11
, "Mercedes-Benz|EQS": 11
, "BYD|other": 26
, "Kia|other": 22
, "Hyundai|other": 14
, "Polestar|other": 10
, "Nissan|other": 7
, "Škoda|other": 7
, "Audi|other": 6
, "Dacia|other": 6
, "Tesla|other": 6
, "Mercedes-Benz|other": 5
, "BMW|other": 4
, "Subaru|other": 3
, "other": 69
});

db.insert(db.countries.IT, "2024-05", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Maggio_2024_665def37148aa.pdf",
{ "Fiat": 12960
, "Volkswagen": 11490
, "Toyota": 11184
, "Renault": 8232
, "Audi": 6810
, "Jeep": 6577
, "Peugeot": 6569
, "BMW": 6432
, "Ford": 6290
, "Citroën": 5693
, "Hyundai": 4783
, "Mercedes-Benz": 4743
, "Dacia": 4668
, "Kia": 4497
, "Opel": 4174
, "MG": 3703
, "Škoda": 3201
, "Nissan": 3072
, "Suzuki": 2574
, "Volvo": 1705
, "Cupra": 1587
, "Seat": 1402
, "Mazda": 1156
, "Mini": 1104
, "Land Rover": 1079
, "Tesla": 1073
, "Mitsubishi": 827
, "Porsche": 718
, "Honda": 518
, "Smart": 278
, "Subaru": 157
, "Jaguar": 75
, "BYD": 52
, "Polestar": 22
, "other": 10176
});

db.insert(db.countries.IT, "2024-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/5, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Maggio%202024_665df7a5bcb37.pdf",
{ "Tesla|Model 3": 682
, "Tesla|Model Y": 378
, "Renault|Twingo E-Tech": 264
, "Audi|Q4 e-tron": 255
, "MG|4 EV": 244
, "BMW|iX1": 230
, "Fiat|600e": 206
, "Renault|Scénic E-Tech": 201
, "Volvo|EX30": 183
, "Jeep|Avenger EV": 179
, "Smart|Fortwo ED": 172
, "Fiat|500e": 157
, "Volkswagen|ID.3": 107
, "Mercedes-Benz|EQA": 103
, "Peugeot|e-2008": 102
, "Mini|Cooper SE": 85
, "Volkswagen|ID. Buzz": 85
, "Renault|Megane E-Tech": 77
, "Citroën|ë-C4": 76
, "Ford|Mustang Mach-E": 76
, "Smart|Hashtag 1": 68
, "Cupra|Born": 58
, "BMW|i5": 53
, "Peugeot|e-208": 53
, "Peugeot|E-3008": 50
, "Volkswagen|ID.4": 46
, "Audi|Q8 e-tron": 43
, "BMW|i4": 41
, "Smart|Hashtag 3": 38
, "Porsche|Taycan": 37
, "Mercedes-Benz|EQB": 36
, "BYD|Yuan Plus": 31
, "Chery|eQ1": 31
, "BMW|iX2": 30
, "Volvo|EX40": 29
, "Nissan|Ariya": 25
, "Opel|Mokka-e": 25
, "Opel|Corsa-e": 24
, "Mercedes-Benz|eCitan": 23
, "BMW|iX": 22
, "Polestar|2": 22
, "Volvo|EC40": 22
, "Dacia|Spring": 20
, "Renault|Zoe": 19
, "Toyota|bZ4X": 19
, "Volkswagen|ID.5": 18
, "Nissan|Leaf": 17
, "BYD|Seal": 16
, "Mercedes-Benz|EQE SUV": 13
, "Renault|Kangoo E-Tech": 11
, "Kia|other": 23
, "Hyundai|other": 16
, "MG|other": 16
, "Mercedes-Benz|other": 16
, "Tesla|other": 13
, "Škoda|other": 9
, "BMW|other": 8
, "Peugeot|other": 7
, "Jaguar|other": 4
, "Toyota|other": 4
, "BYD|other": 3
, "other": 149
});

db.insert(db.countries.IT, "2024-06", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Giugno%202024_6682ad8c6a450.pdf",
{ "Fiat": 16918
, "Dacia": 11750
, "Toyota": 11290
, "Volkswagen": 11076
, "Renault": 10699
, "Citroën": 7689
, "Peugeot": 6906
, "Audi": 6813
, "Jeep": 6451
, "BMW": 6036
, "Ford": 5623
, "Tesla": 4993
, "Hyundai": 4870
, "Mercedes-Benz": 4855
, "Kia": 4816
, "Opel": 4181
, "Nissan": 4011
, "MG": 3985
, "Suzuki": 3601
, "Škoda": 3295
, "Volvo": 1842
, "Cupra": 1671
, "Mazda": 1303
, "Mini": 1005
, "Seat": 998
, "Land Rover": 986
, "Honda": 803
, "Smart": 706
, "Porsche": 587
, "Mitsubishi": 183
, "BYD": 138
, "Subaru": 135
, "Jaguar": 79
, "Polestar": 33
, "other": 9719
});

db.insert(db.countries.IT, "2024-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/6, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20Giugno%202024_6682ad3d6ca0c.pdf",
{ "Tesla|Model 3": 3282
, "Tesla|Model Y": 1699
, "Dacia|Spring": 878
, "Renault|Twingo E-Tech": 753
, "Jeep|Avenger EV": 668
, "MG|4 EV": 587
, "Fiat|500e": 577
, "Smart|Fortwo ED": 575
, "Volvo|EX30": 498
, "Audi|Q4 e-tron": 376
, "BMW|iX1": 351
, "Renault|Megane E-Tech": 234
, "Peugeot|e-2008": 219
, "Mercedes-Benz|EQA": 208
, "Peugeot|e-208": 193
, "Volkswagen|ID.3": 147
, "Ford|Mustang Mach-E": 119
, "Fiat|600e": 101
, "Chery|eQ1": 98
, "Cupra|Born": 98
, "Mini|Cooper SE": 87
, "Smart|Hashtag 1": 82
, "Mercedes-Benz|EQB": 68
, "Citroën|ë-C4": 67
, "Renault|Scénic E-Tech": 66
, "Volkswagen|ID.4": 64
, "Peugeot|E-3008": 62
, "Volkswagen|ID. Buzz": 61
, "Opel|Corsa-e": 60
, "BYD|Yuan Plus": 58
, "Hyundai|Kona Electric": 58
, "Nissan|Ariya": 58
, "BYD|Dolphin": 57
, "Nissan|Leaf": 49
, "Smart|Hashtag 3": 49
, "Audi|Q8 e-tron": 39
, "Mercedes-Benz|EQE SUV": 35
, "Renault|Zoe": 33
, "BMW|i4": 27
, "MG|ZS EV": 27
, "Volvo|EX40": 27
, "BMW|iX": 26
, "Porsche|Taycan": 25
, "BMW|iX2": 24
, "BMW|i5": 23
, "BYD|Seal": 23
, "Polestar|2": 22
, "Kia|Niro EV": 18
, "Opel|Mokka-e": 17
, "Toyota|Proace Electric": 17
, "Toyota|bZ4X": 17
, "Mercedes-Benz|other": 30
, "Opel|other": 23
, "Kia|other": 20
, "Volkswagen|other": 19
, "Hyundai|other": 18
, "Peugeot|other": 16
, "MG|other": 15
, "Tesla|other": 12
, "Citroën|other": 11
, "Polestar|other": 11
, "Škoda|other": 7
, "other": 226
});

db.insert(db.countries.IT, "2024-07", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Luglio%202024_66ab9b15c5907.pdf",
{ "Fiat": 10226
, "Toyota": 9794
, "Dacia": 9686
, "Volkswagen": 8991
, "Renault": 7511
, "Peugeot": 6358
, "Audi": 6265
, "BMW": 5763
, "Jeep": 5731
, "Ford": 5208
, "Kia": 4763
, "Opel": 4170
, "Mercedes-Benz": 3998
, "Hyundai": 3816
, "Citroën": 3595
, "MG": 3343
, "Suzuki": 3253
, "Škoda": 2873
, "Nissan": 1799
, "Volvo": 1550
, "Mazda": 1283
, "Cupra": 1203
, "Land Rover": 853
, "Mini": 851
, "Seat": 727
, "Honda": 637
, "Porsche": 553
, "Tesla": 474
, "BYD": 202
, "Mitsubishi": 164
, "Smart": 142
, "Subaru": 99
, "Jaguar": 68
, "Polestar": 14
, "other": 8843
});

db.insert(db.countries.IT, "2024-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/7, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Luglio%202024_66ab995a89567.pdf",
{ "Volvo|EX30": 401
, "Tesla|Model Y": 279
, "MG|4 EV": 252
, "Peugeot|e-2008": 203
, "BMW|iX1": 198
, "Tesla|Model 3": 176
, "Fiat|500e": 170
, "Jeep|Avenger EV": 143
, "Nissan|Leaf": 139
, "Audi|Q4 e-tron": 115
, "Dacia|Spring": 109
, "Peugeot|E-3008": 109
, "Renault|Twingo E-Tech": 108
, "Smart|Hashtag 1": 99
, "Volkswagen|ID.3": 98
, "Mercedes-Benz|EQA": 88
, "BYD|Seal": 83
, "Peugeot|e-208": 73
, "BMW|iX2": 63
, "Opel|Corsa-e": 55
, "Volkswagen|ID.4": 55
, "BYD|Dolphin": 54
, "BYD|Yuan Plus": 54
, "Mini|Cooper SE": 54
, "Renault|Scénic E-Tech": 54
, "Renault|Megane E-Tech": 53
, "Fiat|600e": 50
, "Citroën|ë-C4": 48
, "Toyota|bZ4X": 47
, "BMW|i4": 45
, "BMW|i5": 43
, "Kia|Niro EV": 39
, "MG|5 EV": 39
, "Nissan|Ariya": 38
, "Smart|Hashtag 3": 37
, "Hyundai|Kona Electric": 35
, "Mercedes-Benz|EQB": 35
, "BMW|iX": 32
, "Mercedes-Benz|EQE SUV": 31
, "Ford|Mustang Mach-E": 29
, "Volvo|EX40": 27
, "Audi|Q8 e-tron": 24
, "Porsche|Taycan": 23
, "Chery|eQ1": 22
, "Kia|EV6": 18
, "Kia|EV9": 17
, "Cupra|Born": 13
, "Renault|Zoe": 13
, "Hyundai|Ioniq 5": 12
, "Mercedes-Benz|EQV": 12
, "Tesla|Model X": 12
, "MG|other": 14
, "Opel|other": 14
, "Volkswagen|other": 14
, "Mercedes-Benz|other": 13
, "Toyota|other": 13
, "Polestar|other": 11
, "Hyundai|other": 10
, "Renault|other": 8
, "Audi|other": 7
, "BYD|other": 7
, "Tesla|other": 7
, "Volvo|other": 7
, "Škoda|other": 7
, "BMW|other": 6
, "Citroën|other": 6
, "Smart|other": 6
, "Peugeot|other": 4
, "other": 112
});

db.insert(db.countries.IT, "2024-08", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Agosto%202024_66d5e17ce0004.pdf",
{ "Toyota": 5941
, "Volkswagen": 5148
, "Dacia": 4941
, "Fiat": 4756
, "Renault": 4126
, "BMW": 3809
, "Peugeot": 3648
, "Audi": 3639
, "Ford": 3609
, "Jeep": 3139
, "Kia": 2638
, "Škoda": 2248
, "Hyundai": 2241
, "Mercedes-Benz": 2133
, "Opel": 2012
, "MG": 2002
, "Suzuki": 1468
, "Citroën": 1281
, "Nissan": 1154
, "Volvo": 792
, "Cupra": 674
, "Land Rover": 440
, "Tesla": 442
, "Mazda": 410
, "Seat": 401
, "Mini": 354
, "Honda": 301
, "Porsche": 238
, "BYD": 223
, "Mitsubishi": 75
, "Smart": 53
, "Subaru": 47
, "Polestar": 37
, "Jaguar": 28
, "other": 4673
});

db.insert(db.countries.IT, "2024-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/8, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Agosto%202024_66d5cd7e39541.pdf",
{ "Tesla|Model Y": 382
, "Volvo|EX30": 263
, "BMW|iX1": 155
, "Volkswagen|ID.3": 124
, "MG|4 EV": 106
, "Ford|Explorer EV": 96
, "Peugeot|e-2008": 95
, "BYD|Seal": 91
, "Peugeot|e-208": 71
, "Fiat|500e": 69
, "Jeep|Avenger EV": 69
, "Peugeot|E-3008": 65
, "BYD|Yuan Plus": 62
, "Nissan|Leaf": 53
, "Audi|Q4 e-tron": 50
, "Tesla|Model 3": 50
, "BYD|Dolphin": 45
, "Chery|eQ1": 44
, "Mercedes-Benz|EQA": 41
, "Fiat|600e": 39
, "Mini|Cooper SE": 35
, "Polestar|4": 31
, "Smart|Hashtag 1": 31
, "Ford|Mustang Mach-E": 28
, "Volkswagen|ID.4": 27
, "BMW|iX2": 26
, "Opel|Corsa-e": 25
, "BMW|i4": 24
, "Audi|Q8 e-tron": 22
, "Renault|Scénic E-Tech": 22
, "Smart|Hashtag 3": 21
, "Porsche|Taycan": 19
, "Volkswagen|ID.5": 17
, "BMW|iX": 16
, "Renault|Megane E-Tech": 15
, "Volvo|EX40": 15
, "Nissan|Ariya": 14
, "Hyundai|Kona Electric": 13
, "Renault|Twingo E-Tech": 13
, "Citroën|ë-C4": 11
, "Škoda|Enyaq": 9
, "Dacia|Spring": 8
, "Volvo|EC40": 8
, "BMW|i5": 7
, "Mercedes-Benz|EQB": 7
, "Mercedes-Benz|EQS SUV": 7
, "Tesla|Model S": 7
, "Toyota|bZ4X": 7
, "Audi|e-tron GT": 6
, "Citroën|ë-Berlingo Electric": 6
, "Cupra|Born": 6
, "Kia|EV6": 6
, "Kia|Niro EV": 6
, "Polestar|2": 6
, "Volkswagen|ID.7": 6
, "Mercedes-Benz|other": 10
, "Opel|other": 6
, "BYD|other": 5
, "Hyundai|other": 5
, "Peugeot|other": 4
, "MG|other": 3
, "Renault|other": 3
, "Tesla|other": 3
, "Toyota|other": 3
, "Kia|other": 2
, "other": 64
});

db.insert(db.countries.IT, "2024-09", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Settembre%202024_66fc0c6e2be29.pdf",
{ "Volkswagen": 9742
, "Toyota": 9704
, "Fiat": 9078
, "Renault": 7710
, "Dacia": 7630
, "Peugeot": 6522
, "BMW": 6430
, "Ford": 5708
, "Jeep": 5573
, "Audi": 5286
, "Mercedes-Benz": 5196
, "Kia": 4188
, "Hyundai": 4146
, "Suzuki": 3612
, "Opel": 3542
, "Škoda": 3384
, "MG": 3230
, "Nissan": 2290
, "Tesla": 1949
, "Volvo": 1605
, "Citroën": 1295
, "Mazda": 1252
, "Mini": 1018
, "Cupra": 950
, "Land Rover": 705
, "Honda": 652
, "Seat": 610
, "Porsche": 606
, "BYD": 235
, "Subaru": 167
, "Smart": 94
, "Mitsubishi": 87
, "Polestar": 57
, "Jaguar": 49
, "other": 7364
});

db.insert(db.countries.IT, "2024-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/9, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Settembre%202024_66fc0c0ac81c5.pdf",
{ "Tesla|Model 3": 1284
, "Tesla|Model Y": 600
, "Volvo|EX30": 418
, "Peugeot|e-208": 374
, "Ford|Explorer EV": 219
, "BMW|iX1": 217
, "Audi|Q4 e-tron": 212
, "Jeep|Avenger EV": 190
, "Mini|Cooper SE": 188
, "Volkswagen|ID.3": 162
, "Fiat|500e": 127
, "Peugeot|e-2008": 121
, "Cupra|Born": 111
, "MG|4 EV": 109
, "Porsche|Macan Electric": 108
, "Mercedes-Benz|EQA": 106
, "Chery|eQ1": 92
, "Dacia|Spring": 91
, "Volkswagen|ID.7": 80
, "Cupra|Tavascan": 74
, "Volkswagen|ID.4": 67
, "Smart|Hashtag 1": 66
, "Volvo|EX40": 53
, "Porsche|Taycan": 51
, "BYD|Seal": 49
, "Peugeot|E-3008": 47
, "Mercedes-Benz|EQE SUV": 45
, "Škoda|Enyaq": 40
, "Fiat|600e": 38
, "Mercedes-Benz|EQB": 37
, "BYD|Dolphin": 35
, "BMW|i4": 34
, "Tesla|Model S": 33
, "Audi|Q6 e-tron": 32
, "BMW|iX2": 32
, "Tesla|Model X": 32
, "BYD|Yuan Plus": 29
, "Polestar|4": 28
, "Hyundai|Kona Electric": 27
, "Smart|Hashtag 3": 27
, "Opel|Mokka-e": 26
, "Peugeot|E-5008": 25
, "Renault|Scénic E-Tech": 24
, "BMW|iX": 22
, "Volkswagen|ID.5": 22
, "Nissan|Leaf": 21
, "Opel|Corsa-e": 21
, "Nissan|Ariya": 20
, "Volvo|EC40": 20
, "Audi|Q8 e-tron": 18
, "Toyota|bZ4X": 18
, "Renault|other": 43
, "Polestar|other": 29
, "Kia|other": 23
, "Hyundai|other": 19
, "Mercedes-Benz|other": 19
, "Citroën|other": 17
, "Ford|other": 14
, "BMW|other": 10
, "BYD|other": 9
, "Audi|other": 6
, "MG|other": 6
, "Peugeot|other": 4
, "Toyota|other": 4
, "other": 312
});

db.insert(db.countries.IT, "2024-10", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Ottobre%202024_6728f61d1e8e0.pdf",
{ "Volkswagen": 10928
, "Toyota": 10630
, "Fiat": 9194
, "Dacia": 7705
, "Renault": 7068
, "Peugeot": 6907
, "BMW": 6438
, "Jeep": 6084
, "Ford": 5878
, "Audi": 5408
, "Mercedes-Benz": 5160
, "Hyundai": 4469
, "Kia": 4197
, "Opel": 3691
, "Škoda": 3511
, "MG": 3444
, "Suzuki": 3343
, "Citroën": 2927
, "Nissan": 2337
, "Volvo": 1657
, "Mazda": 1334
, "Cupra": 1320
, "Mini": 1120
, "Porsche": 830
, "Seat": 760
, "Honda": 635
, "Land Rover": 554
, "BYD": 515
, "Tesla": 484
, "Mitsubishi": 202
, "Subaru": 197
, "Smart": 88
, "Jaguar": 56
, "Polestar": 25
, "other": 7392
});

db.insert(db.countries.IT, "2024-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/10, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Ottobre%202024_6728f5832ce0a.pdf",
{ "Volvo|EX30": 450
, "Porsche|Macan Electric": 316
, "Tesla|Model Y": 261
, "Peugeot|e-208": 249
, "Renault|5 E-Tech": 220
, "Tesla|Model 3": 212
, "Jeep|Avenger EV": 196
, "BMW|iX1": 164
, "Citroën|ë-C3": 158
, "Mercedes-Benz|EQA": 144
, "Fiat|500e": 141
, "Audi|Q4 e-tron": 130
, "Peugeot|e-2008": 124
, "Mini|Cooper SE": 105
, "Volvo|EX40": 103
, "Fiat|600e": 101
, "Ford|Explorer EV": 89
, "Volkswagen|ID.3": 88
, "Chery|eQ1": 83
, "BYD|Dolphin": 78
, "BYD|Seal": 71
, "Dacia|Spring": 66
, "BYD|Yuan Plus": 63
, "Smart|Hashtag 1": 63
, "Opel|Mokka-e": 62
, "MG|4 EV": 60
, "Mercedes-Benz|EQB": 60
, "Peugeot|E-3008": 58
, "Opel|Corsa-e": 56
, "Volkswagen|ID.4": 56
, "BMW|iX2": 49
, "Porsche|Taycan": 45
, "Citroën|ë-C4": 42
, "Cupra|Born": 39
, "Mazda|MX-30 BEV": 39
, "BMW|i4": 37
, "Nissan|Ariya": 36
, "Mercedes-Benz|EQE SUV": 33
, "Audi|Q6 e-tron": 28
, "Renault|Scénic E-Tech": 28
, "BMW|i5": 26
, "Škoda|Enyaq": 26
, "Ford|Mustang Mach-E": 25
, "Smart|Hashtag 3": 25
, "Cupra|Tavascan": 24
, "Kia|EV3": 23
, "Audi|Q8 e-tron": 22
, "Hyundai|Kona Electric": 21
, "Renault|Megane E-Tech": 21
, "Volkswagen|ID.5": 16
, "Volvo|EC40": 16
, "Kia|other": 29
, "Mercedes-Benz|other": 29
, "BMW|other": 27
, "Polestar|other": 25
, "Renault|other": 17
, "Volkswagen|other": 16
, "Toyota|other": 13
, "BYD|other": 11
, "MG|other": 11
, "Tesla|other": 11
, "Peugeot|other": 9
, "Audi|other": 5
, "Hyundai|other": 4
, "Citroën|other": 3
, "Opel|other": 3
, "other": 206
});

db.insert(db.countries.IT, "2024-11", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Novembre%202024_674dddbdee9fb.pdf",
{ "Toyota": 11170
, "Volkswagen": 10681
, "Fiat": 8794
, "Dacia": 8778
, "Renault": 7207
, "BMW": 6447
, "Peugeot": 5987
, "Ford": 5466
, "Audi": 5276
, "Jeep": 4978
, "Citroën": 4629
, "Mercedes-Benz": 4422
, "Hyundai": 4155
, "Kia": 3794
, "Škoda": 3362
, "MG": 3185
, "Suzuki": 2801
, "Opel": 2664
, "Nissan": 2419
, "Cupra": 1593
, "Volvo": 1392
, "Mazda": 1215
, "Mini": 1073
, "Tesla": 808
, "Land Rover": 753
, "Seat": 663
, "Honda": 661
, "Porsche": 619
, "BYD": 556
, "Subaru": 254
, "Mitsubishi": 192
, "Smart": 157
, "Polestar": 57
, "Jaguar": 39
, "other": 8004
});

db.insert(db.countries.IT, "2024-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/11, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Novembre%202024_674ddd52452c6.pdf",
{ "Dacia|Spring": 1506
, "Tesla|Model Y": 552
, "Volvo|EX30": 462
, "Citroën|ë-C3": 388
, "Tesla|Model 3": 228
, "Fiat|500e": 195
, "Mini|Cooper SE": 167
, "BMW|iX1": 151
, "Audi|Q4 e-tron": 150
, "Kia|EV3": 138
, "Porsche|Macan Electric": 133
, "Mercedes-Benz|EQA": 129
, "Peugeot|e-208": 120
, "Jeep|Avenger EV": 113
, "Peugeot|e-2008": 109
, "Smart|Hashtag 1": 103
, "BYD|Yuan Plus": 86
, "Fiat|600e": 75
, "Ford|Explorer EV": 72
, "Chery|eQ1": 63
, "MG|4 EV": 63
, "Volkswagen|ID.4": 59
, "BYD|Seal": 58
, "Mercedes-Benz|EQB": 57
, "Peugeot|E-3008": 54
, "Smart|Hashtag 3": 53
, "Fiat|Grande Panda Electric": 50
, "Renault|5 E-Tech": 48
, "Cupra|Tavascan": 47
, "BMW|i5": 42
, "Porsche|Taycan": 41
, "Polestar|4": 40
, "BMW|iX2": 38
, "Volkswagen|ID.3": 38
, "BMW|i4": 37
, "Mercedes-Benz|EQE SUV": 33
, "BYD|Sealion 7": 32
, "Nissan|Ariya": 31
, "Opel|Mokka-e": 31
, "Volkswagen|ID. Buzz": 28
, "Renault|Megane E-Tech": 27
, "BYD|Dolphin": 25
, "Opel|Corsa-e": 25
, "BMW|iX": 23
, "Ford|Mustang Mach-E": 23
, "BYD|Song Plus": 21
, "Cupra|Born": 20
, "Toyota|bZ4X": 20
, "Mercedes-Benz|EQE": 18
, "Renault|Scénic E-Tech": 18
, "Audi|other": 38
, "Volvo|other": 36
, "Tesla|other": 28
, "Hyundai|other": 25
, "Peugeot|other": 21
, "Kia|other": 18
, "Polestar|other": 17
, "Volkswagen|other": 17
, "Mercedes-Benz|other": 14
, "Škoda|other": 14
, "BMW|other": 13
, "Citroën|other": 13
, "Renault|other": 13
, "Mazda|other": 10
, "Nissan|other": 5
, "Toyota|other": 5
, "other": 286
});

db.insert(db.countries.IT, "2024-12", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Dicembre_2024_6776c393e2ae9.pdf",
{ "Volkswagen": 10269
, "Toyota": 9289
, "Renault": 6544
, "Dacia": 6482
, "Fiat": 6196
, "Mercedes-Benz": 5174
, "Peugeot": 4947
, "BMW": 4724
, "Ford": 4205
, "Jeep": 4039
, "Citroën": 3680
, "MG": 3485
, "Audi": 3377
, "Škoda": 3330
, "Hyundai": 2968
, "Kia": 2849
, "Suzuki": 2756
, "Opel": 2484
, "Nissan": 2442
, "Cupra": 1631
, "Volvo": 1540
, "Tesla": 1360
, "Mazda": 1067
, "Mini": 844
, "Seat": 638
, "BYD": 635
, "Porsche": 620
, "Honda": 463
, "Land Rover": 450
, "Mitsubishi": 212
, "Smart": 125
, "Subaru": 119
, "Jaguar": 46
, "Polestar": 25
, "other": 6700
});

db.insert(db.countries.IT, "2024-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2024/12, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Dicembre_2024_6776c2863729b.pdf",
{ "Tesla|Model Y": 702
, "Tesla|Model 3": 649
, "Dacia|Spring": 572
, "Volvo|EX30": 346
, "Porsche|Macan Electric": 214
, "Citroën|ë-C3": 212
, "BMW|iX1": 196
, "Fiat|500e": 193
, "Mercedes-Benz|EQA": 166
, "Ford|Explorer EV": 144
, "Audi|Q4 e-tron": 143
, "Renault|5 E-Tech": 104
, "Mini|Cooper SE": 98
, "Cupra|Tavascan": 96
, "Smart|Hashtag 1": 89
, "Fiat|600e": 75
, "BYD|Yuan Plus": 72
, "MG|4 EV": 64
, "Volkswagen|ID. Buzz": 64
, "Mercedes-Benz|EQB": 63
, "Jeep|Avenger EV": 62
, "Renault|Megane E-Tech": 57
, "BYD|Dolphin": 56
, "Hyundai|Kona Electric": 56
, "Peugeot|e-208": 53
, "Opel|Corsa-e": 49
, "BMW|i5": 48
, "Porsche|Taycan": 47
, "BMW|iX2": 43
, "Volkswagen|ID.4": 43
, "Chery|eQ1": 41
, "BYD|Seal": 40
, "Peugeot|E-3008": 39
, "Volvo|EX40": 38
, "Peugeot|e-2008": 36
, "Smart|Hashtag 3": 36
, "Mercedes-Benz|EQE SUV": 34
, "Fiat|Grande Panda Electric": 30
, "Kia|EV3": 30
, "Renault|Scénic E-Tech": 30
, "Volkswagen|ID.3": 29
, "Cupra|Born": 27
, "Nissan|Ariya": 27
, "Audi|Q6 e-tron": 24
, "BMW|i4": 23
, "Audi|Q8 e-tron": 22
, "BYD|Han EV": 22
, "Opel|Mokka-e": 22
, "BMW|iX": 21
, "BYD|Song Plus": 21
, "Renault|other": 39
, "Mercedes-Benz|other": 38
, "Ford|other": 30
, "Polestar|other": 25
, "Volvo|other": 20
, "Toyota|other": 14
, "Nissan|other": 12
, "BMW|other": 11
, "BYD|other": 11
, "MG|other": 11
, "Tesla|other": 11
, "Volkswagen|other": 11
, "Peugeot|other": 10
, "Citroën|other": 9
, "Hyundai|other": 9
, "Audi|other": 5
, "Kia|other": 3
, "Mazda|other": 3
, "other": 230
});

db.insert(db.countries.IT, "2025-01", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Gennaio%202025_67a0f1041cd04.pdf",
{ "Fiat": 15901
, "Dacia": 11465
, "Toyota": 10100
, "Volkswagen": 8514
, "Peugeot": 7240
, "Audi": 6839
, "BMW": 6369
, "Renault": 6115
, "Jeep": 5892
, "Citroën": 5541
, "Ford": 5207
, "Mercedes-Benz": 4228
, "MG": 4131
, "Kia": 3956
, "Hyundai": 3758
, "Opel": 3326
, "Nissan": 3137
, "Škoda": 3027
, "Suzuki": 2742
, "Cupra": 1128
, "Volvo": 1103
, "Mazda": 961
, "Mini": 943
, "BYD": 827
, "Seat": 684
, "Honda": 662
, "Land Rover": 645
, "Porsche": 592
, "Tesla": 408
, "Mitsubishi": 215
, "Subaru": 111
, "Smart": 97
, "Jaguar": 36
, "Polestar": 26
, "other": 7766
});

db.insert(db.countries.IT, "2025-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2025/1, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Gennaio_2025_67a0e5e21be5d.pdf",
{ "Dacia|Spring": 961
, "Citroën|ë-C3": 418
, "Tesla|Model Y": 265
, "Jeep|Avenger EV": 245
, "Fiat|500e": 238
, "Volvo|EX30": 232
, "BMW|iX1": 229
, "Renault|5 E-Tech": 185
, "Renault|Megane E-Tech": 175
, "Volkswagen|ID.3": 168
, "Kia|EV3": 166
, "Fiat|600e": 149
, "Peugeot|e-208": 147
, "Tesla|Model 3": 141
, "Mini|Cooper SE": 139
, "Porsche|Macan Electric": 134
, "Audi|Q4 e-tron": 127
, "Peugeot|e-2008": 118
, "Volkswagen|ID.4": 111
, "Ford|Explorer EV": 107
, "BYD|Yuan Plus": 103
, "Opel|Grandland Electric": 93
, "Citroën|ë-C4": 87
, "BYD|Dolphin": 78
, "Smart|Hashtag 1": 73
, "Hyundai|Kona Electric": 72
, "Cupra|Tavascan": 69
, "Peugeot|E-3008": 66
, "Renault|Scénic E-Tech": 63
, "BYD|Seal": 60
, "Nissan|Ariya": 46
, "Opel|Mokka-e": 46
, "Opel|Corsa-e": 42
, "Renault|Twingo E-Tech": 42
, "Hyundai|Ioniq 5": 41
, "BMW|iX2": 40
, "BYD|Yuan Up": 40
, "Audi|A6 e-tron": 39
, "Chery|eQ1": 39
, "Peugeot|E-5008": 39
, "Volvo|EX90": 39
, "MG|4 EV": 37
, "BMW|iX": 36
, "Volkswagen|ID.7": 34
, "Mercedes-Benz|EQA": 32
, "BYD|Song Plus": 31
, "Audi|Q6 e-tron": 30
, "BMW|i5": 29
, "BMW|i4": 25
, "Volkswagen|ID.5": 25
, "Hyundai|other": 32
, "Ford|other": 27
, "Mercedes-Benz|other": 26
, "Fiat|other": 23
, "Smart|other": 23
, "Toyota|other": 23
, "Polestar|other": 21
, "Cupra|other": 19
, "Volkswagen|other": 18
, "Audi|other": 17
, "Porsche|other": 15
, "Volvo|other": 14
, "BYD|other": 12
, "Kia|other": 12
, "other": 496
});

db.insert(db.countries.IT, "2025-02", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Febbraio%202025_67c5c0952e3c0.pdf",
{ "Fiat": 14753
, "Toyota": 11084
, "Dacia": 10289
, "Volkswagen": 10169
, "Peugeot": 7643
, "BMW": 6371
, "Citroën": 6368
, "Jeep": 6297
, "Renault": 5863
, "Audi": 5591
, "Ford": 5380
, "MG": 4643
, "Mercedes-Benz": 4353
, "Nissan": 4073
, "Hyundai": 4059
, "Škoda": 3467
, "Kia": 3428
, "Opel": 3035
, "Suzuki": 2930
, "Cupra": 1421
, "BYD": 1350
, "Volvo": 1232
, "Mini": 1210
, "Mazda": 861
, "Tesla": 843
, "Honda": 781
, "Land Rover": 649
, "Seat": 589
, "Porsche": 487
, "Subaru": 197
, "Mitsubishi": 141
, "Smart": 95
, "Polestar": 28
, "Jaguar": 21
, "other": 8221
});

db.insert(db.countries.IT, "2025-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2025/2, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Febbraio%202025_67c5bfcfbecef.pdf",
{ "Citroën|ë-C3": 664
, "Tesla|Model 3": 501
, "Dacia|Spring": 460
, "Tesla|Model Y": 339
, "Hyundai|Inster": 274
, "Renault|5 E-Tech": 238
, "Fiat|500e": 208
, "Jeep|Avenger EV": 208
, "BYD|Dolphin": 178
, "BMW|iX1": 177
, "Audi|Q4 e-tron": 174
, "Opel|Corsa-e": 145
, "Mini|Cooper SE": 143
, "Volkswagen|ID.3": 130
, "Kia|EV3": 128
, "BYD|Yuan Plus": 125
, "BYD|Seal": 124
, "Renault|Scénic E-Tech": 122
, "Porsche|Macan Electric": 118
, "Ford|Explorer EV": 103
, "Peugeot|e-208": 99
, "Škoda|Elroq": 89
, "Volvo|EX30": 87
, "Mercedes-Benz|EQA": 86
, "Volkswagen|ID.4": 85
, "Cupra|Tavascan": 78
, "Smart|Hashtag 1": 69
, "Peugeot|E-3008": 68
, "BMW|iX2": 67
, "BYD|Sealion 7": 65
, "BMW|i4": 62
, "Peugeot|e-2008": 62
, "Renault|Megane E-Tech": 55
, "Opel|Mokka-e": 51
, "Audi|Q6 e-tron": 50
, "Chery|eQ1": 49
, "BMW|i5": 44
, "Fiat|600e": 44
, "Nissan|Ariya": 42
, "Nissan|Leaf": 38
, "Audi|A6 e-tron": 33
, "MG|4 EV": 31
, "BYD|Song Plus": 29
, "Peugeot|E-5008": 29
, "Mercedes-Benz|EQB": 27
, "Smart|Hashtag 3": 26
, "Cupra|Born": 25
, "Volkswagen|ID. Buzz": 25
, "BMW|iX": 24
, "Hyundai|Kona Electric": 24
, "Ford|other": 42
, "Volvo|other": 37
, "Mercedes-Benz|other": 36
, "Volkswagen|other": 35
, "Polestar|other": 28
, "Porsche|other": 21
, "BYD|other": 20
, "Kia|other": 20
, "Audi|other": 19
, "Hyundai|other": 19
, "Škoda|other": 16
, "MG|other": 14
, "Citroën|other": 12
, "Peugeot|other": 11
, "Toyota|other": 10
, "Opel|other": 9
, "Fiat|other": 5
, "Renault|other": 5
, "other": 499
});

db.insert(db.countries.IT, "2025-03", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Marzo%202025_67ec05efb3ec7.pdf",
{ "Fiat": 16637
, "Toyota": 12693
, "Volkswagen": 12027
, "Peugeot": 10684
, "Dacia": 9332
, "Renault": 8647
, "Jeep": 7561
, "Ford": 7455
, "BMW": 6857
, "MG": 6582
, "Mercedes-Benz": 6457
, "Nissan": 6438
, "Audi": 6327
, "Citroën": 6210
, "Opel": 5174
, "Kia": 4979
, "Hyundai": 4853
, "Suzuki": 3679
, "Škoda": 3538
, "Cupra": 2648
, "Tesla": 2217
, "BYD": 1787
, "Seat": 1501
, "Mini": 1409
, "Volvo": 1361
, "Mazda": 1194
, "Land Rover": 984
, "Honda": 789
, "Porsche": 701
, "Subaru": 274
, "Mitsubishi": 170
, "Jaguar": 89
, "Smart": 58
, "Polestar": 36
, "other": 10875
});

db.insert(db.countries.IT, "2025-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2025/3, https://www.unrae.it/files/Top%2010%20per%20alimentazione%20Marzo%202025_67ec044b1c6b7.pdf",
{ "Tesla|Model 3": 1565
, "Dacia|Spring": 655
, "Tesla|Model Y": 650
, "Citroën|ë-C3": 480
, "Renault|5 E-Tech": 315
, "Audi|Q4 e-tron": 310
, "BMW|iX1": 283
, "Mercedes-Benz|EQA": 261
, "Jeep|Avenger EV": 238
, "Fiat|Grande Panda Electric": 233
, "Hyundai|Inster": 197
, "Kia|EV3": 184
, "Mini|Cooper SE": 169
, "Porsche|Macan Electric": 168
, "Fiat|500e": 159
, "Renault|Scénic E-Tech": 152
, "Volvo|EX30": 149
, "BYD|Dolphin": 142
, "Audi|Q6 e-tron": 140
, "Ford|Explorer EV": 140
, "Peugeot|E-3008": 128
, "Volkswagen|ID.3": 123
, "Renault|Megane E-Tech": 111
, "Nissan|Ariya": 97
, "MG|4 EV": 90
, "Cupra|Tavascan": 89
, "BYD|Yuan Plus": 85
, "Opel|Corsa-e": 81
, "Mercedes-Benz|EQE": 79
, "Mercedes-Benz|EQB": 77
, "BMW|i4": 72
, "BMW|iX2": 72
, "BYD|Sealion 7": 59
, "Peugeot|e-208": 59
, "Volkswagen|ID.4": 58
, "Peugeot|e-2008": 42
, "Smart|Hashtag 1": 42
, "Cupra|Born": 40
, "Chery|eQ1": 39
, "Ford|Mustang Mach-E": 39
, "Hyundai|Ioniq 5": 38
, "Hyundai|Kona Electric": 37
, "Mercedes-Benz|EQE SUV": 36
, "Volkswagen|ID.7": 34
, "Opel|Mokka-e": 31
, "Toyota|bZ4X": 31
, "Polestar|4": 29
, "Audi|A6 e-tron": 28
, "Volkswagen|ID.5": 28
, "Škoda|Elroq": 27
, "BYD|other": 66
, "BMW|other": 43
, "Citroën|other": 29
, "Kia|other": 29
, "Volvo|other": 28
, "Audi|other": 27
, "Nissan|other": 26
, "Toyota|other": 26
, "Porsche|other": 25
, "Ford|other": 23
, "Opel|other": 19
, "Mercedes-Benz|other": 18
, "Hyundai|other": 16
, "Škoda|other": 16
, "Smart|other": 15
, "Peugeot|other": 13
, "Fiat|other": 12
, "MG|other": 8
, "Renault|other": 7
, "other": 556
});

db.insert(db.countries.IT, "2025-04", db.dsTypes.AllCarsByBrand, "https://www.unrae.it/files/02%20Marca%20Aprile%202025_6814d8a849cb8.pdf",
{ "Fiat": 12220
, "Volkswagen": 11143
, "Toyota": 10598
, "Peugeot": 8835
, "Dacia": 7756
, "Ford": 7302
, "Renault": 7130
, "BMW": 6576
, "Jeep": 6536
, "Citroën": 6169
, "Audi": 5930
, "MG": 5488
, "Mercedes-Benz": 4225
, "Hyundai": 4048
, "Opel": 3780
, "Kia": 3549
, "Škoda": 2987
, "Suzuki": 2629
, "Cupra": 1867
, "BYD": 1683
, "Nissan": 1658
, "Mini": 1445
, "Volvo": 1344
, "Seat": 956
, "Honda": 863
, "Mazda": 793
, "Land Rover": 634
, "Porsche": 525
, "Tesla": 446
, "Subaru": 197
, "Mitsubishi": 85
, "Smart": 51
, "Polestar": 43
, "Jaguar": 24
, "other": 9569
});

db.insert(db.countries.IT, "2025-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2025/4, https://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Aprile%202025_6814d85937bd5.pdf",
{ "Citroën|ë-C3": 818
, "Jeep|Avenger EV": 337
, "Tesla|Model Y": 264
, "Mini|Cooper SE": 215
, "BMW|iX1": 196
, "Ford|Explorer EV": 189
, "Tesla|Model 3": 182
, "Dacia|Spring": 174
, "Renault|5 E-Tech": 172
, "Renault|Scénic E-Tech": 168
, "Mercedes-Benz|EQA": 163
, "Fiat|500e": 158
, "Volvo|EX30": 155
, "Kia|EV3": 130
, "Hyundai|Inster": 129
, "Porsche|Macan Electric": 127
, "BYD|Dolphin": 118
, "Audi|Q4 e-tron": 111
, "Opel|Frontera Electric": 111
, "BYD|Seal": 107
, "Ford|Puma Gen-E": 99
, "BYD|Seagull": 98
, "Cupra|Tavascan": 94
, "BMW|iX2": 82
, "Fiat|Grande Panda Electric": 78
, "Audi|Q6 e-tron": 72
, "Mercedes-Benz|EQB": 70
, "BYD|Yuan Plus": 66
, "MG|4 EV": 59
, "Renault|Megane E-Tech": 57
, "Volkswagen|ID.3": 57
, "Chery|eQ1": 53
, "Peugeot|E-3008": 51
, "Cupra|Born": 44
, "Peugeot|e-208": 42
, "Smart|Hashtag 1": 41
, "Peugeot|e-2008": 40
, "BMW|i4": 38
, "Volkswagen|ID.4": 34
, "Citroën|ë-C4": 33
, "Hyundai|Kona Electric": 32
, "Volvo|EX40": 32
, "Ford|Mustang Mach-E": 31
, "BMW|iX": 29
, "Nissan|Ariya": 29
, "Škoda|Elroq": 29
, "Fiat|600e": 28
, "Audi|A6 e-tron": 26
, "Opel|Corsa-e": 26
, "Ford|Capri EV": 24
, "Mercedes-Benz|other": 56
, "Polestar|other": 43
, "Volkswagen|other": 38
, "Toyota|other": 35
, "Kia|other": 24
, "BYD|other": 22
, "Porsche|other": 17
, "Renault|other": 16
, "Škoda|other": 16
, "Opel|other": 13
, "Subaru|other": 12
, "Peugeot|other": 11
, "Citroën|other": 10
, "Hyundai|other": 10
, "Audi|other": 9
, "Smart|other": 9
, "Volvo|other": 8
, "BMW|other": 7
, "MG|other": 6
, "Nissan|other": 6
, "other": 781
});

db.insert(db.countries.IT, "2025-05", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca_Maggio%202025_683f0e647ee8b.pdf",
{ "Fiat": 11932
, "Toyota": 11090
, "Volkswagen": 10752
, "Peugeot": 8635
, "Dacia": 7834
, "Renault": 7772
, "Ford": 6900
, "BMW": 6848
, "Audi": 6294
, "Jeep": 5914
, "Citroën": 5222
, "Mercedes-Benz": 4780
, "Hyundai": 4310
, "MG": 4299
, "Škoda": 3720
, "Opel": 3596
, "Kia": 3466
, "Suzuki": 2703
, "Cupra": 2333
, "Nissan": 2070
, "BYD": 1945
, "Mini": 1398
, "Volvo": 1160
, "Mazda": 956
, "Tesla": 855
, "Honda": 854
, "Porsche": 622
, "Seat": 603
, "Land Rover": 569
, "Subaru": 287
, "Mitsubishi": 123
, "Smart": 52
, "Polestar": 32
, "other": 9464
});

db.insert(db.countries.IT, "2025-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2025/5, https://unrae.it/files/Top%2010%20per%20alimentazione%20maggio%202025_683f05651a256.pdf",
{ "Tesla|Model Y": 635
, "Citroën|ë-C3": 489
, "Jeep|Avenger EV": 482
, "Audi|Q6 e-tron": 375
, "Peugeot|E-3008": 359
, "BMW|iX1": 333
, "Mini|Cooper SE": 271
, "Ford|Puma Gen-E": 262
, "Dacia|Spring": 237
, "Tesla|Model 3": 214
, "BYD|Seal": 177
, "Audi|Q4 e-tron": 152
, "Renault|5 E-Tech": 150
, "Porsche|Macan Electric": 141
, "Volvo|EX30": 123
, "Fiat|500e": 121
, "Opel|Frontera Electric": 113
, "Hyundai|Inster": 112
, "Cupra|Tavascan": 111
, "Kia|EV3": 103
, "BYD|Dolphin": 99
, "Škoda|Enyaq": 99
, "Mercedes-Benz|EQA": 88
, "Škoda|Elroq": 82
, "Renault|Scénic E-Tech": 81
, "BMW|iX2": 73
, "Chery|eQ1": 71
, "BYD|Yuan Plus": 68
, "Peugeot|e-2008": 61
, "MG|4 EV": 57
, "BYD|Yuan Up": 56
, "Fiat|Grande Panda Electric": 55
, "Volvo|EX40": 55
, "Cupra|Born": 51
, "Volkswagen|ID.3": 51
, "Opel|Corsa-e": 48
, "Volkswagen|ID.4": 46
, "Hyundai|Kona Electric": 38
, "Toyota|bZ4X": 38
, "Subaru|Solterra": 37
, "Audi|A6 e-tron": 36
, "Smart|Hashtag 1": 36
, "BMW|iX": 35
, "Citroën|ë-C4": 35
, "Peugeot|e-208": 35
, "Ford|Mustang Mach-E": 32
, "Mercedes-Benz|EQB": 29
, "BMW|i4": 28
, "Renault|Megane E-Tech": 28
, "BMW|i5": 27
, "Mercedes-Benz|other": 59
, "Opel|other": 57
, "Volkswagen|other": 39
, "Volvo|other": 36
, "Peugeot|other": 35
, "Polestar|other": 32
, "BMW|other": 25
, "Nissan|other": 25
, "Porsche|other": 23
, "Fiat|other": 22
, "Toyota|other": 22
, "Ford|other": 20
, "Kia|other": 17
, "Renault|other": 16
, "Audi|other": 15
, "Hyundai|other": 15
, "BYD|other": 10
, "Smart|other": 8
, "MG|other": 6
, "other": 127
});

db.insert(db.countries.IT, "2025-06", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca_Giugno%202025_686401d990f8f.pdf",
{ "Fiat": 11023
, "Toyota": 10064
, "Volkswagen": 9619
, "Dacia": 7921
, "Renault": 7667
, "BMW": 6687
, "Audi": 6468
, "Peugeot": 5838
, "Ford": 5732
, "Mercedes-Benz": 5286
, "Jeep": 4699
, "Hyundai": 4361
, "MG": 4146
, "Citroën": 3849
, "Kia": 3726
, "Suzuki": 3224
, "Škoda": 3089
, "Opel": 3069
, "Nissan": 2869
, "Cupra": 2184
, "BYD": 1911
, "Tesla": 1697
, "Mini": 1337
, "Volvo": 1284
, "Mazda": 918
, "Honda": 825
, "Land Rover": 659
, "Porsche": 627
, "Seat": 491
, "Subaru": 314
, "Mitsubishi": 245
, "Smart": 114
, "Polestar": 88
, "other": 10160
});

db.insert(db.countries.IT, "2025-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2025/6, https://unrae.it/files/07%20Top%2010%20per%20alimentazione%20Giugno%202025_6864014b3822a.pdf",
{ "Tesla|Model Y": 902
, "Tesla|Model 3": 793
, "BMW|iX1": 320
, "Citroën|ë-C3": 318
, "Mini|Cooper SE": 224
, "Mercedes-Benz|EQA": 203
, "Ford|Puma Gen-E": 189
, "Dacia|Spring": 188
, "Volvo|EX30": 179
, "BYD|Seagull": 172
, "Renault|5 E-Tech": 171
, "Audi|Q6 e-tron": 162
, "Fiat|500e": 155
, "Jeep|Avenger EV": 143
, "Kia|EV3": 138
, "Volkswagen|ID.3": 136
, "Porsche|Macan Electric": 126
, "Audi|Q4 e-tron": 125
, "Hyundai|Inster": 108
, "Cupra|Tavascan": 93
, "Chery|eQ1": 88
, "Opel|Corsa-e": 86
, "Cupra|Born": 78
, "Škoda|Elroq": 78
, "Audi|A6 e-tron": 75
, "MG|4 EV": 75
, "Fiat|Grande Panda Electric": 74
, "Volkswagen|ID. Buzz": 71
, "Renault|Scénic E-Tech": 69
, "BYD|Yuan Plus": 68
, "Ford|Capri EV": 66
, "Ford|Mustang Mach-E": 64
, "BMW|iX2": 63
, "BYD|Dolphin": 61
, "Citroën|ë-C4": 58
, "Peugeot|e-2008": 56
, "Volkswagen|ID.4": 52
, "Peugeot|e-208": 50
, "Smart|Hashtag 1": 50
, "BYD|Yuan Up": 48
, "Fiat|600e": 48
, "Polestar|4": 47
, "Hyundai|Kona Electric": 46
, "Mercedes-Benz|EQE SUV": 45
, "BMW|iX": 39
, "Smart|Hashtag 3": 38
, "BYD|Seal": 36
, "Mercedes-Benz|EQB": 35
, "Nissan|Ariya": 32
, "Polestar|2": 31
, "Toyota|other": 67
, "Opel|other": 51
, "Mercedes-Benz|other": 46
, "Hyundai|other": 45
, "Kia|other": 43
, "Peugeot|other": 42
, "BMW|other": 38
, "Volvo|other": 38
, "Renault|other": 33
, "Xpeng|other": 31
, "Smart|other": 26
, "Volkswagen|other": 24
, "Škoda|other": 19
, "Audi|other": 18
, "Porsche|other": 15
, "MG|other": 11
, "Polestar|other": 10
, "Tesla|other": 10
, "Subaru|other": 9
, "Citroën|other": 5
, "other": 800
});
