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
		{ 	message: 'Do nothing.',
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
			},
			advanceDeepIQ: 5
		},
		{ 	message: 'Put a 1/1 token on the battlefield and Deep IQ gets a free roll on Table II.',
			freeRoll: 1,
			addToken: {
				strength: [1, 1],
				modify: 1
			}
		},
		{ 	message: 'Sacrifice your best creature.'
		},
		{ 	message: 'Destroy your best artifact or roll on Spooky Chart.',
			choice: [
				{ 	message: 'Destroy your best artifact' },
				{ 	message: 'roll on Spooky Chart',
					spooky: -2
				}
			]
			
		}
	],[
		{ 	message: 'Do nothing.',
			advance: 1
		},
		{ 	message: 'Do nothing.',
			advance: 1
		},
		{ 	message: 'Do nothing.',
			advance: 1
		},
		{ 	message: 'Put a 4/4 token on the battlefield (+3).',
			advance: 1,
			addToken: {
				strength: [4, 4],
				modify: 3
			}
		},
		{ 	message: 'Sacrifice your best creature.',
			advance: 1
		},
		{ 	message: 'Destroy your best artifact or enchantment.',
			advance: 1
		},
		{ 	message: 'Exile your best creature.' 
		},
		{ 	message: 'Sacrifice your two best creatures or take 4 damage.' 
		},
		{ 	message: 'Put a 2/4 token on the battlefield (+7) or roll on Spooky Chart (–1).',
			choice: [
				{
					message: 'Put a 2/4 token on the battlefield (+7)',
					addToken: {
						strength: [2, 4],
						modify: 7
					}
				},{
					message: 'roll on Spooky Chart (–1)',
					spooky: -1
				}
			]
		},
		{ 	message: 'Roll on Spooky Chart (+0).',
			spooky: 0
		}
	],[
		{ 	message: 'Do nothing.',
			advance: 1
		},
		{ 	message: 'Do nothing.',
			advance: 1
		},
		{ 	message: 'Do nothing.',
			advance: 1
		},
		{ 	message: 'Put a 3/4 token on the battlefield (+4).',
			advance: 1,
			addToken: {
				strength: [3, 4],
				modify: 4
			}
		},
		{ 	message: 'Put a 2/2 token on the battlefield (+2) and Deep IQ gets a free roll on Table III.',
			advance: 1,
			freeRoll: 2,
			addToken: {
				strength: [2, 2],
				modify: 2
			}
		},
		{ 	message: 'Destroy your best creature, enchantment, or artifact.' 
		},
		{ 	message: 'Put a 4/4 token on the battlefield (+1).' ,
			addToken: {
				strength: [4, 4],
				modify: 1
			}
		},
		{ 	message: 'Destroy all lands or put a 4/1 token on the battlefield (+3).',
			choice: [
				{
					message: 'Destroy all lands'
				},{
					message: '4/1 token on the battlefield (+3)',
					addToken: {
						strength: [4, 1],
						modify: 3
					}
				}
			]
		},
		{ 	message: 'Sacrifice your best creature or roll on Spooky Chart (+1).',
			choice: [
				{
					message: 'Sacrifice your best creature'
				},{
					message: 'roll on Spooky Chart (–1)',
					spooky: 1
				}
			]
		},
		{ 	message: 'Roll on Spooky Chart (+2).' ,
			spooky: 2
		}
	],[
		{	message: 'Do nothing.' 
		},
		{	message: 'Do nothing.' 
		},
		{	message: 'Do nothing.' 
		},
		{	message: 'Sacrifice all lands, creatures, and artifacts or put a 2/4 token on the battlefield (+3).',
			choice: [
				{
					message: 'Sacrifice all lands, creatures, and artifacts.'
				},{
					message: 'Put a 2/4 token on the battlefield (+3).',
					addToken: {
						strength: [2, 4],
						modify: 3
					}
				}
			]
		},
		{	message: 'Put a 4/5 token on the battlefield (+6).' ,
			addToken: {
				strength: [4, 5],
				modify: 6
			}
		},
		{	message: 'Destroy your best creature or you take 6 damage.' 
		},
		{	message: 'Destroy your best creature or you take 6 damage.' 
		},
		{	message: 'Destroy your best artifact, enchantment, or land.' 
		},
		{	message: 'Exile your best creature or roll on Spooky Chart (+3).',
			choice: [
				{
					message: 'Exile your best creature'
				},{
					message: 'roll on Spooky Chart (+3)',
					spooky: 3
				}
			] 
		},
		{	message: 'Roll on Spooky Chart (+4).',
			spooky: 4
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



