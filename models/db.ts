import configFile from "../config/config.json";
import { Sequelize } from "sequelize";
import Issue from "./issues";
import User from "./users";
import Organizations from "./organizations";
import IssueCategories from "./issueCategories";
const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export const UserModel = User(sequelize);
export const IssueModel = Issue(sequelize);
export const OrganizationsModel = Organizations(sequelize);
export const CategoriesIssueModel = IssueCategories(sequelize);

IssueModel.belongsTo(UserModel, {
  foreignKey: "createdBy",
});
UserModel.hasMany(IssueModel, {
  foreignKey: "createdBy",
});

IssueModel.belongsTo(CategoriesIssueModel, {
  foreignKey: "issueCategoryId",
});
CategoriesIssueModel.hasMany(IssueModel, {
  foreignKey: "issueCategoryId",
});

IssueModel.belongsTo(OrganizationsModel, {
  foreignKey: "organizationId",
});
OrganizationsModel.hasMany(IssueModel, {
  foreignKey: "organizationId",
});

export default sequelize;
