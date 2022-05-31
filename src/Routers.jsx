import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const Routers = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default Routers;
