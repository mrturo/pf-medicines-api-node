import { BrandedMedicine as BrandedMedicineModel } from '../../../../src/domain/model/brandedMedicine.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { BrandedMedicine as BrandedMedicineRepository } from '../../../../src/infrastructure/persistence/repositories/brandedMedicine.repository';
describe('Class Branded Medicine Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const brandedMedicineRepository = new BrandedMedicineRepository(dbPool.get);
    const allBrandedMedicines: BrandedMedicineModel[] =
      await brandedMedicineRepository.getAllBrandedMedicines();
    expect(allBrandedMedicines.length).toBeGreaterThan(0);
    if (
      allBrandedMedicines.length >= 0 &&
      allBrandedMedicines[0] &&
      allBrandedMedicines[0].id
    ) {
      const brandedMedicine1: BrandedMedicineModel | undefined =
        await brandedMedicineRepository.getBrandedMedicineById(
          allBrandedMedicines[0].id
        );
      expect(brandedMedicine1).not.toBeUndefined();
      const maxId = allBrandedMedicines.reduce(
        (max, brandedMedicine) =>
          brandedMedicine.id && max && brandedMedicine.id > max
            ? brandedMedicine.id
            : max,
        allBrandedMedicines[0].id
      );
      if (maxId) {
        const brandedMedicine2: BrandedMedicineModel | undefined =
          await brandedMedicineRepository.getBrandedMedicineById(maxId + 1);
        expect(brandedMedicine2).toBeUndefined();
      }
    }
  }, 10000);
});
