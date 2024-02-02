<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://assets.codepen.io/16327/ScrollTrigger.min.js?v=3.10.0"></script>


gsap.from('.image_wpr',{ })
gsap.to('.image_wpr',{ 
    duration:2,
    stagger:2,  
    repeat:-1,
})


gsap.from('class Name',{
    scrollTrigger:{
        trigger:'trigger location class/id',
        scroller:'body',
        // markers:true,
        scrub :true
    },
})

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/urvishcirklestudio/AnimationGSAP.git
git push -u origin main