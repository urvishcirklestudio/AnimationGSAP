$(document).ready(function () {
// Gradient color Animation 
    var pointlist = [  
        ['.favourite_wrapper', 'pink'],
        ['.necklaces_wrapper', 'light_blue'],
        ['.shop_other', 'color_white'],    
    ] 
    var removeColor;
    var lastColor;
    var getcolor=() =>{
        removeColor='';
        pointlist.forEach(function (mapping) {
            var bgColorClass = mapping[1];
            removeColor = removeColor + bgColorClass + ' ';
        })
        return removeColor;
    }
    function applyColors() {
        var scrollPosition = $(window).scrollTop(); 
        pointlist.forEach(function (mapping) {
            var sectionSelector = mapping[0];
            var bgColorClass = mapping[1];
            var $section = $(sectionSelector); 
            if ($section.length > 0) {
                var sectionTop = $section.offset().top - $('.header').outerHeight(true);
                var sectionHeight = $section.height();
                // console.log(sectionTop);
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && lastColor !== bgColorClass) {
                    $('body,.header').removeClass(`${getcolor()}`);
                    $('body,.header').addClass(bgColorClass);
                    lastColor = bgColorClass
                    console.log(lastColor);
                }
            } 
        });
    }
    $(window).scroll(function () {
        applyColors();
    });
    applyColors(); 
// Gradient color Animation 

// Menu, search, Modal
    $('.menu_heading').click(function () {
        if ($(window).width() < 992) {
            $(this).parents('.sub_menu_item').siblings().find('.menu_links').slideUp();
            $(this).siblings('.menu_links').slideToggle();
        }
    });
    $('.navbar > ul > li > .collapse_icon ').click(function () {
        if ($(window).width() < 992) {
            $(this).toggleClass('active').parents('li').siblings().find('.collapse_icon').removeClass('active');
            $(this).parents('li').siblings().find('.sub_menu').slideUp();
            $(this).siblings('.sub_menu').slideToggle();
            $('.menu_links').slideUp();
        }
    });
    $('.nav_menu_icon').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.navbar').toggleClass('active');
    })
    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.menu_links').attr('style', '');
            $('.sub_menu').attr('style', '');
            $('.navbar > ul > li > .collapse_icon').removeClass('active');
        }
    }); 
    $('.search_btn').click(function () {
        $('.fix_search').addClass('show');
    });
    $('.clear_search').click(function () {
        $('.fix_search').removeClass('show');
        $('.search_bar input').val('');
    })

    var modal = document.querySelectorAll(".modal");
    function closeModal() {
        $('.modal').removeClass('show');
    }
    function windowOnClick(event) {
        for (i = 0; i < modal.length; i++) {
            if (event.target === modal[i]) {
                closeModal();
            }
        }
    }

    $(".account_modal").click(function (event) {
        event.preventDefault(); 
        $('.sign_up_modal').toggleClass('show');
    });

    $('.close_button').click(function () {
        closeModal();
    })
    window.addEventListener("click", windowOnClick);
// Menu, search, Modal

    // ----- START FAVOURITE SWIPER HERE ------- //
    var favourite_swiper = new Swiper(".favourite_swiper", {
        direction: 'horizontal',
        slidesPerView: 2,
        loop: false,
        spaceBetween: 220,

        navigation: {
            nextEl: '.favourite_next',
            prevEl: '.favourite_prev',
        },
        breakpoints: {
            250: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 20,
            }, 1140: {
                spaceBetween: 80,
            }
            , 1280: {
                spaceBetween: 100,
            },
            1366: {
                spaceBetween: 180,
            },
            1440: {
                spaceBetween: 220,
            },
        },

    });
    // ----- END FAVOURITE SWIPER HERE ------- //
    // ----- START NACKLACE SWIPER HERE ------- //
    var necklaces_swiper = new Swiper(".necklaces_swiper", {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 220,

        loop: false,
        navigation: {
            nextEl: '.necklaces_next',
            prevEl: '.necklaces_prev',
        },
        breakpoints: {
            250: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            992: {
                spaceBetween: 20,
            }, 1140: {
                spaceBetween: 80,
            }
            , 1280: {
                spaceBetween: 100,
            },
            1366: {
                spaceBetween: 180,
            },
            1440: {
                spaceBetween: 220,
            },

        },

    });

    // ----- END NACKLACE SWIPER HERE ------- // 
    // Filter menu
    $('.filter_btn button').click(function () {
        $(this).parents('.filter_btn').toggleClass('active');
        $(this).siblings('.filter_menu').toggleClass('show');
    });
    
    $('.filter_menu_btn button').click(function () {
        $('.filter_btn').removeClass('active');
        $(this).parents('.filter_menu').removeClass('show');
    })

    $('.filter_menu .filter_col .heading').click(function () { 
        if ($(this).parents('.filter_col').hasClass("active")) {
            $(this).parents('.filter_col').removeClass("active").find(".filter_items_wrapper").slideUp();
          } else {
              $(this).parents('.filter_col').siblings().find('.filter_items_wrapper').slideUp();
              $(this).siblings('.filter_items_wrapper').slideToggle(); 
              $(this).parents('.filter_col').addClass('active').siblings().removeClass('active');
          }
          return false;
    })

    $(document).on("click", function (event) {
        var $filter_btn = $(".filter_btn");
        if ($filter_btn !== event.target && !$filter_btn.has(event.target).length) {
            $(".filter_menu").removeClass('show');
            $('.filter_btn').removeClass('active');
        }
    });
    // Filter menu

    // Single product Main Image & Thumb Slider
    var main_pro_thumb = new Swiper(".main_pro_thumb", {
        spaceBetween: 16,
        slidesPerView: 4,
        freeMode: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'horizontal',
        breakpoints: {
            992: {
                direction: 'vertical',
            },
        }
    });
    var main_pro_swiper = new Swiper(".main_pro_swiper", {
        spaceBetween: 10,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        navigation: {
            nextEl: ".single_pro_next",
            prevEl: ".single_pro_prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        thumbs: {
            swiper: main_pro_thumb,
        },
    });

    main_pro_swiper.on('slideChangeTransitionStart', function () {
        main_pro_thumb.slideTo(main_pro_swiper.activeIndex);
    });

    main_pro_thumb.on('transitionStart', function () {
        main_pro_swiper.slideTo(main_pro_thumb.activeIndex);
    });

    // Accordion
    $('.accordion_items:not(.default_open) .heading ').click(function () {
        $(this).parents('.accordion_items').toggleClass('active').siblings().removeClass('active');
        $(this).parents('.accordion_items').siblings('.accordion_items:not(.default_open)').find('.accordion_body').slideUp();
        $(this).siblings('.accordion_body').slideToggle();
    });
    // Accordion

    // Cart popup
    $('.bag_popup').click(function (e) {
        togglePopup(event);
    }); 

    function togglePopup(event) {
        var popup = document.querySelector('.Add_bag_popup'); 
        if (window.getComputedStyle(popup).visibility === 'hidden') { 
            popup.classList.add('show')  
            $(document).click(function(){
                closePopupOutside();
            })
        } else {  
            popup.classList.remove('show') ;
            $(document).click(function(){
                losePopupOutside();
            });
        } 
        event.stopPropagation();
    }
 
    function closePopupOutside() {
        var popup = document.querySelector('.Add_bag_popup'); 
        popup.classList.remove('show');
        $(document).click(function(){
            closePopupOutside();
        })
    }
  
    const video = document.getElementById("bespoke_video");
    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }
    // Cart popup

    // Play & Pause Video
    $('.play_video_btn').click(function () {
        togglePlay();
    });
 
    $('#bespoke_video').on('playing', function () {
        $('.play_video_btn').css("opacity", "0");
    });
    $('#bespoke_video').on('pause', function () {
        $('.play_video_btn').css("opacity", "1");
    });
    // Play & Pause Video
    
    // Enquiry Form
    $('.enquiry_btn').click(function(){
        $('.enquiry_form_wpr').addClass('show');
        $('body').addClass('overflow_hidden');
    });
    $('.close_form').click(function(){
        $('.enquiry_form_wpr').removeClass('show');
        $('body').removeClass('overflow_hidden');
    });
    // Enquiry Form

    //File Upload 
    let fileInput = document.getElementById("file_upload_input");
    let fileSelect = document.getElementsByClassName("file_upload_select")[0];

    $('.file_upload_select').click(function(){
        fileInput.click();
    }) 
    
    $('#file_upload_input').change(function(){
        let filename = fileInput.files[0].name;
        let selectName = document.getElementsByClassName("file_select_name")[0];
        selectName.innerText = filename;
    })
    //File Upload 

    //Tabs
    $('[data-tab-target]').click(function(){
        var tabId=$(this).attr('data-tab-target');
        if(!$(this).hasClass('active')){
            $('[data-tab-target]').removeClass('active')
            $(this).addClass('active')
            $('.tab_content_items').slideUp()
            $(tabId).slideDown()
        } 
    }); 

    $('.careers_acrd_heading').click(function() {
        if ($(this).parents('.careers_acrd_items').hasClass("active")) {
          $(this).parents('.careers_acrd_items').removeClass("active").find(".careers_acrd_body").slideUp();
        } else {
            $(this).parents('.careers_acrd_items').siblings().find('.careers_acrd_body').slideUp();
            $(this).siblings('.careers_acrd_body').slideToggle(); 
            $(this).parents('.careers_acrd_items').addClass('active').siblings().removeClass('active')
        }
        return false;
    });
 
    $('[data-tab-id]').click(function(){
        var tabId = $(this).attr('data-tab-id')
        if(!$(tabId).hasClass('show')){
            $(this).addClass('active').siblings().removeClass('active')
            $('.tab_cont_items').removeClass('show')
            $(tabId).addClass('show')
        }
    });

    $('.tab_next_prev .prev_btn').click(function(){
        var tabID = $('.tab_cont_items.show').attr('id');
        $(`#${tabID}`).prev().addClass('show').siblings().removeClass('show');
        $(`[data-tab-id="#${tabID}"]`).prev().addClass('active').siblings().removeClass('active'); 
    });
    
    $('.tab_next_prev .next_btn').click(function(){
        var tabID = $('.tab_cont_items.show').attr('id');
        $(`#${tabID}`).next().addClass('show').siblings().removeClass('show');
        $(`[data-tab-id="#${tabID}"]`).next().addClass('active').siblings().removeClass('active'); 
    });
    // var s = skrollr.init({
    //     smoothScroll: false,
    //     forceHeight: false,
        
    // }); 
    //Tabs

});

 
