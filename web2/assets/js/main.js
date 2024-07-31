// Loader script

$(document).ready(function () {
  $(".loader-wrapper").fadeOut("slow");
});

// Countdown script

const countdownDate = new Date("2024-12-31T23:59:59").getTime();
const countdownTimer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(countdownTimer);
    countdownElement.innerHTML = "Countdown is over!";
  }
}, 1000);

// active link script

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".link");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      links.forEach(function (item) {
        item.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});

// sticky navbar script

$(function () {
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= 300) {
      $("header").addClass("header-sticky");
    } else {
      $("header").removeClass("header-sticky");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

// smooth scroll script

$(document).ready(function () {
  $(".nav-link").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
});

// scroll to top script

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
  $(".scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
