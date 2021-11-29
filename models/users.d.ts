import { Model, BuildOptions } from 'sequelize';
export interface IUsersAttributes {
  id: string,
  email: string,
  firstName?: string,
  lastName?: string,
  password?: string,
  membershipTypeId?: number,
  membershipPeriod?: number,
  startDate?: Date,
  endDate?: Date,
  status?: number,
  roleId?: number,
  createdAt?: Date,
  updatedAt?: Date,
  isDeleted?: number,
  isVerified?: number,
  organizationId?: number,
}
export interface IUsersModel extends IUsersAttributes, Model {}
export type IUsersModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUsersModel;
};