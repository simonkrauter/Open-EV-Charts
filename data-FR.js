// Data sets for car sales in France

"use strict";

db.addCountry("FR", "France");

db.insert(db.countries.FR, "2018-01", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#jan (Unclear: Why is Tesla missing?)",
{ "Peugeot": 31526
, "Citroën": 17292
, "Opel": 5467
, "DS Automobiles": 1460
, "Renault": 27282
, "Dacia": 9888
, "Volkswagen": 8656
, "Audi": 3400
, "Škoda": 2153
, "Seat": 2116
, "Porsche": 317
, "Toyota": 7951
, "Lexus": 523
, "Ford": 6933
, "Fiat": 5219
, "Jeep": 884
, "Alfa Romeo": 592
, "BMW": 3811
, "Mini": 2095
, "Kia": 3153
, "Hyundai": 2461
, "Nissan": 4631
, "Infiniti": 69
, "Mercedes-Benz": 2888
, "Smart": 415
, "Volvo": 1185
, "other": 4467
, "Tesla": 12
});

db.insert(db.countries.FR, "2018-01", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1520266815361253686bfda401bf217a7bc644eb32-Barometre%20janvier%202018.pdf",
{ "Renault|ZOE": 633
, "BMW|i3 BEV": 172
, "Kia|Soul EV": 136
, "Smart|Fortwo electric drive": 98
, "Peugeot|iOn": 56
, "Nissan|Leaf": 48
, "Citroën|C-Zero": 43
, "Hyundai|Ioniq Electric": 42
, "Peugeot|Partner Electric": 40
, "Smart|Forfour electric drive": 27
, "Volkswagen|e-Golf": 16
, "Citroën|Berlingo Electric": 14
, "Volkswagen|e-up!": 14
, "Bollore|Bluecar": 10
, "Tesla|Model S": 9
, "Citroën|E-Mehari": 7
, "Nissan|e-NV200": 7
, "Tesla|Model X": 3
});

db.insert(db.countries.FR, "2018-02", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#feb (Unclear: Why is Tesla missing?)",
{ "Peugeot": 31006
, "Citroën": 16643
, "Opel": 5718
, "DS Automobiles": 1340
, "Renault": 30242
, "Dacia": 10081
, "Volkswagen": 10916
, "Audi": 4036
, "Seat": 2256
, "Škoda": 2189
, "Porsche": 418
, "Toyota": 7892
, "Lexus": 464
, "Fiat": 5912
, "Jeep": 1048
, "Alfa Romeo": 730
, "Ford": 7249
, "BMW": 4842
, "Mini": 1975
, "Kia": 3723
, "Hyundai": 2755
, "Nissan": 5515
, "Infiniti": 52
, "Mercedes-Benz": 4826
, "Smart": 398
, "Volvo": 1325
, "Chevrolet": 13
, "other": 5302
});

db.insert(db.countries.FR, "2018-02", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/03/france-february-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 1155
, "Nissan|Leaf": 306
, "Kia|Soul EV": 73
, "Smart|Fortwo electric drive": 72
, "Peugeot|iOn": 41
, "Citroën|C-Zero": 35
});

db.insert(db.countries.FR, "2018-03", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#mar (Unclear: Why is Tesla missing?)",
{ "Peugeot": 40528
, "Citroën": 21577
, "Opel": 7363
, "DS Automobiles": 2540
, "Renault": 49171
, "Dacia": 13921
, "Alpine": 27
, "Volkswagen": 14504
, "Audi": 5688
, "Seat": 2963
, "Škoda": 2821
, "Porsche": 369
, "Fiat": 8412
, "Jeep": 1269
, "Alfa Romeo": 967
, "Ford": 10335
, "Toyota": 8222
, "Lexus": 531
, "BMW": 5670
, "Mini": 2650
, "Kia": 4439
, "Hyundai": 3227
, "Nissan": 7402
, "Infiniti": 94
, "Mercedes-Benz": 6406
, "Smart": 606
, "Volvo": 2069
, "Chevrolet": 10
, "other": 7308
, "Tesla": 162
});

db.insert(db.countries.FR, "2018-03", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/04/france-march-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 2245
, "Nissan|Leaf": 719
, "Kia|Soul EV": 59
, "Smart|Fortwo electric drive": 77
, "Tesla|Model S": 162
, "Peugeot|iOn": 98
, "Hyundai|Ioniq Electric": 127
});

db.insert(db.countries.FR, "2018-04", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#apr (Unclear: Why is Tesla missing?)",
{ "Peugeot": 34576
, "Citroën": 16991
, "Opel": 6305
, "DS Automobiles": 2630
, "Renault": 33726
, "Dacia": 14114
, "Alpine": 114
, "Volkswagen": 12445
, "Audi": 4942
, "Škoda": 2635
, "Seat": 2343
, "Porsche": 380
, "Fiat": 6961
, "Jeep": 1297
, "Alfa Romeo": 707
, "Toyota": 8070
, "Lexus": 574
, "Kia": 4288
, "Hyundai": 3326
, "Ford": 7406
, "BMW": 4574
, "Mini": 1992
, "Mercedes-Benz": 4773
, "Smart": 538
, "Nissan": 4604
, "Infiniti": 72
, "Volvo": 1252
, "Chevrolet": 6
, "other": 5746
, "Tesla": 23
});

db.insert(db.countries.FR, "2018-04", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/05/france-april-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 961
, "Nissan|Leaf": 375
, "Kia|Soul EV": 70
, "Smart|Fortwo electric drive": 69
, "Peugeot|iOn": 59
, "Tesla|Model S": 23
, "Citroën|C-Zero": 42
});

db.insert(db.countries.FR, "2018-05", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#may (Unclear: Why is Tesla missing?)",
{ "Peugeot": 33081
, "Citroën": 17164
, "Opel": 7014
, "DS Automobiles": 2240
, "Renault": 36252
, "Dacia": 13168
, "Alpine": 105
, "Volkswagen": 12659
, "Audi": 4769
, "Škoda": 3025
, "Seat": 2573
, "Porsche": 385
, "Fiat": 7397
, "Jeep": 1577
, "Alfa Romeo": 787
, "Toyota": 7627
, "Lexus": 507
, "Ford": 7723
, "BMW": 4993
, "Mini": 2197
, "Mercedes-Benz": 6525
, "Smart": 560
, "Kia": 3627
, "Hyundai": 3228
, "Nissan": 5433
, "Infiniti": 62
, "Volvo": 1380
, "Chevrolet": 8
, "other": 5607
, "Tesla": 63
});

db.insert(db.countries.FR, "2018-05", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/06/france-may-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 1085
, "Nissan|Leaf": 331
, "Kia|Soul EV": 51
, "Smart|Fortwo electric drive": 68
, "Peugeot|iOn": 63
, "Tesla|Model S": 63
, "Hyundai|Ioniq Electric": 20
});

db.insert(db.countries.FR, "2018-06", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#jun (Unclear: Why is Tesla missing?)",
{ "Peugeot": 42885
, "Citroën": 24403
, "Opel": 7284
, "DS Automobiles": 3190
, "Renault": 59504
, "Dacia": 16551
, "Alpine": 122
, "Volkswagen": 15881
, "Audi": 5875
, "Škoda": 3404
, "Seat": 3391
, "Porsche": 593
, "Fiat": 10507
, "Jeep": 1377
, "Alfa Romeo": 1033
, "Toyota": 9403
, "Lexus": 522
, "BMW": 5876
, "Mini": 2849
, "Rolls Royce": 6
, "Kia": 4357
, "Hyundai": 3420
, "Ford": 7274
, "Mercedes-Benz": 5769
, "Smart": 930
, "Nissan": 6612
, "Infiniti": 60
, "Volvo": 1823
, "Chevrolet": 16
, "other": 7283
, "Tesla": 103
});

db.insert(db.countries.FR, "2018-06", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/07/france-june-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 1928
, "Nissan|Leaf": 469
, "Smart|Fortwo electric drive": 95
, "Peugeot|iOn": 91
, "Kia|Soul EV": 18
, "Tesla|Model S": 103
, "Hyundai|Ioniq Electric": 21
, "Citroën|C-Zero": 77
});

// No source for 2018-07 found

db.insert(db.countries.FR, "2018-08", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#aug (Unclear: Why is Tesla missing?)",
{ "Renault": 27819
, "Dacia": 11377
, "Alpine": 249
, "Peugeot": 21026
, "Citroën": 13694
, "Opel": 3465
, "DS Automobiles": 1143
, "Volkswagen": 9868
, "Audi": 5052
, "Seat": 2715
, "Škoda": 2394
, "Porsche": 902
, "Lamborghini": 13
, "Bentley": 9
, "Nissan": 9296
, "Infiniti": 421
, "Fiat": 5517
, "Jeep": 1573
, "Alfa Romeo": 1404
, "Maserati": 45
, "Ferrari": 18
, "Toyota": 6057
, "Lexus": 431
, "BMW": 3782
, "Mini": 1690
, "Ford": 4822
, "Mercedes-Benz": 4180
, "Smart": 551
, "Kia": 2278
, "Hyundai": 2123
, "Volvo": 913
, "other": 5534
, "Tesla": 195
});

db.insert(db.countries.FR, "2018-08", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/09/norway-august-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 1241
, "Volkswagen|e-Golf": 764
, "Tesla|Model X": 113
, "Tesla|Model S": 82
, "Renault|ZOE": 386
, "Hyundai|Ioniq Electric": 159
, "Kia|Soul EV": 168
});

db.insert(db.countries.FR, "2018-09", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#sep (Unclear: Why is Tesla missing?)",
{ "Peugeot": 29353
, "Citroën": 15751
, "Opel": 6404
, "DS Automobiles": 1636
, "Renault": 28111
, "Dacia": 9353
, "Alpine": 25
, "Volkswagen": 6807
, "Audi": 2444
, "Škoda": 1955
, "Seat": 1731
, "Porsche": 124
, "Toyota": 7128
, "Lexus": 383
, "BMW": 4936
, "Mini": 2067
, "Kia": 3196
, "Hyundai": 3021
, "Mercedes-Benz": 5612
, "Smart": 587
, "Fiat": 4940
, "Jeep": 491
, "Alfa Romeo": 169
, "Ford": 5095
, "Volvo": 1596
, "Nissan": 1458
, "Infiniti": 6
, "Chevrolet": 8
, "other": 4359
, "Tesla": 107
});

db.insert(db.countries.FR, "2018-09", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/10/france-september-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 1482
, "Nissan|Leaf": 390
, "Smart|Fortwo electric drive": 81
, "Peugeot|iOn": 85
, "Tesla|Model S": 107
, "Kia|Soul EV": 44
, "Hyundai|Ioniq Electric": 64
, "Citroën|C-Zero": 63
});

db.insert(db.countries.FR, "2018-10", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#oct (Unclear: Why is Tesla missing?)",
{ "Peugeot": 34962
, "Citroën": 18780
, "Opel": 6420
, "DS Automobiles": 1506
, "Renault": 29484
, "Dacia": 10138
, "Alpine": 96
, "Volkswagen": 9244
, "Audi": 2755
, "Škoda": 2936
, "Seat": 2461
, "Porsche": 125
, "Toyota": 9354
, "Lexus": 486
, "BMW": 5108
, "Mini": 2795
, "Ford": 7563
, "Mercedes-Benz": 6381
, "Smart": 705
, "Kia": 3629
, "Hyundai": 3201
, "Fiat": 5162
, "Jeep": 726
, "Alfa Romeo": 246
, "Nissan": 2652
, "Infiniti": 10
, "Volvo": 1832
, "other": 4957
, "Tesla": 23
});

db.insert(db.countries.FR, "2018-10", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/11/france-october-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 1745
, "Nissan|Leaf": 410
, "Smart|Fortwo electric drive": 108
, "Peugeot|iOn":  68
, "Kia|Soul EV": 47
, "Tesla|Model S": 23
, "Hyundai|Ioniq Electric": 55
, "Citroën|C-Zero": 54
});

db.insert(db.countries.FR, "2018-11", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#nov (Unclear: Why is Tesla missing?)",
{ "Peugeot": 32820
, "Citroën": 17743
, "Opel": 6096
, "DS Automobiles": 1970
, "Renault": 25699
, "Dacia": 12351
, "Alpine": 113
, "Volkswagen": 13146
, "Audi": 3540
, "Škoda": 2782
, "Seat": 2600
, "Porsche": 83
, "Toyota": 8940
, "Lexus": 536
, "BMW": 4973
, "Mini": 2594
, "Mercedes-Benz": 6432
, "Smart": 714
, "Fiat": 5422
, "Jeep": 686
, "Alfa Romeo": 327
, "Hyundai": 3130
, "Kia": 3074
, "Ford": 6055
, "Nissan": 2421
, "Infiniti": 8
, "Volvo": 1800
, "Chevrolet": 7
, "other": 5540
, "Tesla": 119
});

db.insert(db.countries.FR, "2018-11", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1547740964b4293d4c688a85f0f64776ee401217b3-Novembre%202018.pdf",
{ "Renault|ZOE": 1895
, "Nissan|Leaf": 420
, "Peugeot|iOn": 258
, "Citroën|C-Zero": 224
, "Smart|Fortwo electric drive": 133
, "Hyundai|Ioniq Electric": 112
, "BMW|i3 BEV": 81
, "Tesla|Model S": 63
, "Tesla|Model X": 56
, "Volkswagen|e-up!": 47
, "Smart|Forfour electric drive": 45
, "Volkswagen|e-Golf": 44
, "Kia|Soul EV": 42
, "Kia|Niro EV": 30
, "Jaguar|I-Pace": 26
, "Hyundai|Kona Electric": 22
, "Citroën|E-Mehari": 19
, "Citroën|Berlingo Electric": 11
, "Peugeot|Partner Electric": 8
, "Nissan|e-NV200": 4
});

db.insert(db.countries.FR, "2018-12", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2018#dec (Unclear: Why is Tesla missing?)",
{ "Peugeot": 27045
, "Citroën": 16228
, "Opel": 4844
, "DS Automobiles": 1701
, "Renault": 31301
, "Dacia": 9603
, "Alpine": 154
, "Volkswagen": 13093
, "Audi": 3967
, "Škoda": 2760
, "Seat": 3022
, "Porsche": 230
, "Toyota": 8085
, "Lexus": 579
, "Fiat": 4931
, "Jeep": 671
, "Alfa Romeo": 457
, "BMW": 4944
, "Mini": 2846
, "Ford": 5940
, "Kia": 3052
, "Hyundai": 2528
, "Mercedes-Benz": 7382
, "Smart": 914
, "Nissan": 2619
, "Infiniti": 14
, "Volvo": 1721
, "Chevrolet": 8
, "other": 4742
, "Tesla": 99
});

db.insert(db.countries.FR, "2018-12", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/01/france-december-2018.html (incomplete, missing i3 BEV)",
{ "Renault|ZOE": 2558
, "Nissan|Leaf": 447
, "Smart|Fortwo electric drive": 339
, "Peugeot|iOn": 99
, "Tesla|Model S": 99
, "Citroën|C-Zero": 53
, "Kia|Soul EV": 26
, "Hyundai|Ioniq Electric": 47
});

db.insert(db.countries.FR, "2019-01", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#jan (Unclear: Why is Tesla missing?)",
{ "Peugeot": 29652
, "Citroën": 17563
, "Opel": 5882
, "DS Automobiles": 1767
, "Renault": 26363
, "Dacia": 9350
, "Alpine": 323
, "Volkswagen": 10141
, "Audi": 3166
, "Škoda": 2185
, "Seat": 2003
, "Porsche": 243
, "Toyota": 8357
, "Lexus": 532
, "Kia": 3364
, "Hyundai": 2785
, "Ford": 5860
, "BMW": 3441
, "Mini": 2251
, "Fiat": 4865
, "Jeep": 476
, "Alfa Romeo": 254
, "Mercedes-Benz": 4224
, "Smart": 649
, "Nissan": 2546
, "Infiniti": 11
, "Volvo": 1574
, "Land Rover": 455
, "Jaguar": 294
, "Tesla": 32
, "other": 4491
});

db.insert(db.countries.FR, "2019-01", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15495492248cd691d9fa4f2bee8d93483d2fbf9f2a-Barometre%20janvier%20AvereFrance.pdf",
{ "Renault|ZOE": 1496
, "Nissan|Leaf": 341
, "Smart|Fortwo electric drive": 306
, "BMW|i3 BEV": 229
, "Renault|Kangoo Z.E.": 211
, "Kia|Niro EV": 149
, "Hyundai|Kona Electric": 147
, "Citroën|C-Zero": 60
, "Peugeot|iOn": 59
, "Volkswagen|e-Golf": 50
, "Hyundai|Ioniq Electric": 47
, "Jaguar|I-Pace": 31
, "Volkswagen|e-up!": 25
, "Smart|Forfour electric drive": 24
, "Kia|Soul EV": 23
, "Tesla|Model S": 21
, "Nissan|e-NV200": 15
, "Tesla|Model X": 11
, "Peugeot|Partner Electric": 10
, "Citroën|E-Mehari": 8
, "Citroën|Berlingo Electric": 7
});

db.insert(db.countries.FR, "2019-02", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#feb (Unclear: Why is Tesla missing?)",
{ "Peugeot": 31784
, "Citroën": 19986
, "Opel": 7122
, "DS Automobiles": 1684
, "Renault": 29812
, "Dacia": 10428
, "Alpine": 200
, "Volkswagen": 11258
, "Audi": 3766
, "Seat": 2631
, "Škoda": 2553
, "Porsche": 133
, "Toyota": 7833
, "Lexus": 351
, "Ford": 6693
, "Kia": 3471
, "Hyundai": 3129
, "Fiat": 5438
, "Jeep": 779
, "Alfa Romeo": 266
, "BMW": 3950
, "Mini": 1943
, "Mercedes-Benz": 4941
, "Smart": 724
, "Nissan": 3767
, "Infiniti": 13
, "Volvo": 1914
, "Land Rover": 461
, "Jaguar": 241
, "Chevrolet": 6
, "Tesla": 445
, "other": 5154
});

db.insert(db.countries.FR, "2019-02", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/155186746334385712e0880d4efa60463604ed3785-immats-mars-2019.pdf",
{ "Renault|ZOE": 1197
, "Tesla|Model 3": 401
, "Renault|Kangoo Z.E.": 368
, "Nissan|Leaf": 326
, "Kia|Niro EV": 253
, "BMW|i3 BEV": 196
, "Smart|Fortwo electric drive": 87
, "Hyundai|Kona Electric": 79
, "Jaguar|I-Pace": 47
, "Volkswagen|e-Golf": 42
, "Peugeot|iOn": 42
, "Smart|Forfour electric drive": 41
, "Hyundai|Ioniq Electric": 34
, "Tesla|Model S": 33
, "Citroën|C-Zero": 22
, "Volkswagen|e-up!": 15
, "Audi|e-tron": 14
, "Kia|Soul EV": 14
, "Tesla|Model X": 11
, "Peugeot|Partner Electric": 11
, "Nissan|e-NV200": 6
, "Citroën|E-Mehari": 5
, "Citroën|Berlingo Electric": 3

});

db.insert(db.countries.FR, "2019-03", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#mar (Unclear: Why is Tesla missing?)",
{ "Peugeot": 37262
, "Citroën": 23677
, "Opel": 7991
, "DS Automobiles": 1986
, "Renault": 45911
, "Dacia": 15838
, "Alpine": 303
, "Volkswagen": 15704
, "Audi": 5700
, "Škoda": 3268
, "Seat": 3262
, "Porsche": 278
, "Ford": 9320
, "Fiat": 7468
, "Jeep": 1145
, "Alfa Romeo": 387
, "Toyota": 8237
, "Lexus": 555
, "Kia": 4283
, "Hyundai": 3688
, "BMW": 4820
, "Mini": 2616
, "Mercedes-Benz": 6125
, "Smart": 653
, "Nissan": 4958
, "Infiniti": 17
, "Volvo": 1978
, "Land Rover": 716
, "Jaguar": 283
, "Tesla": 1250
, "other": 7379
});

db.insert(db.countries.FR, "2019-03", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1554462213a58da558147631652560897fe8b30dee-immats-avril-2019.pdf",
{ "Renault|ZOE": 1536
, "Tesla|Model 3": 1153
, "Nissan|Leaf": 455
, "Renault|Kangoo Z.E.": 361
, "Kia|Niro EV": 299
, "BMW|i3 BEV": 207
, "Hyundai|Kona Electric": 141
, "Audi|e-tron": 140
, "Peugeot|iOn": 127
, "Smart|Fortwo electric drive": 104
, "Citroën|C-Zero": 93
, "Volkswagen|e-Golf": 61
, "Tesla|Model S": 51
, "Hyundai|Ioniq Electric": 48
, "Tesla|Model X": 46
, "Jaguar|I-Pace": 42
, "Peugeot|Partner Electric": 37
, "Citroën|E-Mehari": 27
, "Smart|Forfour electric drive": 21
, "Nissan|e-NV200": 9
, "Volkswagen|e-up!": 9
, "Citroën|Berlingo Electric": 7
, "Kia|Soul EV": 1
});

db.insert(db.countries.FR, "2019-04", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#apr (Unclear: Why is Tesla missing?)",
{ "Peugeot": 34117
, "Citroën": 21874
, "Opel": 6622
, "DS Automobiles": 1948
, "Renault": 31495
, "Dacia": 12501
, "Alpine": 353
, "Volkswagen": 12676
, "Audi": 5043
, "Seat": 3260
, "Škoda": 3007
, "Porsche": 352
, "Toyota": 8222
, "Lexus": 671
, "Fiat": 6476
, "Jeep": 964
, "Alfa Romeo": 292
, "Kia": 4191
, "Hyundai": 3317
, "BMW": 5037
, "Mini": 2371
, "Ford": 6371
, "Mercedes-Benz": 5504
, "Smart": 551
, "Nissan": 3315
, "Infiniti": 20
, "Volvo": 1527
, "Land Rover": 677
, "Jaguar": 370
, "Tesla": 305
, "other": 5062
});

db.insert(db.countries.FR, "2019-04", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/155715869983878c91171338902e0fe0fb97a8c47a-immats-mai-2019.pdf",
{ "Renault|ZOE": 1472
, "Renault|Kangoo Z.E.": 371
, "Nissan|Leaf": 347
, "Tesla|Model 3": 251
, "Kia|Niro EV": 239
, "BMW|i3 BEV": 202
, "Hyundai|Kona Electric": 161
, "Smart|Fortwo electric drive": 110
, "Peugeot|iOn": 58
, "Citroën|C-Zero": 53
, "Jaguar|I-Pace": 53
, "Smart|Forfour electric drive": 51
, "Hyundai|Ioniq Electric": 47
, "Volkswagen|e-Golf": 38
, "Tesla|Model S": 33
, "Audi|e-tron": 22
, "Tesla|Model X": 21
, "Citroën|E-Mehari": 16
, "Volkswagen|e-up!": 12
, "Citroën|Berlingo Electric": 10
, "Kia|Soul EV": 10
, "Peugeot|Partner Electric": 10
, "Nissan|e-NV200": 6
});

db.insert(db.countries.FR, "2019-05", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#may (Unclear: Why is Tesla missing?)",
{ "Peugeot": 34838
, "Citroën": 21127
, "Opel": 6809
, "DS Automobiles": 2222
, "Renault": 36026
, "Dacia": 13002
, "Alpine": 299
, "Volkswagen": 11487
, "Audi": 5281
, "Škoda": 3159
, "Seat": 3024
, "Porsche": 435
, "Toyota": 8835
, "Lexus": 573
, "Fiat": 7615
, "Jeep": 865
, "Alfa Romeo": 289
, "BMW": 5568
, "Mini": 1760
, "Kia": 3842
, "Hyundai": 3354
, "Mercedes-Benz": 6201
, "Smart": 645
, "Ford": 6541
, "Nissan": 3110
, "Infiniti": 7
, "Volvo": 1454
, "Land Rover": 621
, "Jaguar": 308
, "other": 4643
, "Tesla": 413
});

db.insert(db.countries.FR, "2019-05", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15598367646482fda3e8e139d80cbbc783c7550665-immats-juin-2019.pdf",
{ "Renault|ZOE": 1331
, "Tesla|Model 3": 321
, "Renault|Kangoo Z.E.": 297
, "Nissan|Leaf": 172
, "BMW|i3 BEV": 160
, "Kia|Niro EV": 152
, "Hyundai|Kona Electric": 141
, "Smart|Fortwo electric drive": 78
, "Citroën|C-Zero": 58
, "Tesla|Model S": 50
, "Tesla|Model X": 42
, "Jaguar|I-Pace": 39
, "Peugeot|iOn": 32
, "Kia|Soul EV": 30
, "Hyundai|Ioniq Electric": 28
, "Volkswagen|e-Golf": 28
, "Volkswagen|e-up!": 24
, "Smart|Forfour electric drive": 15
, "Audi|e-tron": 13
, "Citroën|E-Mehari": 7
, "Citroën|Berlingo Electric": 6
, "Peugeot|Partner Electric": 6
, "Nissan|e-NV200": 3
});

db.insert(db.countries.FR, "2019-06", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#jun (Unclear: Why is Tesla missing?)",
{ "Peugeot": 36595
, "Citroën": 22876
, "Opel": 6225
, "DS Automobiles": 3592
, "Renault": 51654
, "Dacia": 15330
, "Alpine": 250
, "Volkswagen": 15963
, "Audi": 6905
, "Seat": 3809
, "Škoda": 3242
, "Porsche": 658
, "Lamborghini": 9
, "Bentley": 4
, "Fiat": 8717
, "Jeep": 1398
, "Alfa Romeo": 406
, "Ferrari": 36
, "Maserati": 27
, "Toyota": 9912
, "Lexus": 623
, "Ford": 7856
, "Kia": 3924
, "Hyundai": 3502
, "Mercedes-Benz": 6527
, "Smart": 657
, "BMW": 4321
, "Mini": 2234
, "Rolls Royce": 1
, "Nissan": 4109
, "Infiniti": 13
, "Volvo": 1853
, "Chevrolet": 5
, "Cadillac": 3
, "Tesla": 1285
});

db.insert(db.countries.FR, "2019-06", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/15627732242408730ad248ad4e4aa36fb14f5e0631-immats%20juin%202019.pdf",
{ "Renault|ZOE": 1845
, "Tesla|Model 3": 1097
, "Renault|Kangoo Z.E.": 392
, "Nissan|Leaf": 332
, "Hyundai|Kona Electric": 189
, "BMW|i3 BEV": 179
, "Kia|Niro EV": 156
, "Tesla|Model S": 108
, "Smart|Fortwo electric drive": 87
, "Tesla|Model X": 80
, "Citroën|C-Zero": 76
});

db.insert(db.countries.FR, "2019-07", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#jul (Unclear: Why is Tesla missing?)",
{ "Peugeot": 30807
, "Citroën": 19823
, "Opel": 5206
, "DS Automobiles": 2646
, "Renault": 23664
, "Dacia": 9927
, "Alpine": 319
, "Volkswagen": 13056
, "Audi": 5130
, "Seat": 3329
, "Škoda": 2947
, "Porsche": 417
, "Lamborghini": 18
, "Bentley": 7
, "Toyota": 9522
, "Lexus": 741
, "Kia": 3859
, "Hyundai": 3677
, "Fiat": 5323
, "Jeep": 1761
, "Alfa Romeo": 308
, "Maserati": 42
, "Ferrari": 41
, "Lancia": 1
, "BMW": 4188
, "Mini": 2234
, "Rolls Royce": 1
, "Mercedes-Benz": 5269
, "Smart": 888
, "Ford": 6002
, "Nissan": 3150
, "Infiniti": 54
, "Volvo": 1646
, "Chevrolet": 6
, "Tesla": 294
});

db.insert(db.countries.FR, "2019-07", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1568280460e03fa2a94992bba0db1deea2e706abf8-immats-ete-2019.pdf (because Juli and August are combined, halves are used)",
{ "Renault|ZOE": 1235
, "Renault|Kangoo Z.E.": 322
, "Nissan|Leaf": 321
, "Tesla|Model 3": 259
, "BMW|i3 BEV": 170
, "Hyundai|Kona Electric": 99
, "Kia|Niro EV": 93
, "Smart|Fortwo electric drive": 67
, "Kia|Soul EV": 45
, "Tesla|Model S": 35
, "Smart|Forfour electric drive": 33
, "Nissan|e-NV200": 41
, "Peugeot|Partner Electric": 25
, "Citroën|Berlingo Electric": 23
});

db.insert(db.countries.FR, "2019-08", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#aug (Unclear: Why is Tesla missing?)",
{ "Peugeot": 19696
, "Citroën": 12911
, "Opel": 3310
, "DS Automobiles": 1501
, "Renault": 18718
, "Dacia": 8050
, "Alpine": 386
, "Volkswagen": 8542
, "Audi": 3807
, "Seat": 2956
, "Škoda": 2416
, "Porsche": 287
, "Lamborghin": 6
, "Bentley": 6
, "Mercedes-Benz": 4734
, "Smart": 3193
, "Toyota": 6784
, "Lexus": 566
, "Kia": 2721
, "Hyundai": 2082
, "BMW": 2961
, "Mini": 1667
, "Rolls Royce": 1
, "Fiat": 3432
, "Jeep": 815
, "Alfa Romeo": 214
, "Maserati": 29
, "Ferrari": 10
, "Ford": 4148
, "Nissan": 3182
, "Infiniti": 22
, "Volvo": 954
, "Chevrolet": 1
, "Cadillac": 1
, "Tesla": 294
});

db.insert(db.countries.FR, "2019-08", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1568280460e03fa2a94992bba0db1deea2e706abf8-immats-ete-2019.pdf (because Juli and August are combined, halves are used)",
{ "Renault|ZOE": 1235
, "Renault|Kangoo Z.E.": 322
, "Nissan|Leaf": 321
, "Tesla|Model 3": 259
, "BMW|i3 BEV": 170
, "Hyundai|Kona Electric": 99
, "Kia|Niro EV": 93
, "Smart|Fortwo electric drive": 67
, "Kia|Soul EV": 45
, "Tesla|Model S": 35
, "Smart|Forfour electric drive": 33
, "Nissan|e-NV200": 41
, "Peugeot|Partner Electric": 25
, "Citroën|Berlingo Electric": 23
});

db.insert(db.countries.FR, "2019-09", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#sep (Unclear: Why is Tesla missing?)",
{ "Peugeot": 30281
, "Citroën": 18710
, "Opel": 6488
, "DS Automobiles": 2142
, "Renault": 36487
, "Dacia": 9134
, "Alpine": 43
, "Volkswagen": 10001
, "Audi": 3107
, "Škoda": 3042
, "Seat": 2968
, "Porsche": 370
, "Toyota": 8015
, "Lexus": 481
, "Kia": 3542
, "Hyundai": 3528
, "BMW": 4662
, "Mini": 2376
, "Rolls Royce": 1
, "Fiat": 5349
, "Jeep": 672
, "Alfa Romeo": 213
, "Ford": 5911
, "Mercedes-Benz": 5450
, "Smart": 234
, "Nissan": 2738
, "Volvo": 2009
, "Suzuki": 1207
, "Land Rover": 555
, "Jaguar": 272
, "Mitsubishi": 306
, "Tesla": 588
});

db.insert(db.countries.FR, "2019-09", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1570545565f08eb0fd30ec313709d8c39f8fe20075-immats-octobre-2019.pdf",
{ "Renault|ZOE": 2470
, "Renault|Kangoo Z.E.": 644
, "Nissan|Leaf": 642
, "Tesla|Model 3": 518
, "BMW|i3 BEV": 340
, "Hyundai|Kona Electric": 199
, "Kia|Niro EV": 187
, "Smart|Fortwo electric drive": 135
, "Kia|Soul EV": 91
, "Tesla|Model S": 70
, "Smart|Forfour electric drive": 67
, "Nissan|e-NV200": 82
, "Peugeot|Partner Electric": 51
, "Citroën|Berlingo Electric": 46
});

db.insert(db.countries.FR, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#oct (Unclear: Why is Tesla missing?)",
{ "Peugeot": 33775
, "Citroën": 21477
, "Opel": 4241
, "DS Automobiles": 2665
, "Renault": 34667
, "Dacia": 12431
, "Alpine": 111
, "Volkswagen": 11939
, "Audi": 4008
, "Seat": 3422
, "Škoda": 3030
, "Porsche": 659
, "Toyota": 10365
, "Lexus": 540
, "BMW": 5569
, "Mini": 2547
, "Hyundai": 3981
, "Kia": 3929
, "Fiat": 5555
, "Jeep": 935
, "Alfa Romeo": 332
, "Ford": 6449
, "Mercedes-Benz": 5490
, "Smart": 658
, "Nissan": 3296
, "Infiniti": 16
, "Volvo": 2009
, "Suzuki": 1601
, "Land Rover": 658
, "Jaguar": 277
, "Mitsubishi": 541
, "Tesla": 178
, "other": 1638
});

db.insert(db.countries.FR, "2019-10", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/157313247269f0fce55475a3683d0110d1960f1837-barometre%20octobre%202019.pdf",
{ "Renault|ZOE": 1939
, "Smart|Fortwo electric drive": 491
, "Nissan|Leaf": 363
, "Kia|Niro EV": 253
, "BMW|i3 BEV": 240
, "Tesla|Model 3": 178
, "Hyundai|Ioniq Electric": 174
, "Hyundai|Kona Electric": 122
, "DS Automobiles|DS3 Crossback": 110
, "Renault|Kangoo Z.E.": 302
, "Nissan|e-NV200": 121
, "Peugeot|e-208": 54
, "Citroën|Berlingo Electric": 42
, "Peugeot|Partner Electric": 23
});

db.insert(db.countries.FR, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#nov (Unclear: Why is Tesla missing?)",
{ "Peugeot": 31510
, "Citroën": 17181
, "Opel": 3801
, "DS Automobiles": 2011
, "Renault": 32614
, "Dacia": 9770
, "Alpine": 178
, "Volkswagen": 12134
, "Audi": 4710
, "Škoda": 3276
, "Seat": 3200
, "Porsche": 616
, "Toyota": 7749
, "Lexus": 529
, "BMW": 5884
, "Mini": 1956
, "Rolls Royce": 3
, "Hyundai": 3600
, "Kia": 3262
, "Ford": 6259
, "Mercedes-Benz": 6067
, "Smart": 170
, "Fiat": 4917
, "Jeep": 723
, "Alfa Romeo": 349
, "Nissan": 3392
, "Infiniti": 7
, "Volvo": 1731
, "Land Rover": 657
, "Jaguar": 183
, "Tesla": 225
, "other": 4296
});

db.insert(db.countries.FR, "2019-11", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1575639106b8246659af0aba2bf961bc2e285f68f8-barometre%20decembre%202019.pdf",
{ "Renault|ZOE": 1923
, "BMW|i3 BEV": 324
, "Nissan|Leaf": 241
, "Tesla|Model 3": 225
, "Nissan|e-NV200": 170
, "Smart|Fortwo electric drive": 106
, "Hyundai|Kona Electric": 77
, "Volkswagen|e-Golf": 75
, "Hyundai|Ioniq Electric": 32
, "Audi|e-tron": 31
, "Renault|Kangoo Z.E.": 277
, "Peugeot|Partner Electric": 32
, "Citroën|Berlingo Electric": 18
});

db.insert(db.countries.FR, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_france_2019#dec (Unclear: Why is Tesla missing?)",
{ "Peugeot": 29268
, "Citroën": 17905
, "Opel": 3204
, "DS Automobiles": 2682
, "Renault": 39747
, "Dacia": 13215
, "Alpine": 386
, "Volkswagen": 16205
, "Audi": 6909
, "Seat": 3284
, "Škoda": 4373
, "Porsche": 1124
, "Lamborghin": 20
, "Bentley": 9
, "Toyota": 7899
, "Lexus": 996
, "Fiat": 6512
, "Jeep": 1008
, "Alfa Romeo": 628
, "Maserati": 114
, "BMW": 8353
, "Mini": 3203
, "Rolls Royce": 1
, "Kia": 4668
, "Hyundai": 3327
, "Mercedes-Benz": 9685
, "Smart": 1472
, "Ford": 7428
, "Nissan": 4750
, "Infiniti": 36
, "Suzuki": 3029
, "Volvo": 3047
, "Land Rover": 1229
, "Jaguar": 536
, "Mitsubishi": 710
, "Chevrolet": 2
, "Cadillac": 1
, "Tesla": 1435
, "other": 2794
});

db.insert(db.countries.FR, "2019-12", db.dsTypes.ElectricCarsByModel, "http://www.avere-france.org/Uploads/Documents/1578561037dfcf28d0734569a6a693bc8194de62bf-BILANANNUEL2019.pdf",
{ "Renault|ZOE": 2146
, "Tesla|Model 3": 1250
, "BMW|i3 BEV": 475
, "Nissan|Leaf": 222
, "Smart|Fortwo electric drive": 159
, "Tesla|Model S": 102
, "Tesla|Model X": 83
, "Volkswagen|e-Golf": 80
, "Jaguar|I-Pace": 74
, "Audi|e-tron": 53
, "Renault|Kangoo Z.E.": 350
, "Nissan|e-NV200": 105
, "Citroën|Berlingo Electric": 25
, "Peugeot|Partner Electric": 24
, "Peugeot|iOn": 6
});

// http://www.avere-france.org/Site/Category/?arborescence_id=143

// Template:

// db.insert(db.countries.FR, "", db.dsTypes.ElectricCarsByModel, "",
// { "Renault|ZOE":
// , "BMW|i3 BEV":
// , "Nissan|Leaf":
// , "Tesla|Model 3":
// , "Nissan|e-NV200":
// , "Smart|Fortwo electric drive":
// , "Hyundai|Kona Electric":
// , "Volkswagen|e-Golf":
// , "Hyundai|Ioniq Electric":
// , "Audi|e-tron":
// , "Renault|Kangoo Z.E.":
// , "Peugeot|Partner Electric":
// , "Citroën|Berlingo Electric":
// , "Tesla|Model S":
// , "Tesla|Model X":
// , "Jaguar|I-Pace":
// , "Peugeot|iOn":
// });
