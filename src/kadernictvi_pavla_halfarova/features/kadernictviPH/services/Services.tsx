import Fade from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade';
import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import SectionTitle from 'shared/components/sectionTitle/SectionTitle';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import hairColoring from './img/hairColoring.png';
import hairCut from './img/hairCut.png';
import { IItemProps } from './service/content/item/Item';
import Service from './service/Service';
import ServicesStyled from './styledComponents/ServicesStyled';

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
  const cuttingItems: IItemProps[] = [
    { name: t("cutingService1Name"), price: 200 },
    { name: t("cutingService2Name"), price: 150 },
    { name: t("cutingService3Name"), price: 100 },
  ];
  const coloringItems: IItemProps[] = [
    { name: t("coloringService1Name"), price: 600 },
    { name: t("coloringService2Name"), price: 800 },
    {
      name: t("coloringService3Name"),
      price: 1000,
    },
    { name: t("coloringService4Name"), price: 1000 },
    { name: t("coloringService5Name"), price: 500 },
  ];

  return (
    <ServicesStyled ref={ref} data-index={2}>
      {/* Title */}
      <SectionTitle
        mainText={t("headerMain")}
        secondaryText={t("headerSecondary")}
        colorMain={theme.palette.text.primary}
        colorSecondary={theme.palette.common.third.main}
      />
      {/* Services */}
      <GridContainer
        sx={{
          maxWidth: gridContainerMaxWidth,
          alignItems: "baseline",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "20px",
        }}
      >
        {/* Cutting */}

        <GridItem
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
          }}
        >
          <Service
            icon={hairCut}
            iconDescription='Stříhání vlasů'
            description={t("serviceCutting")}
            items={cuttingItems}
            animation='fade-right'
          />
        </GridItem>

        {/* Coloring */}
        <GridItem
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Service
            icon={hairColoring}
            iconDescription='Barvení vlasů'
            description={t("serviceColoring")}
            items={coloringItems}
            animation='fade-left'
          />
        </GridItem>
      </GridContainer>
      <GridItem xs={12} sx={{ marginTop: "50px" }} justifyContent='center'>
        <Fade animation='fade-up'>
          <Typography sx={{ textAlign: "justify", textAlignLast: "center" }}>
            {t("priceListDesc")}
          </Typography>
        </Fade>
      </GridItem>
    </ServicesStyled>
  );
});

export default Services;
