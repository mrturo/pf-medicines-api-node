import { Purchase as PurchaseModel } from '../../../../src/domain/model/purchase.model';
import { User as UserModel } from '../../../../src/domain/model/user.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { Purchase as PurchaseRepository } from '../../../../src/infrastructure/persistence/repositories/purchase.repository';
import { User as UserRepository } from '../../../../src/infrastructure/persistence/repositories/user.repository';
describe('Class Purchase Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const purchaseRepository = new PurchaseRepository(dbPool.get);
    const allPurchases: PurchaseModel[] =
      await purchaseRepository.getAllPurchases();
    expect(allPurchases.length).toBeGreaterThan(0);
    if (allPurchases.length >= 0 && allPurchases[0] && allPurchases[0].id) {
      const purchase1: PurchaseModel | undefined =
        await purchaseRepository.getPurchaseById(allPurchases[0].id);
      expect(purchase1).not.toBeUndefined();
      const maxId = allPurchases.reduce(
        (max, purchase) =>
          purchase.id && max && purchase.id > max ? purchase.id : max,
        allPurchases[0].id
      );
      if (maxId) {
        const purchase2: PurchaseModel | undefined =
          await purchaseRepository.getPurchaseById(maxId + 1);
        expect(purchase2).toBeUndefined();
      }
    }
    const userRepository = new UserRepository(dbPool.get);
    const users: UserModel[] = await userRepository.getAllUsers();
    if (users.length > 0 && users[0].id) {
      const user: UserModel | undefined = await userRepository.getUserById(
        users[0].id
      );
      if (user && user.id) {
        const purchases: PurchaseModel[] =
          await purchaseRepository.getPurchaseByUser(user.id);
        expect(purchases.length).toBeGreaterThan(0);
      }
    }
  }, 20000);
});
