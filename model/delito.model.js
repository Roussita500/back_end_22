const mongoose = require('mongoose');

const delitoSchema = mongoose.Schema({
    anio_inicio: {
        type: Number,
        required: true
    },
    mes_inicio: {
        type: String,
        required: true
    },
    fecha_inicio: {  
        type: Date,
        required: true
    },
    hora_inicio: {  
        type: String,
        required: true
    },
    anio_hecho: {
        type: Number,
        required: true
    },
    mes_hecho: {
        type: String,
        required: true
    },
    fecha_hecho: {  
        type: Date,
        required: true
    },
    hora_hecho: {  
        type: String,
        required: true
    },
    delito: {  
        type: Number,
        required: true
    },
    categoria_delito: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    tipo_persona: {
        type: String,
        required: true
    },
    calidad_juridica: {
        type: String,
        required: true
    },
    competencia: {
        type: String,
        required: true
    },
    colonia_hecho: {
        type: String,
        required: true
    },
    colonia_catalogo: {
        type: String,
        required: true
    },
    alcaldia_hecho: {
        type: String,
        required: true
    },
    alcaldia_catalogo: {
        type: String,
        required: true
    },
    municipio_hecho: {  
        type: Number,  
        required: true
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    }
}, { collection: 'clasificacion' });  // 🔹 Evita que Mongoose pluralice la colección

const clasificacion = mongoose.model('clasificacion', delitoSchema);

module.exports = clasificacion;
