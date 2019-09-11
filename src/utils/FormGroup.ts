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

export type IFormGroupControl<F> = IFormControl<F> & { fields: { [key: string]: IFormControl<any> } };

export class FormGroup<F> {
  public readonly fields: { [key: string]: IFormControl<any> };
  public form: IFormGroupControl<F>;
  private config: IFormGroupConfig;

  constructor(config: IFormGroupConfig) {
    /** normalizing config object */
    this.config = Object.entries(config).reduce((total, [key, value]) => ({
      ...total,
      [key]: { pristine: true, ...value, validation: value.validation ? (val: any) => value.validation(val).filter(Boolean) : (() => []) }
    }), {});
    this.fields = Object.keys(this.config).reduce((total, key) => ({ ...total, [key]: this.getField(key) }), {});
    Object.defineProperty(this, 'form', { get: this.getForm });
  }

  public getField = <T>(field: string): IFormControl<T> => {
    const fieldConfig = this.getFieldConfig<T>(field);
    const control = {
      value: null,
      getValue: (): T => fieldConfig.getter(field),
      getErrorList: () => fieldConfig.validation(fieldConfig.getter(field)),
      isValid: (): boolean => !fieldConfig.validation(fieldConfig.getter(field)).length,
      isInvalid: (): boolean => !!fieldConfig.validation(fieldConfig.getter(field)).length,
      isPristine: () => fieldConfig.pristine,
      isDirty: () => !fieldConfig.pristine,
      setValue: (value: T) => { fieldConfig.pristine = false; fieldConfig.setter(value, field); },
      setPristine: () => { fieldConfig.pristine = true; },
      setDirty: () => { fieldConfig.pristine = false; }
    };
    Object.defineProperty(control, 'value', { get: control.getValue });
    return control;
  }

  public getForm = (): IFormGroupControl<F> => {
    const control = {
      value: null,
      fields: this.fields,
      getValue: () => Object.keys(this.config).reduce<F>((total, key) => ({ ...total, [key]: this.getField(key).getValue() }), {} as F),
      isValid: () => Object.keys(this.config).every(key => this.getField(key).isValid()),
      isInvalid: () => Object.keys(this.config).some(key => this.getField(key).isInvalid()),
      isPristine: () => Object.keys(this.config).every(key => this.getField(key).isPristine()),
      isDirty: () => Object.keys(this.config).some(key => this.getField(key).isDirty()),
      setValue: (value: F) => Object.entries(value).forEach(([key, item]) => this.getField(key).setValue(item)),
      setPristine: () => Object.keys(this.config).forEach(key => this.getField(key).setPristine()),
      setDirty: () => Object.keys(this.config).forEach(key => this.getField(key).setDirty()),
      getErrorList: () => Object.keys(this.config).reduce((total, key) => ([...total, ...this.getField(key).getErrorList()]), [])
    };
    Object.defineProperty(control, 'value', { get: control.getValue });
    return control;
  }

  private getFieldConfig = <T>(field: string): IFormFieldConfig<T> => this.config[field] || { getter: (): T => null, setter: (): T => null };
}

// {
//   /** example */
//   const state = { name: '' };
//   const formGroup = new FormGroup<{ name: string; }>({
//     name: {
//       getter: () => state.name,
//       setter: (value: string) => state.name = value,
//       validation: (value: string) => [!value.length && 'name needs length']
//     }
//   });

//   formGroup.fields.name.setValue('dan');

//   const isValid = formGroup.fields.name.isValid();
//   console.log({ isValid }); // true

//   const isPristine = formGroup.fields.name.isPristine();
//   console.log({ isPristine }); // false

//   const isFormValid = formGroup.form.isValid();
//   console.log({ isFormValid }); // true

//   const name = formGroup.fields.name.value;
//   console.log({ name }); // dan

//   const name2 = formGroup.form.fields.name.value;
//   console.log({ name2 }); // dan

//   const model = formGroup.form.value;
//   console.log({ model }); // { name: 'dan' }
// }
