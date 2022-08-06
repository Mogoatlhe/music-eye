import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AccessTypeState {
  value: string;
}

const initialState: AccessTypeState = {
  value: 'Sign Up',
};

export const accessTypeSlice = createSlice({
  name: 'access type',
  initialState,
  reducers: {
    changeAccessType: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      alert(state.value);
    },
  },
});

export const { changeAccessType } = accessTypeSlice.actions;
export default accessTypeSlice.reducer;
