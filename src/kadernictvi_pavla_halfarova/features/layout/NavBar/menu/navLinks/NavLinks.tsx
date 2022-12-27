import { forwardRef, MouseEvent, Ref } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

interface IProps {
  handleOnClick: (event: MouseEvent<HTMLButtonElement> | undefined) => void;
  actValue: number;
}

const NavLinks = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    // Consts
    const { t } = useTranslation(["layout\\mainMenu"]);

    return (
      <Box component='nav' className='nav-links-wrapper' ref={ref}>
        <Box component='ul'>
          {/* Úvod */}
          <Box component='li'>
            <Box
              component='a'
              data-target='intro'
              className={props.actValue === 0 ? "active" : undefined}
            >
              {t("intro")}
            </Box>
          </Box>
          {/* o mně */}
          <Box component='li'>
            <Box
              component='a'
              data-target='aboutMe'
              className={props.actValue === 1 ? "active" : undefined}
            >
              {t("aboutMe")}
            </Box>
          </Box>
          {/* Služby */}
          <Box component='li'>
            <Box
              component='a'
              data-target='services'
              className={props.actValue === 2 ? "active" : undefined}
            >
              {t("services")}
            </Box>
          </Box>
          {/* Galerie */}
          <Box component='li'>
            <Box
              component='a'
              data-target='gallery'
              className={props.actValue === 3 ? "active" : undefined}
            >
              {t("gallery")}
            </Box>
          </Box>
          {/* Kontakt */}
          <Box component='li'>
            <Box
              component='a'
              data-target='contact'
              className={props.actValue === 4 ? "active" : undefined}
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
