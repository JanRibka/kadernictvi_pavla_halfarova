import { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import GridContainer from "shared/components/gridContainer/GridContainer";
import GridItem from "shared/components/gridItem/GridItem";
import SectionTitle from "shared/components/sectionTitle/SectionTitle";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Service from "./service/Service";
import ServicesStyled from "./styledComponents/ServicesStyled";

interface IProps {}

const Services = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Consts
  const theme = useTheme();
  const { t } = useTranslation(["kadernictviPH\\services\\services"]);
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
    <ServicesStyled ref={ref}>
      {/* Title */}
      <SectionTitle
        mainText={t("headerMain")}
        secondaryText={t("headerSecondary")}
        colorMain={theme.palette.text.primary}
        colorSecondary={theme.palette.common.third.main}
      />
      {/* Services */}
      <GridContainer
        sx={{ maxWidth: gridContainerMaxWidth, alignItems: "center" }}
      >
        {/* Cutting */}
        <GridItem
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
          }}
        >
          <Service />
        </GridItem>
        {/* Coloring */}
        <GridItem
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
          }}
        >
          <Service />
        </GridItem>
      </GridContainer>
    </ServicesStyled>
  );
});

export default Services;
