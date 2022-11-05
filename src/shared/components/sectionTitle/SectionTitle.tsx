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
  colorMain: string;
  colorSecondary: string;
  textAlign?: "center" | "start";
}

const SectionTitle: React.FC<IProps> = (props) => {
  return (
    <SectionTitleStyled alignItems={props.textAlign}>
      <Typography
        className='main-text'
        variant={props.variantMainText}
        color={props.colorMain}
      >
        {props.mainText}
      </Typography>
      <Typography
        className='secondary-text'
        variant='h5'
        color={props.colorSecondary}
      >
        {props.secondaryText}
      </Typography>
    </SectionTitleStyled>
  );
};

// Default props
SectionTitle.defaultProps = {
  variantMainText: "h2",
  textAlign: "center",
};

export default SectionTitle;
