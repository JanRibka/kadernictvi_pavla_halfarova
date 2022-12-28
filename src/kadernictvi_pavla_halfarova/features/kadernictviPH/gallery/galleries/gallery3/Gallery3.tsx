import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import Blond01 from '../../photos/img/gallery3/Blond01.jpg';
import Blond02 from '../../photos/img/gallery3/Blond02.jpg';
import Blond03 from '../../photos/img/gallery3/Blond03.jpg';
import Blond04 from '../../photos/img/gallery3/Blond04.jpg';
import Blond05 from '../../photos/img/gallery3/Blond05.jpg';
import Blond06 from '../../photos/img/gallery3/Blond06.jpg';
import PhotoModel from '../../photos/PhotoModel';
import PhotosDialog from '../../photos/photosDialog/PhotosDialog';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Gallery3 = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\gallery\\gallery3"]);
  const photos: PhotoModel[] = [
    {
      Src: Blond01,
      Alt: t("photo1Alt"),
      MainPhoto: true,
    },
    {
      Src: Blond02,
      Alt: t("photo2Alt"),
      MainPhoto: false,
    },
    {
      Src: Blond03,
      Alt: t("photo3Alt"),
      MainPhoto: false,
    },
    {
      Src: Blond04,
      Alt: t("photo4Alt"),
      MainPhoto: false,
    },
    {
      Src: Blond05,
      Alt: t("photo5Alt"),
      MainPhoto: false,
    },
    {
      Src: Blond06,
      Alt: t("photo6Alt"),
      MainPhoto: false,
    },
  ];
  return (
    <PhotosDialog open={props.open} setOpen={props.setOpen} photos={photos} />
  );
};

export default Gallery3;
