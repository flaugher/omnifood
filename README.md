# README

This is an example of a one-page restaurant website built with HTML5, CSS3, and
PHP.

This website uses the grid system described at www.responsivegridsystem.com.

This is the [finished site](http://www.webdesigncourse.co/omnifood/index.php).

Run browsersync:

    cd (this directory)
    browser-sync start --server --files "*.html, *.css, css/*.css, js/*.js, resources/**, vendors/**"


## Tools

He uses [Can I use](https://caniuse.com) to see if a CSS property works on different browsers.

## Polyfills

He uses Respond.js to allow older browsers to understand our website's media
query files.
https://cdnjs.com/libraries/respond.js/
https://github.com/scottjehl/Respond

He uses HTML5shiv to allow older browsers to understand HTML5 syntax.
https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"

He uses selectivrz form CSS pseudo-class emulation in older browsers.
https://cdn.jsdelivr.net/npm/selectivizr@1.0.3/selectivizr.min.js
