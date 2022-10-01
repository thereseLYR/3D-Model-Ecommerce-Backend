export default function initOrderModel(sequelize, DataTypes) {
  return sequelize.define(
    "order",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      orderDetails: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      customerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      amount: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING, // submitted, in_progress, completed
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { underscored: true }
  );
}
