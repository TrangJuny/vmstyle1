(function ($) {
  $(document).ready(function () {
    $(".slides").slick({
      // dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    });
    $(".product-slides").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });

    $(".slide-preview").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
    });

    $(".section-events").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      // autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      responsive: [
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });
})(window.jQuery);
