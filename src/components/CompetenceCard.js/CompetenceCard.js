import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CompetenceCard(props) {
  return (
    <Box sx={{ minWidth: "100%", height: "100%", minHeight: "250px" }}>
      <Card
        variant='inherit'
        sx={{
          //   backgroundColor: "#F0F0F0",
          height: "100%",
          //   background: "red",
          //   backgroundImage: `url(${props.image})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "fill",
          //   filter: "brightness(30%)",
          position: "relative",
          overflow: "hidden",
          borderRadius: "6px",
        }}
      >
        <img
          src={props.image}
          alt='...'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100%",
            width: "100%",
            filter: "brightness(30%)",
            zIndex: 1,
          }}
        />
        <CardContent
          sx={{
            textAlign: "center",
            color: "white",
            padding: "48px",
            position: "relative",

            zIndex: 10,
          }}
        >
          <Typography variant='h3' component='div'>
            {props.header}
          </Typography>

          <Typography variant='p'>{props.content}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
