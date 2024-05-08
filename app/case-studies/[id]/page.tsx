"use client";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CaseStudyType } from "@/types/CaseStudy";
import { useEffect, useState } from "react";
import fetchCaseStudy from "@/services/FetchCaseStudy";

const theme = createTheme({
  palette: {},
});


export default function ResearchPage({ params }: { params: { id: string } }) {
  const [caseStudy, setCaseStudy] = useState<CaseStudyType>();

  useEffect(() => {
    const fetchData = async () => {
      console.log('inside hook');
      const caseStudyJson = await fetchCaseStudy(params.id);
      const caseStudyData = caseStudyJson as CaseStudyType;
      setCaseStudy(caseStudyData);
    };
    fetchData();
  }, []);

  if (!caseStudy) {
    return <div>Loading...</div>;
  }

  
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ mt: 6 }}>
          <Typography variant="h3">
            {caseStudy.title.substring(0, caseStudy.title.indexOf(":"))}
          </Typography>
          <Typography variant="h5">
            {caseStudy.title.substring(caseStudy.title.indexOf(":")+1, caseStudy.title.length)}
          </Typography>
          <Typography variant="body2">Authored By : {caseStudy.author}</Typography>
          <Typography variant="body2">Published On : {caseStudy.when_written}</Typography>
        </Box>

        
        {caseStudy.content.map((subcontent) => {
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
