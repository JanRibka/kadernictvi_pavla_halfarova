import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import SectionTitle from 'shared/components/sectionTitle/SectionTitle';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Description from './description/Description';
import Photo from './photo/Photo';
import AboutMeStyled from './styledComponents/AboutMeStyled';

interface IProps {}
// TODO: na pozadi bude nejaky obrzek a pres nej cerna barva
const AboutMe = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const theme = useTheme();
    const { t } = useTranslation(["kadernictviPH\\aboutMe\\aboutMe"]);
    const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));
    const breakpointLgUp: boolean = useMediaQuery(theme.breakpoints.up("lg"));
    const breakpointXlUp: boolean = useMediaQuery(theme.breakpoints.up("xl"));
    const gridContainerMaxWidth: string = breakpointXlUp
      ? "1280px"
      : breakpointLgUp
      ? "1140px"
      : breakpointMdUp
      ? "860px"
      : "100%";

    return (
      <AboutMeStyled ref={ref}>
        {/* Title */}
        <GridContainer sx={{ alignItems: "center" }}>
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
        {/* About me */}
        <GridContainer
          sx={{ maxWidth: gridContainerMaxWidth, alignItems: "center" }}
        >
          {/* Photo */}
          <GridItem xs={12} md={6}>
            <Photo />
          </GridItem>
          {/* Description */}
          <GridItem xs={12} md={6}>
            <Description />
          </GridItem>
        </GridContainer>
      </AboutMeStyled>
    );
  }
);

export default AboutMe;
