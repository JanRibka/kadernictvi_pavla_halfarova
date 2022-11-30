import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const LogoStyled = styled(IconButton)(({ theme }) => ({
  width: "110px",
  height: "110px",
  borderRadius: "50%",
  position: "absolute",
  top: "40px",
  left: "50px",
  transition: "all 300ms ease-out",

  img: {
    borderRadius: "50%",
  },
}));

export default LogoStyled;
