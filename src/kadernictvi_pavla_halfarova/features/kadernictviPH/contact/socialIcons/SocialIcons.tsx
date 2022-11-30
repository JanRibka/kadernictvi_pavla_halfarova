import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import FacebookIconStyled from './styledComponents/FacebookIconStyled';
import InstagramIconStyled from './styledComponents/InstagramIconStyled';
import SocialIconStyled from './styledComponents/SocialIconStyled';

const SocialIcons = () => {
  return (
    <SocialIconStyled>
      <>
        {/* Facebook */}
        <FacebookIconStyled
          component='a'
          title='Facebook'
          href='https://www.facebook.com/profile.php?id=100088112567779'
          target='_blank'
        >
          <FacebookIcon />
        </FacebookIconStyled>
        {/* Instagram */}
        <InstagramIconStyled
          component='a'
          title='Instagram'
          href='https://www.instagram.com/hairsalonph/'
          target='_blank'
        >
          <InstagramIcon />
        </InstagramIconStyled>
      </>
    </SocialIconStyled>
  );
};

export default SocialIcons;
