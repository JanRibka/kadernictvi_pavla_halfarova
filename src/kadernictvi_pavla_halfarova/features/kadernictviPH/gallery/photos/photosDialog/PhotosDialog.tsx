import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/zoom';

import { Dispatch, Suspense, useEffect, useState } from 'react';
import AppLoader from 'shared/components/loader/AppLoader';
import Swiper, { Navigation, Pagination, Zoom } from 'swiper';

import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Box from '@mui/material/Box';
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

interface FsDocument extends Document {
  webkitExitFullScreen?: () => void;
  mozExitFullScreen?: () => void;
  msExitFullscreen?: () => void;
}

interface FsDocumentElement extends HTMLElement {
  webkitRequestFullScreen?: () => void;
  mozRequestFullScreen?: () => void;
  msRequestFullScreen?: () => void;
}

const PhotosDialog = (props: IProps) => {
  // State
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);
  const [fullScreen, setFullScreen] = useState<boolean>(false);

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

  const HandleZoomIn = () => {
    const activeIndex = swiperRef?.activeIndex;
    const activeSlide = swiperRef?.slides[activeIndex as number];
    const img = activeSlide?.firstChild?.firstChild as HTMLImageElement;
    const isZoomed = activeSlide?.classList.contains("swiper-slide-zoomed");
    let scale = parseFloat(
      img?.style?.transform
        ?.split(" ")[3]
        ?.replace("scale(", "")
        ?.replace(")", "")
    );

    if (isNaN(scale)) {
      scale = 1.2;
    } else {
      scale = scale + 0.2;
    }

    if (scale > 3) {
      scale = 3;
    }

    if (!isZoomed) {
      activeSlide?.classList.add("swiper-slide-zoomed");
    }

    img.style.transform = "translate3d(0px, 0px, 0px) scale(" + scale + ")";
  };

  const HandleZoomOut = () => {
    const activeIndex = swiperRef?.activeIndex;
    const activeSlide = swiperRef?.slides[activeIndex as number];
    const img = activeSlide?.firstChild?.firstChild as HTMLImageElement;
    let scale = parseFloat(
      img?.style?.transform
        ?.split(" ")[3]
        ?.replace("scale(", "")
        ?.replace(")", "")
    );

    if (isNaN(scale)) {
      scale = 1;
    } else {
      scale = scale - 0.2;
    }

    if (scale <= 1) {
      scale = 1;
      activeSlide?.classList.remove("swiper-slide-zoomed");
    }

    img.style.transform = "translate3d(0px, 0px, 0px) scale(" + scale + ")";
  };

  const HandleFullScreen = () => {
    const elem: FsDocumentElement = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }

    setFullScreen(true);
  };

  const HandleFullScreenExit = () => {
    const doc: FsDocument = document;

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.webkitExitFullScreen) {
      doc.webkitExitFullScreen();
    } else if (doc.mozExitFullScreen) {
      doc.mozExitFullScreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }

    setFullScreen(false);
  };

  // TODO: https://stackoverflow.com/questions/51998594/how-to-make-google-chrome-go-full-screen-in-angular-4-application
  // TODO: http://jellydemos.com/wordpress/murdock/dark/#home

  const RenderFullScreenButton = () => {
    debugger;
    if (fullScreen) {
      return (
        <IconButton color='secondary' onClick={HandleFullScreenExit}>
          <FullscreenExitIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton color='secondary' onClick={HandleFullScreen}>
          <FullscreenIcon />
        </IconButton>
      );
    }
  };
  // TODO: Dialog se p5i otev5en9 zvetsi na cele okno
  // TODO: Po dobu na49t8n9 bude loading
  return (
    <Suspense fallback={<AppLoader />}>
      <DialogStyled open={props.open} disableScrollLock={false}>
        <DialogTitleWrapperStyled>
          <Box
            component='a'
            href={Images[0][0].SrcDialog}
            download
            color='secondary'
          >
            <DownloadIcon />
          </Box>
          <IconButton color='secondary' onClick={HandleZoomIn}>
            <ZoomInIcon />
          </IconButton>
          <IconButton color='secondary' onClick={HandleZoomOut}>
            <ZoomOutIcon />
          </IconButton>
          {RenderFullScreenButton()}
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
            onBeforeSlideChangeStart={(e) => {
              debugger;
            }}
            onZoomChange={(e) => {
              debugger;
            }}
          >
            {RenderPhotos()}
          </SwiperStyled>
        </DialogContentStyled>
      </DialogStyled>
    </Suspense>
  );
};

export default PhotosDialog;
