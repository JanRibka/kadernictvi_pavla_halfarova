import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const NavLinks = () => {
  const { t } = useTranslation(["layout\\mainMenu"]);

  return (
    <Box>
      <Button>{t("intro")}</Button>
      <Button>{t("services")}</Button>
      <Button>{t("gallery")}</Button>
      <Button>{t("contact")}</Button>
    </Box>
  );
};

export default NavLinks;
