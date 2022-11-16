import Dialog from "@mui/material/Dialog";
import { alpha, styled } from "@mui/material/styles";

const DialogStyled = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    margin: 0,
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    maxHeight: "100vh",
    background: alpha(theme.palette.primary.dark, 0.85),
    overflowX: "hidden",
  },
}));

export default DialogStyled;
