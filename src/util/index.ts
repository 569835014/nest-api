import { AxiosData } from '../../types';

export function decompression<T>(result: any): T | AxiosData<any> {
  if (result.data) {
    return result.data as T;
  }
  return {
    code: 1,
    message: '错误',
  };
}
