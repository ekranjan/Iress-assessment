// Deletes a tab and its panel
module.exports = function (event){     
    let target = event.target;
    let panel = document.getElementById(target.getAttribute("aria-controls"));
    target.parentElement.removeChild(target);
    panel.parentElement.removeChild(panel);
  };