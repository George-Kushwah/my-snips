import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Apidata {
  err: "";
  load: boolean;
  data: any[];
  dbtestload: boolean;
  dbtestsucc: any[];
  dbinsertDataload: boolean;
  dbinsertDatasucc: any[];
  shareData: any[];
}
const initialState: Apidata = {
  err: "",
  load: false,
  data: [],
  dbtestload: false,
  dbtestsucc: [],
  dbinsertDataload: false,
  dbinsertDatasucc: [],
  shareData: [],
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
    dbinsertload: (state) => {
      state.dbinsertDataload = true;
      state.dbinsertDatasucc = [];
    },
    dbinsertsucc: (state, action: PayloadAction<any>) => {
      state.dbinsertDataload = false;
      state.dbinsertDatasucc = action.payload;
    },
    sharedataload: (state) => {
      console.log("1111");
      state.dbinsertDataload = true;
      state.shareData = [];
    },
    sharedatasucc: (state, action: PayloadAction<any>) => {
      console.log("2222");
      state.dbinsertDataload = false;
      state.shareData = action.payload;
    },
  },
});
export const {
  error,
  load,
  getData,
  dbtestload,
  dbtestsucc,
  dbinsertload,
  dbinsertsucc,
  sharedataload,
  sharedatasucc,
} = myReucerdata.actions;
export default myReucerdata.reducer;
