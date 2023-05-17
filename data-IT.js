// Data sets for car sales in Italy

"use strict";

db.addCountry("IT", "Italy");

// http://www.unrae.it/dati-statistici/immatricolazioni

db.insert(db.countries.IT, "2020-01", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20gennaio%202020_UNRAE_marca_5e384c4443c01.pdf",
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
, "Alfa Romeo": 1598
, "Land Rover": 1377
, "Mazda": 1307
, "Honda": 1000
, "Smart": 682
, "Porsche": 630
, "DS Automobiles": 492
, "Lexus": 440
, "Mitsubishi": 399
, "Jaguar": 359
, "Subaru": 279
, "Maserati": 150
, "SsangYong": 109
, "Tesla": 64
, "other": 5534
});

db.insert(db.countries.IT, "2020-01", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/06%20gennaio%202020_%20UNRAE_Top%20ten%20per%20alimentazione_5e384af489aaa.pdf",
{ "Renault|Zoe": 411
, "Peugeot|e-208": 318
, "Volkswagen|e-up!": 215
, "Smart|Fortwo ED": 213
, "Hyundai|Kona Electric": 149
, "Volkswagen|e-Golf": 112
, "DS Automobiles|DS 3 Crossback E-Tense": 79
, "Nissan|Leaf": 66
, "Smart|Forfour ED": 65
, "Tesla|Model 3": 63
, "other": 252
});

db.insert(db.countries.IT, "2020-02", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20febbraio%202020_UNRAE%20marca_5e5d2590ca8f9.pdf",
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
, "Alfa Romeo": 1903
, "Mini": 1792
, "Volvo": 1409
, "Land Rover": 1160
, "Mazda": 1042
, "Honda": 759
, "DS Automobiles": 691
, "Porsche": 636
, "Mitsubishi": 559
, "Lexus": 557
, "Jaguar": 436
, "Smart": 333
, "Subaru": 273
, "Tesla": 258
, "Maserati": 152
, "SsangYong": 137
, "Infiniti": 2
, "other": 6448
});

db.insert(db.countries.IT, "2020-02", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/06%20febbraio%202020_UNRAE%20Top%2010%20alimentazione_5e5d243e7deff.pdf",
{ "Renault|Zoe": 387
, "Volkswagen|e-up!": 341
, "Peugeot|e-208": 287
, "Smart|Fortwo ED": 286
, "Tesla|Model 3": 236
, "Nissan|Leaf": 234
, "Volkswagen|e-Golf": 123
, "Mini|Cooper SE Electric": 123
, "Opel|Corsa-e": 117
, "DS Automobiles|DS 3 Crossback E-Tense": 72
, "other": 324
});

db.insert(db.countries.IT, "2020-03", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20marzo%202020_UNRAE%20marca_5e84a46dd200e.pdf",
{ "Fiat": 2794
, "Volkswagen": 2316
, "Ford": 1759
, "Renault": 1702
, "Kia": 1624
, "Mercedes-Benz": 1591
, "Peugeot": 1496
, "Dacia": 1215
, "Suzuki": 1208
, "Audi": 1208
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
, "Alfa Romeo": 271
, "Porsche": 216
, "Jaguar": 170
, "Smart": 165
, "Mazda": 147
, "Honda": 142
, "Mitsubishi": 118
, "Lexus": 92
, "Subaru": 87
, "DS Automobiles": 79
, "Maserati": 29
, "SsangYong": 17
, "Infiniti": 2
, "other": 713
});

db.insert(db.countries.IT, "2020-03", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/06%20marzo_UNRAE%20Top%2010%20alimentazione_5e84a144b5847.pdf",
{ "Tesla|Model 3": 358
, "Smart|Fortwo ED": 128
, "Volkswagen|e-up!": 70
, "Renault|Zoe": 55
, "Tesla|Model S": 38
, "Mini|Cooper SE Electric": 36
, "Peugeot|e-208": 35
, "Smart|Forfour ED": 34
, "Tesla|Model X": 28
, "Opel|Corsa-e": 27
, "other": 117
});

db.insert(db.countries.IT, "2020-04", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20aprile%202020_UNRAE%20marca_5eb0185bf2890.pdf",
{ "Fiat": 969
, "Peugeot": 477
, "Renault": 452
, "Jeep/Dodge": 395
, "Citroën": 272
, "Opel": 259
, "Ford": 222
, "Alfa Romeo": 147
, "Volkswagen": 138
, "Tesla": 104
, "BMW": 93
, "Audi": 73
, "Dacia": 69
, "Toyota": 52
, "Mercedes-Benz": 51
, "DS Automobiles": 51
, "Land Rover": 48
, "Škoda": 45
, "Hyundai": 37
, "Seat": 36
, "Suzuki": 23
, "Kia": 23
, "Nissan": 18
, "Honda": 16
, "Volvo": 13
, "Jaguar": 11
, "Porsche": 10
, "Subaru": 8
, "Mini": 8
, "Mazda": 7
, "Mitsubishi": 6
, "Lexus": 2
, "SsangYong": 1
, "Smart": 1
, "other": 142
});

db.insert(db.countries.IT, "2020-04", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/aprile%20Top%2010%20alimentazione_5eb017f9dcddb.pdf",
{ "Renault|Zoe": 366
, "Tesla|Model 3": 88
, "Tesla|Model S": 10
, "Opel|Corsa-e": 7
, "Tesla|Model X": 6
, "Peugeot|e-208": 6
, "Volkswagen|e-up!": 3
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Audi|Q8 e-tron": 2
, "other": 7
});

db.insert(db.countries.IT, "2020-05", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20maggio%202020_UNRAE%20marca_5ed50c192c549.pdf",
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
, "Alfa Romeo": 1172
, "Mini": 1167
, "Land Rover": 985
, "Mazda": 713
, "Porsche": 549
, "Honda": 389
, "Smart": 362
, "Lexus": 337
, "DS Automobiles": 331
, "Mitsubishi": 237
, "Jaguar": 216
, "Subaru": 173
, "Maserati": 88
, "Tesla": 80
, "SsangYong": 45
, "other": 2856
});

db.insert(db.countries.IT, "2020-05", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/maggio%20Top%2010%20alimentazione_5ed5061f56ab3.pdf",
{ "Renault|Zoe": 529
, "Smart|Fortwo ED": 308
, "Volkswagen|e-up!": 299
, "Opel|Corsa-e": 107
, "Peugeot|e-208": 102
, "Nissan|Leaf": 68
, "Tesla|Model 3": 53
, "Hyundai|Kona Electric": 51
, "Mini|Cooper SE Electric": 50
, "Smart|Forfour ED": 45
, "other": 204
});

db.insert(db.countries.IT, "2020-06", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20giugno%202020_UNRAE_marca_5efcb1f412df9.pdf",
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
, "Alfa Romeo": 1525
, "Land Rover": 1120
, "Mazda": 1021
, "Porsche": 693
, "Honda": 642
, "Lexus": 395
, "DS Automobiles": 384
, "Tesla": 382
, "Mitsubishi": 342
, "Smart": 317
, "Jaguar": 257
, "Subaru": 221
, "Maserati": 144
, "SsangYong": 118
, "Infiniti": 1
, "Chevrolet": 1
, "other": 4115
});

db.insert(db.countries.IT, "2020-06", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/giugno%202020_UNRAE_Top%2010%20alimentazione_5efc8ad723c0f.pdf",
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

db.insert(db.countries.IT, "2020-07", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20luglio%202020_UNRAE%20marca_5f281f933b3dd.pdf",
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
, "Alfa Romeo": 1724
, "Land Rover": 1214
, "Mazda": 951
, "Porsche": 846
, "Honda": 639
, "Lexus": 511
, "DS Automobiles": 480
, "Smart": 420
, "Mitsubishi": 369
, "Jaguar": 358
, "Subaru": 197
, "SsangYong": 157
, "Maserati": 129
, "Tesla": 52
, "Infiniti": 1
, "other": 4313
});

db.insert(db.countries.IT, "2020-07", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/06%20luglio%20Top%2010%20per%20alimentazione_5f280b700672d.pdf",
{ "Smart|Fortwo ED": 350
, "Renault|Zoe": 198
, "Opel|Corsa-e": 156
, "Peugeot|e-208": 142
, "Peugeot|e-2008": 104
, "Mini|Cooper SE Electric": 99
, "Volkswagen|e-up!": 85
, "Smart|Forfour ED": 70
, "Audi|Q8 e-tron": 68
, "Hyundai|Kona Electric": 45
, "other": 291
});

db.insert(db.countries.IT, "2020-08", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20agosto%202020%20UNRAE%20marca_5f4e4f3616265.pdf",
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
, "Alfa Romeo": 1326
, "Volvo": 1115
, "Mini": 934
, "Mazda": 722
, "Land Rover": 525
, "Honda": 411
, "Mitsubishi": 286
, "Porsche": 274
, "DS Automobiles": 259
, "Lexus": 236
, "Tesla": 195
, "Smart": 184
, "Jaguar": 155
, "SsangYong": 117
, "Subaru": 87
, "Maserati": 38
, "other": 2705
});

db.insert(db.countries.IT, "2020-08", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/agosto%20Top%2010%20per%20alimentazione_5f4e4e8147454.pdf",
{ "Renault|Zoe": 506
, "Volkswagen|e-up!": 201
, "Tesla|Model 3": 189
, "Hyundai|Kona Electric": 174
, "Opel|Corsa-e": 162
, "Smart|Fortwo ED": 158
, "Peugeot|e-208": 91
, "Nissan|Leaf": 60
, "Mini|Cooper SE Electric": 60
, "Volkswagen|e-Golf": 29
, "other": 247
});

db.insert(db.countries.IT, "2020-09", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20settembre%202020%20UNRAE%20marca_5f75eb60adc52.pdf",
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
, "Alfa Romeo": 2073
, "Mini": 2008
, "Seat": 1975
, "Volvo": 1766
, "Mazda": 1451
, "Land Rover": 1021
, "Honda": 1000
, "Tesla": 956
, "Mitsubishi": 593
, "Smart": 554
, "DS Automobiles": 499
, "Lexus": 389
, "Jaguar": 364
, "Porsche": 283
, "Subaru": 196
, "Maserati": 167
, "SsangYong": 111
, "Infiniti": 1
, "Chevrolet": 1
, "other": 5420
});

db.insert(db.countries.IT, "2020-09", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/settembre%20Top%2010%20per%20alimentazione_5f75debcb4b24.pdf",
{ "Tesla|Model 3": 880
, "Renault|Zoe": 676
, "Smart|Fortwo ED": 461
, "Nissan|Leaf": 297
, "Volkswagen|ID.3": 270
, "Hyundai|Kona Electric": 168
, "Volkswagen|e-up!": 167
, "Peugeot|e-208": 141
, "Mini|Cooper SE Electric": 108
, "Opel|Corsa-e": 100
, "other": 821
});

db.insert(db.countries.IT, "2020-10", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20ottobre%202020%20UNRAE%20marca_5fa01f87eab43.pdf",
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
, "Alfa Romeo": 1598
, "Land Rover": 1377
, "Mazda": 1307
, "Honda": 1000
, "Smart": 682
, "Porsche": 630
, "DS Automobiles": 492
, "Lexus": 440
, "Mitsubishi": 399
, "Jaguar": 359
, "Subaru": 279
, "Maserati": 150
, "SsangYong": 109
, "Tesla": 64
, "other": 5534
});

db.insert(db.countries.IT, "2020-10", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/06%20ottobre%202020%20UNRAE%20Top%2010%20per%20alimentazione_5fa01edbc205c.pdf",
{ "Smart|Fortwo ED": 571
, "Renault|Zoe": 304
, "Hyundai|Kona Electric": 258
, "Volkswagen|ID.3": 234
, "Volkswagen|e-up!": 198
, "Mini|Cooper SE Electric": 149
, "Opel|Corsa-e": 129
, "Smart|Forfour ED": 108
, "Peugeot|e-208": 100
, "Peugeot|e-2008": 97
, "other": 741
});

db.insert(db.countries.IT, "2020-11", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20novembre%202020%20UNRAE%20marca_5fc65f1a3041f.pdf",
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
, "Alfa Romeo": 1986
, "Volvo": 1515
, "Mazda": 888
, "Land Rover": 869
, "Smart": 728
, "Honda": 587
, "Porsche": 497
, "Jaguar": 382
, "Lexus": 358
, "DS Automobiles": 355
, "Tesla": 263
, "Mitsubishi": 217
, "Subaru": 204
, "Maserati": 180
, "SsangYong": 72
, "Chevrolet": 1
, "other": 4859
});

db.insert(db.countries.IT, "2020-11", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/novembre%20Top%2010%20per%20alimentazione_5fc64c8b18558.pdf",
{ "Volkswagen|e-up!": 657
, "Smart|Fortwo ED": 558
, "Renault|Zoe": 554
, "Fiat|500e": 513
, "Renault|Twingo Z.E.": 411
, "Tesla|Model 3": 243
, "Mini|Cooper SE Electric": 233
, "Peugeot|e-208": 223
, "Hyundai|Kona Electric": 216
, "Smart|Forfour ED": 170
, "other": 1032
});

db.insert(db.countries.IT, "2020-12", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20dicembre%202020%20UNRAE%20marca_5ff32f37137c5.pdf",
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
, "Alfa Romeo": 1664
, "Volvo": 1643
, "Mini": 1193
, "Tesla": 923
, "Land Rover": 674
, "Mazda": 606
, "Smart": 527
, "Porsche": 422
, "DS Automobiles": 391
, "Honda": 362
, "Lexus": 353
, "Jaguar": 231
, "Subaru": 220
, "Mitsubishi": 210
, "Maserati": 139
, "SsangYong": 79
, "other": 5393
});

db.insert(db.countries.IT, "2020-12", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/06%20dicembre%20Top%2010%20per%20alimentazione_5ff32ed50d06c.pdf",
{ "Fiat|500e": 1549
, "Renault|Zoe": 1153
, "Tesla|Model 3": 851
, "Renault|Twingo Z.E.": 683
, "Smart|Fortwo ED": 477
, "Volkswagen|ID.3": 449
, "Volkswagen|e-up!": 366
, "Hyundai|Kona Electric": 232
, "Opel|Corsa-e": 194
, "Nissan|Leaf": 177
, "other": 1124
});

db.insert(db.countries.IT, "2021-01", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20gennaio%202021%20UNRAE%20marca_6018231ee6bef.pdf",
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
, "Alfa Romeo": 935
, "Land Rover": 759
, "Porsche": 615
, "Lexus": 459
, "Honda": 457
, "Smart": 449
, "Mitsubishi": 327
, "DS Automobiles": 281
, "Jaguar": 173
, "Subaru": 148
, "Maserati": 141
, "SsangYong": 72
, "Tesla": 56
, "other": 4999
});

db.insert(db.countries.IT, "2021-01", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/gennaio%202021_%20UNRAE%20Top%20ten%20per%20alimentazione_601821e524cfc.pdf",
{ "Smart|Fortwo ED": 419
, "Fiat|500e": 419
, "Renault|Zoe": 255
, "Opel|Corsa-e": 216
, "Peugeot|e-208": 193
, "Renault|Twingo Z.E.": 129
, "Peugeot|e-2008": 128
, "Volkswagen|e-up!": 111
, "Hyundai|Kona Electric": 91
, "Citroën|ë-C4": 75
, "other": 458
});

db.insert(db.countries.IT, "2021-02", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20febbraio%202021%20UNRAE%20marca_603d11f4a7690.pdf",
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
, "Alfa Romeo": 865
, "Honda": 652
, "Smart": 601
, "Porsche": 545
, "Lexus": 492
, "Mitsubishi": 361
, "DS Automobiles": 361
, "Jaguar": 303
, "Tesla": 281
, "Subaru": 187
, "Maserati": 106
, "SsangYong": 71
, "other": 5076
});

db.insert(db.countries.IT, "2021-02", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/febbraio%20Top%2010%20per%20alimentazione_603cfea9edb94.pdf",
{ "Fiat|500e": 583
, "Smart|Fortwo ED": 545
, "Renault|Twingo Z.E.": 386
, "Renault|Zoe": 296
, "Tesla|Model 3": 278
, "Peugeot|e-208": 184
, "Peugeot|e-2008": 163
, "Opel|Corsa-e": 157
, "Nissan|Leaf": 142
, "Hyundai|Kona Electric": 134
, "other": 589
});

db.insert(db.countries.IT, "2021-03", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20marzo%202021%20UNRAE%20marca_6065db1d2665e.pdf",
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
, "Alfa Romeo": 1240
, "Smart": 847
, "Jaguar": 669
, "Porsche": 665
, "Honda": 547
, "Lexus": 490
, "DS Automobiles": 436
, "Mitsubishi": 380
, "Subaru": 281
, "Maserati": 227
, "SsangYong": 73
, "other": 6509
});

db.insert(db.countries.IT, "2021-03", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20marzo%202021%20UNRAE%20Top%2010%20per%20alimentazione_6065c0aa1a619.pdf",
{ "Tesla|Model 3": 1363
, "Fiat|500e": 1056
, "Smart|Fortwo ED": 759
, "Renault|Twingo Z.E.": 738
, "Renault|Zoe": 721
, "Peugeot|e-208": 381
, "Peugeot|e-2008": 294
, "Volkswagen|ID.3": 270
, "Hyundai|Kona Electric": 217
, "Nissan|Leaf": 216
, "other": 1347
});

db.insert(db.countries.IT, "2021-04", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20aprile%202021_60901084ac463.pdf",
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
, "Alfa Romeo": 970
, "Smart": 650
, "Honda": 620
, "Jaguar": 569
, "Porsche": 457
, "Mitsubishi": 412
, "DS Automobiles": 411
, "Lexus": 374
, "Subaru": 203
, "Maserati": 100
, "SsangYong": 53
, "Tesla": 22
, "other": 6465
});

db.insert(db.countries.IT, "2021-04", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20aprile%202021_60900cb9c02fa.pdf",
{ "Fiat|500e": 1062
, "Smart|Fortwo ED": 601
, "Renault|Twingo Z.E.": 528
, "Renault|Zoe": 421
, "Volkswagen|ID.4": 330
, "Peugeot|e-208": 308
, "Volkswagen|ID.3": 296
, "Opel|Corsa-e": 149
, "Peugeot|e-2008": 147
, "Nissan|Leaf": 139
, "other": 870
});

db.insert(db.countries.IT, "2021-05", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20maggio%202021_60b6212b07955.pdf",
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
, "Alfa Romeo": 1113
, "Mazda": 996
, "Smart": 700
, "Honda": 605
, "Porsche": 522
, "Mitsubishi": 499
, "Jaguar": 485
, "DS Automobiles": 444
, "Tesla": 426
, "Lexus": 371
, "Subaru": 217
, "Maserati": 148
, "SsangYong": 104
, "other": 6415
});

db.insert(db.countries.IT, "2021-05", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20maggio%202021_60b6173455395.pdf",
{ "Fiat|500e": 1030
, "Smart|Fortwo ED": 641
, "Renault|Twingo Z.E.": 513
, "Volkswagen|ID.3": 473
, "Tesla|Model 3": 425
, "Peugeot|e-208": 283
, "Renault|Zoe": 243
, "Nissan|Leaf": 167
, "Škoda|Enyaq": 157
, "Volkswagen|ID.4": 141
, "other": 1090
});

db.insert(db.countries.IT, "2021-06", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20giugno%202021_60dde84571934.pdf",
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
, "Alfa Romeo": 1096
, "Mazda": 1081
, "Tesla": 984
, "Land Rover": 966
, "Smart": 731
, "Honda": 529
, "Lexus": 504
, "DS Automobiles": 502
, "Porsche": 497
, "Jaguar": 438
, "Mitsubishi": 381
, "Subaru": 189
, "Maserati": 172
, "SsangYong": 113
, "other": 6125
});

db.insert(db.countries.IT, "2021-06", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20giugno%202021_60dde79684a99.pdf",
{ "Tesla|Model 3": 984
, "Fiat|500e": 955
, "Renault|Twingo Z.E.": 829
, "Dacia|Spring": 618
, "Smart|Fortwo ED": 615
, "Volkswagen|ID.3": 398
, "Renault|Zoe": 321
, "Peugeot|e-208": 282
, "Peugeot|e-2008": 239
, "Nissan|Leaf": 156
, "other": 1628
});

db.insert(db.countries.IT, "2021-07", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20luglio%202021_6107d28d4f202.pdf",
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
, "Alfa Romeo": 938
, "Land Rover": 898
, "Honda": 462
, "Porsche": 428
, "Smart": 402
, "DS Automobiles": 395
, "Jaguar": 368
, "Lexus": 339
, "Mitsubishi": 285
, "Subaru": 192
, "Maserati": 160
, "SsangYong": 57
, "Tesla": 9
, "other": 4844
});

db.insert(db.countries.IT, "2021-07", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20luglio%202021_6107ca5800fe2.pdf",
{ "Fiat|500e": 883
, "Renault|Twingo Z.E.": 629
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

db.insert(db.countries.IT, "2021-08", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20agosto%202021_612f55b15b1a1.pdf",
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
, "Alfa Romeo": 472
, "Land Rover": 395
, "Tesla": 308
, "Honda": 302
, "DS Automobiles": 257
, "Mitsubishi": 212
, "Smart": 171
, "Porsche": 145
, "Jaguar": 145
, "Lexus": 144
, "Subaru": 107
, "Maserati": 62
, "SsangYong": 47
, "other": 3015
});

db.insert(db.countries.IT, "2021-08", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20agosto%202021_612f55224438d.pdf",
{ "Fiat|500e": 578
, "Volkswagen|e-up!": 324
, "Tesla|Model 3": 308
, "Volkswagen|ID.3": 281
, "Renault|Zoe": 214
, "Renault|Twingo Z.E.": 196
, "Smart|Fortwo ED": 152
, "Volkswagen|ID.4": 135
, "Ford|Mustang Mach-E": 121
, "Mini|Cooper SE Electric": 91
, "other": 847
});

db.insert(db.countries.IT, "2021-09", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20settembre%202021_6156e1371a0e2.pdf",
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
, "Alfa Romeo": 939
, "Mini": 824
, "Honda": 656
, "Smart": 545
, "DS Automobiles": 423
, "Mitsubishi": 361
, "Lexus": 338
, "Jaguar": 315
, "Porsche": 236
, "Subaru": 176
, "Maserati": 135
, "SsangYong": 67
, "MG": 50
, "other": 4640
});

db.insert(db.countries.IT, "2021-09", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20settembre%202021_6156dc959e628.pdf",
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

db.insert(db.countries.IT, "2021-10", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20Ottobre%202021_61811fed657c0.pdf",
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
, "Alfa Romeo": 757
, "Honda": 704
, "Smart": 682
, "Porsche": 595
, "Lexus": 401
, "DS Automobiles": 401
, "Mitsubishi": 329
, "Subaru": 223
, "Jaguar": 190
, "MG": 140
, "Maserati": 126
, "Tesla": 89
, "SsangYong": 67
, "other": 4974
});

db.insert(db.countries.IT, "2021-10", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Ottobre%202021_618129e4bb290.pdf",
{ "Dacia|Spring": 1777
, "Fiat|500e": 1060
, "Smart|Fortwo ED": 621
, "Renault|Twingo Z.E.": 532
, "Renault|Zoe": 341
, "Peugeot|e-2008": 301
, "Volkswagen|ID.3": 266
, "Volkswagen|e-up!": 222
, "Peugeot|e-208": 173
, "Opel|Corsa-e": 165
, "other": 1676
});

db.insert(db.countries.IT, "2021-11", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20Novembre%202021_61a757558ab06.pdf",
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
, "Alfa Romeo": 954
, "Mazda": 873
, "Porsche": 669
, "Smart": 624
, "Land Rover": 583
, "Honda": 538
, "Lexus": 450
, "Tesla": 438
, "DS Automobiles": 378
, "MG": 256
, "Subaru": 222
, "Jaguar": 219
, "Mitsubishi": 213
, "Maserati": 121
, "SsangYong": 37
, "other": 5420
});

db.insert(db.countries.IT, "2021-11", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione%20Novembre%202021_61a7810980607.pdf",
{ "Fiat|500e": 946
, "Renault|Twingo Z.E.": 656
, "Volkswagen|e-up!": 570
, "Smart|Fortwo ED": 543
, "Dacia|Spring": 416
, "Volkswagen|ID.3": 354
, "Tesla|Model Y": 325
, "Peugeot|e-208": 265
, "Mini|Cooper SE Electric": 255
, "Volkswagen|ID.4": 222
, "other": 2406
});

db.insert(db.countries.IT, "2021-12", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca_Dicembre%202021_61d31b0a26b92.pdf",
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
, "Alfa Romeo": 973
, "Porsche": 867
, "Volvo": 802
, "Tesla": 633
, "Mazda": 538
, "DS Automobiles": 523
, "Cupra": 501
, "Land Rover": 487
, "Smart": 476
, "Lexus": 335
, "Honda": 321
, "Subaru": 251
, "MG": 250
, "Mitsubishi": 157
, "Maserati": 146
, "Jaguar": 141
, "SsangYong": 54
, "other": 3633
});

db.insert(db.countries.IT, "2021-12", db.dsTypes.ElectricCarsByModel, "http://www.unrae.it/files/07%20Top%2010%20per%20alimentazione_Dicembre%202021_61d31a534d7a8.pdf",
{ "Fiat|500e": 887
, "Dacia|Spring": 805
, "Renault|Twingo Z.E.": 519
, "Volkswagen|e-up!": 459
, "Smart|Fortwo ED": 440
, "Tesla|Model 3": 418
, "Volkswagen|ID.3": 260
, "Tesla|Model Y": 215
, "Peugeot|e-208": 184
, "Volkswagen|ID.4": 179
, "other": 1839
});

db.insert(db.countries.IT, "2022-01", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20Gennaio%202022_61f94c3262901.pdf",
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
, "Alfa Romeo": 696
, "Honda": 574
, "Land Rover": 566
, "DS Automobiles": 383
, "Cupra": 372
, "Lexus": 296
, "Smart": 266
, "MG": 266
, "Subaru": 159
, "Jaguar": 128
, "Maserati": 105
, "Mitsubishi": 93
, "SsangYong": 48
, "Tesla": 32
, "other": 5169
});

db.insert(db.countries.IT, "2022-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/1",
{ "Dacia|Spring": 656
, "Fiat|500e": 548
, "Renault|Twingo Z.E.": 298
, "Smart|Fortwo ED": 230
, "Renault|Zoe": 228
, "Peugeot|e-208": 178
, "Peugeot|e-2008": 159
, "Volkswagen|ID.3": 113
, "Opel|Corsa-e": 83
, "Ford|Mustang Mach-E": 71
, "Mini|Cooper SE Electric": 67
, "Hyundai|Kona Electric": 65
, "Porsche|Taycan": 65
, "Audi|Q4 e-tron": 60
, "Hyundai|Ioniq 5": 52
, "Volkswagen|ID.4": 52
, "Opel|Mokka-e": 48
, "BMW|i3 BEV": 45
, "Kia|Niro EV": 44
, "Volvo|C40 Recharge": 41
, "Smart|Forfour ED": 36
, "Škoda|Enyaq": 33
, "Audi|Q8 e-tron": 32
, "Volkswagen|e-up!": 32
, "BMW|iX3": 31
, "Citroën|ë-C4": 31
, "DS Automobiles|DS 3 Crossback E-Tense": 31
, "Mercedes-Benz|EQA": 31
, "Kia|EV6": 30
, "MG|ZS EV": 29
, "Nissan|Leaf": 29
, "Volvo|XC40 Recharge pure electric": 28
, "BMW|iX": 23
, "Tesla|Model 3": 21
, "Lexus|UX 300e": 19
, "Audi|e-tron GT": 14
, "MG|Marvel R": 14
, "Kia|Soul EV": 12
, "Mazda|MX-30": 12
, "Tesla|Model Y": 11
});

db.insert(db.countries.IT, "2022-02", db.dsTypes.AllCarsByBrand, "http://www.unrae.it/files/02%20Marca%20Febbraio%202022_621e27a7f3bbf.pdf",
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
, "Alfa Romeo": 640
, "DS Automobiles": 465
, "Cupra": 460
, "MG": 433
, "Land Rover": 409
, "Lexus": 382
, "Porsche": 349
, "Smart": 322
, "Tesla": 279
, "Mitsubishi": 196
, "Subaru": 172
, "Jaguar": 168
, "Maserati": 128
, "SsangYong": 50
, "other": 5800
});

db.insert(db.countries.IT, "2022-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/2",
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
, "Renault|Twingo Z.E.": 88
, "Mini|Cooper SE Electric": 80
, "Mercedes-Benz|EQA": 62
, "Dacia|Spring": 61
, "Hyundai|Ioniq 5": 58
, "Opel|Mokka-e": 58
, "Tesla|Model 3": 56
, "Ford|Mustang Mach-E": 55
, "Citroën|ë-C4": 54
, "BMW|i3 BEV": 53
, "Porsche|Taycan": 51
, "Toyota|Proace Electric": 43
, "Volvo|XC40 Recharge pure electric": 40
, "Opel|Corsa-e": 36
, "Škoda|Enyaq": 34
, "Kia|Niro EV": 30
, "Volvo|C40 Recharge": 26
, "Smart|Forfour ED": 25
, "Audi|Q8 e-tron": 23
, "Mercedes-Benz|EQB": 22
, "MG|ZS EV": 18
, "BMW|iX3": 17
, "BMW|iX": 16
, "Cupra|Born": 16
, "Volkswagen|e-up!": 16
, "Citroën|Berlingo Electric": 15
, "Mazda|MX-30": 15
, "Mercedes-Benz|EQC": 15
, "Kia|EV6": 13
, "MG|Marvel R": 13
, "Jaguar|I-Pace": 11
, "Peugeot|e-Rifter": 11
, "Audi|e-tron GT": 10
, "Kia|Soul EV": 7
, "DS Automobiles|DS 3 Crossback E-Tense": 2
, "Lexus|UX 300e": 1
});

db.insert(db.countries.IT, "2022-03", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Marzo%202022_6246de835759c.pdf",
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
, "Alfa Romeo": 813
, "Porsche": 738
, "DS Automobiles": 657
, "Honda": 609
, "MG": 542
, "Land Rover": 449
, "Lexus": 393
, "Smart": 373
, "Jaguar": 286
, "Mitsubishi": 203
, "Subaru": 156
, "Maserati": 133
, "SsangYong": 58
, "other": 5355
});

db.insert(db.countries.IT, "2022-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/3",
{ "Tesla|Model Y": 678
, "Dacia|Spring": 517
, "Fiat|500e": 495
, "Tesla|Model 3": 378
, "Smart|Fortwo ED": 314
, "Mini|Cooper SE Electric": 155
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
, "Volvo|XC40 Recharge pure electric": 54
, "Citroën|ë-C4": 52
, "BMW|i4": 51
, "Renault|Twingo Z.E.": 49
, "Audi|Q8 e-tron": 48
, "BMW|i3 BEV": 47
, "Porsche|Taycan": 46
, "Škoda|Enyaq": 41
, "Mercedes-Benz|EQB": 40
, "MG|ZS EV": 37
, "BMW|iX": 35
, "Toyota|Proace Electric": 33
, "Hyundai|Ioniq 5": 32
, "Opel|Mokka-e": 29
, "Volvo|C40 Recharge": 27
, "Cupra|Born": 25
, "DS Automobiles|DS 3 Crossback E-Tense": 23
, "Kia|EV6": 19
, "Volkswagen|e-up!": 18
, "Mercedes-Benz|EQS": 17
, "Mercedes-Benz|EQC": 14
, "Lexus|UX 300e": 13
, "BMW|iX3": 11
, "MG|Marvel R": 11
, "Kia|Soul EV": 10
, "Mazda|MX-30": 8
, "Audi|e-tron GT": 7
, "Citroën|Berlingo Electric": 6
, "Jaguar|I-Pace": 6
, "other": 40
});

db.insert(db.countries.IT, "2022-04", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Aprile%202022_626fd61c67f03.pdf",
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
, "Alfa Romeo": 932
, "Volvo": 920
, "Seat": 860
, "Mazda": 761
, "DS Automobiles": 525
, "MG": 524
, "Smart": 427
, "Porsche": 338
, "Jaguar": 255
, "Mitsubishi": 244
, "Lexus": 239
, "Subaru": 145
, "Maserati": 105
, "SsangYong": 38
, "Tesla": 27
, "other": 4389
});

db.insert(db.countries.IT, "2022-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/4",
{ "Fiat|500e": 497
, "Smart|Fortwo ED": 405
, "Dacia|Spring": 372
, "Renault|Zoe": 215
, "Volkswagen|ID.4": 95
, "Mini|Cooper SE Electric": 94
, "Volkswagen|ID.3": 93
, "Hyundai|Kona Electric": 92
, "BMW|i3 BEV": 83
, "Opel|Corsa-e": 83
, "Peugeot|e-208": 83
, "Renault|Twingo Z.E.": 66
, "Ford|Mustang Mach-E": 64
, "Škoda|Enyaq": 61
, "Audi|Q4 e-tron": 60
, "Mercedes-Benz|EQA": 53
, "Peugeot|e-2008": 41
, "Mercedes-Benz|EQB": 36
, "Porsche|Taycan": 34
, "Kia|EV6": 31
, "Volvo|C40 Recharge": 31
, "Audi|Q8 e-tron": 30
, "Cupra|Born": 28
, "Kia|Niro EV": 28
, "Volvo|XC40 Recharge pure electric": 27
, "Tesla|Model Y": 25
, "Nissan|Leaf": 24
, "Smart|Forfour ED": 22
, "BMW|iX": 21
, "BMW|i4": 20
, "Opel|Mokka-e": 20
, "Honda|e": 18
, "Toyota|Proace Electric": 18
, "Kia|Soul EV": 15
, "Mercedes-Benz|EQV": 15
, "Renault|Megane E-Tech": 15
, "Opel|Combo-e": 14
, "Hyundai|Ioniq 5": 13
, "Mazda|MX-30": 13
, "MG|Marvel R": 12
, "Volkswagen|ID.5": 11
, "Volkswagen|e-up!": 11
, "Citroën|ë-C4": 10
, "MG|ZS EV": 9
, "DS Automobiles|DS 3 Crossback E-Tense": 8
, "Mercedes-Benz|EQS": 6
, "Peugeot|e-Rifter": 6
, "BMW|iX3": 5
, "Jaguar|I-Pace": 5
, "other": 52
});

db.insert(db.countries.IT, "2022-05", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02_Marca%20Maggio%202022_629775401787e.pdf",
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
, "Alfa Romeo": 1159
, "Honda": 827
, "Land Rover": 738
, "Mazda": 678
, "DS Automobiles": 527
, "Porsche": 523
, "Smart": 476
, "Mitsubishi": 321
, "Lexus": 307
, "MG": 274
, "Jaguar": 255
, "Maserati": 135
, "Subaru": 99
, "SsangYong": 33
, "Tesla": 14
, "other": 6699
});

db.insert(db.countries.IT, "2022-05", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/5",
{ "Fiat|500e": 749
, "Smart|Fortwo ED": 450
, "Peugeot|e-208": 297
, "Renault|Twingo Z.E.": 275
, "Dacia|Spring": 269
, "Peugeot|e-2008": 219
, "Mini|Cooper SE Electric": 177
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
, "Volvo|C40 Recharge": 42
, "BMW|i3 BEV": 39
, "BMW|iX": 39
, "MG|Marvel R": 29
, "MG|ZS EV": 29
, "Mercedes-Benz|EQB": 28
, "Smart|Forfour ED": 26
, "Audi|Q8 e-tron": 22
, "Mercedes-Benz|EQE": 21
, "Volkswagen|ID.5": 21
, "Mazda|MX-30": 20
, "BMW|i4": 19
, "BMW|iX3": 19
, "MG|MG5 EV": 17
, "Lexus|UX 300e": 15
, "Tesla|Model Y": 14
, "Hyundai|Ioniq 5": 12
, "Aiways|U5": 11
, "Mercedes-Benz|EQS": 11
, "Peugeot|e-Traveller": 11
, "Citroën|ë-SpaceTourer": 10
, "Volvo|XC40 Recharge pure electric": 9
, "Peugeot|e-Rifter": 8
, "Toyota|Proace Electric": 8
, "Audi|e-tron GT": 7
, "Mercedes-Benz|EQC": 7
, "other": 46
});

db.insert(db.countries.IT, "2022-06", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02_Marca%20Giugno%202022_62befaffac56a.pdf",
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
, "Alfa Romeo": 1435
, "Tesla": 1143
, "Volvo": 1080
, "Mini": 1075
, "Land Rover": 804
, "Smart": 754
, "DS Automobiles": 653
, "MG": 619
, "Honda": 590
, "Porsche": 581
, "Mazda": 534
, "Maserati": 274
, "Jaguar": 207
, "Lexus": 187
, "Mitsubishi": 168
, "Subaru": 146
, "SsangYong": 30
, "other": 6616
});

db.insert(db.countries.IT, "2022-06", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/6",
{ "Fiat|500e": 781
, "Tesla|Model Y": 769
, "Smart|Fortwo ED": 723
, "Tesla|Model 3": 374
, "Renault|Twingo Z.E.": 271
, "Peugeot|e-208": 222
, "Renault|Zoe": 217
, "Renault|Megane E-Tech": 189
, "Peugeot|e-2008": 177
, "Volkswagen|ID.3": 170
, "Dacia|Spring": 165
, "Mercedes-Benz|EQA": 163
, "Škoda|Enyaq": 163
, "Mini|Cooper SE Electric": 140
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
, "Toyota|Proace Electric": 29
, "Audi|Q8 e-tron": 28
, "Honda|e": 27
, "DS Automobiles|DS 3 Crossback E-Tense": 26
, "Mazda|MX-30": 22
, "BMW|i4": 19
, "Kia|EV6": 18
, "Volvo|C40 Recharge": 17
, "Aiways|U5": 16
, "Mercedes-Benz|EQE": 15
, "MG|MG5 EV": 14
, "Jaguar|I-Pace": 13
, "Subaru|Solterra": 12
, "Hyundai|Ioniq 5": 11
, "BMW|iX3": 10
, "Peugeot|e-Rifter": 7
, "other": 87
});

db.insert(db.countries.IT, "2022-07", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02_Marca%20Luglio%202022_62e7d48f1cccf.pdf",
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
, "Alfa Romeo": 1446
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
, "DS Automobiles": 430
, "Mitsubishi": 394
, "Smart": 311
, "Maserati": 311
, "Jaguar": 180
, "Lexus": 142
, "Subaru": 115
, "Tesla": 37
, "SsangYong": 20
, "other": 5732
});

db.insert(db.countries.IT, "2022-07", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/7",
{ "Fiat|500e": 779
, "Smart|Fortwo ED": 304
, "Renault|Twingo Z.E.": 263
, "Renault|Megane E-Tech": 234
, "Peugeot|e-208": 188
, "Cupra|Born": 126
, "Peugeot|e-2008": 104
, "Mini|Cooper SE Electric": 98
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
, "Toyota|Proace Electric": 37
, "Mercedes-Benz|EQB": 34
, "BMW|i4": 32
, "Volkswagen|ID.5": 31
, "BMW|iX": 27
, "MG|ZS EV": 24
, "Kia|EV6": 22
, "Volkswagen|e-up!": 20
, "Volvo|C40 Recharge": 15
, "BMW|iX3": 14
, "Aiways|U5": 13
, "Mercedes-Benz|EQE": 13
, "Jaguar|I-Pace": 9
, "Mazda|MX-30": 7
, "Smart|Forfour ED": 7
, "Audi|e-tron GT": 6
, "Kia|Niro EV": 6
, "Mercedes-Benz|EQC": 6
, "Mercedes-Benz|EQS": 6
, "Honda|e": 5
, "DS Automobiles|DS 3 Crossback E-Tense": 4
, "Hyundai|Ioniq 5": 4
, "MG|Marvel R": 4
, "Lexus|UX 300e": 3
, "Opel|Combo-e": 3
, "other": 36
});

db.insert(db.countries.IT, "2022-08", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02_Marca%20Agosto%202022_6310a8afd3969.pdf",
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
, "Alfa Romeo": 810
, "Volvo": 673
, "Cupra": 563
, "Land Rover": 547
, "Mazda": 519
, "Seat": 474
, "MG": 392
, "Honda": 343
, "Porsche": 272
, "Lexus": 233
, "Maserati": 177
, "DS Automobiles": 164
, "Mitsubishi": 142
, "Smart": 134
, "Jaguar": 115
, "Subaru": 103
, "Tesla": 100
, "SsangYong": 12
, "other": 5353
});

db.insert(db.countries.IT, "2022-08", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/8",
{ "Fiat|500e": 360
, "Smart|Fortwo ED": 128
, "Renault|Twingo Z.E.": 114
, "Opel|Corsa-e": 113
, "Volkswagen|ID.3": 101
, "Tesla|Model Y": 100
, "Peugeot|e-2008": 93
, "Hyundai|Kona Electric": 86
, "Nissan|Ariya": 84
, "Cupra|Born": 80
, "Volkswagen|ID.4": 78
, "Renault|Zoe": 75
, "Mini|Cooper SE Electric": 72
, "Audi|Q4 e-tron": 70
, "Renault|Megane E-Tech": 69
, "Peugeot|e-208": 67
, "Opel|Mokka-e": 47
, "Nissan|Leaf": 40
, "Audi|Q8 e-tron": 39
, "Volvo|C40 Recharge": 37
, "Volkswagen|ID.5": 34
, "Škoda|Enyaq": 34
, "BMW|i3 BEV": 33
, "Porsche|Taycan": 32
, "Volvo|XC40 Recharge pure electric": 30
, "Mercedes-Benz|EQA": 29
, "BMW|iX": 27
, "Dacia|Spring": 26
, "Ford|Mustang Mach-E": 24
, "BMW|i4": 22
, "Citroën|ë-C4": 17
, "Mercedes-Benz|EQB": 17
, "Toyota|Proace Electric": 16
, "Mercedes-Benz|EQC": 13
, "BMW|iX3": 12
, "Kia|EV6": 12
, "Mazda|MX-30": 8
, "Mercedes-Benz|EQE": 6
, "Smart|Forfour ED": 6
, "Volkswagen|e-up!": 6
, "Hyundai|Ioniq 5": 5
, "Kia|Niro EV": 4
, "MG|ZS EV": 3
, "Mercedes-Benz|EQS": 3
, "Mercedes-Benz|EQV": 3
, "MG|Marvel R": 2
, "other": 26
});

db.insert(db.countries.IT, "2022-09", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Settembre%202022_633eebf0d59b6.pdf",
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
, "Alfa Romeo": 1564
, "Mini": 1395
, "Volvo": 1346
, "Cupra": 1275
, "Tesla": 1207
, "Mazda": 980
, "Land Rover": 767
, "Seat": 748
, "Honda": 742
, "Porsche": 655
, "DS Automobiles": 486
, "MG": 484
, "Maserati": 419
, "Smart": 325
, "Lexus": 253
, "Jaguar": 243
, "Subaru": 182
, "Mitsubishi": 87
, "SsangYong": 31
, "other": 6980
});

db.insert(db.countries.IT, "2022-09", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/9",
{ "Tesla|Model Y": 968
, "Fiat|500e": 470
, "Smart|Fortwo ED": 308
, "Tesla|Model 3": 238
, "Renault|Twingo Z.E.": 233
, "Opel|Mokka-e": 210
, "Volkswagen|ID.4": 201
, "Opel|Corsa-e": 184
, "Volvo|XC40 Recharge pure electric": 183
, "Peugeot|e-208": 152
, "Renault|Megane E-Tech": 134
, "Volkswagen|ID.3": 127
, "Hyundai|Kona Electric": 122
, "Cupra|Born": 107
, "Peugeot|e-2008": 104
, "Mini|Cooper SE Electric": 98
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
, "Volvo|C40 Recharge": 35
, "Citroën|ë-C4": 28
, "Škoda|Enyaq": 28
, "Aiways|U5": 27
, "Mazda|MX-30": 25
, "Nissan|Ariya": 22
, "Kia|EV6": 20
, "Porsche|Taycan": 18
, "Smart|Forfour ED": 17
, "Toyota|Proace Electric": 16
, "MG|ZS EV": 15
, "MG|MG4 EV": 14
, "Mercedes-Benz|EQE": 14
, "Volkswagen|ID.5": 13
, "Fiat|E-Ulysse": 12
, "Mercedes-Benz|EQC": 12
, "Mercedes-Benz|EQS": 12
, "Hyundai|Ioniq 5": 9
, "Lexus|UX 300e": 9
, "Volkswagen|e-up!": 7
, "other": 27
});

db.insert(db.countries.IT, "2022-10", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Ottobre%202022_6362879f08071.pdf",
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
, "Alfa Romeo": 1642
, "MG": 1482
, "Volvo": 1475
, "Cupra": 1028
, "Seat": 838
, "Mazda": 797
, "Land Rover": 728
, "Honda": 708
, "Porsche": 576
, "Smart": 470
, "DS Automobiles": 470
, "Maserati": 356
, "Lexus": 245
, "Jaguar": 177
, "Mitsubishi": 114
, "Subaru": 109
, "Tesla": 30
, "SsangYong": 18
, "other": 7474
});

db.insert(db.countries.IT, "2022-10", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/10",
{ "Smart|Fortwo ED": 468
, "Renault|Twingo Z.E.": 419
, "Fiat|500e": 398
, "Peugeot|e-208": 281
, "Mini|Cooper SE Electric": 198
, "Renault|Megane E-Tech": 164
, "Volkswagen|ID.3": 137
, "Audi|Q4 e-tron": 117
, "Peugeot|e-2008": 117
, "Cupra|Born": 99
, "BMW|i4": 92
, "Volvo|XC40 Recharge pure electric": 84
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
, "MG|MG4 EV": 29
, "Škoda|Enyaq": 29
, "Kia|Niro EV": 28
, "Volvo|C40 Recharge": 28
, "Toyota|Proace Electric": 25
, "Citroën|ë-C4": 21
, "MG|Marvel R": 21
, "Nissan|Ariya": 21
, "Mercedes-Benz|EQE": 18
, "Kia|EV6": 17
, "Polestar|2": 16
, "Hyundai|Ioniq 5": 14
, "Mazda|MX-30": 11
, "Mercedes-Benz|EQC": 11
, "MG|ZS EV": 10
, "Lexus|UX 300e": 6
, "Mercedes-Benz|EQS": 6
, "MG|MG5 EV": 5
, "Peugeot|e-Rifter": 5
, "Subaru|Solterra": 5
, "other": 24
});

db.insert(db.countries.IT, "2022-11", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Novembre%202022_6388b6e495397.pdf",
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
, "Alfa Romeo": 1586
, "Volvo": 1526
, "Tesla": 1108
, "MG": 1078
, "Seat": 1048
, "Mazda": 866
, "Porsche": 810
, "Cupra": 749
, "Land Rover": 650
, "DS Automobiles": 615
, "Honda": 540
, "Smart": 472
, "Maserati": 413
, "Lexus": 301
, "Subaru": 199
, "Jaguar": 112
, "Mitsubishi": 67
, "SsangYong": 14
, "other": 7784
});

db.insert(db.countries.IT, "2022-11", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/11",
{ "Tesla|Model Y": 1008
, "Smart|Fortwo ED": 471
, "Fiat|500e": 396
, "Renault|Twingo Z.E.": 393
, "Dacia|Spring": 351
, "Peugeot|e-208": 237
, "Mini|Cooper SE Electric": 224
, "Volkswagen|ID.3": 160
, "Audi|Q4 e-tron": 158
, "Peugeot|e-2008": 131
, "Volkswagen|ID.4": 121
, "BMW|i4": 104
, "Renault|Megane E-Tech": 101
, "Tesla|Model 3": 99
, "BMW|iX": 95
, "Cupra|Born": 82
, "Porsche|Taycan": 79
, "Mercedes-Benz|EQA": 53
, "Volvo|XC40 Recharge pure electric": 53
, "Hyundai|Ioniq 5": 48
, "Volkswagen|ID.5": 46
, "Renault|Zoe": 45
, "Nissan|Leaf": 44
, "Opel|Mokka-e": 44
, "Mercedes-Benz|EQB": 40
, "Subaru|Solterra": 40
, "BMW|i3 BEV": 37
, "Ford|Mustang Mach-E": 36
, "Nissan|Ariya": 35
, "Hyundai|Kona Electric": 34
, "BMW|i7": 31
, "Škoda|Enyaq": 31
, "Opel|Corsa-e": 27
, "Kia|Niro EV": 25
, "MG|MG4 EV": 25
, "MG|Marvel R": 24
, "Fiat|E-Doblò": 22
, "Audi|Q8 e-tron": 21
, "Polestar|2": 20
, "Volvo|C40 Recharge": 18
, "BMW|iX3": 17
, "Toyota|Proace Electric": 17
, "Mercedes-Benz|EQC": 16
, "MG|ZS EV": 15
, "Kia|EV6": 13
, "Mercedes-Benz|EQE": 11
, "Volkswagen|ID. Buzz": 11
, "Audi|e-tron GT": 10
, "Citroën|ë-C4": 10
, "Citroën|ë-SpaceTourer": 9
, "other": 40
});

db.insert(db.countries.IT, "2022-12", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Dicembre%202022_63b3ce802469b.pdf",
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
, "Alfa Romeo": 1664
, "Volvo": 1523
, "Seat": 1260
, "Porsche": 1208
, "Cupra": 947
, "Mazda": 786
, "MG": 761
, "DS Automobiles": 665
, "Tesla": 566
, "Land Rover": 467
, "Smart": 450
, "Maserati": 377
, "Honda": 324
, "Lexus": 268
, "Mitsubishi": 205
, "Subaru": 128
, "Jaguar": 43
, "SsangYong": 15
, "other": 5349
});

db.insert(db.countries.IT, "2022-12", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2022/12",
{ "Smart|Fortwo ED": 447
, "Tesla|Model Y": 412
, "Fiat|500e": 303
, "Renault|Twingo Z.E.": 273
, "Dacia|Spring": 231
, "Volkswagen|ID.4": 192
, "Peugeot|e-208": 183
, "Volkswagen|ID.3": 172
, "Volkswagen|ID.5": 159
, "Mini|Cooper SE Electric": 158
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
, "Volvo|XC40 Recharge pure electric": 64
, "Nissan|Ariya": 63
, "Mercedes-Benz|EQA": 62
, "Opel|Mokka-e": 62
, "MG|MG4 EV": 55
, "Peugeot|e-2008": 54
, "Volvo|C40 Recharge": 47
, "Renault|Megane E-Tech": 44
, "BMW|iX3": 38
, "BMW|iX1": 36
, "Kia|EV6": 29
, "Toyota|Proace Electric": 27
, "Opel|Corsa-e": 26
, "Škoda|Enyaq": 25
, "MG|Marvel R": 23
, "Mercedes-Benz|EQE": 23
, "Polestar|2": 22
, "Renault|Zoe": 20
, "Citroën|ë-C4": 17
, "Ford|Mustang Mach-E": 17
, "Kia|Niro EV": 17
, "Lexus|UX 300e": 17
, "Audi|e-tron GT": 16
, "Hyundai|Ioniq 5": 16
, "MG|ZS EV": 15
, "Tesla|Model S": 12
, "Mercedes-Benz|EQC": 11
, "Subaru|Solterra": 11
, "Hyundai|Kona Electric": 9
, "Fiat|E-Doblò": 7
, "other": 205
});

db.insert(db.countries.IT, "2023-01", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Gennaio%202023_63da853aee5fb.pdf",
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
, "Alfa Romeo": 1784
, "Mini": 1609
, "MG": 1392
, "Volvo": 1322
, "Land Rover": 871
, "Cupra": 836
, "Seat": 831
, "Porsche": 672
, "DS Automobiles": 577
, "Honda": 483
, "Smart": 370
, "Tesla": 326
, "Maserati": 321
, "Lexus": 224
, "Subaru": 175
, "Mitsubishi": 108
, "Jaguar": 107
, "SsangYong": 39
, "other": 5961
});

db.insert(db.countries.IT, "2023-01", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/1, https://www.acea.auto/files/20230221_PRPC_2301_FINAL.pdf",
{ "Fiat|500e": 540
, "Smart|Fortwo ED": 369
, "Renault|Twingo Z.E.": 212
, "Audi|Q4 e-tron": 186
, "Tesla|Model Y": 147
, "Volkswagen|ID.3": 135
, "Dacia|Spring": 128
, "Peugeot|e-208": 128
, "MG|Marvel R": 100
, "Tesla|Model S": 98
, "MG|MG4 EV": 77
, "BMW|iX1": 72
, "Mini|Cooper SE Electric": 60
, "Peugeot|e-2008": 52
, "Renault|Megane E-Tech": 52
, "Cupra|Born": 51
, "Tesla|Model X": 51
, "BMW|iX3": 50
, "Volvo|XC40 Recharge pure electric": 50
, "Hyundai|Ioniq 5": 46
, "BMW|i4": 44
, "Nissan|Leaf": 40
, "Mazda|MX-30": 39
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
, "MG|MG5 EV": 11
, "MG|ZS EV": 11
, "Volvo|C40 Recharge": 11
, "Fiat|E-Doblò": 10
, "other": 114
});

db.insert(db.countries.IT, "2023-02", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Febbraio%202023_63ff72e39b529.pdf",
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
, "Alfa Romeo": 1757
, "Volvo": 1476
, "Mazda": 1335
, "Tesla": 1313
, "Cupra": 1112
, "Seat": 1105
, "MG": 1028
, "Land Rover": 888
, "DS Automobiles": 644
, "Porsche": 639
, "Honda": 473
, "Smart": 409
, "Maserati": 261
, "Subaru": 185
, "Lexus": 181
, "Mitsubishi": 128
, "Jaguar": 107
, "SsangYong": 41
, "other": 6320
});

db.insert(db.countries.IT, "2023-02", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/2, https://www.acea.auto/files/20230321_PRPC_2302-FINAL.pdf",
{ "Tesla|Model Y": 1116
, "Fiat|500e": 538
, "Smart|Fortwo ED": 409
, "Renault|Megane E-Tech": 403
, "Renault|Twingo Z.E.": 203
, "Tesla|Model 3": 192
, "Peugeot|e-208": 158
, "Audi|Q4 e-tron": 147
, "MG|MG4 EV": 134
, "Polestar|2": 111
, "Cupra|Born": 108
, "Volkswagen|ID.3": 90
, "Citroën|ë-C4": 88
, "Mini|Cooper SE Electric": 79
, "Nissan|Leaf": 73
, "BMW|iX1": 69
, "Hyundai|Kona Electric": 63
, "Dacia|Spring": 60
, "Volvo|XC40 Recharge pure electric": 58
, "Peugeot|e-2008": 57
, "Ford|Mustang Mach-E": 55
, "DS Automobiles|DS 3 Crossback E-Tense": 50
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
, "Volvo|C40 Recharge": 22
, "Toyota|Proace Electric": 19
, "Volkswagen|ID. Buzz": 19
, "Hyundai|Ioniq 5": 14
, "Mercedes-Benz|EQS": 14
, "Nissan|Ariya": 14
, "Škoda|Enyaq": 14
, "Porsche|Taycan": 13
, "Audi|e-tron GT": 12
, "Renault|Zoe": 12
, "Citroën|Berlingo Electric": 11
, "Fiat|E-Ulysse": 11
, "Subaru|Solterra": 11
});

db.insert(db.countries.IT, "2023-03", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Marzo%202023_642ad178ad402.pdf",
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
, "Alfa Romeo": 2992
, "Tesla": 2911
, "MG": 2378
, "Mini": 2069
, "Cupra": 1840
, "Mazda": 1616
, "Volvo": 1578
, "Seat": 1514
, "DS Automobiles": 828
, "Porsche": 787
, "Land Rover": 743
, "Honda": 632
, "Smart": 554
, "Maserati": 469
, "Subaru": 395
, "Mitsubishi": 292
, "Lexus": 291
, "Jaguar": 130
, "SsangYong": 30
, "other": 9475
});

db.insert(db.countries.IT, "2023-03", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/3, https://www.acea.auto/files/20230419_PRPC_2303-FINAL.pdf",
{ "Tesla|Model Y": 1697
, "Tesla|Model 3": 1123
, "Smart|Fortwo ED": 554
, "Fiat|500e": 452
, "Dacia|Spring": 366
, "MG|MG4 EV": 284
, "Renault|Megane E-Tech": 279
, "Peugeot|e-208": 269
, "Volkswagen|ID.3": 220
, "Renault|Twingo Z.E.": 215
, "Audi|Q4 e-tron": 208
, "Toyota|Proace Electric": 144
, "Mercedes-Benz|EQA": 138
, "Polestar|2": 137
, "Mini|Cooper SE Electric": 135
, "BMW|iX1": 132
, "Cupra|Born": 131
, "Citroën|ë-C4": 121
, "Renault|Zoe": 103
, "Mercedes-Benz|EQB": 97
, "Fiat|E-Doblò": 96
, "Opel|Corsa-e": 89
, "Ford|Mustang Mach-E": 85
, "Peugeot|e-2008": 83
, "BMW|i4": 81
, "Audi|Q8 e-tron": 77
, "Volkswagen|ID. Buzz": 76
, "Opel|Mokka-e": 75
, "Hyundai|Kona Electric": 68
, "BMW|iX": 65
, "Volkswagen|ID.4": 64
, "MG|Marvel R": 58
, "Tesla|Model S": 57
, "Volvo|XC40 Recharge pure electric": 52
, "BMW|iX3": 42
, "Jeep|Avenger EV": 40
, "Tesla|Model X": 34
, "MG|MG5 EV": 33
, "Fiat|E-Ulysse": 32
, "Nissan|Leaf": 32
, "Škoda|Enyaq": 32
, "Volkswagen|ID.5": 31
, "Volvo|C40 Recharge": 30
, "Mercedes-Benz|EQE": 27
, "Citroën|Berlingo Electric": 23
, "Mazda|MX-30": 21
, "Hyundai|Ioniq 5": 20
, "Jaguar|I-Pace": 19
, "MG|ZS EV": 19
});

db.insert(db.countries.IT, "2023-04", db.dsTypes.AllCarsByBrand, "https://unrae.it/files/02%20Marca%20Aprile%202023_64512d2f52fa6.pdf",
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
, "Alfa Romeo": 2380
, "Nissan": 1481
, "Mini": 1346
, "Volvo": 1214
, "Cupra": 1034
, "Seat": 877
, "Mazda": 742
, "Tesla": 740
, "DS Automobiles": 630
, "Porsche": 573
, "Land Rover": 512
, "Smart": 365
, "Maserati": 324
, "Honda": 311
, "Lexus": 296
, "Subaru": 214
, "Jaguar": 127
, "Polestar": 96
, "Mitsubishi": 43
, "SsangYong": 14
, "other": 7252
});

db.insert(db.countries.IT, "2023-04", db.dsTypes.ElectricCarsByModel, "https://eu-evs.com/bestSellers/IT/Brands/Month/2023/4, https://www.acea.auto/files/20230517_PRPC_2304_FINAL.pdf",
{ "Tesla|Model Y": 480
, "Fiat|500e": 372
, "Smart|Fortwo ED": 365
, "MG|MG4 EV": 228
, "Tesla|Model 3": 224
, "Dacia|Spring": 148
, "Renault|Twingo Z.E.": 144
, "Renault|Megane E-Tech": 143
, "Audi|Q4 e-tron": 129
, "Peugeot|e-208": 129
, "Mini|Cooper SE Electric": 120
, "Opel|Mokka-e": 105
, "Volkswagen|ID.4": 97
, "Polestar|2": 96
, "Volkswagen|ID.5": 88
, "Opel|Corsa-e": 73
, "Volkswagen|ID.3": 70
, "Volvo|XC40 Recharge pure electric": 70
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
, "MG|MG5 EV": 19
, "Volkswagen|ID. Buzz": 18
, "Volvo|C40 Recharge": 17
, "Kia|EV6": 16
, "Tesla|Model X": 16
, "Hyundai|Ioniq 5": 15
, "Mercedes-Benz|EQE": 14
, "MG|Marvel R": 13
, "Nissan|Ariya": 13
, "Nissan|Leaf": 13
, "Toyota|Proace Electric": 13
, "Fiat|E-Doblò": 12
, "Mercedes-Benz|EQB": 11
, "Mercedes-Benz|EQS": 11
, "Subaru|Solterra": 9
, "other": 19
});
