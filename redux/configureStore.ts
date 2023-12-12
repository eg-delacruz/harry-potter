import { configureStore } from '@reduxjs/toolkit';

//Slices
import { counterSlice } from './slices/counterSlice';

//We need a "makeStore" to avoid making the state global and instead create a new state in each request (needed for the Next JS app folder architecture)
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
