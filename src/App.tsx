import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import { useEffect } from 'react';
import CookieConsent from 'shared/components/cookieConsent/CookieConsent';
import { GoogleAnalyticsHelper } from 'shared/helpers/googleAnalyticsHelper';

const App = () => {
  // Constants
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  // Other
  useEffect(() => {
    googleAnalyticsHelper.SendPageViewToGA();
  }, []);
  //TODO: https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3
  //TODO: Sjednotit písma
  return (
    <>
      <Layout />
      <CookieConsent />
    </>
  );
};

export default App;
