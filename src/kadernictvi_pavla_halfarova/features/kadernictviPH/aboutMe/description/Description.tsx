import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import TypographyStyled from './styledComponents/TypographyStyled';

const Description = () => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\aboutMe\\aboutMe"]);

  return (
    <Box>
      <TypographyStyled>{t("description1")}</TypographyStyled>
      <br />
      <TypographyStyled>{t("description2")}</TypographyStyled>
      <br />
      <TypographyStyled>{t("description3")}</TypographyStyled>
    </Box>
  );
};

export default Description;
