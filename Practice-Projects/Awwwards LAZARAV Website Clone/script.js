// function locomotiveAnimation() {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true,

//         // for tablet smooth
//         tablet: { smooth: true },

//         // for mobile
//         smartphone: { smooth: true }
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length
//                 ? locoScroll.scrollTo(value, 0, 0)
//                 : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             };
//         }
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();
// }
// locomotiveAnimation()

function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.3,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "100px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })

}
loadingAnimation()

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "23vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.3
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.1
        })
    })
}
navAnimation()

function page2ndAnimation() {

    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                scale: 1,
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                scale: 0,
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.querySelector("img"), {
                x: dets.x - elem.getBoundingClientRect().x - 45,
                y: dets.y - elem.getBoundingClientRect().y - 120,
            })
        })
    })
}
page2ndAnimation()

function page3Animation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
        })
    })
    video.addEventListener("click", function () {
        video.paused()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px",
        })
    })
}
page3Animation()

function page4Animation() {
    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.querySelector("video").style.opacity = 1
            elem.querySelector("video").play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.querySelector("video").style.opacity = 0
            elem.querySelector("video").pause()
        })
    })

}
page4Animation()

function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        stagger: {
            amount: -0.6,
        },
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroll: "body",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
        }
    })

    gsap.from("#btm6-part3 h4", {
        x: 0,
        duration: 1,
        stagger: {
            amount: -0.6,
        },
        scrollTrigger: {
            trigger: "#btm6-part3",
            scroll: "body",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
        }
    })

    gsap.from("#btm6-part4 h4", {
        x: 0,
        duration: 1,
        stagger: {
            amount: -0.6,
        },
        scrollTrigger: {
            trigger: "#btm6-part4",
            scroll: "body",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
        }
    })
}
page6Animations()