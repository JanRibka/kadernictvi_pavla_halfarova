import { ContactTypeEnum } from 'shared/enums/ContactTypeEnum';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Contact from './Contact';

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
      <Contact contactType={ContactTypeEnum.Tel} contact='+420 601 123 456' />
      {/* Email */}
      <Contact contactType={ContactTypeEnum.Mail} contact='kh@sawedf.cz' />
      {/* Address */}
      <Contact
        contactType={ContactTypeEnum.Address}
        contact='Slezská 104/57, Dům, 747 27 Kobeřice'
        addressMapLink='https://www.google.com/maps/place/%C4%8Cesk%C3%A1+spo%C5%99itelna,+a.s.+-+ATM/@49.983651,18.0499473,19z/data=!4m5!3m4!1s0x4711616e6b378b61:0xc80b162cab0c5a6d!8m2!3d49.983651!4d18.0499473'
      />
    </Box>
  );
};

export default Contacts;
