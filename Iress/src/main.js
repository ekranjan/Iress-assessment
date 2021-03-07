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
