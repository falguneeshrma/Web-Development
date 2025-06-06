const express = require("express");
const app = express();

app.listen(3000, (req, res) => {
    console.log("listening to port 3000");
});


app.get("/", (req, res)=> {
    res.send("This is a basic get response");
});


app.get("/:username/:id", (req, res)=> {
   let{username, id} = req.params;
    res.send(`hii @${username} your id is ${id}`);
})
app.get("/search", (req, res)=> {
   let {q} = req.query;
   if (!q) {res.send("no such query")} ;
    res.send(`q = ${q}`);
});

app.get("/apple", (req, res)=> {
    res.send("This is a basic apple response");
});
app.get("/orange", (req, res)=> {
    res.send("This is a basic orange response");
});
app.get("*", (req, res)=> {
    res.send("This path does not exist");
});

app.post("/", (req, res)=> {
    res.send("This is a basic post response");
});

