import { BrandedMedicine as BrandedMedicineModel } from '../../../src/domain/model/brandedMedicine.model';
import { BrandedPresentation as BrandedPresentationModel } from '../../../src/domain/model/brandedPresentation.model';
import { Manufacturer as ManufacturerModel } from '../../../src/domain/model/manufacturer.model';
import { Stock as StockModel } from '../../../src/domain/model/stock.model';
import { Substance as SubstanceModel } from '../../../src/domain/model/substance.model';
import { Type as TypeModel } from '../../../src/domain/model/type.model';
import { Component as ComponentModel } from '../../../src/domain/model/component.model';
const date: Date = new Date();
const type: TypeModel = new TypeModel(1, 'NAME');
const manufacturer: ManufacturerModel = new ManufacturerModel(1, 'NAME');
const substance: SubstanceModel = new SubstanceModel(1, 'NAME');
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
    [new ComponentModel(1, 1, substance)],
    1
  );
describe('Class Stock Model', () => {
  it('Happy Path 1', async () => {
    const stock: StockModel = new StockModel(1, brandedPresentation, 1, date);
    expect(stock.id).toBe(1);
    expect(stock.brandedPresentation.json()).toEqual(
      brandedPresentation.json()
    );
    expect(stock.quantity).toBe(1);
    expect(stock.date).toBe(date);
    expect(stock.json()).toEqual({
      id: 1,
      brandedPresentation: brandedPresentation.json(),
      quantity: 1,
      date: date
    });
  });
  it('Happy Path 2', async () => {
    const stock: StockModel = new StockModel(undefined, brandedPresentation, 1);
    expect(stock.id).toBeUndefined();
    expect(stock.brandedPresentation.json()).toEqual(
      brandedPresentation.json()
    );
    expect(stock.quantity).toBe(1);
    expect(stock.date).not.toBeUndefined();
    expect(typeof stock.date).toBe('object');
  });
  it('Happy Path 3', async () => {
    const stocks: StockModel[] = [
      new StockModel(1, brandedPresentation, 1, date)
    ];
    const jsonResult: any[] = StockModel.buildJSONArray(stocks);
    expect(jsonResult.length).toBe(1);
    expect(jsonResult).toEqual([
      {
        id: 1,
        brandedPresentation: brandedPresentation.json(),
        quantity: 1,
        date: date
      }
    ]);
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new StockModel('A', brandedPresentation, 1, date);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid stock ID | A is not a number');
  });
});
