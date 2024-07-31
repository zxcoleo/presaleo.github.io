$(function(){
 var pageScroll = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= pageScroll ) {
           $('header').addClass('fixed');
        }
        else {
            $('header').removeClass('fixed');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$('.nav-item').click(function() {
    $(this).siblings('.nav-item').removeClass('active'); // remove from all other <SPAN>s
    $(this).addClass('active'); // add onto current
})

// $('.dropdown-menu li').on('click', function() {
//   var getValue = $(this).text();
//   $('.dropdown-select').text(getValue);
// });



$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });