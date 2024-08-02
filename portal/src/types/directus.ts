interface DirectusResponse<T> {
  data: T;
  meta?: {
    filter_count?: number;
    total_count?: number;
  };
}

export function isValidDirectusResponse<T>(response: unknown): response is DirectusResponse<T> {
  return (
    typeof response === 'object' &&
    response !== null &&
    'data' in response &&
    Array.isArray((response as DirectusResponse<T>).data)
  );
}
