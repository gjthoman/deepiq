var Table = {
	number: 0,
	modifier: 0,
	roll: function (){
		return Math.floor( Math.random() * 10 );
	},
	render: function( roll ) {
		var result = Tables[this.number][roll];
		$('.message').html( result.message );
		console.log( result.addToken );
		console.log(this.number);
		if( result.addToken ) {
			console.log('addToken');
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
			multi: false
		};
		if( token.modify != null ){
			this.modify( card, token.modify );
		} 
	},
	modify: function( card, modify ){ 
		var roll = this.roll() + modify;

		if (roll < 0) {
			roll = 0;
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
		$card = $('<div class="card"><span class="remove">remove</span><span class="tap">tap</span></div>');
		$message = $('<p>' + card.message + '</p>');
		$stats = $('<span class="stats"><span>'+ card.attack +'</span>/<span>'+ card.toughness +'</span></span>');

		$card.append($stats).append($message);
		$('.cards').append($card);
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