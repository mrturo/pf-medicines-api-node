import { Component as ComponentModel } from '../../../src/domain/model/component.model';
import { Substance as SubstanceModel } from '../../../src/domain/model/substance.model';
const substance1: SubstanceModel = new SubstanceModel(1, 'NAME');
describe('Class Component Model', () => {
  it('Happy Path 1', async () => {
    const component: ComponentModel = new ComponentModel(1, 1, substance1);
    expect(component.grams).toBe(1);
    expect(component.substance.json()).toEqual(substance1.json());
    expect(component.json()).toEqual({
      id: 1,
      grams: 1,
      substance: substance1.json()
    });
  });
  it('Error - Invalid grams', async () => {
    let errorMsg: string = '';
    try {
      new ComponentModel(1, 0, substance1);
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
      new ComponentModel('A', 1, substance1);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('Invalid component ID | A is not a number');
  });
});
