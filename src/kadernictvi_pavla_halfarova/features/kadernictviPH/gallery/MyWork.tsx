import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import SectionTitle from 'shared/components/sectionTitle/SectionTitle';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Photos from './photos/Photos';
import GalleryStyled from './styledComponents/MyWorkStyled';

interface IProps {}

const MyWork = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Consts
  const theme = useTheme();
  const { t } = useTranslation(["kadernictviPH\\myWork\\myWork"]);
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
    <GalleryStyled ref={ref}>
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
    </GalleryStyled>
  );
});

export default MyWork;
