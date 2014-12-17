var Tables = [
	[//table 1
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Sacrifice your best creature.',
			advance: 1, 
		},
		{ 	message: 'Put a 1/1 token on the battlefield.',
			advance: 1,
			addToken: {
				strength: [1, 1],
				modify: -4
			}	
		},
		{ 	message: 'Put a 1/1 token on the battlefield.',
			addToken: {
				strength: [1, 1],
				modify: -4
			}	
		}
	],
	[//table 2
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Do nothing.',
			advance: 1, 
		},
		{ 	message: 'Put a 2/2 token on the battlefield.',
			advance: 1, 
			addToken: {
				strength: [2, 2],
				modify: 0
			}
		},
		{ 	message: 'Put a 2/2 token on the battlefield.',
			advance: 1, 
			addToken: {
				strength: [2, 2],
				modify: 0
			}
		},
		{ 	message: 'Put a 2/2 token on the battlefield.',
			advance: 1, 
			addToken: {
				strength: [2, 2],
				modify: 0
			}
		},
		{ 	message: 'Move Deep IQ up to Table IV.',
			advanceDeepIQ: 3, 
		},
		{ 	message: 'Exile your best creature.'
		},
		{ 	message: 'Exile your best creature.'
		}
	],[
		{ 	message: 'Do nothing.',,
			advance: 1
		},
		{ 	message: 'Do nothing.',
			advance: 1
		},
		{ 	message: 'Do nothing.',
			advance: 1
		},
		{ 	message: 'Put a 2/2 token on the battlefield.',
			advance: 1,
			addToken: {
				strength: [2, 2],
				modify: 2
			}
		},
		{ 	message: 'Put a 2/1 token on the battlefield.',
			advance: 1,
			addToken: {
				strength: [2, 1],
				modify: 4
			}
		},
		{ 	message: 'Destroy your best land.',
			advance: 1
		},
		{ 	message: 'Move Deep IQ up to Table V and put a 1/1 token on the battlefield.',
			addToken: {
				strength: [1, 1],
				modify: 0
			}
			advanceDeepIQ: 5
		},
		{ 	message: 'Put a 1/1 token on the battlefield and Deep IQ gets a free roll on Table II.',
			freeRoll: 1;
			addToken: {
				strength: [1, 1],
				modify: 1
			}
		},
		{ 	message: 'Sacrifice your best creature.'
		},
		{ 	message: 'Destroy your best artifact or roll on Spooky Chart.'
			choice: {
				['Destroy your best artifact', 'roll on Spooky Chart'],
				spooky: -2
			}
		}
	]
];

var Tokens = [
	{ 	
		message: 'No extra abilities.' 
	},
	{ 	
		message: 'First strike.',
		power: [2,0] 
	},
	{ 	
		message: 'Regeneration.'
	},
	{ 	message: 'Defender.',
		power: [0,3] 
	},
	{ 	
		message: 'First strike.'
	},
	{ 	
		message: 'Protection from: {color}'
	},
	{ 	
		message: 'Deathtouch.'
	},
	{ 	
		message: 'Flying, lifelink.',
		power: [2,2] 
	},
	{ 	
		message: 'Haste and trample.' 
	},
	{ 	
		additionalToken: 2,
		modifier: false 
	},
	{ 	
		message: 'Flying and trample.'
	},
	{ 	
		message: 'Protection from {color} and vigilance.' 
	},
	{ 	
		message: 'When this creature enters the battlefield, sacrifice one of your creatures at random.'
	},
	{ 	
		message: 'First strike and shroud.'
	},
	{ 	
		message: 'Protection from {color}, deathtouch, and your weakest creature becomes unblockable.', 
		additionalToken: 1,
		modifier: true 
	},
	{ 	
		message: 'When this creature enters the battlefield, exile target permanent you control.',
	}
];



