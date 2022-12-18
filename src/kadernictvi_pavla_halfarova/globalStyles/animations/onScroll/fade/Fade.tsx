import { useRef } from 'react';

import Box from '@mui/material/Box';

interface IProps {
  animation:
    | "fadeIn"
    | "fadeInDown"
    | "fadeInDownBig"
    | "fadeInLeft"
    | "fadeInLeftBig"
    | "fadeInRight"
    | "fadeInRightBig"
    | "fadeInUp"
    | "fadeInUpBig"
    | "fadeInTopLeft"
    | "fadeInTopRight"
    | "fadeInBottomLeft"
    | "fadeInBottomRight";
  duration?: number;
  delay?: number;
  offset?: number;
  iteration?: number;
  children: JSX.Element;
}

const Fade: React.FC<IProps> = (props) => {
  // References
  const refWrapper = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={refWrapper}
      sx={{ lineHeight: 0 }}
      data-wow-offset={props.offset?.toString()}
      data-wow-duration={props.duration?.toString() + "s"}
      data-wow-delay={props.delay?.toString() + "s"}
      data-wow-iteration={props.iteration?.toString()}
      className={
        "wow animate__animated animate__" +
        props.animation +
        " animate__repeat-1"
      }
    >
      {props.children}
    </Box>
  );
};

Fade.defaultProps = {
  duration: 2,
  delay: 0,
  offset: 0,
  iteration: 1,
};

export default Fade;
