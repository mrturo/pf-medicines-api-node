import { Domain as DomainError } from '../error/domain.error';
import { Converter as ConverterUtil } from '../util/converter.util';
import { BrandedMedicine as BrandedMedicineModel } from './brandedMedicine.model';
import { Component as ComponentModel } from './component.model';
export class BrandedPresentation {
  private _id!: number | undefined;
  private _brandedMedicine!: BrandedMedicineModel;
  private _component!: ComponentModel[];
  private _quantity!: number;
  constructor(
    id: number | string | undefined | null,
    brandedMedicine: BrandedMedicineModel,
    component: ComponentModel[],
    quantity: number
  ) {
    this.id = id;
    this.brandedMedicine = brandedMedicine;
    this.component = component;
    this.quantity = quantity;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | string | undefined | null) {
    try {
      this._id = ConverterUtil.toNumber(value);
    } catch (error) {
      if (error instanceof Error) {
        throw new DomainError([
          'Invalid branded presentation ID',
          error.message
        ]);
      }
    }
  }
  public get brandedMedicine(): BrandedMedicineModel {
    return this._brandedMedicine;
  }
  public set brandedMedicine(value: BrandedMedicineModel) {
    this._brandedMedicine = value;
  }
  public get component(): ComponentModel[] {
    return this._component;
  }
  public set component(value: ComponentModel[]) {
    if (value.length === 0) {
      throw new DomainError('Components list cannot be empty');
    }
    const uniqueIds = new Set<number>();
    const uniqueNames = new Set<string>();
    for (const item of value) {
      const substanceId = item.substance.id;
      const substanceName = item.substance.name;
      if (substanceId) {
        if (uniqueIds.has(substanceId)) {
          throw new DomainError(
            `Substance with ID '${substanceId}' is duplicated`
          );
        }
        uniqueIds.add(substanceId);
      }
      if (uniqueNames.has(substanceName)) {
        throw new DomainError(
          `Substance with name '${substanceName}' is duplicated`
        );
      }
      uniqueNames.add(substanceName);
    }
    this._component = value;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public json(): {
    id: number | undefined;
    brandedMedicine: any;
    quantity: number;
    component: any[];
  } {
    return {
      id: this.id,
      brandedMedicine: this.brandedMedicine.json(),
      quantity: this.quantity,
      component: this.component.map((item) => item.json())
    };
  }
}
