import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { CartDrawer } from "./components/CartDrawer";
import { MainLayout } from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Product } from "./pages/HomePage/Product";
import { Products } from "./pages/HomePage/Products";

const Routers = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<Products />} />
            <Route path="/:id" element={<Products />} />
          </Route>
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
      <CartDrawer />
    </Fragment>
  );
};

export default Routers;
