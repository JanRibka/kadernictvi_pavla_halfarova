import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const MyWorkStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "8em 0px",
}));

export default MyWorkStyled;
