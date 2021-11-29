import { Model, BuildOptions } from 'sequelize';
export interface ILoggingAttributes {
  id: number,
  oldValue?: string,
  newValue?: string,
  tableName?: string,
}
export interface ILoggingModel extends ILoggingAttributes, Model {}
export type ILoggingModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ILoggingModel;
};