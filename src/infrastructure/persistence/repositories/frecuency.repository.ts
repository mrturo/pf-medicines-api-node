import { Frecuency as FrecuencyModel } from '../../../domain/model/frecuency.model';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
type FrecuencyRow = {
  mfre_id: number;
  mfre_every_hours: number;
  mfre_quantity: number;
};
export class Frecuency {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allFrecuencies: path.join(
        __dirname,
        '../queries/allFrecuencies.query.sql'
      ),
      frecuencyById: path.join(__dirname, '../queries/frecuencyById.query.sql')
    };
    this._queries = {
      allFrecuencies: fs
        .readFileSync(queriesPath.allFrecuencies, 'utf8')
        .split(';')[0],
      frecuencyById: fs
        .readFileSync(queriesPath.frecuencyById, 'utf8')
        .split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllFrecuencies(): Promise<FrecuencyModel[]> {
    const result: FrecuencyModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allFrecuencies
    )) as PgQueryResult<FrecuencyRow[]>;
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as FrecuencyRow;
      result.push(
        new FrecuencyModel(
          oRow.mfre_id,
          oRow.mfre_quantity,
          oRow.mfre_every_hours
        )
      );
    }
    return result;
  }
  public async getFrecuencyById(
    id: number
  ): Promise<FrecuencyModel | undefined> {
    const dbResponse = (await this.pgPool.query(this._queries.frecuencyById, [
      id
    ])) as PgQueryResult<FrecuencyRow[]>;
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as FrecuencyRow;
      return new FrecuencyModel(
        oRow.mfre_id,
        oRow.mfre_quantity,
        oRow.mfre_every_hours
      );
    }
    return undefined;
  }
}
