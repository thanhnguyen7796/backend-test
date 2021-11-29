import { Model, BuildOptions } from 'sequelize';
export interface ILocationsAttributes {
  id: number,
  isOnFire?: number,
  isActive?: number,
  createdAt?: Date,
  updatedAt?: Date,
  x?: number,
  y?: number,
  locationZoneId?: number,
  locationTypeId?: number,
  capacity?: number,
}
export interface ILocationsModel extends ILocationsAttributes, Model {}
export type ILocationsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ILocationsModel;
};