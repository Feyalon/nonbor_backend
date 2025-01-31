import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Category extends Model {
  public id!: number;
  public title!: string;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Category',
  }
);

export default Category;