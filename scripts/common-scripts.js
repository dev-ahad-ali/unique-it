
(function($){
	$(function(){
        //Hero Swiper
        
        var swiper = new Swiper(".hero-swiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        // Services Carousel
        if ($(window).width() <  767){
            if ($(".card-wrap").length) {
                $('.card-wrap').slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    infinite: true,
                    navigation: false,
                    speed: 800,
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,
    
                });
            }
            }
         
         //Team Swiper
         var swiper = new Swiper(".team-carousel", {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
                768: {
                    loop: true,
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                    loop: true,
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              },
          });

        //Testimonial Swiper
        var swiper = new Swiper(".review-carousel", {
            slidesPerView:1.2,
            // centeredSlides: true,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
                768: {
                  slidesPerView: "auto",
                  centeredSlides: true,
                  spaceBetween: 30,
                },
              },
          });
        
        $(window).on("load", function () {
            $("body").addClass("loaded");
            // Hero section animation
            var heroBg = $(".home-hero-bg");
            var heroText = $(".home-content .hero-content-wrap .title-text");
            TweenMax.fromTo(heroBg,2,{scale:1.2},{scale:1,ease:Power1.easeOut});
            TweenMax.to(heroText,2,{opacity:1, y: 0, delay: 3.4});


        });
        
        // Portfolio page Tab
        $(".portfolio-body > div.portfolio-item").hide()
        $(".portfolio-body > div.portfolio-item").eq(0).show()
        $(".portfolio-nav > li").removeClass("active")
        $(".portfolio-nav > li").eq(0).addClass("active")

        $(".portfolio-nav > li").each(function(i){
            $(this).click(function(){
                if( $(this).hasClass("active") ) return false
                else{
                    $(".portfolio-nav > li").removeClass("active")
                    $(this).addClass("active")

                    $(".portfolio-body > div.portfolio-item").hide()
                    $(".portfolio-body > div.portfolio-item").eq(i).show()
                }
            })
        });

        
        var heroHeight = $(".hero-swiper").outerHeight(),
            scrollPoint = heroHeight/2;

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > heroHeight) {
                $('body').addClass('sticky-header');
            } else {
                $('body').removeClass('sticky-header');
            }
            if ($(window).scrollTop() > scrollPoint) {
                $('body').addClass('scrolled');
            } else {
                $('body').removeClass('scrolled');
            }
        });

         //Our Team Swiper
         var swiper = new Swiper(".our-team-carousel", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
           
        //   Phone Nav 
        
          $('.phone-nav').click(function(){
            $("body").toggleClass("navOpen");

        })

        // Phone nav click function
        $('.navbar-toggler').on('click',function(){
            if($("body").hasClass('navShown')) {
                var winScrollTo = $('body').css('top');
                var winScroll = winScrollTo.replace('px','');
                var winScroll = Math.abs(winScroll)
                $("body").css("top",'unset');
                $("html, body").animate({ 
                    scrollTop: winScroll
                }, 10);
            } else {
                var winTop = $(window).scrollTop();
                var winTopNeg = winTop*-1;
                $("body").css("top",winTopNeg);
            }
            $("body").toggleClass("navShown");
            $("body").addClass('sticky-header');
            $(".navbar-nav").slideToggle();
        });
        
        
        /* =======  Our Services page ======= */

    /*    $(window).scroll(function(){
            if($(window).width() >1024){
                if ($(window).scrollTop() > 90){
                    $("body").addClass('sticky');
                }
                else{
                    $("body").removeClass('sticky');
                }
            }
        });*/
        
       
        $(".side-bar ul li a").each(function(){
            $(this).on("click", function(e) {
                e.preventDefault();
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top
                }, 1000);
            });
        });

        var mdquery = window.matchMedia("(max-width: 767px)");
       if (mdquery.matches) {
            if ($("select.mobiselec").length) {
               $("select.mobiselec").selectric();
           }
           var slitem = $( "#" + $("select.mobiselec option:selected").text());
            var firstHeight = slitem.height() + 180;
           $(".service-info-inner").css({ height: firstHeight + "px" });
            slitem.addClass("active");
            $("select.mobiselec").on("change", function() {
                var chitem = $("#" + $("select.mobiselec option:selected").text());
                var chheight = chitem.height() + 180;
                $(".service-info-inner").css({ height: chheight + "200px" });
                $(".service-info-inner > div").removeClass("active");
                chitem.addClass("active");
            });
        }

        var mdquery2 = window.matchMedia("(min-width:768px)");
        if (mdquery2.matches) {
            var checkscl = true;

            $(".side-bar ul li a").each(function() {
               $(this).on("click", function(e) {
                    $(".side-bar ul li a").removeClass("current");
                    $(this).addClass("current");
                    e.preventDefault();
                    checkscl = false;
                    $("html, body").animate(
                        {
                            scrollTop: $($(this).attr("href")).offset().top
                        },
                        1000,
                        function() {
                            checkscl = true;
                        }
                    );
               });
            });

            var mainNavLinks = document.querySelectorAll(".side-bar ul li a");

            window.addEventListener("scroll", function(event) {
                if (checkscl) {
                    var fromTop = window.scrollY;
                    var windowHeight = $(window).height();
                    mainNavLinks.forEach(function(link) {
                        var section = document.querySelector(link.hash);
                        var sectionTop = section.getBoundingClientRect().top;
                        var sectionHeight = section.getBoundingClientRect().height;

                        if (
                           sectionTop - windowHeight <= 0 &&
                            sectionTop - windowHeight >= -(windowHeight + sectionHeight)
                        ) {
                            $(mainNavLinks).removeClass("current");
                            link.classList.add("current");
                        } else {
                            link.classList.remove("current");
                        }
                    });
                }
            });
        }

        
        

        //  venue-carousel function 
//        if($('#hero-slide').length){
//            $('#hero-slide').slick({
//                dots: true,
//                arrows:false,
//                autoplay:true,
//                autoplaySpeed:5000,
//                infinite: true,
//                navigation:false,
//                speed: 300,
//                sliserviceToShow:1,
//                sliserviceToScroll: 1,
//            });
//        }
        // End venue-carousel function 

        //FAQs Accordion Function
//        $(".accordion-item").each(function(){
//            var $this = $(this);
//            $this.find(" > h5").on("click touch", function(){
//                $(".accordion-item").removeClass("active")
//                $(".accordion-item .accordion-text").slideUp();
//                if($this.find(".accordion-text:visible").length){
//                    $(".accordion-item").removeClass("active")
//                    $(".accordion-item .accordion-text").slideUp();
//                }
//                else{
//                    $this.addClass("active")
//                    $(".accordion-item .accordion-text").slideUp();
//                    $this.find(" > .accordion-text").slideDown();
//                }
//            })
//        })
        
//        if($(window).width()<=768){
//            $(".accordion-nav").each(function(){
//                var $this = $(this);
//                $this.on("click touch", function(){
//                    $(".accordion-nav").removeClass("active");
//                    $(".accordion-content").slideUp();
//                    if($this.parent().find(".accordion-content:visible").length){
//                        $(".accordion-item").removeClass("active");
//                        $(".accordion-content").slideUp();
//                    }
//                    else{
//                        $this.addClass("active");
//                        $this.parent().find(" > .accordion-content").slideDown();
//                    }
//                })
//            }) 
//           
//        }
        
		
	})// End ready function.
   
    
    /* Slick needs no get Reinitialized on window Resize after it was servicetroyed */
//    $(window).on('load resize orientationchange', function() {
//        $('.carousel-wrap').each(function(){
//            var $carousel = $(this);
//            / Initializes a slick carousel only on mobile screens /
//            // slick on mobile
//            if ($(window).width() > 767) {
//                if ($carousel.hasClass('slick-initialized')) {
//                    $carousel.slick('unslick');
//                }
//            }
//            else{
//                if (!$carousel.hasClass('slick-initialized')) {
//                    $carousel.slick({
//                        sliserviceToShow: 1,
//                        sliserviceToScroll: 1,
//                        mobileFirst: true,
//                        infinite: true,
//                        dots: false,
//                        autoplay: true,
//                        prevArrow: $('.billing-solutions-section .prev-btn'),
//                        nextArrow: $('.billing-solutions-section .next-btn'),
//                    });
//                }
//            }
//        });
//    });
    // End the solutin card carousel
    
    

	

})(jQuery)

