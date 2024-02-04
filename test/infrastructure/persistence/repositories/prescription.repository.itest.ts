import { User as UserModel } from '../../../../src/domain/model/user.model';
import { Prescription as PrescriptionModel } from '../../../../src/domain/model/prescription.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { Prescription as PrescriptionRepository } from '../../../../src/infrastructure/persistence/repositories/prescription.repository';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { User as UserRepository } from '../../../../src/infrastructure/persistence/repositories/user.repository';
describe('Class Prescription Repository', () => {
  it('Happy Path 1', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const prescription = new PrescriptionRepository(dbPool.get);
    const userRepository = new UserRepository(dbPool.get);
    const allUsers: UserModel[] = await userRepository.getAllUsers();
    if (allUsers.length > 0 && allUsers[0].id) {
      const result: PrescriptionModel[] =
        await prescription.getPrescriptionsByUser(allUsers[0].id);
      expect(result.length).toBeGreaterThan(0);
    }
  }, 20000);
});
