// Data sets for car sales in Norway

"use strict";

db.addCountry("NO", "Norway");

db.insert(db.countries.NO, "2018-01", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1384
, "Toyota": 1153
, "BMW": 1123
, "Volvo": 650
, "Ford": 515
, "Peugeot": 475
, "Škoda": 397
, "Kia": 383
, "Renault": 354
, "Hyundai": 338
, "Mercedes-Benz": 308
, "Suzuki": 289
, "Audi": 264
, "Mazda": 237
, "Nissan": 223
, "Tesla": 215
, "Opel": 213
, "Citroën": 168
, "Mitsubishi": 119
, "Subaru": 70
});

db.insert(db.countries.NO, "2018-01", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/02/bevs-to-power-after-sweden-we-cross-to.html (incomplete, missing i3 BEV)",
{ "Volkswagen|e-Golf": 514
, "Renault|ZOE": 334
, "Hyundai|Ioniq Electric": 170
, "Kia|Soul EV": 119
, "Tesla|Model S": 110
, "Tesla|Model X": 105
});

db.insert(db.countries.NO, "2018-02", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1271
, "Toyota": 1086
, "BMW": 975
, "Volvo": 1112
, "Nissan": 908
, "Škoda": 627
, "Ford": 429
, "Peugeot": 450
, "Mercedes-Benz": 521
, "Kia": 334
, "Hyundai": 277
, "Audi": 344
, "Mazda": 306
, "Suzuki": 194
, "Renault": 116
, "Opel": 224
, "Mitsubishi": 281
, "Tesla": 81
, "Citroën": 115
, "Subaru": 121
});

db.insert(db.countries.NO, "2018-02", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/03/norway-february-2018.html (incomplete, missing i3 BEV)",
{ "Volkswagen|e-Golf": 209
, "Nissan|Leaf": 781
, "Renault|ZOE": 87
, "Hyundai|Ioniq Electric": 177
, "Kia|Soul EV": 76
, "Tesla|Model X": 53
, "Tesla|Model S": 28
});

db.insert(db.countries.NO, "2018-03", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1353
, "Nissan": 2333
, "Toyota": 1037
, "BMW": 1090
, "Volvo": 1240
, "Tesla": 1403
, "Škoda": 589
, "Mercedes-Benz": 651
, "Ford": 472
, "Peugeot": 416
, "Kia": 368
, "Hyundai": 400
, "Audi": 404
, "Mitsubishi": 575
, "Renault": 404
, "Mazda": 327
, "Opel": 265
, "Suzuki": 181
, "Citroën": 186
, "Subaru": 139
});

db.insert(db.countries.NO, "2018-03", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/04/norway-march-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 2172
, "Volkswagen|e-Golf": 433
, "Tesla|Model X": 727
, "Tesla|Model S": 676
, "Renault|ZOE": 347
, "Hyundai|Ioniq Electric": 194
, "Kia|Soul EV": 94
});

db.insert(db.countries.NO, "2018-04", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1970
, "Toyota": 1434
, "Nissan": 1149
, "Volvo": 1301
, "BMW": 1050
, "Škoda": 805
, "Tesla": 716
, "Mercedes-Benz": 739
, "Ford": 655
, "Peugeot": 527
, "Audi": 601
, "Kia": 445
, "Hyundai": 301
, "Mitsubishi": 288
, "Mazda": 381
, "Renault": 308
, "Opel": 298
, "Suzuki": 196
, "Citroën": 206
, "Subaru": 267
});

db.insert(db.countries.NO, "2018-04", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/05/norway-april-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 997
, "Volkswagen|e-Golf": 539
, "Tesla|Model X": 416
, "Tesla|Model S": 300
, "Renault|ZOE": 250
, "Hyundai|Ioniq Electric": 138
, "Kia|Soul EV": 137
});

db.insert(db.countries.NO, "2018-05", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1929
, "Toyota": 1639
, "Nissan": 824
, "BMW": 986
, "Volvo": 845
, "Škoda": 696
, "Mercedes-Benz": 815
, "Tesla": 519
, "Ford": 539
, "Peugeot": 556
, "Audi": 607
, "Kia": 436
, "Mitsubishi": 406
, "Mazda": 394
, "Hyundai": 293
, "Renault": 263
, "Opel": 344
, "Suzuki": 237
, "Citroën": 150
, "Subaru": 110
});

db.insert(db.countries.NO, "2018-05", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/06/norway-may-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 644
, "Volkswagen|e-Golf": 622
, "Tesla|Model X": 247
, "Tesla|Model S": 272
, "Renault|ZOE": 167
, "Hyundai|Ioniq Electric": 180
, "Kia|Soul EV": 102
});

db.insert(db.countries.NO, "2018-06", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 2238
, "Toyota": 1561
, "Nissan": 1346
, "BMW": 1454
, "Volvo": 1040
, "Mercedes-Benz": 1025
, "Tesla": 1112
, "Škoda": 689
, "Ford": 543
, "Peugeot": 512
, "Audi": 584
, "Kia": 390
, "Mitsubishi": 676
, "Mazda": 378
, "Hyundai": 382
, "Renault": 312
, "Opel": 380
, "Suzuki": 289
, "Citroën": 194
, "Subaru": 151
});

db.insert(db.countries.NO, "2018-06", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/07/norway-june-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 1152
, "Volkswagen|e-Golf": 614
, "Tesla|Model X": 645
, "Tesla|Model S": 467
, "Renault|ZOE": 183
, "Hyundai|Ioniq Electric": 182
, "Kia|Soul EV": 62
});

db.insert(db.countries.NO, "2018-07", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1519
, "Toyota": 1112
, "Nissan": 1157
, "BMW": 599
, "Volvo": 411
, "Škoda": 660
, "Mercedes-Benz": 274
, "Tesla": 64
, "Ford": 314
, "Audi": 601
, "Peugeot": 332
, "Mitsubishi": 317
, "Kia": 291
, "Mazda": 318
, "Hyundai": 303
, "Opel": 273
, "Renault": 151
, "Suzuki": 141
, "Citroën": 130
, "Subaru": 211
});

db.insert(db.countries.NO, "2018-07", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/08/norway-july-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 980
, "Volkswagen|e-Golf": 413
, "Tesla|Model X": 40
, "Tesla|Model S": 24
, "Renault|ZOE": 62
, "Hyundai|Ioniq Electric": 175
, "Kia|Soul EV": 72
});

db.insert(db.countries.NO, "2018-08", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 2568
, "Toyota": 1484
, "Nissan": 1722
, "BMW": 990
, "Volvo": 475
, "Škoda": 1002
, "Mercedes-Benz": 307
, "Tesla": 195
, "Audi": 831
, "Ford": 494
, "Peugeot": 537
, "Kia": 482
, "Mitsubishi": 287
, "Hyundai": 478
, "Mazda": 344
, "Renault": 596
, "Opel": 484
, "Suzuki": 189
, "Citroën": 142
, "Subaru": 173
});

db.insert(db.countries.NO, "2018-08", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/09/norway-august-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 1241
, "Volkswagen|e-Golf": 764
, "Tesla|Model X": 113
, "Tesla|Model S": 82
, "Renault|ZOE": 386
, "Hyundai|Ioniq Electric": 159
, "Kia|Soul EV": 168
});

db.insert(db.countries.NO, "2018-09", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 534
, "Toyota": 1116
, "Nissan": 1158
, "BMW": 728
, "Volvo": 964
, "Tesla": 2016
, "Škoda": 288
, "Mercedes-Benz": 415
, "Audi": 130
, "Ford": 247
, "Peugeot": 335
, "Kia": 292
, "Hyundai": 526
, "Mitsubishi": 349
, "Mazda": 304
, "Renault": 164
, "Opel": 162
, "Suzuki": 166
, "Citroën": 123
, "Subaru": 118
});

db.insert(db.countries.NO, "2018-09", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/10/norway-september-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 1071
, "Volkswagen|e-Golf": 133
, "Tesla|Model X": 1234
, "Tesla|Model S": 782
, "Renault|ZOE": 123
, "Hyundai|Ioniq Electric": 288
, "Kia|Soul EV": 126
});

db.insert(db.countries.NO, "2018-10", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1639
, "Toyota": 1206
, "Nissan": 1367
, "BMW": 1040
, "Volvo": 1102
, "Tesla": 201
, "Škoda": 466
, "Mercedes-Benz": 525
, "Ford": 297
, "Audi": 125
, "Peugeot": 324
, "Mitsubishi": 435
, "Kia": 302
, "Hyundai": 411
, "Mazda": 298
, "Renault": 431
, "Opel": 120
, "Suzuki": 234
, "Citroën": 108
, "Subaru": 162
});

db.insert(db.countries.NO, "2018-10", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/11/norway-october-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 1292
, "Volkswagen|e-Golf": 978
, "Tesla|Model X": 118
, "Tesla|Model S": 83
, "Renault|ZOE": 411
, "Hyundai|Ioniq Electric": 211
, "Kia|Soul EV": 162
});

db.insert(db.countries.NO, "2018-11", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1776
, "Toyota": 1032
, "Nissan": 1267
, "BMW": 1270
, "Volvo": 936
, "Tesla": 455
, "Škoda": 645
, "Mercedes-Benz": 251
, "Peugeot": 368
, "Ford": 273
, "Audi": 151
, "Mitsubishi": 666
, "Hyundai": 601
, "Kia": 356
, "Renault": 496
, "Mazda": 207
, "Opel": 370
, "Suzuki": 195
, "Subaru": 116
, "Citroën": 113
});

db.insert(db.countries.NO, "2018-11", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2018/12/norway-november-2018.html (incomplete, missing i3 BEV)",
{ "Nissan|Leaf": 1209
, "Volkswagen|e-Golf": 886
, "Tesla|Model X": 246
, "Tesla|Model S": 209
, "Renault|ZOE": 464
, "Hyundai|Ioniq Electric": 358
, "Kia|Soul EV": 154
, "Jaguar|I-Pace": 335
});

db.insert(db.countries.NO, "2018-12", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1890
, "Toyota": 849
, "Nissan": 762
, "BMW": 1026
, "Volvo": 1302
, "Tesla": 1637
, "Škoda": 869
, "Mercedes-Benz": 403
, "Peugeot": 218
, "Ford": 260
, "Mitsubishi": 597
, "Hyundai": 621
, "Audi": 171
, "Kia": 382
, "Renault": 408
, "Mazda": 136
, "Opel": 63
, "Suzuki": 124
, "Subaru": 97
, "Citroën": 69
});

db.insert(db.countries.NO, "2018-12", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/01/norway-december-2018.html (incomplete, missing i3 BEV)",
{ "Tesla|Model X": 1037
, "Volkswagen|e-Golf": 870
, "Nissan|Leaf": 719
, "Tesla|Model S": 600
, "Renault|ZOE": 327
, "Hyundai|Ioniq Electric": 291
});

db.insert(db.countries.NO, "2019-01", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1388
, "BMW": 1044
, "Toyota": 871
, "Nissan": 787
, "Volvo": 764
, "Hyundai": 714
, "Mitsubishi": 437
, "Škoda": 342
, "Peugeot": 320
, "Ford": 280
, "Kia": 267
, "Mercedes-Benz": 235
, "Suzuki": 207
, "Tesla": 186
, "Mazda": 171
, "Renault": 171
, "Audi": 161
, "Opel": 124
, "Jaguar": 101
, "Mini": 86
});

db.insert(db.countries.NO, "2019-01", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/02/norway-january-2018.html",
{ "Nissan|Leaf": 673
, "Volkswagen|e-Golf": 666
, "BMW|i3 BEV": 619
, "Hyundai|Ioniq Electric": 347
, "Hyundai|Kona Electric": 325
, "Renault|ZOE": 155
, "Tesla|Model X": 150
, "Kia|Soul EV": 86
, "Volkswagen|e-up!": 80
, "Jaguar|I-Pace": 79
, "Opel|Ampera-e": 48
, "Tesla|Model S": 36
});

db.insert(db.countries.NO, "2019-02", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Volkswagen": 1702
, "Toyota": 1069
, "BMW": 769
, "Hyundai": 775
, "Volvo": 693
, "Nissan": 604
, "Tesla": 1016
, "Mitsubishi": 616
, "Škoda": 473
, "Peugeot": 363
, "Kia": 338
, "Ford": 288
, "Jaguar": 419
, "Mercedes-Benz": 268
, "Audi": 263
, "Renault": 250
, "Suzuki": 180
, "Mazda": 197
, "Opel": 175
, "Citroën": 218
});

db.insert(db.countries.NO, "2019-02", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/03/norway-february-2019.html",
{ "Volkswagen|e-Golf": 780
, "Nissan|Leaf": 508
, "BMW|i3 BEV": 396
, "Tesla|Model 3": 791
, "Hyundai|Kona Electric": 414
, "Hyundai|Ioniq Electric": 302
, "Jaguar|I-Pace": 391
, "Renault|ZOE": 208
, "Tesla|Model X": 141
, "Volkswagen|e-up!": 81
, "Kia|Niro EV": 133
, "Kia|Soul EV": 28
, "Opel|Ampera-e": 62
, "Tesla|Model S": 84
});

db.insert(db.countries.NO, "2019-03", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 5822
, "Volkswagen": 1647
, "Toyota": 1168
, "BMW": 1165
, "Volvo": 1038
, "Hyundai": 788
, "Nissan": 751
, "Mitsubishi": 1008
, "Škoda": 525
, "Audi": 822
, "Kia": 422
, "Peugeot": 327
, "Jaguar": 474
, "Ford": 385
, "Mercedes-Benz": 387
, "Renault": 393
, "Suzuki": 274
, "Mazda": 196
, "Opel": 226
, "Citroën": 127
});

db.insert(db.countries.NO, "2019-03", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/04/norway-march-2019.html",
{ "Tesla|Model 3": 5315
, "Volkswagen|e-Golf": 894
, "BMW|i3 BEV": 784
, "Nissan|Leaf": 618
, "Hyundai|Kona Electric": 331
, "Hyundai|Ioniq Electric": 314
, "Jaguar|I-Pace": 442
, "Audi|e-tron": 680
, "Renault|ZOE": 344
, "Tesla|Model X": 341
, "Kia|Niro EV": 187
, "Tesla|Model S": 166
, "Volkswagen|e-up!": 51
, "Opel|Ampera-e": 65
});

db.insert(db.countries.NO, "2019-04", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 811
, "Volkswagen": 1927
, "Toyota": 1002
, "BMW": 845
, "Volvo": 933
, "Hyundai": 613
, "Nissan": 529
, "Mitsubishi": 151
, "Škoda": 612
, "Audi": 544
, "Kia": 371
, "Jaguar": 372
, "Peugeot": 354
, "Ford": 362
, "Mercedes-Benz": 240
, "Renault": 230
, "Suzuki": 308
, "Mazda": 280
, "Opel": 192
, "Citroën": 125
});

db.insert(db.countries.NO, "2019-04", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/05/norway-april-2019.html",
{ "Tesla|Model 3": 720
, "Volkswagen|e-Golf": 911
, "BMW|i3 BEV": 467
, "Nissan|Leaf": 386
, "Hyundai|Kona Electric": 306
, "Jaguar|I-Pace": 350
, "Hyundai|Ioniq Electric": 243
, "Audi|e-tron": 371
, "Renault|ZOE": 206
, "Tesla|Model X": 68
, "Kia|Niro EV": 77
, "Volkswagen|e-up!": 105
, "Tesla|Model S": 23
});

db.insert(db.countries.NO, "2019-05", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 1010
, "Volkswagen": 1692
, "Toyota": 2048
, "BMW": 746
, "Volvo": 922
, "Hyundai": 552
, "Nissan": 514
, "Škoda": 798
, "Mitsubishi": 345
, "Audi": 743
, "Jaguar": 524
, "Kia": 434
, "Peugeot": 376
, "Ford": 372
, "Mercedes-Benz": 240
, "Renault": 322
, "Suzuki": 243
, "Mazda": 270
, "Opel": 184
, "Citroën": 151
});

db.insert(db.countries.NO, "2019-05", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/06/norway-may-2019.html",
{ "Tesla|Model 3": 705
, "Volkswagen|e-Golf": 779
, "BMW|i3 BEV": 344
, "Nissan|Leaf": 390
, "Jaguar|I-Pace": 510
, "Audi|e-tron": 530
, "Renault|ZOE": 268
, "Tesla|Model X": 258
, "Hyundai|Kona Electric": 234
, "Hyundai|Ioniq Electric": 216
, "Kia|Niro EV": 84
, "Volkswagen|e-up!": 71
, "Tesla|Model S": 47
});

db.insert(db.countries.NO, "2019-06", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 3760
, "Volkswagen": 1825
, "Toyota": 1750
, "BMW": 801
, "Volvo": 653
, "Hyundai": 643
, "Nissan": 569
, "Škoda": 635
, "Audi": 733
, "Mitsubishi": 579
, "Jaguar": 351
, "Kia": 259
, "Ford": 380
, "Peugeot": 326
, "Mercedes-Benz": 386
, "Renault": 289
, "Suzuki": 189
, "Mazda": 258
, "Opel": 259
, "Citroën": 144
});

db.insert(db.countries.NO, "2019-06", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/07/norway-june-2019.html",
{ "Tesla|Model 3": 3012
, "Volkswagen|e-Golf": 798
, "BMW|i3 BEV": 453
, "Nissan|Leaf": 475
, "Audi|e-tron": 574
, "Jaguar|I-Pace": 329
, "Hyundai|Kona Electric": 289
, "Hyundai|Ioniq Electric": 197
, "Renault|ZOE": 265
, "Tesla|Model X": 314
, "Tesla|Model S": 434
, "Kia|Niro EV": 44
, "Volkswagen|e-up!": 48
});

db.insert(db.countries.NO, "2019-07", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 492
, "Volkswagen": 1334
, "Toyota": 1218
, "BMW": 573
, "Volvo": 695
, "Hyundai": 552
, "Nissan": 696
, "Audi": 706
, "Škoda": 559
, "Mitsubishi": 103
, "Jaguar": 136
, "Ford": 285
, "Peugeot": 264
, "Kia": 179
, "Mercedes-Benz": 136
, "Renault": 209
, "Mazda": 166
, "Suzuki": 91
, "Opel": 231
, "Citroën": 165
});

db.insert(db.countries.NO, "2019-07", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/08/norway-july-2019.html",
{ "Tesla|Model 3": 308
, "Volkswagen|e-Golf": 571
, "Nissan|Leaf": 584
, "BMW|i3 BEV": 207
, "Audi|e-tron": 510
, "Jaguar|I-Pace": 128
, "Hyundai|Kona Electric": 290
, "Hyundai|Ioniq Electric": 176
, "Renault|ZOE": 189
, "Tesla|Model X": 41
, "Tesla|Model S": 143
, "Kia|Niro EV": 24
, "Opel|Ampera-e": 140
});

db.insert(db.countries.NO, "2019-08", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 830
, "Volkswagen": 2284
, "Toyota": 1331
, "BMW": 805
, "Volvo": 586
, "Nissan": 718
, "Hyundai": 508
, "Škoda": 838
, "Audi": 693
, "Mitsubishi": 384
, "Peugeot": 357
, "Ford": 278
, "Jaguar": 250
, "Kia": 280
, "Mercedes-Benz": 248
, "Renault": 259
, "Mazda": 176
, "Suzuki": 220
, "Opel": 285
, "Citroën": 152
});

db.insert(db.countries.NO, "2019-08", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/09/norway-august-2019.html",
{ "Tesla|Model 3": 649
, "Volkswagen|e-Golf": 1083
, "Nissan|Leaf": 548
, "BMW|i3 BEV": 394
, "Audi|e-tron": 445
, "Jaguar|I-Pace": 236
, "Hyundai|Kona Electric": 234
, "Hyundai|Ioniq Electric": 193
, "Renault|ZOE": 235
, "Tesla|Model X": 122
, "Tesla|Model S": 59
, "Opel|Ampera-e": 156
, "Volkswagen|e-up!": 167
, "Kia|Niro EV": 11
});

db.insert(db.countries.NO, "2019-09", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
{ "Tesla": 2762
, "Volkswagen": 1019
, "Toyota": 1196
, "BMW": 716
, "Volvo": 668
, "Nissan": 675
, "Hyundai": 632
, "Audi": 546
, "Škoda": 366
, "Mitsubishi": 258
, "Ford": 290
, "Peugeot": 216
, "Jaguar": 186
, "Kia": 219
, "Mercedes-Benz": 312
, "Renault": 129
, "Suzuki": 198
, "Opel": 197
, "Mazda": 127
, "Citroën": 99
});

db.insert(db.countries.NO, "2019-09", db.dsTypes.ElectricCarsByModel, "http://ev-sales.blogspot.com/2019/10/norway-september-20.html",
{ "Tesla|Model 3": 2342
, "Volkswagen|e-Golf": 645
, "Nissan|Leaf": 585
, "BMW|i3 BEV": 398
, "Audi|e-tron": 476
, "Jaguar|I-Pace": 180
, "Hyundai|Kona Electric": 387
, "Hyundai|Ioniq Electric": 185
, "Renault|ZOE": 101
, "Tesla|Model X": 317
, "Tesla|Model S": 103
, "Opel|Ampera-e": 124
, "Volkswagen|e-up!": 40
});

// Template:

// db.insert(db.countries.NO, "xx", db.dsTypes.AllCarsByBrand, "https://ofv.no/registreringsstatistikk",
// { "Tesla":
// , "Volkswagen":
// , "Toyota":
// , "BMW":
// , "Volvo":
// , "Hyundai":
// , "Nissan":
// , "Škoda":
// , "Mitsubishi":
// , "Audi":
// , "Jaguar":
// , "Kia":
// , "Peugeot":
// , "Ford":
// , "Mercedes-Benz":
// , "Renault":
// , "Suzuki":
// , "Mazda":
// , "Opel":
// , "Citroën":
// });

// db.insert(db.countries.NO, "xx", db.dsTypes.ElectricCarsByModel, "",
// { "Tesla|Model 3":
// , "Volkswagen|e-Golf":
// , "BMW|i3 BEV":
// , "Nissan|Leaf":
// , "Jaguar|I-Pace":
// , "Audi|e-tron":
// , "Renault|ZOE":
// , "Tesla|Model X":
// , "Hyundai|Kona Electric":
// , "Hyundai|Ioniq Electric":
// , "Kia|Niro EV":
// , "Volkswagen|e-up!":
// , "Tesla|Model S":
// });
