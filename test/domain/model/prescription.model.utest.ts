import { Frecuency as FrecuencyModel } from '../../../src/domain/model/frecuency.model';
import { Prescription as PrescriptionModel } from '../../../src/domain/model/prescription.model';
import { Type as TypeModel } from '../../../src/domain/model/type.model';
const type: TypeModel = new TypeModel(1, 'NAME');
const frecuency: FrecuencyModel = new FrecuencyModel(1, 1);
const date: Date = new Date();
describe('Class Prescription Model', () => {
  it('Happy Path 1', async () => {
    const prescription: PrescriptionModel = new PrescriptionModel(
      1,
      type,
      frecuency,
      true,
      date
    );
    expect(prescription.id).toBe(1);
    expect(prescription.type).toBe(type);
    expect(prescription.frecuency).toBe(frecuency);
    expect(prescription.isSelfMedicated).toBeTruthy();
    expect(prescription.date).toBe(date);
    expect(prescription.json()).toEqual({
      id: 1,
      type: type.json(),
      frecuency: frecuency.json(),
      isSelfMedicated: true,
      date: date
    });
  });
  it('Happy Path 2', async () => {
    const prescription: PrescriptionModel = new PrescriptionModel(
      undefined,
      type,
      frecuency,
      true
    );
    expect(prescription.id).toBeUndefined();
    expect(prescription.type).toBe(type);
    expect(prescription.frecuency).toBe(frecuency);
    expect(prescription.isSelfMedicated).toBeTruthy();
    expect(prescription.date).not.toBeUndefined();
    expect(typeof prescription.date).toBe('object');
  });
  it('Happy Path 3', async () => {
    const prescriptions: PrescriptionModel[] = [
      new PrescriptionModel(1, type, frecuency, true, date)
    ];
    const jsonResult: any[] = PrescriptionModel.buildJSONArray(prescriptions);
    expect(jsonResult.length).toBe(1);
    expect(jsonResult).toEqual([
      {
        id: 1,
        type: type.json(),
        frecuency: frecuency.json(),
        isSelfMedicated: true,
        date: date
      }
    ]);
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new PrescriptionModel('A', type, frecuency, true, date);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid prescription ID | A is not a number');
  });
});
