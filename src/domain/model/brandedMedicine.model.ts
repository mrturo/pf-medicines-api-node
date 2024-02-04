import { Domain as DomainError } from '../error/domain.error';
import { Converter as ConverterUtil } from '../util/converter.util';
import { Manufacturer as ManufacturerModel } from './manufacturer.model';
import { Type as TypeModel } from './type.model';
export class BrandedMedicine {
  private _id!: number | undefined;
  private _name!: string;
  private _type!: TypeModel;
  private _manufacturer!: ManufacturerModel;
  constructor(
    id: number | string | undefined | null,
    name: string,
    type: TypeModel,
    manufacturer: ManufacturerModel
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.manufacturer = manufacturer;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | string | undefined | null) {
    try {
      this._id = ConverterUtil.toNumber(value);
    } catch (error) {
      if (error instanceof Error) {
        throw new DomainError(['Invalid branded medicine ID', error.message]);
      }
    }
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    value = value.trim().toUpperCase();
    if (value.length === 0)
      throw new DomainError('Branded medicine name cannot be empty');
    this._name = value;
  }
  public get type(): TypeModel {
    return this._type;
  }
  public set type(value: TypeModel) {
    this._type = value;
  }
  public get manufacturer(): ManufacturerModel {
    return this._manufacturer;
  }
  public set manufacturer(value: ManufacturerModel) {
    this._manufacturer = value;
  }
  public json(): {
    id: number | undefined;
    name: string;
    type: any;
    manufacturer: any;
  } {
    return {
      id: this.id,
      name: this.name,
      type: this.type.json(),
      manufacturer: this.manufacturer.json()
    };
  }
}
