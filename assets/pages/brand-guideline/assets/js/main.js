//Smooth Scrolling Function
$(function() { 
	$(".scroll").click(function(event){		
	event.preventDefault();
	$('html,body').animate({
		scrollTop:$(this.hash).offset().top}, 
		500
		);
	});
});

// Modal
var modal = $('.modal');

$( ".mdlimg" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});

$( ".overlay" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});

$( ".modal__close" ).on( "click", function() {
  $( modal ).toggleClass('modal--show');
});  
