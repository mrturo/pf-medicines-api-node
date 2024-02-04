import { Manufacturer as ManufacturerModel } from '../../../../src/domain/model/manufacturer.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { Manufacturer as ManufacturerRepository } from '../../../../src/infrastructure/persistence/repositories/manufacturer.repository';
describe('Class Manufacturer Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const manufacturerRepository = new ManufacturerRepository(dbPool.get);
    const allManufacturers: ManufacturerModel[] =
      await manufacturerRepository.getAllManufacturers();
    expect(allManufacturers.length).toBeGreaterThan(0);
    if (
      allManufacturers.length >= 0 &&
      allManufacturers[0] &&
      allManufacturers[0].id
    ) {
      const manufacturer1: ManufacturerModel | undefined =
        await manufacturerRepository.getManufacturerById(
          allManufacturers[0].id
        );
      expect(manufacturer1).not.toBeUndefined();
      const maxId = allManufacturers.reduce(
        (max, manufacturer) =>
          manufacturer.id && max && manufacturer.id > max
            ? manufacturer.id
            : max,
        allManufacturers[0].id
      );
      if (maxId) {
        const manufacturer2: ManufacturerModel | undefined =
          await manufacturerRepository.getManufacturerById(maxId + 1);
        expect(manufacturer2).toBeUndefined();
      }
    }
  });
});
