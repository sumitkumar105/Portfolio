import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
const Heading = () => {
  const [changeText1, setChangeText1] = useState(false);
  const [changeText2, setChangeText2] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setChangeText1(!changeText1);
    }, 1000);
    setTimeout(() => {
      setChangeText2(!changeText2);
    }, 1500);
  });

  return (
    <Box
      sx={{
        backgroundColor: "cyan",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
      }}
    >
      <Typography variant="h5" sx={{ mb: 1 }}>
        Sumitkumar Deshpande
      </Typography>
      <p>Frontend Developer | Reactjs Developer</p>
    </Box>
  );
};
export default Heading;
