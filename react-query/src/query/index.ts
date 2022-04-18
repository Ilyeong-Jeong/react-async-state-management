import { useQuery, useQueryClient } from 'react-query';
import { getUserData } from '@/api';
import { UserData } from '@/interface';

const initialUserData: UserData = {
  data: [],
  page: 0,
  per_page: 0,
  total: 0,
  total_pages: 0,
  support: {
    url: '',
    text: '',
  }
}

export const useGetUsers = () => {
  const context = useQuery<UserData, Error>(['users'], async () => {
    const result = await getUserData();
    return result.data;
  }, {
    placeholderData: initialUserData,
  });

  return context;
};

export const useUsersContext = () => {
  return useQueryClient().getQueryState<UserData>(['users'])!;
};
