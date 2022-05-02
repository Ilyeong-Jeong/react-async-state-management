import appSlice, { AppState } from '@/services/appSlice';
import { appApi } from '@/services/api';

export default {
  // app: appSlice,
  [appApi.reducerPath]: appApi.reducer,
};
  
export interface RootState {
  app: AppState;
};
