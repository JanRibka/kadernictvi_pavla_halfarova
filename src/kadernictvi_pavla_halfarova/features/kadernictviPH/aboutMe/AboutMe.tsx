import Fade from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade';
import { forwardRef, Ref } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Description from './description/Description';
import Photo from './photo/Photo';
import AboutMeStyled from './styledComponents/AboutMeStyled';
import PhotoWrapperStyled from './styledComponents/PhotoWrapperStyled';

interface IProps {}

const AboutMe = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const theme = useTheme();
    const breakpointMdDwn: boolean = useMediaQuery(
      theme.breakpoints.down("md")
    );
    const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));
    const breakpointLgUp: boolean = useMediaQuery(theme.breakpoints.up("lg"));
    const breakpointXlUp: boolean = useMediaQuery(theme.breakpoints.up("xl"));
    const photoDirection = breakpointMdDwn ? "up" : "right";
    const descriptionDirection = breakpointMdDwn ? "up" : "left";
    const gridContainerMaxWidth: string = breakpointXlUp
      ? "1280px"
      : breakpointLgUp
      ? "1140px"
      : "100%";

    return (
      <AboutMeStyled ref={ref} data-index={1}>
        <GridContainer
          sx={{
            maxWidth: gridContainerMaxWidth,
            flexDirection: breakpointMdUp ? "row" : "column-reverse",
            alignItems: "center",
          }}
        >
          {/* Photo */}
          <PhotoWrapperStyled xs={12} md={6}>
            <Fade direction={photoDirection} once>
              <Photo />
            </Fade>
          </PhotoWrapperStyled>
          {/* Description */}
          <GridItem xs={12} md={6} alignSelf='baseline'>
            <Fade direction={descriptionDirection} once>
              <Description />
            </Fade>
          </GridItem>
        </GridContainer>
      </AboutMeStyled>
    );
  }
);

export default AboutMe;
