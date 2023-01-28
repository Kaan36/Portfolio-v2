import React from "react";

import { Box, Typography } from "@mui/material";

const TextComponent = (props) => {
  return (
    <Box sx={{ width: "100%", padding: "20px", textAlign: "center" }}>
      <Typography variant='h3'>{props.header}</Typography>
      <Typography variant='p'>{props.content}</Typography>
    </Box>
  );
};

export default TextComponent;
