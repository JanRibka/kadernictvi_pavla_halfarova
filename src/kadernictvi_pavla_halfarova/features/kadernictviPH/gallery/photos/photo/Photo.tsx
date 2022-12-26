import Fade from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PhotoModel from '../PhotoModel';
import ImgStyled from './styledComponents/ImgStyled';
import PhotoWrapperStyled from './styledComponents/PhotoWrapperStyled';

interface IProps {
  delay: number;
  mainPhoto: PhotoModel;
  galleryName: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
}

const Photo = (props: IProps) => {
  // Other
  const HandleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    props.setOpen(true);
  };

  return (
    <>
      <PhotoWrapperStyled xs={12} sm={6} lg={3}>
        <Fade
          animation='fade-up'
          delay={props.delay}
          sx={{
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImgStyled
              src={props.mainPhoto.Src}
              alt={props.mainPhoto.Alt}
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
                {props.galleryName}
              </Typography>
            </Box>
          </Box>
        </Fade>
      </PhotoWrapperStyled>
      {/* Dialog */}
      {props.children}
    </>
  );
};

export default Photo;
