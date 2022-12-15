import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Wrapper from "../components/Wrapper";
import StarkNet from "../assets/StarknetContent.png";
import { Button } from "@mui/material";

const Projects = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Item>
              <Button disableRipple color="success">
                aa
              </Button>
              <Button color="warning">aa</Button>
            </Item>
          </Grid>
          <Grid xs={3}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={6}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default Projects;
