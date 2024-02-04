import { Manufacturer as ManufacturerModel } from '../../../src/domain/model/manufacturer.model';
describe('Class Manufacturer Model', () => {
  it('Happy Path 1', async () => {
    const manufacturer: ManufacturerModel = new ManufacturerModel(
      1,
      '  name  '
    );
    expect(manufacturer.id).toBe(1);
    expect(manufacturer.name).toBe('NAME');
    expect(manufacturer.json()).toEqual({ id: 1, name: 'NAME' });
  });
  it('Happy Path 2', async () => {
    const manufacturer: ManufacturerModel = new ManufacturerModel(
      undefined,
      '  name  '
    );
    expect(manufacturer.id).toBeUndefined();
    expect(manufacturer.name).toBe('NAME');
    expect(manufacturer.json()).toEqual({ name: 'NAME' });
  });
  it('Error - Empty Name', async () => {
    let errorMsg: string = '';
    try {
      new ManufacturerModel(1, '    ');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Manufacturer name cannot be empty');
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new ManufacturerModel('A', '  name  ');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid manufacturer ID | A is not a number');
  });
});
