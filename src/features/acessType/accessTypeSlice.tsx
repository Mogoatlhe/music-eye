import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AccessColor {
  signIn: string;
  signUp: string;
}

interface AccessType {
  accessType: string;
  diffAccessType: string;
  accessTypeText: string;
  accessColor: AccessColor;
}

export interface AccessTypeState {
  value: AccessType;
}

const initialState: AccessTypeState = {
  value: {
    accessType: 'Sign Up',
    diffAccessType: 'Sign in',
    accessTypeText: 'Already have an account? ',
    accessColor: {
      signIn: '',
      signUp: 'bg-celeste',
    },
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
        state.value.accessColor.signIn = '';
        state.value.accessColor.signUp = 'bg-celeste';
      } else {
        state.value.accessTypeText = "Don't have an account? ";
        state.value.diffAccessType = 'Sign up';
        state.value.accessColor.signUp = '';
        state.value.accessColor.signIn = 'bg-celeste';
      }
    },
  },
});

export const { changeAccessType } = accessTypeSlice.actions;
export default accessTypeSlice.reducer;
