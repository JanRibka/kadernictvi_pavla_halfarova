import { forwardRef, MouseEvent, Ref } from "react";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import LinkModel from "./LinkModel";

interface IProps {
  handleOnClick: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
  actValue: number;
}

const NavLinks = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const { t } = useTranslation(["layout\\mainMenu"]);
    const links: LinkModel[] = [
      { Label: t("intro"), Value: 0 },
      { Label: t("services"), Value: 1 },
      { Label: t("gallery"), Value: 2 },
      { Label: t("contact"), Value: 3 },
    ];

    return (
      <Box className='nav-links-wrapper' ref={ref}>
        {links.map((item, i) => {
          return (
            <Button
              key={"menu-btn_" + i}
              value={item.Value}
              onClick={props.handleOnClick}
              className={props.actValue === item.Value ? "active" : undefined}
            >
              {item.Label}
            </Button>
          );
        })}
      </Box>
    );
  }
);

export default NavLinks;
