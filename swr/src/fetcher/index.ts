import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetcher = (url: string) =>
  axios.get(`${baseUrl}/${url}`).then((res) => res.data);
