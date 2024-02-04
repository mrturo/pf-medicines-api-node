import { Domain as DomainError } from '../error/domain.error';
import { Converter as ConverterUtil } from '../util/converter.util';
import { Substance as SubstanceModel } from './substance.model';
export class Component {
  private _id!: number | undefined;
  private _grams!: number;
  private _substance!: SubstanceModel;
  constructor(
    id: number | string | undefined | null,
    grams: number,
    substance: SubstanceModel
  ) {
    this.id = id;
    this.grams = grams;
    this.substance = substance;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | string | undefined | null) {
    try {
      this._id = ConverterUtil.toNumber(value);
    } catch (error) {
      if (error instanceof Error) {
        throw new DomainError(['Invalid component ID', error.message]);
      }
    }
  }
  public get grams(): number {
    return this._grams;
  }
  public set grams(value: number) {
    if (value <= 0)
      throw new DomainError(
        'Component by unit grams cannot be less or equal than zero'
      );
    this._grams = value;
  }
  public get substance(): SubstanceModel {
    return this._substance;
  }
  public set substance(value: SubstanceModel) {
    this._substance = value;
  }
  public json(): {
    id: number | undefined;
    grams: number;
    substance: any;
  } {
    return {
      id: this.id,
      grams: this.grams,
      substance: this.substance.json()
    };
  }
}
