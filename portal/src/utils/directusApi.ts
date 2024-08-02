import { logError } from './errorLogging';
import { isValidDirectusResponse } from '@/types/directus';

export async function safeDirectusCall<T>(apiCall: () => Promise<T>, fallbackValue: T): Promise<T> {
  try {
    const response = await apiCall();
    if (isValidDirectusResponse<T>(response)) {
      return response.data;
    } else {
      throw new Error('Invalid Directus response');
    }
  } catch (error) {
    logError('Directus API call failed', error);
    return fallbackValue;
  }
}
