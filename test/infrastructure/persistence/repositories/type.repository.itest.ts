import { Type as TypeModel } from '../../../../src/domain/model/type.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { Type as TypeRepository } from '../../../../src/infrastructure/persistence/repositories/type.repository';
describe('Class Type Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const typeRepository = new TypeRepository(dbPool.get);
    const allTypes: TypeModel[] = await typeRepository.getAllTypes();
    expect(allTypes.length).toBeGreaterThan(0);
    if (allTypes.length >= 0 && allTypes[0] && allTypes[0].id) {
      const type1: TypeModel | undefined = await typeRepository.getTypeById(
        allTypes[0].id
      );
      expect(type1).not.toBeUndefined();
      const maxId = allTypes.reduce(
        (max, type) => (type.id && max && type.id > max ? type.id : max),
        allTypes[0].id
      );
      if (maxId) {
        const type2: TypeModel | undefined = await typeRepository.getTypeById(
          maxId + 1
        );
        expect(type2).toBeUndefined();
      }
    }
  });
});
