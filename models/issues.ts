import { Sequelize, DataTypes } from 'sequelize';
import User from './users';

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
    subject: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "subject"
    },
    issueCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "issueCategoryId",
      references: {
        key: "id",
        model: "issueCategories_model"
      }
    },
    message: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "message"
    },
    images: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "images"
    },
    issueStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "issueStatusId",
      references: {
        key: "id",
        model: "issueStatus_model"
      }
    },
    createdBy: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdBy",
      references: {
        key: "id",
        model: "users_model"
      }
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
    handleBy: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "handleBy",
      references: {
        key: "id",
        model: "users_model"
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
    tableName: "issues",
    comment: "",
    indexes: [{
      name: "fk_issuesCreatedBy_user_idx",
      unique: false,
      using: "BTREE",
      fields: ["createdBy"]
    }, {
      name: "fk_issuesHandleBy_user_idx",
      unique: false,
      using: "BTREE",
      fields: ["handleBy"]
    }, {
      name: "fk_issues_organisation_idx",
      unique: false,
      using: "BTREE",
      fields: ["organizationId"]
    }, {
      name: "fk_issues_issueCategory_idx",
      unique: false,
      using: "BTREE",
      fields: ["issueCategoryId"]
    }, {
      name: "fk_issues_issueStatus_idx",
      unique: false,
      using: "BTREE",
      fields: ["issueStatusId"]
    }]
    
  };
  const IssuesModel = sequelize.define("issues_model", attributes, options);

  return IssuesModel;
}