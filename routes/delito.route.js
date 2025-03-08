const express = require ('express');
const router = express.Router();
const {
    getDelito, 
    getDelitoById,
    setDelito,
    updateDelito,
    deleteDelitoById
} = require ('../controllers/delito.controller')

// Endpoint para recuperar toda la colección
router.get('/all', getDelito);
// Endpoint para recuperar un elemento de la colección
router.get('/ById/:id', getDelitoById);
// Endpoint para agregar un nuevoelemento de la colección
router.post('/add', setDelito);
// Endpoint para la actualización de un elemento de la colección
router.put('/modify/:id', updateDelito);
// Endpoint para la eliminacoión de un elemento de la colección
router.delete('/less/:id', deleteDelitoById);

module.exports = router;