import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/zoom';
import 'swiper/css/lazy';

import { Dispatch, Suspense, useEffect, useRef, useState } from 'react';
import AppLoader from 'shared/components/loader/AppLoader';
import Swiper, { Lazy, Navigation, Pagination, Zoom } from 'swiper';

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
// TODO: Vycentrovat obrazky, zdaji ae mi moc dole
const PhotosDialog = (props: IProps) => {
  // References
  const effectRan = useRef<boolean>(false);

  // State
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);

  // Other
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      effectRan.current === true
    ) {
      swiperRef?.slideTo(props.index, 1000);
    }

    return () => {
      effectRan.current = true;
    };
  }, [props.index, swiperRef]);

  const RenderPhotos = () => {
    let result: JSX.Element[] = [];

    Images.forEach((image, index) => {
      result.push(
        <SwiperSlideStyled key={"dialogImage_" + index}>
          <div className='swiper-zoom-container'>
            <img
              src={image.SrcDialog}
              alt={image.Alt}
              className='swiper-lazy'
              loading='lazy'
            />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white'></div>
          </div>
        </SwiperSlideStyled>
      );
    });

    return result;
  };

  // TODO: http://jellydemos.com/wordpress/murdock/dark/#home
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
            lazy
            slidesPerView={1}
            speed={1500}
            pagination={{ type: "fraction" }}
            modules={[Lazy, Pagination, Navigation, Zoom]}
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
