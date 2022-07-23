import {createAction, createReducer} from '@reduxjs/toolkit';
import {User, UserState} from 'utils';

const initialState = {
  loading: true, //  It's 'true' by default because users are being fetched on the app bootstrap
  error: null,
  data: [],
} as UserState;

export const fetchUsersSuccess = createAction<Array<User>>('users/fetch');
export const fetchUsersFailure = createAction<Error | string>('users/fail');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsersSuccess, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchUsersFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default userReducer;
