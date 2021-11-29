import { Model, BuildOptions } from 'sequelize';
export interface IMembershipTypesAttributes {
  id: number,
  name?: string,
  isActive?: number,
}
export interface IMembershipTypesModel extends IMembershipTypesAttributes, Model {}
export type IMembershipTypesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IMembershipTypesModel;
};