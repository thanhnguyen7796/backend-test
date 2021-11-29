import { Model, BuildOptions } from 'sequelize';
export interface IRolesAttributes {
  id: number,
  name: string,
  isActive: number,
}
export interface IRolesModel extends IRolesAttributes, Model {}
export type IRolesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IRolesModel;
};