import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';

const DialogContentStyled = styled(DialogContent)(
  ({ theme }) =>
    `
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.4em;
    height: 100%;  
  }

  // &::-webkit-scrollbar-track {
  //   -webkit-box-shadow: inset 0 0 0.9em rgba(0,0,0,0.3);
  // }

  &::-webkit-scrollbar-thumb {
    border: 0.25em solid ${theme.palette.grey[400]};  
    background-color: darkgrey;
    // outline: 1px solid slategrey;
    border-radius: 10px;

    &:hover {
      border: 0.25em solid ${theme.palette.grey[500]};  
    }
  }
`
);

export default DialogContentStyled;
