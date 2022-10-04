import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import { useEffect } from 'react';
import SendPageViewToGA from 'shared/googleAnalytics/SendPageViewToGA';
import CookieConsent from 'shared/infrastructure/cookieConsent/CookieConsent';

// TODO: Přidat obrazovku pro to, že není iternetové spojení. Pčidat evemt listener na internetové spojení. Vzor YT. https://dev.to/sagartrimukhe/no-internet-connection-wrapper-for-react-apps-5dl8
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
