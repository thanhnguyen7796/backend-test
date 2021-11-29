import { Model, BuildOptions } from 'sequelize';
export interface ITaskPrioritiesAttributes {
  id: number,
  name?: string,
  isActive?: number,
}
export interface ITaskPrioritiesModel extends ITaskPrioritiesAttributes, Model {}
export type ITaskPrioritiesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ITaskPrioritiesModel;
};