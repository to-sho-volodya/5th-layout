$(document).ready(function () {
  $('.slides').slick({

    // autoplay: true,
    // autoplaySpeed: 10000,
    infinite: true,
    arrows: false,
    dots:true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:[
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },]
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   },
    // ]
    // fade: true,
    // adaptiveHeight:true,
    // draggable:true,
  });
});