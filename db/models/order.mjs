export default function initOrderModel(sequelize, DataTypes) {
  return sequelize.define(
    "order",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      order_details: {
        allowNull: false,
        type: DataTypes.JSON
      },
      customer_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      amount: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING // submitted, in_progress, completed
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    { underscored: true }
  )
}
