export class NotFoundError extends Error {
  status: number;
  reason: string;

  constructor(message: string, status: number, reason: string) {
    super(message);

    this.status = status;
    this.reason = reason;
  }
}
