import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const IconWrapperStyled = styled(Box)(
  ({ theme }) => `
    color: ${theme.palette.common.third.main};
    height: 48px;
    width: 48px;

    svg {
        font-size: xxx-large;
    }
`
);

export default IconWrapperStyled;
