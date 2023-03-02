import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
    animation: gsap.from(".logo", {
        y: "50vh",
        scale: 3.5,
        yPercent: -50,

    }),
    scrub: true,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end:"top center"
  })



let scrollPosition = window.scrollY
let header = document.querySelector('.nav')
let infoContainer = document.querySelector('.info-container')
let icon = document.querySelector('.icon')
let container = document.querySelector('.container')


window.addEventListener('scroll',listenScrolling)

function listenScrolling(){
    scrollPosition = window.scrollY

    console.log(scrollPosition);

    if(scrollPosition=>500){
        header.classList.add('shy')
        console.log('added');
        infoContainer.classList.add('removable')
        icon.classList.add('removable')
    }
    if(scrollPosition < 500){
        header.classList.remove('shy')
        console.log('removed');     
        infoContainer.classList.remove('removable')
        icon.classList.remove('removable')
    }
    if(scrollPosition => 650){
        container.style.height = "50vh"
    }
    if(scrollPosition < 650){
        container.style.height = "100vh"
    }

}










