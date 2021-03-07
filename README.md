# Iress-assessment
Accessible Tabs Code Challange


Steps to install package:-
-> Install node (this will add all dependencies from package.json file and install node_modules on the specific folder)
-> run this command to CLI npm install (I have done my coding on Visual Studio code)
-> Modules path is static at this moment for require modules ( e.g., D:/xampp/htdocs/Iress/src/). it would be great if this can be installed on same folder else needs to change the path.  I am looking into this issue at this moment.
-> If you are changing the path.. please run this command -> (browserify ./src/main.js > ./dist/bundle.js) to bundle all reusable modules into a single bundle file.
-> Run code on any browsers (tested on chrome, firefox and edge)
-> camelCase Naming conventions.  Seperate classes for CSS and JS (Do not repeate yourself).
-> Tested on cross browsers.



Accessbility Guidelines:-
-> be able to handle multiple tab groups rendered on a single page.
-> Tab will move to the active tab
-> previous arrow will move to previous tab
-> next arrow will move to next tab
-> next arrow will go to tab one incase of last tabs
-> previous arrow will go to last tab incase of the first tab
-> Individual URL for each and every tab on the basis of role
-> Previous and next history is working and maintaing state
-> Each tab can be clickable with individual URL
-> active and hover have different styling to highlight tab and tab panel
-> Used Accessbility guidelines and examples from (https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel).

Next steps (which need to be done)
-> CSS unique modules
-> Global path issue
-> Minification of JS and CSS files

I can present it from my local laptop if required.

Thanks,
Ekta Ranjan
