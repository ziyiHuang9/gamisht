/**
 * ==============================
 * Your Javascript Code Goes Here
 * ==============================
 **/

'use strict';
/* global Monogatari */
/* global monogatari */

const { $_ready } = Monogatari;

$_ready (() => {
	monogatari.init ('#monogatari');
	var btns = document.querySelector('main-menu').childNodes;
/* 	console.log(btns);
	console.log(btns[0].style); */
	btns[0].classList.add('main_button');
	var spans = btns[0].childNodes;
	spans[3].style.display="none";
	btns[2].style.display = "none";
	btns[4].style.display = "none";
	btns[6].style.display = "none";

	var t_box = document.querySelector('text-box').childNodes;
	t_box[1].childNodes[3].childNodes[1].style.display='block';

/* 	var image = document.querySelector('div[data-content]="visuals"');
	console.log(image); */
});


