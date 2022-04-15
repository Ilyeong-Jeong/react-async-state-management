import { useQuery, useQueryClient } from 'react-query';
import { getRestData } from '@/api';

export const useGetRest = () => {
  const context = useQuery<any, Error>('rest', async () => {
    const result = await getRestData();
    return result.data;
  });

  return context;
};

export const useRestContext = () => {
  return useQueryClient().getQueryState<any>('rest')!;
};
