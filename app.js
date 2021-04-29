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
    .from("#dino", { y: 600, x: 400 }, 1)
    .fromTo("#roar", { opacity: 0 }, { opacity: 1, y: -100 })
    .to("#man1", { y: -100 }, 3)
    .to("#man2", { x: 100, y: -200 })
    .to(".cavemen", { x: 300 })