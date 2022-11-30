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
        contact='Slezská 57, 747 27 Kobeřice'
        addressMapLink='https://www.google.com/maps/place/Slezsk%C3%A1+104%2F57,+747+27+Kobe%C5%99ice/@49.9837184,18.0495592,19.25z/data=!4m5!3m4!1s0x4711616e6b5b1b55:0xcbf9c14250f2684c!8m2!3d49.9837204!4d18.0500168?hl=cs'
      />
    </Box>
  );
};

export default Contacts;
