import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@popperjs/core";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Lifecycle from "./layout/Life-cycle";
import Home from "./layout/Home";
import Drop, { Datas } from "./layout/Drop";
import Hoc from "./layout/Hoc";
import Hooks from "./layout/Hooks";
import Propstypes from "./layout/Props-type";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="Home" element={<Home />} />
      <Route path="life-cycle" element={<Lifecycle />} />
      <Route path="hoc" element={<Hoc />} />
      <Route path="hooks" element={<Hooks />} />
      <Route path="props" element={<Propstypes />} />
      <Route path="User/:idname" loader={Datas} element={<Drop />} />
    </Route>
  )
);

const rootEl = document.getElementById("root") as HTMLElement;
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    </Provider>
  );
}
