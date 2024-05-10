const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController');

// Rota para listar todos os tutores
router.get('/', tutorController.getAllTutors);

// Rota para criar um novo tutor
router.post('/', tutorController.createTutor);

// Rota para atualizar um tutor existente
router.put('/:id', tutorController.updateTutor);

// Rota para deletar um tutor
router.delete('/:id', tutorController.deleteTutor);

// Rota para adicionar um pet a um tutor
router.post('/:tutorId/pet', tutorController.addPetToTutor);

// Rota para atualizar a informação de um pet
router.put('/:tutorId/pet/:petId', tutorController.updatePetInfo);

// Rota para deletar um pet de um tutor
router.delete('/:tutorId/pet/:petId', tutorController.deletePetFromTutor);

module.exports = router;
