const exampleData = require('../data/exampleData');

// Listar todos os tutores
exports.getAllTutors = (req, res) => {
  try {
    res.json(exampleData);
  } catch (error) {
    console.error('Erro ao listar tutores:', error);
    res.status(500).json({ message: 'Erro ao listar tutores' });
  }
};

// Criar um novo tutor
exports.createTutor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const tutor = await Tutor.create({ name, email });
    res.status(201).json(tutor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const tutor = await Tutor.findByPk(id);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    await tutor.update({ name, email });
    res.json(tutor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteTutor = async (req, res) => {
  try {
    const { id } = req.params;
    const tutor = await Tutor.findByPk(id);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    await tutor.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addPetToTutor = async (req, res) => {
  try {
    const { tutorId } = req.params;
    const { name, species } = req.body;
    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    const pet = await tutor.createPet({ name, species });
    res.status(201).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.updatePetInfo = async (req, res) => {
  try {
    const { tutorId, petId } = req.params;
    const { name, species } = req.body;
    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    const pet = await tutor.getPets({ where: { id: petId } });
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    await pet.update({ name, species });
    res.json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deletePetFromTutor = async (req, res) => {
  try {
    const { tutorId, petId } = req.params;
    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    const pet = await tutor.getPets({ where: { id: petId } });
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    await pet.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

