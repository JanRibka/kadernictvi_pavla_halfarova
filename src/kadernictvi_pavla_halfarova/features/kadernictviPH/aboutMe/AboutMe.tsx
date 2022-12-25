import Fade from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade';
import { forwardRef, Ref } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/system/Box';

import Description from './description/Description';
import Photo from './photo/Photo';
import AboutMeStyled from './styledComponents/AboutMeStyled';
import PhotoWrapperStyled from './styledComponents/PhotoWrapperStyled';

interface IProps {}

const AboutMe = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const theme = useTheme();
    const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));
    const breakpointLgUp: boolean = useMediaQuery(theme.breakpoints.up("lg"));
    const breakpointXlUp: boolean = useMediaQuery(theme.breakpoints.up("xl"));

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
            <Box component={"div"} className='photo-wrapper'>
              <Fade animation={breakpointMdUp ? "fade-right" : "fade-left"}>
                <Photo />
              </Fade>
            </Box>
          </PhotoWrapperStyled>
          {/* Description */}
          <GridItem xs={12} md={6} alignSelf='baseline'>
            <Fade animation={breakpointMdUp ? "fade-left" : "fade-right"}>
              <Description />
            </Fade>
          </GridItem>
        </GridContainer>
      </AboutMeStyled>
    );
  }
);

export default AboutMe;
