import { Model, BuildOptions } from 'sequelize';
export interface IMapsAttributes {
  id: number,
  venueId?: string,
}
export interface IMapsModel extends IMapsAttributes, Model {}
export type IMapsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IMapsModel;
};