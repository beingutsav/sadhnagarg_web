"use client";

import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import ResearchCard from "@/components/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CaseStudies from "@/data/CaseStudiesData";
import { GridItem } from "@chakra-ui/react";
import Nextlink from "next/link";

const theme = createTheme({
  palette: {},
});

export default function MediaCard() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ mt: 6 }}>
          <Typography variant="h2">Case Studies...</Typography>
        </Box>

        <Box sx={{ flexGrow: 10, mt: 6 }}>
          <Grid
            container
            sx={{ flexDirection: { xs: "column", md: "row" } }}
            spacing={2}
          >
            {CaseStudies().map((study) => {
              return (
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(1, 1fr)", // Equal width columns for small screens
                    sm: "repeat(1, 1fr)", // Equal width columns for medium screens
                    md: "1fr 4fr", // First column 20%, Second column 80% for large screens
                  }}
                >
                  <GridItem colSpan={1}>
                    <Nextlink href={"/case-studies/" + study.id}>
                      <ResearchCard
                        id={study.id}
                        image={study.image_url}
                        title={study.title}
                        description={study.content[0].description}
                        link={"/case-studies/" + study.id}
                      />
                    </Nextlink>
                  </GridItem>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
