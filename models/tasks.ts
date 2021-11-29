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
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    workspaceId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "workspaceId",
      references: {
        key: "id",
        model: "workspaces_model"
      }
    },
    taskStageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "taskStageId",
      references: {
        key: "id",
        model: "taskStages_model"
      }
    },
    attachment: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "attachment"
    },
    taskPriorityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "taskPriorityId",
      references: {
        key: "id",
        model: "taskPriorities_model"
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    }
  };
  const options = {
    tableName: "tasks",
    comment: "",
    indexes: [{
      name: "fk_task_workspace_idx",
      unique: false,
      using: "BTREE",
      fields: ["workspaceId"]
    }, {
      name: "fk_task_taskStage_idx",
      unique: false,
      using: "BTREE",
      fields: ["taskStageId"]
    }, {
      name: "fk_task_taskPriority_idx",
      unique: false,
      using: "BTREE",
      fields: ["taskPriorityId"]
    }]
  };
  const TasksModel = sequelize.define("tasks_model", attributes, options);
  return TasksModel;
}