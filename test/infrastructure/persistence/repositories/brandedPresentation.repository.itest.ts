import { BrandedPresentation as BrandedPresentationModel } from '../../../../src/domain/model/brandedPresentation.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { BrandedPresentation as BrandedPresentationRepository } from '../../../../src/infrastructure/persistence/repositories/brandedPresentation.repository';
describe('Class Branded Presentation Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const brandedPresentationRepository = new BrandedPresentationRepository(
      dbPool.get
    );
    const allBrandedPresentations: BrandedPresentationModel[] =
      await brandedPresentationRepository.getAllBrandedPresentations();
    expect(allBrandedPresentations.length).toBeGreaterThan(0);
    if (
      allBrandedPresentations.length >= 0 &&
      allBrandedPresentations[0] &&
      allBrandedPresentations[0].id
    ) {
      const brandedPresentation1: BrandedPresentationModel | undefined =
        await brandedPresentationRepository.getBrandedPresentationById(
          allBrandedPresentations[0].id
        );
      expect(brandedPresentation1).not.toBeUndefined();
      const maxId = allBrandedPresentations.reduce(
        (max, brandedPresentation) =>
          brandedPresentation.id && max && brandedPresentation.id > max
            ? brandedPresentation.id
            : max,
        allBrandedPresentations[0].id
      );
      if (maxId) {
        const brandedPresentation2: BrandedPresentationModel | undefined =
          await brandedPresentationRepository.getBrandedPresentationById(
            maxId + 1
          );
        expect(brandedPresentation2).toBeUndefined();
      }
    }
  }, 20000);
});
