import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Tag extends Model {
  public id!: number;
  public title!: string;
}

Tag.init(
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
    modelName: 'Tag',
  }
);

export default Tag;
