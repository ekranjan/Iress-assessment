(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let deactivateTabs = require('D:/xampp/htdocs/Iress/src/deactivateTabs.js');
 
 // Activates any given tab panel
 module.exports = function (tab, setFocus) {
    setFocus = setFocus || true;
    // Deactivate all other tabs
    deactivateTabs();

    // Remove tabindex attribute
    tab.removeAttribute("tabindex");

    // Set the tab as selected
    tab.setAttribute("aria-selected", "true");
    //location.href='?'  + tab.id;

    // Get the value of aria-controls (which is an ID)
    let controls = tab.getAttribute("aria-controls");
    
    // Remove hidden attribute from tab panel to make it visible
    document.getElementById(controls).removeAttribute("hidden");
    // Set focus when required
    if (setFocus) {
      tab.focus();
    };
  };

},{"D:/xampp/htdocs/Iress/src/deactivateTabs.js":5}],2:[function(require,module,exports){
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
},{"D:/xampp/htdocs/Iress/src/clickEventListener.js":4,"D:/xampp/htdocs/Iress/src/funcReference.js":14,"D:/xampp/htdocs/Iress/src/keydownEventListener.js":16,"D:/xampp/htdocs/Iress/src/keyupEventListener.js":17,"D:/xampp/htdocs/Iress/src/loadEventListener.js":18}],3:[function(require,module,exports){
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
},{"D:/xampp/htdocs/Iress/src/activateTab.js":1,"D:/xampp/htdocs/Iress/src/updateUrl.js":21}],4:[function(require,module,exports){
// When a tab is clicked, activateTab is fired to activate it
//let clickEventListener = (event) => {
let activateTab = require('D:/xampp/htdocs/Iress/src/activateTab.js');
let updateUrl = require('D:/xampp/htdocs/Iress/src/updateUrl.js');
module.exports = function (event){
    var tab = event.target;
    activateTab(tab, false);
    updateUrl(tab);
  };
},{"D:/xampp/htdocs/Iress/src/activateTab.js":1,"D:/xampp/htdocs/Iress/src/updateUrl.js":21}],5:[function(require,module,exports){
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
},{"D:/xampp/htdocs/Iress/src/focusEventHandler.js":11}],6:[function(require,module,exports){

  // Determine whether there should be a delay
  // when user navigates with the arrow keys
 // let determineDelay = () => {
let determineDelay = require('D:/xampp/htdocs/Iress/src/determineDelay.js');
module.exports = function (){ 
    let delay = determineDelay(); 
};
  
  
},{"D:/xampp/htdocs/Iress/src/determineDelay.js":8}],7:[function(require,module,exports){
// Deletes a tab and its panel
module.exports = function (event){     
    let target = event.target;
    let panel = document.getElementById(target.getAttribute("aria-controls"));
    target.parentElement.removeChild(target);
    panel.parentElement.removeChild(panel);
  };
},{}],8:[function(require,module,exports){
// Determine whether there should be a delay
// when user navigates with the arrow keys
// let determineDelay = () => {
module.exports = function (){ 
    let hasDelay = tablist.hasAttribute("data-delay");
    let delay = 0;
    let tablist = document.querySelectorAll("[role='tablist']")[0];
    if (hasDelay) {
      let delayValue = tablist.getAttribute("data-delay");
      if (delayValue) {
        delay = delayValue;
      }
      else {
        // If no value is specified, default to 300ms
        delay = 300;
      };
    };
    return delay;
  };
},{}],9:[function(require,module,exports){
let generateArrays = require('D:/xampp/htdocs/Iress/src/generateArrays.js');
let activateTab = require('D:/xampp/htdocs/Iress/src/activateTab.js');
let deleteTab = require('D:/xampp/htdocs/Iress/src/deleteTab.js');

// Detect if a tab is deletable //determineDeletable function {
module.exports = function (event){
    let target = event.target;
    if (target.getAttribute("data-deletable") !== null) {
      // Delete target tab
      deleteTab(event, target);
      // Update arrays related to tabs widget
      generateArrays();

      // Activate the closest tab to the one that was just deleted
      if (target.index - 1 < 0) {
        activateTab(tabs[0]);
      }
      else {
        activateTab(tabs[target.index - 1]);
      };
    };
  };
},{"D:/xampp/htdocs/Iress/src/activateTab.js":1,"D:/xampp/htdocs/Iress/src/deleteTab.js":7,"D:/xampp/htdocs/Iress/src/generateArrays.js":15}],10:[function(require,module,exports){
// When a tablist├óΓé¼Γäós aria-orientation is set to vertical,
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

},{"D:/xampp/htdocs/Iress/src/switchTabOnArrowPress.js":20}],11:[function(require,module,exports){
//let focusEventHandler = (event) => {
let checkTabFocus = require('D:/xampp/htdocs/Iress/src/checkTabFocus.js');
let delay = require('D:/xampp/htdocs/Iress/src/delay.js');
module.exports = function (event){   
    let target = event.target;
    setTimeout(checkTabFocus, delay, target);
};
},{"D:/xampp/htdocs/Iress/src/checkTabFocus.js":3,"D:/xampp/htdocs/Iress/src/delay.js":6}],12:[function(require,module,exports){
  // Focus on first tab
//let focusFirstTab = () => {
module.exports = function (){
    tabs[0].focus();
};
},{}],13:[function(require,module,exports){
  // Focus on last tab
//let focusLastTab = () => {
module.exports = function (){
    tabs[tabs.length - 1].focus();
};
},{}],14:[function(require,module,exports){
//let funcRef = () => {
module.exports = function (event){     
    location.reload();
}
},{}],15:[function(require,module,exports){
let tabs;
let panels;
module.exports = function () { 
  tabs = document.querySelectorAll("[role='tab']");
  panels = document.querySelectorAll("[role='tabpanel']");
  return{tabs, panels};
}

},{}],16:[function(require,module,exports){
// Handle keydown on tabs
let activateTab = require('D:/xampp/htdocs/Iress/src/activateTab.js');
let determineOrientation = require('D:/xampp/htdocs/Iress/src/determineOrientation.js');

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
      case keys.end:
        event.preventDefault();
        // Activate last tab
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        activateTab(tabs[0]);
        break;

      // Up and down are in keydown
      // because we need to prevent page scroll >:)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    };
  };
},{"D:/xampp/htdocs/Iress/src/activateTab.js":1,"D:/xampp/htdocs/Iress/src/determineOrientation.js":10}],17:[function(require,module,exports){
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
  
},{"D:/xampp/htdocs/Iress/src/determineDeletable.js":9,"D:/xampp/htdocs/Iress/src/determineOrientation.js":10}],18:[function(require,module,exports){
let activateTab = require('D:/xampp/htdocs/Iress/src/activateTab.js');
// Bind listeners
module.exports = function () {
      var currentPath=window.location;
      var pathString = String(currentPath);
      var hashString =pathString.split("#")[1];
        for(let p=0; p<=tabs.length -1; ++p){
           let currentTab = (tabs[p].getAttribute("aria-controls"));
            if(currentTab === hashString){
                activateTab(tabs[p]);
            }
        }
  }
},{"D:/xampp/htdocs/Iress/src/activateTab.js":1}],19:[function(require,module,exports){
(function() {
  let generateArrays = require('D:/xampp/htdocs/Iress/src/generateArrays.js');
  let generateArraysList = generateArrays();
  tabs = generateArraysList.tabs;
  panels = generateArraysList.panels;
  let addListeners = require('D:/xampp/htdocs/Iress/src/addListeners.js');
  for (let i = 0; i < tabs.length; ++i) {
    addListeners(i);
  };
}());

},{"D:/xampp/htdocs/Iress/src/addListeners.js":2,"D:/xampp/htdocs/Iress/src/generateArrays.js":15}],20:[function(require,module,exports){
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
},{"D:/xampp/htdocs/Iress/src/focusEventHandler.js":11,"D:/xampp/htdocs/Iress/src/focusFirstTab.js":12,"D:/xampp/htdocs/Iress/src/focusLastTab.js":13}],21:[function(require,module,exports){
module.exports = function (tab) { 
    var controls = tab.getAttribute("aria-controls");
    var path = location.href= "#" + controls;
}
},{}]},{},[19]);
