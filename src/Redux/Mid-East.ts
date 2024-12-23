import { all, fork } from "@redux-saga/core/effects";
import Mysaga from "./Middleware";

export default function* rootSaga() {
  yield all([fork(Mysaga)]);
}
