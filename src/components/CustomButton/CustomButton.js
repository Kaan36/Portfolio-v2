import React from "react";

import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#40B8FC",
}));

const CustomButton = (props) => {
  const type = {
    "small": "120px",
    "medium": "180px",
    "big": "260px",
  };

  return (
    <StyledButton variant='contained' sx={{ width: type[props.type] }}>
      {props.children}
    </StyledButton>
  );
};

export default CustomButton;
