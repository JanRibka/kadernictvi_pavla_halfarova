import { useTranslation } from 'react-i18next';
import SectionTitle from 'shared/components/sectionTitle/SectionTitle';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import scissors from './img/scissors.png';
import DescriptionStyled from './styledComponents/DescriptionStyled';
import ScissorsWrapperStyled from './styledComponents/ScissorsWrapperStyled';
import TypographyStyled from './styledComponents/TypographyStyled';

const Description = () => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\aboutMe\\aboutMe"]);
  const theme = useTheme();
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <DescriptionStyled>
      <SectionTitle
        mainText={t("headerMain")}
        secondaryText={t("headerSecondary")}
        colorMain={theme.palette.text.secondary}
        colorSecondary={theme.palette.text.secondary}
        textAlign={breakpointMdUp ? "start" : "center"}
        variantMainText='h2'
      />
      <TypographyStyled>{t("description1")}</TypographyStyled>
      <br />
      <TypographyStyled>{t("description2")}</TypographyStyled>
      <br />
      <TypographyStyled>{t("description3")}</TypographyStyled>
      <ScissorsWrapperStyled>
        <img src={scissors} alt='Nůžky' loading='lazy' />
      </ScissorsWrapperStyled>
    </DescriptionStyled>
  );
};

export default Description;
