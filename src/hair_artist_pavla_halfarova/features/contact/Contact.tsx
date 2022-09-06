import 'shared/styles/scss/effects/hover.scss';

import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import AppContact from 'shared/components/contact/AppContact';
import AppGoogleMapsIframe from 'shared/components/googleMap/AppGoogleMapsIframe';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import { ContactTypeEnum } from 'shared/enums/ContactTypeEnum';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Divider, Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { SxProps, useTheme } from '@mui/material/styles';

interface IProps {}

const Contact = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const theme = useTheme();
    const { t } = useTranslation(["contact\\contact"]);
    const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));
    const breakpointLgUp: boolean = useMediaQuery(theme.breakpoints.up("lg"));
    const breakpointXlUp: boolean = useMediaQuery(theme.breakpoints.up("xl"));

    // Styles
    const componentWrapperStyle: SxProps = {
      display: "flex",
      justifyContent: "center",
      padding: "4em 15px",
      backgroundColor: theme.palette.primary.main,
    };

    const gridContainerMaxWidth: string = breakpointXlUp
      ? "1450px"
      : breakpointLgUp
      ? "1140px"
      : breakpointMdUp
      ? "860px"
      : "100%";

    const gridContainerStyle: SxProps = {
      maxWidth: gridContainerMaxWidth,
    };
    const telMailWrapperStyle: SxProps = {
      display: "flex",
      flexDirection: breakpointMdUp ? "row" : "column",
    };

    const socialButonStyle: SxProps = {
      display: "flex !important",
      alignItems: "center",
      margin: "0 15px",
      svg: {
        margin: "5px",
        color: theme.palette.secondary.main,
      },
      ".MuiTypography-root": {
        color: theme.palette.text.primary,
      },
      ":link": {
        textDecoration: "none",
      },
      ":visited": {
        textDecoration: "none",
      },
      ":hover": {
        textDecoration: "none",
      },
      ":active": {
        textDecoration: "none",
      },
    };

    return (
      <Box ref={ref} sx={componentWrapperStyle}>
        <GridContainer sx={gridContainerStyle}>
          <GridItem xs={12} justifyContent='center'>
            <Typography variant='h4'>{t("contact")}</Typography>
          </GridItem>
          <GridItem xs={12} sx={dividerWrapperStyle}>
            <Divider sx={dividerStyle} />
          </GridItem>
          <GridItem xs={12} md={6}>
            <Box sx={constactsWrapperStyle}>
              <Box sx={telMailWrapperStyle}>
                <AppContact
                  contactType={ContactTypeEnum.Tel}
                  contact='+420 601 123 456'
                />
                <AppContact
                  contactType={ContactTypeEnum.Mail}
                  contact='kh@sawedf.cz'
                />
              </Box>
              <AppContact
                contactType={ContactTypeEnum.Address}
                contact='Slezská 104/57, Dům, 747 27 Kobeřice'
                addressMapLink='https://www.google.com/maps/place/%C4%8Cesk%C3%A1+spo%C5%99itelna,+a.s.+-+ATM/@49.983651,18.0499473,19z/data=!4m5!3m4!1s0x4711616e6b378b61:0xc80b162cab0c5a6d!8m2!3d49.983651!4d18.0499473'
              />
              <Box sx={socialButonsWrapperStyle}>
                <Box
                  component='a'
                  href='#'
                  sx={socialButonStyle}
                  className='hvr-icon-bob'
                >
                  <InstagramIcon className='hvr-icon' />
                  <Typography variant='subtitle1'>Instagram</Typography>
                </Box>
                <Box
                  component='a'
                  href=''
                  sx={socialButonStyle}
                  className='hvr-icon-bob'
                >
                  <FacebookIcon className='hvr-icon' />
                  <Typography variant='subtitle1'>Facebook</Typography>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem xs={12} md={6} sx={appGoogleMapsIframeStyle}>
            <AppGoogleMapsIframe
              title='hair-salon-ph'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.36170952929723!2d18.049486077469826!3d49.98350549244384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711616e6b378b61%3A0xc80b162cab0c5a6d!2zxIxlc2vDoSBzcG_FmWl0ZWxuYSwgYS5zLiAtIEFUTQ!5e0!3m2!1scs!2scz!4v1661885442899!5m2!1scs!2scz'
              frameBorder=''
              style={{ border: "0" }}
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </GridItem>
        </GridContainer>
      </Box>
    );
  }
);

export default Contact;

// Styles
const appGoogleMapsIframeStyle: SxProps = {
  height: "400px",
};

const dividerWrapperStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px",
};

const dividerStyle: SxProps = {
  width: "50px",
  border: "solid 1px",
  borderRadius: "5px",
};

const constactsWrapperStyle: SxProps = {
  width: "100%",
  margin: "0 15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const socialButonsWrapperStyle: SxProps = {
  display: "flex",
  marginTop: "15px",
};
