import { MouseEvent, useState } from 'react';
import GridContainer from 'shared/components/gridContainer/GridContainer';

import Images from './Images';
import Photo1 from './img/12.jpg';
import PhotosDialog from './photosDialog/PhotosDialog';
import ImgStyled from './styledComponents/ImgStyled';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyled';

// TODO: Při scrolovani se budou fotky postupně zobrazovat
const Photos = () => {
  // State
  const [open, setOpen] = useState<boolean>(false);

  // Other
  const HandleOnClick = (e: MouseEvent<HTMLDivElement>, name: string) => {
    setOpen(true);
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
                  onClick={(e) => HandleOnClick(e, Photo1.toString())}
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
      <PhotosDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default Photos;
