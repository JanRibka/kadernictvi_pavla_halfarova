import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/zoom';

import { Dispatch, Suspense, useEffect, useState } from 'react';
import AppLoader from 'shared/components/loader/AppLoader';
import Swiper, { Navigation, Pagination, Zoom } from 'swiper';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import Images from '../Images';
import DialogContentStyled from './styledComponents/DialogContentStyled';
import DialogStyled from './styledComponents/DialogStyled';
import DialogTitleWrapperStyled from './styledComponents/DialogTitleWrapperStyled';
import SwiperStyled from './swiper/styledComponents/SwiperStyled';
import SwiperSlideStyled from './swiper/swiperSlide/styledComponents/SwiperSlideStyled';

interface IProps {
  open: boolean;
  setOpenData: Dispatch<React.SetStateAction<{ open: boolean; index: number }>>;
  index: number;
}

const PhotosDialog = (props: IProps) => {
  // State
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

  // Other
  useEffect(() => {
    swiperRef?.slideTo(props.index, 1000);
  }, [props.index, swiperRef]);

  const RenderPhotos = () => {
    let result: JSX.Element[] = [];

    Images.forEach((row, rowIndex) => {
      row.forEach((image, index) => {
        result.push(
          <SwiperSlideStyled key={"dialogImage_" + rowIndex * 100 + index}>
            <div className='swiper-zoom-container'>
              <img src={image.SrcDialog} alt={image.Alt} loading='lazy' />
            </div>
          </SwiperSlideStyled>
        );
      });
    });

    return result;
  };

  // TODO: http://jellydemos.com/wordpress/murdock/dark/#home
  // TODO: Dialog se p5i otev5en9 zvetsi na cele okno
  // TODO: Po dobu na49t8n9 bude loading
  return (
    <Suspense fallback={<AppLoader />}>
      <DialogStyled open={props.open} disableScrollLock={false}>
        <DialogTitleWrapperStyled>
          <IconButton
            onClick={() => props.setOpenData({ open: false, index: 0 })}
            color='secondary'
          >
            <CloseIcon />
          </IconButton>
        </DialogTitleWrapperStyled>
        <DialogContentStyled>
          {/* Swiper */}
          <SwiperStyled
            navigation
            loop
            zoom
            slidesPerView={1}
            speed={1500}
            pagination={{ type: "fraction" }}
            modules={[Pagination, Navigation, Zoom]}
            onSwiper={setSwiperRef}
          >
            {RenderPhotos()}
          </SwiperStyled>
        </DialogContentStyled>
      </DialogStyled>
    </Suspense>
  );
};

export default PhotosDialog;
