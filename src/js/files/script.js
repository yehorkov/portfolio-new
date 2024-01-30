// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function setTime(selector, addClass, delay) {
	setTimeout(() => {
		document.querySelector(selector).classList.add(addClass);
	}, delay);
}

setTime(".body-greet-page__wrapper", "visible", 1300);
setTime(".body-greet-page__title", "visible", 1700);
setTime(".body-greet-page__text", "visible", 1900);

function stars(count, selector) {
	for (let i = 0; i < count; i++) {
		let scene = document.querySelector(selector);
		let star = document.createElement("i");
		let x = Math.floor(Math.random() * window.innerWidth);
		let y = Math.floor(Math.random() * window.innerHeight);
		let size = Math.random() * 2.6;

		let duration = Math.random() * 10;

		star.style.left = `${x}px`;
		star.style.top = `${y}px`;
		star.style.width = `${size}px`;
		star.style.height = `${size}px`;

		star.style.animationDuration = `${5 + duration}s`;
		star.style.animationDelay = `${duration}s`;

		scene.appendChild(star);
	}
}

stars(500, ".page__greet");
