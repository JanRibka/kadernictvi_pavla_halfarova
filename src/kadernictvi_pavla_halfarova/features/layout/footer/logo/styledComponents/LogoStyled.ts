import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const LogoStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 0,
  boxShadow: "unset",

  img: {
    height: "inherit",
    borderRadius: "inherit",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default LogoStyled;
