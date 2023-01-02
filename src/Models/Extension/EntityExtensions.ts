//import { IEntity } from '../AnaModels/Abstract/IEntity'
import { Entity } from '../AnaModels/Entity';
declare module '../AnaModels/Entity' {
  export interface Entity<T> {
    isNull(): boolean;
  }
}

Entity.prototype.isNull = (): boolean => {
  return this == null || this == undefined;
};