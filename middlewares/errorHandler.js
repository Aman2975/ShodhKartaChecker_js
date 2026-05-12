const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // operational = known/expected error (404, 401 etc)
  // non-operational = bug/crash — hide details from user
  if (!err.isOperational) {
    console.error("UNEXPECTED ERROR:", err);
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

export default errorHandler;