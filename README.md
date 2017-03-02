# README #

Javascript playground (experimental) for the following Javascript libraries/frameworks:

1. React + ReactDOM
2. Jest
3. Gulp
4. Babel
5. Browserify + Babelify

### What is this repository for? ###

A configured stack for you to quickly get up to speed with React development. 

1. **Jest** for testing: https://facebook.github.io/jest/
2. **Gulp** for build and deployment: http://gulpjs.com/
3. **Babel** for transpiling ES6: https://babeljs.io/
4. **Browserify** for using `require` on front-end: http://browserify.org/    
Note: I'm also using **Babelify** (https://github.com/babel/babelify) as a Browserify transform, so Gulp can **transpile first**, before running Browserify's bundling functionality.    
More info on Babelify: http://egorsmirnov.me/2015/05/25/browserify-babelify-and-es6.html

Also included is a Gulp config file with barebones settings to get everything up and running:

1. `gulp clean` - Transpile + bundle everything starting from top-level file js/app.js
2. `gulp test` - Runs Jest tests, if any
3. `gulp watch` - Watches file changes in js/ directory, excluding .test.js files and the usual node modules folders. Runs `gulp clean` on file changes
4. `gulp build` - Production-ready build in dist/ folder

### How do I get set up? ###

```
npm install
```
```
gulp clean
```

### How do I remove the "playground" code and start writing my own stuff? ###

- tbc

### How do I write Jest tests? ###

- tbc

### How do I do server-side rendering with React? ###

- tbc


