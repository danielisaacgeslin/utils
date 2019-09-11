export interface IFormFieldConfig<T> {
    getter: (field?: string) => T;
    setter: (value: T, field?: string) => void;
    validation?: (value: T) => string[];
    pristine?: boolean;
}
export interface IFormGroupConfig {
    [field: string]: IFormFieldConfig<any>;
}
export interface IFormControl<T> {
    value: T;
    getValue: () => T;
    setValue: (value: T) => void;
    isValid: () => boolean;
    isInvalid: () => boolean;
    getErrorList: () => string[];
    setPristine: () => void;
    setDirty: () => void;
    isPristine: () => boolean;
    isDirty: () => boolean;
}
export declare type IFormGroupControl<F> = IFormControl<F> & {
    fields: {
        [key: string]: IFormControl<any>;
    };
};
export declare class FormGroup<F> {
    readonly fields: {
        [key: string]: IFormControl<any>;
    };
    form: IFormGroupControl<F>;
    private config;
    constructor(config: IFormGroupConfig);
    getField: <T>(field: string) => IFormControl<T>;
    getForm: () => IFormGroupControl<F>;
    private getFieldConfig;
}
