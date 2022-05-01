import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getUserData, updateUserData } from '@/api';
import { UserData, UserUpdateData } from '@/interface';
import { Request, RequestState } from '@/interface/Request';

export const getUsers = createAsyncThunk(
  'app/getUsers',
  async (): Promise<UserData> => {
    const response = await getUserData();
    return response.data;
  },
);

export const updateUsers = createAsyncThunk(
  'app/updateUsers',
  async (user: UserUpdateData): Promise<void> => {
    await updateUserData(user);
  },
);

export interface AppState {
  users: UserData;
  usersRequest: Request;
  updateRequest: Request;
}

const initialState: AppState = {
  users: {
    data: [],
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    support: {
      url: '',
      text: '',
    },
  },
  usersRequest: {
    state: RequestState.INIT,
  },
  updateRequest: {
    state: RequestState.INIT,
  },
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state: AppState) => {
        state.usersRequest.state = RequestState.LOADING;
      })
      .addCase(
        getUsers.fulfilled,
        (state: AppState, action: PayloadAction<UserData>) => {
          state.users = action.payload;
          state.usersRequest.state = RequestState.SUCCESS;
        },
      )
      .addCase(getUsers.rejected, (state: AppState) => {
        state.usersRequest.state = RequestState.ERROR;
      });

    builder
      .addCase(updateUsers.pending, (state: AppState) => {
        state.updateRequest.state = RequestState.LOADING;
      })
      .addCase(updateUsers.fulfilled, (state: AppState) => {
        state.updateRequest.state = RequestState.SUCCESS;
      })
      .addCase(updateUsers.rejected, (state: AppState) => {
        state.updateRequest.state = RequestState.ERROR;
      });
  },
});

const { reducer } = AppSlice;

export default reducer;
