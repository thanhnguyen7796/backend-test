import { Model, BuildOptions } from 'sequelize';
export interface IApplicationsAttributes {
  id: number,
  name?: string,
  location?: string,
  isActive?: number,
  isOnPremise?: number,
  createdAt?: Date,
  updatedAt?: Date,
  expireAt?: Date,
}
export interface IApplicationsModel extends IApplicationsAttributes, Model {}
export type IApplicationsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IApplicationsModel;
};