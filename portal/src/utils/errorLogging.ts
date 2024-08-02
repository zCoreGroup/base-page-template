export function logError(message: string, error: unknown): void {
  console.error(message, error);
  // You can implement more sophisticated error logging here,
  // such as sending errors to a monitoring service
}
