import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
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

import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Datas } from "./layout/Drops1-query";
const Drop = lazy(() => import("./layout/Drop"));
const App = lazy(() => import("./App"));
const Lifecycle = lazy(() => import("./layout/Life-cycle"));
const Home = lazy(() => import("./layout/Home"));
const Hoc = lazy(() => import("./layout/Hoc"));
const Hooks = lazy(() => import("./layout/Hooks"));
const Propstypes = lazy(() => import("./layout/Props-type"));
const Allth = lazy(() => import("./layout/All-the"));
const Allskills = lazy(() => import("./layout/All-skills"));
const UseMemo = lazy(() => import("./layout/Usememo"));
const Part1 = lazy(() => import("./layout/All-Lpart-1"));
const Api = lazy(() => import("./layout/Call-API"));
const queryClient = new QueryClient();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="Home" element={<Home />} />
      <Route path="life-cycle" element={<Lifecycle />} />
      <Route path="hoc" element={<Hoc />} />
      <Route path="hooks" element={<Hooks />} />
      <Route path="props" element={<Propstypes />} />
      <Route path="User/:idname" loader={Datas} element={<Drop />} />
      <Route path="New-tech" element={<Allth />} />
      <Route path="New-skills" element={<Allskills />} />
      <Route path="Memo" element={<UseMemo />} />
      <Route path="Logic-Part-1" element={<Part1 />} />
      <Route path="apicall" element={<Api />} />
    </Route>
  )
);

const rootEl = document.getElementById("root") as HTMLElement;
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
      </QueryClientProvider>
    </Provider>
  );
}
