import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { RootState } from "../configureStore";

///////////Types (start)/////////////
type quizState = {
  page: number;
  correctAnswers: number;
};
///////////Types (end)/////////////

const INITIAL_STATE: quizState = {
  page: 0,
  correctAnswers: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState: INITIAL_STATE,
  reducers: {
    setNextPage: (state, action: PayloadAction) => {
      state.page = state.page + 1;
    },
    addOneCorrectAnswer: (state, action: PayloadAction) => {
      state.correctAnswers = state.correctAnswers + 1;
    },
    setPageTo0: (state) => {
      state.page = 0;
    },
    resetCorrectAnswers: (state) => {
      state.correctAnswers = 0;
    },
  },
});

export const selectQuizState = (state: RootState) => state.quiz;

export const {
  setNextPage,
  addOneCorrectAnswer,
  setPageTo0,
  resetCorrectAnswers,
} = quizSlice.actions;
