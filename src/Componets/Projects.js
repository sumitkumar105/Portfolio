import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Divider from "./Divider";
import { ProjectData } from "../Data/ProjectData";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#28a745!important",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", mb: 2, padding: "10px" }}
        >
          Projects
        </Typography>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { sm: "cloumn", lg: "row" },
            align: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {ProjectData?.map((item, index) => {
              return (
                <>
                  <Grid item sm={12} md={6} lg={4} key={item.id}>
                    <ProjectCard project={item} />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Projects;
