// ======================================================================
// Survey should have 10 questions of your choosing. Each 
// ...answer should be on a scale of 1 to 5 based on how much the user
// ...agrees or disagrees with a question.
// ======================================================================

var express = require("express");
var bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We';; use this later in our listener
var PORT = process.env.PORT || 3000;

// sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// listener, starts our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});