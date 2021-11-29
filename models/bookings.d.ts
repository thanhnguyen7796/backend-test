import { Model, BuildOptions } from 'sequelize';
export interface IBookingsAttributes {
  id: number,
  startAt?: Date,
  endAt?: Date,
  locationId?: number,
  CreatedBy?: string,
}
export interface IBookingsModel extends IBookingsAttributes, Model {}
export type IBookingsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IBookingsModel;
};