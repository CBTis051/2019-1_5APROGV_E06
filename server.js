require('./config/config');

const express = require('express');
const app = express();

/**
 * Home del server --> /
 */
app.get('/', (req, res) =>{

    let objeto = {
        mensaje: "Bienvenidos al REST server - 5APROGV Equipo 06"
    };
    res.send(objeto);
    app.listen(process.env.PORT, () =>{
        console.log("Server running on port ", process.env.PORT);
    });
});