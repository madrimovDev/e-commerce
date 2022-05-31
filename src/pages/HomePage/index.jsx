import { SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HomeTop from "../../components/home/HomeTop";

const HomePage = () => {
  return (
    <Fragment>
      <HomeTop />
      <Container maxWidth="xl" sx={{mt: 4}}>
        <Outlet />
      </Container>
    </Fragment>
  );
};

export default HomePage;
