const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const hamburger = document.querySelector('.hamburger')
const headline = document.querySelector('.headline')
const down = document.querySelector(".down")

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
    .fromTo(hero, 1, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(headline, 0.5, { left: "20%" }, { left: "2%" }, "-=.5")
    .fromTo(down, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")


function init() {
    
    const hamburger = document.querySelector(".hamburger")
    const hamburgerLines = document.querySelectorAll(".hamburger line")
    const navOpen = document.querySelector(".nav-open")
    const contact = document.querySelector(".contact")
    const social = document.querySelector(".social")
    const logo = document.querySelector('#logo')
    const about = document.querySelector('.About')

    const Hl = new TimelineMax({ paused: true, reversed: true })

    Hl.to(navOpen, 0.5, { y: 0 })
        .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=.1')
        .fromTo(social, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.5')
        .fromTo(about, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.5')
        .fromTo(logo, 0.2, { color: "white" }, { color: "#333a33" }, '-=1')
        .fromTo(hamburgerLines, 0.2, { stroke: "white" }, { stroke: "#333a33" }, "-=.5")



    hamburger.addEventListener('click', () => {
        Hl.reversed() ? Hl.play() : Hl.reverse();
    })

}

init()
