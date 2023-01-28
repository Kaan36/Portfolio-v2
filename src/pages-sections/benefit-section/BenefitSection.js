import React from "react";

import Wrapper from "../../components/Wrapper/Wrapper";
import { Box, Grid, styled, Typography } from "@mui/material";
import OutlinedCard from "@/components/OutlinedCard/OutlinedCard";

const StyledBox = styled(Box)(({ theme }) => ({
  color: "black",
  paddingTop: "60px",
  paddingBottom: "60px",
  backgroundColor: "white",
  minHeight: "700px",
}));

const StyledArgumentationHeader = styled(Typography)(({ theme }) => ({
  marginTop: 0,
  marginBottom: "48px",
  fontSize: "32px",
  lineHeight: "36px",
  fontWeight: 700,
}));

const BenefitSection = () => {
  return (
    <StyledBox>
      <Wrapper>
        <Grid container>
          <Grid item xs={12} md={5}>
            <StyledArgumentationHeader>
              Deine Benefits nach einer Zusammenarbeit mit mir
            </StyledArgumentationHeader>
          </Grid>
          <Grid container xs={12} md={7}>
            <Grid
              container
              xs={12}
              md={6.5}
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <OutlinedCard
                  header='Kosten'
                  content='Die Lösung ist genau auf Deine Bedürfnisse abgestimmt. Keine Extrakosten für Funktionen, die Du garnicht benötigst.'
                />
              </Grid>
              <Grid item xs={12}>
                <OutlinedCard
                  header='Änderungswünsche'
                  content='Während der Entwicklung sind wir in der Lage flexibel auf Änderungen zu reagieren und diese zu integrieren.'
                />
              </Grid>
              <Grid item xs={12}>
                <OutlinedCard
                  header='Schneller Markteintritt'
                  content='In einer schnelllebigen Zeit ist es wichtig, seine Idee mit einem MVP zu testen.'
                />
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              md={6.5}
              rowSpacing={{ xs: 1, sm: 2, md: 3 }}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{
                paddingLeft: { xs: 0, md: 2 },
                paddingTop: { xs: 1, md: "32px" },
                height: { xs: "inherit", md: "500px" },
              }}
            >
              <Grid item xs={12}>
                <OutlinedCard
                  header='Zeit'
                  content='Durch unsere langjährige Erfahrung und Projektplanung können wir sehr gute Qualität in kürzester Zeit liefern.'
                />
              </Grid>
              <Grid item xs={12}>
                <OutlinedCard
                  header='Maximales Engagement'
                  content='Wir gehen die Extra Meile und helfen bei der Konzeption und Ideen Findung.'
                />
              </Grid>
              <Grid item xs={12}>
                <OutlinedCard
                  header='Integrität und Sicherheit'
                  content='Trotz der Agilität achten wir erhöht auf Sicherheitsaspekte und Einhaltung von Best Practices.'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </StyledBox>
  );
};

export default BenefitSection;
