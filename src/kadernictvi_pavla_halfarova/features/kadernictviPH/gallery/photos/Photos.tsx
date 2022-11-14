import GridContainer from 'shared/components/gridContainer/GridContainer';

import Photo1 from './img/12.jpg';
import ImgStyled from './styledComponents/ImgStyled';
import ImgWrapperStyled from './styledComponents/ImgWrapperStyled';

const Photos = () => {
  return (
    <>
      {/* Row 1 */}
      <GridContainer>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled src={Photo1} alt='' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled src={Photo1} alt='' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled src={Photo1} alt='' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} lg={3}>
          <ImgStyled src={Photo1} alt='' />
        </ImgWrapperStyled>
      </GridContainer>
      {/* Row 2 */}
      <GridContainer>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled src={Photo1} alt='' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled src={Photo1} alt='' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled src={Photo1} alt='' />
        </ImgWrapperStyled>
        <ImgWrapperStyled xs={12} sm={6} md={3}>
          <ImgStyled src={Photo1} alt='' />
        </ImgWrapperStyled>
      </GridContainer>
    </>
  );
};

export default Photos;
