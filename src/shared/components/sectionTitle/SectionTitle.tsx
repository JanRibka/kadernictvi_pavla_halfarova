import Typography from '@mui/material/Typography';

import SectionTitleStyled from './styledComponents/SectionTitleStyled';

interface IProps {
  variantMainText?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  mainText: string;
  secondaryText: string;
  color?: "primary" | "secondary";
}

const SectionTitle: React.FC<IProps> = (props) => {
  return (
    <SectionTitleStyled>
      <Typography className='main-text' variant={props.variantMainText}>
        {props.mainText}
      </Typography>
      <Typography className='secondary-text' variant='h5'>
        {props.secondaryText}
      </Typography>
    </SectionTitleStyled>
  );
};

// Default props
SectionTitle.defaultProps = {
  variantMainText: "h2",
  color: "primary",
};

export default SectionTitle;
