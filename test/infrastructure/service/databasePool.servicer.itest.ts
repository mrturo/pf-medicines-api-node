import { Pool as PgPool } from 'pg';
import { Configuration as ConfigurationUtil } from '../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../src/infrastructure/service/databasePool.service';
describe('Class Database Pool Service - Integration', () => {
  it('Happy Path', async () => {
    let errorMsg = '';
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    let pgPool: PgPool;
    try {
      pgPool = dbPool.get;
      const res = await pgPool.query('SELECT version()');
      console.log('Connected to PostgreSQL:', res.rows[0].version);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg = error.message;
      }
    }
    expect(errorMsg).toBe('');
  });
});
