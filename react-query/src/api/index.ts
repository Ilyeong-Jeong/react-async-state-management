import { AxiosPromise } from 'axios';
import { httpClient } from "@/http";
import { UserData, UserUpdateData } from '@/interface';

export function getUserData(): AxiosPromise<UserData> {
  return httpClient.get(
    `${import.meta.env.VITE_BASE_URL}/api/users`,
  );
}

// update test api
export function updateUserData(param: UserUpdateData): AxiosPromise<UserUpdateData> {
  return httpClient.put(
    `${import.meta.env.VITE_BASE_URL}/api/users/2`,
    param,
  );
}
