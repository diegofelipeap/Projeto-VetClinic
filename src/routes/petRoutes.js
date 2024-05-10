const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Rota para criar um novo pet
router.post('/', petController.createPet);

// Rota para atualizar um pet existente
router.put('/:id', petController.updatePet);

// Rota para deletar um pet
router.delete('/:id', petController.deletePet);

module.exports = router;
