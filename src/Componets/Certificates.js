import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { certificateData } from "../Data/certificateData";
import Divider from "./Divider";
const Certificates = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "grey", paddingTop: "10px" }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", mb: 2, padding: "10px" }}
      >
        Certificates
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          {certificateData?.map((item, index) => {
            return (
              <>
                <Grid item sm={12} md={6} lg={4} key={item.id}>
                  <img width="100%" src={item.certiImage} alt="certificates" />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
      <Divider height="30px" />
    </Box>
  );
};
export default Certificates;
