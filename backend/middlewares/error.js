/**
 * Error Handler Class to handel exceptions.
 *
 * @class ErrorHandler
 * @typedef {ErrorHandler} "Type of file"
 * @extends {Error} "Extends the builtin Error class"
 */
class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  /**
   *
   * @param {Object} what error occured
   * @param {Object} The Request Object
   * @param {Object} The Respond object
   * @param {Object} Wht happens next
   *
   */
  export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
  
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered`,
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "JsonWebTokenError") {
      const message = `Json Web Token is invalid, Try again!`;
      err = new ErrorHandler(message, 400);
    }
    if (err.name === "TokenExpiredError") {
      const message = `Json Web Token is expired, Try again!`;
      err = new ErrorHandler(message, 400);
    }
    if (err.name === "CastError") {
      const message = `Invalid ${err.path}`,
        err = new ErrorHandler(message, 400);
    }
  
    /**
     * the function checks if the error err has an error object
     * if it has any error messages than displays it otherwise
     * displays the default error message
     *
     * @type {Error}
     */
  
    const errorMessage = err.errors
      ? Object.values(err.errors)
          .map((error) => error.message)
          .join(" ")
      : err.message;
  
    return res.status(err.statusCode).json({
      success: false,
      // message: err.message,
      message: errorMessage,
    });
  };
  
  export default ErrorHandler;