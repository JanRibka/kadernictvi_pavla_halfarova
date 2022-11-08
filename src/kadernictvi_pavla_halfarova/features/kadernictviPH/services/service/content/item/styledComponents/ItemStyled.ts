import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ItemStyled = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "35px auto 130px",
  justifyContent: "stretch",
  margin: "0 20px 15px 20px",
  alignItems: "center",

  "&:hover": {
    svg: {
      scale: "1.25",
    },
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "35px auto 110px",
  },

  "& svg": {
    transition: "scale 100ms ease-in-out",
  },
}));

export default ItemStyled;
