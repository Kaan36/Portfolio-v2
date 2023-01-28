import * as React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function StepCard(props) {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 450 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='200'
          image={props.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h3' component='div'>
            {props.header}
          </Typography>
          <Typography variant='p' color='text.secondary'>
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
