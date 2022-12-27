import { lazy, Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';

import Produkt01 from './img/gallery1/Produkt01.jpg';
import Pece01 from './img/gallery2/Pece01.jpg';
import Blond01 from './img/gallery3/Blond01.jpg';
import OstatniBarvy01 from './img/gallery4/OstatniBarvy01.jpg';
import Photo from './photo/Photo';
import PhotoModel from './PhotoModel';

const Gallery1 = lazy(() => import("../galleries/gallery1/Gallery1"));
const Gallery2 = lazy(() => import("../galleries/gallery2/Gallery2"));
const Gallery3 = lazy(() => import("../galleries/gallery3/Gallery3"));
const Gallery4 = lazy(() => import("../galleries/gallery4/Gallery4"));

const Photos = () => {
  // State
  const [openGallery1, setOpenGallery1] = useState<boolean>(false);
  const [openGallery2, setOpenGallery2] = useState<boolean>(false);
  const [openGallery3, setOpenGallery3] = useState<boolean>(false);
  const [openGallery4, setOpenGallery4] = useState<boolean>(false);

  // Consts
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
  // TODO: Delay zde bude dynamicky podle toho, kolik je fotrk na strance
  return (
    <GridContainer>
      {/* Gallery 1 */}
      <Photo
        delay={0}
        mainPhoto={gallery1MainPhoto}
        galleryName={tGallery1("galleryName")}
        setOpen={setOpenGallery1}
      >
        <Suspense fallback={<div>...Loading</div>}>
          <Gallery1 open={openGallery1} setOpen={setOpenGallery1} />
        </Suspense>
      </Photo>

      {/* Gallery 2 */}
      <Photo
        delay={300}
        mainPhoto={gallery2MainPhoto}
        galleryName={tGallery2("galleryName")}
        setOpen={setOpenGallery2}
      >
        <Suspense fallback={<div>...Loading</div>}>
          <Gallery2 open={openGallery2} setOpen={setOpenGallery2} />
        </Suspense>
      </Photo>

      {/* Gallery 3 */}
      <Photo
        delay={600}
        mainPhoto={gallery3MainPhoto}
        galleryName={tGallery3("galleryName")}
        setOpen={setOpenGallery3}
      >
        <Suspense fallback={<div>...Loading</div>}>
          <Gallery3 open={openGallery3} setOpen={setOpenGallery3} />
        </Suspense>
      </Photo>

      {/* Gallery 4 */}
      <Photo
        delay={900}
        mainPhoto={gallery4MainPhoto}
        galleryName={tGallery4("galleryName")}
        setOpen={setOpenGallery4}
      >
        <Suspense fallback={<div>...Loading</div>}>
          <Gallery4 open={openGallery4} setOpen={setOpenGallery4} />
        </Suspense>
      </Photo>
    </GridContainer>
  );
};

export default Photos;
