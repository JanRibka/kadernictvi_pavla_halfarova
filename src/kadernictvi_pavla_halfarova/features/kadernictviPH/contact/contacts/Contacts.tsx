import { ContactTypeEnum } from 'shared/enums/ContactTypeEnum';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Contact from './contact/Contact';

const Contacts = () => {
  // Consts
  const theme = useTheme();
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: breakpointMdUp ? "row" : "column",
      }}
    >
      {/* Telephone */}
      <Contact contactType={ContactTypeEnum.Tel} contact='+420 702 635 908' />
      {/* Email */}
      <Contact
        contactType={ContactTypeEnum.Mail}
        contact='HairSalonPH@gmail.com'
      />
      {/* Address */}
      <Contact
        contactType={ContactTypeEnum.Address}
        contact='Slezská 57, 747 27 Kobeřice'
        addressMapLink='https://goo.gl/maps/7HxtznJivoBxDWYh6'
      />
    </Box>
  );
};

export default Contacts;
