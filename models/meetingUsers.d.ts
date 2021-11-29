import { Model, BuildOptions } from 'sequelize';
export interface IMeetingUsersAttributes {
  id: number,
  userId?: string,
  meetingId?: number,
}
export interface IMeetingUsersModel extends IMeetingUsersAttributes, Model {}
export type IMeetingUsersModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IMeetingUsersModel;
};