Adam J Piechnik
===============

> A single page static site build using [Yeoman](http://yeoman.io/) [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp)

Getting Started
---------------

1. [Install NodeJs](http://nodejs.org/).
2. `$ npm install -g gulp bower` to [install Gulp and Bower](http://www.nitinh.com/2013/05/getting-started-with-grunt-bower/).
3. `$ npm install` to [install](https://npmjs.org/doc/install.html) development dependencies.
4. `$ bower install` to fetch front-end components using [Bower](http://bower.io/).
5. `$ gulp watch` to start up the development server using [Gulp](http://gulpjs.com/).

Although this project was built using [Yeoman](http://yeoman.io/) it is not needed to make future changes. Gulp, however, is. Both to run the development server (which includes [liveReload](https://github.com/intesso/connect-livereload) and to compile the project for a production environment.

Once you're satisfied with your changes you can stop the development server and run `gulp build` to compile the project into a production-ready form using [all the magic of the Yeoman generator](http://yeoman.io/whyyeoman.html) it's built from. The end product can now be found in the *dist/* directory and is ready for deployment.

Deploying to Github pages
-------------------------

`$ gulp build` to populate the `dist` directory with a new production ready version of the site, then `$ gulp deploy` to deploy it to github.

Gulp tasks
-----------

 * `$ gulp watch`
   Starts a local web server (port 9000), opens the site in your default web browser, watches for changes in source files and rebuilds when changes are detected[^1].

 * `$ gulp build`
   Build a production ready copy of the site. Concatenates, minifies, and version stamps assets.

 * `$ gulp deploy`
   Commit a copy of the contents of the `dist` directory to the `gh-pages` branch, and push it to github.

[^1]: [LiveReload](http://livereload.com/) has extensions for Chrome, Firefox and Safari.
