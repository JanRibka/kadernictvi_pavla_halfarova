import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import CookieConsent from 'react-cookie-consent';

function App() {
  return (
    <>
      <Layout />
      <CookieConsent
        location='bottom'
        buttonText='Rozumím'
        cookieName='viewed_cookie_policy'
        style={{ background: "rgba(12, 35, 43, 0.8)" }}
        buttonStyle={{ 
          color: "#4e503b", 
          fontSize: "13px",
          height: "30px",
          borderRadius: "10px"
        }}
        expires={150}
      >
        Tyto stránky používají cookies pro funkčnost webových stránek. Používáním tohoto webu s tím souhlasíte.        
      </CookieConsent>
    </>
  );
}

export default App;
