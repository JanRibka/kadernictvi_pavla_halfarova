import { GoogleAnalyticsHelper } from "shared/helpers/googleAnalyticsHelper";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookIconStyled from "./styledComponents/FacebookIconStyled";
import InstagramIconStyled from "./styledComponents/InstagramIconStyled";
import SocialIconStyled from "./styledComponents/SocialIconStyled";

const SocialIcons = () => {
  // Constants
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  const HandleOnClick = (socialNetwork: string) => {
    googleAnalyticsHelper.SendEventToGA(
      "Kontakt",
      "Přechod do " + socialNetwork + " z kontaktů"
    );
  };

  return (
    <SocialIconStyled>
      <>
        {/* Facebook */}
        <FacebookIconStyled
          component='a'
          title='Facebook'
          href='https://www.facebook.com/profile.php?id=100088112567779'
          target='_blank'
          onClick={() => HandleOnClick("Facebooku")}
        >
          <FacebookIcon />
        </FacebookIconStyled>
        {/* Instagram */}
        <InstagramIconStyled
          component='a'
          title='Instagram'
          href='https://www.instagram.com/hairsalonph/'
          target='_blank'
          onClick={() => HandleOnClick("Instagramu")}
        >
          <InstagramIcon />
        </InstagramIconStyled>
      </>
    </SocialIconStyled>
  );
};

export default SocialIcons;
