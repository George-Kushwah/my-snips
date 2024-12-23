import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Apidata {
  err: "";
  load: boolean;
  data: any[];
}
const initialState: Apidata = {
  err: "",
  load: false,
  data: [],
};

export const myReucerdata = createSlice({
  name: "testdata",
  initialState,
  reducers: {
    error: (state, action: PayloadAction<any>) => {
      state.load = false;
      state.err = action.payload;
    },
    load: (state) => {
      state.load = true;
    },
    getData: (state, action: PayloadAction<any>) => {
      state.load = false;
      state.data = action.payload;
    },
  },
});
export const { error, load, getData } = myReucerdata.actions;
export default myReucerdata.reducer;
