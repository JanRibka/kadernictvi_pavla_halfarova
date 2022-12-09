import HairSalonPHLogo from "../../../../../shared/img/logo/logo_hairsalon_ph.jpg";
import ImgWrapperStyled from "./styledComponents/ImgWrapperStyled";
import LogoStyled from "./styledComponents/LogoStyled";

const Logo = () => {
  return (
    <LogoStyled
      className='main-menu-logo'
      onClick={() => {
        window.open(process.env.PUBLIC_URL, "_self");
      }}
    >
      <ImgWrapperStyled>
        <img src={HairSalonPHLogo} alt='Hair Salon PH - Logo'></img>
      </ImgWrapperStyled>
    </LogoStyled>
  );
};

export default Logo;
