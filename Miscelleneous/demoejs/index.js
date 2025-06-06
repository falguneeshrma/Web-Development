const express = require("express");
const app = express();
const path = require("path");

//app.listen
//app.use
//app.set

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=> {
    res.render("home.ejs");
})

app.get("/ig/:username", (req, res) => {
    let followers = ["a", "b", "c", "d", "e", "f"];
    let { username } = req.params;
    res.render("instagram.ejs", {username, followers})
})

app.get("/rolldice", (req, res) => {
    
    let diceVal = Math.floor(Math.random() *6 ) + 1;
    res.render("rolldice.ejs", {num: diceVal});
})

app.listen(3000, (req, res)=> {
    console.log("listening to port 3000");
})