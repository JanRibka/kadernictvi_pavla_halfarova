import { useTranslation } from 'react-i18next';

import IntroSection01 from '../photos/img/Intro01_Preview.jpg';
import IntroSection02 from '../photos/img/Intro02_Preview.jpg';
import IntroSection03 from '../photos/img/Intro03_Preview.jpg';
import IntroSection04 from '../photos/img/Intro04_Preview.jpg';
import IntroSection05 from '../photos/img/Intro05_Preview.jpg';
import Photo from '../photos/photo/Photo';

interface IProps {
  delay: number;
}

const Gallery1 = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\gallery\\gallery"]);
  const gallery1 = [
    {
      GalleryName: t("gallery1Name"),
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
  return <Photo delay={props.delay} photos={gallery1} />;
};

export default Gallery1;
