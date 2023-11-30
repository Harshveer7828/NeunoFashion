function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


}
function mouse() {
    var mousemove = document.querySelector("#mousemover")
    var main = document.querySelector("#main")
    main.addEventListener("mousemove", function (dets) {
        mousemove.style.left = dets.x + 20 + "px"
        mousemove.style.top = dets.y + 20 + "px"
    })
}
function swiper() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
swiper()
mouse()
loco();

// page 1 animation of the image//
function page1() {
    gsap.to("#page1", {
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page1 img",
            pin: true,
            scrub: 2,
            start: "top 20%",
            end: "top -120%",
            // markers:true
        }
    })

    gsap.from("#page1 #navbar", {
        y: -200,
        opacity: 0,
        stagger: 0.3,
        duration: 1
    })
    gsap.from("#page1>h1,#page1 img", {
        y: 200,
        opacity: 0,
        stagger: 0.3,
        duration: 1

    })
}

// page 2 //
function page2() {
    gsap.from("#page2>h3,#page2>h2", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page2",
            scrub: 2,
            start: "top 80%",
            end: "top 50%",
        }
    })
}
// page 3 //

function page3() {
    gsap.from("#page3 .swiper", {
        x: 600,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page3",
            scrub: 2,
            start: "top 80%",
            end: "top 50%",
        }
    })

    var pg3 = document.querySelector("#page3")
    var mouse3 = document.querySelector("#mouse-mover3")
    pg3.addEventListener("mousemove", function (dets) {
        document.querySelector("#mousemover").style.scale = 0;
        mouse3.style.scale = "1";
        gsap.to(mouse3, {
            x: dets.x + "px",
            y: dets.y + "px",
        })
    })
    pg3.addEventListener("mouseleave", function () {
        document.querySelector("#mousemover").style.scale = 1;
        mouse3.style.scale = "0";

    })
}



// animation of the menu hover effect //
var menu = document.querySelector(".menu")
var mouse1 = document.querySelector("#mousemover")
menu.addEventListener("mousemove", function () {
    mouse1.style.scale = 0
})
menu.addEventListener("mouseleave", function () {
    mouse1.style.scale = 1
})

// mouse1 mover on video page 4 //

function page4() {
    var mouse4 = document.querySelector(".mousemover4")
    var video4 = document.querySelector("#page4>video")
    mouse4.addEventListener("mousenter", function () {
        mouse1.style.opacity = 0
    })
    video4.addEventListener("mouseenter", function (dets) {
        mouse4.style.left = dets.x + "px"
        mouse4.style.top = dets.y + "px"
        mouse1.style.top = "0%"
        mouse1.style.scale = "0"
    })
    video4.addEventListener("mouseleave", function (dets) {
        mouse4.style.left = "35%"
        mouse4.style.top = "30%"
        mouse1.style.scale = "1"
        mouse1.style.top = dets.x + "px"

    })
    // gsap.from("#page4>video,#collection h1,#new,.mousemover4 ", {
    //     x: -200,
    //     opacity: 0,
    //     stagger: 0.2,
    //     scrollTrigger: {
    //         scroller: "#main",
    //         trigger: "#page4",
    //         scrub: 2,
    //         start: "top 70%",
    //         end: "top 20%",
    //     }
    // })

}


function page5() {
    gsap.to("#page5", {
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page5",
            pin: true,
            scrub: 4,
            start: "top 0%",
            end: "top -180%",
            // markers:true
        }
    })
    gsap.from("#right5,#left5", {
        opacity: 0,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page5",
            scrub: 2,
            start: "top 60%",
            end: "top 40%"
        }
    })
    gsap.from("#right-part2 h2", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#right-part2",
            scrub: 2,
            start: "top 70%",
            end: "top 50%",
            // markers:true
        }
    })
    gsap.from("#right-part3 h2", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#right-part3",
            scrub: 2,
            start: "top 80%",
            end: "top 70%",
            // markers:true
        }
    })
    gsap.from(".butsp", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".butsp",
            scrub: 2,
            start: "top 90%",
            end: "top 60%",
            // markers:true
        }
    })

}



function page6() {
    gsap.to("#page6", {
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page6 img",
            pin: true,
            start: "top 20%",
            end: "top -85%",
            scrub: 2
        }
    })
    gsap.from("#page6 img", {
        x: -100,
        opacity: 0,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page6",
            scrub: 2,
            start: "top 70%",
            end: "top 60%",
        }

    })
    gsap.from("#page6>h1", {
        x: 100,
        opacity: 0,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page6",
            scrub: 2,
            start: "top 70%",
            end: "top 60%",
            // markers:true
        }

    })
}

function sidebar() {
    var menuBut = document.querySelector(".menu")
    var sideNav = document.querySelector("#sidebar")
    var closeBut = document.querySelector(".closebut")
    menuBut.addEventListener("click", function (dets) {
        closeBut.style.scale = "1"
        closeBut.style.opacity = "1"
        document.querySelector("#mousemover").style.opacity = "0";

        sideNav.addEventListener("mousemove", function (det) {
            gsap.to(closeBut, {
                x: det.x + "px",
                y: det.y + "-280px",
            })
        })
        sideNav.style.right = "0%"

        closeBut.addEventListener("click", function () {
            sideNav.style.right = "-50%"
            closeBut.style.scale = "0"
            document.querySelector("#mousemover").style.opacity = "1";

        })
    })
}
function page8() {
    var crsr = document.querySelector("#mousemover")
    var h1Text = document.querySelectorAll("#page8 .lower8 h1")
    h1Text.forEach(function (dets) {
        dets.addEventListener("mouseenter", function () {
            var att = dets.getAttribute("data-image")
            crsr.style.backgroundImage = `url(${att})`
            gsap.to(crsr, {
                width: "300px",
                height: "250px",
                borderRadius: "0",
                mixBlendMode: "normal",
                color: "#ca8a8a"
            })
        })
        dets.addEventListener("mouseleave", function () {
            crsr.style.backgroundImage = 'none'
            crsr.style.backgroundColor = '#fff'
            gsap.to(crsr, {
                width: "15px",
                height: "15px",
                borderRadius: "50%",


            })

        })
    })
}

function menucloseButtonres(){
    let closeButton=document.querySelector("#sidebar .ri-close-fill");
    let menuButton=document.querySelector(".menu");
    menuButton.addEventListener("click",function(){
        gsap.to("#sidebar",{
            left:0
        })
    })
    closeButton.addEventListener("click",function(){
        gsap.to("#sidebar",{
            left:"100vw"
        })
    })

}

if(window.innerWidth<=600){
    // sidebar()
    // page1()
    page2()
    page3()
    page4()
    page8()
    menucloseButtonres()
}
else{
    sidebar()
    page1()
    page2()
    page3()
    page4()
    page5()
    page6()
    page8()
}

