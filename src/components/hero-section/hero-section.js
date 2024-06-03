$(".hero-section__inner").slick({
  slidesToShow: 1,
  arrows: false,
  infinite: true,
  autoplay: true,
  cssEase: "linear",
  speed: 500,
  fade: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
