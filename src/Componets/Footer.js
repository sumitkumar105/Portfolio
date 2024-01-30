import React from "react";
import { Box, Typography, Stack } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
          © 2024 Sunmitkumar Deshpande. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};
export default Footer;
