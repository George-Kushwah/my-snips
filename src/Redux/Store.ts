import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { myReucerdata } from "./Reduer";
import rootSaga from "./Mid-East";

const sagaMiddlware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    testdata: myReucerdata.reducer,
  },
  middleware: (defaultmiddleware) =>
    defaultmiddleware({ serializableCheck: false }).concat(sagaMiddlware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
sagaMiddlware.run(rootSaga);
