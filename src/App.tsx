import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import Errorcatch from "./layout/Error-catch";
import Loader from "./layout/Loader";

const App = () => {
  return (
    <>
      <Loader />
      <Header />
      <Errorcatch>
        <Outlet />
      </Errorcatch>
    </>
  );
};

export default App;
