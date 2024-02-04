import { Domain as DomainError } from '../error/domain.error';
import { BrandedPresentation as BrandedPresentationModel } from './brandedPresentation.model';
import { Converter as ConverterUtil } from '../util/converter.util';
export class Purchase {
  public static buildJSONArray(purchases: Purchase[]): {
    id: number | undefined;
    date: Date;
    brandedPresentation: any;
    price: number;
    discount: number;
    shippingCost: number;
  }[] {
    return purchases.map((purchase) => purchase.json());
  }
  private _id!: number | undefined;
  private _date!: Date;
  private _brandedPresentation!: BrandedPresentationModel;
  private _price!: number;
  private _discount!: number;
  private _shippingCost!: number;
  constructor(
    id: number | string | undefined | null,
    brandedPresentation: BrandedPresentationModel,
    price: number,
    discount: number,
    shippingCost: number,
    date: Date | undefined = undefined
  ) {
    this.id = id;
    this.date = date || new Date();
    this.brandedPresentation = brandedPresentation;
    this.price = price;
    this.discount = discount;
    this.shippingCost = shippingCost;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | string | undefined | null) {
    try {
      this._id = ConverterUtil.toNumber(value);
    } catch (error) {
      if (error instanceof Error) {
        throw new DomainError(['Invalid purchase ID', error.message]);
      }
    }
  }
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  public get brandedPresentation(): BrandedPresentationModel {
    return this._brandedPresentation;
  }
  public set brandedPresentation(value: BrandedPresentationModel) {
    this._brandedPresentation = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get discount(): number {
    return this._discount;
  }
  public set discount(value: number) {
    this._discount = value;
  }
  public get shippingCost(): number {
    return this._shippingCost;
  }
  public set shippingCost(value: number) {
    this._shippingCost = value;
  }
  public json(): {
    id: number | undefined;
    date: Date;
    brandedPresentation: any;
    price: number;
    discount: number;
    shippingCost: number;
  } {
    return {
      id: this.id,
      date: this.date,
      brandedPresentation: this.brandedPresentation.json(),
      price: this.price,
      discount: this.discount,
      shippingCost: this.shippingCost
    };
  }
}
