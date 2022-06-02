import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DiscountIcon from "@mui/icons-material/Discount";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Card
      variant="outlined"
			component={Link}
			to={`/product/${product.id}`}
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        transition: (theme) =>
          theme.transitions.create("all", {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),
        ":hover": {
          transform: "scale(1.02)",
          boxShadow: (theme) => theme.shadows[1],
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          fontSize: 12,
          p: "1px 5px",
          background: (theme) => theme.palette.primary.main,
          color: "white",
        }}
      >
        {product.category}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          fontSize: 12,
          p: "1px 5px",
          background: (theme) => theme.palette.warning.main,
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
      >
        <DiscountIcon fontSize="14" />
        {product.rating.count}
      </Box>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={product.image}
        sx={{
          objectFit: "scale-down",
          objectPosition: "center",
          width: "100%",
          p: 3,
          pb: 0,
        }}
      />
      <CardContent
        sx={{
          flex: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          sx={{ fontSize: 18 }}
          component="div"
        >
          {product.title.substring(0, 30)}...
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              gap: 1,
            }}
          >
            <LocalOfferIcon color="action" />${product.price}
          </Typography>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={product.rating.rate}
              precision={0.5}
              sx={{ fontSize: 18 }}
            />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};
