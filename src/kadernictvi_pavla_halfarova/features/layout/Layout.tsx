import { createRef, SyntheticEvent, useRef, useState } from 'react';

import { Box } from '@mui/system';

import KadernictviPage from '../pages/KadernictviPage';
import Footer from './Footer';
import NavBar from './NavBar/NavBar';

const Layout = () => {
  // State
  const [seldTab, setSeldTab] = useState<number>(1);

  // Functions
  const TabSelectOnChangeAction = (
    event: SyntheticEvent<Element, Event>,
    value: number
  ) => {
    setSeldTab(value);
  };

  const ref1 = createRef<HTMLDivElement>();
  const ref2 = useRef();
  console.log(ref1);
  // const ref = useRef({ ref1, ref2 });
  const ref = useRef();
  // console.log(ref1);
  // console.log(ref2);
  console.log(ref);
  const r = ref;
  var x = ref.current;
  debugger;
  return (
    <Box display='flex' flexDirection='column'>
      <NavBar
        tabSelectOnChangeAction={TabSelectOnChangeAction}
        seldTab={seldTab}
      />
      <KadernictviPage ref={ref} />
      <Footer />
    </Box>
  );
};

export default Layout;
