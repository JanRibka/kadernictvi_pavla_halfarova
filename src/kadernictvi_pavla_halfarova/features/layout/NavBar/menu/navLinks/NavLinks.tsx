import { forwardRef, MouseEvent, Ref } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

interface IProps {
  handleOnClick: (event: MouseEvent<HTMLLIElement> | undefined) => void;
  seldTab: number;
}

const NavLinks = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const { t } = useTranslation(["layout\\mainMenu"]);

    return (
      <Box component='nav' className='nav-links-wrapper' ref={ref}>
        <Box component='ul'>
          {/* Úvod */}
          <Box component='li' data-target='intro' onClick={props.handleOnClick}>
            <Box
              component='a'
              data-target='intro'
              className={props.seldTab === 0 ? "active" : undefined}
            >
              {t("intro")}
            </Box>
          </Box>
          {/* o mně */}
          <Box
            component='li'
            data-target='aboutMe'
            onClick={props.handleOnClick}
          >
            <Box
              component='a'
              data-target='aboutMe'
              className={props.seldTab === 1 ? "active" : undefined}
            >
              {t("aboutMe")}
            </Box>
          </Box>
          {/* Služby */}
          <Box
            component='li'
            data-target='services'
            onClick={props.handleOnClick}
          >
            <Box
              component='a'
              data-target='services'
              className={props.seldTab === 2 ? "active" : undefined}
            >
              {t("services")}
            </Box>
          </Box>
          {/* Galerie */}
          <Box
            component='li'
            data-target='gallery'
            onClick={props.handleOnClick}
          >
            <Box
              component='a'
              data-target='gallery'
              className={props.seldTab === 3 ? "active" : undefined}
            >
              {t("gallery")}
            </Box>
          </Box>
          {/* Kontakt */}
          <Box
            component='li'
            data-target='contact'
            onClick={props.handleOnClick}
          >
            <Box
              component='a'
              data-target='contact'
              className={props.seldTab === 4 ? "active" : undefined}
            >
              {t("contact")}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);

export default NavLinks;
