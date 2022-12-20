import { useTranslation } from "react-i18next";
import GridContainer from "shared/components/gridContainer/GridContainer";
import GridItem from "shared/components/gridItem/GridItem";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const GoToGallery = () => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\gallery\\gallery"]);
  const theme = useTheme();

  return (
    <GridContainer sx={{ marginTop: "50px", justifyContent: "center" }}>
      <GridItem xs={12} justifyContent='center'>
        <Box
          component='a'
          href='https://www.instagram.com/hairsalonph/'
          target='_blank'
          sx={{
            borderRadius: "23px",
            height: "46px",
            backgroundColor: theme.palette.common.third.main,
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            textDecoration: "none",
            color: theme.palette.text.primary,
            ":hover": {
              backgroundColor: theme.palette.common.third.dark,
            },
          }}
        >
          {t("goToGallery")}
        </Box>
      </GridItem>
    </GridContainer>
  );
};

export default GoToGallery;
