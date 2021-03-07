// When a tablistâ€™s aria-orientation is set to vertical,
  // only up and down arrow should function.
  // In all other cases only left and right arrow function.
  //let determineOrientation = (event) => {
let switchTabOnArrowPress = require('D:/xampp/htdocs/Iress/src/switchTabOnArrowPress.js');
module.exports = function (event){  
    let keys = {
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        delete: 46
      };    
    let tablist = document.querySelectorAll("[role='tablist']")[0];
    let key = event.keyCode;
    let vertical = tablist.getAttribute("aria-orientation") == "vertical";
    let proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      };
    }
    else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      };
    };

    if (proceed) {
      switchTabOnArrowPress(event);
    };
  };
