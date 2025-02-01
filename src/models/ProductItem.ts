import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class ProductItem extends Model {
  public id!: number;
  public productId!: number;
  public state!: 'active' | 'inactive';
  public oldPrice?: number;
  public price!: number;
  public count!: number;
}

ProductItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('active', 'inactive'),
      allowNull: false,
    },
    oldPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ProductItem',
  }
);

export default ProductItem;
