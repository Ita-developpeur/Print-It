"use strict";

// ******************** CONSTANTS ********************

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const arrowLeft   = document.querySelector(".arrow_left");
const arrowRight  = document.querySelector(".arrow_right");
const dots        = document.querySelector(".dots");
const banner      = document.querySelector(".banner-img");
const tagLine     = document.querySelector("#banner > p");

// ******************** VARIABLES ********************

let counter   = 0;
let imgLength = slides.length;

// ******************** FUNCTIONS ********************

/**
 * Moves the slide to the left in the slideshow.
 */
function goLeft() {
  dot[counter].classList.remove("dot_selected");
  counter--;

  if (counter === -1) {
    counter = imgLength - 1;
  }

  banner.src = "./assets/images/slideshow/" + slides[counter].image;
  tagLine.innerHTML = slides[counter].tagLine;
  dot[counter].classList.add("dot_selected");
}

/**
 * Moves the slideshow to the next image on the right.
 */
function goRight() {
  dot[counter].classList.remove("dot_selected");
  counter++;

  if (counter === imgLength) {
    counter = 0;
  }

  banner.src = "./assets/images/slideshow/" + slides[counter].image;
  tagLine.innerHTML = slides[counter].tagLine;
  dot[counter].classList.add("dot_selected");
}

/**
 * Runs the slider by setting the initial image and tagline, and adding event listeners for arrow buttons.
 */
function setSlider() {
  banner.src = "./assets/images/slideshow/" + slides[0].image;
  tagLine.innerHTML = slides[0].tagLine;
  dot[0].classList.add("dot_selected");
  
  arrowLeft.addEventListener("click", goLeft);
  arrowRight.addEventListener("click", goRight);
}

// ******************** MAIN ********************

for (let i = 0; i < imgLength; i++) {
  dots.innerHTML = dots.innerHTML + "<span class='dot'></span>";
}

const dot = document.querySelectorAll(".dot");

setSlider();
