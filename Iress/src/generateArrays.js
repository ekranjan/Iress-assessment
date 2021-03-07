let tabs;
let panels;
module.exports = function () { 
  tabs = document.querySelectorAll("[role='tab']");
  panels = document.querySelectorAll("[role='tabpanel']");
  return{tabs, panels};
}
