const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/register", (req, res)=> {
    let {username, password} = req.query;
    res.send(`success GET response. Welcome ${username}`);
}); 

app.post("/register", (req, res)=> {
    let {username, password} = req.body;
    res.send(`success POST response. Welcome ${username}`);
});     


app.listen(3000, (req, res)=> {
    console.log("app listening to server at port 3000");
});