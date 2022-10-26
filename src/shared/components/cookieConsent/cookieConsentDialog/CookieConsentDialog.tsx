import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
      <DialogTitle>{t("dialoHeader")}</DialogTitle>
      <DialogContent>
        <DialogContentText>asd</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>as</Button>
        <Button>asd</Button>
      </DialogActions>
    </DialogStyled>
  );
};

export default CookieConsentDialog;
