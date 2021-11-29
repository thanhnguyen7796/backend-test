import { Model, BuildOptions } from 'sequelize';
export interface IOrganizationsAttributes {
  id: number,
  name: string,
  isActive?: number,
  createdAt?: Date,
  updatedAt?: Date,
  createdBy?: string,
  applicationId?: number,
}
export interface IOrganizationsModel extends IOrganizationsAttributes, Model {}
export type IOrganizationsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IOrganizationsModel;
};