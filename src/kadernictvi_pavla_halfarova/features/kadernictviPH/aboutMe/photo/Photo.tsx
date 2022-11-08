import pavlaHalfarova from "./img/pavlaHalfarova.jpg";
import ImageWrapperStyled from "./styledComponents/ImageWrapperStyled";

const Photo = () => {
  // TODO: nastylovat ramecek tak, ať při hoveru nemusím měnit padding margin
  return (
    <ImageWrapperStyled>
      <img src={pavlaHalfarova} alt='Pavla Halfarová' loading='lazy' />
    </ImageWrapperStyled>
  );
};

export default Photo;
