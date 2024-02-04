import { Converter as ConverterUtil } from '../../../src/domain/util/converter.util';
describe('Class Converter', () => {
  it('Happy Path - toNumber', async () => {
    let errorMessage1 = '';
    expect(ConverterUtil.toNumber(undefined)).toBeUndefined();
    expect(ConverterUtil.toNumber(null)).toBeUndefined();
    expect(ConverterUtil.toNumber(' ')).toBeUndefined();
    expect(ConverterUtil.toNumber('')).toBeUndefined();
    expect(ConverterUtil.toNumber(' 1 ')).toBe(1);
    expect(ConverterUtil.toNumber('1')).toBe(1);
    expect(ConverterUtil.toNumber(1)).toBe(1);
    try {
      ConverterUtil.toNumber('A');
    } catch (error) {
      if (error instanceof Error) {
        errorMessage1 = error.message;
      }
    }
    expect(errorMessage1).toBe('A is not a number');
    try {
      ConverterUtil.toNumber('1.1');
    } catch (error) {
      if (error instanceof Error) {
        errorMessage1 = error.message;
      }
    }
    expect(errorMessage1).toBe('1.1 is not a number');
    try {
      ConverterUtil.toNumber('-1');
    } catch (error) {
      if (error instanceof Error) {
        errorMessage1 = error.message;
      }
    }
    expect(errorMessage1).toBe('-1 is not a number');
  });
});
