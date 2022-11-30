import Fade from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade';
import { MouseEvent, useState } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';

import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Images from './Images';
import PhotosDialog from './photosDialog/PhotosDialog';
import ImgStyled from './styledComponents/ImgStyled';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyled';

const Photos = () => {
  // Consts
  const theme = useTheme();
  const breakPointXlDwn = useMediaQuery(theme.breakpoints.down("xl"));
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
    let rowIndex = 0;
    let delay = 0;
    const picsPerRow = breakPointLgDwn ? 2 : breakPointSmDwn ? 1 : 4;
    const result: JSX.Element[] = [];
    let auxResult: JSX.Element[] = [];
    const descVariant = breakPointLgDwn ? "h5" : breakPointXlDwn ? "h6" : "h5";

    Images.forEach((image, index) => {
      if (auxIndex < picsPerRow) {
        if (auxIndex !== 0) delay = delay + 300;

        auxResult.push(
          <ImgWrapperStyled
            xs={12}
            sm={6}
            lg={3}
            key={"imageWrapper_" + auxIndex}
          >
            <Fade once delay={delay}>
              <Box>
                <ImgStyled
                  src={image.SrcSection}
                  alt={image.Alt}
                  loading='lazy'
                  className='image'
                />
                <Box className='line top'></Box>
                <Box className='line right'></Box>
                <Box className='line bottom'></Box>
                <Box className='line left'></Box>
                <Box
                  className='description-wrapper'
                  onClick={(e) => HandleOnClick(e, image.Index)}
                >
                  <Typography
                    className='description'
                    variant={descVariant}
                    textAlign='center'
                  >
                    {image.Alt}
                  </Typography>
                </Box>
              </Box>
            </Fade>
          </ImgWrapperStyled>
        );

        auxIndex += 1;
      }

      if (auxIndex === picsPerRow || index === Images.length - 1) {
        result.push(
          <GridContainer key={"imagesRowContainer_" + rowIndex}>
            {auxResult}
          </GridContainer>
        );

        auxIndex = 0;
        delay = 0;
        rowIndex += 1;
        auxResult = [];
      }
    });

    return result;
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
