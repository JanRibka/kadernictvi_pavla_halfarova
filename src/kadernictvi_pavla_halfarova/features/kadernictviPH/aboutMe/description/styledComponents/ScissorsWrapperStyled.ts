import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ScissorsWrapperStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "50px",
  marginTop: "80px",

  img: {
    hright: "inherit",
  },
}));

export default ScissorsWrapperStyled;
