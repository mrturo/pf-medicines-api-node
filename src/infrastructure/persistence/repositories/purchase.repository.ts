import { Pool as PgPool, QueryResult as PgQueryResult } from 'pg';
import fs from 'fs';
import path from 'path';
import { BrandedPresentation as BrandedPresentationRepository } from './brandedPresentation.repository';
import { Purchase as PurchaseModel } from '../../../domain/model/purchase.model';
import { BrandedPresentation as BrandedPresentationModel } from '../../../domain/model/brandedPresentation.model';
type PurchaseRow = {
  mpur_id: number;
  mpur_date: Date;
  mpur_discount: number;
  mpur_price: number;
  mpur_shipping_cost: number;
  mbpr_id: number;
  user_id: number;
};
export class Purchase {
  private _pgPool!: PgPool;
  private _queries!: any;
  constructor(pgPool: PgPool) {
    this.pgPool = pgPool;
    const queriesPath = {
      allPurchases: path.join(__dirname, '../queries/allPurchases.query.sql'),
      purchaseById: path.join(__dirname, '../queries/purchaseById.query.sql'),
      purchasesByUser: path.join(
        __dirname,
        '../queries/purchasesByUser.query.sql'
      )
    };
    this._queries = {
      allPurchases: fs
        .readFileSync(queriesPath.allPurchases, 'utf8')
        .split(';')[0],
      purchaseById: fs
        .readFileSync(queriesPath.purchaseById, 'utf8')
        .split(';')[0],
      purchasesByUser: fs
        .readFileSync(queriesPath.purchasesByUser, 'utf8')
        .split(';')[0]
    };
  }
  private get pgPool(): PgPool {
    return this._pgPool;
  }
  private set pgPool(value: PgPool) {
    this._pgPool = value;
  }
  public async getAllPurchases(): Promise<PurchaseModel[]> {
    const result: PurchaseModel[] = [];
    const dbResponse = (await this.pgPool.query(
      this._queries.allPurchases
    )) as PgQueryResult<PurchaseRow[]>;
    const brandedPresentationRepository: BrandedPresentationRepository =
      new BrandedPresentationRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as PurchaseRow;
      const brandedPresentation: BrandedPresentationModel | undefined =
        await brandedPresentationRepository.getBrandedPresentationById(
          oRow.mbpr_id
        );
      if (brandedPresentation) {
        result.push(
          new PurchaseModel(
            oRow.mpur_id,
            brandedPresentation,
            oRow.mpur_price,
            oRow.mpur_discount,
            oRow.mpur_shipping_cost,
            oRow.mpur_date
          )
        );
      }
    }
    return result;
  }
  public async getPurchaseById(id: number): Promise<PurchaseModel | undefined> {
    const dbResponse = (await this.pgPool.query(this._queries.purchaseById, [
      id
    ])) as PgQueryResult<PurchaseRow[]>;
    const brandedPresentationRepository: BrandedPresentationRepository =
      new BrandedPresentationRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as PurchaseRow;
      const brandedPresentation: BrandedPresentationModel | undefined =
        await brandedPresentationRepository.getBrandedPresentationById(
          oRow.mbpr_id
        );
      if (brandedPresentation) {
        return new PurchaseModel(
          oRow.mpur_id,
          brandedPresentation,
          oRow.mpur_price,
          oRow.mpur_discount,
          oRow.mpur_shipping_cost,
          oRow.mpur_date
        );
      }
    }
    return undefined;
  }
  public async getPurchaseByUser(userId: number): Promise<PurchaseModel[]> {
    const result: PurchaseModel[] = [];
    const dbResponse = (await this.pgPool.query(this._queries.purchasesByUser, [
      userId
    ])) as PgQueryResult<PurchaseRow[]>;
    const brandedPresentationRepository: BrandedPresentationRepository =
      new BrandedPresentationRepository(this.pgPool);
    for (const row of dbResponse.rows) {
      const oRow = JSON.parse(JSON.stringify(row)) as PurchaseRow;
      const brandedPresentation: BrandedPresentationModel | undefined =
        await brandedPresentationRepository.getBrandedPresentationById(
          oRow.mbpr_id
        );
      if (brandedPresentation) {
        result.push(
          new PurchaseModel(
            oRow.mpur_id,
            brandedPresentation,
            oRow.mpur_price,
            oRow.mpur_discount,
            oRow.mpur_shipping_cost,
            oRow.mpur_date
          )
        );
      }
    }
    return result;
  }
}
