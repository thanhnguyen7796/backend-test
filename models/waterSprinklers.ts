import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id"
    },
    x: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "x"
    },
    y: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "y"
    },
    isActive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "isActive"
    },
    isVisible: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "isVisible"
    },
    mapId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mapId",
      references: {
        key: "id",
        model: "maps_model"
      }
    }
  };
  const options = {
    tableName: "waterSprinklers",
    comment: "",
    indexes: [{
      name: "fk_organisation_waterPrinkless_idx",
      unique: false,
      using: "BTREE",
      fields: ["mapId"]
    }]
  };
  const WaterSprinklersModel = sequelize.define("waterSprinklers_model", attributes, options);
  return WaterSprinklersModel;
}