import { Model, BuildOptions } from 'sequelize';
export interface IMeetingsAttributes {
  id: number,
  topic?: string,
  zoomStartURL?: string,
  createdBy?: string,
  bookingId?: number,
  startAt?: Date,
  endAt?: Date,
  zoomURL?: string,
  createdAt?: Date,
  updatedAt?: Date,
}
export interface IMeetingsModel extends IMeetingsAttributes, Model {}
export type IMeetingsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IMeetingsModel;
};