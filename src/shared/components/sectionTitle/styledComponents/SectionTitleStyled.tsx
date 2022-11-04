import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const SectionTitleStyled = styled(Box)(
  ({ theme }) =>
    `
  margin-bottom: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .main-text {
    font-weight: 400;
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }

  & .secondary-text {
    font-family: "Caveat", cursive;
  }
`
);

export default SectionTitleStyled;
