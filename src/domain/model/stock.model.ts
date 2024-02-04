import { Domain as DomainError } from '../error/domain.error';
import { BrandedPresentation as BrandedPresentationModel } from './brandedPresentation.model';
import { Converter as ConverterUtil } from '../util/converter.util';
export class Stock {
  public static buildJSONArray(stocks: Stock[]): {
    id: number | undefined;
    brandedPresentation: any;
    quantity: number;
    date: Date;
  }[] {
    return stocks.map((stock) => stock.json());
  }
  private _id!: number | undefined;
  private _brandedPresentation!: BrandedPresentationModel;
  private _quantity!: number;
  private _date!: Date;
  constructor(
    id: number | string | undefined | null,
    brandedPresentation: BrandedPresentationModel,
    quantity: number,
    date: Date | undefined = undefined
  ) {
    this.id = id;
    this.brandedPresentation = brandedPresentation;
    this.quantity = quantity;
    this.date = date || new Date();
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | string | undefined | null) {
    try {
      this._id = ConverterUtil.toNumber(value);
    } catch (error) {
      if (error instanceof Error) {
        throw new DomainError(['Invalid stock ID', error.message]);
      }
    }
  }
  public get brandedPresentation(): BrandedPresentationModel {
    return this._brandedPresentation;
  }
  public set brandedPresentation(value: BrandedPresentationModel) {
    this._brandedPresentation = value;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  public json(): {
    id: number | undefined;
    brandedPresentation: any;
    quantity: number;
    date: Date;
  } {
    return {
      id: this.id,
      brandedPresentation: this.brandedPresentation.json(),
      quantity: this.quantity,
      date: this.date
    };
  }
}
