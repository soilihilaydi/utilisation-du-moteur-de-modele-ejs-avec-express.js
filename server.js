const express = require("express");

const port = 3000;

app = express();


app.set("view engine", "ejs");

app.get("/", function(req, res) {
    const characters = [
        {
          name: 'Harry',
          designation: "prince dechue"
        },
        {
          name: 'soupe dog',
          designation: "musicien"
        },
        {
          name: 'Xavier',
          designation: "elProfessor"
        },
        {
          name: 'led zepplin',
          designation: "groupe de rebelle au cheveux long"
        }
         ];
         const subheading = "Je pensais que nous devrions impliquer un peu de magie";

         res.render("index", {
            characters: characters,
            subheading: subheading
          });
});


app.get("/magic", function(req, res) {
    res.render("magic",);
});








app.listen(port, () => console.log(`Le serveur est lancé. http://localhost:${port}`));



