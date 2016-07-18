'use strict';

import $ from "jquery";
//import TweenMax from "gsap";
import Menu from "./menu";
import Packery from "packery";
require ("./scrollmagic");

const menuBtn = $(".menu-btn");
const closeBtn = $(".close-btn");

menuBtn.on('click', function(){
    Menu.toggle();
});

closeBtn.on('click', function() {
    Menu.toggle();
});

// Grid 
const elem = document.querySelector('.page-grid');
var pckry = new Packery(elem, {
    itemSelector: '.comp',
    //columnWidth: '.comp',
    //percentPosition: true
    //gutter: 2
    //originTop: false
});