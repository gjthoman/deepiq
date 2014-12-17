$(document).ready(function(){
	$('#deep-iq').on('click', function(){
		DeepIQ.takeTurn();
	});
	$('.cards').on('click', '.remove', function(){
		$(this).closest('.card').remove();
	})
});