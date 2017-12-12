/*

webpack is a module bundler

it allows us to organize / minify our javascript

it bundles all of our dependencies and application
code into one file: bundle.js
 
it allows us to include only one script tag,
speeding up the process during load time

 we can do that by breaking up our main 
 application into seperate chuncks, using
 export and import statements

 This is an improvement over having one large
 file of code

 structure:
  /public
  /src
  /node_modules

Avoid global modules:
because package.json does not define all of the
dependencies that a third party user actually needs

because installing it globally is essentially
giving the same version and packages to all
of your react apps, and it's better to install
specific versions as needed

because you'll have to type out the entire command
if not installed in package.json

Scripts in package.json allow us to  modify
the commands entered for specific technologies
ran in the command line - dependencies does
not do that

webpack.config.js file

required in this file is the entry and output for module.exports.
 
__dirname is a variable for the exact file system path

import / export statements are ES6 syntax that webpack uses to communicate and integrate files within a project

default exports...
you don't have to grab it by name because we know it's the default
 
*/