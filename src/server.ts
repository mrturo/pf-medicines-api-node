import App from './application/app';
import { Base as BaseController } from './application/controllers/base.controller';
import { User as UserController } from './application/controllers/user.controller';
export class Server {
  public static init(): App {
    return new App([new BaseController(), new UserController()]);
  }
}
Server.init().listen();
