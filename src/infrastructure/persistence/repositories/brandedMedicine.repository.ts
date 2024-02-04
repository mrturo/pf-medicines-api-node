import { BrandedMedicine as BrandedMedicineModel } from '../../../domain/model/brandedMedicine.model';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
import { Type as TypeRepository } from './type.repository';
import { Type as TypeModel } from '../../../domain/model/type.model';
import { Manufacturer as ManufacturerRepository } from './manufacturer.repository';
import { Manufacturer as ManufacturerModel } from '../../../domain/model/manufacturer.model';
type BrandedMedicineRow = {
  mbme_id: number;
  mbme_name: string;
  mtyp_id: number;
  mman_id: number;
};
export class BrandedMedicine {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allBrandedMedicines: path.join(
        __dirname,
        '../queries/allBrandedMedicines.query.sql'
      ),
      brandedMedicineById: path.join(
        __dirname,
        '../queries/brandedMedicineById.query.sql'
      )
    };
    this._queries = {
      allBrandedMedicines: fs
        .readFileSync(queriesPath.allBrandedMedicines, 'utf8')
        .split(';')[0],
      brandedMedicineById: fs
        .readFileSync(queriesPath.brandedMedicineById, 'utf8')
        .split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllBrandedMedicines(): Promise<BrandedMedicineModel[]> {
    const result: BrandedMedicineModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allBrandedMedicines
    )) as PgQueryResult<BrandedMedicineRow[]>;
    const typeRepository = new TypeRepository(this.pgPool);
    const manufacturerRepository = new ManufacturerRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as BrandedMedicineRow;
      const type: TypeModel | undefined = await typeRepository.getTypeById(
        oRow.mtyp_id
      );
      const manufacturer: ManufacturerModel | undefined =
        await manufacturerRepository.getManufacturerById(oRow.mman_id);
      if (type && manufacturer) {
        result.push(
          new BrandedMedicineModel(
            oRow.mbme_id,
            oRow.mbme_name,
            type,
            manufacturer
          )
        );
      }
    }
    return result;
  }
  public async getBrandedMedicineById(
    id: number
  ): Promise<BrandedMedicineModel | undefined> {
    const dbResponse = (await this.pgPool.query(
      this._queries.brandedMedicineById,
      [id]
    )) as PgQueryResult<BrandedMedicineRow[]>;
    const typeRepository = new TypeRepository(this.pgPool);
    const manufacturerRepository = new ManufacturerRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as BrandedMedicineRow;
      const type: TypeModel | undefined = await typeRepository.getTypeById(
        oRow.mtyp_id
      );
      const manufacturer: ManufacturerModel | undefined =
        await manufacturerRepository.getManufacturerById(oRow.mman_id);
      if (type && manufacturer) {
        return new BrandedMedicineModel(
          oRow.mbme_id,
          oRow.mbme_name,
          type,
          manufacturer
        );
      }
    }
    return undefined;
  }
}
