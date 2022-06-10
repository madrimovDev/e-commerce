import { DeleteOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export const CartProduct = () => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      sx={{
        display: "flex",
        gap: 2,
        border: "1px solid",
        borderColor: theme => theme.palette.divider,
        position: "relative",
        overflow: "hidden",
        p: 1
      }}
    >
      <Box
        component="img"
        src=""
        sx={{
          width: 70,
          height: 70,
          background: (theme) => theme.palette.primary.light,
        }}
      />

      <Box>
        <Typography>{"Product Name".substring(0, 20)}...</Typography>
        <Typography
          sx={{
            fontSize: 20,
            color: (theme) => theme.palette.success.dark,
          }}
        >
          $200
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: hover ? 0 : "-20%",
          top: 0,
          height: "100%",
          transition: "0.5s"
        }}
      >
        <Box
          sx={{
            background: (theme) => theme.palette.error.light,
            height: "100%",
            p: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            cursor: "pointer"
          }}
        >
          <DeleteOutline />
        </Box>
      </Box>
    </Box>
  );
};
