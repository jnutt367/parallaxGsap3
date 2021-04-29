gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease: "none", duration: 1 })


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "wrapper",
        start: "top 25%",
        end: "+=100",
        toggleActions: "restart none none reverse",
        markers: false
    }
})

.from(".wrapper", { y: 50 })
    .from(".cavemen", { y: 150 }, 0)
    .from("#text", { y: 250 }, 0)
    .from("#tree", { y: 250 }, 0)
    .from("#dino", { y: 500 }, 0)