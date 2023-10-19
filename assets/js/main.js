(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  
    //  form_valid PopUp
$('.Enter_btn').click( function (){ 
  $('.ground_content h4').addClass('visible');   
}); 

 //  form_valid PopUp
  $('.sign_form a.thm_btn').click( function (){ 
    $('.form_valid_content').addClass('visible');   
  }); 

  // Input password type Changing
  $(".eye_btn").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
        $(this).prev("input").attr("type", "text");
    } else {
        $(this).prev("input").attr("type", "password");
    }
});

//table Custom Scroll bar
$(".scrollBox").scrollBar({
  barWidth: 14
});


//table Header Fixed top
var tableOffset = $("#table-1").offset().top;
var $header = $("#table-1 > thead").clone();
var $fixedHeader = $("#table-header-fixed").append($header);

$(window).bind("scroll", function() {
  var offset = $(this).scrollTop();

  if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
    $fixedHeader.show();
  } else if (offset < tableOffset) {
    $fixedHeader.hide();
  }
});

  




})(jQuery);
