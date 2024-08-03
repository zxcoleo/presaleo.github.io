$(document).ready(function () {
    $('.loader-wrapper').fadeOut("slow");
    
    $(".nav-link").click(function () {
        if (!$(this).hasClass('active')) {
            $(".nav-link.active").removeClass("active");
            $(this).addClass("active");
        }
    });
    // Toggle Mobile Menu
    $(function () {
        $(".navbar-toggler").on("click", function (a) {
        $('.toggle-menu-icon').toggleClass('open');
        $("#navbar-right").toggleClass("show");
        });  
        $(document).on("click", function (a) {
            if ($(a.target).is("#navbar-right") === false) {
                $("#navbar-right").removeClass("show");
                $('.toggle-menu-icon').removeClass('open');
            }
        });
    });
    $(function () {
        var pageScroll = 100;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= pageScroll) {
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
    const endDate = new Date('2024-12-31T23:59:59').getTime();

    const timerInterval = setInterval(function() {
      const now = new Date().getTime();
      const distance = endDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      $('#days').text(formatTime(days));
      $('#hours').text(formatTime(hours));
      $('#minutes').text(formatTime(minutes));
      $('#seconds').text(formatTime(seconds));
  
      if (distance < 0) {
        clearInterval(timerInterval);
        $('.timer').html('<div>Expired</div>');
      }
    }, 1000);
  
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
    
});