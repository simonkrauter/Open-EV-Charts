// Data sets for car sales in the United States

"use strict";

db.addCountry("US", "United States");

db.insert(db.countries.US, "q2018-1", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Ford": 574332
, "Toyota": 514289
, "Chevrolet": 490919
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
, "Tesla": 17982
, "Porsche": 13954
, "Mini": 10533
, "Jaguar": 8049
, "Alfa Romeo": 5792
, "Genesis": 4362
, "Fiat": 4014
, "Maserati": 2713
, "Mercedes-AMG": 381
, "Smart": 321
, "Bentley": 160
});

db.insert(db.countries.US, "q2018-1", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 8180
, "Tesla|Model S": 5300
, "Tesla|Model X": 4500
, "Chevrolet|Bolt": 4375
, "Nissan|Leaf": 2545
});

db.insert(db.countries.US, "q2018-2", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Ford": 647113
, "Toyota": 562118
, "Honda": 386094
, "Nissan": 333409
, "Jeep": 266917
, "Hyundai": 183173
, "Chevrolet": 180634
, "Subaru": 173157
, "Kia": 166618
, "Ram": 146687
, "Dodge": 133962
, "Volkswagen": 88935
, "Mercedes-Benz": 88404
, "Mazda": 79929
, "BMW": 79551
, "Lexus": 70783
, "Audi": 57890
, "GMC": 46055
, "Chrysler": 42397
, "Acura": 39239
, "Mitsubishi": 31565
, "Infiniti": 30763
, "Lincoln": 27807
, "Volvo": 27539
, "Tesla": 26732
, "Land Rover": 20533
, "Buick": 17590
, "Cadillac": 16291
, "Porsche": 15467
, "Mini": 14776
, "Jaguar": 6738
, "Alfa Romeo": 6473
, "Fiat": 4271
, "Genesis": 2900
, "Maserati": 390
, "Mercedes-AMG": 379
, "Smart": 329
});

db.insert(db.countries.US, "q2018-2", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 16187
, "Tesla|Model S": 5520
, "Tesla|Model X": 5025
, "Nissan|Leaf": 4114
, "Chevrolet|Bolt": 3483
});

db.insert(db.countries.US, "q2018-3", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Ford": 581928
, "Toyota": 577945
, "Honda": 377346
, "Nissan": 310908
, "Jeep": 251172
, "Subaru": 180558
, "Chevrolet": 165464
, "Hyundai": 165006
, "Kia": 158479
, "Ram": 156320
, "Dodge": 108795
, "Volkswagen": 93330
, "Lexus": 78622
, "Mercedes-Benz": 77656
, "BMW": 71679
, "Mazda": 71198
, "Tesla": 69925
, "Audi": 59478
, "Acura": 41830
, "GMC": 41584
, "Chrysler": 38526
, "Infiniti": 33079
, "Volvo": 26307
, "Mitsubishi": 26071
, "Lincoln": 25011
, "Land Rover": 20354
, "Mini": 16381
, "Buick": 15101
, "Porsche": 13205
, "Cadillac": 12409
, "Jaguar": 6389
, "Alfa Romeo": 5895
, "Fiat": 3799
, "Genesis": 1647
, "Smart": 309
});

db.insert(db.countries.US, "q2018-3", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 54300
, "Tesla|Model X": 8050
, "Tesla|Model S": 7575
, "Nissan|Leaf": 4027
, "Chevrolet|Bolt": 3949
});

db.insert(db.countries.US, "q2018-4", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Ford": 578262
, "Toyota": 524818
, "Honda": 353380
, "Nissan": 325164
, "Jeep": 227033
, "Chevrolet": 188682
, "Ram": 180707
, "Subaru": 176717
, "Hyundai": 174843
, "Kia": 137631
, "Mercedes-Benz": 100353
, "Dodge": 99596
, "Volkswagen": 87836
, "BMW": 85949
, "Lexus": 84686
, "Tesla": 77525
, "Mazda": 65203
, "Audi": 55742
, "GMC": 54203
, "Acura": 44451
, "Infiniti": 44031
, "Chrysler": 38808
, "Lincoln": 28307
, "Land Rover": 27010
, "Mitsubishi": 24676
, "Volvo": 24634
, "Buick": 17305
, "Porsche": 14576
, "Cadillac": 14001
, "Mini": 9491
, "Jaguar": 9307
, "Alfa Romeo": 5640
, "Fiat": 3437
, "Genesis": 1031
, "Smart": 317
});

db.insert(db.countries.US, "q2018-4", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 61650
, "Tesla|Model X": 8525
, "Tesla|Model S": 7350
, "Chevrolet|Bolt": 7198
, "Nissan|Leaf": 4029
, "Jaguar|I-Pace": 393
});

db.insert(db.countries.US, "q2019-1", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.US, "q2019-1", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 22425
, "Chevrolet|Bolt": 4316
, "Tesla|Model X": 4225
, "Tesla|Model S": 3950
, "Nissan|Leaf": 2685
, "Jaguar|I-Pace": 608
});

db.insert(db.countries.US, "q2019-2", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.US, "q2019-2", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 44550
, "Tesla|Model X": 5150
, "Chevrolet|Bolt": 3966
, "Tesla|Model S": 3600
, "Nissan|Leaf": 3323
, "Jaguar|I-Pace": 701
});

db.insert(db.countries.US, "q2019-3", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
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
, "Tesla": 54702
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

db.insert(db.countries.US, "q2019-3", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 46850
, "Chevrolet|Bolt": 4830
, "Tesla|Model X": 4725
, "Tesla|Model S": 3125
, "Nissan|Leaf": 3103
, "Jaguar|I-Pace": 533
});

db.insert(db.countries.US, "q2019-4", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
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

db.insert(db.countries.US, "q2019-4", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 47275
, "Tesla|Model X": 5500
, "Tesla|Model S": 3750
, "Chevrolet|Bolt": 3307
, "Nissan|Leaf": 3254
, "Jaguar|I-Pace": 752
, "Porsche|Taycan": 130
});

db.insert(db.countries.US, "q2020-1", db.dsTypes.AllCarsByBrand, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
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
, "Tesla": 52800
, "Audi": 41371
, "Mitsubishi": 35563
, "Buick": 33870
, "Cadillac": 30323
, "Chrysler": 29945
, "Acura": 28531
, "Lincoln": 25562
, "Infiniti": 25556
, "Volvo": 19485
, "Porsche": 11984
, "Mini": 5236
, "Genesis": 3955
, "Alfa Romeo": 3702
, "Fiat": 1128
});

db.insert(db.countries.US, "q2020-1", db.dsTypes.ElectricCarsByModel, "https://autocharts.info (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 44500
, "Chevrolet|Bolt": 5874
, "Tesla|Model S": 4600
, "Tesla|Model X": 3700
, "Nissan|Leaf": 1958
, "Porsche|Taycan": 211
});

