import React from "react";
import { useAllProduct } from "../../contexts/AllProducts";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { ProductCard } from "../../components/home/ProductCard";

export const Search = () => {
  const { products } = useAllProduct();
  const { product } = useParams();

  const prods = products.filter((p) =>
    p.title.toLowerCase().includes(product.toLowerCase())
  );

  if (!prods.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Typography color="darkgray">No Result</Typography>
      </Box>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="stretch"
      sx={{
        mt: 5
      }}
    >
      {
        prods.map((p, i) => {
          return (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={p}/>
            </Grid>
          )
        })
      }
    </Grid>
  );
};
