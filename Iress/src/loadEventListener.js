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