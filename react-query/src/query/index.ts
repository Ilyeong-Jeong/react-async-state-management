import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getUserData, updateUserData } from '@/api';
import { UserData, UserUpdateData } from '@/interface';

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

export const useUpdateUsers = () => {
  const queryClient = useQueryClient();

  const context = useMutation(
    async (param: UserUpdateData) => {
      await updateUserData(param);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
      },
    },
  );

  return context;
};
