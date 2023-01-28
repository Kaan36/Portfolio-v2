import React from "react";

import { Container } from "@mui/material";

const Wrapper = (props) => {
  return <Container maxWidth='md'>{props.children}</Container>;
};

export default Wrapper;
