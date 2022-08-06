import { configureStore } from '@reduxjs/toolkit';
import accessTypeReducer from '../features/acessType/accessTypeSlice';

export const store = configureStore({
  reducer: {
    accessType: accessTypeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
