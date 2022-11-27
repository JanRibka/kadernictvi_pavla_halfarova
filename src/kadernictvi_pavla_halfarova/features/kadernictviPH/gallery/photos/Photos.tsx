import Fade from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade';
import { MouseEvent, useState } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';

import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Images from './Images';
import PhotosDialog from './photosDialog/PhotosDialog';
import ImgStyled from './styledComponents/ImgStyled';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyled';

const Photos = () => {
  // Consts
  const theme = useTheme();
  const breakPointLgDwn = useMediaQuery(theme.breakpoints.down("lg"));
  const breakPointSmDwn = useMediaQuery(theme.breakpoints.down("sm"));

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
    // Consts
    let auxIndex = 0;
    let delay = 0;
    const picsPerRow = breakPointLgDwn ? 2 : breakPointSmDwn ? 1 : 4;

    return Images.map((row, index) => {
      return (
        <GridContainer key={"imagesRowContainer_" + index}>
          {row.map((image, index) => {
            if (auxIndex !== 0 && auxIndex < picsPerRow) {
              delay = delay + 300;
            } else if (auxIndex >= picsPerRow) {
              delay = 0;
              auxIndex = 0;
            }

            auxIndex += 1;

            return (
              <ImgWrapperStyled
                xs={12}
                sm={6}
                lg={3}
                key={"imageWrapper_" + index}
              >
                <Fade once delay={delay}>
                  <Box>
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
                  </Box>
                </Fade>
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
