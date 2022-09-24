export default function initModelModel(sequelize, DataTypes) {
  return sequelize.define(
    'model',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      modelName: {
        type: DataTypes.STRING,
      },
      modelDescription: {
        type: DataTypes.STRING,
      },
      modelGroup: {
        type: DataTypes.TEXT,
      },
      pricePerUnit: {
        type: DataTypes.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
