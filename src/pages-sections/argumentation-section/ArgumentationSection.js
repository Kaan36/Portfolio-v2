import React from "react";

import Wrapper from "../../components/Wrapper/Wrapper";
import { Box, Grid, styled, Paper, Typography } from "@mui/material";
import OutlinedCard from "@/components/OutlinedCard/OutlinedCard";

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

const ArgumentationSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <StyledArgumentationHeader>
          Du hast eine Idee aber weißt nicht wie Du diese technisch umsetzen
          kannst?
        </StyledArgumentationHeader>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={4}>
            <OutlinedCard
              header='🥲 Nur eine Idee'
              content='Du hast Schwierigkeiten den passenden Technischen Partner für Dein Vorhaben zu finden?'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <OutlinedCard
              header='😤 Hohe Konkurrenz'
              content='Du kämpfst mit hoher Konkurrenz und damit verbundenen Preiskämpfen'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <OutlinedCard
              header='😖 unbekannte Kosten'
              content='Du weißt nicht, in welchem Rahmen sich dein Projekt bewegt und hättest gerne eine grobe Zahl?'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <OutlinedCard
              header='🤨 Zeit ist knapp'
              content='Du willst so schnell wie möglich mit einer ersten Version an den Markt um deine Idee zu testen?'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <OutlinedCard
              header='😫 Vorschriften erschweren'
              content='Du musst dich mit regulatorischen Anforderungen auseinandersetzen?'
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <OutlinedCard
              header='🧐 unbekannte Zielgruppe'
              content='Du hast kein tiefes Verständnis für die Bedürfnisse und Wünsche deiner Zielgruppe?'
            />
          </Grid>
        </Grid>
      </Wrapper>
    </StyledBox>
  );
};

export default ArgumentationSection;
