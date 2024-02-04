import { Stock as StockModel } from '../../../domain/model/stock.model';
import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
import { BrandedPresentation as BrandedPresentationRepository } from './brandedPresentation.repository';
import { BrandedPresentation as BrandedPresentationModel } from '../../../domain/model/brandedPresentation.model';
type StockRow = {
  msto_id: number;
  msto_date: Date;
  msto_quantity: number;
  mbpr_id: number;
  user_id: number;
};
export class Stock {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allStocks: path.join(__dirname, '../queries/allStocks.query.sql'),
      stockById: path.join(__dirname, '../queries/stockById.query.sql'),
      stocksByUser: path.join(__dirname, '../queries/stocksByUser.query.sql')
    };
    this._queries = {
      allStocks: fs.readFileSync(queriesPath.allStocks, 'utf8').split(';')[0],
      stockById: fs.readFileSync(queriesPath.stockById, 'utf8').split(';')[0],
      stocksByUser: fs
        .readFileSync(queriesPath.stocksByUser, 'utf8')
        .split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllStocks(): Promise<StockModel[]> {
    const result: StockModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allStocks
    )) as PgQueryResult<StockRow[]>;
    const brandedPresentationRepository: BrandedPresentationRepository =
      new BrandedPresentationRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as StockRow;
      const brandedPresentation: BrandedPresentationModel | undefined =
        await brandedPresentationRepository.getBrandedPresentationById(
          oRow.mbpr_id
        );
      if (brandedPresentation) {
        result.push(
          new StockModel(
            oRow.msto_id,
            brandedPresentation,
            oRow.msto_quantity,
            oRow.msto_date
          )
        );
      }
    }
    return result;
  }
  public async getStockById(id: number): Promise<StockModel | undefined> {
    const dbResponse = (await this.pgPool.query(this._queries.stockById, [
      id
    ])) as PgQueryResult<StockRow[]>;
    const brandedPresentationRepository: BrandedPresentationRepository =
      new BrandedPresentationRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as StockRow;
      const brandedPresentation: BrandedPresentationModel | undefined =
        await brandedPresentationRepository.getBrandedPresentationById(
          oRow.mbpr_id
        );
      if (brandedPresentation) {
        return new StockModel(
          oRow.msto_id,
          brandedPresentation,
          oRow.msto_quantity,
          oRow.msto_date
        );
      }
    }
    return undefined;
  }
  public async getStockByUser(userId: number): Promise<StockModel[]> {
    const result: StockModel[] = [];
    const dbResponse = (await this.pgPool.query(this._queries.stocksByUser, [
      userId
    ])) as PgQueryResult<StockRow[]>;
    const brandedPresentationRepository: BrandedPresentationRepository =
      new BrandedPresentationRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as StockRow;
      const brandedPresentation: BrandedPresentationModel | undefined =
        await brandedPresentationRepository.getBrandedPresentationById(
          oRow.mbpr_id
        );
      if (brandedPresentation) {
        result.push(
          new StockModel(
            oRow.msto_id,
            brandedPresentation,
            oRow.msto_quantity,
            oRow.msto_date
          )
        );
      }
    }
    return result;
  }
}
