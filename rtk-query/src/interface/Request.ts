export enum RequestState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export interface Request {
  state: RequestState;
  error?: any;
}
