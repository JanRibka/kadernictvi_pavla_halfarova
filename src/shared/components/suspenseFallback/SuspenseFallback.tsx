import AppLoader from '../loader/AppLoader';
import SuspenseFallbackStyled from './styledComponents/SuspenseFallbackStyled';

const SuspenseFallback = () => {
  //TODO: Dát tady logo
  return (
    <SuspenseFallbackStyled>
      <AppLoader />
    </SuspenseFallbackStyled>
  );
};

export default SuspenseFallback;
