import Fade from "kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade";
import { MouseEvent, Suspense, useState } from "react";
import AppLoader from "shared/components/loader/AppLoader";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PhotoModel from "../PhotoModel";
import PhotosDialog from "../photosDialog/PhotosDialog";
import ImgStyled from "./styledComponents/ImgStyled";
import PhotoWrapperStyled from "./styledComponents/PhotoWrapperStyled";

interface IProps {
  delay: number;
  photos: PhotoModel[];
}

const Photo = (props: IProps) => {
  // State
  const [open, setOpen] = useState<boolean>(false);

  // Consts
  const mainPhoto = props.photos.find((f) => f.MainPhoto) as PhotoModel;

  // Other
  const HandleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    setOpen(true);
  };

  return (
    <>
      <PhotoWrapperStyled xs={12} sm={6} lg={3}>
        <Fade animation='fade-up' delay={props.delay}>
          <Box>
            <ImgStyled
              src={mainPhoto.Src}
              alt={mainPhoto.Alt}
              loading='lazy'
              className='image'
            />
            <Box className='line top'></Box>
            <Box className='line right'></Box>
            <Box className='line bottom'></Box>
            <Box className='line left'></Box>
            <Box
              className='description-wrapper'
              onClick={(e) => HandleOnClick(e)}
            >
              <Typography
                className='description'
                variant='h6'
                textAlign='center'
              >
                {mainPhoto.GalleryName}
              </Typography>
            </Box>
          </Box>
        </Fade>
      </PhotoWrapperStyled>

      {/* Photos dialog */}
      <Suspense fallback={<AppLoader />}>
        <PhotosDialog open={open} setOpen={setOpen} photos={props.photos} />
      </Suspense>
    </>
  );
};

export default Photo;
