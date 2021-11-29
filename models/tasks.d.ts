import { Model, BuildOptions } from 'sequelize';
export interface ITasksAttributes {
  id: number,
  name?: string,
  description?: string,
  workspaceId?: number,
  taskStageId?: number,
  attachment?: string,
  taskPriorityId?: number,
  createdAt?: Date,
  updatedAt?: Date,
}
export interface ITasksModel extends ITasksAttributes, Model {}
export type ITasksModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ITasksModel;
};