(function ($) {
    'use strict';

     //Header Search
     if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }


    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Loder  //
    $(function () {
        $('body').addClass('loaded');
    });

   


    // Barnd Active

    $('.brand-item').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1500,
        dots: false,
        nav: false,
        margin: 30,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })


     // Barnd Active

     $('.brand-box ').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1500,
        dots: false,
        nav: false,
        margin: 30,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })


    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 5,
        time: 1500
    });

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })

    // scroll up
    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }



    
        // dreamit-tabs
        $(document).ready(function() {


            const tabs= document.querySelectorAll('.tab__btn');
            const all_content= document.querySelectorAll('.dreamit-tab')
    
            tabs.forEach((tab, index)=>{
                tab.addEventListener('click', ()=>{
                    tabs.forEach(tab=>{tab.classList.remove('active')});
                    tab.classList.add('active');
    
                    all_content.forEach(content=>{content.classList.remove('active')});
                    all_content[index].classList.add('active');
                });
            });
        });

        // Pricing Tab
        $(document).ready(function() {


            const tabs= document.querySelectorAll('.tab-btn button');
            const all_content= document.querySelectorAll('.tab_content')
    
            tabs.forEach((tab, index)=>{
                tab.addEventListener('click', ()=>{
                    tabs.forEach(tab=>{tab.classList.remove('active')});
                    tab.classList.add('active');
    
                    all_content.forEach(content=>{content.classList.remove('active')});
                    all_content[index].classList.add('active');
                });
            });
        });

        // Pricing Tab
        $(document).ready(function() {


            const tabs= document.querySelectorAll('.price-tab-btn');
            const all_content= document.querySelectorAll('.tab-contents')
    
            tabs.forEach((tab, index)=>{
                tab.addEventListener('click', ()=>{
                    tabs.forEach(tab=>{tab.classList.remove('active')});
                    tab.classList.add('active');
    
                    all_content.forEach(content=>{content.classList.remove('active')});
                    all_content[index].classList.add('active');
                });
            });
        });


        //======

        $(document).ready(function() {


            const tabs= document.querySelectorAll('.price-tab_btn');
            const all_content= document.querySelectorAll('.tab_contents')
    
            tabs.forEach((tab, index)=>{
                tab.addEventListener('click', ()=>{
                    tabs.forEach(tab=>{tab.classList.remove('active')});
                    tab.classList.add('active');
    
                    all_content.forEach(content=>{content.classList.remove('active')});
                    all_content[index].classList.add('active');
                });
            });
        });

        




})(jQuery);