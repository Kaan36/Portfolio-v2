import React from "react";
import Image from "next/image";
import { Box, Grid, styled, Button, Typography } from "@mui/material";

import Wrapper from "@/components/Wrapper/Wrapper";
import bakery from "../../../public/img/projects/bakery.jpg";
import workshop from "../../../public/img/projects/car-workshop.jpg";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  paddingTop: "60px",
  paddingBottom: "60px",
  color: "#f8f8f8",
}));

const ProjectSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <Typography variant='h2' sx={{ textAlign: "center" }}>
          Kunden die ich bereits unterstützt habe
        </Typography>
        <Typography variant='h3' sx={{ textAlign: "center" }}>
          Viele Ideen und zahlreiche Projekte umgesetzt
        </Typography>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginBottom: "24px" }}
        >
          <Grid item xs={12} sm={6}>
            <div
              style={{
                position: "relative",
                borderRadius: "6px",
                overflow: "hidden",
                height: 350,
                width: "100%",
              }}
            >
              <Image
                src={bakery}
                alt='Picture of the bakery'
                provided='true'
                automatically='true'
                fill
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4'>
              Bilgekaan Yilmaz, Yilmaz Bäckerei GbR
            </Typography>
            <Box
              sx={{
                marginBottom: "12px",
              }}
            >
              <Typography variant='p' sx={{ color: "#8b8b8b" }}>
                <strong style={{ color: "white" }}>Herausforderung:</strong> Das
                Frontend umfasst alles, was der Benutzer einer Software oder
                einer Webseite sieht, berührt und erlebt. Das Back-End bezieht
                sich auf alles, was der Benutzer einer Software oder einer
                Website nicht sehen kann.
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: "12px",
              }}
            >
              <Typography variant='p' sx={{ color: "#8b8b8b" }}>
                <strong style={{ color: "white" }}>Herausforderung:</strong> Das
                Frontend umfasst alles, was der Benutzer einer Software oder
                einer Webseite sieht, berührt und erlebt. Das Back-End bezieht
                sich auf alles, was der Benutzer einer Software oder einer
                Website nicht sehen kann.
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: "12px",
              }}
            >
              <Typography variant='p' sx={{ color: "#8b8b8b" }}>
                <strong style={{ color: "white" }}>Herausforderung:</strong> Das
                Frontend umfasst alles, was der Benutzer einer Software oder
                einer Webseite sieht, berührt und erlebt. Das Back-End bezieht
                sich auf alles, was der Benutzer einer Software oder einer
                Website nicht sehen kann.
              </Typography>
            </Box>
          </Grid>
          <Typography variant='p' sx={{ textAlign: "center", padding: "12px" }}>
            »Piri Web betreut uns mittlerweile schon über 2 Jahre und unsere
            Wünsche wurden immer übertroffen. Ich schätze an Piri Web besonders
            die schnelle Verfügbarkeit bei Rückfragen und die Transparenz in der
            Prozessgestaltung.«
          </Typography>
        </Grid>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginBottom: "24px" }}
        >
          <Grid item xs={12} sm={6}>
            <div
              style={{
                position: "relative",
                borderRadius: "6px",
                overflow: "hidden",
                height: 350,
                width: "100%",
              }}
            >
              <Image
                src={workshop}
                alt='Picture of the bakery'
                provided='true'
                automatically='true'
                fill
                objectFit='cover'
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4'>
              Bilgekaan Yilmaz, Kfz-Werkstatt Yilmaz
            </Typography>
            <Box
              sx={{
                marginBottom: "12px",
              }}
            >
              <Typography variant='p' sx={{ color: "#8b8b8b" }}>
                <strong style={{ color: "white" }}>Herausforderung:</strong> Das
                Frontend umfasst alles, was der Benutzer einer Software oder
                einer Webseite sieht, berührt und erlebt. Das Back-End bezieht
                sich auf alles, was der Benutzer einer Software oder einer
                Website nicht sehen kann.
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: "12px",
              }}
            >
              <Typography variant='p' sx={{ color: "#8b8b8b" }}>
                <strong style={{ color: "white" }}>Herausforderung:</strong> Das
                Frontend umfasst alles, was der Benutzer einer Software oder
                einer Webseite sieht, berührt und erlebt. Das Back-End bezieht
                sich auf alles, was der Benutzer einer Software oder einer
                Website nicht sehen kann.
              </Typography>
            </Box>
            <Box
              sx={{
                marginBottom: "12px",
              }}
            >
              <Typography variant='p' sx={{ color: "#8b8b8b" }}>
                <strong style={{ color: "white" }}>Herausforderung:</strong> Das
                Frontend umfasst alles, was der Benutzer einer Software oder
                einer Webseite sieht, berührt und erlebt. Das Back-End bezieht
                sich auf alles, was der Benutzer einer Software oder einer
                Website nicht sehen kann.
              </Typography>
            </Box>
          </Grid>
          <Typography variant='p' sx={{ textAlign: "center", padding: "12px" }}>
            »Piri Web betreut uns mittlerweile schon über 2 Jahre und unsere
            Wünsche wurden immer übertroffen. Ich schätze an Piri Web besonders
            die schnelle Verfügbarkeit bei Rückfragen und die Transparenz in der
            Prozessgestaltung.«
          </Typography>
        </Grid>

        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "40px" }}
        >
          <Button variant='contained'>Noch mehr Referenzen</Button>
        </Box>
      </Wrapper>
    </StyledBox>
  );
};

export default ProjectSection;
