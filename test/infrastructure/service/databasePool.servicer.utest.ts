import { DatabasePool as DatabasePoolService } from '../../../src/infrastructure/service/databasePool.service';
describe('Class Database Pool Service - Unit', () => {
  it('Happy Path 1', async () => {
    const dbPool = new DatabasePoolService(
      'host',
      'database',
      { user: 'user', password: 'password' },
      1234,
      { rejectUnauthorized: false }
    );
    expect(dbPool.host).toBe('host');
    expect(dbPool.database).toBe('database');
    expect(dbPool.password).toBe('password');
    expect(dbPool.port).toBe(1234);
    expect(dbPool.ssl).toEqual({ rejectUnauthorized: false });
    expect(dbPool.user).toBe('user');
    try {
      dbPool.get;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  });
  it('Happy Path 2', async () => {
    const dbPool = new DatabasePoolService('host', 'database', {
      user: 'user',
      password: 'password'
    });
    expect(dbPool.host).toBe('host');
    expect(dbPool.database).toBe('database');
    expect(dbPool.password).toBe('password');
    expect(dbPool.port).toBe(5432);
    expect(dbPool.ssl).toBeUndefined();
    expect(dbPool.user).toBe('user');
  });
});
