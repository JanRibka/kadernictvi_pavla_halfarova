import AppLoader from '../loader/AppLoader';
import SuspenseFallbackStyled from './styledComponents/SuspenseFallbackStyled';

const SuspenseFallback = () => {
  return (
    <SuspenseFallbackStyled>
      <AppLoader />
    </SuspenseFallbackStyled>
  );
};

export default SuspenseFallback;
