// Librerias
const express = require('express');
const fs = require('fs');

// Cosas Web
const app = express();
const port = process.env.PORT || "5000";
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

// Diccionarios
let diccionarios = new Array();
    // Abecedario segun rosalia
const abc = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'm', 'n', 'o', 'p', 'q',
    'r', 's', 'u', 'v', 'w',
    'x', 'y', 'z'
];
for(var i = 0; i < abc.length; i++){
    diccionarios[i] = fs.readFileSync("diccionarios/" + abc[i] + ".csv").toString().split('\n');
}
console.log(diccionarios);
// API
app.get("/", (req, res) => {
    res.json( { mensaje: "Hola Mundo" } );
});