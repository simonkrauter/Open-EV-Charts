// Data sets for car sales in Australia

"use strict";

db.insert(db.countries.AU, "2023-Q1", db.dsTypes.AllCarsByBrand, "https://www.whichcar.com.au/news/vfacts-january-2023-sales-starting-strong-tesla-model-3-a-top-seller, https://www.whichcar.com.au/news/vfacts-february-2023, https://www.whichcar.com.au/news/vfacts-march-2023-suvs-and-utes-dominate-as-no-passenger-cars-make-top-10",
{ "Toyota": 40918
, "Mazda": 25317
, "Ford": 19131
, "Kia": 18409
, "Hyundai": 16682
, "Mitsubishi": 16639
, "Isuzu": 12517
, "MG": 12385
, "Subaru": 11507
, "Tesla": 10407
, "Volkswagen": 8948
, "Nissan": 8425
, "GWM": 8194
, "Mercedes-Benz": 6741
, "BMW": 5385
, "Audi": 4803
, "Suzuki": 4310
, "Honda": 3939
, "Volvo": 2737
, "BYD": 2098
, "Renault": 1990
, "Škoda": 1968
, "Ram": 1637
, "Porsche": 1421
, "Jeep": 1218
, "Land Rover": 989
, "Mini": 912
, "Cupra": 808
, "Chevrolet": 680
, "Polestar": 548
, "Peugeot": 425
, "Fiat": 333
, "Genesis": 285
, "Jaguar": 110
, "Citroën": 31
, "other": 16156
});

db.insert(db.countries.AU, "2023-Q1", db.dsTypes.ElectricCarsByModel, "https://www.drive.com.au/news/best-selling-electric-cars-2023-full-year/",
{ "Tesla|Model 3": 7238
, "Tesla|Model Y": 3169
, "BYD|Yuan Plus": 2098
, "MG|ZS EV": 916
, "Volvo|EX40": 827
, "Polestar|2": 548
, "Hyundai|Ioniq 5": 288
, "BMW|iX": 255
, "Hyundai|Kona Electric": 237
, "Volvo|EC40": 236
, "BMW|iX3": 175
, "Kia|EV6": 159
, "Kia|Niro EV": 151
, "Mini|Cooper SE": 141
, "Nissan|Leaf": 138
, "Audi|e-tron GT": 107
, "Mercedes-Benz|EQB": 106
, "Porsche|Taycan": 103
, "Mercedes-Benz|EQE": 80
, "Mercedes-Benz|EQA": 77
, "Hyundai|Ioniq 6": 67
, "Genesis|GV60": 61
, "Mercedes-Benz|EQC": 48
, "Audi|Q8 e-tron": 42
, "Genesis|Electrified GV70": 22
, "BMW|i7": 15
, "BMW|i4": 13
, "Jaguar|I-Pace": 11
, "Cupra|Born": 10
, "Mercedes-Benz|eVito": 10
, "other": 60
});

db.insert(db.countries.AU, "2023-Q2", db.dsTypes.AllCarsByBrand, "https://www.whichcar.com.au/news/vfacts-april-2023-rav4-model-y-outlander-medium-suvs-reign-supreme, https://www.whichcar.com.au/news/vfacts-may-2023-suvs-fuel-record-registrations, https://www.whichcar.com.au/news/vfacts-june-2023-hilux-holds-strong-model-y-ev-outsells-ranger",
{ "Toyota": 51317
, "Mazda": 25107
, "Hyundai": 21025
, "Kia": 20751
, "Ford": 19051
, "Tesla": 15170
, "MG": 14307
, "Mitsubishi": 14210
, "Volkswagen": 12022
, "Subaru": 10995
, "GWM": 9354
, "Nissan": 8853
, "Mercedes-Benz": 7921
, "BMW": 7117
, "Isuzu": 6515
, "Audi": 4533
, "Suzuki": 4504
, "BYD": 4098
, "Volvo": 3553
, "Honda": 2819
, "Land Rover": 2725
, "Ram": 2519
, "Renault": 2435
, "Škoda": 1999
, "Porsche": 1810
, "Chery": 1612
, "Jeep": 1451
, "Mini": 1224
, "Chevrolet": 1033
, "Cupra": 778
, "Peugeot": 761
, "Polestar": 599
, "Genesis": 586
, "Fiat": 422
, "Jaguar": 128
, "Citroën": 72
, "other": 29383
});

db.insert(db.countries.AU, "2023-Q2", db.dsTypes.ElectricCarsByModel, "https://www.drive.com.au/news/best-selling-electric-cars-2023-full-year/",
{ "Tesla|Model Y": 10833
, "Tesla|Model 3": 4337
, "BYD|Yuan Plus": 4098
, "MG|ZS EV": 871
, "Volvo|EX40": 769
, "Polestar|2": 599
, "Volvo|EC40": 449
, "Kia|EV6": 376
, "Mercedes-Benz|EQA": 316
, "Kia|Niro EV": 283
, "BMW|iX": 262
, "Hyundai|Ioniq 6": 233
, "Mercedes-Benz|EQB": 201
, "Hyundai|Kona Electric": 199
, "BMW|iX1": 184
, "Mercedes-Benz|EQE": 166
, "Cupra|Born": 164
, "Hyundai|Ioniq 5": 160
, "BMW|iX3": 153
, "Porsche|Taycan": 143
, "Mini|Cooper SE": 125
, "Nissan|Leaf": 119
, "Mercedes-Benz|EQC": 106
, "Audi|e-tron GT": 92
, "BMW|i4": 83
, "GWM|Ora 03": 65
, "Genesis|GV60": 58
, "Genesis|Electrified GV70": 34
, "Audi|Q8 e-tron": 32
, "Ford|E-Transit": 25
, "Mercedes-Benz|eVito": 18
, "BMW|i7": 15
, "Mercedes-Benz|other": 13
, "other": 180
});

db.insert(db.countries.AU, "2023-Q3", db.dsTypes.AllCarsByBrand, "https://www.whichcar.com.au/news/vfacts-july-2023-record-ranger-victory, https://www.whichcar.com.au/news/vfacts-august-2023-new-car-sales-australia, https://www.whichcar.com.au/news/vfacts-september-2023-new-car-sales-australia",
{ "Toyota": 62424
, "Mazda": 24796
, "Ford": 23022
, "Kia": 19963
, "Hyundai": 19251
, "MG": 16115
, "Mitsubishi": 14865
, "Subaru": 12561
, "Tesla": 12420
, "Isuzu": 11984
, "Nissan": 11416
, "Volkswagen": 10873
, "GWM": 8339
, "Mercedes-Benz": 6856
, "BMW": 6538
, "Suzuki": 4414
, "Audi": 4277
, "Honda": 3166
, "Volvo": 2531
, "BYD": 2510
, "Land Rover": 2486
, "Renault": 2097
, "Škoda": 2058
, "Chery": 2035
, "Porsche": 1635
, "Ram": 1573
, "Mini": 1170
, "Jeep": 985
, "Cupra": 943
, "Chevrolet": 901
, "Peugeot": 659
, "Polestar": 642
, "Genesis": 580
, "Fiat": 297
, "Jaguar": 136
, "Citroën": 75
, "other": 20941
});

db.insert(db.countries.AU, "2023-Q3", db.dsTypes.ElectricCarsByModel, "https://www.drive.com.au/news/best-selling-electric-cars-2023-full-year/",
{ "Tesla|Model Y": 9455
, "Tesla|Model 3": 2965
, "BYD|Yuan Plus": 2510
, "MG|MG4 EV": 941
, "Volvo|EX40": 679
, "Polestar|2": 642
, "Kia|EV6": 612
, "MG|ZS EV": 569
, "Cupra|Born": 420
, "Mercedes-Benz|EQA": 332
, "Kia|Niro EV": 287
, "Volvo|EC40": 285
, "Mercedes-Benz|EQB": 271
, "BMW|iX3": 269
, "Hyundai|Ioniq 5": 259
, "Hyundai|Kona Electric": 243
, "GWM|Ora 03": 218
, "BMW|iX1": 207
, "BMW|iX": 144
, "Nissan|Leaf": 134
, "Porsche|Taycan": 129
, "Hyundai|Ioniq 6": 117
, "Mercedes-Benz|EQE": 106
, "Mini|Cooper SE": 89
, "Fiat|500e": 80
, "Mercedes-Benz|EQC": 77
, "BMW|i4": 73
, "Mercedes-Benz|EQE SUV": 67
, "Audi|e-tron GT": 61
, "Genesis|GV60": 42
, "Peugeot|e-2008": 39
, "Audi|Q8 e-tron": 35
, "Peugeot|Partner Electric": 30
, "Ford|E-Transit": 29
, "Mercedes-Benz|EQS SUV": 27
, "BMW|i7": 21
, "Mercedes-Benz|EQS": 20
, "Mercedes-Benz|eVito": 14
, "other": 251
});

db.insert(db.countries.AU, "2023-Q4", db.dsTypes.AllCarsByBrand, "https://www.whichcar.com.au/news/vfacts-october-2023-new-car-sales-australia, https://www.whichcar.com.au/news/vfacts-november-2023-new-car-sales-australia, https://www.whichcar.com.au/news/vfacts-december-2023-new-car-sales-australia",
{ "Toyota": 60581
, "Ford": 26596
, "Mazda": 24788
, "Hyundai": 18225
, "Mitsubishi": 17797
, "Kia": 16997
, "MG": 15539
, "Isuzu": 13000
, "Volkswagen": 11978
, "Subaru": 11051
, "Nissan": 10682
, "GWM": 10510
, "Tesla": 8119
, "BMW": 7144
, "Mercedes-Benz": 6908
, "Audi": 5426
, "Suzuki": 3850
, "Honda": 3810
, "BYD": 3732
, "Volvo": 2307
, "Chery": 2243
, "Land Rover": 2225
, "Škoda": 1974
, "Renault": 1502
, "Cupra": 1236
, "Porsche": 1186
, "Ram": 1104
, "Chevrolet": 1089
, "Mini": 983
, "Jeep": 980
, "Polestar": 674
, "Genesis": 465
, "Peugeot": 454
, "Fiat": 391
, "Jaguar": 207
, "Citroën": 37
, "other": 22538
});

db.insert(db.countries.AU, "2023-Q4", db.dsTypes.ElectricCarsByModel, "https://www.drive.com.au/news/best-selling-electric-cars-2023-full-year/",
{ "Tesla|Model Y": 5312
, "Tesla|Model 3": 2807
, "BYD|Yuan Plus": 2336
, "MG|MG4 EV": 2193
, "BYD|Dolphin": 925
, "Kia|EV6": 684
, "Polestar|2": 674
, "Volvo|EX40": 571
, "BMW|iX1": 545
, "BYD|Seal": 471
, "Mercedes-Benz|EQA": 471
, "MG|ZS EV": 438
, "Cupra|Born": 293
, "Kia|Niro EV": 279
, "GWM|Ora 03": 243
, "Hyundai|Ioniq 5": 240
, "Kia|EV9": 208
, "Hyundai|Ioniq 6": 206
, "Mercedes-Benz|EQB": 205
, "Mini|Cooper SE": 196
, "Mercedes-Benz|EQE SUV": 185
, "BMW|i4": 184
, "BMW|iX3": 175
, "BMW|iX": 161
, "Porsche|Taycan": 160
, "Hyundai|Kona Electric": 157
, "Volvo|EC40": 133
, "Fiat|500e": 93
, "Nissan|Leaf": 93
, "Mercedes-Benz|EQC": 92
, "Audi|Q8 e-tron": 91
, "Mercedes-Benz|EQE": 85
, "Audi|e-tron GT": 79
, "Ford|Mustang Mach-E": 51
, "BMW|i5": 44
, "Peugeot|Partner Electric": 36
, "Mercedes-Benz|EQS": 33
, "Mercedes-Benz|EQS SUV": 33
, "Genesis|GV60": 30
, "Peugeot|e-2008": 18
, "Mercedes-Benz|eVito": 17
, "BMW|i7": 12
, "Genesis|Electrified GV70": 12
, "Jaguar|I-Pace": 11
, "other": 238
});

db.insert(db.countries.AU, "2024-01", db.dsTypes.AllCarsByBrand, "https://www.drive.com.au/news/vfacts-january-2024-new-car-sales/",
{ "Toyota": 17903
, "Mazda": 8165
, "Ford": 6624
, "Hyundai": 6162
, "Mitsubishi": 5911
, "Kia": 5707
, "MG": 4006
, "Isuzu": 3758
, "GWM": 3124
, "Subaru": 3068
, "BYD": 1310
, "Tesla": 1107
, "other": 22937
});

db.insert(db.countries.AU, "2024-01", db.dsTypes.ElectricCarsByModel, "https://thedriven.io/2024/08/06/australian-electric-vehicle-sales-by-month-and-by-model-in-2024/",
{ "Tesla|Model 3": 723
, "BYD|Seal": 589
, "MG|MG4 EV": 537
, "BYD|Yuan Plus": 465
, "Tesla|Model Y": 384
, "BYD|Dolphin": 256
, "Kia|EV6": 199
, "Hyundai|Kona Electric": 186
, "Volvo|EX40": 166
, "Polestar|2": 151
, "MG|ZS EV": 111
, "BMW|i4": 93
, "BMW|iX3": 90
, "GWM|Ora 03": 88
, "BMW|iX1": 80
, "Mercedes-Benz|EQA": 62
, "Ford|Mustang Mach-E": 59
, "Volvo|EC40": 59
, "Mercedes-Benz|EQE SUV": 56
, "Cupra|Born": 49
, "Hyundai|Ioniq 5": 48
, "Kia|EV9": 47
, "Hyundai|Ioniq 6": 42
, "Fiat|500e": 41
, "Kia|Niro EV": 40
, "Porsche|Taycan": 40
, "BMW|iX": 24
, "Mercedes-Benz|EQB": 24
, "Mercedes-Benz|EQC": 20
, "Audi|Q8 e-tron": 15
, "Nissan|Leaf": 14
, "Mini|Cooper SE": 13
, "Genesis|GV60": 12
, "BMW|i5": 11
, "Subaru|Solterra": 11
, "Audi|e-tron GT": 10
, "Mercedes-Benz|EQS SUV": 10
, "Ford|E-Transit": 9
, "Peugeot|e-2008": 8
, "Mercedes-Benz|EQE": 7
, "Peugeot|Partner Electric": 4
, "other": 48
});

db.insert(db.countries.AU, "2024-02", db.dsTypes.AllCarsByBrand, "https://www.drive.com.au/news/vfacts-february-2024-new-car-sales/",
{ "Toyota": 19374
, "Mazda": 7350
, "Ford": 7275
, "Nissan": 6617
, "Mitsubishi": 6411
, "Kia": 6141
, "Hyundai": 5703
, "Tesla": 5665
, "Isuzu": 4692
, "MG": 4474
, "BYD": 1549
, "other": 29772
});

db.insert(db.countries.AU, "2024-02", db.dsTypes.ElectricCarsByModel, "https://thedriven.io/2024/08/06/australian-electric-vehicle-sales-by-month-and-by-model-in-2024/",
{ "Tesla|Model 3": 3593
, "Tesla|Model Y": 2072
, "BYD|Yuan Plus": 711
, "BYD|Seal": 619
, "MG|MG4 EV": 446
, "BYD|Dolphin": 219
, "Toyota|bZ4X": 208
, "Kia|EV6": 192
, "Hyundai|Kona Electric": 176
, "BMW|iX3": 152
, "Volvo|EX40": 143
, "BMW|i4": 128
, "BMW|iX1": 119
, "Polestar|2": 113
, "Mercedes-Benz|EQE SUV": 110
, "Kia|Niro EV": 103
, "GWM|Ora 03": 98
, "MG|ZS EV": 92
, "Mercedes-Benz|EQA": 91
, "Hyundai|Ioniq 5": 84
, "Cupra|Born": 69
, "Ford|Mustang Mach-E": 66
, "Renault|Megane E-Tech": 57
, "Volvo|EC40": 51
, "Porsche|Taycan": 43
, "Kia|EV9": 39
, "BMW|iX": 29
, "Hyundai|Ioniq 6": 27
, "Nissan|Leaf": 27
, "Fiat|500e": 24
, "Peugeot|e-2008": 24
, "Subaru|Solterra": 23
, "Audi|Q8 e-tron": 22
, "Audi|e-tron GT": 19
, "Mercedes-Benz|EQB": 16
, "Mercedes-Benz|EQC": 14
, "BMW|i5": 13
, "Mercedes-Benz|EQE": 10
, "Peugeot|Partner Electric": 8
, "Mercedes-Benz|other": 8
, "other": 54
});

db.insert(db.countries.AU, "2024-03", db.dsTypes.AllCarsByBrand, "https://www.drive.com.au/news/vfacts-march-2024-new-car-sales/",
{ "Toyota": 18961
, "Ford": 8776
, "Mazda": 8246
, "Mitsubishi": 7866
, "Kia": 7070
, "Tesla": 6017
, "Hyundai": 5985
, "Nissan": 4976
, "Isuzu": 4351
, "MG": 3949
, "BYD": 1622
, "other": 31828
});

db.insert(db.countries.AU, "2024-03", db.dsTypes.ElectricCarsByModel, "https://thedriven.io/2024/08/06/australian-electric-vehicle-sales-by-month-and-by-model-in-2024/",
{ "Tesla|Model Y": 4379
, "Tesla|Model 3": 1638
, "BYD|Yuan Plus": 1044
, "BYD|Seal": 365
, "MG|MG4 EV": 352
, "BMW|iX1": 277
, "BMW|i4": 236
, "BYD|Dolphin": 213
, "Kia|EV6": 198
, "Hyundai|Kona Electric": 140
, "Volvo|EX40": 135
, "Mercedes-Benz|EQE SUV": 124
, "Hyundai|Ioniq 5": 112
, "Subaru|Solterra": 111
, "Mercedes-Benz|EQA": 105
, "Toyota|bZ4X": 103
, "GWM|Ora 03": 96
, "MG|ZS EV": 92
, "Polestar|2": 84
, "Kia|Niro EV": 79
, "Kia|EV9": 70
, "BMW|iX": 68
, "Ford|Mustang Mach-E": 56
, "BMW|iX3": 48
, "Porsche|Taycan": 43
, "Nissan|Leaf": 37
, "Cupra|Born": 35
, "Audi|Q8 e-tron": 29
, "BMW|iX2": 29
, "Hyundai|Ioniq 6": 27
, "Volvo|EC40": 25
, "Renault|Megane E-Tech": 22
, "Fiat|500e": 19
, "Mercedes-Benz|EQE": 19
, "BMW|i5": 18
, "Mercedes-Benz|EQC": 18
, "Mercedes-Benz|EQB": 16
, "Audi|e-tron GT": 15
, "Peugeot|Partner Electric": 14
, "Peugeot|e-2008": 8
, "Mercedes-Benz|EQS SUV": 7
, "other": 42
});

db.insert(db.countries.AU, "2024-04", db.dsTypes.AllCarsByBrand, "https://www.drive.com.au/news/vfacts-australian-new-car-sales-april-2024/",
{ "Toyota": 20771
, "Ford": 8648
, "Mazda": 7301
, "Kia": 6653
, "Mitsubishi": 5314
, "Hyundai": 5185
, "Isuzu": 4256
, "MG": 3781
, "GWM": 3330
, "Subaru": 3246
, "Tesla": 2077
, "BYD": 1410
, "other": 25230
});

db.insert(db.countries.AU, "2024-04", db.dsTypes.ElectricCarsByModel, "https://thedriven.io/2024/08/06/australian-electric-vehicle-sales-by-month-and-by-model-in-2024/",
{ "Tesla|Model Y": 1166
, "Tesla|Model 3": 911
, "BYD|Seal": 811
, "MG|MG4 EV": 476
, "BYD|Yuan Plus": 418
, "BMW|i4": 206
, "BYD|Dolphin": 181
, "Volvo|EX40": 140
, "Kia|EV6": 132
, "MG|ZS EV": 127
, "Hyundai|Kona Electric": 125
, "Volvo|EX30": 115
, "Hyundai|Ioniq 5": 113
, "Mercedes-Benz|EQE SUV": 113
, "Polestar|2": 100
, "GWM|Ora 03": 80
, "Kia|Niro EV": 77
, "Toyota|bZ4X": 74
, "Mercedes-Benz|EQA": 73
, "Kia|EV9": 61
, "Subaru|Solterra": 57
, "Ford|Mustang Mach-E": 42
, "Cupra|Born": 41
, "Volvo|EC40": 38
, "Hyundai|Ioniq 6": 37
, "BMW|iX": 36
, "Mercedes-Benz|EQS SUV": 25
, "Mercedes-Benz|EQE": 19
, "Audi|Q8 e-tron": 18
, "Renault|Megane E-Tech": 16
, "Mercedes-Benz|EQB": 15
, "Porsche|Taycan": 12
, "Nissan|Leaf": 11
, "Audi|e-tron GT": 9
, "Genesis|GV60": 7
, "BMW|i7": 6
, "Genesis|Electrified GV70": 6
, "Mercedes-Benz|EQC": 6
, "Mercedes-Benz|EQV": 3
, "other": 48
});

db.insert(db.countries.AU, "2024-05", db.dsTypes.AllCarsByBrand, "https://www.drive.com.au/news/australian-new-car-sales-in-may-2024-vfacts/",
{ "Toyota": 23389
, "Ford": 8806
, "Mazda": 8002
, "Kia": 7504
, "Hyundai": 6495
, "Mitsubishi": 6409
, "Isuzu": 4401
, "MG": 4159
, "GWM": 3820
, "Tesla": 3567
, "BYD": 1914
, "other": 32633
});

db.insert(db.countries.AU, "2024-05", db.dsTypes.ElectricCarsByModel, "https://thedriven.io/2024/08/06/australian-electric-vehicle-sales-by-month-and-by-model-in-2024/",
{ "Tesla|Model 3": 1958
, "Tesla|Model Y": 1609
, "BYD|Seal": 1002
, "BYD|Yuan Plus": 737
, "MG|MG4 EV": 565
, "Volvo|EX30": 466
, "BMW|i4": 198
, "Kia|EV6": 181
, "BYD|Dolphin": 175
, "Mercedes-Benz|EQA": 172
, "Polestar|2": 146
, "Hyundai|Kona Electric": 131
, "MG|ZS EV": 124
, "Hyundai|Ioniq 5": 120
, "GWM|Ora 03": 116
, "Volvo|EX40": 93
, "Toyota|bZ4X": 73
, "Hyundai|Ioniq 6": 66
, "Kia|Niro EV": 60
, "Mercedes-Benz|EQE SUV": 60
, "Volvo|EC40": 50
, "Kia|EV9": 49
, "Subaru|Solterra": 45
, "Nissan|Leaf": 38
, "BMW|iX": 34
, "Cupra|Born": 31
, "Ford|Mustang Mach-E": 30
, "Renault|Megane E-Tech": 25
, "Mercedes-Benz|EQB": 22
, "Mercedes-Benz|EQE": 22
, "Porsche|Taycan": 22
, "Mercedes-Benz|EQS SUV": 19
, "Audi|Q8 e-tron": 15
, "Audi|e-tron GT": 7
, "Genesis|GV60": 7
, "Mercedes-Benz|EQC": 6
, "other": 42
});

db.insert(db.countries.AU, "2024-06", db.dsTypes.AllCarsByBrand, "https://www.drive.com.au/news/vfacts-australian-new-car-sales-june-2024/",
{ "Toyota": 20903
, "Ford": 9493
, "Mazda": 9483
, "Kia": 8225
, "Mitsubishi": 7723
, "Hyundai": 6552
, "Tesla": 4683
, "Subaru": 4460
, "Isuzu": 4445
, "Nissan": 4293
, "BYD": 1261
, "other": 38138
});

db.insert(db.countries.AU, "2024-06", db.dsTypes.ElectricCarsByModel, "https://thedriven.io/2024/08/06/australian-electric-vehicle-sales-by-month-and-by-model-in-2024/",
{ "Tesla|Model Y": 2906
, "Tesla|Model 3": 1777
, "BYD|Seal": 706
, "Volvo|EX30": 420
, "MG|MG4 EV": 395
, "Polestar|2": 356
, "BYD|Yuan Plus": 351
, "BMW|i4": 316
, "BYD|Dolphin": 204
, "Kia|EV6": 158
, "Mercedes-Benz|EQA": 121
, "GWM|Ora 03": 114
, "Toyota|bZ4X": 97
, "MG|ZS EV": 94
, "Volvo|EX40": 83
, "Ford|Mustang Mach-E": 73
, "Volvo|EC40": 68
, "BMW|iX": 64
, "Hyundai|Ioniq 5": 64
, "Kia|Niro EV": 63
, "Nissan|Leaf": 63
, "Mercedes-Benz|EQB": 59
, "Mercedes-Benz|EQE SUV": 53
, "Renault|Megane E-Tech": 49
, "Kia|EV9": 47
, "Kia|EV5": 40
, "Cupra|Born": 34
, "Hyundai|Ioniq 6": 34
, "Subaru|Solterra": 31
, "Mercedes-Benz|EQE": 14
, "Audi|Q8 e-tron": 13
, "Genesis|GV60": 12
, "BMW|i7": 7
, "Audi|e-tron GT": 6
, "Mercedes-Benz|EQS SUV": 5
, "Mercedes-Benz|other": 6
, "other": 35
});

db.insert(db.countries.AU, "2024-07", db.dsTypes.AllCarsByBrand, "https://www.drive.com.au/news/australian-new-car-sales-in-july-2024-hybrid-sales-boom-as-toyota-rav4-leads-the-vfacts-race/",
{ "Toyota": 22705
, "Mazda": 8476
, "Ford": 7749
, "Kia": 6620
, "Hyundai": 6021
, "Mitsubishi": 5718
, "MG": 4101
, "Isuzu": 3821
, "Subaru": 3601
, "GWM": 3319
, "Tesla": 2592
, "BYD": 1230
, "other": 23533
});

db.insert(db.countries.AU, "2024-07", db.dsTypes.ElectricCarsByModel, "https://thedriven.io/2024/08/06/australian-electric-vehicle-sales-by-month-and-by-model-in-2024/",
{ "Tesla|Model Y": 1353
, "Tesla|Model 3": 1239
, "BYD|Seal": 570
, "BYD|Yuan Plus": 434
, "Volvo|EX30": 313
, "MG|MG4 EV": 307
, "BYD|Dolphin": 226
, "BMW|i4": 158
, "Kia|EV6": 158
, "Hyundai|Ioniq 5": 128
, "Toyota|bZ4X": 92
, "Polestar|2": 91
, "GWM|Ora 03": 83
, "Mercedes-Benz|EQA": 77
, "Ford|Mustang Mach-E": 62
, "Kia|EV9": 55
, "Volvo|EC40": 50
, "Hyundai|Ioniq 6": 49
, "Mercedes-Benz|EQE SUV": 46
, "Mercedes-Benz|EQB": 42
, "Nissan|Leaf": 41
, "BMW|iX": 30
, "Subaru|Solterra": 26
, "Cupra|Born": 14
, "Mercedes-Benz|EQE": 13
, "Polestar|3": 12
, "Renault|Megane E-Tech": 12
, "Mercedes-Benz|EQS SUV": 11
, "Porsche|Taycan": 10
, "Audi|Q8 e-tron": 9
, "Genesis|GV60": 4
, "Audi|e-tron GT": 3
, "other": 44
});

db.insert(db.countries.AU, "2024-08", db.dsTypes.AllCarsByBrand, "https://www.drive.com.au/news/australian-new-car-sales-in-august-2024/",
{ "Toyota": 21490
, "Ford": 8890
, "Mazda": 8263
, "Kia": 6903
, "Hyundai": 6211
, "Mitsubishi": 5516
, "Isuzu": 3924
, "MG": 3561
, "Nissan": 3376
, "GWM": 3148
, "Tesla": 2393
, "other": 27111
});

db.insert(db.countries.AU, "2024-08", db.dsTypes.ElectricCarsByModel, "https://thedriven.io/2024/09/04/australian-electric-vehicle-sales-by-month-and-by-model-in-2024/",
{ "Tesla|Model Y": 1330
, "Tesla|Model 3": 1063
, "BYD|Yuan Plus": 427
, "BYD|Seal": 371
, "MG|MG4 EV": 309
, "Volvo|EX30": 220
, "MG|ZS EV": 174
, "BYD|Dolphin": 165
, "BMW|i4": 119
, "Kia|EV6": 114
, "GWM|Ora 03": 106
, "Ford|Mustang Mach-E": 92
, "Hyundai|Kona Electric": 76
, "Toyota|bZ4X": 70
, "Volvo|EC40": 67
, "BMW|iX": 66
, "Mercedes-Benz|EQA": 65
, "Polestar|2": 62
, "Mercedes-Benz|EQB": 53
, "Nissan|Leaf": 46
, "Kia|Niro EV": 45
, "Mercedes-Benz|EQE SUV": 45
, "Hyundai|Ioniq 5": 41
, "Mercedes-Benz|EQS SUV": 31
, "Mercedes-Benz|EQE": 30
, "Hyundai|Ioniq 6": 29
, "Kia|EV9": 26
, "Cupra|Born": 24
, "Porsche|Taycan": 24
, "Subaru|Solterra": 22
, "Renault|Megane E-Tech": 18
, "Audi|Q8 e-tron": 15
, "Genesis|GV60": 5
, "Audi|e-tron GT": 3
, "Polestar|3": 3
, "Mercedes-Benz|other": 3
, "other": 44
});
