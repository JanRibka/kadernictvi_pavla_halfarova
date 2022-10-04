import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import CookieConsent from 'shared/infrastructure/CookieConsent';

// TODO: Přidat obrazovku pro to, že není iternetové spojení. Pčidat evemt listener na internetové spojení. Vzor YT. https://dev.to/sagartrimukhe/no-internet-connection-wrapper-for-react-apps-5dl8
const App = () => {
  //TODO: https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3
  return (
    <>
      <Layout />
      <CookieConsent />
    </>
  );
};

export default App;
