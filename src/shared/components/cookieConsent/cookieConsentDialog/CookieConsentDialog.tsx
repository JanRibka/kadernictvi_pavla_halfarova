import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DialogActionsStyled from './styledComponents/DialogActionsStyled';
import DialogStyled from './styledComponents/DialogStyled';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CookieConsentDialog = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["cookieConsent\\cookieConsent"]);

  return (
    <DialogStyled open={props.isOpen} disableScrollLock hideBackdrop>
      <DialogTitle>{t("dialogHeader")}</DialogTitle>
      <DialogContent>
        <DialogContentText color='text.primary' align='justify'>
          {t("dialogContent")}
        </DialogContentText>
      </DialogContent>
      <DialogActionsStyled>
        <Button variant='contained'>{t("dialogBtnAcceptAll")}</Button>
        <Button variant='text'>{t("dialogBtnSettings")}</Button>
      </DialogActionsStyled>
    </DialogStyled>
  );
};

export default CookieConsentDialog;
