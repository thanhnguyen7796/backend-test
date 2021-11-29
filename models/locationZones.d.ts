import { Model, BuildOptions } from 'sequelize';
export interface ILocationZonesAttributes {
  id: number,
  name?: string,
  isActive?: number,
  mapId?: number,
  x?: string,
  y?: string,
}
export interface ILocationZonesModel extends ILocationZonesAttributes, Model {}
export type ILocationZonesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ILocationZonesModel;
};