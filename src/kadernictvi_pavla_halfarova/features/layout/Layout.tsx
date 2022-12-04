import { MouseEvent, RefObject, useRef, useState } from 'react';
import { GoogleAnalyticsHelper } from 'shared/helpers/googleAnalyticsHelper';

import { Box } from '@mui/system';

import KadernictviPHPage from '../pages/KadernictviPHPage';
import Footer from './footer/Footer';
import NavBar from './NavBar/NavBar';

const Layout = () => {
  // References
  const ref = useRef<Object>(null);

  // Constants
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  // State
  const [seldTab, setSeldTab] = useState<number>(0);
  // TODO: P5ep9n8n9 tla49tek pri skrolovan9 https://codepen.io/alvarotrigo/pen/MWvXmja
  // Other
  const TabSelectOnChangeAction = (
    event: MouseEvent<HTMLButtonElement> | undefined
  ) => {
    const name: string = event?.currentTarget.name ?? "";

    if (!!ref) {
      const auxRef = ref?.current as any;
      const currentRef = auxRef[name] as RefObject<HTMLDivElement>;
      // TODO: scrollIntoView nefunguje na safari. Zkusit toto https://www.npmjs.com/package/seamless-scroll-polyfill  a zjistit, zda funguje na vsech prohlizecich. Nebo to nechat a nechat to n2k7m vyzkou3et
      currentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    googleAnalyticsHelper.SendEventToGA(
      "Hlavní menu",
      name,
      "Přechod do sekce " + name
    );
  };

  // TODO: Dole bude tlačítko pro scroll nahoru
  return (
    <Box display='flex' flexDirection='column'>
      <NavBar
        tabSelectOnChangeAction={TabSelectOnChangeAction}
        seldTab={seldTab}
      />
      <KadernictviPHPage ref={ref} />
      <Footer />
    </Box>
  );
};

export default Layout;
