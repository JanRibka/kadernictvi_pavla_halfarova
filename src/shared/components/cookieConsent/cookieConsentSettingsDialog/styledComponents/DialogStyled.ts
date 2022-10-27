import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const DialogStyled = styled(Dialog)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: "1em",

    "& .MuiDialog-paper": {
      height: "100%",
      maxHeight: "100%",
      width: "100%",
      maxWidth: "100%",
      margin: 0,
    },
  },

  [theme.breakpoints.up("md")]: {
    "& .MuiDialog-paper": {
      maxHeight: "28.4em",
    },
  },
}));

export default DialogStyled;
