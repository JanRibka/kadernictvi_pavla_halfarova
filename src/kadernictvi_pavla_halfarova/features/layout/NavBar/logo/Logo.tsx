import { IconButton } from '@mui/material';

import KadernictviPHLogo from '../../../logo/logo_hair_artist_ph_header.svg';

const Logo = () => {
  return (
    // TODO: Po kliku prejit na hlavni stranku
    <IconButton
      sx={{
        height: "40px",
        zIndex: 10,
        img: {
          height: "inherit",
        },
      }}
      onClick={() => {}}
    >
      <img
        src={KadernictviPHLogo}
        alt='Kadeřnictví Pavla halfarová - Logo'
      ></img>
    </IconButton>
  );
};

export default Logo;
