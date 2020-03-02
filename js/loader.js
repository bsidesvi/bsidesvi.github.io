'use strict'

$(function(){
  $("header, .header-section").load("header.html", function(){
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
       Update Nav Tabs 
    --------------------*/
    $('.active').removeClass('active');
    var path = window.location.pathname;
    var id = path.substring(path.lastIndexOf('/')+1, path.lastIndexOf('.'));
    if (id === '/'){ id = 'index' };
    $('#'+id).addClass('active');

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero-items");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        smartSpeed: 1200,
        autoplay: true,
    });

  });
  $("footer, .footer-section").load("footer.html");
});