import Fade from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade';
import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import SectionTitle from 'shared/components/sectionTitle/SectionTitle';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import GoToGallery from './goToGallery/GoToGallery';
import Photos from './photos/Photos';
import GalleryStyled from './styledComponents/GalleryStyled';

interface IProps {}
const Gallery = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Consts
  const theme = useTheme();
  const { t } = useTranslation(["kadernictviPH\\gallery\\gallery"]);
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));
  const breakpointLgUp: boolean = useMediaQuery(theme.breakpoints.up("lg"));
  const breakpointXlUp: boolean = useMediaQuery(theme.breakpoints.up("xl"));
  const gridContainerMaxWidth: string = breakpointXlUp
    ? "1450px"
    : breakpointLgUp
    ? "1140px"
    : breakpointMdUp
    ? "860px"
    : "100%";

  return (
    <GalleryStyled ref={ref} data-index={3}>
      <GridContainer
        sx={{ maxWidth: gridContainerMaxWidth, alignItems: "center" }}
      >
        {/* Title */}
        <GridItem
          xs={12}
          sx={{
            justifyContent: "center",
          }}
        >
          <SectionTitle
            mainText={t("headerMain")}
            secondaryText={t("headerSecondary")}
            colorMain={theme.palette.text.secondary}
            colorSecondary={theme.palette.common.third.main}
          />
        </GridItem>
      </GridContainer>
      {/* Fotky */}
      <Photos />
      {/* Zobrazit celou galerii */}
      <Fade animation='fade-up'>
        <GoToGallery />
      </Fade>
    </GalleryStyled>
  );
});

export default Gallery;
