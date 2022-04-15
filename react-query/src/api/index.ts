import { AxiosPromise } from 'axios';
import { httpClient } from "@/http";

export function getRestData(): AxiosPromise<any> {
  return httpClient.get(
    `${import.meta.env.VITE_BASE_URL}/api/users`,
  );
}
