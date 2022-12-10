import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import { Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import FooterStyled from './styledComponents/FooterStyled';

const Footer = () => {
  // Consts
  const theme = useTheme();
  const breakpointMdUp: boolean = useMediaQuery(theme.breakpoints.up("md"));
  const breakpointLgUp: boolean = useMediaQuery(theme.breakpoints.up("lg"));
  const breakpointXlUp: boolean = useMediaQuery(theme.breakpoints.up("xl"));
  const gridContainerMaxWidth: string = breakpointXlUp
    ? "1450px"
    : breakpointLgUp
    ? "1140px"
    : breakpointMdUp
    ? "860px"
    : "100%";

  return (
    <FooterStyled>
      <GridContainer>
        <GridItem xs={12}>
          <Box
            sx={{
              width: "100%",
              height: "3rem",
              backgroundColor: "secondary.main",
            }}
          ></Box>
        </GridItem>
      </GridContainer>
      <GridContainer sx={{ maxWidth: gridContainerMaxWidth }}>
        <GridItem xs={12}>
          <Typography
            sx={{
              width: "100%",
              height: "4rem",
              backgroundColor: "primary.dark",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              color: "#7E7E7E",

              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
              },
            }}
          >
            &#169; 2022 Hairsalon PH,
            <Box
              sx={{ textDecoration: "none", color: "#7E7E7E" }}
              component='a'
              href='mailto:weby.ribka@gmail.com'
            >
              {" "}
              &nbsp; Webdesign by JAN RIBKA
            </Box>
          </Typography>
        </GridItem>
      </GridContainer>
    </FooterStyled>
  );
};
// TODO: V případě použití administrace napojit odkaz na Copyright 2022
export default Footer;
