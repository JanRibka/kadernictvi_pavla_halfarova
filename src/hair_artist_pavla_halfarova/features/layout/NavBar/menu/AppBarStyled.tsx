import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  transition: "background-color 400ms linear",

  "&.transparent": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

export default AppBarStyled;
