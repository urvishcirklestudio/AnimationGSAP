gsap.registerPlugin(ScrollSmoother);
// ScrollTrigger.normalizeScroll(true)

let smoother = ScrollSmoother.create({
    content:'#main_wppr',
    smooth: 5,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
	effects: true,
  });
gsap.from('.follow_animation .follow_items_wpr',{
    scrollTrigger:{
        trigger:'.follow_items_wpr',
        scroller:'body',
        // markers:true,
        scrub :true
    },

    xPercent:100,
    duration:3
});
gsap.from('.luna_shop_sec .left_side .image_box',{
    scrollTrigger:{
        trigger:'.luna_shop_sec .left_side .image_box',
        scroller:'body',
        markers:true,
        scrub :true
    },

    width:"0%",
    duration:3
})
gsap.from('.luna_shop_sec .left_side .image_box img',{
    scrollTrigger:{
        trigger:'.luna_shop_sec .left_side .image_box img',
        scroller:'body',
        // markers:true,
        scrub :true
    },

    scale:1.5,
    duration:3
})


gsap.to('.image_wpr',{
    ease:Expo.elseInOut,
    width:'100%',
    duration:2,
    stagger:2,  
    repeat:-1,
})

gsap.to('.hero_animation .large_image_text h2',{
    ease:Expo.elseInOut,
    top:0, 
    duration:2,
    stagger:2,  
    repeat:-1,

})
gsap.to('.hero_animation .large_image_text h2',{
    delay:2,
    ease:Expo.elseInOut,
    top:'-100%', 
    duration:2,
    stagger:2,   
    repeat:-1,

})

gsap.fromTo(['.round_image .image_box','BRANDETHOS .image_box'],{
    clipPath:"circle(20% at 50% 50%)"
},{
    clipPath:"circle(75% at 50% 50%)",
    ease:"none", 
    scrollTrigger:{
        trigger:['.round_image .image_box','BRANDETHOS .image_box'],
        scrub:1,
        start:"top center",
        end:"top center-=200"
    }
})
gsap.fromTo( '.BRANDETHOS .image_box',{
    clipPath:"circle(50% at 50% 130%)"
},{
    clipPath:"circle(75% at 50% 50%)",
    ease:"none", 
    scrollTrigger:{
        trigger:'.BRANDETHOS .image_box',
        scrub:1,
        start:"top center",
        end:"top center-=200",
        stagger:2,
    }
})
gsap.fromTo('.BRANDETHOS1 .image_box',{
    clipPath:"circle(50% at 50% 130%)"
},{
    clipPath:"circle(75% at 50% 50%)",
    ease:"none", 
    scrollTrigger:{
        trigger:'.BRANDETHOS1 .image_box',
        scrub:1,
        start:"top center",
        end:"top center-=200",
        stagger:2,
    }
})
// round_image




 