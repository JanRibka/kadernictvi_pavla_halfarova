import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import SectionTitle from 'shared/styles/sectionTitle/SectionTitleStyled';

import { Divider, Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Contacts from './contacts/Contacts';
import GoogleMaps from './googleMaps/GoogleMaps';
import SocialIcons from './socialIcons/SocialIcons';

interface IProps {}
// TODO: na pozadi bude nejaky obrzek a pres nej cerna barva
const Contact = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const theme = useTheme();
    const { t } = useTranslation(["contact\\contact"]);
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
      <Box
        ref={ref}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "4em 0px",
          backgroundColor: theme.palette.primary.main,
        }}
      >
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
            <SectionTitle variant='h4'>{t("contact")}</SectionTitle>
          </GridItem>
          {/* Divider */}
          {/* <GridItem
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <Divider
              sx={{ width: "50px", border: "solid 1px", borderRadius: "5px" }}
            />
          </GridItem> */}
          {/* Constacts */}
          <GridItem xs={12}>
            <Box
              sx={{
                width: "100%",
                margin: "0 15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Tel, email, address */}
              <Contacts />
              {/* Social Icons */}
              <SocialIcons />
            </Box>
          </GridItem>
        </GridContainer>
        <GridContainer>
          {/* Map */}
          <GridItem height='400px' xs={12}>
            <GoogleMaps />
          </GridItem>
        </GridContainer>
      </Box>
    );
  }
);

export default Contact;
