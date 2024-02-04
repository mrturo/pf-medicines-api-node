import { BrandedMedicine as BrandedMedicineModel } from '../../../src/domain/model/brandedMedicine.model';
import { BrandedPresentation as BrandedPresentationModel } from '../../../src/domain/model/brandedPresentation.model';
import { Manufacturer as ManufacturerModel } from '../../../src/domain/model/manufacturer.model';
import { Substance as SubstanceModel } from '../../../src/domain/model/substance.model';
import { Type as TypeModel } from '../../../src/domain/model/type.model';
import { Component as ComponentModel } from '../../../src/domain/model/component.model';
const manufacturer: ManufacturerModel = new ManufacturerModel(1, 'NAME');
const substance1: SubstanceModel = new SubstanceModel(1, 'NAME');
const substance2: SubstanceModel = new SubstanceModel(undefined, 'NAME');
const type: TypeModel = new TypeModel(1, 'NAME');
const brandedMedicine: BrandedMedicineModel = new BrandedMedicineModel(
  1,
  'NAME',
  type,
  manufacturer
);
describe('Class BrandedPresentation Model', () => {
  it('Happy Path 1', async () => {
    const brandedPresentation: BrandedPresentationModel =
      new BrandedPresentationModel(
        1,
        brandedMedicine,
        [new ComponentModel(1, 1, substance1)],
        1
      );
    expect(brandedPresentation.id).toBe(1);
    expect(brandedPresentation.brandedMedicine.json()).toEqual(
      brandedMedicine.json()
    );
    expect(brandedPresentation.component.map((item) => item.json())).toEqual([
      new ComponentModel(1, 1, substance1).json()
    ]);
    expect(brandedPresentation.quantity).toBe(1);
    expect(brandedPresentation.json()).toEqual({
      id: 1,
      brandedMedicine: brandedMedicine.json(),
      quantity: 1,
      component: [new ComponentModel(1, 1, substance1).json()]
    });
  });
  it('Happy Path 2', async () => {
    const brandedPresentation: BrandedPresentationModel =
      new BrandedPresentationModel(
        undefined,
        brandedMedicine,
        [new ComponentModel(1, 1, substance2)],
        1
      );
    expect(brandedPresentation.id).toBeUndefined();
    expect(brandedPresentation.brandedMedicine.json()).toEqual(
      brandedMedicine.json()
    );
    expect(brandedPresentation.component).toEqual([
      new ComponentModel(1, 1, substance2)
    ]);
    expect(brandedPresentation.quantity).toBe(1);
    expect(brandedPresentation.json()).toEqual({
      brandedMedicine: brandedMedicine.json(),
      quantity: 1,
      component: [new ComponentModel(1, 1, substance2).json()]
    });
  });
  it('Error - Empty components list', async () => {
    let errorMsg: string = '';
    try {
      new BrandedPresentationModel(1, brandedMedicine, [], 1);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Components list cannot be empty');
  });
  it('Error - Duplicated substance IDs', async () => {
    let errorMsg: string = '';
    try {
      new BrandedPresentationModel(
        1,
        brandedMedicine,
        [
          new ComponentModel(1, 1, new SubstanceModel(1, 'NAME1')),
          new ComponentModel(1, 1, new SubstanceModel(1, 'NAME2')),
          new ComponentModel(1, 1, new SubstanceModel(undefined, 'NAME3'))
        ],
        1
      );
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe("Substance with ID '1' is duplicated");
  });
  it('Error - Duplicated substance names', async () => {
    let errorMsg: string = '';
    try {
      new BrandedPresentationModel(
        1,
        brandedMedicine,
        [
          new ComponentModel(1, 1, new SubstanceModel('1', 'NAME1')),
          new ComponentModel(1, 1, new SubstanceModel('2', 'NAME1'))
        ],
        1
      );
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe("Substance with name 'NAME1' is duplicated");
  });
  it('Error - Grams must be greater than zero', async () => {
    let errorMsg: string = '';
    try {
      new BrandedPresentationModel(
        1,
        brandedMedicine,
        [new ComponentModel(1, 0, new SubstanceModel('1', 'NAME1'))],
        1
      );
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe(
      'Component by unit grams cannot be less or equal than zero'
    );
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new BrandedPresentationModel(
        'A',
        brandedMedicine,
        [new ComponentModel(1, 1, substance1)],
        1
      );
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe(
      'Invalid branded presentation ID | A is not a number'
    );
  });
});
