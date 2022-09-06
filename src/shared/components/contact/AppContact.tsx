import { NONAME } from 'dns';
import { useTranslation } from 'react-i18next';
import { ContactTypeEnum } from 'shared/enums/ContactTypeEnum';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import Box from '@mui/material/Box';
import { SxProps, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
    width: "2em",
    paddingTop: "0.5em",
    color: theme.palette.secondary.main,
  };

  return (
    <Box
      component='a'
      href={href}
      target={
        props.contactType === ContactTypeEnum.Address ? "_blank" : undefined
      }
      sx={appContactWrapperStyle}
    >
      <Box sx={iconWrapperStyle}>
        {(() => {
          switch (props.contactType) {
            case ContactTypeEnum.Tel:
              return <PhoneIcon />;

            case ContactTypeEnum.Mail:
              return <EmailIcon />;

            case ContactTypeEnum.Address:
              return <PlaceIcon />;
          }
        })()}
      </Box>
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

        <Typography variant='h6' color={theme.palette.text.secondary}>
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
  margin: "10px",
  ":link": {
    textDecoration: "none",
  },
  ":visited": {
    textDecoration: "none",
  },
  ":hover": {
    textDecoration: "none",
    svg: {
      transform: "scale(1.25, 1.25)",
    },
  },
  ":active": {
    textDecoration: "none",
  },
};
