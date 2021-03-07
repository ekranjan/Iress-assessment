// Handle keyup on tabs //keyupEventListener Function
let determineOrientation = require('D:/xampp/htdocs/Iress/src/determineOrientation.js');
let determineDeletable = require('D:/xampp/htdocs/Iress/src/determineDeletable.js');
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
  let key = event.keyCode;
  switch (key) {
    case keys.left:
    case keys.right:
      determineOrientation(event);
      break;
    case keys.delete:
      determineDeletable(event);
      break;
  };
};
  