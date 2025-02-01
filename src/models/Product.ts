import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Product extends Model {
  public id!: number;
  public businessId!: number;
  public categoryId!: number;
  public state!: 'active' | 'inactive';
  public name!: string;
  public photoUrl?: string;
  public description?: string;
  public deliveryTime?: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('active', 'inactive'),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    deliveryTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Product',
  }
);

export default Product;
