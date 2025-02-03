import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Customer extends Model {
  public id!: number;
  public userId!: number;
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Customer',
  }
);

export default Customer;
