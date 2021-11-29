import { Model, BuildOptions } from 'sequelize';
export interface ILocationTypesAttributes {
  id: number,
  name?: string,
  isActive?: number,
}
export interface ILocationTypesModel extends ILocationTypesAttributes, Model {}
export type ILocationTypesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ILocationTypesModel;
};