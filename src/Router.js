import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home />} />

        <Route />
      </Routes>
    </HashRouter>
  );
};

export default Router;
