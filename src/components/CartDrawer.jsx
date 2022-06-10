import { Drawer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDrawer } from "../contexts/Drawer";
import { CartProduct } from "./CartProduct";

export const CartDrawer = () => {
  const { open, closeDrawer } = useDrawer();

  return (
    <Drawer anchor="right" open={true} onClose={closeDrawer}>
      <Box
        sx={{
          width: 300,
          p: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
          }}
        >
          Your Shopping Cart
        </Typography>

        <Box>
          <CartProduct />
        </Box>
      </Box>
    </Drawer>
  );
};
