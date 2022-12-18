import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const GoToGallery = () => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\myWork\\myWork"]);
  const theme = useTheme();

  return (
    <GridContainer
      className='wow animate__animated animate__bounce animate__infinite'
      sx={{ marginTop: "50px", justifyContent: "center" }}
    >
      <GridItem xs={12} justifyContent='center'>
        <Button
          variant='contained'
          onClick={() =>
            window.open("https://www.instagram.com/hairsalonph/", "_blank")
          }
          sx={{
            borderRadius: "23px",
            height: "46px",
            backgroundColor: theme.palette.common.third.main,
            textTransform: "none",
            ":hover": {
              backgroundColor: theme.palette.common.third.dark,
            },
          }}
        >
          {t("goToGallery")}
        </Button>
      </GridItem>
    </GridContainer>
  );
};

export default GoToGallery;
