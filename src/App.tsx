import 'animate.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import Layout from 'kadernictvi_pavla_halfarova/features/layout/Layout';
import { useEffect, useRef } from 'react';
import CookieConsent from 'shared/components/cookieConsent/CookieConsent';
import CookieConstentModel from 'shared/components/cookieConsent/CookieConsentModel';
import {
    GetCookieConsentCookieValue, GoogleAnalyticsHelper
} from 'shared/helpers/googleAnalyticsHelper';

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
      const consent: CookieConstentModel = GetCookieConsentCookieValue();

      if (consent.diag === true) {
        if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
          googleAnalyticsHelper.InitGA(
            process.env.REACT_APP_GOOGLE_ANALYTICS_ID
          );
        }
      }

      googleAnalyticsHelper.SendPageViewToGA();

      // Inicialiyace AOS
      AOS.init({
        once: true,
        duration: 1000,
        delay: 0,
        offset: 120,
        easing: "ease-in-out",
      });
    }

    return () => {
      effectRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //TODO: Sjednotit písma
  return (
    <>
      <Layout />
      <CookieConsent />
    </>
  );
};

export default App;
