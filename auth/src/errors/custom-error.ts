export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    // Only because we are extending a build in class and in tsconfig target is set to 'es5'
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serialiseErrors(): { message: string; field?: string }[];
}
