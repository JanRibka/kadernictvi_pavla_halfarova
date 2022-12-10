import Images from "../Images";
import SwiperSlideStyled from "./swiper/swiperSlide/styledComponents/SwiperSlideStyled";

const RenderPhotos = () => {
  const x = () => {
    let result: JSX.Element[] = [];

    Images.forEach((image, index) => {
      result.push(
        <SwiperSlideStyled key={"dialogImage_" + index}>
          <div className='swiper-zoom-container'>
            <img src={image.SrcDialog} alt={image.Alt} />
          </div>
        </SwiperSlideStyled>
      );
    });

    return result;
  };

  return <>{x()}</>;
};

export default RenderPhotos;
