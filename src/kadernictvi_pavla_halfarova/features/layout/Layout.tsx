import { Box } from '@mui/system';
import KadernictviPage from '../pages/KadernictviPage';

import Footer from './Footer';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <NavBar />
        <KadernictviPage />
      <Footer />
    </Box>
  );
};

export default Layout;
