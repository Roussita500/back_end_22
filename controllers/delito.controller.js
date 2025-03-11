const clasificacion = require('../model/delito.model');
//función para recuperar la colección delito

const getDelito = async (req, res) => {
    try {
        const delitos = await clasificacion.find({}).limit(500); 
        res.status(200).json(delitos);
    } catch (error) {
        res.status(500).json({ status: "error: " + error.message });
    }
};

const getDelitoById = async(req, res) => {
    try {
        const {id} = req.params;
        const delito = await clasificacion.find({'_id': id});
        res.status(200).json(delito);
    } catch (error) {
        res.status(500).json({
            status:"error: " +error.message
        });
    }

}

// Funcion  uew agrega un elemento a la función

const setDelito = async(req, res) => {
    try {

        const newDelito = await clasificacion.create(req.body);
       
        res.status(200).json(newDelito);
    } catch (error) {
        res.status(500).json({
            status:"error: " +error.message
        });
    }

}

// Función para actualizar un elemento de la colección

const updateDelito = async(req, res) => {
    try {

        const {id} = req.params;
        const updateDelito = await clasificacion.findByIdAndUpdate(id, req.body)

        if (!updateDelito){

            res.status(400).json({
                status:"error: hubo error al actualizar"
            });

        }

        res.status(200).json(updateDelito);

    } catch (error) {
        res.status(500).json({
            status:"error: " +error.message
        });
    }

}


const deleteDelitoById = async(req, res) => {
    try {
        const {id} = req.params;
        const delito = clasificacion.find({'_id': id});
        if (!delito) {
            req.status(400).json({
                message: "Document not found"
            });
        }
        const deleteDelito = await clasificacion.deleteOne({'_id': id});
        res.status(200).json({
            message: "Document deleted"
        });
    } catch (error) {
        res.status(500).json({
            status:"error: " +error.message
        });
    }

}



module.exports = {
    getDelito, 
    getDelitoById,
    setDelito,
    updateDelito,
    deleteDelitoById

}

