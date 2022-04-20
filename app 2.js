const express = require('express');
const Port = 3000;
//create new express object
const app = express();
//make a path to pass in all templates - html etc so we don;t render html in the scripts
const path = require("path");
//use middleware globally - standard option code
//built in part of express that looks at body of post request and will add named properties to reques.body so it easy to access values
app.use(express.urlencoded({extended: false}));

//set the path to the files ot be served
//need a view engine as to use jsx rather than plain
// Setting up the public directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//you dont't always have to call next - lets say you only want next to occur at certain points

//have to set up routes - so lets set up a route to home page
//so the get function requires two arguments - the get(route, function for request and repsonse)
//express calls function at appropriate time and will pass it two arguments, request and response
//express passes in incoming request from visitor, a response object 
//there is also a third object called next

//is there not a way to set a static html file - must be easier than that surely?
app.get('/', (req, res, next) => {
    res.render("home");
});

app.get('/about', (req, res) => {
    res.render("about");
});

//so need a new route for post

app.post("/result", (req, res)=>{
    //dealing with user input - access value it is sent over - req.body.color json format access - needs enabling as it isnt enabled by defualt in request
    //trim removes whitespace
    //toUpperCase() makes sure that everything is put to upper case so BlUe would still work for example
    if (req.body.color.trim().toUpperCase() == "BLUE"){
        res.send("That is correct");
    } else {
        res.send("That is incorrect");
    }
});

//1st and 2nd fundamentals of WS -> listen on a port
app.listen(Port, (err)=>{
    if (err){
        throw err;
    };
    console.log(`Server listening on ${Port}`);
});