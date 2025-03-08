const express = require('express');
const mongoose = require('mongoose');
const app = express()


/*
app.listen(3000, () =>{
    console.log('hola mundo');
})*/

// Determinación del puerto
// C = Creat crear agregar --- post
// R = Read leer o recuperar --- get
// U = update actualizar ----put
// D = delete borrar ----- delete


//definiendo la conexion a base de datos a través de mongoose
// La conexión a base de datos es de tipo promesa 

mongoose.connect('mongodb+srv://utp0159393:13969613@cluster0.nrzzs.mongodb.net/')
.then( () => {
    console.dog('Conectado a la base de datos de manera exitosa');

    app.listen('3000', () =>{
        console.log('Servidor respondiendo al puerto 3000');
    });
})
.catch (() => console.log('Ocurrió un problema al conectar la base de datos, chinga') )


