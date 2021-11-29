import { Model, BuildOptions } from 'sequelize';
export interface IIssueStatusAttributes {
  id: number,
  name?: string,
  isActive?: number,
}
export interface IIssueStatusModel extends IIssueStatusAttributes, Model {}
export type IIssueStatusModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IIssueStatusModel;
};