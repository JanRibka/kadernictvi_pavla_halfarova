import { CookieConsent as AppCookieConsent } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import InitGA from 'shared/googleAnalytics/InitGA';

const CookienConsent = () => {
  const { t } = useTranslation(["cookieConsent\\cookieConsent"]);

  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      InitGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };

  return (
    <AppCookieConsent
      location='bottom'
      buttonText={t("buttonText")}
      cookieName='viewed_cookie_policy'
      style={{ background: "rgba(12, 35, 43, 0.8)" }}
      onAccept={handleAcceptCookie}
      buttonStyle={{
        color: "#4e503b",
        fontSize: "13px",
        height: "30px",
        borderRadius: "10px",
      }}
      expires={150}
    >
      {t("mainText")}
    </AppCookieConsent>
  );
};

export default CookienConsent;
