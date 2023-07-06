const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
const slideImage = document.getElementById("slide-image");
const slideTagline = document.getElementById("slide-tagline");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");
const dotsContainer = document.getElementById("dots-container");

let currentSlideIndex = 0;

// affichage diapositive active
function showSlide(index) {
	const slide = slides[index];
	slideImage.src = slide.image;
	slideTagline.innerHTML = slide.tagLine;

// Mise à jour Des dots
	dotsContainer.innerHTML = "";
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.className = "dot";
		if (i === index) {
			dot.classList.add("active");
		}
		dotsContainer.appendChild(dot);
	}
}

// Affichage de la première diapositive au chargement de la page
showSlide(currentSlideIndex);

// événement pour la flèche précédente
prevArrow.addEventListener("click", function () {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1;
	}
	showSlide(currentSlideIndex);
});

// événement pour la flèche suivante
nextArrow.addEventListener("click", function () {
	currentSlideIndex++;
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0;
	}
	showSlide(currentSlideIndex);
});