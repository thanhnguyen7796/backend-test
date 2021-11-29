import { Model, BuildOptions } from 'sequelize';
export interface ITaskStagesAttributes {
  id: number,
  name?: string,
  isActive?: number,
}
export interface ITaskStagesModel extends ITaskStagesAttributes, Model {}
export type ITaskStagesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ITaskStagesModel;
};