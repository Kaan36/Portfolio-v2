import React from "react";
import Image from "next/image";

import profilePic from "../../../public/img/bilgekaan.png";
import { Box, Grid, styled, Button, Typography } from "@mui/material";
import Wrapper from "@/components/Wrapper/Wrapper";
import CustomButton from "@/components/CustomButton/CustomButton";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  paddingTop: "60px",
  paddingBottom: "60px",
  color: "#f8f8f8",
}));

const StyledArgumentationHeader = styled(Typography)(({ theme }) => ({
  marginTop: 0,
  marginBottom: "48px",
  fontSize: "32px",
  lineHeight: "36px",
  fontWeight: 700,
  textAlign: "center",
}));

const ExpertSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <StyledArgumentationHeader>
          Bei Enterprise angefangen jetzt Enterprise anbieten
        </StyledArgumentationHeader>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={6}>
            <div
              style={{
                position: "relative",
                borderRadius: "6px",
                overflow: "hidden",
                height: 300,
                width: "100%",
              }}
            >
              <Image
                src={profilePic}
                alt='Picture of the author'
                provided='true'
                automatically='true'
                fill
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p
              style={{
                marginBottom: "24px",
                color: "#8b8b8b",
              }}
            >
              Seit Jahren bin ich in der Web-Entwicklung zu Hause und habe schon
              zahlreiche Web & App Projekte umgesetzt, begleitet und erfolgreich
              gelaunched. Dabei weiß ich genau, welche Fallstricke man beachten
              muss, um ein erfolgreiches Projekt auf die Beine zu stellen.
              Außerdem kann ich Dich unabhängig von einer möglichen
              Zusammenarbeit beraten, damit Du die beste Lösung für Dein Projekt
              erreichen kannst.
              <br />
              <br />
              Als Dein verlässlicher Partner bringe ich mit:
            </p>

            <ul className='expert-list'>
              <li>mehrere Web & App Projekte umgesetzt</li>
              <li>2+ Jahre in der Web & App Entwicklung</li>
              <li>über 5 Jahre Erfahrung in der IT</li>
              <li>Erhöhte persönliche Erreichbarkeit</li>
            </ul>
            <CustomButton variant='contained'>Lass uns reden</CustomButton>
          </Grid>
        </Grid>
      </Wrapper>
    </StyledBox>
  );
};

export default ExpertSection;
