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
  /** Animation duration (ms) */
  duration?: number;
  /** Delay before the animation starts (ms) */
  delay?: number;
  /** Distance to start the animation (related to the browser bottom) (px) */
  offset?: number;
  children: JSX.Element;
}

const Fade: React.FC<IProps> = (props) => {
  return (
    <FadeWrapperStyled
      data-aos={props.animation}
      data-aos-offset={props.offset}
      data-aos-delay={props.delay}
      data-aos-duration={props.duration}
    >
      {props.children}
    </FadeWrapperStyled>
  );
};

export default Fade;
