import { Model, BuildOptions } from 'sequelize';
export interface IOrganizationMapsAttributes {
  id: number,
  organizationId?: number,
  mapId?: number,
}
export interface IOrganizationMapsModel extends IOrganizationMapsAttributes, Model {}
export type IOrganizationMapsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IOrganizationMapsModel;
};