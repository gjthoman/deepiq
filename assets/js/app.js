$(document).ready(function(){
	$('#deep-iq').on('click', function(){
		DeepIQ.takeTurn();
	});
	$('.cards').on('click', '.remove', function(){
		$(this).closest('.card').remove();
	});
	$('.cards').on('click', '.tap', function(){
		$(this).closest('.card').toggleClass('tapped');
	});
});