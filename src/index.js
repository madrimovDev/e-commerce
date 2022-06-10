import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import AllProductsProvider from "./contexts/AllProducts";
import CartProvider from "./contexts/Cart";
import CategoriesProvider from "./contexts/Categories";
import DrawerProvider from "./contexts/Drawer";
import ProductProvider from "./contexts/Product";
import ProductsByCategoryProvider from "./contexts/ProductsByCategory";
import Routers from "./Routers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AllProductsProvider>
        <CategoriesProvider>
          <ProductsByCategoryProvider>
            <ProductProvider>
              <CartProvider>
                <DrawerProvider>
                  <Routers />
                </DrawerProvider>
              </CartProvider>
            </ProductProvider>
          </ProductsByCategoryProvider>
        </CategoriesProvider>
      </AllProductsProvider>
      <CssBaseline />
    </BrowserRouter>
  </>
);
