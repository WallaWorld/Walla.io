$(document).ready(function(){
    $('#mobilemenu').click(function(){
        $('ul').toggleClass('show')
    });
});
// toggle mobilemenu

function ToggleMenu(){
    const menuToggle = document.querySelector('.mobile-toggle');
    menuToggle.classList.toggle('active')
}

// slideshow behaviour
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const noOfSlides = slides.length;

let slideno = 0;

// navigation buttons
nextBtn.addEventListener('click',() =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    })
    slideno++;
    if(slideno > (noOfSlides -1)){
        slideno = 0;
    }
    slides[slideno].classList.add('active');
    slideIcons[slideno].classList.add('active');
});

prevBtn.addEventListener('click',() =>{
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    slideno--;
    if(slideno < 0){
        slideno = noOfSlides - 1;
    }
    slides[slideno].classList.add('active');
    slideIcons[slideno].classList.add('active');
});

// loop 
let repeater =() =>
{
    playSlider= setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        })
        slideno++;
        if(slideno > (noOfSlides -1)){
            slideno = 0;
        }
        slides[slideno].classList.add("active");
        slideIcons[slideno].classList.add("active");
    },4000);
}
repeater();

// stop autoplay on mousehover
slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
});
// start autoplay on mousehover
slider.addEventListener('mouseover', () => {
    repeater();
});

// song list
let playlist = document.querySelector('.playlist');
let options = document.querySelector('.options');

function open_p() {
    playlist.classList.toggle('active');
}

function sidebar() {
    options.classList.toggle('active2');
}
// strapGang
let strap_song =[
    {
        name: "Jipee",
        path: "assets/audio/JIPEE.mp3",
        singer: "Strap Gang"
    },
    {
        name: "LIT",
        path: "assets/audio/LLLIT.mp3",
        singer: "Mic-Key, Modeeh & Jus"
    },
]
// topBoyz
let topboyz_song =[
    {
        name: "",
        path: "assets/audio/",
        singer: "TopBoyz"
    },
    {
        name: "",
        path: "assets/audio/",
        singer: "TopBoyz"
    },
]
// noteez
let noteez_song =[
    {
        name: "Players",
        path: "assets/audio/NOTEEZ_Players.mp3",
        singer: "Jus & Cash T"
    },
    {
        name: "JIgSaw",
        path: "assets/audio/jigsaw.mp3",
        singer: "Noteez & Mr Ree"
    },
]
// goke
let goke_song =[
    {
        name: "Don't Go",
        path: "assets/audio/dont_go.mp3",
        singer: "Goke"
    },
    {
        name: "",
        path: "assets/audio/",
        singer: "Goke"
    },
]
// Mr Ree
let mrree_song =[
    {
        name: "",
        path: "assets/audio/",
        singer: "Mr Ree"
    },
    {
        name: "",
        path: "assets/audio/",
        singer: "Mr Ree"
    },
]
// mic_key
let mic_key_song =[
    {
        name: "",
        path: "assets/audio/",
        singer: "Mic_key"
    },
    {
        name: "",
        path: "assets/audio/",
        singer: "Mic_key"
    },
]
// modeeh
let modeeh_song =[
    {
        name: "",
        path: "assets/audio/",
        singer: "Modeeh"
    },
    {
        name: "",
        path: "assets/audio/",
        singer: "Modeeh"
    },
]
// DecVid
let DecVid_song =[
    {
        name: "Madiaba",
        path: "assets/audio/Madiaba.mp3",
        singer: "DechVid, suseh & Ghost"
    },
    {
        name: "",
        path: "assets/audio/",
        singer: "DechVid"
    },
]
// suseh
let suseh_song =[
    {
        name: "Fifty",
        path: "assets/audio/fifty.mp3",
        singer: "Suseh , Opio"
    },
    {
        name: "",
        path: "assets/audio/",
        singer: "Suseh"
    },
]
// jus
let jus_song =[
    {
        name: "Grace",
        path: "assets/audio/grace.mp3",
        singer: "Jus"
    },
    {
        name: "Influenced",
        path: "assets/audio/influenced.mp3",
        singer: "Jus"
    },
]
// timber
let timber_song =[
    {
        name: "Sena Alwanyi",
        path: "assets/audio/sena_alwanyi.mp3",
        singer: "Timber"
    },
    {
        name: "",
        path: "assets/audio/",
        singer: "Timber"
    },
]
