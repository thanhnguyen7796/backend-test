import { Model, BuildOptions } from 'sequelize';
export interface IExitsAttributes {
  id: number,
  name?: string,
  x?: number,
  y?: number,
  isActive?: number,
  mapId?: number,
}
export interface IExitsModel extends IExitsAttributes, Model {}
export type IExitsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IExitsModel;
};