import Layout from 'hair_artist_pavla_halfarova/features/layout/Layout';
import CookieConsent from 'shared/infrastructure/CookieConsent';

// TODO: Přidat obrazovku pro to, že není iternetové spojení. Pčidat evemt listener na internetové spojení. Vzor YT
function App() {
  return (
    <>
      <Layout />
      <CookieConsent />
    </>
  );
}

export default App;
