import { Generic as GenericError } from '../../domain/error/generic.error';
export class Infrastructure extends GenericError {
  constructor(message: string | string[]) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, Infrastructure);
    }
    this.name = 'Infrastructure';
  }
}
