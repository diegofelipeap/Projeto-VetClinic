const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController.' /*Verificar erro de rota. O ponto final não é correto.*/);

router.get('/', tutorController.getAllTutors);
// Implementar outras rotas do tutor conforme necessário

module.exports = router;
