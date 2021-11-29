import { Model, BuildOptions } from 'sequelize';
export interface IWaterSprinklersAttributes {
  id: number,
  x?: number,
  y?: number,
  isActive?: number,
  isVisible?: number,
  mapId?: number,
}
export interface IWaterSprinklersModel extends IWaterSprinklersAttributes, Model {}
export type IWaterSprinklersModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IWaterSprinklersModel;
};