// Data sets for car sales in the United States

"use strict";

db.insert(db.countries.US, "2018-Q1", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 574332
, "Toyota": 514289
, "Chevrolet": 489852
, "Nissan": 375116
, "Honda": 329077
, "Jeep": 228105
, "Hyundai": 144244
, "Subaru": 140702
, "GMC": 131344
, "Kia": 126945
, "Dodge": 116971
, "Ram": 113654
, "Mercedes-Benz": 86279
, "Mazda": 83995
, "Volkswagen": 83943
, "BMW": 73835
, "Lexus": 64211
, "Buick": 56804
, "Audi": 50052
, "Chrysler": 46233
, "Infiniti": 40887
, "Cadillac": 36727
, "Mitsubishi": 35772
, "Acura": 33414
, "Land Rover": 24246
, "Lincoln": 22462
, "Volvo": 21895
, "Tesla": 17980
, "Porsche": 13954
, "Mini": 10533
, "Jaguar": 8049
, "Alfa Romeo": 5792
, "Genesis": 4362
, "Fiat": 4014
, "Maserati": 2713
, "Smart": 321
, "other": 541
});

db.insert(db.countries.US, "2018-Q1", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 8180
, "Tesla|Model S": 5300
, "Tesla|Model X": 4500
, "Chevrolet|Bolt": 4375
, "Nissan|Leaf": 2545
});

db.insert(db.countries.US, "2018-Q2", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 647113
, "Toyota": 562118
, "Chevrolet": 444759
, "Honda": 386094
, "Nissan": 333409
, "Jeep": 266917
, "Hyundai": 183173
, "Subaru": 173157
, "Kia": 166618
, "Ram": 146687
, "Dodge": 133962
, "GMC": 113389
, "Volkswagen": 88935
, "Mercedes-Benz": 88404
, "Mazda": 79929
, "BMW": 79551
, "Lexus": 70783
, "Audi": 57890
, "Buick": 45311
, "Chrysler": 42397
, "Acura": 39239
, "Cadillac": 33609
, "Mitsubishi": 31565
, "Infiniti": 30763
, "Lincoln": 27807
, "Volvo": 27539
, "Tesla": 26732
, "Land Rover": 20533
, "Porsche": 15467
, "Mini": 14776
, "Jaguar": 6738
, "Alfa Romeo": 6473
, "Fiat": 4271
, "Genesis": 2900
, "Maserati": 390
, "Smart": 329
, "other": 379
});

db.insert(db.countries.US, "2018-Q2", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 16187
, "Tesla|Model S": 5520
, "Tesla|Model X": 5025
, "Nissan|Leaf": 4114
, "Chevrolet|Bolt": 3483
});

db.insert(db.countries.US, "2018-Q3", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 581928
, "Toyota": 577945
, "Chevrolet": 448901
, "Honda": 377346
, "Nissan": 310908
, "Jeep": 251172
, "Subaru": 180558
, "Hyundai": 165006
, "Kia": 158479
, "Ram": 156320
, "GMC": 119584
, "Dodge": 108795
, "Volkswagen": 93330
, "Lexus": 78622
, "Mercedes-Benz": 77656
, "BMW": 71679
, "Mazda": 71198
, "Tesla": 69925
, "Audi": 59478
, "Buick": 44034
, "Acura": 41830
, "Chrysler": 38526
, "Infiniti": 33079
, "Cadillac": 30444
, "Volvo": 26307
, "Mitsubishi": 26071
, "Lincoln": 25011
, "Land Rover": 20354
, "Mini": 16381
, "Porsche": 13205
, "Jaguar": 6389
, "Alfa Romeo": 5895
, "Fiat": 3799
, "Genesis": 1647
, "Smart": 309
});

db.insert(db.countries.US, "2018-Q3", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 54300
, "Tesla|Model X": 8050
, "Tesla|Model S": 7575
, "Nissan|Leaf": 4027
, "Chevrolet|Bolt": 3949
});

db.insert(db.countries.US, "2018-Q4", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 578262
, "Toyota": 524818
, "Chevrolet": 504856
, "Honda": 353380
, "Nissan": 325164
, "Jeep": 227033
, "Ram": 180707
, "Subaru": 176717
, "Hyundai": 174843
, "Kia": 137631
, "GMC": 123576
, "Mercedes-Benz": 100353
, "Dodge": 99596
, "Volkswagen": 87836
, "BMW": 85949
, "Lexus": 84686
, "Tesla": 77525
, "Mazda": 65203
, "Audi": 55742
, "Acura": 44451
, "Infiniti": 44031
, "Buick": 44016
, "Chrysler": 38808
, "Cadillac": 29183
, "Lincoln": 28307
, "Land Rover": 27010
, "Mitsubishi": 24676
, "Volvo": 24634
, "Porsche": 14576
, "Mini": 9491
, "Jaguar": 9307
, "Alfa Romeo": 5640
, "Fiat": 3437
, "Genesis": 1031
, "Smart": 317
});

db.insert(db.countries.US, "2018-Q4", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 61650
, "Tesla|Model X": 8525
, "Tesla|Model S": 7350
, "Chevrolet|Bolt": 7198
, "Nissan|Leaf": 4029
, "Jaguar|I-Pace": 393
});

db.insert(db.countries.US, "2019-Q1", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 557884
, "Toyota": 481073
, "Chevrolet": 451742
, "Honda": 333402
, "Nissan": 331536
, "Jeep": 212804
, "Subaru": 156754
, "Hyundai": 147585
, "Ram": 137013
, "Kia": 136596
, "GMC": 125579
, "Dodge": 110517
, "Volkswagen": 85872
, "Mercedes-Benz": 78667
, "BMW": 73888
, "Mazda": 70831
, "Lexus": 66791
, "Buick": 51865
, "Audi": 48115
, "Mitsubishi": 42070
, "Acura": 36385
, "Cadillac": 35996
, "Infiniti": 34315
, "Chrysler": 31591
, "Tesla": 30600
, "Land Rover": 25028
, "Lincoln": 24874
, "Volvo": 22058
, "Porsche": 15024
, "Jaguar": 10222
, "Mini": 8905
, "Alfa Romeo": 4286
, "Genesis": 4203
, "Fiat": 2214
, "Smart": 231
});

db.insert(db.countries.US, "2019-Q1", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 22425
, "Chevrolet|Bolt": 4316
, "Tesla|Model X": 4225
, "Tesla|Model S": 3950
, "Nissan|Leaf": 2685
, "Jaguar|I-Pace": 608
});

db.insert(db.countries.US, "2019-Q2", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 613098
, "Toyota": 543905
, "Chevrolet": 486884
, "Honda": 370026
, "Nissan": 322442
, "Jeep": 243477
, "Ram": 196155
, "Hyundai": 185743
, "Subaru": 182771
, "Kia": 168248
, "GMC": 151701
, "Dodge": 117582
, "Volkswagen": 98736
, "BMW": 82551
, "Mercedes-Benz": 80463
, "Lexus": 68944
, "Mazda": 67722
, "Buick": 55373
, "Audi": 53325
, "Tesla": 53300
, "Cadillac": 39739
, "Acura": 37382
, "Chrysler": 32831
, "Mitsubishi": 29030
, "Infiniti": 28743
, "Volvo": 28062
, "Lincoln": 25941
, "Land Rover": 21095
, "Porsche": 15233
, "Mini": 8678
, "Jaguar": 6060
, "Genesis": 5805
, "Alfa Romeo": 4751
, "Fiat": 2889
, "Smart": 244
});

db.insert(db.countries.US, "2019-Q2", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 44550
, "Tesla|Model X": 5150
, "Chevrolet|Bolt": 3966
, "Tesla|Model S": 3600
, "Nissan|Leaf": 3323
, "Audi|Q8 e-tron": 1835
, "Jaguar|I-Pace": 701
});

db.insert(db.countries.US, "2019-Q3", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Toyota": 560478
, "Ford": 548070
, "Chevrolet": 505913
, "Honda": 390168
, "Nissan": 302478
, "Jeep": 245474
, "Subaru": 185804
, "Ram": 179200
, "Hyundai": 173028
, "Kia": 158754
, "GMC": 140790
, "Dodge": 104146
, "Volkswagen": 93547
, "Mercedes-Benz": 89636
, "BMW": 75987
, "Lexus": 73816
, "Mazda": 69612
, "Audi": 57031
, "Tesla": 54700
, "Buick": 50614
, "Cadillac": 39962
, "Acura": 39046
, "Chrysler": 29544
, "Lincoln": 27937
, "Volvo": 27305
, "Infiniti": 24876
, "Mitsubishi": 24474
, "Land Rover": 20516
, "Porsche": 14805
, "Mini": 10243
, "Jaguar": 6150
, "Genesis": 4902
, "Alfa Romeo": 4310
, "Fiat": 2361
, "Smart": 130
});

db.insert(db.countries.US, "2019-Q3", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 46850
, "Chevrolet|Bolt": 4830
, "Tesla|Model X": 4725
, "Tesla|Model S": 3125
, "Nissan|Leaf": 3103
, "Audi|Q8 e-tron": 1705
, "Jaguar|I-Pace": 533
});

db.insert(db.countries.US, "2019-Q4", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 565373
, "Toyota": 515455
, "Chevrolet": 497500
, "Honda": 357389
, "Nissan": 271517
, "Jeep": 221537
, "Ram": 190655
, "Hyundai": 182415
, "Subaru": 174788
, "Kia": 151015
, "GMC": 146880
, "Mercedes-Benz": 103363
, "BMW": 92399
, "Dodge": 90643
, "Lexus": 88561
, "Volkswagen": 85167
, "Mazda": 70385
, "Audi": 65640
, "Tesla": 56525
, "Buick": 49074
, "Acura": 44572
, "Cadillac": 40553
, "Lincoln": 33355
, "Chrysler": 33006
, "Infiniti": 29774
, "Land Rover": 28097
, "Mitsubishi": 25475
, "Volvo": 18442
, "Porsche": 16506
, "Jaguar": 8573
, "Mini": 8339
, "Genesis": 6327
, "Alfa Romeo": 4947
, "Fiat": 1740
});

db.insert(db.countries.US, "2019-Q4", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 47275
, "Tesla|Model X": 5500
, "Tesla|Model S": 3750
, "Chevrolet|Bolt": 3307
, "Nissan|Leaf": 3254
, "Audi|Q8 e-tron": 1829
, "Jaguar|I-Pace": 752
, "Porsche|Taycan": 130
});

db.insert(db.countries.US, "2020-Q1", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 489051
, "Toyota": 439402
, "Chevrolet": 429529
, "Honda": 270253
, "Nissan": 232048
, "Jeep": 182667
, "Ram": 140486
, "Kia": 137945
, "Hyundai": 130875
, "Subaru": 130591
, "GMC": 118718
, "Dodge": 88656
, "Mercedes-Benz": 75266
, "Volkswagen": 75065
, "Mazda": 67670
, "BMW": 62152
, "Lexus": 56345
, "Tesla": 54000
, "Audi": 41371
, "Mitsubishi": 35563
, "Buick": 33870
, "Cadillac": 30323
, "Chrysler": 29945
, "Acura": 28531
, "Lincoln": 25562
, "Infiniti": 25556
, "Land Rover": 20400
, "Volvo": 19485
, "Porsche": 11984
, "Jaguar": 7266
, "Mini": 5236
, "Genesis": 3955
, "Alfa Romeo": 3702
, "Fiat": 1128
});

db.insert(db.countries.US, "2020-Q1", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model 3": 44500
, "Chevrolet|Bolt": 5874
, "Tesla|Model S": 4600
, "Tesla|Model X": 3700
, "Nissan|Leaf": 1958
, "Audi|Q8 e-tron": 1711
, "Tesla|Model Y": 1200
, "Jaguar|I-Pace": 446
, "Porsche|Taycan": 211
});

db.insert(db.countries.US, "2020-Q2", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 411035
, "Toyota": 347571
, "Chevrolet": 330381
, "Honda": 266044
, "Jeep": 176713
, "Nissan": 161317
, "Hyundai": 139378
, "Subaru": 136519
, "Ram": 127682
, "Kia": 125302
, "GMC": 101759
, "Volkswagen": 69933
, "Mercedes-Benz": 69505
, "Mazda": 61199
, "BMW": 50956
, "Lexus": 50458
, "Dodge": 43756
, "Tesla": 38800
, "Buick": 35521
, "Audi": 34839
, "Acura": 27458
, "Volvo": 23770
, "Cadillac": 23297
, "Lincoln": 21280
, "Infiniti": 16097
, "Land Rover": 14500
, "Chrysler": 13857
, "Mitsubishi": 12197
, "Porsche": 12193
, "Mini": 5288
, "Jaguar": 4320
, "Alfa Romeo": 3735
, "Genesis": 3585
, "Fiat": 1339
});

db.insert(db.countries.US, "2020-Q2", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 16000
, "Tesla|Model 3": 16000
, "Tesla|Model X": 3600
, "Tesla|Model S": 3200
, "Chevrolet|Bolt": 2495
, "Audi|Q8 e-tron": 1161
, "Nissan|Leaf": 1050
, "Porsche|Taycan": 818
, "Jaguar|I-Pace": 600
});

db.insert(db.countries.US, "2020-Q3", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 521530
, "Toyota": 483164
, "Chevrolet": 449134
, "Honda": 338769
, "Jeep": 222211
, "Nissan": 221754
, "Ram": 175174
, "Hyundai": 170828
, "Subaru": 169446
, "Kia": 165013
, "GMC": 132746
, "Volkswagen": 84514
, "Lexus": 75285
, "Mazda": 74411
, "Dodge": 71935
, "Mercedes-Benz": 69631
, "BMW": 68439
, "Tesla": 61400
, "Buick": 49170
, "Audi": 47896
, "Acura": 39664
, "Cadillac": 32966
, "Chrysler": 31869
, "Volvo": 30349
, "Lincoln": 27555
, "Mitsubishi": 24857
, "Infiniti": 17368
, "Land Rover": 15900
, "Porsche": 15548
, "Mini": 8974
, "Alfa Romeo": 5056
, "Jaguar": 4700
, "Genesis": 3745
, "Fiat": 1102
});

db.insert(db.countries.US, "2020-Q3", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 30000
, "Tesla|Model 3": 24000
, "Chevrolet|Bolt": 5682
, "Tesla|Model X": 3700
, "Tesla|Model S": 3700
, "Audi|Q8 e-tron": 2296
, "Nissan|Leaf": 1916
, "Porsche|Taycan": 1858
, "Jaguar|I-Pace": 500
});

db.insert(db.countries.US, "2020-Q4", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Toyota": 567761
, "Chevrolet": 520989
, "Ford": 507579
, "Honda": 324739
, "Nissan": 222643
, "Jeep": 213715
, "Ram": 181295
, "Hyundai": 178844
, "Subaru": 175382
, "GMC": 162090
, "Kia": 157745
, "BMW": 98750
, "Volkswagen": 94122
, "Lexus": 92954
, "Mercedes-Benz": 78078
, "Mazda": 75796
, "Tesla": 73800
, "Dodge": 62979
, "Audi": 62519
, "Buick": 44188
, "Cadillac": 42909
, "Acura": 41329
, "Volvo": 36526
, "Chrysler": 34614
, "Lincoln": 31008
, "Land Rover": 27698
, "Infiniti": 20482
, "Porsche": 17561
, "Mitsubishi": 14769
, "Mini": 8549
, "Alfa Romeo": 6092
, "Jaguar": 5500
, "Genesis": 5099
, "Fiat": 735
});

db.insert(db.countries.US, "2020-Q4", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 33000
, "Tesla|Model 3": 28000
, "Chevrolet|Bolt": 6702
, "Tesla|Model X": 6400
, "Tesla|Model S": 6400
, "Nissan|Leaf": 4635
, "Audi|Q8 e-tron": 2034
, "Porsche|Taycan": 1517
, "Jaguar|I-Pace": 400
, "Ford|Mustang Mach-E": 3
});

db.insert(db.countries.US, "2021-Q1", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Toyota": 517017
, "Ford": 492271
, "Chevrolet": 463913
, "Honda": 309203
, "Nissan": 266481
, "Jeep": 197544
, "Hyundai": 182604
, "Ram": 162921
, "Subaru": 160426
, "Kia": 153637
, "GMC": 149500
, "Mercedes-Benz": 90032
, "Volkswagen": 88186
, "Mazda": 78794
, "Lexus": 74253
, "BMW": 71480
, "Tesla": 70400
, "Dodge": 63991
, "Audi": 54568
, "Buick": 45754
, "Chrysler": 39734
, "Acura": 37888
, "Cadillac": 37059
, "Mitsubishi": 28231
, "Volvo": 27239
, "Lincoln": 26410
, "Land Rover": 21019
, "Infiniti": 19071
, "Porsche": 17369
, "Genesis": 8231
, "Mini": 6284
, "Alfa Romeo": 4647
, "Jaguar": 4048
, "Fiat": 815
});

db.insert(db.countries.US, "2021-Q1", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 44000
, "Tesla|Model 3": 25000
, "Chevrolet|Bolt": 9025
, "Ford|Mustang Mach-E": 6614
, "Audi|Q8 e-tron": 4325
, "Nissan|Leaf": 2925
, "Porsche|Taycan": 2009
, "Tesla|Model X": 700
, "Tesla|Model S": 700
, "Volkswagen|ID.4": 474
, "Jaguar|I-Pace": 256
});

db.insert(db.countries.US, "2021-Q2", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Toyota": 573109
, "Ford": 448745
, "Honda": 435923
, "Chevrolet": 431583
, "Nissan": 280283
, "Hyundai": 237387
, "Jeep": 210439
, "Kia": 206457
, "Ram": 187750
, "Subaru": 160824
, "GMC": 153026
, "Volkswagen": 113624
, "Mazda": 105909
, "BMW": 96561
, "Mercedes-Benz": 92441
, "Lexus": 83459
, "Tesla": 76600
, "Audi": 66084
, "Buick": 65921
, "Dodge": 62313
, "Acura": 50496
, "Volvo": 36525
, "Mitsubishi": 25147
, "Cadillac": 23858
, "Lincoln": 23514
, "Porsche": 18955
, "Chrysler": 18900
, "Infiniti": 17867
, "Land Rover": 17254
, "Genesis": 11076
, "Mini": 9340
, "Alfa Romeo": 5019
, "Jaguar": 4883
, "Fiat": 892
});

db.insert(db.countries.US, "2021-Q2", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 45000
, "Tesla|Model 3": 30000
, "Chevrolet|Bolt": 11263
, "Ford|Mustang Mach-E": 6361
, "Volkswagen|ID.4": 5757
, "Nissan|Leaf": 4804
, "Porsche|Taycan": 3359
, "Audi|Q8 e-tron": 1647
, "Tesla|Model X": 800
, "Tesla|Model S": 800
, "Jaguar|I-Pace": 358
});

db.insert(db.countries.US, "2021-Q3", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Toyota": 433299
, "Ford": 380606
, "Honda": 307359
, "Chevrolet": 286257
, "Nissan": 188291
, "Jeep": 186685
, "Kia": 177014
, "Subaru": 156222
, "Hyundai": 155955
, "Ram": 144741
, "Lexus": 103546
, "Tesla": 99100
, "GMC": 97257
, "Mazda": 84046
, "Volkswagen": 79314
, "BMW": 75620
, "Mercedes-Benz": 71182
, "Dodge": 49058
, "Audi": 41010
, "Buick": 39298
, "Acura": 38555
, "Cadillac": 34697
, "Volvo": 31611
, "Mitsubishi": 23799
, "Land Rover": 18904
, "Lincoln": 17038
, "Chrysler": 15505
, "Porsche": 15289
, "Genesis": 15022
, "Infiniti": 10667
, "Mini": 6444
, "Alfa Romeo": 4530
, "Jaguar": 3121
, "Fiat": 400
});

db.insert(db.countries.US, "2021-Q3", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 46000
, "Tesla|Model 3": 44000
, "Tesla|Model S": 9000
, "Volkswagen|ID.4": 6050
, "Ford|Mustang Mach-E": 5880
, "Chevrolet|Bolt": 4515
, "Nissan|Leaf": 2344
, "Porsche|Taycan": 1861
, "Audi|e-tron GT": 462
, "Audi|Q8 e-tron": 447
, "Jaguar|I-Pace": 201
, "Tesla|Model X": 100
});

db.insert(db.countries.US, "2021-Q4", db.dsTypes.AllCarsByBrand, "https://autocharts.info",
{ "Ford": 483171
, "Toyota": 383896
, "Chevrolet": 287136
, "Honda": 255991
, "Nissan": 184035
, "Jeep": 174045
, "Ram": 151917
, "Hyundai": 150769
, "Kia": 140386
, "Subaru": 121008
, "GMC": 100917
, "BMW": 93033
, "Volkswagen": 85338
, "Tesla": 78696
, "Mercedes-Benz": 76010
, "Lexus": 65670
, "Mazda": 59488
, "Chrysler": 40863
, "Dodge": 40364
, "Audi": 33180
, "Land Rover": 32601
, "Buick": 31407
, "Acura": 30469
, "Volvo": 28049
, "Mitsubishi": 24858
, "Cadillac": 22380
, "Lincoln": 20967
, "Porsche": 17562
, "Genesis": 15301
, "Mini": 13100
, "Infiniti": 10950
, "Jaguar": 5097
, "Alfa Romeo": 4056
, "Fiat": 267
});

db.insert(db.countries.US, "2021-Q4", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 40299
, "Tesla|Model 3": 33699
, "Ford|Mustang Mach-E": 8285
, "Genesis|GV70": 5461
, "Genesis|GV80": 4852
, "Volkswagen|ID.4": 4464
, "Nissan|Leaf": 4164
, "Tesla|Model S": 3699
, "Audi|Q8 e-tron": 2364
, "Porsche|Taycan": 1518
, "Genesis|G80": 1434
, "Tesla|Model X": 999
, "Audi|e-tron GT": 765
, "Jaguar|I-Pace": 600
, "Hyundai|Ioniq 5": 153
, "Audi|Q4 e-tron": 63
, "Mazda|MX-30": 61
, "Volvo|C40 Recharge": 42
, "Chevrolet|Bolt": 24
});

// No source found for 2022-Q1

db.insert(db.countries.US, "2022-Q2", db.dsTypes.AllCarsByBrand, "https://www.goodcarbadcar.net/2022-us-vehicle-sales-figures-by-model/",
{ "Toyota": 416834
, "Chevrolet": 383816
, "Ford": 309291
, "Honda": 215165
, "Jeep": 186662
, "Hyundai": 184191
, "Nissan": 172620
, "Ram": 137873
, "GMC": 132057
, "Subaru": 131449
, "Tesla": 118700
, "Kia": 107206
, "BMW": 78903
, "Volkswagen": 77289
, "Lexus": 66723
, "Mazda": 60535
, "Audi": 49642
, "Dodge": 44270
, "Chrysler": 36935
, "Cadillac": 33684
, "Buick": 28878
, "Mitsubishi": 21871
, "Porsche": 19489
, "Volvo": 19394
, "Acura": 17032
, "Lincoln": 16851
, "Genesis": 13945
, "Infiniti": 10556
, "Mini": 5129
, "Alfa Romeo": 3084
, "Polestar": 2300
, "Rivian": 700
, "Fiat": 252
, "other": 500
});

db.insert(db.countries.US, "2022-Q2", db.dsTypes.ElectricCarsByModel, "https://www.goodcarbadcar.net/2022-us-vehicle-sales-figures-by-model/ (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 53000
, "Tesla|Model 3": 49900
, "Ford|Mustang Mach-E": 10941
, "Tesla|Model S": 8800
, "Hyundai|Ioniq 5": 7448
, "Kia|EV6": 7287
, "Tesla|Model X": 7000
, "Chevrolet|Bolt": 6946
, "Genesis|GV80": 4346
, "Genesis|GV70": 4199
, "Audi|Q8 e-tron": 3938
, "Nissan|Leaf": 3251
, "Porsche|Taycan": 2525
, "Polestar|2": 2200
, "Volkswagen|ID.4": 1659
, "Volvo|C40 Recharge": 1427
, "Genesis|G80": 1127
, "BMW|iX": 1081
, "Audi|e-tron GT": 839
, "Rivian|R1T": 700
, "Lucid|Air": 500
, "GMC|Hummer EV": 273
, "Genesis|GV60": 233
, "Toyota|bZ4X": 232
, "Mazda|MX-30": 136
, "Jaguar|I-Pace": 121
});

db.insert(db.countries.US, "2022-Q3", db.dsTypes.AllCarsByBrand, "https://www.goodcarbadcar.net/2022-us-vehicle-sales-figures-by-model/",
{ "Ford": 441487
, "Toyota": 411957
, "Chevrolet": 371415
, "Honda": 200258
, "Hyundai": 184431
, "Kia": 181168
, "Jeep": 161348
, "Nissan": 142848
, "Ram": 139295
, "Subaru": 137320
, "GMC": 120512
, "Tesla": 113998
, "Volkswagen": 86079
, "BMW": 78029
, "Mazda": 72589
, "Lexus": 67524
, "Dodge": 59755
, "Audi": 38667
, "Cadillac": 33669
, "Buick": 28524
, "Acura": 21792
, "Volvo": 21631
, "Chrysler": 21613
, "Lincoln": 20027
, "Mitsubishi": 16781
, "Porsche": 16580
, "Genesis": 15131
, "Infiniti": 11242
, "Mini": 7177
, "Rivian": 6099
, "Alfa Romeo": 3439
, "Polestar": 2300
, "Fiat": 209
, "other": 644
});

db.insert(db.countries.US, "2022-Q3", db.dsTypes.ElectricCarsByModel, "https://www.goodcarbadcar.net/2022-us-vehicle-sales-figures-by-model/ (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 54000
, "Tesla|Model 3": 47999
, "Chevrolet|Bolt": 14709
, "Ford|Mustang Mach-E": 10414
, "Tesla|Model S": 8000
, "Volkswagen|ID.4": 6657
, "Genesis|GV80": 5014
, "Genesis|GV70": 4994
, "Kia|EV6": 4872
, "Hyundai|Ioniq 5": 4800
, "Rivian|R1T": 4400
, "Tesla|Model X": 3999
, "Audi|Q8 e-tron": 2249
, "Polestar|2": 2200
, "BMW|iX": 1726
, "Rivian|EDV": 1699
, "Porsche|Taycan": 1325
, "Nissan|Leaf": 1276
, "Genesis|G80": 920
, "Genesis|GV60": 807
, "Mercedes-Benz|EQB": 739
, "Audi|Q4 e-tron": 732
, "Lucid|Air": 599
, "Audi|e-tron GT": 576
, "GMC|Hummer EV": 410
, "Volvo|C40 Recharge": 326
, "Mercedes-Benz|EQS SUV": 277
, "Jaguar|I-Pace": 104
, "Mazda|MX-30": 8
});

db.insert(db.countries.US, "2022-Q4", db.dsTypes.AllCarsByBrand, "https://www.goodcarbadcar.net/2022-us-vehicle-sales-figures-by-model/",
{ "Ford": 459175
, "Toyota": 456555
, "Chevrolet": 415025
, "Honda": 227596
, "Hyundai": 195967
, "Nissan": 177442
, "Kia": 175401
, "Subaru": 155466
, "GMC": 143656
, "Jeep": 143320
, "Tesla": 140000
, "Ram": 129874
, "BMW": 100899
, "Mazda": 79517
, "Lexus": 59822
, "Audi": 54052
, "Dodge": 46277
, "Cadillac": 39138
, "Volvo": 29822
, "Acura": 27654
, "Buick": 26921
, "Chrysler": 25053
, "Volkswagen": 22302
, "Mitsubishi": 20755
, "Lincoln": 20566
, "Genesis": 15399
, "Infiniti": 13572
, "Mini": 10319
, "Rivian": 6000
, "Alfa Romeo": 3032
, "Polestar": 2100
, "Land Rover": 1118
, "Fiat": 118
, "other": 863
});

db.insert(db.countries.US, "2022-Q4", db.dsTypes.ElectricCarsByModel, "https://www.goodcarbadcar.net/2022-us-vehicle-sales-figures-by-model/ (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 63800
, "Tesla|Model 3": 57600
, "Chevrolet|Bolt": 16108
, "Ford|Mustang Mach-E": 11369
, "Tesla|Model X": 9800
, "Tesla|Model S": 8800
, "Genesis|GV70": 5834
, "Genesis|GV80": 4902
, "Hyundai|Ioniq 5": 4490
, "Volkswagen|ID.4": 4056
, "Rivian|R1T": 3900
, "Nissan|Leaf": 3127
, "Kia|EV6": 2934
, "Audi|Q4 e-tron": 2413
, "Polestar|2": 2079
, "BMW|iX": 1673
, "Audi|Q8 e-tron": 1529
, "Volvo|C40 Recharge": 1403
, "Rivian|EDV": 1300
, "Genesis|G80": 1030
, "Toyota|bZ4X": 985
, "Subaru|Solterra": 919
, "Lucid|Air": 850
, "Rivian|R1S": 800
, "Genesis|GV60": 550
, "Audi|e-tron GT": 314
, "Nissan|Ariya": 201
, "GMC|Hummer EV": 72
});

db.insert(db.countries.US, "2023-Q1", db.dsTypes.AllCarsByBrand, "https://www.goodcarbadcar.net/2023-us-vehicle-sales-figures-by-model/",
{ "Ford": 457481
, "Chevrolet": 397118
, "Toyota": 388583
, "Honda": 251042
, "Nissan": 220058
, "Hyundai": 184449
, "Kia": 184153
, "Tesla": 170002
, "Jeep": 153530
, "Subaru": 143376
, "GMC": 130608
, "Ram": 128722
, "Mazda": 90074
, "BMW": 81877
, "Lexus": 68254
, "Volkswagen": 67851
, "Audi": 52582
, "Dodge": 50975
, "Buick": 38138
, "Cadillac": 36320
, "Acura": 33465
, "Chrysler": 31899
, "Volvo": 26483
, "Mitsubishi": 20935
, "Lincoln": 18560
, "Infiniti": 15755
, "Land Rover": 14817
, "Genesis": 13704
, "Mini": 7283
, "Rivian": 4201
, "Polestar": 2999
, "Jaguar": 2584
, "Alfa Romeo": 2390
, "Fiat": 138
, "other": 920
});

db.insert(db.countries.US, "2023-Q1", db.dsTypes.ElectricCarsByModel, "https://www.goodcarbadcar.net/2023-us-vehicle-sales-figures-by-model/ (Incomplete: EV models with ICE/hybrid variant are not included.)",
{ "Tesla|Model Y": 85000
, "Tesla|Model 3": 63001
, "Chevrolet|Bolt": 19700
, "Tesla|Model S": 16000
, "Volkswagen|ID.4": 9758
, "Tesla|Model X": 6001
, "Hyundai|Ioniq 5": 5736
, "Ford|Mustang Mach-E": 5407
, "Genesis|GV70": 5308
, "Genesis|GV80": 3939
, "Rivian|R1T": 3450
, "Kia|EV6": 3392
, "Polestar|2": 2939
, "Nissan|Ariya": 2860
, "Nissan|Leaf": 2353
, "BMW|iX": 2350
, "Audi|Q4 e-tron": 2178
, "Toyota|bZ4X": 1698
, "Audi|Q8 e-tron": 1535
, "Subaru|Solterra": 1359
, "Volvo|C40 Recharge": 1165
, "Genesis|G80": 1009
, "Lucid|Air": 790
, "Audi|e-tron GT": 726
, "Rivian|EDV": 526
, "Genesis|GV60": 512
, "Rivian|R1S": 225
, "Hyundai|Ioniq 6": 222
, "Jaguar|I-Pace": 98
, "Mazda|MX-30": 15
, "GMC|Hummer EV": 2
});
