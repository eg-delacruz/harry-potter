import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';
import { RootState } from '../configureStore';

type CounterState = {
  value: number;
};

const initialState: CounterState = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initializeCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
  },
});

//Accessing the state with the useAppSelector (state.[sliceName])
export const selectCounterState = (state: RootState) => state.counter;

export const { increment, initializeCount } = counterSlice.actions;
