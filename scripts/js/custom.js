$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("#ajLogo").removeClass("hide");
        $("#ajLogo").addClass("show");
        $("#ajLogoBig").removeClass("show");
        $("#ajLogoBig").addClass("hide");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("#ajLogo").removeClass("show");
        $("#ajLogo").addClass("hide");
        $("#ajLogoBig").removeClass("hide");
        $("#ajLogoBig").addClass("show");
    }
});

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){ 
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(function() {
  $("#form").validate({
      ignore: ".ignore",
	  rules: {
		  YourName: "required",
		  YourComment: "required",
		  YourEmail: {
			  required: true,
			  email: true
		  },
          hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }		  
		  
	  },
	  messages: {
		  YourName: "Please enter your name",
		  YourComment: "Please enter message",
		  YourEmail: "Please enter a valid email address",
		  hiddenRecaptcha: "Please complete reCAPTCHA",
	  },
	  
	  submitHandler: function(form) {
		  form.submit();
	  }
  });
});

$(function() {
  $("#toTop").scrollToTop();
});

$(document).on('click','.navbar-collapse.in',function(e) {

    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }

});

$(function() {
    function reposition() {
        var modal = $(this),
        dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    $('.modal').on('show.bs.modal', reposition);
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});