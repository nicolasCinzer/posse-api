class BaseError extends Error {
  status = 0

  constructor(name, status, message) {
    super(message)
    this.name = name
    this.status = status
  }
}

class NotFoundError extends BaseError {
  constructor(message = 'Resource not Found!') {
    super('NotFoundError', 404, message)
  }
}
