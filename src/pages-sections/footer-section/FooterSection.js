import React from "react";

import {
  Box,
  Grid,
  styled,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import Wrapper from "@/components/Wrapper/Wrapper";
import TextComponent from "@/components/TextComponent/TextComponent";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  paddingTop: "60px",
  paddingBottom: "60px",
  color: "black",
}));

const StyledFooternHeader = styled(Typography)(({ theme }) => ({
  marginTop: 0,
  marginBottom: "48px",
  fontSize: "32px",
  lineHeight: "36px",
  fontWeight: 700,
  textAlign: "center",
}));

const FooterSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <StyledFooternHeader>Kontaktiere mich</StyledFooternHeader>
        <Typography variant='p' component='div' sx={{ textAlign: "center" }}>
          Jahrelange Erfahrung und das Realisieren von unzähligen Projekten
          machen uns zu Experten in der Digitalisierung. Die Kombination aus
          einem dynamischen Team und den unseren breitgefächerten
          Erfahrungswerten, macht uns zur einer der agilsten IT Unternehmen aus
          dem Münsterland. Denn die präzise und individuelle Umsetzung des
          Projekts sowie Deine Zufriedenheit ist die DNA unserer Software
          Agentur in Münster. Ganz egal, ob es sich um eine exklusive Software,
          eine Website oder um die Entwicklung einer App handelt, wir sind Dein
          Ansprechpartner für IT Dienstleistungen.
        </Typography>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextComponent
              header='Buche direkt einen kostenlosen Termin'
              content='Wir unterhalten uns gemeinsam in einem 30-Minütigen Call über Dein Vorhaben. Ganz unverbindlich und ohne Kosten.'
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant='contained'>Termin reservieren</Button>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0 40px",
              //   alignItems: "center",
            }}
          >
            <TextComponent header='Schreibe mir eine kurze E-Mail' content='' />
            <TextField className='textfield' label='Name' variant='standard' />
            <TextField
              className='textfield'
              label='E-Mail'
              variant='standard'
            />
            <TextField
              className='textfield'
              label='Telefonnummer'
              variant='standard'
            />
            <TextField
              className='textfield'
              label='Nachricht'
              multiline
              rows={4}
              variant='standard'
            />
            <Button variant='contained' sx={{ width: "120px" }}>
              Absenden
            </Button>
          </Grid>
        </Grid>
      </Wrapper>
    </StyledBox>
  );
};

export default FooterSection;
