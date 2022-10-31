import { MouseEvent, useEffect, useState } from 'react';
import { CookieHelper } from 'shared/helpers/cookieHelper';
import { GoogleAnalyticsHelper } from 'shared/helpers/googleAnalyticsHelper';

import CookieConsentDialog from './cookieConsentDialog/CookieConsentDialog';
import CookieConsentSettingsDialog from './cookieConsentSettingsDialog/CookieConsentSettingsDialog';

// TODO: Přidat tlačítko na dialog s nastavením "Odmítnout vše". Tlačítko bude na konci a vzhled bude jako uložit nastavení
const CookienConsent = () => {
  // Consts
  const cookieExpiresIn: number = 180;
  const cookieHelper: CookieHelper = new CookieHelper();
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  // Sate
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false);
  const [necCookieValue, setNecCookieValue] = useState<boolean>(true);
  const [diagCookieValue, setDiagCookieValue] = useState<boolean>(false);

  // Other
  useEffect(() => {
    GetCookieConsentValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetCookieConsentValue = () => {
    const value: string = cookieHelper.Get("CookieConsent");

    if (value === "") {
      googleAnalyticsHelper.RemoveGA();
      setIsOpen(true);
    }
  };

  const HandleAccepAllOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      googleAnalyticsHelper.InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID); // TODO: Zmenit id na nové google analytics
    }

    cookieHelper.Set("CookieConsent", "true", cookieExpiresIn);
    setIsOpen(false);
  };

  const HandleOpenSettingsOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    setIsOpenSettings(true);
  };

  const HandleAgreeAllOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      googleAnalyticsHelper.InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }

    cookieHelper.Set("CookieConsent", "true", cookieExpiresIn);
    setIsOpenSettings(false);
    setIsOpen(false);
  };

  const HandleSaveSettingsOnClickAction = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (diagCookieValue && process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      googleAnalyticsHelper.InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }

    cookieHelper.Set("CookieConsent", "true", cookieExpiresIn);
    setIsOpenSettings(false);
    setIsOpen(false);
  };

  return (
    <>
      <CookieConsentDialog
        isOpen={isOpen}
        accepAllOnClickAction={HandleAccepAllOnClickAction}
        openSettingsOnClickAction={HandleOpenSettingsOnClickAction}
      />

      <CookieConsentSettingsDialog
        isOpen={isOpenSettings}
        setIsOpen={setIsOpenSettings}
        necCookieValue={necCookieValue}
        setNecCookieValue={setNecCookieValue}
        diagCookieValue={diagCookieValue}
        setDiagCookieValue={setDiagCookieValue}
        agreeAllOnClickAction={HandleAgreeAllOnClickAction}
        saveSettingsOnClickAction={HandleSaveSettingsOnClickAction}
      />
    </>
  );
};

export default CookienConsent;
