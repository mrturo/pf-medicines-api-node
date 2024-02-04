import * as express from 'express';
import { Controller as ControllerInterface } from './controller.interface';
import { User as UserRepository } from '../../infrastructure/persistence/repositories/user.repository';
import { DatabasePool as DatabasePoolService } from '../../infrastructure/service/databasePool.service';
import { Configuration as ConfigurationUtil } from '../../domain/util/configuration.util';
export class User implements ControllerInterface {
  private _path!: string;
  private _router!: express.Router;
  constructor() {
    this.path = '/user';
    this.initializeRoutes();
  }
  public async getUser(
    request: express.Request,
    response: express.Response
  ): Promise<express.Response<any, Record<string, any>>> {
    const dataConfiguration = ConfigurationUtil.postgresql().personalFinance;
    const dbPool = new DatabasePoolService(
      dataConfiguration.host,
      dataConfiguration.database,
      { user: dataConfiguration.user, password: dataConfiguration.password },
      dataConfiguration.port,
      { rejectUnauthorized: false }
    );
    const userRepository = new UserRepository(dbPool.get);
    const userId = request.params.userId;
    const json = (await userRepository.getUserById(+userId))?.json();
    return response.send(json);
  }
  public get path(): string {
    return this._path;
  }
  public set path(value: string) {
    this._path = value;
  }
  public get router(): express.Router {
    return this._router;
  }
  public set router(value: express.Router) {
    this._router = value;
  }
  public initializeRoutes(): void {
    this.router = express.Router();
    this.router.get('/:userId', this.getUser);
  }
}
