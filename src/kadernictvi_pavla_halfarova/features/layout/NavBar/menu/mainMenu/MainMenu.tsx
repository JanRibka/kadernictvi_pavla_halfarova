import { MouseEvent } from 'react';

import NavLinks from '../navLinks/NavLinks';
import NavLinksStyled from './styledComponents/NavLinksStyled';

interface IProps {
  onChangeAction: (event: MouseEvent<HTMLLIElement> | undefined) => void;
  seldTab: number;
}

const MainMenu = (props: IProps) => {
  return (
    <NavLinksStyled display={{ xs: "none", md: "flex" }}>
      <NavLinks handleOnClick={props.onChangeAction} seldTab={props.seldTab} />
    </NavLinksStyled>
  );
};

export default MainMenu;
