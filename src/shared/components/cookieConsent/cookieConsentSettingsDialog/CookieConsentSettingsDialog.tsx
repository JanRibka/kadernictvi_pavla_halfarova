import React, { Dispatch, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CookieItem from './cookieItem/CookieItem';
import DialogActionsStyled from './styledComponents/DialogActionsStyled';
import DialogContentStyled from './styledComponents/DialogContentStyled';
import DialogStyled from './styledComponents/DialogStyled';
import DialogTitleWrapperStyled from './styledComponents/DialogTitleWrapperStyled';

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  necCookieValue: boolean;
  setNecCookieValue: Dispatch<React.SetStateAction<boolean>>;
  diagCookieValue: boolean;
  setDiagCookieValue: Dispatch<React.SetStateAction<boolean>>;
  agreeAllOnClickAction: (event: MouseEvent<HTMLButtonElement>) => void;
  saveSettingsOnClickAction: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CookieConsentSettingsDialog = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["cookieConsent\\cookieConsent"]);

  return (
    <DialogStyled open={props.isOpen} disableScrollLock={false}>
      <DialogTitleWrapperStyled>
        <DialogTitle color='text.secondary'>
          {t("dialogSettingsHeader")}
        </DialogTitle>
        <IconButton
          onClick={() => {
            props.setIsOpen(false);
            props.setDiagCookieValue(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleWrapperStyled>

      <DialogContentStyled dividers>
        <Typography color='text.secondary' fontWeight='bold'>
          {t("dialogSettingsContentHeader")}
        </Typography>
        <Box component='p' textAlign='justify' color='text.secondary'>
          {t("dialogSettingsContentText")}
        </Box>
        <CookieItem
          cookieName={t("necCookieName")}
          cookieDescription={t("necCookieDescription")}
          value={props.necCookieValue}
          setValue={props.setNecCookieValue}
          disable={true}
        />
        <CookieItem
          cookieName={t("diagCookieName")}
          cookieDescription={t("diagCookieDescription")}
          value={props.diagCookieValue}
          setValue={props.setDiagCookieValue}
        />
      </DialogContentStyled>
      <DialogActionsStyled>
        <Button variant='contained' onClick={props.agreeAllOnClickAction}>
          {t("dialogSettingBtnAgreeAll")}
        </Button>
        <Button onClick={props.saveSettingsOnClickAction}>
          {t("dialogSettingBtnSaveSettings")}
        </Button>
      </DialogActionsStyled>
    </DialogStyled>
  );
};

export default CookieConsentSettingsDialog;
