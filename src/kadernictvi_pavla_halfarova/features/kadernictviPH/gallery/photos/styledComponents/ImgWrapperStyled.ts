import GridItem from "shared/components/gridItem/GridItem";

import { styled } from "@mui/material/styles";

const ImgWrapperStyled = styled(GridItem)(({ theme }) => ({
  padding: "20px 40px",
  maxWidth: "400px",
  transform: "scale(1)",
  transition: "all 300ms ease",

  [theme.breakpoints.up("sm")]: {
    margin: "15px 0",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },

  [theme.breakpoints.between("md", "xl")]: {
    padding: "10px 40px",
    margin: "25px 0",
  },

  [`@media (min-width: 1921px)`]: {
    margin: "30px 30px",
    maxWidth: "440px",

    "&:first-of-type": {
      margin: "30px 30px 30px 0 ",
    },

    "&:last-of-type": {
      margin: "30px 0 30px 30px",
    },
  },
}));

export default ImgWrapperStyled;
