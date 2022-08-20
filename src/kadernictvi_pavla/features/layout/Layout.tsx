import { Box } from '@mui/system';

import Footer from './Footer';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <NavBar />
      {/* TODO: Zde budou stránky */}
      <Footer />
    </Box>
  );
};

export default Layout;
