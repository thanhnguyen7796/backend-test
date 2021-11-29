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
    startAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "startAt"
    },
    endAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "endAt"
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "locationId",
      references: {
        key: "id",
        model: "locations_model"
      }
    },
    CreatedBy: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CreatedBy"
    }
  };
  const options = {
    tableName: "bookings",
    comment: "",
    indexes: [{
      name: "fk_booking_location_idx",
      unique: false,
      using: "BTREE",
      fields: ["locationId"]
    }]
  };
  const BookingsModel = sequelize.define("bookings_model", attributes, options);
  return BookingsModel;
}