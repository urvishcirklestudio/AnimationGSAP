$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);

// const smoother = ScrollSmoother.create({
//     content: ".main_wrapper",
//     smooth: 2,
//     normalizeScroll: true,
//     ignoreMobileResize: true,
//       effects: true, 
//   });

// let headings = gsap.utils.toArray(".js-title").reverse();
// headings.forEach((heading, i) => {
//  let headingIndex = i + 1;
//  let mySplitText = new SplitText(heading, { type: "words,chars" });
//  let chars = mySplitText.words;

//  chars.forEach((char, i) => {
//   smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
//  });
// });

let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.image_animation img',
    //   toggleActions: "restart none none reset", 
      scrub:3,
        markers:true,
                start:'top 98% center',
                end: 'bottom 100%'
    }
  });
// gsap.from('.image_animation',{
//     scrollTrigger:{
//         trigger:".image_animation",
//         scrub:true,
//         markers:true,
//         start:'top center',
//         end:'top'
//     }, 
//     duration:3,
//     ease: Power2.out
// })
// gsap.to('.widthimage',{
//     scrollTrigger:{
//         trigger:".widthimage",
//         scrub:true,
//         markers:true,
//         start:'top center'
//     },
//     with:0,
//     duration:3
// })

tl.set('.image_animation img', { autoAlpha: 1 });
  tl.from('.image_animation img', 5, {
    x: '300%',
    ease: Power2.out
  });

})