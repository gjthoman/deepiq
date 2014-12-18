$(document).ready(function(){
	$('#deep-iq').on('click', function(){
		DeepIQ.takeTurn();
	});
	$(window).keypress(function(e){
		if (e.which == 32) {
			DeepIQ.takeTurn();

		}
	});
	$('.cards').on('click', '.remove', function(){
		$(this).closest('.card').remove();
	});
	$('.cards').on('click', '.tap', function(){
		$(this).closest('.card').toggleClass('tapped');
	});
	$('body').on('click', '.message button', function(){
		if ( Table.token != null && Table.token.spooky != undefined ) {
			console.log('render');
			Table.renderSpooky(Table.token.spooky);
			Table.token = null;
		}

		if ( Table.token != null && Table.token.advanceDeepIQ ) {
			Table.number = Table.token.advanceDeepIQ;
		}

		$(this).closest('.message-wrapper').remove();
	});
	$('body').on('click', '.choice button', function(){
		var index = $(this).index();
		var decision = Table.choice[index];

		if ( decision.spooky ) {
			Table.renderSpooky(decision.spooky);
		} else if ( decision.addToken ) {
			Table.addToken( decision.addToken );
		} else if ( decision.message ) {
			Table.renderMessage ( decision.message );
		}

		$(this).closest('.choice-wrapper').remove();


	});
});