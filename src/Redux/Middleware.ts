import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as actions from "./Reduer";
import CustomAxios from "../layout/Axios-list";

export default function* Mysaga() {
  try {
    yield takeEvery(actions.load.type, LoadData);
    yield takeEvery(actions.dbtestload.type, MydbloadData);
    yield takeEvery(actions.dbinsertload.type, DBInsertData);
    yield takeEvery(actions.sharedataload.type, Sharedata);
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

function* MydbloadData(): any {
  try {
    let urls: any = CustomAxios("http://localhost:4500/");
    const getData: any = yield call(() => urls.get("myvalue"));
    yield put(actions.dbtestsucc(getData.data ?? []));
  } catch (err: any) {
    yield put(actions.error(err.toJSON().message));
  }
}

function* DBInsertData(data: any): any {
  try {
    // console.log(data);
    let urls: any = CustomAxios("http://localhost:4500/");
    const getData: any = yield call(() => urls.put("saveVal", data?.payload));

    yield put(actions.dbinsertsucc(getData ?? []));
  } catch (err: any) {
    yield put(actions.error(err.toJSON().message));
  }
}

function* Sharedata(data: any): any {
  try {
    console.log("333");
    yield put(actions.sharedatasucc(data?.payload ?? []));
  } catch (err: any) {
    yield put(actions.error(err.toJSON().message));
  }
}
