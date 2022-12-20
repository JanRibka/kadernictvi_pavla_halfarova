import HairSalonPHLogo from "../../../../../shared/img/logo/logo_hairsalon_ph.svg";
import ImgWrapperStyled from "./styledComponents/ImgWrapperStyled";
import LogoStyled from "./styledComponents/LogoStyled";

// TODO: alt p5idat do prekladu
const Logo = () => {
  return (
    <LogoStyled className='main-menu-logo'>
      <ImgWrapperStyled
        component='a'
        href={process.env.PUBLIC_URL}
        target='_self'
      >
        <img src={HairSalonPHLogo} alt='Hair Salon PH - Logo'></img>
      </ImgWrapperStyled>
    </LogoStyled>
  );
};

export default Logo;
