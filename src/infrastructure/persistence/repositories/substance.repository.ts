import { Substance as SubstanceModel } from '../../../domain/model/substance.model';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
type SubstanceRow = {
  msub_id: number;
  msub_name: string;
};
export class Substance {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allSubstances: path.join(__dirname, '../queries/allSubstances.query.sql'),
      substanceById: path.join(__dirname, '../queries/substanceById.query.sql')
    };
    this._queries = {
      allSubstances: fs
        .readFileSync(queriesPath.allSubstances, 'utf8')
        .split(';')[0],
      substanceById: fs
        .readFileSync(queriesPath.substanceById, 'utf8')
        .split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllSubstances(): Promise<SubstanceModel[]> {
    const result: SubstanceModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allSubstances
    )) as PgQueryResult<SubstanceRow[]>;
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as SubstanceRow;
      result.push(new SubstanceModel(oRow.msub_id, oRow.msub_name));
    }
    return result;
  }
  public async getSubstanceById(
    id: number
  ): Promise<SubstanceModel | undefined> {
    const dbResponse = (await this.pgPool.query(this._queries.substanceById, [
      id
    ])) as PgQueryResult<SubstanceRow[]>;
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as SubstanceRow;
      return new SubstanceModel(oRow.msub_id, oRow.msub_name);
    }
    return undefined;
  }
}
