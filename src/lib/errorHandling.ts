import { RestClient } from '@directus/sdk';

export async function wrapDirectusCall<T>(
  apiCall: () => Promise<T>,
  fallbackData: T,
  client: RestClient<any>
): Promise<T> {
  try {
    return await apiCall();
  } catch (error) {
    console.error('Directus API call failed:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Stack trace:', error.stack);
    }
    // You might want to send this error to a logging service in production
    // For example: await logErrorToService(error);

    // Check if the error is due to network issues
    if (error instanceof TypeError && error.message === 'Network request failed') {
      console.error('Network error: Unable to connect to Directus API');
      // You might want to implement a retry mechanism here
    }

    // Check if the error is due to authentication issues
    if (error instanceof Error && error.message.includes('Authentication')) {
      console.error('Authentication error: Invalid or expired token');
      // You might want to trigger a re-authentication process here
    }

    return fallbackData;
  }
}

export function logErrorDetails(error: unknown): void {
  if (error instanceof Error) {
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Stack trace:', error.stack);
  } else {
    console.error('An unknown error occurred:', error);
  }
}
