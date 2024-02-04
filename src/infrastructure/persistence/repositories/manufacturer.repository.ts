import { Manufacturer as ManufacturerModel } from '../../../domain/model/manufacturer.model';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
type ManufacturerRow = {
  mman_id: number;
  mman_name: string;
};
export class Manufacturer {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allManufacturers: path.join(
        __dirname,
        '../queries/allManufacturers.query.sql'
      ),
      manufacturerById: path.join(
        __dirname,
        '../queries/manufacturerById.query.sql'
      )
    };
    this._queries = {
      allManufacturers: fs
        .readFileSync(queriesPath.allManufacturers, 'utf8')
        .split(';')[0],
      manufacturerById: fs
        .readFileSync(queriesPath.manufacturerById, 'utf8')
        .split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllManufacturers(): Promise<ManufacturerModel[]> {
    const result: ManufacturerModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allManufacturers
    )) as PgQueryResult<ManufacturerRow[]>;
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as ManufacturerRow;
      result.push(new ManufacturerModel(oRow.mman_id, oRow.mman_name));
    }
    return result;
  }
  public async getManufacturerById(
    id: number
  ): Promise<ManufacturerModel | undefined> {
    const dbResponse = (await this.pgPool.query(
      this._queries.manufacturerById,
      [id]
    )) as PgQueryResult<ManufacturerRow[]>;
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as ManufacturerRow;
      return new ManufacturerModel(oRow.mman_id, oRow.mman_name);
    }
    return undefined;
  }
}
