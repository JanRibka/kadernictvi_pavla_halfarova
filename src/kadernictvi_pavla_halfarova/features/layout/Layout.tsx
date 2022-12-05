import { MouseEvent, RefObject, useRef, useState } from 'react';
import { scrollIntoView } from 'seamless-scroll-polyfill';
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

      scrollIntoView(currentRef.current as Element, { behavior: "smooth" }); // TODO: otestovat na ruzn7ch prohlizecich, hlavne safari
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
