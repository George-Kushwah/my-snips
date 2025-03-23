import React, { Suspense } from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
// import Errorcatch from "./layout/Error-catch";
import Loader from "./layout/Loader";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./layout/Error-boundry";
const App = () => {
  return (
    <>
      <Loader />
      <Header />
      <Suspense fallback={<>Loading</>}>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </>
  );
};

export default App;
