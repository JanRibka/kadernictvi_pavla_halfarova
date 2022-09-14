import { MouseEvent } from 'react';

import Box from '@mui/material/Box';

import NavLinks from '../navLinks/NavLinks';
import NavLinksStyled from './navLinks/NavLinksStyled';

interface IProps {
  onChangeAction: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
  seldTab: number;
}

const MainMenu = (props: IProps) => {
  return (
    <Box display='flex' alignItems='center'>
      <NavLinksStyled>
        <NavLinks
          handleOnClick={props.onChangeAction}
          actValue={props.seldTab}
        />
      </NavLinksStyled>
    </Box>
  );
};

export default MainMenu;
