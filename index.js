const express = require('express');
const mongoose = require('mongoose');
// importar las rutas de la colección de delito
const delitoRoute = require ('./routes/delito.route');
// Inicialización de aplicación basada en expess
const app = express();
// Incorporando la parser de json
app.use ( express.json() );


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

mongoose.connect('mongodb+srv://utp0159393:96131396@cluster0.nrzzs.mongodb.net/Delitos')
.then( () => {
    console.log('Bienvenido a la BD de Ross');

    app.listen('3000', () =>{
        console.log('Servidor respondiendo al puerto 3000');
    });
})
.catch (() => console.log('Ocurrió un problema al conectar la base de datos') )



//Endopoint por defecto
app.get('/', (req, res) =>{
    res.send('Bienvenidos a mi servidor de API de ross');
});

app.use('/api/delitos/', delitoRoute);