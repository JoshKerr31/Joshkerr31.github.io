(function(a){"use strict";var t=a(window);if(t.on("load",function(){a("#preloader").fadeOut("1000",function(){a(this).remove()})}),a.fn.classyNav&&a("#lxNav").classyNav(),a.fn.owlCarousel){var o=a(".welcome-slides");o.owlCarousel({items:1,loop:!0,autoplay:!0,smartSpeed:1e3,autoplayTimeout:1e4,nav:!0,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']}),o.on("translate.owl.carousel",function(){var t=a("[data-animation]");t.each(function(){var t=a(this).data("animation");a(this).removeClass("animated "+t).css("opacity","0")})}),a("[data-delay]").each(function(){var t=a(this).data("delay");a(this).css("animation-delay",t)}),a("[data-duration]").each(function(){var t=a(this).data("duration");a(this).css("animation-duration",t)}),o.on("translated.owl.carousel",function(){var t=o.find(".owl-item.active").find("[data-animation]");t.each(function(){var t=a(this).data("animation");a(this).addClass("animated "+t).css("opacity","1")})})}if(a.fn.owlCarousel){var e=a(".instragram-feed-area");e.owlCarousel({items:6,loop:!0,autoplay:!0,smartSpeed:1e3,autoplayTimeout:3e3,responsive:{0:{items:2},576:{items:3},768:{items:4},992:{items:5},1200:{items:6}}})}a.fn.imagesLoaded&&a(".lx-portfolio").imagesLoaded(function(){a(".portfolio-menu").on("click","button",function(){var o=a(this).attr("data-filter");t.isotope({filter:o})});var t=a(".lx-portfolio").isotope({itemSelector:".single_gallery_item",percentPosition:!0,masonry:{columnWidth:".single_gallery_item"}})}),a(".portfolio-menu button.btn").on("click",function(){a(".portfolio-menu button.btn").removeClass("active"),a(this).addClass("active")}),a(".search-btn").on("click",function(){a(".search-form").toggleClass("search-form-active")}),t.on("scroll",function(){t.scrollTop()>0?a(".main-header-area").addClass("sticky"):a(".main-header-area").removeClass("sticky")}),a.fn.magnificPopup&&(a(".video-play-btn").magnificPopup({type:"iframe"}),a(".portfolio-img").magnificPopup({type:"image",gallery:{enabled:!0,preload:[0,2],navigateByImgClick:!0,tPrev:"Previous",tNext:"Next"}})),a.fn.tooltip&&a('[data-toggle="tooltip"]').tooltip(),t.width()>767&&(new WOW).init(),a.fn.jarallax&&a(".jarallax").jarallax({speed:.5}),a.fn.scrollUp&&t.scrollUp({scrollSpeed:1e3,scrollText:'<i class="fas fa-arrow-up"></i>'}),a('a[href="#"]').on("click",function(a){a.preventDefault()})})(jQuery);