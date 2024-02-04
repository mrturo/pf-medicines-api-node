import { Type as TypeModel } from '../../../src/domain/model/type.model';
describe('Class Type Model', () => {
  it('Happy Path 1', async () => {
    const type: TypeModel = new TypeModel(1, '  name  ');
    expect(type.id).toBe(1);
    expect(type.name).toBe('NAME');
    expect(type.json()).toEqual({ id: 1, name: 'NAME' });
  });
  it('Happy Path 2', async () => {
    const type: TypeModel = new TypeModel(undefined, '  name  ');
    expect(type.id).toBeUndefined();
    expect(type.name).toBe('NAME');
    expect(type.json()).toEqual({ name: 'NAME' });
  });
  it('Error - Empty Name', async () => {
    let errorMsg: string = '';
    try {
      new TypeModel(1, '    ');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Type name cannot be empty');
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new TypeModel('A', '  name  ');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid type ID | A is not a number');
  });
});
