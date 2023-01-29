import React from "react";

import Wrapper from "../../components/Wrapper/Wrapper";
import { Box, Grid, styled, Paper, Typography } from "@mui/material";
import CompetenceCard from "@/components/CompetenceCard.js/CompetenceCard";

const StyledBox = styled(Box)(({ theme }) => ({
  color: "black",
  paddingTop: "60px",
  paddingBottom: "60px",
  backgroundColor: "white",
}));

const StyledArgumentationHeader = styled(Typography)(({ theme }) => ({
  marginTop: 0,
  marginBottom: "48px",
  fontSize: "32px",
  lineHeight: "36px",
  fontWeight: 700,
  textAlign: "center",
}));

const CompetenceSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <StyledArgumentationHeader>Meine Kompetenzen</StyledArgumentationHeader>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <CompetenceCard
              image='/img/react-development.jpg'
              header='Cloud Service'
              content='Die Auslagerung von IT-Systemen in die Cloud ist eines der großen Themen mit der sich Firmen unabhängig von Größe und Branche derzeit beschäftigen.'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CompetenceCard
              image='/img/webflow.jpg'
              header='Webflow & Wordpress'
              content='Mach dir keine Sorge um Design oder Inhalt. Ich setze Deinen Web Auftritt professionell um. Strahle mit einer neuen & frischen Website für dein Unternehmen.'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CompetenceCard
              image='/img/react-development.jpg'
              header='Node/Next.js'
              content='Buchungsplattform, B2B Shop oder doch nur eine interne Schnittstelle. Mit unseren Vercel & Next.js Skills können wir jede Idee individuell umsetzen.'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CompetenceCard
              image='/img/app-development.jpg'
              header='App Entwicklung'
              content='Mit einer nativen App konvertierst Du Besuche zu wiederkehrenden Kunden und baust eine ganz andere Bindung auf. Ich entwickel Dir mit React Native eine Cross Plattform App für iOS & Android.'
            />
          </Grid>
        </Grid>
      </Wrapper>
    </StyledBox>
  );
};

export default CompetenceSection;
