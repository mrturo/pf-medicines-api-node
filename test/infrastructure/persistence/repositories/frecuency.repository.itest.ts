import { Frecuency as FrecuencyModel } from '../../../../src/domain/model/frecuency.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { Frecuency as FrecuencyRepository } from '../../../../src/infrastructure/persistence/repositories/frecuency.repository';
describe('Class Frecuency Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const frecuencyRepository = new FrecuencyRepository(dbPool.get);
    const allFrecuencies: FrecuencyModel[] =
      await frecuencyRepository.getAllFrecuencies();
    expect(allFrecuencies.length).toBeGreaterThan(0);
    if (
      allFrecuencies.length >= 0 &&
      allFrecuencies[0] &&
      allFrecuencies[0].id
    ) {
      const frecuency1: FrecuencyModel | undefined =
        await frecuencyRepository.getFrecuencyById(allFrecuencies[0].id);
      expect(frecuency1).not.toBeUndefined();
      const maxId = allFrecuencies.reduce(
        (max, frecuency) =>
          frecuency.id && max && frecuency.id > max ? frecuency.id : max,
        allFrecuencies[0].id
      );
      if (maxId) {
        const frecuency2: FrecuencyModel | undefined =
          await frecuencyRepository.getFrecuencyById(maxId + 1);
        expect(frecuency2).toBeUndefined();
      }
    }
  });
});
