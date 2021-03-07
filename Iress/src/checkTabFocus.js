// Only activate tab on focus if it still has focus after the delay
// checkTabFocus
let activateTab = require('D:/xampp/htdocs/Iress/src/activateTab.js');
let updateUrl = require('D:/xampp/htdocs/Iress/src/updateUrl.js');
module.exports = function (target){
    focused = document.activeElement;
    updateUrl(focused);
    if (target === focused) {
      activateTab;
    };
  };