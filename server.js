const express = require('express');

const port = 3000;

app = express();


app.set("views engine", "ejs");

app.get("/", function(req, res) {
    res.render("index",);
});


app.get("/magic", function(req, res) {
    res.render("magic",);
});








app.listen(port, () => console.log(`Le serveur est lancé. http://localhost:${port}`));



