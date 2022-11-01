import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ContactsWrapperStyled = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export default ContactsWrapperStyled;
