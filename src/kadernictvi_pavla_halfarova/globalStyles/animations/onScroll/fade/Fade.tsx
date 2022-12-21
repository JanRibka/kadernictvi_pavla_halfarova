import { SxProps } from '@mui/material';

import FadeWrapperStyled from './styledComponents/FadeWrapperStyled';

interface IProps {
  /** Animation name */
  animation:
    | "fade"
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "fade-up-right"
    | "fade-up-left"
    | "fade-down-right"
    | "fade-down-left";
  anchorPlacement?:
    | "top-bottom"
    | "top-center"
    | "top-top"
    | "center-bottom"
    | "center-center"
    | "center-top"
    | "bottom-bottom"
    | "bottom-center"
    | "bottom-top";
  /** Animation duration (ms) */
  duration?: number;
  /** Delay before the animation starts (ms) */
  delay?: number;
  /** Distance to start the animation (related to the browser bottom) (px) */
  offset?: number;
  children: JSX.Element;
  sx?: SxProps;
}

const Fade: React.FC<IProps> = (props) => {
  return (
    <FadeWrapperStyled
      data-aos={props.animation}
      data-aos-offset={props.offset}
      data-aos-delay={props.delay}
      data-aos-duration={props.duration}
      data-aos-anchor-placement={props.anchorPlacement}
      sx={props.sx}
    >
      {props.children}
    </FadeWrapperStyled>
  );
};

export default Fade;
