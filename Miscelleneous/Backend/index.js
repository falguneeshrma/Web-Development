const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("server working properly");
})

app.set(express.urlencoded({extended : true}));
app.listen(port, () => {
    console.log("listening to port: 8080");
});

