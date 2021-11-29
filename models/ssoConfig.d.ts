import { Model, BuildOptions } from 'sequelize';
export interface ISsoConfigAttributes {
  id: number,
  clientSecret?: string,
  clientId?: string,
}
export interface ISsoConfigModel extends ISsoConfigAttributes, Model {}
export type ISsoConfigModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ISsoConfigModel;
};