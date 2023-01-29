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
import CustomButton from "@/components/CustomButton/CustomButton";

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
          Lass Sie uns mit einem unverbindlichen Erstgespräch starten. Wir
          schauen uns gemeinsam Ihren aktuellen Stand an und erarbeiten uns
          zusammen einen Lösungsweg. Außerdem bekommen Sie im Erstgespräch von
          mir Tipps und praktische Informationen, um Ihre Internetpräsenz
          Erfolgreich zu startem. Ich freue mich Sie kennenzulernen.
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
              {/* <Button variant='contained'>Termin reservieren</Button> */}
              <CustomButton>Termin reservieren</CustomButton>
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
            <TextComponent header='Schreib mir eine kurze E-Mail' content='' />
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
            <CustomButton type='small'>Absenden</CustomButton>
          </Grid>
        </Grid>
      </Wrapper>
    </StyledBox>
  );
};

export default FooterSection;
