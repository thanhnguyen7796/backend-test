import { Model, BuildOptions } from 'sequelize';
export interface IWorkspacesAttributes {
  id: number,
  userId?: string,
  title?: string,
  subtitle?: string,
  createdAt?: Date,
  updatedAt?: Date,
}
export interface IWorkspacesModel extends IWorkspacesAttributes, Model {}
export type IWorkspacesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IWorkspacesModel;
};