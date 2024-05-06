"use client"

import * as React from "react";
import { useEffect, useState } from "react"; // Import useEffect and useState
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import ResearchCard from "@/components/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GridItem } from "@chakra-ui/react";
import Nextlink from "next/link";
import { CaseStudyType } from "@/types/CaseStudy";

const theme = createTheme({
  palette: {},
});

const fetchCaseStudies = async () => {
  try {
    console.log('calling backend service');
    const data = await fetch('/api/casestudy', { cache: 'force-cache' });
    const dataJson = await data.json();
    return dataJson['caseStudies'] as CaseStudyType[];
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return []; // Return empty array in case of error
  }
}

export default function MediaCard() {
  const [caseStudies, setCaseStudies] = useState<CaseStudyType[]>([]); // State to store case studies

  useEffect(() => {
    const fetchData = async () => {
      const studies = await fetchCaseStudies();
      setCaseStudies(studies);
    };
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array to run effect only once

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
            {caseStudies.map((study) => {
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
