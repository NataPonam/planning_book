import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  surname: string;
}

const initialState: UserState = {
  name: '',
  surname: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSurName: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
    deleteName: (state) => {
      state.name = '';
      state.surname = '';
    },
  },
});

export const { setName, setSurName, deleteName } = userSlice.actions;

export default userSlice.reducer;
