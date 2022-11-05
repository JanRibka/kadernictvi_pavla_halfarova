import { useTranslation } from "react-i18next";
import SectionTitle from "shared/components/sectionTitle/SectionTitle";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import TypographyStyled from "./styledComponents/TypographyStyled";

const Description = () => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\aboutMe\\aboutMe"]);
  const theme = useTheme();
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ margin: "0 40px" }}>
      <SectionTitle
        mainText={t("headerMain")}
        secondaryText={t("headerSecondary")}
        colorMain={theme.palette.text.secondary}
        colorSecondary={theme.palette.common.third.main}
        textAlign={breakpointMdUp ? "start" : "center"}
        variantMainText='h1'
      />
      <TypographyStyled>{t("description1")}</TypographyStyled>
      <br />
      <TypographyStyled>{t("description2")}</TypographyStyled>
      <br />
      <TypographyStyled>{t("description3")}</TypographyStyled>
    </Box>
  );
};

export default Description;
