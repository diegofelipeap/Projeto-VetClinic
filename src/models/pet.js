module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Pet.associate = (models) => {
    Pet.belongsTo(models.Tutor, { foreignKey: 'tutorId', as: 'tutor' });
  };

  return Pet;
};
