import { useTranslation } from 'react-i18next';

import HairSalonPHLogo from '../../../../../shared/img/logo/logo_hairsalon_ph.svg';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyled';
import LogoStyled from './styledComponents/LogoStyled';

const Logo = () => {
  // Consts
  const { t } = useTranslation(["layout\\logo"]);

  return (
    <LogoStyled className='main-menu-logo'>
      <ImgWrapperStyled
        component='a'
        href={process.env.PUBLIC_URL}
        target='_self'
      >
        <img src={HairSalonPHLogo} alt={t("logoAlt") as string}></img>
      </ImgWrapperStyled>
    </LogoStyled>
  );
};

export default Logo;
