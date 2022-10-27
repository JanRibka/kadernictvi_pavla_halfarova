import { Dispatch } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';

import AccordionDetailsStyled from './styledComponents/AccordionDetailsStyled';
import AccordionStyled from './styledComponents/AccordionStyled';
import AccordionSummaryStyled from './styledComponents/AccordionSummaryStyled';
import AccordionSummaryWrapperStyled from './styledComponents/AccordionSummaryWrapperStyled';

interface IProps {
  cookieName: string;
  cookieDescription: string;
  disable?: boolean;
  value: boolean;
  setValue: Dispatch<React.SetStateAction<boolean>>;
}

const CookieItem: React.FC<IProps> = (props) => {
  return (
    <AccordionStyled>
      <AccordionSummaryWrapperStyled>
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
          {props.cookieName}
        </AccordionSummaryStyled>
        <Switch
          checked={props.value}
          disabled={props.disable}
          onClick={() => {
            props.setValue(!props.value);
          }}
        />
      </AccordionSummaryWrapperStyled>
      <AccordionDetailsStyled>{props.cookieDescription}</AccordionDetailsStyled>
    </AccordionStyled>
  );
};

CookieItem.defaultProps = {
  disable: false,
};

export default CookieItem;
