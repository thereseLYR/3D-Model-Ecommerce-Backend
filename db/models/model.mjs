export default function initModelModel(sequelize, DataTypes) {
  return sequelize.define(
    "model",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      model_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      model_description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
      },
      price_per_unit: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}
