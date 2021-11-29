import { Model, BuildOptions } from 'sequelize';
export interface IIssueCategoriesAttributes {
  id: number,
  name?: string,
  isActive?: number,
}
export interface IIssueCategoriesModel extends IIssueCategoriesAttributes, Model {}
export type IIssueCategoriesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IIssueCategoriesModel;
};