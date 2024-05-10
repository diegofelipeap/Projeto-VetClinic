const { Pet } = require('../models/pet')

// Criar um novo pet
exports.createPet = async (req, res) => {
    try {
        const { name, species, tutorId } = req.body;
        const pet = await Pet.create({ name, species, tutorId });
        res.status(201).json(pet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Atualizar um pet existente
exports.updatePet = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, species } = req.body;
        const pet = await Pet.findByPk(id);
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

// Deletar um pet
exports.deletePet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByPk(id);
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
