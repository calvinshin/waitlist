var express = require("express");
var path = require("path");

app = express();
PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var list = [
    {email: "test@gmail.com",
    name: "Sally"
    },
    {email: "test2@gmail.com",
    name: "Frank"
    },
    {email: "mndy@gmail.com",
    name: "Joe"
    }
]


// Send the information on the page to three different sites:

// Home page
app.get("/", function(req, res) {
    // res.send("This is information!");
    res.sendFile(path.join(__dirname, "html/home.html"));
})

// Go to the reserve page
app.get("/reserve", function(req,res) {
    res.sendFile(path.join(__dirname, "html/form.html"));
})

// Go to the waitlist page
app.get("/waitlist", function(req,res) {
    res.sendFile(path.join(__dirname, "html/waitlist.html"));
})

app.get("/test", function(req, res) {
    return res.json("where does this go?");
})

app.get("/reservelist", function(req,res) {
    return res.json(list);
})

// Clicking button on reserve page posts data
app.post("/reserve", function(req,res) {
    console.log(req.body);
    
    list.push(req.body);

    res.json("Done!");
})



app.listen(PORT, function() {
    console.log("App is active on port " + PORT)
})




