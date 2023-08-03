const express = require("express");
const router = express.Router();
const Libro = require("../models/Libro");

const { requiredScopes } = require("express-oauth2-jwt-bearer");

//Obtener Libro

router.get('/', requiredScopes("read:productos") , async(req, res) => {
    try {
        const libro = await Libro.find();
        res.json(libro);
    }catch(error){
        res.status(500).json({error: "Error al obtener el libro"});
    }
});

//Crear Libro   

router.post('/', requiredScopes("write:productos"), async(req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save(nuevoLibro);
        res.json(nuevoLibro);
    }catch(error){
        res.status(500).json({error: "Error al crear el libro"});
    }
});

//Actualizar Libro

router.put('/:id', requiredScopes("write:productos"), async(req, res) => {
    try {
        const libro = await libro.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            });
        res.json(libro);
    }catch(error){
        res.status(500).json({error: "Error al actualizar el libro"});
    }
});

//Eliminar Libro

router.delete('/:id', requiredScopes("write:productos"), async(req, res) => {
    try {
        await libro.findByIdAndDelete(req.params.id);
        const tituloLibro = libro.id;
        res.json({ message: `Libro con el id ${tituloLibro} Eliminado `});
    }catch(error){
        res.status(500).json({error: "Error al eliminar el libro"});
    }
});

module.exports = router;