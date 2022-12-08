import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";

interface IProps {
  start: number;
  end: number;
  once?: boolean;
  duration?: number;
  delay?: number;
  children: JSX.Element;
}

const NumberCount: React.FC<IProps> = (props) => {
  // References
  const refEffectListenerRan = useRef<boolean>(false);
  const refWrapper = useRef<HTMLDivElement>(null);

  // Other
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      refEffectListenerRan.current === true
    ) {
      window.addEventListener("scroll", AddClassActive);
    }

    return () => {
      refEffectListenerRan.current = true;
      window.removeEventListener("scroll", AddClassActive);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return <Box ref={refWrapper}>{props.children}</Box>;
};

NumberCount.defaultProps = {
  once: false,
  duration: 2000,
  delay: 0,
};

export default NumberCount;
