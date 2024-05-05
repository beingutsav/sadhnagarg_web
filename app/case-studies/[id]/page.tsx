"use client";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CaseStudies from "@/data/CaseStudiesData";

const theme = createTheme({
  palette: {},
});


export default function ResearchPage({ params }: { params: { id: string } }) {
  const caseData = CaseStudies();
  const index = parseInt(params.id) - 1; //as id's are numberings

  // Check if case studies is not empty and index is within bounds
  const study = caseData[index];
  if (!study) {
    return <div>Loading...</div>; // or handle loading state accordingly
  }


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ mt: 6 }}>
          <Typography variant="h3">
            {study.title.substring(0, study.title.indexOf(":"))}
          </Typography>
          <Typography variant="h5">
            {study.title.substring(study.title.indexOf(":")+1, study.title.length)}
          </Typography>
          <Typography variant="body2">Authored By : {study.author}</Typography>
          <Typography variant="body2">Published On : {study.when_written}</Typography>
        </Box>

        {study.content.map((subcontent) => {
          return (
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4">{subcontent.heading}</Typography>
              <Typography variant="body1">{subcontent.description}</Typography>
            </Box>
          );
        })}
      </Container>
    </ThemeProvider>
  );
}
