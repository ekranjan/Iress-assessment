// Either focus the next, previous, first, or last tab
  // depening on key pressed
  //let switchTabOnArrowPress = (event) => {
let focusEventHandler = require('D:/xampp/htdocs/Iress/src/focusEventHandler.js');
let focusFirstTab = require('D:/xampp/htdocs/Iress/src/focusFirstTab.js');
let focusLastTab = require('D:/xampp/htdocs/Iress/src/focusLastTab.js');

module.exports = function (event){
    // Add or substract depending on key pressed
    let keys = {
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        delete: 46
      }; 
    let direction = {
        37: -1,
        38: -1,
        39: 1,
        40: 1
    };
    let pressed = event.keyCode;

    for (let x = 0; x < tabs.length; x++) {
      tabs[x].addEventListener("focus", focusEventHandler);
    };

    if (direction[pressed]) {
      let target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        }
        else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        }
        else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        };
      };
    };
  };