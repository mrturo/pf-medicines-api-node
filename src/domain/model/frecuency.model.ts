import { Domain as DomainError } from '../error/domain.error';
import { Converter as ConverterUtil } from '../util/converter.util';
export class Frecuency {
  private _id!: number | undefined;
  private _quantity!: number;
  private _everyHours!: number;
  constructor(
    id: number | string | undefined | null,
    quantity: number,
    everyHours: number = 24
  ) {
    this.id = id;
    this.quantity = quantity;
    this.everyHours = everyHours;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | string | undefined | null) {
    try {
      this._id = ConverterUtil.toNumber(value);
    } catch (error) {
      if (error instanceof Error) {
        throw new DomainError(['Invalid frecuency ID', error.message]);
      }
    }
  }
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    if (value <= 0)
      throw new DomainError(
        'Frecuency quantity cannot be less or equal than zero'
      );
    this._quantity = value;
  }
  public get everyHours(): number {
    return this._everyHours;
  }
  public set everyHours(value: number) {
    if (value <= 0)
      throw new DomainError('Frecuency time cannot be less or equal than zero');
    this._everyHours = value;
  }
  public json(): {
    id: number | undefined;
    quantity: number;
    everyHours: number;
  } {
    return {
      id: this.id,
      quantity: this.quantity,
      everyHours: this.everyHours
    };
  }
}
