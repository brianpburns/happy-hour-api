import { DataTypes, ModelDefined } from 'sequelize';
import { sequelize } from './db';

type PubType = {
  googlePlaceId: number;
  name: string;
  logo: string;
  website: string;
  latitude: number;
  longitude: number;
  weekday: string[];
  weekend: string[];
};

export const Pub: ModelDefined<PubType, PubType> = sequelize.define('pubs', {
  googlePlaceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Array of { startTime: number; endTime: number }
  weekday: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
  // Array of { startTime: number; endTime: number }
  weekend: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
});
