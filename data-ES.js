// Data sets for car sales in Spain

"use strict";

db.addCountry("ES", "Spain");

db.insert(db.countries.ES, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosenerotur.asp, https://www.km77.com/mercado/espana/2018/datosenerott.asp",
{ "Volkswagen": 8909
, "Seat": 8540
, "Peugeot": 7518
, "Opel": 6887
, "Renault": 6166
, "Audi": 5822
, "Toyota": 4907
, "Hyundai": 4804
, "Citroën": 4686
, "Nissan": 4588
, "Mercedes-Benz": 4571
, "Fiat": 4511
, "Kia": 4480
, "Ford": 4220
, "BMW": 3894
, "Dacia": 2967
, "Škoda": 2309
, "Mazda": 1555
, "Mitsubishi": 1011
, "Mini": 817
, "Jeep": 796
, "Land Rover": 786
, "Lexus": 684
, "Suzuki": 591
, "Volvo": 516
, "Honda": 491
, "Smart": 412
, "Alfa Romeo": 386
, "Jaguar": 329
, "SsangYong": 264
, "Subaru": 239
, "DS Automobiles": 236
, "Porsche": 224
, "Infiniti": 101
, "Maserati": 33
, "Tesla": 6
, "other": 28
});

db.insert(db.countries.ES, "2018-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/1",
{ "Renault|ZOE": 104
, "Smart|Fortwo electric drive": 68
, "Volkswagen|e-Golf": 46
, "Nissan|Leaf": 37
, "BMW|i3 BEV": 33
, "Smart|Forfour electric drive": 26
, "Peugeot|Partner Electric": 23
, "Hyundai|Ioniq Electric": 22
, "Nissan|e-NV200": 20
, "Peugeot|iOn": 13
, "Kia|Soul EV": 10
, "Tesla|Model S": 4
, "Citroën|C-Zero": 3
, "Tesla|Model X": 2
, "Citroën|Berlingo Electric": 2
, "Volkswagen|e-up!": 1
, "Opel|Ampera-e": 1
, "Citroën|E-Mehari": 1
});

db.insert(db.countries.ES, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosfebrerotur.asp, https://www.km77.com/mercado/espana/2018/datosfebrerott.asp",
{ "Opel": 8310
, "Peugeot": 7876
, "Volkswagen": 7471
, "Renault": 7200
, "Citroën": 5998
, "Audi": 5662
, "Nissan": 5465
, "Toyota": 5408
, "Fiat": 5243
, "Ford": 5164
, "Kia": 5088
, "Hyundai": 4927
, "BMW": 4640
, "Mercedes-Benz": 4555
, "Dacia": 4042
, "Seat": 2576
, "Škoda": 2564
, "Mazda": 1804
, "Volvo": 922
, "Mini": 874
, "Jeep": 830
, "Mitsubishi": 774
, "Suzuki": 763
, "Lexus": 568
, "Honda": 551
, "Land Rover": 547
, "Smart": 388
, "SsangYong": 385
, "Alfa Romeo": 272
, "DS Automobiles": 270
, "Jaguar": 259
, "Subaru": 217
, "Porsche": 154
, "Infiniti": 142
, "Maserati": 27
, "Tesla": 20
, "other": 59
});

db.insert(db.countries.ES, "2018-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/2",
{ "Renault|ZOE": 108
, "BMW|i3 BEV": 64
, "Smart|Forfour electric drive": 51
, "Volkswagen|e-Golf": 48
, "Nissan|Leaf": 44
, "Smart|Fortwo electric drive": 37
, "Hyundai|Ioniq Electric": 15
, "Tesla|Model S": 13
, "Kia|Soul EV": 12
, "Peugeot|Partner Electric": 9
, "Tesla|Model X": 7
, "Peugeot|iOn": 5
, "Opel|Ampera-e": 3
, "Citroën|C-Zero": 2
, "Nissan|e-NV200": 1
, "Citroën|E-Mehari": 1
});

db.insert(db.countries.ES, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosmarzotur.asp, https://www.km77.com/mercado/espana/2018/datosmarzott.asp",
{ "Volkswagen": 9952
, "Renault": 9346
, "Peugeot": 9177
, "Nissan": 9030
, "Opel": 8429
, "Ford": 7740
, "Fiat": 6919
, "Citroën": 6916
, "Kia": 6371
, "Hyundai": 6046
, "Toyota": 5268
, "Audi": 5201
, "Mercedes-Benz": 4829
, "BMW": 4749
, "Dacia": 3826
, "Škoda": 2925
, "Seat": 2705
, "Mazda": 1968
, "Jeep": 1341
, "Honda": 1304
, "Mini": 1270
, "Volvo": 1251
, "Mitsubishi": 860
, "Suzuki": 752
, "Land Rover": 736
, "Lexus": 645
, "Smart": 543
, "SsangYong": 500
, "DS Automobiles": 444
, "Jaguar": 401
, "Alfa Romeo": 286
, "Subaru": 240
, "Infiniti": 204
, "Porsche": 166
, "Tesla": 62
, "Maserati": 24
, "other": 72
});

db.insert(db.countries.ES, "2018-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/3",
{ "Renault|ZOE": 150
, "Nissan|Leaf": 91
, "Volkswagen|e-Golf": 39
, "Smart|Fortwo electric drive": 36
, "BMW|i3 BEV": 35
, "Smart|Forfour electric drive": 33
, "Tesla|Model X": 32
, "Tesla|Model S": 32
, "Citroën|Berlingo Electric": 32
, "Hyundai|Ioniq Electric": 11
, "Peugeot|Partner Electric": 9
, "Kia|Soul EV": 6
, "Citroën|C-Zero": 4
, "Nissan|e-NV200": 3
, "Peugeot|iOn": 2
, "Opel|Ampera-e": 2
, "Citroën|E-Mehari": 2
});

db.insert(db.countries.ES, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosabriltur.asp, https://www.km77.com/mercado/espana/2018/datosabriltt.asp",
{ "Volkswagen": 9636
, "Peugeot": 9398
, "Renault": 8168
, "Toyota": 6819
, "Opel": 6807
, "Citroën": 6143
, "Kia": 5850
, "Hyundai": 5221
, "Fiat": 4750
, "Mercedes-Benz": 4716
, "Ford": 4639
, "Audi": 4480
, "BMW": 4306
, "Dacia": 4154
, "Nissan": 4108
, "Seat": 3300
, "Škoda": 2439
, "Mazda": 1934
, "Jeep": 1414
, "Mini": 1019
, "Mitsubishi": 988
, "Volvo": 980
, "Land Rover": 746
, "Lexus": 573
, "DS Automobiles": 523
, "Smart": 501
, "Suzuki": 484
, "Honda": 450
, "Jaguar": 425
, "SsangYong": 300
, "Alfa Romeo": 263
, "Porsche": 228
, "Subaru": 208
, "Infiniti": 132
, "Tesla": 31
, "Maserati": 18
, "other": 100
});

db.insert(db.countries.ES, "2018-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/4",
{ "Nissan|Leaf": 148
, "Renault|ZOE": 96
, "Smart|Fortwo electric drive": 48
, "BMW|i3 BEV": 45
, "Smart|Forfour electric drive": 25
, "Volkswagen|e-Golf": 22
, "Tesla|Model S": 16
, "Peugeot|Partner Electric": 16
, "Tesla|Model X": 15
, "Hyundai|Ioniq Electric": 13
, "Citroën|E-Mehari": 10
, "Citroën|C-Zero": 8
, "Kia|Soul EV": 6
, "Jaguar|I-Pace": 5
, "Nissan|e-NV200": 4
, "Citroën|Berlingo Electric": 3
, "Volkswagen|e-up!": 2
, "Opel|Ampera-e": 1
});

db.insert(db.countries.ES, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosmayotur.asp, https://www.km77.com/mercado/espana/2018/datosmayott.asp",
{ "Renault": 10068
, "Volkswagen": 9758
, "Peugeot": 9570
, "Opel": 7615
, "Citroën": 7086
, "Fiat": 7040
, "Toyota": 6666
, "Hyundai": 6407
, "Kia": 6125
, "Ford": 5893
, "Audi": 5498
, "Nissan": 4968
, "Dacia": 4354
, "Mercedes-Benz": 4216
, "BMW": 4206
, "Seat": 3300
, "Škoda": 3169
, "Mazda": 1950
, "Jeep": 1414
, "Mini": 1335
, "Volvo": 1048
, "Mitsubishi": 988
, "Land Rover": 746
, "Smart": 727
, "Lexus": 616
, "Honda": 582
, "DS Automobiles": 556
, "Suzuki": 502
, "Jaguar": 398
, "SsangYong": 345
, "Alfa Romeo": 298
, "Porsche": 230
, "Infiniti": 187
, "Subaru": 139
, "Tesla": 22
, "Maserati": 18
, "other": 138
});

db.insert(db.countries.ES, "2018-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/5",
{ "Renault|ZOE": 74
, "BMW|i3 BEV": 65
, "Smart|Fortwo electric drive": 61
, "Nissan|Leaf": 48
, "Volkswagen|e-Golf": 37
, "Smart|Forfour electric drive": 33
, "Tesla|Model X": 15
, "Kia|Soul EV": 11
, "Hyundai|Ioniq Electric": 10
, "Tesla|Model S": 9
, "Citroën|E-Mehari": 5
, "Peugeot|Partner Electric": 3
, "Citroën|C-Zero": 2
, "Peugeot|iOn": 1
, "Nissan|e-NV200": 1
, "Jaguar|I-Pace": 1
});

db.insert(db.countries.ES, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosjuniotur.asp, https://www.km77.com/mercado/espana/2018/datosjuniott.asp",
{ "Seat": 11535
, "Renault": 11112
, "Peugeot": 10644
, "Opel": 8730
, "Citroën": 8354
, "Toyota": 7791
, "Fiat": 6968
, "Audi": 6788
, "Kia": 6471
, "Ford": 6017
, "Nissan": 5584
, "Dacia": 5473
, "Mercedes-Benz": 5403
, "Hyundai": 4881
, "BMW": 4770
, "Škoda": 3852
, "Volkswagen": 3618
, "Mazda": 1941
, "Jeep": 1637
, "Volvo": 1606
, "Mini": 1420
, "Mitsubishi": 1239
, "Land Rover": 856
, "Honda": 841
, "Suzuki": 826
, "Lexus": 756
, "Smart": 737
, "Alfa Romeo": 558
, "DS Automobiles": 547
, "Jaguar": 450
, "Subaru": 398
, "SsangYong": 284
, "Porsche": 244
, "Infiniti": 173
, "Maserati": 54
, "Tesla": 43
, "other": 178
});

db.insert(db.countries.ES, "2018-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/6",
{ "BMW|i3 BEV": 70
, "Renault|ZOE": 69
, "Nissan|Leaf": 64
, "Smart|Fortwo electric drive": 51
, "Volkswagen|e-Golf": 34
, "Tesla|Model S": 27
, "Smart|Forfour electric drive": 27
, "Tesla|Model X": 18
, "Nissan|e-NV200": 16
, "Hyundai|Ioniq Electric": 13
, "Kia|Soul EV": 11
, "Citroën|E-Mehari": 6
, "Peugeot|Partner Electric": 5
, "Citroën|C-Zero": 4
, "Jaguar|I-Pace": 2
, "Citroën|Berlingo Electric": 2
, "Volkswagen|e-up!": 1
});

db.insert(db.countries.ES, "2018-07", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosjuliotur.asp, https://www.km77.com/mercado/espana/2018/datosjuliott.asp",
{ "Renault": 12288
, "Seat": 9963
, "Peugeot": 8228
, "Nissan": 7952
, "Audi": 7428
, "Fiat": 7272
, "Toyota": 6830
, "Ford": 6746
, "Hyundai": 6508
, "Kia": 5944
, "Citroën": 5895
, "Opel": 5726
, "Dacia": 5302
, "Volkswagen": 4238
, "Mercedes-Benz": 3919
, "BMW": 3362
, "Škoda": 2760
, "Jeep": 2130
, "Volvo": 1843
, "Mazda": 1721
, "Mitsubishi": 1131
, "Mini": 975
, "Alfa Romeo": 942
, "Land Rover": 872
, "Lexus": 687
, "Honda": 636
, "Subaru": 440
, "Smart": 426
, "Jaguar": 418
, "Suzuki": 406
, "Porsche": 286
, "SsangYong": 281
, "DS Automobiles": 259
, "Infiniti": 138
, "Maserati": 27
, "Tesla": 14
, "other": 227
});

db.insert(db.countries.ES, "2018-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/7",
{ "Renault|ZOE": 106
, "Nissan|Leaf": 85
, "Volkswagen|e-Golf": 64
, "BMW|i3 BEV": 42
, "Smart|Fortwo electric drive": 34
, "Smart|Forfour electric drive": 31
, "Hyundai|Ioniq Electric": 11
, "Tesla|Model S": 10
, "Kia|Soul EV": 10
, "Nissan|e-NV200": 9
, "Tesla|Model X": 6
, "Citroën|Berlingo Electric": 6
, "Peugeot|iOn": 3
, "Citroën|C-Zero": 3
, "Jaguar|I-Pace": 1
, "Citroën|E-Mehari": 1
});

db.insert(db.countries.ES, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosagostotur.asp, https://www.km77.com/mercado/espana/2018/datosagostott.asp",
{ "Renault": 9516
, "Kia": 9448
, "Fiat": 7403
, "Seat": 6478
, "Nissan": 6151
, "Hyundai": 5853
, "Peugeot": 5696
, "Toyota": 5408
, "Opel": 5079
, "Audi": 4986
, "Ford": 4593
, "Citroën": 4535
, "Dacia": 4216
, "Mercedes-Benz": 3195
, "BMW": 3033
, "Volkswagen": 2759
, "Jeep": 2261
, "Škoda": 2086
, "Mazda": 1875
, "Mitsubishi": 1396
, "Land Rover": 1115
, "Alfa Romeo": 776
, "Jaguar": 758
, "Volvo": 714
, "Honda": 664
, "Subaru": 616
, "Mini": 614
, "Suzuki": 533
, "Lexus": 474
, "SsangYong": 442
, "Smart": 369
, "Porsche": 304
, "DS Automobiles": 192
, "Infiniti": 150
, "Maserati": 20
, "Tesla": 14
, "other": 270
});

db.insert(db.countries.ES, "2018-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/8",
{ "BMW|i3 BEV": 79
, "Nissan|Leaf": 61
, "Renault|ZOE": 39
, "Volkswagen|e-Golf": 34
, "Hyundai|Ioniq Electric": 25
, "Smart|Forfour electric drive": 16
, "Smart|Fortwo electric drive": 12
, "Tesla|Model X": 9
, "Citroën|C-Zero": 7
, "Kia|Soul EV": 6
, "Jaguar|I-Pace": 6
, "Tesla|Model S": 5
, "Citroën|Berlingo Electric": 4
, "Peugeot|iOn": 3
, "Opel|Ampera-e": 3
, "Nissan|e-NV200": 3
, "Hyundai|Kona Electric": 2
, "Volkswagen|e-up!": 1
, "Peugeot|Partner Electric": 1
, "Citroën|E-Mehari": 1
});

db.insert(db.countries.ES, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosseptiembretur.asp, https://www.km77.com/mercado/espana/2018/datosseptiembrett.asp",
{ "Peugeot": 6213
, "Toyota": 4779
, "Kia": 4386
, "Opel": 4114
, "Volkswagen": 3968
, "Citroën": 3941
, "Ford": 3831
, "Hyundai": 3611
, "BMW": 3581
, "Renault": 3559
, "Mercedes-Benz": 3211
, "Dacia": 2743
, "Seat": 2391
, "Nissan": 2234
, "Audi": 1498
, "Mazda": 1489
, "Škoda": 1389
, "Volvo": 1387
, "Fiat": 1314
, "Mini": 983
, "Jeep": 981
, "Mitsubishi": 779
, "Lexus": 490
, "Honda": 473
, "Smart": 318
, "Land Rover": 293
, "Jaguar": 259
, "Suzuki": 248
, "DS Automobiles": 236
, "Alfa Romeo": 128
, "Subaru": 107
, "Infiniti": 87
, "SsangYong": 75
, "Porsche": 42
, "Tesla": 37
, "Maserati": 22
, "other": 300
});

db.insert(db.countries.ES, "2018-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/9",
{ "Nissan|Leaf": 138
, "BMW|i3 BEV": 103
, "Smart|Fortwo electric drive": 53
, "Smart|Forfour electric drive": 41
, "Hyundai|Kona Electric": 38
, "Renault|ZOE": 37
, "Tesla|Model X": 21
, "Tesla|Model S": 19
, "Volkswagen|e-Golf": 17
, "Hyundai|Ioniq Electric": 15
, "Jaguar|I-Pace": 10
, "Nissan|e-NV200": 9
, "Peugeot|Partner Electric": 6
, "Citroën|Berlingo Electric": 5
, "Kia|Soul EV": 4
, "Citroën|E-Mehari": 1
, "Citroën|C-Zero": 1
});

db.insert(db.countries.ES, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosoctubretur.asp, https://www.km77.com/mercado/espana/2018/datosoctubrett.asp",
{ "Peugeot": 7841
, "Volkswagen": 5943
, "Toyota": 5702
, "Renault": 5169
, "Opel": 4981
, "Hyundai": 4782
, "Ford": 4729
, "Mercedes-Benz": 4624
, "Citroën": 4571
, "Kia": 4538
, "Dacia": 4491
, "BMW": 4001
, "Nissan": 3536
, "Seat": 3203
, "Fiat": 2745
, "Škoda": 1895
, "Audi": 1851
, "Mazda": 1558
, "Volvo": 1534
, "Jeep": 1158
, "Mitsubishi": 1031
, "Mini": 884
, "Lexus": 647
, "Suzuki": 544
, "Honda": 454
, "Smart": 447
, "Land Rover": 392
, "DS Automobiles": 325
, "Jaguar": 233
, "Alfa Romeo": 222
, "Infiniti": 152
, "Subaru": 147
, "SsangYong": 138
, "Porsche": 63
, "Maserati": 26
, "Tesla": 20
, "other": 409
});

db.insert(db.countries.ES, "2018-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/10",
{ "Nissan|Leaf": 149
, "Renault|ZOE": 111
, "Smart|Fortwo electric drive": 48
, "BMW|i3 BEV": 46
, "Smart|Forfour electric drive": 38
, "Hyundai|Kona Electric": 34
, "Volkswagen|e-Golf": 33
, "Jaguar|I-Pace": 24
, "Hyundai|Ioniq Electric": 23
, "Kia|Soul EV": 21
, "Nissan|e-NV200": 20
, "Tesla|Model S": 13
, "Peugeot|Partner Electric": 13
, "Tesla|Model X": 7
, "Citroën|Berlingo Electric": 6
, "Citroën|C-Zero": 3
, "Peugeot|iOn": 1
, "Opel|Ampera-e": 1
});

db.insert(db.countries.ES, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosnoviembretur.asp, https://www.km77.com/mercado/espana/2018/datosnoviembrett.asp",
{ "Peugeot": 7666
, "Volkswagen": 6865
, "Renault": 5724
, "Toyota": 5528
, "Opel": 5262
, "Citroën": 5023
, "Hyundai": 4753
, "Kia": 4606
, "Ford": 4589
, "Mercedes-Benz": 4231
, "Dacia": 4059
, "Nissan": 3812
, "Seat": 3789
, "BMW": 3182
, "Audi": 2266
, "Fiat": 2087
, "Škoda": 2027
, "Mazda": 1765
, "Volvo": 1559
, "Jeep": 1544
, "Mitsubishi": 1016
, "Mini": 942
, "Honda": 631
, "Lexus": 592
, "Suzuki": 567
, "Smart": 544
, "Land Rover": 352
, "DS Automobiles": 280
, "Alfa Romeo": 251
, "SsangYong": 200
, "Jaguar": 195
, "Infiniti": 137
, "Subaru": 116
, "Porsche": 44
, "Maserati": 23
, "Tesla": 21
, "other": 524
});

db.insert(db.countries.ES, "2018-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/11",
{ "Renault|ZOE": 237
, "Nissan|Leaf": 182
, "Smart|Fortwo electric drive": 59
, "BMW|i3 BEV": 52
, "Smart|Forfour electric drive": 37
, "Hyundai|Kona Electric": 28
, "Hyundai|Ioniq Electric": 26
, "Volkswagen|e-Golf": 24
, "Nissan|e-NV200": 21
, "Jaguar|I-Pace": 13
, "Tesla|Model X": 11
, "Tesla|Model S": 10
, "Kia|Soul EV": 5
, "Opel|Ampera-e": 4
, "Peugeot|iOn": 1
, "Citroën|Berlingo Electric": 1
});

db.insert(db.countries.ES, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2018/datosdiciembretur.asp, https://www.km77.com/mercado/espana/2018/datosdiciembrett.asp",
{ "Peugeot": 8401
, "Renault": 6878
, "Seat": 6553
, "Hyundai": 6248
, "Citroën": 5337
, "Opel": 5256
, "BMW": 5194
, "Nissan": 4804
, "Dacia": 4577
, "Ford": 4477
, "Toyota": 4463
, "Mercedes-Benz": 4426
, "Audi": 3772
, "Kia": 3524
, "Volkswagen": 2755
, "Volvo": 2244
, "Škoda": 2174
, "Fiat": 1888
, "Mazda": 1843
, "Jeep": 1449
, "Mini": 1403
, "Mitsubishi": 925
, "Smart": 871
, "Suzuki": 837
, "Honda": 771
, "DS Automobiles": 503
, "Lexus": 452
, "Land Rover": 384
, "Alfa Romeo": 292
, "Porsche": 275
, "SsangYong": 183
, "Jaguar": 180
, "Infiniti": 141
, "Subaru": 78
, "Tesla": 33
, "Maserati": 19
, "other": 621
});

db.insert(db.countries.ES, "2018-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2018/12",
{ "Smart|Forfour electric drive": 340
, "Renault|ZOE": 295
, "Smart|Fortwo electric drive": 254
, "Nissan|Leaf": 214
, "Hyundai|Kona Electric": 122
, "BMW|i3 BEV": 49
, "Volkswagen|e-Golf": 41
, "Hyundai|Ioniq Electric": 21
, "Tesla|Model X": 17
, "Tesla|Model S": 16
, "Nissan|e-NV200": 11
, "Kia|Soul EV": 5
, "Citroën|C-Zero": 5
, "Citroën|Berlingo Electric": 5
, "Jaguar|I-Pace": 4
, "Peugeot|iOn": 1
, "Peugeot|Partner Electric": 1
, "Opel|Ampera-e": 1
});

db.insert(db.countries.ES, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosenerotur.asp, https://www.km77.com/mercado/espana/2019/datosenerott.asp",
{ "Seat": 9004
, "Peugeot": 7541
, "Volkswagen": 7211
, "Toyota": 6074
, "Opel": 5667
, "Renault": 5468
, "Dacia": 4927
, "Citroën": 4871
, "Hyundai": 4370
, "Audi": 4125
, "Mercedes-Benz": 4035
, "Ford": 3928
, "Nissan": 3769
, "Kia": 3752
, "Fiat": 3399
, "BMW": 3180
, "Škoda": 2013
, "Mazda": 1560
, "Jeep": 1449
, "Mitsubishi": 1187
, "Volvo": 799
, "Mini": 784
, "Land Rover": 578
, "Lexus": 560
, "Honda": 549
, "Suzuki": 518
, "Alfa Romeo": 448
, "Smart": 367
, "Jaguar": 327
, "DS Automobiles": 277
, "Subaru": 200
, "SsangYong": 192
, "Infiniti": 130
, "Porsche": 120
, "Maserati": 19
, "Tesla": 15
, "other": 754
});

db.insert(db.countries.ES, "2019-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/1",
{ "Nissan|Leaf": 151
, "Hyundai|Kona Electric": 127
, "BMW|i3 BEV": 67
, "Renault|ZOE": 56
, "Smart|Fortwo electric drive": 50
, "Smart|Forfour electric drive": 34
, "Citroën|Berlingo Electric": 33
, "Volkswagen|e-Golf": 32
, "Citroën|C-Zero": 20
, "Jaguar|I-Pace": 19
, "Hyundai|Ioniq Electric": 18
, "Nissan|e-NV200": 11
, "Tesla|Model X": 7
, "Tesla|Model S": 7
, "Peugeot|Partner Electric": 6
, "Kia|Soul EV": 3
, "Peugeot|iOn": 2
, "Tesla|Model 3": 1
});

db.insert(db.countries.ES, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosfebrerotur.asp, https://www.km77.com/mercado/espana/2019/datosfebrerott.asp",
{ "Peugeot": 8602
, "Volkswagen": 7132
, "Renault": 7041
, "Opel": 6523
, "Nissan": 5631
, "Citroën": 5582
, "Fiat": 5045
, "Toyota": 4998
, "Kia": 4799
, "Audi": 4726
, "Mercedes-Benz": 4414
, "Ford": 4302
, "Dacia": 4190
, "Hyundai": 3867
, "Seat": 3622
, "BMW": 3387
, "Škoda": 1952
, "Jeep": 1580
, "Mazda": 1541
, "Volvo": 1216
, "Mitsubishi": 1077
, "Mini": 763
, "Honda": 684
, "Lexus": 543
, "Suzuki": 539
, "Land Rover": 406
, "Smart": 344
, "Alfa Romeo": 335
, "Subaru": 251
, "Jaguar": 243
, "SsangYong": 226
, "DS Automobiles": 223
, "Tesla": 211
, "Infiniti": 175
, "Porsche": 79
, "Maserati": 17
, "other": 862
});

db.insert(db.countries.ES, "2019-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/2",
{ "Tesla|Model 3": 200
, "Nissan|Leaf": 134
, "Hyundai|Kona Electric": 93
, "Smart|Forfour electric drive": 84
, "Renault|ZOE": 84
, "Smart|Fortwo electric drive": 62
, "BMW|i3 BEV": 54
, "Volkswagen|e-Golf": 48
, "Kia|Niro EV": 33
, "Jaguar|I-Pace": 27
, "Nissan|e-NV200": 13
, "Audi|e-tron": 9
, "Hyundai|Ioniq Electric": 8
, "Tesla|Model S": 7
, "Tesla|Model X": 5
, "Peugeot|iOn": 4
, "Citroën|C-Zero": 4
, "Peugeot|Partner Electric": 3
, "Citroën|E-Mehari": 2
, "Citroën|Berlingo Electric": 2
, "Volkswagen|e-up!": 1
, "Kia|Soul EV": 1
});

db.insert(db.countries.ES, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosmarzotur.asp, https://www.km77.com/mercado/espana/2019/datosmarzott.asp",
{ "Renault": 10225
, "Peugeot": 9595
, "Volkswagen": 8598
, "Citroën": 7638
, "Opel": 7125
, "Nissan": 6875
, "Toyota": 6091
, "Kia": 5758
, "Ford": 5732
, "Fiat": 5708
, "BMW": 5448
, "Audi": 5184
, "Hyundai": 4639
, "Dacia": 4285
, "Mercedes-Benz": 4275
, "Seat": 3666
, "Škoda": 2124
, "Jeep": 2088
, "Mazda": 1821
, "Mini": 1568
, "Volvo": 1548
, "Mitsubishi": 1395
, "Honda": 953
, "Suzuki": 833
, "Lexus": 711
, "Land Rover": 507
, "Alfa Romeo": 437
, "SsangYong": 425
, "Tesla": 414
, "Smart": 399
, "DS Automobiles": 357
, "Jaguar": 306
, "Porsche": 240
, "Subaru": 189
, "Infiniti": 78
, "Maserati": 18
, "other": 981
});

db.insert(db.countries.ES, "2019-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/3",
{ "Tesla|Model 3": 396
, "Nissan|Leaf": 276
, "BMW|i3 BEV": 118
, "Volkswagen|e-Golf": 105
, "Hyundai|Kona Electric": 86
, "Smart|Forfour electric drive": 64
, "Audi|e-tron": 62
, "Renault|ZOE": 56
, "Smart|Fortwo electric drive": 50
, "Kia|Niro EV": 32
, "Nissan|e-NV200": 20
, "Jaguar|I-Pace": 20
, "Tesla|Model X": 11
, "Tesla|Model S": 7
, "Hyundai|Ioniq Electric": 7
, "Kia|Soul EV": 4
, "Peugeot|Partner Electric": 3
, "Peugeot|iOn": 2
, "Volkswagen|e-up!": 1
, "Citroën|E-Mehari": 1
, "Citroën|C-Zero": 1
});

db.insert(db.countries.ES, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosabriltur.asp, https://www.km77.com/mercado/espana/2019/datosabriltt.asp",
{ "Renault": 9904
, "Peugeot": 9461
, "Volkswagen": 8961
, "Hyundai": 7050
, "Citroën": 6442
, "Toyota": 6297
, "Opel": 6076
, "Ford": 5908
, "Mercedes-Benz": 5515
, "Audi": 4969
, "Kia": 4802
, "Dacia": 4695
, "Seat": 4291
, "BMW": 3932
, "Fiat": 3805
, "Nissan": 3611
, "Škoda": 3069
, "Mazda": 1852
, "Jeep": 1772
, "Mitsubishi": 1579
, "Volvo": 1230
, "Mini": 1020
, "Lexus": 744
, "Land Rover": 634
, "Suzuki": 579
, "Honda": 542
, "Smart": 522
, "SsangYong": 397
, "DS Automobiles": 397
, "Jaguar": 388
, "Alfa Romeo": 303
, "Porsche": 228
, "Subaru": 172
, "Infiniti": 153
, "Tesla": 76
, "Maserati": 31
, "other": 1075
});

db.insert(db.countries.ES, "2019-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/4",
{ "Nissan|Leaf": 127
, "Renault|ZOE": 82
, "Hyundai|Kona Electric": 79
, "BMW|i3 BEV": 70
, "Tesla|Model 3": 51
, "Smart|Forfour electric drive": 36
, "Volkswagen|e-Golf": 32
, "Smart|Fortwo electric drive": 30
, "Kia|Niro EV": 30
, "Nissan|e-NV200": 26
, "Hyundai|Ioniq Electric": 19
, "Tesla|Model S": 14
, "Audi|e-tron": 14
, "Tesla|Model X": 11
, "Jaguar|I-Pace": 6
, "Kia|Soul EV": 5
, "Peugeot|Partner Electric": 4
, "Volkswagen|e-up!": 3
, "Peugeot|iOn": 3
, "Citroën|E-Mehari": 3
, "Citroën|Berlingo Electric": 2
, "Citroën|C-Zero": 1
});

db.insert(db.countries.ES, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosmayotur.asp, https://www.km77.com/mercado/espana/2019/datosmayott.asp",
{ "Peugeot": 9728
, "Renault": 8849
, "Volkswagen": 8749
, "Opel": 8071
, "Toyota": 7849
, "Citroën": 7058
, "Fiat": 6137
, "Hyundai": 5760
, "Mercedes-Benz": 5744
, "Dacia": 5441
, "BMW": 5354
, "Nissan": 5170
, "Audi": 5085
, "Kia": 5024
, "Seat": 4913
, "Ford": 4683
, "Škoda": 2719
, "Mazda": 1933
, "Jeep": 1840
, "Volvo": 1224
, "Mitsubishi": 1129
, "Mini": 1106
, "Lexus": 812
, "Honda": 615
, "Suzuki": 610
, "Land Rover": 606
, "Smart": 500
, "DS Automobiles": 393
, "Alfa Romeo": 329
, "SsangYong": 305
, "Jaguar": 302
, "Porsche": 236
, "Subaru": 234
, "Infiniti": 165
, "Tesla": 152
, "Maserati": 23
, "other": 1194
});

db.insert(db.countries.ES, "2019-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/5",
{ "Nissan|Leaf": 206
, "Tesla|Model 3": 122
, "Renault|ZOE": 115
, "Smart|Fortwo electric drive": 100
, "Nissan|e-NV200": 95
, "Hyundai|Kona Electric": 85
, "BMW|i3 BEV": 65
, "Smart|Forfour electric drive": 50
, "Volkswagen|e-Golf": 38
, "Kia|Niro EV": 33
, "Jaguar|I-Pace": 22
, "Tesla|Model X": 16
, "Hyundai|Ioniq Electric": 16
, "Tesla|Model S": 14
, "Audi|e-tron": 6
, "Citroën|C-Zero": 4
, "Peugeot|iOn": 3
, "Volkswagen|e-up!": 2
, "Kia|Soul EV": 2
, "Peugeot|Partner Electric": 1
});

db.insert(db.countries.ES, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosjuniotur.asp, https://www.km77.com/mercado/espana/2019/datosjuniott.asp",
{ "Volkswagen": 10873
, "Renault": 10644
, "Peugeot": 10266
, "Opel": 9022
, "Citroën": 7545
, "Toyota": 6680
, "Seat": 6118
, "Fiat": 5716
, "Kia": 5681
, "Dacia": 5632
, "Hyundai": 5349
, "Audi": 4969
, "Ford": 4887
, "Mercedes-Benz": 4870
, "BMW": 4297
, "Nissan": 4193
, "Škoda": 3181
, "Mazda": 1940
, "Jeep": 1688
, "Volvo": 1616
, "Mini": 1230
, "Mitsubishi": 1078
, "Suzuki": 1055
, "Smart": 738
, "Lexus": 655
, "Honda": 643
, "DS Automobiles": 633
, "Land Rover": 508
, "Alfa Romeo": 403
, "Jaguar": 360
, "Tesla": 352
, "SsangYong": 269
, "Subaru": 237
, "Porsche": 214
, "Infiniti": 88
, "Maserati": 26
, "other": 1308
});

db.insert(db.countries.ES, "2019-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/6",
{ "Tesla|Model 3": 281
, "Renault|ZOE": 158
, "Nissan|Leaf": 129
, "Hyundai|Kona Electric": 124
, "BMW|i3 BEV": 101
, "Smart|Forfour electric drive": 67
, "Volkswagen|e-Golf": 60
, "Smart|Fortwo electric drive": 53
, "Kia|Niro EV": 41
, "Tesla|Model S": 39
, "Tesla|Model X": 32
, "Audi|e-tron": 22
, "Mercedes-Benz|EQC": 17
, "Hyundai|Ioniq Electric": 17
, "Jaguar|I-Pace": 16
, "Nissan|e-NV200": 10
, "Kia|Soul EV": 8
, "Citroën|C-Zero": 6
, "Volkswagen|e-up!": 2
, "Citroën|Berlingo Electric": 2
, "Peugeot|iOn": 1
});

db.insert(db.countries.ES, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosjuliotur.asp, https://www.km77.com/mercado/espana/2019/datosjuliott.asp",
{ "Peugeot": 8276
, "Volkswagen": 8063
, "Opel": 7443
, "Hyundai": 7249
, "Renault": 6762
, "Toyota": 6264
, "Citroën": 6241
, "Seat": 5751
, "Dacia": 5518
, "Fiat": 5466
, "Ford": 5342
, "Kia": 5070
, "Nissan": 4935
, "Audi": 4682
, "Mercedes-Benz": 4454
, "BMW": 3481
, "Škoda": 2808
, "Jeep": 2125
, "Mazda": 1747
, "Volvo": 1473
, "Mitsubishi": 1232
, "Mini": 952
, "Lexus": 831
, "Suzuki": 785
, "Honda": 717
, "Land Rover": 583
, "DS Automobiles": 355
, "Smart": 342
, "Jaguar": 326
, "Alfa Romeo": 285
, "SsangYong": 266
, "Porsche": 235
, "Subaru": 207
, "Tesla": 127
, "Infiniti": 95
, "Maserati": 25
, "other": 1412
});

db.insert(db.countries.ES, "2019-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/7",
{ "Renault|ZOE": 123
, "Hyundai|Kona Electric": 91
, "Tesla|Model 3": 87
, "Nissan|Leaf": 75
, "BMW|i3 BEV": 68
, "Volkswagen|e-Golf": 61
, "Kia|Niro EV": 46
, "Smart|Forfour electric drive": 36
, "Smart|Fortwo electric drive": 28
, "Hyundai|Ioniq Electric": 22
, "Nissan|e-NV200": 21
, "Tesla|Model X": 20
, "Tesla|Model S": 20
, "Jaguar|I-Pace": 19
, "Kia|Soul EV": 15
, "Audi|e-tron": 13
, "Citroën|E-Mehari": 5
, "Citroën|C-Zero": 5
, "Mercedes-Benz|EQC": 3
, "Volkswagen|e-up!": 2
, "Peugeot|iOn": 1
, "Peugeot|Partner Electric": 1
, "Citroën|Berlingo Electric": 1
});

db.insert(db.countries.ES, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosagostotur.asp, https://www.km77.com/mercado/espana/2019/datosagostott.asp",
{ "Volkswagen": 5524
, "Peugeot": 5473
, "Toyota": 4665
, "Dacia": 4411
, "Renault": 4263
, "Opel": 3965
, "Hyundai": 3962
, "Kia": 3667
, "Citroën": 3635
, "Audi": 3232
, "Mercedes-Benz": 2936
, "Nissan": 2881
, "Ford": 2810
, "BMW": 2635
, "Fiat": 2199
, "Seat": 1987
, "Mitsubishi": 1969
, "Škoda": 1962
, "Jeep": 1832
, "Mazda": 1408
, "Suzuki": 780
, "Volvo": 713
, "Honda": 691
, "Lexus": 630
, "Mini": 602
, "Land Rover": 550
, "Smart": 378
, "Jaguar": 306
, "SsangYong": 279
, "Alfa Romeo": 194
, "DS Automobiles": 184
, "Porsche": 169
, "Subaru": 135
, "Tesla": 99
, "Infiniti": 73
, "Maserati": 20
, "other": 1536
});

db.insert(db.countries.ES, "2019-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/8",
{ "Renault|ZOE": 70
, "Tesla|Model 3": 63
, "Volkswagen|e-Golf": 56
, "BMW|i3 BEV": 51
, "Hyundai|Kona Electric": 48
, "Nissan|Leaf": 37
, "Kia|Niro EV": 37
, "Smart|Forfour electric drive": 23
, "Smart|Fortwo electric drive": 22
, "Tesla|Model X": 19
, "Tesla|Model S": 17
, "Nissan|e-NV200": 13
, "Hyundai|Ioniq Electric": 9
, "Mercedes-Benz|EQC": 7
, "Audi|e-tron": 7
, "Jaguar|I-Pace": 6
, "Peugeot|Partner Electric": 3
, "Volkswagen|e-up!": 2
, "Kia|Soul EV": 1
, "Citroën|C-Zero": 1
});

db.insert(db.countries.ES, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosseptiembretur.asp, https://www.km77.com/mercado/espana/2019/datosseptiembrett.asp",
{ "Renault": 6828
, "Volkswagen": 6422
, "Peugeot": 6127
, "Toyota": 5032
, "Hyundai": 4307
, "Kia": 4126
, "Ford": 4112
, "Citroën": 4035
, "Opel": 3874
, "Mercedes-Benz": 3506
, "Nissan": 3292
, "BMW": 3267
, "Seat": 3250
, "Dacia": 2926
, "Audi": 2879
, "Fiat": 2110
, "Mazda": 1903
, "Mini": 1853
, "Škoda": 1681
, "Volvo": 1338
, "Jeep": 1025
, "Mitsubishi": 552
, "Lexus": 551
, "Honda": 477
, "Suzuki": 445
, "Land Rover": 387
, "Tesla": 261
, "Alfa Romeo": 256
, "Smart": 239
, "DS Automobiles": 229
, "Porsche": 220
, "Subaru": 151
, "Jaguar": 119
, "SsangYong": 100
, "Infiniti": 73
, "Maserati": 19
, "other": 1655
});

db.insert(db.countries.ES, "2019-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/9",
{ "Tesla|Model 3": 228
, "Volkswagen|e-Golf": 131
, "Nissan|Leaf": 105
, "Renault|ZOE": 52
, "BMW|i3 BEV": 48
, "Kia|Niro EV": 47
, "Smart|Fortwo electric drive": 41
, "Hyundai|Kona Electric": 39
, "Smart|Forfour electric drive": 25
, "Tesla|Model X": 19
, "Tesla|Model S": 14
, "Hyundai|Ioniq Electric": 11
, "Kia|Soul EV": 10
, "Nissan|e-NV200": 7
, "Audi|e-tron": 7
, "Mercedes-Benz|EQC": 5
, "Jaguar|I-Pace": 5
, "Citroën|C-Zero": 4
, "Volkswagen|e-up!": 2
, "Peugeot|iOn": 2
, "Peugeot|Partner Electric": 1
});

db.insert(db.countries.ES, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosoctubretur.asp, https://www.km77.com/mercado/espana/2019/datosoctubrett.asp",
{ "Volkswagen": 7739
, "Peugeot": 7692
, "Toyota": 5816
, "Kia": 5482
, "Renault": 5481
, "Hyundai": 5062
, "Ford": 4700
, "Dacia": 4563
, "Citroën": 4524
, "Mercedes-Benz": 4141
, "Opel": 4126
, "BMW": 3910
, "Seat": 3678
, "Nissan": 3636
, "Audi": 3317
, "Škoda": 2219
, "Fiat": 2183
, "Mazda": 2152
, "Mini": 1623
, "Volvo": 1546
, "Jeep": 1000
, "Lexus": 886
, "Mitsubishi": 778
, "Land Rover": 697
, "Honda": 567
, "DS Automobiles": 430
, "Suzuki": 390
, "Alfa Romeo": 345
, "Porsche": 307
, "Jaguar": 238
, "Smart": 188
, "Subaru": 156
, "SsangYong": 124
, "Infiniti": 65
, "Tesla": 40
, "Maserati": 9
, "other": 1756
});

db.insert(db.countries.ES, "2019-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/10",
{ "Volkswagen|e-Golf": 160
, "Renault|ZOE": 151
, "Hyundai|Kona Electric": 90
, "Nissan|Leaf": 82
, "BMW|i3 BEV": 75
, "Kia|Niro EV": 45
, "Smart|Fortwo electric drive": 40
, "Seat|Mii Electric": 30
, "Hyundai|Ioniq Electric": 28
, "Tesla|Model 3": 26
, "Smart|Forfour electric drive": 24
, "Nissan|e-NV200": 19
, "Audi|e-tron": 12
, "Tesla|Model X": 8
, "Jaguar|I-Pace": 8
, "DS Automobiles|DS 3 Crossback E-Tense": 7
, "Tesla|Model S": 6
, "Kia|Soul EV": 6
, "Peugeot|iOn": 4
, "Mercedes-Benz|EQC": 4
, "Volkswagen|e-up!": 2
, "Citroën|C-Zero": 2
, "Peugeot|Partner Electric": 1
, "Citroën|Berlingo Electric": 1
});

db.insert(db.countries.ES, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosnoviembretur.asp, https://www.km77.com/mercado/espana/2019/datosnoviembrett.asp",
{ "Volkswagen": 6898
, "Peugeot": 6869
, "Toyota": 6588
, "Kia": 5803
, "Hyundai": 5049
, "Ford": 4875
, "Renault": 4865
, "Dacia": 4547
, "Citroën": 4253
, "Mercedes-Benz": 4172
, "Opel": 3848
, "BMW": 3802
, "Seat": 3688
, "Nissan": 3589
, "Audi": 3326
, "Mazda": 2587
, "Škoda": 2319
, "Fiat": 2282
, "Volvo": 1661
, "Jeep": 1027
, "Lexus": 985
, "Mini": 920
, "Mitsubishi": 789
, "Suzuki": 528
, "Land Rover": 508
, "Honda": 440
, "DS Automobiles": 338
, "Smart": 288
, "Porsche": 270
, "Alfa Romeo": 264
, "Subaru": 255
, "Jaguar": 254
, "SsangYong": 220
, "Tesla": 87
, "Infiniti": 52
, "Maserati": 15
, "other": 1864
});

db.insert(db.countries.ES, "2019-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/11",
{ "Smart|Forfour electric drive": 150
, "BMW|i3 BEV": 118
, "Nissan|Leaf": 88
, "Volkswagen|e-Golf": 83
, "Hyundai|Kona Electric": 77
, "Tesla|Model 3": 69
, "Renault|ZOE": 66
, "Smart|Fortwo electric drive": 59
, "Nissan|e-NV200": 18
, "DS Automobiles|DS 3 Crossback E-Tense": 16
, "Tesla|Model X": 11
, "Audi|e-tron": 9
, "Volkswagen|e-up!": 8
, "Jaguar|I-Pace": 8
, "Tesla|Model S": 7
, "Hyundai|Ioniq Electric": 7
, "Mercedes-Benz|EQC": 6
, "Kia|Niro EV": 3
, "Peugeot|iOn": 2
, "Kia|Soul EV": 2
, "Peugeot|Partner Electric": 1
, "Citroën|C-Zero": 1
});

db.insert(db.countries.ES, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2019/datosdiciembretur.asp, https://www.km77.com/mercado/espana/2019/datosdiciembrett.asp",
{ "Seat": 8769
, "Volkswagen": 8590
, "Peugeot": 8354
, "Hyundai": 6102
, "Renault": 6090
, "Mercedes-Benz": 5657
, "Kia": 5556
, "Ford": 5536
, "Citroën": 5357
, "Toyota": 5345
, "Audi": 4636
, "Dacia": 4255
, "BMW": 4194
, "Nissan": 3978
, "Opel": 3365
, "Škoda": 3341
, "Fiat": 3066
, "Mazda": 2717
, "Volvo": 2244
, "Mini": 1143
, "Jeep": 1119
, "Suzuki": 998
, "Mitsubishi": 774
, "Lexus": 770
, "Honda": 732
, "DS Automobiles": 602
, "Smart": 420
, "Land Rover": 414
, "Porsche": 317
, "Alfa Romeo": 307
, "Subaru": 284
, "SsangYong": 255
, "Tesla": 216
, "Jaguar": 172
, "Infiniti": 59
, "Maserati": 8
, "other": 1975
});

db.insert(db.countries.ES, "2019-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2019/12",
{ "Smart|Forfour electric drive": 173
, "Tesla|Model 3": 164
, "Smart|Fortwo electric drive": 148
, "Volkswagen|e-Golf": 136
, "Nissan|Leaf": 87
, "BMW|i3 BEV": 74
, "Hyundai|Kona Electric": 65
, "Renault|ZOE": 37
, "Tesla|Model X": 29
, "Nissan|e-NV200": 24
, "Tesla|Model S": 23
, "Hyundai|Ioniq Electric": 14
, "Jaguar|I-Pace": 10
, "Mercedes-Benz|EQC": 5
, "Audi|e-tron": 4
, "Volkswagen|e-up!": 2
, "Citroën|C-Zero": 2
, "Citroën|Berlingo Electric": 2
, "Peugeot|Partner Electric": 1
, "Kia|Niro EV": 1
});

db.insert(db.countries.ES, "2020-01", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosenerotur.asp, https://www.km77.com/mercado/espana/2020/datosenerott.asp",
{ "Seat": 8142
, "Peugeot": 6874
, "Volkswagen": 6706
, "Toyota": 6426
, "Renault": 5044
, "Citroën": 4685
, "Audi": 4435
, "Hyundai": 4414
, "Opel": 4384
, "Mercedes-Benz": 4278
, "Kia": 3956
, "Dacia": 3932
, "Nissan": 3785
, "BMW": 3451
, "Ford": 2982
, "Fiat": 2495
, "Škoda": 2055
, "Mazda": 1048
, "Mini": 1024
, "Lexus": 882
, "Jeep": 859
, "Volvo": 819
, "Mitsubishi": 783
, "Land Rover": 618
, "DS Automobiles": 419
, "Suzuki": 359
, "Honda": 302
, "Alfa Romeo": 265
, "Subaru": 222
, "Jaguar": 198
, "Porsche": 148
, "SsangYong": 142
, "Smart": 142
, "Infiniti": 39
, "Tesla": 32
, "Maserati": 11
, "other": 2065
});

db.insert(db.countries.ES, "2020-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/1",
{ "Renault|ZOE": 397
, "Peugeot|e-208": 231
, "Nissan|Leaf": 141
, "Smart|Fortwo electric drive": 117
, "Hyundai|Kona Electric": 116
, "Seat|Mii Electric": 100
, "DS Automobiles|DS 3 Crossback E-Tense": 84
, "Kia|Niro EV": 68
, "BMW|i3 BEV": 66
, "Audi|e-tron": 56
, "Volkswagen|e-Golf": 45
, "Hyundai|Ioniq Electric": 24
, "Smart|Forfour electric drive": 23
, "Kia|Soul EV": 23
, "Tesla|Model 3": 18
, "Nissan|e-NV200": 18
, "Volkswagen|e-up!": 17
, "Opel|Corsa-e": 16
, "Škoda|Citigo-e": 11
, "Mercedes-Benz|EQC": 10
, "Tesla|Model X": 9
, "Citroën|C-Zero": 8
, "Tesla|Model S": 5
, "Peugeot|Partner Electric": 4
, "Jaguar|I-Pace": 4
, "Peugeot|iOn": 3
, "Citroën|Berlingo Electric": 3
});

db.insert(db.countries.ES, "2020-02", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosfebrerotur.asp, https://www.km77.com/mercado/espana/2020/datosfebrerott.asp",
{ "Peugeot": 7812
, "Volkswagen": 6939
, "Renault": 6290
, "Toyota": 6083
, "Kia": 5954
, "Audi": 4839
, "Opel": 4748
, "Nissan": 4342
, "Seat": 4275
, "Citroën": 4270
, "Fiat": 4191
, "Hyundai": 3869
, "BMW": 3828
, "Mercedes-Benz": 3669
, "Ford": 3386
, "Dacia": 2755
, "Škoda": 2674
, "Mazda": 1730
, "Volvo": 1259
, "Jeep": 1049
, "Mini": 928
, "Mitsubishi": 842
, "Lexus": 708
, "Land Rover": 629
, "Suzuki": 476
, "Honda": 437
, "DS Automobiles": 380
, "Alfa Romeo": 295
, "Porsche": 216
, "Jaguar": 171
, "Subaru": 161
, "SsangYong": 136
, "Tesla": 123
, "Smart": 102
, "Maserati": 8
, "Infiniti": 6
, "other": 2211
});

db.insert(db.countries.ES, "2020-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/2",
{ "Renault|ZOE": 317
, "Peugeot|e-208": 227
, "Tesla|Model 3": 111
, "Opel|Corsa-e": 95
, "Nissan|Leaf": 92
, "Volkswagen|e-Golf": 81
, "Volkswagen|e-up!": 77
, "Seat|Mii Electric": 74
, "Smart|Fortwo electric drive": 57
, "BMW|i3 BEV": 55
, "Audi|e-tron": 51
, "Smart|Forfour electric drive": 44
, "Kia|Niro EV": 42
, "Hyundai|Kona Electric": 34
, "Mercedes-Benz|EQC": 24
, "Citroën|C-Zero": 24
, "Peugeot|e-2008": 20
, "Škoda|Citigo-e": 19
, "Kia|Soul EV": 19
, "DS Automobiles|DS 3 Crossback E-Tense": 17
, "Porsche|Taycan": 16
, "Nissan|e-NV200": 16
, "Hyundai|Ioniq Electric": 11
, "Tesla|Model X": 7
, "Jaguar|I-Pace": 7
, "Peugeot|iOn": 6
, "Tesla|Model S": 5
, "Peugeot|Partner Electric": 5
, "Citroën|Berlingo Electric": 1
});

db.insert(db.countries.ES, "2020-03", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosmarzotur.asp, https://www.km77.com/mercado/espana/2020/datosmarzott.asp",
{ "Seat": 6281
, "Volkswagen": 2790
, "Renault": 2761
, "Hyundai": 2467
, "Kia": 2280
, "Mercedes-Benz": 2073
, "Peugeot": 2063
, "Nissan": 1868
, "Citroën": 1673
, "Fiat": 1257
, "Audi": 1224
, "Dacia": 1220
, "Toyota": 1217
, "BMW": 1101
, "Ford": 1010
, "Opel": 1002
, "Škoda": 685
, "Volvo": 536
, "Jeep": 491
, "Mazda": 404
, "Lexus": 378
, "Land Rover": 310
, "Mini": 277
, "Mitsubishi": 264
, "Tesla": 260
, "Suzuki": 209
, "SsangYong": 166
, "Honda": 166
, "DS Automobiles": 144
, "Porsche": 115
, "Alfa Romeo": 111
, "Subaru": 91
, "Jaguar": 84
, "Smart": 58
, "Maserati": 3
, "Infiniti": 3
, "other": 2277
});

db.insert(db.countries.ES, "2020-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/3",
{ "Tesla|Model 3": 222
, "Renault|ZOE": 95
, "Nissan|Leaf": 77
, "Seat|Mii Electric": 43
, "Hyundai|Kona Electric": 41
, "Smart|Fortwo electric drive": 33
, "Peugeot|e-208": 27
, "Smart|Forfour electric drive": 25
, "Tesla|Model S": 21
, "Mercedes-Benz|EQC": 19
, "Tesla|Model X": 17
, "Volkswagen|e-Golf": 15
, "Porsche|Taycan": 15
, "Kia|Niro EV": 14
, "BMW|i3 BEV": 11
, "Volkswagen|e-up!": 10
, "Nissan|e-NV200": 9
, "Opel|Corsa-e": 6
, "Hyundai|Ioniq Electric": 6
, "Citroën|C-Zero": 6
, "Škoda|Citigo-e": 5
, "Peugeot|e-2008": 5
, "Audi|e-tron": 5
, "Kia|Soul EV": 4
, "Jaguar|I-Pace": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Peugeot|Partner Electric": 1
, "Citroën|Berlingo Electric": 1
});

db.insert(db.countries.ES, "2020-04", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosabriltur.asp, https://www.km77.com/mercado/espana/2020/datosabriltt.asp",
{ "Opel": 1052
, "Citroën": 871
, "Peugeot": 354
, "Toyota": 339
, "Ford": 248
, "BMW": 147
, "Fiat": 123
, "Škoda": 109
, "Mercedes-Benz": 97
, "Hyundai": 89
, "Land Rover": 77
, "Dacia": 70
, "Volkswagen": 61
, "Renault": 59
, "DS Automobiles": 59
, "Nissan": 44
, "Jeep": 44
, "Smart": 37
, "Kia": 31
, "Tesla": 26
, "Audi": 25
, "Porsche": 24
, "Seat": 22
, "Alfa Romeo": 21
, "Volvo": 20
, "Mini": 19
, "Suzuki": 15
, "Mitsubishi": 12
, "Subaru": 9
, "Lexus": 6
, "Honda": 6
, "Jaguar": 5
, "Mazda": 4
, "SsangYong": 3
, "other": 2280
});

db.insert(db.countries.ES, "2020-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/4",
{ "Smart|Forfour electric drive": 31
, "Tesla|Model 3": 20
, "Smart|Fortwo electric drive": 6
, "Renault|ZOE": 6
, "Porsche|Taycan": 4
, "Tesla|Model X": 3
, "Tesla|Model S": 3
, "Mercedes-Benz|EQC": 3
, "Nissan|Leaf": 2
, "BMW|i3 BEV": 2
, "Peugeot|e-208": 1
, "Opel|Corsa-e": 1
, "Nissan|e-NV200": 1
, "Jaguar|I-Pace": 1
, "Audi|e-tron": 1
});

db.insert(db.countries.ES, "2020-05", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosmayotur.asp, https://www.km77.com/mercado/espana/2020/datosmayott.asp",
{ "Peugeot": 2881
, "Volkswagen": 2721
, "Renault": 2459
, "Audi": 2330
, "Toyota": 2282
, "Dacia": 2260
, "BMW": 1932
, "Mercedes-Benz": 1702
, "Citroën": 1673
, "Ford": 1625
, "Hyundai": 1353
, "Kia": 1236
, "Fiat": 1159
, "Seat": 1152
, "Nissan": 1105
, "Opel": 943
, "Škoda": 742
, "Volvo": 637
, "Mazda": 485
, "Mini": 385
, "Jeep": 310
, "Land Rover": 297
, "Lexus": 279
, "DS Automobiles": 172
, "Mitsubishi": 162
, "Suzuki": 156
, "Honda": 149
, "Porsche": 138
, "Alfa Romeo": 88
, "Jaguar": 72
, "SsangYong": 59
, "Subaru": 53
, "Tesla": 50
, "Smart": 20
, "Maserati": 1
, "other": 2327
});

db.insert(db.countries.ES, "2020-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/5",
{ "Peugeot|e-2008": 50
, "Renault|ZOE": 45
, "Tesla|Model 3": 36
, "Nissan|Leaf": 34
, "Volkswagen|e-Golf": 22
, "BMW|i3 BEV": 21
, "Volkswagen|e-up!": 15
, "Peugeot|e-208": 15
, "Porsche|Taycan": 14
, "Seat|Mii Electric": 13
, "Smart|Fortwo electric drive": 11
, "Tesla|Model X": 9
, "Smart|Forfour electric drive": 9
, "Nissan|e-NV200": 9
, "Opel|Corsa-e": 8
, "Kia|Niro EV": 8
, "Hyundai|Kona Electric": 6
, "Tesla|Model S": 5
, "Mercedes-Benz|EQC": 5
, "Škoda|Citigo-e": 4
, "Hyundai|Ioniq Electric": 3
, "Kia|Soul EV": 2
, "Jaguar|I-Pace": 2
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Peugeot|Partner Electric": 1
});

db.insert(db.countries.ES, "2020-06", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosjuniotur.asp, https://www.km77.com/mercado/espana/2020/datosjuniott.asp",
{ "Volkswagen": 7774
, "Peugeot": 6697
, "Renault": 6311
, "Toyota": 5339
, "Citroën": 4546
, "Hyundai": 4244
, "Kia": 4226
, "Mercedes-Benz": 4104
, "Audi": 3883
, "Dacia": 3611
, "Ford": 3343
, "BMW": 2965
, "Fiat": 2952
, "Seat": 2726
, "Nissan": 2726
, "Opel": 2700
, "Škoda": 2277
, "Volvo": 1861
, "Mazda": 1080
, "Jeep": 884
, "Mini": 790
, "Lexus": 594
, "Land Rover": 572
, "Suzuki": 553
, "Mitsubishi": 413
, "Honda": 370
, "DS Automobiles": 365
, "Alfa Romeo": 245
, "Porsche": 235
, "Jaguar": 159
, "SsangYong": 156
, "Subaru": 123
, "Smart": 63
, "Tesla": 62
, "Maserati": 9
, "other": 2458
});

db.insert(db.countries.ES, "2020-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/6",
{ "Renault|ZOE": 118
, "Peugeot|e-2008": 71
, "Volkswagen|e-Golf": 52
, "Peugeot|e-208": 45
, "Hyundai|Kona Electric": 43
, "BMW|i3 BEV": 42
, "Kia|Niro EV": 37
, "Smart|Forfour electric drive": 32
, "Tesla|Model 3": 31
, "Smart|Fortwo electric drive": 31
, "Seat|Mii Electric": 31
, "Opel|Corsa-e": 31
, "Nissan|Leaf": 29
, "Volkswagen|e-up!": 26
, "Porsche|Taycan": 22
, "Tesla|Model X": 17
, "Tesla|Model S": 15
, "Audi|e-tron": 14
, "Kia|Soul EV": 11
, "DS Automobiles|DS 3 Crossback E-Tense": 11
, "Nissan|e-NV200": 10
, "Mercedes-Benz|EQC": 9
, "Škoda|Citigo-e": 5
, "Hyundai|Ioniq Electric": 5
, "Honda|e": 5
, "Peugeot|Partner Electric": 2
, "Citroën|Berlingo Electric": 2
, "Peugeot|iOn": 1
, "Jaguar|I-Pace": 1
});

db.insert(db.countries.ES, "2020-07", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosjuliotur.asp, https://www.km77.com/mercado/espana/2020/datosjuliott.asp",
{ "Volkswagen": 9608
, "Peugeot": 9144
, "Renault": 8708
, "Toyota": 8382
, "Hyundai": 6753
, "Kia": 6388
, "Citroën": 6110
, "Mercedes-Benz": 5915
, "Ford": 5704
, "Dacia": 5154
, "BMW": 5022
, "Audi": 4910
, "Seat": 4297
, "Nissan": 4128
, "Fiat": 4119
, "Opel": 3989
, "Škoda": 2847
, "Volvo": 2228
, "Mazda": 2155
, "Jeep": 1454
, "Mini": 1081
, "Lexus": 858
, "Mitsubishi": 751
, "Land Rover": 679
, "Honda": 625
, "Suzuki": 599
, "DS Automobiles": 452
, "Porsche": 303
, "Alfa Romeo": 240
, "SsangYong": 217
, "Jaguar": 194
, "Subaru": 184
, "Smart": 84
, "Infiniti": 24
, "Maserati": 19
, "Tesla": 9
, "other": 2597
});

db.insert(db.countries.ES, "2020-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/7",
{ "Peugeot|e-208": 269
, "Seat|Mii Electric": 175
, "Renault|ZOE": 163
, "Kia|Niro EV": 124
, "Peugeot|e-2008": 117
, "Hyundai|Kona Electric": 110
, "Volkswagen|e-up!": 74
, "Volkswagen|e-Golf": 72
, "Smart|Fortwo electric drive": 56
, "Opel|Corsa-e": 50
, "Nissan|Leaf": 50
, "BMW|i3 BEV": 41
, "Hyundai|Ioniq Electric": 40
, "Smart|Forfour electric drive": 33
, "Audi|e-tron": 29
, "Škoda|Citigo-e": 24
, "Honda|e": 21
, "Mercedes-Benz|EQC": 19
, "Kia|Soul EV": 18
, "Porsche|Taycan": 16
, "DS Automobiles|DS 3 Crossback E-Tense": 12
, "Nissan|e-NV200": 10
, "Jaguar|I-Pace": 9
, "Tesla|Model X": 5
, "Tesla|Model 3": 3
, "Peugeot|iOn": 2
, "Tesla|Model S": 1
, "Citroën|Berlingo Electric": 1
});

db.insert(db.countries.ES, "2020-08", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosagostotur.asp, https://www.km77.com/mercado/espana/2020/datosagostott.asp",
{ "Volkswagen": 5388
, "Renault": 4731
, "Toyota": 4725
, "Kia": 4626
, "Peugeot": 4584
, "Hyundai": 3910
, "Dacia": 3765
, "BMW": 3127
, "Nissan": 2803
, "Citroën": 2802
, "Audi": 2595
, "Mercedes-Benz": 2530
, "Ford": 2468
, "Fiat": 2398
, "Opel": 2293
, "Škoda": 2141
, "Seat": 1871
, "Mazda": 1246
, "Jeep": 1078
, "Volvo": 911
, "Mini": 568
, "Lexus": 511
, "Land Rover": 498
, "Suzuki": 463
, "Mitsubishi": 388
, "Honda": 318
, "SsangYong": 244
, "Alfa Romeo": 237
, "DS Automobiles": 229
, "Tesla": 158
, "Jaguar": 158
, "Porsche": 156
, "Subaru": 108
, "Smart": 46
, "Maserati": 7
, "Chevrolet": 1
, "other": 2673
});

db.insert(db.countries.ES, "2020-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/8",
{ "Renault|ZOE": 161
, "Tesla|Model 3": 152
, "Hyundai|Kona Electric": 126
, "Seat|Mii Electric": 106
, "Peugeot|e-208": 77
, "Kia|Niro EV": 68
, "Mazda|MX-30": 58
, "Volkswagen|e-up!": 49
, "Volkswagen|e-Golf": 49
, "Peugeot|e-2008": 40
, "Hyundai|Ioniq Electric": 36
, "Nissan|Leaf": 33
, "Škoda|Citigo-e": 31
, "Smart|Fortwo electric drive": 28
, "Opel|Corsa-e": 24
, "BMW|i3 BEV": 21
, "Smart|Forfour electric drive": 18
, "Audi|e-tron": 18
, "Porsche|Taycan": 17
, "Kia|Soul EV": 12
, "Mercedes-Benz|EQC": 6
, "Tesla|Model S": 5
, "Nissan|e-NV200": 5
, "Jaguar|I-Pace": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 5
, "Peugeot|iOn": 4
, "Peugeot|Partner Electric": 2
, "Citroën|ë-C4": 2
, "Tesla|Model X": 1
, "Honda|e": 1
});

db.insert(db.countries.ES, "2020-09", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosseptiembretur.asp, https://www.km77.com/mercado/espana/2020/datosseptiembrett.asp",
{ "Volkswagen": 5713
, "Peugeot": 4865
, "Toyota": 4742
, "Kia": 4527
, "Renault": 4523
, "Hyundai": 4186
, "Mercedes-Benz": 3457
, "Citroën": 3380
, "Nissan": 3329
, "Ford": 3108
, "Dacia": 3059
, "BMW": 2843
, "Audi": 2791
, "Fiat": 2647
, "Opel": 2202
, "Seat": 1997
, "Škoda": 1855
, "Mazda": 1306
, "Volvo": 1263
, "Jeep": 1078
, "Mini": 675
, "Suzuki": 593
, "Lexus": 568
, "Honda": 550
, "Land Rover": 417
, "Mitsubishi": 405
, "Tesla": 326
, "DS Automobiles": 298
, "Alfa Romeo": 200
, "Porsche": 159
, "SsangYong": 146
, "Subaru": 143
, "Jaguar": 99
, "Smart": 81
, "Maserati": 22
, "other": 2803
});

db.insert(db.countries.ES, "2020-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/9",
{ "Tesla|Model 3": 253
, "Renault|ZOE": 251
, "Hyundai|Kona Electric": 190
, "Volkswagen|ID.3": 165
, "Nissan|Leaf": 118
, "Seat|Mii Electric": 116
, "Kia|Niro EV": 115
, "Volkswagen|e-Golf": 91
, "Volkswagen|e-up!": 77
, "Škoda|Citigo-e": 64
, "Peugeot|e-2008": 64
, "Peugeot|e-208": 57
, "BMW|i3 BEV": 46
, "Smart|Fortwo electric drive": 42
, "Mazda|MX-30": 39
, "Tesla|Model X": 37
, "Opel|Corsa-e": 35
, "Smart|Forfour electric drive": 34
, "Hyundai|Ioniq Electric": 25
, "Mercedes-Benz|EQC": 24
, "Kia|Soul EV": 22
, "Tesla|Model S": 20
, "Nissan|e-NV200": 20
, "Porsche|Taycan": 19
, "Audi|e-tron": 19
, "DS Automobiles|DS 3 Crossback E-Tense": 13
, "Mercedes-Benz|EQV": 11
, "Honda|e": 8
, "Jaguar|I-Pace": 7
, "Peugeot|iOn": 6
, "Peugeot|Partner Electric": 5
, "Citroën|ë-C4": 4
, "Cupra|el-Born": 1
});

db.insert(db.countries.ES, "2020-10", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosoctubretur.asp, https://www.km77.com/mercado/espana/2020/datosoctubrett.asp",
{ "Peugeot": 6073
, "Volkswagen": 5475
, "Toyota": 4838
, "Renault": 4613
, "Kia": 4300
, "Dacia": 4054
, "Hyundai": 3712
, "Citroën": 3655
, "Mercedes-Benz": 3567
, "BMW": 3485
, "Audi": 3404
, "Seat": 3263
, "Ford": 3008
, "Nissan": 2765
, "Škoda": 2255
, "Fiat": 2210
, "Opel": 2028
, "Mazda": 1360
, "Volvo": 1168
, "Jeep": 983
, "Mini": 982
, "Lexus": 674
, "DS Automobiles": 437
, "Suzuki": 434
, "Land Rover": 397
, "Mitsubishi": 352
, "Honda": 289
, "SsangYong": 232
, "Alfa Romeo": 227
, "Porsche": 199
, "Subaru": 167
, "Jaguar": 110
, "Smart": 80
, "Tesla": 38
, "Maserati": 15
, "other": 2924
});

db.insert(db.countries.ES, "2020-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/10",
{ "Hyundai|Kona Electric": 272
, "Renault|ZOE": 254
, "Peugeot|e-2008": 138
, "Volkswagen|ID.3": 133
, "Peugeot|e-208": 116
, "Seat|Mii Electric": 91
, "Nissan|Leaf": 81
, "Kia|Niro EV": 80
, "Opel|Corsa-e": 74
, "Volkswagen|e-Golf": 70
, "Smart|Fortwo electric drive": 54
, "Volkswagen|e-up!": 48
, "Škoda|Citigo-e": 43
, "Mazda|MX-30": 36
, "Smart|Forfour electric drive": 30
, "DS Automobiles|DS 3 Crossback E-Tense": 28
, "Audi|e-tron": 28
, "BMW|i3 BEV": 24
, "Tesla|Model 3": 23
, "Porsche|Taycan": 23
, "Jaguar|I-Pace": 13
, "Nissan|e-NV200": 12
, "Mercedes-Benz|EQC": 12
, "Kia|Soul EV": 12
, "Tesla|Model X": 9
, "Hyundai|Ioniq Electric": 8
, "Tesla|Model S": 6
, "Honda|e": 5
, "Peugeot|iOn": 4
, "Peugeot|Partner Electric": 2
, "Mercedes-Benz|EQV": 2
, "Citroën|Berlingo Electric": 2
});

db.insert(db.countries.ES, "2020-11", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosnoviembretur.asp, https://www.km77.com/mercado/espana/2020/datosnoviembrett.asp",
{ "Peugeot": 6068
, "Volkswagen": 5324
, "Toyota": 4903
, "Kia": 4730
, "Renault": 4706
, "Hyundai": 4593
, "Mercedes-Benz": 4224
, "Dacia": 4139
, "BMW": 3565
, "Citroën": 3460
, "Audi": 3091
, "Ford": 3072
, "Nissan": 2987
, "Seat": 2674
, "Opel": 2115
, "Fiat": 1939
, "Škoda": 1883
, "Mazda": 1494
, "Volvo": 1112
, "Jeep": 1067
, "Mini": 890
, "Lexus": 695
, "DS Automobiles": 564
, "Land Rover": 509
, "Suzuki": 401
, "Honda": 379
, "Mitsubishi": 331
, "Alfa Romeo": 276
, "Porsche": 213
, "SsangYong": 163
, "Jaguar": 158
, "Subaru": 115
, "Smart": 81
, "Tesla": 55
, "Maserati": 13
, "other": 3272
});

db.insert(db.countries.ES, "2020-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/11",
{ "Hyundai|Kona Electric": 277
, "Renault|ZOE": 196
, "Volkswagen|ID.3": 132
, "Kia|Niro EV": 106
, "Peugeot|e-208": 101
, "Mazda|MX-30": 98
, "Seat|Mii Electric": 96
, "Volkswagen|e-Golf": 92
, "Peugeot|e-2008": 89
, "Nissan|Leaf": 84
, "Mercedes-Benz|EQC": 81
, "Volkswagen|e-up!": 59
, "Smart|Fortwo electric drive": 52
, "Tesla|Model 3": 43
, "BMW|i3 BEV": 33
, "Škoda|Citigo-e": 30
, "Smart|Forfour electric drive": 29
, "Opel|Corsa-e": 29
, "Porsche|Taycan": 27
, "Mercedes-Benz|EQV": 25
, "Nissan|e-NV200": 23
, "DS Automobiles|DS 3 Crossback E-Tense": 18
, "Jaguar|I-Pace": 16
, "Hyundai|Ioniq Electric": 16
, "Kia|Soul EV": 15
, "Audi|e-tron": 15
, "Honda|e": 9
, "Citroën|ë-C4": 9
, "Tesla|Model S": 8
, "Tesla|Model X": 4
, "Cupra|el-Born": 4
, "Fiat|500e": 2
, "Renault|Twingo Z.E.": 1
, "Citroën|Berlingo Electric": 1
});

db.insert(db.countries.ES, "2020-12", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2020/datosdiciembretur.asp, https://www.km77.com/mercado/espana/2020/datosdiciembrett.asp",
{ "Volkswagen": 8377
, "Peugeot": 8283
, "Mercedes-Benz": 6758
, "Toyota": 6369
, "Renault": 5933
, "Hyundai": 5815
, "Citroën": 5393
, "Dacia": 5374
, "Kia": 5371
, "Nissan": 4880
, "Ford": 4822
, "BMW": 3763
, "Audi": 3760
, "Fiat": 3374
, "Škoda": 3144
, "Seat": 3109
, "Opel": 2769
, "Volvo": 2511
, "Mazda": 2481
, "Jeep": 1505
, "Lexus": 1221
, "DS Automobiles": 815
, "Honda": 671
, "Suzuki": 628
, "Land Rover": 593
, "Smart": 574
, "Alfa Romeo": 485
, "Mitsubishi": 472
, "Tesla": 326
, "Jaguar": 289
, "Porsche": 261
, "Subaru": 180
, "SsangYong": 129
, "Mini": 46
, "Maserati": 15
, "other": 3856
});

db.insert(db.countries.ES, "2020-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2020/12",
{ "Volkswagen|ID.3": 587
, "Hyundai|Kona Electric": 578
, "Renault|ZOE": 428
, "Smart|Forfour electric drive": 327
, "Tesla|Model 3": 290
, "Smart|Fortwo electric drive": 247
, "Mercedes-Benz|EQV": 222
, "Fiat|500e": 197
, "Nissan|Leaf": 139
, "Volkswagen|e-Golf": 119
, "Citroën|ë-C4": 111
, "Audi|e-tron": 110
, "Kia|Niro EV": 97
, "Mazda|MX-30": 87
, "Peugeot|e-208": 83
, "Jaguar|I-Pace": 61
, "Seat|Mii Electric": 60
, "Renault|Twingo Z.E.": 56
, "Peugeot|e-2008": 54
, "Honda|e": 52
, "BMW|i3 BEV": 38
, "Hyundai|Ioniq Electric": 34
, "Volkswagen|e-up!": 33
, "Opel|Corsa-e": 33
, "Škoda|Citigo-e": 26
, "Porsche|Taycan": 26
, "Kia|Soul EV": 26
, "Mercedes-Benz|EQC": 25
, "Tesla|Model X": 23
, "Nissan|e-NV200": 22
, "Tesla|Model S": 13
});

db.insert(db.countries.ES, "2021-01", db.dsTypes.AllCarsByBrand, "https://www.km77.com/mercado/espana/2021/datosenerotur.asp, https://www.km77.com/mercado/espana/2021/datosenerott.asp",
{ "Seat": 8142
, "Peugeot": 6874
, "Volkswagen": 6706
, "Toyota": 6426
, "Renault": 5044
, "Citroën": 4685
, "Audi": 4435
, "Hyundai": 4414
, "Opel": 4384
, "Mercedes-Benz": 4278
, "Kia": 3956
, "Dacia": 3932
, "Nissan": 3785
, "BMW": 3451
, "Ford": 2982
, "Fiat": 2495
, "Škoda": 2055
, "Mazda": 1048
, "Mini": 1024
, "Lexus": 882
, "Jeep": 859
, "Volvo": 819
, "Mitsubishi": 783
, "Land Rover": 618
, "DS Automobiles": 419
, "Suzuki": 359
, "Honda": 302
, "Alfa Romeo": 265
, "Subaru": 222
, "Jaguar": 198
, "Porsche": 148
, "SsangYong": 142
, "Smart": 142
, "Infiniti": 39
, "Tesla": 32
, "Maserati": 11
, "other": 674
});

db.insert(db.countries.ES, "2021-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/SP/Month/2021/1",
{ "Kia|Niro EV": 50
, "Peugeot|e-2008": 47
, "Tesla|Model 3": 39
, "Peugeot|e-208": 39
, "Nissan|Leaf": 34
, "Hyundai|Kona Electric": 34
, "Porsche|Taycan": 28
, "Opel|Corsa-e": 22
, "Seat|Mii Electric": 19
, "Smart|Forfour electric drive": 18
, "Volkswagen|e-up!": 16
, "Citroën|ë-C4": 15
, "Renault|ZOE": 14
, "Fiat|500e": 14
, "Volkswagen|ID.3": 12
, "Smart|Fortwo electric drive": 12
, "Kia|Soul EV": 10
, "Nissan|e-NV200": 9
, "BMW|i3 BEV": 9
, "Hyundai|Ioniq Electric": 7
, "Tesla|Model X": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 5
, "Tesla|Model S": 3
, "Opel|Mokka-e": 3
, "Mercedes-Benz|EQV": 3
, "Mercedes-Benz|EQC": 3
, "Audi|e-tron": 3
, "Renault|Twingo Z.E.": 2
, "Mercedes-Benz|eVito": 2
, "Jaguar|I-Pace": 2
, "Honda|e": 2
, "Volkswagen|e-Crafter": 1
, "Peugeot|Partner Electric": 1
, "Mercedes-Benz|eSprinter": 1
});
