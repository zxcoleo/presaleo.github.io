// get current year
document.getElementById("presentYear").innerHTML = new Date().getFullYear();

// Link Active Class-------------------------

$(function () {
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= 200) {
      $("header").addClass("header-sticky");
      $(".sticky-nav").addClass("d-md-flex");
      $(".social-icons-wrapper").addClass("d-md-none");
    } else {
      $("header").removeClass("header-sticky");
      $(".sticky-nav").removeClass("d-md-flex");
      $(".social-icons-wrapper").removeClass("d-md-none");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

// Loader fade out-----------------------

$(document).ready(function () {
  $(".loader-wrapper").fadeOut("slow");
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sticky-nav .link");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      links.forEach(function (item) {
        item.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});


// CountDown Timer---------------------------

function countdown(endDate) {
  const daysElem = document.getElementById("days");
  const hoursElem = document.getElementById("hours");
  const minutesElem = document.getElementById("minutes");

  function updateCountdown() {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference <= 0) {
      daysElem.innerHTML = "0";
      hoursElem.innerHTML = "0";
      minutesElem.innerHTML = "0";
      clearInterval(timer);
      return;
    }

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minutesElem.innerHTML = minutes;
  }

  updateCountdown();

  const timer = setInterval(updateCountdown, 1000);
}

const endDate = new Date("2025-01-01T00:00:00");
countdown(endDate);