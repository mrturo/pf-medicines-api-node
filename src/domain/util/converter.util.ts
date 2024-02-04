export class Converter {
  public static toNumber(
    value: number | string | undefined | null
  ): number | undefined {
    let result: number | undefined = undefined;
    const numericRegex = /^[0-9]+$/;
    if (typeof value === 'number') {
      result = value;
    } else if (value === null || value === undefined || value.trim() === '') {
      result = undefined;
    } else if (numericRegex.test(value.trim().toLowerCase()) === true) {
      result = +value.trim();
    } else {
      throw new Error(`${value} is not a number`);
    }
    return result;
  }
}
