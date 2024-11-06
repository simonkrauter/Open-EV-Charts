"use strict";

const testCases =
{ 1000: "electric-ratio:DE"
, 1001: "electric-ratio:DE:ES:combine-countries"
, 1002: "electric-ratio:combine-countries"
, 1003: "electric-ratio:DE:ES"
, 1004: "electric-ratio"
, 1005: "electric-ratio:DE:Tesla"
, 1006: "electric-ratio:DE:ES:combine-countries:Tesla"
, 1007: "electric-ratio:combine-countries:Tesla"
, 1008: "electric-ratio:DE:ES:Tesla"
, 1009: "electric-ratio:Tesla"
, 1010: "electric-ratio:DE:Volkswagen-Group"
, 1011: "electric-ratio:DE:ES:combine-countries:Volkswagen-Group"
, 1012: "electric-ratio:combine-countries:Volkswagen-Group"
, 1013: "electric-ratio:DE:ES:Volkswagen-Group"
, 1014: "electric-ratio:Volkswagen-Group"
, 1015: "electric-ratio:DE:split-brands"
, 1016: "electric-ratio:DE:ES:combine-countries:split-brands"
, 1017: "electric-ratio:combine-countries:split-brands"
, 1018: "electric-ratio:DE:ES:split-brands"
, 1019: "electric-ratio:split-brands"
, 1020: "electric-ratio:DE:split-brands:Volkswagen-Group"
, 1021: "electric-ratio:DE:ES:combine-countries:split-brands:Volkswagen-Group"
, 1022: "electric-ratio:combine-countries:split-brands:Volkswagen-Group"
, 1023: "electric-ratio:DE:ES:split-brands:Volkswagen-Group"
, 1024: "electric-ratio:split-brands:Volkswagen-Group"
, 1025: "electric-ratio:DE:split-brands:Volkswagen-Group:Audi"
, 1026: "electric-ratio:DE:ES:combine-countries:split-brands:Volkswagen-Group:Audi"
, 1027: "electric-ratio:combine-countries:split-brands:Volkswagen-Group:Audi"
, 1028: "electric-ratio:DE:ES:split-brands:Volkswagen-Group:Audi"
, 1029: "electric-ratio:split-brands:Volkswagen-Group:Audi"
, 1030: "electric-ratio:DE:split-models"
, 1031: "electric-ratio:DE:ES:combine-countries:split-models"
, 1032: "electric-ratio:combine-countries:split-models"
, 1033: "electric-ratio:DE:ES:split-models"
, 1034: "electric-ratio:split-models"
, 1035: "electric-ratio:DE:split-models:Tesla"
, 1036: "electric-ratio:DE:ES:combine-countries:split-models:Tesla"
, 1037: "electric-ratio:combine-countries:split-models:Tesla"
, 1038: "electric-ratio:DE:ES:split-models:Tesla"
, 1039: "electric-ratio:split-models:Tesla"
, 1040: "electric-ratio:DE:split-models:Tesla:Model-Y"
, 1041: "electric-ratio:DE:ES:combine-countries:split-models:Tesla:Model-Y"
, 1042: "electric-ratio:combine-countries:split-models:Tesla:Model-Y"
, 1043: "electric-ratio:DE:ES:split-models:Tesla:Model-Y"
, 1044: "electric-ratio:split-models:Tesla:Model-Y"
, 1045: "electric-ratio:DE:split-models:Volkswagen-Group"
, 1046: "electric-ratio:DE:ES:combine-countries:split-models:Volkswagen-Group"
, 1047: "electric-ratio:combine-countries:split-models:Volkswagen-Group"
, 1048: "electric-ratio:DE:ES:split-models:Volkswagen-Group"
, 1049: "electric-ratio:split-models:Volkswagen-Group"
, 1050: "electric-ratio:DE:split-models:Volkswagen-Group:Audi"
, 1051: "electric-ratio:DE:ES:combine-countries:split-models:Volkswagen-Group:Audi"
, 1052: "electric-ratio:combine-countries:split-models:Volkswagen-Group:Audi"
, 1053: "electric-ratio:DE:ES:split-models:Volkswagen-Group:Audi"
, 1054: "electric-ratio:split-models:Volkswagen-Group:Audi"
, 1055: "electric-ratio:DE:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 1056: "electric-ratio:DE:ES:combine-countries:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 1057: "electric-ratio:combine-countries:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 1058: "electric-ratio:DE:ES:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 1059: "electric-ratio:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 1060: "electric-ratio:DE:total"
, 1061: "electric-ratio:DE:ES:combine-countries:total"
, 1062: "electric-ratio:combine-countries:total"
, 1063: "electric-ratio:DE:ES:total"
, 1064: "electric-ratio:total"

, 1100: "electric-ratio:country"
, 1101: "electric-ratio:country:Tesla"
, 1102: "electric-ratio:country:Volkswagen-Group"
, 1103: "electric-ratio:country:split-brands"
, 1104: "electric-ratio:country:split-brands:Volkswagen-Group"
, 1105: "electric-ratio:country:split-brands:Volkswagen-Group:Audi"
, 1106: "electric-ratio:country:split-models"
, 1107: "electric-ratio:country:split-models:Tesla"
, 1108: "electric-ratio:country:split-models:Tesla:Model-Y"
, 1109: "electric-ratio:country:split-models:Volkswagen-Group"
, 1110: "electric-ratio:country:split-models:Volkswagen-Group:Audi"
, 1111: "electric-ratio:country:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 1112: "electric-ratio:country:split-models:total"

, 2000: "electric-sales:DE"
, 2001: "electric-sales:DE:ES:combine-countries"
, 2002: "electric-sales:combine-countries"
, 2003: "electric-sales:DE:ES"
, 2004: "electric-sales"
, 2005: "electric-sales:DE:Tesla"
, 2006: "electric-sales:DE:ES:combine-countries:Tesla"
, 2007: "electric-sales:combine-countries:Tesla"
, 2008: "electric-sales:DE:ES:Tesla"
, 2009: "electric-sales:Tesla"
, 2010: "electric-sales:DE:Volkswagen-Group"
, 2011: "electric-sales:DE:ES:combine-countries:Volkswagen-Group"
, 2012: "electric-sales:combine-countries:Volkswagen-Group"
, 2013: "electric-sales:DE:ES:Volkswagen-Group"
, 2014: "electric-sales:Volkswagen-Group"
, 2015: "electric-sales:DE:split-brands"
, 2016: "electric-sales:DE:ES:combine-countries:split-brands"
, 2017: "electric-sales:combine-countries:split-brands"
, 2018: "electric-sales:DE:ES:split-brands"
, 2019: "electric-sales:split-brands"
, 2020: "electric-sales:DE:split-brands:Volkswagen-Group"
, 2021: "electric-sales:DE:ES:combine-countries:split-brands:Volkswagen-Group"
, 2022: "electric-sales:combine-countries:split-brands:Volkswagen-Group"
, 2023: "electric-sales:DE:ES:split-brands:Volkswagen-Group"
, 2024: "electric-sales:split-brands:Volkswagen-Group"
, 2025: "electric-sales:DE:split-brands:Volkswagen-Group:Audi"
, 2026: "electric-sales:DE:ES:combine-countries:split-brands:Volkswagen-Group:Audi"
, 2027: "electric-sales:combine-countries:split-brands:Volkswagen-Group:Audi"
, 2028: "electric-sales:DE:ES:split-brands:Volkswagen-Group:Audi"
, 2029: "electric-sales:split-brands:Volkswagen-Group:Audi"
, 2030: "electric-sales:DE:split-models"
, 2031: "electric-sales:DE:ES:combine-countries:split-models"
, 2032: "electric-sales:combine-countries:split-models"
, 2033: "electric-sales:DE:ES:split-models"
, 2034: "electric-sales:split-models"
, 2035: "electric-sales:DE:split-models:Tesla"
, 2036: "electric-sales:DE:ES:combine-countries:split-models:Tesla"
, 2037: "electric-sales:combine-countries:split-models:Tesla"
, 2038: "electric-sales:DE:ES:split-models:Tesla"
, 2039: "electric-sales:split-models:Tesla"
, 2040: "electric-sales:DE:split-models:Tesla:Model-Y"
, 2041: "electric-sales:DE:ES:combine-countries:split-models:Tesla:Model-Y"
, 2042: "electric-sales:combine-countries:split-models:Tesla:Model-Y"
, 2043: "electric-sales:DE:ES:split-models:Tesla:Model-Y"
, 2044: "electric-sales:split-models:Tesla:Model-Y"
, 2045: "electric-sales:DE:split-models:Volkswagen-Group"
, 2046: "electric-sales:DE:ES:combine-countries:split-models:Volkswagen-Group"
, 2047: "electric-sales:combine-countries:split-models:Volkswagen-Group"
, 2048: "electric-sales:DE:ES:split-models:Volkswagen-Group"
, 2049: "electric-sales:split-models:Volkswagen-Group"
, 2050: "electric-sales:DE:split-models:Volkswagen-Group:Audi"
, 2051: "electric-sales:DE:ES:combine-countries:split-models:Volkswagen-Group:Audi"
, 2052: "electric-sales:combine-countries:split-models:Volkswagen-Group:Audi"
, 2053: "electric-sales:DE:ES:split-models:Volkswagen-Group:Audi"
, 2054: "electric-sales:split-models:Volkswagen-Group:Audi"
, 2055: "electric-sales:DE:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 2056: "electric-sales:DE:ES:combine-countries:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 2057: "electric-sales:combine-countries:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 2058: "electric-sales:DE:ES:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 2059: "electric-sales:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 2060: "electric-sales:DE:total"
, 2061: "electric-sales:DE:ES:combine-countries:total"
, 2062: "electric-sales:combine-countries:total"
, 2063: "electric-sales:DE:ES:total"
, 2064: "electric-sales:total"

, 2100: "electric-sales:country"
, 2101: "electric-sales:country:Tesla"
, 2102: "electric-sales:country:Volkswagen-Group"
, 2103: "electric-sales:country:split-brands"
, 2104: "electric-sales:country:split-brands:Volkswagen-Group"
, 2105: "electric-sales:country:split-brands:Volkswagen-Group:Audi"
, 2106: "electric-sales:country:split-models"
, 2107: "electric-sales:country:split-models:Tesla"
, 2108: "electric-sales:country:split-models:Tesla:Model-Y"
, 2109: "electric-sales:country:split-models:Volkswagen-Group"
, 2110: "electric-sales:country:split-models:Volkswagen-Group:Audi"
, 2111: "electric-sales:country:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 2112: "electric-sales:country:split-models:total"

, 2200: "electric-sales:DE:company"
, 2201: "electric-sales:DE:ES:combine-countries:company"
, 2202: "electric-sales:combine-countries:company"
, 2203: "electric-sales:DE:ES:company"
, 2204: "electric-sales:company"
, 2205: "electric-sales:DE:brand"
, 2206: "electric-sales:DE:ES:combine-countries:brand"
, 2207: "electric-sales:combine-countries:brand"
, 2208: "electric-sales:DE:ES:brand"
, 2209: "electric-sales:brand"
, 2210: "electric-sales:DE:brand:Tesla"
, 2211: "electric-sales:DE:ES:combine-countries:brand:Tesla"
, 2212: "electric-sales:combine-countries:brand:Tesla"
, 2213: "electric-sales:DE:ES:brand:Tesla"
, 2214: "electric-sales:brand:Tesla"
, 2215: "electric-sales:DE:brand:Volkswagen-Group"
, 2216: "electric-sales:DE:ES:combine-countries:brand:Volkswagen-Group"
, 2217: "electric-sales:combine-countries:brand:Volkswagen-Group"
, 2218: "electric-sales:DE:ES:brand:Volkswagen-Group"
, 2219: "electric-sales:brand:Volkswagen-Group"
, 2220: "electric-sales:DE:model"
, 2221: "electric-sales:DE:ES:combine-countries:model"
, 2222: "electric-sales:combine-countries:model"
, 2223: "electric-sales:DE:ES:model"
, 2224: "electric-sales:model"
, 2225: "electric-sales:DE:model:Tesla"
, 2226: "electric-sales:DE:ES:combine-countries:model:Tesla"
, 2227: "electric-sales:combine-countries:model:Tesla"
, 2228: "electric-sales:DE:ES:model:Tesla"
, 2229: "electric-sales:model:Tesla"
, 2230: "electric-sales:DE:model:Volkswagen-Group"
, 2231: "electric-sales:DE:ES:combine-countries:model:Volkswagen-Group"
, 2232: "electric-sales:combine-countries:model:Volkswagen-Group"
, 2233: "electric-sales:DE:ES:model:Volkswagen-Group"
, 2234: "electric-sales:model:Volkswagen-Group"
, 2235: "electric-sales:DE:model:Volkswagen-Group:Audi"
, 2236: "electric-sales:DE:ES:combine-countries:model:Volkswagen-Group:Audi"
, 2237: "electric-sales:combine-countries:model:Volkswagen-Group:Audi"
, 2238: "electric-sales:DE:ES:model:Volkswagen-Group:Audi"
, 2239: "electric-sales:model:Volkswagen-Group:Audi"

, 3000: "electric-share:DE"
, 3001: "electric-share:DE:ES:combine-countries"
, 3002: "electric-share:combine-countries"
, 3003: "electric-share:DE:ES"
, 3004: "electric-share"
, 3005: "electric-share:DE:Tesla"
, 3006: "electric-share:DE:ES:combine-countries:Tesla"
, 3007: "electric-share:combine-countries:Tesla"
, 3008: "electric-share:DE:ES:Tesla"
, 3009: "electric-share:Tesla"
, 3010: "electric-share:DE:Volkswagen-Group"
, 3011: "electric-share:DE:ES:combine-countries:Volkswagen-Group"
, 3012: "electric-share:combine-countries:Volkswagen-Group"
, 3013: "electric-share:DE:ES:Volkswagen-Group"
, 3014: "electric-share:Volkswagen-Group"
, 3015: "electric-share:DE:split-brands"
, 3016: "electric-share:DE:ES:combine-countries:split-brands"
, 3017: "electric-share:combine-countries:split-brands"
, 3018: "electric-share:DE:ES:split-brands"
, 3019: "electric-share:split-brands"
, 3020: "electric-share:DE:split-brands:Volkswagen-Group"
, 3021: "electric-share:DE:ES:combine-countries:split-brands:Volkswagen-Group"
, 3022: "electric-share:combine-countries:split-brands:Volkswagen-Group"
, 3023: "electric-share:DE:ES:split-brands:Volkswagen-Group"
, 3024: "electric-share:split-brands:Volkswagen-Group"
, 3025: "electric-share:DE:split-brands:Volkswagen-Group:Audi"
, 3026: "electric-share:DE:ES:combine-countries:split-brands:Volkswagen-Group:Audi"
, 3027: "electric-share:combine-countries:split-brands:Volkswagen-Group:Audi"
, 3028: "electric-share:DE:ES:split-brands:Volkswagen-Group:Audi"
, 3029: "electric-share:split-brands:Volkswagen-Group:Audi"
, 3030: "electric-share:DE:split-models"
, 3031: "electric-share:DE:ES:combine-countries:split-models"
, 3032: "electric-share:combine-countries:split-models"
, 3033: "electric-share:DE:ES:split-models"
, 3034: "electric-share:split-models"
, 3035: "electric-share:DE:split-models:Tesla"
, 3036: "electric-share:DE:ES:combine-countries:split-models:Tesla"
, 3037: "electric-share:combine-countries:split-models:Tesla"
, 3038: "electric-share:DE:ES:split-models:Tesla"
, 3039: "electric-share:split-models:Tesla"
, 3040: "electric-share:DE:split-models:Tesla:Model-Y"
, 3041: "electric-share:DE:ES:combine-countries:split-models:Tesla:Model-Y"
, 3042: "electric-share:combine-countries:split-models:Tesla:Model-Y"
, 3043: "electric-share:DE:ES:split-models:Tesla:Model-Y"
, 3044: "electric-share:split-models:Tesla:Model-Y"
, 3045: "electric-share:DE:split-models:Volkswagen-Group"
, 3046: "electric-share:DE:ES:combine-countries:split-models:Volkswagen-Group"
, 3047: "electric-share:combine-countries:split-models:Volkswagen-Group"
, 3048: "electric-share:DE:ES:split-models:Volkswagen-Group"
, 3049: "electric-share:split-models:Volkswagen-Group"
, 3050: "electric-share:DE:split-models:Volkswagen-Group:Audi"
, 3051: "electric-share:DE:ES:combine-countries:split-models:Volkswagen-Group:Audi"
, 3052: "electric-share:combine-countries:split-models:Volkswagen-Group:Audi"
, 3053: "electric-share:DE:ES:split-models:Volkswagen-Group:Audi"
, 3054: "electric-share:split-models:Volkswagen-Group:Audi"
, 3055: "electric-share:DE:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 3056: "electric-share:DE:ES:combine-countries:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 3057: "electric-share:combine-countries:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 3058: "electric-share:DE:ES:split-models:Volkswagen-Group:Audi:Q4-e-tron"
, 3059: "electric-share:split-models:Volkswagen-Group:Audi:Q4-e-tron"

, 3100: "electric-share:DE:company"
, 3101: "electric-share:DE:ES:combine-countries:company"
, 3102: "electric-share:combine-countries:company"
, 3103: "electric-share:DE:ES:company"
, 3104: "electric-share:company"
, 3105: "electric-share:DE:brand"
, 3106: "electric-share:DE:ES:combine-countries:brand"
, 3107: "electric-share:combine-countries:brand"
, 3108: "electric-share:DE:ES:brand"
, 3109: "electric-share:brand"
, 3110: "electric-share:DE:brand:Tesla"
, 3111: "electric-share:DE:ES:combine-countries:brand:Tesla"
, 3112: "electric-share:combine-countries:brand:Tesla"
, 3113: "electric-share:DE:ES:brand:Tesla"
, 3114: "electric-share:brand:Tesla"
, 3115: "electric-share:DE:brand:Volkswagen-Group"
, 3116: "electric-share:DE:ES:combine-countries:brand:Volkswagen-Group"
, 3117: "electric-share:combine-countries:brand:Volkswagen-Group"
, 3118: "electric-share:DE:ES:brand:Volkswagen-Group"
, 3119: "electric-share:brand:Volkswagen-Group"
, 3120: "electric-share:DE:model"
, 3121: "electric-share:DE:ES:combine-countries:model"
, 3122: "electric-share:combine-countries:model"
, 3123: "electric-share:DE:ES:model"
, 3124: "electric-share:model"
, 3125: "electric-share:DE:model:Tesla"
, 3126: "electric-share:DE:ES:combine-countries:model:Tesla"
, 3127: "electric-share:combine-countries:model:Tesla"
, 3128: "electric-share:DE:ES:model:Tesla"
, 3129: "electric-share:model:Tesla"
, 3130: "electric-share:DE:model:Volkswagen-Group"
, 3131: "electric-share:DE:ES:combine-countries:model:Volkswagen-Group"
, 3132: "electric-share:combine-countries:model:Volkswagen-Group"
, 3133: "electric-share:DE:ES:model:Volkswagen-Group"
, 3134: "electric-share:model:Volkswagen-Group"
, 3135: "electric-share:DE:model:Volkswagen-Group:Audi"
, 3136: "electric-share:DE:ES:combine-countries:model:Volkswagen-Group:Audi"
, 3137: "electric-share:combine-countries:model:Volkswagen-Group:Audi"
, 3138: "electric-share:DE:ES:model:Volkswagen-Group:Audi"
, 3139: "electric-share:model:Volkswagen-Group:Audi"

, 4000: "brand-electric-ratio:DE"
, 4001: "brand-electric-ratio:DE:ES:combine-countries"
, 4002: "brand-electric-ratio:combine-countries"
, 4003: "brand-electric-ratio:DE:ES"
, 4004: "brand-electric-ratio"
, 4005: "brand-electric-ratio:DE:Mazda"
, 4006: "brand-electric-ratio:DE:ES:combine-countries:Mazda"
, 4007: "brand-electric-ratio:combine-countries:Mazda"
, 4008: "brand-electric-ratio:DE:ES:Mazda"
, 4009: "brand-electric-ratio:Mazda"
, 4010: "brand-electric-ratio:DE:Volkswagen-Group"
, 4011: "brand-electric-ratio:DE:ES:combine-countries:Volkswagen-Group"
, 4012: "brand-electric-ratio:combine-countries:Volkswagen-Group"
, 4013: "brand-electric-ratio:DE:ES:Volkswagen-Group"
, 4014: "brand-electric-ratio:Volkswagen-Group"
, 4015: "brand-electric-ratio:DE:split-brands"
, 4016: "brand-electric-ratio:DE:ES:combine-countries:split-brands"
, 4017: "brand-electric-ratio:combine-countries:split-brands"
, 4018: "brand-electric-ratio:DE:ES:split-brands"
, 4019: "brand-electric-ratio:split-brands"
, 4020: "brand-electric-ratio:DE:split-brands:Volkswagen-Group"
, 4021: "brand-electric-ratio:DE:ES:combine-countries:split-brands:Volkswagen-Group"
, 4022: "brand-electric-ratio:combine-countries:split-brands:Volkswagen-Group"
, 4023: "brand-electric-ratio:DE:ES:split-brands:Volkswagen-Group"
, 4024: "brand-electric-ratio:split-brands:Volkswagen-Group"
, 4025: "brand-electric-ratio:DE:split-brands:Volkswagen-Group:Audi"
, 4026: "brand-electric-ratio:DE:ES:combine-countries:split-brands:Volkswagen-Group:Audi"
, 4027: "brand-electric-ratio:combine-countries:split-brands:Volkswagen-Group:Audi"
, 4028: "brand-electric-ratio:DE:ES:split-brands:Volkswagen-Group:Audi"
, 4029: "brand-electric-ratio:split-brands:Volkswagen-Group:Audi"

, 4100: "brand-electric-ratio:DE:company"
, 4101: "brand-electric-ratio:DE:ES:combine-countries:company"
, 4102: "brand-electric-ratio:combine-countries:company"
, 4103: "brand-electric-ratio:DE:ES:company"
, 4104: "brand-electric-ratio:company"
, 4105: "brand-electric-ratio:DE:brand"
, 4106: "brand-electric-ratio:DE:ES:combine-countries:brand"
, 4107: "brand-electric-ratio:combine-countries:brand"
, 4108: "brand-electric-ratio:DE:ES:brand"
, 4109: "brand-electric-ratio:brand"
, 4110: "brand-electric-ratio:DE:brand:Tesla"
, 4111: "brand-electric-ratio:DE:ES:combine-countries:brand:Tesla"
, 4112: "brand-electric-ratio:combine-countries:brand:Tesla"
, 4113: "brand-electric-ratio:DE:ES:brand:Tesla"
, 4114: "brand-electric-ratio:brand:Tesla"
, 4115: "brand-electric-ratio:DE:brand:Volkswagen-Group"
, 4116: "brand-electric-ratio:DE:ES:combine-countries:brand:Volkswagen-Group"
, 4117: "brand-electric-ratio:combine-countries:brand:Volkswagen-Group"
, 4118: "brand-electric-ratio:DE:ES:brand:Volkswagen-Group"
, 4119: "brand-electric-ratio:brand:Volkswagen-Group"

, 5000: "all-sales:DE"
, 5001: "all-sales:DE:ES:combine-countries"
, 5002: "all-sales:combine-countries"
, 5003: "all-sales:DE:ES"
, 5004: "all-sales"
, 5005: "all-sales:DE:Tesla"
, 5006: "all-sales:DE:ES:combine-countries:Tesla"
, 5007: "all-sales:combine-countries:Tesla"
, 5008: "all-sales:DE:ES:Tesla"
, 5009: "all-sales:Tesla"
, 5010: "all-sales:DE:Volkswagen-Group"
, 5011: "all-sales:DE:ES:combine-countries:Volkswagen-Group"
, 5012: "all-sales:combine-countries:Volkswagen-Group"
, 5013: "all-sales:DE:ES:Volkswagen-Group"
, 5014: "all-sales:Volkswagen-Group"
, 5015: "all-sales:DE:split-brands"
, 5016: "all-sales:DE:ES:combine-countries:split-brands"
, 5017: "all-sales:combine-countries:split-brands"
, 5018: "all-sales:DE:ES:split-brands"
, 5019: "all-sales:split-brands"
, 5020: "all-sales:DE:split-brands:Volkswagen-Group"
, 5021: "all-sales:DE:ES:combine-countries:split-brands:Volkswagen-Group"
, 5022: "all-sales:combine-countries:split-brands:Volkswagen-Group"
, 5023: "all-sales:DE:ES:split-brands:Volkswagen-Group"
, 5024: "all-sales:split-brands:Volkswagen-Group"
, 5025: "all-sales:DE:split-brands:Volkswagen-Group:Audi"
, 5026: "all-sales:DE:ES:combine-countries:split-brands:Volkswagen-Group:Audi"
, 5027: "all-sales:combine-countries:split-brands:Volkswagen-Group:Audi"
, 5028: "all-sales:DE:ES:split-brands:Volkswagen-Group:Audi"
, 5029: "all-sales:split-brands:Volkswagen-Group:Audi"
, 5030: "all-sales:DE:total"
, 5031: "all-sales:DE:ES:combine-countries:total"
, 5032: "all-sales:combine-countries:total"
, 5033: "all-sales:DE:ES:total"
, 5034: "all-sales:total"

, 5100: "all-sales:country"
, 5101: "all-sales:country:Tesla"
, 5102: "all-sales:country:Volkswagen-Group"
, 5103: "all-sales:country:split-brands"
, 5104: "all-sales:country:split-brands:Volkswagen-Group"
, 5105: "all-sales:country:split-brands:Volkswagen-Group:Audi"
, 5106: "all-sales:country:total"

, 5200: "all-sales:company:DE"
, 5201: "all-sales:company:DE:ES:combine-countries"
, 5202: "all-sales:company:combine-countries"
, 5203: "all-sales:company:DE:ES"
, 5204: "all-sales:company"
, 5205: "all-sales:brand:DE"
, 5206: "all-sales:brand:DE:ES:combine-countries"
, 5207: "all-sales:brand:combine-countries"
, 5208: "all-sales:brand:DE:ES"
, 5209: "all-sales:brand"
, 5210: "all-sales:brand:DE:Tesla"
, 5211: "all-sales:brand:DE:ES:combine-countries:Tesla"
, 5212: "all-sales:brand:combine-countries:Tesla"
, 5213: "all-sales:brand:DE:ES:Tesla"
, 5214: "all-sales:brand:Tesla"
, 5215: "all-sales:brand:DE:Volkswagen-Group"
, 5216: "all-sales:brand:DE:ES:combine-countries:Volkswagen-Group"
, 5217: "all-sales:brand:combine-countries:Volkswagen-Group"
, 5218: "all-sales:brand:DE:ES:Volkswagen-Group"
, 5219: "all-sales:brand:Volkswagen-Group"

, 6000: "all-share:DE"
, 6001: "all-share:DE:ES:combine-countries"
, 6002: "all-share:combine-countries"
, 6003: "all-share:DE:ES"
, 6004: "all-share"
, 6005: "all-share:DE:Tesla"
, 6006: "all-share:DE:ES:combine-countries:Tesla"
, 6007: "all-share:combine-countries:Tesla"
, 6008: "all-share:DE:ES:Tesla"
, 6009: "all-share:Tesla"
, 6010: "all-share:DE:Volkswagen-Group"
, 6011: "all-share:DE:ES:combine-countries:Volkswagen-Group"
, 6012: "all-share:combine-countries:Volkswagen-Group"
, 6013: "all-share:DE:ES:Volkswagen-Group"
, 6014: "all-share:Volkswagen-Group"
, 6015: "all-share:DE:split-brands"
, 6016: "all-share:DE:ES:combine-countries:split-brands"
, 6017: "all-share:combine-countries:split-brands"
, 6018: "all-share:DE:ES:split-brands"
, 6019: "all-share:split-brands"
, 6020: "all-share:DE:split-brands:Volkswagen-Group"
, 6021: "all-share:DE:ES:combine-countries:split-brands:Volkswagen-Group"
, 6022: "all-share:combine-countries:split-brands:Volkswagen-Group"
, 6023: "all-share:DE:ES:split-brands:Volkswagen-Group"
, 6024: "all-share:split-brands:Volkswagen-Group"
, 6025: "all-share:DE:split-brands:Volkswagen-Group:Audi"
, 6026: "all-share:DE:ES:combine-countries:split-brands:Volkswagen-Group:Audi"
, 6027: "all-share:combine-countries:split-brands:Volkswagen-Group:Audi"
, 6028: "all-share:DE:ES:split-brands:Volkswagen-Group:Audi"
, 6029: "all-share:split-brands:Volkswagen-Group:Audi"

, 6100: "all-share:company:DE"
, 6101: "all-share:company:DE:ES:combine-countries"
, 6102: "all-share:company:combine-countries"
, 6103: "all-share:company:DE:ES"
, 6104: "all-share:company"
, 6105: "all-share:brand:DE"
, 6106: "all-share:brand:DE:ES:combine-countries"
, 6107: "all-share:brand:combine-countries"
, 6108: "all-share:brand:DE:ES"
, 6109: "all-share:brand"
, 6110: "all-share:brand:DE:Tesla"
, 6111: "all-share:brand:DE:ES:combine-countries:Tesla"
, 6112: "all-share:brand:combine-countries:Tesla"
, 6113: "all-share:brand:DE:ES:Tesla"
, 6114: "all-share:brand:Tesla"
, 6115: "all-share:brand:DE:Volkswagen-Group"
, 6116: "all-share:brand:DE:ES:combine-countries:Volkswagen-Group"
, 6117: "all-share:brand:combine-countries:Volkswagen-Group"
, 6118: "all-share:brand:DE:ES:Volkswagen-Group"
, 6119: "all-share:brand:Volkswagen-Group"

, 7000: "all-metrics:DE"
, 7001: "all-metrics:DE:split-brands"
, 7002: "all-metrics:DE:split-models"
, 7003: "all-metrics:DE:total"
, 7004: "all-metrics:DE:company"
, 7005: "all-metrics:DE:brand"
, 7006: "all-metrics:DE:ES"

, 8000: "electric-sales:DE:combine-brands"
};

const testCaseNumbers = Object.keys(testCases);
var testCaseNumberInput;
var testCaseNumber = -1;

function addNextPrevButton(div, inc) {
  let button = document.createElement("A");
  button.href = "#";
  button.style.padding = "0.6em";
  button.style.textDecoration = "none";
  if (inc == 1) {
    button.innerHTML = "+1";
    button.title = "Next test case";
  } else if (inc == -1) {
    button.innerHTML = "−1";
    button.title = "Previous test case";
  } else if (inc == 5) {
    button.innerHTML = "+5";
    button.title = "Go 5 test cases forward";
  } else if (inc == -5) {
    button.innerHTML = "−5";
    button.title = "Go 5 test cases backward";
  }
  button.classList.add("button");
  button.classList.add("active");
  button.addEventListener("click", function(event) {
    event.preventDefault();
    const oldIndex = testCaseNumbers.indexOf(testCaseNumber.toString()); // object keys are always strings
    testCaseNumber = testCaseNumbers[(oldIndex + inc + testCaseNumbers.length) % testCaseNumbers.length];
    loadTestCase();
  });
  div.appendChild(button);
}

function initTesting() {
  let div = document.createElement("DIV");
  div.style.marginLeft = "1em";
  div.style.fontSize = "130%";
  homeLink.parentNode.parentNode.appendChild(div);
  div.appendChild(document.createTextNode("Test case:"));
  div.appendChild(document.createElement("BR"));

  addNextPrevButton(div, -5);
  addNextPrevButton(div, -1);

  testCaseNumberInput = document.createElement("INPUT");
  testCaseNumberInput.type = "text";
  testCaseNumberInput.style.fontSize = "200%";
  testCaseNumberInput.style.verticalAlign = "bottom";
  testCaseNumberInput.style.width = "2.7em";
  testCaseNumberInput.style.marginLeft = "0.2em";
  testCaseNumberInput.style.marginRight = "0.2em";
  testCaseNumberInput.title = "Test case number";
  testCaseNumberInput.addEventListener("keyup", function() {
    const parsed = parseInt(testCaseNumberInput.value);
    if (Number.isInteger(parsed))
      testCaseNumber = parsed;
    else
      testCaseNumber = -1;
    loadTestCase();
  });
  div.appendChild(testCaseNumberInput);

  addNextPrevButton(div, 1);
  addNextPrevButton(div, 5);

  addRandomTestingButton(div);

  const hash = decodeURIComponent(location.hash.substr(1));
  if (hash.length > 0) {
    const index = Object.values(testCases).indexOf(hash);
    if (index != -1) {
      testCaseNumber = testCaseNumbers[index];
    }
  } else {
    testCaseNumber = testCaseNumbers[0];
  }
  if (testCaseNumber != -1) {
    loadTestCase();
  }
}

function loadTestCase() {
  if (testCaseNumber != -1)
    testCaseNumberInput.value = testCaseNumber;
  if (testCases[testCaseNumber] == null) {
    dynamicContent.innerHTML = "";
    if (testCaseNumberInput.value != "") {
      let div = document.createElement("DIV");
      div.style.color = "red";
      div.style.marginTop = "1em";
      div.appendChild(document.createTextNode("Test case does not exist."));
      dynamicContent.appendChild(div);
    }
  } else {
    navigateToHash(testCases[testCaseNumber]);
  }
}

function addRandomTestingButton(parent) {
  let div = document.createElement("DIV");
  parent.parentNode.appendChild(div);
  let button = document.createElement("A");
  button.href = "#";
  button.innerHTML = "Randomize Chart Config";
  button.addEventListener("click", function(event) {
    event.preventDefault();
    randomizeChartConfig();
  });
  div.appendChild(button);
}

function randomizeChartConfig() {
  let chartConfig = db.decodeChartConfigString("");
  const params = db.getChartParams();
  for (const i in params) {
    const param = params[i];
    let optionKeys = [];
    if (param.name == "metric") {
      for (const j in param.options) {
        if (j == db.metrics.all)
          continue;
        optionKeys.push(j);
      }
    } else if (param.name == "country") {
      if (Math.random() < 0.2) {
        optionKeys.push(db.countryOptions.all);
      } else if (Math.random() < 0.2) {
        optionKeys.push("DE,FR");
        optionKeys.push("DE,FR,IT");
        optionKeys.push("DE,FR,IT,UK");
        optionKeys.push("US,CN");
      } else {
        for (const j in param.options) {
          if ([db.countryOptions.all, db.countryOptions.combine].includes(j))
            continue;
          optionKeys.push(j);
        }
      }
      if (Math.random() < 0.3) {
        optionKeys.push(db.countryOptions.combine);
      }
    } else if (param.name == "xProperty") {
      optionKeys = Object.keys(param.options);
    } else if (param.name == "brand") {
      if (Math.random() < 0.4)
        optionKeys.push(db.brandOptions.all);
      else if (Math.random() < 0.8)
        optionKeys.push(db.brandOptions.combine);
      else
        optionKeys = Object.keys(param.options);
    } else if (param.name == "model") {
      if (Math.random() < 0.4)
        optionKeys.push(db.modelOptions.all);
      else if (Math.random() < 0.8)
        optionKeys.push(db.modelOptions.combine);
      else
        optionKeys = Object.keys(param.options);
    } else if (param.name == "view" || param.name == "maxSeries") {
      optionKeys = Object.keys(param.options);
    }
    if (optionKeys.length > 0) {
      chartConfig[param.name] = optionKeys[Math.floor(Math.random() * optionKeys.length)];
    }
  }
  navigateToHash(db.encodeChartConfig(chartConfig));
}

initTesting();
