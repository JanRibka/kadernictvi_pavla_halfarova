import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ContactStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "4em 0px",
  backgroundColor: theme.palette.primary.main,
}));

export default ContactStyled;
