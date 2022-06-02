import React, { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../contexts/Product";

export const Product = () => {
  const { products, getProduct, removeProduct } = useProduct();
  const { id } = useParams();

  const { data, isError, isLoading } = products;

  console.log(data, isError, isLoading);

  useLayoutEffect(() => {
    getProduct(id);
  }, []);

  return <div>Product</div>;
};
