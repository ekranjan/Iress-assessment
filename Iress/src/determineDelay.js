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