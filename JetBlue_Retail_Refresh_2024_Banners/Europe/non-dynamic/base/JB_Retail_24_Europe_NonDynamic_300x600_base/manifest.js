FT.manifest({
    "filename": "index.html",
    "width": 300,
    "height": 600,
    "clickTagCount": 1,
    "hideBrowsers": ["ie8"],
    "richloads": [
 		{"name":"main_rl", "src":"JB_Retail_24_Europe_NonDynamic_300x600_RL1"}
 	],
    "instantAds": [
        {"name":"main_rl",          "type":"richload"}, 
        {"name":"clickTag1_url",    "type":"text", "default":"http://www.landingpageurl.com/?blahblah"}
    ]
});