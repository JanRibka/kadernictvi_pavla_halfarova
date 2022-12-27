import { SxProps } from '@mui/material';

import EaseWrapperStyled from './styledComponents/EaseWrapperStyled';

interface IProps {
  /** Animation name */
  animation:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "ease-in-back"
    | "ease-out-back"
    | "ease-in-out-back"
    | "ease-in-sine"
    | "ease-out-sine"
    | "ease-in-out-sine"
    | "ease-in-quad"
    | "ease-out-quad"
    | "ease-in-out-qiad"
    | "ease-in-cubic"
    | "ease-out-cubic"
    | "ease-in-out-cubic"
    | "ease-in-quart"
    | "ease-out-quart"
    | "ease-in-out-quart";
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

const Ease: React.FC<IProps> = (props) => {
  return (
    <EaseWrapperStyled
      data-aos={props.animation}
      data-aos-offset={props.offset}
      data-aos-delay={props.delay}
      data-aos-duration={props.duration}
      data-aos-anchor-placement={props.anchorPlacement}
      sx={props.sx}
    >
      {props.children}
    </EaseWrapperStyled>
  );
};

export default Ease;
