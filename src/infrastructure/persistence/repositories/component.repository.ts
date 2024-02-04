import { Component as ComponentModel } from '../../../domain/model/component.model';
import { Substance as SubstanceRepository } from './substance.repository';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
import { Substance as SubstanceModel } from '../../../domain/model/substance.model';
type ComponentRow = {
  mcomp_id: number;
  mcomp_grams: number;
  msub_id: number;
  mbpr_id: number;
};
export class Component {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allComponents: path.join(__dirname, '../queries/allComponents.query.sql'),
      componentById: path.join(__dirname, '../queries/componentById.query.sql'),
      componentsByBrandedPresentation: path.join(
        __dirname,
        '../queries/componentsByBrandedPresentation.query.sql'
      )
    };
    this._queries = {
      allComponents: fs
        .readFileSync(queriesPath.allComponents, 'utf8')
        .split(';')[0],
      componentById: fs
        .readFileSync(queriesPath.componentById, 'utf8')
        .split(';')[0],
      componentsByBrandedPresentation: fs
        .readFileSync(queriesPath.componentsByBrandedPresentation, 'utf8')
        .split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllComponents(): Promise<ComponentModel[]> {
    const result: ComponentModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allComponents
    )) as PgQueryResult<ComponentRow[]>;
    const substanceRepository = new SubstanceRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as ComponentRow;
      const brandedMedicine: SubstanceModel | undefined =
        await substanceRepository.getSubstanceById(oRow.msub_id);
      if (brandedMedicine) {
        result.push(
          new ComponentModel(oRow.mcomp_id, oRow.mcomp_grams, brandedMedicine)
        );
      }
    }
    return result;
  }
  public async getComponentById(
    id: number
  ): Promise<ComponentModel | undefined> {
    const dbResponse = (await this.pgPool.query(this._queries.componentById, [
      id
    ])) as PgQueryResult<ComponentRow[]>;
    const substanceRepository = new SubstanceRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as ComponentRow;
      const brandedMedicine: SubstanceModel | undefined =
        await substanceRepository.getSubstanceById(oRow.msub_id);
      if (brandedMedicine) {
        return new ComponentModel(
          oRow.mcomp_id,
          oRow.mcomp_grams,
          brandedMedicine
        );
      }
    }
    return undefined;
  }
  public async getComponentsByBrandedPresentationId(
    brandedPresentationId: number
  ): Promise<ComponentModel[]> {
    const result: ComponentModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.componentsByBrandedPresentation,
      [brandedPresentationId]
    )) as PgQueryResult<ComponentRow[]>;
    const substanceRepository = new SubstanceRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as ComponentRow;
      const brandedMedicine: SubstanceModel | undefined =
        await substanceRepository.getSubstanceById(oRow.msub_id);
      if (brandedMedicine) {
        result.push(
          new ComponentModel(oRow.mcomp_id, oRow.mcomp_grams, brandedMedicine)
        );
      }
    }
    return result;
  }
}
