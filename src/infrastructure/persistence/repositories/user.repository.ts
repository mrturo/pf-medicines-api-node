import { User as UserModel } from '../../../domain/model/user.model';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
import { Prescription as PrescriptionRepository } from './prescription.repository';
import { Stock as StockRepository } from './stock.repository';
import { Purchase as PurchaseRepository } from './purchase.repository';
type UserRow = {
  user_id: number;
  user_name: string;
};
export class User {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allUsers: path.join(__dirname, '../queries/allUsers.query.sql'),
      userById: path.join(__dirname, '../queries/userById.query.sql')
    };
    this._queries = {
      allUsers: fs.readFileSync(queriesPath.allUsers, 'utf8').split(';')[0],
      userById: fs.readFileSync(queriesPath.userById, 'utf8').split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllUsers(): Promise<UserModel[]> {
    const result: UserModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allUsers
    )) as PgQueryResult<UserRow[]>;
    const prescriptionRepository = new PrescriptionRepository(this.pgPool);
    const stockRepository = new StockRepository(this.pgPool);
    const purchaseRepository = new PurchaseRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as UserRow;
      const prescriptions = await prescriptionRepository.getPrescriptionsByUser(
        oRow.user_id
      );
      const stocks = await stockRepository.getStockByUser(oRow.user_id);
      const purchases = await purchaseRepository.getPurchaseByUser(
        oRow.user_id
      );
      result.push(
        new UserModel(
          oRow.user_id,
          oRow.user_name,
          prescriptions,
          purchases,
          stocks
        )
      );
    }
    return result;
  }
  public async getUserById(id: number): Promise<UserModel | undefined> {
    const dbResponse = (await this.pgPool.query(this._queries.userById, [
      id
    ])) as PgQueryResult<UserRow[]>;
    const prescriptionRepository = new PrescriptionRepository(this.pgPool);
    const stockRepository = new StockRepository(this.pgPool);
    const purchaseRepository = new PurchaseRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as UserRow;
      const prescriptions = await prescriptionRepository.getPrescriptionsByUser(
        oRow.user_id
      );
      const stocks = await stockRepository.getStockByUser(oRow.user_id);
      const purchases = await purchaseRepository.getPurchaseByUser(
        oRow.user_id
      );
      return new UserModel(
        oRow.user_id,
        oRow.user_name,
        prescriptions,
        purchases,
        stocks
      );
    }
    return undefined;
  }
}
