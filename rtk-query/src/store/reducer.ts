import appSlice, { AppState } from './appSlice';

export default {
  app: appSlice,
};
  
export interface RootState {
  app: AppState;
};
