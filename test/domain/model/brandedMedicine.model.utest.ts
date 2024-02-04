import { BrandedMedicine as BrandedMedicineModel } from '../../../src/domain/model/brandedMedicine.model';
import { Manufacturer as ManufacturerModel } from '../../../src/domain/model/manufacturer.model';
import { Type as TypeModel } from '../../../src/domain/model/type.model';
const manufacturer: ManufacturerModel = new ManufacturerModel(1, 'NAME');
const type: TypeModel = new TypeModel(1, 'NAME');
describe('Class BrandedMedicine Model', () => {
  it('Happy Path 1', async () => {
    const brandedMedicine: BrandedMedicineModel = new BrandedMedicineModel(
      1,
      '  name  ',
      type,
      manufacturer
    );
    expect(brandedMedicine.id).toBe(1);
    expect(brandedMedicine.name).toBe('NAME');
    expect(brandedMedicine.type.json()).toEqual(type.json());
    expect(brandedMedicine.manufacturer.json()).toEqual(manufacturer.json());
    expect(brandedMedicine.json()).toEqual({
      id: 1,
      name: 'NAME',
      type: type.json(),
      manufacturer: manufacturer.json()
    });
  });
  it('Happy Path 2', async () => {
    const brandedMedicine: BrandedMedicineModel = new BrandedMedicineModel(
      undefined,
      '  name  ',
      type,
      manufacturer
    );
    expect(brandedMedicine.id).toBeUndefined();
    expect(brandedMedicine.name).toBe('NAME');
    expect(brandedMedicine.type.json()).toEqual(type.json());
    expect(brandedMedicine.manufacturer.json()).toEqual(manufacturer.json());
    expect(brandedMedicine.json()).toEqual({
      name: 'NAME',
      type: type.json(),
      manufacturer: manufacturer.json()
    });
  });
  it('Error - Empty Name', async () => {
    let errorMsg: string = '';
    try {
      new BrandedMedicineModel(1, '    ', type, manufacturer);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Branded medicine name cannot be empty');
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new BrandedMedicineModel('A', '  name  ', type, manufacturer);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid branded medicine ID | A is not a number');
  });
});
