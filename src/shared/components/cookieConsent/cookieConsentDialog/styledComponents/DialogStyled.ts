import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const DialogStyled = styled(Dialog)(({ theme }) => ({
  top: "auto",
  right: 0,
  bottom: 0,
  left: "auto",
}));

export default DialogStyled;
