const express = require('express');
const app = express();
const tutorRoutes = require('./routes/tutorRoutes');
const petRoutes = require('./routes/petRoutes');

app.use(express.json());
app.use('/tutors', tutorRoutes);
app.use('/pets', petRoutes);

module.exports = app;
