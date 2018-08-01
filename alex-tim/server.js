'use strict';

// DONE: Require the ExpressJS package that you installed via NPM, and instantiate the app.
// Remember to install ExpressJS, and be sure that it's been added to your package.json as a dependency.

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// DONE: Initialize your project using NPM to create and populate  package.json and package-lock.json files. Don't forget to add node_modules to your .gitignore!

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

// COMMENT: Why are our files in a "public" directory now? How does ExpressJS serve files?
// It uses the public directory as a root directory, and anything above it is not accessible to requests.  ExpressJS serves files as a request, response and callback function. It static files with the static method.

// TODO: Write a new route, using an arrow function, that will handle a request and send the new.html file back to the user.
// NOTE: route url does not need to match the file name
app.get('/', (req, res) => {res.sendFile('new.html', {root: './public'})});
// TODO: Write a new route, using an arrow function, that will handle any other routes that were not defined and deliver a 404 status message to the user. See the ExpressJS docs for a hint.
app.get('*', (req, res) => {res.sendFile('new.html', {root: './public'})});

// TODO: Log to the console a message that lets you know which port your server has started on
console.log(PORT)