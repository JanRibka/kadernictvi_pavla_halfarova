import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import CookieConsent from 'react-cookie-consent';

function App() {
  return (
    <>
      <Layout />
      <CookieConsent
        location='bottom'
        buttonText='ROZUMÍM'
        cookieName='myAwesomeCookieName2'
        style={{ background: "rgba(12, 35, 43, 0.8)" }}
        buttonStyle={{ 
          color: "#4e503b", 
          fontSize: "13px",
          height: "35px",
          borderRadius: "25px"
        }}
        expires={150}
      >
        Používáním těchto stránek vyjadřujete souhlas s používáním cookies v
        souladu s nastavením prohlížeče.
      </CookieConsent>
    </>
  );
}

export default App;
