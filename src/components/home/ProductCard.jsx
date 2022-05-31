import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={product.image}
        sx={{
          objectFit: "scale-down",
          objectPosition: "center",
          width: "100%",
          p: 3,
        }}
      />
      <CardContent sx={{flex: 1}}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title.substring(0, 20)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.substring(0, 40)}...
        </Typography>
      </CardContent>
      <CardActions sx={{flex: 1}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
