// import "shared/styles/scss/effects/hover.scss";

import { useTranslation } from 'react-i18next';
import { ContactTypeEnum } from 'shared/enums/ContactTypeEnum';
import EnvelopeIcon from 'shared/icons/envelope/EnvelopeIcon';

import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import Box from '@mui/material/Box';
import { SxProps, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import classes from './AppContact.module.scss';

interface IProps {
  contactType: ContactTypeEnum;
  contact: string;
  addressMapLink?: string;
}

const AppContact = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["shared\\contact\\appContact"]);
  const theme = useTheme();
  const href =
    props.contactType === ContactTypeEnum.Tel
      ? "tel:" + props.contact.replaceAll(" ", "")
      : props.contactType === ContactTypeEnum.Mail
      ? "mailto:" + props.contact
      : props.addressMapLink;

  // Styles
  const iconWrapperStyle: SxProps = {
    color: theme.palette.secondary.main,
    height: "48px",
    width: "48px",
    svg: {
      fontSize: "xxx-large",
    },
  };

  return (
    <Box
      component='a'
      href={href}
      target={
        props.contactType === ContactTypeEnum.Address ? "_blank" : undefined
      }
      sx={appContactWrapperStyle}
      className={classes.ringingBell + " " + classes.textShine}
    >
      {/* Icon */}
      <Box sx={iconWrapperStyle}>
        {(() => {
          switch (props.contactType) {
            case ContactTypeEnum.Tel:
              return (
                <PhoneIcon
                  className={classes.faaRing + " " + classes.animated}
                />
              );

            case ContactTypeEnum.Mail:
              return <EnvelopeIcon />;

            case ContactTypeEnum.Address:
              return <PlaceIcon className='hvr-icon' />;
          }
        })()}
      </Box>
      {/* Label */}
      <Box>
        <Typography variant='h6' color={theme.palette.text.primary}>
          {(() => {
            switch (props.contactType) {
              case ContactTypeEnum.Tel:
                return t("phone");

              case ContactTypeEnum.Mail:
                return t("email");

              case ContactTypeEnum.Address:
                return t("address");
            }
          })()}
        </Typography>
      </Box>
      {/* Constct */}
      <Box>
        <Typography
          variant='h6'
          color={theme.palette.text.secondary}
          className={classes.efectShine}
        >
          {props.contact}
        </Typography>
      </Box>
    </Box>
  );
};

export default AppContact;

// Styles
const appContactWrapperStyle: SxProps = {
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
  ":link": {
    textDecoration: "none",
  },
  ":visited": {
    textDecoration: "none",
  },
  ":hover": {
    textDecoration: "none",
    ".top-side": {
      transform: "rotateX(0deg)",
      zIndex: 3,
      transitionDelay: "0.3s",
    },
    ".image": {
      top: "-70%",
      zIndex: 3,
      transitionDelay: "0.6s",
    },
  },
  ":active": {
    textDecoration: "none",
  },
};
