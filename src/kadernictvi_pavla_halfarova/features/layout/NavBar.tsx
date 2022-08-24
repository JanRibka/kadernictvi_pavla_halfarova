import { useTranslation } from 'react-i18next';

import { AppBar, Box, Toolbar } from '@mui/material';
import { useEffect } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

const NavBar = () => {
  const { t } = useTranslation(["layout\\navBar"]);

  useEffect(() => {
    window.addEventListener("scroll", HeaderColorChange);

    return () => {
      window.removeEventListener("scroll", HeaderColorChange);
    }
  },[]);

  const HeaderColorChange = () => {
    const changeColorOnScrollHeight: number = 400;
    const changeColorOnScrollColor: string = "white";
    const windowScrollTop = window.pageYOffset;
debugger;
    if(windowScrollTop > changeColorOnScrollHeight){
      // document.body
      //     .getElementsByTagName("header")[0]          
      //     .classList.remove(_classes[props.Color]);
      // document.body
      //     .getElementsByTagName("header")[0]
      //     .classList.add(_classes[changeColorOnScrollColor]);
  }
  else{
      // document.body
      //     .getElementsByTagName("header")[0]
      //     .classList.add(_classes[props.Color]);
      // document.body
      //     .getElementsByTagName("header")[0]
      //     .classList.remove(_classes[changeColorOnScrollColor]);
  }
  }

  return (
    <Box flexGrow={1}>      
      <AppBar>
        <Toolbar 
          style={{color: "w"}}
        >
          <GridContainer>
            <GridItem xs={3}>
              Logo
            </GridItem>
            <GridItem xs={7}>
              Menu
            </GridItem>
            <GridItem xs={2}>
              Jazyk
            </GridItem>
          </GridContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

// Styles

