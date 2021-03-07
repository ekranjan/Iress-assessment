  // Deactivate all tabs and tab panels
  //let deactivateTabs = () => {
let focusEventHandler = require('D:/xampp/htdocs/Iress/src/focusEventHandler.js');

module.exports = function (){      
    for (let t = 0; t < tabs.length; t++) {
      tabs[t].setAttribute("tabindex", "-1");
      tabs[t].setAttribute("aria-selected", "false");
      tabs[t].removeEventListener("focus", focusEventHandler);
    };

    for (let p = 0; p < panels.length; p++) {
        panels[p].setAttribute("hidden", "hidden");
    };
  };