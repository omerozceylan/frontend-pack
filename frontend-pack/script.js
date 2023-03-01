import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

let scrollPosition = window.scrollY
let header = document.querySelector('.nav')

function addClassOnScroll(){
    header.classList.add('shy')
    console.log('added');
}

function removeClassOnScroll(){
    header.classList.remove('shy')
    console.log('removed');
}

window.addEventListener('scroll',listenScrolling)

function listenScrolling(){
    scrollPosition = window.scrollY

    console.log(scrollPosition);

    if(scrollPosition=>500){
        addClassOnScroll()
    }
    if(scrollPosition < 500){
        removeClassOnScroll()
    }
}










