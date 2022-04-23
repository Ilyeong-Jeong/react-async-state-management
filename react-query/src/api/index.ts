import { AxiosPromise } from 'axios';
import { httpClient } from "@/http";
import { UserData, UserUpdateData } from '@/interface';

const baseUrl = import.meta.env.VITE_BASE_URL;

export function getUserData(): AxiosPromise<UserData> {
  return httpClient.get(
    `${baseUrl}/api/users`,
  );
}

// update test api
export function updateUserData(param: UserUpdateData): AxiosPromise<UserUpdateData> {
  return httpClient.put(
    `${baseUrl}/api/users/2`,
    param,
  );
}
