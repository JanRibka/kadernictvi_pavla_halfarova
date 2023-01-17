import { MouseEvent, RefObject, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { scrollIntoView } from "seamless-scroll-polyfill";
import useScrollPosition from "shared/customHooks/useScrollPosition/useScrollPosition";
import { GoogleAnalyticsHelper } from "shared/helpers/googleAnalyticsHelper";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/system";

import KadernictviPHPage from "../pages/KadernictviPHPage";
import Footer from "./footer/Footer";
import NavBar from "./NavBar/NavBar";
import ButtonUpStyled from "./styledComponents/ButtonUpStyled";

const Layout = () => {
  // References
  const ref = useRef<Object>(null);
  const refEffectStyleRan = useRef<boolean>(false);
  const refEffectClassListRan = useRef<boolean>(false);
  const refBtnUp = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  // Constants
  const scrollYPosition: number = useScrollPosition();
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();
  const { t } = useTranslation(["layout\\mainMenu"]);

  // State
  const [seldTab, setSeldTab] = useState<number>(0);

  // Other
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      refEffectStyleRan.current === true
    ) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("loaded");
      setTimeout(() => {
        document.body.getElementsByTagName("header")[0].classList.add("loaded");
      }, 1000);
    }

    return () => {
      refEffectStyleRan.current = true;
    };
  }, []);

  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      refEffectClassListRan.current === true
    ) {
      HeaderClassListChange();
      SetSelectedSectionButton();
    }

    return () => {
      refEffectClassListRan.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYPosition]);

  const HeaderClassListChange = () => {
    const heightOffset: number = 100;

    if (scrollYPosition > heightOffset) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("start-style");
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("scroll-on");

      refBtnUp.current?.classList.add("to-top-active");
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add("start-style");
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove("scroll-on");

      refBtnUp.current?.classList.remove("to-top-active");
    }
  };

  const SetSelectedSectionButton = () => {
    if (!!ref) {
      const auxRef = ref?.current as any;
      const refKeys = Object.keys(auxRef);

      refKeys?.forEach((key, i) => {
        const currentRef = auxRef[key] as RefObject<HTMLDivElement>;
        const offset = (currentRef.current?.offsetTop as number) - 250;
        const heightOffset = 350;

        // Kontakt
        if (i === refKeys.length - 1) {
          if (scrollYPosition - offset + heightOffset > 0) {
            const index = parseInt(
              currentRef.current?.dataset.index as string
            ) as number;

            if (seldTab !== index) {
              setSeldTab(index);
              SendSectionChangedEventToGA(index);
            }
          }
        }
        // Ostatní
        else if (
          scrollYPosition >= offset &&
          scrollYPosition < offset + heightOffset
        ) {
          const index = parseInt(
            currentRef.current?.dataset.index as string
          ) as number;

          if (seldTab !== index) {
            setSeldTab(index);
            SendSectionChangedEventToGA(index);
          }
        }
      });
    }
  };

  const TabSelectOnChangeAction = (
    event: MouseEvent<HTMLLIElement> | undefined
  ) => {
    const target = event?.target as any;
    const name: string = target.dataset.target ?? "";

    if (!!ref) {
      const auxRef = ref?.current as any;
      const currentRef = auxRef[name] as RefObject<HTMLDivElement>;

      scrollIntoView(currentRef.current as Element, { behavior: "smooth" });
    }
  };

  const ScrollToTopHandler = () => {
    if (!!ref) {
      const auxRef = ref?.current as any;
      const currentRef = auxRef["intro"] as RefObject<HTMLDivElement>;

      scrollIntoView(currentRef.current as Element, { behavior: "smooth" });
    }
  };

  /**
   * Odešle event do GA, pokud je sekce zobrazena déle než 1s
   * @param seldTab
   */
  const SendSectionChangedEventToGA = (seldTab: number) => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (!!ref) {
        const auxRef = ref?.current as any;
        const keys = Object.keys(auxRef);
        const seldKey = keys[seldTab];

        googleAnalyticsHelper.SendEventToGA(
          "Sekce",
          ("Zobrazení sekce " + t(seldKey)) as string
        );
      }
    }, 1000);
  };

  return (
    <Box display='flex' flexDirection='column'>
      <NavBar
        tabSelectOnChangeAction={TabSelectOnChangeAction}
        seldTab={seldTab}
      />
      <KadernictviPHPage ref={ref} />
      <Footer />
      <ButtonUpStyled onClick={ScrollToTopHandler} ref={refBtnUp}>
        <KeyboardArrowUpIcon />
      </ButtonUpStyled>
    </Box>
  );
};

export default Layout;
