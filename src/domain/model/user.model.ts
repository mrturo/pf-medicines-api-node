import { Domain as DomainError } from '../error/domain.error';
import { Prescription as PrescriptionModel } from './prescription.model';
import { Purchase as PurchaseModel } from './purchase.model';
import { Stock as StockModel } from './stock.model';
import { Converter as ConverterUtil } from '../util/converter.util';
export class User {
  private _id!: number | undefined;
  private _name!: string;
  private _prescriptions!: PrescriptionModel[];
  private _purchases!: PurchaseModel[];
  private _stocks!: StockModel[];
  constructor(
    id: number | string | undefined | null,
    name: string,
    prescriptions: PrescriptionModel[] = [],
    purchases: PurchaseModel[] = [],
    stocks: StockModel[] = []
  ) {
    this.id = id;
    this.name = name;
    this.prescriptions = prescriptions;
    this.purchases = purchases;
    this.stocks = stocks;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | string | undefined | null) {
    try {
      this._id = ConverterUtil.toNumber(value);
    } catch (error) {
      if (error instanceof Error) {
        throw new DomainError(['Invalid user ID', error.message]);
      }
    }
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    value = value.trim().toUpperCase();
    if (value.length === 0) throw new DomainError('User name cannot be empty');
    this._name = value;
  }
  public get prescriptions(): PrescriptionModel[] {
    return this._prescriptions;
  }
  public set prescriptions(value: PrescriptionModel[]) {
    this._prescriptions = value;
  }
  public get purchases(): PurchaseModel[] {
    return this._purchases;
  }
  public set purchases(value: PurchaseModel[]) {
    this._purchases = value;
  }
  public get stocks(): StockModel[] {
    return this._stocks;
  }
  public set stocks(value: StockModel[]) {
    this._stocks = value;
  }
  public json(): {
    id: number | undefined;
    name: string;
    prescriptions: any[];
    purchases: any[];
    stocks: any[];
  } {
    return {
      id: this.id,
      name: this.name,
      prescriptions: PrescriptionModel.buildJSONArray(this.prescriptions),
      purchases: PurchaseModel.buildJSONArray(this.purchases),
      stocks: StockModel.buildJSONArray(this.stocks)
    };
  }
}
