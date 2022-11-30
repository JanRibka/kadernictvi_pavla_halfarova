import { ContactTypeEnum } from 'shared/enums/ContactTypeEnum';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Contact from './contact/Contact';

const Contacts = () => {
  // Consts
  const theme = useTheme();
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));
  // TODO: Dopis bude trochu nizzsi, pro zavirani prekryva obalku
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
        contact='Slezská 104/57, Dům, 747 27 Kobeřice'
        addressMapLink='https://www.google.com/maps/search/Slezsk%C3%A1+104%2F57,+D%C5%AFm,+747+27+Kobe%C5%99ice/@49.9836586,18.0493027,19z'
      />
    </Box>
  );
};

export default Contacts;
