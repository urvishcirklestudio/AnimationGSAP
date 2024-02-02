$(document).ready(function () {
    let tl = gsap.timeline(); 
    gsap.registerPlugin(ScrollTrigger);



    tl.from('.main_wpr',{
        opacity:0,
        delay:1,
    })
    tl.from('.header',{
        opacity:0,
        y:20
    })
    tl.from('.main_hero_bg .left_col .left_image_box .image_box', 1.5, {
        opacity:0,
        xPercent: -100, 
        // duration:1
    })
    tl.from('.main_hero_bg .left_col .left_image_box img', 1.5, {
        opacity:0,
        xPercent: 100,
        delay: -1.5, 
    })
    tl.from('.main_hero_bg .left_col .right_image_box .image_box', 1.5, {
        opacity:0,
        xPercent: 100, 
        duration:1,
        delay:'-1.5'
    })
    tl.from('.main_hero_bg .left_col .right_image_box img', 1.5, {
        opacity:0,
        xPercent: -100,
        delay: -1.5, 
    })
    tl.from('.main_hero_bg .right_col .right_image_box', 1.5, {
        opacity:0,
        xPercent: 100, 
        duration:1,
        delay:'-1.5'
    })
    tl.from('.main_hero_bg .right_col img', 1.5, {
        opacity:0,
        xPercent: -100,
        delay: -1.5, 
    })
    tl.from('.main_hero_bg .discover_text', {
        opacity:0,
        scale: 0, 
        y:80, 
        duration:1,
        delay:'-1'
    })
    tl.from('.imagine_section .right_side .image_box', 1.5, {
        opacity:0,
        xPercent: 100, 
        duration:1,
        delay:'-1.5'
    })
  
    tl.from('.imagine_section .right_side .image_box img', 1.5, {
        opacity:0,
        xPercent: -100,
        delay: -1.5, 
    })




 
 
let revealContainers = document.querySelectorAll(".product_col");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
        scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset"
        }
  });
 
  tl.from('.top_image img', { 
    yPercent: 100, 
    duration: 2,
    delay: -1.5,
    ease: Power2.out
  });
  tl.from('.bottom_image img', { 
    yPercent: -100, 
    duration: 2,
    delay: -1.5,
    ease: Power2.out
  });
});

     
    

    
});