module.exports = (sequelize, DataTypes) => {
  const Tutor = sequelize.define('Tutor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Tutor.associate = (models) => {
    Tutor.hasMany(models.Pet, { foreignKey: 'tutorId', as: 'pets' });
  };

  return Tutor;
};
