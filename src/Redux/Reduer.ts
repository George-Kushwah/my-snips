import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Apidata {
  err: "";
  load: boolean;
  data: any[];
  dbtestload: boolean;
  dbtestsucc: any[];
}
const initialState: Apidata = {
  err: "",
  load: false,
  data: [],
  dbtestload: false,
  dbtestsucc: [],
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
    dbtestload: (state) => {
      state.dbtestload = true;
      state.dbtestsucc = [];
    },
    dbtestsucc: (state, action: PayloadAction<any>) => {
      state.dbtestload = false;
      state.dbtestsucc = action.payload;
    },
  },
});
export const { error, load, getData, dbtestload, dbtestsucc } =
  myReucerdata.actions;
export default myReucerdata.reducer;
