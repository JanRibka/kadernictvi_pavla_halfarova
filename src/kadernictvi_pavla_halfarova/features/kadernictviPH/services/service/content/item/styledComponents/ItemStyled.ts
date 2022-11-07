import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ItemStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  margin: "0 20px 10px 20px",

  "&:hover": {
    svg: {
      scale: "1.25",
    },
  },

  "& svg": {
    transition: "scale 100ms ease-in-out",
  },
}));

export default ItemStyled;
