import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import { useEffect, useRef } from 'react';
import CookieConsent from 'shared/components/cookieConsent/CookieConsent';
import { GoogleAnalyticsHelper } from 'shared/helpers/googleAnalyticsHelper';

const App = () => {
  // References
  const effectRan = useRef<boolean>(false);

  // Constants
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  // Other
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      effectRan.current === true
    ) {
      // TODO: Nacist y cookies hodnotu pro analzticke cookie a pokud je true, tak yavolat inicializaci
      googleAnalyticsHelper.SendPageViewToGA();
    }

    return () => {
      effectRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //TODO: https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3
  //TODO: Sjednotit písma
  // TODO: GA hlásí v konzoli nějaký warning
  return (
    <>
      <Layout />
      <CookieConsent />
    </>
  );
};

export default App;
