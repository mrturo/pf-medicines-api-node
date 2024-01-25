import { Generic as GenericError } from '../../domain/error/generic.error';
export class Application extends GenericError {
  constructor(message: string | string[]) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Application);
    }
    this.name = 'Application';
  }
}
