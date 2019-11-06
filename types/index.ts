
enum ActiveStatus {
  Active,
  UnActive,
}
enum Sex {
  male,
  female,
}
export enum ResourceType {
  Button,
  Route,
  Link,
}
export interface IEntity {
  id: number;
  createAt: Date;
  updateAt: Date;
  isActive: ActiveStatus;
}
export interface IUser extends IEntity {
  account: string;
  nickName?: string;
  password: string;
  email?: string;
  mobile: string;
  gender: Sex;
  uuid: string;
}
export interface IProgram {
  id: number;
  code: string;
  name: string;
  createAt: Date;
  updateAt: Date;
  isActive: ActiveStatus;
  CName?: string;
  userGroup?: string;
  description?: string;
}
export interface IResource extends IEntity {
  name: string;
  code: string;
  parentId: number;
  level: number;
  type: ResourceType;
  programId: number;
}
export interface AxiosData<T> {
  code: number;
  subcode?: number;
  message: string;
  default?: number;
  data?: T;
}
export type ID = number | string;
export interface IPaging {
  pageSize: number;
  pageNumber: number;
}
export interface IEntityPage<E> {
  pageSize: number;
  pageNumber: number;
  total: number;
  value: E[];
}
export interface IDao<R, D, E> {
  readonly dao: R;
  save: (dto: D) => Promise<E>;
  findById: (id: ID) => Promise<E>;
  findAll: () => Promise<E[]>;
  updateById: (id: ID, dto: D) => Promise<boolean>;
  findPage: (pageing?: IPaging) => Promise<IEntityPage<E>>;
  findOne: (where) => Promise<E>;
}
export interface IService<A> {
  readonly app: A;
}
export type Partial<T> = {
  [P in keyof T]?: T[P];
};
