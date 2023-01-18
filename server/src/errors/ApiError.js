class ApiError extends Error {
  constructor(status, errors) {
    super();
    this.status = status;
    this.errors = errors;
  }

  static badRequest(errors) {
    throw new ApiError(400, errors);
  }

  static unauthorized() {
    throw new ApiError(401, "Unauthorized");
  }
}

module.exports = ApiError;
