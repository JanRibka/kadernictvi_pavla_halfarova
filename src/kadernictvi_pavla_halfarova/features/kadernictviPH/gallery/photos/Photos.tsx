import { MouseEvent, useRef, useState } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';

import Box from '@mui/material/Box';

import Images from './Images';
import PhotosDialog from './photosDialog/PhotosDialog';
import ImgStyled from './styledComponents/ImgStyled';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyled';

// TODO: Při scrolovani se budou fotky postupně zobrazovat
const Photos = () => {
  // State
  const [openData, setOpenData] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  // Other
  const HandleOnClick = (e: MouseEvent<HTMLDivElement>, index: number) => {
    setOpenData({ open: true, index: index });
  };

  const RenderPhotos = () => {
    const refImgWrpper = useRef<HTMLDivElement | null>(null);

    return Images.map((row, index) => {
      return (
        <GridContainer key={"imagesRowContainer_" + index}>
          {row.map((image, index) => {
            return (
              <ImgWrapperStyled
                xs={12}
                sm={6}
                lg={3}
                key={"imageWrapper_" + index}
                ref={refImgWrpper}
              >
                <ImgStyled
                  src={image.SrcSection}
                  alt={image.Alt}
                  loading='lazy'
                  onClick={(e) => HandleOnClick(e, image.Index)}
                />
                <Box className='line top'></Box>
                <Box className='line right'></Box>
                <Box className='line bottom'></Box>
                <Box className='line left'></Box>
              </ImgWrapperStyled>
            );
          })}
        </GridContainer>
      );
    });
  };

  return (
    <>
      {RenderPhotos()}
      {/* Photos dialog */}
      <PhotosDialog
        open={openData.open}
        setOpenData={setOpenData}
        index={openData.index}
      />
    </>
  );
};

export default Photos;
