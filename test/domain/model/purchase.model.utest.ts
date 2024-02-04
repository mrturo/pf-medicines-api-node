import { BrandedMedicine as BrandedMedicineModel } from '../../../src/domain/model/brandedMedicine.model';
import { BrandedPresentation as BrandedPresentationModel } from '../../../src/domain/model/brandedPresentation.model';
import { Manufacturer as ManufacturerModel } from '../../../src/domain/model/manufacturer.model';
import { Substance as SubstanceModel } from '../../../src/domain/model/substance.model';
import { Purchase as PurchaseModel } from '../../../src/domain/model/purchase.model';
import { Type as TypeModel } from '../../../src/domain/model/type.model';
import { Component as ComponentModel } from '../../../src/domain/model/component.model';
const manufacturer: ManufacturerModel = new ManufacturerModel(1, 'NAME');
const substance1: SubstanceModel = new SubstanceModel(1, 'NAME');
const type: TypeModel = new TypeModel(1, 'NAME');
const brandedMedicine: BrandedMedicineModel = new BrandedMedicineModel(
  1,
  'NAME',
  type,
  manufacturer
);
const brandedPresentation: BrandedPresentationModel =
  new BrandedPresentationModel(
    1,
    brandedMedicine,
    [new ComponentModel(1, 1, substance1)],
    1
  );
describe('Class Purchase Model', () => {
  it('Happy Path 1', async () => {
    const date: Date = new Date();
    const purchase: PurchaseModel = new PurchaseModel(
      1,
      brandedPresentation,
      1,
      1,
      1,
      date
    );
    expect(purchase.id).toBe(1);
    expect(purchase.brandedPresentation.json()).toEqual(
      brandedPresentation.json()
    );
    expect(purchase.price).toBe(1);
    expect(purchase.discount).toBe(1);
    expect(purchase.shippingCost).toBe(1);
    expect(purchase.date).toBe(date);
    expect(purchase.json()).toEqual({
      id: 1,
      date: date,
      brandedPresentation: brandedPresentation.json(),
      price: 1,
      discount: 1,
      shippingCost: 1
    });
  });
  it('Happy Path 2', async () => {
    const purchase: PurchaseModel = new PurchaseModel(
      null,
      brandedPresentation,
      1,
      1,
      1
    );
    expect(purchase.id).toBeUndefined();
    expect(purchase.brandedPresentation.json()).toEqual(
      brandedPresentation.json()
    );
    expect(purchase.price).toBe(1);
    expect(purchase.discount).toBe(1);
    expect(purchase.shippingCost).toBe(1);
    expect(purchase.date).not.toBeUndefined();
    expect(typeof purchase.date).toBe('object');
  });
  it('Happy Path 3', async () => {
    const date: Date = new Date();
    const purchases: PurchaseModel[] = [
      new PurchaseModel(1, brandedPresentation, 1, 1, 1, date)
    ];
    const jsonResult: any[] = PurchaseModel.buildJSONArray(purchases);
    expect(jsonResult.length).toBe(1);
    expect(jsonResult[0]).toEqual({
      id: 1,
      date: date,
      brandedPresentation: brandedPresentation.json(),
      price: 1,
      discount: 1,
      shippingCost: 1
    });
  });
  it('Error - Invalid ID', async () => {
    const date: Date = new Date();
    let errorMsg: string = '';
    try {
      new PurchaseModel('A', brandedPresentation, 1, 1, 1, date);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid purchase ID | A is not a number');
  });
});
