import { IconButton, SxProps } from "@mui/material";

import HairArtistPHLogo from "../../logo/logo_hair_artist_ph_header.svg";

const Logo = () => {
  return (
    // TODO: Po kliku prejit na hlavni stranku
    <IconButton sx={iconButtonStyle} onClick={() => {}}>
      <img src={HairArtistPHLogo} alt='hairsalon-ph-logo'></img>
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
