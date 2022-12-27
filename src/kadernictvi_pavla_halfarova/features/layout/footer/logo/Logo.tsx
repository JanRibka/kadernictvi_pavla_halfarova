import Ease from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/ease/Ease';

import HairSalonPHLogo from '../../../../../shared/img/logo/logo_hairsalon_ph.svg';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyles';
import LogoStyled from './styledComponents/LogoStyled';

const Logo = () => {
  return (
    <LogoStyled>
      <Ease animation='ease'>
        <ImgWrapperStyled
          component='a'
          href={process.env.PUBLIC_URL}
          target='_self'
        >
          <img src={HairSalonPHLogo} alt='Hair Salon PH - Logo'></img>
        </ImgWrapperStyled>
      </Ease>
    </LogoStyled>
  );
};

export default Logo;
