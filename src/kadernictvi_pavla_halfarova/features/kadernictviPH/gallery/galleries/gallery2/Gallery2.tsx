import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import Pece01 from '../../photos/img/gallery2/Pece01.jpg';
import Pece02 from '../../photos/img/gallery2/Pece02.jpg';
import Pece03 from '../../photos/img/gallery2/Pece03.jpg';
import Pece04 from '../../photos/img/gallery2/Pece04.jpg';
import Pece05 from '../../photos/img/gallery2/Pece05.jpg';
import PhotoModel from '../../photos/PhotoModel';
import PhotosDialog from '../../photos/photosDialog/PhotosDialog';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Gallery2 = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\gallery\\gallery2"]);
  const photos: PhotoModel[] = [
    {
      Src: Pece01,
      Alt: t("photo1Alt"),
      MainPhoto: true,
    },
    {
      Src: Pece02,
      Alt: t("photo2Alt"),
      MainPhoto: false,
    },
    {
      Src: Pece03,
      Alt: t("photo3Alt"),
      MainPhoto: false,
    },
    {
      Src: Pece04,
      Alt: t("photo4Alt"),
      MainPhoto: false,
    },
    {
      Src: Pece05,
      Alt: t("photo5Alt"),
      MainPhoto: false,
    },
  ];
  return (
    <PhotosDialog open={props.open} setOpen={props.setOpen} photos={photos} />
  );
};

export default Gallery2;
