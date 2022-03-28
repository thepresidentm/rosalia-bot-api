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
    'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z'
];
for(var i = 0; i < abc.length; i++){
    diccionarios[i] = fs.readFileSync("diccionarios/" + abc[i] + ".csv").toString().split('\n');
}
// Obtener palabra
function getPalabra(diccionario){
    let numero = Math.floor(Math.random() * diccionario.length);
    return diccionario[numero];

}

// Crear JSON para respuesta
function getJSON(){
    let r1 = getPalabra(diccionarios[15]);
    let r2 = getPalabra(diccionarios[15]);
    let contenido = {
        a: [getPalabra(diccionarios[0]), getPalabra(diccionarios[0]), getPalabra(diccionarios[0])],
        b: getPalabra(diccionarios[1]),
        c: getPalabra(diccionarios[2]),
        d: getPalabra(diccionarios[3]),
        e: [getPalabra(diccionarios[4]), getPalabra(diccionarios[4]), getPalabra(diccionarios[4]), getPalabra(diccionarios[4])],
        f: getPalabra(diccionarios[5]),
        g: getPalabra(diccionarios[6]),
        h: getPalabra(diccionarios[7]),
        i: getPalabra(diccionarios[8]),
        j: getPalabra(diccionarios[9]),
        m: "motomami",
        n: "Ni se te ocurra ni pensarlo",
        o: getPalabra(diccionarios[12]),
        p: getPalabra(diccionarios[13]),
        q: "Que reinota",
        r: [r1, r1, r2, r1, r2],
        s: getPalabra(diccionarios[16]),
        t: getPalabra(diccionarios[17]),
        u: getPalabra(diccionarios[18]),
        v: getPalabra(diccionarios[19]),
        w: ["Willy Colón", getPalabra(diccionarios[20])],
        x: "Te despejo la X en un momento",
        y: [getPalabra(diccionarios[22]), "yantas"],
        z: [getPalabra(diccionarios[23]), getPalabra(diccionarios[23]), getPalabra(diccionarios[23])]
    }
    return contenido;
}

// API
app.get("/", (req, res) => {
    res.json( getJSON() );
});