Adam J Piechnik
===============

> A single page static site build using [Yeoman](http://yeoman.io/)

Getting Started
---------------

1. [Install NodeJs](http://nodejs.org/).
2. `npm install -g grunt-cli bower` to [install Grunt and Bower](http://www.nitinh.com/2013/05/getting-started-with-grunt-bower/).
3. `npm install` to [install](https://npmjs.org/doc/install.html) development dependencies.
4. `bower install` to fetch front-end components using [Bower](http://bower.io/).
5. `grunt serve` to start up the development server using [Grunt](http://gruntjs.com/).

Although this project was built using [Yeoman](http://yeoman.io/) it is not needed to make future changes. Grunt, however, is. Both to run the development server (which includes [liveReload](https://github.com/gruntjs/grunt-contrib-livereload) and to compile the project for a production environment.

Once you're satisfied with your changes you can stop the development server and run `grunt build` to compile the project into a production-ready form using [all the magic of the Yeoman generator](http://yeoman.io/whyyeoman.html) it's built from. The end product can now be found in the *dist/* directory and is ready for deployment.

Deploying to Github pages
-------------------------

 1. `grunt build` to process the source files into an optimized distributabale form.
 2. copy the contents on the *dist/* directory to a temporary location.
 3. `git checkout gh-pages` to switch branches to the demo site
 4. empty the current directory and replace it's contents with the copy of *dist/* you saved elsewhere

Grunt tasks
-----------

 * `grunt serve`
   Starts a local web server (port 9000), opens the site in your default web browser, watches for changes in source files and rebuilds when changes are detected[^1].

 * `grunt build`
   Build a production ready copy of the site. Concatenates, minifies, and version stamps assets.

 * `grunt copy:sp`
   Copies the contents of *dist/* to the production environment.

[^1]: [LiveReload](http://livereload.com/) has extensions for Chrome, Firefox and Safari.
