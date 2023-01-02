import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import OstatniBarvy01 from '../../photos/img/gallery4/OstatniBarvy01.jpg';
import OstatniBarvy02 from '../../photos/img/gallery4/OstatniBarvy02.jpg';
import OstatniBarvy03 from '../../photos/img/gallery4/OstatniBarvy03.jpg';
import OstatniBarvy04 from '../../photos/img/gallery4/OstatniBarvy04.jpg';
import OstatniBarvy05 from '../../photos/img/gallery4/OstatniBarvy05.jpg';
import PhotoModel from '../../photos/PhotoModel';
import PhotosDialog from '../../photos/photosDialog/PhotosDialog';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Gallery4 = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\gallery\\gallery4"]);
  const photos: PhotoModel[] = [
    {
      Src: OstatniBarvy01,
      Alt: t("photo1Alt"),
      MainPhoto: true,
    },
    {
      Src: OstatniBarvy02,
      Alt: t("photo2Alt"),
      MainPhoto: false,
    },
    {
      Src: OstatniBarvy03,
      Alt: t("photo3Alt"),
      MainPhoto: false,
    },
    {
      Src: OstatniBarvy04,
      Alt: t("photo4Alt"),
      MainPhoto: false,
    },
    {
      Src: OstatniBarvy05,
      Alt: t("photo5Alt"),
      MainPhoto: false,
    },
  ];
  return (
    <PhotosDialog open={props.open} setOpen={props.setOpen} photos={photos} />
  );
};

export default Gallery4;
