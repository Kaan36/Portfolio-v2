import React from "react";

import Wrapper from "../../components/Wrapper/Wrapper";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import OutlinedCard from "@/components/OutlinedCard/OutlinedCard";
import Image from "next/image";
import TextComponent from "@/components/TextComponent/TextComponent";
import profilePic from "../../../public/img/bilgekaan-transparent.png";

const StyledBox = styled(Box)(({ theme }) => ({
  color: "black",
  paddingTop: "60px",
  //   paddingBottom: "60px",
  backgroundColor: "#F8F8F8",
  minHeight: "700px",
  display: "flex",
  alignItems: "flex-end",
}));

const BenefitSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant='h3'>Lass uns reden.</Typography>
            <TextComponent
              header='Schritt 1'
              content='Klicke auf den Link und sichere Dir einer der freien 30-Min-Termine in den kommenden Tagen.'
            />
            <TextComponent
              header='Schritt 2'
              content='Wir schauen gemeinsam wo Du stehst, was Deine größte Herausforderung ist und wie eine Strategie aussieht, um das zu lösen.'
            />
            <TextComponent
              header='Schritt 3'
              content='Wir zeigen Dir genau ob und wie eine Umsetzung aussehen kann. Unabhängig davon, wirst Du eigene Ansätze aus dem Gespräch mitnehmen können'
            />
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <Button variant='contained'>Termin sichern</Button>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div
              style={{
                position: "relative",
                borderRadius: "6px",
                overflow: "hidden",
                height: 610,
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
        </Grid>
      </Wrapper>
    </StyledBox>
  );
};

export default BenefitSection;
