const express = require('express');
const app = express();
const tutorRoutes = require('./routes/tutorRoutes');
const petRoutes = require('./routes/petRoutes');

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Rotas para os tutores
app.use('/tutors', tutorRoutes);

// Rotas para os pets
app.use('/pets', petRoutes);

// Configura o servidor para ouvir na porta 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
