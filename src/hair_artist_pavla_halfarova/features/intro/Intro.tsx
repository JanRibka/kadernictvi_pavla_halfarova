import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { forwardRef, Ref } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Box from '@mui/material/Box';

import Intro1 from '../../../shared/img/Intro_1.jpg';
import Intro2 from '../../../shared/img/Intro_2.jpg';
import Intro3 from '../../../shared/img/Intro_3.jpg';
import Intro4 from '../../../shared/img/Intro_4.jpg';
import Intro5 from '../../../shared/img/Intro_5.jpg';

interface IProps {}

const Intro = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  return (
    <Box ref={ref}>
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
          <img src={Intro1} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 1' />
          {/* <p className='legend'>x</p> */}
        </div>
        <div>
          <img src={Intro2} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 2' />
          {/* <p className='legend'>x</p> */}
        </div>
        <div>
          <img src={Intro3} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 3' />
          {/* <p className='legend'>x</p> */}
        </div>
        <div>
          <img src={Intro4} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 4' />
          {/* <p className='legend'>x</p> */}
        </div>
        <div>
          <img src={Intro5} alt='Kadeřnictví Pavla Halfarová - Kadeřnictví 5' />
          {/* <p className='legend'>x</p> */}
        </div>
      </Carousel>
    </Box>
  );
});

export default Intro;
