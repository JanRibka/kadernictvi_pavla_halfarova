import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const LogoBackgroundStyled = styled(Box)(({ theme }) => ({
  width: "116px",
  height: "116px",
  borderRadius: "50%",
  marginTop: "110px",
  marginLeft: "23px",
  backgroundColor: theme.palette.secondary.main,
  transition: "all 300ms ease-out",
  display: "none",
}));

export default LogoBackgroundStyled;
