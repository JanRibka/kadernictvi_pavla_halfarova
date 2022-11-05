import { forwardRef, Ref } from "react";
import GridContainer from "shared/components/gridContainer/GridContainer";
import GridItem from "shared/components/gridItem/GridItem";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Description from "./description/Description";
import Photo from "./photo/Photo";
import PhotoWrapperStyled from "./photo/styledComponents/PhotoWrapperStyled";
import AboutMeStyled from "./styledComponents/AboutMeStyled";

interface IProps {}
// TODO: na pozadi bude nejaky obrzek a pres nej cerna barva
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
      : breakpointMdUp
      ? "860px"
      : "100%";

    return (
      <AboutMeStyled ref={ref}>
        <GridContainer
          sx={{
            maxWidth: gridContainerMaxWidth,
            flexDirection: breakpointMdUp ? "row" : "column-reverse",
            alignItems: "center",
          }}
        >
          {/* Photo */}
          <PhotoWrapperStyled xs={12} md={6}>
            <Photo />
          </PhotoWrapperStyled>
          {/* Description */}
          <GridItem xs={12} md={6} alignSelf='baseline'>
            <Description />
          </GridItem>
        </GridContainer>
      </AboutMeStyled>
    );
  }
);

export default AboutMe;
