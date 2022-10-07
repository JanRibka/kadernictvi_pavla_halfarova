import { forwardRef, MouseEvent, Ref } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import LinkModel from './models/LinkModel';

interface IProps {
  handleOnClick: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
  actValue: number;
}

const NavLinks = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const { t } = useTranslation(["layout\\mainMenu"]);
    const links: LinkModel[] = [
      { Label: t("intro"), Value: 0, Name: "Úvod" },
      { Label: t("aboutMe"), Value: 1, Name: "O mně" },
      { Label: t("services"), Value: 2, Name: "Služby" },
      { Label: t("myWork"), Value: 3, Name: "Galrie" },
      { Label: t("contact"), Value: 4, Name: "Kontakt" },
    ];

    return (
      <Box className='nav-links-wrapper' ref={ref}>
        {links.map((item, i) => {
          return (
            <Box
              component='a'
              href='#'
              key={"menu-btn_" + i}
              // name={item.Name}
              // value={item.Value}
              aria-label={item.Label}
              data-text={item.Label}
              // onClick={props.handleOnClick}
              className={props.actValue === item.Value ? "active" : undefined}
            >
              {item.Label.split("").map((letter, i) => (
                <span key={"menu-btn-letter_" + i}>{letter}</span>
              ))}
            </Box>
          );
        })}
      </Box>
    );
  }
);

export default NavLinks;
