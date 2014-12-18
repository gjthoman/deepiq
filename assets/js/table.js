var Table = {
	number: 0,
	modifier: 0,
	choice: null,
	token: null,
	nextRoll: true,
	
	roll: function (){
		return Math.floor( Math.random() * 10 );
	},
	
	render: function( roll ) {
		roll += this.modifier;

		roll = roll >= 0 ? roll : 0;
		roll = roll < Tables[this.number].length ? roll : Tables[this.number].length - 1;

		var result = Tables[this.number][roll];
		this.token = result;
		if ( result.choice ) {
			this.renderChoice( result.choice );
		} else {
			this.renderMessage( result.message );
		}
		if( result.addToken ) {
			this.addToken(result.addToken);
		}

		if( result.advance ) {
			if( Tables.length > this.number + 1 ){
				this.number += 1;
			}
		}
	},
	
	addToken: function( token ) {
		var card = {
			attack: token.strength[0],
			toughness: token.strength[1],
			message: '',
			multi: false,
			type: token.type
		};
		if( token.modify != null ){
			this.modify( card, token.modify );
		} 
	},
	
	modify: function( card, modify ){ 
		var roll = this.roll() + modify + this.modifier;

		if (roll < 0) {
			roll = 0;
		}

		if ( roll >= Tokens[roll].length ) {
			roll = Tokens[roll].length - 1;
		}

		if ( Tokens[roll].message ) {
			var newLine = card.message == '' ? '' : '<br>';
			card.message += newLine + Tokens[roll].message;

			if ( card.message.indexOf('{color}') > -1 ) {
				card.message = card.message.replace('{color}', this.getColor() );
			}
		}

		if ( Tokens[roll].power ) {
			card.attack += Tokens[roll].power[0];
			card.toughness += Tokens[roll].power[1];
		}

		if ( Tokens[roll].additionalToken ) {
			card.multi = true;

			var mod = Tokens[roll].modifier == true ? modify : 0;

			for ( var i = 0; i < Tokens[roll].additionalToken; i++ ) {
				this.modify( card, mod );	
			}

			this.renderCard( card );
		} 
		if ( card.multi == false ){
			
			this.renderCard( card );
		
		}

	},
	
	renderCard: function( card ) {
		console.log(card);
		$card = $('<div class="card ' + card.type +'"><span class="remove">remove</span><span class="tap">tap</span></div>');
		$message = $('<p>' + card.message + '</p>');
		$stats = '';
		if ( card.attack ) {
			$stats = $('<span class="stats"><span>'+ card.attack +'</span>/<span>'+ card.toughness +'</span></span>');
		}
		$card.append($stats).append($message);
		$('.cards').append($card);
	},
	
	renderMessage: function( message ) {
		$message = $('<div class="message-wrapper"><div class="message"><p>' + message + '</p><button>OK</button></div></div>');
		$('body').append($message);
	},

	renderChoice: function( choice ) {
		this.choice = choice;
		$choice = $('<div class="choice-wrapper"><div class="choice"><button>' +choice[0].message+ '</button><button>' +choice[1].message+ '</button></div></div>');
		$('body').append($choice);

	},

	renderSpooky: function( modifier ) {
		var roll = this.roll() + modifier + this.modifier;
		if ( roll < 0 ) {
			roll = 0;
		}
		if ( roll >= Spooky.length ) {
			roll = Spooky.length - 1;
		}
		var spooky = Spooky[ roll ];

		if ( spooky.nextRoll == false ) {
			this.nextRoll = false;
			this.renderMessage( spooky.message );
		} else if (spooky.card) {
			this.renderCard( spooky.card );
		} else if (spooky.message ) {
			this.renderMessage( spooky.message );
		}

		if ( spooky.rollModifier ) {
			this.modifier += spooky.rollModifier;
		}
	},
	
	getColor: function() {
		newRoll = this.roll();

		switch(newRoll) {
		    case 0:
		        return 'black'
		        break;
		    case 1:
		        return 'black'
		        break;
	        case 2:
	            return 'black'
	            break;
            case 3:
		        return 'white'
		        break;
		    case 4:
		        return 'white'
		        break;
	        case 5:
	            return 'white'
	            break;
            case 6:
		        return 'red'
		        break;
	        case 7:
	            return 'red'
	            break;
            case 8:
	            return 'blue'
	            break;
            case 9:
	            return 'green'
	            break;
		}
	}

}