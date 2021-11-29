import { Model, BuildOptions } from 'sequelize';
export interface ITaskAttachmentsAttributes {
  id: number,
  fileName?: string,
  taskId?: number,
  path?: string,
  createdAt: Date,
  updatedAt: Date,
}
export interface ITaskAttachmentsModel extends ITaskAttachmentsAttributes, Model {}
export type ITaskAttachmentsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ITaskAttachmentsModel;
};