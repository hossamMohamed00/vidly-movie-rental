//? Require Packages
const express = require('express');

//? Load the logging/Handling errors module
const logger = require('./startup/logging')();

//? Load/Connect the database 
require('./startup/db')(); //TODO: Run the file to connect to the db

//? Initialize new app instance and call routes startup to  Handling Routes
const app = express();
require('./startup/routes')(app);

//? Load the Essential configuration 
require('./startup/config')(); 

//? Load the production module 
require('./startup/prod')(app); 

//* Running the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => logger.info(`Server is up on ${port}...`));

module.exports = server; // Used for integration testing