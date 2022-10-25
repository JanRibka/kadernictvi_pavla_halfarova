import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import InitGA from 'shared/googleAnalytics/InitGA';
import { CookieHelper } from 'shared/helpers/cookieHelper';

import CookieConsentStyled from './CookieConsentStyled';

// TODO: Udělat cookie podle dobra energie.cz, nebo https://www.energiezamene.cz/, nejlepe podle https://www.stesti.cz/, https://www.online-akce.cz/, https://jakoskala.cz/
, const CookienConsent = () => {
  // Consts
  const cookieHelper: CookieHelper = new CookieHelper();
  const { t } = useTranslation(["cookieConsent\\cookieConsent"]);

  debugger;

  // Sate
  // const [viewedCookiePolicy, setViewedCookiePolicy] = useState<string>("");

  // Other
  useEffect(() => {
    GetViewedCookiePolicyValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetViewedCookiePolicyValue = () => {
    const value: string = cookieHelper.Get("viewed-cookie-policy");

    if (value !== "") {
      // TODO: Nastavit na wrapper visibilitu, defauktne je display none
    }
    // setViewedCookiePolicy(value);
  };

  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };

  return (
    <CookieConsentStyled className='cookie-policy-main-dialog'>
      {t("mainText")}
    </CookieConsentStyled>

    // <AppCookieConsent
    //   location='bottom'
    //   buttonText={t("buttonText")}
    //   cookieName='viewed_cookie_policy'
    //   style={{ background: "rgba(12, 35, 43, 0.8)" }}
    //   onAccept={handleAcceptCookie}
    //   buttonStyle={{
    //     color: "#4e503b",
    //     fontSize: "13px",
    //     height: "30px",
    //     borderRadius: "10px",
    //   }}
    //   expires={150}
    // >
    //   {t("mainText")}
    // </AppCookieConsent>
  );
};

export default CookienConsent;
