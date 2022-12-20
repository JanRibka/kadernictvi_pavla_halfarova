import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/zoom";
import "swiper/css/lazy";

import { Dispatch, Suspense } from "react";
import AppLoader from "shared/components/loader/AppLoader";
import { Lazy, Navigation, Pagination, Zoom } from "swiper";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import { products } from "../Photos";
import DialogContentStyled from "./styledComponents/DialogContentStyled";
import DialogStyled from "./styledComponents/DialogStyled";
import DialogTitleWrapperStyled from "./styledComponents/DialogTitleWrapperStyled";
import SwiperStyled from "./swiper/styledComponents/SwiperStyled";
import SwiperSlideStyled from "./swiper/swiperSlide/styledComponents/SwiperSlideStyled";

interface IProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}
// TODO: Vycentrovat obrazky, zdaji ae mi moc dole
const PhotosDialog = (props: IProps) => {
  // Other
  const RenderPhotos = () => {
    let result: JSX.Element[] = [];

    products.forEach((image, index) => {
      result.push(
        <SwiperSlideStyled key={"dialogImage_" + index}>
          <div className='swiper-zoom-container'>
            <img
              src={image.Src}
              alt={image.Alt}
              // className='swiper-lazy'
              // loading='eager'
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
          <IconButton onClick={() => props.setOpen(false)} color='secondary'>
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
          >
            {RenderPhotos()}
          </SwiperStyled>
        </DialogContentStyled>
      </DialogStyled>
    </Suspense>
  );
};

export default PhotosDialog;
