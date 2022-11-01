import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const ContactWrapperStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: "center",
}));

export default ContactWrapperStyled;
