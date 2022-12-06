import HairSalonPHLogo from "../../img/logo/logo_hairsalon_ph.jpg";
import SuspenseFallbackStyled from "./styledComponents/SuspenseFallbackStyled";

const SuspenseFallback = () => {
  //TODO: Dát tady logo
  return (
    <SuspenseFallbackStyled>
      {<img src={HairSalonPHLogo} alt='Hair Salon PH - Logo'></img>}
    </SuspenseFallbackStyled>
  );
};

export default SuspenseFallback;
