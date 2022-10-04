import { createRef, MouseEvent, SyntheticEvent, useRef, useState } from 'react';
import { event as eventGA, EventArgs } from 'react-ga';
import SendEventToGA from 'shared/googleAnalytics/SsendEventToGA';

import { Box } from '@mui/system';

import KadernictviPHPage from '../pages/KadernictviPHPage';
import Footer from './Footer';
import MobileMenu from './NavBar/menu/mobileMenu/MobileMenu';
import NavBar from './NavBar/NavBar';

const Layout = () => {
  // State
  const [seldTab, setSeldTab] = useState<number>(0);

  // Other
  const TabSelectOnChangeAction = (
    event: MouseEvent<HTMLButtonElement> | undefined
  ) => {
    const name: string = event?.currentTarget.name ?? "";
    const value: number = !!event?.currentTarget.value
      ? Number(event?.currentTarget.value)
      : 0;
    setSeldTab(value);
    debugger;
    SendEventToGA(name, "Stisknutí tlačítka hlavního menu");
  };

  const TabSelectMobileOnClickAction = (
    event: MouseEvent<HTMLButtonElement> | undefined
  ) => {
    const value: number = !!event?.currentTarget.value
      ? Number(event?.currentTarget.value)
      : 0;
    setSeldTab(value);
  };

  const ref1 = createRef<HTMLDivElement>();
  const ref2 = useRef();

  // const ref = useRef({ ref1, ref2 });
  const ref = useRef();
  // console.log(ref1);
  // console.log(ref2);

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
