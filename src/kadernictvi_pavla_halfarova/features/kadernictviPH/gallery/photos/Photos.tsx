import Fade from "kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade";
import { lazy, MouseEvent, Suspense, useState } from "react";
import GridContainer from "shared/components/gridContainer/GridContainer";

import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import ImageModel from "./ImageModel";
import IntroSection01 from "./img/Intro01_Preview.jpg";
import IntroSection02 from "./img/Intro02_Preview.jpg";
import IntroSection03 from "./img/Intro03_Preview.jpg";
import IntroSection04 from "./img/Intro04_Preview.jpg";
import IntroSection05 from "./img/Intro05_Preview.jpg";
import ImgStyled from "./styledComponents/ImgStyled";
import ImgWrapperStyled from "./styledComponents/ImgWrapperStyled";

const PhotosDialog = lazy(() => import("./photosDialog/PhotosDialog"));

export let products: ImageModel[] = [];

const Photos = () => {
  // Consts
  const theme = useTheme();
  const breakPointLgDwn = useMediaQuery(theme.breakpoints.down("lg"));
  const breakPointSmDwn = useMediaQuery(theme.breakpoints.down("sm"));

  // State
  const [open, setOpen] = useState<boolean>(false);

  //#region Gallery
  products = [
    {
      GalleryName: "",
      Src: IntroSection01,
      Alt: "Lorem ipsum",
      Description: "Lorem ipsum",
      MainPhoto: true,
    },
    {
      GalleryName: "",
      Src: IntroSection02,
      Alt: "Lorem ipsum",
      Description: "Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection03,
      Alt: "Lorem ipsum Lorem ipsum Lorem ipsum",
      Description: "Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection04,
      Alt: "Lorem ipsum",
      Description: "Lorem ipsum",
      MainPhoto: true,
    },
    {
      GalleryName: "",
      Src: IntroSection05,
      Alt: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      Description: "Lorem ipsum",
      MainPhoto: true,
    },
  ];
  //#endregion

  // Other
  const HandleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    setOpen(true);
  };

  const RenderPhotos = () => {
    // Consts
    let auxIndex = 0;
    let rowIndex = 0;
    let delay = 0;
    const picsPerRow = breakPointLgDwn ? 2 : breakPointSmDwn ? 1 : 4;
    const result: JSX.Element[] = [];
    let auxResult: JSX.Element[] = [];

    products.forEach((image, index) => {
      if (auxIndex < picsPerRow) {
        if (auxIndex !== 0) delay = delay + 300;

        auxResult.push(
          <ImgWrapperStyled
            xs={12}
            sm={6}
            lg={3}
            key={"imageWrapper_" + auxIndex}
          >
            <Fade animation='fade-up' delay={delay}>
              <Box>
                <ImgStyled
                  src={image.Src}
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
                  onClick={(e) => HandleOnClick(e)}
                >
                  <Typography
                    className='description'
                    variant='h6'
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

      if (auxIndex === picsPerRow || index === products.length - 1) {
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
      <Suspense fallback={<div>...Loading</div>}>
        <PhotosDialog open={open} setOpen={setOpen} />
      </Suspense>
    </>
  );
};

export default Photos;
