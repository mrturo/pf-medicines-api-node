import { Component as ComponentModel } from '../../../src/domain/model/component.model';
import { BrandedMedicine as BrandedMedicineModel } from '../../../src/domain/model/brandedMedicine.model';
import { BrandedPresentation as BrandedPresentationModel } from '../../../src/domain/model/brandedPresentation.model';
import { Frecuency as FrecuencyModel } from '../../../src/domain/model/frecuency.model';
import { Manufacturer as ManufacturerModel } from '../../../src/domain/model/manufacturer.model';
import { Prescription as PrescriptionModel } from '../../../src/domain/model/prescription.model';
import { Purchase as PurchaseModel } from '../../../src/domain/model/purchase.model';
import { Stock as StockModel } from '../../../src/domain/model/stock.model';
import { Substance as SubstanceModel } from '../../../src/domain/model/substance.model';
import { Type as TypeModel } from '../../../src/domain/model/type.model';
import { User as UserModel } from '../../../src/domain/model/user.model';
describe('Class User Model', () => {
  it('Happy Path 1', async () => {
    const User: UserModel = new UserModel(1, '  name  ');
    expect(User.id).toBe(1);
    expect(User.name).toBe('NAME');
    expect(User.json()).toEqual({
      id: 1,
      name: 'NAME',
      prescriptions: [],
      purchases: [],
      stocks: []
    });
  });
  it('Happy Path 2', async () => {
    const User: UserModel = new UserModel(undefined, '  name  ', [], [], []);
    expect(User.id).toBeUndefined();
    expect(User.name).toBe('NAME');
    expect(User.json()).toEqual({
      name: 'NAME',
      prescriptions: [],
      purchases: [],
      stocks: []
    });
  });
  it('Happy Path 3', async () => {
    const date: Date = new Date();
    const frecuency: FrecuencyModel = new FrecuencyModel(1, 1);
    const manufacturer: ManufacturerModel = new ManufacturerModel(1, 'NAME');
    const substance: SubstanceModel = new SubstanceModel(1, 'NAME');
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
        [new ComponentModel(1, 1, substance)],
        1
      );
    const prescription: PrescriptionModel = new PrescriptionModel(
      1,
      type,
      frecuency,
      true,
      date
    );
    const purchase: PurchaseModel = new PurchaseModel(
      1,
      brandedPresentation,
      1,
      1,
      1,
      date
    );
    const stock: StockModel = new StockModel(1, brandedPresentation, 1, date);
    const user: UserModel = new UserModel(
      1,
      '  name  ',
      [prescription],
      [purchase],
      [stock]
    );
    expect(user.id).toBe(1);
    expect(user.name).toBe('NAME');
    expect(user.json()).toEqual({
      id: 1,
      name: 'NAME',
      prescriptions: PrescriptionModel.buildJSONArray([prescription]),
      purchases: PurchaseModel.buildJSONArray([purchase]),
      stocks: StockModel.buildJSONArray([stock])
    });
  });
  it('Error - Empty Name', async () => {
    let errorMsg: string = '';
    try {
      new UserModel(1, '    ', [], [], []);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('User name cannot be empty');
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new UserModel('A', '  name  ');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid user ID | A is not a number');
  });
});
