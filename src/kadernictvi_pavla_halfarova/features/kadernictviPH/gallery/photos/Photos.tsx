import { MouseEvent, useState } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';

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
              >
                <ImgStyled
                  src={image.SrcSection}
                  alt={image.Alt}
                  loading='lazy'
                  onClick={(e) => HandleOnClick(e, image.Index)}
                />
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
