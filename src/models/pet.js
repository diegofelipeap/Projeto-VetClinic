module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('Pet', {
      name: DataTypes.STRING,
      species: DataTypes.STRING
    });
  
    Pet.associate = (models) => {
      Pet.belongsTo(models.Tutor, { foreignKey: 'tutorId', as: 'tutor' });
    };
  
    return Pet;
  };
  