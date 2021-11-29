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
    userId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userId",
      references: {
        key: "id",
        model: "users_model"
      }
    },
    meetingId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "meetingId",
      references: {
        key: "id",
        model: "meetings_model"
      }
    }
  };
  const options = {
    tableName: "meetingUsers",
    comment: "",
    indexes: [{
      name: "fk_meetingUser_meeting_idx",
      unique: false,
      using: "BTREE",
      fields: ["meetingId"]
    }, {
      name: "fk_meetingUser_user_idx",
      unique: false,
      using: "BTREE",
      fields: ["userId"]
    }]
  };
  const MeetingUsersModel = sequelize.define("meetingUsers_model", attributes, options);
  return MeetingUsersModel;
}