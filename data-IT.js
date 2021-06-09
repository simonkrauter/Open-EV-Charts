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

db.insert(db.countries.IT, "2020-01", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=2559",
{ "Renault|Zoé": 411
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

db.insert(db.countries.IT, "2020-02", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=2633",
{ "Renault|Zoé": 387
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

db.insert(db.countries.IT, "2020-03", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=2704",
{ "Tesla|Model 3": 358
, "Smart|Fortwo ED": 128
, "Volkswagen|e-up!": 70
, "Renault|Zoé": 55
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

db.insert(db.countries.IT, "2020-04", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=2741",
{ "Renault|Zoé": 366
, "Tesla|Model 3": 88
, "Tesla|Model S": 10
, "Opel|Corsa-e": 7
, "Peugeot|e-208": 6
, "Tesla|Model X": 6
, "DS Automobiles|DS 3 Crossback E-Tense": 3
, "Volkswagen|e-up!": 3
, "Audi|e-tron": 2
, "other": 9
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

db.insert(db.countries.IT, "2020-05", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=2834",
{ "Renault|Zoé": 529
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

db.insert(db.countries.IT, "2020-06", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=2880",
{ "Tesla|Model 3": 317
, "Renault|Zoé": 314
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

db.insert(db.countries.IT, "2020-07", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3021",
{ "Smart|Fortwo ED": 350
, "Renault|Zoé": 198
, "Opel|Corsa-e": 156
, "Peugeot|e-208": 142
, "Peugeot|e-2008": 104
, "Mini|Cooper SE Electric": 99
, "Volkswagen|e-up!": 85
, "Smart|Forfour ED": 70
, "Audi|e-tron": 68
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

db.insert(db.countries.IT, "2020-08", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3056",
{ "Renault|Zoé": 506
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

db.insert(db.countries.IT, "2020-09", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3080",
{ "Tesla|Model 3": 880
, "Renault|Zoé": 676
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

db.insert(db.countries.IT, "2020-10", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3122",
{ "Smart|Fortwo ED": 571
, "Renault|Zoé": 304
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

db.insert(db.countries.IT, "2020-11", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3144",
{ "Volkswagen|e-up!": 657
, "Smart|Fortwo ED": 558
, "Renault|Zoé": 554
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

db.insert(db.countries.IT, "2020-12", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3181",
{ "Fiat|500e": 1549
, "Renault|Zoé": 1153
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

db.insert(db.countries.IT, "2021-01", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3352",
{ "Fiat|500e": 419
, "Smart|Fortwo ED": 419
, "Renault|Zoé": 255
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

db.insert(db.countries.IT, "2021-02", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3425",
{ "Fiat|500e": 583
, "Smart|Fortwo ED": 545
, "Renault|Twingo Z.E.": 386
, "Renault|Zoé": 296
, "Tesla|Model 3": 278
, "Peugeot|e-208": 184
, "Peugeot|e-2008": 163
, "Opel|Corsa-e": 157
, "Nissan|Leaf": 142
, "Hyundai|Kona Electric": 134
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

db.insert(db.countries.IT, "2021-03", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3462",
{ "Tesla|Model 3": 1363
, "Fiat|500e": 1056
, "Smart|Fortwo ED": 759
, "Renault|Twingo Z.E.": 738
, "Renault|Zoé": 721
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

db.insert(db.countries.IT, "2021-04", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3535",
{ "Fiat|500e": 1062
, "Smart|Fortwo ED": 601
, "Renault|Twingo Z.E.": 528
, "Renault|Zoé": 421
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

db.insert(db.countries.IT, "2021-05", db.dsTypes.ElectricCarsByModel, "http://www.opportunityenergy.org/?p=3573",
{ "Fiat|500e": 1030
, "Smart|Fortwo ED": 641
, "Renault|Twingo Z.E.": 513
, "Volkswagen|ID.3": 473
, "Tesla|Model 3": 425
, "Peugeot|e-208": 283
, "Renault|Zoé": 243
, "Nissan|Leaf": 167
, "VŠkoda|Enyaq": 157
, "Volkswagen|ID.4": 141
, "other": 1090
});
