module.exports = (sequelize, DataTypes) => {
    const Tutor = sequelize.define('Tutor', {
      name: DataTypes.STRING,
      email: DataTypes.STRING
    });
  
    Tutor.associate = (models) => {
      Tutor.hasMany(models.Pet, { foreignKey: 'tutorId', as: 'pets' });
    };
  
    return Tutor;
  };
  