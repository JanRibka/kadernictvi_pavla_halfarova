import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ServicesStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "8em 0px",
  backgroundColor: theme.palette.primary.dark,

  [theme.breakpoints.down("md")]: {
    padding: "8em 20px",
  },
}));

export default ServicesStyled;
