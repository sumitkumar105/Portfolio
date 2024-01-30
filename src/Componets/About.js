import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
const About = () => {
  return (
    <Box sx={{ backgroundColor: "orange" }}>
      <Container sx={{ padding: "70px", width: "auto" }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 4,
            color: "white",
            fontWeight: "bold",
          }}
        >
          About Me
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sm={12} lg={7}>
            <Paper
              sx={{
                padding: "20px",
                backgroundColor: "orange",
                border: "1px solid blue",
              }}
            >
              <p>
                Creative and dedicated Software Developer with 2 years of
                experience in Java and React, excelling in crafting scalable
                applications using Spring Core, Hibernate, and Microservices.
                Dynamic Full Stack Developer with expertise in React, Java Full
                Stack, and RESTful API integration. Proficient in Git, Material
                UI, and TypeScript, dedicated to delivering high-quality code in
                collaborative, agile environments.
              </p>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50px" }}
                  src="data:image/jpeg;base64,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"
                  alt="profile"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default About;
