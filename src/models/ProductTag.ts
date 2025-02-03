import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class ProductTag extends Model {
  public id!: number;
  public tagId!: number;
  public productId!: number;
}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ProductTag',
  }
);

export default ProductTag;
