import HairSalonPHLogo from '../../../../../shared/img/logo/logo_hairsalon_ph.svg';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyles';
import LogoStyled from './styledComponents/LogoStyled';

const Logo = () => {
  return (
    <LogoStyled>
      <ImgWrapperStyled
        component='a'
        href={process.env.PUBLIC_URL}
        target='_self'
      >
        <img src={HairSalonPHLogo} alt='Hairsalon PH - Logo'></img>
      </ImgWrapperStyled>
    </LogoStyled>
  );
};

export default Logo;
