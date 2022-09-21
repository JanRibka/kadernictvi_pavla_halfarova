import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { forwardRef, Ref } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Intro1 from '../../../shared/img/Intro_1.jpg';
import Intro2 from '../../../shared/img/Intro_2.jpg';
import Intro3 from '../../../shared/img/Intro_3.jpg';
import Intro4 from '../../../shared/img/Intro_4.jpg';
import Intro5 from '../../../shared/img/Intro_5.jpg';

interface IProps {}

const Intro = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  const { t } = useTranslation(["intro\\intro"]);

  return (
    <Box ref={ref} sx={{ position: "relative" }}>
      <Box // TODO: Udelat styled komponentu
        sx={{
          position: "absolute",
          top: "calc(50% - 4.5rem)",
          left: "5rem", // TODO: pokud bude mensi nez MD zmensi se pismo
          zIndex: "1", // TODO: Prodat animation delay podle belava makeup
        }}
      >
        <Typography variant='h1' sx={{ fontSize: "4rem" }}>
          {t("hairArtist")}
        </Typography>
        <Typography variant='h2' sx={{ fontSize: "3rem" }}>
          {t("pavlaHalfarova")}
        </Typography>
      </Box>

      <Carousel
        autoPlay
        infiniteLoop
        swipeable
        showThumbs={false}
        showStatus={false}
        interval={7000}
        transitionTime={1000}
      >
        <div>
          <img src={Intro1} alt='Hair artist Pavla Halfarová - Kadeřnictví 1' />
          {/* <p className='legend'>x</p> */}
        </div>
        <div>
          <img src={Intro2} alt='Hair artist Pavla Halfarová - Kadeřnictví 2' />
          {/* <p className='legend'>x</p> */}
        </div>
        <div>
          <img src={Intro3} alt='Hair artist Pavla Halfarová - Kadeřnictví 3' />
          {/* <p className='legend'>x</p> */}
        </div>
        <div>
          <img src={Intro4} alt='Hair artist Pavla Halfarová - Kadeřnictví 4' />
          {/* <p className='legend'>x</p> */}
        </div>
        <div>
          <img src={Intro5} alt='Hair artist Pavla Halfarová - Kadeřnictví 5' />
          {/* <p className='legend'>x</p> */}
        </div>
      </Carousel>
    </Box>
  );
});

export default Intro;
