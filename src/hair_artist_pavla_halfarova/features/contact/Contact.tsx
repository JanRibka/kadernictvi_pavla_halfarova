import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import SectionTitleStyled from 'shared/styles/sectionTitle/SectionTitleStyled';

import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Contacts from './contacts/Contacts';
import ContactStyled from './ContactStyled';
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
      <ContactStyled ref={ref}>
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
            <SectionTitleStyled variant='h4'>{t("contact")}</SectionTitleStyled>
          </GridItem>
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
      </ContactStyled>
    );
  }
);

export default Contact;
