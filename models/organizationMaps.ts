import { Sequelize, DataTypes } from 'sequelize';
export default function (sequelize: Sequelize) {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "organizationId",
      references: {
        key: "id",
        model: "organizations_model"
      }
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
    tableName: "organizationMaps",
    comment: "",
    indexes: [{
      name: "fk_organisationMaps_maps_idx",
      unique: false,
      using: "BTREE",
      fields: ["mapId"]
    }, {
      name: "fk_organisationMaps_organisation_idx",
      unique: false,
      using: "BTREE",
      fields: ["organizationId"]
    }]
  };
  const OrganizationMapsModel = sequelize.define("organizationMaps_model", attributes, options);
  return OrganizationMapsModel;
}