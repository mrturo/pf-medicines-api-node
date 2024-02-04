import { Substance as SubstanceModel } from '../../../../src/domain/model/substance.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { Substance as SubstanceRepository } from '../../../../src/infrastructure/persistence/repositories/substance.repository';
describe('Class Substance Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const substanceRepository = new SubstanceRepository(dbPool.get);
    const allSubstances: SubstanceModel[] =
      await substanceRepository.getAllSubstances();
    expect(allSubstances.length).toBeGreaterThan(0);
    if (allSubstances.length >= 0 && allSubstances[0] && allSubstances[0].id) {
      const substance1: SubstanceModel | undefined =
        await substanceRepository.getSubstanceById(allSubstances[0].id);
      expect(substance1).not.toBeUndefined();
      const maxId = allSubstances.reduce(
        (max, substance) =>
          substance.id && max && substance.id > max ? substance.id : max,
        allSubstances[0].id
      );
      if (maxId) {
        const substance2: SubstanceModel | undefined =
          await substanceRepository.getSubstanceById(maxId + 1);
        expect(substance2).toBeUndefined();
      }
    }
  });
});
