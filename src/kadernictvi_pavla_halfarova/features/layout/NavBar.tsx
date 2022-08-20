import { useTranslation } from 'react-i18next';

import { AppBar, Box, Toolbar } from '@mui/material';

const NavBar = () => {
  const { t } = useTranslation(["layout\\navBar"]);

  return (
    <Box flexGrow={1}>
      <AppBar>
        <Toolbar>{t("test")}</Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
