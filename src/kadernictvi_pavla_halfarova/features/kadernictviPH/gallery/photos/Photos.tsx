import GridContainer from 'shared/components/gridContainer/GridContainer';

import Photo1 from './img/12.jpg';
import ImgStyled from './styledComponents/ImgStyled';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyled';

// TODO: Při scrolovani se budou fotky postupně zobrazovat
const Photos = () => {
  return (
    <>
      {/* Row 1 */}
      <GridContainer>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled src={Photo1} alt='' loading='lazy' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled src={Photo1} alt='' loading='lazy' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled src={Photo1} alt='' loading='lazy' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled src={Photo1} alt='' loading='lazy' />
        </ImgWrapperStyled>
      </GridContainer>
      {/* Row 2 */}
      <GridContainer>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled src={Photo1} alt='' loading='lazy' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled src={Photo1} alt='' loading='lazy' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled src={Photo1} alt='' loading='lazy' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled src={Photo1} alt='' loading='lazy' />
        </ImgWrapperStyled>
      </GridContainer>
    </>
  );
};

export default Photos;
