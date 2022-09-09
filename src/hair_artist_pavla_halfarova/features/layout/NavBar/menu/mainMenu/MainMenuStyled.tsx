import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const MainMenuStyled = styled(Box)(({ theme }) => ({
  "& .MuiButton-root": {
    minWidth: "90px",
    maxWidth: "360px",
    color: "white",
  },
}));

export default MainMenuStyled;
