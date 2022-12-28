import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import { Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Logo from './logo/Logo';
import FooterStyled from './styledComponents/FooterStyled';

const Footer = () => {
  // Consts
  const theme = useTheme();
  const actYear: number = new Date().getFullYear();
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
  // TODO: Na mobilu je je text footeru spatne, opravit
  return (
    <FooterStyled component='footer'>
      <GridContainer>
        <GridItem xs={12}>
          <Box
            sx={{
              width: "100%",
              padding: "15px",
              backgroundColor: "primary.main.dark",
            }}
          >
            <Logo />
          </Box>
        </GridItem>
      </GridContainer>
      <GridContainer sx={{ backgroundColor: "common.third.main" }}>
        <Box sx={{ maxWidth: gridContainerMaxWidth, width: "100%" }}>
          <GridItem xs={12}>
            <Typography
              sx={{
                width: "100%",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                color: "text.primary",

                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                  fontSize: "0.8rem",
                },
              }}
            >
              &#169; 2022 - {actYear} Hairsalon PH,
              <Box
                sx={{ textDecoration: "none", color: "text.primary" }}
                component='a'
                href='mailto:weby.ribka@gmail.com'
              >
                {" "}
                &nbsp; Webdesign by JAN RIBKA
              </Box>
            </Typography>
          </GridItem>
        </Box>
      </GridContainer>
    </FooterStyled>
  );
};

export default Footer;
