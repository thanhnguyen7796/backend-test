import { Model, BuildOptions } from 'sequelize';
export interface IIssuesAttributes {
  id: number,
  subject?: string,
  issueCategoryId?: number,
  message?: string,
  images?: string,
  issueStatusId?: number,
  createdBy?: string,
  organizationId?: number,
  handleBy?: string,
  createdAt?: Date,
  updatedAt?: Date,
}
export interface IIssuesModel extends IIssuesAttributes, Model {}
export type IIssuesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IIssuesModel;
};