import React from "react";

import Wrapper from "../../components/Wrapper/Wrapper";
import { Box, styled, Button, Typography } from "@mui/material";
import CustomButton from "@/components/CustomButton/CustomButton";

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "black",
}));

const StyledLandingSubHeader = styled(Typography)(({ theme }) => ({
  marginBottom: 0,
  color: "#40b8fc",
  fontSize: "24px",
  fontWeight: 400,
  textAlign: "center",
}));

const StyledLandingHeader = styled(Typography)(({ theme }) => ({
  marginTop: 0,
  marginBottom: "48px",
  color: "#fff",
  fontSize: "50px",
  lineHeight: "58px",
  fontWeight: 700,
  textAlign: "center",
}));

const LandingpageSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <StyledLandingSubHeader>
          Für Unternehmen die Ihre Idee professionell an den Markt bringen
          wollen
        </StyledLandingSubHeader>
        <StyledLandingHeader>
          In kurzer Zeit digital Durchstarten
        </StyledLandingHeader>
        <CustomButton>Erfahre wie</CustomButton>
      </Wrapper>
    </StyledBox>
  );
};

export default LandingpageSection;
