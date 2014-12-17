var DeepIQ = {
	turn: 0,
	health: 20,
	creatures: [],
	roll: function (){
		return Math.floor( Math.random() * 10 );
	},
	takeTurn: function() {
		this.turn += 1;
		$('.turn').html('Turn: '+this.turn);
		newRoll = this.roll();

		Table.render(newRoll);
	}
}