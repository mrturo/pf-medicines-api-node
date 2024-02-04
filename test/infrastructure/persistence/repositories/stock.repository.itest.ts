import { Stock as StockModel } from '../../../../src/domain/model/stock.model';
import { User as UserModel } from '../../../../src/domain/model/user.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { Stock as StockRepository } from '../../../../src/infrastructure/persistence/repositories/stock.repository';
import { User as UserRepository } from '../../../../src/infrastructure/persistence/repositories/user.repository';
describe('Class Stock Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const stockRepository = new StockRepository(dbPool.get);
    const allStocks: StockModel[] = await stockRepository.getAllStocks();
    expect(allStocks.length).toBeGreaterThan(0);
    if (allStocks.length >= 0 && allStocks[0] && allStocks[0].id) {
      const stock1: StockModel | undefined = await stockRepository.getStockById(
        allStocks[0].id
      );
      expect(stock1).not.toBeUndefined();
      const maxId = allStocks.reduce(
        (max, stock) => (stock.id && max && stock.id > max ? stock.id : max),
        allStocks[0].id
      );
      if (maxId) {
        const stock2: StockModel | undefined =
          await stockRepository.getStockById(maxId + 1);
        expect(stock2).toBeUndefined();
      }
    }
    const userRepository = new UserRepository(dbPool.get);
    const users: UserModel[] = await userRepository.getAllUsers();
    if (users.length > 0 && users[0].id) {
      const user: UserModel | undefined = await userRepository.getUserById(
        users[0].id
      );
      if (user && user.id) {
        const stocks: StockModel[] = await stockRepository.getStockByUser(
          user.id
        );
        expect(stocks.length).toBeGreaterThan(0);
      }
    }
  }, 20000);
});
