import CoverLetter from '../../img/cover-letter.png';
import BottomSideStyled from './StyledComponents/BottomSideStyled';
import EnvelopeIconStyled from './StyledComponents/EnvelopeIconStyles';
import ImageStyled from './StyledComponents/ImageStyled';
import LeftSideStyled from './StyledComponents/LeftSideStyled';
import RightSideStyled from './StyledComponents/RightSideStyled';
import TopSideStyled from './StyledComponents/TopSideStyled';

const EnvelopeIcon = () => {
  return (
    <EnvelopeIconStyled>
      <TopSideStyled className='top-side' />
      <LeftSideStyled />
      <ImageStyled className='image'>
        <img src={CoverLetter} alt='cover-letter'></img>
      </ImageStyled>
      <RightSideStyled />
      <BottomSideStyled />
    </EnvelopeIconStyled>
  );
};

export default EnvelopeIcon;
