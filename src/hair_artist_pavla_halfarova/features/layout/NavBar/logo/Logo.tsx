import { IconButton } from '@mui/material';

import HairArtistPHLogo from '../../../logo/logo_hair_artist_ph_header.svg';

const Logo = () => {
  return (
    // TODO: Po kliku prejit na hlavni stranku
    <IconButton
      sx={{
        height: "40px",
        img: {
          height: "inherit",
        },
      }}
      onClick={() => {}}
    >
      <img
        src={HairArtistPHLogo}
        alt='Hair artist Pavla halfarová - Logo'
      ></img>
    </IconButton>
  );
};

export default Logo;
