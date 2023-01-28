import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: "100%", height: "100%" }}>
      <Card
        variant='inherit'
        sx={{ backgroundColor: "#F0F0F0", height: "100%" }}
      >
        <CardContent>
          <Typography variant='h6' component='div'>
            {props.header}
          </Typography>

          <Typography variant='body2' sx={{ color: "gray" }}>
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
