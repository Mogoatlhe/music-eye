import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AccessType {
  accessType: string;
  diffAccessType: string;
  accessTypeText: string;
}

export interface AccessTypeState {
  value: AccessType;
}

const initialState: AccessTypeState = {
  value: {
    accessType: 'Sign Up',
    diffAccessType: 'Sign in',
    accessTypeText: 'Already have an account? ',
  },
};

export const accessTypeSlice = createSlice({
  name: 'access type',
  initialState,
  reducers: {
    changeAccessType: (state, action: PayloadAction<string>) => {
      state.value.accessType = action.payload;

      if (action.payload === 'Sign Up') {
        state.value.accessTypeText = 'Already have an account? ';
        state.value.diffAccessType = 'Sign in';
      } else {
        state.value.accessTypeText = "Don't have an account? ";
        state.value.diffAccessType = 'Sign up';
      }
    },
  },
});

export const { changeAccessType } = accessTypeSlice.actions;
export default accessTypeSlice.reducer;
