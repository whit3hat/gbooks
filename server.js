const express = require('express');
const logger = require('morgan');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001

//Define middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//serve static assets for heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

//Add routes, both API and view
app.use(routes);
app.use(logger('dev'));
app.use(express.static('public'));

//Start API server
app.listen(PORT, function(){
console.log(` ==> API Server now listening on PORT ${PORT}!`);
});