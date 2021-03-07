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
