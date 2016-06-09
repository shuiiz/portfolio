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
$(function() {
    var MODAL = {
      launch: $('.js-launch-modal'),
      modal: $('.js-modal'),
      close: $('.js-modal__close'), // Add backdrop/overlay to this selector if you use one
      page: $(document),
    
    init: function() {
      // OPEN MODAL
      this.launch.on('click', function() {
        MODAL.modal.fadeIn(500);
      });
      // CLOSE MODAL
      this.close.on('click', function() {
        MODAL.modal.fadeOut(500);
      });
      // Close on "ESC" key
      this.page.on('keydown', function(e) {
        if (e.keyCode === 27) {
          MODAL.modal.fadeOut(500);
        }
      });
      // Close on "off-click" (anywhere off the modal)
      this.page.on('click', function(e) {
        // Adapted from: // http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it
        // Authors: @prc322 & @Mark Amery
        if (!MODAL.modal.is(e.target) && MODAL.modal.has(e.target).length === 0 && !MODAL.launch.is(e.target)) {
          MODAL.modal.fadeOut(500);
        }
      });
    } // end init
  };
  MODAL.init();
  
});
