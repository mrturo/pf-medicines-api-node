import { Domain as DomainError } from '../error/domain.error';
import { Converter as ConverterUtil } from '../util/converter.util';
export class Manufacturer {
  private _id!: number | undefined;
  private _name!: string;
  constructor(id: number | string | undefined | null, name: string) {
    this.id = id;
    this.name = name;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | string | undefined | null) {
    try {
      this._id = ConverterUtil.toNumber(value);
    } catch (error) {
      if (error instanceof Error) {
        throw new DomainError(['Invalid manufacturer ID', error.message]);
      }
    }
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    value = value.trim().toUpperCase();
    if (value.length === 0)
      throw new DomainError('Manufacturer name cannot be empty');
    this._name = value;
  }
  public json(): {
    id: number | undefined;
    name: string;
  } {
    return {
      id: this.id,
      name: this.name
    };
  }
}
