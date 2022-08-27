import { IconButton, SxProps } from "@mui/material";

import HairSalonLogo from "../../logo/logo_kadernictvi_ph.svg";

const Logo = () => {
  return (
    // TODO: Po kliku prejit na hlavni stranku
    <IconButton sx={iconButtonStyle} onClick={() => {}}>
      <img src={HairSalonLogo} alt='hairsalon-ph-logo'></img>
    </IconButton>
  );
};

export default Logo;

// Styles
const iconButtonStyle: SxProps = {
  height: "40px",
  img: {
    height: "inherit",
  },
};
