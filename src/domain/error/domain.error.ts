import { Generic as GenericError } from './generic.error';
export class Domain extends GenericError {
  constructor(message: string | string[]) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Domain);
    }
    this.name = 'Domain';
  }
}
