import { createSlice } from "@reduxjs/toolkit";

const initialValue = 0;
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: initialValue },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = initialValue;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
