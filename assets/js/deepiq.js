var DeepIQ = {
	turn: 0,
	health: 20,
	rollModifier: 0,
	creatureModifier: [0,0],
	creatures: [],
	roll: function (){
		return Math.floor( Math.random() * 10 );
	},
	takeTurn: function() {
		this.turn += 1;
		$('.turn').html('Turn: '+this.turn);
		newRoll = this.roll();
		
		if ( Table.nextRoll ) {
			Table.render(newRoll);
		} else {
			Table.nextRoll = true;
			Table.renderMessage( "Do nothing." );
		}
	}
}