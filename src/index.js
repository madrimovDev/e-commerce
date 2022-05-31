import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import AllProductsProvider from "./contexts/AllProducts";
import CategoriesProvider from "./contexts/Categories";
import ProductsByCategoryProvider from "./contexts/ProductsByCategory";
import Routers from "./Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AllProductsProvider>
        <CategoriesProvider>
          <ProductsByCategoryProvider>
            <Routers />
          </ProductsByCategoryProvider>
        </CategoriesProvider>
      </AllProductsProvider>
      <CssBaseline />
    </BrowserRouter>
  </>
);
