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