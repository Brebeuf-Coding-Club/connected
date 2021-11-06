var numbers = ["(123)456-7890", "(345)678-9321", "(293)847-5439"];
var addresses = ["HomeAddress", "SchoolAddress"];
var emails = {
	"email": {
		"abc1@gmail.com": {
			"accounts": {
				"Amazon": {
						"tags": [numbers[0], addresses[0]],
				},
				"Google": {
					"tags": [numbers[1]]
				},
				"Instagram": {
					"tags": [numbers[2], addresses[0]]
				},
				"Random Number Generator": {
					"tags": [addresses[0]]
				},
				"Guitar Tab Creator": {
					"tags": [numbers[0]]
				},
				
			},
			"index": 0
		},
		"cd2@family.org": {
			"accounts": {
				"Apple": {
					"tags": [numbers[2], addresses[0]]
				},
				"Microsoft": {
					"tags": [numbers[1], addresses[1]]
				},
				"Netflix": {
					"tags": [numbers[1]]
				},
			},
			"index": 1
		},
		"what3@school.org": {
			"accounts": {
				"Canvas": {
					"tags": [numbers[1], addresses[1]]
				},
				"Cool Math": {
					"tags": [addresses[1]]
				},
				"Google": {
					"tags": [numbers[2], addresses[1]]
				},
				"Lunch": {
					"tags": [numbers[0]]
				},
				"Microsoft": {
					"tags": [numbers[0]]
				},
				"Turnitin": {
					"tags": [addresses[1]]
				}
			},
			"index": 2
		}
	}
}