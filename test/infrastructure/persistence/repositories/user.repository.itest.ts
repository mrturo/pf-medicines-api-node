import { User as UserModel } from '../../../../src/domain/model/user.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { User as UserRepository } from '../../../../src/infrastructure/persistence/repositories/user.repository';
describe('Class User Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const userRepository = new UserRepository(dbPool.get);
    const allUsers: UserModel[] = await userRepository.getAllUsers();
    expect(allUsers.length).toBeGreaterThan(0);
    if (allUsers.length >= 0 && allUsers[0] && allUsers[0].id) {
      const user1: UserModel | undefined = await userRepository.getUserById(
        allUsers[0].id
      );
      expect(user1).not.toBeUndefined();
      const maxId = allUsers.reduce(
        (max, user) => (user.id && max && user.id > max ? user.id : max),
        allUsers[0].id
      );
      if (maxId) {
        const user2: UserModel | undefined = await userRepository.getUserById(
          maxId + 1
        );
        expect(user2).toBeUndefined();
      }
    }
  }, 20000);
});
