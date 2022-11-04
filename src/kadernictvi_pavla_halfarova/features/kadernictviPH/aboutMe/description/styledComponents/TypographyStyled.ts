import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const TypographyStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: "justify",
  padding: "0 20px",
}));

export default TypographyStyled;
