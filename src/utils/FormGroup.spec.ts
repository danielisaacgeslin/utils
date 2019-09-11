import { expect } from 'chai';

import { FormGroup, IFormGroupConfig } from './FormGroup';

describe('FormGroup', () => {
  let formGroup: FormGroup<{ name: string; age: number; }>;
  let config: IFormGroupConfig;
  let storedName: string;
  let storedAge: number;

  beforeEach(() => {
    storedName = '';
    storedAge = 0;
    config = {
      name: { getter: () => storedName, setter: (value: string) => storedName = value },
      age: {
        getter: () => storedAge,
        setter: (value: number) => storedAge = value,
        validation: (value: number) => [!value && 'invalid value', value > 50 && 'old', value > 100 && 'super old']
      },
    };
  });

  describe('single field', () => {
    beforeEach(() => {
      storedName = '';
      storedAge = 0;
      formGroup = new FormGroup(config);
    });

    it('should get/set value', () => {
      formGroup.getField<string>('name').setValue('dan');
      expect(formGroup.getField<string>('name').getValue()).to.equal('dan');
      expect(formGroup.getField<string>('name').value).to.equal('dan');
    });

    it('should validate', () => {
      formGroup.getField<number>('age').setValue(400);
      expect(formGroup.getField<number>('age').isInvalid()).to.equal(true);
      expect(formGroup.getField<number>('age').isValid()).to.equal(false);
      expect(formGroup.getField<number>('age').getErrorList()).to.deep.equal(['old', 'super old']);
      formGroup.getField<number>('age').setValue(null);
      expect(formGroup.getField<number>('age').getErrorList()).to.deep.equal(['invalid value']);
    });

    it('should get/set pristine/dirty', () => {
      expect(formGroup.getField<string>('name').isDirty()).to.equal(false);
      expect(formGroup.getField<string>('name').isPristine()).to.equal(true);
      formGroup.getField<string>('name').setValue('dan');
      expect(formGroup.getField<string>('name').isDirty()).to.equal(true);
      expect(formGroup.getField<string>('name').isPristine()).to.equal(false);
      formGroup.getField<string>('name').setPristine();
      expect(formGroup.getField<string>('name').isDirty()).to.equal(false);
      expect(formGroup.getField<string>('name').isPristine()).to.equal(true);
      formGroup.getField<string>('name').setDirty();
      expect(formGroup.getField<string>('name').isDirty()).to.equal(true);
      expect(formGroup.getField<string>('name').isPristine()).to.equal(false);
    });

    it('should return a fallback when field doesn\'t exist', () => {
      expect(formGroup.getField('invalid').getValue()).to.be.satisfy(v => !v);
      expect(formGroup.getField('invalid').setValue('')).to.be.satisfy(v => !v);
    });

    it('should access fields from the fields object', () => {
      expect(formGroup.fields.name.getValue).to.satisfy(v => typeof v === 'function');
    });
  });

  describe('whole form', () => {
    beforeEach(() => {
      storedName = '';
      storedAge = 0;
      formGroup = new FormGroup(config);
    });

    it('should access whole form object from the form key', () => {
      expect(formGroup.form.getValue).to.satisfy(v => typeof v === 'function');
    });

    it('should get/set value', () => {
      formGroup.getForm().setValue({ name: 'dan', age: 20 });
      expect(formGroup.getForm().getValue()).to.deep.equal({ name: 'dan', age: 20 });
      expect(formGroup.form.value).to.deep.equal({ name: 'dan', age: 20 });
    });

    it('should validate', () => {
      formGroup.getField<number>('age').setValue(400);
      expect(formGroup.getForm().isInvalid()).to.equal(true);
      expect(formGroup.getForm().isValid()).to.equal(false);
      expect(formGroup.getForm().getErrorList()).to.deep.equal(['old', 'super old']);
      formGroup.getField<number>('age').setValue(null);
      expect(formGroup.getForm().getErrorList()).to.deep.equal(['invalid value']);
    });

    it('should get/set pristine/dirty', () => {
      expect(formGroup.getForm().isDirty()).to.equal(false);
      expect(formGroup.getForm().isPristine()).to.equal(true);
      formGroup.getForm().setValue({ name: 'dan', age: 20 });
      expect(formGroup.getForm().isDirty()).to.equal(true);
      expect(formGroup.getForm().isPristine()).to.equal(false);
      formGroup.getForm().setPristine();
      expect(formGroup.getForm().isDirty()).to.equal(false);
      expect(formGroup.getForm().isPristine()).to.equal(true);
      formGroup.getForm().setDirty();
      expect(formGroup.getForm().isDirty()).to.equal(true);
      expect(formGroup.getForm().isPristine()).to.equal(false);
    });

    it('should access fields from the fields object', () => {
      expect(formGroup.fields.name.getValue).to.satisfy(v => typeof v === 'function');
      expect(formGroup.form.fields.name.getValue).to.satisfy(v => typeof v === 'function');
    });

    it('should pass the field name into getters and setters', () => {
      const model = { someKey: '' };
      const genericGetter = (key: string) => model[key];
      const genericSetter = (value: any, key: string) => model[key] = value;
      const newConfig = { someKey: { getter: genericGetter, setter: genericSetter } };
      const formGroup2 = new FormGroup(newConfig);
      formGroup2.fields.someKey.setValue('some value');
      expect(formGroup2.fields.someKey.value).to.equal('some value');
    });
  });
});
