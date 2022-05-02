import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserData } from '@/interface';

const baseURL = import.meta.env.VITE_BASE_URL;

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  tagTypes: ['App'],
  endpoints: (build) => ({
    getUsers: build.query<UserData, void>({
      query: () => `api/users`,
    }),
  }),
});

export const { useGetUsersQuery } = appApi;
