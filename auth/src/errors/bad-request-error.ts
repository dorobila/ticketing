import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);

    // Only because we are extending a build in class and in tsconfig target is set to 'es5'
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serialiseErrors() {
    return [{ message: this.message }];
  }
}
