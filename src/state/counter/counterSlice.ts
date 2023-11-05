import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // this is not mutating directly. rtk will do that for us in the "background".

    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // this is a thunk. for async actions. we can access to pending, fulfilled, rejected state because of async thunk.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  // we define the name of the async action.
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// we bring this to our store
export default counterSlice.reducer;
