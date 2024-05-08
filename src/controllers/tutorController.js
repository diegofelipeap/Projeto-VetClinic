const { Tutor } = require('../models');
/*Implementar outros métodos do controlador conforme necessário.*/ 
exports.getAllTutors = async (req, res) => {
  try {
    const tutors = await Tutor.findAll();
    res.json(tutors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


