import { useTranslation } from 'react-i18next';

import HairSalonPHLogo from '../../../../../shared/img/logo/logo_hairsalon_ph.svg';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyles';
import LogoStyled from './styledComponents/LogoStyled';

const Logo = () => {
  // Consts
  const { t } = useTranslation(["layout\\logo"]);

  return (
    <LogoStyled>
      <ImgWrapperStyled
        component='a'
        href={process.env.PUBLIC_URL}
        title='Hairsalon PH'
        target='_self'
      >
        <img src={HairSalonPHLogo} alt={t("logoAlt") as string}></img>
      </ImgWrapperStyled>
    </LogoStyled>
  );
};

export default Logo;
