$(document).ready(function () {
  $(".best_seller").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    padding: 50,
    nav: true,
    dots: false,
    center: true,

    loop: true,
    mouseDrag: true,
    navText: [
      "<img src='src/assets/img/arrowright.svg'>",
      "",
      //  <img src='src/assets/img/arrowleft.svg'></img>
    ],
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },

      468: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".best_selling").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    padding: 50,
    nav: true,
    dots: false,
    center: true,

    loop: true,
    mouseDrag: true,
    navText: [
      "<img src='src/assets/img/arrowright.svg'>",
      "<img src='src/assets/img/arrowleft.svg'></img>",
    ],
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },

      468: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".specialDiscount").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    padding: 50,
    nav: true,
    dots: false,
    center: true,
    mouseDrag: true,
    navText: [
      "<img src='src/assets/img/arrowright.svg'>",
      "<img src='src/assets/img/arrowleft.svg'></img>",
    ],
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.5,
      },

      468: {
        items: 1.5,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".nasheran").owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    padding: 50,
    nav: false,
    dots: false,
    center: true,
    mouseDrag: true,
    navText: [
      "<img src='src/assets/img/arrowright.svg'>",
      "<img src='src/assets/img/arrowleft.svg'></img>",
    ],
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },

      468: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
