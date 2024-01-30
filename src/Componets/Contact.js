import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#dc3545!important",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, color: "white" }}>
        Contact
      </Typography>
      <Stack direction="row" spacing={1}>
        <EmailIcon />
        {isClicked ? (
          <Typography onClick={handleClick}>+917620630324</Typography>
        ) : (
          <PhoneAndroidIcon onClick={handleClick} />
        )}

        <LinkedInIcon />
        <GitHubIcon />
      </Stack>
    </Box>
  );
};
export default Contact;
