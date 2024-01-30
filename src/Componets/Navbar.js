import React, { useState } from "react";
import { AppBar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerComponent } from "./DrawerComponent";
const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrwawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <Stack
        direction="row"
        sx={{ height: "80px" }}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ backgroundColor: "black", padding: "20px" }}
      >
        <Typography variant="h5" sx={{ color: "white" }}>
          Portfolio
        </Typography>
        <MenuIcon
          onClick={handleOpenDrwawer}
          sx={{
            fontSize: 40,
            color: "white",
            display: { xs: "block", md: "none", lg: "none" },
          }}
        />
        {openDrawer && (
          <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
            <DrawerComponent
              open={openDrawer}
              handleCloseDrawer={handleOpenDrwawer}
            />
          </Box>
        )}
        {/*<-----NavHeadingComponent------>*/}
        <Box sx={{ display: { xs: "none", md: "none", lg: "block" } }}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            //
          >
            {["About Me", "Skills", "Certificates", "Projects", "Contact"]?.map(
              (heading, index) => {
                return (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: "white" }}>{heading}</Typography>
                  </Box>
                );
              }
            )}
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
export default Navbar;
