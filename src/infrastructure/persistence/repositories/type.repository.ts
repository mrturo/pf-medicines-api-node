import { Type as TypeModel } from '../../../domain/model/type.model';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
type TypeRow = {
  mtyp_id: number;
  mtyp_name: string;
};
export class Type {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allTypes: path.join(__dirname, '../queries/allTypes.query.sql'),
      typeById: path.join(__dirname, '../queries/typeById.query.sql')
    };
    this._queries = {
      allTypes: fs.readFileSync(queriesPath.allTypes, 'utf8').split(';')[0],
      typeById: fs.readFileSync(queriesPath.typeById, 'utf8').split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllTypes(): Promise<TypeModel[]> {
    const result: TypeModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allTypes
    )) as PgQueryResult<TypeRow[]>;
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as TypeRow;
      result.push(new TypeModel(oRow.mtyp_id, oRow.mtyp_name));
    }
    return result;
  }
  public async getTypeById(id: number): Promise<TypeModel | undefined> {
    const dbResponse = (await this.pgPool.query(this._queries.typeById, [
      id
    ])) as PgQueryResult<TypeRow[]>;
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as TypeRow;
      return new TypeModel(oRow.mtyp_id, oRow.mtyp_name);
    }
    return undefined;
  }
}
