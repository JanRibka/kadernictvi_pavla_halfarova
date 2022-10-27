import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';

const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",

    button: {
      width: "100%",
      ":not(:first-of-type)": {
        marginLeft: 0,
      },
    },
  },
}));

export default DialogActionsStyled;
