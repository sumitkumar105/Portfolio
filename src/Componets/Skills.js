import React from "react";
import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { skillData } from "../Data/skillData";
import Divider from "./Divider";
const Skills = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#17a2b8!important",
          padding: "50px",
          width: "auto",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Skills
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sm={12} lg={7}>
            <Paper
              sx={{
                padding: "20px",
                backgroundColor: "#17a2b8!important",
                border: "1px solid red",
              }}
            >
              {skillData?.map((item, index) => {
                return (
                  <>
                    <Stack
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                      spacing={2}
                    >
                      <Typography>{item.skill}</Typography>
                      <img
                        height="100px"
                        width="100px"
                        src={item.imageUrl}
                        alt="pitcure"
                      />
                    </Stack>
                    <Divider height="10px" />
                  </>
                );
              })}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Skills;
