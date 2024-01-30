import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Container,
} from "@mui/material";
import Divider from "../Componets/Divider";
const ProjectCard = ({ project }) => {
  const { img, projectName, description, techStack, tech } = project;
  console.log(description);
  return (
    <>
      <Paper elevation={3} sx={{ width: "100%", margin: "20px" }}>
        <Box sx={{ width: "100%" }}>
          <img
            height="5%"
            Style={{ borderTopRightRadius: "5px" }}
            width="100%"
            src={img}
            alt="project"
          />
        </Box>
        <Divider height="10px" />
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography>{projectName}</Typography>
            <Button variant="contained">Demo</Button>
          </Stack>
          <Divider height="10px" />
          <p>{description}</p>
          <Divider height="10px" />
          <Box>
            <p>{tech}</p>
            <p>{techStack}</p>
          </Box>
          <Divider height="10px" />
          <Button variant="contained">GithubRepository</Button>
          <Divider height="15px" />
        </Container>
      </Paper>
    </>
  );
};
export default ProjectCard;
