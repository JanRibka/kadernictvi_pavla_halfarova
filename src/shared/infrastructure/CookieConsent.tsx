import { CookieConsent as AppCookieConsent } from "react-cookie-consent";
import { useTranslation } from "react-i18next";

const CookienConsent = () => {
  const { t } = useTranslation(["cookieConsent\\cookieConsent"]);

  return (
    <AppCookieConsent
      location='bottom'
      buttonText={t("buttonText")}
      cookieName='viewed_cookie_policy'
      style={{ background: "rgba(12, 35, 43, 0.8)" }}
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
