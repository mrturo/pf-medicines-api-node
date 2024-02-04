import { Domain as DomainError } from '../error/domain.error';
import { Frecuency as FrecuencyModel } from './frecuency.model';
import { Converter as ConverterUtil } from '../util/converter.util';
import { Type as TypeModel } from './type.model';
export class Prescription {
  public static buildJSONArray(prescriptions: Prescription[]): {
    id: number | undefined;
    type: any;
    frecuency: any;
    isSelfMedicated: boolean;
    date: Date;
  }[] {
    return prescriptions.map((prescription) => prescription.json());
  }
  private _id!: number | undefined;
  private _type!: TypeModel;
  private _frecuency!: FrecuencyModel;
  private _isSelfMedicated!: boolean;
  private _date!: Date;
  constructor(
    id: number | string | undefined | null,
    type: TypeModel,
    frecuency: FrecuencyModel,
    isSelfMedicated: boolean,
    date: Date | undefined = undefined
  ) {
    this.id = id;
    this.type = type;
    this.frecuency = frecuency;
    this.isSelfMedicated = isSelfMedicated;
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
        throw new DomainError(['Invalid prescription ID', error.message]);
      }
    }
  }
  public get type(): TypeModel {
    return this._type;
  }
  public set type(value: TypeModel) {
    this._type = value;
  }
  public get frecuency(): FrecuencyModel {
    return this._frecuency;
  }
  public set frecuency(value: FrecuencyModel) {
    this._frecuency = value;
  }
  public get date(): Date {
    return this._date;
  }
  public set date(value: Date) {
    this._date = value;
  }
  public get isSelfMedicated(): boolean {
    return this._isSelfMedicated;
  }
  public set isSelfMedicated(value: boolean) {
    this._isSelfMedicated = value;
  }
  public json(): {
    id: number | undefined;
    type: any;
    frecuency: any;
    isSelfMedicated: boolean;
    date: Date;
  } {
    return {
      id: this.id,
      type: this.type.json(),
      frecuency: this.frecuency.json(),
      isSelfMedicated: this.isSelfMedicated,
      date: this.date
    };
  }
}
