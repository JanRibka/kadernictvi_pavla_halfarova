import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const BottomSideStyled = styled(Box)(
  ({ theme }) => `
  position: absolute !important;
  bottom: 0;
  z-index: 4;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;  
  border-bottom: 24px solid ${theme.palette.common.third.main};
`
);

export default BottomSideStyled;
