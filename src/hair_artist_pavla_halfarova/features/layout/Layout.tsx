import { createRef, MouseEvent, SyntheticEvent, useRef, useState } from 'react';

import { Box } from '@mui/system';

import HairArtistPHPage from '../pages/HairArtistPHPage';
import Footer from './Footer';
import NavBar from './NavBar/NavBar';

const Layout = () => {
  // State
  const [seldTab, setSeldTab] = useState<number>(1);

  // Other
  const TabSelectOnChangeAction = (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setSeldTab(value);
  };

  const TabSelectMobileOnClickAction = (event: MouseEvent<HTMLLIElement>) => {
    debugger;
    setSeldTab(event.currentTarget.value);
  };

  const ref1 = createRef<HTMLDivElement>();
  const ref2 = useRef();
  console.log(ref1);
  // const ref = useRef({ ref1, ref2 });
  const ref = useRef();
  // console.log(ref1);
  // console.log(ref2);
  console.log(ref);

  return (
    <Box display='flex' flexDirection='column'>
      <NavBar
        tabSelectOnChangeAction={TabSelectOnChangeAction}
        tabSelectMobileOnClickAction={TabSelectMobileOnClickAction}
        seldTab={seldTab}
      />
      <HairArtistPHPage ref={ref} />
      <Footer />
    </Box>
  );
};

export default Layout;
