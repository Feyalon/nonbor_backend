import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

class Business extends Model {
  public id!: number;
  public title!: string;
  public state!: 'draft' | 'moderated';
  public tin?: string;
  public phone!: string;
  public address!: string;
  public lat?: number;
  public lon?: number;
  public comissionId?: number;
}

Business.init(
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
    state: {
      type: DataTypes.ENUM('draft', 'moderated'),
      allowNull: false,
    },
    tin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    comissionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Business',
  }
);

export default Business;
