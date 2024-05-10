const app = require('./src/app');
const sequelize = require('./src/database');

sequelize.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
});
