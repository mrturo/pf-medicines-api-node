import { Component as ComponentModel } from '../../../../src/domain/model/component.model';
import { Configuration as ConfigurationUtil } from '../../../../src/domain/util/configuration.util';
import { DatabasePool as DatabasePoolService } from '../../../../src/infrastructure/service/databasePool.service';
import { Component as ComponentRepository } from '../../../../src/infrastructure/persistence/repositories/component.repository';
describe('Class Component Repository', () => {
  it('Happy Path', async () => {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const componentRepository = new ComponentRepository(dbPool.get);
    const allComponents: ComponentModel[] =
      await componentRepository.getAllComponents();
    expect(allComponents.length).toBeGreaterThan(0);
    if (allComponents.length >= 0 && allComponents[0] && allComponents[0].id) {
      const Component1: ComponentModel | undefined =
        await componentRepository.getComponentById(allComponents[0].id);
      expect(Component1).not.toBeUndefined();
      const maxId = allComponents.reduce(
        (max, Component) =>
          Component.id && max && Component.id > max ? Component.id : max,
        allComponents[0].id
      );
      if (maxId) {
        const Component2: ComponentModel | undefined =
          await componentRepository.getComponentById(maxId + 1);
        expect(Component2).toBeUndefined();
      }
    }
  }, 20000);
});
