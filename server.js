require('./config/config');

const express = require ('express');

const app = express();

const mysql =require('mysql2');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.json())
/**
 *  Home del server --> /
 */

//configuración global de rutas
app.use(require('./routes/index'));

app.get('/', (req, res) => {

    let objeto = {
        mensaje: "Bienvenidos al REST server - 5APROGV Equipo 06"
    };

    res.send(objeto);

});
app.listen(process.env.PORT, () =>{
    console.log("Server running on port ", process.env.PORT);
});