import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { myReucerdata } from "./Reduer";
import rootSaga from "./Mid-East";
import { getApiData } from "./../Render/RTKQuery/Loadapi";

const sagaMiddlware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    [getApiData.reducerPath]: getApiData.reducer,
    testdata: myReucerdata.reducer,
  },
  middleware: (defaultmiddleware) =>
    defaultmiddleware({ serializableCheck: false }).concat(
      getApiData.middleware,
      sagaMiddlware
    ),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
sagaMiddlware.run(rootSaga);
