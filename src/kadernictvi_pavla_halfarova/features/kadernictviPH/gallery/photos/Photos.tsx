import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';

import { useMediaQuery, useTheme } from '@mui/material';

import Gallery1 from '../galleries/gallery1/Gallery1';
import Gallery2 from '../galleries/gallery2/Gallery2';
import Gallery3 from '../galleries/gallery3/Gallery3';
import Gallery4 from '../galleries/gallery4/Gallery4';
import Produkt01 from './img/gallery1/Produkt01.jpg';
import Pece01 from './img/gallery2/Pece01.jpg';
import Blond01 from './img/gallery3/Blond01.jpg';
import OstatniBarvy01 from './img/gallery4/OstatniBarvy01.jpg';
import Photo from './photo/Photo';
import PhotoModel from './PhotoModel';

const Photos = () => {
  // State
  const [openGallery1, setOpenGallery1] = useState<boolean>(false);
  const [openGallery2, setOpenGallery2] = useState<boolean>(false);
  const [openGallery3, setOpenGallery3] = useState<boolean>(false);
  const [openGallery4, setOpenGallery4] = useState<boolean>(false);

  // Consts
  const theme = useTheme();
  const smLg = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const smDwn = useMediaQuery(theme.breakpoints.down("sm"));
  const gallery2Delay = smDwn ? 0 : 300;
  const gallery3Delay = smLg || smDwn ? 0 : 600;
  const gallery4Delay = smLg ? 300 : smDwn ? 0 : 900;

  const tGallery1 = useTranslation(["kadernictviPH\\gallery\\gallery1"]).t;
  const tGallery2 = useTranslation(["kadernictviPH\\gallery\\gallery2"]).t;
  const tGallery3 = useTranslation(["kadernictviPH\\gallery\\gallery3"]).t;
  const tGallery4 = useTranslation(["kadernictviPH\\gallery\\gallery4"]).t;

  const gallery1MainPhoto: PhotoModel = {
    Src: Produkt01,
    Alt: tGallery1("photo1Alt"),
    MainPhoto: true,
  };

  const gallery2MainPhoto: PhotoModel = {
    Src: Pece01,
    Alt: tGallery2("photo1Alt"),
    MainPhoto: true,
  };

  const gallery3MainPhoto: PhotoModel = {
    Src: Blond01,
    Alt: tGallery3("photo1Alt"),
    MainPhoto: true,
  };

  const gallery4MainPhoto: PhotoModel = {
    Src: OstatniBarvy01,
    Alt: tGallery4("photo1Alt"),
    MainPhoto: true,
  };

  return (
    <GridContainer>
      {/* Gallery 1 */}
      <Photo
        delay={0}
        mainPhoto={gallery1MainPhoto}
        galleryName={tGallery1("galleryName")}
        setOpen={setOpenGallery1}
      >
        <Gallery1 open={openGallery1} setOpen={setOpenGallery1} />
      </Photo>

      {/* Gallery 2 */}
      <Photo
        delay={gallery2Delay}
        mainPhoto={gallery2MainPhoto}
        galleryName={tGallery2("galleryName")}
        setOpen={setOpenGallery2}
      >
        <Gallery2 open={openGallery2} setOpen={setOpenGallery2} />
      </Photo>

      {/* Gallery 3 */}
      <Photo
        delay={gallery3Delay}
        mainPhoto={gallery3MainPhoto}
        galleryName={tGallery3("galleryName")}
        setOpen={setOpenGallery3}
        pictToTop
      >
        <Gallery3 open={openGallery3} setOpen={setOpenGallery3} />
      </Photo>

      {/* Gallery 4 */}
      <Photo
        delay={gallery4Delay}
        mainPhoto={gallery4MainPhoto}
        galleryName={tGallery4("galleryName")}
        setOpen={setOpenGallery4}
        pictToTop
      >
        <Gallery4 open={openGallery4} setOpen={setOpenGallery4} />
      </Photo>
    </GridContainer>
  );
};

export default Photos;
