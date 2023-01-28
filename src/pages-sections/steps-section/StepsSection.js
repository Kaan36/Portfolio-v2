import React from "react";

import Wrapper from "../../components/Wrapper/Wrapper";
import { Box, Grid, styled, Paper, Typography } from "@mui/material";
import StepCard from "@/components/StepCard/StepCard";

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

const StepsSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <StyledArgumentationHeader>
          Sie machen den ersten Schritt – ich kümmere mich um den Rest.
          Versprochen!
        </StyledArgumentationHeader>
        <Grid
          container
          rowSpacing={{ xs: 2, sm: 2, md: 3 }}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={4}>
            <StepCard
              image='../../../img/meeting.jpg'
              header='1.Erstgespräch'
              content='In einem gemeinsamen Analyse Gespräch schauen wir uns Deinen IST-Zustand und Deine Idee an. Wir definieren eine erste Meilenstein Planung und Konzepte die für deine Idee wirklich Sinn machen. Zusätzlich erhältst du schonmal vorab eine erste Zeit & Kostenschätzung. Außerdem klären wir alle offenen Fragen die Du hast.'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StepCard
              image='../../../img/development.jpg'
              header='2. Entwicklung'
              content='Mit den Ergebnissen aus dem Gespräch, können wir nun mit der Entwicklung beginnen. Wir arbeiten in 2-Wochen Sprints und geben Dir nach jedem Sprint ein Update. So hast du jederzeit einen Überblick wie das Projekt vorangeht. Außerdem laden wir unsere Zwischenstände auf einen Testserver damit Du dir jederzeit den aktuellen Stand anschauen kannst.'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StepCard
              image='../../../img/publishing.jpg'
              header='3.Livegang'
              content='Unsere Zusammenarbeit endet nicht nach Projektabschluss. Wir begleiten Dich auch nach dem Livegang und helfen Dir bei übergreifenden Themen oder Optimierungen der Anwendung. Außerdem helfen wir dir, Deine Mitarbeiter zu schulen und stehen bereit für offene Supportanfragen. Unser Ziel ist Deine maximale Zufriedenheit.

'
            />
          </Grid>
        </Grid>
      </Wrapper>
    </StyledBox>
  );
};

export default StepsSection;
