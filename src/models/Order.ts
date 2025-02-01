import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Order extends Model {
  public id!: number;
  public customerId!: number;
  public businessId!: number;
  public state!: 'draft' | 'ordered' | 'waiting' | 'delivered';
  public orderSum!: number;
  public commission!: number;
  public discount!: number;
  public total!: number;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('draft', 'ordered', 'waiting', 'delivered'),
      allowNull: false,
    },
    orderSum: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    commission: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'Order',
  }
);

export default Order;
