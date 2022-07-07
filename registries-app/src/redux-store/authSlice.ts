import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../types';
import { RootState } from './store';

export const initialState: AuthState = {
  isAuth: false,
  currentUser: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogIn: (state, payload) => {
      state.currentUser = payload.payload;
      state.isAuth = true;
    },
  },
});

export const { setLogIn } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
