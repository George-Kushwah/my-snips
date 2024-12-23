import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as actions from "./Reduer";
import CustomAxios from "../layout/Axios-list";

export default function* Mysaga() {
  try {
    yield takeEvery(actions.load.type, LoadData);
  } catch {
    yield;
  }
}

function* LoadData(): any {
  try {
    let urls: any = CustomAxios("http://localhost:3000/");
    const getData: any = yield call(() =>
      urls.get("https://jsonplaceholder.typicode.com/users")
    );
    yield put(actions.getData(getData.data ?? []));
  } catch (err: any) {
    yield put(actions.error(err.toJSON().message));
  }
}
