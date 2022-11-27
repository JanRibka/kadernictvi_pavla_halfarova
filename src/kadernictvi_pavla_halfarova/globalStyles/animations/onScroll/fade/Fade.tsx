import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/system';

import fadeTheme from './FadeTheme';
import FadeInnerWrapperStyled from './styledComponents/FadeInnerWrapperStyled';

interface IProps {
  direction?: "up" | "right" | "down" | "left";
  once?: boolean;
  duration?: number;
  delay?: number;
  children: JSX.Element;
}

const Fade: React.FC<IProps> = (props) => {
  // References
  const refEffectListenerRan = useRef<boolean>(false);
  const refEffectRan = useRef<boolean>(false);
  const refWrapper = useRef<HTMLDivElement>(null);

  // Other
  useEffect(() => {
    if (refEffectListenerRan.current === true) {
      window.addEventListener("scroll", AddClassActive);
    }

    return () => {
      refEffectListenerRan.current = true;
      window.removeEventListener("scroll", AddClassActive);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (refEffectRan.current === true) {
      AddFadeClass();
    }

    return () => {
      refEffectRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AddFadeClass = () => {
    const child = refWrapper.current?.children[0] as HTMLDivElement;

    refWrapper.current?.children[0].classList.add("fade");
    child.style.transition =
      "all " + props.duration + "ms ease " + props.delay + "ms";
  };

  const AddClassActive = () => {
    const windowHeight = window.innerHeight;
    const elementTop = refWrapper.current?.getBoundingClientRect()
      .top as number;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      refWrapper.current?.children[0].classList.add("active");
    } else {
      if (!props.once) {
        refWrapper.current?.children[0].classList.remove("active");
      }
    }
  };

  return (
    <Box ref={refWrapper}>
      <ThemeProvider theme={fadeTheme}>
        <FadeInnerWrapperStyled
          direction={props.direction}
          once={props.once}
          duration={props.duration}
          delay={props.delay}
        >
          {props.children}
        </FadeInnerWrapperStyled>
      </ThemeProvider>
    </Box>
  );
};

Fade.defaultProps = {
  direction: "up",
  once: false,
  duration: 2000,
  delay: 0,
};

export default Fade;
