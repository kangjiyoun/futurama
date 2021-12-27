import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { PROGRAM_API_ENDPOINT } from '../constants';

export const useInfoData = (path: string) => {
  return useSWR(`${PROGRAM_API_ENDPOINT}${path}`, fetcher);
}