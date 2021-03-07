// When a tab is clicked, activateTab is fired to activate it
//let clickEventListener = (event) => {
let activateTab = require('D:/xampp/htdocs/Iress/src/activateTab.js');
let updateUrl = require('D:/xampp/htdocs/Iress/src/updateUrl.js');
module.exports = function (event){
    var tab = event.target;
    activateTab(tab, false);
    updateUrl(tab);
  };