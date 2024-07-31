// Loader 
$(document).ready(function () {
    $('.loader-wrapper').fadeOut("slow");
})
// Swiper JS
var swiper = new Swiper(".client_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1400: {
            slidesPerView: 5
        }
    }
});