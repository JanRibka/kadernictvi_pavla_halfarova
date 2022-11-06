import { IconButton } from "@mui/material";

import HairSalonPHLogo from "../../../logo/logo_hairsalon_ph.svg";

const Logo = () => {
  return (
    // TODO: Po kliku prejit na hlavni stranku
    <IconButton
      className='main-menu-logo'
      sx={{
        zIndex: 10,
        img: {
          height: "inherit",
        },
      }}
      onClick={() => {}}
    >
      <img src={HairSalonPHLogo} alt='Hair Salon PH - Logo'></img>
    </IconButton>
  );
};

export default Logo;
