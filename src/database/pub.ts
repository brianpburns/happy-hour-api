import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { sequelize } from './db';

type PubType = { id: number; name: string; selectionPhase: boolean };

type PubAttributes = Optional<PubType, 'id' | 'name' | 'selectionPhase'>;

export const Pub: ModelDefined<PubType, PubAttributes> = sequelize.define(
  'pub',
  {
    googlePlaceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    happyHours: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  }
);
