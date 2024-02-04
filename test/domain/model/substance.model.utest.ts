import { Substance as SubstanceModel } from '../../../src/domain/model/substance.model';
describe('Class Substance Model', () => {
  it('Happy Path 1', async () => {
    const substance: SubstanceModel = new SubstanceModel(1, '  name  ');
    expect(substance.id).toBe(1);
    expect(substance.name).toBe('NAME');
    expect(substance.json()).toEqual({ id: 1, name: 'NAME' });
  });
  it('Happy Path 2', async () => {
    const substance: SubstanceModel = new SubstanceModel(undefined, '  name  ');
    expect(substance.id).toBeUndefined();
    expect(substance.name).toBe('NAME');
    expect(substance.json()).toEqual({ name: 'NAME' });
  });
  it('Error - Empty Name', async () => {
    let errorMsg: string = '';
    try {
      new SubstanceModel(1, '    ');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Substance name cannot be empty');
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new SubstanceModel('A', '  name  ');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid substance ID | A is not a number');
  });
});
