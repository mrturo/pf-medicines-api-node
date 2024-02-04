import { Prescription as PrescriptionModel } from '../../../domain/model/prescription.model';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
import { Type as TypeModel } from '../../../domain/model/type.model';
import { Frecuency as FrecuencyModel } from '../../../domain/model/frecuency.model';
import { Type as TypeRepository } from './type.repository';
import { Frecuency as FrecuencyRepository } from './frecuency.repository';
type PrescriptionRow = {
  mpre_id: number;
  mpre_active: boolean;
  mpre_date: Date;
  mpre_is_self_medicated: boolean;
  mtyp_id: number;
  mfre_id: number;
};
export class Prescription {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = path.join(
      __dirname,
      '../queries/prescriptionsByUser.query.sql'
    );
    const queries = fs.readFileSync(queriesPath, 'utf8').split(';');
    this._queries = {
      prescriptionsByUser: queries[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getPrescriptionsByUser(
    userId: number
  ): Promise<PrescriptionModel[]> {
    const result: PrescriptionModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.prescriptionsByUser,
      [userId]
    )) as PgQueryResult<PrescriptionRow[]>;
    const typeRepository = new TypeRepository(this.pgPool);
    const frecuencyRepository = new FrecuencyRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as PrescriptionRow;
      const type: TypeModel | undefined = await typeRepository.getTypeById(
        oRow.mtyp_id
      );
      const frecuency: FrecuencyModel | undefined =
        await frecuencyRepository.getFrecuencyById(oRow.mfre_id);
      if (type && frecuency) {
        result.push(
          new PrescriptionModel(
            oRow.mpre_id,
            type,
            frecuency,
            oRow.mpre_is_self_medicated,
            oRow.mpre_date
          )
        );
      }
    }
    return result;
  }
}
