"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FormGroup {
    constructor(config) {
        this.getField = (field) => {
            const fieldConfig = this.getFieldConfig(field);
            const control = {
                value: null,
                getValue: () => fieldConfig.getter(field),
                getErrorList: () => fieldConfig.validation(fieldConfig.getter(field)),
                isValid: () => !fieldConfig.validation(fieldConfig.getter(field)).length,
                isInvalid: () => !!fieldConfig.validation(fieldConfig.getter(field)).length,
                isPristine: () => fieldConfig.pristine,
                isDirty: () => !fieldConfig.pristine,
                setValue: (value) => { fieldConfig.pristine = false; fieldConfig.setter(value, field); },
                setPristine: () => { fieldConfig.pristine = true; },
                setDirty: () => { fieldConfig.pristine = false; }
            };
            Object.defineProperty(control, 'value', { get: control.getValue });
            return control;
        };
        this.getForm = () => {
            const control = {
                value: null,
                fields: this.fields,
                getValue: () => Object.keys(this.config).reduce((total, key) => (Object.assign({}, total, { [key]: this.getField(key).getValue() })), {}),
                isValid: () => Object.keys(this.config).every(key => this.getField(key).isValid()),
                isInvalid: () => Object.keys(this.config).some(key => this.getField(key).isInvalid()),
                isPristine: () => Object.keys(this.config).every(key => this.getField(key).isPristine()),
                isDirty: () => Object.keys(this.config).some(key => this.getField(key).isDirty()),
                setValue: (value) => Object.entries(value).forEach(([key, item]) => this.getField(key).setValue(item)),
                setPristine: () => Object.keys(this.config).forEach(key => this.getField(key).setPristine()),
                setDirty: () => Object.keys(this.config).forEach(key => this.getField(key).setDirty()),
                getErrorList: () => Object.keys(this.config).reduce((total, key) => ([...total, ...this.getField(key).getErrorList()]), [])
            };
            Object.defineProperty(control, 'value', { get: control.getValue });
            return control;
        };
        this.getFieldConfig = (field) => this.config[field] || { getter: () => null, setter: () => null };
        /** normalizing config object */
        this.config = Object.entries(config).reduce((total, [key, value]) => (Object.assign({}, total, { [key]: Object.assign({ pristine: true }, value, { validation: value.validation ? (val) => value.validation(val).filter(Boolean) : (() => []) }) })), {});
        this.fields = Object.keys(this.config).reduce((total, key) => (Object.assign({}, total, { [key]: this.getField(key) })), {});
        Object.defineProperty(this, 'form', { get: this.getForm });
    }
}
exports.FormGroup = FormGroup;
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
//# sourceMappingURL=FormGroup.js.map