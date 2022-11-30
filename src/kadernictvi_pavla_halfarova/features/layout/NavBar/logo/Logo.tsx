import HairSalonPHLogo from "../../../logo/logo_hairsalon_ph.jpg";
import LogoStyled from "./styledComponents/LogoStyled";

const Logo = () => {
  return (
    // TODO: Po kliku prejit na hlavni stranku
    <LogoStyled
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
    </LogoStyled>
  );
};

export default Logo;
