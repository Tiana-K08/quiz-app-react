import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    answers: [],
  },
  reducers: {
    saveAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    clearAnswers: (state) => {
      state.answers = [];
    },
  },
});

export const { saveAnswer, clearAnswers } = quizSlice.actions;
export default quizSlice.reducer;
