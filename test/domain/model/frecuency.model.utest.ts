import { Frecuency as FrecuencyModel } from '../../../src/domain/model/frecuency.model';
describe('Class Frecuency Model', () => {
  it('Happy Path 1', async () => {
    const frecuency: FrecuencyModel = new FrecuencyModel(1, 1, 1);
    expect(frecuency.id).toBe(1);
    expect(frecuency.quantity).toBe(1);
    expect(frecuency.everyHours).toBe(1);
    expect(frecuency.json()).toEqual({ id: 1, quantity: 1, everyHours: 1 });
  });
  it('Happy Path 2', async () => {
    const frecuency: FrecuencyModel = new FrecuencyModel(1, 1);
    expect(frecuency.id).toBe(1);
    expect(frecuency.quantity).toBe(1);
    expect(frecuency.everyHours).toBe(24);
    expect(frecuency.json()).toEqual({ id: 1, quantity: 1, everyHours: 24 });
  });
  it('Error - Invalid quantity', async () => {
    let errorMsg: string = '';
    try {
      new FrecuencyModel(1, 0, 1);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe(
      'Frecuency quantity cannot be less or equal than zero'
    );
  });
  it('Error - Invalid everyHours', async () => {
    let errorMsg: string = '';
    try {
      new FrecuencyModel(1, 1, 0);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Frecuency time cannot be less or equal than zero');
  });
  it('Error - Invalid ID', async () => {
    let errorMsg: string = '';
    try {
      new FrecuencyModel('A', 1);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid frecuency ID | A is not a number');
  });
});
