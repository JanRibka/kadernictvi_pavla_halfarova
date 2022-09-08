import { useTranslation } from 'react-i18next';
import { ContactTypeEnum } from 'shared/enums/ContactTypeEnum';
import EnvelopeIcon from 'shared/icons/envelope/EnvelopeIcon';

import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import AppContactIconWrapperStyled from './AppContactIconWrapperStyled';
import AppContactWrapperStyled from './AppContactWrapperStyled';

interface IProps {
  contactType: ContactTypeEnum;
  contact: string;
  addressMapLink?: string;
}

const AppContact = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["shared\\contact\\appContact"]);
  const theme = useTheme();
  const href: string | undefined =
    props.contactType === ContactTypeEnum.Tel
      ? "tel:" + props.contact.replaceAll(" ", "")
      : props.contactType === ContactTypeEnum.Mail
      ? "mailto:" + props.contact
      : props.addressMapLink;

  const wrapperClassName: string =
    props.contactType === ContactTypeEnum.Tel
      ? "hvr-icon-ringing-bell"
      : props.contactType === ContactTypeEnum.Mail
      ? "hvr-icon-email"
      : "hvr-icon-bob";

  return (
    <AppContactWrapperStyled
      component='a'
      href={href}
      target={
        props.contactType === ContactTypeEnum.Address ? "_blank" : undefined
      }
      className={wrapperClassName}
    >
      {/* Icon */}
      <AppContactIconWrapperStyled>
        {(() => {
          switch (props.contactType) {
            case ContactTypeEnum.Tel:
              return <PhoneIcon className={"ringing-bell"} />;

            case ContactTypeEnum.Mail:
              return <EnvelopeIcon />;

            case ContactTypeEnum.Address:
              return <PlaceIcon className='hvr-icon' />;
          }
        })()}
      </AppContactIconWrapperStyled>

      {/* Label */}
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

      {/* Constat */}
      <Typography
        variant='h6'
        textAlign='center'
        color={theme.palette.text.primary}
      >
        {props.contact}
      </Typography>
    </AppContactWrapperStyled>
  );
};

export default AppContact;
