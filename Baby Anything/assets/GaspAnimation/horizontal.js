gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true,
//   lerp: 0.08,
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: document.querySelector(".smooth-scroll").style.transform
//     ? "transform"
//     : "fixed",
// });

let flower = document.querySelectorAll('.flower_items')
console.log(flower);

flower.forEach(element => {
  let left = Math.floor(Math.random() * 80) + 10;
  console.log(left);
  $(element).css('left', left + '%')
});

let tl = gsap.timeline({})
tl.from(".weltext h1", {
  scale: 8,
  stagger: 0.5,
  opacity: 0,
  color: '#fff',

});
tl.from(".button_next ", { 
  left: '-120%',
  duration: 2,
  opacity: 0,
  onComplete: function () {
    $('.weltext').addClass('animation');
  }
});


$('.button_next button').click(function () {
  $('.weltext').removeClass('animation');
  tl.to(".button_next ", {
    duration: 2,
    left: '200%',
    opacity: 0,
  })
  tl.to(".weltext h1", {
    delay: -2,
    scale: 8,
    stagger: 0.3,
    opacity: 0,
    color: '#fff',
    onComplete: function () {
      $('.weltext').addClass('animation');
    }
  })
  tl.to(".flower_items ", {
    delay:-2,
    top: '120%',
    stagger: 0.2, 
    duration: 2,
    opacity: 0,
  
  })

  tl.to(".page_top", {
    delay:-2,
    duration: 2,
    opacity: 0,
    display: 'none'
  });
  tl.set('body', {
    className: '-=overflowHidden'
  });



})

// tl.to(".back_box", {   
//   delay:1,
//   duration:2,
//   height:'100%',
//   width:'100%',
//   scale:3,
//   opacity:0
// });

const boxContainer = gsap.to(".box_container", {
  scrollTrigger: {
    trigger: ".page_2",
    container: '.smooth-scroll',
    scrub: true,
    pin: true,
    start: "center center",
    end: () => '+=' + $('.box_container').width(),
    // markers: true
  },
  x: '-' + ($('.box_container').width()) + 'px'
});
