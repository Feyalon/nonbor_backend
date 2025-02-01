import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class BusinessUser extends Model {
  public id!: number;
  public type!: 'Owner' | 'Manager';
  public userId!: number;
  public businessId!: number;
}

BusinessUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.ENUM('Owner', 'Manager'),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'BusinessUser',
  }
);

export default BusinessUser;
