//let focusEventHandler = (event) => {
let checkTabFocus = require('D:/xampp/htdocs/Iress/src/checkTabFocus.js');
let delay = require('D:/xampp/htdocs/Iress/src/delay.js');
module.exports = function (event){   
    let target = event.target;
    setTimeout(checkTabFocus, delay, target);
};