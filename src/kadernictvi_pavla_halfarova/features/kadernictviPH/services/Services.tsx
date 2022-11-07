import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import SectionTitle from 'shared/components/sectionTitle/SectionTitle';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
    { name: "Dámský střih", price: 200 },
    { name: "Pánský střih", price: 150 },
    { name: "Dětský střih", price: 100 },
  ];
  const coloringItems: IItemProps[] = [
    { name: "Barva (dle délky)", price: 600 },
    { name: "Melír (dle délky)", price: 800 },
    {
      name: "Speciální melírovací techniky (badayage, ombre, airtouch)",
      price: 1000,
    },
    { name: "Stahování barvy", price: 1000 },
    { name: "Hloubková regenerace", price: 500 },
  ];
  // TODO: Texty dát do překladů

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
          />
        </GridItem>
      </GridContainer>
    </ServicesStyled>
  );
});

export default Services;
