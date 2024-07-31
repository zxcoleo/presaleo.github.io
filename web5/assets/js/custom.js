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
});