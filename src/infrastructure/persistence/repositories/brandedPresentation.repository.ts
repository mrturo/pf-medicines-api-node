import { BrandedPresentation as BrandedPresentationModel } from '../../../domain/model/brandedPresentation.model';
import { Component as ComponentModel } from '../../../domain/model/component.model';
import { BrandedMedicine as BrandedMedicineModel } from '../../../domain/model/brandedMedicine.model';
import { BrandedMedicine as BrandedMedicineRepository } from './brandedMedicine.repository';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
import { Component as ComponentRepository } from './component.repository';
type BrandedPresentationRow = {
  mbpr_id: number;
  mbpr_quantity: number;
  mbme_id: number;
};
export class BrandedPresentation {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allBrandedPresentations: path.join(
        __dirname,
        '../queries/allBrandedPresentations.query.sql'
      ),
      brandedPresentationById: path.join(
        __dirname,
        '../queries/brandedPresentationById.query.sql'
      )
    };
    this._queries = {
      allBrandedPresentations: fs
        .readFileSync(queriesPath.allBrandedPresentations, 'utf8')
        .split(';')[0],
      brandedPresentationById: fs
        .readFileSync(queriesPath.brandedPresentationById, 'utf8')
        .split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllBrandedPresentations(): Promise<
    BrandedPresentationModel[]
  > {
    const result: BrandedPresentationModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allBrandedPresentations
    )) as PgQueryResult<BrandedPresentationRow[]>;
    const brandedMedicineRepository = new BrandedMedicineRepository(
      this.pgPool
    );
    const componentRepository = new ComponentRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as BrandedPresentationRow;
      const brandedMedicine: BrandedMedicineModel | undefined =
        await brandedMedicineRepository.getBrandedMedicineById(oRow.mbme_id);
      const component: ComponentModel[] =
        await componentRepository.getComponentsByBrandedPresentationId(
          oRow.mbpr_id
        );
      if (brandedMedicine) {
        result.push(
          new BrandedPresentationModel(
            oRow.mbpr_id,
            brandedMedicine,
            component,
            oRow.mbpr_quantity
          )
        );
      }
    }
    return result;
  }
  public async getBrandedPresentationById(
    id: number
  ): Promise<BrandedPresentationModel | undefined> {
    const dbResponse = (await this.pgPool.query(
      this._queries.brandedPresentationById,
      [id]
    )) as PgQueryResult<BrandedPresentationRow[]>;
    const brandedMedicineRepository = new BrandedMedicineRepository(
      this.pgPool
    );
    const componentRepository = new ComponentRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as BrandedPresentationRow;
      const brandedMedicine: BrandedMedicineModel | undefined =
        await brandedMedicineRepository.getBrandedMedicineById(oRow.mbme_id);
      const component: ComponentModel[] =
        await componentRepository.getComponentsByBrandedPresentationId(
          oRow.mbpr_id
        );
      if (brandedMedicine) {
        return new BrandedPresentationModel(
          oRow.mbpr_id,
          brandedMedicine,
          component,
          oRow.mbpr_quantity
        );
      }
    }
    return undefined;
  }
}
