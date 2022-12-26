import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import Produkt01 from '../../photos/img/gallery1/Produkt01.jpg';
import Produkt02 from '../../photos/img/gallery1/Produkt02.jpg';
import Produkt03 from '../../photos/img/gallery1/Produkt03.jpg';
import Produkt04 from '../../photos/img/gallery1/Produkt04.jpg';
import Produkt05 from '../../photos/img/gallery1/Produkt05.jpg';
import Produkt06 from '../../photos/img/gallery1/Produkt06.jpg';
import PhotoModel from '../../photos/PhotoModel';
import PhotosDialog from '../../photos/photosDialog/PhotosDialog';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Gallery1 = (props: IProps) => {
  // Consts
  const { t } = useTranslation(["kadernictviPH\\gallery\\gallery1"]);
  const photos: PhotoModel[] = [
    {
      Src: Produkt01,
      Alt: t("photo1Alt"),
      MainPhoto: true,
    },
    {
      Src: Produkt02,
      Alt: t("photo2Alt"),
      MainPhoto: false,
    },
    {
      Src: Produkt03,
      Alt: t("photo3Alt"),
      MainPhoto: false,
    },
    {
      Src: Produkt04,
      Alt: t("photo4Alt"),
      MainPhoto: false,
    },
    {
      Src: Produkt05,
      Alt: t("photo5Alt"),
      MainPhoto: false,
    },
    {
      Src: Produkt06,
      Alt: t("photo6Alt"),
      MainPhoto: false,
    },
  ];
  return (
    <PhotosDialog open={props.open} setOpen={props.setOpen} photos={photos} />
  );
};

export default Gallery1;
