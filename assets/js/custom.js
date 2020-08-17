(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $('.navbar-light').addClass('menu-shrink');
            } else {
                $('.navbar-light').removeClass('menu-shrink');
            }
        });
        $('.navbar-nav .nav-item .nav-link').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1300);
            e.preventDefault();
        });
        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });
        // END MENU JS	

        // Home Slider JS
        $('.home-slider').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav: false,
            dots:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
        })

        // Team Slider JS
        $('.team-slider').owlCarousel({

            loop:true,
            margin:10,
            nav: false,
            dots:true,
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:3,
                }
            }
        });

        // Client Review JS
        $('.review-section').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout:2000,
            navText: [
                "<i class='icofont-thin-double-left'></i>",
                "<i class='icofont-thin-double-right'></i>"
            ],
        })
 
        // Logo Slider JS
        $('.logo-slider').owlCarousel({
            loop:true,
            margin:10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout:2000,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
        })
        // CounterUp JS
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // WOW JS
        new WOW().init();

        // Back to top 
        $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-scroll-long-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        $('#toTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

        //ScrollReveal JS
        

        // PRELOADER
        jQuery(window).on('load',function(){
            jQuery(".loader").fadeOut(500);
        });

        // Sorting Portfolio JS
        $('#Container').mixItUp();
    }); 
    
    
})(jQuery);