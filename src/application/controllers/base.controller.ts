import * as express from 'express';
import humanizeDuration from 'humanize-duration';
import { Controller as ControllerInterface } from './controller.interface';
export class Base implements ControllerInterface {
  private _path!: string;
  private _router!: express.Router;
  constructor() {
    this.path = '/';
    this.initializeRoutes();
  }
  public getHealthCheck(
    request: express.Request,
    response: express.Response
  ): express.Response<any, Record<string, any>> {
    return response.send({
      message: process.env.npm_package_name,
      uptime: humanizeDuration(Math.round(process.uptime() * 1000), {
        language: 'en'
      })
    });
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
    this.router.get('/', this.getHealthCheck);
  }
}
