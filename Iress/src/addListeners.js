// Bind listeners
let loadEventListener= require('D:/xampp/htdocs/Iress/src/loadEventListener.js');
// Reload page
let funcReference= require('D:/xampp/htdocs/Iress/src/funcReference.js');
// When a tab is clicked, activateTab is fired to activate it
let clickEventListener = require('D:/xampp/htdocs/Iress/src/clickEventListener.js');
// Handle keydown on tabs
let keydownEventListener = require('D:/xampp/htdocs/Iress/src/keydownEventListener.js');
// Handle keyup on tabs
let keyupEventListener = require('D:/xampp/htdocs/Iress/src/keyupEventListener.js');  

module.exports = function (index) {  
    tabs[index].addEventListener("click", clickEventListener);
    tabs[index].addEventListener("keydown", keydownEventListener);
    tabs[index].addEventListener("keyup", keyupEventListener);
    window.addEventListener("load", loadEventListener);
    window.addEventListener("hashchange", funcReference, false);
    // Build an array with all tabs (<button>s) in it
    tabs[index].index = index;
  }