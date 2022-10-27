import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import { useEffect } from 'react';
import CookieConsent from 'shared/components/cookieConsent/CookieConsent';
import SendPageViewToGA from 'shared/googleAnalytics/SendPageViewToGA';

const App = () => {
  // Other
  useEffect(() => {
    SendPageViewToGA();
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
