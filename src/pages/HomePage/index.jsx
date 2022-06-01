import {
  Container,
} from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HomeTop from "../../components/home/HomeTop";

const HomePage = () => {
  return (
    <Fragment>
      <HomeTop />
      <Container maxWidth="lg" sx={{mt: 4}}>
        <Outlet />
      </Container>
    </Fragment>
  );
};

export default HomePage;
