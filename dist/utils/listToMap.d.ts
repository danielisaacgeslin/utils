import { GeneralModel } from '../models';
export declare const listToMap: <T>(list: T[], map?: {
    [key: string]: T;
}, indexField?: string) => GeneralModel.IEntityMap<T>;
