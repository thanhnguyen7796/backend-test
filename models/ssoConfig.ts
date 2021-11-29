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
    clientSecret: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "clientSecret"
    },
    clientId: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "clientId"
    }
  };
  const options = {
    tableName: "ssoConfig",
    comment: "",
    indexes: []
  };
  const SsoConfigModel = sequelize.define("ssoConfig_model", attributes, options);
  return SsoConfigModel;
}