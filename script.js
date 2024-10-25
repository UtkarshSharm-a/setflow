gsap.to(".box1 .image1",{
    scale:3,
    scrollTrigger:{
        trigger:".box1",
        scroll:".main",
        start:"top 0%",
        end:"top -500%",
        scrub:1,
        markers:true,
        
    }
})
gsap.to(".box1 .image",{
    scale:1.5,
    x:-800,
    y:-800,
    scrollTrigger:{
        trigger:".box1 ",
        scroll:".main",
        start:"top 0%",
        end:"top -500%",
        scrub:true,
        markers:true,
        
    }
})

 var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".box5",
        scroll:".main",
        markers:true,
        start:"top 0%", 
        end:"top -100%",
        scrub:1,
    pin:true,
    }
 })



 tl.to(" #card2",{
  transform:'translateY(-85%)',


})
tl.to("#card3",{
transform:"translateY(-130%)",

})
tl.to("#card4",{
transform:"translateY(-175%)",
    
})
    
// gsap.to(".page7 .scroll-bar",{
//         x:"-100%",
//         delay:2,
//         duration:1,
//         repeat:-1,

// })

// gsap.to(".scroll-bar",{
//     transform:"translate(-100%)",
//     repeat:-1,
//     // stagger:1,
//     ease:"linear",
//     duration:10,
// })

Shery.mouseFollower();


// Shery.textAnimate(".box2 h1" /* Element to target.*/, {
//     //Parameters are optional.
//     style: 1,
//     y: 10,
//     delay: 0.1,
//     duration: 2,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     multiplier: 0.1,
//   });

  Shery.imageMasker(".box1 .image" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Shery",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageEffect(" .box1 image1", {
    style: 2, //Select Style
    debug: true, // Debug Panel
    config: {
      /* Config made from debug panel */
    },
    preset: "./presets/wigglewobble.json",
  });
  

  Shery.imageEffect(".box image", {
    style: 1 /*OR 5 for different variant */,
    debug: true,
  });
  
  