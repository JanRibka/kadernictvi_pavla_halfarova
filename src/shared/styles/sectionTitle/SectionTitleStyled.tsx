import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SectionTitleStyled = styled(Typography)(
  ({ theme }) =>
    `
    &:before {
      width: 20px;
			height: 2px;
    }
    `
);

export default SectionTitleStyled;
