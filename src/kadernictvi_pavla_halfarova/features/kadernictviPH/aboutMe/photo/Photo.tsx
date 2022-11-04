import pavlaHalfarova from './img/pavlaHalfarova.jpg';
import ImageWrapperStyled from './styledComponents/ImageWrapperStyled';

const Photo = () => {
  return (
    <ImageWrapperStyled>
      <img src={pavlaHalfarova} alt='Pavla Halfarová' />
    </ImageWrapperStyled>
  );
};

export default Photo;
