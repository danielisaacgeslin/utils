import { GeneralModel } from '../models';

export const listToMap = <T>(list: T[], map: { [key: string]: T } = {}, indexField = '_id'): GeneralModel.IEntityMap<T> => (
  list.reduce((total: { [key: string]: T }, item: T) => ({ ...total, [item[indexField]]: item }), map)
);
