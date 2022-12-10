import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import SectionTitle from 'shared/components/sectionTitle/SectionTitle';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Contacts from './contacts/Contacts';
import GoogleMaps from './googleMaps/GoogleMaps';
import SocialIcons from './socialIcons/SocialIcons';
import ContactStyled from './styledComponents/ContactStyled';
import ContactsWrapperStyled from './styledComponents/ContactsWrapperStyled';

interface IProps {}
//TODO: P5idal bych tu i provozn9 dobu
const Contact = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const theme = useTheme();
    const { t } = useTranslation(["kadernictviPH\\contact\\contact"]);
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
      <ContactStyled ref={ref} data-index={4}>
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
              colorMain={theme.palette.text.primary}
              colorSecondary={theme.palette.common.third.main}
            />
          </GridItem>
          {/* Constacts */}
          <GridItem xs={12}>
            <ContactsWrapperStyled>
              {/* Tel, email, address */}
              <Contacts />
              {/* Social Icons */}
              <SocialIcons />
            </ContactsWrapperStyled>
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
