import { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import GridContainer from "shared/components/gridContainer/GridContainer";
import GridItem from "shared/components/gridItem/GridItem";

import { Divider, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import Contacts from "./contacts/Contacts";
import GoogleMaps from "./googleMaps/GoogleMaps";
import SocialIcons from "./socialIcons/SocialIcons";

interface IProps {}

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
          justifyContent: "center",
          padding: "4em 15px",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <GridContainer sx={{ maxWidth: gridContainerMaxWidth }}>
          {/* Title */}
          <GridItem xs={12} justifyContent='center'>
            <Typography variant='h4'>{t("contact")}</Typography>
          </GridItem>
          {/* Divider */}
          <GridItem
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
