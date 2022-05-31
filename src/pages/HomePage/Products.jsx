import { Grid, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/home/ProductCard";
import { useAllProduct } from "../../contexts/AllProducts";
import { useProductsByCategory } from "../../contexts/ProductsByCategory";

export const Products = () => {
  const { products, getProductsByCategory } = useProductsByCategory();
  const allProduct = useAllProduct();
  const id = useParams().id;

  useEffect(() => {
    if (id === "all") return;
    getProductsByCategory(id);
  }, [id]);

  if (!id) {
    return (
      <div>
        <h1>All Products</h1>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {allProduct.isLoading && (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" width={200} height={200} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" width={200} height={200} />
              </Grid>
            </>
          )}

          {allProduct.products.map((product) => (
            <Grid item xs={12} md={3}>
              <ProductCard key={product.key} product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  return (
    <div>
      <h1>{id.toUpperCase()} Products</h1>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {products.isLoading && (
          <>
            <Grid item xs={12}>
              <Skeleton variant="rectangular" width={"100%"} height={200} />
            </Grid>
          </>
        )}
        {products.products &&
          products.products.map((product) => (
            <Grid item xs={12} md={3}>
              <ProductCard key={product.key} product={product} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
