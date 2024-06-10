import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
const RootLayout = () => {
  return (
    <Box width='400' sx={{ width: { xl: "1488px" } }} m='auto'>
      <Navbar />

      <Outlet />
      <Footer />
    </Box>
  );
};

export default RootLayout;
