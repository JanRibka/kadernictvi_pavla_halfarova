import { MouseEvent, useState } from "react";
import GridContainer from "shared/components/gridContainer/GridContainer";

import Photo1 from "./img/12.jpg";
import PhotosDialog from "./photosDialog/PhotosDialog";
import ImgStyled from "./styledComponents/ImgStyled";
import ImgWrapperStyled from "./styledComponents/ImgWrapperStyled";

// TODO: Při scrolovani se budou fotky postupně zobrazovat
const Photos = () => {
  // State
  const [open, setOpen] = useState<boolean>(false);

  // Other
  const HandleOnClick = (e: MouseEvent<HTMLDivElement>, name: string) => {
    setOpen(true);
  };

  return (
    <>
      {/* Row 1 */}
      <GridContainer>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled
            src={Photo1}
            alt='asdf'
            loading='lazy'
            onClick={(e) => HandleOnClick(e, Photo1.toString())}
          />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled
            src={Photo1}
            alt=''
            loading='lazy'
            onClick={(e) => HandleOnClick(e, Photo1.toString())}
          />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled
            src={Photo1}
            alt=''
            loading='lazy'
            onClick={(e) => HandleOnClick(e, Photo1.toString())}
          />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled
            src={Photo1}
            alt=''
            loading='lazy'
            onClick={(e) => HandleOnClick(e, Photo1.toString())}
          />
        </ImgWrapperStyled>
      </GridContainer>
      {/* Row 2 */}
      <GridContainer>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled
            src={Photo1}
            alt=''
            loading='lazy'
            onClick={(e) => HandleOnClick(e, Photo1.toString())}
          />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled
            src={Photo1}
            alt=''
            loading='lazy'
            onClick={(e) => HandleOnClick(e, Photo1.toString())}
          />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled
            src={Photo1}
            alt=''
            loading='lazy'
            onClick={(e) => HandleOnClick(e, Photo1.toString())}
          />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled
            src={Photo1}
            alt=''
            loading='lazy'
            onClick={(e) => HandleOnClick(e, Photo1.toString())}
          />
        </ImgWrapperStyled>
      </GridContainer>
      {/* Photos dialog */}
      <PhotosDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default Photos;
