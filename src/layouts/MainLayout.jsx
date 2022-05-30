import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useAllProduct } from "../contexts/AllProducts";

export const MainLayout = () => {
  const { isError, isLoading, products } = useAllProduct();

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
