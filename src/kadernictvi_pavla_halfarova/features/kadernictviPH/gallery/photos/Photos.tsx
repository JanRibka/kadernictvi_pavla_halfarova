import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import GridContainer from 'shared/components/gridContainer/GridContainer';

import IntroSection01 from './img/Intro01_Preview.jpg';
import IntroSection02 from './img/Intro02_Preview.jpg';
import IntroSection03 from './img/Intro03_Preview.jpg';
import IntroSection04 from './img/Intro04_Preview.jpg';
import IntroSection05 from './img/Intro05_Preview.jpg';
import Photo from './photo/Photo';
import PhotoModel from './PhotoModel';

const Gallery1 = lazy(() => import("../galleries/Gallery1"));
export let gallery2: PhotoModel[] = [];
export let gallery3: PhotoModel[] = [];
export let gallery4: PhotoModel[] = [];

const Photos = () => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\gallery\\gallery"]);

  //#region Gallery

  gallery2 = [
    {
      GalleryName: t("gallery2Name"),
      Src: IntroSection01,
      Alt: "Lorem ipsum",
      MainPhoto: true,
    },
    {
      GalleryName: "",
      Src: IntroSection02,
      Alt: "Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection03,
      Alt: "Lorem ipsum Lorem ipsum Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection04,
      Alt: "Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection05,
      Alt: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      MainPhoto: false,
    },
  ];

  gallery3 = [
    {
      GalleryName: t("gallery3Name"),
      Src: IntroSection01,
      Alt: "Lorem ipsum",
      MainPhoto: true,
    },
    {
      GalleryName: "",
      Src: IntroSection02,
      Alt: "Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection03,
      Alt: "Lorem ipsum Lorem ipsum Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection04,
      Alt: "Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection05,
      Alt: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      MainPhoto: false,
    },
  ];

  gallery4 = [
    {
      GalleryName: t("gallery4Name"),
      Src: IntroSection01,
      Alt: "Lorem ipsum",
      MainPhoto: true,
    },
    {
      GalleryName: "",
      Src: IntroSection02,
      Alt: "Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection03,
      Alt: "Lorem ipsum Lorem ipsum Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection04,
      Alt: "Lorem ipsum",
      MainPhoto: false,
    },
    {
      GalleryName: "",
      Src: IntroSection05,
      Alt: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      MainPhoto: false,
    },
  ];
  //#endregion

  return (
    <GridContainer>
      {/* Gallery 1 */}
      <Suspense fallback={<div>...Loading</div>}>
        <Gallery1 delay={0} />
      </Suspense>

      <Photo delay={300} photos={gallery2} />
      <Photo delay={600} photos={gallery3} />
      <Photo delay={900} photos={gallery4} />
    </GridContainer>
  );
};

export default Photos;
