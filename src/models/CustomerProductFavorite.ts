import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class CustomerProductFavorite extends Model {
  public id!: number;
  public customerId!: number;
  public productId!: number;
}

CustomerProductFavorite.init(
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CustomerProductFavorite',
  }
);

export default CustomerProductFavorite;
