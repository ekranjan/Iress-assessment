module.exports = function (tab) { 
    var controls = tab.getAttribute("aria-controls");
    var path = location.href= "#" + controls;
}