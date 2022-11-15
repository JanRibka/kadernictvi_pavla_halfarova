import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';

import { Dispatch, Suspense } from 'react';
import AppLoader from 'shared/components/loader/AppLoader';
import { EffectFade, Mousewheel, Navigation, Pagination } from 'swiper';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import Images from '../Images';
import Photo1 from './img/12.jpg';
import DialogContentStyled from './styledComponents/DialogContentStyled';
import DialogStyled from './styledComponents/DialogStyled';
import DialogTitleWrapperStyled from './styledComponents/DialogTitleWrapperStyled';
import SwiperStyled from './swiper/styledComponents/SwiperStyled';
import SwiperSlideStyled from './swiper/swiperSlide/styledComponents/SwiperSlideStyled';

interface IProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const PhotosDialog = (props: IProps) => {
  // Other
  const RenderPhotos = () => {
    let result: JSX.Element[] = [];

    Images.forEach((row, rowIndex) => {
      row.forEach((image, index) => {
        result.push(
          <SwiperSlideStyled key={"dialogImage_" + }>
            <img src={image.SrcDialog} alt={image.Alt} />
          </SwiperSlideStyled>
        );
      });
    });

    return result;
  };
  // TODO: Dialog se p5i otev5en9 zvetsi na cele okno
  // TODO: Po dobu na49t8n9 bude loading
  // TODO: https://codesandbox.io/s/mt7qnl?file=/src/App.jsx:1089-1098
  return (
    <Suspense fallback={<AppLoader />}>
      <DialogStyled open={props.open} disableScrollLock={true}>
        <DialogTitleWrapperStyled>
          <IconButton onClick={() => props.setOpen(false)} color='secondary'>
            <CloseIcon />
          </IconButton>
        </DialogTitleWrapperStyled>
        <DialogContentStyled>
          {/* Swiper */}
          <SwiperStyled
            navigation
            loop
            slidesPerView={1}
            speed={1000}
            effect='fade'
            pagination={{ type: "fraction" }}
            mousewheel
            modules={[EffectFade, Pagination, Navigation, Mousewheel]}
          >
            {RenderPhotos()}
            {/* <SwiperSlideStyled>
              <img src={Photo1} alt='' />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
              <img src={Photo1} alt='' />
            </SwiperSlideStyled>
            <SwiperSlideStyled>
              <img src={Photo1} alt='' />
            </SwiperSlideStyled> */}
          </SwiperStyled>
        </DialogContentStyled>
      </DialogStyled>
    </Suspense>
  );
};

export default PhotosDialog;
