import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import { useEffect } from 'react';
import SendPageViewToGA from 'shared/googleAnalytics/SendPageViewToGA';
import CookieConsent from 'shared/infrastructure/cookieConsent/CookieConsent';

const App = () => {
  // Other
  useEffect(() => {
    SendPageViewToGA();
  }, []);
  //TODO: https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3
  return (
    <>
      <Layout />
      <CookieConsent />
    </>
  );
};

export default App;
